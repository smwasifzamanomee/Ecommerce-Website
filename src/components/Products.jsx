import React from 'react'
import { Link } from 'react-router-dom'

const Products = ({ props, handleAddToCart, showAddToCart}) => {
    const { name, price, img, category, seller, stock, id } = props
    return (
        <div>
            <section>
                
                <div className="space-y-8 lg:divide-y lg:divide-gray-100">
                    <div className="pt-8 sm:flex lg:items-end group">
                        <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                            <img className="w-full rounded-md h-32 lg:w-32 object-cover" src={img} alt="text"/>
                        </div>
                        <div>
                            <span className="text-sm text-blue-500">Category: {category}</span>
                            <p className="mt-3 text-lg font-medium leading-6">
                                <Link to={`/product/${id}`} className="text-xl text-gray-800 group-hover:text-gray-500 lg:text-2xl">{name}</Link>
                            </p>
                            <p className="mt-2 text-lg text-gray-500">By: {seller}</p>
                            <p className="mt-2 text-lg text-gray-500">Price: {price}$</p>
                            <p className="mt-2 text-lg text-gray-500">Only {stock} left in stock - Order soon</p>
                            {showAddToCart && <button className="mt-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none" onClick={() => handleAddToCart(props)}>Add to cart</button>}
                        </div>
                    </div>
                    
                </div>
            </section>

        </div>
    )
}

export default Products