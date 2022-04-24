import React, { useEffect } from "react";
import confetti from "../assets/confetti.gif";

const Modal = () => {
  useEffect(() => {
    const modalbg = document.getElementById("modal-bg");
    const modalSwitch = document.getElementById("modal-switch");
    const modalBox = document.getElementById("modal-box");
    const modalClose = document.getElementById("modal-close");
    modalbg.addEventListener("click", function () {
      modalBox.classList.add("hidden");
      modalbg.classList.add("hidden");
    });
    modalSwitch.addEventListener("click", function () {
      modalBox.classList.remove("hidden");
      modalbg.classList.remove("hidden");
    });
    modalClose.addEventListener("click", function () {
      modalBox.classList.add("hidden");
      modalbg.classList.add("hidden");
    });
  }, []);

  return (
    <div>
      {/* <div class="w-full min-h-screen flex justify-center items-center bg-black">
        <p
          id="modal-switch"
          class="text-[10vw] bg-gradient-to-r from-indigo-500 via-purple-500 text-transparent bg-clip-text to-pink-500 font-bold cursor-pointer"
        >
          Click Me
        </p>
      </div> */}
      <div class="w-full h-full">
        <div
          id="modal-bg"
          class="w-full h-full backdrop-opacity-10  bg-[#848A97] top-0 absolute hidden"
        ></div>
        <div
          id="modal-box"
          class="sm:w-[385px] sm:min-w-[40vw] min-w-[80vw] min-h-[50vh] flex flex-col items-center gap-2 -translate-y-1/2 p-6 bg-[#FFFFEB] rounded-lg top-1/2 left-1/2 -translate-x-1/2 absolute hidden"
        >
          <img src={confetti} alt="" class="h-20 " />

          <span class="text-2xl font-medium text-center">
            Woah,You have been officially Invited to join us.🤩
          </span>
          <p class="text-center">
            Click the button below to go to the events. And click the background
            to go to the main page.👾👾
          </p>
          <button
            id="modal-close"
            class="p-3 bg-[#4F46E5] rounded-lg w-full text-white"
            onClick={() => window.open("events", "_blank")}
          >
            Take me to the Events, Please!😁
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
