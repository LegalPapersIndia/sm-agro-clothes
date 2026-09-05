import AgroHero from "../components/agro/AgroHero";
import AgroOverview from "../components/agro/AgroOverview";
import ProductCategories from "../components/agro/ProductCategories";
import SourcingProcess from "../components/agro/SourcingProcess";
import WhyChooseAgro from "../components/agro/WhyChooseAgro";
import CTASection from "../components/home/CTASection";

const Agro = () => {
  return (
    <>
      <AgroHero />
      <AgroOverview />
      <ProductCategories />
      <SourcingProcess />
      <WhyChooseAgro />
      <CTASection />
    </>
  );
};

export default Agro;