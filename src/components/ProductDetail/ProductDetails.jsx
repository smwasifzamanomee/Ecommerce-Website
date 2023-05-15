import React from 'react'
import { useParams } from 'react-router-dom'
import fakeData from '../../fakeData/products.json'
import Products from '../Products'

const ProductDetails = () => {
    const {id} = useParams()

    const product = fakeData.find(product => product.id === id)

    console.log(product)
    
    return (
        <div>
            <Products showAddToCart={false} props={product}/>
        </div>
    )
}

export default ProductDetails