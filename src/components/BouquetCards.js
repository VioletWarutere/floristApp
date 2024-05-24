import React from 'react'

const BouquetCards = ({ bouquet }) => {
  return (

        <div className="mb-4 col-sm-6 col-md-3 mx-sm-2 mx-md-3">
          <div className="card my-4" style={{ width: "18rem" }}>
              <img
                src="https://www.kremp.com/media/catalog/product/cache/3b39be92499a2c6b0564f59886c970ec/M/i/Mixed-Bouquet-with-Roses.jpg"
                className="card-img-top"
                alt="..."
              />
            <div className="card-body">
              <h5 className="card-title display-6">{bouquet.name}</h5>
              <p className="card-text">{bouquet.color}</p>
              <p className="card-text ">
                <span className=" fw-light">Price: </span>Ksh.
                {bouquet.unit_price}
              </p>
              <p className="card-text">
                <span className="fw-light">Quantity: </span>
                {bouquet.quantity} stems
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
    </div>
  );
    
  
}

export default BouquetCards