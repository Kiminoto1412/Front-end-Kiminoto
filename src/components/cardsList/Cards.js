import { Link } from "react-router-dom";
import SetWhite from "../../assets/images/SetWhite.png";

function Cards() {
  return (
    <>
      <div className="col">
        <Link className="card text-dark text-decoration-none" to="/Product/:productId">
          <img src={SetWhite} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Mammothz Store</h5>
            <p className="card-text fs-6">Cream Slacks for Korea boys</p>
            <p className="card-text fw-bold mb-4">690 THB</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Cards;
