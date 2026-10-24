import * as React from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

function CallToAction({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="call-to-action"
      className={cn(
        "relative flex min-h-[26rem] w-full items-center justify-center overflow-hidden px-4 py-16",
        className
      )}
      {...props}
    >
      {/* Background (CTA.png is a bright shot, so it gets a dark overlay) */}
      <Image
        src="/image/CTA.png"
        alt="Airplane flying over a tropical island"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" aria-hidden />

      {/* Centered copy */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h2 className="max-w-3xl text-4xl leading-tight text-white sm:text-5xl">
          Ready To Start Your Journey?
        </h2>
        <p className="mt-4 max-w-xl text-sm text-white/85 sm:text-base">
          Join thousands of travelers who have discovered the world with us
        </p>
        <Button className="mt-8 h-12 rounded-md bg-white px-8 text-xs font-semibold tracking-wider text-foreground uppercase hover:bg-white/90">
          Book Your Trip Today
          <ArrowRight />
        </Button>
      </div>
    </section>
  )
}

export { CallToAction }
