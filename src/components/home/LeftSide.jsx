import React from 'react'
import Book from './Book'
import Chepter from './Chepter'
import InputField from '../shares/InputField'

export default function LeftSide({value, setValue, data, id, isMobile}) {
    return (
        <div className={`${isMobile?'': "2xl:w-[20%] xl:w-[25%] lg:block hidden bg-white  rounded-xl h-[calc(90vh-50px)] "}`}>
            <div className={`flex 2xL:text-2xl text-[16px] font-bold ${isMobile?'border-t-[1px] border-b-[1px]':"border-b-[1px]"}`}>
                <div className={`w-1/2 center py-3 cursor-pointer ${value === "বই" ? "primary-clr text-white" : "text-[#2b9e76] bg-white"} ${isMobile?'': "rounded-tl-xl"}`} onClick={() => setValue("বই")}>বই</div>
                <div className={`w-1/2 center py-3 cursor-pointer ${value === "অধ্যায়" ? "primary-clr text-white" : "text-[#2b9e76] bg-white"} ${isMobile?'': "rounded-tr-xl"}`} onClick={() => setValue("অধ্যায়")}>অধ্যায়</div>
            </div>
            <div className='  m-3 '>
                <InputField style={'input  w-full lg:bg-transparent bg-gray-200 mb-4'} placeholder={"Search For Filter"} isMobile={isMobile}/>
                {value === "বই" && <Book data={data} />}
                {value === "অধ্যায়" && <Chepter data={data} id={id} />}
            </div>
        </div>
    )
}
