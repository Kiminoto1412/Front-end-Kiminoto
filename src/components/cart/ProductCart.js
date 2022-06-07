import { useRef, useState } from "react";

function ProductCart({ item, index, setSubTotalPrice }) {
  const [size, setSize] = useState("S");
  // const [quantity, setQuantity] = useState(+"0");
  const [check, setCheck] = useState(false);
  const [productPrice, setProductPrice] = useState(0);
  const quantityEl = useRef(0);

  const handleCheckInput = (e) => {
    // if (!check) {
      setProductPrice(+quantityEl.current.value * item.product.price);
    // }
    // setProductPrice((prev) => prev - quantityEl.value * item.product.price);
    // setQuantity(quantityEl.value);

    // console.log(quantityEl.value)
    // console.log(quantityEl)
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
    <li className="nav-item mb-3" >
      <div className="d-flex align-items-center">
        <button className=" blank-box me-3" onClick={handleButtonInput}>
          {check ? <i class="fa-solid fa-check"></i> : null}
        </button>
        <img
          src={item.product.productPic}
          style={{ width: "150px", height: "150px" }}
          alt="productPic"
        />
        <div className="flex-grow-1">
          <div className="d-flex justify-content-between">
            <p className="ms-3">{item.product.name}</p>
            <p className="fw-bold me-3">{item.product.price} THB</p>
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
                {size}
              </div>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <p
                    className="dropdown-item  mb-2 "
                    onClick={() => setSize("S")}
                  >
                    S
                  </p>
                </li>
                <li>
                  <p
                    className="dropdown-item mb-2 "
                    onClick={() => setSize("M")}
                  >
                    M
                  </p>
                </li>
                <li>
                  <p
                    className="dropdown-item mb-2"
                    onClick={() => setSize("L")}
                  >
                    L
                  </p>
                </li>
                <li>
                  <p
                    className="dropdown-item mb-2"
                    onClick={() => setSize("XL")}
                  >
                    XL
                  </p>
                </li>
                <li>
                  <p
                    className="dropdown-item mb-2"
                    onClick={() => setSize("XXL")}
                  >
                    XXL
                  </p>
                </li>
                <li>
                  <p
                    className="dropdown-item mb-2"
                    onClick={() => setSize("XXXL")}
                  >
                    XXXL
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-muted ms-5 mb-0">Quantity</p>
              <input
                className=" ms-5"
                style={{ width: "40px" }}
                ref={quantityEl}
                onChange={handleCheckInput}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProductCart;
