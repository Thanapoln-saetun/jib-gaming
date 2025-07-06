'use client'

import { useState, useRef, useEffect } from 'react'

// Local Assets - Hero Cards (downloaded successfully)
const heroKeyboardImg = "/assets/images/hero/hero-keyboard.png"
const heroMouseImg = "/assets/images/hero/hero-mouse.png"
const heroKeyboardGroup = "/assets/images/hero/hero-keyboard-group.png"
const heroMouseGroup = "/assets/images/hero/hero-mouse-group.png"

// Additional Hero Cards - mix of local and fallback
const heroMonitorBg = "/assets/images/hero/hero-monitor-bg.png"
const heroMonitorLogo = "/assets/images/hero/hero-monitor-logo.png"
const heroSmartphoneBg = "/assets/images/hero/hero-smartphone-bg.png"
const heroSmartphoneLogo = "/assets/images/hero/hero-smartphone-logo.png"

// Local Assets - Products and UI (downloaded successfully)
const notebookIcon = "/assets/icons/ui/notebook.svg"
const arrowIcon = "/assets/icons/ui/arrow-icon.svg"
const productImage = "/assets/images/products/product-vga.png"
const productMask = "/assets/images/products/product-mask.png"
const brandLogo = "/assets/brands/galax-logo.png"
const heartIcon = "/assets/icons/ui/heart-icon.svg"
const eyeIcon = "/assets/icons/ui/eye-icon.svg"
const compareIcon = "/assets/icons/ui/compare-icon.svg"
const cartIcon = "/assets/icons/ui/cart-icon.svg"
const previewIcon = "/assets/icons/ui/preview-icon.svg"

interface HeroCard {
    id: number
    backgroundImage: string
    logoImage: string
    title: string
    subtitle: string
}

interface Product {
    id: number
    name: string
    category: string
    originalPrice: number
    salePrice: number
    discount: number
    views: number
    sold: number
    total: number
    image: string
    logo: string
}

const heroCards: HeroCard[] = [
    {
        id: 1,
        backgroundImage: heroKeyboardImg,
        logoImage: heroKeyboardGroup,
        title: "นี่แหละ",
        subtitle: "สัมผัสที่ตามหา"
    },
    {
        id: 2,
        backgroundImage: heroMouseImg,
        logoImage: heroMouseGroup,
        title: "เกมเมอร์",
        subtitle: "ต้องได้ของดีๆ"
    },
    {
        id: 3,
        backgroundImage: heroMonitorBg,
        logoImage: heroMonitorLogo,
        title: "ภาพสวย",
        subtitle: "คมชัดทุกพิกเซล"
    },
    {
        id: 4,
        backgroundImage: heroSmartphoneBg,
        logoImage: heroSmartphoneLogo,
        title: "สมาร์ทโฟน",
        subtitle: "คู่ใจที่คุณตามหา"
    }
]

