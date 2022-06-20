import { useContext, useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "../../config/axios";
import AddCard from "./AddCard";
import {AuthContext} from "../../context/AuthContext"

function CardRow() {
  const [product, setProduct] = useState([]);
  const {role} = useContext(AuthContext)

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

      {role === "admin" ? <AddCard /> : null}
    </>
  );
}

export default CardRow;
