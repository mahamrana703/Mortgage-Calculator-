import React from "react";
import Slider from "@mui/material/Slider";
import { Stack, Typography } from "@mui/material";

const Slidercomponent = ({
  defaultvalue,
  min,
  max,
  step,
  onChange,
  value,
  label,
  unit,
  amount,
}) => {
  return (
    <>
      <Stack mt={1.4}>
        <Stack gap={1}>
          <Typography variant="subtitle2">{label}</Typography>
          <Typography variant="h5">
            {unit}
            {amount}
          </Typography>
        </Stack>
        <Slider
          defaultValue={defaultvalue}
          min={min}
          max={max}
          aria-label="Default"
          valueLabelDisplay="auto"
          marks
          step={step}
          onChange={onChange}
          value={value}
        />

        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography color="text.secondary" variant="caption">
            {unit}
            {min}
          </Typography>
          <Typography color="text.secondary" variant="caption">
            {unit}
            {max}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Slidercomponent;
