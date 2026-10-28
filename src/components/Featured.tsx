import FeaturedCarouselPage from "./FeaturedCarouselPage";

const Featured = async () => {
  const res = await fetch("http://localhost:8000/featured-destination");
  if (!res.ok) {
    throw new Error("Failed to fetch featured destinations");
  }
  const data = await res.json();
  return (
    <div>
        <FeaturedCarouselPage destinations={data} />
    </div>
  )
};

export default Featured;
