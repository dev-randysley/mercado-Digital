import { useContext, useState } from "react";
import { React } from "react";
import { contextCart } from "../../context/context";
import { CartItem } from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FormOrder } from '../FormOrder/FormOrder'
import { collection, Timestamp, addDoc } from 'firebase/firestore';
import { db } from "../../utils/firebase";

export const Cart = ()=>{
    

    const {cart,removeItem, clear} = useContext(contextCart);
    const [orderId,setOrderId] = useState();
    const total = cart.reduce((acum,item) => acum + (item.price * item.quantity),0).toFixed(2);

    const sendOrder = async(e)=>{
        e.preventDefault();
        let order = {
        buyer:{
            name:e.target[1].value,
            phone: e.target[2].value,
            email: e.target[3].value
        },
        items: cart,
        date:Timestamp.fromDate(new Date()),
        total:total
        }
        const querycollection = collection(db, "orders");
        const docRef = await addDoc(querycollection,order)
        setOrderId(docRef.id)
    }

    return(
        <>
        <br/>
        <h1 style={{alignText:'center'}}>Bienvenidos al carrito</h1>
        <hr/>
            { 
                cart.length > 0 ?  
                <div className="container">
                    <div className="row">
                        <div class="col">
                            {cart.map(item =><CartItem key ={item.id} item = {item} removeItem ={removeItem}/>)}    
                        </div>
                   
                        <div className="col">
                            <FormOrder sendOrder ={sendOrder} orderId = {orderId}/>
                            {
                               orderId ? <span>  <br/><h5>El identificador de su orden es: {orderId}</h5></span> : <p></p>
                            }
                        
                        </div>
                       
                    </div>
                    <br/>
                    <p style={{fontSize:'35px'}}>
                        {`Total: $ ${total}`}
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
