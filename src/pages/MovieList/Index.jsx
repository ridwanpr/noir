/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "./components/MovieCard";
import MovieFilter from "./components/MovieFilter";
import Pagination from "../../components/common/Pagination";
import { useMovies } from "../../hooks/movieHooks";
import AppLayout from "../../components/layouts/AppLayout";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MovieListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageFromUrl = parseInt(searchParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(pageFromUrl);
  const [sort, setSort] = useState("popular");
  const { data, isLoading } = useMovies(sort, currentPage);
  const totalPages = data?.total_pages || 1;
  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSearchParams({ page: page.toString(), sort });
  };
  useEffect(() => {
    if (pageFromUrl !== currentPage) {
      setCurrentPage(pageFromUrl);
    }
  }, [pageFromUrl]);
  useEffect(() => {
    setCurrentPage(1);
    setSearchParams({ page: "1", sort });
  }, [sort]);
  return (
    <AppLayout>
      <section className="py-16 pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <MovieFilter sort={sort} setSort={setSort} />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
            {isLoading || !data?.results
              ? Array.from({ length: 20 }).map((_, idx) => (
                  <div key={idx}>
                    <Skeleton
                      height={300}
                      baseColor="#2d2d2d"
                      highlightColor="#3c3c3c"
                    />
                    <Skeleton
                      height={20}
                      style={{ marginTop: 10 }}
                      baseColor="#2d2d2d"
                      highlightColor="#3c3c3c"
                    />
                    <Skeleton
                      height={20}
                      width="60%"
                      baseColor="#2d2d2d"
                      highlightColor="#3c3c3c"
                    />
                  </div>
                ))
              : data.results.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    releaseYear={new Date(movie.release_date).getFullYear()}
                    rating={movie.vote_average}
                    posterPath={movie.poster_path}
                  />
                ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </section>
    </AppLayout>
  );
};
export default MovieListPage;
