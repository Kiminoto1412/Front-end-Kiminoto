import axios from "../../config/axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HeaderCardList from "../cardsList/HeaderCardList";
import Cards from "../cardsList/Cards";
import { CategoriesContext } from "../../context/CategoriesContext";

function BrandAccessories() {

    const location = useLocation();
  
  const pathname = location.pathname.split("/")[2];
  const { categories } = useContext(CategoriesContext);
  const wordBrandPathname = categories.filter((el) => el.name === pathname);
  const catId = wordBrandPathname[0].id;

  const [product, setProduct] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`/products/cat/${catId}`);
        setProduct(res.data.products);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);

  console.log(product)
  return (
    <>
      <HeaderCardList />
      <div className="row mt-3">
        {product?.map((el) => (
          <Cards
            key={el.id}
            productId={el.id}
            name={el.name}
            price={el.price}
            productPic={JSON.parse(el.productPic)[0]}
          />
        ))}
      </div>
    </>
  );

}

export default BrandAccessories;
