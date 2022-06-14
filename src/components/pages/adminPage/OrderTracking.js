import { Link } from "react-router-dom";
import truck from "../../../assets/images/truck.png";

function OrderTracking() {
  const data = {};
    //ต้องmapข้อมูลมาสร้างตาราง


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
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
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
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
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
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderTracking;
