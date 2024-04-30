'use client'
import LeftSide from '@/components/home/LeftSide';
import RightSide from '@/components/home/RightSide';
import { data } from '@/util/data';
import React from 'react'

export default function BookSectionLayout({ children }) {
    const [value, setValue] = React.useState("অধ্যায়");
    const [id, setId] = React.useState(0)

    return (
        <div className='flex gap-5 2xl:p-5 px-5 py-3 h-full'>
            <LeftSide value={value} setValue={setValue} data={data} id={id} />

            {children}

            <RightSide />
        </div>
    )
}
