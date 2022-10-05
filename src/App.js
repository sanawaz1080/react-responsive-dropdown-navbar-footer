import "./App.css";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Conferences from "./components/pages/Conferences";
import Dashboard from "./components/pages/Dashboard";
import Journals from "./components/pages/Journals";
import Login from "./components/pages/Login";
import Publications from "./components/pages/Publications";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/conferences" exact element={<Conferences />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/journals" exact element={<Journals />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/publications" exact element={<Publications />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
