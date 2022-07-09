export default function EditSIzeColor({
  sizeArr,
  size,
  color1,
  color2,
  color3,
  setColor1,
  setColor2,
  setColor3,
  quantity1,
  quantity2,
  quantity3,
  setQuantity1,
  setQuantity2,
  setQuantity3,
}) {
  // console.log(sizeArr);
  return (
    <div className="d-flex flex-column">
      <div className="mt-2 d-flex align-items-center ">
        <input
          type="color"
          id={size}
          name="head"
          defaultValue={color1}
          value={color1}
          onChange={(e) => setColor1(e.target.value)}
        />
        <div className="ms-2 me-2">:</div>
        {
          <input
            type="text"
            id={size}
            name="quantity1"
            className="form-control "
            style={{ width: 40 }}
            // value={sizeSArr[0].storage}
            // value={quantity1}
            
            placeholder={sizeArr?.filter((el) => el.color === color1)[0]?.storage || 0}
            onChange={(e) => {
              e.preventDefault()
              setQuantity1(e.target.value)}}
          ></input>
        }
      </div>
      <div className="mt-2 d-flex align-items-center ">
        <input
          type="color"
          id={size}
          name="head"
          defaultValue={color2}
          value={color2}
          onChange={(e) => setColor2(e.target.value)}
        />
        <div className="ms-2 me-2">:</div>
        <input
          type="text"
          id={size}
          name="quantity2"
          className="form-control"
          style={{ width: 40 }}
          // value={quantity2}
          placeholder={sizeArr?.filter((el) => el.color === color2)[0]?.storage || 0}
          onChange={(e) => setQuantity2(e.target.value)}
        ></input>
      </div>
      <div className="mt-2 d-flex align-items-center ">
        <input
          type="color"
          id={size}
          name="head"
          defaultValue="#D0CFCF"
          value={color3}
          onChange={(e) => setColor3(e.target.value)}
        />
        <div className="ms-2 me-2">:</div>
        <input
          type="text"
          id={size}
          name="quantity2"
          className="form-control"
          style={{ width: 40 }}
          // defaultValue={quantity3}
          placeholder={sizeArr?.filter((el) => el.color === color3)[0]?.storage || 0}
          onChange={(e) => setQuantity3(e.target.value)}
        ></input>
      </div>
    </div>
  );
}
