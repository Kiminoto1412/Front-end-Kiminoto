import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SetWhite from "../../assets/images/SetWhite.png";
import axios from "../../config/axios";

function Cards({productId , name , price , productPic}) {

  return (
    <>
      <div className="col-3">
        <Link className="card text-dark text-decoration-none" to={`/Product/${productId}`}>
          <img src={productPic} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Mammothz Store</h5>
            <p className="card-text fs-6">{name}</p>
            <p className="card-text fw-bold mb-4">{price} THB</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Cards;
