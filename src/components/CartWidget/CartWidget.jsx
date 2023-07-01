import cart from './assets/cart.svg'
import styles from './CartWidget.module.css'


const CartWidget = () => {
    return(
        <div >
            <img className={styles.carrito} src={cart} alt="cart-widget" />
            0
        </div>
    )
}

export default CartWidget