import React from 'react'
import BookIcon from './Icons/BookIcon'
import BookIconSmall from './Icons/BookIconSmall'
import RightArrow from './Icons/RightArrow'
import EntreprenureshipBadgeIcon from './Icons/EntreprenureshipBadgeIcon'

const Ideas = () => {
    return (
        <div className='h-[1377px] w-full bg-white flex flex-col items-center justify-between py-20'>
            <div className='flex flex-col space-y-5'>
                <div className='flex w-[1062px] flex-col space-y-5'>
                    <div className='flex flex-col justify-between h-[200px]'>
                        <p className='text-[#131313] text-[100px] font-geist font-bold leading-none'>IDEAS, INSIGHTS,</p>
                        <div className='flex flex-row items-center space-x-1'>
                            <BookIcon />
                            <p className='text-[#131313] text-[100px] font-geist font-bold leading-none'>AND INNOVATIONS</p>
                        </div>
                    </div>
                    <div className='flex flex-row items-center space-x-2'>
                        <p className='text-[#262626] text-2xl font-geist'>From personal experiences</p>
                        <RightArrow />
                        <p className='text-[#262626] text-2xl font-geist'>to industry observations</p>
                    </div>
                </div>

                <div className='w-full flex flex-row space-y-2'>
                    <div className='w-[600px] h-[267px] rounded-[12px] cursor-pointer border-[1px] border-[#262626] flex flex-col justify-center items-center hover:scale-95 transition ease-in-out'>
                        <div className='flex flex-col h-[195px] justify-between px-5'>
                            <div className='w-[154px] h-[29px] border-[1px] border-[#E68A11] bg-[#EEA54640] rounded-[24px] flex flex-row items-center justify-center space-x-1'>
                                <EntreprenureshipBadgeIcon />
                                <p className='text-sm text-[#E68A11] font-geist'>Entrepreneurship</p>
                            </div>

                            <p className='text-[36px] text-[#080808] leading-none'>How Blockchain is Changing the Game for ClimateTech Solutions</p>
                            <p className='text-base text-[#080808] font-geist leading-none'>Custom online stores with user-friendly interfaces and seamless payment integration.</p>
                        </div>
                    </div>

                </div>

            </div>
            <div className='w-[385px] h-[67px] rounded-[200px] border-[1px] border-[#262626] hover:scale-110 transition ease-in-out cursor-pointer flex flex-row space-x-1 items-center justify-center'>
                <BookIconSmall />
                <p className='text-[36px] text-[#262626] font-geist'>Read more articles</p>

            </div>

        </div>
    )
}

export default Ideas