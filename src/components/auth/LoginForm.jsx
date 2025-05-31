import { useState } from "react";
import Button from "../common/Button";
import Form from "../common/Form/Form";
import FormGroup from "../common/Form/FormGroup";
import Input from "../common/Form/Input";
import { EmailIcon, LockIcon } from "../common/Icons";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router";
import useUserStore from "../../store/userStore";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { setUser } = useUserStore();

  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        data
      );
      return response.data;
    },
    onSuccess: (data) => {
      setUser(data.user, data.token);
      alert("Login successful.");
      navigate("/");
    },
    onError: (error) => {
      console.error("Login failed:", error.response?.data || error.message);
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

    const payload = {
      email: formData.email,
      password: formData.password,
    };

    loginMutation.mutate(payload);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
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
            placeholder="Enter your password"
            required={true}
            value={formData.password}
            onChange={handleChange}
          />
        </FormGroup>

        <Button type="submit" styles="w-full">
          {loginMutation.isPending ? "Submitting..." : "Login"}
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
