import PLANET_DATA from "../../../../data/data";
import { useHomePageContext } from "../../../../hooks/useHomePageContext";
import { ImagePath, PlanetDataContent } from "../../../../types/types";
import "./PlanetPicture.scss";

export function PlanetPicture() {
  const { planet: selectedPlanet, planetLayer } = useHomePageContext();

  const planetPictures = (PLANET_DATA as PlanetDataContent[]).find(
    (planet) => planet.name.toLowerCase() === selectedPlanet.toLowerCase()
  )?.images;

  return (
    <div className="planet-picture">
      <img
        className="planet-picture__img"
        src={planetLayer === "GEOLOGY" ? planetPictures?.planet : planetPictures?.[planetLayer.toLowerCase() as keyof ImagePath]}
        alt={`Planet ${selectedPlanet.toLowerCase()}`}
      />
      {planetLayer === "GEOLOGY" && <img className="planet-picture__geology" src={planetPictures?.geology} />}
    </div>
  );
}
