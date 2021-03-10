import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";
import styled from "styled-components";
import useSound from "use-sound";

import SoundSettings from "../../components/SoundSettings";
import { getSounds } from "../../services/sounds";
import SoundKey from "../../components/SoundKey";

const Container = styled.div``;

export default function Sound() {
  const [volume, setVolume] = useState(30);

  const [play] = useSound("/mp3s/doorbell1.mp3", {
    interrupt: true,
    volume: volume * 0.01,
  });

  const [sounds, setSounds] = useState([]);
  const loadSounds = async () => {
    const categoryId = window.location.pathname.split("/")[2];
    getSounds(categoryId).then((sounds) => {
      setSounds(sounds);
    });
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      loadSounds();
    }
    return () => (mounted = false);
  }, []);

  return (
    <Container>
      {sounds.map((sound) => {
        return <SoundKey sound={sound} volume={volume} />;
      })}

      <SoundSettings volume={volume} setVolume={setVolume} />
    </Container>
  );
}
