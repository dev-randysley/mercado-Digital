import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = (props) =>{

    const [producto, setProducto] = useState([]);

    useEffect(() =>{
        const result = props.getProduct();
        result.then((productos) =>{
        setProducto(productos.filter(p => p.id ==1))
        })
      },[])

    return(
        
        producto.map(p => {
            return (
             <div key  = {p.id}>
                 <ItemDetail title={p.title} description ={p.description} price = {p.price} pictureUrl = {p.image} />
             </div>
         )
        })
    )
}

export default ItemDetailContainer