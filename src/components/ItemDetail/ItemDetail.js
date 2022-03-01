import { Button } from "react-bootstrap";
import {ItemCount} from "../ItemCount/ItemCount";

export const ItemDetail = (props) =>{
    
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
              <p className="card-text">{props.price} $</p>
              <ItemCount/>            
            </div>
          </div>
        </div>
      </div>
    )
}

