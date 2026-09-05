import Hero from "../components/home/Hero";
import CompanyIntro from "../components/home/CompanyIntro";
import DivisionsShowcase from "../components/home/DivisionsShowcase";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ProcessSection from "../components/home/ProcessSection";
import FAQSection from "../components/home/FAQSection";
import CTASection from "../components/home/CTASection";

const Home = () => {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <DivisionsShowcase />
      <WhyChooseUs />
      <ProcessSection />
      <FAQSection />
      <CTASection />
    </>
  );
};

export default Home;