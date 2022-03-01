import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {ItemDetail} from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = (props) =>{
    const [producto, setProducto] = useState([]);
    const {itemID} = useParams();
    const getItem = async()=>{
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();
        setProducto(result.find(p => p.id==itemID))
    }

    const countCard = (cantidad) =>{
        props.countAddToCard(cantidad);
    }

    useEffect(()=>{
        setTimeout(()=>{
           getItem();
        },[2000])
    },[itemID])

    return(
        <div>
        {
            producto.length === 0 ? <p> <h2>Cargando el contenido </h2> </p> :<ItemDetail title={producto.title} description ={producto.description} price = {producto.price} pictureUrl = {producto.image} count ={producto.rating.count} countCard={(cantidad) =>countCard(cantidad)}/>
        }
        </div>
           
    )
    
}

