import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { useEffect, useState } from 'react';


function App() {
  const [productos, setProductos] = useState([]);
  
  

useEffect(() =>{

  const getProducts = async()=>{

    const response = await fetch('https://fakestoreapi.com/products');
    const result = await response.json();
    setProductos(result)
   
  }
  getProducts();
},[])

const getItems = () =>{
  return new Promise((resolve, refect) =>{
      setTimeout(() =>{
          fetch('https://fakestoreapi.com/products')
          .then((response) =>{
            resolve(response.json());
          })
      },2000)
  })
}


  return (
    <div className="App">
      <NavBar />
      <ItemListContainer productos = {productos}/>
      <ItemDetailContainer getProduct = {getItems}/>
    </div>
  );
}

export default App;
