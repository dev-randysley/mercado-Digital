import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {ItemDetail} from '../ItemDetail/ItemDetail';
import { contextCart } from "../../context/context";
import { useContext } from "react";
import { Spinner } from 'react-bootstrap';
import { doc, getDoc } from 'firebase/firestore';
import { db } from "../../utils/firebase";

export const ItemDetailContainer = (props) =>{
    const [producto, setProducto] = useState([]);
    const {itemID} = useParams();
    const context = useContext(contextCart);
   
    useEffect(()=>{
        const getData = async()=>{
            const query = doc(db, 'itemCollection',itemID);
            const response = await getDoc(query);
            const item = response.data();
            setProducto({id:itemID, ...item});
            console.log('item despues',producto);
            
        }
        getData();
    },[itemID])

    return(
        
            <div>
            {
                producto.length === 0 ? <div> <br/> <Spinner animation="border" /> </div>:
                <ItemDetail id = {producto.id} 
                title={producto.title} 
                description ={producto.description} 
                price = {producto.price} 
                pictureUrl = {producto.imageId} 
                count ={producto.stock} 
                addItem = {context.addItem}
                isInCart = {context.isInCart}
                
                />
            }
            </div>
       
    )
    
}