const products: Product[] = [
    {
        id: 1,
        name: "VGA (การ์ดแสดงผล) GALAX GEFORCE RTX 3060 (1-CL...",
        category: "ไม่มีหมวดหมู่",
        originalPrice: 38990,
        salePrice: 9990,
        discount: 70,
        views: 1125,
        sold: 70,
        total: 330,
        image: productImage,
        logo: brandLogo
    },
    {
        id: 2,
        name: "VGA (การ์ดแสดงผล) GALAX GEFORCE RTX 3060 (1-CL...",
        category: "ไม่มีหมวดหมู่",
        originalPrice: 38990,
        salePrice: 9990,
        discount: 70,
        views: 1125,
        sold: 70,
        total: 330,
        image: productImage,
        logo: brandLogo
    },
    {
        id: 3,
        name: "VGA (การ์ดแสดงผล) GALAX GEFORCE RTX 3060 (1-CL...",
        category: "ไม่มีหมวดหมู่",
        originalPrice: 38990,
        salePrice: 9990,
        discount: 70,
        views: 1125,
        sold: 70,
        total: 330,
        image: productImage,
        logo: brandLogo
    },
    {
        id: 4,
        name: "VGA (การ์ดแสดงผล) GALAX GEFORCE RTX 3060 (1-CL...",
        category: "ไม่มีหมวดหมู่",
        originalPrice: 38990,
        salePrice: 9990,
        discount: 70,
        views: 1125,
        sold: 70,
        total: 330,
        image: productImage,
        logo: brandLogo
    },
    {
        id: 5,
        name: "VGA (การ์ดแสดงผล) GALAX GEFORCE RTX 3060 (1-CL...",
        category: "ไม่มีหมวดหมู่",
        originalPrice: 38990,
        salePrice: 9990,
        discount: 70,
        views: 1125,
        sold: 70,
        total: 330,
        image: productImage,
        logo: brandLogo
    },
    {
        id: 6,
        name: "VGA (การ์ดแสดงผล) GALAX GEFORCE RTX 3060 (1-CL...",
        category: "ไม่มีหมวดหมู่",
        originalPrice: 38990,
        salePrice: 9990,
        discount: 70,
        views: 1125,
        sold: 70,
        total: 330,
        image: productImage,
        logo: brandLogo
    },
    {
        id: 7,
        name: "VGA (การ์ดแสดงผล) GALAX GEFORCE RTX 3060 (1-CL...",
        category: "ไม่มีหมวดหมู่",
        originalPrice: 38990,
        salePrice: 9990,
        discount: 70,
        views: 1125,
        sold: 70,
        total: 330,
        image: productImage,
        logo: brandLogo
    },
    {
        id: 8,
        name: "VGA (การ์ดแสดงผล) GALAX GEFORCE RTX 3060 (1-CL...",
        category: "ไม่มีหมวดหมู่",
        originalPrice: 38990,
        salePrice: 9990,
        discount: 70,
        views: 1125,
        sold: 70,
        total: 330,
        image: productImage,
        logo: brandLogo
    },
    {
        id: 9,
        name: "VGA (การ์ดแสดงผล) GALAX GEFORCE RTX 3060 (1-CL...",
        category: "ไม่มีหมวดหมู่",
        originalPrice: 38990,
        salePrice: 9990,
        discount: 70,
        views: 1125,
        sold: 70,
        total: 330,
        image: productImage,
        logo: brandLogo
    },
    {
        id: 10,
        name: "VGA (การ์ดแสดงผล) GALAX GEFORCE RTX 3060 (1-CL...",
        category: "ไม่มีหมวดหมู่",
        originalPrice: 38990,
        salePrice: 9990,
        discount: 70,
        views: 1125,
        sold: 70,
        total: 330,
        image: productImage,
        logo: brandLogo
    },
    {
        id: 11,
        name: "VGA (การ์ดแสดงผล) GALAX GEFORCE RTX 3060 (1-CL...",
        category: "ไม่มีหมวดหมู่",
        originalPrice: 38990,
        salePrice: 9990,
        discount: 70,
        views: 1125,
        sold: 70,
        total: 330,
        image: productImage,
        logo: brandLogo
    },
    {
        id: 12,
        name: "VGA (การ์ดแสดงผล) GALAX GEFORCE RTX 3060 (1-CL...",
        category: "ไม่มีหมวดหมู่",
        originalPrice: 38990,
        salePrice: 9990,
        discount: 70,
        views: 1125,
        sold: 70,
        total: 330,
        image: productImage,
        logo: brandLogo
    },
    {
        id: 13,
        name: "VGA (การ์ดแสดงผล) GALAX GEFORCE RTX 3060 (1-CL...",
        category: "ไม่มีหมวดหมู่",
        originalPrice: 38990,
        salePrice: 9990,
        discount: 70,
        views: 1125,
        sold: 70,
        total: 330,
        image: productImage,
        logo: brandLogo
    },
    {
        id: 14,
        name: "VGA (การ์ดแสดงผล) GALAX GEFORCE RTX 3060 (1-CL...",
        category: "ไม่มีหมวดหมู่",
        originalPrice: 38990,
        salePrice: 9990,
        discount: 70,
        views: 1125,
        sold: 70,
        total: 330,
        image: productImage,
        logo: brandLogo
    },
    {
        id: 15,
        name: "VGA (การ์ดแสดงผล) GALAX GEFORCE RTX 3060 (1-CL...",
        category: "ไม่มีหมวดหมู่",
        originalPrice: 38990,
        salePrice: 9990,
        discount: 70,
        views: 1125,
        sold: 70,
        total: 330,
        image: productImage,
        logo: brandLogo
    },
    {
        id: 16,
        name: "VGA (การ์ดแสดงผล) GALAX GEFORCE RTX 3060 (1-CL...",
        category: "ไม่มีหมวดหมู่",
        originalPrice: 38990,
        salePrice: 9990,
        discount: 70,
        views: 1125,
        sold: 70,
        total: 330,
        image: productImage,
        logo: brandLogo
    },
    {
        id: 17,
        name: "VGA (การ์ดแสดงผล) GALAX GEFORCE RTX 3060 (1-CL...",
        category: "ไม่มีหมวดหมู่",
        originalPrice: 38990,
        salePrice: 9990,
        discount: 70,
        views: 1125,
        sold: 70,
        total: 330,
        image: productImage,
        logo: brandLogo
    },
    {
        id: 18,
        name: "VGA (การ์ดแสดงผล) GALAX GEFORCE RTX 3060 (1-CL...",
        category: "ไม่มีหมวดหมู่",
        originalPrice: 38990,
        salePrice: 9990,
        discount: 70,
        views: 1125,
        sold: 70,
        total: 330,
        image: productImage,
        logo: brandLogo
    },
    {
        id: 19,
        name: "VGA (การ์ดแสดงผล) GALAX GEFORCE RTX 3060 (1-CL...",
        category: "ไม่มีหมวดหมู่",
        originalPrice: 38990,
        salePrice: 9990,
        discount: 70,
        views: 1125,
        sold: 70,
        total: 330,
        image: productImage,
        logo: brandLogo
    },
    {
        id: 20,
        name: "VGA (การ์ดแสดงผล) GALAX GEFORCE RTX 3060 (1-CL...",
        category: "ไม่มีหมวดหมู่",
        originalPrice: 38990,
        salePrice: 9990,
        discount: 70,
        views: 1125,
        sold: 70,
        total: 330,
        image: productImage,
        logo: brandLogo
    }
]

