'use client'

import React from 'react'
import { motion } from 'framer-motion'
import BookIcon from './Icons/BookIcon'
import BookIconSmall from './Icons/BookIconSmall'
import RightArrow from './Icons/RightArrow'
import EntreprenureshipBadgeIcon from './Icons/EntreprenureshipBadgeIcon'
import BulbIconBadge from './Icons/BulbIconBadge'
import Web3IconBadge from './Icons/Web3IconBadge'
import { ScrollArea, ScrollBar } from './ui/scroll-area'
import { useRouter } from 'next-nprogress-bar'

const Ideas = () => {
    const router = useRouter()
    const blogItems = [
        { icon: EntreprenureshipBadgeIcon, label: "Entrepreneurship", color: "#E68A11", bgColor: "#EEA54640", zIndex: 50, marginTop: 0, left: 0 },
        { icon: BulbIconBadge, label: "Innovation", color: "#0AC532", bgColor: "#46D36433", zIndex: 40, marginTop: 2, left: -20 },
        { icon: Web3IconBadge, label: "Web3", color: "#9747FF", bgColor: "#9747FF33", zIndex: 30, marginTop: 4, left: -40 },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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

    return (
        <motion.div
            className='h-[1377px] w-full bg-white flex flex-col items-center justify-between py-20'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className='flex flex-col w-full items-center justify-center space-y-10'>
                <motion.div className='flex w-[1062px] flex-col space-y-5' variants={itemVariants}>
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
                </motion.div>

                <ScrollArea className="w-full" style={{ paddingBottom: '2rem' }}>
                    <div className='flex -space-x-2 pb-8 px-20 '>
                        {blogItems.map((item, index) => (
                            <motion.div
                                key={index}
                                className={`flex-none w-[600px] h-[267px] bg-white rounded-[12px] cursor-pointer border border-[#262626] flex flex-col justify-center items-center`}
                                style={{
                                    zIndex: item.zIndex,
                                    marginTop: `${item.marginTop}rem`,
                                    left: `${index * 580 + item.left}px`,
                                }}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 0.95,
                                    transition: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 10,
                                    },
                                }}
                            >
                                <div className='flex flex-col h-[195px] justify-between px-5'>
                                    <div
                                        className={`w-max h-[29px] border rounded-[24px] flex flex-row items-center justify-center space-x-1 px-3`}
                                        style={{ borderColor: item.color, backgroundColor: item.bgColor }}
                                    >
                                        <item.icon />
                                        <p className='text-sm font-medium' style={{ color: item.color }}>{item.label}</p>
                                    </div>
                                    <p className='text-[36px] text-[#080808] leading-none'>How Blockchain is Changing the Game for ClimateTech Solutions</p>
                                    <p className='text-base text-[#080808] leading-none'>Custom online stores with user-friendly interfaces and seamless payment integration.</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>
            <motion.div
                onClick={() => router.push('/blog')}
                className='w-[385px] h-[67px] rounded-[200px] border-[1px] border-[#262626] cursor-pointer flex flex-row space-x-1 items-center justify-center'
                variants={itemVariants}
                whileHover={{
                    scale: 1.1,
                    transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                    },
                }}
            >
                <BookIconSmall />
                <p className='text-[36px] text-[#262626] font-geist'>Read more articles</p>
            </motion.div>
        </motion.div>
    )
}

export default Ideas