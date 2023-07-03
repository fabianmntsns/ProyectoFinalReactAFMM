import { useCart } from "../../context/CartContext"

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
        <>{(quantity != 0 ) ? <div>
            <br/>
            {name}
            <br/>
            Cantidad: {quantity}
            <br/>
            Precio x Unidad: $ {price}
            <br/>
            <button onClick={handleRemove}>-</button>
            {(quantity < stock) ? <button onClick={handleAdd}>+</button> : <></>}
        </div> : <></>} </>
    )

}



export default CartItem