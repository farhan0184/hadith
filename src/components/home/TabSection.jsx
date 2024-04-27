'use client'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Loading from '../shares/Loading';
import Book from './Book';
import InputField from '../shares/InputField';
import { IoLibraryOutline } from 'react-icons/io5';
import { GiBookmark } from "react-icons/gi";
import { GiOpenBook } from "react-icons/gi";
import { FaStarAndCrescent } from "react-icons/fa6";
import { IoCopyOutline,IoBookmarkOutline,IoShareSocialOutline  } from "react-icons/io5";
export default function TabSection() {
    const [value, setValue] = React.useState("বই");
    const [id, setId] = React.useState(0)
    const [read, setRead] = useState(227)
    const [isRead, setIsRead] = useState(true)

    const { data, isLoading } = useSelector((state) => state.api)
    console.log(data)
    return (
        <>
            {isLoading ? <Loading /> : <>
                <div className="lg:w-[20%] lg:block hidden bg-white  rounded-xl h-[calc(90vh-40px)]">
                    <div className="flex 2xL:text-2xl text-[16px] font-bold border-b-[1px]">
                        <div className={`w-1/2 center py-3 cursor-pointer ${value === "বই" ? "primary-clr text-white" : "text-[#2b9e76] bg-white"} rounded-tl-xl`} onClick={() => setValue("বই")}>বই</div>
                        <div className={`w-1/2 center py-3 cursor-pointer ${value === "অধ্যায়" ? "primary-clr text-white" : "text-[#2b9e76] bg-white"} rounded-tr-xl`} onClick={() => setValue("অধ্যায়")}>অধ্যায়</div>
                    </div>
                    <div className='  m-3 '>
                        <InputField style={'input  w-full lg:bg-transparent bg-gray-200 mb-4'} placeholder={"Search For Filter"} />
                        {value === "বই" && <Book data={data} setId={setId} setValue={setValue} />}
                        {value === "অধ্যায়" && <div>
                            {data[id]?.chapters?.map(item => (
                                <div key={item.id} class="flex gap-2 p-3 rounded-xl hover:bg-[#2b9e76]/20 cursor-pointer">
                                    <div className='w-[50px] h-[50px] bg-[#2b9e76] center' style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", borderRadius: '1em' }}>
                                        <p className='text-xl font-bold text-white'>{item.id}</p>
                                    </div>
                                    <div className='w-full '>
                                        <h1 className='text-[16px] font-semibold'>{item.title}</h1>
                                        <p className='text-gray-400 mt-2'>সর্বমোট হাদিস - {item.hadith_range}</p>
                                    </div>
                                </div>
                            ))}
                        </div>}
                    </div>
                </div>
                <div className="lg:w-[60%] w-full   rounded-xl ">
                    <div className="overflow-y-scroll h-[calc(90vh-40px)]">
                        {/* {value === "বই" && <div>
                            <div className='p-3 flex gap-2 bg-gray-200 rounded-t-xl'>
                                <IoLibraryOutline className='text-xl text-gray-500' />
                                <p className='text-[14px] font-semibold'>{data[id]?.title}</p>
                            </div>
                            <div className='p-5'>
                                <div className='flex justify-between items-center'>
                                    <h1 className='text-xl text-gray-700 font-semibold'>{data[id]?.title}</h1>
                                    <InputField style={'input w-[300px]  bg-gray-200 mb-4'} input={'bg-gray-200'} placeholder={"Search For Filter"} />
                                </div>
                                <div className='inline-block text-[14px] my-5'>
                                    <p className='text-gray-800 '>{data[id]?.book_descr.slice(0, read)}</p>
                                    <div className={`${data[id]?.book_descr.length > 0 ? 'block' : 'hidden'} text-[#2b9e76]`}>
                                        {isRead ? <button onClick={() => {
                                            setRead(1000)
                                            setIsRead(!isRead)
                                        }}>আরো দেখুন</button> : <button onClick={() => {
                                            setRead(227)
                                            setIsRead(!isRead)
                                        }}>লুকান</button>}
                                    </div>
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>} */}
                        {<div>
                            <div className='p-3 flex gap-2 bg-gray-200 rounded-t-xl'>
                                <IoLibraryOutline className='text-xl text-gray-500' />
                                <p className='text-[14px] font-semibold'>{data[id]?.title}</p>
                            </div>
                            <div className=''>
                                <div className='py-6 px-5 bg-white flex justify-between items-center rounded-b-xl'>
                                    <div className='flex gap-4'>

                                        <GiBookmark className='text-7xl' />
                                        <div>
                                            <h1 className='tet-3xl font-semibold mb-4'>{data[id]?.title}</h1>
                                            <p className='text-gray-400 mt-2'>সর্বমোট হাদিস - {data[id]?.total_hadiths}</p>
                                        </div>
                                    </div>
                                    <h1 className='text-4xl font-semibold'>{data[id]?.book_title_ar}</h1>
                                </div>
                            </div>

                            {data[id]?.chapters.map(item => (
                                <div key={item.id}>
                                    <div className='px-5 py-7 rounded-xl bg-white my-4'>
                                        <div className='flex gap-6 items-center'>
                                            <div className='w-12 h-12 bg-[#2b9e76] center rounded-xl'><p className='text-xl font-bold text-white'>{item.id}</p></div>
                                            <h1 className='text-2xl text-gray-500 font-semibold'>{item.title}</h1>
                                        </div>
                                    </div>
                                    <div className='space-y-6 '>
                                        {data[id]?.chapters[id].sections?.map(item => (
                                            <>
                                                <div className='px-5 py-7 rounded-xl bg-white text-black'>
                                                    <div className='flex gap-3'>
                                                        <GiOpenBook className='text-2xl text-[#2b9e76]' />
                                                        <p className='font-semibold'>{item.section_number}</p>
                                                    </div>
                                                    <p className='mt-4'>{item.title}</p>

                                                </div>
                                                {item?.hadiths?.map(item => (
                                                    <div key={item.id} className='px-5 py-7 rounded-xl bg-white text-black'>
                                                        <div className='flex gap-3 items-center'>
                                                            <FaStarAndCrescent className='text-2xl text-[#2b9e76]' />
                                                            <p className='text-2xl text-[#2b9e76] font-semibold'>{item.id}</p>
                                                        </div>
                                                        <div className='mt-4 space-y-5'>
                                                            <h1 className=' text-right text-2xl'>{item.ar}</h1>
                                                            <div className='pb-10'>
                                                                <p className='  text-[16px] mb-3 font-semibold text-[#2b9e76]'>{item.narrator}</p>
                                                                <p className='  text-xl'>{item.bn}</p>
                                                            </div>
                                                            <div className='flex justify-between items-center'>
                                                                <div>
                                                                    <p>হাদিসের মান : <span className='p-2 primary-clr text-white ml-1 rounded-md'>{item.grade}</span></p>
                                                                </div>
                                                                <div className='flex gap-4'>
                                                                    <IoCopyOutline className='text-2xl'/>
                                                                    <IoBookmarkOutline  className='text-2xl'/>
                                                                    <IoShareSocialOutline  className='text-2xl'/>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                    
                                                    </div>
                                                ))}
                                            </>
                                        ))}
                                        {/* <p>{item[0].title}</p> */}
                                    </div>
                                </div>
                            ))}

                        </div>}
                    </div>
                </div>
            </>}
        </>
    )
}
