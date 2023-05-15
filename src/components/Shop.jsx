import React, { useEffect } from 'react'
import { useState } from 'react'
import fakedata from '../fakeData/products.json'
import Products from './Products'
import Cart from './Cart'
import { addToDb, getShoppingCart } from '../utilities/fakedb'
import { Link } from 'react-router-dom'

const Shop = () => {
    const first10 = fakedata.slice(0, 10)
    const [products, setProducts] = useState(first10)
    const [cart, setCart] = useState([])

    const handleAddToCart = (props) => {
        const toBeAddedKey = props.id
        const sameProduct = cart.find(product => product.id === toBeAddedKey)
        let count = 1
        let newCart
        if (sameProduct) {
            count = sameProduct.quantity + 1
            sameProduct.quantity = count
            const others = cart.filter(product => product.id !== toBeAddedKey)
            newCart = [...others, sameProduct]
        }
        else {
            props.quantity = 1
            newCart = [...cart, props]
        }
        setCart(newCart)

        addToDb(props.id)
    }

    useEffect(() => {
        const savedCart = getShoppingCart()

        const storedCart = []
        if (products.length) {
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.id === key)
                if (addedProduct) {
                    const quantity = savedCart[key]
                    addedProduct.quantity = quantity
                    storedCart.push(addedProduct)
                }
            }
            setCart(storedCart)
        }
    }, [])

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
                        products.map(product => <Products showAddToCart={true} props={product} key={product.id} handleAddToCart={handleAddToCart} />)
                    }
                </div>
            </div>
            <div className='w-1/4 flex justify-center'>
                <Cart cart={cart} >
                    <Link to="/review">
                        <button className='bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none'>Order Review </button>
                    </Link>
                </Cart>
            </div>
        </div>
    )
}

export default Shop