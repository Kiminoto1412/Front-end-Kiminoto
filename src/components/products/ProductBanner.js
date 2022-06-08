import { Carousel } from "react-bootstrap";
import { useState } from "react";
import EarthToneShirt1 from "../../assets/images/EarthToneShirt1.jpg";
import EarthToneShirt2 from "../../assets/images/EarthToneShirt2.jpg";
import EarthToneShirt3 from "../../assets/images/EarthToneShirt3.jpg";
import sizeGuidePic from "../../assets/images/sizeGuidePic.png";
import { Link, useLocation } from "react-router-dom";

function ProductBanner() {
  const location = useLocation();
  // let locatiobVariable =location.pathname
  console.log(location.pathname);


  const data = [
    { src: EarthToneShirt1 },
    { src: EarthToneShirt2 },
    { src: EarthToneShirt1 },
    { src: EarthToneShirt2 },
  ];
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
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {/* Product Pic Banner */}
          <div className="col-7 me-4">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              {data.map((item, index) => {
                return (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={item.src}
                      alt="First slide"
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
            <div className=" d-flex mt-3 gx-5" style={{ gap: 10 }}>
              {data.map((item, index) => {
                return (
                  <div
                    className=""
                    key={index}
                    onClick={() => handleSelect(index)}
                  >
                    <img
                      src={item.src}
                      className="card-img-top img-fluid"
                      style={{ height: "100%", width: "100%" }}
                      alt="EarthToneShirt1"
                    />
                  </div>
                );
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
            <div className="mt-3">
              <button className="button-size-grey "> -</button>
              <span className="m-3 fw-bold">1</span>
              <button className="button-size-grey "> +</button>
            </div>
            <div className="d-flex align-items-center mt-3">
              <button
                type="btn"
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
                  src={sizeGuidePic}
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
                <p className="mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              ) : null}
            </div>
            <div className="border-top-grey"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductBanner;
