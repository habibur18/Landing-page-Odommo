import React from "react";
import BussinessSection from "../Components/Home/BussinessSection";
import ClientsReviews from "../Components/Home/ClientsReviews";
import HeroSection from "../Components/Home/HeroSection";
import PartnerWithUs from "../Components/Home/PartnerWithUs";
import PartnersMarquee from "../Components/Home/PartnersMarquee";
import RecentBlog from "../Components/Home/RecentBlog";
import SearchDomain from "../Components/Home/SearchDomain";
import ServiceHighlights from "../Components/Home/ServiceHighlights";
import Services from "../Components/Home/Services";
import TeamMember from "../Components/Home/TeamMember";
import Footer from "../Components/Shared/Footer";
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
      <TeamMember />
      <PartnerWithUs />
      <RecentBlog />
      <PartnersMarquee />
      <Footer />
    </div>
  );
}
