'use client'

import React from 'react'
import { motion } from 'framer-motion'
import MissionIcon from './Icons/MissionIcon'
import ExploreIcon from './Icons/ExploreIcon'
import Image from 'next/image'

export default function Mission() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    }

    return (
        <div className='h-screen sticky top-0'>
            <motion.div
                className='w-full flex flex-row h-[945px] space-x-10 items-center justify-end'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <div className='h-[805.25px] flex flex-col justify-evenly'>
                    <motion.div variants={itemVariants}>
                        <MissionIcon />
                    </motion.div>
                    <motion.p
                        className='w-[628px] leading-none text-white text-[56px] font-geist font-bold'
                        variants={itemVariants}
                    >
                        <span className='text-opaqueGrey'>MY MISSION IS <br /></span> TO BUILD INNOVATIVE SOLUTIONS THAT IMPROVE LIVES.
                    </motion.p>
                    <motion.p
                        className='text-opaqueGrey font-geist text-xl w-[433px]'
                        variants={itemVariants}
                    >
                        WHETHER IT WAS CODING MY FIRST WEBSITE AT 12 OR SCALING A STARTUP FROM ZERO TO MILLIONS
                    </motion.p>
                    <motion.div
                        className='flex flex-row cursor-pointer items-center space-x-1'
                        variants={itemVariants}
                    >
                        <ExploreIcon />
                        <p className='text-white text-xl font-geist underline underline-offset-3'>Explore my journey</p>
                    </motion.div>
                </div>
                <motion.div
                    variants={itemVariants}
                >
                    <Image
                        src="https://res.cloudinary.com/debiu7z1b/image/upload/v1731423792/Frame_81_bkqsh4.webp"
                        alt="Mission Image"
                        width={626}
                        height={805}
                    />
                </motion.div>
            </motion.div>
        </div>
    )
}