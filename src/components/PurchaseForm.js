import React from "react";

const PurchaseForm = ({ setSelectedProduct }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted!!")
        console.log(e.target.value)

    }
  return (
    <div>
      <form className="text-center" onSubmit={handleSubmit}>
        <div className="input-group flex-nowrap my-2">
          <span className="input-group-text" id="addon-wrapping">
            Item Name:{" "}
          </span>
          <input type="text" className="form-control" name="itemName"/>
        </div>
        <button type="submit" className="btn btn-primary">
          Choose Item
        </button>
      </form>
    </div>
  );
};

export default PurchaseForm;
