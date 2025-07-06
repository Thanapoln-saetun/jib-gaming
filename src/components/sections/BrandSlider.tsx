'use client'

// Brand Logo Slide 1 - Local assets downloaded from Figma node 0:4100
const slide1_img1 = "/assets/brands/slides/slide1_msi.png"; // MSI
const slide1_img2 = "/assets/brands/slides/slide1_asus.png"; // ASUS
const slide1_img3 = "/assets/brands/slides/slide1_intel.png"; // Intel
const slide1_img4 = "/assets/brands/slides/slide1_apple.png"; // Apple
const slide1_img5 = "/assets/brands/slides/slide1_amd.png"; // AMD
const slide1_img6 = "/assets/brands/slides/slide1_lenovo.png"; // Lenovo
const slide1_img7 = "/assets/brands/slides/slide1_steelseries.png"; // SteelSeries
const slide1_img8 = "/assets/brands/slides/slide1_corsair.png"; // Corsair 
const slide1_img9 = "/assets/brands/slides/slide1_hyperx.png"; // HyperX
const slide1_img10 = "/assets/brands/slides/slide1_razer.png"; // Razer
const slide1_img11 = "/assets/brands/slides/slide1_logitech.png"; // Logitech
const slide1_img12 = "/assets/brands/slides/slide1_gigabyte.png"; // Gigabyte

// Brand Logo Slide 2 - Local assets downloaded from Figma node 0:4101
const slide2_img1 = "/assets/brands/slides/slide2_deepcool.png"; // DeepCool
const slide2_img2 = "/assets/brands/slides/slide2_seagate.png"; // Seagate
const slide2_img3 = "/assets/brands/slides/slide2_epson.png"; // Epson
const slide2_img4 = "/assets/brands/slides/slide2_cougar.png"; // Cougar
const slide2_img5 = "/assets/brands/slides/slide2_wd.png"; // WD
const slide2_img6 = "/assets/brands/slides/slide2_razer2.png"; // Razer (variant)
const slide2_img7 = "/assets/brands/slides/slide2_brand7.png"; // Gaming brand
const slide2_img8 = "/assets/brands/slides/slide2_brand8.png"; // Gaming brand
const slide2_img9 = "/assets/brands/slides/slide2_brand9.png"; // Gaming brand
const slide2_img10 = "/assets/brands/slides/slide2_brand10.png"; // Gaming brand
const slide2_img11 = "/assets/brands/slides/slide2_brand11.png"; // Gaming brand
const slide2_img12 = "/assets/brands/slides/slide2_brand12.png"; // Gaming brand

// Brand arrays for each slide
const brandSlide1 = [
    slide1_img1, slide1_img2, slide1_img3, slide1_img4, slide1_img5, slide1_img6,
    slide1_img7, slide1_img8, slide1_img9, slide1_img10, slide1_img11, slide1_img12
];

const brandSlide2 = [
    slide2_img1, slide2_img2, slide2_img3, slide2_img4, slide2_img5, slide2_img6,
    slide2_img7, slide2_img8, slide2_img9, slide2_img10, slide2_img11, slide2_img12
];

export default function BrandSlider() {
    return (
        <section className="py-16 opacity-40">
            <div className="flex flex-col gap-14 relative w-full">
                {/* Left gradient fade */}
                <div className="absolute left-0 top-0 w-80 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
                {/* Right gradient fade */}
                <div className="absolute right-0 top-0 w-80 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
                {/* Brand Logo Slide 1 - Scrolling Left */}
                <div className="h-[45.5px] overflow-hidden relative w-full">
                    <div className="absolute flex flex-row gap-4 items-start justify-start left-[-92px] top-0">
                        <div className="flex flex-row gap-4 items-start justify-start animate-marquee-left">
                            {/* First set of logos */}
                            <div className="flex flex-row gap-4 shrink-0">
                                {brandSlide1.map((logo, index) => (
                                    <div
                                        key={`slide1-${index}`}
                                        className="h-[45.5px] w-[158px] relative shrink-0"
                                        style={{
                                            backgroundImage: `url('${logo}')`,
                                            backgroundSize: '110%',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat'
                                        }}
                                    />
                                ))}
                            </div>
                            {/* Duplicate set for seamless loop */}
                            <div className="flex flex-row gap-4 shrink-0">
                                {brandSlide1.map((logo, index) => (
                                    <div
                                        key={`slide1-dup-${index}`}
                                        className="h-[45.5px] w-[158px] relative shrink-0"
                                        style={{
                                            backgroundImage: `url('${logo}')`,
                                            backgroundSize: '110%',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat'
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Brand Logo Slide 2 - Scrolling Right */}
                <div className="h-[45.5px] overflow-hidden relative w-full">
                    <div className="absolute flex flex-row gap-4 items-start justify-start right-[-60px] top-0">
                        <div className="flex flex-row gap-4 items-start justify-start animate-marquee-right">
                            {/* First set of logos */}
                            <div className="flex flex-row gap-4 shrink-0">
                                {brandSlide2.map((logo, index) => (
                                    <div
                                        key={`slide2-${index}`}
                                        className="h-[45.5px] w-[200px] relative shrink-0"
                                        style={{
                                            backgroundImage: `url('${logo}')`,
                                            backgroundSize: '110%',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat'
                                        }}
                                    />
                                ))}
                            </div>
                            {/* Duplicate set for seamless loop */}
                            <div className="flex flex-row gap-4 shrink-0">
                                {brandSlide2.map((logo, index) => (
                                    <div
                                        key={`slide2-dup-${index}`}
                                        className="h-[45.5px] w-[200px] relative shrink-0"
                                        style={{
                                            backgroundImage: `url('${logo}')`,
                                            backgroundSize: '110%',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat'
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 