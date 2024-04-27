import React from 'react'

export default function SidebarItem({data, handleMouseOver, handleMouseOut, hover, id}) {
    return (
        <>
            {
                data.map((item) => (
                    <button key={item.id} className='text-3xl'>
                        <span onMouseOver={() => handleMouseOver(item.id)}
                            onMouseOut={handleMouseOut} className={`${hover && id === item.id && 'text-[#2b9e76]'}`}>
                            {hover && id === item.id ? item.hoverIcon : item.icon}
                        </span>
                    </button>
                ))
            }
        </>
    )
}
