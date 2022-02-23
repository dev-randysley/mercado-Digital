import React from 'react';

const Item = (props) =>{
 
    return(
        <div className="card mb-2" styles={"max-width: 540px"}>
        <div className="row g-1">
          <div className="col-md-5">
            <img src={props.pictureUrl} className="img-fluid rounded-start" alt="Imagen de zapatilla" width={"300px"} height={"100px;"}/>
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.description}</p>
              <p className="card-text">{props.price} $</p>
              <button>+Info</button>
            </div>
          </div>
          
        </div>
      </div>
    )
}

export default Item