import React from 'react';

const ItemListContainer = (props) =>{
    // el componente debe tener un icono y ubicarlo en el navBar
    return(
        <div>
            <h1>{props.texto}</h1>
        </div>
    )
}

export default ItemListContainer