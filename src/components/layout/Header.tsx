'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const heroBackground1 = "/assets/images/hero-background-1.png";
const heroBackground2 = "/assets/images/hero-background-2.png";
const heroBackground3 = "/assets/images/hero-background-3.png";
const imgAnimation = "/assets/images/animation.png";
const imgFacebook = "/assets/icons/facebook.png";
const imgSocialMedia1 = "/assets/icons/instagram.png";
const imgLine = "/assets/icons/line.png";
const imgTiktok = "/assets/icons/tiktok.png";
const imgMessenger = "/assets/icons/messenger.png";
const imgLogo = "/assets/images/LOGOBACKTOSCHOOL.png";

interface CountdownState {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function Header() {
    const [countdown, setCountdown] = useState<CountdownState>({
        days: 3,
        hours: 8,
        minutes: 19,
        seconds: 12
    });

    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [heroBackground1, heroBackground2, heroBackground3];

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                } else if (prev.days > 0) {
                    return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                }
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const slideTimer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // เปลี่ยนทุก 5 วินาที

        return () => clearInterval(slideTimer);
    }, [slides.length]);

    return (
        <header className="relative w-full scale-optimized">
            {/* Hero Section */}
            <div className="relative w-full h-[300px] xs:h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[828px] overflow-hidden auto-scale-content">
                {/* Background Images Slider */}
                <div className="absolute inset-0 w-full h-full">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            <Image
                                src={slide}
                                alt={`Hero background ${index + 1}`}
                                fill
                                sizes="100vw"
                                className="object-cover object-center"
                                priority={index === 0}
                            />
                        </div>
                    ))}
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-950/0 to-violet-950/80 z-10" />

                {/* Main Content */}
                <div className="absolute right-4 xs:right-6 sm:right-8 md:right-12 lg:right-16 xl:right-0 xl:left-[1002.95px] top-1/2 -translate-y-1/2 xl:top-[225px] xl:translate-y-0 w-[280px] xs:w-[320px] sm:w-[380px] md:w-[420px] lg:w-[460px] xl:w-[480px] z-20">
                    {/* Progress Indicator */}
                    <div className="flex items-center gap-1 xs:gap-1.5 mb-2 sm:mb-3 md:mb-4">
                        {slides.map((_, index) => (
                            <div
                                key={index}
                                className={`h-[4px] xs:h-[6px] sm:h-[7px] md:h-[9px] rounded-[20px] transition-all duration-300 ${index === currentSlide
                                    ? 'w-6 xs:w-8 sm:w-10 md:w-12 bg-[#fbae17]'
                                    : 'w-3 xs:w-4 sm:w-5 md:w-[21px] bg-[#d9d9d9]'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Logo */}
                    <div className="relative w-[60px] xs:w-[70px] sm:w-[80px] md:w-[90px] lg:w-[102px] h-[27px] xs:h-[32px] sm:h-[36px] md:h-[41px] lg:h-[46px] mb-2 sm:mb-3 md:mb-4">
                        <Image
                            src={imgLogo}
                            alt="Logo"
                            fill
                            sizes="(max-width: 475px) 60px, (max-width: 639px) 70px, (max-width: 767px) 80px, (max-width: 1023px) 90px, 102px"
                            className="object-cover object-left"
                        />
                    </div>

                    {/* Title */}
                    <div className="text-white mb-3 xs:mb-4 sm:mb-6 md:mb-8">
                        <p className="text-xs xs:text-sm sm:text-lg md:text-xl lg:text-[23px] font-['Noto_Sans_Thai'] font-semibold leading-tight sm:leading-normal md:leading-relaxed lg:leading-[47px] mb-0">
                            อุปกรณ์คอมพิวเตอร์ชั้นนำของประเทศ
                        </p>
                        <p className="text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-[35px] font-['Noto_Sans_Thai'] font-semibold leading-tight sm:leading-normal md:leading-relaxed lg:leading-[47px]">
                            ที่คัดสรรมาเพื่อคุณ
                        </p>
                    </div>

                    {/* Countdown Timer */}
                    <div className="flex items-center justify-end gap-1 xs:gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 mb-3 xs:mb-4 sm:mb-6 md:mb-8">
                        <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
                            {/* Days */}
                            <div className="flex flex-col items-center">
                                <div className="text-white text-[10px] xs:text-xs sm:text-sm md:text-lg lg:text-xl xl:text-[24px] font-['Noto_Sans_Thai'] text-center leading-tight sm:leading-normal md:leading-relaxed lg:leading-[57px] mb-1">
                                    วัน
                                </div>
                                <div className="backdrop-blur-sm bg-black/70 rounded-[6px] xs:rounded-[8px] sm:rounded-[10px] md:rounded-[12px] lg:rounded-[16px] shadow-lg p-1 xs:p-1.5 sm:p-2 w-[35px] xs:w-[45px] sm:w-[55px] md:w-[65px] lg:w-[75px] xl:w-[81px] h-[35px] xs:h-[45px] sm:h-[55px] md:h-[65px] lg:h-[75px] xl:h-[81px] flex items-center justify-center">
                                    <span className="text-[#fdb022] text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] font-bold font-['Noto_Sans_Thai'] leading-none">
                                        {countdown.days.toString().padStart(2, '0')}
                                    </span>
                                </div>
                            </div>

                            <div className="text-white/30 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] leading-none mx-0.5 sm:mx-1">:</div>

                            {/* Hours */}
                            <div className="flex flex-col items-center">
                                <div className="text-white text-[10px] xs:text-xs sm:text-sm md:text-lg lg:text-xl xl:text-[24px] font-['Noto_Sans_Thai'] text-center leading-tight sm:leading-normal md:leading-relaxed lg:leading-[57px] mb-1">
                                    ชั่วโมง
                                </div>
                                <div className="backdrop-blur-sm bg-black/70 rounded-[6px] xs:rounded-[8px] sm:rounded-[10px] md:rounded-[12px] lg:rounded-[16px] shadow-lg p-1 xs:p-1.5 sm:p-2 w-[35px] xs:w-[45px] sm:w-[55px] md:w-[65px] lg:w-[75px] xl:w-[81px] h-[35px] xs:h-[45px] sm:h-[55px] md:h-[65px] lg:h-[75px] xl:h-[81px] flex items-center justify-center">
                                    <span className="text-[#fdb022] text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] font-bold font-['Noto_Sans_Thai'] leading-none">
                                        {countdown.hours.toString().padStart(2, '0')}
                                    </span>
                                </div>
                            </div>

                            <div className="text-white/30 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] leading-none mx-0.5 sm:mx-1">:</div>

                            {/* Minutes */}
                            <div className="flex flex-col items-center">
                                <div className="text-white text-[10px] xs:text-xs sm:text-sm md:text-lg lg:text-xl xl:text-[24px] font-['Noto_Sans_Thai'] text-center leading-tight sm:leading-normal md:leading-relaxed lg:leading-[57px] mb-1">
                                    นาที
                                </div>
                                <div className="backdrop-blur-sm bg-black/70 rounded-[6px] xs:rounded-[8px] sm:rounded-[10px] md:rounded-[12px] lg:rounded-[16px] shadow-lg p-1 xs:p-1.5 sm:p-2 w-[35px] xs:w-[45px] sm:w-[55px] md:w-[65px] lg:w-[75px] xl:w-[81px] h-[35px] xs:h-[45px] sm:h-[55px] md:h-[65px] lg:h-[75px] xl:h-[81px] flex items-center justify-center">
                                    <span className="text-[#fdb022] text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] font-bold font-['Noto_Sans_Thai'] leading-none">
                                        {countdown.minutes.toString().padStart(2, '0')}
                                    </span>
                                </div>
                            </div>

                            <div className="text-white/30 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] leading-none mx-0.5 sm:mx-1">:</div>

                            {/* Seconds */}
                            <div className="flex flex-col items-center">
                                <div className="text-white text-[10px] xs:text-xs sm:text-sm md:text-lg lg:text-xl xl:text-[24px] font-['Noto_Sans_Thai'] text-center leading-tight sm:leading-normal md:leading-relaxed lg:leading-[57px] mb-1">
                                    วินาที
                                </div>
                                <div className="backdrop-blur-sm bg-black/70 rounded-[6px] xs:rounded-[8px] sm:rounded-[10px] md:rounded-[12px] lg:rounded-[16px] shadow-lg p-1 xs:p-1.5 sm:p-2 w-[35px] xs:w-[45px] sm:w-[55px] md:w-[65px] lg:w-[75px] xl:w-[81px] h-[35px] xs:h-[45px] sm:h-[55px] md:h-[65px] lg:h-[75px] xl:h-[81px] flex items-center justify-center">
                                    <span className="text-[#fdb022] text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] font-bold font-['Noto_Sans_Thai'] leading-none">
                                        {countdown.seconds.toString().padStart(2, '0')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative mb-3 xs:mb-4 sm:mb-6 md:mb-8 w-full">
                        <div className="w-full h-[4px] xs:h-[5px] sm:h-[6px] md:h-[7px] lg:h-[9px] bg-white/50 rounded-[6px]" />
                        <div className="absolute top-0 left-0 w-[80px] xs:w-[100px] sm:w-[120px] md:w-[150px] lg:w-[183px] h-[4px] xs:h-[5px] sm:h-[6px] md:h-[7px] lg:h-[9px] bg-gradient-to-r from-[#ed1c24] to-[#a61fdf] rounded-[6px]" />
                        <div className="absolute hidden lg:block" style={{ left: '167px', top: '-30px' }}>
                            <Image
                                src={imgAnimation}
                                alt="Animation"
                                width={32}
                                height={44}
                                className="animate-progress-icon"
                            />
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="flex items-center justify-end gap-1 xs:gap-1.5 sm:gap-2">
                        <div className="text-white text-[5px] xs:text-[6px] sm:text-[7px] font-['Noto_Sans_Thai'] text-right">
                            ต้องการติดต่อเรา
                        </div>
                        <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2">
                            <Image src={imgFacebook} alt="Facebook" width={14} height={14} className="w-[8px] xs:w-[10px] sm:w-[12px] md:w-[14px] h-[8px] xs:h-[10px] sm:h-[12px] md:h-[14px]" />
                            <Image src={imgSocialMedia1} alt="Instagram" width={17} height={15} className="w-[9px] xs:w-[11px] sm:w-[13px] md:w-[15px] lg:w-[17px] h-[8px] xs:h-[10px] sm:h-[12px] md:h-[14px] lg:h-[15px]" />
                            <Image src={imgLine} alt="Line" width={14} height={14} className="w-[8px] xs:w-[10px] sm:w-[12px] md:w-[14px] h-[8px] xs:h-[10px] sm:h-[12px] md:h-[14px]" />
                            <Image src={imgTiktok} alt="TikTok" width={14} height={14} className="w-[8px] xs:w-[10px] sm:w-[12px] md:w-[14px] h-[8px] xs:h-[10px] sm:h-[12px] md:h-[14px]" />
                            <Image src={imgMessenger} alt="Messenger" width={14} height={14} className="w-[8px] xs:w-[10px] sm:w-[12px] md:w-[14px] h-[8px] xs:h-[10px] sm:h-[12px] md:h-[14px]" />
                        </div>
                    </div>
                </div>


            </div>
        </header>
    )
} 