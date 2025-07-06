'use client'

import { MapPin, Calendar, Clock, Users } from 'lucide-react'

// Image constants from Figma
const imgLogoJib = "/assets/images/jib-logo.png"; // Local asset
const imgGroup4581 = "/assets/icons/ui/visitor-icon.svg";
const imgGroup4577 = "/assets/icons/ui/entrance-arrows.svg";

const eventZones = [
    { id: 'A1', name: 'Gaming PCs Zone', color: 'bg-blue-500', visitors: 156 },
    { id: 'A2', name: 'VGA Cards Zone', color: 'bg-red-500', visitors: 234 },
    { id: 'B1', name: 'Peripherals Zone', color: 'bg-green-500', visitors: 189 },
    { id: 'B2', name: 'Components Zone', color: 'bg-yellow-500', visitors: 145 },
    { id: 'C1', name: 'Laptops Zone', color: 'bg-purple-500', visitors: 178 },
    { id: 'C2', name: 'Accessories Zone', color: 'bg-pink-500', visitors: 123 }
]

export default function MapZone() {
    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center gap-8">
                    {/* Map Container */}
                    <div className="bg-[#fdfdfd] border border-[#e9eaeb] rounded-[5px] w-full max-w-[1015px] h-[600px] relative p-5">

                        {/* Visitor Icons */}
                        <div className="absolute" style={{ left: '1000px', top: '285px' }}>
                            <div className="bg-[#e9eaeb] rounded-[20px] w-[30px] h-[30px] flex items-center justify-center">
                                <img src={imgGroup4581} alt="Visitor" className="w-5 h-5" />
                            </div>
                        </div>
                        <div className="absolute" style={{ left: '1000px', top: '124px' }}>
                            <div className="bg-[#e9eaeb] rounded-[20px] w-[30px] h-[30px] flex items-center justify-center">
                                <img src={imgGroup4581} alt="Visitor" className="w-5 h-5" />
                            </div>
                        </div>

                        {/* Map Layout */}
                        <div className="flex flex-col gap-[5px] h-full items-center justify-center">
                            <div className="flex gap-[119px] w-full">
                                {/* Left Stage Area */}
                                <div className="flex flex-col gap-[23px] w-[107px]">
                                    <div className="bg-[#e9eaeb] h-28 flex items-center justify-center p-2.5">
                                        <div className="text-[#000000] text-[14px] font-['Noto_Sans_Thai'] font-semibold text-center leading-[16px]">
                                            STAGE
                                        </div>
                                    </div>
                                    <div className="bg-[#e9eaeb] h-[244px] flex items-center justify-center p-2.5">
                                        <div className="text-[#000000] text-[14px] font-['Noto_Sans_Thai'] font-semibold text-center leading-[16px]">
                                            STAGE
                                        </div>
                                    </div>
                                </div>

                                {/* Main Exhibition Area */}
                                <div className="flex flex-col gap-[42px] w-[789px]">
                                    {/* Row A */}
                                    <div className="flex gap-[45px] items-center">
                                        <div className="flex gap-[9px] items-center">
                                            <div className="bg-[#e9eaeb] h-[103px] w-[107px] flex items-center justify-center p-2.5">
                                                <div className="text-[#000000] text-[14px] font-['Noto_Sans_Thai'] font-semibold text-center leading-[16px]">A1</div>
                                            </div>
                                            <div className="bg-[#e9eaeb] h-[103px] w-[45px] flex items-center justify-center p-2.5">
                                                <div className="text-[#000000] text-[14px] font-['Noto_Sans_Thai'] font-semibold text-center leading-[16px]">A2</div>
                                            </div>
                                        </div>

                                        <div className="bg-[#e9eaeb] h-[103px] w-[162px] flex items-center justify-center p-2.5">
                                            <div className="text-[#000000] text-[14px] font-['Noto_Sans_Thai'] font-semibold text-center leading-[16px]">A3</div>
                                        </div>

                                        <div className="flex gap-[9px] items-center">
                                            <div className="bg-[#e9eaeb] h-[103px] w-[107px] flex items-center justify-center p-2.5">
                                                <div className="text-[#000000] text-[14px] font-['Noto_Sans_Thai'] font-semibold text-center leading-[16px]">A4</div>
                                            </div>
                                            <div className="bg-[#e9eaeb] h-[103px] w-[45px] flex items-center justify-center p-2.5">
                                                <div className="text-[#000000] text-[14px] font-['Noto_Sans_Thai'] font-semibold text-center leading-[16px]">A5</div>
                                            </div>
                                        </div>

                                        <div className="bg-[#e9eaeb] h-[103px] w-[169px] flex items-center justify-center p-2.5">
                                            <div className="text-[#000000] text-[14px] font-['Noto_Sans_Thai'] font-semibold text-center leading-[16px]">A6</div>
                                        </div>
                                    </div>

                                    {/* Row B */}
                                    <div className="flex gap-[39px] items-center">
                                        <div className="flex gap-[9px] items-center">
                                            <div className="bg-[#e9eaeb] h-[103px] w-[107px] flex items-center justify-center p-2.5">
                                                <div className="text-[#000000] text-[14px] font-['Noto_Sans_Thai'] font-semibold text-center leading-[16px]">B1</div>
                                            </div>
                                            <div className="bg-[#e9eaeb] h-[103px] w-[45px] flex items-center justify-center p-2.5">
                                                <div className="text-[#000000] text-[14px] font-['Noto_Sans_Thai'] font-semibold text-center leading-[16px]">B2</div>
                                            </div>
                                        </div>

                                        {/* JIB Booth - Highlighted */}
                                        <div className="bg-neutral-50 border border-[#e9eaeb] rounded-[5px] p-2.5 flex gap-[9px] items-center">
                                            <div className="bg-[#221690] h-[103px] w-[107px] flex flex-col items-center justify-center p-2.5 gap-[3px]">
                                                <div className="text-[#ffffff] text-[14px] font-['Noto_Sans_Thai'] font-semibold text-center leading-[16px]">
                                                    B3
                                                </div>
                                                <div
                                                    className="w-[56.198px] h-10 bg-cover bg-center"
                                                    style={{ backgroundImage: `url('${imgLogoJib}')` }}
                                                />
                                            </div>
                                            <div className="flex flex-col gap-[11px] w-[45px]">
                                                <div className="bg-[#221690] h-[45px] flex items-center justify-center p-2.5">
                                                    <div className="text-[#ffffff] text-[14px] font-['Noto_Sans_Thai'] font-semibold text-center leading-[16px]">B4</div>
                                                </div>
                                                <div className="bg-[#221690] h-[47px] flex items-center justify-center p-2.5">
                                                    <div className="text-[#ffffff] text-[14px] font-['Noto_Sans_Thai'] font-semibold text-center leading-[16px]">B5</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex gap-[9px] items-end">
                                            <div className="flex flex-col gap-2.5 w-[53px]">
                                                <div className="bg-[#e9eaeb] h-[47px] flex items-center justify-center p-2.5">
                                                    <div className="text-[#000000] text-[14px] font-['Noto_Sans_Thai'] font-semibold text-center leading-[16px]">B6</div>
                                                </div>
                                                <div className="bg-[#e9eaeb] h-[47px] flex items-center justify-center p-2.5">
                                                    <div className="text-[#000000] text-[14px] font-['Noto_Sans_Thai'] font-semibold text-center leading-[16px]">B7</div>
                                                </div>
                                            </div>
                                            <div className="bg-[#e9eaeb] h-[103px] w-[45px] flex items-center justify-center p-2.5">
                                                <div className="text-[#000000] text-[14px] font-['Noto_Sans_Thai'] font-semibold text-center leading-[16px]">B8</div>
                                            </div>
                                            <div className="bg-[#e9eaeb] h-[103px] w-[45px] flex items-center justify-center p-2.5">
                                                <div className="text-[#000000] text-[14px] font-['Noto_Sans_Thai'] font-semibold text-center leading-[16px]">B9</div>
                                            </div>
                                        </div>

                                        <div className="flex gap-[9px] items-center">
                                            <div className="bg-[#e9eaeb] h-[103px] w-[107px] flex items-center justify-center p-2.5">
                                                <div className="text-[#000000] text-[14px] font-['Noto_Sans_Thai'] font-semibold text-center leading-[16px]">B10</div>
                                            </div>
                                            <div className="flex flex-col gap-[11px] w-[53px]">
                                                <div className="bg-[#e9eaeb] h-[45px] flex items-center justify-center p-2.5">
                                                    <div className="text-[#000000] text-[14px] font-['Noto_Sans_Thai'] font-semibold text-center leading-[16px]">B11</div>
                                                </div>
                                                <div className="bg-[#e9eaeb] h-[47px] flex items-center justify-center p-2.5">
                                                    <div className="text-[#000000] text-[14px] font-['Noto_Sans_Thai'] font-semibold text-center leading-[16px]">B12</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Row C */}
                                    <div className="flex gap-[43px] items-center">
                                        <div className="bg-[#e9eaeb] h-[103px] w-[161px] flex items-center justify-center p-2.5">
                                            <div className="text-[#000000] text-[14px] font-['Noto_Sans_Thai'] font-semibold text-center leading-[16px]">C1</div>
                                        </div>

                                        <div className="flex gap-[9px] items-center">
                                            {/* JIB Booth C2 - Highlighted */}
                                            <div className="bg-neutral-100 border border-[#e9eaeb] rounded-[5px] p-2.5 w-[260px]">
                                                <div className="bg-[#221690] h-[103px] flex items-center justify-center p-2.5">
                                                    <div className="flex flex-col items-center gap-[3px]">
                                                        <div className="text-[#ffffff] text-[14px] font-['Noto_Sans_Thai'] font-semibold text-center leading-[16px]">
                                                            C2
                                                        </div>
                                                        <div
                                                            className="w-[56.198px] h-10 bg-cover bg-center"
                                                            style={{ backgroundImage: `url('${imgLogoJib}')` }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-[#e9eaeb] h-[103px] w-[99px] flex items-center justify-center p-2.5">
                                                <div className="text-[#000000] text-[14px] font-['Noto_Sans_Thai'] font-semibold text-center leading-[16px]">C3</div>
                                            </div>
                                        </div>

                                        <div className="bg-[#e9eaeb] h-[103px] w-[169px] flex items-center justify-center p-2.5">
                                            <div className="text-[#000000] text-[14px] font-['Noto_Sans_Thai'] font-semibold text-center leading-[16px]">C4</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Entrance/Exit Labels */}
                            <div className="flex flex-col items-center gap-2.5 w-full">
                                <div className="relative w-[861px] h-[45px]">
                                    {/* Left Entrance */}
                                    <div className="absolute" style={{ left: '53px', top: '19px' }}>
                                        <div className="flex flex-col items-center">
                                            <div className="w-[18.51px] h-[15px] mb-2">
                                                <img src={imgGroup4577} alt="Entrance" className="w-full h-full" />
                                            </div>
                                            <div className="text-[#000000] text-[14px] font-['Noto_Sans_Thai'] font-semibold text-center leading-[16px]">
                                                <p className="mb-0">ทางเข้า</p>
                                                <p>และออก</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Center Entrance */}
                                    <div className="absolute" style={{ left: '305px', top: '19px' }}>
                                        <div className="flex flex-col items-center">
                                            <div className="w-[18.51px] h-[15px] mb-2">
                                                <img src={imgGroup4577} alt="Entrance" className="w-full h-full" />
                                            </div>
                                            <div className="text-[#000000] text-[14px] font-['Noto_Sans_Thai'] font-semibold text-center leading-[16px]">
                                                <p className="mb-0">ทางเข้า</p>
                                                <p>และออก</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Entrance */}
                                    <div className="absolute" style={{ left: '715px', top: '19px' }}>
                                        <div className="flex flex-col items-center">
                                            <div className="w-[18.51px] h-[15px] mb-2">
                                                <img src={imgGroup4577} alt="Entrance" className="w-full h-full" />
                                            </div>
                                            <div className="text-[#000000] text-[14px] font-['Noto_Sans_Thai'] font-semibold text-center leading-[16px]">
                                                <p className="mb-0">ทางเข้า</p>
                                                <p>และออก</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
} 