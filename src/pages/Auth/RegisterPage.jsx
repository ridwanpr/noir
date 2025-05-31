import AuthContainer from "../../components/auth/AuthContainer";
import RegisterForm from "../../components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <AuthContainer
      title="Create your account to begin"
      footerTitle={"Already have an account?"}
      footerCta={"Sign in here"}
      footerLink={"/login"}
    >
      <RegisterForm />
    </AuthContainer>
  );
};

export default RegisterPage;
