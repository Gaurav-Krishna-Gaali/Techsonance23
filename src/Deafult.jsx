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
import Guests from "./components/Guests";
import Carousel from "./components/Carousel";
import img1 from "./assets/Slider/1.jpg";
import img2 from "./assets/Slider/2.JPG";
import img3 from "./assets/Slider/3.JPG";
import img4 from "./assets/Slider/4.JPG";
import img5 from "./assets/Slider/5.JPG";

const slides = [img1, img2, img3, img4, img5];

const Deafult = () => {
  return (
    <div className="App">
      <Main />
      <img src="../assets/Slider/1.jpg" alt="" />
      <div className=" bg-black flex justify-center pb-10">
        <div className="max-w-4xl ">
          <Carousel autoSlide={true} autoSlideInterval={3000}>
            {[
              ...slides.map((slide) => <img src={slide} alt="slide" />),
              // <video
              //   src="https://archive.org/download/Popeye_forPresident/Popeye_forPresident_512kb.mp4"
              //   autoplay
              //   muted
              //   loop
              // />,
            ]}
          </Carousel>
          {/* <Carousel autoSlide={true} autoSlideInterval={1000}>
          {slides.map((slide) => (
            <img src={slide} alt="slide" />
          ))}
        </Carousel> */}
        </div>
      </div>

      <Guests />
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
