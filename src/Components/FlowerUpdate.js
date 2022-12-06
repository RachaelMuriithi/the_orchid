import React, { useContext } from "react";
import { FlowerContext } from "./FlowerContext";

// import "./Flowerupdate.css";

function FlowerUpdate() {
  const {
    handleCancelUpdate,
    handleOnChangeUpdate,
    handleOnSubmitUpdate,
    flower,
  } = useContext(FlowerContext);
  const renderForm = () => (
    <div className="popup">
      <form className="edit-form" onSubmit={handleOnSubmitUpdate}>
        <div className="form-section-1">
          <div className="section-1">
            <label className="update-label">Name</label>
            <br></br>
            <input
              type="text"
              value={flower.name}
              name="name"
              placeholder="Change name"
              className="input-update"
              onChange={handleOnChangeUpdate}
            />
            <br></br>
          </div>
        </div>

        <label className="update-label">Image Url</label>
        <br></br>
        <input
          type="text"
          value={flower.image_url}
          name="image_url"
          placeholder="Change title"
          className="input-update"
          id="image-update"
          onChange={handleOnChangeUpdate}
        />
        <br></br>

        <br></br>
        <label className="update-label">Description</label>
        <br></br>

        <textarea
          id="description-update"
          className="addbook-area"
          name="description"
          cols="50"
          rows="4"
          value={flower.description}
          onChange={handleOnChangeUpdate}
        ></textarea>
        <br></br>
        <div className="update-btns">
          <button
            className="update-btn"
            id="cancel-btn"
            onClick={handleCancelUpdate}
          >
            Cancel
          </button>
          <button type="submit" className="update-btn" id="update-btn">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );

  return renderForm();
}

export default FlowerUpdate;
