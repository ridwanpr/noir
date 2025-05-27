import SectionDivider from "../../components/common/SectionDivider/SectionDivider";
import Footer from "../../components/layouts/Footer/Footer";
import Navbar from "../../components/layouts/Navbar/Navbar";
import FeaturedSection from "./components/FeaturedSection";
import TopSection from "./components/TopSection";
import WeeklyFeatured from "./components/WeeklyFeatured";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <FeaturedSection />
      <WeeklyFeatured />
      <SectionDivider />
      <TopSection title="Top Movies" />
      <SectionDivider />
      <TopSection title="Top Series" />
      <Footer />
    </>
  );
};

export default HomePage;
