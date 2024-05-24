//flower shop
import {useState} from 'react'
import Tables from './components/Tables';
import Order from './components/Order';

function App() {
  const [product, setProduct] = useState('Flower_Bouquet');
  const [selectedProduct, setSelectedProduct] = useState(null);
  console.log(product);
  console.log({"selected_product": selectedProduct});


  return (
    <>
    <Order setProduct={setProduct} product={product} setSelectedProduct={setSelectedProduct}/>
    <Tables product={product}/>
    <div className="App">
    </div>
    </>
  );
}

export default App;
