import axios from "../../config/axios";
import { useEffect, useState } from "react";
import Cards from "../cardsList/Cards";
import HeaderCardList from "../cardsList/HeaderCardList";

function BrandAllProduct() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const res = await axios.get(`/products`);
          setProduct(res.data.product);
          // console.log(res.data.product);
        } catch (err) {
          console.log(err);
        }
      };
      fetchProducts();
    }, []);
  
    return (
      <>
        <HeaderCardList />
        <div className="row mt-3">
          {product.map((el) => (
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

export default BrandAllProduct;
