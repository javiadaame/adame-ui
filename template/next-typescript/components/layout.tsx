import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

interface LayoutProps {
    children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
    return (
        <>
            {/* Add Header */}
            <main className={inter.className}>{children}</main>
            {/* Add Footer */}
        </>
    )
}