import * as React from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const searchFields = [
  { label: "Location", hint: "Address, City Or Zip" },
  { label: "Date/Duration", hint: "Anytime/3 Days" },
  { label: "Budget", hint: "$0-$3000" },
  { label: "People", hint: "5-10" },
]

function Banner({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="banner"
      className={cn(
        "relative flex h-[calc(100svh-4rem)] min-h-[32rem] w-full flex-col overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Background (banner.png is already darkened) */}
      <Image
        src="/image/banner.png"
        alt="Aerial view of a coastal bay surrounded by green hills"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/20" aria-hidden />

      {/* Centered hero copy */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-16 pb-40 text-center">
        <h1 className="max-w-3xl text-5xl leading-tight font-light text-white sm:text-6xl lg:text-7xl">
          Discover Your
          <br />
          Next Adventure
        </h1>
        <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            className="h-12 rounded-md bg-brand px-6 text-xs font-semibold tracking-wider text-white uppercase hover:bg-brand/90"
          >
            Explore Now
            <ArrowRight />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 rounded-md border-white/40 bg-white/15 px-6 text-xs font-semibold tracking-wider text-white uppercase backdrop-blur-sm hover:bg-white/25 hover:text-white"
          >
            View Destination
          </Button>
        </div>
      </div>

      {/* Search strip pinned to the bottom */}
      <div className="absolute inset-x-0 bottom-0 z-10 bg-black/50 backdrop-blur-xs">
        <div className="mx-auto flex max-w-screen-2xl flex-wrap items-stretch divide-y divide-white/20 sm:flex-nowrap sm:divide-x sm:divide-y-0">
          {searchFields.map((field) => (
            <div
              key={field.label}
              className="flex min-w-0 flex-1 items-center gap-4 px-4 py-3 sm:px-6"
            >
              <div className="min-w-0">
                <p className="text-sm font-medium text-white">{field.label}</p>
                <p className="truncate text-xs text-white/60">{field.hint}</p>
              </div>
            </div>
          ))}
          <Button className="h-auto w-full rounded-none bg-brand px-10 text-sm font-semibold tracking-wider text-white uppercase hover:bg-brand/90 sm:w-auto">
            Search
          </Button>
        </div>
      </div>
    </section>
  )
}

export { Banner }
