'use client'

import { useState } from 'react'

// Local asset paths - downloaded from Figma
const imgProductMonitor = "/assets/images/product-monitor.png";
const imgProductNotebook = "/assets/images/product-notebook.png";
const imgBrandLogo = "/assets/images/brand-logo.png";

// Brand logo assets
const imgBrand1 = "/assets/brands/msi-brand.png";
const imgBrand2 = "/assets/brands/asus-brand.png";
const imgBrand3 = "/assets/brands/lenovo-brand.png";
const imgBrand4 = "/assets/brands/steelseries-brand.png";
const imgBrand5 = "/assets/brands/corsair-brand.png";

// Icon assets
const imgIconComset = "/assets/icons/comset-icon.svg";
const imgIconDevice = "/assets/icons/device-icon.svg";
const imgIconLaptop = "/assets/icons/laptop-icon.svg";
const imgIconApple = "/assets/icons/apple-icon.svg";
const imgIconPhone = "/assets/icons/phone-icon.svg";
const imgIconGame = "/assets/icons/game-icon.svg";
const imgIconAppliance = "/assets/icons/appliance-icon.svg";
const imgIconGadget = "/assets/icons/gadget-icon.svg";
const imgIconAccessory = "/assets/icons/accessory-icon.svg";
const imgIconOffice = "/assets/icons/office-icon.svg";
const imgDiscountTag = "/assets/icons/discount-tag.svg";

interface MenuOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

interface IconProps {
    type?: "office" | "comset" | "device" | "laptop" | "apple" | "phone" | "game" | "appliance" | "gadget" | "accessory";
}

function Icon({ type = "comset" }: IconProps) {
    const iconMap = {
        office: imgIconOffice,
        comset: imgIconComset,
        device: imgIconDevice,
        laptop: imgIconLaptop,
        apple: imgIconApple,
        phone: imgIconPhone,
        game: imgIconGame,
        appliance: imgIconAppliance,
        gadget: imgIconGadget,
        accessory: imgIconAccessory,
    };

    // Special handling for comset which has background and foreground
    if (type === "comset") {
        return (
            <div className="relative size-8">
                <img alt="" className="absolute inset-0 w-full h-full object-contain" src={imgIconComset} />
            </div>
        );
    }

    return (
        <div className="relative size-8">
            <img alt="" className="w-full h-full object-contain" src={iconMap[type]} />
        </div>
    );
}

interface MenuItemProps {
    icon: IconProps['type'];
    label: string;
    isSelected?: boolean;
    onClick?: () => void;
}

function MenuItem({ icon, label, isSelected = false, onClick }: MenuItemProps) {
    return (
        <button
            className={`h-10 w-full rounded-lg flex items-center gap-2 px-3.5 py-2 transition-colors hover:bg-gray-100 ${isSelected ? 'bg-[#f4f6f8]' : ''
                }`}
            onClick={onClick}
        >
            <Icon type={icon} />
            <span className={`font-semibold text-base leading-6 ${isSelected ? 'text-[#221692]' : 'text-[#4e4e4e]'
                }`}>
                {label}
            </span>
        </button>
    );
}

interface ProductCardProps {
    name: string;
    image?: string;
}

function ProductCard({ name, image = imgProductMonitor }: ProductCardProps) {
    return (
        <div className="bg-white border border-[#ededed] rounded-lg p-2 flex-shrink-0">
            <div className="flex flex-col items-center gap-2">
                <div
                    className="w-28 h-28 bg-center bg-cover bg-no-repeat"
                    style={{ backgroundImage: `url('${image}')` }}
                />
                <div className="w-full text-center">
                    <p className="font-bold text-[#454545] text-sm leading-4 line-clamp-2">
                        {name}
                    </p>
                </div>
            </div>
        </div>
    );
}

interface ProductItemProps {
    name: string;
    price: string;
    originalPrice?: string;
    discount?: string;
    image?: string;
    hasDiscount?: boolean;
}

