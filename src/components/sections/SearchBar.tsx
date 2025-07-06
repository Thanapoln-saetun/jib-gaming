'use client'

import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'

// Local asset paths
const imgAIIcon = "/assets/icons/ai-search-icon.svg";
const imgSearchIcon = "/assets/icons/search-icon.svg";

// Mock data for search suggestions (ตรงตาม Guidelines ให้มี 5 รายการ)
const searchSuggestions = [
    'Notebook MSI',
    'Notebook Lenovo',
    'Notebook Asus',
    'Notebook Microsoft',
    'Notebook LOG'
];

const categoryResults = [
    { title: 'Notebook สำหรับเล่นเกม', icon: '/assets/icons/ui/monitor.svg' },
    { title: 'Notebook สำหรับทำงาน', icon: '/assets/icons/ui/monitor.svg' },
];

const specResults = [
    'Notebook CPU INTEL',
    'Notebook การ์ดจอ AMD',
    'Notebook การ์ดจอ Nvidia'
];

const brandLogos = [
    { name: 'Lenovo', logo: '/assets/brands/slides/slide1_lenovo.png' },
    { name: 'ASUS', logo: '/assets/brands/slides/slide1_asus.png' },
    { name: 'MSI', logo: '/assets/brands/slides/slide1_msi.png' },
    { name: 'Intel', logo: '/assets/brands/slides/slide1_intel.png' },
    { name: 'AMD', logo: '/assets/brands/slides/slide1_amd.png' },
    { name: 'Corsair', logo: '/assets/brands/slides/slide1_corsair.png' }
];

// Mock products data
const mockProducts = [
    {
        id: 1,
        name: 'NOTEBOOK (โน้ตบุ๊ค) ASUS ROG STRIX G17 G713RC-HX032W (ECLIPSE GRAY)',
        brand: 'ASUS',
        originalPrice: 38990,
        salePrice: 36900,
        discount: 50,
        image: '/assets/images/product-notebook.png',
        features: ['ผ่อน 0%', 'ส่งฟรี', 'มีของแถม']
    },
    {
        id: 2,
        name: 'NOTEBOOK (โน้ตบุ๊ค) ASUS ROG STRIX G17 G713RC-HX032W (ECLIPSE GRAY)',
        brand: 'ASUS',
        originalPrice: 38990,
        salePrice: 36900,
        discount: 50,
        image: '/assets/images/product-notebook.png',
        features: ['ผ่อน 0%', 'ส่งฟรี', 'มีของแถม']
    },
    {
        id: 3,
        name: 'NOTEBOOK (โน้ตบุ๊ค) ASUS ROG STRIX G17 G713RC-HX032W (ECLIPSE GRAY)',
        brand: 'ASUS',
        originalPrice: 38990,
        salePrice: 36900,
        discount: 50,
        image: '/assets/images/product-notebook.png',
        features: ['ผ่อน 0%', 'ส่งฟรี', 'มีของแถม']
    },
    {
        id: 4,
        name: 'NOTEBOOK (โน้ตบุ๊ค) ASUS ROG STRIX G17 G713RC-HX032W (ECLIPSE GRAY)',
        brand: 'ASUS',
        originalPrice: 38990,
        salePrice: 36900,
        discount: 50,
        image: '/assets/images/product-notebook.png',
        features: ['ผ่อน 0%', 'ส่งฟรี', 'มีของแถม']
    },
    {
        id: 5,
        name: 'NOTEBOOK (โน้ตบุ๊ค) ASUS ROG STRIX G17 G713RC-HX032W (ECLIPSE GRAY)',
        brand: 'ASUS',
        originalPrice: 38990,
        salePrice: 36900,
        discount: 50,
        image: '/assets/images/product-notebook.png',
        features: ['ผ่อน 0%', 'ส่งฟรี', 'มีของแถม']
    }
];

interface SearchBarProps {
    onSearch?: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [activeFilter, setActiveFilter] = useState<'value' | 'popular'>('value');
    const [isClient, setIsClient] = useState(false);

    const searchRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Show dropdown when focused OR when typing (ตามเงื่อนไขใน Guidelines)
    const shouldShowDropdown = isFocused || searchQuery.length > 0;