export default function ProductCards() {
    const [activeCategory, setActiveCategory] = useState('สายเกม')
    const scrollRefs = useRef<(HTMLDivElement | null)[]>([])
    const [isDragging, setIsDragging] = useState<number | null>(null)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)

    const categories = ['สายเกม', 'สายกราฟิก', 'สายอนิเมชัน']

    const handleMouseDown = (e: React.MouseEvent, sectionIndex: number) => {
        if (!scrollRefs.current[sectionIndex]) return
        setIsDragging(sectionIndex)
        setStartX(e.pageX - scrollRefs.current[sectionIndex]!.offsetLeft)
        setScrollLeft(scrollRefs.current[sectionIndex]!.scrollLeft)
    }

    const handleMouseLeave = () => {
        setIsDragging(null)
    }

    const handleMouseUp = () => {
        setIsDragging(null)
    }

    const handleMouseMove = (e: React.MouseEvent, sectionIndex: number) => {
        if (isDragging !== sectionIndex || !scrollRefs.current[sectionIndex]) return
        e.preventDefault()
        const x = e.pageX - scrollRefs.current[sectionIndex]!.offsetLeft
        const walk = (x - startX) * 2 // scroll-fast
        scrollRefs.current[sectionIndex]!.scrollLeft = scrollLeft - walk
    }

    return (
        <div className="bg-white">
            {heroCards.map((heroCard, heroIndex) => (
                <section key={heroCard.id} className="py-8">
                    <div className="max-w-[1263px] mx-auto">
                        <div className="flex gap-[34px] items-end">
                            {/* Hero Card Section */}
                            <div className="relative">
                                <div className="w-[317px] h-[411px] relative rounded-xl overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-center bg-cover rounded-xl"
                                        style={{
                                            backgroundImage: `linear-gradient(rgba(34, 22, 146, 0) 0%, rgb(34, 22, 146) 100%), url('${heroCard.backgroundImage}')`
                                        }}
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 top-[62.5%] p-[25.7px] flex items-center">
                                        <div className="text-white font-semibold text-[34.27px] leading-[51.41px] relative z-10">
                                            <p className="mb-0">{heroCard.title}</p>
                                            <p className="mb-0">{heroCard.subtitle}</p>
                                        </div>
                                        <div
                                            className="absolute bg-center bg-cover bg-no-repeat"
                                            style={{
                                                backgroundImage: `url('${heroCard.logoImage}')`,
                                                width: heroIndex === 0 ? '137px' : '72px',
                                                height: heroIndex === 0 ? '47px' : '72px',
                                                left: heroIndex === 0 ? '140px' : '180px',
                                                top: heroIndex === 0 ? '26px' : '14px'
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Progress Indicators */}
                                <div className="flex gap-1.5 items-center mt-[-22px] ml-[100px] relative z-10">
                                    {heroCards.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`rounded-[20px] cursor-pointer transition-all ${index === heroIndex
                                                ? 'bg-[#fbae17] h-[9px] w-12'
                                                : 'bg-[#d9d9d9] h-[5px] w-[21px]'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Products Section */}
                            <div className="flex-1 w-[912px]">
                                {/* Header with Navigation */}
                                <div className="flex items-center justify-between h-8 mb-7">
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-start gap-4 px-4 py-0">
                                            <div className="w-8 h-8 relative">
                                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[29px] h-5">
                                                    <img alt="" className="w-full h-full object-contain" src={notebookIcon} />
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <h2 className="text-[#1e1e1e] text-[24px] font-bold leading-[32px]">
                                                    โน้ตบุ๊ค
                                                </h2>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            {categories.map((category) => (
                                                <button
                                                    key={category}
                                                    onClick={() => setActiveCategory(category)}
                                                    className={`px-6 py-2 h-8 rounded-[99px] text-[16px] font-bold leading-[16px] transition-colors ${activeCategory === category
                                                        ? 'bg-[#221690] text-white'
                                                        : 'bg-[#f4f6f8] text-[#221690]'
                                                        }`}
                                                >
                                                    {category}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-1">
                                        <span className="text-[#221692] text-[14px] font-semibold leading-[16px]">
                                            ดูทั้งหมด
                                        </span>
                                        <div className="w-2 h-2">
                                            <img alt="" className="w-full h-full object-contain" src={arrowIcon} />
                                        </div>
                                    </div>
                                </div>

                                {/* Products Grid */}
                                <div className="relative">
                                    <div
                                        ref={(el) => { scrollRefs.current[heroIndex] = el }}
                                        className={`flex gap-[22.38px] overflow-x-auto scrollbar-hide select-none ${isDragging === heroIndex ? 'cursor-grabbing' : 'cursor-grab'}`}
                                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                                        onMouseDown={(e) => handleMouseDown(e, heroIndex)}
                                        onMouseLeave={handleMouseLeave}
                                        onMouseUp={handleMouseUp}
                                        onMouseMove={(e) => handleMouseMove(e, heroIndex)}
                                    >
                                        <style jsx>{`
                                            div::-webkit-scrollbar {
                                                display: none;
                                            }
                                        `}</style>
                                        {products.map((product, index) => (
                                            <div key={`${heroIndex}-${product.id}`} className="bg-white rounded-[6.19px] flex-shrink-0 relative group hover:shadow-lg transition-shadow duration-300">
                                                {/* Gradient Overlay for last card in each section */}
                                                {index === products.length - 1 && (
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-white pointer-events-none z-20 rounded-[6.19px]" />
                                                )}

                                                {/* Product Image Section */}
                                                <div className="w-[184px] h-[188.6px] rounded-[6.19px] overflow-hidden relative flex flex-col items-center justify-end">
                                                    {/* Product Image */}
                                                    <div className="relative">
                                                        <div
                                                            className="w-[141.6px] h-[138.45px] bg-center bg-cover"
                                                            style={{
                                                                backgroundImage: `url('${product.image}')`,
                                                                maskImage: `url('${productMask}')`,
                                                                maskSize: '228.75px 223.66px',
                                                                maskPosition: '0px',
                                                                maskRepeat: 'no-repeat'
                                                            }}
                                                        />
                                                    </div>

                                                    {/* Marquee Banner */}
                                                    <div className="absolute left-0 right-0 overflow-hidden w-full">
                                                        <div className="flex w-full">
                                                            <div className="bg-black text-white text-[8.06px] font-semibold leading-[10.75px] px-[2.79px] py-[2.79px] flex items-center gap-[5.02px] whitespace-nowrap animate-marquee min-w-full">
                                                                <span>สินค้าใหม่</span>
                                                                <span className="font-medium">{'>'}</span>
                                                                <span>สินค้าใหม่</span>
                                                                <span className="font-medium">{'>'}</span>
                                                                <span>สินค้าใหม่</span>
                                                                <span className="font-medium">{'>'}</span>
                                                                <span>สินค้าใหม่</span>
                                                                <span className="font-medium">{'>'}</span>
                                                                <span>สินค้าใหม่</span>
                                                                <span className="font-medium">{'>'}</span>
                                                                <span>สินค้าใหม่</span>
                                                                <span className="font-medium">{'>'}</span>
                                                            </div>
                                                            <div className="bg-black text-white text-[8.06px] font-semibold leading-[10.75px] px-[2.79px] py-[2.79px] flex items-center gap-[5.02px] whitespace-nowrap animate-marquee min-w-full">
                                                                <span>สินค้าใหม่</span>
                                                                <span className="font-medium">{'>'}</span>
                                                                <span>สินค้าใหม่</span>
                                                                <span className="font-medium">{'>'}</span>
                                                                <span>สินค้าใหม่</span>
                                                                <span className="font-medium">{'>'}</span>
                                                                <span>สินค้าใหม่</span>
                                                                <span className="font-medium">{'>'}</span>
                                                                <span>สินค้าใหม่</span>
                                                                <span className="font-medium">{'>'}</span>
                                                                <span>สินค้าใหม่</span>
                                                                <span className="font-medium">{'>'}</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Wishlist Button */}
                                                    <div className="absolute top-[9.29px] right-[9.29px] w-7 h-7 bg-neutral-50 rounded-3xl flex items-center justify-center">
                                                        <img alt="" className="w-3 h-2.5" src={heartIcon} />
                                                    </div>

                                                    {/* View Counter */}
                                                    <div className="absolute bottom-[20px] right-[0px] bg-[rgba(31,32,34,0.7)] backdrop-blur-[2.68px] rounded-[4.33px] px-[3.96px] py-[3.96px] flex items-center gap-[3.96px]">
                                                        <img alt="" className="w-[7.51px] h-[5.37px]" src={eyeIcon} />
                                                        <span className="text-white text-[6.44px] font-medium leading-[2.77px]">
                                                            {product.views.toLocaleString()}
                                                        </span>
                                                    </div>

                                                    {/* Compare Button */}
                                                    <div className="absolute top-[38.33px] right-[9.3px] w-7 h-7 bg-gray-50 rounded-3xl flex items-center justify-center">
                                                        <img alt="" className="w-3 h-2.5 object-contain" src={compareIcon} />
                                                    </div>

                                                    {/* Brand Logo */}
                                                    <div
                                                        className="absolute top-[4.33px] left-[7.43px] bg-left bg-no-repeat w-[64.57px] h-[29.09px]"
                                                        style={{
                                                            backgroundImage: `url('${product.logo}')`,
                                                            backgroundSize: '100% 221.95%'
                                                        }}
                                                    />

                                                    {/* Action Buttons - Show on Hover */}
                                                    <div className="absolute bottom-[30px] left-[5px] right-[5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex gap-1 z-50">
                                                        {/* Add to Cart Button */}
                                                        <button className="bg-black px-2 py-0.5 rounded-full flex items-center justify-center gap-1 h-6 hover:bg-gray-800 transition-colors shadow-lg flex-1">
                                                            <div className="w-3.5 h-3.5 flex items-center justify-center">
                                                                <img alt="Add to cart" className="w-3 h-3 object-contain" src={cartIcon} />
                                                            </div>
                                                            <span className="text-white text-[8px] font-medium font-['Noto_Sans_Thai']">ใส่ตะกร้า</span>
                                                        </button>

                                                        {/* Preview Button */}
                                                        <button className="bg-white border border-[#e9eaeb] px-2 py-0.5 rounded-full flex items-center justify-center gap-1 h-6 hover:bg-gray-50 transition-colors shadow-lg flex-1">
                                                            <div className="w-3.5 h-3.5 flex items-center justify-center">
                                                                <img alt="Preview" className="w-3 h-3 object-contain" src={previewIcon} />
                                                            </div>
                                                            <span className="text-black text-[8px] font-medium font-['Noto_Sans_Thai']">ดูตัวอย่าง</span>
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Product Details Section */}
                                                <div className="w-[184px] bg-white p-[12.27px] rounded-[14.86px] flex flex-col gap-[9.2px]">
                                                    {/* Product Name */}
                                                    <div className="w-full">
                                                        <h3 className="text-black text-[10.52px] font-semibold leading-[18.4px] flex-1">
                                                            {product.name}
                                                        </h3>
                                                    </div>

                                                    {/* Category */}
                                                    <div className="text-[#717680] text-[9.51px] font-medium leading-[5.37px] h-[13.03px] flex items-center">
                                                        {product.category}
                                                    </div>

                                                    {/* Price and Discount */}
                                                    <div className="flex items-center gap-[9.2px] w-full">
                                                        <div className="bg-[#d92d20] px-[3.83px] py-[3.83px] rounded-[6.19px] h-[19.93px] flex items-center">
                                                            <span className="text-white text-[11.5px] font-semibold leading-[18.4px]">
                                                                -{product.discount}%
                                                            </span>
                                                        </div>

                                                        <div className="flex-1 flex items-end gap-[4.91px]">
                                                            <div className="text-[#d92d20] text-[18.4px] leading-[18.4px] flex items-start gap-[3.07px]">
                                                                <span className="font-extrabold">฿</span>
                                                                <span className="font-bold">{product.salePrice.toLocaleString()}</span>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-col gap-[2.46px]">
                                                            <div className="flex items-start gap-[1.97px] relative">
                                                                <span className="text-[#cecece] text-[11.09px] font-extrabold leading-[14.78px]">฿</span>
                                                                <span className="text-[#cecece] text-[11.09px] font-bold leading-[14.78px]">
                                                                    {product.originalPrice.toLocaleString()}
                                                                </span>
                                                                <div className="absolute left-[8.62px] top-[3.7px] w-[35.51px] h-[1.23px] bg-[#cecece] transform rotate-[349.27deg]" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Progress Bar */}
                                                    <div className="w-[165.6px] flex flex-col gap-[4.6px]">
                                                        <div className="text-[#a4a7ae] text-[9.51px] font-medium leading-[5.37px] h-[9.97px] flex items-end w-full">
                                                            ขายไปแล้ว {product.sold}/{product.total} ชิ้น
                                                        </div>
                                                        <div className="relative">
                                                            <div className="w-[165.6px] h-[9.2px] bg-[#d9d9d9] rounded-[12.39px]" />
                                                            <div
                                                                className="absolute top-0 left-0 h-[9.2px] bg-[#1f157c] rounded-[12.39px]"
                                                                style={{ width: `${(product.sold / product.total) * 100}%` }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Right Gradient Overlay */}
                                    <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* ดูสินค้าทั้งหมด Button */}
            <div className="flex justify-center pb-8 pt-8">
                <div className="py-4 border-b-2 border-neutral-300 inline-flex justify-end items-center gap-1.5">
                    <div className="justify-start text-indigo-900 text-2xl font-semibold font-['Noto_Sans_Thai'] leading-relaxed">ดูสินค้าทั้งหมด</div>
                    <div className="w-3.5 h-3.5 relative">
                        <img alt="" className="w-full h-full object-contain" src={arrowIcon} />
                    </div>
                </div>
            </div>
        </div>
    )
} 