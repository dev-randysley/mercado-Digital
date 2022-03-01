import './App.css';
import {NavBar} from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Promotions } from './components/promotions/Promotions';
import { useState } from 'react';
import { Cart } from './components/Cart/Cart';

function App() {
  const [count,setCount] = useState(0);
  const countCard = (cantidad) =>{
    setCount(prev => prev +cantidad)
}
 
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar cantidad={count} />
    <Routes>
      <Route path ="/" element={<ItemListContainer />} />
      <Route path ="/category/:categoryID" element={<ItemListContainer />} />
      <Route path ="/item/:itemID" element={<ItemDetailContainer countAddToCard = {(cantidad)=>countCard(cantidad)}/>} />
      <Route path ="/promotions/" element={<Promotions />} />
      <Route path ="/cart" element={<Cart />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;