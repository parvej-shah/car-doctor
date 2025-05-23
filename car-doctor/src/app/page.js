import Image from "next/image";
import HeroSection from "./_components/HeroSection";
import AboutUs from "./_components/AboutUs";
import ServicesSection from "./_components/ServicesSection";
import ContactInfoSection from "./_components/ContactInfoSection";
import ProductsSection from "./_components/ProductsSection";
import TeamSection from "./_components/TeamSection";
import FeaturesSection from "./_components/FeaturesSection";
import TestimonialSection from "./_components/TestimonialSection";

export default function Home() {
  return (
   <div>
    <HeroSection />
    <AboutUs/>
    <ServicesSection/>
    <ContactInfoSection/>
    <ProductsSection/>
    <TeamSection/>
    <FeaturesSection/>
    <TestimonialSection/>
   </div>
  );
}
