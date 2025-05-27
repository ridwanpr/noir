const CheckBox = ({ name, type, title }) => {
  return (
    <div className="flex items-center">
      <input
        id={name}
        name={name}
        type={type}
        className="h-4 w-4 bg-gray-700 border-gray-600 text-white focus:ring-white/50 rounded"
      />
      <label htmlFor={name} className="ml-2 block text-sm text-gray-400">
        {title}
      </label>
    </div>
  );
};

export default CheckBox;
