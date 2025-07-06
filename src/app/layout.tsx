import type { Metadata } from 'next'
import MainLayout from '@/components/layout/MainLayout'
import './globals.css'

export const metadata: Metadata = {
    title: 'JIB Gaming - Computer Equipment Store',
    description: 'Your ultimate destination for gaming computers and equipment',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="th">
            <body className="font-sans bg-background">
                <MainLayout>{children}</MainLayout>
            </body>
        </html>
    )
} 