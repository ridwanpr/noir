import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const registerMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/register",
        data
      );
      return response.data;
    },
    onSuccess: () => {
      alert("Registration successful. Please log in to continue.");
      navigate("/login");
    },
    onError: (error) => {
      console.error(
        "Registration failed:",
        error.response?.data || error.message
      );
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) return;

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
      <Button type="submit" styles="w-full">
        {registerMutation.isPending ? "Submitting..." : "Sign Up"}
      </Button>
    </Form>
  );
};

export default RegisterForm;
