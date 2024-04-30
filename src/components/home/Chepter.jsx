import React from 'react'

export default function Chepter({data, id}) {
    return (
        <div>
            {data[id]?.chapters?.map((item,idx) => (
                <div key={idx} class="flex gap-2 p-3 rounded-xl hover:bg-[#2b9e76]/20 cursor-pointer">
                    <div className='w-[50px] h-[50px] bg-[#2b9e76] center' style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", borderRadius: '1em' }}>
                        <p className='text-xl font-bold text-white'>{item.id}</p>
                    </div>
                    <div className='w-full '>
                        <h1 className='text-[16px] font-semibold'>{item.title}</h1>
                        <p className='text-gray-400 mt-2'>সর্বমোট হাদিস - {item.hadith_range}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
