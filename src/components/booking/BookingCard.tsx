"use client";
import { useSession } from "@/lib/auth-client";

interface DestinationType {
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

const BookingCard = ({ destination }: {destination:DestinationType}) => {
  const { data: session } = useSession();
  const user = session?.user;

  const handleBooking = async (e:React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const departureDate = e.target.departureDate.value;

    const data = {
        userName: user?.name,
        email: user?.email,
        userImage: user?.image,
        ...destination,
        departureDate,
        bookingDate: new Date()
    }
    const res = await fetch('http://localhost:8000/booking', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });
    const result = await res.json();
    console.log(result)
  };
  return (
    <div>
      <div className="mb-5">
        <label className="mb-2 block text-sm text-gray-500">
          Departure date
        </label>
      </div>
      <form onSubmit={handleBooking}>
        <input
          name="departureDate"
          type="date"
          defaultValue={destination.departureDate}
          className="w-full rounded border border-gray-200 bg-gray-50 px-3 py-3 text-sm text-gray-700 outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-cyan-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-cyan-700"
        >
          Book Now →
        </button>
      </form>
    </div>
  );
};

export default BookingCard;
