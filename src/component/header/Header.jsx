import React from "react";
import Container from "../container/Container";
import Navbar from "./Navbar";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="bg-white w-full h-[50px] lg:h-[70px] border-b-[1px] border-[#00000020] fixed z-20">
      <Container>
        <div className="w-full h-[50px] lg:h-[70px] flex justify-between items-center">
          <Logo />
          <Navbar />
        </div>
      </Container>
    </div>
  );
};

export default Header;
