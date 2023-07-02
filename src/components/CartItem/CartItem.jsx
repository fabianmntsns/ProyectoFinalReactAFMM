
const CartItem = ({ id, name, quantity, price }) => {
    

    return (
        <div>
            <br/>
            {name}
            <br/>
            Cantidad: {quantity}
            <br/>
            Precio x Unidad: $ {price}
            <br/>
        </div>
    )

}



export default CartItem