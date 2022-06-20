import { Link } from "react-router-dom";
import roundPlus from "../../assets/images/roundPlus.png";

function AddCard() {
  return (
    <div className="col-3" style={{width:303}}>
      <Link className="card text-dark text-decoration-none pe-0 mt-5" to="createProduct">
        <div className="d-flex align-items-center justify-content-center" style={{ backgroundColor: "#C4C4C4" ,width:303 , height:294}}>
          <img
            src={roundPlus}
            className="card-img-top img-fluid"
            style={{ width:60 , height:60 }}
            alt="roundPlus"
          />
        </div>
          <div className="card-body">
            <h5 className="card-title">Mammothz Store</h5>
            <p className="card-text fs-6">...</p>
            <p className="card-text fw-bold mb-4">- THB</p>
          </div>
      </Link>
    </div>
  );
}

export default AddCard;
