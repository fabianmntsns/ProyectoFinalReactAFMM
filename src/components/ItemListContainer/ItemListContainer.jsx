
import { useState, useEffect } from 'react';
// import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';

import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        const productsRef = !categoryId
        ? collection(db, 'products')
        : query(collection(db, 'products'),where('category', '==', categoryId))
        
        setLoading(true)
        getDocs(productsRef)
        .then(QuerySnapshot => {
            const productsAdapted = QuerySnapshot.docs.map(doc=> {
                const fields = doc.data()
                return { id: doc.id, ...fields }
            })
            setProducts(productsAdapted)
        })
        .finally(() => {
            setLoading(false)
        })
}, [categoryId])

if(loading){
    return <h1>Cargando productos.... </h1>
}

    return (
        <div>
            <h1 style={{textAlign:'center', fontFamily:'Lucida sans', fontSize:'1.2rem'}}>{greeting}</h1> 
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer