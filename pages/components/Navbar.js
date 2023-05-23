import Link from 'next/link'
import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

function Navbar() {
  return (
    <div className='fixed left-0 top-0 w-full z-10 ease-in duration-300  '>
        <div className='max-w-[1240px] m-auto flex justify-between items-center text-white'>
            <Link href='/'>
                <h1 className='font-bold text-3xl'>Moment Photography</h1> 
            </Link>
                <ul className='hidden sm:flex'>
                  <li className='p-4'>  
                    <Link href='/#gallery'>Gallery</Link>
                  </li>
                  <li className='p-4'>  
                    <Link href='/portfolio'>Work</Link>
                  </li>
                  <li className='p-4'>  
                    <Link href='/contact'>Contact</Link>
                  </li>

                </ul>

                {/* Mobile Button */}
            <div className='block sm:hidden'>
                <AiOutlineMenu size={20} />
            </div>
            <div>
                 {/* Mobile Menu*/}
            <ul>
                  <li>  
                    <Link href='/#gallery'>Gallery</Link>
                  </li>
                  <li>  
                    <Link href='/portfolio'>Work</Link>
                  </li>
                  <li>  
                    <Link href='/contact'>Contact</Link>
                  </li>

                </ul>
            </div>
    </div>
    </div>
  )
}

export default Navbar