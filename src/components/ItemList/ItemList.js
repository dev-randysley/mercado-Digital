import React from 'react';
import {Item} from '../Item/Item';
import { Link } from 'react-router-dom';


export const ItemList = (props) =>{
    const productos = props.productos
        return (
           productos.map(p => {
               return (
                   
                <div key  = {p.id}>
                    <Item title={p.title} description ={p.description} price = {p.price} pictureUrl = {p.image} id = {p.id}/>
                </div>
            )
           })
        )    
}

