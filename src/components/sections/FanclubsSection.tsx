// Local assets (Real images downloaded from Figma)
const img = "/assets/images/fanclub-1.png";
const img2 = "/assets/images/fanclub-2.png";
const img3 = "/assets/images/fanclub-3.png";
const img1 = "/assets/icons/fanclub-icon-1.svg"; // Keep as SVG since these weren't downloaded
const img4 = "/assets/icons/fanclub-icon-2.svg";
const img5 = "/assets/icons/fanclub-icon-3.svg";

export default function FanclubsSection() {
    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col gap-12 items-center">
                    {/* Title */}
                    <div className="text-center">
                        <h2 className="text-[24px] font-['Noto_Sans_Thai'] font-bold text-[#1e1e1e] leading-[32px]">
                            พบกับคนดังในงาน
                        </h2>
                    </div>

                    {/* Fan Cards */}
                    <div className="flex gap-6 w-full max-w-[1440px] justify-center">
                        {/* Main Card - Featured */}
                        <div className="relative w-[496px] h-[496px] rounded-2xl overflow-hidden">
                            {/* Background Image with Mask */}
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage: `linear-gradient(-90deg, rgb(34, 22, 146) 30.255%, rgba(34, 22, 146, 0) 74.204%), url('${img}')`,
                                    backgroundSize: 'auto, cover',
                                    backgroundPosition: '0% 0%, 50% 50%'
                                }}
                            />

                            {/* Character Image */}
                            <div
                                className="absolute bg-cover bg-center"
                                style={{
                                    backgroundImage: `url('${img2}')`,
                                    width: '302px',
                                    height: '541px',
                                    left: '-76px',
                                    top: '-45px',
                                    backgroundSize: '140.26% 117.27%',
                                    backgroundPosition: '52.26% 100%'
                                }}
                            />

                            {/* Content Box */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-6 text-white w-[270px]">
                                    <div className="flex flex-col gap-4">
                                        {/* Profile Image */}
                                        <div className="relative">
                                            <div
                                                className="w-14 h-14 bg-cover bg-center rounded-full border-2 border-white"
                                                style={{ backgroundImage: `url('${img3}')` }}
                                            />
                                        </div>

                                        {/* Profile Info */}
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-[20px] font-['Noto_Sans_Thai'] font-bold leading-[24px]">
                                                JIB FANCLUBS
                                            </h3>
                                            <div className="flex items-center gap-2">
                                                <img src={img4} alt="Followers" className="w-4 h-4" />
                                                <span className="text-[20px] font-['Noto_Sans_Thai'] font-bold leading-[24px]">
                                                    100 K
                                                </span>
                                            </div>
                                        </div>

                                        {/* Review Text */}
                                        <div>
                                            <p className="text-[16px] font-['Noto_Sans_Thai'] font-semibold leading-[24px]">
                                                ใช้บริการ JIB มาหลายปีส่งของไว บริการดีมีโปรโมชั่นตลอด นึกถึง Gadget ก็ต้องเข้ามาช็อปที่เว็บนี้ตลอดเลยค่ะ :)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Side Cards - Horizontal Layout */}
                        {Array.from({ length: 4 }, (_, i) => (
                            <button key={i} className="relative w-[212px] h-[497px] rounded-2xl overflow-hidden cursor-pointer">
                                {/* Background Image with Mask */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{
                                        backgroundImage: `linear-gradient(-90deg, rgb(34, 22, 146) 30.255%, rgba(34, 22, 146, 0) 74.204%), url('${img}')`,
                                        backgroundSize: 'auto, cover',
                                        backgroundPosition: '0% 0%, 50% 50%'
                                    }}
                                />

                                {/* Character Image */}
                                <div
                                    className="absolute bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url('${img2}')`,
                                        width: '256px',
                                        height: '458.831px',
                                        left: '-31px',
                                        top: '37px',
                                        backgroundSize: '140.26% 117.27%',
                                        backgroundPosition: '52.26% 100%'
                                    }}
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 h-[180px] bg-gradient-to-t from-[#221692] to-transparent" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <div className="h-[180px] flex flex-col gap-4 items-start justify-start w-full">
                                        <div className="flex flex-col gap-4 items-start justify-start w-full">
                                            {/* Profile Image */}
                                            <div className="relative">
                                                <div
                                                    className="w-14 h-14 bg-cover bg-center rounded-full border-2 border-white"
                                                    style={{ backgroundImage: `url('${img3}')` }}
                                                />
                                            </div>

                                            {/* Profile Info */}
                                            <div className="flex flex-col gap-2">
                                                <h4 className="text-[20px] font-['Noto_Sans_Thai'] font-bold leading-[24px] text-white">
                                                    JIB FANCLUBS
                                                </h4>
                                                <div className="flex items-center gap-2">
                                                    <img src={img4} alt="Followers" className="w-4 h-4" />
                                                    <span className="text-[20px] font-['Noto_Sans_Thai'] font-bold leading-[24px] text-white">
                                                        100 K
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
} 