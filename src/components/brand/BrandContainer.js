import CardContainer from "../cardsList/CardContainer";
import BrandBanner from "./BrandBanner";
import Brandfilter from "./Brandfilter";

function BrandContainer() {
  return (
    <>
      <BrandBanner />
      <Brandfilter />
      <div className="container ">
        <CardContainer />
      </div>
    </>
  );
}

export default BrandContainer;
