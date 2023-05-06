import React from 'react'
import { useState } from 'react'
import fakedata from '../fakeData/products.json'
import Products from './Products'
import Cart from './Cart'

const Shop = () => {
    const first10 = fakedata.slice(0, 10)
    const [products, setProducts] = useState(first10)
    const [cart, setCart] = useState([])

    const handleAddToCart = (props) => {
        setCart([...cart, props])
        console.log(props)
    }

    return (
        <div className='flex'>
            <div className='container px-6 mx-auto w-3/4 flex justify-center'>
                <div>
                    <div className="relative">
                        <div className="relative flex justify-start">
                            <span className="pr-3 text-lg font-medium text-neutral-600 bg-white"> All Products </span>
                        </div>
                    </div>
                    {
                        products.map(product => <Products props={product} key={product.id} handleAddToCart={handleAddToCart} />)
                    }
                </div>
            </div>
            <div className='w-1/4 flex justify-center'>
                <Cart cart={cart}/>
            </div>
        </div>
    )
}

export default Shop