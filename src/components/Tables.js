import React from "react";
import Bouquets from "./Bouquets";
import Flowers from "./Flowers";

const Tables = ({ product }) => {
  console.log({product})
  return (
    <div className="container">
      {product === 'Flowers' && <Flowers />}
      {product === 'Bouquets' && <Bouquets />}
      {product === 'Flower_Bouquet' && <><Flowers /> <Bouquets /></>}
        
        
      </div>
    
  );
};

export default Tables;
