import React from "react";
import BussinessSection from "../Components/Home/BussinessSection";
import ClientsReviews from "../Components/Home/ClientsReviews";
import HeroSection from "../Components/Home/HeroSection";
import SearchDomain from "../Components/Home/SearchDomain";
import ServiceHighlights from "../Components/Home/ServiceHighlights";
import Services from "../Components/Home/Services";
import Navbar from "../Components/Shared/Navbar";

export default function Main() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <BussinessSection />
      <Services />
      <ServiceHighlights />
      <SearchDomain />
      <ClientsReviews />
    </div>
  );
}
