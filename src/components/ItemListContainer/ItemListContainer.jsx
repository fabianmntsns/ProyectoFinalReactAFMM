import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'
import { useAsync } from '../../hooks/useAsync';
import { getProducts } from '../../services/firebase/firestore/products';

const ItemListContainer = ({greeting}) => {
    const { categoryId } = useParams()

    const getProducsWithCategory = () => getProducts(categoryId)

    const { data: products, error, loading } = useAsync( getProducsWithCategory, [categoryId])

if(loading){
    return <h1>Cargando productos.... </h1>
}
if(error){
    return <h1> ¡No se pudo obtener los productos!</h1>
}

    return (
        <div>
            <h1 style={{textAlign:'center', fontFamily:'Lucida sans', fontSize:'1.2rem'}}>{greeting}</h1> 
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer