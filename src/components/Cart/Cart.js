import { useContext } from "react";
import { contextCart } from "../../context/context";
import { CartItem } from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";



export const Cart = ()=>{

    const {cart,removeItem, clear} = useContext(contextCart);
    return(
        <>
        <br/>
        <h1 style={{alignText:'center'}}>Bienvenidos al carrito</h1>
        <hr/>
            { 
                cart.length > 0 ?  
                <div>
                    {cart.map(item =><CartItem key ={item.id} item = {item} removeItem ={removeItem}/>)}
                    <br/>
                    <p style={{fontSize:'35px'}}>
                        {`Total: $ ${cart.reduce((acum,item) => acum + (item.price * item.quantity),0).toFixed(2)}`}
                    </p>
                </div>
                :  
                <div>
                    <h2> Carrito vacio</h2>
                    <Link to="/"> Ingrese aqui para realizar una compra</Link>
                  
                </div>
            }
            <br/>
            {
                cart.length >0 ? <Button variant="danger" onClick={() =>clear()}>Vaciar Carrito</Button> :""
            }
            
     
        </>
        )
}
