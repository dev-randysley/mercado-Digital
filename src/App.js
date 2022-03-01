import './App.css';
import {NavBar} from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Footer } from './components/Footer/Footer';

function App() {
 
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path ="/" element={<ItemListContainer />} />
      <Route path ="/category/:categoryID" element={<ItemListContainer />} />
      <Route path ="/item/:itemID" element={<ItemDetailContainer />} />
      <Route path ="/promotions/:prom" element={<ItemListContainer />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;