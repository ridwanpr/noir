import Label from "./Label";

const FormGroup = ({ label, name, children, styles = "relative" }) => {
  return (
    <div>
      <Label name={name} title={label} />
      <div className={styles}>{children}</div>
    </div>
  );
};

export default FormGroup;
