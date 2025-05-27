import Footer from "../../components/layouts/Footer/Footer";
import Navbar from "../../components/layouts/Navbar/Navbar";
import MovieCard from "./components/MovieCard";
import MovieFilter from "./components/MovieFilter";

const MovieListPage = () => {
  return (
    <>
      <Navbar />
      <section className="py-16 pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <MovieFilter />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
            <MovieCard />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MovieListPage;
