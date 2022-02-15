import React, {useState} from 'react';

const ItemCount = ({stock, initial,onAdd}) =>{
    
    const [contador, setContador]= useState(parseInt(initial));
    const [stockInicial, setStock]= useState(parseInt(stock));
    return(
        <>
        <div className='Cart'>
            <span className ='ProductName'>Zapatillas</span>
            <br/> 
            <br/>    
            <input style={{textAlign:'center'}} type='text' min='1' id='count' value={contador} />  
            <br/> 
            <br/>      
            <button className='Button' onClick={() =>{
                if(contador >1 ){
                    setContador(contador -1);
                }
            }}> - </button>   

            <button className='Button' onClick={()=>{
                if(stockInicial != 0){
                    onAdd(contador);
                }else{
                    alert("No cuenta con Stock para el producto seleccionado")}
           }}>Agregar al Carrito</button>

            <button className='Button' onClick={() =>{
                if(contador < stockInicial){
                    setContador(contador +1);
                    
                }
            }}> + </button>   
        </div>
        </>
    )
}

export default ItemCount