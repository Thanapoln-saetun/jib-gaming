'use client'

// Category icons from Groups-Category-Icon folder
const iconCpu = "/assets/icons/Groups-Category-Icon/cpu.svg";
const iconHardDisk = "/assets/icons/Groups-Category-Icon/hard-disk.svg";
const iconVgaCard = "/assets/icons/Groups-Category-Icon/vga-card.svg";
const iconM2 = "/assets/icons/Groups-Category-Icon/m2.svg";
const iconMainBoard = "/assets/icons/Groups-Category-Icon/main-board.svg";
const iconCase = "/assets/icons/Groups-Category-Icon/case.svg";
const iconSsd = "/assets/icons/Groups-Category-Icon/ssd.svg";
const iconCpuLiquidCooler = "/assets/icons/Groups-Category-Icon/cpu-liquid-cooler.svg";
const iconRam = "/assets/icons/Groups-Category-Icon/ram.svg";
const iconCpuCooler = "/assets/icons/Groups-Category-Icon/cpu-cooler.svg";
const iconMemory = "/assets/icons/Groups-Category-Icon/memory.svg";
const iconPowerSupply = "/assets/icons/Groups-Category-Icon/power-supply.svg";
const iconMonitor = "/assets/icons/Groups-Category-Icon/monitor.svg";
const iconKeyboard = "/assets/icons/Groups-Category-Icon/keyboard.svg";
const iconMouse = "/assets/icons/Groups-Category-Icon/mouse.svg";

const categories = [
    {
        id: 1,
        name: 'CPU',
        icon: iconCpu,
        recommended: false
    },
    {
        id: 2,
        name: 'HARD DISK',
        icon: iconHardDisk,
        recommended: false
    },
    {
        id: 3,
        name: 'VGA CARD',
        icon: iconVgaCard,
        recommended: false
    },
    {
        id: 4,
        name: 'M2',
        icon: iconM2,
        recommended: true
    },
    {
        id: 5,
        name: 'MAIN BOARD',
        icon: iconMainBoard,
        recommended: false
    },
    {
        id: 6,
        name: 'CASE',
        icon: iconCase,
        recommended: false
    },
    {
        id: 7,
        name: 'SOLID STATE\nDRIVE',
        icon: iconSsd,
        recommended: false
    },
    {
        id: 8,
        name: 'CPU LIQUID\nCOOLER',
        icon: iconCpuLiquidCooler,
        recommended: false
    },
    {
        id: 9,
        name: 'RAM',
        icon: iconRam,
        recommended: false
    },
    {
        id: 10,
        name: 'CPU COOLER',
        icon: iconCpuCooler,
        recommended: false
    },
    {
        id: 11,
        name: 'MEMORY',
        icon: iconMemory,
        recommended: false
    },
    {
        id: 12,
        name: 'POWER SUPPLY',
        icon: iconPowerSupply,
        recommended: false
    },
    {
        id: 13,
        name: 'MONITOR',
        icon: iconMonitor,
        recommended: false
    },
    {
        id: 14,
        name: 'KEYBOARD',
        icon: iconKeyboard,
        recommended: false
    },
    {
        id: 15,
        name: 'MOUSE',
        icon: iconMouse,
        recommended: false
    }
];

export default function CategoryIcons() {
    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col gap-[29px] items-center">
                    {/* Title */}
                    <div className="text-center">
                        <h2 className="text-[24px] font-['Noto_Sans_Thai'] font-bold text-[#1e1e1e] leading-[32px]">
                            หมวดหมู่สินค้า
                        </h2>
                    </div>

                    {/* Categories Grid */}
                    <div className="relative size-full">
                        <div className="flex flex-row items-center justify-center relative size-full">
                            <div className="[flex-flow:wrap] box-border content-center flex gap-6 items-center justify-center px-[248px] py-0 relative size-full">
                                {categories.map((category) => (
                                    <div
                                        key={category.id}
                                        className={`box-border content-stretch flex flex-col gap-4 items-center justify-start leading-[0] p-0 relative shrink-0 cursor-pointer hover:scale-105 transition-transform duration-200 ${category.name === 'SOLID STATE\nDRIVE' ? 'w-24' : ''
                                            }`}
                                    >
                                        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
                                            <div
                                                className={`[grid-area:1_/_1] bg-gray-200 ml-0 mt-0 rounded-[99px] size-24 ${category.recommended ? 'shadow-[0px_0px_4px_0px_rgba(214,220,235,0.5)]' : ''
                                                    }`}
                                            />
                                            <div className="[grid-area:1_/_1] h-12 ml-6 mt-6 relative w-12 flex items-center justify-center">
                                                <img
                                                    src={category.icon}
                                                    alt={category.name}
                                                    className="w-12 h-12 max-w-none"
                                                />
                                            </div>
                                        </div>

                                        <div className="font-['Noto_Sans_Thai:SemiBold',_'Noto_Sans:Bold',_sans-serif] font-semibold relative shrink-0 text-[#221690] text-[14px] text-left">
                                            {category.name.includes('\n') ? (
                                                <div className="text-center">
                                                    {category.name.split('\n').map((line, index) => (
                                                        <p key={index} className="block leading-[16px] whitespace-pre m-0">
                                                            {line}
                                                        </p>
                                                    ))}
                                                </div>
                                            ) : (
                                                <p className="block leading-[16px] whitespace-pre text-nowrap">
                                                    {category.name}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}

                                {/* Recommended Badge */}
                                {categories.find(cat => cat.recommended) && (
                                    <div className="absolute bg-[#ff0000] box-border content-stretch flex flex-row h-4 items-center justify-center left-[555px] px-1 py-0 rounded top-3">
                                        <div className="flex flex-col font-['Noto_Sans_Thai:Bold',_sans-serif] font-bold justify-end leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-left text-nowrap">
                                            <p className="block leading-[16px] whitespace-pre">แนะนำ</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 