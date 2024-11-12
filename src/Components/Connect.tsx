import React from 'react'
import ConnectIcon from './Icons/ConnectIcon'

const Connect = () => {
    return (
        <div className='w-full h-[871px] flex flex-col items-center justify-center'>
            <div className='flex flex-row items-center space-x-3'>
                <p className='text-[120px] text-white font-geist font-bold'>CONNECT</p>
                <ConnectIcon />
                <p className='text-[120px] text-white font-geist font-bold'>WITH ME</p>

            </div>

        </div>
    )
}

export default Connect