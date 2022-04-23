import React from "react";
import { Route, Router } from "react-router";
import App from "./App";
import EventsSlide from "./components/EventsSlide";

const createRoutes = () => {
  <Router>
    <Route exact path="home" component={<App />} />
    <Route exact path="events" component={<EventsSlide />} />
  </Router>;
};

export default createRoutes;
