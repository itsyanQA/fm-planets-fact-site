import "./PlanetInfo.scss";
import PLANET_DATA from "../../../../data/data.json";
import { useHomePageContext } from "../../../../hooks/useHomePageContext";
import { PlanetDataContent, PlanetLayer } from "../../../../types/types";
import SourceIcon from "../../../../../public/assets/svg/icon-source.svg?react";
import { PlanetStructure } from "../PlanetStructure/PlanetStructure";
import { useIsMobile } from "../../../../hooks/useIsMobile";

export function PlanetInfo() {
  const { planet: selectedPlanet, planetLayer } = useHomePageContext();
  const mappedPlanetLayer: Record<PlanetLayer, "overview" | "structure" | "geology"> = {
    PLANET: "overview",
    INTERNAL: "structure",
    GEOLOGY: "geology",
  };
  const planetInfo = (PLANET_DATA as PlanetDataContent[]).find((planet) => planet.name.toLowerCase() === selectedPlanet.toLowerCase());
  const planetContent = planetInfo?.[mappedPlanetLayer[planetLayer]];
  const isMobile = useIsMobile();

  return (
    <div className="planet-info">
      <div className="planet-info__typography-container">
        <h1 className="planet-info__title">{planetInfo?.name}</h1>
        <p className="planet-info__content" key={planetContent?.content}>
          {planetContent?.content}
        </p>
        <div className="planet-info__source">
          <span>Source :</span>
          <div className="planet-info__wiki-and-icon">
            <a href={planetContent?.source} target="_blank">
              Wikipedia
            </a>
            <SourceIcon />
          </div>
        </div>
      </div>
      {!isMobile && <PlanetStructure />}
    </div>
  );
}
