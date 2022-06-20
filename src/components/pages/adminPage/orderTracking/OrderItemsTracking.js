import { Link } from "react-router-dom";

function OrderItemsTracking({
  orderId,
  customerFirstName,
  totalPrice,
  orderItemArr,
}) {
  return (
    <>
      {orderItemArr.map((item , idx)=>{
        //   console.log(item[idx].status)
        //   console.log(item)
        return(

            <tr>
          <th scope="row">KM-{orderId}</th>
          <td>{customerFirstName}</td>
          <td>{totalPrice}</td>
          <td>{item.status}</td>
          <td className="text-center ">
            <Link
              type="button"
              to="/orderTracking/:orderId"
              className="btn btn-dark w-75 fs-4 p-0 "
              style={{ fontSize: "16 !importance" }}
              >
              Edit
            </Link>
          </td>
        </tr>
                  )
            })
      }
    </>
  );
}

export default OrderItemsTracking;
