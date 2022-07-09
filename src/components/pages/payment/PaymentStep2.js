import axios from "../../../config/axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import paymentCard from "../../../assets/images/paymentCard.png";
import UploadImage from "../form/UploadImage";
import UploadSlip from "../form/UploadSlip";
import { ErrorContext } from "../../../context/ErrorContext";

function PaymentStep2() {
  let navigate = useNavigate();
  const { setError } = useContext(ErrorContext);

  const [slipPic, setSlipPic] = useState();
  const [orderId, setOrderId] = useState("");
  const [orderTotalPrice, setOrderTotalPrice] = useState("");
  const [bankAccount1, setBankAccount1] = useState({});
  const [bankAccount2, setBankAccount2] = useState({});

  // console.log(slipPic.name)
  console.log(slipPic);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await axios.get(`/orders`);
        const orders = res.data.orders[0];
        // console.log(orders);
        setOrderId(orders.id);
        setOrderTotalPrice(orders.totalPrice);
        // console.log(orders.totalPrice)
      } catch (err) {
        console.log(err);
      }
    };
    fetchOrder();
  }, []);

  useEffect(() => {
    const fetchBankAccount = async () => {
      try {
        const res = await axios.get(`/bankaccount`);
        const bankAccountArr = res.data.bankAccount;
        setBankAccount1(bankAccountArr[0]);
        console.log(bankAccountArr[0]);
        setBankAccount2(bankAccountArr[1]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBankAccount();
  }, []);

  const bankAccountScript1 = `${bankAccount1.bankAccount} (Bank : ${bankAccount1.bankType} )`;
  const bankAccountScript2 = `${bankAccount2.bankAccount} (Bank : ${bankAccount2.bankType} , ${bankAccount2.bankName})`;
  const bankAccountScript = `${bankAccountScript1}      |      ${bankAccountScript2}`;
  const bankNameScript = ` ${bankAccount1.bankName}    |      ${bankAccount1.bankName}`;

  const handleSubmitEditAddress = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("orderId", orderId);
      formData.append("paymentSlip", slipPic);

      await axios.post("/payments", formData);
      navigate("/PaymentMethod/Step3");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmitEditAddress}>
        <div className="container mt-5 mx-5">
          <div className="d-flex align-items-center">
            <h5 className="fw-bold m-0">Payment Method</h5>
            <img
              src={paymentCard}
              className="img-fluid"
              style={{ width: "32px" }}
              alt="bookShipping"
            />
          </div>

          {/* block1 */}
          <div className="bg-grey-plus-border-round">
            <div className="form-group mt-3 ms-4 me-4">
              <label htmlFor="addressName">Order number</label>
              <input
                type="text"
                className="form-control mt-3"
                id="addressName"
                placeholder="order number"
                style={{ backgroundColor: "#F6F6F6" }}
                value={`KM - ${orderId}`}
              />
            </div>

            <div className="form-group mt-3 ms-4 me-4">
              <label htmlFor="addressName">Bank name</label>
              <input
                type="text"
                className="form-control mt-3"
                id="addressName"
                placeholder="bank name"
                style={{ backgroundColor: "#F6F6F6" }}
                value={bankNameScript}
              />
            </div>

            <div className="form-group mt-3 ms-4 me-4">
              <label htmlFor="addressName">Bank account</label>
              <input
                type="text"
                className="form-control mt-3"
                id="addressName"
                placeholder="bank account"
                style={{ backgroundColor: "#F6F6F6" }}
                value={bankAccountScript}
              />
            </div>

            <div className="form-group mt-3 ms-4 me-4">
              <label htmlFor="addressName">Transfer Amount</label>
              <input
                type="text"
                className="form-control mt-3"
                id="addressName"
                placeholder="transfer amount "
                style={{ backgroundColor: "#F6F6F6" }}
                value={`${orderTotalPrice} THB`}
              />
            </div>

            <div className="form-group mt-3 ms-4 me-4">
              <label htmlFor="addressName">Proof of transaction</label>

              <input
                type="file"
                className="form-control mt-3"
                style={{ backgroundColor: "#F6F6F6" }}
                onChange={(e) => {
                  setSlipPic(e.target.files[0]);
                }}
              />
            </div>
          </div>
        </div>
        <div className="border-top-black mt-5"></div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-dark mt-5 w-25 text-center">
            PAYMENT
          </button>
        </div>
      </form>
    </>
  );
}

export default PaymentStep2;
