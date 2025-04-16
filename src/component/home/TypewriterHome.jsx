import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypewriterHome = () => {
  return (
    <h3>
      <TypeAnimation
        sequence={[
          "Alireza Hasanpour",
          1500,
          "",
          "Web Developer",
          1500,
          "",
        ]}
        speed={300}
        deletionSpeed={100}
        repeat={Infinity}
        cursor={true}
        wrapper="span"
      />
    </h3>
  );
};

export default TypewriterHome;
