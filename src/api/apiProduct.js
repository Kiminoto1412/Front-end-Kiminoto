import axios from "../config/axios";

export const createProduct = (title, image) => {
  const formData = new FormData();
  formData.append("title", title); //รับkey เป็น title และ value เป็น title
  formData.append("image", image);
  return axios.post("/posts", formData);
};

export const updateProduct = (title, image) => {
  const formData = new FormData();
  formData.append("title", title); //รับkey เป็น title และ value เป็น title
  formData.append("image", image);
  return axios.post("/posts", formData);
};