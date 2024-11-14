'use client'

import { motion } from 'framer-motion'
import BookIcon from "@/Components/Icons/BookIcon";
import BulbIconBadge from "@/Components/Icons/BulbIconBadge";
import EntreprenureshipBadgeIcon from "@/Components/Icons/EntreprenureshipBadgeIcon";
import Web3IconBadge from "@/Components/Icons/Web3IconBadge";
import { ScrollArea, ScrollBar } from "@/Components/ui/scroll-area";
import { useRouter } from "next-nprogress-bar";
import Image from "next/image";
import Footer from '@/Components/Footer';

export default function BlogPage() {
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

    const imageVariants = {
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
                className="flex flex-col bg-[#131313] space-y-20 w-screen items-center justify-center pt-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    onClick={() => router.back()}
                    className="flex flex-row cursor-pointer items-center space-x-5"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className="h-[64px] w-[64px] rounded-[12.19px]">
                        <Image
                            src="https://res.cloudinary.com/debiu7z1b/image/upload/v1731414210/image_904_1_hg5p3h.webp"
                            alt="Ayo's profile picture"
                            objectFit="cover"
                            width={64}
                            height={64}
                            className="rounded-[12.19px]"
                        />
                    </div>
                    <p className="text-[#6C6969] font-bricolage text-[36px] font-bold">Ayo</p>
                </motion.div>

                <motion.div className="flex flex-col items-center justify-center space-y-20" variants={containerVariants}>
                    <motion.div className="h-[239px] w-[1169px] flex flex-col justify-between" variants={itemVariants}>
                        <motion.div
                            className='w-[154px] h-[29px] border-[1px] border-[#E68A11] bg-[#EEA54640] rounded-[24px] flex flex-row items-center justify-center space-x-1'
                            whileHover={{ scale: 1.05 }}
                        >
                            <EntreprenureshipBadgeIcon />
                            <p className='text-sm text-[#E68A11] font-geist'>Entrepreneurship</p>
                        </motion.div>
                        <motion.p className='text-[64px] text-[#FFFFFF] leading-none' variants={itemVariants}>
                            How Blockchain is Changing the Game for ClimateTech Solutions
                        </motion.p>
                        <motion.p className='text-base text-white opacity-70 font-geist leading-none' variants={itemVariants}>
                            January 24, 2024
                        </motion.p>
                    </motion.div>

                    <motion.div variants={imageVariants}>
                        <Image
                            src="https://res.cloudinary.com/debiu7z1b/image/upload/v1731513563/Frame_2609761_wogdpc.webp"
                            width={1125}
                            height={486}
                            alt="Blog Image"
                        />
                    </motion.div>

                    <motion.p className="w-[1133px] text-white text-xl font-geist opacity-70" variants={itemVariants}>
                        Lorem ipsum dolor sit amet consectetur. Metus at sed lobortis ipsum sodales elementum. Maecenas tellus urna amet sed sit donec pulvinar. Nibh feugiat duis dignissim malesuada convallis tempus amet. Nulla nisl laoreet ornare nullam nunc. Pharetra volutpat orci et viverra porttitor sollicitudin. Viverra mattis at rhoncus id vestibulum. Potenti curabitur eget eu felis mauris gravida lectus. In id neque sed urna amet. Augue tortor turpis mauris vestibulum aliquam in. Ipsum ipsum dui donec ultrices arcu egestas cras. Eu nulla malesuada magna faucibus. Porta libero orci velit in metus. Adipiscing condimentum et ipsum libero congue. Amet sed tincidunt eu porttitor et dolor varius dictum. Placerat hac nunc posuere lectus odio nec dictumst ut lorem. Tellus posuere accumsan proin non tempor.
                    </motion.p>
                    <motion.p className="w-[1133px] text-white text-xl font-geist opacity-70" variants={itemVariants}>
                        Lorem ipsum dolor sit amet consectetur. Metus at sed lobortis ipsum sodales elementum. Maecenas tellus urna amet sed sit donec pulvinar. Nibh feugiat duis dignissim malesuada convallis tempus amet. Nulla nisl laoreet ornare nullam nunc. Pharetra volutpat orci et viverra porttitor sollicitudin. Viverra mattis at rhoncus id vestibulum. Potenti curabitur eget eu felis mauris gravida lectus. In id neque sed urna amet. Augue tortor turpis mauris vestibulum aliquam in. Ipsum ipsum dui donec ultrices arcu egestas cras. Eu nulla malesuada magna faucibus. Porta libero orci velit in metus. Adipiscing condimentum et ipsum libero congue. Amet sed tincidunt eu porttitor et dolor varius dictum. Placerat hac nunc posuere lectus odio nec dictumst ut lorem. Tellus posuere accumsan proin non tempor.
                    </motion.p>

                    <motion.div className="flex flex-col w-[1133px] space-y-5" variants={containerVariants}>
                        <motion.p className="text-white opacity-70 font-geist text-[36px]" variants={itemVariants}>
                            Happening in the global market
                        </motion.p>
                        <motion.p className="w-[1133px] text-white text-xl font-geist opacity-70" variants={itemVariants}>
                            Lorem ipsum dolor sit amet consectetur. Metus at sed lobortis ipsum sodales elementum. Maecenas tellus urna amet sed sit donec pulvinar. Nibh feugiat duis dignissim malesuada convallis tempus amet. Nulla nisl laoreet ornare nullam nunc. Pharetra volutpat orci et viverra porttitor sollicitudin. Viverra mattis at rhoncus id vestibulum. Potenti curabitur eget eu felis mauris gravida lectus. In id neque sed urna amet. Augue tortor turpis mauris vestibulum aliquam in. Ipsum ipsum dui donec ultrices arcu egestas cras. Eu nulla malesuada magna faucibus. Porta libero orci velit in metus. Adipiscing condimentum et ipsum libero congue. Amet sed tincidunt eu porttitor et dolor varius dictum. Placerat hac nunc posuere lectus odio nec dictumst ut lorem. Tellus posuere accumsan proin non tempor.
                        </motion.p>
                    </motion.div>
                    <motion.div className="w-full flex items-center justify-center" variants={imageVariants}>
                        <Image
                            src="https://res.cloudinary.com/debiu7z1b/image/upload/v1731513553/Group_6000_x0njq1.webp"
                            width={679}
                            height={363}
                            alt="Blog Image"
                        />
                    </motion.div>

                    <motion.p className="w-[1133px] text-white text-xl font-geist opacity-70" variants={itemVariants}>
                        Lorem ipsum dolor sit amet consectetur. Metus at sed lobortis ipsum sodales elementum. Maecenas tellus urna amet sed sit donec pulvinar. Nibh feugiat duis dignissim malesuada convallis tempus amet. Nulla nisl laoreet ornare nullam nunc. Pharetra volutpat orci et viverra porttitor sollicitudin. Viverra mattis at rhoncus id vestibulum. Potenti curabitur eget eu felis mauris gravida lectus. In id neque sed urna amet. Augue tortor turpis mauris vestibulum aliquam in. Ipsum ipsum dui donec ultrices arcu egestas cras. Eu nulla malesuada magna faucibus. Porta libero orci velit in metus. Adipiscing condimentum et ipsum libero congue. Amet sed tincidunt eu porttitor et dolor varius dictum. Placerat hac nunc posuere lectus odio nec dictumst ut lorem. Tellus posuere accumsan proin non tempor.
                    </motion.p>
                    <motion.p className="w-[1133px] text-white text-xl font-geist opacity-70" variants={itemVariants}>
                        Lorem ipsum dolor sit amet consectetur. Metus at sed lobortis ipsum sodales elementum. Maecenas tellus urna amet sed sit donec pulvinar. Nibh feugiat duis dignissim malesuada convallis tempus amet. Nulla nisl laoreet ornare nullam nunc. Pharetra volutpat orci et viverra porttitor sollicitudin. Viverra mattis at rhoncus id vestibulum. Potenti curabitur eget eu felis mauris gravida lectus. In id neque sed urna amet. Augue tortor turpis mauris vestibulum aliquam in. Ipsum ipsum dui donec ultrices arcu egestas cras. Eu nulla malesuada magna faucibus. Porta libero orci velit in metus. Adipiscing condimentum et ipsum libero congue. Amet sed tincidunt eu porttitor et dolor varius dictum. Placerat hac nunc posuere lectus odio nec dictumst ut lorem. Tellus posuere accumsan proin non tempor.
                    </motion.p>
                </motion.div>

                <motion.div className="flex flex-col items-center justify-center space-y-[10rem]" variants={containerVariants}>
                    <motion.div className="flex flex-row items-center w-[1133px] space-x-5" variants={itemVariants}>
                        <motion.p
                            className="text-white text-[120px] font-geist font-bold"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 10 }}
                        >
                            READ MORE
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, rotate: -180 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 10 }}
                        >
                            <BookIcon />
                        </motion.div>
                    </motion.div>

                    <ScrollArea className="w-[80%]" style={{ paddingBottom: '2rem' }}>
                        <motion.div
                            className='flex -space-x-2 pb-8 px-20'
                            variants={containerVariants}
                        >
                            {blogItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={`flex-none w-[600px] h-[267px] bg-[#131313] rounded-[12px] cursor-pointer border border-[#262626] hover:border-white flex flex-col justify-center items-center`}
                                    style={{
                                        zIndex: item.zIndex,
                                        marginTop: `${item.marginTop}rem`,
                                        left: `${index * 580 + item.left}px`,
                                    }}
                                    variants={itemVariants}
                                    whileHover={{ scale: 0.95 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <div className='flex flex-col h-[195px] justify-between px-5'>
                                        <motion.div
                                            className={`w-max h-[29px] border rounded-[24px] flex flex-row items-center justify-center space-x-1 px-3`}
                                            style={{ borderColor: item.color, backgroundColor: item.bgColor }}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <item.icon />
                                            <p className='text-sm font-medium' style={{ color: item.color }}>{item.label}</p>
                                        </motion.div>
                                        <p className='text-[36px] text-white leading-none'>How Blockchain is Changing the Game for ClimateTech Solutions</p>
                                        <p className='text-base text-white leading-none'>Custom online stores with user-friendly interfaces and seamless payment integration.</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                        <ScrollBar orientation="horizontal" className=' opacity-0' />
                    </ScrollArea>
                </motion.div>
            </motion.div>
            <Footer />
        </div>
    )
}