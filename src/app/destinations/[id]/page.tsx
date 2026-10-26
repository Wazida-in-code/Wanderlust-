import BookingCard from "@/components/booking/BookingCard";
import DeleteDestinationPage from "@/components/DeleteDestinationPage";
import EditDestinationPage from "@/components/EditDestinationPage";
import { Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";


interface DestinationDetailsPageType {
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

const DestinationDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:8000/destination/${id}`);
  if (!res.ok) notFound()
  const destination: DestinationDetailsPageType = await res.json();

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-5 py-7">
      {/* Back button and actions */}
      <div className="mb-5 flex items-center justify-between">
        <Link
          href="/destinations"
          className="text-sm text-gray-500 transition hover:text-cyan-600"
        >
          ← Back to Destinations
        </Link>

        <div className="flex items-center gap-3">
            <span>
              <EditDestinationPage destination={destination} />
            </span>  
          <span>
            <DeleteDestinationPage destination={destination} />
          </span>
        </div>
      </div>

      {/* Destination image */}
      <div className="relative h-64 w-full overflow-hidden rounded-lg sm:h-80 lg:h-[360px]">
        <Image
          src={destination.image}
          alt={destination.destinationName}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1152px"
          className="object-cover"
        />
      </div>

      <div className="my-6 border-t border-gray-200" />

      {/* Destination information and booking card */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left side */}
        <section className="lg:col-span-2">
          <p className="mb-2 flex items-center gap-2 text-sm text-gray-500">
            <span>📍</span>
            {destination.country.trim()}
          </p>

          <div className="mb-3 flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              {destination.destinationName}
            </h1>

            <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700">
              {destination.category}
            </span>
          </div>

          <div className="mb-8 flex flex-wrap gap-4 text-sm text-gray-600">
            <p>
              <span className="font-semibold text-gray-900">
                ৳{Number(destination.price).toLocaleString("en-BD")}
              </span>{" "}
              <span>per person</span>
            </p>

            <p>◷ {destination.duration}</p>

            <p>▦ Departure: {destination.departureDate}</p>
          </div>

          {/* Overview */}
          <div className="mb-7">
            <h2 className="mb-3 text-xl font-medium text-gray-900">
              Overview
            </h2>

            <p className="text-sm leading-6 text-gray-500">
              {destination.description}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h2 className="mb-3 text-xl font-medium text-gray-900">
              Highlights
            </h2>

            <div className="grid grid-cols-1 gap-3 text-sm text-gray-600 sm:grid-cols-2">
              <p>✓ Explore {destination.destinationName}</p>
              <p>✓ Discover local attractions</p>
              <p>✓ Experience {destination.category.toLowerCase()} tourism</p>
              <p>✓ Enjoy your {destination.duration} trip</p>
            </div>
          </div>
        </section>

        {/* Right side: Booking card */}
        <aside className="h-fit rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Starting from</p>

          <h2 className="text-3xl font-semibold text-cyan-600">
            ৳{Number(destination.price).toLocaleString("en-BD")}
          </h2>

          <p className="mb-6 text-xs text-gray-500">per person</p>

          
          <BookingCard destination={destination} />
         
          <div className="mt-4 space-y-2 text-xs text-gray-500">
            <p>✓ Explore beautiful destinations</p>
            <p>✓ Plan your next adventure</p>
            <p>✓ Travel information included</p>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default DestinationDetailsPage;
