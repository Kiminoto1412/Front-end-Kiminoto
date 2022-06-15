import ProductContextProvider from "../../context/ProductContext";
import ProductConatiner from "../products/ProductConatiner";

function ProductPage() {
  return (
    <ProductContextProvider>
      <ProductConatiner />
    </ProductContextProvider>
  );
}

export default ProductPage;
