import { PlanetInfo } from "./sub-components/PlanetInfo/PlanetInfo";
import { PlanetPicture } from "./sub-components/PlanetPicture/PlanetPicture";
import "./Planet.scss";
import { useHomePageContext } from "../../hooks/useHomePageContext";
import { PlanetInfoChips } from "./sub-components/PlanetInfoChips/PlanetInfoChips";

export function Planet() {
  const { planet, isMenuOpen } = useHomePageContext();

  return (
    !isMenuOpen && (
      <div className="planet" key={planet}>
        <div className="planet__picture-and-info">
          <PlanetPicture />
          <PlanetInfo />
        </div>
        <PlanetInfoChips />
      </div>
    )
  );
}
