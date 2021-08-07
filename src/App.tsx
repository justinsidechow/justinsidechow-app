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
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <section className="App">
        <BrowserRouter>
          <NavBar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                {HomePage}
              </Route>
              <Route exact path="/about">
                {AboutPage}
              </Route>
              <Route exact path="/github">
                {GithubPage}
              </Route>
              <Route exact path="/linkedin">
                {LinkedinPage}
              </Route>
              <Route exact path="/twitch">
                <TwitchPage />
              </Route>
              <Route exact path="/youtube">
                {YoutubePage}
              </Route>
              <Route exact path="/mausoleum">
                {MausoleumPage}
              </Route>
              <Route exact path="/contact">
                <ContactPage />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
        <Footer />
      </section>
    </React.Fragment>
  );
}

export default App;
