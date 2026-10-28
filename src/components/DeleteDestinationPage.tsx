'use client'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { getTokenFromClient } from "@/lib/getTokenFromClient";
import { AlertTriangle, Trash, X } from "lucide-react";
import { redirect } from "next/navigation";

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

const DeleteDestinationPage = ({destination}:{destination:DestinationDetailsPageType}) => {
    const handleDelete = async() => {
      const token = await getTokenFromClient()
        const res = await fetch(`http://localhost:8000/destination/${destination._id}`, {
            method: "DELETE",
            headers: {
              authorization: `Bearer ${token}`
            }
        })
        const data = await res.json()
        redirect('/destinations')
    }
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded border border-red-300 px-4 py-2 text-sm text-red-500 hover:bg-red-50"
          >
            <Trash size={15} />
            Delete
          </button>
        }
      />

      <AlertDialogContent className="max-w-[640px] gap-0 rounded-none border-0 bg-white p-0 text-gray-900 shadow-xl">
        {/* Header */}
        <AlertDialogHeader className="relative px-10 pt-10 text-left">
          <AlertDialogTitle className="flex items-center gap-3 font-serif text-2xl font-normal tracking-tight">
            <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-red-50">
              <AlertTriangle className="size-7 text-red-500" />
            </span>
            Delete Travel Package
          </AlertDialogTitle>

          {/* Close button */}
          <AlertDialogCancel
            aria-label="Close dialog"
            className="absolute right-5 top-4 size-8 border-0 bg-transparent p-0 text-gray-400 shadow-none hover:bg-gray-100 hover:text-gray-700"
          >
            <X className="size-6" />
            <span className="sr-only">Close</span>
          </AlertDialogCancel>

          <AlertDialogDescription className="pt-1 text-base leading-relaxed text-gray-500">
            Are you sure you want to delete{" "}
            <span className="font-semibold text-black">{destination.destinationName}</span>? This action
            cannot be undone and will permanently remove this travel package
            from the system.
          </AlertDialogDescription>
        </AlertDialogHeader>

        {/* Footer buttons */}
        <AlertDialogFooter className="flex-row justify-end gap-4 border-0 bg-transparent px-10 pb-10 pt-10 shadow-none">
          <AlertDialogCancel className="h-[60px] min-w-[108px] rounded-none border border-gray-200 bg-white px-6 text-base text-gray-600 hover:bg-gray-50">
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction onClick={handleDelete} className="h-[60px] min-w-[210px] rounded-none bg-red-500 px-6 text-base font-medium text-white hover:bg-red-600">
            <Trash className="mr-2 size-5" />
            Delete Package
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteDestinationPage;
