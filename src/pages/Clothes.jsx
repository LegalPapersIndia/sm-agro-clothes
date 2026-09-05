import ClothesHero from "../components/clothes/ClothesHero";
import ClothesOverview from "../components/clothes/ClothesOverview";
import FabricCategories from "../components/clothes/FabricCategories";
import CraftingProcess from "../components/clothes/CraftingProcess";
import WhyChooseClothes from "../components/clothes/WhyChooseClothes";
import CTASection from "../components/home/CTASection";

const Clothes = () => {
  return (
    <>
      <ClothesHero />
      <ClothesOverview />
      <FabricCategories />
      <CraftingProcess />
      <WhyChooseClothes />
      <CTASection />
    </>
  );
};

export default Clothes;