const Form = ({ formClass = "space-y-5", children }) => {
  return <form className={formClass}>{children}</form>;
};

export default Form;
