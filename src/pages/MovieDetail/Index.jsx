import { useParams } from "react-router";
import AppLayout from "../../components/layouts/AppLayout";
import {
  useMovie,
  useMovieCredits,
  useMovieVideo,
} from "../../hooks/movieHooks";
import MovieHero from "./components/MovieHero";
import SectionDivider from "../../components/common/SectionDivider/SectionDivider";
import MovieTrailer from "./components/MovieTrailer";
import MovieCredits from "./components/MovieCredits";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data: movie, isLoading } = useMovie(id);
  const { data: movieVideo, isLoading: isLoadingVideo } = useMovieVideo(id);
  const { data: movieCredits, isLoading: isLoadingCredits } =
    useMovieCredits(id);

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
    </AppLayout>
  );
};

export default MovieDetailPage;
