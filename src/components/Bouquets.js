import React from 'react'
import bouquets from './bouquetcollectiondata'
import BouquetCards from './BouquetCards'

const Bouquets = () => {
  return (
       <div className="row">
        {bouquets.map((bouquet) => {
            return <BouquetCards bouquet={bouquet} key={bouquet.id}/>
        })} 
    </div>
  )
}

export default Bouquets