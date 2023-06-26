import { useContext } from 'react'
import cart from './assets/cart.svg'
import styles from './CartWidget.module.css'
import { CartContext } from '../../context/CartContext'


const CartWidget = () => {

    const {totalQuantity} = useContext(CartContext)    
    return(
        <div >
            <img className={styles.carrito} src={cart} alt="cart-widget" />
            {totalQuantity()}
        </div>
    )
}

export default CartWidget