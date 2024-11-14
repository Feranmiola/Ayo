'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import EntrepreneurIcon from './Icons/EntreprenureIcon'
import InnovatorIcon from './Icons/InnovatorIcon'
import EnthusiastIcon from './Icons/EnthusiastIcon'
import Arrow from './Icons/Arrow'

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
        <motion.div
            className='h-[995px] pt-[10rem] relative w-full flex flex-col space-y-10 items-center justify-center bg-darkGray'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <motion.div
                onClick={scrollToTop}
                className='absolute left-[30rem] top-[20rem] w-[189px] h-[40px] rounded-[12px] bg-[#262626] flex items-center border-[1px] border-transparent hover:border-opaqueGrey transition ease-in-out cursor-pointer justify-center flex-row space-x-2'
                variants={itemVariants}
                whileHover={{
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
            >
                <Arrow />
                <p className='text-opaqueGrey font-geist text-base'>Click to scroll to top</p>
            </motion.div>
            <motion.div className='w-full border-b-[1px] border-b-[#979797] border-opacity-30 flex py-10 items-center justify-center' variants={itemVariants}>
                <div className='h-[360px] flex items-start justify-center flex-col'>
                    <motion.div className='flex flex-row items-center space-x-5' variants={itemVariants}>
                        <p className="text-[120px] font-geist text-white font-bold">AYO</p>
                        <motion.div
                            className="h-[104px] w-[104px] rounded-[27.23px]"
                            whileHover={{
                                scale: 1.1,
                                rotate: 5,
                                transition: { type: "spring", stiffness: 300, damping: 10 },
                            }}
                        >
                            <Image
                                src="https://res.cloudinary.com/debiu7z1b/image/upload/v1731414210/image_904_1_hg5p3h.webp"
                                alt="Ayo's profile picture"
                                objectFit="cover"
                                width={104}
                                height={104}
                                className="rounded-[27.23px]"
                            />
                        </motion.div>
                        <p className="text-[120px] font-geist text-opaqueGrey font-bold">INNOVATOR.</p>
                    </motion.div>
                    <motion.div className="flex flex-row h-[69px] items-center space-x-1" variants={itemVariants}>
                        <p className="text-[120px] font-geist text-opaqueGrey font-bold">ENTREPRENEUR.</p>

                        <div className="w-[278.33px] h-[69px] relative flex items-center justify-center">
                            <motion.div className="absolute left-0 z-10 transform translate-x-1/5" variants={iconVariants}>
                                <InnovatorIcon />
                            </motion.div>
                            <motion.div className="absolute right-[6rem] z-20" variants={iconVariants}>
                                <EnthusiastIcon />
                            </motion.div>
                            <motion.div className="absolute right-0 z-30" variants={iconVariants}>
                                <EntrepreneurIcon />
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.p className='text-[120px] font-geist text-opaqueGrey font-bold' variants={itemVariants}>TECH ADVOCATE.</motion.p>
                </div>
            </motion.div>
            <motion.div className='w-[1222px] flex items-center flex-row space-x-3 justify-start' variants={itemVariants}>
                <motion.p
                    className='text-white hover:underline transition ease-in-out underline-offset-2 cursor-pointer font-geist text-xl'
                    whileHover={{
                        scale: 1.05,
                        transition: { type: "spring", stiffness: 400, damping: 10 },
                    }}
                >
                    Privacy Policy
                </motion.p>
                <div className='rounded-full w-[3px] h-[3px] bg-white'></div>
                <motion.p
                    className='text-white hover:underline transition ease-in-out underline-offset-2 cursor-pointer font-geist text-xl'
                    whileHover={{
                        scale: 1.05,
                        transition: { type: "spring", stiffness: 400, damping: 10 },
                    }}
                >
                    Terms of Use
                </motion.p>
                <div className='rounded-full w-[3px] h-[3px] bg-opaqueGrey'></div>
                <p className='text-opaqueGrey font-geist text-xl'>Copyright © 2024 All Rights Reserved.</p>
            </motion.div>
        </motion.div>
    )
}