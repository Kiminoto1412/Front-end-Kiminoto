import { useNavigate } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "../../config/axios";
import { ProductContext } from "../../context/ProductContext";
import { ErrorContext } from "../../context/ErrorContext";

function ProductBanner() {
  const location = useLocation();
  let navigate = useNavigate();
  let { productId } = useParams();

  const [product, setProduct] = useState([]);
  const [productOptionIdAr, setProductOptionIdAr] = useState([]);
  const [status, setStatus] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [colorAr, setColorAr] = useState("");
  const [color, setColor] = useState("");
  const [sizeAr, setSizeAr] = useState("");
  const [size, setSize] = useState("");
  const [filteredProductOption, setFilteredProductOption] = useState([]);
  const [productOptionId, setProductOptionId] = useState("");

  const { addToBag } = useContext(ProductContext);
  const { setError } = useContext(ErrorContext);

  useEffect(() => {
    setStatus("pending");
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`/products/${productId}`);
        console.log(res.data.product);
        if (res.data.product) setProduct(res.data.product);
        // console.log(product);

        setStatus("resolve");
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);
  // console.log(product);

  useEffect(() => {
    const fetchColor = async () => {
      try {
        const arrayColor = product[0]?.ProductOptions.map((el, idx) => {
          return el.color;
        });
        // console.log(arrayColor)
        const uniqueArrayColor = [...new Set(arrayColor)];
        setColorAr(uniqueArrayColor);
        // console.log(color);
      } catch (err) {
        console.log(err);
      }
    };
    if (product.length > 0) {
      fetchColor();
    }
  }, [product]);

  useEffect(() => {
    const fetchSize = async () => {
      try {
        const arrayColor = product[0]?.ProductOptions.map((el, idx) => {
          return el.size;
        });
        // console.log(arrayColor)
        const uniqueArraySize = [...new Set(arrayColor)];
        setSizeAr(uniqueArraySize);
        // console.log(color);
      } catch (err) {
        console.log(err);
      }
    };
    if (product.length > 0) {
      fetchSize();
    }
  }, [color]);

  useEffect(() => {
    const fetchProductOption = async () => {
      try {
        const arrayProductOption = product[0]?.ProductOptions;

        // console.log(arrayProductOption);
        setProductOptionIdAr(arrayProductOption);
      } catch (err) {
        console.log(err);
      }
    };
    if (product.length > 0) {
      fetchProductOption();
    }
  }, [color]);

  const handleSubmitAddToBag = async (e) => {
    try {
      e.preventDefault();

      // console.log("first")
      // console.log(product);
      // console.log(quantity);
      // console.log(product[0].ProductOptions);

      await addToBag({
        productOptionId,
        quantity,
      });
      // navigate("/")
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const [index, setIndex] = useState(0);

  const [sizeGuide, setSizeGuide] = useState(false);
  const [productDes, setProductDes] = useState(false);

  const handleSizeGuideButton = () => {
    setSizeGuide((prev) => !prev);
  };

  const handleProductDesButton = () => {
    setProductDes((prev) => !prev);
  };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleSelectColor = (colorHex) => {
    // console.log(colorHex);
    setColor(colorHex);
    // console.log(color);

    const filteredProduct = product[0]?.ProductOptions.filter((el) => {
      return el.color === colorHex;
    });
    setFilteredProductOption(filteredProduct);
  };

  console.log(color);
  console.log(productOptionId);

  if (status === "pending") {
    return <p>Loading</p>;
  }
  return (
    <>
      <form onSubmit={handleSubmitAddToBag}>
        <div className="container mt-5">
          <div className="row">
            {/* Product Pic Banner */}
            <div className="col-7 me-4">
              <Carousel activeIndex={index} onSelect={handleSelect}>
                {product.map((el, index) => {
                  return JSON.parse(el.productPic).map((item, idx) => {
                    return (
                      <Carousel.Item key={idx}>
                        <img
                          className="d-block w-100"
                          src={item}
                          alt="First slide"
                        />
                      </Carousel.Item>
                    );
                  });
                })}
              </Carousel>
              <div className=" d-flex mt-3 gx-5" style={{ gap: 10 }}>
                {product.map((el, index) => {
                  return JSON.parse(el.productPic).map((item, idx) => {
                    return (
                      <div
                        className=""
                        key={idx}
                        onClick={() => handleSelect(idx)}
                      >
                        <img
                          src={item}
                          className="card-img-top img-fluid"
                          style={{ height: "100%", width: "100%" }}
                          alt="EarthToneShirt1"
                        />
                      </div>
                    );
                  });
                })}
              </div>
            </div>
            {/* Product detail banner */}
            <div className="col-4">
              <div className="d-flex justify-content-between">
                <h5>Kiminoto.Official</h5>
                <Link
                  to="/EditProduct/:productId"
                  className={`text-dark text-decoration-none ${
                    location.pathname === "/Product/EditProduct/:productId"
                      ? "fw-bold"
                      : ""
                  }`}
                >
                  <i
                    className="fa-solid fa-pencil ms-3"
                    style={{
                      fontSize: 12,
                      color:
                        location.pathname === "/Profile/EditAddress/:customerId"
                          ? "black"
                          : "grey",
                    }}
                  ></i>
                </Link>
              </div>
              <p>Earth tone T-shirts</p>
              <p className="fw-bold">450 THB</p>
              <label htmlFor="head">Color :</label>
              <div className="d-flex ">
                {console.log(colorAr)}
                {colorAr ? (
                  <>
                    {colorAr?.map((el, idx) => (
                      <>
                        <div
                          className="d-flex align-items-center me-1 mt-2"
                          type="button"
                          id={idx}
                          onClick={() => handleSelectColor(el)}
                        >
                          <div className="border-round-outside">
                            <div
                              className="color-round-inside "
                              style={{ backgroundColor: el }}
                            ></div>
                          </div>
                        </div>
                      </>
                    ))}
                  </>
                ) : (
                  <></>
                )}
                {/* {color?.map((el, idx) => {
                  <input
                    type="color"
                    id={idx}
                    name={idx}
                    defaultValue={el}
                    onChange={(e) => e.target.value}
                  />;
                })} */}
              </div>
              <div className="d-flex mt-3 ">
                <p className="fw-bold m-0">Size : </p>
                <p className="ms-1 mb-0">Select a size</p>
              </div>
              <div className="mt-2">
                {filteredProductOption.map((el) => {
                  console.log(el);
                  return (
                    <>
                      <button
                        className="button-size-grey ms-2 "
                        onClick={() => setProductOptionId(el.id)}
                      >
                        {el.size}
                      </button>
                    </>
                  );
                })}

                {/* <button className="button-size-grey " disabled={color}>
                  S
                </button>
                <button className="button-size-grey ms-2 "> M</button>
                <button className="button-size-grey ms-2"> L</button>
                <button className="button-size-grey ms-2"> XL</button>
                <button className="button-size-grey ms-2"> XXL</button> */}
              </div>
              <div className="mt-3 d-flex align-items-center">
                <button
                  className="button-size-grey "
                  onClick={(e) => {
                    e.preventDefault();
                    if (quantity > 0) {
                      setQuantity(+quantity - 1);
                    }
                  }}
                >
                  -
                </button>
                <input
                  type="text"
                  className="ms-1 me-1 fw-bold form-control  text-center"
                  style={{ width: 40 }}
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />

                <button
                  className="button-size-grey"
                  onClick={(e) => {
                    e.preventDefault();
                    setQuantity(+quantity + 1);
                  }}
                >
                  +
                </button>
              </div>
              <div className="d-flex align-items-center mt-3">
                <button
                  type="submit"
                  className="btn btn-dark w-50  text-center shadow-none"
                >
                  ADD TO BAG
                </button>
                <button className="button-size-grey ms-2 ">
                  <i className="fa-regular fa-heart"></i>
                </button>
              </div>
              {/* Size Guide */}
              <div className="border-top-grey mt-4">
                <div className="d-flex justify-content-between align-items-center mt-3 ">
                  <p>Size Guide</p>
                  <p
                    type="button"
                    className="me-2 ps-2 pe-2"
                    onClick={handleSizeGuideButton}
                  >
                    {sizeGuide ? "-" : "+"}
                  </p>
                </div>
                {sizeGuide ? (
                  <img
                    className="d-block w-100 mt-3 "
                    src={product[0].sizeGuide}
                    alt="First sizeGuidePic"
                  />
                ) : null}
              </div>
              {/* Product Description */}
              <div className="border-top-grey ">
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <p className="">Product Description</p>
                  <p
                    type="button"
                    className="me-2 ps-2 pe-2"
                    onClick={handleProductDesButton}
                  >
                    {productDes ? "-" : "+"}
                  </p>
                </div>
                {productDes ? (
                  <p className="mt-3">{product[0].productDescription}</p>
                ) : null}
              </div>
              <div className="border-top-grey"></div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default ProductBanner;
