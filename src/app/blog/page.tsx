'use client'
import Connect from "@/Components/Connect";
import BlockIcon from "@/Components/Icons/BlockIcon";
import BulbIcon from "@/Components/Icons/BulbIcon";
import EntreprenureshipWHite from "@/Components/Icons/EntreprenureshipWHite";
import PencilIcon from "@/Components/Icons/PencilIcon";
import { useState } from "react";

export default function Blog() {
    const [selectedTab, setSelectedTab] = useState(1)
    return (
        <div className="bg-[#131313] flex flex-col space-y-20 items-center justify-center pt-5">

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
                        Entrepreneurship
                    </div>

                </div>

            </div>

            <Connect />
        </div>
    )
}