import Image from "next/image";
import HeroSection from "./_components/HeroSection";
import AboutUs from "./_components/AboutUs";

export default function Home() {
  return (
   <div>
    <HeroSection />
    <AboutUs/>
   </div>
  );
}
