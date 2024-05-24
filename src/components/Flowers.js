import React from 'react'
import flowers from './flower-data'
import FlowerCards from './FlowerCards'

const Flowers = () => {
  return (
    <div className="row">
        {flowers.map((flower) => {
            return <FlowerCards flower={flower} key={flower.id}/>
        })}

    </div>
  )
}

export default Flowers