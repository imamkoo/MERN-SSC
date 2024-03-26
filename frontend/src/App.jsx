import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-out" element={<SignOut />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}
