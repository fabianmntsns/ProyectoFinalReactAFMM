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
            <div className={styles.infoItemName}>
                 <h1> {name}</h1>
            </div>
            <div className={styles.infoItem}>
                <h3>Cantidad: {quantity}</h3>
            </div>
            <div className={styles.infoItem}>
              <h4>Precio x Unidad: $ {price}</h4>  
            </div>
            <div className={styles.infoItem}>
                <h4> SubTotal: ${price * quantity} </h4>
            </div>
            <div className={styles.infoItem}>
                 <button onClick={handleRemove}>-</button>
            {(quantity < stock) ? <button onClick={handleAdd}>+</button> : <></>}
            </div>
        </div> : <></> } </>
    )

}

export default CartItem