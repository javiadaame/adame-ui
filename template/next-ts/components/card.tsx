import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components"


interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    disabled?: boolean
}

export function Card({
    title,
    className,
    children,
    disabled,
    ...props
}: CardProps) {
    return (
        <div>
            <div
                className={cn(
                    "relative rounded-xl bg-gradient-to-r from-cyan-50 to-blue-50 p-14 text-slate-900  w-[350px] h-[300px]",
                    disabled && "cursor-not-allowed opacity-60",
                    className
                )}
                {...props}
            >
                <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="space-y-2">
                        {children}
                    </div>
                </div>
            </div>
            <h1 className="pt-5 font-bold">{title}</h1>
            <Link
                href="/"
                target="_blank"
                rel="noreferrer"
                className={buttonVariants()}
            >
                View
            </Link>
        </div>
    )
}