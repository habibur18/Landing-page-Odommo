import React from "react";
import BussinessSection from "./BussinessSection";
import ClientsReviews from "./ClientsReviews";
import HeroSection from "./HeroSection";
import PartnerWithUs from "./PartnerWithUs";
import PartnersMarquee from "./PartnersMarquee";
import Portfolio from "./Portfolio/Portfolio";
import RecentBlog from "./RecentBlog";
import SearchDomain from "./SearchDomain";
import ServiceHighlights from "./ServiceHighlights";
import Services from "./Services";
import TeamMember from "./TeamMember";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BussinessSection />
      <Services />
      <ServiceHighlights />
      <SearchDomain />
      <ClientsReviews />
      <Portfolio />
      <TeamMember />
      <PartnerWithUs />
      <RecentBlog />
      <PartnersMarquee />
    </div>
  );
}
