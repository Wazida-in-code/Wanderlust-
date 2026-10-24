"use client"

import * as React from "react"
import { Menu, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Playfair_Display } from "next/font/google"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
})

const navItems = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  {label: "Add Detinations", href: "add-destination"},
  { label: "My Bookings", href: "/my-bookings" }
]
const authItems = [
  { label: "Login", href: "/login" },
  { label: "Sign Up", href: "/signup" },
]

function Navbar({ className, ...props }: React.ComponentProps<"header">) {
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <header
      data-slot="navbar"
      className={cn(
        "sticky top-0 z-50 border-b bg-background shadow-xs",
        className
      )}
      {...props}
    >
      <div className="relative mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6">
        {/* Left: primary nav links */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "text-sm",
                isActive(item.href)
                  ? "border-b-2 border-brand pb-0.5 font-medium text-brand"
                  : "text-foreground hover:text-foreground/70"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile: hamburger */}
        <Dialog>
          <DialogTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              />
            }
          >
            <Menu className="size-5" />
          </DialogTrigger>
          <DialogContent className="left-4 right-4 w-auto max-w-none translate-x-0 sm:left-6 sm:right-6">
            <DialogHeader>
              <DialogTitle className="sr-only">Menu</DialogTitle>
            </DialogHeader>
            <DialogDescription className="sr-only">
              Navigation menu
            </DialogDescription>
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <DialogClose
                  key={item.href}
                  render={
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={cn(
                        "rounded-md px-3 py-2 text-sm",
                        isActive(item.href)
                          ? "bg-brand/10 font-medium text-brand"
                          : "text-foreground hover:bg-muted"
                      )}
                    />
                  }
                >
                  {item.label}
                </DialogClose>
              ))}
            </nav>
            <div className="flex flex-col gap-1 border-t pt-2">
              {authItems.map((item) => (
                <DialogClose
                  key={item.href}
                  render={
                    <Link
                      href={item.href}
                      className="rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted"
                    />
                  }
                >
                  {item.label}
                </DialogClose>
              ))}
            </div>
          </DialogContent>
        </Dialog>

        {/* Center: logo */}
        <Link
          href="/"
          className={cn(
            "absolute left-1/2 -translate-x-1/2 text-2xl font-bold tracking-tight text-brand",
            playfair.className
          )}
        >
          Wanderlust
        </Link>

        {/* Right: profile + auth links */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/profile"
            className="flex items-center gap-1.5 text-sm text-foreground hover:text-foreground/70"
          >
            <User className="size-4" />
            Profile
          </Link>
          {authItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-foreground hover:text-foreground/70"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}

export { Navbar }
