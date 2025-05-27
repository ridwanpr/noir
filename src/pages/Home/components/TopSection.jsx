import TopCard from "./TopCard";

const TopSection = (props) => {
  const { title } = props;
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold">{title}</h2>
          <button className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TopCard />
          <TopCard />
        </div>
      </div>
    </section>
  );
};

export default TopSection;
