import React from "react";
import ServiceHighlightsSection from "../../../ReuseableComponents/ServiceHighlightsSection";
import ServiceTile from "../../../ReuseableComponents/ServiceTile ";
import TeamMember from "../../../ReuseableComponents/TeamMember";
import BussinessSection from "./BussinessSection";
import ClientsReviews from "./ClientsReviews";
import HeroSection from "./HeroSection";
import PartnerWithUs from "./PartnerWithUs";
import PartnersMarquee from "./PartnersMarquee";
import Portfolio from "./Portfolio/Portfolio";
import RecentBlog from "./RecentBlog";
import SearchDomain from "./SearchDomain";

export default function Home() {
  return (
    <div className="space-y-[80px]">
      <HeroSection />
      <BussinessSection />
      <ServiceTile title="Our Best Services" button={true} />
      <ServiceHighlightsSection />
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
