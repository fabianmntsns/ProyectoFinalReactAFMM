import { useCart } from "../../context/CartContext"
import styles from './CartItem.module.css'

const CartItem = ({ id, name, quantity, price, stock }) => {

    const { updateQuantityItem } = useCart()

    const handleRemove = (e) => {
        e.stopPropagation()
        updateQuantityItem(id, -1)
    }

    const handleAdd = (e) => {
        e.stopPropagation()
        updateQuantityItem(id, +1)
    }
    

    return (
        <>{(quantity != 0 ) ? 
        <div className={styles.container}>
            <h1> {name}</h1>
            <h3>Cantidad: {quantity}</h3>
            <h4>Precio x Unidad: $ {price}</h4>
            <h4> SubTotal: ${price * quantity} </h4>
            <button onClick={handleRemove}>-</button>
            {(quantity < stock) ? <button onClick={handleAdd}>+</button> : <></>}
        </div> : <></> } </>
    )

}



export default CartItem