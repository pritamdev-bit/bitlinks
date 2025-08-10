import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
      <nav className='flex justify-between py-4 px-8 bg-purple-700 text-white items-center'>
        <div className='text-2xl font-bold'>
            <Link href="/">
            Bitlinks
            </Link>
        </div>
        <ul className='flex gap-6 items-center'>
          <Link href="/"><li className=' transition-all duration-300 hover:scale-115 cursor-pointer'>Home</li></Link>
          <Link href="/about"><li className=' transition-all duration-300 hover:scale-115 cursor-pointer'>About</li></Link>
          <Link href="/shorten"><li className=' transition-all duration-300 hover:scale-115 cursor-pointer'>Shorten</li></Link>
          <Link href="/contact"><li className=' transition-all duration-300 hover:scale-115 cursor-pointer'>Contact</li></Link>
          <li className='flex gap-3'>
            <Link href="/shorten">
            <button className='bg-purple-200 text-purple-700 px-4 py-1 rounded-md transition-all duration-300 hover:scale-105 cursor-pointer'>Try Now</button>
            </Link>
            <Link href="/github">
            <button className='bg-purple-200 text-purple-700 px-4 py-1 rounded-md transition-all duration-300 hover:scale-105 cursor-pointer'>GitHub</button>
            </Link>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar
