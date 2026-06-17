"use client";

import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options: ISourceOptions = {
    fullScreen: false,
    fpsLimit: 60,
    particles: {
      color: { value: "#6366f1" },
      links: {
        color: "#6366f1",
        distance: 150,
        enable: true,
        opacity: 0.12,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.8,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "out" },
      },
      number: {
        density: { enable: true },
        value: 60,
      },
      opacity: {
        value: { min: 0.05, max: 0.2 },
      },
      shape: { type: "circle" },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  const particlesLoaded = useCallback(async () => {}, []);

  if (!init) return null;

  return (
    <Particles
      id="hero-particles"
      particlesLoaded={particlesLoaded}
      options={options}
      className="absolute inset-0 z-0"
    />
  );
}
