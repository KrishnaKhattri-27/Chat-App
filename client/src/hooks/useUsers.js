import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useUsers = () => {
  const {authUser}=useAuthContext();
  const [loading, setLoading] = useState(false);
//   const [selected, setSelected] = useState(null);
  const [userNames, setUserNames] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/users",{
          headers: {
            // "Content-Type": "application/json",
              "Authorization":"Bearer "+authUser.token
          },
        });
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

  return { userNames, loading };
};

export default useUsers;
