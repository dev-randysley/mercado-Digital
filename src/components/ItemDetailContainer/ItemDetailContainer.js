import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {ItemDetail} from '../ItemDetail/ItemDetail';
import { contextCart } from "../../context/context";
import { useContext } from "react";
import { Spinner } from 'react-bootstrap';

export const ItemDetailContainer = (props) =>{
    const [producto, setProducto] = useState([]);
    const {itemID} = useParams();
    const context = useContext(contextCart);
    const getItem = async()=>{
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();
        setProducto(result.find(p => p.id==itemID))
    }

   
    useEffect(()=>{
        setTimeout(()=>{
           getItem();
        },[2000])
    },[itemID])

    return(
        
            <div>
            {
                producto.length === 0 ? <div> <br/> <Spinner animation="border" /> </div>:
                <ItemDetail id = {producto.id} 
                title={producto.title} 
                description ={producto.description} 
                price = {producto.price} 
                pictureUrl = {producto.image} 
                count ={producto.rating.count} 
                addItem = {context.addItem}
                isInCart = {context.isInCart}
                
                />
            }
            </div>
       
    )
    
}

