import React from "react";
import PageTitle from "../../../ReuseableComponents/PageTitle";
import SectionWithImage from "../../../ReuseableComponents/SectionWithImage";
import ServiceHighlightsSection from "../../../ReuseableComponents/ServiceHighlightsSection";
import ServiceTile from "../../../ReuseableComponents/ServiceTile ";
import TeamMember from "../../../ReuseableComponents/TeamMember";
import PartnerWithUs from "../Home/PartnerWithUs";
const AboutUs = () => {
  return (
    <div className="mt-20">
      <PageTitle title="About Us" src="https://i.postimg.cc/Y9T9bzgX/contactus.png" />
      <section className="max-w-[1350px] px-10 lg:px-[100px] 2xl:px-0 mx-auto">
        <SectionWithImage
          title="Our Story"
          description="Hello, and welcome to Odommo, your partner in digital success! Established in February 2020, our story is one of growth, collaboration, and a relentless pursuit of excellence. As a team, we've weathered the evolving landscape of digital services, emerging stronger with each challenge.
"
          imageUrl="https://i.postimg.cc/XBB1zdRn/our-story.png"
          buttonText="Read More"
          reverse={false}
        />
        <SectionWithImage
          title="Our Mission"
          description="Odommo is on a mission to empower businesses with transformative digital solutions. Our dedication is rooted in using technology as a catalyst for growth, improving user experiences, and building enduring connections with our clients.

"
          imageUrl="https://i.postimg.cc/CZJ2BFCp/our-mission.png"
          buttonText="Read More"
          reverse={true}
        />
        <SectionWithImage
          title="Our Vission"
          description="We envision a digital realm that transcends boundaries, embracing inclusivity and innovation. Odommo aspires to be a trailblazer, shaping the future of digital services and setting new standards in creativity and client satisfaction.



"
          imageUrl="https://i.postimg.cc/ftrgCBgH/our-vistion.png"
          buttonText="Read More"
          reverse={false}
        />
      </section>
      <section>
        <ServiceHighlightsSection />
        <ServiceTile title="Our Best Services" button={true} />
        <div className="mt-[99px]"></div>
        <TeamMember />
        <PartnerWithUs />
      </section>
    </div>
  );
};

export default AboutUs;
