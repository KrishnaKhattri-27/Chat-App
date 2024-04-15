import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser}=useAuthContext()

  const SignUp = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {


    const success = handleErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("https://chat-app-jmad.onrender.com/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, SignUp };
};

export default useSignup;

const handleErrors = ({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) => {
  if (
    fullName === "" ||
    username === "" ||
    password === "" ||
    confirmPassword === "" ||
    gender === ""
  ) {
    toast.error("Please fill all fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Password dosn't match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must contain atleast 6 characters");
    return false;
  }

  return true;
};
