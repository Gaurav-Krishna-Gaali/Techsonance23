import React from "react";
import gh1 from "../assets/goh.png";
import gh2 from "../assets/goh2.png";
import chief from "../assets/cg.png";
import board from "../assets/board.jpg";

const Invities = () => {
  return (
    <div>
      <div class="flex items-center justify-center  min-h-screen bg-black pb-20 ">
        <div class="flex flex-col">
          <div class="flex flex-col mt-8">
            <div class="container max-w-7xl px-4">
              <div class="flex flex-wrap justify-center text-center mb-24">
                <div class="w-full lg:w-6/12 px-4">
                  <h1 class="text-white text-4xl font-bold mb-8">
                    Meet the previous guest's we've invited
                  </h1>

                  <p class="text-white text-lg font-light">
                    With over many years of combined experience, we've got a
                    well-seasoned list of guests at the helm.
                  </p>
                </div>
              </div>

              <div class="flex flex-wrap">
                <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div class="flex flex-col">
                    <a href="#" class="mx-auto">
                      <img
                        class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        // src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80"
                        src={gh1}
                      />
                    </a>

                    <div class="text-center mt-6">
                      <h1 class="text-white text-xl font-bold mb-1">
                        Shri.A. GOPAL RAO
                      </h1>

                      <div class="text-white font-light mb-2">
                        Chairman & Managing Director, TSNPDCL
                      </div>

                      <div
                        class="flex items-center justify-center opacity-50 hover:opacity-100
                                  transition-opacity duration-300"
                      ></div>
                    </div>
                  </div>
                </div>

                <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div class="flex flex-col">
                    <a href="#" class="mx-auto">
                      <img
                        class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        // src="https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80"
                        src={chief}
                      />
                    </a>

                    <div class="text-center mt-6">
                      <h1 class="text-white text-xl font-bold mb-1">
                        Shri.D. PRABHAKAR RAO
                      </h1>

                      <div class="text-white font-light mb-2">
                        Chairman & Managing Director, TSGENCO & TRANSCO
                      </div>

                      <div
                        class="flex items-center justify-center opacity-50 hover:opacity-100
                                  transition-opacity duration-300"
                      ></div>
                    </div>
                  </div>
                </div>

                <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div class="flex flex-col">
                    <a href="#" class="mx-auto">
                      <img
                        class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        // src="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80"
                        src={gh2}
                      />
                    </a>

                    <div class="text-center mt-6">
                      <h1 class="text-white text-xl font-bold mb-1">
                        Shri.G. RAGHUMA REDDY
                      </h1>

                      <div class="text-white font-light mb-2">
                        Chairman & Managing Director, TSSPDCL
                      </div>

                      <div
                        class="flex items-center justify-center opacity-50 hover:opacity-100
                                  transition-opacity duration-300"
                      ></div>
                    </div>
                  </div>
                </div>

                <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div class="flex flex-col">
                    <a href="#" class="mx-auto">
                      <img
                        class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        // src="https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80"
                        src={board}
                      />
                    </a>

                    <div class="text-center mt-6">
                      <h1 class="text-white text-xl font-bold mb-1">
                        Many Such Director's
                      </h1>

                      <div class="text-white font-light mb-2">
                        from across state electricity board.
                      </div>

                      <div
                        class="flex items-center justify-center opacity-50 hover:opacity-100
                                  transition-opacity duration-300"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invities;
