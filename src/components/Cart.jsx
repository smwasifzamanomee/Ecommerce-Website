import React from 'react'

const Cart = (props) => {
    const cart = props.cart
    const total = cart.reduce((total, product) => total + product.price, 0)
    console.log(total)

    let shipping = 0
    if (total > 1000) {
        shipping = 120.99
    }
    else if (total > 100) {
        shipping = 44.99
    }
    else if (total > 0) {
        shipping = 12.99
    }

    const tax = (total / 10).toFixed(2)

    const grandTotal = (total + shipping + Number(tax)).toFixed(2)

    


    return (
        <div>
            <h1 className='text-xl font-bold'> Order Summary</h1>
            <p className=''> Items Ordered:{cart.length} </p>
            <p className=''> Shipping Cost: {shipping}$ </p>
            <p className=''> Tax + VAT: {tax}$ </p>
            <p className=''> Total Price: {grandTotal}$ </p>


        </div>
    )
}

export default Cart