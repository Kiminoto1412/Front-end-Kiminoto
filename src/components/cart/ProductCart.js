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
}) {
  console.log(JSON.parse(productPic)[0]);
  console.log(size);
  const [selectedSize, setSelectedSize] = useState(size);
  // const [quantity, setQuantity] = useState(+"0");
  const [check, setCheck] = useState(false);
  const [productPrice, setProductPrice] = useState(price);
  const [newQuantity, setNewQuantity] = useState(quantity);
  const quantityEl = useRef(0);

  // console.log(quantity)
  console.log(productOptionId);

  // แตกกกกกกก
  // useEffect(() => {
  //   const updateQuantity = async () => {
  //     try {
  //       await axios.patch("/cartItems", {
  //         productOptionId,
  //         quantity: newQuantity,
  //       });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   if (newQuantity > 0) {
  //     updateQuantity();
  //   }
  // }, [newQuantity]);

  const handleChangeQuantity = (e) => {
    setNewQuantity(e.target.value);
    console.log(newQuantity);
    // if (!check) {
    // setProductPrice(+quantityEl.current.value * price);
    setProductPrice(newQuantity * price);
    console.log(productPrice);
    // }
    // setProductPrice((prev) => prev - quantityEl.value * item.product.price);
    // setQuantity(quantityEl.value);

    // console.log(quantityEl.value)
    // console.log(quantityEl)
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

      setSubTotalPrice((prev) => prev + productPrice);
    }
    if (check && +quantityEl.current.value !== 0) {
      setCheck(false);

      setSubTotalPrice((prev) => prev - productPrice);
    }
    console.log(productPrice);
  };

  return (
    <li className="nav-item mb-3">
      <div className="d-flex align-items-center">
        <button className=" blank-box me-3" onClick={handleButtonInput}>
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
                // ref={quantityEl}
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
