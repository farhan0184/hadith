import React from 'react'
import { CiSearch } from 'react-icons/ci'

export default function InputField({style}) {
    return (
        <div className={style}>
            <CiSearch className='text-2xl'/>
            <input type="text" placeholder='Search Hadith' className='h-12 w-full outline-none lg:block hidden' />
        </div>
    )
}
