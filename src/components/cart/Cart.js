import { useState } from "react";
import { Link } from "react-router-dom";
import SetBlack from "../../assets/images/SetBlack.png";
import EarthToneShirt1 from "../../assets/images/EarthToneShirt1.jpg";
import ProductCart from "./ProductCart";

function Cart() {

  const dataFrommOrderItem = [
    {
      product: {
        productId: 1,
        name: "Black Slacks for men styles",
        price: 690,
        productPic: SetBlack,
      },
    },
    {
      product: {
        productId: 2,
        name: "Earth-tone Shirt",
        price: 450,
        productPic: EarthToneShirt1,
      },
    },
  ];

  const [totalPrice , setTotalPrice] = useState(0)
  console.log(totalPrice)

  
  //   const { id } = useParams();
  //   const [userProfile, setUserProfile] = useState(null);

  //   useEffect(() => {
  //     const fetchUserProfile = async () => {
  //       try {
  //         const res = await axios.get("/users/" + id);
  //         console.log(res.data.user)
  //         setUserProfile(res.data.user);
  //       } catch (err) {
  //         console.log(err);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };
  //     fetchUserProfile();
  //   }, [id]);
  return (
    <nav>
      <button
        className="navbar-toggler "
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="offcanvas offcanvas-end"
        style={{ width: "600px" }}
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header black-bottom-header">
          <h4
            className="offcanvas-title fw-bold "
            style={{ marginLeft: "25%" }}
            id="offcanvasNavbarLabel"
          >
            My Shopping Bag
          </h4>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 mt-3">
            {/* 1 item in cart */}
            {dataFrommOrderItem.map((item, index) => {
              return (
                <ProductCart item={item} index={index} setTotalPrice={setTotalPrice}/>
              );
            })}
            <div className="black-bottom-header border-2 mt-4 ms-1 me-1 mb-4"></div>
          </ul>
          <h5 className="fw-bold">Payment Summary</h5>
          <div className="d-flex justify-content-between">
            <p>Subtotal</p>
            <p className="me-3">{totalPrice} THB</p>
            <p className="me-3">40 THB</p>
          </div>

          <button className="btn btn-dark " type="submit">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Cart;
