import React, { useRef, useState } from "react";
import Container from "../container/Container";
import { itemService } from "./constService";
import ItemService from "./ItemService";

const Service = () => {
  const [hoverStyle, setHoverStyle] = useState({ top: 0, height: 0, opacity: 0 });
  const ulRef = useRef(null);

  const handleHover = (e) => {
    const li = e.currentTarget;
    const { top, height } = li.getBoundingClientRect();
    const ulTop = ulRef.current.getBoundingClientRect().top;
    setHoverStyle({
      top: top - ulTop,
      height,
      opacity: 1,
    });
  };

  const handleLeave = () => {
    setHoverStyle({ ...hoverStyle, opacity: 0 });
  };

  return (
    <div id="service" className="w-full h-auto py-[100px] bg-[#FAFAFB]">
      <Container>
        <div className="w-full h-full px-[20px] xxl:px-0 flex flex-col gap-10 justify-center">
          <div className="relative">
            <h3>
              <span className="text-[30px] lg:text-[40px] font-bold">
                Services
                <br />I Provide
              </span>
              <span className="absolute bottom-[16px] lg:bottom-[20px] left-[140px] lg:left-[180px] flex w-[60px] h-[2px] bg-black"></span>
            </h3>
          </div>
          <div>
            <ul ref={ulRef} className="relative">
              <div
                className="absolute left-0 w-full bg-[#6244C5] rounded-md transition-all duration-300 pointer-events-none z-0"
                style={{
                  top: `${hoverStyle.top}px`,
                  height: `${hoverStyle.height}px`,
                  opacity: hoverStyle.opacity,
                }}
              ></div>

              {itemService.map((item) => (
                <li
                  key={item.id}
                  className="group relative z-10 w-full min-h-[100px] lg:min-h-[140px] flex items-center border-b-[1px] cursor-pointer px-4 transition-colors duration-300 hover:text-white"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                >
                  <ItemService
                    num={item.id}
                    title={item.title}
                    desc={item.desc}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Service;
