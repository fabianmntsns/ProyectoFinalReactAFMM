import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import { useCart } from "../../context/CartContext"
import styles from './cart.module.css'

const Cart = () => {
    const { cart, totalQuantity, totalToPay, clearCart } = useCart()

    if(totalQuantity === 0) {
        return(
        <div>
            <div className={styles.noProducts}>
                <h1>No hay productos en el carrito</h1>
            </div>
            <div>
                 <Link to='/' className={styles.buttonInit} > Inicio </Link>
            </div>
        </div>
        ) 
    }

    return(
        
        <div className={styles.container}>
            { cart.map (prod => <CartItem key={prod.id}{...prod}/> ) } 
            <div className={styles.infoItemTotal}>
                <h3>Total: ${totalToPay}</h3>
            </div>
            <div className={styles.ButtonsCart}>            
            <button className={styles.buttonClearCart} onClick={clearCart}> Vaciar carrito </button>
            <Link to='/checkout' className={styles.buttonCheckout}> Ir al pago</Link>
            </div>
        </div>
    )
}

export default Cart