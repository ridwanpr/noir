import { useParams } from "react-router";
import AppLayout from "../../components/layouts/AppLayout";
import {
  useMovie,
  useMovieCredits,
  useMovieRecommendations,
  useMovieVideo,
  useMovieReviews,
} from "../../hooks/movieHooks";
import MovieHero from "./components/MovieHero";
import SectionDivider from "../../components/common/SectionDivider/SectionDivider";
import MovieTrailer from "./components/MovieTrailer";
import MovieCredits from "./components/MovieCredits";
import Recommendation from "./components/Recommendation";
import MovieReviews from "./components/MovieReviews";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data: movie, isLoading } = useMovie(id);
  const { data: movieVideo, isLoading: isLoadingVideo } = useMovieVideo(id);
  const { data: movieCredits, isLoading: isLoadingCredits } =
    useMovieCredits(id);
  const { data: moviRecommendation, isLoading: isLoadingRecommendation } =
    useMovieRecommendations(id);
  const { data: movieReviews, isLoading: isLoadingReviews } =
    useMovieReviews(id);

  if (isLoading)
    return (
      <AppLayout>
        <section className="pt-28 pb-16 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-end">
            <div className="flex justify-center lg:justify-start">
              <Skeleton
                height={400}
                width={320}
                baseColor="#2d2d2d"
                highlightColor="#3c3c3c"
                borderRadius={12}
              />
            </div>
            <div className="lg:col-span-2 space-y-4">
              <Skeleton
                height={40}
                width="80%"
                baseColor="#2d2d2d"
                highlightColor="#3c3c3c"
              />
              <Skeleton
                height={20}
                width="60%"
                baseColor="#2d2d2d"
                highlightColor="#3c3c3c"
              />
              <Skeleton
                count={4}
                height={14}
                baseColor="#2d2d2d"
                highlightColor="#3c3c3c"
                style={{ marginTop: 10 }}
              />
            </div>
          </div>
        </section>
      </AppLayout>
    );

  return (
    <AppLayout>
      <MovieHero data={movie} credits={movieCredits} />
      <SectionDivider />
      <MovieTrailer data={movieVideo} isLoading={isLoadingVideo} />
      <SectionDivider />
      <MovieCredits data={movieCredits} isLoading={isLoadingCredits} />
      <MovieReviews data={movieReviews} isLoading={isLoadingReviews} />
      <SectionDivider />
      <Recommendation
        data={moviRecommendation}
        isLoading={isLoadingRecommendation}
      />
    </AppLayout>
  );
};

export default MovieDetailPage;
