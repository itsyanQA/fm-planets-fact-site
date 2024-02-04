import { Planet, PlanetLayerButton } from "../types/types";

export const PLANETS: Planet[] = ["MERCURY", "VENUS", "EARTH", "MARS", "JUPITER", "SATURN", "URANUS", "NEPTUNE"];

export const PLANET_BUTTONS: PlanetLayerButton[] = [
  { number: "01", name: "overview", type: "overview" },
  { number: "02", name: "internal structure", type: "structure" },
  { number: "03", name: "surface geology", type: "geology" },
];

export const PLANET_BUTTONS_MOBILE: PlanetLayerButton[] = [
  { name: "overview", type: "overview" },
  { name: "structure", type: "structure" },
  { name: "geology", type: "geology" },
];

export const PLANET_PALETTE: Record<Planet, Lowercase<`var(--${Planet})`>> = {
  EARTH: "var(--earth)",
  JUPITER: "var(--jupiter)",
  MARS: "var(--mars)",
  MERCURY: "var(--mercury)",
  NEPTUNE: "var(--neptune)",
  SATURN: "var(--saturn)",
  URANUS: "var(--uranus)",
  VENUS: "var(--venus)",
};
