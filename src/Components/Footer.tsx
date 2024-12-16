'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import EntrepreneurIcon from './Icons/EntreprenureIcon'
import InnovatorIcon from './Icons/InnovatorIcon'
import EnthusiastIcon from './Icons/EnthusiastIcon'
import Arrow from './Icons/Arrow'
import Connect from './Connect'

export default function Footer() {


    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

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

    const iconVariants = {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 10,
            },
        },
    }

    return (
        <div className='flex relative w-full flex-col'>
            <Connect />

            <motion.div
                className='min-h-screen border-t-[1px] border-t-[#979797] border-opacity-50 z-40 pt-16 md:pt-[10rem] relative w-full flex flex-col space-y-6 md:space-y-10 items-center justify-center bg-darkGray px-4 md:px-8'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <motion.div
                    onClick={scrollToTop}
                    className='absolute left-4 md:left-8 lg:left-[30rem] top-4 md:top-[14rem] w-[189px] h-[40px] rounded-[12px] bg-[#262626] flex items-center border-[1px] border-transparent hover:border-opaqueGrey transition ease-in-out cursor-pointer justify-center flex-row space-x-2'
                    variants={itemVariants}
                    whileHover={{
                        scale: 1.05,
                        transition: { type: "spring", stiffness: 400, damping: 10 },
                    }}
                >
                    <Arrow />
                    <p className='text-opaqueGrey font-geist text-sm md:text-base'>Click to scroll to top</p>
                </motion.div>
                <motion.div className='w-full border-b-[1px] border-b-[#979797] border-opacity-30 flex py-6 md:py-10 items-center justify-center' variants={itemVariants}>
                    <div className='flex items-start justify-center flex-col'>
                        <motion.div className='flex flex-row items-center space-x-2 md:space-x-5' variants={itemVariants}>
                            <p className="text-4xl md:text-7xl lg:text-[120px] font-geist text-white font-bold">AYO</p>
                            <motion.div
                                className="h-12 w-12 md:h-20 md:w-20 lg:h-[104px] lg:w-[104px] rounded-[27.23px]"
                                whileHover={{
                                    scale: 1.3,
                                    rotate: 5,
                                    transition: { type: "spring", stiffness: 300, damping: 10 },
                                }}
                            >
                                <Image
                                    // src="https://res.cloudinary.com/debiu7z1b/image/upload/v1733839008/WhatsApp_Image_2024-12-10_at_13.59.19_2005dc79_vmqvdh.webp"
                                    src="https://res.cloudinary.com/debiu7z1b/image/upload/v1734341517/WhatsApp_Image_2024-12-10_at_13.59.35_25c8dfc4_wkjyif.webp"
                                    alt="Ayo's profile picture"
                                    objectFit="cover"
                                    width={104}
                                    height={104}
                                    className="rounded-[27.23px] filter grayscale hover:grayscale-0 transition-all duration-500 group-hover:grayscale-0 hover:border-white border-[1px] border-transparent"
                                />
                            </motion.div>
                            <p className="text-4xl md:text-7xl lg:text-[120px] font-geist text-opaqueGrey font-bold">INNOVATOR.</p>
                        </motion.div>
                        <motion.div className="flex flex-row items-center space-x-1 mt-2 md:mt-4" variants={itemVariants}>
                            <p className="text-4xl md:text-7xl lg:text-[120px] font-geist text-opaqueGrey font-bold">ENTREPRENEUR.</p>

                            <div className="w-16 max-md:hidden md:w-48 lg:w-[278.33px] h-12 md:h-16 lg:h-[69px] relative flex items-center justify-center">
                                <motion.div className="absolute left-0 z-10 transform translate-x-1/5 scale-50 md:scale-75 lg:scale-100" variants={iconVariants}>
                                    <InnovatorIcon />
                                </motion.div>
                                <motion.div className="absolute right-12 md:right-16 lg:right-[6rem] z-20 scale-50 md:scale-75 lg:scale-100" variants={iconVariants}>
                                    <EnthusiastIcon />
                                </motion.div>
                                <motion.div className="absolute right-0 z-30 scale-50 md:scale-75 lg:scale-100" variants={iconVariants}>
                                    <EntrepreneurIcon />
                                </motion.div>
                            </div>
                        </motion.div>
                        <motion.p className='text-4xl md:text-7xl lg:text-[120px] font-geist text-opaqueGrey font-bold mt-2 md:mt-4' variants={itemVariants}>TECH ADVOCATE.</motion.p>
                    </div>
                </motion.div>
                <motion.div className='w-full md:w-[90%] lg:w-[1222px] flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-3 justify-center md:justify-start' variants={itemVariants}>
                    {/* <motion.p
                        className='text-white hover:underline transition ease-in-out underline-offset-2 cursor-pointer font-geist text-base md:text-xl'
                        whileHover={{
                            scale: 1.05,
                            transition: { type: "spring", stiffness: 400, damping: 10 },
                        }}
                    >
                        Privacy Policy
                    </motion.p>
                    <div className='hidden md:block rounded-full w-[3px] h-[3px] bg-white'></div>
                    <motion.p
                        className='text-white hover:underline transition ease-in-out underline-offset-2 cursor-pointer font-geist text-base md:text-xl'
                        whileHover={{
                            scale: 1.05,
                            transition: { type: "spring", stiffness: 400, damping: 10 },
                        }}
                    >
                        Terms of Use
                    </motion.p>
                    <div className='hidden md:block rounded-full w-[3px] h-[3px] bg-opaqueGrey'></div> */}
                    <p className='text-opaqueGrey font-geist text-base md:text-xl text-center md:text-left'>Copyright © 2024 All Rights Reserved.</p>
                </motion.div>
            </motion.div>
        </div>
    )
}

