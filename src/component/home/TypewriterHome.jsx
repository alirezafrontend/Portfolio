import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypewriterHome = () => {
  return (
    <h3>
      <TypeAnimation
        sequence={[
          "Alireza Hasanpour",
          2000,
          "",
          "Web Developer",
          2000,
          "",
        ]}
        speed={90}
        deletionSpeed={70}
        repeat={Infinity}
        cursor={true}
        wrapper="span"
      />
    </h3>
  );
};

export default TypewriterHome;
