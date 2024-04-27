'use client'
import React, { useState } from 'react'
import { BiDonateHeart } from 'react-icons/bi';
import SidebarItem from './SidebarItem';
import { data } from '@/util';


export default function Sidebar() {
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
        <div className=' relative w-[70px] lg:flex hidden items-center justify-center flex-col xl:gap-10 gap-7 2xl:h-[calc(100vh-83px)] h-[calc(100vh-82px)]  '>
            {
                <SidebarItem data={data} handleMouseOver={handleMouseOver} handleMouseOut={handleMouseOut} hover={hover} id={id}/>
            }
            <div className='absolute bottom-3 p-2 lg:block xl:hidden block primary-clr text-white rounded-md'>
                <BiDonateHeart className='text-2xl' />
            </div>
        </div>
    )
}
