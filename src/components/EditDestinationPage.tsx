'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import * as React from "react"
import { SquarePen, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation";
const categories = [
  "Beach",
  "Mountain",
  "City",
  "Adventure",
  "Cultural",
  "Wildlife",
]

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

const EditDestinationPage = ({destination}:{destination:DestinationType}) => {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
     async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        
        const formData = new FormData(event.currentTarget)
        const destinationData = Object.fromEntries(formData.entries())
        
        const res = await fetch(`http://localhost:8000/destination/${destination._id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(destinationData)
        });
        const result = await res.json();
        console.log(result);
        router.refresh()
        setOpen(false)
      }
    
      function handleCancel(event: React.MouseEvent<HTMLButtonElement>) {
        event.currentTarget.form?.reset()
      }
    
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
          
            Edit✎
          </DialogTrigger>
      <DialogContent className="min-w-lg">
        <DialogHeader>
          <DialogTitle>Edit Destination</DialogTitle>
          <DialogDescription>
                    Update your destination information below.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Destination Name */}
            <div className="space-y-1.5">
              <Label
                htmlFor="destination-name"
                className="text-xs font-semibold"
              >
                Destination Name
              </Label>
              <Input
                id="destination-name"
                name="destinationName"
                placeholder="Bali Paradise"
                className="border-transparent bg-muted"
                defaultValue={destination.destinationName}
              />
            </div>

            {/* Country + Category */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="country" className="text-xs font-semibold">
                  Country
                </Label>
                <Input
                  id="country"
                  name="country"
                  placeholder="Indonesia"
                  className="border-transparent bg-muted"
                  defaultValue={destination.country}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="category" className="text-xs font-semibold">
                  Category
                </Label>
                <Select name="category">
                  <SelectTrigger
                    id="category"
                    className="w-full border-transparent bg-muted"
                  >
                    <SelectValue placeholder="Beach" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Price + Duration */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="price" className="text-xs font-semibold">
                  Price (USD)
                </Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  min={0}
                  placeholder="e.g., 1299"
                  className="border-transparent bg-muted"
                  defaultValue={destination.price}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="duration" className="text-xs font-semibold">
                  Duration
                </Label>
                <Input
                  id="duration"
                  name="duration"
                  placeholder="e.g., 7 Days/6 Nights"
                  className="border-transparent bg-muted"
                  defaultValue={destination.duration}
                />
              </div>
            </div>

            {/* Departure Date */}
            <div className="space-y-1.5">
              <Label htmlFor="departure-date" className="text-xs font-semibold">
                Departure Date
              </Label>
              <Input
                id="departure-date"
                name="departureDate"
                type="date"
                className="border-transparent bg-muted"
                defaultValue={destination.departureDate}
              />
            </div>

            {/* Image URL */}
            <div className="space-y-1.5">
              <Label htmlFor="image-url" className="text-xs font-semibold">
                Image URL
              </Label>
              <Input
                id="image-url"
                name="image"
                type="url"
                placeholder="https://example.com/image.jpg"
                className="border-transparent bg-muted" defaultValue={destination.image}
              />
            </div>

            {/* Description */}
            <div className="space-y-1.5">
              <Label htmlFor="description" className="text-xs font-semibold">
                Description
              </Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Describe the travel experience..."
                className="min-h-20 border-transparent bg-muted" defaultValue={destination.description}
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-2">
              <Button onClick={handleCancel}
                type="button"
                
                size="lg"
                className="border-destructive/30 bg-background text-xs font-semibold text-destructive hover:bg-destructive/10 hover:text-destructive"
              >
                <Trash className="size-4" />
                Cancel
              </Button>
              <Button
                type="submit"
                size="lg"
                className="bg-brand text-xs font-semibold text-white hover:bg-brand/90"
              >
                <SquarePen className="size-4" />
                Edit Travel Package
              </Button>
            </div>
          </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditDestinationPage;
