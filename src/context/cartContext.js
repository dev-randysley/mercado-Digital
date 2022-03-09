import { useState } from "react";
import { contextCart } from "./context";


export const CartContext = ({children})=>{

    const [cart,setCart] = useState([]);
    const [count, setCount] = useState(0);

    const addItem=(item, quantity) =>{
        let items = { ...item, quantity};
        if(!isInCart(item.id)){
            setCart([...cart,items])
            setCount(prev => prev + quantity);
        }
    }

    const removeItem = (itemId)=>{
        let item = getItem(itemId)
        setCart(cart.filter(p => p.id !==itemId))
        setCount(prev => prev -item.quantity)
    }

    const getItem=(itemId)=>{
        return cart.find(p => p.id === itemId)
    }

    const clear =() =>{
        setCart([])
        setCount(0)
    }

    const isInCart=(itemId)=>{
        if(cart.length >0){
            return cart.some(p => p.id === itemId)
        }
        return false
    }

    

    return (
        <contextCart.Provider value={{cart,addItem, isInCart, count,setCount, removeItem,clear}}>
            {children}
        </contextCart.Provider>
    )



}
