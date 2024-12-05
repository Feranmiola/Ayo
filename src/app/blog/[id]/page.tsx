'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from "next-nprogress-bar"
import Image from "next/image"
import { toast } from 'react-hot-toast'
import { PulseLoader } from 'react-spinners'
import BookIcon from "@/Components/Icons/BookIcon"
import BulbIconBadge from "@/Components/Icons/BulbIconBadge"
import EntreprenureshipBadgeIcon from "@/Components/Icons/EntreprenureshipBadgeIcon"
import Web3IconBadge from "@/Components/Icons/Web3IconBadge"
import { ScrollArea, ScrollBar } from "@/Components/ui/scroll-area"
import Footer from '@/Components/Footer'
import { getArticleByID } from '@/Shared/Hooks/Blog/UseGetArticlesByID'
import { getAllArticles } from '@/Shared/Hooks/Blog/UseGetAllArticles'

interface Article {
    id: string
    title: string
    body: string
    tags: string
    published: boolean
    createdAt: string
    description: string
}

export default function BlogPage({ params }: { params: { id: string } }) {
    const router = useRouter()
    const [article, setArticle] = useState<Article | null>(null)
    const [relatedArticles, setRelatedArticles] = useState<Article[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [ishovered, setIsHovered] = useState(false)
    const colors = ['#B4F405', '#47D1FF', '#F8B154']
    const [hoverColor, setHoverColor] = useState('#B4F405')
    const [prevColor, setPrevColor] = useState('')

    useEffect(() => {
        fetchArticle()
        fetchRelatedArticles()
    }, [params.id])

    const fetchArticle = async () => {
        setIsLoading(true)
        const response = await getArticleByID(params.id)
        if (response !== 'Failed') {
            setArticle(response.data)
        } else {
            toast.error('Failed to fetch article')
        }
        setIsLoading(false)
    }

    const fetchRelatedArticles = async () => {
        const response = await getAllArticles()
        if (response !== 'Failed') {
            const filtered = response.data
                .filter((a: Article) => a.id !== params.id)
                .slice(0, 3)
            setRelatedArticles(filtered)
        } else {
            toast.error('Failed to fetch related articles')
        }
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

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen bg-[#131313]">
                <PulseLoader color="#B4F405" />
            </div>
        )
    }

    if (!article) {
        return (
            <div className="flex justify-center items-center h-screen bg-[#131313] text-white">
                Article not found
            </div>
        )
    }

    return (
        <div className='flex flex-col w-screen overflow-hidden items-center justify-center'>
            <motion.div
                className="flex flex-col bg-[#131313] space-y-10 sm:space-y-20 w-screen items-center justify-center pt-5 sm:pt-10 px-4 sm:px-0"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    onMouseEnter={() => handleHover()}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => router.push('/')}
                    className="flex flex-row cursor-pointer items-center space-x-3 sm:space-x-5"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="h-[48px] w-[48px] sm:h-[64px] sm:w-[64px] rounded-[12.19px]">
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
                        className={`font-bricolage text-2xl sm:text-[36px] font-bold`}
                        style={{
                            color: ishovered ? hoverColor : '#6C6969',
                        }}
                    >
                        Ayo
                    </p>
                </motion.div>

                <motion.div className="flex flex-col items-center justify-center space-y-10 sm:space-y-20" variants={containerVariants}>
                    <motion.div className="h-auto sm:h-[239px] w-full max-w-[90%] sm:max-w-[1169px] flex flex-col justify-between" variants={itemVariants}>
                        <motion.div
                            className='w-[154px] h-[29px] border-[1px] rounded-[24px] flex flex-row items-center justify-center space-x-1'
                            style={{
                                borderColor: article.tags === 'Entrepreneurship' ? '#E68A11' : article.tags === 'Innovation' ? '#0AC532' : '#9747FF',
                                backgroundColor: article.tags === 'Entrepreneurship' ? '#EEA54640' : article.tags === 'Innovation' ? '#46D36433' : '#9747FF33'
                            }}
                            whileHover={{ scale: 1.05 }}
                        >
                            {article.tags === 'Entrepreneurship' && <EntreprenureshipBadgeIcon />}
                            {article.tags === 'Innovation' && <BulbIconBadge />}
                            {article.tags === 'Web3' && <Web3IconBadge />}
                            <p className='text-sm font-geist' style={{ color: article.tags === 'Entrepreneurship' ? '#E68A11' : article.tags === 'Innovation' ? '#0AC532' : '#9747FF' }}>{article.tags}</p>
                        </motion.div>
                        <motion.p className='text-4xl sm:text-5xl md:text-[64px] text-[#FFFFFF] leading-tight sm:leading-none mt-4 sm:mt-0'>
                            {article.title}
                        </motion.p>
                        <motion.p className='text-base text-white opacity-70 font-geist leading-none mt-4 sm:mt-0'>
                            {new Date(article.createdAt).toLocaleDateString()}
                        </motion.p>
                    </motion.div>

                    <motion.div variants={imageVariants} className='max-lg:hidden'>
                        <Image
                            src="https://res.cloudinary.com/debiu7z1b/image/upload/v1731513563/Frame_2609761_wogdpc.webp"
                            width={1125}
                            height={486}
                            alt="Blog Image"
                        />
                    </motion.div>
                    <motion.div variants={imageVariants} className='lg:hidden'>
                        <Image
                            src="https://res.cloudinary.com/debiu7z1b/image/upload/v1731513563/Frame_2609761_wogdpc.webp"
                            width={562}
                            height={243}
                            alt="Blog Image"
                            className="w-full h-auto"
                        />
                    </motion.div>

                    <motion.div
                        className="w-full max-w-[90%] sm:max-w-[1133px] text-white text-base sm:text-xl font-geist opacity-70 px-4 sm:px-0"
                        variants={itemVariants}
                        dangerouslySetInnerHTML={{ __html: article.body }}
                    />

                    <motion.div className="flex flex-col items-center justify-center max-w-[90%] max-md:w-full  space-y-10 sm:space-y-20" variants={containerVariants}>
                        <motion.div
                            className="flex flex-col sm:flex-row items-center w-full max-w-[90%] sm:max-w-[1133px] space-y-4 sm:space-y-0 sm:space-x-5"
                            variants={itemVariants}
                        >
                            <motion.p
                                className="text-white text-4xl sm:text-6xl md:text-8xl lg:text-[120px] font-geist font-bold text-center sm:text-left"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                            >
                                READ MORE
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, rotate: -180 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32"
                            >
                                <BookIcon className="w-full h-full" />
                            </motion.div>
                        </motion.div>

                        <ScrollArea className="w-full h-[400px] md:h-[300px]">
                            {isLoading ? (
                                <div className="flex justify-center items-center h-full">
                                    <PulseLoader color="#B4F405" />
                                </div>
                            ) : relatedArticles.length > 0 ? (
                                <div className='flex flex-col md:flex-row md:-space-x-2 pb-4 px-4 md:px-20'>
                                    {relatedArticles.map((relatedArticle, index) => (
                                        <motion.div
                                            key={relatedArticle.id}
                                            className={`flex-none w-full md:w-[400px] lg:w-[500px] h-[200px] md:h-[220px] bg-[#131313] rounded-[12px] cursor-pointer border border-[#262626] hover:border-white flex flex-col p-3 md:p-4 mb-4 md:mb-0`}
                                            style={{
                                                zIndex: 50 - index * 10,
                                                marginTop: `${index * 0.5}rem`,
                                                left: `${index * (300 + index * 50)}px`,
                                            }}
                                            variants={itemVariants}
                                            whileHover={{ scale: 0.95 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => router.push(`/blog/${relatedArticle.id}`)}
                                        >
                                            <div className='flex flex-col h-full justify-between px-2 md:px-3'>
                                                <motion.div
                                                    className={`w-max h-[24px] md:h-[29px] border rounded-[24px] flex flex-row items-center justify-center space-x-1 px-2 md:px-3`}
                                                    style={{
                                                        borderColor: relatedArticle.tags === 'Entrepreneurship' ? '#E68A11' : relatedArticle.tags === 'Innovation' ? '#0AC532' : '#9747FF',
                                                        backgroundColor: relatedArticle.tags === 'Entrepreneurship' ? '#EEA54640' : relatedArticle.tags === 'Innovation' ? '#46D36433' : '#9747FF33'
                                                    }}
                                                    whileHover={{ scale: 1.05 }}
                                                >
                                                    {relatedArticle.tags === 'Entrepreneurship' && <EntreprenureshipBadgeIcon />}
                                                    {relatedArticle.tags === 'Innovation' && <BulbIconBadge />}
                                                    {relatedArticle.tags === 'Web3' && <Web3IconBadge />}
                                                    <p className='text-xs md:text-sm font-medium' style={{ color: relatedArticle.tags === 'Entrepreneurship' ? '#E68A11' : relatedArticle.tags === 'Innovation' ? '#0AC532' : '#9747FF' }}>{relatedArticle.tags}</p>
                                                </motion.div>
                                                <p className='text-lg md:text-xl lg:text-2xl text-white leading-tight'>{relatedArticle.title}</p>
                                                <p className='text-xs md:text-sm text-white leading-tight'>{relatedArticle.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <div className='w-full flex items-center justify-center text-white text-base font-geist'>
                                    No Other Articles
                                </div>
                            )}
                            <ScrollBar orientation="horizontal" className='opacity-0' />
                        </ScrollArea>
                    </motion.div>
                </motion.div>
            </motion.div>
            <Footer />
        </div>
    )
}

