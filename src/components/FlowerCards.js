import React from "react";


const FlowerCards = ({ flower }) => {
  return (
    <div className="mb-4 col-sm-6 col-md-3 mx-sm-2 mx-md-3">
         <div className="card my-4 mx-2" style={{ width: "18rem" }}>
            {flower.unit_price === 500 ? (
              <img
                src="https://kidlingoo.com/wp-content/uploads/flowers_name_in_english.jpg"
                className="card-img-top"
                alt="..."
              />
            ) : (
              <img
                src="https://img.freepik.com/free-photo/free-photo-flowers-blossom-floral-bouquet-decoration-colorful-beautiful-background-garden-flowers-plant-pattern_1340-26131.jpg"
                className="card-img-top"
                alt="..."
              />
            )}

            <div className="card-body">
              <h5 className="card-title display-6">{flower.name}</h5>
              <p className="card-text">{flower.color}</p>
              <p className="card-text ">
                <span className=" fw-light">Price: </span>Ksh.
                {flower.unit_price}
              </p>
              <p className="card-text">
                <span className="fw-light">Quantity: </span>
                {flower.quantity} stems
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
    </div>

    
  );
};

export default FlowerCards;
