import SectionDivider from "../../components/common/SectionDivider/SectionDivider";
import AppLayout from "../../components/layouts/AppLayout";
import { useMovie, useTopMovies } from "../../hooks/movieHooks";
import FeaturedSection from "./components/FeaturedSection";
import TopSection from "./components/TopSection";
import WeeklyFeatured from "./components/WeeklyFeatured";

const HomePage = () => {
  const { data: topMovies = [] } = useTopMovies();
  const { data: weeklyFeatured = [] } = useMovie(757725);
  const { data: featuredSelection = [] } = useMovie(1376434);

  return (
    <>
      <AppLayout>
        <FeaturedSection data={featuredSelection} />
        <WeeklyFeatured data={weeklyFeatured} />
        <SectionDivider />
        <TopSection title="Popular Movies" items={topMovies} type={"movies"} />
      </AppLayout>
    </>
  );
};

export default HomePage;
