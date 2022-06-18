import { Link, useLocation } from "react-router-dom";
import CardRow from "./CardRow";
import Cards from "./Cards";

function HeaderCardList() {
  const location = useLocation();
  return (
    <div className="row g-3 mt-5">
      <div className="d-flex justify-content-between black-bottom-header position-relative">
        <h2>
          { location.pathname === "/"
            ? "Best Sellers / Recommend" 
            : location.pathname === "/Brand"
            ? "Brands"
            : location.pathname === "/Brand/AllProduct"
            ? "All Product"
            : location.pathname === "/Brand/Shirt"
            ? "T-shirt"
            : location.pathname === "/Brand/Pants"
            ? "Pants"
            : location.pathname === "/Brand/Accessories"
            ? "Accessories"
            : ""}
        </h2>
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
