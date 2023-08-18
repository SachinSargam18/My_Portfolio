import React from "react";
import frontendImg from "../../assets/images/front-end.png";
import backendImg from "../../assets/images/backend.png";
import uiImg from "../../assets/images/design.png";
import appsImg from "../../assets/images/apps.png";

const Services = () => {
  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
            About Me
          </h2>
          <p className="lg:max-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
           I am a mature team worker and adaptable to all challenging situations.
            <br />
            creative, challenge-driven and high-performing Individual with rapid learning 
            <br />
            abilities. I am an enthusiastic, self-motivated, reliable, responsible and hard working person.
          </p>
        </div>
        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* =============== vertical line running through the middle ============ */}
              <div
                className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2
                            transform-translate-x-1/2"
              ></div>
              {/* ========= left card ======== */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3
                          className="text-primaryColor font-[700] mb-3 group-hover:text-white
                                             ground-hover:font-[600] text-xl"
                        >
                          C++
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-5">
                          C++ is an object-oriented programming language which
                          gives a clear structure to program.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                    left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                    justify-center"
                  >
                    <figure>
                      <img src={frontendImg} alt="FrontendImg" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* ========== right Card ======= */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay='50'
                        data-aos-duration="1300"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3
                          className="text-primaryColor font-[700] mb-3 group-hover:text-white
                                             ground-hover:font-[600] text-xl"
                        >
                          Data Structure
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-5">
                          Data structures are formats used to organize, store,
                          and modify data in any programming language.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                    left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                    justify-center"
                  >
                    <figure>
                      <img src={backendImg} alt="backendImg" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* ========= left card ======== */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-delay='100'
                        data-aos-duration="1400"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3
                          className="text-primaryColor font-[700] mb-3 group-hover:text-white
                                             ground-hover:font-[600] text-xl"
                        >
                          HTML
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-5">
                          HTML is the standard markup language for Web pages.
                          With HTML we can create our own Website.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                    left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                    justify-center"
                  >
                    <figure>
                      <img src={appsImg} alt="FrontendImg" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* ========== right Card ======= */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay='150'
                        data-aos-duration="1500"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3
                          className="text-primaryColor font-[700] mb-3 group-hover:text-white
                                             ground-hover:font-[600] text-xl"
                        >
                          CSS/Tailwind CSS
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-5">
                          Tailwind CSS is a utility-first CSS framework for
                          rapidly building modern websites without ever leaving
                          HTML.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                    left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                    justify-center"
                  >
                    <figure>
                      <img src={frontendImg} alt="backendImg" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* ========= left card ======== */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-delay='200'
                        data-aos-duration="1600"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3
                          className="text-primaryColor font-[700] mb-3 group-hover:text-white
                                             ground-hover:font-[600] text-xl"
                        >
                          React Js
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-5">
                          React is a JavaScript library for building user
                          interfaces. React is used to build single-page
                          applications.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                    left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                    justify-center"
                  >
                    <figure>
                      <img src={uiImg} alt="FrontendImg" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
