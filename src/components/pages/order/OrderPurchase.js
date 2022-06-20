import OrderItemPurchase from "./OrderItemPurchase";

function OrderPurchase({ order, index, orderId, totalPrice, orderItemsArr }) {

  return (
    <>
      <h5 className="mt-4">Order number : KM-{orderId}</h5>
      {orderItemsArr.length > 0 ? (
        <>
          {orderItemsArr?.map((item, index) => {
            //เอาของในOrderItems
            console.log(item);
            console.log(item.quantity);
            console.log(item.ProductOption.size);

            return (
              <>
                <OrderItemPurchase
                  key={index}
                  order={item}
                  index={index}
                  orderItemId={item.id}
                  orderItemsArr={item.OrderItems}
                  productName={item.ProductOption.Product.name}
                  productPrice={item.ProductOption.Product.price}
                  productPic={
                    JSON.parse(item.ProductOption.Product.productPic)[0]
                  }
                  quantity={item.quantity}
                  size={item.ProductOption.size}
                />

                <div className="row black-bottom-header">
                  <div className="col-6"></div>
                  <div className="col-5">
                    <h4 className="fw-bold">Payment Summary</h4>
                    {/* SubTotal */}
                    <div className="d-flex justify-content-between">
                      <p>Subtotal</p>
                      <p>{totalPrice - 40} THB</p>
                    </div>
                    {/* Express */}
                    <div className="d-flex justify-content-between">
                      <p>Subtotal</p>
                      <p>40 THB</p>
                    </div>
                    {/* SubTotal */}
                    <div className="d-flex justify-content-between mb-5">
                      <p className="fw-bold">Total</p>
                      <p>{totalPrice} THB</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default OrderPurchase;
