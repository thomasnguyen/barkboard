import React, { useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";

const Container = styled.div`
  background: #17181c;
  position: absolute;
  bottom: 0;

  display: flex;
  align-items: center;
  max-width: 600px;
  width: 100%;
  height: 65px;
  svg {
    margin: 0 30px;
  }
`;

export default function SoundSettings({ ...props }) {
  const { volume, setVolume } = props;

  const handleSliderChange = (event, newValue) => {
    const { setVolume } = props;
    setVolume(newValue);
  };

  return (
    <Container>
      <VolumeDown style={{ color: "white" }} />
      <Slider
        value={volume}
        onChange={handleSliderChange}
        aria-labelledby="volume-slider"
      />

      <VolumeUp style={{ color: "white" }} />
    </Container>
  );
}
