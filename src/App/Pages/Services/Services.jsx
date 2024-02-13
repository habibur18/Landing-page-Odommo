import React from "react";
import PageTitle from "../../../ReuseableComponents/PageTitle";
import ServiceHighlightsSection from "../../../ReuseableComponents/ServiceHighlightsSection";
import ServiceTile from "../../../ReuseableComponents/ServiceTile ";
import TeamMember from "../../../ReuseableComponents/TeamMember";
import PartnerWithUs from "../Home/PartnerWithUs";

const Services = () => {
  return (
    <div>
      <PageTitle title="Services" src="https://i.postimg.cc/Y9T9bzgX/contactus.png" />
      <main>
        <div className="max-w-[1350px] px-10 lg:px-[100px] 2xl:px-0 mx-auto my-24">
          <div className="flex flex-col md:flex-row gap-10">
            <h1 className="text-4xl font-bold flex-[0.5]">Services We’re Offering</h1>
            <p className="flex-[0.5]">Hello, and welcome to Odommo, your partner in digital success! Established in February 2020, our story is one of growth, collaboration, and a relentless pursuit of excellence. As a team, we've weathered the evolving landscape of digital services, emerging stronger with each challenge.</p>
          </div>
        </div>

        <section className="space-y-20">
          <ServiceTile />
          <ServiceHighlightsSection />
          <TeamMember />
          <PartnerWithUs />
        </section>
      </main>
    </div>
  );
};

export default Services;
