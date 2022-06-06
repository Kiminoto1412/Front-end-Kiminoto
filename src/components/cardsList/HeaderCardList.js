import { Link } from "react-router-dom";
import CardRow from "./CardRow";
import Cards from "./Cards";

function HeaderCardList() {
  return (
    <div className="row g-3 mt-5">
      <div className="d-flex justify-content-between black-bottom-header position-relative">
        <h2>Best Sellers / Recommend</h2>
        <Link
          className="position-absolute bottom-0 end-0 text-muted"
          style={{ textDecoration: "none" }}
          to="/"
          role="button"
        >
          See All &#62;
        </Link>
      </div>
    </div>
  );
}

export default HeaderCardList;
