import { site } from "@/config/site"
import Link from "next/link"

export function Header() {
    return (
        <header className="sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white">
            <div className="container flex h-16 items-center">
                {/* Main Nav */}
                <div className="hidden md:flex">
                    <Link href="/" className="ml-44 mr-6 flex items-center space-x-2">
                        <span className="hidden font-extrabold text-lg sm:inline-block">
                            {site.name}
                        </span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        <Link href={site.links.github}>GitHub</Link>
                    </nav>
                </div>

            </div>
        </header>
    )
}