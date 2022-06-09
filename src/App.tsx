import React from "react";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import HomePage from "./components/Pages/HomePage";
import AboutPage from "./components/Pages/AboutPage";
import GithubPage from "./components/Pages/GithubPage";
import LinkedinPage from "./components/Pages/LinkedinPage";
import TwitchPage from "./components/Pages/TwitchPage";
import YoutubePage from "./components/Pages/YoutubePage";
import MausoleumPage from "./components/Pages/MausoleumPage";
import ContactPage from "./components/Pages/ContactPage";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <section className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/github" element={<GithubPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </section>
  );
}

export default App;
