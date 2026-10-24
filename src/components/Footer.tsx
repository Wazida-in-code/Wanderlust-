import * as React from "react"
import { ArrowUpRight } from "lucide-react"
import { Playfair_Display } from "next/font/google"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
})

const quickLinks = ["Home", "Destinations", "My Bookings", "My Profile"]
const supportLinks = ["Help Center", "Terms of Service", "Privacy Policy"]
const contactDetails = ["786 901 1622", "info@wandarland.com"]

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className="size-5"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className="size-5"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="size-5"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <path d="M17.5 6.5h.01" />
    </svg>
  )
}

const socialIcons = [
  { label: "X", Icon: XIcon },
  { label: "LinkedIn", Icon: LinkedinIcon },
  { label: "Instagram", Icon: InstagramIcon },
]

function Footer({ className, ...props }: React.ComponentProps<"footer">) {
  return (
    <footer
      data-slot="footer"
      className={cn("w-full bg-black text-white", className)}
      {...props}
    >
      <div className="mx-auto w-full max-w-screen-xl px-6">
        {/* Wordmark + tagline */}
        <div className="pt-24">
          <p
            className={cn(
              "text-6xl leading-none font-bold tracking-tight sm:text-7xl lg:text-8xl",
              playfair.className
            )}
          >
            Wanderlast
          </p>
          <p className="mt-5 text-sm text-white/70 sm:text-base">
            Your gateway to extraordinary travel experiences around the world.
          </p>
        </div>

        {/* Link columns */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Newsletter */}
          <div>
            <h2 className="text-sm font-normal uppercase tracking-wider">
              Newsletter
            </h2>
            <p className="mt-4 text-xs text-white/60">
              Subscribe for exclusive travel deals and inspiration.
            </p>
            <div className="relative mt-4 w-full max-w-xs">
              <Input
                type="email"
                aria-label="Email address"
                placeholder="Enter email"
                className="h-11 border-0 bg-white/10 px-4 pr-11 text-sm text-white placeholder:text-white/50 focus-visible:ring-ring/40"
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center text-white"
                aria-hidden
              >
                <ArrowUpRight className="size-5" />
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="text-sm font-normal uppercase tracking-wider">
              Quick Links
            </h2>
            <ul className="mt-5 space-y-5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <span className="cursor-default text-sm text-white/80 hover:text-white">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="text-sm font-normal uppercase tracking-wider">
              Support
            </h2>
            <ul className="mt-5 space-y-5">
              {supportLinks.map((link) => (
                <li key={link}>
                  <span className="cursor-default text-sm text-white/80 hover:text-white">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-sm font-normal uppercase tracking-wider">
              Contact Us
            </h2>
            <ul className="mt-5 space-y-5">
              {contactDetails.map((detail) => (
                <li key={detail} className="text-sm text-white/80">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-6 pb-10 sm:flex-row">
          <p className="text-xs text-white/50">
            © 2026 Wanderlust. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-white/85">
            {socialIcons.map(({ label, Icon }) => (
              <span
                key={label}
                className="cursor-default transition-colors hover:text-white"
              >
                <Icon />
                <span className="sr-only">{label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
