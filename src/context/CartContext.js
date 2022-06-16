import { createContext, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../config/axios";

const CartContext = createContext();

function CartContextProvider({ children }) {
  const addToOrder = async ({ deliveryPrice, totalPrice ,cartItemsIds }) => {
    const res = await axios.post("/orders", { deliveryPrice, totalPrice , cartItemsIds });
  };

  return (
    <CartContext.Provider value={{ addToOrder }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
export { CartContext };
