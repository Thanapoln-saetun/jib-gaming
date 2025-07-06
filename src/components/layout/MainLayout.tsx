import Footer from './Footer'
import Header from './Header'
import NavBar from './NavBar'
import AutoScaleWrapper from './AutoScaleWrapper'

interface MainLayoutProps {
    children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <AutoScaleWrapper designWidth={1920} minScale={0.3} maxScale={1.2}>
            <div className="min-h-screen flex flex-col">
                <NavBar />
                <Header />
                <main className="flex-1">
                    {children}
                </main>
                <Footer />
            </div>
        </AutoScaleWrapper>
    )
} 