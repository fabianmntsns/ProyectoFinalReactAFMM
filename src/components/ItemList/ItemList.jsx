import Item from "../Item/Item"
import styles from './ItemList.module.css'

// presentación 

const ItemList = ({products}) => {  // products es un props que viene de ItemListContainer.jsx
    return(
        <div className={styles.ListGroup}>
                {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>

    )
}


export default ItemList 