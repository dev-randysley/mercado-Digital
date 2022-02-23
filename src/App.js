import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { useEffect, useState } from 'react';


function App() {
  const [productos, setProductos] = useState([]);
  const arregloProductos =[
    {id:1
    ,title:"Zapatillas converse"
    ,description:"Zapatillas converse color blanco"
    ,price:1200
    ,pictureUrl:"https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/1/5/156994c_0.jpg" },
    {
    id:2
    ,title:"Zapatillas converse"
    ,description:"Zapatillas converse color negro"
    ,price:2000
    ,pictureUrl:"https://www.converse.com.ar/wp-content/uploads/2020/12/169953C-6-300x300.jpg" 
    }
  ]

useEffect(() =>{
  const promesa = new Promise((resolve,refect) =>{
    setTimeout(() =>{
      resolve(arregloProductos)
    },2000);
  })

  promesa.then(productos =>{
    setProductos(productos)
  })
},[])


  return (
    <div className="App">
      <NavBar />
      <ItemListContainer productos = {productos}/>
    </div>
  );
}

export default App;
