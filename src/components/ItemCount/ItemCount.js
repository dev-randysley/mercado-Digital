import {useState} from 'react';
import { Button,Form } from 'react-bootstrap';


export const ItemCount = ({stock, initial,addCard}) =>{
    
    const [contador, setContador]= useState(initial);
    const [stockInicial, setStock]= useState(stock);
    return(
        <>
        <Form>
                <Form.Group className="mb-3">
                <Form.Label>{contador}</Form.Label>
                </Form.Group>
                
                <Button variant="dark" onClick={() =>{
                if(contador >1 ){
                    setContador(contador -1);
                }
            }}> - </Button>   

            <Button variant="dark" onClick={()=>{
                addCard(contador);
           }}>Agregar al Carrito</Button>
            
            <Button variant="dark" onClick={() =>{
                if(contador < stockInicial){
                    setContador(contador +1);
                    
                }
            }}> + </Button>  
            
        </Form>
        </>
    )
}

