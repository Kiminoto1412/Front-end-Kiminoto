import { useState } from "react";

function ProductCart({ item, index, setTotalPrice }) {
  const [size, setSize] = useState("S");
  const [quantity, setQuantity] = useState(+"0");

  const handleQuantityInput = (e) => {
    setTotalPrice((prev) => prev - quantity * item.product.price);
    setQuantity(e.target.value);

    setTotalPrice((prev) => prev + e.target.value * item.product.price);
  };

  return (
    <li className="nav-item mb-3" key={index}>
      <div className="d-flex align-items-center">
        <p className=" blank-box me-3" />
        <img
          src={item.product.productPic}
          style={{ width: "150px", height: "150px" }}
          alt="productPic"
        />
        <div>
          <div className="d-flex">
            <p className="ms-3">{item.product.name}</p>
            <p className="fw-bold ms-5">{item.product.price} THB</p>
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
                className="form-control ms-5"
                style={{ width: "40px" }}
                value={quantity}
                onChange={handleQuantityInput}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProductCart;