import React from "react";
import "./App.css";
import ContactPage from "./components/ContactPage";
import Navbar from "./components/Navbar";
import TimeLine from "./components/TimeLine";
import Sponsership from "./components/Sponsership";
import Header from "./components/Header";
import Main from "./components/Main";
import BecomeSpnser from "./components/BecomeSpnser";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Main />
      {/* <Header /> */}
      <BecomeSpnser />
      <TimeLine />
      <ContactPage />
      <Sponsership />
    </div>
  );
}

export default App;
