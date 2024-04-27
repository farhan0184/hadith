import { Logo } from '@/assets/images'
import Image from 'next/image'
import React from 'react'
import InputField from './InputField';
import Button from './Button';
import { BiDonateHeart } from "react-icons/bi";
import { LuMoonStar } from "react-icons/lu";

export default function Navbar() {
    return (
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
                <InputField style={'input lg:w-[300px] w-max lg:bg-transparent bg-gray-200'} />
                <Button title={`সাপোর্ট করুন`} icon={<BiDonateHeart />} iconStyle={'xl:flex items-center justify-center hidden gap-2'} style={'primary-clr text-white w-[180px]   rounded-md h-12'} />
                <div className='h-[50px] p-4  flex items-center justify-center rounded-md w-max border-[1px] lg:bg-transparent bg-gray-200'>
                    <LuMoonStar className='text-2xl' />
                </div>
            </div>
        </div>
    )
}
