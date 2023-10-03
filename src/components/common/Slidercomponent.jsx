import React from "react";
import Slider from "@mui/material/Slider";

const Slidercomponent = (props) => {
  return (
    <Slider
      defaultValue={props.defaultvalue}
      min={props.min}
      max={props.max}
      aria-label="Default"
      valueLabelDisplay="auto"
    />
  );
};

export default Slidercomponent;
