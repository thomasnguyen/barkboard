import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";
import styled from "styled-components";

import SoundSettings from "../../components/SoundSettings";

const Container = styled.div``;

export default function Sound() {
  const router = useRouter();
  const [volume, setVolume] = useState(30);
  console.log(router);
  return (
    <Container>
      dog
      <SoundSettings volume={volume} setVolume={setVolume} />
    </Container>
  );
}
