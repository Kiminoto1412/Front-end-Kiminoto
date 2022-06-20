import axios from "../../../config/axios";
import { useEffect, useState } from "react";
import OrderPurchase from "./OrderPurchase";

function MyPurchase() {
  const [orderArr, setOrderArr] = useState([]);
  const [orderItemsArr, setOrderItemsArr] = useState([]);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await axios.get(`/orders`);
        console.log(res.data.orders);
        if (res.data.orders) {
          setOrderArr(res.data.orders);
          setOrderItemsArr(res.data.orders[0].OrderItems)
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchOrder();
  }, []);

  return (
    <div>
      <h3 className="fw-bold ">My Purchase</h3>

      {orderArr.length > 0 ? (
        <>
          {orderArr?.map((item, index) => {
            //เอาของในOrder
            console.log(item)
            // console.log(item.OrderItems)
           
            return (
              <OrderPurchase
                // key={index}
                order={item}
                index={index}
                orderId={item.id}
                orderItemsArr={item.OrderItems}
                totalPrice={item.totalPrice}
       
              />
            );
          })}
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default MyPurchase;
