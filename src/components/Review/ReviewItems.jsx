import React from 'react'

const ReviewItems = (props) => {
    console.log(props)
    const { name, quantity, img, id, price } = props.product
    return (
        <div>
            <div className="space-y-8 lg:divide-y lg:divide-gray-100">
                <div className="pt-8 sm:flex lg:items-end group">
                    <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                        <img className="w-full rounded-md h-32 lg:w-32 object-cover" src={img} alt="text" />
                    </div>
                    <div>
                        <div className="mt-3 text-lg font-medium leading-6">
                            <div className="text-xl text-gray-800 group-hover:text-gray-500 lg:text-2xl">{name}</div>
                        </div>
                        <p className="mt-2 text-lg text-gray-500">Quantity: {quantity}</p>
                        <p className="mt-2 text-lg text-gray-500">Price: {price}</p>

                        <button className="mt-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none" onClick={() => props.removeProduct(id)}>Remove</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ReviewItems