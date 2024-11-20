import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[black]'>VibeSpot</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Registrarse</li>
            <li className='p-4'>Iniciar sesión</li>
            <li className='p-4'>Privacidad</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
            
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-white-900 bg-[#9E07E6] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00c892] m-4'>VibeSpot</h1>
            <ul className='uppercase p-4'>
            <li className='p-4 border-b border-white-600'>Home</li>
            <li className='p-4 border-b border-white-600'>Registrarse</li>
            <li className='p-4 border-b border-white-600'>Iniciar sesión</li>
            <li className='p-4'>Privacidad</li> 
            </ul>
        </div>
    </div>
  )
}

export default Navbar