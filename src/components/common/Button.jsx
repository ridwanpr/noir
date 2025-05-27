const Button = ({ 
  children, 
  type = "button", 
  variant = "primary", 
  size = "md",
  styles = "",
  ...props 
}) => {
  const baseClasses = "font-semibold rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-100 focus:ring-white/50",
    secondary: "bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-500",
  };
  
  const sizes = {
    sm: "px-6 py-2 text-sm",
    md: "px-10 py-3 text-base",
    lg: "px-12 py-4 text-lg",
  };
  
  return (
    <button
      type={type}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${styles}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;