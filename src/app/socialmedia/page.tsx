import AboutUs from "@/components/AboutUs";
import Customers from "@/components/Customers";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import GlobalBrands from "@/components/GlobalBrands";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroSocial from "@/components/HeroSocial";
import OurResults from "@/components/OurResults";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import React from "react";

export default function SocialMedia() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header isEn={true}/>
      <HeroSocial />
      <Customers />
      <AboutUs isEn={true} />
      <Stats isEn={true} />
      <Services isEn={true} />
      <OurResults />
      <Testimonials isEn={true} />
            {/* <GlobalBrands />
            <FAQ /> */}
            {/* <CTA /> */}
            <Footer isEn={true}/>
    </div>
  );
}
