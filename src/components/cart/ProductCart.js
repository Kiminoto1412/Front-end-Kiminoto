import axios from "axios";
import { useEffect, useRef, useState } from "react";

function ProductCart({
  item,
  index,
  productOptionId,
  name,
  price,
  quantity,
  productPic,
  size,
  cartItemId,
  setSubTotalPrice,
  subTotalPrice,
  cart,
  setCart,
}) {
  // console.log(JSON.parse(productPic)[0]);
  // console.log(size);
  const [selectedSize, setSelectedSize] = useState(size);
  const [check, setCheck] = useState(item.isCheck);
  const [productPrice, setProductPrice] = useState(price);
  const [newQuantity, setNewQuantity] = useState(quantity);
  const quantityEl = useRef(0);


  useEffect(() => {
    const updateQuantity = async () => {
      try {
        await axios.patch("/cartItems", {
          productOptionId,
          quantity: newQuantity,
        });
      } catch (err) {
        console.log(err);
      }
      // console.log("aaaaaaaaa", newQuantity);
    };
    if (newQuantity > 0) {
      updateQuantity();
    }
  }, [newQuantity]);


  const handleChangeQuantity = (e) => {
    setNewQuantity(e.target.value);
    const gap = e.target.value - quantity;
    const currentTotal = gap * price;
    setProductPrice(currentTotal);
    const newCartItemArray = [...cart].map((item) => {
      if (item.id === cartItemId) {
        const newItem = { ...item, quantity: e.target.value };
        return newItem;
      }else{
        return {...item}
      }
    });
    setCart(newCartItemArray);
  };

  const deleteCartItem = async () => {
    try {
      await axios.delete("/cartItems/" + cartItemId);
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleButtonInput = (e) => {
    if (!check) {
      setCheck(true);
      const newCart = [...cart];
      newCart[index] = { ...item, isCheck: true };
      setCart(newCart);
    }
    if (check && +quantityEl.current.value !== 0) {
      setCheck(false);
      const newCart = [...cart];
      newCart[index] = { ...item, isCheck: false };
      setCart(newCart);

    }
  };

  return (
    <li className="nav-item mb-3">
      <div className="d-flex align-items-center">
        <button className=" blank-box me-3" type="button" onClick={handleButtonInput}>
          {check ? <i class="fa-solid fa-check"></i> : null}
        </button>
        <img
          src={JSON.parse(productPic)[0]}
          style={{ width: "150px", height: "150px" }}
          alt="productPic"
        />
        <div className="flex-grow-1">
          <div className="text-end mb-2 p-0">
            <button onClick={deleteCartItem}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="d-flex justify-content-between">
            <h5 className="ms-3 fw-bold">{name}</h5>
            <p className="fw-bold me-3">{price} THB</p>
          </div>
          <div className="d-flex">
            <div>
              <p className="text-muted ms-3 mb-0">Size</p>
              <div
                className="nav-link dropdown-toggle ms-3 text-dark"
                to="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {selectedSize}
              </div>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <p
                    className="dropdown-item  mb-2 "
                    onClick={() => setSelectedSize("S")}
                  >
                    S
                  </p>
                </li>
                <li>
                  <p
                    className="dropdown-item mb-2 "
                    onClick={() => setSelectedSize("M")}
                  >
                    M
                  </p>
                </li>
                <li>
                  <p
                    className="dropdown-item mb-2"
                    onClick={() => setSelectedSize("L")}
                  >
                    L
                  </p>
                </li>
                <li>
                  <p
                    className="dropdown-item mb-2"
                    onClick={() => setSelectedSize("XL")}
                  >
                    XL
                  </p>
                </li>
                <li>
                  <p
                    className="dropdown-item mb-2"
                    onClick={() => setSelectedSize("XXL")}
                  >
                    XXL
                  </p>
                </li>
                <li>
                  <p
                    className="dropdown-item mb-2"
                    onClick={() => setSelectedSize("XXXL")}
                  >
                    XXXL
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-muted ms-5 mb-0">Quantity</p>
              {/* <input
                className=" ms-5"
                style={{ width: "40px" }}
                ref={quantityEl}
                onChange={handleCheckInput}
              ></input> */}
              <input
                className=" ms-5"
                style={{ width: "40px" }}
                value={newQuantity}
                onChange={handleChangeQuantity}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProductCart;
