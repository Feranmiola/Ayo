/* eslint-disable */
// @ts-nocheck
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next-nprogress-bar'
import Image from 'next/image'
import { useLogin } from '@/Shared/Hooks/Auth/UseLogin'
import { UsePasswordReset } from '@/Shared/Hooks/Auth/UsePasswordReset'
import { UseResendEmail } from '@/Shared/Hooks/Auth/UseResendOTP'
import { useAuth } from '@/Shared/Context/AuthContext'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Input } from "@/Components/ui/input"
import { Button } from "@/Components/ui/button"
import { Form, FormControl, FormField, FormItem } from '@/Components/ui/form'
import toast, { Toaster } from 'react-hot-toast'
import MailIcon from '@/Components/Icons/MailIcon'
import { LockIcon } from 'lucide-react'
import { PulseLoader } from 'react-spinners'
import { useVerifyEmail } from '@/Shared/Hooks/Auth/UseVerify'

const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})

const EmailSchema = z.object({
    email: z.string().email(),
})

const OtpSchema = z.object({
    otp: z.string().min(4).max(6),
})

const NewPasswordSchema = z.object({
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
})

export default function AdminLogin() {
    const [step, setStep] = useState(1)
    const [email, setEmail] = useState('')
    const [countdown, setCountdown] = useState(0)
    const { login, isLoading: isLoginLoading } = useLogin()
    const { resetPassword, isLoading: isResetLoading } = UsePasswordReset()
    const { resendOTP, isResendPending } = UseResendEmail()
    const { verifyOTP, isLoading: isVerifyLoading } = useVerifyEmail()
    const { setAuthenticated, setAccessToken, setLastSignInTime } = useAuth()
    const router = useRouter()

    const LoginForm = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: { email: '', password: '' },
    })

    const EmailForm = useForm<z.infer<typeof EmailSchema>>({
        resolver: zodResolver(EmailSchema),
        defaultValues: { email: '' },
    })

    const OtpForm = useForm<z.infer<typeof OtpSchema>>({
        resolver: zodResolver(OtpSchema),
        defaultValues: { otp: '' },
    })

    const NewPasswordForm = useForm<z.infer<typeof NewPasswordSchema>>({
        resolver: zodResolver(NewPasswordSchema),
        defaultValues: { password: '', confirmPassword: '' },
    })

    useEffect(() => {
        let timer: NodeJS.Timeout
        if (countdown > 0) {
            timer = setTimeout(() => setCountdown(countdown - 1), 1000)
        }
        return () => clearTimeout(timer)
    }, [countdown])

    const handleLogin = async (data: z.infer<typeof LoginSchema>) => {
        login(
            { email: data.email, password: data.password },
            {
                onSuccess: (response) => {
                    setAuthenticated(true)
                    setAccessToken(response.data.access_token)
                    router.push('/blog/dashboard')
                    setLastSignInTime(String(Date.now()))
                    toast.success('Login successful')
                },
                onError: (error: any) => {
                    toast.error(error.response?.data?.message || 'Invalid email or password')
                },
            }
        )
    }

    const handlePasswordReset = async (data: z.infer<typeof EmailSchema>) => {
        setEmail(data.email)
        resetPassword(
            { email: data.email },
            {
                onSuccess: () => {
                    setStep(3)
                    setCountdown(30)
                    toast.success('OTP sent to your email')
                },
                onError: (error: any) => {
                    toast.error(error.response?.data?.message || 'Failed to send password reset email')
                },
            }
        )
    }

    const handleOtpVerification = async (data: z.infer<typeof OtpSchema>) => {
        verifyOTP(
            { email, otp: parseInt(data.otp) },
            {
                onSuccess: () => {
                    setStep(4)
                    toast.success('OTP verified successfully')
                },
                onError: (error: any) => {
                    toast.error(error.response?.data?.message || 'Invalid OTP')
                },
            }
        )
    }

    const handleNewPassword = async (data: z.infer<typeof NewPasswordSchema>) => {
        // Implement new password setting logic here
        // If successful, move back to step 1
        setStep(1)
        toast.success('Password reset successful. Please login with your new password')
    }

    const handleResendOtp = async () => {
        if (countdown > 0) return
        resendOTP(
            { email },
            {
                onSuccess: () => {
                    setCountdown(30)
                    toast.success('New OTP sent to your email')
                },
                onError: (error: any) => {
                    toast.error(error.response?.data?.message || 'Failed to resend OTP')
                },
            }
        )
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

    return (
        <motion.div
            className="min-h-screen bg-[#131313] flex items-center justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div
                className="bg-[#262626] p-8 rounded-lg w-full max-w-md"
                variants={itemVariants}
            >
                <motion.div
                    className="flex items-center justify-center mb-8"
                    variants={itemVariants}
                >
                    <Image
                        src="https://res.cloudinary.com/debiu7z1b/image/upload/v1731661994/fimage_904_oxgxon.webp"
                        alt="Ayo's profile picture"
                        width={64}
                        height={64}
                        className="rounded-full"
                    />
                </motion.div>
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                    {step === 1 ? "Admin Login" :
                        step === 2 ? "Forgot Password" :
                            step === 3 ? "Enter OTP" : "Set New Password"}
                </h2>
                {step === 1 && (
                    <Form {...LoginForm}>
                        <form onSubmit={LoginForm.handleSubmit(handleLogin)} className="space-y-4">
                            <FormField
                                control={LoginForm.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                icon={MailIcon}
                                                type="email"
                                                isError={!!LoginForm.formState.errors.email}
                                                className="w-full"
                                                placeholder="Email"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={LoginForm.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                icon={LockIcon}
                                                type="password"
                                                isError={!!LoginForm.formState.errors.password}
                                                className="w-full"
                                                placeholder="Password"
                                                isPassword={true}
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    transition: { type: "spring", stiffness: 400, damping: 10 },
                                }}
                            >
                                <Button
                                    type="submit"
                                    className="w-full mt-[20px] border-[1px] border-transparent hover:border-opaqueGrey h-[48px] text-white text-opacity-50 hover:text-opacity-100 transition ease-in-out font-bold text-base rounded-none bg-[#181818]"
                                    disabled={isLoginLoading}
                                >
                                    {isLoginLoading ? <PulseLoader color="#ffffff" size={10} /> : 'Login'}
                                </Button>
                            </motion.div>
                        </form>
                    </Form>
                )}
                {step === 2 && (
                    <Form {...EmailForm}>
                        <form onSubmit={EmailForm.handleSubmit(handlePasswordReset)} className="space-y-4">
                            <FormField
                                control={EmailForm.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                icon={MailIcon}
                                                type="email"
                                                isError={!!EmailForm.formState.errors.email}
                                                className="w-full"
                                                placeholder="Email"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    transition: { type: "spring", stiffness: 400, damping: 10 },
                                }}
                            >
                                <Button
                                    type="submit"
                                    className="w-full mt-[20px] border-[1px] border-transparent hover:border-opaqueGrey h-[48px] text-white text-opacity-50 hover:text-opacity-100 transition ease-in-out font-bold text-base rounded-none bg-[#181818]"
                                    disabled={isResetLoading}
                                >
                                    {isResetLoading ? <PulseLoader color="#ffffff" size={10} /> : 'Send OTP'}
                                </Button>
                            </motion.div>
                        </form>
                    </Form>
                )}
                {step === 3 && (
                    <Form {...OtpForm}>
                        <form onSubmit={OtpForm.handleSubmit(handleOtpVerification)} className="space-y-4">
                            <FormField
                                control={OtpForm.control}
                                name="otp"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                icon={LockIcon}
                                                type="text"
                                                isError={!!OtpForm.formState.errors.otp}
                                                className="w-full"
                                                placeholder="Enter OTP"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    transition: { type: "spring", stiffness: 400, damping: 10 },
                                }}
                            >
                                <Button
                                    type="submit"
                                    className="w-full mt-[20px] border-[1px] border-transparent hover:border-opaqueGrey h-[48px] text-white text-opacity-50 hover:text-opacity-100 transition ease-in-out font-bold text-base rounded-none bg-[#181818]"
                                    disabled={isVerifyLoading}
                                >
                                    {isVerifyLoading ? <PulseLoader color="#ffffff" size={10} /> : 'Verify OTP'}
                                </Button>
                            </motion.div>
                        </form>
                    </Form>
                )}
                {step === 4 && (
                    <Form {...NewPasswordForm}>
                        <form onSubmit={NewPasswordForm.handleSubmit(handleNewPassword)} className="space-y-4">
                            <FormField
                                control={NewPasswordForm.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                icon={LockIcon}
                                                type="password"
                                                isError={!!NewPasswordForm.formState.errors.password}
                                                className="w-full"
                                                placeholder="New Password"
                                                isPassword={true}
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={NewPasswordForm.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                icon={LockIcon}
                                                type="password"
                                                isError={!!NewPasswordForm.formState.errors.confirmPassword}
                                                className="w-full"
                                                placeholder="Confirm New Password"
                                                isPassword={true}
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    transition: { type: "spring", stiffness: 400, damping: 10 },
                                }}
                            >
                                <Button
                                    type="submit"
                                    className="w-full mt-[20px] border-[1px] border-transparent hover:border-opaqueGrey h-[48px] text-white text-opacity-50 hover:text-opacity-100 transition ease-in-out font-bold text-base rounded-none bg-[#181818]"
                                >
                                    Set New Password
                                </Button>
                            </motion.div>
                        </form>
                    </Form>
                )}
                {step === 1 && (
                    <div className="mt-4 text-center">
                        <Button
                            variant="link"
                            onClick={() => setStep(2)}
                            className="text-white"
                        >
                            Forgot Password?
                        </Button>
                    </div>
                )}
                {step === 3 && (
                    <div className="mt-4 text-center">
                        <Button
                            variant="link"
                            onClick={handleResendOtp}
                            disabled={isResendPending || countdown > 0}
                            className="text-white"
                        >
                            {countdown > 0 ? `Resend OTP (${countdown}s)` : 'Resend OTP'}
                        </Button>
                    </div>
                )}
            </motion.div>
            <Toaster />
        </motion.div>
    )
}