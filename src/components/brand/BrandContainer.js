import { Outlet } from "react-router-dom";
import CardContainer from "../cardsList/CardContainer";
import BrandBanner from "./BrandBanner";
import Brandfilter from "./Brandfilter";

function BrandContainer() {
  return (
    <>
      <BrandBanner />
      <Brandfilter />
      <div className="container ">
        <Outlet />
        {/* <CardContainer /> */}
      </div>
    </>
  );
}

export default BrandContainer;
