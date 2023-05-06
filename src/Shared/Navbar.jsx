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
            <div className='bg-black'>
                    <p className='text-white'>Home</p>
            </div>
        </nav>
    )
}

export default Navbar