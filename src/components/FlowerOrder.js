import React from "react";
import flowers from "./flower-data";

const FlowerOrder = () => {
  return (
    <div>
      <table className="table">
        <thead>
          <th>ID</th>
          <th>Flower</th>
          <th>Color</th>
          <th>Unit_price</th>
          <th>Quantity_available</th>
        </thead>
        <tbody>
          {flowers.map((flower) => {
            return (
              <tr>
                <td>{flower.id}</td>
                <td>{flower.name}</td>
                <td>{flower.colors}</td>
                <td>{flower.unit_price}</td>
                <td>{flower.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FlowerOrder;
