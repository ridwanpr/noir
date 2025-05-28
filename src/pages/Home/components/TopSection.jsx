import { Link } from "react-router";
import TopCard from "./TopCard";

const TopSection = ({ title, items, type }) => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold">{title}</h2>
          <Link
            to={`/${type}`}
            className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item) => (
            <TopCard
              key={item.id}
              title={
                item.original_name ? item.original_name : item.original_title
              }
              backdrop_path={item.backdrop_path}
              rating={item.vote_average}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSection;
