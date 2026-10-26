import { Card } from "./ui/card";
import Image from "next/image";
import {
  CalendarDays,
  CheckCircle2,
  Eye,
  MapPin,
  Trash,
} from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface BookingType {
  _id: string;
  userName: string;
  email: string;
  image: string;
  destinationName: string;
  country: string;
  category: string;
  price: string;
  duration: string;
  departureDate: string;
  description: string;
  bookingDate: string;
}

const MyBookingCard = ({ booking }: { booking: BookingType }) => {
  return (
        <Card
            key={booking._id}
            className="flex flex-col gap-4 rounded-none border-gray-200 p-4 shadow-sm sm:flex-row sm:items-center"
          >
            {/* Destination Image */}
            <div className="relative h-44 w-full shrink-0 overflow-hidden sm:h-[148px] sm:w-[262px]">
              <Image
                src={booking.image}
                alt={booking.destinationName}
                fill
                sizes="(max-width: 640px) 100vw, 262px"
                className="object-cover"
              />
            </div>

            {/* Booking Information */}
            <div className="flex min-w-0 flex-1 flex-col">
              <div>
                <Badge className="mb-1 gap-1 rounded-full border-0 bg-green-50 px-3 py-1 text-xs font-normal text-green-700 hover:bg-green-50">
                  <CheckCircle2 size={13} />
                  Confirmed
                </Badge>

                <h2 className="font-serif text-2xl font-semibold tracking-tight text-gray-900">
                  {booking.destinationName}
                </h2>

                <div className="mt-2 space-y-2 text-xs text-gray-500">
                  <p className="flex items-center gap-1.5">
                    <CalendarDays size={13} />
                    Departure: {booking.departureDate}
                  </p>

                  <p className="flex items-center gap-1.5">
                    <MapPin size={13} />
                    Booking ID: {booking._id}
                  </p>
                </div>
              </div>

              <p className="mt-2 text-2xl font-medium tracking-tight text-cyan-600">
                ${booking.price}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex shrink-0 items-center gap-2 sm:self-end">
              <Button
                variant="outline"
                className="h-8 rounded-none border-red-400 px-3 text-xs font-normal text-red-500 hover:bg-red-50 hover:text-red-600"
              >
                <Trash size={14} />
                Cancel
              </Button>

              <Button className="h-8 rounded-none bg-cyan-600 px-4 text-xs font-normal text-white hover:bg-cyan-700">
                <Eye size={14} />
                View
              </Button>
            </div>
          </Card>
  );
};

export default MyBookingCard;
