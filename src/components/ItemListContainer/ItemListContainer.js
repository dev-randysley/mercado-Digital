import {ItemList} from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () =>{
    const {categoryID} = useParams();
    const [productos, setProductos] = useState([]);
    const getProducts = async()=>{
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();
        if(categoryID)
            setProductos(result.filter(p =>p.category === categoryID))
        else
            setProductos(result)
    }

    

    useEffect(() =>{
        getProducts();
    },[categoryID])

    
    
    return(
        <div>
        {
            productos.length === 0 ? <p> <h2>Cargando el contenido </h2> </p>:<ItemList productos = {productos} />
        }
            
        </div>
    )
}
