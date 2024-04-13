import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const {authUser}=useAuthContext();

  return (
    <div className="hero flex justify-center items-center h-[98vh]">
      <Routes>
        <Route path="/" element={authUser ? <Home />:<Navigate to="/login"/>} />
        <Route path="/login" element={authUser ? <Navigate to="/"/>:<Login />} />
        <Route path="/signup" element={authUser ? <Navigate to="/"/>:<Signup />} />
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
