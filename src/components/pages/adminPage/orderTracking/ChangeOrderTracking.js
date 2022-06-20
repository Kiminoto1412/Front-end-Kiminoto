import uploadImagePic from "../../../../assets/images/uploadImagePic.png";
import truck from "../../../../assets/images/truck.png";
import { useState } from "react";

function ChangeOrderTracking() {
  // const date = new Date();
  // let month = date.getMonth() + 1; //months from 1-12
  // let day = date.getDate();
  // let year = date.getFullYear();
  // console.log(date);
  // let newdate = year + "-" + month + "-" + day;
  // console.log(newdate);



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

      <form className="mt-5">
        <div className="row justify-content-between">
          <div className="col-3 ms-5 me-5 ">
            <div className="text-center">
              <img
                src={uploadImagePic}
                className=" me-4 bg-color-blank-image-grey p-5"
                alt="uploadSlip"
              />
            </div>
          </div>

          <div className="col-8 black-bottom-header"></div>
        </div>
      </form>
    </div>
  );
}

export default ChangeOrderTracking;
