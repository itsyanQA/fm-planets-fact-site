import { PropsWithChildren, useState, useEffect } from "react";
import { Planet, PlanetLayer } from "../types/types";
import { HomePageContext } from "../context/home-page-context";

type HomePageContextProviderProps = PropsWithChildren;

export function HomePageContextProvider({ children }: HomePageContextProviderProps) {
  const [planet, setPlanet] = useState<Planet>("MERCURY");
  const [planetLayer, setPlanetLayer] = useState<PlanetLayer>("PLANET");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.setAttribute("data-planet", planet);
    setPlanetLayer("PLANET");
  }, [planet]);

  return <HomePageContext.Provider value={{ planet, setPlanet, planetLayer, setPlanetLayer, isMenuOpen, setIsMenuOpen }}>{children}</HomePageContext.Provider>;
}
