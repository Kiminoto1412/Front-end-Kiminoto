import { useEffect } from "react";

function EditCategoty({ subCategoryId,category,categoryId,setCategory,setSubCategory, setCategoryId,subCategory, setSubCategoryId }) {
  
  console.log(subCategoryId)
  return (
    <>
      <div className="mt-3" style={{ fontWeight: 500 }}>Category</div>
      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="radio"
          name="category"
          checked={category === "shirt" ? true:false}
          value="shirt"
          id="1"
          onClick={(e) => {
            setCategory(e.target.value)
            setCategoryId(e.target.id)}}
        />
        <label className="form-check-label" htmlFor="shirt">
          Shirt
        </label>
        {/* nest Shirt */}
        {category === "shirt" ? (
          <>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="subCategoryShirt"
                value="tShirt"
                checked={subCategory === "tShirt" ? true:false}
                id="1"
                onClick={(e) => {setSubCategory(e.target.value)
                setSubCategoryId(e.target.id)
                }}
              />
              <label className="form-check-label" htmlFor="tShirt">
                T-shirt
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="subCategoryShirt"
                value="jacket"
                checked={subCategory === "jacket" ? true:false}
                id="2"
                onClick={(e) => {setSubCategory(e.target.value)
                  setSubCategoryId(e.target.id)
                  }}
              />
              <label className="form-check-label" htmlFor="jacket">
                Jacket
              </label>
            </div>
          </>
        ) : (
          <div></div>
        )}

        <input
          className="form-check-input"
          type="radio"
          name="category"
          checked={category === "pants" ? true:false}
          value="pants"
          id="2"
          onClick={(e) => {
            setCategory(e.target.value)
            setCategoryId(e.target.id)}}
        />
        <label className="form-check-label" htmlFor="pants">
          Pants
        </label>
        {/* nest Pants */}
        {category === "pants" ? (
          <>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value="slacks"
                name="subCategoryPants"
                checked={subCategory === "slacks" ? true:false}
                id="3"
                onClick={(e) => {setSubCategory(e.target.value)
                  setSubCategoryId(e.target.id)
                  }}
              />
              <label className="form-check-label" htmlFor="slacks">
                Slacks
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="subCategoryPants"
                value="jeans"
                checked={subCategory === "jeans" ? true:false}
                id="4"
                onClick={(e) => {setSubCategory(e.target.value)
                  setSubCategoryId(e.target.id)
                  }}
              />
              <label className="form-check-label" htmlFor="jeans">
                Jeans
              </label>
            </div>
          </>
        ) : (
          <div></div>
        )}
        {/* nest 3 */}
        <input
          className="form-check-input"
          type="radio"
          name="category"
          value="accessories"
          checked={category === "accessories" ? true:false}
          id="3"
          onClick={(e) => {
            setCategory(e.target.value)
            setCategoryId(e.target.id)}}
        />
        <label className="form-check-label" htmlFor="accessories">
          Accessories
        </label>
        {/* nest1 */}
        {category === "accessories" ? (
          <>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="subCategoryAccessories"
                value="bag"
                checked={subCategory === "bag" ? true:false}
                id="5"
                onClick={(e) => {setSubCategory(e.target.value)
                  setSubCategoryId(e.target.id)
                  }}
              />
              <label className="form-check-label" htmlFor="bag">
                Bag
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input dis"
                type="radio"
                name="subCategoryAccessories"
                value="braclets"
                checked={subCategory === "braclets" ? true:false}
                id="6"
                onClick={(e) => {setSubCategory(e.target.value)
                  setSubCategoryId(e.target.id)
                  }}
              />
              <label className="form-check-label" htmlFor="braclets">
                Braclets
              </label>
            </div>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}

export default EditCategoty;
