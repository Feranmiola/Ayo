// app/providers.tsx
'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export function Providers({ children }: { children: React.ReactNode }) {

    return (
        <>
            <ProgressBar
                height="3px"
                color="#B4F405"
                options={{ showSpinner: false }}
                shallowRouting
            />
            {children}
        </>
    )
}