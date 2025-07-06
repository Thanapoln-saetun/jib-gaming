
// Local assets (SVG placeholders created)
const imgTicket = "/assets/images/ticket.svg";
const imgCouponShape = "/assets/images/coupon-shape.png";
const imgLogo = "/assets/images/coupon-logo.png";

export default function CouponGrid() {
    const coupons = Array.from({ length: 8 }, (_, i) => ({
        id: i + 1,
        discount: "รับส่วนลด 10 % สูงสุด 100 ฿",
        expiry: "สามารถใช้งานได้ถึง 12 Dec 2025",
        badge: "พิเศษเฉพาะคุณ",
        recommended: i === 0 // Make 1st coupon recommended
    }));

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col gap-[29px] items-center">
                    {/* Header */}
                    <div className="flex flex-col gap-1.5 items-center">
                        <div className="w-[42px] h-[42px]">
                            <img src={imgTicket} alt="Ticket" className="w-full h-full" />
                        </div>
                        <h2 className="text-[24px] font-['Noto_Sans_Thai'] font-bold text-[#1e1e1e] leading-[32px]">
                            คูปองส่วนลด
                        </h2>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex gap-4">
                        <button className="bg-[#221690] text-white px-6 py-4 h-8 flex items-center justify-center rounded-[99px] font-['Noto_Sans_Thai'] font-bold text-[16px] leading-[16px]">
                            ส่วนลด
                        </button>
                        <button className="bg-[#f4f6f8] text-[#221690] px-6 py-4 h-8 flex items-center justify-center rounded-[99px] font-['Noto_Sans_Thai'] font-bold text-[16px] leading-[16px] hover:bg-[#221690] hover:text-white transition-colors">
                            ของแถม
                        </button>
                        <button className="bg-[#f4f6f8] text-[#221690] px-6 py-4 h-8 flex items-center justify-center rounded-[99px] font-['Noto_Sans_Thai'] font-bold text-[16px] leading-[16px] hover:bg-[#221690] hover:text-white transition-colors">
                            แบรนด์ดัง
                        </button>
                    </div>

                    {/* Coupon Grid */}
                    <div className="relative w-full max-w-[1176px]">
                        <div className="flex flex-col gap-6">
                            {/* First Row */}
                            <div className="flex gap-6 justify-center">
                                {coupons.slice(0, 4).map((coupon, index) => (
                                    <div key={coupon.id} className="relative w-[276px] h-[86px]">
                                        {/* Coupon Background */}
                                        <div className="absolute inset-0">
                                            <img src={imgCouponShape} alt="Coupon" className="w-full h-full" />
                                        </div>

                                        {/* Logo Background */}
                                        <div
                                            className="absolute w-[146px] h-[67px] opacity-40 bg-cover bg-center bg-no-repeat"
                                            style={{
                                                backgroundImage: `url('${imgLogo}')`,
                                                left: '122px',
                                                top: '19px',
                                                backgroundSize: '129.2% 280.95%',
                                                backgroundPosition: '44.14% 42.78%'
                                            }}
                                        />

                                        {/* Content */}
                                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-[171px] flex flex-col gap-2">
                                            {/* Badge */}
                                            <div className="bg-[rgba(234,179,8,0.2)] px-[5.6px] py-[2.8px] rounded-[18px] inline-flex items-center self-start">
                                                <span className="text-[8.4px] font-['Noto_Sans_Thai'] text-yellow-500 leading-[11.2px]">
                                                    {coupon.badge}
                                                </span>
                                            </div>

                                            {/* Discount Text */}
                                            <div className="flex flex-col text-left">
                                                <p className="text-white text-[14px] font-['Noto_Sans_Thai'] font-bold leading-[14px]">
                                                    {coupon.discount}
                                                </p>
                                                <p className="text-zinc-200 text-[12px] font-['Noto_Sans_Thai'] font-medium leading-[20px]">
                                                    {coupon.expiry}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Collect Button */}
                                        <div className="absolute right-[20px] top-1/2 transform -translate-y-1/2 bg-[#ffae1e] px-1.5 py-1 rounded-md">
                                            <span className="text-white text-[12px] font-['Noto_Sans_Thai'] font-medium leading-[20px]">
                                                เก็บคูปอง
                                            </span>
                                        </div>

                                        {/* Recommended Badge */}
                                        {coupon.recommended && (
                                            <div className="absolute -top-2 left-[214px] bg-[#ff0000] text-white text-[12px] font-['Noto_Sans_Thai'] font-bold px-1 py-0 rounded h-4 flex items-center justify-center leading-[16px]">
                                                แนะนำ
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Second Row */}
                            <div className="flex gap-6 justify-center">
                                {coupons.slice(4, 8).map((coupon) => (
                                    <div key={coupon.id} className="relative w-[276px] h-[86px]">
                                        {/* Coupon Background */}
                                        <div className="absolute inset-0">
                                            <img src={imgCouponShape} alt="Coupon" className="w-full h-full" />
                                        </div>

                                        {/* Logo Background */}
                                        <div
                                            className="absolute w-[146px] h-[67px] opacity-40 bg-cover bg-center bg-no-repeat"
                                            style={{
                                                backgroundImage: `url('${imgLogo}')`,
                                                left: '122px',
                                                top: '19px',
                                                backgroundSize: '129.2% 280.95%',
                                                backgroundPosition: '44.14% 42.78%'
                                            }}
                                        />

                                        {/* Content */}
                                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-[171px] flex flex-col gap-2">
                                            {/* Badge */}
                                            <div className="bg-[rgba(234,179,8,0.2)] px-[5.6px] py-[2.8px] rounded-[18px] inline-flex items-center self-start">
                                                <span className="text-[8.4px] font-['Noto_Sans_Thai'] text-yellow-500 leading-[11.2px]">
                                                    {coupon.badge}
                                                </span>
                                            </div>

                                            {/* Discount Text */}
                                            <div className="flex flex-col text-left">
                                                <p className="text-white text-[14px] font-['Noto_Sans_Thai'] font-bold leading-[14px]">
                                                    {coupon.discount}
                                                </p>
                                                <p className="text-zinc-200 text-[12px] font-['Noto_Sans_Thai'] font-medium leading-[20px]">
                                                    {coupon.expiry}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Collect Button */}
                                        <div className="absolute right-[20px] top-1/2 transform -translate-y-1/2 bg-[#ffae1e] px-1.5 py-1 rounded-md">
                                            <span className="text-white text-[12px] font-['Noto_Sans_Thai'] font-medium leading-[20px]">
                                                เก็บคูปอง
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 