import Link from "next/link"
import { Compass } from "lucide-react"

function NotFound() {
  return (
    <section className="flex min-h-[60vh] w-full flex-col items-center justify-center px-4 py-16 text-center">
      <span className="flex size-16 items-center justify-center rounded-full bg-brand/10">
        <Compass className="size-8 text-brand" />
      </span>

      <p className="mt-6 text-sm font-semibold tracking-widest text-brand uppercase">
        404
      </p>
      <h1 className="mt-2 text-3xl tracking-tight sm:text-4xl">
        Destination Not Found
      </h1>
      <p className="mt-3 max-w-md text-sm text-muted-foreground sm:text-base">
        This destination does not exist, or it may have been removed. Let us
        get you back to exploring.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/destinations"
          className="inline-flex h-11 items-center rounded-md bg-brand px-6 text-xs font-semibold tracking-wider text-white uppercase hover:bg-brand/90"
        >
          Back to Destinations
        </Link>
        <Link
          href="/"
          className="inline-flex h-11 items-center rounded-md border border-input px-6 text-xs font-semibold tracking-wider text-foreground uppercase hover:bg-muted"
        >
          Go Home
        </Link>
      </div>
    </section>
  )
}

export default NotFound
