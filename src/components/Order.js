import React, { useState } from "react";
import NameDisplay from "./NameDisplay";
import PickProduct from "./PickProduct";
import PurchaseForm from "./PurchaseForm";

const Order = ({ setProduct, product, setSelectedProduct }) => {
  //const [showForm, setShowForm] = useState(false);
  console.log({ inside_order: product });
  
  return (
    <div>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <NameDisplay />
          {product === "Flowers" && <PurchaseForm setSelectedProduct={setSelectedProduct}/>}
          {product === "Bouquets" && <PurchaseForm setSelectedProduct={setSelectedProduct}/>}

          <PickProduct setProduct={setProduct} />
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default Order;
