import { CartContext } from "../../context/CartContext";
import { ErrorContext } from "../../context/ErrorContext";

import { useContext, useEffect, useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import ProductCart from "./ProductCart";
import axios from "../../config/axios";

function Cart() {
  let navigate = useNavigate();

  const [subTotalPrice, setSubTotalPrice] = useState(0);
  const [cartItemArray, setCartItemArray] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const express = 40;

  const { addToOrder } = useContext(CartContext);
  const { setError } = useContext(ErrorContext);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get("/cartItems/");

        // console.log(res.data.cartItems)
        const newCartItemArray = res.data.cartItems.map((item) => {
          const newItem = { ...item, isCheck: false };
          return newItem;
        });
        setCartItemArray(newCartItemArray);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCart();
  }, []);

  useEffect(() => {
    // if .length > 0 เพื่อดักไม่ให้useEffectนี้ทำรอบแรก เผื่อ cartItemArray จากอันบนเอาของมาไม่ทัน
    if (cartItemArray.length > 0) {
      let totalCart = cartItemArray.reduce((acc, cur) => {
        if (cur.isCheck) {
          let totalPriceItem = cur.ProductOption.Product.price * cur.quantity;
          return acc + totalPriceItem;
        } else {
          return acc;
        }
      }, 0);
      setSubTotalPrice(totalCart);
      setTotalPrice(totalCart + 40);
    }
  }, [cartItemArray]);

  const handleSubmitAddToOrder = async (e) => {
    try {
      e.preventDefault();

      const cloneCartItemArray = [...cartItemArray];
      const cartItemIscheckTrue = cloneCartItemArray.filter(
        (el) => el.isCheck == true
      );
      const cartItemsIds = cartItemIscheckTrue.map((el) => {
        if (el.isCheck === true) {
          return el.id;
        }
      });

      await addToOrder({
        deliveryPrice: express,
        totalPrice,
        cartItemsIds,
      });
      navigate("/PaymentMethod/Step1")
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <nav>
      <form onSubmit={handleSubmitAddToOrder}>
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
              {cartItemArray.length > 0 ? (
                <>
                  {cartItemArray?.map((item, index) => {
                    return (
                      <ProductCart
                        key={index}
                        item={item}
                        index={index}
                        cartItemId={item.id}
                        productOptionId={item.ProductOption.id}
                        name={item.ProductOption.Product.name}
                        price={item.ProductOption.Product.price}
                        quantity={item.quantity}
                        productPic={item.ProductOption.Product.productPic}
                        size={item.ProductOption.size}
                        setSubTotalPrice={setSubTotalPrice}
                        subTotalPrice={subTotalPrice}
                        cart={cartItemArray}
                        setCart={setCartItemArray}
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
              <p>Total</p>
              <p className="me-3">{totalPrice} THB</p>
            </div>
            <div className="text-center">
          

            <button
            className="btn btn-dark "
            type="submit"
            disabled ={cartItemArray.length > 0 ?false :true }
            // to="/PaymentMethod/Step1"
            >
                PROCEED TO CHECKOUT
              </button>
              
            </div>
          </div>
        </div>
      </form>
    </nav>
  );
}

export default Cart;
