
const CartItem = ({ name, quantity, price }) => {
    

    return (
        <div>
            <br/>
            {name}
            <br/>
            Cantidad: {quantity}
            <br/>
            Precio x Unidad: $ {price}
            <br/>
            <button onClick='Button'>Eliminar producto</button>
        </div>
    )

}



export default CartItem