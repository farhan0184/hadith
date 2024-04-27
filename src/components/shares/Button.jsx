import React from 'react'

export default function Button({style, title, click, icon, iconStyle}) {
  return (
    <button onClick={click} className={`${style} ${iconStyle}`}>{title} {icon&&<span className='text-2xl'>{icon}</span>}</button>
  )
}