function ProductItem({
    name,
    price,
    originalPrice,
    discount,
    image = imgProductNotebook,
    hasDiscount = false
}: ProductItemProps) {
    return (
        <div className="bg-white flex items-start p-2 w-full">
            <div className="flex gap-2.5 shrink-0">
                <div
                    className="w-20 h-20 bg-center bg-cover bg-no-repeat"
                    style={{ backgroundImage: `url('${image}')` }}
                />
            </div>
            <div className="flex-1 p-2">
                <div className="flex flex-col gap-2">
                    <p className="font-semibold text-[#646464] text-xs leading-4 line-clamp-2">
                        {name}
                    </p>

                    {hasDiscount && originalPrice && discount && (
                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <img src={imgDiscountTag} alt="Discount" className="w-[38px] h-4" />
                                <div className="absolute inset-0 flex items-center justify-start pl-0.5">
                                    <span className="text-white text-xs font-bold">{discount}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-[#cecece] text-xs font-bold line-through">
                                    ฿{originalPrice}
                                </span>
                            </div>
                        </div>
                    )}

                    <div className="flex items-start gap-0.5">
                        <span className="font-extrabold text-[#454545] text-sm">฿</span>
                        <span className="font-bold text-[#454545] text-sm">{price}</span>
                    </div>

                    <div className="flex gap-4">
                        <div className="bg-[#f4f6f8] px-3 py-1 rounded-full">
                            <span className="font-semibold text-[#221690] text-xs">โน้ตบุ๊ค</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
    const [selectedCategory, setSelectedCategory] = useState('device');

    if (!isOpen) return null;

    const menuItems = [
        { icon: 'comset' as const, label: 'คอมพิวเตอร์เซ็ต' },
        { icon: 'device' as const, label: 'อุปกรณ์คอมพิวเตอร์' },
        { icon: 'laptop' as const, label: 'โน้ตบุ๊ค' },
        { icon: 'apple' as const, label: 'แอปเปิ้ล' },
        { icon: 'phone' as const, label: 'สมาร์ทโฟน & แท็บเล็ต' },
        { icon: 'game' as const, label: 'เกมมิ่ง' },
        { icon: 'appliance' as const, label: 'เครื่องใช้ไฟฟ้าในบ้าน' },
        { icon: 'gadget' as const, label: 'ไลฟ์สไตล์ & แก๊ดเจ็ต' },
        { icon: 'accessory' as const, label: 'อุปกรณ์เสริมต่างๆ' },
        { icon: 'office' as const, label: 'อุปกรณ์สำนักงาน' },
    ];

    const productCategories = [
        { name: 'จอคอมพิวเตอร์' },
        { name: 'คีย์บอร์ด' },
        { name: 'เมาส์' },
        { name: 'การ์ดแสดงผล' },
        { name: 'ซีพียู' },
        { name: 'เมนบอร์ด' },
    ];

    const recommendedProducts = [
        {
            name: 'NOTEBOOK (โน้ตบุ๊ค) ASUS ROG STRIX G17 G713R...',
            price: '36,900',
            originalPrice: '38,990',
            discount: '-50%',
            hasDiscount: true,
        },
        {
            name: 'NOTEBOOK (โน้ตบุ๊ค) ASUS ROG STRIX G17 G713R...',
            price: '36,900',
            originalPrice: '38,990',
            discount: '-50%',
            hasDiscount: true,
        },
        {
            name: 'NOTEBOOK (โน้ตบุ๊ค) ASUS ROG STRIX G17 G713R...',
            price: '36,900',
        },
        {
            name: 'NOTEBOOK (โน้ตบุ๊ค) ASUS ROG STRIX G17 G713R...',
            price: '36,900',
        },
        {
            name: 'NOTEBOOK (โน้ตบุ๊ค) ASUS ROG STRIX G17 G713R...',
            price: '36,900',
        },
    ];

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={onClose}>
            <div
                className="absolute top-16 left-6 right-6 bg-white rounded-3xl shadow-lg max-h-[calc(100vh-120px)] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-col gap-6 p-6 pt-8 h-full max-h-[650px]">
                    {/* Navigation Menu */}
                    <div className="flex items-end gap-12 px-4 py-2">
                        <span className="font-semibold text-[#1e1e1e] text-base leading-6">หน้าหลัก</span>
                        <div className="relative">
                            <span className="font-semibold text-[#1e1e1e] text-base leading-6">จัดสเปคคอม</span>
                            <div className="absolute -top-2 -right-8 bg-red-500 text-white text-xs font-bold px-1 rounded">
                                แนะนำ
                            </div>
                        </div>
                        <span className="font-semibold text-[#1e1e1e] text-base leading-6">โปรโมชั่น</span>
                        <span className="font-semibold text-[#1e1e1e] text-base leading-6">การรับประกัน</span>
                        <span className="font-semibold text-[#1e1e1e] text-base leading-6">ข่าวสาร</span>
                        <span className="font-semibold text-[#1e1e1e] text-base leading-6">สาขา</span>
                        <span className="font-semibold text-[#1e1e1e] text-base leading-6">ติดต่อเรา</span>
                    </div>

                    {/* Main Content */}
                    <div className="flex gap-2 flex-1 overflow-hidden">
                        {/* Left Sidebar */}
                        <div className="w-56 flex flex-col gap-4">
                            <div className="px-4">
                                <h2 className="font-semibold text-[#221692] text-xl leading-6">สินค้า</h2>
                            </div>
                            <div className="flex flex-col gap-2">
                                {menuItems.map((item, index) => (
                                    <MenuItem
                                        key={index}
                                        icon={item.icon}
                                        label={item.label}
                                        isSelected={selectedCategory === item.icon}
                                        onClick={() => setSelectedCategory(item.icon)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Center Content */}
                        <div className="flex flex-col gap-2 min-w-0">
                            <div className="px-2">
                                <h2 className="font-semibold text-[#1e1e1e] text-xl leading-6">อุปกรณ์คอมพิวเตอร์</h2>
                            </div>

                            {/* Brand Logos */}
                            <div className="px-2 py-2">
                                <p className="font-bold text-[#9c9b9b] text-base mb-2">แบรนด์แนะนำ</p>
                                <div className="flex gap-0">
                                    {[imgBrand1, imgBrand2, imgBrand3, imgBrand4, imgBrand5].map((brand, index) => (
                                        <div
                                            key={index}
                                            className="w-[83px] h-6 bg-center bg-cover bg-no-repeat border-2 border-white"
                                            style={{
                                                backgroundImage: `url('${brand}')`,
                                                backgroundSize: '110%',
                                                backgroundPosition: 'center',
                                                backgroundRepeat: 'no-repeat'

                                            }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Product Grid */}
                            <div className="flex">
                                <div className="w-[720px] h-[416px] overflow-auto">
                                    <div className="grid grid-cols-5 gap-4 p-2">
                                        {productCategories.map((product, index) => (
                                            <ProductCard key={index} name={product.name} />
                                        ))}
                                    </div>
                                </div>
                                <div className="w-2 h-[306px] bg-[#221692] rounded-full"></div>
                            </div>
                        </div>

                        {/* Right Sidebar */}
                        <div className="flex-1 flex flex-col gap-4 min-w-0">
                            <div className="px-2">
                                <h2 className="font-semibold text-[#1e1e1e] text-xl leading-6">สินค้าแนะนำ</h2>
                            </div>

                            <div className="flex gap-2 flex-1">
                                <div className="flex-1 overflow-auto">
                                    <div className="space-y-0">
                                        {recommendedProducts.map((product, index) => (
                                            <ProductItem
                                                key={index}
                                                name={product.name}
                                                price={product.price}
                                                originalPrice={product.originalPrice}
                                                discount={product.discount}
                                                hasDiscount={product.hasDiscount}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="w-2 h-[306px] bg-[#221692] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
