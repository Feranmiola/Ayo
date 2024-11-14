'use client'

import { useState, useEffect, useRef, RefObject } from 'react'

export function useSticky(): [RefObject<HTMLDivElement>, boolean] {
    const [isSticky, setIsSticky] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!ref.current) return

        const cachedRef = ref.current
        const observer = new IntersectionObserver(
            ([e]) => setIsSticky(e.intersectionRatio < 1),
            {
                threshold: [1],
                rootMargin: '-1px 0px 0px 0px', // Slightly offset to trigger as soon as the element touches the top
            }
        )

        observer.observe(cachedRef)

        return () => {
            observer.unobserve(cachedRef)
        }
    }, [])

    return [ref, isSticky]
}