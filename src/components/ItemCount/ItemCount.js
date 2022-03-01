import {useState} from 'react';
import { Button,Form } from 'react-bootstrap';


export const ItemCount = ({stock, initial,onAdd}) =>{
    
    const [contador, setContador]= useState(parseInt(initial));
    const [stockInicial, setStock]= useState(parseInt(stock));
    return(
        <>
        <Form>
            <fieldset >
                <Form.Group className="mb-3">
                <Form.Control id="disabledTextInput" placeholder="Valor" style={{textAlign:'center'}}/>
                </Form.Group>
                
                <Button variant="light" onClick={() =>{
                if(contador >1 ){
                    setContador(contador -1);
                }
            }}> - </Button>   

            <Button variant="light" onClick={()=>{
                if(stockInicial != 0){
                    onAdd(contador);
                }else{
                    alert("No cuenta con Stock para el producto seleccionado")}
           }}>Agregar al Carrito</Button>
            
            <Button variant="light" onClick={() =>{
                if(contador < stockInicial){
                    setContador(contador +1);
                    
                }
            }}> + </Button>  
            </fieldset>
        </Form>
        </>
    )
}

