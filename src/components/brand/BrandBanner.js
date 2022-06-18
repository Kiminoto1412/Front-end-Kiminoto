import BrandBannerPic from "../../assets/images/BrandBannerPic.png";
import KIMINOTO from "../../assets/images/KIMINOTO.png";
import Follow from "../../assets/images/Follow.png";
import CHAT from "../../assets/images/CHAT.png";
import chatIcon from "../../assets/images/chatIcon.png";

function BrandBanner() {
  return (
    <div className="bg-color-brow-banner pb-4 mt-5">
      <div className="container">
        <div className="row">
          {/* Profile Brand Pic Banner */}
          <div className="col-5 position-relative mt-5 mb-4">
            <img
              src={BrandBannerPic}
              className="bg-color-brown img-fluid  "
              alt="BrandBannerPic"
            />
            <div className="row  posiition-brand-profile">
              <div className="col-4">
                <img src={KIMINOTO} className="img-fluid " alt="KIMINOTO" />
              </div>
              <div className="col-8 text-light-grey mt-3 pe-5">
                <h3 style={{ fontWeight: "400" }}>KIMINOTO.Official</h3>
                <div className="row mt-5">
                  <div className="col-5 border border-white text-center me-3">
                    <img
                      src={Follow}
                      className="img-fluid mt-1 "
                      alt="Follow"
                    />
                  </div>
                  <div className="col-5 border border-white text-center d-flex align-items-center ">
                    <img
                      src={chatIcon}
                      className="img-fluid  reduce-size-chat-icon ms-2"
                      alt="chatIcon"
                    />
                    <img
                      src={CHAT}
                      className="img-fluid reduce-size-chat mt-1"
                      alt="CHAT"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 mt-4 ms-5 mb-0  border-start border-dark border-2 ">
            <div className="ms-3">
              <h5 className="mt-4">ABOUT SHOP</h5>
              <p className="m-0 ">KIMINOTO 🍊 อ่านก่อนน้า ‼️ 👇🏻</p>
              <p className="m-0">IG : ZAMIO.OFFICIAL</p>
              <p className="m-0">
                ❣️รบกวนตรวจสอบสินค้า ไซส์ สี และที่อยู่ให้ถูกต้องก่อนกดซื้อ{" "}
              </p>
              <p className="m-0">
                ไม่รับเปลี่ยนหรือคืนสินค้านะครับ ขนาดไซส์แจ้งในรายละเอียดทุกตัว
                ดูให้ครบถ้วน 🙏🏻
              </p>
              <p className="m-0">
                ❣️สินค้าจะรันตามคิวเวลาซื้อจากระบบ
                อาจมีบางตัวที่หมดเลยกดยกเลิกบิล{" "}
              </p>
              <p className="m-0">เนื่องจากทางร้านขายหลายช่องทางครับ 🙏🏻 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandBanner;
