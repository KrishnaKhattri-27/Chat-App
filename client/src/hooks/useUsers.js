import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useUsers = () => {
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState("");
  const [userNames, setUserNames] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setUserNames(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  return { userNames, loading, selected ,setSelected };
};

export default useUsers;
