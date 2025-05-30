import { useParams } from "react-router";
import AppLayout from "../../components/layouts/AppLayout";
import {
  useMovie,
  useMovieCredits,
  useMovieRecommendations,
  useMovieVideo,
} from "../../hooks/movieHooks";
import MovieHero from "./components/MovieHero";
import SectionDivider from "../../components/common/SectionDivider/SectionDivider";
import MovieTrailer from "./components/MovieTrailer";
import MovieCredits from "./components/MovieCredits";
import Recommendation from "./components/Recommendation";
import MovieReviews from "./components/MovieReviews";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data: movie, isLoading } = useMovie(id);
  const { data: movieVideo, isLoading: isLoadingVideo } = useMovieVideo(id);
  const { data: movieCredits, isLoading: isLoadingCredits } =
    useMovieCredits(id);
  const { data: moviRecommendation, isLoading: isLoadingRecommendation } =
    useMovieRecommendations(id);

  if (isLoading)
    return (
      <AppLayout>
        <div>Loading movie details...</div>
      </AppLayout>
    );

  return (
    <AppLayout>
      <MovieHero data={movie} />
      <SectionDivider />
      <MovieTrailer data={movieVideo} isLoading={isLoadingVideo} />
      <SectionDivider />
      <MovieCredits data={movieCredits} isLoading={isLoadingCredits} />
      <SectionDivider />
      <MovieReviews />
      <SectionDivider />
      <Recommendation
        data={moviRecommendation}
        isLoading={isLoadingRecommendation}
      />
    </AppLayout>
  );
};

export default MovieDetailPage;
