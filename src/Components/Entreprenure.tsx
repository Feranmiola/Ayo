import React from 'react'
import EntrepreneurIcon from './Icons/EntreprenureIcon'

const Entrepreneur = () => {
    return (
        <div className='w-full h-[805px] flex flex-col space-y-10 items-center justify-center'>
            <div className='flex flex-col items-center justify-between h-[336px]'>
                <div className='flex flex-row space-x-1 items-center'>
                    <p className='font-geist font-bold text-[100px] text-white'>ENTREPRENEUR</p>
                    <EntrepreneurIcon />
                </div>

            </div>

        </div>
    )
}

export default Entrepreneur