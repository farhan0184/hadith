'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function Book({params}) {
  const router = useRouter()
  useEffect(() => {
    router.push('/bukhara/1')
 }, [])
  return (
    <div className="2xl:w-[60%] lg:w-[75%] w-full h-min py-10 bg-white rounded-xl ">
      <h1 className='text-xl font-semibold text-center'>{params.book}</h1>
    </div>
  )
}