'use client'

import { useState, useEffect, useRef } from 'react'

interface AutoScaleWrapperProps {
    children: React.ReactNode
    designWidth?: number // Base design width (default: 1920px)
    minScale?: number // Minimum scale factor (default: 0.3)
    maxScale?: number // Maximum scale factor (default: 1.2)
}

export default function AutoScaleWrapper({
    children,
    designWidth = 1920,
    minScale = 0.3,
    maxScale = 1.2
}: AutoScaleWrapperProps) {
    const [scale, setScale] = useState(1)
    const [isClient, setIsClient] = useState(false)
    const [containerHeight, setContainerHeight] = useState('100vh')
    const containerRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setIsClient(true)

        const calculateScale = () => {
            if (typeof window !== 'undefined') {
                const screenWidth = window.innerWidth
                const calculatedScale = screenWidth / designWidth

                // Clamp scale between min and max values
                const clampedScale = Math.max(minScale, Math.min(maxScale, calculatedScale))
                setScale(clampedScale)

                // Calculate proper container height
                const viewportHeight = window.innerHeight
                setContainerHeight(`${viewportHeight}px`)
            }
        }

        calculateScale()

        const handleResize = () => {
            calculateScale()
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [designWidth, minScale, maxScale])

    // Monitor content height and adjust container
    useEffect(() => {
        if (contentRef.current && isClient && scale > 0) {
            const updateHeight = () => {
                if (contentRef.current) {
                    const contentHeight = contentRef.current.scrollHeight
                    const scaledHeight = contentHeight * scale
                    const viewportHeight = window.innerHeight

                    // Use the larger of scaled content height or viewport height
                    const finalHeight = Math.max(scaledHeight, viewportHeight)
                    setContainerHeight(`${finalHeight}px`)
                }
            }

            // Initial update
            setTimeout(updateHeight, 100)

            // Create ResizeObserver to watch for content changes
            const resizeObserver = new ResizeObserver(() => {
                setTimeout(updateHeight, 50)
            })

            resizeObserver.observe(contentRef.current)

            // Also watch for window resize
            const handleWindowResize = () => {
                setTimeout(updateHeight, 100)
            }

            window.addEventListener('resize', handleWindowResize)

            return () => {
                resizeObserver.disconnect()
                window.removeEventListener('resize', handleWindowResize)
            }
        }
    }, [scale, isClient])

    if (!isClient) {
        return (
            <div className="min-h-screen w-full flex flex-col">
                {children}
            </div>
        )
    }

    return (
        <div
            ref={containerRef}
            className="w-full overflow-hidden"
            style={{
                height: containerHeight,
                minHeight: containerHeight,
                position: 'relative',
                background: 'transparent'
            }}
        >
            <div
                ref={contentRef}
                style={{
                    transform: `scale(${scale})`,
                    transformOrigin: 'top left',
                    width: `${designWidth}px`,
                    minHeight: '100vh',
                    position: 'relative',
                    background: 'transparent'
                }}
            >
                {children}
            </div>
        </div>
    )
} 