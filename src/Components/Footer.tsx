'use client'
import Image from 'next/image'
import React from 'react'
import EntrepreneurIcon from './Icons/EntreprenureIcon'
import InnovatorIcon from './Icons/InnovatorIcon'
import EnthusiastIcon from './Icons/EnthusiastIcon'
import Arrow from './Icons/Arrow'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    return (
        <div className='h-[595px] relative w-full flex flex-col space-y-10 items-center justify-center bg-darkGray'>
            <div onClick={scrollToTop} className='absolute left-[30rem] top-8 w-[189px] h-[40px] rounded-[12px] bg-[#262626] flex items-center border-[1px] border-transparent hover:border-opaqueGrey transition ease-in-out cursor-pointer justify-center flex-row space-x-2'>
                <Arrow />
                <p className='text-opaqueGrey font-geist text-base'>Click to scroll to top</p>
            </div>
            <div className='w-full border-b-[1px] border-b-[#979797] border-opacity-30 flex py-10 items-center justify-center'>
                <div className='h-[360px] flex items-start justify-center flex-col'>
                    <div className='flex flex-row items-center space-x-5'>
                        <p className="text-[120px] font-geist text-white font-bold">AYO</p>
                        <div className="h-[104px] w-[104px] rounded-[27.23px]">
                            <Image
                                src="https://res.cloudinary.com/debiu7z1b/image/upload/v1731414210/image_904_1_hg5p3h.webp"
                                alt="Ayo's profile picture"
                                objectFit="cover"
                                width={104}
                                height={104}
                                className=" rounded-[27.23px]"
                            />
                        </div>
                        <p className="text-[120px] font-geist text-opaqueGrey font-bold">INNOVATOR.</p>
                    </div>
                    <div className="flex flex-row h-[69px] items-center space-x-1">
                        <p className="text-[120px] font-geist text-opaqueGrey font-bold">ENTREPRENEUR.</p>

                        {/* Icon container */}
                        <div className="w-[278.33px] h-[69px] relative flex items-center justify-center">
                            {/* First Icon */}
                            <div className="absolute left-0 z-10 transform translate-x-1/5">
                                <InnovatorIcon />
                            </div>
                            {/* Second Icon slightly offset closer to the edge */}
                            <div className="absolute right-[6rem] z-20 ">
                                <EnthusiastIcon />
                            </div>
                            {/* Third Icon even closer to the edge */}
                            <div className="absolute right-0 z-30 ">
                                <EntrepreneurIcon />
                            </div>
                        </div>
                    </div>
                    <p className='text-[120px] font-geist text-opaqueGrey font-bold'>TECH ADVOCATE.</p>
                </div>
            </div>
            <div className='w-[1222px] flex items-center flex-row space-x-3 justify-start'>
                <p className='text-white hover:underline transition ease-in-out underline-offset-2 cursor-pointer font-geist text-xl'>Privacy  Policy</p>
                <div className='rounded-full w-[3px] h-[3px]  bg-white'></div>
                <p className='text-white hover:underline transition ease-in-out underline-offset-2 cursor-pointer font-geist text-xl'>Terms of Use</p>
                <div className='rounded-full w-[3px] h-[3px]  bg-opaqueGrey'></div>
                <p className='text-opaqueGrey font-geist text-xl'>Copyright © 2024 All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer