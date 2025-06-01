import { useState } from "react";
import { useRegister } from "../../hooks/authHooks";
import Button from "../common/Button";
import CheckBox from "../common/Form/Checkbox";
import Form from "../common/Form/Form";
import FormGroup from "../common/Form/FormGroup";
import Input from "../common/Form/Input";
import { EmailIcon, LockIcon, UserIcon } from "../common/Icons";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const registerMutation = useRegister();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!formData.agree) {
      alert("Please agree to the Terms of Service and Privacy Policy.");
      return;
    }

    const payload = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      password_confirmation: formData.confirmPassword,
      agree: formData.agree,
    };

    registerMutation.mutate(payload);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup label="Full Name" name="name">
        <span className="absolute left-3 top-3.5 w-5 h-5 text-gray-500">
          <UserIcon />
        </span>
        <Input
          name="name"
          type="text"
          placeholder="Enter your name"
          required={true}
          value={formData.name}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup label="Email" name="email">
        <span className="absolute left-3 top-3.5 w-5 h-5 text-gray-500">
          <EmailIcon />
        </span>
        <Input
          name="email"
          type="email"
          placeholder="Enter your email"
          required={true}
          value={formData.email}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup label="Password" name="password">
        <span className="absolute left-3 top-3.5 w-5 h-5 text-gray-500">
          <LockIcon />
        </span>
        <Input
          name="password"
          type="password"
          placeholder="••••••••"
          required={true}
          value={formData.password}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup label="Confirm Password" name="confirmPassword">
        <span className="absolute left-3 top-3.5 w-5 h-5 text-gray-500">
          <LockIcon />
        </span>
        <Input
          name="confirmPassword"
          type="password"
          placeholder="••••••••"
          required={true}
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </FormGroup>

      <CheckBox
        name="agree"
        type="checkbox"
        title="I agree to the Terms of Service and Privacy Policy."
        checked={formData.agree}
        onChange={handleChange}
      />

      <Button
        type="submit"
        styles="w-full"
        disabled={registerMutation.isPending}
      >
        {registerMutation.isPending ? "Submitting..." : "Sign Up"}
      </Button>
    </Form>
  );
};

export default RegisterForm;
