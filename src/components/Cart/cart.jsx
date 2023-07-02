import { useContext } from "react"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext()

    if(totalQuantity === 0) {
        return(
             <div>
            <h1>No hay productos en el carrito</h1>
            <Link to='/' className="Option" > Inicio </Link>
        </div>
        ) 
    }

    return(
        <div>
            { cart.map (p => <CartItem key={p.id}{...p}/> ) }
            <h3>Total: ${total}</h3>
            <button onClick={( clearCart())}className="Button "> Vaciar carrito</button>
            <Link to='/checkout' className="Option"> Ir al pago</Link>
        </div>
    )
}

export default Cart