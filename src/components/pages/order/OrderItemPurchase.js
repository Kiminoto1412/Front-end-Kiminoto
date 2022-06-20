function OrderItemPurchase({
  key,
  order,
  index,
  orderItemId,
  orderItemsArr,
  productName,
  productPrice,
  productPic,
  quantity,
  size,
}) {
  return (
    <>
      <div className="d-flex  mt-4">
        <img
          src={productPic}
          style={{ width: "200px", height: "200px" }}
          alt="productPic"
        />
        <div className="flex-grow-1">
          <div className="d-flex justify-content-between mt-3">
            <h5 className="ms-3 fw-bold">{productName}</h5>
            <p className="fw-bold me-3">{productPrice} THB</p>
          </div>
          <div className="row">

            <div className="col-3 d-flex align-items-start">
              <p className="text-dark ms-3 mb-0" style={{ fontWeight: 600 }}>
                Size
              </p>

              <p className=" ms-3 mb-0 " style={{ fontWeight: 600 }}>
                {size}
              </p>
              <div className="col-3 d-flex align-items-start ms-5">
                <p className="text-dark ms-3 mb-0" style={{ fontWeight: 600 }}>
                  Quantity
                </p>

                <p className=" ms-3 mb-0 " style={{ fontWeight: 600 }}>
                  {quantity}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderItemPurchase;
