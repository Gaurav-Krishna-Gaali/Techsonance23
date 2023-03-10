import React from "react";
import logo from "../assets/logo.png";
// import text from "../assets/text.gif";
import Banner from "../Banner";
// import text from "../assets/animation.gif";
import text from "../assets/effect.png";

// import text1 from "../assets/text1.gif";
// import BannerIntro from "./BannerIntro";

const Main = () => {
  return (
    <div>
      <div class="relative pb-20 bg-black overflow-hidden">
        {/* <div class="absolute bottom-0 inset-x-0 h-full bg-gradient-zospace-1"></div> */}
        <div class="absolute bottom-0 inset-x-0 h-3/5 w-2full -ml-64 -mb-12 bg-gradient-zospace-2 transform -rotate-6"></div>
        <nav class="relative">
          <div class="flex py-8 px-4 lg:px-8 justify-between items-center">
            <button class="p-2 navbar-burger">
              <svg
                class="w-10 h-3"
                width="39"
                height="13"
                viewBox="0 0 39 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="39" height="2" rx="1" fill="#C4C4C4"></rect>
                <rect
                  x="19"
                  y="11"
                  width="20"
                  height="2"
                  rx="1"
                  fill="#C4C4C4"
                ></rect>
              </svg>
            </button>
            <div class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <a class="text-2xl text-white font-bold" href="#">
                <img
                  class="h-7"
                  src="zospace-assets/logos/zospace-logo.svg"
                  alt=""
                  width="auto"
                />
              </a>
            </div>
            <div class="hidden lg:block "></div>
          </div>
        </nav>
        <Banner />
        {/* <BannerIntro /> */}
        <div class="relative container px-4 pt-12 md:pt-20 mx-auto">
          <div class="hidden 2xl:block absolute bottom-0 w-3/5 mb-40 h-2 border-b border-white"></div>
          <div class="relative flex flex-wrap -mx-4">
            <div class="w-full lg:w-1/2 2xl:w-2/5 px-4 mb-12 mb:mb-0">
              <span class="text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 to-orange-600">
                23
                <sup class="text-lg lg:text-lg  text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 to-orange-600">
                  rd
                </sup>{" "}
                National Technical Symposium
              </span>
              <div className="p-5">
                {/* <h1 className=" font-bold text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  TECHSONANCE 2023
                </h1> */}
                <img src={text} alt="" className="scale-10" />
              </div>
              {/* <img src={text1} alt="" /> */}

              <h2 class="max-w-lg lg:max-w-md 2xl:max-w-none mt-7 mb-12 mb:mb-20 text-6xl lg:text-6xl 2xl:text-9xl text-white font-bold font-heading">
                {/* <div className="relative group">
                  <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                </div> */}
                "The best play is enlightened when performed on the best stage."
              </h2>
              <p class="mb-12 lg:mb-24 text-lg text-white opacity-90">
                {/* Here arrives a promising stage to enhance your originality */}
                --Techsonance 2023, EEE Department, Osmania University
              </p>
              <div class="flex flex-wrap items-center">
                <a
                  class="inline-block mr-14 px-12 py-5 text-lg text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200"
                  href="/events"
                >
                  Events
                </a>
                <div class="w-full sm:w-auto mt-8 sm:mt-0 flex">
                  <button class="p-2">
                    <svg
                      width="11"
                      height="20"
                      viewBox="0 0 11 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.7597 18.6258C11.0801 18.942 11.0801 19.4502 10.7597 19.7641C10.4393 20.0781 9.92164 20.0792 9.60124 19.7641L0.240298 10.569C-0.0801018 10.255 -0.0801017 9.74688 0.240298 9.43061L9.60124 0.235462C9.92164 -0.0784849 10.4393 -0.0784848 10.7597 0.235462C11.0801 0.550571 11.0801 1.05986 10.7597 1.37381L2.22247 10.0004L10.7597 18.6258Z"
                        fill="white"
                      ></path>
                    </svg>
                  </button>
                  <span class="py-2 px-4">
                    <svg
                      width="2"
                      height="24"
                      viewBox="0 0 2 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 0L1 24"
                        stroke="white"
                        stroke-opacity="0.24"
                      ></path>
                    </svg>
                  </span>
                  <button class="p-2">
                    <svg
                      width="11"
                      height="20"
                      viewBox="0 0 11 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.2403 1.37424C-0.0801003 1.05797 -0.0801003 0.549844 0.2403 0.235898C0.5607 -0.0780496 1.07836 -0.0792131 1.39876 0.235898L10.7597 9.43104C11.0801 9.74499 11.0801 10.2531 10.7597 10.5694L1.39876 19.7645C1.07836 20.0785 0.560699 20.0785 0.240298 19.7645C-0.0801019 19.4494 -0.0801019 18.9401 0.240298 18.6262L8.77752 9.99964L0.2403 1.37424Z"
                        fill="white"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/2 lg:pl-20 2xl:w-3/5 px-4">
              <img class="w-full h-full object-contain" src={logo} alt="" />
            </div>
          </div>
        </div>
        <div class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
          <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
          <nav class="relative flex flex-col py-8 h-full w-full bg-white overflow-y-auto">
            <div class="flex items-center mb-16 pr-6">
              <a
                class="ml-10 mr-auto text-2xl text-gray-800 font-bold"
                href="#"
              >
                <img
                  class="h-7"
                  src="zospace-assets/logos/zospace-dark-logo.svg"
                  alt=""
                  width="auto"
                />
              </a>
            </div>
            <div>
              <ul>
                <li class="mb-1 px-10">
                  <a
                    class="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl"
                    href="#"
                  >
                    Product
                  </a>
                </li>
                <li class="mb-1 px-10">
                  <a
                    class="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl"
                    href="#"
                  >
                    Story
                  </a>
                </li>
                <li class="mb-1 px-10">
                  <a
                    class="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl"
                    href="#"
                  >
                    Features
                  </a>
                </li>
                <li class="mb-1 px-10">
                  <a
                    class="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-auto px-10"></div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Main;
