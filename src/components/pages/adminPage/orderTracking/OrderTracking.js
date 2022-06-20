import axios from "../../../../config/axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import truck from "../../../../assets/images/truck.png";
import OrderItemsTracking from "./OrderItemsTracking";

function OrderTracking() {
  const [orderArr, setOrderArr] = useState([]);
  const [customerId, setCustomerId] = useState(0);

  console.log(customerId);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await axios.get(`/orders/all`);
        console.log(res.data.orders);
        if (res.data.orders) {
          setOrderArr(res.data.orders);

          // setOrderItemsArr(res.data.orders[0].OrderItems)
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchOrder();
  }, []);

  // useEffect(() => {
  //   const fetchCustomer = async () => {
  //     try {
  //       const res = await axios.get(`/admins/findCustomer/${customerId}`);
  //       console.log(res.data.customer);
  //       if (res.data.customer) {
  //         setCustomerId(res.data.customer);
  //         // setOrderItemsArr(res.data.orders[0].OrderItems)
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchCustomer();
  // }, [customerId]);

//   useEffect(()=>{

//     const fetchCustomer = async (customerId) => {
//       try {
//         const res = await axios.get(`/admins/findCustomer/${customerId}`);
//         console.log(res.data.customer);
//         if (res.data.customer) {
//           setCustomerId(res.data.customer);
//           console.log(res.data.customer)
//         // setOrderItemsArr(res.data.orders[0].OrderItems)
//       }
//     } catch (err) {
//       console.log(err);
//     }
//     fetchCustomer();
//   };
// },[])

  console.log(orderArr)
  console.log(customerId)

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-start black-bottom-header align-items-end pb-2">
        <img
          src={truck}
          className="me-3"
          style={{ width: 46, height: "auto" }}
          alt="truck"
        />
        <h2 className="m-0">Order Tracking </h2>
      </div>

      {/* Table */}
      <div className="mt-5">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col-2">Order</th>
              <th scope="col-3">Customer name</th>
              <th scope="col-3">Total price</th>
              <th scope="col-2">Status</th>
              <th scope="col-2">Edit</th>
            </tr>
          </thead>
          <tbody>
            {orderArr.length > 0 ? (
              <>
                {orderArr?.map((item, index) => {
                  //เอาของในOrder
                  console.log(item);
                  console.log(item.OrderItems);
                  return (
                    <>
                      <OrderItemsTracking
                        orderId={item.id}
                        customerFirstName={item.Customer.firstName}
                        totalPrice={item.totalPrice}
                        orderItemArr={item.OrderItems}
                      />
                    </>
                  );
                })}
              </>
            ) : (
              <div></div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderTracking;
