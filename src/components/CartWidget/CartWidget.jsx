import { useContext } from 'react'
import cart from './assets/cart.svg'
import styles from './CartWidget.module.css'
import { CartContext } from '../../context/CartContext'


const CartWidget = () => {

    const {carQuantity} = useContext(CartContext)    
    return(
        <div >
            <img className={styles.carrito} src={cart} alt="cart-widget" />
            {carQuantity()}
        </div>
    )
}

export default CartWidget