import React, { useContext, useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'
import { Transition } from "@headlessui/react"


const Header = () => {
    const [categories, setCategories] = useState([])
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      getCategories()
          .then((newCategories) => setCategories(newCategories))
    }, [])

  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='border-b w-full inline-block justify-between border-white-400 mt-8 py-4'>
            <div className='float-left block'>
                <Link href='/'>
                    <span className='cursor-pointer font-bold text-4xl text-white hover:bg-gray-600 px-3 py-1 rounded-lg transition duration-500'>
                        Blog
                    </span>
                </Link>
            </div>
            <div className='hidden float-left md:contents'>
                {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className='float-right mt-2 align-middle text-white ml-4 font-medium md:font-semibold cursor-pointer hover:bg-gray-600 md:px-2 py-3 rounded-lg transition duration-500'>
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
    
  )
}

export default Header