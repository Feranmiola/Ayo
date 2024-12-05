// app/providers.tsx
'use client'

import { AuthProvider } from '@/Shared/Context/AuthContext';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export function Providers({ children }: { children: React.ReactNode }) {

    const queryClient = new QueryClient();

    return (
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <ProgressBar
                    height="3px"
                    color="#B4F405"
                    options={{ showSpinner: false }}
                    shallowRouting
                />
                {children}
            </QueryClientProvider>
        </AuthProvider>
    )
}