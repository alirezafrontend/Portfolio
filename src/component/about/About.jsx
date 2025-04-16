import React from "react";
import Container from "../container/Container";
import { IconsSkills } from "./constantIconSkills";

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-auto bg-[#6244C5] py-[100px] lg:py-[100px]"
    >
      <Container>
        <div className="w-full h-full flex flex-col gap-[80px] lg:gap-0 lg:flex-row lg:items-center lg:px-[20px]">
          <div className="w-full lg:w-[50%] flex justify-center items-center lg:pt-[60px] lg:pb-[30px] lg:pr-[40px]">
            <div className="flex flex-col gap-[40px]">
              <div className="flex justify-center lg:justify-start items-center gap-3">
                <span className="mb-[20px]">
                  <svg
                    width="86"
                    height="84"
                    viewBox="0 0 86 84"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    id="null"
                    className="svg replaced-svg"
                  >
                    <path
                      d="M69.0582 4.99535C65.3229 5.61907 55.8542 10.8508 56.4184 19.5008M56.4184 19.5008C56.5793 21.9679 56.8094 25.1691 59.6334 27.5088C62.587 29.9561 68.4982 24.1091 56.4184 19.5008ZM56.4184 19.5008C49.582 17.0957 34.9948 15.9707 31.3373 30.7119C29.092 42.3255 34.8382 56.3213 37.9206 65.5494C30.8166 54.4724 12.9204 41.5234 3.33571 40.3222"
                      stroke="#FED546"
                      strokeWidth="3"
                    ></path>
                    <path
                      d="M67.8098 9.30162L68.8675 4.76205L64.3162 3.75612L64.6426 2.35513L70.5986 3.67151L69.2144 9.61209L67.8098 9.30162Z"
                      fill="#FED546"
                    ></path>
                    <path
                      d="M26.009 78.4559C26.089 77.1822 26.6883 73.8048 28.4447 70.4841"
                      stroke="#FED546"
                      strokeWidth="3"
                    ></path>
                    <path
                      d="M4.8413 78.3261C8.24607 74.6684 16.8723 66.8695 24.1393 64.9358"
                      stroke="#FED546"
                      strokeWidth="3"
                    ></path>
                    <path
                      d="M55.3976 5.34016C53.6747 5.2429 50.2912 8.86138 51.3227 12.4565"
                      stroke="#FED546"
                      strokeWidth="3"
                    ></path>
                  </svg>
                </span>
                <div className="flex items-center justify-center gap-3">
                  <h3 className="text-white text-[30px] lg:text-[40px] font-bold">
                    About Me
                  </h3>
                  <span className="flex bg-white w-[60px] h-[2px] rounded-full mt-[15px]"></span>
                </div>
              </div>
              <div className="w-full mx-auto text-[#ffffff8c] text-[18px] md:text-[17px] xl:text-[18px] text-center lg:text-left px-[30px] lg:px-0">
                I'm a Frontend Developer focused on building responsive,
                high-performance, and user-centered interfaces. Experienced with
                React, Next.js, and tools like Tailwind CSS, I care deeply about
                writing clean, maintainable code. I thrive in collaborative
                environments, adapt well to new challenges, and am committed to
                continuous learning and growth. User experience, performance,
                and quality are at the core of my development process.
              </div>
              <div className="flex justify-center lg:justify-start">
                <a href="#">
                  <button className="group bg-[#ffffff] w-[200px] h-[60px] rounded-[10px] cursor-pointer hover:bg-black transition-all duration-200">
                    <div className="flex justify-center items-center gap-2.5">
                      <span className="font-semibold text-black group-hover:text-white transition-all duration-200">
                        Download CV
                      </span>
                      <span>
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 25 24"
                          xmlns="http://www.w3.org/2000/svg"
                          id="null"
                          className="svg replaced-svg fill-current group-hover:fill-white transition-all duration-200"
                        >
                          <path
                            d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                            fill=""
                          ></path>
                          <path
                            d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                            fill=""
                          ></path>
                          <path
                            d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                            fill=""
                          ></path>
                          <path
                            d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                            fill=""
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%] flex justify-center items-center lg:mt-[50px]">
            <div className="grid grid-cols-12 gap-y-8 w-[80%] lg:w-full">
              {IconsSkills.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="col-span-6 md:col-span-4 flex flex-col justify-center items-center gap-3 text-white"
                  >
                    <span className="flex justify-center items-center w-[60px] h-[60px] bg-white rounded-full">
                      <img
                        className="w-[30px] h-[30px]"
                        src={item.src}
                        alt={item.name}
                      />
                    </span>
                    <div className="min-w-[150px]">
                      <div className="flex gap-2 justify-center">
                        <span className="text-[15px]">{item.name}</span>
                        <span className="text-[15px] font-semibold">
                          ({item.percent}%)
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
