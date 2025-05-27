const Label = ({ name, title }) => {
  return (
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-300 mb-2"
    >
      {title}
    </label>
  );
};

export default Label;
