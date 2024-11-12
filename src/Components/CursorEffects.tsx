"use client"

import React, { useState, useCallback, useRef } from 'react'
import { debounce } from 'lodash'

const DEBOUNCE_DELAY = 5 // ms
const FADE_OUT_DELAY = 1000 // ms

export default function SimplifiedFadeOutCursorEffects() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const [isActive, setIsActive] = useState(true)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    const updateCursorPosition = useCallback((x: number, y: number) => {
        if (cursorRef.current) {
            cursorRef.current.style.setProperty('--cursor-x', `${x}px`)
            cursorRef.current.style.setProperty('--cursor-y', `${y}px`)
        }
    }, [])

    const debouncedUpdateCursor = useCallback(
        debounce((x: number, y: number) => {
            updateCursorPosition(x, y)
        }, DEBOUNCE_DELAY),
        [updateCursorPosition]
    )

    const handleMouseMove = useCallback(
        (event: MouseEvent) => {
            const { clientX, clientY } = event
            debouncedUpdateCursor(clientX, clientY)
            setIsActive(true)

            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }

            timeoutRef.current = setTimeout(() => {
                setIsActive(false)
            }, FADE_OUT_DELAY)
        },
        [debouncedUpdateCursor]
    )


    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {/* Circular background */}
            <div
                ref={cursorRef}
                className={`absolute w-64 h-64 rounded-full bg-primary/10 transition-opacity duration-300 ease-out ${isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                style={{
                    transform: 'translate(calc(var(--cursor-x, 0) - 50%), calc(var(--cursor-y, 0) - 50%))',
                    transition: 'transform 0.1s ease-out, opacity 0.3s ease-out',
                }}
                aria-hidden="true"
            />
        </div>
    )
}