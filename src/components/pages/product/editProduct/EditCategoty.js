import { useEffect } from "react";

function EditCategoty({
  category,
  categoryId,
  setCategory,
  setSubCategory,
  setCategoryId,
  subCategory,
  subCategoryId,
  setSubCategoryId,
}) {
  // console.log(subCategoryId);
  // console.log(subCategory);
  return (
    <>
      <div className="mt-3" style={{ fontWeight: 500 }}>
        Category
      </div>
      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="radio"
          name="category"
          checked={category === "Shirt" ? true : false}
          value="Shirt"
          id="1"
          onClick={(e) => {
            setCategory(e.target.value);
            setCategoryId(e.target.id);
          }}
        />
        <label className="form-check-label" htmlFor="shirt">
          Shirt
        </label>
        {/* nest Shirt */}
        {category === "Shirt" ? (
          <>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="subCategoryShirt"
                value="T-shirt"
                checked={subCategory === "T-shirt" ? true : false}
                id="1"
                onChange={(e) => {
                  setSubCategory(e.target.value);
                  setSubCategoryId(e.target.id);
                }}
              />
              <label className="form-check-label" htmlFor="T-shirt">
                T-shirt
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="subCategoryShirt"
                value="Jacket"
                checked={subCategory === "Jacket" ? true : false}
                id="2"
                onClick={(e) => {
                  setSubCategory(e.target.value);
                  setSubCategoryId(e.target.id);
                }}
              />
              <label className="form-check-label" htmlFor="Jacket">
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
          checked={category === "Pants" ? true : false}
          value="Pants"
          id="2"
          onClick={(e) => {
            setCategory(e.target.value);
            setCategoryId(e.target.id);
          }}
        />
        <label className="form-check-label" htmlFor="Pants">
          Pants
        </label>
        {/* nest Pants */}
        {category === "Pants" ? (
          <>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value="Slacks"
                name="subCategoryPants"
                checked={subCategory === "Slacks" ? true : false}
                id="3"
                onClick={(e) => {
                  setSubCategory(e.target.value);
                  setSubCategoryId(e.target.id);
                }}
              />
              <label className="form-check-label" htmlFor="Slacks">
                Slacks
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="subCategoryPants"
                value="Jeans"
                checked={subCategory === "Jeans" ? true : false}
                id="4"
                onClick={(e) => {
                  setSubCategory(e.target.value);
                  setSubCategoryId(e.target.id);
                }}
              />
              <label className="form-check-label" htmlFor="Jeans">
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
          value="Accessories"
          checked={category === "Accessories" ? true : false}
          id="3"
          onClick={(e) => {
            setCategory(e.target.value);
            setCategoryId(e.target.id);
          }}
        />
        <label className="form-check-label" htmlFor="Accessories">
          Accessories
        </label>
        {/* nest1 */}
        {category === "Accessories" ? (
          <>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="subCategoryAccessories"
                value="Bag"
                checked={subCategory === "Bag" ? true : false}
                id="5"
                onClick={(e) => {
                  setSubCategory(e.target.value);
                  setSubCategoryId(e.target.id);
                }}
              />
              <label className="form-check-label" htmlFor="Bag">
                Bag
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input dis"
                type="radio"
                name="subCategoryAccessories"
                value="Braclets"
                checked={subCategory === "Braclets" ? true : false}
                id="6"
                onClick={(e) => {
                  setSubCategory(e.target.value);
                  setSubCategoryId(e.target.id);
                }}
              />
              <label className="form-check-label" htmlFor="Braclets">
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
