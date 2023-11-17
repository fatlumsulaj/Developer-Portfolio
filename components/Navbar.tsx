import React from 'react'
import Link from 'next/link'
import { Nunito_Sans } from 'next/font/google'
const Navbar = () => {


  return (
    <nav className='flex flex-row justify-between items-center max-container padding-container py-2'>
      <Link href="/" className='purple-text text-[40px] lg:text-[65px]'>𝔉𝔖</Link>
      <div className='text-[17px] lg:text-[20px] flex flex-row gap-5 items-center'>
        <Link href="/projects" className='purple-text cursor-pointer'>Projects</Link>
        <Link href="/contact" className='purple-text purple-border border-[2px] rounded-3xl px-5 py-[6px] hover:bg-[#6E07F3] hover:text-white hover:duration-300 ease-in-out cursor-pointer'>Say Hello</Link>
      </div>
    </nav>
  )
}

export default Navbar