import React from 'react'


const Card = ({ flower }) => {
  return (
    <div className='mb-4 col-sm-6 col-md-3 mx-sm-2 mx-md-3'>
         <div className="card "
      style={{ width: "18rem" }}
      key={flower.id}
    >
      <img src={flower.image} className="card-img-top img-fluid" alt=""/>
      <div className="card-body">
        <h5 className="card-title">{flower.name}</h5>
        <p className="card-text">Available:{flower.quantity}</p>
        <p className="card-text">Price:{flower.unit_price}</p>
        <button className="btn btn-primary" 
          //data-bs-toggle="modal" data-bs-target="#exampleModal"
          >
          Add to Cart
        </button>
        
      </div>
    </div>
    </div>
  )
}

export default Card