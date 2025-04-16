import React from "react";
import Container from "../container/Container";
import SwiperProject from "./SwiperProject";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full h-auto lg:py-[120px] py-[80px] bg-[#FFC448]"
    >
      <Container>
        <div className="w-full h-full px-[20px] xxl:px-0 flex flex-col justify-center gap-[40px] mt-[20px]">
          <div className="relative">
            <h3>
              <span className="text-[30px] lg:text-[40px] font-bold">
                Look at my
                <br />
                recent projects
              </span>
              <span className="absolute bottom-[16px] lg:bottom-[20px] left-[230px] lg:left-[300px] flex w-[60px] h-[2px] bg-black"></span>
            </h3>
          </div>
          <div className="w-full">
            <SwiperProject />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
