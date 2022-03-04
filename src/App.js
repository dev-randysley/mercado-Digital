import './App.css';
import {NavBar} from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Promotions } from './components/promotions/Promotions';
import { Cart } from './components/Cart/Cart';
import {CartContext} from './context/cartContext'

function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
      <CartContext>
        <NavBar />
        <Routes>
          <Route path ="/" element={<ItemListContainer />} />
          <Route path ="/category/:categoryID" element={<ItemListContainer />} />
          <Route path ="/item/:itemID" element={<ItemDetailContainer />} />
          <Route path ="/promotions/" element={<Promotions />} />
          <Route path ="/cart" element={<Cart />} />
        </Routes>
        <Footer/>
      </CartContext>
    </BrowserRouter>
    </div>
  );
}

export default App;