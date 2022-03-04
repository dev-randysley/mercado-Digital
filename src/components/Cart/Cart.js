import { useContext } from "react"
import { CartContext } from "../../context/cartContext";

export const Cart = ()=>{
    const cart = useContext(CartContext);

    return(
        <p><h2>Pagina donde se mostrara lo agregado al carrito</h2></p>
    )
}