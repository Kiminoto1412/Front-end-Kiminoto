import { Carousel, Spinner } from "react-bootstrap";
import { useContext, useState } from "react";
import EarthToneShirt1 from "../../../assets/images/EarthToneShirt1.jpg";
import EarthToneShirt2 from "../../../assets/images/EarthToneShirt2.jpg";
// import sizeGuidePic from "../../assets/images/sizeGuidePic.png";
import EditSIzeColor from "../product/editProduct/EditSIzeColor";
import UploadSizeGuideImg from "../editProduct/UploadSizeGuideImg";
import { updateProduct } from "../../../api/apiProduct";
import { ErrorContext } from "../../../context/ErrorContext";
import EditCategoty from "../product/editProduct/EditCategoty";
// import { AuthContext } from "../../context/AuthContext";

function EditProductPage() {
  const data = [
    { src: EarthToneShirt1 },
    { src: EarthToneShirt2 },
    { src: EarthToneShirt1 },
    { src: EarthToneShirt2 },
  ];

  //   const { admin } = useContext(AuthContext);
  //State
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  //Image State
  const [sizeGuide, setSizeGuide] = useState("");
  const [loading, setLoading] = useState(false);

  //Size S State
  const [sizeS, setSizeS] = useState(false);
  const [colorS1, setColorS1] = useState("");
  const [colorS2, setColorS2] = useState("");
  const [quantityS1, setQuantityS1] = useState("");
  const [quantityS2, setQuantityS2] = useState("");

  //Size M State
  const [sizeM, setSizeM] = useState(false);
  const [colorM1, setColorM1] = useState("");
  const [colorM2, setColorM2] = useState("");
  const [quantityM1, setQuantityM1] = useState("");
  const [quantityM2, setQuantityM2] = useState("");

  //Size L State
  const [sizeL, setSizeL] = useState(false);
  const [colorL1, setColorL1] = useState("");
  const [colorL2, setColorL2] = useState("");
  const [quantityL1, setQuantityL1] = useState("");
  const [quantityL2, setQuantityL2] = useState("");

  //Size XL State
  const [sizeXL, setSizeXL] = useState(false);
  const [colorXL1, setColorXL1] = useState("");
  const [colorXL2, setColorXL2] = useState("");
  const [quantityXL1, setQuantityXL1] = useState("");
  const [quantityXL2, setQuantityXL2] = useState("");

  //Size XXL State
  const [sizeXXL, setSizeXXL] = useState(false);
  const [colorXXL1, setColorXXL1] = useState("");
  const [colorXXL2, setColorXXL2] = useState("");
  const [quantityXXL1, setQuantityXXL1] = useState("");
  const [quantityXXL2, setQuantityXXL2] = useState("");

  //ProductDescription
  const [productDescription, setProductDescription] = useState("");

  //Category
  const [category, setCategory] = useState("");
  //SubCategory
  const [subCategory, setSubCategory] = useState("");

  const [index, setIndex] = useState(0);

  const { setError, setTrigger } = useContext(ErrorContext);

  //
  // useEffect(() => {
  //   setImage(null);
  // });

  // const handleClickSavePost = async () => {
  //   try {
  //     setLoading(true);
  //     //ต้องvalidateด้วย ไปเขียนเอง
  //     await createPost(title, image);
  //   } catch (err) {
  //     next(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  //Handle
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleSizeS = () => {
    setSizeS((prev) => !prev);
  };
  const handleSizeM = () => {
    setSizeM((prev) => !prev);
  };
  const handleSizeL = () => {
    setSizeL((prev) => !prev);
  };
  const handleSizeXL = () => {
    setSizeXL((prev) => !prev);
  };
  const handleSizeXXL = () => {
    setSizeXXL((prev) => !prev);
  };

  //HandleSubmit
  const handleSubmitUpdateProduct = async (e) => {
    try {
      e.preventDefault();
      //validate input first

      //end validate
      await updateProduct({
        name: productName,
        price,
        sizeGuide,
        sizeS,
        colorS1,
        colorS2,
        quantityS1,
        quantityS2,
        sizeM,
        colorM1,
        colorM2,
        quantityM1,
        quantityM2,
        sizeL,
        colorL1,
        colorL2,
        quantityL1,
        quantityL2,
        sizeXL,
        colorXL1,
        colorXL2,
        quantityXL1,
        quantityXL2,
        sizeXXL,
        colorXXL1,
        colorXXL2,
        quantityXXL1,
        quantityXXL2,
        category,
        subCategory,
      });
      //   console.log(profilePic)
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  //   console.log(colorS1)
  //   console.log(colorS2)
  //   console.log(quantityS1)
  //   console.log(quantityS2)
  //   console.log(colorM1)
  //   console.log(colorM2)
  //   console.log(quantityM1)
  //   console.log(quantityM2)
  //   console.log(colorL1)
  //   console.log(colorL2)
  //   console.log(quantityL1)
  //   console.log(quantityL2)
  //   console.log(colorXL1)
  //   console.log(colorXL2)
  //   console.log(quantityXL1)
  //   console.log(quantityXL2)
  //   console.log(colorXXL1)
  //   console.log(colorXXL2)
  //   console.log(quantityXXL1)
  //   console.log(quantityXXL2)
  return (
    <>
      {loading && <Spinner />}
      <div className="container mt-5">
        <form onSubmit={handleSubmitUpdateProduct}>
          <div className="row justify-content-center">
            <div className="col-8 ">
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
              <div className="black-bottom-header mt-5"></div>
              <h5 className="fw-bold mt-5">Product Detail</h5>
              {/* <form> */}
              <div className="form-group mt-3">
                <label form="productName " style={{ fontWeight: 500 }}>
                  Product Name
                </label>
                <input
                  type="text"
                  className="form-control mt-3"
                  id="productName"
                  placeholder="product name"
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label form="price" style={{ fontWeight: 500 }}>
                  Price
                </label>
                <input
                  type="text"
                  className="form-control mt-3"
                  id="price"
                  placeholder="price"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              {/* Size */}
              <div className="mt-3" style={{ fontWeight: 500 }}>
                Size
              </div>
              <div className="mt-2">
                <div className="row">
                  <div className="col-2">
                    <button
                      type="radio"
                      className="button-size-grey "
                      onClick={handleSizeS}
                    >
                      S
                    </button>
                  </div>

                  <div className="col-2">
                    <button
                      type="radio"
                      className="button-size-grey  "
                      onClick={handleSizeM}
                    >
                      M
                    </button>
                  </div>

                  <div className="col-2">
                    <button
                      type="radio"
                      className="button-size-grey "
                      onClick={handleSizeL}
                    >
                      L
                    </button>
                  </div>

                  <div className="col-2">
                    <button
                      type="radio"
                      className="button-size-grey "
                      onClick={handleSizeXL}
                    >
                      XL
                    </button>
                  </div>

                  <div className="col-2">
                    <button
                      type="radio"
                      className="button-size-grey "
                      onClick={handleSizeXXL}
                    >
                      XXL
                    </button>
                  </div>
                </div>
              </div>

              {/* colorS */}
              <div className="row">
                <div className="col-2">
                  <EditSIzeColor
                    sizeS={sizeS}
                    setColorS1={setColorS1}
                    setColorS2={setColorS2}
                    setQuantityS1={setQuantityS1}
                    setQuantityS2={setQuantityS2}
                  />
                </div>

                {/* colorM */}
                <div className="col-2">
                  <EditSIzeColor
                    sizeM={sizeM}
                    setColorM1={setColorM1}
                    setColorM2={setColorM2}
                    setQuantityM1={setQuantityM1}
                    setQuantityM2={setQuantityM2}
                  />
                </div>

                {/* colorL */}
                <div className="col-2">
                  <EditSIzeColor
                    sizeL={sizeL}
                    setColorL1={setColorL1}
                    setColorL2={setColorL2}
                    setQuantityL1={setQuantityL1}
                    setQuantityL2={setQuantityL2}
                  />
                </div>

                {/* colorXL */}
                <div className="col-2">
                  <EditSIzeColor
                    sizeXL={sizeXL}
                    setColorXL1={setColorXL1}
                    setColorXL2={setColorXL2}
                    setQuantityXL1={setQuantityXL1}
                    setQuantityXL2={setQuantityXL2}
                  />
                </div>
                {/* colorXXL */}
                <div className="col-2">
                  <EditSIzeColor
                    sizeXXL={sizeXXL}
                    setColorXXL1={setColorXXL1}
                    setColorXXL2={setColorXXL2}
                    setQuantityXXL1={setQuantityXXL1}
                    setQuantityXXL2={setQuantityXXL2}
                  />
                </div>
              </div>

              {/* Upload Image SizeGuide */}
              <div className="row">
                <div className="col-12">

                <UploadSizeGuideImg
                  sizeGuide={sizeGuide}
                  // ถ้า sizeGuide ยังไม่มีค่า จะเป้น null ถ้ากดcancel เป็น undefined
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      setSizeGuide(e.target.files[0]);
                    }
                  }}
                  onDelete={() => setSizeGuide(null)}
                  />
                  </div>
              </div>

              {/* Product Description */}
              <div className="form-group mt-3">
                <label form="productDescription " style={{ fontWeight: 500 }}>
                  Product Description
                </label>
                <input
                  type="text"
                  className="form-control mt-3"
                  id="productDescription"
                  placeholder="product description "
                  onChange={(e) => setProductDescription(e.target.value)}
                />
              </div>

              {/* Category and SubCat radio button */}
              <EditCategoty
                category={category}
                setCategory={setCategory}
                setSubCategory={setSubCategory}
              />
              {/*  */}

              <div className="d-flex justify-content-center mt-5">
                <button
                  type="submit"
                  className="btn btn-dark mt-5 mb-5 w-50 text-center"
                >
                  Create Product
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditProductPage;
