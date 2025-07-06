'use client'

import { useState } from 'react'
import MenuOverlay from '../sections/MenuOverlay'
import SearchBar from '../sections/SearchBar'

// Local asset paths
const imgLogo = "/assets/images/jib-logo.png";
const imgHeartIcon = "/assets/icons/heart-icon.svg";
const imgCartIcon = "/assets/icons/cart-icon.svg";
const imgUserIcon = "/assets/icons/user-icon.svg";
const imgIconMenu = "/assets/icons/ui/icon-menu.svg";

export default function NavBar() {
    const [favoriteCount] = useState(99);
    const [cartCount] = useState(99);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSearch = (query: string) => {
        console.log('Searching for:', query);
        // Add search logic here
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="self-stretch h-14 px-6 backdrop-blur-[10px] inline-flex justify-between items-center relative scale-optimized auto-scale-content" style={{ background: 'linear-gradient(to left, #221692, #1A1354)', zIndex: 10 }}>
                <div className="w-40 h-6 inline-flex flex-col justify-between items-start">
                    <button
                        className="w-7 h-5 cursor-pointer hover:opacity-80 transition-opacity"
                        aria-label="เมนู"
                        onClick={toggleMenu}
                    >
                        <img alt="Menu" className="w-full h-full" src={imgIconMenu} />
                    </button>
                </div>

                <div className="flex justify-start items-center gap-2.5 relative" style={{ overflow: 'visible' }}>
                    <img className="w-14 h-10" src={imgLogo} alt="JIB หน้าหลัก" />

                    <SearchBar onSearch={handleSearch} />

                    <div className="h-10 pl-6 relative flex justify-center items-center gap-6">
                        <button className="self-stretch flex justify-start items-center gap-2 hover:opacity-80 transition-opacity" aria-label="รายการโปรด">
                            <img alt="Favorites" className="w-6 h-5" src={imgHeartIcon} />
                        </button>

                        <button className="self-stretch flex justify-start items-center gap-2 hover:opacity-80 transition-opacity" aria-label="ตะกร้าสินค้า">
                            <img alt="Cart" className="w-6 h-6" src={imgCartIcon} />
                        </button>

                        <button className="self-stretch flex justify-start items-center gap-2 hover:opacity-80 transition-opacity" aria-label="บัญชีผู้ใช้">
                            <img alt="Account" className="w-6 h-6" src={imgUserIcon} />
                        </button>

                        {favoriteCount > 0 && (
                            <div className="h-4 px-1 left-[35.90px] top-[20px] absolute bg-amber-400 rounded-[99px] inline-flex flex-col justify-center items-center">
                                <div className="text-center justify-end text-white text-[10px] font-bold font-['Noto_Sans_Thai'] leading-none">
                                    {favoriteCount > 99 ? '99+' : favoriteCount}
                                </div>
                            </div>
                        )}

                        {cartCount > 0 && (
                            <div className="h-4 px-1 left-[80.90px] top-[20px] absolute bg-amber-400 rounded-[99px] inline-flex flex-col justify-center items-center">
                                <div className="text-center justify-end text-white text-[10px] font-bold font-['Noto_Sans_Thai'] leading-none">
                                    {cartCount > 99 ? '99+' : cartCount}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="w-40 h-10 pl-12 opacity-60 flex justify-center items-center gap-6" />
            </div>

            {/* Menu Overlay */}
            <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
}
