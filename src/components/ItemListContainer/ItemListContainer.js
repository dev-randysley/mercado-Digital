import {ItemList} from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () =>{
    const {categoryID,prom} = useParams();
    console.log(categoryID);
    console.log(prom);
    const [productos, setProductos] = useState([]);
    let promotions =[]
    const getProducts = async()=>{
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();
        if(categoryID)
            setProductos(result.filter(p =>p.category === categoryID))
        else if(prom){
            const PROMOTIONS = 4;
            promotions =[]
            for(let i = 0 ;i< PROMOTIONS;i++){
                let numRandom = Math.floor(Math.random() * productos.length)
                console.log("numero aleatorio:",numRandom);
                promotions.push(result[numRandom]);
            }
            setProductos(promotions)
        }
        else
            setProductos(result)
    }

    useEffect(() =>{
     getProducts();
    },[categoryID,prom])

    const onAdd = (value) =>{
        alert("Se agrego el producto a su carrito de compras")
        console.log('valor ingresado al carrito: ',value);
    }
    
    return(
        <div>
        {
            productos.length === 0 ? <p> <h2>Cargando el contenido </h2> </p>:<ItemList productos = {productos}/>
        }
            
        </div>
    )
}
