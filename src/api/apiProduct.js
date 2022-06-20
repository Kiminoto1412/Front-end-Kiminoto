import axios from "../config/axios";

export const createProduct = ({
  name,
  price,
  productDescription,
  sizeGuide,
  stocks,
  stockImg,
  categoryId,
  subCategoryId,
}) => {
  console.log("productName" ,name)
  console.log("price",price)
  console.log("productDescription",productDescription)
  console.log("sizeGuide",sizeGuide)
  console.log("stock",stocks)
  // console.log("stockImg", stockImg[0].url);
  console.log("stockImg", stockImg);
  // console.log("category",category)
  // console.log("subCategory",subCategory)
  const stockJSON = JSON.stringify(stocks);
  console.log("categoryId",categoryId)
  console.log("subCategoryId",subCategoryId)
  // console.log(stockJSON)

  // const formData = new FormData();

  const formData = new FormData();
  formData.append("name", name); //รับkey เป็น title และ value เป็น title
  formData.append("price", price);
  // for (let i = 0; i < stockImg.length; i++) {
  //   formData.append("productPic", stockImg[i].url);
  // }
  formData.append("productPic", stockImg);
  formData.append("sizeGuide", sizeGuide);
  formData.append("productDescription", productDescription);
  formData.append("stock", stockJSON);
  formData.append("productCategoryId", categoryId);
  formData.append("productSubCategoryId", subCategoryId);

  // console.log(formData.getAll("productPic"));
  // return axios.post("/products", formData);
};

export const updateProduct = ({
  name,
  price,
  productDescription,
  sizeGuide,
  stocks,
  stockImg,
  categoryId,
  subCategoryId,
  productId,
}) => {
  const stockJSON = JSON.stringify(stocks);

  console.log("productName" ,name)
  console.log("price",price)
  console.log("productDescription",productDescription)
  console.log("sizeGuide",sizeGuide)
  console.log("stock",stocks)
  console.log("stockImg", stockImg);
  console.log("categoryId",categoryId)
  console.log("subCatategoryId",subCategoryId)

  const formData = new FormData();
  formData.append("name", name); //รับkey เป็น title และ value เป็น title
  formData.append("price", price);
  // for (let i = 0; i < stockImg.length; i++) {
  //   formData.append("productPic", stockImg[i].url);
  // }
  formData.append("productPic", stockImg);
  formData.append("sizeGuide", sizeGuide);
  formData.append("productDescription", productDescription);
  formData.append("stock", stockJSON);
  formData.append("productCategoryId", categoryId);
  formData.append("productSubCategoryId", subCategoryId);
  return axios.patch(`/products/${productId}`, formData);
};

export const getProduct = () => {};
