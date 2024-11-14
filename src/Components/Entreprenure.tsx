/* eslint-disable */
import React from 'react';
import { motion } from 'framer-motion';
import EntrepreneurIcon from './Icons/EntreprenureIcon';
import InnovatorIcon from './Icons/InnovatorIcon';
import EnthusiastIcon from './Icons/EnthusiastIcon';

const Entrepreneur = () => {
    return (
        <div className='w-full h-[805px] flex flex-col space-y-10 items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-row space-x-1 items-center'>
                    <p className='font-geist font-bold leading-none text-[120px] text-white'>ENTREPRENEUR</p>
                    <motion.div
                        whileHover={{ scale: 1.2 }} // Scale on hover
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <EntrepreneurIcon />
                    </motion.div>
                </div>
                <div className='flex flex-row space-x-1 items-center'>
                    <p className='font-geist font-bold leading-none text-[120px] text-white'>INNOVATOR</p>
                    <motion.div
                        whileHover={{ scale: 1.2 }} // Scale on hover
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <InnovatorIcon />
                    </motion.div>
                    <p className='font-geist font-bold leading-none text-[120px] text-white'>WEB3</p>
                </div>
                <div className='flex flex-row space-x-1 items-center'>
                    <p className='font-geist font-bold leading-none text-[120px] text-white'>ENTHUSIAST</p>
                    <motion.div
                        whileHover={{ rotate: 360 }} // Rotate on hover
                        transition={{ duration: 0.5 }}
                    >
                        <EnthusiastIcon />
                    </motion.div>
                </div>
            </div>
            <p className='w-[947px] text-center text-xl text-[#757575] font-geist'>
                A passionate entrepreneur and tech innovator with a decade of experience across multiple industries, including web3, ClimateTech, blockchain, and tech development. I've built, scaled, and sold various digital products that tackle real-world problems. Welcome to my digital space where I share my thoughts, projects, and journey.
            </p>
        </div>
    );
}

export default Entrepreneur;
