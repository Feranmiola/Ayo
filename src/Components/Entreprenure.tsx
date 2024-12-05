/* eslint-disable */
'use client'

import React from 'react';
import { motion } from 'framer-motion';

import InnovatorIcon from './Icons/InnovatorIcon';
import EnthusiastIcon from './Icons/EnthusiastIcon';
import EntrepreneurIcon from './Icons/EntreprenureIcon';

const Entrepreneur = () => {
    return (
        <div className='w-full min-h-screen flex flex-col space-y-6 sm:space-y-10 items-center justify-center px-4 sm:px-0'>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-row space-x-1 items-center'>
                    <p className='font-geist font-bold leading-none text-4xl sm:text-6xl md:text-8xl lg:text-[120px] text-white'>ENTREPRENEUR</p>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className='max'
                    >
                        <EntrepreneurIcon />
                    </motion.div>
                </div>
                <div className='flex flex-row space-x-1 items-center'>
                    <p className='font-geist font-bold leading-none text-4xl sm:text-6xl md:text-8xl lg:text-[120px] text-white'>INNOVATOR</p>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <InnovatorIcon />
                    </motion.div>
                    <p className='font-geist font-bold leading-none text-4xl sm:text-6xl md:text-8xl lg:text-[120px] text-white'>WEB3</p>
                </div>
                <div className='flex flex-row space-x-1 items-center'>
                    <p className='font-geist font-bold leading-none text-4xl sm:text-6xl md:text-8xl lg:text-[120px] text-white'>ENTHUSIAST</p>
                    <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                    >
                        <EnthusiastIcon />
                    </motion.div>
                </div>
            </div>
            <p className='w-full sm:w-3/4 md:w-2/3 lg:w-[947px] text-center text-sm sm:text-base md:text-lg lg:text-xl text-[#757575] font-geist'>
                A passionate entrepreneur and tech innovator with a decade of experience across multiple industries, including web3, ClimateTech, blockchain, and tech development. I've built, scaled, and sold various digital products that tackle real-world problems. Welcome to my digital space where I share my thoughts, projects, and journey.
            </p>
        </div>
    );
}

export default Entrepreneur;
