'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next-nprogress-bar'
import { PulseLoader } from 'react-spinners'

interface AuthContextType {
    isAuthenticated: boolean
    accessToken: string | null
    lastSignInTime: string | null
    logout: () => void
    setAuthenticated: (value: boolean) => void
    setAccessToken: (token: string | null) => void
    setLastSignInTime: (time: string | null) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const PREFIX = 'AYO_BLOG_VALUE_'

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [accessToken, setAccessToken] = useState<string | null>(null)
    const [lastSignInTime, setLastSignInTime] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const initializeAuth = () => {
            const storedToken = localStorage.getItem(`${PREFIX}accessToken`)
            const storedLastSignIn = localStorage.getItem(`${PREFIX}lastSignInTime`)
            const storedIsAuthenticated = localStorage.getItem(`${PREFIX}isAuthenticated`)

            if (storedToken) setAccessToken(storedToken)
            if (storedLastSignIn) setLastSignInTime(storedLastSignIn)
            if (storedIsAuthenticated) setIsAuthenticated(storedIsAuthenticated === 'true')

            if (storedLastSignIn) {
                const lastSignInDate = new Date(storedLastSignIn)
                const currentDate = new Date()
                const daysDifference = (currentDate.getTime() - lastSignInDate.getTime()) / (1000 * 3600 * 24)

                if (daysDifference > 3) {
                    logout()
                }
            }

            setIsLoading(false)
        }

        initializeAuth()
    }, [])

    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem(`${PREFIX}isAuthenticated`, isAuthenticated.toString())
        }
    }, [isAuthenticated, isLoading])

    useEffect(() => {
        if (!isLoading) {
            if (accessToken) {
                localStorage.setItem(`${PREFIX}accessToken`, accessToken)
            } else {
                localStorage.removeItem(`${PREFIX}accessToken`)
            }
        }
    }, [accessToken, isLoading])

    useEffect(() => {
        if (!isLoading) {
            if (lastSignInTime) {
                localStorage.setItem(`${PREFIX}lastSignInTime`, lastSignInTime)
            } else {
                localStorage.removeItem(`${PREFIX}lastSignInTime`)
            }
        }
    }, [lastSignInTime, isLoading])

    const logout = () => {
        setIsAuthenticated(false)
        setAccessToken(null)
        setLastSignInTime(null)
        localStorage.removeItem(`${PREFIX}isAuthenticated`)
        localStorage.removeItem(`${PREFIX}accessToken`)
        localStorage.removeItem(`${PREFIX}lastSignInTime`)
        router.push('/admin/login')
    }

    if (isLoading) {
        return <div className='w-screen h-screen flex items-center justify-center bg-[#131313]'><PulseLoader color="#B4F405" /></div> // Or any loading indicator
    }

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                accessToken,
                lastSignInTime,
                logout,
                setAuthenticated: setIsAuthenticated,
                setAccessToken,
                setLastSignInTime
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}