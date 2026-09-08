import PolicyHero from "../components/legal/PolicyHero";
import PolicyContent from "../components/legal/PolicyContent";

const sections = [
  {
    heading: "Acceptance of Terms",
    body: "By accessing and using this website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.",
  },
  {
    heading: "Our Services",
    body: "SM Agro and Clothes Industries OPC Pvt Ltd provides agricultural produce sourcing and textile/garment manufacturing services. Details of specific products, pricing, and availability are confirmed directly with our team upon inquiry.",
  },
  {
    heading: "Orders and Inquiries",
    body: "Submitting a form or message through this website does not constitute a binding order. All orders are confirmed separately through direct communication and mutual agreement on terms, pricing, and delivery timelines.",
  },
  {
    heading: "Intellectual Property",
    body: "All content on this website, including text, images, and design, is the property of SM Agro and Clothes Industries OPC Pvt Ltd unless otherwise stated, and may not be reproduced without permission.",
  },
  {
    heading: "Limitation of Liability",
    body: "We strive to keep information on this website accurate and up to date, but we make no warranties about the completeness or accuracy of the content. We are not liable for any losses arising from reliance on this website's content.",
  },
  {
    heading: "Governing Law",
    body: "These Terms of Service are governed by the laws of India. Any disputes shall be subject to the jurisdiction of the applicable courts.",
  },
  {
    heading: "Changes to These Terms",
    body: "We reserve the right to update these Terms of Service at any time. Continued use of the website after changes constitutes acceptance of the revised terms.",
  },
  {
    heading: "Contact Us",
    body: "For any questions regarding these Terms of Service, please contact us at santoshmarnenew@gmail.com or +91 93735 34976.",
  },
];

const Terms = () => {
  return (
    <>
      <PolicyHero
        title="Terms of Service"
        subtitle="Last updated: September 2026"
      />
      <PolicyContent sections={sections} />
    </>
  );
};

export default Terms;