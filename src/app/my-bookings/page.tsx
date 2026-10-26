import MyBookingCard from '@/components/MyBookingCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

interface BookingsType {
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


const MyBookingsPage = async() => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user
    const res = await fetch(`http://localhost:8000/my-bookings/${user?.email}`)
    const bookings:BookingsType[] = await res.json()
    
    return (
        <main className="mx-auto min-h-screen max-w-6xl px-5 py-8">
      {/* Page Heading */}
      <div className="mb-7">
        <h1 className="font-serif text-4xl tracking-tight text-gray-900">
          My Bookings
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Manage and view your upcoming travel plans
        </p>
      </div>

      {/* Booking List */}
      <div className="space-y-4">
        {bookings.map((booking) => {
            return (
                <MyBookingCard key={booking._id} booking={booking} />
            )
        })}
      </div>
    </main>
    );
};

export default MyBookingsPage;