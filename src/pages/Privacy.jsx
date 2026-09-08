import PolicyHero from "../components/legal/PolicyHero";
import PolicyContent from "../components/legal/PolicyContent";

const sections = [
  {
    heading: "Introduction",
    body: "SM Agro and Clothes Industries OPC Pvt Ltd (\"we\", \"us\", \"our\") respects your privacy and is committed to protecting the personal information you share with us through this website.",
  },
  {
    heading: "Information We Collect",
    body: "We may collect information you provide directly to us, such as your name, email address, phone number, and message content when you fill out our contact form or reach out to us via WhatsApp.",
  },
  {
    heading: "How We Use Your Information",
    body: "We use the information collected solely to respond to your inquiries, process orders, and communicate with you about our products and services. We do not sell or rent your personal information to third parties.",
  },
  {
    heading: "Data Security",
    body: "We take reasonable measures to protect the information you share with us. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
  },
  {
    heading: "Third-Party Links",
    body: "Our website may contain links to third-party sites (such as social media platforms). We are not responsible for the privacy practices or content of these external sites.",
  },
  {
    heading: "Your Rights",
    body: "You may contact us at any time to request access to, correction of, or deletion of your personal information held by us.",
  },
  {
    heading: "Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised date.",
  },
  {
    heading: "Contact Us",
    body: "If you have any questions about this Privacy Policy, please reach out to us at santoshmarnenew@gmail.com or +91 93735 34976.",
  },
];

const Privacy = () => {
  return (
    <>
      <PolicyHero
        title="Privacy Policy"
        subtitle="Last updated: September 2026"
      />
      <PolicyContent sections={sections} />
    </>
  );
};

export default Privacy;