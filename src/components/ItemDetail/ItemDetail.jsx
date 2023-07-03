import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import styles from './ItemDetail.module.css';
import { Link } from "react-router-dom";

import { useCart } from "../../context/CartContext";




const ItemDetail = ({id, name, price, category, img, stock, description }) => {
    const [ quantityAdded , setQuantityAdded ] = useState(0)

    const { addItem } = useCart()

    const handleOnAdd =(quantity) => {
        console.log(quantity)
        setQuantityAdded(quantity)

        const objProduct = {
            id, name, price, quantity, stock 
        }

        addItem(objProduct)
    }

    return(
        <article className={styles.CardItem}>
            <header className="Header">
                <h2 className={styles.ItemHeader}>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className={styles.ItemImg} />
            </picture>
            <section>
                <p className="Info">
                Categoria: {category}</p>
                <p className="Info">
                {description}</p>
                <p className="Info">
                Precio: {price}</p>
            </section>
            <footer className="ItemFooter">
                {
                    quantityAdded > 0 ? (
                <Link to='/cart' className="Option "> Finalizar compra </Link>
                    ) : (
                     <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />   
                    )
                }

                
            </footer>
        </article>
    )
}

export default ItemDetail