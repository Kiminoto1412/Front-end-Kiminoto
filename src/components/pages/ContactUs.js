import telephone from "../../assets/images/telephone.png";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";

function ContactUs() {
  return (
    <div className="container mt-5">
      <div className="d-flex black-bottom-header pb-3">
        <img src={telephone} className="ms-3 me-4" alt="telephone" />
        <h2>Contact us</h2>
      </div>

      <div className="container ms-4">
        <h4 className="fw-bold mt-5">Address</h4>
        <div className="ms-4">
          <h6 style={{ fontWeight: 600 }}>
            367 Soi Charoen Nakhon 46 , Charoen Nakhon Road. , District Khlong
            San , Bangkok , Thailand 10600
          </h6>
        </div>

        <h4 className="fw-bold mt-5">Phone number</h4>
        <div className="ms-4">
          <h6 style={{ fontWeight: 600 }}>083-074-5815</h6>
        </div>

        <div className="d-flex align-items-center mt-5">
          <img
            src={facebook}
            className=" me-4"
            style={{ width: 40, height: 40 }}
            alt="facebook"
          />
          <h5 className="m-0" style={{ fontWeight: 600 }}>
            KIMINOTO_Official
          </h5>
        </div>
        <div className="d-flex align-items-center mt-4">
          <img
            src={instagram}
            className=" me-4"
            style={{ width: 40, height: 40 }}
            alt="instagram"
          />
          <h5 className="m-0" style={{ fontWeight: 600 }}>
            KIMINOTO_Official
          </h5>
        </div>
        <div className="d-flex align-items-center mt-4">
          <img
            src={facebook}
            className=" me-4"
            style={{ width: 40, height: 40 }}
            alt="facebook"
          />
          <h5 className="m-0" style={{ fontWeight: 600 }}>
            KIMINOTO_Official
          </h5>
        </div>
        <h5 className="mt-5" style={{ fontWeight: 600 }}>
          Monday - Sunday , 09.00 - 19.00 ICT.
        </h5>
      </div>
    </div>
  );
}

export default ContactUs;
