/* eslint-disable */
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next-nprogress-bar'
import { useAuth } from '@/Shared/Context/AuthContext'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ui/table"
import { Input } from "@/Components/ui/input"
import { Button } from "@/Components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/Components/ui/dialog"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu"
import { Checkbox } from "@/Components/ui/checkbox"
import { PulseLoader } from 'react-spinners'
import Image from 'next/image'
import { Editor } from '@tinymce/tinymce-react'
import { ChevronDown, Search } from 'lucide-react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { getAllArticles } from '@/Shared/Hooks/Blog/UseGetAllArticles'
import { UseAddNewArticle } from '@/Shared/Hooks/Blog/UseAddNewArticle'
import { UseDeleteArticle } from '@/Shared/Hooks/Blog/UseDeleteArticle'
import { UseEditArticle } from '@/Shared/Hooks/Blog/UseEditArticle'
import toast from 'react-hot-toast'

const ArticleSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    content: z.string().min(1, "Content is required"),
    category: z.enum(["Entrepreneurship", "Innovation", "Web3"]),
    published: z.boolean()
})

interface Article {
    id: string
    title: string
    content: string
    description: string
    tags: string
    published: boolean
    createdAt: string
}

export default function AdminDashboard() {
    const [articles, setArticles] = useState<Article[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')
    const [filter, setFilter] = useState<'all' | 'published' | 'draft'>('all')
    const [dialogOpen, setDialogOpen] = useState(false)
    const [editDialogOpen, setEditDialogOpen] = useState(false)
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)
    const [selectedId, setSelectedId] = useState<string | null>(null)
    const { isAuthenticated, accessToken, logout } = useAuth()
    const { addNewArticle, isPending: isAddingArticle } = UseAddNewArticle(accessToken as string)
    const { editArticle, isPending: isEditingArticle } = UseEditArticle(accessToken as string, selectedId as string)
    const { deleteArticle, isPending: isDeletingArticle } = UseDeleteArticle(accessToken as string, selectedId as string)
    const router = useRouter()

    useEffect(() => {
        const checkAuthAndFetch = async () => {
            setIsLoading(true)
            if (isAuthenticated === false) {
                router.push('/blog/admin-login')
            } else if (isAuthenticated === true) {
                await fetchArticles()
            }
            setIsLoading(false)
        }

        checkAuthAndFetch()
    }, [isAuthenticated, router])

    const fetchArticles = async () => {
        try {
            const response = await getAllArticles()
            if (response !== 'Failed') {
                setArticles(response.data)
            }
        } catch (error: any) {
            toast.error(error.response?.data?.message || 'Failed to fetch articles')
        }
    }

    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filter === 'all' || (filter === 'published' && article.published) || (filter === 'draft' && !article.published))
    )

    const handleAddNewArticle = async (data: z.infer<typeof ArticleSchema>) => {
        addNewArticle(
            {
                title: data.title,
                description: data.description,
                body: data.content,
                published: data.published,
                tags: data.category
            },
            {
                onSuccess: () => {
                    toast.success('Article added successfully')
                    fetchArticles()
                    setDialogOpen(false)
                },
                onError: (error: any) => {
                    toast.error(error.response?.data?.message || 'Failed to add article')
                }
            }
        )
    }

    const handleEditArticle = (article: Article) => {
        setSelectedArticle(article)
        setSelectedId(article.id)
        setEditDialogOpen(true)
    }

    const handleDeleteArticle = (article: Article) => {
        setSelectedArticle(article)
        setSelectedId(article.id)
        setDeleteDialogOpen(true)
    }

    const confirmEditArticle = async (data: z.infer<typeof ArticleSchema>) => {
        if (selectedId) {
            editArticle(
                {
                    title: data.title,
                    description: data.description,
                    body: data.content,
                    published: data.published,
                    tags: data.category
                },
                {
                    onSuccess: () => {
                        toast.success('Article updated successfully')
                        fetchArticles()
                        setEditDialogOpen(false)
                        setSelectedId(null)
                        setSelectedArticle(null)
                    },
                    onError: (error: any) => {
                        toast.error(error.response?.data?.message || 'Failed to update article')
                    }
                }
            )
        } else {
            toast.error('No article selected for editing')
        }
    }

    const confirmDeleteArticle = async () => {
        if (selectedId) {
            deleteArticle(
                {},
                {
                    onSuccess: () => {
                        toast.success('Article deleted successfully')
                        fetchArticles()
                        setDeleteDialogOpen(false)
                        setSelectedId(null)
                        setSelectedArticle(null)
                    },
                    onError: (error: any) => {
                        toast.error(error.response?.data?.message || 'Failed to delete article')
                    }
                }
            )
        } else {
            toast.error('No article selected for deletion')
        }
    }

    const handleLogout = () => {
        logout()
        router.push('/blog/admin-login')
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
        },
    }

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen bg-[#131313]">
                <PulseLoader color="#B4F405" />
            </div>
        )
    }

    return (
        <motion.div
            className="min-h-screen bg-[#131313]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div
                className="bg-[#262626] p-4 flex items-center justify-between"
                variants={itemVariants}
            >
                <div className="flex items-center space-x-4">
                    <Image
                        src="https://res.cloudinary.com/debiu7z1b/image/upload/v1731661994/fimage_904_oxgxon.webp"
                        alt="Ayo's profile picture"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <h1 className="text-2xl font-bold text-white">Ayo</h1>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="text-white">
                            Admin <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={handleLogout}>
                            Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </motion.div>

            <div className="p-8">
                <motion.div
                    className="flex items-center justify-between mb-8"
                    variants={itemVariants}
                >
                    <h2 className="text-3xl font-bold text-white">Articles</h2>
                    <div className="flex items-center space-x-4">
                        <motion.div
                            className="flex flex-row items-center focus-within:border-b-white transition ease-in-out space-x-2 border-b-[1px] border-b-transparent"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Search className="text-white" />
                            <Input
                                type="text"
                                className="text-white outline-none border-none bg-transparent text-base font-geist placeholder:text-white placeholder:opacity-70"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </motion.div>
                        <select
                            value={filter}
                            onChange={(e) => setFilter(e.target.value as 'all' | 'published' | 'draft')}
                            className="p-2 rounded bg-[#262626] text-white border-none outline-none"
                        >
                            <option value="all">All</option>
                            <option value="published">Published</option>
                            <option value="draft">Draft</option>
                        </select>
                        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                            <DialogTrigger asChild>
                                <Button className="bg-white text-[#131313] hover:bg-[#E0E0E0]">Add New Article</Button>
                            </DialogTrigger>
                            <DialogContent className="bg-[#262626] text-white max-w-6xl max-h-[90vh] overflow-y-auto">
                                <DialogHeader>
                                    <DialogTitle className="text-2xl font-bold mb-4">Add New Article</DialogTitle>
                                </DialogHeader>
                                <NewArticleForm
                                    onSubmit={handleAddNewArticle}
                                    isLoading={isAddingArticle}
                                    onClose={() => setDialogOpen(false)}
                                />
                            </DialogContent>
                        </Dialog>
                    </div>
                </motion.div>

                {filteredArticles.length > 0 ? (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="text-white hover:text-[#B4F405] transition ease-in-out">Title</TableHead>
                                <TableHead className="text-white hover:text-[#B4F405] transition ease-in-out">Category</TableHead>
                                <TableHead className="text-white hover:text-[#B4F405] transition ease-in-out">Status</TableHead>
                                <TableHead className="text-white hover:text-[#B4F405] transition ease-in-out">Created At</TableHead>
                                <TableHead className="text-white hover:text-[#B4F405] transition ease-in-out">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredArticles.map((article) => (
                                <TableRow key={article.id}>
                                    <TableCell className="text-white">{article.title}</TableCell>
                                    <TableCell className="text-white">{article.tags}</TableCell>
                                    <TableCell className="text-white">{article.published ? 'Published' : 'Draft'}</TableCell>
                                    <TableCell className="text-white">{new Date(article.createdAt).toLocaleDateString()}</TableCell>
                                    <TableCell>
                                        <Button variant="outline" className="mr-2 border-none bg-[#47D1FF] text-black hover:bg-transparent border-[1px] hover:border-[#47D1FF] hover:text-[#47D1FF] border-transparent" onClick={() => handleEditArticle(article)}>Edit</Button>
                                        <Button className="border-none bg-[#F8B154] text-black  hover:bg-transparent border-[1px] hover:border-[#F8B154] hover:text-[#F8B154] border-transparent" onClick={() => handleDeleteArticle(article)}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                ) : (
                    <div className='w-full flex items-center justify-center text-[#F8B154] text-base font-geist'>
                        No Articles Found
                    </div>
                )}
            </div>

            <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
                <DialogContent className="bg-[#262626] text-white max-w-6xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold mb-4">Edit Article</DialogTitle>
                    </DialogHeader>
                    {selectedArticle && (
                        <EditArticleForm
                            article={selectedArticle}
                            onSubmit={confirmEditArticle}
                            isLoading={isEditingArticle}
                            onClose={() => {
                                setEditDialogOpen(false)
                                setSelectedId(null)
                                setSelectedArticle(null)
                            }}
                        />
                    )}
                </DialogContent>
            </Dialog>

            <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
                <DialogContent className="bg-[#262626] text-white">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold mb-4">Delete Article</DialogTitle>
                    </DialogHeader>
                    <p>Are you sure you want to delete this article?</p>
                    <div className="flex justify-end space-x-2 mt-4">
                        <Button variant="outline" onClick={() => {
                            setDeleteDialogOpen(false)
                            setSelectedId(null)
                            setSelectedArticle(null)
                        }}>Cancel</Button>
                        <Button variant="destructive" onClick={confirmDeleteArticle}
                            disabled={isDeletingArticle || !selectedId}>
                            {isDeletingArticle ? 'Deleting...' : 'Delete'}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </motion.div>
    )
}

function NewArticleForm({ onSubmit, isLoading, onClose }: {
    onSubmit: (data: z.infer<typeof ArticleSchema>) => void,
    isLoading: boolean,
    onClose: () => void
}) {
    const form = useForm<z.infer<typeof ArticleSchema>>({
        resolver: zodResolver(ArticleSchema),
        defaultValues: {
            title: '',
            description: '',
            content: '',
            category: 'Entrepreneurship',
            published: false
        }
    })

    const { formState: { errors } } = form

    const handleSubmit = async (data: z.infer<typeof ArticleSchema>) => {
        await onSubmit(data)
        form.reset()
        onClose()
    }

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)} className="flex space-x-4">
            <div className="w-1/3 space-y-4">
                <Input
                    type="text"
                    placeholder="Title"
                    {...form.register('title')}
                    className="bg-[#131313] text-white font-geist pl-5 h-[48px]"
                />
                {errors.title && <p className="text-red-500">{errors.title.message}</p>}

                <Input
                    type="text"
                    placeholder="Description"
                    {...form.register('description')}
                    className="bg-[#131313] text-white font-geist pl-5 h-[48px]"
                />
                {errors.description && <p className="text-red-500">{errors.description.message}</p>}

                <Controller
                    name="category"
                    control={form.control}
                    render={({ field }) => (
                        <select
                            {...field}
                            className="w-full p-2 bg-[#131313] text-white border-none rounded-md"
                        >
                            <option value="Entrepreneurship">Entrepreneurship</option>
                            <option value="Innovation">Innovation</option>
                            <option value="Web3">Web3</option>
                        </select>
                    )}
                />
                {errors.category && <p className="text-red-500">{errors.category.message}</p>}

                <div className="flex items-center space-x-2">
                    <Controller
                        name="published"
                        control={form.control}
                        render={({ field }) => (
                            <Checkbox
                                id="published"
                                checked={field.value}
                                onCheckedChange={field.onChange}
                            />
                        )}
                    />
                    <label htmlFor="published" className="text-white">Publish immediately</label>
                </div>

                <Button type="submit" disabled={isLoading} className="w-full mt-[20px] border-[1px] border-transparent hover:border-opaqueGrey h-[48px] text-white text-opacity-50 hover:text-opacity-100 transition ease-in-out font-bold text-base rounded-none bg-[#181818]">
                    {isLoading ? 'Adding...' : 'Add Article'}
                </Button>
            </div>

            <div className="w-2/3">
                <Controller
                    name="content"
                    control={form.control}
                    render={({ field }) => (
                        <Editor
                            apiKey="5q2ieatkmhsixk071axpgnp66zyouyp0s06i2sotvluf7k3g"
                            init={{
                                height: 500,
                                menubar: true,
                                plugins: [
                                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview', 'anchor',
                                    'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount',
                                    'emoticons', 'template', 'paste', 'textpattern', 'imagetools', 'codesample',
                                    'hr', 'pagebreak', 'nonbreaking', 'toc', 'visualchars', 'quickbars', 'directionality'
                                ],
                                toolbar: 'undo redo | formatselect | bold italic underline strikethrough | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | \
                image media link codesample | table emoticons hr | \
                forecolor backcolor | fontselect fontsizeselect | \
                fullscreen code | help',
                                content_style: 'body { font-family: Helvetica, Arial, sans-serif; font-size: 14px; color: white; background-color: #131313; }',
                                font_formats: 'Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats',
                                image_advtab: true,
                                image_caption: true,
                                media_live_embeds: true,
                                paste_data_images: true,
                                quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
                                quickbars_insert_toolbar: 'image media table',
                                contextmenu: 'link image imagetools table configurepermanentpen',
                                codesample_languages: [
                                    { text: 'HTML/XML', value: 'markup' },
                                    { text: 'JavaScript', value: 'javascript' },
                                    { text: 'CSS', value: 'css' },
                                    { text: 'PHP', value: 'php' },
                                    { text: 'Ruby', value: 'ruby' },
                                    { text: 'Python', value: 'python' },
                                    { text: 'Java', value: 'java' },
                                    { text: 'C', value: 'c' },
                                    { text: 'C#', value: 'csharp' },
                                    { text: 'C++', value: 'cpp' }
                                ],
                                textpattern_patterns: [
                                    { start: '*', end: '*', format: 'italic' },
                                    { start: '**', end: '**', format: 'bold' },
                                    { start: '#', format: 'h1' },
                                    { start: '##', format: 'h2' },
                                    { start: '###', format: 'h3' },
                                    { start: '####', format: 'h4' },
                                    { start: '#####', format: 'h5' },
                                    { start: '######', format: 'h6' },
                                    { start: '1. ', cmd: 'InsertOrderedList' },
                                    { start: '* ', cmd: 'InsertUnorderedList' },
                                    { start: '- ', cmd: 'InsertUnorderedList' }
                                ]
                            }}
                            onEditorChange={(content) => field.onChange(content)}
                            value={field.value}
                        />
                    )}
                />
                {errors.content && <p className="text-red-500">{errors.content.message}</p>}
            </div>
        </form>
    )
}

