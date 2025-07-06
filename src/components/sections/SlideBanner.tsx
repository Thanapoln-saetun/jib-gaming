'use client'

/**
 * SlideBanner Component
 * 
 * Creates a dynamic diagonal banner effect with two overlapping scrolling text strips
 * - Black banner on top scrolls from right to left
 * - Yellow banner below scrolls from left to right
 * - Both banners are rotated in opposite directions for a dynamic look
 * - Uses z-index for proper layering and shadow for depth
 * - Continuous circular scrolling motion that loops seamlessly
 */
export default function SlideBanner() {
    // Repeated content for continuous circular effect
    const bannerItem = "JIB TIKTOK BACK TO SCHOOL 💻🖥🖱📔🖍✏";

    return (
        <div className="relative w-full h-[180px] overflow-hidden py-8">
            <div className="relative w-[110%] h-[180px] overflow-hidden py-8 -mx-[5%] ">
                {/* Container with perspective effect */}
                <div className="relative w-[140%] h-full -mx-[20%] transform scale-[1.2]">
                    {/* Black Banner - rotated one way */}
                    <div className="absolute top-1 left-[-10%] w-[210%] h-[37px] overflow-hidden transform rotate-[-2deg] z-20">
                        <div className="animate-scroll-left bg-[#000000] h-full flex items-center whitespace-nowrap">
                            {/* Double the content for seamless looping */}
                            <div className="inline-flex items-center w-full px-[6.40112px]">
                                {Array.from({ length: 60 }, (_, i) => (
                                    <div key={i} className="flex items-center gap-[28.165px]">
                                        <span className="font-['Noto_Sans_Thai'] font-medium text-white text-[12.4099px] leading-[23.4959px]">
                                            {bannerItem}
                                        </span>
                                        <div className="bg-white h-[1.28px] w-[19.203px]" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Yellow/Orange Banner - rotated the opposite way */}
                    <div className="absolute bottom-1 left-[-20%] w-[240%] h-[37px] overflow-hidden transform rotate-[2deg] z-10">
                        <div className="animate-scroll-right bg-[#fdaf17] h-full flex items-center whitespace-nowrap">
                            {/* Triple the content for seamless looping */}
                            <div className="inline-flex items-center w-full px-[6.40112px]">
                                {Array.from({ length: 120 }, (_, i) => (
                                    <div key={i} className="flex items-center gap-[28.165px]">
                                        <span className="font-['Noto_Sans_Thai'] font-medium text-white text-[12.4099px] leading-[23.4959px]">
                                            {bannerItem}
                                        </span>
                                        <div className="bg-white h-[1.28px] w-[19.203px]" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 