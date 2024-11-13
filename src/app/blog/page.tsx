'use client'
import Connect from "@/Components/Connect";
import BlockIcon from "@/Components/Icons/BlockIcon";
import BulbIcon from "@/Components/Icons/BulbIcon";
import BulbIconBadge from "@/Components/Icons/BulbIconBadge";
import EntreprenureshipBadgeIcon from "@/Components/Icons/EntreprenureshipBadgeIcon";
import EntreprenureshipWHite from "@/Components/Icons/EntreprenureshipWHite";
import PencilIcon from "@/Components/Icons/PencilIcon";
import Search from "@/Components/Icons/Search";
import Web3IconBadge from "@/Components/Icons/Web3IconBadge";
import { useRouter } from "next-nprogress-bar";
import Image from "next/image";
import { useState } from "react";

export default function Blog() {
    const router = useRouter()
    const [selectedTab, setSelectedTab] = useState(1)
    return (
        <div className="bg-[#131313] flex flex-col space-y-[10rem] items-center justify-center pt-10">
            <div onClick={() => router.back()} className="flex flex-row cursor-pointer items-center space-x-5">
                <div className="h-[64px] w-[64px] rounded-[12.19px]">
                    <Image
                        src="https://res.cloudinary.com/debiu7z1b/image/upload/v1731414210/image_904_1_hg5p3h.webp"
                        alt="Ayo's profile picture"
                        objectFit="cover"
                        width={64}
                        height={64}
                        className=" rounded-[12.19px]"
                    />
                </div>
                <p className="text-[#6C6969] font-bricolage text-[36px] font-bold">Ayo</p>
            </div>

            <div className='flex flex-col justify-between h-[200px]'>
                <p className='text-white text-[100px] font-geist font-bold leading-none'>MY IDEAS, INSIGHTS,</p>
                <div className='flex flex-row items-center space-x-1'>
                    <PencilIcon />
                    <p className='text-white text-[100px] font-geist font-bold leading-none'>AND INNOVATIONS</p>
                </div>
            </div>

            <div className="flex flex-col space-y-10 items-center justify-center">
                <div className="flex flex-row space-x-3 items-center">
                    <div onClick={() => setSelectedTab(1)} className={`px-5 py-2 rounded-[32px] font-geist text-base hover:border-white border-[1px] border-transparent cursor-pointer transition ease-in-out ${selectedTab === 1 ? 'font-bold text-[#131313] bg-white cursor-default' : 'text-white bg-transparent'}`}>
                        All
                    </div>

                    <div onClick={() => setSelectedTab(2)} className={`px-5 flex flex-row items-center justify-center py-2 rounded-[32px] font-geist text-base hover:border-white border-[1px] border-transparent cursor-pointer transition ease-in-out ${selectedTab === 2 ? 'font-bold text-[#131313] bg-white cursor-default' : 'text-white bg-transparent'}`}>
                        <div className="pr-1">
                            {selectedTab === 2 ? (
                                <EntreprenureshipWHite colour='black' />
                            ) : (
                                <EntreprenureshipWHite colour='white' />
                            )}
                        </div>
                        Entrepreneurship
                    </div>

                    <div onClick={() => setSelectedTab(3)} className={`px-5 flex flex-row items-center justify-center space-x-2 py-2 rounded-[32px] font-geist text-base hover:border-white border-[1px] border-transparent cursor-pointer transition ease-in-out ${selectedTab === 3 ? 'font-bold text-[#131313] bg-white cursor-default' : 'text-white bg-transparent'}`}>
                        <div className="pr-1">
                            {selectedTab === 3 ? (
                                <BulbIcon colour='black' />
                            ) : (
                                <BulbIcon colour='white' />
                            )}
                        </div>
                        Innovation
                    </div>

                    <div onClick={() => setSelectedTab(4)} className={`px-5 flex flex-row items-center justify-center space-x-2 py-2 rounded-[32px] font-geist text-base hover:border-white border-[1px] border-transparent cursor-pointer transition ease-in-out ${selectedTab === 4 ? 'font-bold text-[#131313] bg-white cursor-default' : 'text-white bg-transparent'}`}>
                        <div className="pr-1">
                            {selectedTab === 4 ? (
                                <BlockIcon colour='black' />
                            ) : (
                                <BlockIcon colour='white' />
                            )}
                        </div>
                        Web3
                    </div>

                    <div className="flex flex-row items-center focus-within:border-b-white transition ease-in-out space-x-2 border-b-[1px] border-b-transparent">
                        <Search />
                        <input
                            type="text"
                            className="text-white outline-none border-none bg-transparent text-base font-geist placeholder:text-white placeholder:opacity-70"
                            placeholder="Search"
                        />
                    </div>
                </div>

                <div className="flex flex-col space-y-5 items-center justify-center w-full">
                    <div className="w-[1235px] flex items-center justify-between flex-row">
                        <div className="w-[401px] h-[310px] border-[1px] cursor-pointer hover:border-white transition ease-in-out border-[#262626] bg-[#131313] rounded-[17px] flex items-center justify-center">
                            <div className="h-[238px] w-[353px] flex flex-col justify-between">
                                <div className='w-[154px] h-[29px] border-[1px] border-[#E68A11] bg-[#EEA54640] rounded-[24px] flex flex-row items-center justify-center space-x-1'>
                                    <EntreprenureshipBadgeIcon />
                                    <p className='text-sm text-[#E68A11] font-geist'>Entrepreneurship</p>
                                </div>
                                <p className='text-[36px] text-[#FFFFFF] leading-none'>How Blockchain is Changing the Game for ClimateTech Solutions</p>
                                <p className='text-base text-white opacity-70 font-geist leading-none'>Custom online stores with user-friendly interfaces and seamless payment integration.</p>
                            </div>
                        </div>

                        <div className="w-[401px] h-[310px] border-[1px] cursor-pointer hover:border-white transition ease-in-out border-[#262626] bg-[#131313] rounded-[17px] flex items-center justify-center">
                            <div className="h-[238px] w-[353px] flex flex-col justify-between">
                                <div className='w-[111px] h-[29px] border-[1px] border-[#0AC532] bg-[#46D36433] rounded-[24px] flex flex-row items-center justify-center space-x-1'>
                                    <BulbIconBadge />
                                    <p className='text-sm text-[#0AC532] font-geist'>Innovation</p>
                                </div>
                                <p className='text-[36px] text-[#FFFFFF] leading-none'>How Blockchain is Changing the Game for ClimateTech Solutions</p>
                                <p className='text-base text-white opacity-70 font-geist leading-none'>Custom online stores with user-friendly interfaces and seamless payment integration.</p>
                            </div>
                        </div>

                        <div className="w-[401px] h-[310px] border-[1px] cursor-pointer hover:border-white transition ease-in-out border-[#262626] bg-[#131313] rounded-[17px] flex items-center justify-center">
                            <div className="h-[238px] w-[353px] flex flex-col justify-between">
                                <div className='w-[82px] h-[29px] border-[1px] border-[#9747FF] bg-[#9747FF33] rounded-[24px] flex flex-row items-center justify-center space-x-1'>
                                    <Web3IconBadge />
                                    <p className='text-sm text-[#9747FF] font-geist'>Web3</p>
                                </div>
                                <p className='text-[36px] text-[#FFFFFF] leading-none'>How Blockchain is Changing the Game for ClimateTech Solutions</p>
                                <p className='text-base text-white opacity-70 font-geist leading-none'>Custom online stores with user-friendly interfaces and seamless payment integration.</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[1235px] flex items-center justify-between flex-row">
                        <div className="w-[401px] h-[310px] border-[1px] cursor-pointer hover:border-white transition ease-in-out border-[#262626] bg-[#131313] rounded-[17px] flex items-center justify-center">
                            <div className="h-[238px] w-[353px] flex flex-col justify-between">
                                <div className='w-[154px] h-[29px] border-[1px] border-[#E68A11] bg-[#EEA54640] rounded-[24px] flex flex-row items-center justify-center space-x-1'>
                                    <EntreprenureshipBadgeIcon />
                                    <p className='text-sm text-[#E68A11] font-geist'>Entrepreneurship</p>
                                </div>
                                <p className='text-[36px] text-[#FFFFFF] leading-none'>How Blockchain is Changing the Game for ClimateTech Solutions</p>
                                <p className='text-base text-white opacity-70 font-geist leading-none'>Custom online stores with user-friendly interfaces and seamless payment integration.</p>
                            </div>
                        </div>

                        <div className="w-[401px] h-[310px] border-[1px] cursor-pointer hover:border-white transition ease-in-out border-[#262626] bg-[#131313] rounded-[17px] flex items-center justify-center">
                            <div className="h-[238px] w-[353px] flex flex-col justify-between">
                                <div className='w-[111px] h-[29px] border-[1px] border-[#0AC532] bg-[#46D36433] rounded-[24px] flex flex-row items-center justify-center space-x-1'>
                                    <BulbIconBadge />
                                    <p className='text-sm text-[#0AC532] font-geist'>Innovation</p>
                                </div>
                                <p className='text-[36px] text-[#FFFFFF] leading-none'>How Blockchain is Changing the Game for ClimateTech Solutions</p>
                                <p className='text-base text-white opacity-70 font-geist leading-none'>Custom online stores with user-friendly interfaces and seamless payment integration.</p>
                            </div>
                        </div>

                        <div className="w-[401px] h-[310px] border-[1px] cursor-pointer hover:border-white transition ease-in-out border-[#262626] bg-[#131313] rounded-[17px] flex items-center justify-center">
                            <div className="h-[238px] w-[353px] flex flex-col justify-between">
                                <div className='w-[82px] h-[29px] border-[1px] border-[#9747FF] bg-[#9747FF33] rounded-[24px] flex flex-row items-center justify-center space-x-1'>
                                    <Web3IconBadge />
                                    <p className='text-sm text-[#9747FF] font-geist'>Web3</p>
                                </div>
                                <p className='text-[36px] text-[#FFFFFF] leading-none'>How Blockchain is Changing the Game for ClimateTech Solutions</p>
                                <p className='text-base text-white opacity-70 font-geist leading-none'>Custom online stores with user-friendly interfaces and seamless payment integration.</p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

            <Connect />
        </div>
    )
}