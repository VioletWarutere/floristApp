import React from 'react'
import bouquets from './bouquetcollectiondata';

const BouquetOrder = () => {
  return (
    <div>
        <table className="table table-hover">
        <thead>
          <th>ID</th>
          <th>Bouquet</th>
          <th>Color</th>
          <th>Price</th>
          <th>Quantity</th>
        </thead>
        <tbody>
          {bouquets.map((bouquet) => {
            return (
              <tr className='table-info'>
                <td>{bouquet.id}</td>
                <td>{bouquet.name}</td>
                <td>{bouquet.colors}</td>
                <td>{bouquet.unit_price}</td>
                <td>{bouquet.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default BouquetOrder