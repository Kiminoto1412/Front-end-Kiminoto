import { Carousel, Spinner } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
// import sizeGuidePic from "../../assets/images/sizeGuidePic.png";
import EditSIzeColor from "../product/editProduct/EditSIzeColor";
import UploadSizeGuideImg from "../editProduct/UploadSizeGuideImg";
import { updateProduct } from "../../../api/apiProduct";
import { ErrorContext } from "../../../context/ErrorContext";
import EditCategoty from "../product/editProduct/EditCategoty";
import UploadProduct1 from "../form/UploadProduct1";
import UploadProduct2 from "../form/UploadProduct2";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// import { AuthContext } from "../../context/AuthContext";

function EditProductPage() {
  //   const { admin } = useContext(AuthContext);
  let navigate = useNavigate();

  //fetch Product State
  const [productObj, setProductObj] = useState({});
  const [productOptionArr, setProductOptionArr] = useState([]);

  const [productPic, setProductPic] = useState(["", "", "", "", ""]);

  //State
  const [productName, setProductName] = useState(productObj.name);
  const [price, setPrice] = useState(productObj.price);

  //Unique Arr
  const [colorAr, setColorAr] = useState([]);

  const { productId } = useParams();
  //Image State

  //State Image JSON like Array
  const [ArrayPic, setArrayPic] = useState("");
  //StockPic
  const [stock, setStock] = useState([
    { idx: 0, url: "" },
    { idx: 1, url: "" },
    { idx: 2, url: "" },
    { idx: 3, url: "" },
    { idx: 4, url: "" },
  ]);

  // console.log(productObj.sizeGuide)

  const [sizeGuide, setSizeGuide] = useState("");
  const [loading, setLoading] = useState(false);

  //Size S State
  const [sizeSArr, setSizeSArr] = useState([]);
  const [sizeS, setSizeS] = useState(false);
  const [colorS1, setColorS1] = useState("");
  const [colorS2, setColorS2] = useState("");
  const [colorS3, setColorS3] = useState("");
  const [quantityS1, setQuantityS1] = useState("");
  const [quantityS2, setQuantityS2] = useState("");
  const [quantityS3, setQuantityS3] = useState("");

  //Size M State
  const [sizeMArr, setSizeMArr] = useState([]);
  const [sizeM, setSizeM] = useState(false);
  const [quantityM1, setQuantityM1] = useState("");
  const [quantityM2, setQuantityM2] = useState("");
  const [quantityM3, setQuantityM3] = useState("");

  //Size L State
  const [sizeLArr, setSizeLArr] = useState([]);
  const [sizeL, setSizeL] = useState(false);
  const [quantityL1, setQuantityL1] = useState("");
  const [quantityL2, setQuantityL2] = useState("");
  const [quantityL3, setQuantityL3] = useState("");

  //Size XL State
  const [sizeXLArr, setSizeXLArr] = useState([]);
  const [sizeXL, setSizeXL] = useState(false);
  const [quantityXL1, setQuantityXL1] = useState("");
  const [quantityXL2, setQuantityXL2] = useState("");
  const [quantityXL3, setQuantityXL3] = useState("");

  //Size XXL State
  const [sizeXXLArr, setSizeXXLArr] = useState([]);
  const [sizeXXL, setSizeXXL] = useState(false);
  const [quantityXXL1, setQuantityXXL1] = useState("");
  const [quantityXXL2, setQuantityXXL2] = useState("");
  const [quantityXXL3, setQuantityXXL3] = useState("");

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

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/products/${productId}`);
        console.log(res.data.product[0]);
        if (res.data.product) {
          setProductObj(res.data.product[0]);
          setProductOptionArr(res.data.product[0].ProductOptions);
          setArrayPic(JSON.parse(res.data.product[0].productPic));
          setProductName(res.data.product[0].name);
          setPrice(res.data.product[0].price);
          setCategoryId(res.data.product[0].productCategoryId);
          setSubCategoryId(res.data.product[0].productSubCategoryId);
          setCategory(res.data.product[0].ProductCategory.name);
          setSubCategory(res.data.product[0].ProductSubCategory.name);
          setProductDescription(res.data.product[0].productDescription);
          // console.log(res.data.product[0].ProductOptions)
          console.log(res.data.product);
          // console.log(res.data.product[0].sizeGuide)
          // console.log(res.data.product[0].productCategoryId);
          // console.log(res.data.product[0].productSubCategoryId);
          console.log(res.data.product[0].ProductCategory.name);
          console.log(res.data.product[0].ProductSubCategory.name);
          //setStock โดย create ใหม่แม่งเลย
          setStock(
            JSON.parse(res.data.product[0].productPic).map((item, idx) => {
              return { idx, url: item };
            })
          );
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, []);

  console.log(stock);

  useEffect(() => {
    const arrayColor = productOptionArr.map((el, idx) => {
      return el.color;
    });
    // console.log(arrayColor)
    const uniqueArrayColor = [...new Set(arrayColor)];
    setColorAr(uniqueArrayColor);
    // console.log(uniqueArrayColor);

    const ArraySizeS = productOptionArr.filter((el) => el.size === "s");
    // console.log(ArraySizeS)
    setSizeSArr(ArraySizeS);
    const ArraySizeM = productOptionArr.filter((el) => el.size === "m");
    // console.log(ArraySizeM)
    setSizeMArr(ArraySizeM);
    const ArraySizeL = productOptionArr.filter((el) => el.size === "l");
    // console.log(ArraySizeL)
    setSizeLArr(ArraySizeL);
    const ArraySizeXL = productOptionArr.filter((el) => el.size === "xl");
    // console.log(ArraySizeXL)
    setSizeXLArr(ArraySizeXL);
    const ArraySizeXXL = productOptionArr.filter((el) => el.size === "xxl");
    // console.log(ArraySizeXXL)
    setSizeXXLArr(ArraySizeXXL);

    // setCategory(productObj.ProductCategory?.name.toLowerCase());
    // setSubCategory(productObj.ProductSubCategory?.name.toLowerCase());
  }, [productObj]);

  useEffect(() => {
    if (colorAr.length > 0) {
      setColorS1(colorAr[0]);
      setColorS2(colorAr[1]);
      setColorS3(colorAr[2]);
    }
  }, [colorAr]);

  console.log(ArrayPic);

  // const PIC = ArrayPic.map((item, idx) => {
  //   // console.log(item)
  //   const newStock = [...stock];
  //   newStock[idx].url = item;
  // });

  // const [stock, setStock] = useState([
  //   { idx: 0, url: "" },
  //   { idx: 1, url: "" },
  //   { idx: 2, url: "" },
  //   { idx: 3, url: "" },
  //   { idx: 4, url: "" },
  // ]);

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

      console.log(stocks);

      const filteredStocks = stocks.filter((e) => {
        return e.storage !== "";
      });
      console.log(filteredStocks);
      // console.log("filtereddddddddddd", filteredStocks);
      //end validate
      await updateProduct({
        name: productName,
        price,
        productDescription,
        stockImg: productPic,
        sizeGuide,
        stocks: filteredStocks,
        categoryId,
        subCategoryId,
        productId,
      });
      // navigate(`/`);

      //   console.log(profilePic)
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  // console.log(productObj.sizeGuide)
  // console.log(productObj.ProductCategory);

  // console.log(productPic1)
  // console.log(productObj.ProductCategory.name)

  console.log(productPic);
  console.log(stock);
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
                  defaultProductPic={stock[0].url}
                  productPic={productPic[0]}
                  // ถ้า productPic ยังไม่มีค่า จะเป้น null ถ้ากดcancel เป็น undefined
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      const newStock = [...stock];
                      newStock[0].url = e.target.files[0];
                      setStock(newStock);
                      const newProductPic = [...productPic];
                      newProductPic[0] = e.target.files[0];
                      setProductPic(newProductPic);
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
                      defaultProductPic={el.url}
                      productPic={productPic[idx + 1]}
                      // ถ้า productPic ยังไม่มีค่า จะเป้น null ถ้ากดcancel เป็น undefined
                      onChange={(e) => {
                        if (e.target.files[0]) {
                          const newStock = [...stock];
                          newStock[el.idx].url = e.target.files[0];
                          setStock(newStock);
                          const newProductPic = [...productPic];
                          newProductPic[idx + 1] = e.target.files[0];
                          setProductPic(newProductPic);
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
                  defaultValue={productObj.name}
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
                  defaultValue={productObj.price}
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
                    sizeArr={sizeSArr}
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
                    sizeArr={sizeMArr}
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
                    sizeArr={sizeLArr}
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
                    sizeArr={sizeXLArr}
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
                    sizeArr={sizeXXLArr}
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
                    isUpdate="true"
                    sizeGuide={sizeGuide}
                    defaultSizeGuide={productObj.sizeGuide}
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
                  defaultValue={productObj.productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                />
              </div>

              {/* Category and SubCat radio button */}
              <EditCategoty
                categoryId={productObj.categoryId}
                category={category}
                subCategory={subCategory}
                subCategoryId={subCategoryId}
                setCategory={setCategory}
                setSubCategory={setSubCategory}
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

export default EditProductPage;
