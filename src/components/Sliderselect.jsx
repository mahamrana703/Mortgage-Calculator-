import React from "react";
import Slidercomponent from "./common/Slidercomponent";

const Sliderselect = () => {
  return (
    <>
      <Slidercomponent min={0} max={100} defaultvalue={50} />
      <Slidercomponent min={0} max={100} defaultvalue={20} />
      <Slidercomponent min={0} max={100} defaultvalue={70} />
    </>
  );
};

export default Sliderselect;
