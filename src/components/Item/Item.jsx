import styles from './Item.module.css'
import { Link } from 'react-router-dom'


// detalles del producto UNICO

const Item = ({id, name, img, price, stock}) => {
    return(
        <article className={styles.CardItem}>
            <header className="Header">
                <h2 className={styles.ItemHeader}>
                    {name}
                </h2>
            </header>
            <picture>
                <img className={styles.ItemImg} src={img} alt={name} />
            </picture>
            <section>
                <p className="Info">
                Precio: {price}
                </p>
                <p className="Info">
                Stock: {stock}
                </p>

            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className='Option'> Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item