import React from "react";
import "./App.css";
import ContactPage from "./components/ContactPage";
import TimeLine from "./components/TimeLine";
import Sponsership from "./components/Sponsership";
import Main from "./components/Main";
import BecomeSpnser from "./components/BecomeSpnser";
import Invities from "./components/Invities";
import EventsSlide from "./components/EventsSlide";
import Modal from "./components/Modal";

const Deafult = () => {
  return (
    <div className="App">
      <Main />
      <EventsSlide />
      <BecomeSpnser />
      <TimeLine />
      <ContactPage />
      <Invities />
      <Modal />
      <Sponsership />
    </div>
  );
};

export default Deafult;
