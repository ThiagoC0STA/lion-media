import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GlobalBrands from "@/components/GlobalBrands";
import AboutUs from "@/components/AboutUs";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <GlobalBrands />
      <AboutUs />
      <Stats />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
