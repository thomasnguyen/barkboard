import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useSound from "use-sound";

const Button = styled.button`
  border-radius: 20px;
  border: 2px solid white;
  background: none;
  color: white;
  outline: 0;
  padding: 10px 20px;
  margin: 10px;
  font-size: 16px;
`;

export default function SoundKey(props) {
  const [play] = useSound(props.sound.audioFile, {
    interrupt: true,
    volume: props.volume * 0.01,
  });

  return <Button onClick={() => play()}>{props.sound.label}!</Button>;
}
