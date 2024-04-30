'use client'
import OutsideClickHandler from 'react-outside-click-handler';
import LeftSide from '@/components/home/LeftSide'
import { data } from '@/util/data'
import React, { useState } from 'react'
import { FaStarAndCrescent } from 'react-icons/fa6'
import { GiBookmark, GiOpenBook } from 'react-icons/gi'
import { IoBookmarkOutline, IoCopyOutline, IoLibraryOutline, IoShareSocialOutline } from 'react-icons/io5'
import { RxHamburgerMenu } from "react-icons/rx";

export default function Cheptar({ params }) {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState("অধ্যায়");
  const [id, setId] =useState(0)
  return (
    <>
      <div className="2xl:w-[60%] lg:w-[75%] w-full   rounded-xl ">

        <div className="overflow-y-scroll lg:h-[calc(90vh-50px)] h-[calc(84vh-10px)] rounded-xl">

          {<div>
            <div className='p-3 lg:flex hidden gap-2 bg-gray-200 rounded-t-xl'>
              <IoLibraryOutline className='text-xl text-gray-500' />
              <p className='text-[14px] font-semibold'>{data[id]?.title}</p>
            </div>
            <div className='lg:block hidden'>
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
            <div className='p-5 lg:hidden flex  gap-4 bg-white rounded-xl'>
              <RxHamburgerMenu onClick={() => setIsOpen(!isOpen)} className='text-2xl text-black' />
              <p className='text-[16px] font-semibold'>{data[id]?.title}</p>
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
                                <IoCopyOutline className='text-2xl' />
                                <IoBookmarkOutline className='text-2xl' />
                                <IoShareSocialOutline className='text-2xl' />

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
      {isOpen && <div className='bg-black/20 -left-[1px] h-screen w-full absolute top-0 z-50 '>
        <OutsideClickHandler
          onOutsideClick={() => {
            setIsOpen(false)
          }}
        >
          <div className='sm:w-[350px] w-full  absolute left-0    h-full bg-white '>
            {/* <RightSideItem /> */}


            <div className='my-10 flex justify-between px-5'>
              <h1 className='text-2xl font-semibold'>ক্যাটাগরি</h1>
              <p onClick={() => setIsOpen(false)} className=' text-slate-700 text-2xl cursor-pointer'>X</p>
            </div>
            <LeftSide value={value} setValue={setValue} data={data} id={id} isMobile={true} />
          </div>
        </OutsideClickHandler>
      </div>}
    </>
  )
}
