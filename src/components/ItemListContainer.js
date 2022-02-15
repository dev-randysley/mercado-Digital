import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = (props) =>{
    // el componente debe tener un icono y ubicarlo en el navBar

    const onAdd = (value) =>{
        alert("Se agrego el producto a su carrito de compras")
        console.log('valor ingresado al carrito: ',value);
    }
    
    return(
        <div>
            <ItemCount stock="10" initial="1" onAdd={onAdd}/> 
        </div>
    )
}

export default ItemListContainer