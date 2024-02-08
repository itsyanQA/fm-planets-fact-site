import { Planet } from "../../../../types/types";
import { PLANET_PALETTE } from "../../../../constants/constants";
import "./MenuItem.scss";
import { CSSProperties } from "react";
import { useHomePageContext } from "../../../../hooks/useHomePageContext";
import Chevron from "../../../../../public/assets/svg/icon-chevron.svg?react";

type MenuItemProps = {
  planet: Planet;
};

export default function MenuItem({ planet }: MenuItemProps) {
  const { setPlanet, setIsMenuOpen } = useHomePageContext();
  const styles: Record<string, CSSProperties> = {
    circle: { backgroundColor: PLANET_PALETTE[planet] },
  };

  const onClick = () => {
    setPlanet(planet);
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="menu-item" onClick={onClick}>
      <div className="menu-item__circle-and-text">
        <span className="menu-item__circle" style={styles.circle} />
        <span className="menu-item__text">{planet}</span>
      </div>
      {<Chevron />}
    </div>
  );
}
