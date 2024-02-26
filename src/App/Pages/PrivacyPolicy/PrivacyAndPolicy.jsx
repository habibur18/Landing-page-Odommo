import React from "react";
import { Link } from "react-router-dom";

const PrivacyAndPolicy = () => {
  // Define data object
  const privacyPolicyData = {
    sections: [
      {
        title: "Information We Collect",
        items: [
          {
            title: "Personal Information",
            content: "When you visit Odommo.xyz or engage with our services, we may collect personal information, including but not limited to your name, email address, phone number, and other relevant details. This information is collected with your explicit consent and is crucial for the provision of our diverse range of services.",
          },
          {
            title: "Data Usage",
            content: "In addition to personal information, we gather non-personal information such as the type of browser you use, your device's operating system, and your IP address. This data is instrumental in refining our website and services to offer an enhanced user experience.",
          },
        ],
      },
      {
        title: "How We Use Your Information",
        items: [
          {
            title: "Providing Specialized Services",
            content: "Odommo.xyz offers a spectrum of services, including domain registration, web design, mobile app development, SEO, digital marketing, graphic design, UI/UX design, SMS marketing, international/subscription payment solutions, e-commerce solutions, customer support services, and analytics and data services. Your personal information is utilized to deliver these services effectively.",
          },
          {
            title: "Communication",
            content: "We may use the contact information you provide to communicate with you regarding our services, promotions, and updates. You have the option to opt-out of these communications at any time.",
          },
          {
            title: "Analytics",
            content: "To continually enhance our services, we analyze aggregated, non-personal data related to usage patterns and trends. This assists us in tailoring our offerings to meet your evolving needs.",
          },
          {
            title: "Sharing Your Information",
            content: "At Odommo.xyz, we prioritize the confidentiality of your information. We do not sell, trade, or transfer your personal information to third parties without your explicit consent. Trusted partners who aid us in providing our services may be granted access to your data.",
          },
          {
            title: "Security Measures",
            content: "The security of your information is paramount. Odommo.xyz employs industry-standard measures to guard against unauthorized access, alteration, disclosure, or destruction of your personal data.",
          },
          {
            title: "Changes to this Privacy Policy",
            content: "You retain the right to access, update, or delete your personal information. If you have any concerns about your privacy, please reach out to us using the contact information provided at the end of this policy.",
          },
          {
            title: "Your Choices",
            content: "Odommo.xyz reserves the right to update this Privacy Policy periodically to reflect changes in our services or legal requirements. We encourage you to review this page regularly for the latest information.",
          },
        ],
      },
    ],
    contactInformation: {
      email: "o4OgO@example.com",
      phone: "+880 123 456 789",
      address: "123 Main Street, Anytown, USA",
    },
  };

  return (
    <main className="max-w-[1350px] px-10 lg:px-[80px] 2xl:px-0 mx-auto pt-[120px]">
      <div className="flex items-center gap-5 mt-[90px] mb-[48px]">
        <Link to="/" className="text-[18px] cursor-pointer">
          Home
        </Link>
        <i className="fa-solid fa-arrow-right text-[#777777]"></i>
        <p className="text-[#777777]">Terms & Conditions</p>
      </div>
      <h1 className="text-4xl font-bold">Privacy Policy</h1>
      <p className="mt-8">Your privacy is of utmost importance to us. This Privacy Policy is intended to provide you with comprehensive details on how Odommo.xyz collects, uses, shares, and safeguards your personal information. By accessing our website and utilizing our services, you agree to the terms outlined in this policy.</p>
      <article className="mt-8 text-justify">
        {privacyPolicyData.sections.map((section, index) => (
          <div key={index} className="mt-8">
            <h3 className="text-2xl font-bold">{section.title}</h3>
            {section.items.map((item, subIndex) => (
              <div key={subIndex} className="mt-4">
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        ))}
        <div className="mt-8">
          <p>Contact Odommo.xyz </p>
          <p>If you have any questions or concerns regarding our Privacy Policy, please contact us at:</p>
          <div className="mt-4">
            <h4 className="text-lg font-semibold">Odommo.xyz Contact Information:</h4>
            <p>Email: {privacyPolicyData.contactInformation.email}</p>
            <p>Phone: {privacyPolicyData.contactInformation.phone}</p>
            <p>Address: {privacyPolicyData.contactInformation.address}</p>
          </div>
          <p className="mt-4">Thank you for choosing Odommo.xyz!</p>
        </div>
      </article>
    </main>
  );
};

export default PrivacyAndPolicy;
