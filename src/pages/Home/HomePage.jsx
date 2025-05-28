import SectionDivider from "../../components/common/SectionDivider/SectionDivider";
import Footer from "../../components/layouts/Footer/Footer";
import Navbar from "../../components/layouts/Navbar/Navbar";
import { useMovie, useTopMovies } from "../../hooks/movieHooks";
import { useTopSeries } from "../../hooks/seriesHooks";
import FeaturedSection from "./components/FeaturedSection";
import TopSection from "./components/TopSection";
import WeeklyFeatured from "./components/WeeklyFeatured";

const HomePage = () => {
  const { data: topMovies = [] } = useTopMovies();
  const { data: topSeries = [] } = useTopSeries();
  const { data: weeklyFeatured = [] } = useMovie(324786);
  const { data: featuredSelection = [] } = useMovie(81);

  return (
    <>
      <Navbar />
      <FeaturedSection data={featuredSelection} />
      <WeeklyFeatured data={weeklyFeatured} />
      <SectionDivider />
      <TopSection title="Popular Movies" items={topMovies} type={"movies"} />
      <SectionDivider />
      <TopSection title="Popular Series" items={topSeries} />
      <Footer />
    </>
  );
};

export default HomePage;
