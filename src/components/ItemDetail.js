import React from 'react';

const ItemDetail = (props) =>{
    
    return(
        <div className="card mb-3 w-75 p-1 m-2 mx-auto">
            <img src={"https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"} className="card-img-top" alt="Imagen pendiente" width={"300px"} height={"300px"}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <p className="card-text">{props.price} $</p>
            </div>
        </div>
    )
}

export default ItemDetail