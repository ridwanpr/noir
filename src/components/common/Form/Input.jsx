const Input = (props) => {
  const {
    name,
    placeholder,
    type,
    required = false,
    styles = "input-glow w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 pl-10 text-sm text-white focus:outline-none transition-all",
    value,
    onChange,
  } = props;

  return (
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      className={styles}
    />
  );
};

export default Input;
