'use client'
import React, { useEffect, useState } from 'react'


export default function TabSection() {
    const [value, setValue] = React.useState("বই");
    const [data, setData] = useState([])
    

    
     
    return (
        <>
            <div className="w-[20%] bg-white  rounded-xl">
                <div className="flex 2xL:text-2xl text-[16px] font-bold border-b-[1px]">
                    <div className={`w-1/2 center py-3 cursor-pointer ${value === "বই" ? "primary-clr text-white" : "text-[#2b9e76] bg-white"} rounded-tl-xl`} onClick={() => setValue("বই")}>বই</div>
                    <div className={`w-1/2 center py-3 cursor-pointer ${value === "অধ্যায়" ? "primary-clr text-white" : "text-[#2b9e76] bg-white"} rounded-tr-xl`} onClick={() => setValue("অধ্যায়")}>অধ্যায়</div>
                </div>
                <div>
                    {value === "বই" && <div>বই</div>}
                    {value === "অধ্যায়" && <h1>অধ্যায়</h1>}
                </div>
            </div>
            <div className="w-[60%] bg-slate-800  rounded-xl ">
                <div className="overflow-y-scroll h-full">
                    {value === "বই" && <h1>বই</h1>}
                    {value === "অধ্যায়" && <h1>অধ্যায়</h1>}
                </div>
            </div>
        </>
    )
}
