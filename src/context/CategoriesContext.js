import { createContext, useEffect, useState } from "react";
import axios from "../config/axios";

const CategoriesContext = createContext();

function CategoriesContextProvider({ children }) {
  const [categories, setCategories] = useState([]);

  console.log(categories);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("/categories");
        setCategories(res.data.categories);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  );
}

export default CategoriesContextProvider;

export { CategoriesContext };
