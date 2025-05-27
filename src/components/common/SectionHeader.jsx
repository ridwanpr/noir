const SectionHeader = ({ title }) => {
  return (
    <div className="flex items-center justify-between mb-12">
      <h2 className="text-3xl font-bold">{title}</h2>
      <button className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
        View All
      </button>
    </div>
  );
};

export default SectionHeader;
