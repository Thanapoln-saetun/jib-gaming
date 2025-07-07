'use client'

import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="w-full">
            {/* Service Features Bar */}
            <div className="bg-gray-100 py-4">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-24">
                        {/* Warranty Feature */}
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 flex items-center justify-center">
                                <Image
                                    src="/assets/images/service-bar/warranty.png"
                                    alt="การรับประกัน"
                                    className="w-8 h-8 object-contain"
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div className="text-sm font-semibold text-[#221692]">
                                <p className="mb-0">การรับประกัน</p>
                                <p className="mb-0">สินค้าแท้ 100%</p>
                            </div>
                        </div>

                        {/* Free Shipping Feature */}
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 flex items-center justify-center">
                                <Image
                                    src="/assets/images/service-bar/shipping.png"
                                    alt="จัดส่งฟรี"
                                    className="w-10 h-8 object-contain"
                                    width={40}
                                    height={32}
                                />
                            </div>
                            <div className="text-sm font-semibold text-[#221692]">
                                <p className="mb-0">ช้อปครบ 500 บาท</p>
                                <p className="mb-0">จัดส่งฟรีทั่วประเทศ</p>
                                <p className="text-xs">*จัดส่งด้วยบริษัทขนส่งเอกชน</p>
                            </div>
                        </div>

                        {/* Express Delivery Feature */}
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-8 flex items-center justify-center">
                                <Image
                                    src="/assets/images/service-bar/delivery.png"
                                    alt="จัดส่งด่วน"
                                    className="w-14 h-8 object-contain"
                                    width={56}
                                    height={32}
                                />
                            </div>
                            <div className="text-sm font-semibold text-[#221692]">
                                <p className="mb-0">ช้อปครบ 3,000 บาท</p>
                                <p className="mb-0">ส่งฟรีภายใน 3 ชั่วโมง</p>
                                <p className="text-xs">*เฉพาะกรุงเทพและปริมณฑล ในเขตพื้นที่กำหนดฯ</p>
                            </div>
                        </div>

                        {/* Payment Feature */}
                        <div className="flex items-center gap-4">
                            <div className="w-15 h-10 flex items-center justify-center">
                                <Image
                                    src="/assets/images/service-bar/payment.png"
                                    alt="ช่องทางการชำระเงิน"
                                    className="w-[54px] h-8 object-contain"
                                    width={54}
                                    height={32}
                                />
                            </div>
                            <div className="text-sm font-semibold text-[#221692]">
                                <p className="mb-0">ชำระเงินสินค้า</p>
                                <p className="mb-0">ได้หลากหลายช่องทาง</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="bg-[#221692] text-white">
                <div className=" container mx-auto px-60 py-0">
                    <div className="flex flex-col gap-4 items-end pt-[72px] px-6 w-full max-w-[1440px]">
                        <div className="flex gap-[72px] items-start w-full">
                            {/* Company Info */}
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-[5px]">
                                        <div className="w-[72px] h-16 bg-center bg-cover bg-no-repeat" style={{ backgroundImage: "url('/assets/images/jib-logo.png')" }}></div>
                                        <div className="text-white text-2xl">×</div>
                                        <div className="w-[104px] h-[47px] bg-center bg-cover bg-no-repeat" style={{ backgroundImage: "url('/assets/images/LOGOBACKTOSCHOOL.png')" }}></div>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <h2 className="text-white text-xl font-bold">J.I.B Computer Group Co. ,Ltd.</h2>
                                        <div className="flex flex-col gap-1 text-white text-sm">
                                            <p className="font-medium">เลขที่ 21 ถนนพหลโยธิน แขวงสนามบิน เขตดอนเมือง กรุงเทพฯ 10210</p>
                                            <p className="font-normal">Tel. : 02-017-4444</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3.5">
                                    <h3 className="text-white text-base font-semibold">เครื่องหมายรับรอง</h3>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-[50px]  rounded flex items-center justify-center">
                                            <Image src="/assets/images/CERT.png" alt="Quality Certificate" className="w-full h-full" width={48} height={50} />
                                        </div>
                                        <div className="w-[127px] h-[50px]  rounded flex items-center justify-center">
                                            <Image src="/assets/images/BNS_REGISTERED.png" alt="DBD Registered" className="w-full h-full" width={127} height={50} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation Links */}
                            <div className="flex gap-6">
                                {/* JIB Online */}
                                <div className="flex flex-col gap-6 w-[168px]">
                                    <h3 className="text-white text-base font-semibold">เจไอบีออนไลน์</h3>
                                    <div className="flex flex-col gap-4">
                                        <a href="#" className="text-white text-sm font-medium hover:text-yellow-400">สินค้า</a>
                                        <a href="#" className="text-white text-sm font-medium hover:text-yellow-400">ข่าวสาร</a>
                                        <a href="#" className="text-white text-sm font-medium hover:text-yellow-400">เกี่ยวกับเรา</a>
                                        <a href="#" className="text-white text-sm font-medium hover:text-yellow-400">ติดต่อเรา</a>
                                        <a href="#" className="text-white text-sm font-medium hover:text-yellow-400">เจไอบีดีอย่างไร</a>
                                    </div>
                                </div>

                                {/* Support */}
                                <div className="flex flex-col gap-6 w-52">
                                    <h3 className="text-white text-base font-semibold">ฝ่ายสนับสนุน</h3>
                                    <div className="flex flex-col gap-4">
                                        <a href="#" className="text-white text-sm font-medium hover:text-yellow-400">แผนที่สาขา</a>
                                        <a href="#" className="text-white text-sm font-medium hover:text-yellow-400">ตำแหน่งงานว่าง</a>
                                        <a href="#" className="text-white text-sm font-medium hover:text-yellow-400">เช็คประกันสินค้า</a>
                                        <a href="#" className="text-white text-sm font-medium hover:text-yellow-400">นิตยสารออนไลน์ ม.ค. 2567</a>
                                    </div>
                                </div>

                                {/* Customer Service */}
                                <div className="flex flex-col gap-6 w-52">
                                    <h3 className="text-white text-base font-semibold">แผนกบริการลูกค้า</h3>
                                    <div className="flex flex-col gap-4">
                                        <a href="#" className="text-white text-sm font-medium hover:text-yellow-400">วิธีการสั่งซื้อสินค้า</a>
                                        <a href="#" className="text-white text-sm font-medium hover:text-yellow-400">ตรวจสอบสถานะสินค้า</a>
                                        <a href="#" className="text-white text-sm font-medium hover:text-yellow-400">วิธีการชำระเงิน</a>
                                        <a href="#" className="text-white text-sm font-medium hover:text-yellow-400">การเปลี่ยนคืนสินค้า</a>
                                        <a href="#" className="text-white text-sm font-medium hover:text-yellow-400">การใช้คูปองส่วนลด</a>
                                    </div>
                                </div>

                                {/* Contact Info */}
                                <div className="flex flex-col gap-6 w-52">
                                    <h3 className="text-white text-base font-semibold">ติดต่อสอบถาม</h3>
                                    <div className="flex flex-col gap-4 text-white text-sm font-normal">
                                        <p>Tiktok : jibofficial</p>
                                        <p>Youtube : Jib Channel</p>
                                        <p>Line ID : @jibonline</p>
                                        <p>Instagram : jib.online</p>
                                        <p>Facebook : JIB Computer Group</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Payment & Delivery Section */}
                        <div className="flex gap-12 justify-center pb-0">
                            {/* Delivery Partners */}
                            <div className="flex flex-col items-center">
                                <h4 className="text-white text-base font-semibold">จัดส่งสินค้าโดย</h4>
                                <div className="w-[280px] h-[113px] flex items-center justify-center">
                                    <Image
                                        src="/assets/images/delivery/ft-delivery.png"
                                        alt="จัดส่งสินค้าโดย Kerry, Teleport, DHL"
                                        className="max-w-full max-h-full object-contain"
                                        width={280}
                                        height={113}
                                    />
                                </div>
                            </div>

                            {/* Payment Methods */}
                            <div className="flex flex-col items-center">
                                <h4 className="text-white text-base font-semibold">ช่องทางการชำระ</h4>
                                <div className="w-[452px] h-[100px] flex items-center justify-center">
                                    <Image
                                        src="/assets/images/payment/ft-payment.png"
                                        alt="ช่องทางการชำระ Visa, Mastercard และธนาคารต่างๆ"
                                        className="max-w-full max-h-full object-contain"
                                        width={452}
                                        height={100}
                                    />
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="flex flex-col items-center">
                                <h4 className="text-white text-base font-semibold">ช่องทางการติดตาม</h4>
                                <div className="flex gap-4 py-6">
                                    <Image src="/assets/icons/social/facebook.png" alt="Facebook" className="w-8 h-8" width={32} height={32} />
                                    <Image src="/assets/icons/social/messenger.png" alt="Messenger" className="w-8 h-8" width={32} height={32} />
                                    <Image src="/assets/icons/social/instagram.png" alt="Instagram" className="w-8 h-8" width={32} height={32} />
                                    <Image src="/assets/icons/social/line.png" alt="Line" className="w-8 h-8" width={32} height={32} />
                                    <Image src="/assets/icons/social/youtube.png" alt="YouTube" className="w-8 h-8" width={32} height={32} />
                                    <Image src="/assets/icons/social/tiktok.png" alt="TikTok" className="w-8 h-8" width={32} height={32} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-white py-1">
                <div className="flex items-center justify-center gap-1">
                    <div className="w-3 h-3">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="5" stroke="#4e4e4e" strokeWidth="1" fill="none" />
                            <path d="M4 6C4 5.33 4.33 4.67 5 4.33C5.67 4 6.33 4 7 4.33" stroke="#4e4e4e" strokeWidth="1" fill="none" />
                        </svg>
                    </div>
                    <p className="text-gray-600 text-xs font-normal">2023 JIB COMPUTER GROUP All rights reserved</p>
                </div>
            </div>
        </footer>
    )
} 