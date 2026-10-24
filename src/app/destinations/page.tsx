"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  CalendarDays,
  ArrowUpRight,
  Star,
  ChevronDown,
} from "lucide-react";

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

const AllDestinationsPage = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await fetch("http://localhost:8000/destinations");

        if (!res.ok) {
          throw new Error("Failed to fetch destinations");
        }

        const data = await res.json();

        // Supports either an array or a single destination object.
        setDestinations(Array.isArray(data) ? data : [data]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  const categories = [
    ...new Set(destinations.map((item) => item.category).filter(Boolean)),
  ];

  const filteredDestinations = destinations
    .filter((item) => {
      return category === "all" || item.category === category;
    })
    .filter((item) => {
      const price = Number(item.price);

      if (priceRange === "low") return price < 2000;
      if (priceRange === "medium") return price >= 2000 && price <= 5000;
      if (priceRange === "high") return price > 5000;

      return true;
    })
    .sort((a, b) => {
      if (sortBy === "low-high") {
        return Number(a.price) - Number(b.price);
      }

      if (sortBy === "high-low") {
        return Number(b.price) - Number(a.price);
      }

      if (sortBy === "name") {
        return a.destinationName.localeCompare(b.destinationName);
      }

      return 0;
    });

  return (
    <main className="min-h-screen bg-white px-5 py-10 text-neutral-900 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Page heading */}
        <header className="mb-7">
          <h1 className="text-3xl font-normal tracking-tight sm:text-4xl">
            Explore All Destinations
          </h1>

          <p className="mt-2 text-xs text-neutral-500">
            Find your perfect travel experience from our curated collection
          </p>
        </header>

        {/* Filters */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-0">
          <div className="relative">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-11 w-full appearance-none border border-neutral-200 bg-white px-3 pr-9 text-xs text-neutral-600 outline-none focus:border-sky-500 sm:border-r-0"
            >
              <option value="all">CATEGORY</option>
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-neutral-400" />
          </div>

          <div className="relative">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="h-11 w-full appearance-none border border-neutral-200 bg-white px-3 pr-9 text-xs text-neutral-600 outline-none focus:border-sky-500 sm:border-r-0"
            >
              <option value="all">PRICE RANGE</option>
              <option value="low">Under ৳2,000</option>
              <option value="medium">৳2,000 – ৳5,000</option>
              <option value="high">Above ৳5,000</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-neutral-400" />
          </div>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="h-11 w-full appearance-none border border-neutral-200 bg-white px-3 pr-9 text-xs text-neutral-600 outline-none focus:border-sky-500"
            >
              <option value="default">SORT BY</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-neutral-400" />
          </div>
        </div>

        {/* Results count */}
        <p className="mb-5 mt-4 text-xs text-neutral-500">
          Showing {filteredDestinations.length} destinations
        </p>

        {/* Destination cards */}
        {loading ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="animate-pulse">
                <div className="h-48 bg-neutral-100" />
                <div className="mt-3 h-4 w-2/3 bg-neutral-100" />
                <div className="mt-2 h-3 w-1/3 bg-neutral-100" />
              </div>
            ))}
          </div>
        ) : filteredDestinations.length === 0 ? (
          <div className="py-16 text-center">
            <h2 className="text-lg font-medium">No destinations found</h2>
            <p className="mt-2 text-sm text-neutral-500">
              Try changing your filters to find a destination.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDestinations.map((destination) => (
              <article key={destination._id} className="group min-w-0">
                {/* Destination image */}
                <div className="relative h-52 overflow-hidden bg-neutral-100 sm:h-36">
                  <Image
                    width={600}
                    height={600}
                    src={destination.image}
                    alt={destination.destinationName}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute right-2 top-2 flex items-center gap-1 bg-white/90 px-2 py-1 text-[10px] font-medium shadow-sm">
                    <span>4.5</span>
                    <Star className="h-3 w-3 fill-neutral-900 text-neutral-900" />
                  </div>
                </div>

                {/* Destination information */}
                <div className="pt-2">
                  <div className="flex items-center gap-1 text-[10px] text-neutral-500">
                    <MapPin className="h-3 w-3" />
                    <span>
                      {destination.country?.trim() || "Unknown country"}
                    </span>
                  </div>

                  <div className="mt-1 flex items-start justify-between gap-2">
                    <h2 className="text-sm font-medium">
                      {destination.destinationName}
                    </h2>

                    <p className="shrink-0 text-xs font-medium">
                      ৳{Number(destination.price).toLocaleString("en-BD")}
                      <span className="text-[9px] font-normal text-neutral-500">
                        /Person
                      </span>
                    </p>
                  </div>

                  <div className="mt-1 flex items-center gap-1 text-[10px] text-neutral-500">
                    <CalendarDays className="h-3 w-3" />
                    <span>{destination.duration}</span>
                  </div>

                  <Link
                    href={`/destinations/${destination._id}`}
                    className="mt-2 inline-flex items-center gap-1 text-[10px] font-medium text-sky-600 transition-colors hover:text-sky-800"
                  >
                    BOOK NOW
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default AllDestinationsPage;
