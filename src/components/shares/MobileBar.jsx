'use client'
import React, { useState } from 'react'
import SidebarItem from './SidebarItem'
import { data } from '@/util'

export default function MobileBar() {
    const [hover, setHover] = useState(false)
    const [id, setId] = useState(-1)
    const handleMouseOver = (id) => {
        setHover(true)
        setId(id)
    }
    const handleMouseOut = () => {
        setHover(false)
        setId(-1)
    }
    // console.log(hover, id)
    return (
        <div className='absolute bottom-0 w-full py-5 px-7 lg:hidden  bg-white flex justify-between'>
            {
                <SidebarItem data={data} handleMouseOver={handleMouseOver} handleMouseOut={handleMouseOut} hover={hover} id={id} />
            }
        </div>
    )
}
