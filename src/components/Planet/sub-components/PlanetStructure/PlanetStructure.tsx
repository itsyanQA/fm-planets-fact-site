import { PlanetButton } from "../PlanetButton/PlanetButton";
import { PLANET_BUTTONS, PLANET_BUTTONS_MOBILE } from "../../../../constants/constants";
import "./PlanetStructure.scss";
import { useHomePageContext } from "../../../../hooks/useHomePageContext";
import { useIsMobile } from "../../../../hooks/useIsMobile";
import { PlanetLayerButtonType } from "../../../../types/types";

export function PlanetStructure() {
  const { planetLayer, setPlanetLayer } = useHomePageContext();
  const isMobile = useIsMobile();
  const buttonsToUse = isMobile ? PLANET_BUTTONS_MOBILE : PLANET_BUTTONS;

  const getSelectedButton = (type: PlanetLayerButtonType) => {
    return (
      (type === "overview" && planetLayer === "PLANET") ||
      (type === "structure" && planetLayer === "INTERNAL") ||
      (type === "geology" && planetLayer === "GEOLOGY")
    );
  };

  const planetLayerPerType: Record<PlanetLayerButtonType, () => void> = {
    overview: () => {
      setPlanetLayer("PLANET");
    },
    structure: () => {
      setPlanetLayer("INTERNAL");
    },
    geology: () => {
      setPlanetLayer("GEOLOGY");
    },
  };

  return (
    <div className="planet-structure">
      {buttonsToUse.map((button) => (
        <PlanetButton
          key={button.type}
          number={button?.number}
          name={button.name}
          isSelected={getSelectedButton(button.type)}
          onClickHandler={planetLayerPerType[button?.type]}
        />
      ))}
    </div>
  );
}