    // Check if we're on client side for portal
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsFocused(false);
                inputRef.current?.blur();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleInputFocus = () => {
        setIsFocused(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);
        if (!isFocused) {
            setIsFocused(true);
        }
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            onSearch?.(searchQuery);
            setIsFocused(false);
            inputRef.current?.blur();
        }
    };

    const handleSuggestionClick = (suggestion: string) => {
        setSearchQuery(suggestion);
        onSearch?.(suggestion);
        setIsFocused(false);
        inputRef.current?.blur();
    };

    const getFilteredSuggestions = () => {
        if (!searchQuery) return searchSuggestions.slice(0, 5);
        return searchSuggestions.filter(suggestion =>
            suggestion.toLowerCase().includes(searchQuery.toLowerCase())
        ).slice(0, 5);
    };

    // ฟังก์ชันสำหรับ highlight คำค้นหาเป็นสีน้ำเงิน JIB
    const highlightSearchTerm = (text: string, searchTerm: string) => {
        if (!searchTerm) return text;
        const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
        return parts.map((part, index) =>
            part.toLowerCase() === searchTerm.toLowerCase() ?
                <span key={index} className="font-extrabold text-[#291abd]">{part}</span> :
                part
        );
    };

    const dropdownContent = shouldShowDropdown && isClient ? (
        <div
            className="fixed bg-white rounded-2xl shadow-[0px_0px_8px_0px_rgba(69,69,69,0.25)] max-h-[616px] overflow-hidden border border-gray-200"
            style={{
                position: 'fixed',
                top: searchRef.current ? searchRef.current.getBoundingClientRect().bottom + 8 : '72px',
                left: searchRef.current ? searchRef.current.getBoundingClientRect().left : '50%',
                width: searchRef.current ? searchRef.current.getBoundingClientRect().width : '1080px',
                zIndex: 999999,
                transform: searchRef.current ? 'none' : 'translateX(-50%)'
            }}
        >
            <div className="p-5">
                <div className="max-h-[576px] overflow-y-auto space-y-6">

                    {/* Show default content when no search query */}
                    {!searchQuery && (
                        <>
                            {/* Recent Search */}
                            <div className="space-y-2">
                                <h3 className="text-[16px] font-semibold text-[#4e4e4e]">ค้นหาล่าสุด</h3>
                                <div className="flex gap-[9px] items-start">
                                    <button className="bg-[#f4f6f8] flex items-center justify-center h-6 px-4 rounded-[99px] hover:opacity-80 transition-opacity">
                                        <span className="text-[14px] font-semibold text-[#221690]">คอมพิวเตอร์</span>
                                    </button>
                                    <button className="bg-[#f4f6f8] flex items-center justify-center h-6 px-4 rounded-[99px] hover:opacity-80 transition-opacity">
                                        <span className="text-[14px] font-semibold text-[#221690]">โน๊ตบุ๊ค</span>
                                    </button>
                                    <button className="bg-[#f4f6f8] flex items-center justify-center h-6 px-4 rounded-[99px] hover:opacity-80 transition-opacity">
                                        <span className="text-[14px] font-semibold text-[#221690]">เมาส์เกมมิ่ง</span>
                                    </button>
                                </div>
                            </div>

                            {/* Popular Search */}
                            <div className="space-y-2">
                                <h3 className="text-[16px] font-semibold text-[#4e4e4e]">ค้นหายอดฮิต</h3>
                                <div className="flex gap-[9px] items-start">
                                    <button className="bg-[#f4f6f8] flex items-center justify-center h-6 px-4 rounded-[99px] hover:opacity-80 transition-opacity">
                                        <span className="text-[14px] font-semibold text-[#221690]">จอคอม</span>
                                    </button>
                                    <button className="bg-[#f4f6f8] flex items-center justify-center h-6 px-4 rounded-[99px] hover:opacity-80 transition-opacity">
                                        <span className="text-[14px] font-semibold text-[#221690]">iphone</span>
                                    </button>
                                    <button className="bg-[#f4f6f8] flex items-center justify-center h-6 px-4 rounded-[99px] hover:opacity-80 transition-opacity">
                                        <span className="text-[14px] font-semibold text-[#221690]">การ์ดจอ</span>
                                    </button>
                                </div>
                            </div>

                            {/* Popular Brands */}
                            <div className="space-y-2">
                                <h3 className="text-[16px] font-semibold text-[#4e4e4e]">แบรนด์ยอดฮิต</h3>
                                <div className="flex gap-[9px] items-start">
                                    {brandLogos.map((brand, index) => (
                                        <button
                                            key={index}
                                            className="h-8 w-[111px] border border-white bg-center bg-cover rounded hover:opacity-80 transition-opacity"
                                            style={{
                                                backgroundImage: `url('${brand.logo}')`,
                                                backgroundSize: '110%',
                                                backgroundPosition: 'center',
                                                backgroundRepeat: 'no-repeat'
                                            }}
                                            title={brand.name}
                                        >
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Popular Products */}
                            <div className="space-y-2 w-full">
                                <h3 className="text-[16px] font-semibold text-[#4e4e4e]">สินค้ายอดนิยม</h3>
                                <div className="overflow-x-auto overflow-y-hidden">
                                    <div className="flex gap-4 pb-2">
                                        {mockProducts.map((product) => (
                                            <div key={product.id} className="bg-white relative rounded-lg min-w-[152px] border border-[#ededed]">
                                                <div className="box-border flex flex-col gap-2 h-64 items-start justify-start overflow-hidden p-3 relative">
                                                    {/* Product Image */}
                                                    <div className="relative w-32 h-32 rounded">
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className="w-full h-full object-cover rounded"
                                                            onError={(e) => {
                                                                e.currentTarget.src = '/assets/images/notebook-placeholder.png';
                                                            }}
                                                        />
                                                    </div>
                                                </div>

                                                {/* Brand Logo - Top Right Corner */}
                                                <div
                                                    className="absolute right-3 top-3 h-4 w-10 opacity-70"
                                                    style={{
                                                        backgroundImage: `url('/assets/brands/${product.brand.toLowerCase()}.png')`,
                                                        backgroundSize: '120%',
                                                        backgroundPosition: 'center',
                                                        backgroundRepeat: 'no-repeat'
                                                    }}
                                                />

                                                {/* Feature Tags - Right Side */}
                                                {/* <div className="absolute right-3 top-7 flex flex-col items-end justify-start gap-2">
                                                    {product.features.includes('ผ่อน 0%') && (
                                                        <div className="flex flex-col items-start justify-start gap-0.5 rounded-sm bg-[#fbae17] p-1">
                                                            <div className="text-[8px] font-medium leading-[7px] text-black">
                                                                ผ่อน
                                                            </div>
                                                            <div className="flex items-end justify-center gap-0.5 font-bold leading-[7px] text-black">
                                                                <span className="text-[12px]">0</span>
                                                                <span className="text-[6px]">%</span>
                                                            </div>
                                                        </div>
                                                    )}
                                                    {product.features.includes('ส่งฟรี') && (
                                                        <div className="flex h-3 items-center justify-center rounded-sm bg-[#221692] px-1">
                                                            <div className="text-[8px] font-bold leading-[7px] text-white">
                                                                ส่งฟรี
                                                            </div>
                                                        </div>
                                                    )}
                                                    {product.features.includes('มีของแถม') && (
                                                        <div className="flex h-3 items-center justify-center rounded-sm bg-[#39b54a] px-1">
                                                            <div className="text-[8px] font-bold leading-[7px] text-white">
                                                                มีของแถม
                                                            </div>
                                                        </div>
                                                    )}
                                                </div> */}

                                                {/* Product Details - Bottom */}
                                                <div className="absolute left-0 top-[140px] flex w-[152px] flex-col items-start justify-start gap-2 rounded-lg bg-white p-3">
                                                    {/* Product Name */}
                                                    <div className="w-full">
                                                        <h4 className="text-[10px] font-semibold leading-4 text-[#646464]">
                                                            <span className="font-black text-[#291abd]">
                                                                NOTEBOOK
                                                            </span>
                                                            <span> {product.name.replace('NOTEBOOK (โน้ตบุ๊ค)', '(โน้ตบุ๊ค)')}</span>
                                                        </h4>
                                                    </div>

                                                    {/* Price Section */}
                                                    <div className="flex h-9 w-full items-end justify-between">
                                                        {/* Discount and Original Price */}
                                                        <div className="relative flex flex-col items-start justify-start gap-1">
                                                            {/* Discount Badge */}
                                                            <div className="relative h-4 w-[38px]">
                                                                <div className="absolute inset-0 flex items-center justify-start rounded-sm bg-red-500 px-2 py-0 text-[12px] font-bold text-white">
                                                                    <span className="leading-[7px]">-{product.discount}%</span>
                                                                </div>
                                                                {/* Diagonal cut effect */}
                                                                <div className="absolute right-0 top-0 h-0 w-0 border-b-[8px] border-l-[6px] border-t-[8px] border-b-transparent border-l-red-500 border-t-transparent"></div>
                                                            </div>

                                                            {/* Original Price with Strikethrough */}
                                                            <div className="relative">
                                                                <div className="text-[12px] font-bold leading-4 text-[#cecece]">
                                                                    ฿{product.originalPrice.toLocaleString()}
                                                                </div>
                                                                {/* Strikethrough line */}
                                                                <div className="absolute left-0 top-2 h-px w-full rotate-[-7.5deg] transform bg-[#cecece]"></div>
                                                            </div>
                                                        </div>

                                                        {/* Sale Price */}
                                                        <div className="flex items-start gap-1 text-[16px] font-bold leading-4 text-[#454545]">
                                                            <span className="font-extrabold">฿</span>
                                                            <span className="font-bold">{product.salePrice.toLocaleString()}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {/* Show search results when there's a query */}
                    {searchQuery && (
                        <>
                            {/* Search Suggestions - 5 รายการตาม Guidelines */}
                            {getFilteredSuggestions().length > 0 && (
                                <div className="space-y-1">
                                    {getFilteredSuggestions().map((suggestion, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleSuggestionClick(suggestion)}
                                            className="w-full text-left px-1 py-0.5 rounded-lg hover:bg-gray-50 transition-colors"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <img
                                                        src={imgSearchIcon}
                                                        alt="Search"
                                                        className="w-5 h-5"
                                                    />
                                                    <span className="text-[12px] font-semibold text-[#646464]">
                                                        {highlightSearchTerm(suggestion, searchQuery)}
                                                    </span>
                                                </div>
                                                <div className="w-3.5 h-3.5">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                        <path d="M3 3L11 11M3 11L11 3" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* Categories */}
                            <div className="space-y-2">
                                <h3 className="text-[14px] font-semibold text-[#4e4e4e]">หมวดหมู่</h3>
                                <div className="space-y-1">
                                    {categoryResults.map((category, index) => (
                                        <button
                                            key={index}
                                            className="w-full text-left px-1 py-0.5 rounded-lg hover:bg-gray-50 transition-colors"
                                        >
                                            <div className="flex items-center gap-2">
                                                <img
                                                    src={category.icon}
                                                    alt={category.title}
                                                    className="w-5 h-5"
                                                />
                                                <span className="text-[12px] font-semibold text-[#646464]">
                                                    {highlightSearchTerm(category.title, searchQuery)}
                                                </span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Products Section - AI วิเคราะห์และจัดอันดับ */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-[14px] font-semibold text-[#4e4e4e]">
                                        สินค้า <span className="text-[12px] font-medium text-neutral-400">(32 รายการ)</span>
                                    </h3>
                                </div>

                                {/* Filter Buttons - ความเป็นที่นิยม กับ คุ้มที่สุด */}
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setActiveFilter('value')}
                                        className={`px-2 py-1 rounded-[99px] text-[10px] font-medium transition-colors ${activeFilter === 'value'
                                            ? 'bg-[#221690] text-white'
                                            : 'bg-[#f4f6f8] text-[#221690]'
                                            }`}
                                    >
                                        คุ้มที่สุด
                                    </button>
                                    <button
                                        onClick={() => setActiveFilter('popular')}
                                        className={`px-2 py-1 rounded-[99px] text-[10px] font-medium transition-colors ${activeFilter === 'popular'
                                            ? 'bg-[#221690] text-white'
                                            : 'bg-[#f4f6f8] text-[#221690]'
                                            }`}
                                    >
                                        เป็นที่นิยม
                                    </button>
                                </div>

                                {/* Product Cards Horizontal Scroll */}
                                <div className="overflow-x-auto overflow-y-hidden">
                                    <div className="flex gap-4 pb-2">
                                        {mockProducts.map((product) => (
                                            <div key={product.id} className="bg-white relative rounded-lg min-w-[152px] border border-[#ededed]">
                                                <div className="box-border flex flex-col gap-2 h-64 items-start justify-start overflow-hidden p-3 relative">
                                                    {/* Product Image */}
                                                    <div className="relative w-32 h-32 rounded">
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className="w-full h-full object-cover rounded"
                                                            onError={(e) => {
                                                                e.currentTarget.src = '/assets/images/notebook-placeholder.png';
                                                            }}
                                                        />
                                                    </div>
                                                </div>

                                                {/* Brand Logo - Top Right Corner */}
                                                <div
                                                    className="absolute right-3 top-3 h-4 w-10 opacity-70"
                                                    style={{
                                                        backgroundImage: `url('/assets/brands/${product.brand.toLowerCase()}.png')`,
                                                        backgroundSize: '120%',
                                                        backgroundPosition: 'center',
                                                        backgroundRepeat: 'no-repeat'
                                                    }}
                                                />

                                                {/* Product Details - Bottom */}
                                                <div className="absolute left-0 top-[140px] flex w-[152px] flex-col items-start justify-start gap-2 rounded-lg bg-white p-3">
                                                    {/* Product Name */}
                                                    <div className="w-full">
                                                        <h4 className="text-[10px] font-semibold leading-4 text-[#646464]">
                                                            <span className="font-black text-[#291abd]">
                                                                NOTEBOOK
                                                            </span>
                                                            <span> {product.name.replace('NOTEBOOK (โน้ตบุ๊ค)', '(โน้ตบุ๊ค)')}</span>
                                                        </h4>
                                                    </div>

                                                    {/* Price Section */}
                                                    <div className="flex h-9 w-full items-end justify-between">
                                                        {/* Discount and Original Price */}
                                                        <div className="relative flex flex-col items-start justify-start gap-1">
                                                            {/* Discount Badge */}
                                                            <div className="relative h-4 w-[38px]">
                                                                <div className="absolute inset-0 flex items-center justify-start rounded-sm bg-red-500 px-2 py-0 text-[12px] font-bold text-white">
                                                                    <span className="leading-[7px]">-{product.discount}%</span>
                                                                </div>
                                                                {/* Diagonal cut effect */}
                                                                <div className="absolute right-0 top-0 h-0 w-0 border-b-[8px] border-l-[6px] border-t-[8px] border-b-transparent border-l-red-500 border-t-transparent"></div>
                                                            </div>

                                                            {/* Original Price with Strikethrough */}
                                                            <div className="relative">
                                                                <div className="text-[12px] font-bold leading-4 text-[#cecece]">
                                                                    ฿{product.originalPrice.toLocaleString()}
                                                                </div>
                                                                {/* Strikethrough line */}
                                                                <div className="absolute left-0 top-2 h-px w-full rotate-[-7.5deg] transform bg-[#cecece]"></div>
                                                            </div>
                                                        </div>

                                                        {/* Sale Price */}
                                                        <div className="flex items-start gap-1 text-[16px] font-bold leading-4 text-[#454545]">
                                                            <span className="font-extrabold">฿</span>
                                                            <span className="font-bold">{product.salePrice.toLocaleString()}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Brands */}
                            <div className="space-y-2">
                                <h3 className="text-[14px] font-semibold text-[#4e4e4e]">แบรนด์</h3>
                                <div className="flex flex-wrap gap-2">
                                    {brandLogos.map((brand, index) => (
                                        <button
                                            key={index}
                                            className="h-8 w-[111px] border border-white bg-center bg-cover rounded hover:opacity-80 transition-opacity"
                                            style={{
                                                backgroundImage: `url('${brand.logo}')`,
                                                backgroundSize: '110%',
                                                backgroundPosition: 'center',
                                                backgroundRepeat: 'no-repeat'
                                            }}
                                            title={brand.name}
                                        >
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Specifications - สเปคสินค้า AI Search */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-1">
                                    <h3 className="text-[14px] font-semibold text-[#4e4e4e]">สเปคสินค้า</h3>
                                    <div className="w-5 h-5 p-1">
                                        <img
                                            src={imgAIIcon}
                                            alt="AI"
                                            className="w-full h-full object-contain"
                                            onError={(e) => {
                                                e.currentTarget.src = imgSearchIcon;
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    {specResults.map((spec, index) => (
                                        <button
                                            key={index}
                                            className="w-full text-left px-1 py-0.5 rounded-lg hover:bg-gray-50 transition-colors"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <img
                                                        src={imgSearchIcon}
                                                        alt="Search"
                                                        className="w-5 h-5"
                                                    />
                                                    <span className="text-[12px] font-semibold text-[#646464]">
                                                        {highlightSearchTerm(spec, searchQuery)}
                                                    </span>
                                                </div>
                                                <div className="w-3.5 h-3.5">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                        <path d="M3 3L11 11M3 11L11 3" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    ) : null;

    return (
        <>
            <div ref={searchRef} className="relative w-full max-w-[1080px]" style={{ zIndex: 1000, position: 'relative' }}>
                {/* Search Input - ใช้สไตล์เดิมแต่เพิ่มเงื่อนไขตาม Guidelines */}
                <form onSubmit={handleSearch} className={`
                    w-[1080px] h-8 rounded-[99px] flex justify-start items-center gap-2.5 transition-all duration-200 relative
                    ${isFocused
                        ? 'bg-[#f2f3ff] border-2 border-[#8b52db] shadow-[0px_0px_7px_0px_#e3b0ff]'
                        : 'bg-neutral-100 border-2 border-transparent'
                    }
                `}>
                    <button
                        type="submit"
                        className={`
                            w-8 h-6 rounded-[99px] flex justify-center items-center gap-2.5 hover:opacity-80 transition-all duration-200 flex-shrink-0
                            ${isFocused
                                ? 'bg-[#f2f3ff]'
                                : 'bg-neutral-100'
                            }
                        `}
                        aria-label="ค้นหา"
                    >
                        <img
                            alt="AI Search"
                            className="w-[22px] h-[22px]"
                            src={imgAIIcon}
                            onError={(e) => {
                                // Fallback to regular search icon if AI icon fails
                                e.currentTarget.src = imgSearchIcon;
                            }}
                        />
                    </button>

                    <input
                        ref={inputRef}
                        type="text"
                        placeholder={isFocused ? "ค้นหาสินค้า AI Search..." : "🎉 JIB จำหน่ายสินค้าไอที คอมประกอบ"}
                        value={searchQuery}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        className={`
                            flex-1 h-full bg-transparent border-none outline-none text-sm px-2 transition-all duration-200
                            ${isFocused
                                ? 'text-gray-800'
                                : 'text-gray-600'
                            }
                            placeholder:text-gray-500
                        `}
                        style={{
                            caretColor: isFocused ? '#291abd' : 'auto' // สีน้ำเงินหลัก JIB สำหรับ cursor
                        }}
                    />

                    {/* AI Search label และ icon ด้านขวา */}
                    <div className="flex items-center gap-2.5 pr-3">
                        <span className={`text-[12px] font-medium transition-colors duration-200 ${isFocused ? 'text-[#868cff]' : 'text-gray-400'
                            }`}>
                            AI Search
                        </span>
                        <div className="w-[14px] h-[14px]">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 13L10.1 10.1M11.6667 6.33333C11.6667 9.27885 9.27885 11.6667 6.33333 11.6667C3.38781 11.6667 1 9.27885 1 6.33333C1 3.38781 3.38781 1 6.33333 1C9.27885 1 11.6667 3.38781 11.6667 6.33333Z"
                                    stroke={isFocused ? "#868cff" : "#9CA3AF"}
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </form>
            </div>

            {/* Dropdown Results using Portal */}
            {isClient && dropdownContent && createPortal(dropdownContent, document.body)}
        </>
    );
}
