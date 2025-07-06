import BrandSlider from '@/components/sections/BrandSlider'
import CategoryIcons from '@/components/sections/CategoryIcons'
import ProductCards from '@/components/sections/ProductCards'
import MapZone from '@/components/sections/MapZone'
import SlideBanner from '@/components/sections/SlideBanner'
import CouponGrid from '@/components/sections/CouponGrid'
import FanclubsSection from '@/components/sections/FanclubsSection'
import Ads from '@/components/sections/Ads'

export default function Home() {
    return (
        <main className="min-h-screen bg-background">
            {/* Header with Hero Section is included in the layout */}

            {/* Brand Slider */}
            <BrandSlider />

            {/* Map Zone */}
            <MapZone />

            {/* Category Icons */}
            <CategoryIcons />

            {/* Slide Banner */}
            <SlideBanner />

            {/* Coupon Grid */}
            <CouponGrid />

            {/* Product Cards */}
            <ProductCards />

            {/* Fanclubs Section */}
            <FanclubsSection />

            {/* Ads */}
            <Ads />
        </main>
    )
} 