'use client'

import { useEffect, useState } from 'react'

export default function HeroSection() {
    const [timeLeft, setTimeLeft] = useState({
        days: 3,
        hours: 8,
        minutes: 19,
        seconds: 12
    })

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                let { days, hours, minutes, seconds } = prev

                if (seconds > 0) {
                    seconds--
                } else {
                    seconds = 59
                    if (minutes > 0) {
                        minutes--
                    } else {
                        minutes = 59
                        if (hours > 0) {
                            hours--
                        } else {
                            hours = 23
                            if (days > 0) {
                                days--
                            }
                        }
                    }
                }

                return { days, hours, minutes, seconds }
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <section className="relative overflow-hidden bg-gradient-to-r from-primary to-primary-dark text-white">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-20 h-20 bg-warning/20 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 right-20 w-16 h-16 bg-blue-500/20 rounded-full animate-bounce"></div>
                <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-500/20 rounded-full animate-ping"></div>
                <div className="absolute top-1/4 right-1/3 w-8 h-8 bg-purple-500/20 rounded-full animate-pulse"></div>
            </div>

            <div className="container mx-auto px-4 py-16 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                                GAMING
                                <br />
                                <span className="text-warning">FESTIVAL</span>
                                <br />
                                2024
                            </h1>
                            <p className="text-xl text-gray-200">
                                ลดสูงสุด 70% สำหรับอุปกรณ์เกมมิ่งทุกชิ้น
                            </p>
                        </div>

                        {/* Countdown Timer */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold">เหลือเวลาอีก</h3>
                            <div className="flex gap-4">
                                <div className="countdown-digit text-center p-4 rounded-lg min-w-[80px]">
                                    <div className="text-3xl font-bold">{timeLeft.days.toString().padStart(2, '0')}</div>
                                    <div className="text-sm text-gray-200">วัน</div>
                                </div>
                                <div className="countdown-digit text-center p-4 rounded-lg min-w-[80px]">
                                    <div className="text-3xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                                    <div className="text-sm text-gray-200">ชั่วโมง</div>
                                </div>
                                <div className="countdown-digit text-center p-4 rounded-lg min-w-[80px]">
                                    <div className="text-3xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                                    <div className="text-sm text-gray-200">นาที</div>
                                </div>
                                <div className="countdown-digit text-center p-4 rounded-lg min-w-[80px]">
                                    <div className="text-3xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                                    <div className="text-sm text-gray-200">วินาที</div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex gap-4">
                            <button className="bg-warning hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg transition-colors">
                                ช็อปเลย!
                            </button>
                            <button className="border-2 border-white hover:bg-white hover:text-primary text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                                ดูสินค้าทั้งหมด
                            </button>
                        </div>

                        {/* Social Media */}
                        <div className="flex items-center gap-4 pt-4">
                            <span className="text-sm">ติดตาม:</span>
                            <div className="flex gap-3">
                                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                                    <span className="text-xs font-bold">f</span>
                                </div>
                                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                                    <span className="text-xs font-bold">ig</span>
                                </div>
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                                    <span className="text-xs font-bold">L</span>
                                </div>
                                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                                    <span className="text-xs font-bold">yt</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Gaming Setup Image Placeholder */}
                    <div className="relative">
                        <div className="w-full h-96 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                            <div className="text-center text-gray-400">
                                <div className="w-24 h-24 mx-auto mb-4 bg-gray-600 rounded-lg flex items-center justify-center">
                                    <span className="text-3xl">🎮</span>
                                </div>
                                <p>Gaming Setup Image</p>
                            </div>
                        </div>
                        {/* Floating elements */}
                        <div className="absolute -top-4 -right-4 w-16 h-16 bg-warning rounded-full flex items-center justify-center animate-bounce">
                            <span className="text-2xl">⚡</span>
                        </div>
                        <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
                            <span className="text-white text-xl">🔥</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 