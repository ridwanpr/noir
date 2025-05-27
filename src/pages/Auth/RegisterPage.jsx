import AuthContainer from "../../components/auth/AuthContainer";
import RegisterForm from "../../components/auth/RegisterForm";

const RegisterPage = () => {
  const handleRegister = (formData) => {
    console.log("Login data:", formData);
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    console.log("Navigate to sign up");
  };

  return (
    <AuthContainer
      title="Create your account to begin"
      footerTitle={"Already have an account?"}
      footerCta={"Sign in here"}
      footerLink={"/login"}
    >
      <RegisterForm onLogin={handleRegister} onSignUpClick={handleLoginClick} />
    </AuthContainer>
  );
};

export default RegisterPage;
