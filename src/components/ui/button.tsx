import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Square, flat, heavy. The reference system has no radii and no shadows —
// a button is a block of colour that lifts 2px on hover.
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-none border-0 text-center text-small font-extrabold whitespace-nowrap transition-transform duration-150 outline-none select-none hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-offset-[5px] focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // Black block — the primary call to action on paper grounds.
        dark: "bg-ink text-white",
        // Paper block — the primary call to action on forest and black grounds.
        light: "bg-paper text-ink",
        default: "bg-ink text-white",
        outline: "border border-ink bg-transparent text-foreground",
        ghost: "bg-transparent text-foreground hover:bg-wash-deep",
        destructive: "bg-destructive text-white",
        // Underlined inline link, the reference's .text-link
        link: "border-b border-[#8e9688] px-0 py-0 font-extrabold hover:translate-y-0",
      },
      size: {
        default: "gap-2 px-[25px] py-[15px]",
        sm: "gap-1.5 px-4 py-2.5 text-[0.8rem]",
        lg: "gap-2.5 px-[25px] py-[15px]",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
