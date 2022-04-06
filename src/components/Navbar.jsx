import React from "react";

const Navbar = () => {
  return (
    <div>
      {/* component */}
      <nav id="header" className="fixed bg-black text-white w-full z-20 top-0">
        <div
          id="progress"
          className="h-1 z-40 top-0"
          style={{
            background:
              "linear-gradient(to right, #FFC100 var(--scroll), transparent 0)",
          }}
        />
        <div className="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
          <div className="block lg:hidden pl-8 p-2">
            <a
              className="text-yellow-300 font-bold text-base no-underline hover:no-underline"
              href="#"
            >
              TechFest
            </a>
          </div>
          <div className="block lg:hidden pr-4">
            <button
              id="nav-toggle"
              className="flex items-center px-3 py-2 text-yellow-300 border-gray-600 focus:outline-none"
            >
              <svg
                fill="text-yellow-300"
                viewBox="0 0 20 20"
                className="w-6 h-6 fill-current"
              >
                <title>Menu</title>
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className="w-full flex-grow p-4 lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-black md:bg-transparent z-20"
            id="nav-content"
          >
            <ul className="list-reset lg:flex justify-center flex-1 items-center">
              <li className="mr-3">
                <a
                  className="border-b-0 md:border-b-4 border-yellow-300 inline-block py-2 px-4 text-yellow-300 font-bold"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="mr-3">
                <a
                  className="inline-block hover:text-yellow-300 hover:text-underline py-2 px-4"
                  href="#"
                >
                  Events
                </a>
              </li>
              <li className="mr-3">
                <a
                  className="inline-block hover:text-yellow-300 hover:text-underline py-2 px-4"
                  href="#"
                >
                  Team
                </a>
              </li>
              <li className="mr-3">
                <a
                  className="inline-block hover:text-yellow-300 hover:text-underline py-2 px-4"
                  href="#"
                >
                  About
                </a>
              </li>
              <li className="mr-3">
                <a
                  className="inline-block hover:text-yellow-300 hover:text-underline py-2 px-4"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="bg-black h-screen" />
      <div className="bg-black h-screen" />
      <div className="bg-black h-screen" />
      <div className="bg-black h-screen" />
    </div>
  );
};

export default Navbar;
