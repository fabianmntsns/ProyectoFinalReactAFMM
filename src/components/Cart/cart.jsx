import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import { useCart } from "../../context/CartContext"


const Cart = () => {
    const { cart, totalQuantity, totalToPay } = useCart()

    if(totalQuantity === 0) {
        return(
             <div>
            <h1>No hay productos en el carrito</h1>
            <Link to='/' className="Option" > Inicio </Link>
        </div>
        ) 
    }

    return(
        <div>
            { cart.map (prod => <CartItem key={prod.id}{...prod}/> ) } 
            <h3>Total: ${totalToPay}</h3>

            <Link to='/checkout' className="Option"> Ir al pago</Link>
        </div>
    )
}

export default Cart