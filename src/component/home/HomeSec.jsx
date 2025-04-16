import React from "react";
import Container from "../container/Container";
import TypewriterHome from "./TypewriterHome";

const HomeSec = () => {
  return (
    <Container>
      <div
        id="home"
        className="w-full h-auto pt-[40px] pb-[60px] lg:pt-[120px] lg:pb-[80px]"
      >
        <div className="w-full h-full xl:w-[90%] mx-auto flex">
          <div className="w-full h-full lg:w-1/2 lg:px-[20px] flex items-center pt-[80px]">
            <div className="flex flex-col justify-center gap-[100px]">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-[5px]">
                  <h3 className="text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] font-semibold ">
                    Hey! I'm
                  </h3>
                  <span>
                    <svg
                      width="36"
                      height="38"
                      viewBox="0 0 48 49"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      id="null"
                      className="svg replaced-svg"
                    >
                      <path
                        d="M25.4995 32.0305L31.3495 33.1555L36.1495 8.48051C36.4495 6.83051 35.3995 5.18051 33.8245 4.88051C32.1745 4.58051 30.5995 5.70551 30.2995 7.35551L25.4995 32.0305Z"
                        fill="#FFDD67"
                      ></path>
                      <path
                        d="M33.8996 4.88018C33.6746 4.80518 33.5246 4.80518 33.2996 4.80518C34.6496 5.33018 35.3996 6.75518 35.0996 8.25518L30.2996 32.9302L31.3496 33.1552L36.1496 8.48018C36.5246 6.75518 35.4746 5.18018 33.8996 4.88018Z"
                        fill="#EBA352"
                      ></path>
                      <path
                        d="M19.4995 32.7802H26.5495V5.55518C26.5495 3.53018 24.9745 1.80518 23.0245 1.80518C21.1495 1.80518 19.4995 3.45518 19.4995 5.55518V32.7802Z"
                        fill="#FFDD67"
                      ></path>
                      <path
                        d="M23.0995 1.80518C22.9495 1.80518 22.7245 1.80518 22.5745 1.88018C24.2995 2.18018 25.5745 3.68018 25.5745 5.55518V32.8552H26.6245V5.55518C26.6245 3.45518 25.0495 1.80518 23.0995 1.80518Z"
                        fill="#EBA352"
                      ></path>
                      <path
                        d="M15.7495 32.7054L21.7495 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541C9.74948 4.35541 8.77448 6.08041 9.22448 7.80541L15.7495 32.7054Z"
                        fill="#FFDD67"
                      ></path>
                      <path
                        d="M11.3995 3.90541L10.9495 4.13041C12.4495 4.05541 13.7995 5.03041 14.2495 6.60541L20.7745 31.4304L21.8245 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541Z"
                        fill="#EBA352"
                      ></path>
                      <path
                        d="M2.99937 10.355C1.57437 11.03 1.12437 12.83 1.87437 14.33L11.7744 34.055L16.7994 31.505L6.89937 11.78C6.14937 10.28 4.42437 9.68 2.99937 10.355Z"
                        fill="#FFDD67"
                      ></path>
                      <path
                        d="M2.99956 10.355C2.84956 10.43 2.69956 10.505 2.54956 10.655C3.82456 10.28 5.24956 10.955 5.92456 12.305L15.8246 32.03L16.7996 31.58L6.89956 11.78C6.14956 10.28 4.42456 9.68 2.99956 10.355Z"
                        fill="#EBA352"
                      ></path>
                      <path
                        d="M46.2744 22.2801C45.0744 19.9551 41.3244 20.1051 37.4994 24.3051C34.7994 27.2301 34.2744 28.2051 31.5744 28.1301V25.0551C31.5744 25.0551 25.7994 20.7801 14.3244 22.7301C14.3244 22.7301 7.79945 23.6301 7.79945 27.0801C7.79945 27.0801 6.67445 35.4051 8.99945 40.6551C12.4494 48.4551 30.1494 50.4801 35.6994 37.2051C36.8244 34.5801 39.0744 32.6301 41.0994 30.1551C43.4244 27.1551 47.5494 24.7551 46.2744 22.2801Z"
                        fill="#FFDD67"
                      ></path>
                      <path
                        d="M46.2745 22.28C46.0495 21.83 45.7495 21.53 45.3745 21.23C45.4495 21.305 45.5245 21.38 45.5245 21.53C46.7995 24.08 42.6745 26.405 40.1995 29.405C38.1745 31.88 35.9245 33.83 34.7995 36.455C29.9995 47.93 16.0495 47.93 10.1995 42.68C15.5245 48.68 30.5245 49.28 35.5495 37.205C36.6745 34.58 38.9245 32.63 40.9495 30.155C43.4245 27.155 47.5495 24.755 46.2745 22.28ZM32.3245 28.13C27.4495 26.33 18.7495 29.63 19.9495 38.405C19.9495 30.23 27.3745 28.205 31.4245 28.205C32.0245 28.13 32.3245 28.13 32.3245 28.13Z"
                        fill="#EBA352"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className="text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] font-semibold text-[#6244C5] mb-[20px]">
                  <TypewriterHome />
                </div>
                <div className="mb-[40px] w-full md:w-[80%]">
                  <p className="text-center lg:text-left text-[18px] md:text-[17px] lg:text-[18px]">
                    Frontend Developer crafting responsive, high-performance web
                    apps. Skilled in React, Next.js, and modern UI/UX practices.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div>
                    <a href="#contact">
                      <button className="bg-[#6244C5] text-white w-[160px] h-[60px] rounded-[10px] cursor-pointer hover:bg-black transition-all duration-200">
                        <div className="flex justify-center items-center gap-2">
                          <span className="font-semibold">Say hello</span>
                          <span>
                            <svg
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              id="null"
                              className="svg replaced-svg"
                            >
                              <path
                                d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                                fill="white"
                              ></path>
                              <path
                                d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                                fill="white"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </button>
                    </a>
                  </div>
                  <div className="w-[160px] h-[60px] rounded-[10px] font-semibold flex justify-center items-center">
                    <a href="#projects">
                      <div className="group relative flex justify-center items-center gap-2 cursor-pointer border-0 pb-1">
                        <span>My Works</span>
                        <span>
                          <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            id="null"
                            className="svg replaced-svg"
                          >
                            <path
                              d="M20.843 4.21239C20.843 3.79817 20.5072 3.46238 20.093 3.46238L13.343 3.46234C12.9288 3.46233 12.593 3.79812 12.593 4.21233C12.593 4.62655 12.9288 4.96233 13.343 4.96234L19.343 4.96238L19.3429 10.9624C19.3429 11.3766 19.6787 11.7124 20.0929 11.7124C20.5072 11.7124 20.8429 11.3766 20.8429 10.9624L20.843 4.21239ZM4.43731 20.9285L20.6233 4.74271L19.5627 3.68205L3.37665 19.8678L4.43731 20.9285Z"
                              fill="#12141D"
                            ></path>
                          </svg>
                        </span>
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex justify-center lg:justify-start items-center gap-[15px]">
                <span className="font-semibold">Follow me:</span>
                <div className="flex gap-[10px]">
                  <a href="https://github.com/alirezafrontend">
                    <span className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#f6f6f6] cursor-pointer hover:bg-black hover:text-white transition-all duration-300">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        height="1.2em"
                        width="1.2em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>
                      </svg>
                    </span>
                  </a>
                  <a href="https://www.instagram.com/alireza_hasanpour_frontend">
                    <span className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#f6f6f6] cursor-pointer hover:bg-black hover:text-white transition-all duration-300">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        height="1.2em"
                        width="1.2em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                      </svg>
                    </span>
                  </a>
                  <a href="https://www.linkedin.com/feed">
                    <span className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#f6f6f6] cursor-pointer hover:bg-black hover:text-white transition-all duration-300">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        height="1.2em"
                        width="1.2em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden h-full lg:w-1/2 lg:px-[20px] lg:flex justify-center items-center lg:pt-[80px]">
            <div className="group relative w-[350px]">
              <div className="relative w-[350px] border-[4px] border-[#6244C5] rounded-[25px] overflow-hidden rotate-6 cursor-pointer group-hover:rotate-0 transition-all duration-300 z-1">
                <img className="" src="me.jpg" alt="" />
              </div>
              <div className="w-[350px] h-full absolute -top-[10px] -right-[20px] border-[2px] border-[#00000021] rounded-[25px] overflow-hidden rotate-6 cursor-pointer group-hover:rotate-0 transition-all duration-300 z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomeSec;
