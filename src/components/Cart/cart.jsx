import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import { useCart } from "../../context/CartContext"
import styles from './cart.module.css'



const Cart = () => {
    const { cart, totalQuantity, totalToPay, clearCart } = useCart()

    if(totalQuantity === 0) {
        return(
             <div>
            <h1>No hay productos en el carrito</h1>
            <Link to='/' className="Option" > Inicio </Link>
        </div>
        ) 
    }

    return(
        <div className={styles.container}>
            { cart.map (prod => <CartItem key={prod.id}{...prod}/> ) } 
            <h3>Total: ${totalToPay}</h3>
            <button onClick={clearCart}> Vaciar carrito </button>
            <Link to='/checkout' className="Option"> Ir al pago</Link>
        </div>
    )
}

export default Cart