function EditArticleForm({ article, onSubmit, isLoading, onClose }: {
    article: Article,
    onSubmit: (data: z.infer<typeof ArticleSchema>) => void,
    isLoading: boolean,
    onClose: () => void
}) {
    const form = useForm<z.infer<typeof ArticleSchema>>({
        resolver: zodResolver(ArticleSchema),
        defaultValues: {
            title: article.title,
            description: article.description,
            content: article.content,
            category: article.tags as "Entrepreneurship" | "Innovation" | "Web3",
            published: article.published
        }
    })

    const { formState: { errors } } = form

    const handleSubmit = async (data: z.infer<typeof ArticleSchema>) => {
        await onSubmit(data)
        onClose()
    }

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)} className="flex space-x-4">
            <div className="w-1/3 space-y-4">
                <Input
                    type="text"
                    placeholder="Title"
                    {...form.register('title')}
                    className="bg-[#131313] text-white font-geist pl-5 h-[48px]"
                />
                {errors.title && <p className="text-red-500">{errors.title.message}</p>}

                <Input
                    type="text"
                    placeholder="Description"
                    {...form.register('description')}
                    className="bg-[#131313] text-white font-geist pl-5 h-[48px]"
                />
                {errors.description && <p className="text-red-500">{errors.description.message}</p>}

                <Controller
                    name="category"
                    control={form.control}
                    render={({ field }) => (
                        <select
                            {...field}
                            className="w-full p-2 bg-[#131313] text-white border-none rounded-md"
                        >
                            <option value="Entrepreneurship">Entrepreneurship</option>
                            <option value="Innovation">Innovation</option>
                            <option value="Web3">Web3</option>
                        </select>
                    )}
                />
                {errors.category && <p className="text-red-500">{errors.category.message}</p>}

                <div className="flex items-center space-x-2">
                    <Controller
                        name="published"
                        control={form.control}
                        render={({ field }) => (
                            <Checkbox
                                id="published"
                                checked={field.value}
                                onCheckedChange={field.onChange}
                            />
                        )}
                    />
                    <label htmlFor="published" className="text-white">Publish immediately</label>
                </div>

                <Button type="submit" disabled={isLoading} className="w-full mt-[20px] border-[1px] border-transparent hover:border-opaqueGrey h-[48px] text-white text-opacity-50 hover:text-opacity-100 transition ease-in-out font-bold text-base rounded-none bg-[#181818]">
                    {isLoading ? 'Updating...' : 'Update Article'}
                </Button>
            </div>

            <div className="w-2/3">
                <Controller
                    name="content"
                    control={form.control}
                    render={({ field }) => (
                        <Editor
                            apiKey="5q2ieatkmhsixk071axpgnp66zyouyp0s06i2sotvluf7k3g"
                            init={{
                                height: 500,
                                menubar: true,
                                plugins: [
                                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview', 'anchor',
                                    'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount',
                                    'emoticons', 'template', 'paste', 'textpattern', 'imagetools', 'codesample',
                                    'hr', 'pagebreak', 'nonbreaking', 'toc', 'visualchars', 'quickbars', 'directionality'
                                ],
                                toolbar: 'undo redo | formatselect | bold italic underline strikethrough | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | \
                image media link codesample | table emoticons hr | \
                forecolor backcolor | fontselect fontsizeselect | \
                fullscreen code | help',
                                content_style: 'body { font-family: Helvetica, Arial, sans-serif; font-size: 14px; color: white; background-color: #131313; }',
                                font_formats: 'Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wing dings=wingdings,zapf dingbats',
                                image_advtab: true,
                                image_caption: true,
                                media_live_embeds: true,
                                paste_data_images: true,
                                quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
                                quickbars_insert_toolbar: 'image media table',
                                contextmenu: 'link image imagetools table configurepermanentpen',
                                codesample_languages: [
                                    { text: 'HTML/XML', value: 'markup' },
                                    { text: 'JavaScript', value: 'javascript' },
                                    { text: 'CSS', value: 'css' },
                                    { text: 'PHP', value: 'php' },
                                    { text: 'Ruby', value: 'ruby' },
                                    { text: 'Python', value: 'python' },
                                    { text: 'Java', value: 'java' },
                                    { text: 'C', value: 'c' },
                                    { text: 'C#', value: 'csharp' },
                                    { text: 'C++', value: 'cpp' }
                                ],
                                textpattern_patterns: [
                                    { start: '*', end: '*', format: 'italic' },
                                    { start: '**', end: '**', format: 'bold' },
                                    { start: '#', format: 'h1' },
                                    { start: '##', format: 'h2' },
                                    { start: '###', format: 'h3' },
                                    { start: '####', format: 'h4' },
                                    { start: '#####', format: 'h5' },
                                    { start: '######', format: 'h6' },
                                    { start: '1. ', cmd: 'InsertOrderedList' },
                                    { start: '* ', cmd: 'InsertUnorderedList' },
                                    { start: '- ', cmd: 'InsertUnorderedList' }
                                ]
                            }}
                            onEditorChange={(content) => field.onChange(content)}
                            value={field.value}
                        />
                    )}
                />
                {errors.content && <p className="text-red-500">{errors.content.message}</p>}
            </div>
        </form>
    )
}