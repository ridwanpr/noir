import SectionDivider from "../../components/common/SectionDivider/SectionDivider";
import AppLayout from "../../components/layouts/AppLayout";
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
      <AppLayout>
        <FeaturedSection data={featuredSelection} />
        <WeeklyFeatured data={weeklyFeatured} />
        <SectionDivider />
        <TopSection title="Popular Movies" items={topMovies} type={"movies"} />
        <SectionDivider />
        <TopSection title="Popular Series" items={topSeries} />
      </AppLayout>
    </>
  );
};

export default HomePage;
