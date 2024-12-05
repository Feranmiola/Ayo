'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import MissionIcon from './Icons/MissionIcon'
import ExploreIcon from './Icons/ExploreIcon'
import Image from 'next/image'

export default function Mission() {
    const isSmallScreen = useMediaQuery({ maxWidth: 768 }) // Adjust the breakpoint as needed

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
        <div className='min-h-screen inset-0 sticky top-0 z-0'>
            <motion.div
                className='w-full flex flex-col lg:flex-row h-full lg:space-x-10 items-center justify-center lg:justify-end p-4 lg:p-0'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <div className='h-full lg:h-[805.25px] flex flex-col justify-evenly space-y-6 lg:space-y-0 mb-8 lg:mb-0'>
                    <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
                        <MissionIcon size={isSmallScreen ? 100 : undefined} />
                    </motion.div>
                    <motion.p
                        className='w-full lg:w-[628px] leading-tight lg:leading-none text-white text-3xl lg:text-[56px] font-geist font-bold text-center lg:text-left'
                        variants={itemVariants}
                    >
                        <span className='text-opaqueGrey'>MY MISSION IS <br /></span> TO BUILD INNOVATIVE SOLUTIONS THAT IMPROVE LIVES.
                    </motion.p>
                    <motion.p
                        className='text-opaqueGrey font-geist text-base lg:text-xl w-full lg:w-[433px] text-center lg:text-left'
                        variants={itemVariants}
                    >
                        WHETHER IT WAS CODING MY FIRST WEBSITE AT 12 OR SCALING A STARTUP FROM ZERO TO MILLIONS
                    </motion.p>
                    <motion.div
                        className='flex flex-row cursor-pointer items-center space-x-1 justify-center lg:justify-start'
                        variants={itemVariants}
                    >
                        <ExploreIcon />
                        <p className='text-white text-lg lg:text-xl font-geist underline underline-offset-3'>Explore my journey</p>
                    </motion.div>
                </div>
                <motion.div
                    variants={itemVariants}
                    className="w-full lg:w-auto"
                >
                    <Image
                        src="https://res.cloudinary.com/debiu7z1b/image/upload/v1731740245/Variant2_vja71d.webp"
                        alt="Mission Image"
                        width={626}
                        height={805}
                        className='w-full lg:w-auto h-auto max-h-[50vh] lg:max-h-[805px] object-cover filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out'
                    />
                </motion.div>
            </motion.div>
        </div>
    )
}

