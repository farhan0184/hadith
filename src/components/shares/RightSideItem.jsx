import React from 'react'
import Button from './Button'

export default function RightSideItem({isMobile}) {
    return (
        <>
            <div className={`bg-white rounded-xl p-4 ${isMobile?'space-y-5':'space-y-2'}`}>
                {!isMobile && <h1 className={"text-[16px] font-semibold text-center "}>সেটিংস</h1>}
                <div>
                    <p className="text-[14px] font-semibold">আরবি ফন্ট সিলেক্ট করুন</p>
                    <select name="cars" id="cars" className="w-full h-12 outline-none border-[1px] rounded-md mt-2">
                        <option value="KFGQ">KFGQ</option>
                        <option value="mequran">Me Quran</option>
                        <option value="almushaf">Al Mushaf</option>
                        <option value="amiri">Amiri</option>
                    </select>
                </div>
                <div>
                    <p className="text-[14px] font-semibold">এরাবিক ফন্ট সাইজ</p>
                    <input  className="mt-2 w-full " type="range" id="volume" name="volume" min="0" max="11" />
                </div>
                <div>
                    <p className="text-[14px] font-semibold">অনুবাদ ফন্ট সাইজ</p>
                    <input className="mt-2 w-full" type="range" id="volume" name="volume" min="0" max="11" />
                </div>
                <div className="flex justify-between">
                    <p className="text-[14px] font-semibold">নাইট মোড</p>
                    <label className="inline-flex items-center mb-5 cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                </div>
            </div>
            <div className={`p-4 space-y-2 bg-[#2b9e76]/20 rounded-xl `}>
                <h1 className='text-[16px] font-semibold'>আপনিও সদাকায়ে জারিয়াতে অংশ নিন</h1>
                <p className='text-[14px]'>আপনার দান, সেটা ছোট হলেও, ইসলামের বার্তা ও হাদিস প্রচারে সহায়তা করবে। আমাদের কাজের অংশ হতে এবং এই গুরুত্বপূর্ণ কাজে সাহায্য করতে আমাদের প্রজেক্টে হাদিয়া দিন। ইনশাআল্লাহ এটি সদাকায়ে জারিয়াহ হিসেবে আল্লাহ্‌র কাছে কবুল হবে।</p>
                <div className='center'>
                    <Button title={`সাপোর্ট করুন`} style={'primary-clr text-white w-[180px]   rounded-md h-12'} />
                </div>
            </div>
        </>
    )
}
