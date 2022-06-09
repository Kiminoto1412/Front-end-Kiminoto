function EditCategoty({ category, setCategory, setSubCategory }) {
  return (
    <>
      <div className="mt-3" style={{ fontWeight: 500 }}>Category</div>
      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="radio"
          name="category"
          value="shirt"
          id="shirt"
          onClick={(e) => setCategory(e.target.value)}
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
                id="tShirt"
                onClick={(e) => setSubCategory(e.target.value)}
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
                id="jacket"
                onClick={(e) => setSubCategory(e.target.value)}
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
          value="pants"
          id="pants"
          onClick={(e) => setCategory(e.target.value)}
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
                id="slacks"
                onClick={(e) => setSubCategory(e.target.value)}
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
                id="jeans"
                onClick={(e) => setSubCategory(e.target.value)}
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
          id="accessories"
          onClick={(e) => setCategory(e.target.value)}
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
                id="bag"
                onClick={(e) => setSubCategory(e.target.value)}
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
                id="braclets"
                onClick={(e) => setSubCategory(e.target.value)}
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
