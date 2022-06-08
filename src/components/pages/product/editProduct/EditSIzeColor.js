export default function EditSIzeColor({
  sizeS,
  setColorS1,
  setColorS2,
  setQuantityS1,
  setQuantityS2,
  sizeM,
  setColorM1,
  setColorM2,
  setQuantityM1,
  setQuantityM2,
  sizeL,
  setColorL1,
  setColorL2,
  setQuantityL1,
  setQuantityL2,
  sizeXL,
  setColorXL1,
  setColorXL2,
  setQuantityXL1,
  setQuantityXL2,
  sizeXXL,
  setColorXXL1,
  setColorXXL2,
  setQuantityXXL1,
  setQuantityXXL2,
}) {
  return (
    <div className="d-flex flex-column">
      <div className="mt-2 d-flex align-items-center ">
        <input
          type="color"
          id="head"
          name="head"
          defaultValue="#B29385"
          onChange={
            sizeS
              ? (e) => setColorS1(e.target.value)
              : sizeM
              ? (e) => setColorM1(e.target.value)
              : sizeL
              ? (e) => setColorL1(e.target.value)
              : sizeXL
              ? (e) => setColorXL1(e.target.value)
              : sizeXXL
              ? (e) => setColorXXL1(e.target.value)
              : null
          }
        />
        <div className="ms-2 me-2">:</div>
        <input
          type="text"
          id="quantity1"
          name="quantity1"
          className="form-control "
          style={{ width: 40 }}
          onChange={
            sizeS
              ? (e) => setQuantityS1(e.target.value)
              : sizeM
              ? (e) => setQuantityM1(e.target.value)
              : sizeL
              ? (e) => setQuantityL1(e.target.value)
              : sizeXL
              ? (e) => setQuantityXL1(e.target.value)
              : sizeXXL
              ? (e) => setQuantityXXL1(e.target.value)
              : null
          }
        ></input>
      </div>
      <div className="mt-2 d-flex align-items-center ">
        <input
          type="color"
          id="head"
          name="head"
          defaultValue="#D0CFCF"
          onChange={
            sizeS
            ? (e) => setColorS2(e.target.value)
            : sizeM
            ? (e) => setColorM2(e.target.value)
            : sizeL
            ? (e) => setColorL2(e.target.value)
            : sizeXL
            ? (e) => setColorXL2(e.target.value)
            : sizeXXL
            ? (e) => setColorXXL2(e.target.value)
            : null
           
          }
        />
        <div className="ms-2 me-2">:</div>
        <input
          type="text"
          id="quantity2"
          name="quantity2"
          className="form-control"
          style={{ width: 40 }}
          onChange={
            sizeS
              ? (e) => setQuantityS2(e.target.value)
              : sizeM
              ? (e) => setQuantityM2(e.target.value)
              : sizeL
              ? (e) => setQuantityL2(e.target.value)
              : sizeXL
              ? (e) => setQuantityXL2(e.target.value)
              : sizeXXL
              ? (e) => setQuantityXXL2(e.target.value)
              : null
          }
        ></input>
      </div>
    </div>
  );
}
