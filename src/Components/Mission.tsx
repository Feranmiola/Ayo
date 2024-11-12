import React from 'react'
import MissionIcon from './Icons/MissionIcon'
import ExploreIcon from './Icons/ExploreIcon'

const Mission = () => {
    return (
        <div className='w-full flex flex-col h-[945px] items-center justify-end'>
            <div className='h-[805.25px] flex flex-col justify-evenly'>
                <MissionIcon />
                <p className='w-[628px] leading-none text-white text-[56px] font-geist font-bold'><span className='text-opaqueGrey'>MY MISSION IS <br /></span> TO BUILD INNOVATIVE SOLUTIONS THAT IMPROVE LIVES.</p>
                <p className='text-opaqueGrey font-geist text-xl w-[433px]'>WHETHER IT WAS CODING MY FIRST WEBSITE AT 12 OR SCALING A STARTUP FROM ZERO TO MILLIONS</p>
                <div className='flex flex-row cursor-pointer items-center space-x-1'>
                    <ExploreIcon />
                    <p className='text-white text-xl font-geist  underline underline-offset-3'>Explore my journey</p>
                </div>
            </div>
        </div>
    )
}

export default Mission