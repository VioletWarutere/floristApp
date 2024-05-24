import React, { useState } from 'react'
import ChangeNameForm from './ChangeFlowerNameForm'


const NameDisplay = ( ) => {
  const [flowerName, setFlowerName] = useState(null);
  
  return (
    <div className="container my-4 text-center">
        <h2 className='display-2 text-center py-4'>Hi, I'd like to order a: {flowerName}
         </h2>
         
        {/*{() => {
        
         }*/}
    </div>
  )
}

export default NameDisplay