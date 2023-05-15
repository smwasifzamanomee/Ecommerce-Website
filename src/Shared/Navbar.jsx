import React from 'react'
import logo from '../assets/images/Logo.svg'

const Navbar = () => {
    return (
        <nav>
            <div className='flex justify-center items-center'>
                <div className=' font-bold'>
                    Ecommerce Website

                    <img src={logo} alt="logo" />
                </div>
            </div>
            <div className='bg-black flex justify-center gap-10 py-6'>
                    <a href='/' className='text-white'>Shop</a>
                    <a href='/review' className='text-white'>Order Review</a>
                    <p className='text-white'>Manage Inventory</p>
            </div>
        </nav>
    )
}

export default Navbar