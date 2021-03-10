import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useSound from "use-sound";

export default function SoundKey(props) {
  const [play] = useSound(props.sound.audioFile, {
    interrupt: true,
    volume: props.volume * 0.01,
  });

  return <button onClick={() => play()}>{props.sound.label}!</button>;
}
