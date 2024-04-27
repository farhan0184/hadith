import React from 'react'
import { CiSearch } from 'react-icons/ci'

export default function InputField({style, placeholder, input}) {
    return (
        <div className={style}>
            <CiSearch className='text-2xl'/>
            <input type="text" placeholder={placeholder} className={`h-12 w-full outline-none lg:block hidden ${input}`} />
        </div>
    )
}
