import * as React from "react"
import { Headphones, Map, ShieldCheck } from "lucide-react"

import { cn } from "@/lib/utils"
import { Card, CardDescription } from "@/components/ui/card"

const features = [
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: Map,
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
  },
]

function WhyChooseUs({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="why-choose-us"
      className={cn("w-full bg-brand/10 py-20", className)}
      {...props}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section heading */}
        <div className="text-center">
          <h2 className="text-4xl tracking-tight sm:text-5xl">
            Why Choose Wanderlust
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="rounded-lg p-8 shadow-sm ring-0"
            >
              <feature.icon
                className="size-8 text-brand"
                strokeWidth={1.75}
                aria-hidden
              />
              <h3 className="text-xl font-normal">{feature.title}</h3>
              <CardDescription className="leading-relaxed">
                {feature.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export { WhyChooseUs }
