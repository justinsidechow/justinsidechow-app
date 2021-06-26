import React from "react";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import MenuItems from "./components/Navbar/MenuItems";
import HomePage from "./components/Pages/HomePage";
import AboutPage from "./components/Pages/AboutPage";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
    <section className="App">
    <BrowserRouter>
    <NavBar/>
    <Switch>
    <Route exact path="/">
      {HomePage}
    </Route>
    <Route exact path="/about">
      {AboutPage}
    </Route>
    </Switch>
    </BrowserRouter>
    <Footer/>
    </section>
    </React.Fragment>
  );
}

export default App;
