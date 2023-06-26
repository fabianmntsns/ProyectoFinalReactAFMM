import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"

import { Link } from "react-router-dom"

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <>
                <h1>No hay productos seleccionados</h1>
                <Link to='/' className="Option"> Inicio </Link>
            </>
        )
    }

    return (
        <>
         { cart.map(prod => <CartItem key={prod.id} {...prod}/> )}
         <h3>Total: ${total}</h3>
         <button onClick={() => clearCart()} className="Button"> Vaciar carrito</button>
         <Link to='/checkout' className="Option"> Checkout</Link>
        </>
    )
}




export default Cart