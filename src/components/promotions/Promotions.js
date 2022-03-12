import {ItemList} from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

export const Promotions = () =>{
    const [productos, setProductos] = useState([]);
    const getProducts = async()=>{
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();
        const numRandom = Math.floor(Math.random() * 20)
        setProductos(result.slice(numRandom))
    }

    useEffect(() =>{
      getProducts();
    },[])

    
    return(
        <div>
        {
            productos.length === 0 ? <div> <br/> <Spinner animation="border" /> </div>:<ItemList productos = {productos}/>
        }
            
        </div>
    )
}
