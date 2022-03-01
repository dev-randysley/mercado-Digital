import {ItemCount} from "../ItemCount/ItemCount";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ItemDetail = (props) =>{
  const [cantidad,setCantidad] = useState(0);
  const onAdd = (cantidadAgregarCarrito) =>{
    
    setCantidad(cantidadAgregarCarrito);
    // pasamos la informacion de la cantidada del carrito al componente padre
    props.countCard(cantidadAgregarCarrito);
    
}
    
    return(
        <div className="card mb-2 w-75 p-2 m-4 mx-auto">
        <div className="row g-1">
          <div className="col-md-6">
            <img src={props.pictureUrl} className="img-fluid rounded-start" alt="Imagen de zapatilla" width={"300px"} height={"100px;"}/>
          </div>
          <div className="col-md-3">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.description} $</p>
              <p className="card-text">Cantidad disponible {props.count - cantidad} </p>
              <p className="card-text">{props.price} $</p>
             {
              cantidad ===0 ? <ItemCount stock={props.count} initial ={1} addCard={(cantidad) =>{onAdd(cantidad)}} /> : 
              <Button> <Link to="/cart" className='nav-link' style={{color:'white'}}>Terminar Compra</Link></Button>
             }

            </div>
          </div>
        </div>
      </div>
    )
}

