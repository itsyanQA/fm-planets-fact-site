import PLANET_DATA from "../../../../data/data.json";
import { useHomePageContext } from "../../../../hooks/useHomePageContext";
import { PlanetDataContent } from "../../../../types/types";
import { PlanetInfoChip } from "../PlanetInfoChip/PlanetInfoChip";
import "./PlanetInfoChips.scss";

export function PlanetInfoChips() {
  const { planet: selectedPlanet } = useHomePageContext();
  const planetData = (PLANET_DATA as PlanetDataContent[]).find((planet) => planet.name.toLowerCase() === selectedPlanet.toLowerCase());

  return (
    <ul className="planet-info-chips">
      <PlanetInfoChip label="rotation time" description={planetData?.rotation} />
      <PlanetInfoChip label="revolution time" description={planetData?.revolution} />
      <PlanetInfoChip label="radius" description={planetData?.radius} />
      <PlanetInfoChip label="average temp." description={planetData?.temperature} />
    </ul>
  );
}
