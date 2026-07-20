import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Quote } from "@/components/Quote";
import { OurStory } from "@/components/OurStory";
import { WeddingInfo } from "@/components/WeddingInfo";
import { DressCode } from "@/components/DressCode";
import { Timeline } from "@/components/Timeline";
import { Gallery } from "@/components/Gallery";
import { FAQ } from "@/components/FAQ";
import { RSVP } from "@/components/RSVP";
import { Registry } from "@/components/Registry";
import { Closing } from "@/components/Closing";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Quote />
        <OurStory />
        <WeddingInfo />
        <DressCode />
        <Timeline />
        <Gallery />
        <FAQ />
        <RSVP />
        <Registry />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
