import React from 'react'

function HeaderItem({ name, Icon }) {
    return (
        <div className='flex items-center gap-2 text-[18px] font-semibold cursor-pointer hover:underline hover:text-secondary underline-offset-8 decoration-4  transition-colors duration-200'>
            <Icon className='h-6 w-6'/>
            <h2 className='hidden md:block'>{name}</h2>
        </div>
    )
}

export default HeaderItem