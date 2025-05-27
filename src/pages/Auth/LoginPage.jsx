import AuthContainer from "../../components/auth/AuthContainer";
import LoginForm from "../../components/auth/LoginForm";

const LoginPage = () => {
  const handleLogin = (formData) => {
    console.log("Login data:", formData);
  };

  return (
    <AuthContainer
      title="Sign in to your account"
      footerTitle={"Don't have an account?"}
      footerCta={"Sign up now"}
      footerLink={"/register"}
    >
      <LoginForm onLogin={handleLogin} />
    </AuthContainer>
  );
};

export default LoginPage;
