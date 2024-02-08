import { Dispatch, SetStateAction, createContext } from "react";
import { Planet, PlanetLayer } from "../types/types";

export type HomePageContextType = {
  planet: Planet;
  setPlanet: Dispatch<SetStateAction<Planet>>;
  planetLayer: PlanetLayer;
  setPlanetLayer: Dispatch<SetStateAction<PlanetLayer>>;
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export const HomePageContext = createContext<HomePageContextType | null>(null);
