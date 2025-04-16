import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypewriterHome = () => {
  return (
    <h3>
      <TypeAnimation
        sequence={[
          "Alireza Hasanpour",
          1000,
          "",
          "Web Developer",
          1000,
          "",
        ]}
        speed={70}
        deletionSpeed={50}
        repeat={Infinity}
        cursor={true}
        wrapper="span"
      />
    </h3>
  );
};

export default TypewriterHome;
