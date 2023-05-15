import React, { useEffect, useState } from 'react'
import { deleteShoppingCart, getShoppingCart, removeFromDb } from '../../utilities/fakedb'
import fakeData from '../../fakeData/products.json'
import ReviewItems from '../Review/ReviewItems'
import Cart from '../Cart'
import { Link } from 'react-router-dom'
import img from '../../assets/images/giphy.gif'

const OrderReview = () => {
  const [cart, setCart] = useState([])
  const [order, setOrder] = useState(false)


  const removeProduct = (productKey) => {
    console.log('remove clicked', productKey)
    const newCart = cart.filter(product => product.id !== productKey)
    setCart(newCart)

    removeFromDb(productKey)

  }

  const handleOrder = () => {
    setCart([])
    console.log('order placed')
    setOrder(true)
    deleteShoppingCart()

  }

  useEffect(() => {

    const savedCart = getShoppingCart()
    const productKeys = Object.keys(savedCart)
    console.log(productKeys)

    const cartProducts = productKeys.map(key => {
      const product = fakeData.find(product => product.id === key)
      product.quantity = savedCart[key]
      return product
    })
    setCart(cartProducts)

  }, [])
  return (
    <div>
      <div className='flex'>
        <div className='container px-6 mx-auto w-3/4 flex justify-center'>
          <div>
            <div className="relative">
              <div className="relative flex justify-start">
                {/* <span className="pr-3 text-lg font-medium text-neutral-600 bg-white"> All Products </span> */}
              </div>
            </div>
            {
              cart.map(product => <ReviewItems removeProduct={removeProduct} key={product.id} product={product} />)
            }
            {
              order && <div>
                <h1 className='text-2xl font-bold text-center'>Order Placed Successfully</h1>
                <img src={img} alt="" />
                <Link to='/'>
                  <button className='mt-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none'>Shopping Again</button></Link>
              </div>

            }
          </div>
        </div>
        <div className='w-1/4 flex justify-center'>
          <Cart cart={cart} >
            {

              <button onClick={handleOrder} className="mt-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none">Proceed to Order</button>
            }
          </Cart>
        </div>
      </div>


    </div>
  )
}

export default OrderReview