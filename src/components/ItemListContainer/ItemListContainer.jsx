
import { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';

import { useParams } from 'react-router-dom'


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts
        setLoading(true)
        asyncFunc(categoryId)
        .then(response => {
            setProducts(response)
    })
        .catch(error =>{
            console.error(error)
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