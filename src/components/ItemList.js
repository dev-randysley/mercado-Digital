import React from 'react';
import Item from './Item';

const ItemList = (props) =>{
    const productos = props.productos
        return (
           productos.map(p => {
               return (
                <div key  = {p.id}>
                    <Item title={p.title} description ={p.description} price = {p.price} pictureUrl = {p.image} />
                </div>
            )
           })
        )
        
           
}

export default ItemList