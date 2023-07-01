import ItemCount from "../ItemCount/ItemCount";
import styles from './ItemDetail.module.css';




const ItemDetail = ({id, name, price, category, img, stock, description}) => {
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
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
            </footer>
        </article>
    )
}

export default ItemDetail