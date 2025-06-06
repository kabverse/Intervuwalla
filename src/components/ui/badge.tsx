
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        flashy:
          "relative border-transparent bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold shadow-lg hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-300",
        urgent:
          "relative border-transparent bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold shadow-lg flashy-glow animate-bounce hover:from-red-600 hover:to-orange-600",
        premium:
          "relative border-transparent bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-lg hover:from-purple-600 hover:to-pink-600 transform hover:scale-110 transition-all duration-300",
        success:
          "relative border-transparent bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold shadow-lg hover:from-green-600 hover:to-emerald-600"
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
