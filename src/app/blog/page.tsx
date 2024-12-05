/* eslint-disable */
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from "next-nprogress-bar"
import Image from "next/image"
import { toast } from 'react-hot-toast'
import { PulseLoader } from 'react-spinners'
import BlockIcon from "@/Components/Icons/BlockIcon"
import BulbIcon from "@/Components/Icons/BulbIcon"
import BulbIconBadge from "@/Components/Icons/BulbIconBadge"
import EntreprenureshipBadgeIcon from "@/Components/Icons/EntreprenureshipBadgeIcon"
import PencilIcon from "@/Components/Icons/PencilIcon"
import Search from "@/Components/Icons/Search"
import Web3IconBadge from "@/Components/Icons/Web3IconBadge"
import Footer from '@/Components/Footer'
import { getAllArticles } from '@/Shared/Hooks/Blog/UseGetAllArticles'
import EntreprenureshipWHite from '@/Components/Icons/EntreprenureshipWHite'

// Fallback icon component
const FallbackIcon = () => <div className="w-5 h-5 bg-gray-300 rounded-full" />

interface Article {
    id: string
    title: string
    content: string
    description: string
    tags: string
    published: boolean
    createdAt: string
}

export default function Blog() {
    const router = useRouter()
    const [selectedTab, setSelectedTab] = useState('All')
    const [ishovered, setIsHovered] = useState(false)
    const colors = ['#B4F405', '#47D1FF', '#F8B154']
    const [hoverColor, setHoverColor] = useState('#B4F405')
    const [prevColor, setPrevColor] = useState('')
    const [articles, setArticles] = useState<Article[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        fetchArticles()
    }, [])

    const fetchArticles = async () => {
        setIsLoading(true)
        const response = await getAllArticles()
        if (response !== 'Failed') {
            console.log(response.data)
            setArticles(response.data)
        } else {
            toast.error('Failed to fetch articles')
        }
        setIsLoading(false)
    }

    const handleHover = () => {
        setIsHovered(true)
        let newColor
        do {
            newColor = colors[Math.floor(Math.random() * colors.length)]
        } while (newColor === prevColor)
        setHoverColor(newColor)
        setPrevColor(newColor)
    }

    const filteredArticles = articles.filter(article =>
        (selectedTab === 'All' || article.tags === selectedTab) &&
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

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

    const categoryIcons: { [key: string]: React.ComponentType<{ colour?: string }> } = {
        Entrepreneurship: EntreprenureshipBadgeIcon || FallbackIcon,
        Innovation: BulbIconBadge || FallbackIcon,
        Web3: Web3IconBadge || FallbackIcon,
    }

    return (
        <div className='flex flex-col w-full'>
            <motion.div
                className="bg-[#131313] flex flex-col space-y-[5rem] sm:space-y-[7rem] md:space-y-[10rem] items-center justify-center pt-5 sm:pt-7 md:pt-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    onMouseEnter={() => handleHover()}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => router.push('/')}
                    className="flex flex-row cursor-pointer items-center space-x-3 sm:space-x-4 md:space-x-5"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="h-[48px] w-[48px] sm:h-[56px] sm:w-[56px] md:h-[64px] md:w-[64px] rounded-[12.19px]">
                        <Image
                            src="https://res.cloudinary.com/debiu7z1b/image/upload/v1731661994/fimage_904_oxgxon.webp"
                            alt="Ayo's profile picture"
                            objectFit="cover"
                            width={64}
                            height={64}
                            className={`rounded-[12.19px] transition-all duration-500 ${ishovered ? 'hover:grayscale-0 group-hover:grayscale-0' : 'filter grayscale'} `}
                        />
                    </div>
                    <p
                        className={`font-bricolage text-2xl sm:text-3xl md:text-[36px] font-bold`}
                        style={{
                            color: ishovered ? hoverColor : '#6C6969',
                        }}
                    >
                        Ayo
                    </p>
                </motion.div>

                <motion.div className='flex flex-col justify-between h-[50px] sm:h-[160px] md:h-[200px]' variants={itemVariants}>
                    <p className='text-white text-3xl sm:text-6xl md:text-[100px] font-geist font-bold leading-none'>MY IDEAS, INSIGHTS,</p>
                    <div className='flex flex-row items-center space-x-1'>
                        <PencilIcon />
                        <p className='text-white text-3xl sm:text-6xl md:text-[100px] font-geist font-bold leading-none'>AND INNOVATIONS</p>
                    </div>
                </motion.div>

                <motion.div className="flex flex-col space-y-5 sm:space-y-7 md:space-y-10 items-center justify-center" variants={itemVariants}>
                    <motion.div className="flex flex-wrap justify-center gap-2 sm:gap-3 items-center" variants={itemVariants}>
                        {[
                            { id: 'All', label: 'All' },
                            { id: 'Entrepreneurship', label: 'Entrepreneurship', icon: EntreprenureshipWHite || FallbackIcon },
                            { id: 'Innovation', label: 'Innovation', icon: BulbIcon || FallbackIcon },
                            { id: 'Web3', label: 'Web3', icon: BlockIcon || FallbackIcon },
                        ].map((tab) => (
                            <motion.div
                                key={tab.id}
                                onClick={() => setSelectedTab(tab.id)}
                                className={`px-3 sm:px-4 md:px-5 py-1 sm:py-2 rounded-[32px] items-center flex flex-row font-geist text-sm sm:text-base hover:border-white border-[1px] border-transparent cursor-pointer transition ease-in-out ${selectedTab === tab.id ? 'font-bold text-[#131313] bg-white cursor-default' : 'text-white bg-transparent'}`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {tab.icon && (
                                    <span className="pr-1">
                                        <tab.icon colour={selectedTab === tab.id ? 'black' : 'white'} />
                                    </span>
                                )}
                                {tab.label}
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div
                        className="flex flex-row items-center focus-within:border-b-white transition ease-in-out space-x-2 border-b-[1px] border-b-transparent"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Search />
                        <input
                            type="text"
                            className="text-white outline-none border-none bg-transparent text-sm sm:text-base font-geist placeholder:text-white placeholder:opacity-70"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </motion.div>

                    {isLoading ? (
                        <div className="flex justify-center items-center h-64">
                            <PulseLoader color="#B4F405" />
                        </div>
                    ) : (
                        <motion.div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 pb-5 sm:pb-7 md:pb-10 items-center justify-center w-full" variants={itemVariants}>
                            {filteredArticles.map((article) => {
                                const Icon = categoryIcons[article.tags] || FallbackIcon
                                return (
                                    <motion.div
                                        key={article.id}
                                        className="w-full sm:w-[350px] md:w-[401px] h-[280px] sm:h-[295px] md:h-[310px] border-[1px] cursor-pointer hover:border-white transition ease-in-out border-[#262626] bg-[#131313] rounded-[17px] flex items-center justify-center"
                                        variants={cardVariants}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => router.push(`/blog/${article.id}`)}
                                    >
                                        <div className="h-[220px] sm:h-[230px] md:h-[238px] w-[90%] sm:w-[320px] md:w-[353px] flex flex-col justify-between">
                                            <div className={`h-[29px] border-[1px] rounded-[24px] flex flex-row items-center justify-center space-x-1`} style={{ borderColor: article.tags === 'Entrepreneurship' ? '#E68A11' : article.tags === 'Innovation' ? '#0AC532' : '#9747FF', backgroundColor: article.tags === 'Entrepreneurship' ? '#EEA54640' : article.tags === 'Innovation' ? '#46D36433' : '#9747FF33', width: article.tags === 'Entrepreneurship' ? '154px' : article.tags === 'Innovation' ? '111px' : '82px' }}>
                                                <Icon />
                                                <p className='text-xs sm:text-sm font-geist' style={{ color: article.tags === 'Entrepreneurship' ? '#E68A11' : article.tags === 'Innovation' ? '#0AC532' : '#9747FF' }}>{article.tags}</p>
                                            </div>
                                            <p className='text-2xl sm:text-3xl md:text-[36px] text-[#FFFFFF] leading-none'>{article.title}</p>
                                            <div className='text-sm sm:text-base text-white opacity-70 font-geist leading-none' >{article.description}</div>
                                            <p className='text-xs sm:text-sm text-[#6C6969] font-geist'>{new Date(article.createdAt).toLocaleDateString()}</p>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    )}
                </motion.div>
            </motion.div>
            <Footer />
        </div>
    )
}

