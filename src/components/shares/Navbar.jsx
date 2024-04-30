'use client'
import { Logo } from '@/assets/images'
import Image from 'next/image'
import React from 'react'
import InputField from './InputField';
import Button from './Button';
import { BiDonateHeart } from "react-icons/bi";
import { LuMoonStar } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";
import RightSideItem from './RightSideItem';
import OutsideClickHandler from 'react-outside-click-handler';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isSettings, setIsSettings] = React.useState(false)
    const path = usePathname()

    return (
        <>

            <div className='p-4 flex justify-between'>
                <div className='flex items-center gap-3'>
                    <Image src={Logo} width={50} height={30} alt='logo' />
                    <div className='lg:block hidden'>
                        <h4 className='text-lg font-bold'>সূচিপত্র</h4>
                        <p className='text-sm'>হাদিস পড়ুন শিখুন এবং জানুন</p>
                    </div>
                    <h3 className='text-xl font-bold lg:hidden sm:block hidden text-[#2b9e76]'>আল হাদিস</h3>
                </div>
                <div className='flex lg:w-[45%] 2xl:w-[35%] lg:gap-0 gap-3 justify-between'>
                    <InputField style={'input lg:w-[300px] w-max lg:bg-transparent bg-gray-200'} placeholder={'Search Hadith'} />
                    <Button title={`সাপোর্ট করুন`} icon={<BiDonateHeart />} iconStyle={'xl:flex items-center justify-center hidden gap-2'} style={'primary-clr text-white w-[180px]   rounded-md h-12'} />
                    <div className='flex gap-3'>
                        {path!=='/'&&<div onClick={() => setIsSettings(!isSettings)} className='h-[50px] p-4 2xl:hidden block center rounded-md w-max  primary-clr cursor-pointer'>
                            <IoMdSettings className='text-2xl text-white' />
                        </div>}
                        <div className='h-[50px] p-4  flex items-center justify-center rounded-md w-max border-[1px] lg:bg-transparent bg-gray-200'>
                            <LuMoonStar className='text-2xl' />
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile section */}
            {isSettings && <div className='bg-black/20 h-screen w-full absolute top-0 z-50 '>
                <OutsideClickHandler
                    onOutsideClick={() => {
                        setIsSettings(false)
                    }}
                >
                    <div className='sm:w-[350px] w-full  absolute right-0  px-2 overflow-y-scroll space-y-5  h-full bg-white '>
                        <div className='my-10 flex justify-between px-5'>

                            <h1 className='text-2xl font-semibold'>সেটিংস</h1>
                            <p onClick={() => setIsSettings(false)} className=' text-slate-700 text-2xl cursor-pointer'>X</p>
                        </div>
                        <RightSideItem isMobile={true} />

                    </div>
                </OutsideClickHandler>
            </div>}
        </>
    )
}
