import { useState } from "react";
import { contextCart } from "./context";


export const CartContext = ({children})=>{

    const [productos,setProductos] = useState([]);
    const [count, setCount] = useState(0);

    const addItem=(item, quantity) =>{
        setProductos([...productos,{...item,quantity:quantity}]);
        setCount(prev => prev + quantity);
    }

    const removeItem = (itemId)=>{
        setProductos(prev =>prev.filter(p => p.item.id ===itemId))
    }

    const clear =() =>{
        setProductos([])
    }

    const isInCart=(itemId)=>{
        if(productos.length >0){
            return productos.some(p => p.id ==itemId)
        }
        return false
    }

    

    return (
        <contextCart.Provider value={{productos,addItem, isInCart, count}}>
            {children}
        </contextCart.Provider>
    )



}
