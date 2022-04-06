import React from "react";
import "./App.css";
import ContactPage from "./components/ContactPage";
import Navbar from "./components/Navbar";
import TimeLine from "./components/TimeLine";
import Sponsership from "./components/Sponsership";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContactPage />
      <TimeLine />
      <Sponsership />
    </div>
  );
}

export default App;
