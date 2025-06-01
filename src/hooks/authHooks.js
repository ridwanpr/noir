import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store/userStore";
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
} from "../services/authService";

export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: registerUser,
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
};

export const useLogin = () => {
  const navigate = useNavigate();
  const { setUser } = useUserStore();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      setUser(data.user, data.token);
      alert("Login successful.");
      navigate("/");
    },
    onError: (error) => {
      console.error("Login failed:", error.response?.data || error.message);
    },
  });
};

export const useLogout = () => {
  const navigate = useNavigate();
  const { clearUser } = useUserStore();

  return useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      clearUser();
      navigate("/");
    },
    onError: (error) => {
      console.error("Logout failed:", error.message);
    },
  });
};

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
    staleTime: 60000 * 10, // 10 minutes
    retry: false,
  });
};
