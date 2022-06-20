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
import { createProduct } from "../../../api/apiProduct";
import UploadProduct1 from "../form/UploadProduct1";
import UploadProduct2 from "../form/UploadProduct2";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";

function CreateProduct() {
  //   const { admin } = useContext(AuthContext);
  let navigate = useNavigate();
  //State
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  //Image State

  //StockPic
  const [stock, setStock] = useState([
    { idx: 0, url: "" },
    { idx: 1, url: "" },
    { idx: 2, url: "" },
    { idx: 3, url: "" },
    { idx: 4, url: "" },
  ]);

  const [sizeGuide, setSizeGuide] = useState("");
  const [loading, setLoading] = useState(false);

  //Size S State
  const [sizeS, setSizeS] = useState(false);
  const [colorS1, setColorS1] = useState("#000");
  const [colorS2, setColorS2] = useState("#000");
  const [colorS3, setColorS3] = useState("#000");
  const [quantityS1, setQuantityS1] = useState(0);
  const [quantityS2, setQuantityS2] = useState(0);
  const [quantityS3, setQuantityS3] = useState(0);

  //Size M State
  const [sizeM, setSizeM] = useState(false);
  // const [colorM1, setColorM1] = useState("#000");
  // const [colorM2, setColorM2] = useState("#000");
  // const [colorM3, setColorM3] = useState("#000");
  const [quantityM1, setQuantityM1] = useState(0);
  const [quantityM2, setQuantityM2] = useState(0);
  const [quantityM3, setQuantityM3] = useState(0);

  //Size L State
  const [sizeL, setSizeL] = useState(false);
  // const [colorL1, setColorL1] = useState("#000");
  // const [colorL2, setColorL2] = useState("#000");
  // const [colorL3, setColorL3] = useState("#000");
  const [quantityL1, setQuantityL1] = useState(0);
  const [quantityL2, setQuantityL2] = useState(0);
  const [quantityL3, setQuantityL3] = useState(0);

  //Size XL State
  const [sizeXL, setSizeXL] = useState(false);
  // const [colorXL1, setColorXL1] = useState("#000");
  // const [colorXL2, setColorXL2] = useState("#000");
  // const [colorXL3, setColorXL3] = useState("#000");
  const [quantityXL1, setQuantityXL1] = useState(0);
  const [quantityXL2, setQuantityXL2] = useState(0);
  const [quantityXL3, setQuantityXL3] = useState(0);

  //Size XXL State
  const [sizeXXL, setSizeXXL] = useState(false);
  // const [colorXXL1, setColorXXL1] = useState("#000");
  // const [colorXXL2, setColorXXL2] = useState("#000");
  // const [colorXXL3, setColorXXL3] = useState("#000");
  const [quantityXXL1, setQuantityXXL1] = useState(0);
  const [quantityXXL2, setQuantityXXL2] = useState(0);
  const [quantityXXL3, setQuantityXXL3] = useState(0);

  // const [stockOption, setStockOption] =
  //   useState([
  //     ({ id: "color1-s", size: "", color: "", storage: 0 },
  //     { id: "color2-s", size: "", color: "", storage: 0 },
  //     { id: "color3-s", size: "", color: "", storage: 0 },
  //     { id: "color1-m", size: "", color: "", storage: 0 },
  //     { id: "color2-m", size: "", color: "", storage: 0 },
  //     { id: "color2-m", size: "", color: "", storage: 0 },
  //     { id: "color1-l", size: "", color: "", storage: 0 },
  //     { id: "color2-l", size: "", color: "", storage: 0 },
  //     { id: "color3-l", size: "", color: "", storage: 0},
  //     { id: "color1-xl", size: "", color: "", storage: 0 },
  //     { id: "color2-xl", size: "", color: "", storage: 0 },
  //     { id: "color3-xl", size: "", color: "", storage: 0 },
  //     { id: "color1-xxl", size: "", color: "", storage: 0 },
  //     { id: "color2-xxl", size: "", color: "", storage: 0 },
  //     { id: "color3-xxl", size: "", color: "", storage: 0 })
  //   ]);

  //ProductDescription
  const [productDescription, setProductDescription] = useState("");

  //Category
  const [category, setCategory] = useState("");
  const [categoryId, setCategoryId] = useState("");
  //SubCategory
  const [subCategory, setSubCategory] = useState("");
  const [subCategoryId, setSubCategoryId] = useState("");

  const [index, setIndex] = useState(0);

  const { setError, setTrigger } = useContext(ErrorContext);

  //Handle
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleSizeS = () => {
    setSizeS((prev) => !prev);
    // setStockOption()
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
      const stocks = [
        { size: "s", color: colorS1, storage: quantityS1 },
        { size: "s", color: colorS2, storage: quantityS2 },
        { size: "s", color: colorS3, storage: quantityS3 },
        { size: "m", color: colorS1, storage: quantityM1 },
        { size: "m", color: colorS2, storage: quantityM2 },
        { size: "m", color: colorS3, storage: quantityM3 },
        { size: "l", color: colorS1, storage: quantityL1 },
        { size: "l", color: colorS2, storage: quantityL2 },
        { size: "l", color: colorS3, storage: quantityL3 },
        { size: "xl", color: colorS1, storage: quantityXL1 },
        { size: "xl", color: colorS2, storage: quantityXL2 },
        { size: "xl", color: colorS3, storage: quantityXL3 },
        { size: "xxl", color: colorS1, storage: quantityXXL1 },
        { size: "xxl", color: colorS2, storage: quantityXXL2 },
        { size: "xxl", color: colorS3, storage: quantityXXL3 },
      ];

      // console.log(stocks)

      const filteredStocks = stocks.filter((e) => {
        return e.storage > 0;
      });
      // console.log(filteredStocks);
      // console.log("filtereddddddddddd", filteredStocks);
      //end validate
      await createProduct({
        name: productName,
        price,
        productDescription,
        stockImg: stock,
        sizeGuide,
        stocks:filteredStocks,
        categoryId,
        subCategoryId,
      });
      navigate(`/`)

      //   console.log(profilePic)
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <div className="container mt-5">
        <form onSubmit={handleSubmitUpdateProduct}>
          <div className="row justify-content-center">
            <div className="col-8 ">
              {/* Upload ProductPic */}
              <div>
                <UploadProduct1
                  productPic={stock[0].url}
                  // ถ้า productPic1 ยังไม่มีค่า จะเป้น null ถ้ากดcancel เป็น undefined
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      const newStock = [...stock];
                      newStock[0].url = e.target.files[0];
                      setStock(newStock);
                    }
                  }}
                  onDelete={() => {
                    const newStock = [...stock];
                    newStock[0].url = null;
                    setStock(newStock);
                  }}
                />
              </div>
              <div className=" d-flex mt-3 gx-5" style={{ gap: 10 }}>
                {stock.slice(1, 5).map((el, idx) => {
                  return (
                    <UploadProduct2
                      productPic={el.url}
                      // ถ้า productPic ยังไม่มีค่า จะเป้น null ถ้ากดcancel เป็น undefined
                      onChange={(e) => {
                        if (e.target.files[0]) {
                          const newStock = [...stock];
                          newStock[el.idx].url = e.target.files[0];
                          setStock(newStock);
                        }
                      }}
                      onDelete={() => {
                        const newStock = [...stock];
                        newStock[el.idx].url = null;
                        setStock(newStock);
                      }}
                    />
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
                    size="s"
                    color1={colorS1}
                    color2={colorS2}
                    color3={colorS3}
                    setColor1={setColorS1}
                    setColor2={setColorS2}
                    setColor3={setColorS3}
                    quantity1={quantityS1}
                    quantity2={quantityS2}
                    quantity3={quantityS3}
                    setQuantity1={setQuantityS1}
                    setQuantity2={setQuantityS2}
                    setQuantity3={setQuantityS3}
                  />
                </div>

                {/* colorM */}
                <div className="col-2">
                  <EditSIzeColor
                    size="m"
                    color1={colorS1}
                    color2={colorS2}
                    color3={colorS3}
                    setColor1={setColorS1}
                    setColor2={setColorS2}
                    setColor3={setColorS3}
                    quantity1={quantityM1}
                    quantity2={quantityM2}
                    quantity3={quantityM3}
                    setQuantity1={setQuantityM1}
                    setQuantity2={setQuantityM2}
                    setQuantity3={setQuantityM3}
                  />
                </div>

                {/* colorL */}
                <div className="col-2">
                  <EditSIzeColor
                    size="l"
                    color1={colorS1}
                    color2={colorS2}
                    color3={colorS3}
                    setColor1={setColorS1}
                    setColor2={setColorS2}
                    setColor3={setColorS3}
                    quantity1={quantityL1}
                    quantity2={quantityL2}
                    quantity3={quantityL3}
                    setQuantity1={setQuantityL1}
                    setQuantity2={setQuantityL2}
                    setQuantity3={setQuantityL3}
                  />
                </div>

                {/* colorXL */}
                <div className="col-2">
                  <EditSIzeColor
                    size="xl"
                    color1={colorS1}
                    color2={colorS2}
                    color3={colorS3}
                    setColor1={setColorS1}
                    setColor2={setColorS2}
                    setColor3={setColorS3}
                    quantity1={quantityXL1}
                    quantity2={quantityXL2}
                    quantity3={quantityXL3}
                    setQuantity1={setQuantityXL1}
                    setQuantity2={setQuantityXL2}
                    setQuantity3={setQuantityXL3}
                  />
                </div>
                {/* colorXXL */}
                <div className="col-2">
                  <EditSIzeColor
                    size="xxl"
                    color1={colorS1}
                    color2={colorS2}
                    color3={colorS3}
                    setColor1={setColorS1}
                    setColor2={setColorS2}
                    setColor3={setColorS3}
                    quantity1={quantityXXL1}
                    quantity2={quantityXXL2}
                    quantity3={quantityXXL3}
                    setQuantity1={setQuantityXXL1}
                    setQuantity2={setQuantityXXL2}
                    setQuantity3={setQuantityXXL3}
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
                categoryId={categoryId}
                category={category}
                setCategory={setCategory}
                setCategoryId={setCategoryId}
                setSubCategoryId={setSubCategoryId}
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

export default CreateProduct;
