'use client'

import { motion } from 'framer-motion'
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
import Footer from '@/Components/Footer';

export default function Blog() {
    const router = useRouter()
    const [selectedTab, setSelectedTab] = useState(1)
    const [ishovered, setIsHovered] = useState(false)
    const colors = ['#B4F405', '#47D1FF', '#F8B154']
    const [hoverColor, setHoverColor] = useState('#B4F405')
    const [prevColor, setPrevColor] = useState('')

    const handleHover = () => {
        setIsHovered(true)
        let newColor
        do {
            newColor = colors[Math.floor(Math.random() * colors.length)]
        } while (newColor === prevColor)
        setHoverColor(newColor)
        setPrevColor(newColor)
    }


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
            },
        },
    }

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
            },
        },
    }

    return (
        <div className='flex flex-col w-full'>

            <motion.div
                className="bg-[#131313] flex flex-col space-y-[10rem] items-center justify-center pt-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    onMouseEnter={() => handleHover()}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => router.back()}
                    className="flex flex-row cursor-pointer items-center space-x-5"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="h-[64px] w-[64px] rounded-[12.19px]">
                        <Image
                            src="https://res.cloudinary.com/debiu7z1b/image/upload/v1731661994/fimage_904_oxgxon.webp"
                            alt="Ayo's profile picture"
                            objectFit="cover"
                            width={64}
                            height={64}
                            className={`rounded-[12.19px]  transition-all duration-500 ${ishovered ? 'hover:grayscale-0 group-hover:grayscale-0' : 'filter grayscale'} `}
                        />
                    </div>
                    <p
                        className={`font-bricolage text-[36px] font-bold`}
                        style={{
                            color: ishovered ? hoverColor : '#6C6969',
                        }}
                    >
                        Ayo
                    </p>
                </motion.div>

                <motion.div className='flex flex-col justify-between h-[200px]' variants={itemVariants}>
                    <p className='text-white text-[100px] font-geist font-bold leading-none'>MY IDEAS, INSIGHTS,</p>
                    <div className='flex flex-row items-center space-x-1'>
                        <PencilIcon />
                        <p className='text-white text-[100px] font-geist font-bold leading-none'>AND INNOVATIONS</p>
                    </div>
                </motion.div>

                <motion.div className="flex flex-col space-y-10 items-center justify-center" variants={itemVariants}>
                    <motion.div className="flex flex-row space-x-3 items-center" variants={itemVariants}>
                        {[
                            { id: 1, label: 'All' },
                            { id: 2, label: 'Entrepreneurship', icon: EntreprenureshipWHite },
                            { id: 3, label: 'Innovation', icon: BulbIcon },
                            { id: 4, label: 'Web3', icon: BlockIcon },
                        ].map((tab) => (
                            <motion.div
                                key={tab.id}
                                onClick={() => setSelectedTab(tab.id)}
                                className={`px-5 py-2 rounded-[32px] items-center flex flex-row font-geist text-base hover:border-white border-[1px] border-transparent cursor-pointer transition ease-in-out ${selectedTab === tab.id ? 'font-bold text-[#131313] bg-white cursor-default' : 'text-white bg-transparent'}`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {tab.icon && (
                                    <span className="pr-1">
                                        {tab.icon({ colour: selectedTab === tab.id ? 'black' : 'white' })}
                                    </span>
                                )}
                                {tab.label}
                            </motion.div>
                        ))}
                        <motion.div
                            className="flex flex-row items-center focus-within:border-b-white transition ease-in-out space-x-2 border-b-[1px] border-b-transparent"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Search />
                            <input
                                type="text"
                                className="text-white outline-none border-none bg-transparent text-base font-geist placeholder:text-white placeholder:opacity-70"
                                placeholder="Search"
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div className="flex flex-col space-y-5 pb-10 items-center justify-center w-full" variants={itemVariants}>
                        {[0, 1].map((row) => (
                            <motion.div key={row} className="w-[1235px] flex items-center justify-between flex-row" variants={itemVariants}>
                                {[
                                    { category: 'Entrepreneurship', icon: EntreprenureshipBadgeIcon, color: '#E68A11', bgColor: '#EEA54640' },
                                    { category: 'Innovation', icon: BulbIconBadge, color: '#0AC532', bgColor: '#46D36433' },
                                    { category: 'Web3', icon: Web3IconBadge, color: '#9747FF', bgColor: '#9747FF33' },
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="w-[401px] h-[310px] border-[1px] cursor-pointer hover:border-white transition ease-in-out border-[#262626] bg-[#131313] rounded-[17px] flex items-center justify-center"
                                        variants={cardVariants}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => item.category === 'Entrepreneurship' && router.push('/blog/Blog1')}
                                    >
                                        <div className="h-[238px] w-[353px] flex flex-col justify-between">
                                            <div className={`h-[29px] border-[1px] rounded-[24px] flex flex-row items-center justify-center space-x-1`} style={{ borderColor: item.color, backgroundColor: item.bgColor, width: item.category === 'Entrepreneurship' ? '154px' : item.category === 'Innovation' ? '111px' : '82px' }}>
                                                <item.icon />
                                                <p className='text-sm font-geist' style={{ color: item.color }}>{item.category}</p>
                                            </div>
                                            <p className='text-[36px] text-[#FFFFFF] leading-none'>How Blockchain is Changing the Game for ClimateTech Solutions</p>
                                            <p className='text-base text-white opacity-70 font-geist leading-none'>Custom online stores with user-friendly interfaces and seamless payment integration.</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
            <Footer />
        </div>
    )
}