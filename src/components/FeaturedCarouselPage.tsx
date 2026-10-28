"use client";

import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { MapPin, CalendarDays, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Destination {
  _id: string;
  destinationName: string;
  country: string;
  category: string;
  price: string;
  duration: string;
  departureDate: string;
  image: string;
  description: string;
}

const FeaturedCarouselPage = ({destinations,}: {destinations: Destination[]}) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [api, setApi] = useState<CarouselApi>();


  return (
    <section className="mx-auto max-w-7xl overflow-hidden px-6 py-10">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-medium tracking-tight text-gray-900 md:text-3xl">
            Featured Destinations
          </h2>

          <p className="mt-1 text-xs text-gray-500">
            Handpicked travel experiences for the adventure seekers
          </p>
        </div>

        <Link
          href="/destinations"
          className="flex shrink-0 items-center gap-3 border border-sky-300 px-3 py-2 text-[10px] uppercase tracking-wide text-sky-600 transition hover:bg-sky-50"
        >
          All Destinations
          <ArrowRight size={14} />
        </Link>
      </div>

      {/* Carousel */}
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-3">
          {destinations.map((destination) => (
            <CarouselItem
              key={destination._id}
              className="basis-full pl-3 sm:basis-1/2 lg:basis-[47%]"
            >
              <div className="group">
                {/* Image */}
                <div className="relative h-52 overflow-hidden md:h-60">
                  <Image
                    src={destination.image}
                    alt={destination.destinationName}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute right-3 top-3 bg-white/90 px-2 py-1 text-xs font-semibold text-gray-900">
                    4.5 ★
                  </span>
                </div>

                {/* Destination Details */}
                <div className="pt-3">
                  <div className="mb-1 flex items-center gap-1 text-[11px] text-gray-500">
                    <MapPin size={12} />
                    {destination.country.trim()}
                  </div>

                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        {destination.destinationName}
                      </h3>

                      <p className="mt-1 text-xs text-gray-500">
                        {destination.category}
                      </p>
                    </div>

                    <p className="shrink-0 text-sm font-medium text-gray-900">
                      ${destination.price}
                    </p>
                  </div>

                  <div className="mt-2 flex items-center gap-1 text-[11px] text-gray-500">
                    <CalendarDays size={12} />
                    {destination.duration}
                  </div>

                  <Link
                    href={`/destinations/${destination._id}`}
                    className="mt-3 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-wide text-sky-600 hover:text-sky-800"
                  >
                    Book Now
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation */}
        <div className="mt-6 flex items-center gap-3">
          <span className="shrink-0 text-sm text-gray-800">
            {destinations.length > 0 ? currentSlide : 0}/{destinations.length}
          </span>

          <div className="h-px flex-1 bg-gray-200" />

          <CarouselPrevious className="static size-8 translate-y-0 rounded-full border-gray-200" />

          <CarouselNext className="static size-8 translate-y-0 rounded-full border-gray-200" />
        </div>
      </Carousel>
    </section>
  );
};

export default FeaturedCarouselPage;
