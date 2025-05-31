const Form = ({ formClass = "space-y-5", children, onSubmit }) => {
  return (
    <form className={formClass} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
