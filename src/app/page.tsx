import { Banner } from "@/components/Banner"
import { WhyChooseUs } from "@/components/WhyChooseUs"
import { Testimonials } from "@/components/Testimonials"
import { CallToAction } from "@/components/CallToAction"
import Featured from "@/components/Featured"


export default function Home() {
  return (
    <>
      <Banner />
      <Featured />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </>
  )
}
