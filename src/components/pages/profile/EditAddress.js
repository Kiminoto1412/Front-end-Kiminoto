function EditAddress() {
  return (
    <>
      {/* Add a New Address */}
      <h5 className="fw-bold mt-5">Edit Address</h5>
      <div className="form-group mt-3">
        <label for="addressName">Address Name</label>
        <input
          type="text"
          className="form-control mt-3"
          id="addressName"
          placeholder="first name"
        />
      </div>

      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control mt-5"
          id="addressFirstName"
          placeholder="Address  (Room no., Buiding, Street)"
        />
      </div>
      <div className="form-group mt-3">
        <label for="city">City</label>
        <input
          type="text"
          className="form-control mt-3"
          id="city"
          placeholder="Province"
        />
      </div>
      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control mt-5"
          id="district"
          placeholder="District"
        />
      </div>
      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control mt-5"
          id="postalCode"
          placeholder="Postal Code"
        />
      </div>
      <div className="form-group mt-3">
        <label for="moreDetails">More Details</label>
        <textarea
          className="form-control mt-3"
          id="moreDetails"
          rows="7"
        ></textarea>
      </div>

      {/* </form> */}

      <div className="row mt-5 p-0">
        <div className="black-bottom-header"></div>
      </div>
      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-dark mt-5 w-25 text-center">
          Save Address
        </button>
      </div>
    </>
  );
}

export default EditAddress;
