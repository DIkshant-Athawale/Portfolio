"use client";

import type { ISourceOptions } from "@tsparticles/engine";
import { useState, useEffect } from "react";
import type { ComponentType } from "react";

type ParticlesProps = {
  id: string;
  particlesLoaded?: () => Promise<void>;
  options: ISourceOptions;
  className?: string;
};

// Options are static — defined outside the component so they're never recreated
const PARTICLES_OPTIONS: ISourceOptions = {
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

export default function ParticlesBackground() {
  const [ParticlesComponent, setParticlesComponent] =
    useState<ComponentType<ParticlesProps> | null>(null);

  useEffect(() => {
    let cancelled = false;

    const loadParticles = async () => {
      if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        window.matchMedia("(max-width: 767px)").matches
      ) {
        return;
      }

      try {
        const { default: Particles, initParticlesEngine } = await import("@tsparticles/react");
        const { loadSlim } = await import("@tsparticles/slim");
        await initParticlesEngine(async (engine) => {
          await loadSlim(engine);
        });
        if (!cancelled) {
          setParticlesComponent(() => Particles as ComponentType<ParticlesProps>);
        }
      } catch {
        console.warn("Particles background failed to initialize");
      }
    };

    loadParticles();
    return () => { cancelled = true; };
  }, []);

  if (!ParticlesComponent) return null;

  return (
    <ParticlesComponent
      id="hero-particles"
      options={PARTICLES_OPTIONS}
      className="absolute inset-0 z-0"
    />
  );
}
