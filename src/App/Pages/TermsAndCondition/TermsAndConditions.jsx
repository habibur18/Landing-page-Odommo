import React from "react";

const TermsAndConditions = () => {
  const termsAndConditionsData = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing or using the Odommo XYZ website or any of our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.",
    },
    {
      title: "2. Services Offered",
      content: "Odommo XYZ provides a range of IT services, including but not limited to web development, mobile app development, SEO and digital marketing, graphic design, UI and UX design, SMS marketing, international subscription payment solutions, e-commerce solutions, customer support services, and analytics services.",
    },
    {
      title: "3. User Responsibilities",
      content: "As a user of our services, you are responsible for maintaining the confidentiality of your account information, including your username and password. You are also responsible for all activities that occur under your account.",
    },
    {
      title: "4. Privacy Policy",
      content: "Your privacy is important to us. Our Privacy Policy outlines how we collect, use, disclose, and manage your personal information. By using our services, you consent to the practices outlined in our Privacy Policy.",
    },
    {
      title: "5. Intellectual Property",
      content: "All content on the Odommo XYZ website, including but not limited to text, graphics, logos, and images, is the property of Odommo XYZ and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or use any content without our written permission.",
    },
    {
      title: "6. Payment and Billing",
      subSections: [
        {
          title: "6.1 Service-Specific Payment Terms",
          content: "For specific services offered by Odommo XYZ, clients are required to adhere to a two-step payment process:",
        },
        {
          title: "6.1.1 Advance Payment (50%)",
          content: "Upon agreement to proceed with a specific service, the client is obligated to make an advance payment of 50% of the total service cost. This payment is non-refundable and is intended to secure the client's spot in our service queue.",
        },
        {
          title: "6.1.2 Final Payment (50%)",
          content: "The remaining 50% of the service cost is due upon completion of the agreed-upon service. Odommo XYZ will notify the client upon successful completion of the service, and the client is required to make the final payment within 7 working days from the date of the notification. After the successful payment we provide the full access of the service to the buyer.",
        },
        {
          title: "6.2 Payment Methods",
          content: "Clients can make payments using the methods specified on our website. Odommo XYZ may, at its discretion, offer alternative payment arrangements based on mutual agreement between the client and Odommo XYZ.",
        },
        {
          title: "6.3 Late Payments",
          content: "Failure to make the final payment within the specified timeframe may result in a delay in the delivery of additional services or, in extreme cases, suspension of services until payment is received.",
        },
        {
          title: "6.4 Refund Policy",
          content: "The advance payment is non-refundable, as it is intended to cover initial project setup costs and reserve the client's service slot. However, if Odommo XYZ fails to deliver the agreed-upon service, then Odommo XYZ's refund for the advance payment.",
        },
      ],
    },
    {
      title: "7. Disclaimer of Warranties",
      content: "While we strive to provide high-quality services, Odommo XYZ makes no warranties or representations about the accuracy or completeness of the content on our website. Your use of our services is at your own risk.",
    },
    {
      title: "8. Limitation of Liability",
      subSections: [
        {
          title: "8.1 Services Delivery",
          content: "Upon successful delivery of the agreed-upon services, Odommo XYZ shall not be held liable for any damages, losses, or issues that may arise thereafter.",
        },
        {
          title: "8.2 Post-Delivery Client Responsibilities",
          content: "Once the services have been delivered, it is the responsibility of the client to thoroughly review and assess the provided deliverables. Any issues or concerns related to the delivered services must be communicated to Odommo XYZ within [X] days from the date of delivery.",
        },
        {
          title: "8.3 Exclusion of Damages",
          content: "Odommo XYZ shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use or inability to use the delivered services, including but not limited to damages for loss of profits, goodwill, data, or other intangible losses.",
        },
        {
          title: "8.4 Client Acknowledgment",
          content: "By accepting the delivered services, the client acknowledges and agrees that Odommo XYZ's liability, if any, for damages, regardless of the form of action, shall be limited to the amount paid by the client for the specific services that gave rise to the claim.",
        },
      ],
    },
    {
      title: "9. Modification of Terms",
      content: "We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services after any modifications indicate your acceptance of the updated terms.",
    },
  ];

  return (
    <div className="max-w-[1350px] px-10 lg:px-[80px] 2xl:px-0 mx-auto pt-[120px] [&>div>p]:text-[#666666]">
      <div>
        <h1 className="text-4xl font-bold">Terms & Conditions</h1>
        <p className="my-20">Welcome to Odommo XYZ! We're delighted to have you on board. Before you dive into exploring our services, please take a moment to read through our Terms and Conditions. By using our website and services, you agree to comply with and be bound by these terms. If you disagree with any part of these terms, please refrain from using our services.</p>
      </div>

      {termsAndConditionsData.map((section, index) => (
        <div key={index} className="mt-8 text-justify">
          <h4 className="text-xl font-semibold">{section.title}</h4>
          <p className="mt-2">{section.content}</p>

          {section.subSections && (
            <div className="ml-4 mt-4">
              {section.subSections.map((subSection, subIndex) => (
                <div key={subIndex} className="mt-4">
                  <h4 className="text-xl font-semibold">{subSection.title}</h4>
                  <p className="mt-2">{subSection.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      <p className="mt-20 pb-10 text-[#666666]">If you have any questions or concerns about these Terms and Conditions, please contact us. Thank you for choosing Odommo XYZ! We're excited to embark on this journey with you.</p>
    </div>
  );
};

export default TermsAndConditions;
