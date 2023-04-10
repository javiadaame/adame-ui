import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"

import { config } from "@/lib/config"
import { cn } from "@/lib/utils"


const variants = cva(
    "inline-flex items-center select-none justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-slate-100",
    {
        variants: {
            variant: {
                default:
                    `${config.colors.primaryBg} text-white hover:bg-neutral-600`,
            },
            size: {
                default: "h-10 py-2 px-4",
                sm: "h-9 px-2 rounded-md",
                lg: "h-11 px-8 rounded-md",
            },
            margin: {
                default: "m-5",
                none: "m-0",
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
            margin: "default",
        },
    }
)
export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> { }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={cn(variants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, variants }