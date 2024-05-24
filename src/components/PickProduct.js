import React, { useState } from "react";

const PickProduct = ({ setProduct }) => {

  return (
    <div>
      <form>
      {/*<label>Do you want to buy flowers or bouquets?</label> */}
      <select className="form-select my-4" onChange={(e) => setProduct(e.target.value)}>
        <option value="Flower_Bouquet">Flower or Bouquet?</option>
        <option value="Flowers">Flowers</option>
        <option value="Bouquets">Bouquets</option>
      </select>
      </form>
    </div>
  );
};

export default PickProduct;
