import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const LogOut = async () => {
    setLoading(true);
    try {
// <<<<<<< main
      // const res = await fetch("/api/auth/logout", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
// =======
//       const res = await fetch("https://chat-app-hkvs.onrender.com/api/auth/logout", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
// >>>>>>> production

      // const data =await res.json();
      // if (data.error) throw new Error(data.error);

      localStorage.removeItem("chat-user");
      setAuthUser(null);

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, LogOut };
};

export default useLogout;
