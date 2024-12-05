'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import BookIcon from './Icons/BookIcon'
import BookIconSmall from './Icons/BookIconSmall'
import RightArrow from './Icons/RightArrow'
import EntreprenureshipBadgeIcon from './Icons/EntreprenureshipBadgeIcon'
import BulbIconBadge from './Icons/BulbIconBadge'
import Web3IconBadge from './Icons/Web3IconBadge'
import { ScrollArea, ScrollBar } from './ui/scroll-area'
import { useRouter } from 'next-nprogress-bar'
import { getAllArticles } from '@/Shared/Hooks/Blog/UseGetAllArticles'
import toast from 'react-hot-toast'
import { PulseLoader } from 'react-spinners'

interface Article {
    id: string
    title: string
    description: string
    tags: string
}

const Ideas = () => {
    const router = useRouter()
    const [articles, setArticles] = useState<Article[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const isSmallDevice = useMediaQuery({ maxWidth: 768 })

    useEffect(() => {
        fetchArticles()
    }, [])

    const fetchArticles = async () => {
        setIsLoading(true)
        const response = await getAllArticles()
        if (response !== 'Failed') {
            console.log(response.data)
            setArticles(response.data.slice(0, 3)) // Only take the first 3 articles
        } else {
            toast.error('Failed to fetch articles')
        }
        setIsLoading(false)
    }

    const blogItems = [
        { icon: EntreprenureshipBadgeIcon, label: "Entrepreneurship", color: "#E68A11", bgColor: "#EEA54640", zIndex: 50, marginTop: 0, left: 0 },
        { icon: BulbIconBadge, label: "Innovation", color: "#0AC532", bgColor: "#46D36433", zIndex: 40, marginTop: 2, left: -20 },
        { icon: Web3IconBadge, label: "Web3", color: "#9747FF", bgColor: "#9747FF33", zIndex: 30, marginTop: 4, left: -40 },
    ]

    const getIconForTag = (tag: string) => {
        switch (tag.toLowerCase()) {
            case 'entrepreneurship':
                return EntreprenureshipBadgeIcon
            case 'innovation':
                return BulbIconBadge
            case 'web3':
                return Web3IconBadge
            default:
                return EntreprenureshipBadgeIcon
        }
    }

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

    const handleArticleClick = (id: string) => {
        router.push(`/blog/${id}`)
    }

    return (
        <div className='min-h-screen bg-white sticky top-0 z-10'>
            <motion.div
                className='min-h-screen w-full bg-white flex flex-col items-center justify-center py-6 md:py-10'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <div className='flex flex-col w-full items-center justify-center space-y-4 md:space-y-8'>
                    <motion.div className='flex w-full max-w-[900px] flex-col space-y-2 md:space-y-4 px-4 md:px-0' variants={itemVariants}>
                        <div className='flex flex-col justify-between h-auto md:h-[160px]'>
                            <p className='text-[#131313] text-3xl md:text-5xl lg:text-7xl font-geist font-bold leading-none'>IDEAS, INSIGHTS,</p>
                            <div className='flex flex-row items-center space-x-1'>
                                <BookIcon className="w-8 h-8 md:w-16 md:h-16 lg:w-24 lg:h-24" />
                                <p className='text-[#131313] text-3xl md:text-5xl lg:text-7xl font-geist font-bold leading-none'>AND INNOVATIONS</p>
                            </div>
                        </div>
                        <div className='flex flex-row items-center space-x-2'>
                            <p className='text-[#262626] text-sm md:text-base lg:text-xl font-geist'>From personal experiences</p>
                            <RightArrow />
                            <p className='text-[#262626] text-sm md:text-base lg:text-xl font-geist'>to industry observations</p>
                        </div>
                    </motion.div>

                    <ScrollArea className="w-full h-[400px] md:h-[300px]">
                        {isLoading ? (
                            <div className="flex justify-center items-center h-full">
                                <PulseLoader color="#B4F405" />
                            </div>
                        ) : articles.length > 0 ? (
                            <div className='flex flex-col md:flex-row md:-space-x-2 pb-4 px-4 md:px-20'>
                                {articles.map((article, index) => {
                                    const blogItem = blogItems[index % blogItems.length]
                                    const IconComponent = getIconForTag(article.tags)
                                    return (
                                        <motion.div
                                            key={article.id}
                                            className={`flex-none w-full md:w-[400px] lg:w-[500px] h-[200px] md:h-[220px] bg-white rounded-[12px] cursor-pointer border border-[#262626] flex flex-col p-3 md:p-4 mb-4 md:mb-0`}
                                            style={{
                                                zIndex: blogItem.zIndex,
                                                marginTop: isSmallDevice ? '0' : `${blogItem.marginTop}rem`,
                                                left: isSmallDevice ? '0' : `${index * 380}px`,
                                            }}
                                            variants={itemVariants}
                                            whileHover={{
                                                scale: 0.98,
                                                transition: {
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 10,
                                                },
                                            }}
                                            onClick={() => handleArticleClick(article.id)}
                                        >
                                            <div className='flex flex-col h-full justify-between px-2 md:px-3'>
                                                <div
                                                    className={`w-max h-[24px] md:h-[29px] border rounded-[24px] flex flex-row items-center justify-center space-x-1 px-2 md:px-3`}
                                                    style={{ borderColor: blogItem.color, backgroundColor: blogItem.bgColor }}
                                                >
                                                    <IconComponent />
                                                    <p className='text-xs md:text-sm font-medium' style={{ color: blogItem.color }}>{article.tags}</p>
                                                </div>
                                                <p className='text-lg md:text-xl lg:text-2xl text-[#080808] leading-tight'>{article.title}</p>
                                                <p className='text-xs md:text-sm text-[#080808] leading-snug'>{article.description}</p>
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        ) : (
                            <div className='w-full flex items-center justify-center text-[#F8B154] text-base font-geist'>
                                No Articles Found
                            </div>
                        )}
                        <ScrollBar orientation="horizontal" className='opacity-0' />
                    </ScrollArea>

                    {articles.length > 0 && (
                        <motion.div
                            onClick={() => router.push('/blog')}
                            className='w-full md:w-[300px] h-[50px] md:h-[60px] rounded-[200px] border-[1px] border-[#262626] cursor-pointer flex flex-row space-x-1 items-center justify-center mt-4 md:mt-0'
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.05,
                                transition: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 10,
                                },
                            }}
                        >
                            <BookIconSmall />
                            <p className='text-lg md:text-xl lg:text-2xl text-[#262626] font-geist'>Read more articles</p>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </div>
    )
}

export default Ideas

