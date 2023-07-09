import cart from './assets/cart.svg'
import styles from './CartWidget.module.css'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const {totalQuantity} = useCart()
    return(
        <div >
            <Link to='/cart' className={styles.cartWidget} style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img src={cart} alt="cart-widget" />
            {totalQuantity}
            </Link>
        </div>
    )
}

export default CartWidget