import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SetBlack from "../../assets/images/SetBlack.png";
import EarthToneShirt1 from "../../assets/images/EarthToneShirt1.jpg";
import ProductCart from "./ProductCart";
import axios from "../../config/axios";
import { AuthContext } from "../../context/AuthContext";

function Cart() {
  const { user } = useContext(AuthContext);
  const [subTotalPrice, setSubTotalPrice] = useState(0);
  const [cartItemArray, setCartItemArray] = useState([]);
  // const [productName , setProductName] = useState("")
  // const [size , setSize] = useState("")
  // const [price , setPrice] = useState("")
  // const [productPic , setProductPic] = useState("")
  // const [quantity , setQuantity] = useState(1)

  // console.log(user)
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get("/cartItems/");
        console.log(res.data.cartItems);
        setCartItemArray(res.data.cartItems);
        console.log(cartItemArray);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCart();
  }, []);


  const express = 40;
  let totalPrice = subTotalPrice + express;

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
            {cartItemArray.length >0 ? (
              <>
                {cartItemArray?.map((item, index) => {
                  return (
                    <ProductCart
                      key={index}
                      item={item}
                      index={index}
                      name={item.ProductOption.Product.name}
                      price={item.ProductOption.Product.price}
                      quantity={item.quantity}
                      productPic={item.ProductOption.Product.productPic}
                      size={item.ProductOption.size}
                      setSubTotalPrice={setSubTotalPrice}
                    />
                  );
                })}
              </>
            ) : (
              <div></div>
            )}
            <div className="black-bottom-header border-2 mt-4 ms-1 me-1 mb-4"></div>
          </ul>
          <h5 className="fw-bold">Payment Summary</h5>
          <div className="d-flex justify-content-between">
            <p>Subtotal</p>
            <p className="me-3">{subTotalPrice} THB</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Express</p>
            <p className="me-3">{express} THB</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Express</p>
            <p className="me-3">{totalPrice} THB</p>
          </div>
          <div className="text-center">
            <Link
              className="btn btn-dark "
              type="submit"
              to="/PaymentMethod/Step1"
            >
              PROCEED TO CHECKOUT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Cart;
