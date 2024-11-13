import React from 'react'
import BookIcon from './Icons/BookIcon'
import BookIconSmall from './Icons/BookIconSmall'
import RightArrow from './Icons/RightArrow'
import EntreprenureshipBadgeIcon from './Icons/EntreprenureshipBadgeIcon'
import BulbIconBadge from './Icons/BulbIconBadge'
import Web3IconBadge from './Icons/Web3IconBadge'
import { ScrollArea, ScrollBar } from './ui/scroll-area'

const Ideas = () => {
    const blogItems = [
        { icon: EntreprenureshipBadgeIcon, label: "Entrepreneurship", color: "#E68A11", bgColor: "#EEA54640", zIndex: 50, marginTop: 0, left: 0 },
        { icon: BulbIconBadge, label: "Innovation", color: "#0AC532", bgColor: "#46D36433", zIndex: 40, marginTop: 2, left: -20 },
        { icon: Web3IconBadge, label: "Web3", color: "#9747FF", bgColor: "#9747FF33", zIndex: 30, marginTop: 4, left: -40 },
    ]

    return (
        <div className='h-[1377px] w-full bg-white flex flex-col items-center justify-between py-20'>
            <div className='flex flex-col w-full items-center justify-center space-y-10'>
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

                {/* <div id='Blogs row' className='max-w-[1320px] ml-[30rem] flex flex-row -space-x-2'>
                    <div className=' bg-white z-50 w-[600px] h-[267px] rounded-[12px] cursor-pointer border-[1px] border-[#262626] flex flex-col justify-center items-center hover:scale-95 transition ease-in-out'>
                        <div className='flex flex-col h-[195px] justify-between px-5'>
                            <div className='w-[154px] h-[29px] border-[1px] border-[#E68A11] bg-[#EEA54640] rounded-[24px] flex flex-row items-center justify-center space-x-1'>
                                <EntreprenureshipBadgeIcon />
                                <p className='text-sm text-[#E68A11] font-geist'>Entrepreneurship</p>
                            </div>

                            <p className='text-[36px] text-[#080808] leading-none'>How Blockchain is Changing the Game for ClimateTech Solutions</p>
                            <p className='text-base text-[#080808] font-geist leading-none'>Custom online stores with user-friendly interfaces and seamless payment integration.</p>
                        </div>
                    </div>
                    <div className='bg-white z-40 w-[600px] mt-2 h-[267px] rounded-[12px] cursor-pointer border-[1px] border-[#262626] flex flex-col justify-center items-center hover:scale-95 transition ease-in-out'>
                        <div className='flex flex-col h-[195px] justify-between px-5'>
                            <div className='w-[111px] h-[29px] border-[1px] border-[#0AC532] bg-[#46D36433] rounded-[24px] flex flex-row items-center justify-center space-x-1'>
                                <BulbIconBadge />
                                <p className='text-sm text-[#0AC532] font-geist'>Innovation</p>
                            </div>

                            <p className='text-[36px] text-[#080808] leading-none'>How Blockchain is Changing the Game for ClimateTech Solutions</p>
                            <p className='text-base text-[#080808] font-geist leading-none'>Custom online stores with user-friendly interfaces and seamless payment integration.</p>
                        </div>
                    </div>

                    <div className='bg-white z-30 w-[600px] mt-4 h-[267px] rounded-[12px] cursor-pointer border-[1px] border-[#262626] flex flex-col justify-center items-center hover:scale-95 transition ease-in-out'>
                        <div className='flex flex-col h-[195px] justify-between px-5'>
                            <div className='w-[82px] h-[29px] border-[1px] border-[#9747FF] bg-[#9747FF33] rounded-[24px] flex flex-row items-center justify-center space-x-1'>
                                <Web3IconBadge />
                                <p className='text-sm text-[#9747FF] font-geist'>Web3</p>
                            </div>

                            <p className='text-[36px] text-[#080808] leading-none'>How Blockchain is Changing the Game for ClimateTech Solutions</p>
                            <p className='text-base text-[#080808] font-geist leading-none'>Custom online stores with user-friendly interfaces and seamless payment integration.</p>
                        </div>
                    </div>
                </div> */}

                <ScrollArea className="w-full" style={{ paddingBottom: '2rem' }}>
                    <div className='flex -space-x-2 pb-8 ml-[30rem]'>
                        {blogItems.map((item, index) => (
                            <div
                                key={index}
                                className={`flex-none w-[600px] h-[267px] bg-white rounded-[12px] cursor-pointer border border-[#262626] flex flex-col justify-center items-center hover:scale-95 transition ease-in-out`}
                                style={{
                                    zIndex: item.zIndex,
                                    marginTop: `${item.marginTop}rem`,
                                    left: `${index * 580 + item.left}px`,
                                }}
                            >
                                <div className='flex flex-col h-[195px] justify-between px-5'>
                                    <div
                                        className={` w-max h-[29px] border rounded-[24px] flex flex-row items-center justify-center space-x-1 px-3`}
                                        style={{ borderColor: item.color, backgroundColor: item.bgColor }}
                                    >
                                        <item.icon />
                                        <p className='text-sm font-medium' style={{ color: item.color }}>{item.label}</p>
                                    </div>
                                    <p className='text-[36px] text-[#080808] leading-none'>How Blockchain is Changing the Game for ClimateTech Solutions</p>
                                    <p className='text-base text-[#080808] leading-none'>Custom online stores with user-friendly interfaces and seamless payment integration.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>
            <div className='w-[385px] h-[67px] rounded-[200px] border-[1px] border-[#262626] hover:scale-110 transition ease-in-out cursor-pointer flex flex-row space-x-1 items-center justify-center'>
                <BookIconSmall />
                <p className='text-[36px] text-[#262626] font-geist'>Read more articles</p>

            </div>

        </div>
    )
}

export default Ideas