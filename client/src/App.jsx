import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import MobileHome from "./pages/MobileHome";

function App() {
  const { authUser } = useAuthContext();
// console.log("home",authUser);
  return (
    <div className="hero flex justify-center items-center h-[98vh]">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
        {window.innerWidth < 800 ? (
          <Route
            path="/:id"
            element={authUser ? <MobileHome /> : <Navigate to="/login" />}
          />
        ) : null}
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
