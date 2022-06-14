import { Carousel } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "../../config/axios";

function ProductBanner() {
  const location = useLocation();
  let { productId } = useParams();

  const [product, setProduct] = useState([]);
  const [status, setStatus] = useState("");
  const [quantity, setQuantity] = useState("1");

  useEffect(() => {
    setStatus("pending");
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`/products/${productId}`);
        setProduct(res.data.product);
        setStatus("resolve");
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);

  let objProduct = product[0];
  // console.log(objProduct);
  // console.log(objProduct.sizeGuide);
  //  console.log(typeof objProduct)
  //  console.log(JSON.stringify(objProduct.productPic))
  //  console.log(typeof JSON.stringify(objProduct.productPic))
  //  console.log(JSON.parse(JSON.stringify(objProduct.productPic)))
  //  console.log(typeof JSON.parse(JSON.stringify(objProduct.productPic)))
  // const parseProductPic = JSON.parse(objProduct.productPic)
  // console.log(parseProductPic)
  //  console.log(JSON.parse(objProduct.productPic))
  //  console.log(typeof JSON.parse(objProduct.productPic))
  //  let imgProduct = objProduct.productPic
  //  console.log(imgProduct)

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

  if (status === "pending") {
    return <p>Loading</p>;
  }
  return (
    <>
      <form>
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
                <input
                  type="color"
                  id="head"
                  name="head"
                  defaultValue="#B29385"
                  onChange={(e) => e.target.value}
                />
                <input
                  type="color"
                  className="ms-3"
                  id="head"
                  name="head"
                  defaultValue="#D0CFCF"
                  onChange={(e) => e.target.value}
                />
                <input
                  type="color"
                  className="ms-3"
                  id="head"
                  name="head"
                  defaultValue="#D0CFCF"
                  onChange={(e) => e.target.value}
                />
              </div>
              <div className="d-flex mt-3 ">
                <p className="fw-bold m-0">Size : </p>
                <p className="ms-1 mb-0">Select a size</p>
              </div>
              <div className="mt-2">
                <button className="button-size-grey "> S</button>
                <button className="button-size-grey ms-2 "> M</button>
                <button className="button-size-grey ms-2"> L</button>
                <button className="button-size-grey ms-2"> XL</button>
                <button className="button-size-grey ms-2"> XXL</button>
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
