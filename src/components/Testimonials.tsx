import * as React from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    quote:
      "The Bali Trip Was Absolutely Magical. Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable.",
    name: "Michael Chen",
    location: "Singapore",
    image: "/image/person1.png",
  },
  {
    quote:
      "Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!",
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "/image/person2.png",
  },
  {
    quote:
      "The Safari In Kenya Was A Once-In-A-Lifetime Experience. Seeing The Big Five Up Close Left Us Speechless. Every Moment Was Pure Magic.",
    name: "David Kim",
    location: "Seoul, South Korea",
    image: "/image/person1.png",
  },
  {
    quote:
      "Kyoto In Spring Was A Dream Come True. The Cherry Blossoms, The Temples, The Food — Everything Was Curated To Perfection. We Can't Wait To Book Again.",
    name: "Emily Carter",
    location: "London, UK",
    image: "/image/person2.png",
  },
]

function Testimonials({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="testimonials"
      className={cn("w-full bg-background py-20", className)}
      {...props}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header + carousel share one <Carousel> so the controls can use context */}
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <div className="mb-10 flex items-center justify-between gap-6">
            <div>
              <h2 className="text-4xl tracking-tight sm:text-5xl">
                What Travelers Say
              </h2>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                Real experiences from our happy travelers
              </p>
            </div>
            <div className="hidden shrink-0 items-center gap-3 sm:flex">
              <CarouselPrevious className="static inset-auto my-auto size-10 border-border text-foreground/60 hover:bg-muted hover:text-foreground" />
              <CarouselNext className="static inset-auto my-auto size-10 border-border text-foreground/60 hover:bg-muted hover:text-foreground" />
            </div>
          </div>

          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.name} className="md:basis-1/2">
                <figure className="flex h-full flex-col justify-between gap-6 rounded-lg border bg-card p-6 sm:flex-row sm:gap-8">
                  <div className="flex min-w-0 flex-1 flex-col">
                    <blockquote className="text-sm leading-relaxed">
                      &quot;{testimonial.quote}&quot;
                    </blockquote>
                    <figcaption className="mt-auto pt-6">
                      <p className="text-sm text-brand">— {testimonial.name}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </figcaption>
                  </div>
                  <Image
                    src={testimonial.image}
                    alt={`Portrait of ${testimonial.name}`}
                    width={128}
                    height={160}
                    className="h-40 w-32 shrink-0 self-center rounded-lg object-cover sm:self-auto"
                  />
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}

export { Testimonials }
