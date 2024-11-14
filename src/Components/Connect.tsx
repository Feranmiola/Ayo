'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import ConnectIcon from './Icons/ConnectIcon'
import { Input } from './ui/input'
import { Form, FormControl, FormField, FormItem } from '@/Components/ui/form'
import { Button } from './ui/button'
import AvatarIcon from './Icons/AvatarIcon'
import MailIcon from './Icons/MailIcon'
import MessageIcon from './Icons/MessageIcon'
import { ContactFormSchema } from '@/Schema/ContactFormSchema'
import LinkedInIcon from './Icons/LinkedInIcon'
import XIcon from './Icons/XIcon'
import MediumIcon from './Icons/MediumIcon'

const Connect = () => {
    const ContactForm = useForm<z.infer<typeof ContactFormSchema>>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            name: '',
            company: '',
            email: '',
            phone: '',
            country: '',
            message: '',
        },
    })

    const { formState: { errors } } = ContactForm

    const onSubmit = (data: z.infer<typeof ContactFormSchema>) => {
        console.log(data)
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

    const socialButtonVariants = {
        hover: {
            scale: 1.05,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10,
            },
        },
    }

    return (
        <div className='h-screen sticky top-0 z-30'>
            <motion.div
                className='w-full h-[871px] bg-[#131313] flex flex-col items-center justify-center'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <motion.div className='flex flex-row items-center space-x-1' variants={itemVariants}>
                    <p className='text-[120px] text-white font-geist font-bold'>CONNECT</p>
                    <ConnectIcon />
                    <p className='text-[120px] text-white font-geist font-bold'>WITH ME</p>
                </motion.div>
                <motion.div className='flex flex-col w-[1147px] space-y-10' variants={itemVariants}>
                    <p className='text-opaqueGrey font-geist text-xl w-[450px]'>FOR POTENTIAL PARTNERSHIPS, EVENT INVITES, OR JUST TO SAY HELLO—FEEL FREE TO GET IN TOUCH.</p>
                    <div className='w-full flex flex-row justify-between items-center'>
                        <motion.div className='w-[743px]' variants={itemVariants}>
                            <Form {...ContactForm}>
                                <form onSubmit={ContactForm.handleSubmit(onSubmit)} className='w-full h-[200px] flex flex-col justify-between'>
                                    <div className='flex flex-col w-full h-[200px] justify-between'>
                                        <FormField
                                            control={ContactForm.control}
                                            name='name'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            icon={AvatarIcon}
                                                            type='text'
                                                            isError={!!errors.name}
                                                            className='w-full'
                                                            placeholder='Name'
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={ContactForm.control}
                                            name='email'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            icon={MailIcon}
                                                            type='text'
                                                            isError={!!errors.email}
                                                            className='w-full'
                                                            placeholder='Email'
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={ContactForm.control}
                                            name='message'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            icon={MessageIcon}
                                                            type='text'
                                                            isError={!!errors.message}
                                                            className='w-full'
                                                            placeholder='Message/Project Details'
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <motion.div
                                        whileHover={{
                                            scale: 1.05,
                                            transition: { type: "spring", stiffness: 400, damping: 10 },
                                        }}
                                    >
                                        <Button
                                            type='submit'
                                            className='w-[187px] mt-[20px] border-[1px] border-transparent hover:border-opaqueGrey h-[48px] text-white text-opacity-50 hover:text-opacity-100 transition ease-in-out font-bold text-base rounded-none bg-[#181818]'
                                        >
                                            Send Message
                                        </Button>
                                    </motion.div>
                                </form>
                            </Form>
                        </motion.div>
                        <motion.div className='h-[229px] w-[254px] flex flex-col justify-between items-center' variants={itemVariants}>
                            <motion.div
                                className='w-full h-[67px] flex flex-row space-x-2 px-5 cursor-pointer hover:border-white transition ease-in-out items-center rounded-[200px] border-[1px] border-[#262626]'
                                variants={socialButtonVariants}
                                whileHover="hover"
                            >
                                <LinkedInIcon />
                                <p className='text-white text-[36px] font-geist'>LinkedIn</p>
                            </motion.div>
                            <motion.div
                                className='w-full h-[67px] flex flex-row space-x-2 px-5 cursor-pointer hover:border-white transition ease-in-out items-center rounded-[200px] border-[1px] border-[#262626]'
                                variants={socialButtonVariants}
                                whileHover="hover"
                            >
                                <XIcon />
                                <p className='text-white text-[36px] font-geist'>X (Twitter)</p>
                            </motion.div>
                            <motion.div
                                className='w-full h-[67px] flex flex-row space-x-2 px-5 cursor-pointer hover:border-white transition ease-in-out items-center rounded-[200px] border-[1px] border-[#262626]'
                                variants={socialButtonVariants}
                                whileHover="hover"
                            >
                                <MediumIcon />
                                <p className='text-white text-[36px] font-geist'>Medium</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Connect