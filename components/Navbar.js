import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
      <nav className='flex justify-between py-4 sm:px-8 px-2 bg-purple-700 text-white items-center'>
        <div className='text-2xl font-bold'>
            <Link href="/">
            Bitlinks
            </Link>
        </div>
        <ul className='flex sm:gap-6 items-center'>
          <Link className='md:block sm:hidden' href="/"><li className=' transition-all duration-300 hover:scale-115 cursor-pointer hidden md:block'>Home</li></Link>
          <Link className='md:block sm:hidden' href="/about"><li className=' transition-all duration-300 hover:scale-115 cursor-pointer hidden md:block'>About</li></Link>
          <Link className='md:block sm:hidden' href="/shorten"><li className=' transition-all duration-300 hover:scale-115 cursor-pointer hidden md:block'>Shorten</li></Link>
          <Link className='md:block sm:hidden' href="https://www.itspritam.space/" target='_blank'><li className=' transition-all duration-300 hover:scale-115 cursor-pointer hidden md:block'>Contact</li></Link>
          <li className='flex gap-3 items-center'>
            <Link href="/shorten">
            <button className='bg-purple-200 text-purple-700 px-4 py-1 rounded-md transition-all duration-300 hover:scale-105 cursor-pointer'>Try Now</button>
            </Link>
            <Link href="https://github.com/pritamdev-bit/bitlinks" target='_blank'>
            <button className='bg-purple-200 text-purple-700 px-4 py-1 rounded-md transition-all duration-300 hover:scale-105 cursor-pointer'>GitHub</button>
            </Link>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar
