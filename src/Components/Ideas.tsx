import React from 'react'
import BookIcon from './Icons/BookIcon'

const Ideas = () => {
    return (
        <div className='h-[1377px] w-full bg-white flex flex-col items-center justify-between py-20'>
            <div className='flex flex-col justify-between h-[200px]'>
                <p className='text-[#131313] text-[100px] font-geist font-bold leading-none'>IDEAS, INSIGHTS,</p>
                <div className='flex flex-row items-center space-x-1'>
                    <BookIcon />
                    <p className='text-[#131313] text-[100px] font-geist font-bold leading-none'>AND INNOVATIONS</p>
                </div>

            </div>

        </div>
    )
}

export default Ideas