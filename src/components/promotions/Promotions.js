import {ItemList} from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Promotions = () =>{
    const {categoryId} = useParams();
    const [productos, setProductos] = useState([]);
  
    const getProducts = async()=>{
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();
        if(categoryId !== undefined){
            setProductos(result.filter(p => p.category === categoryId))
        }
        const random = ()=>Math.floor((Math.random() * (productos.length)));
        console.log(random)
        setProductos(result)
    }

    useEffect(() =>{
      getProducts();
    },[])

    
    return(
        <div>
            <ItemList productos = {productos}/>
        </div>
    )
}
