import "./Header.scss";
import { useState } from "react";
import { PLANETS } from "../../constants/constants";
import { useHomePageContext } from "../../hooks/useHomePageContext";
import { useIsMobile } from "../../hooks/useIsMobile";
import { PlanetStructure } from "../Planet/sub-components/PlanetStructure/PlanetStructure";
import MenuIcon from "../../../public/assets/svg/icon-hamburger.svg?react";
import Menu from "../Menu/Menu";

export default function Header() {
  const { setPlanet, isMenuOpen, setIsMenuOpen } = useHomePageContext();
  const isMobile = useIsMobile();

  return (
    <>
      <header className="header">
        <h3 className="header__title">The Planets</h3>
        <nav className="header__nav">
          <ul className="header__planets">
            {PLANETS.map((planet) => (
              <li className={`header__planet header__planet--is-${planet.toLowerCase()}`} key={planet} onClick={() => setPlanet(planet)}>
                {planet}
              </li>
            ))}
          </ul>
        </nav>
        {isMobile && (
          <MenuIcon
            className={`header__menu-icon ${isMenuOpen ? "header__menu-icon--open" : ""}`}
            onClick={() => setIsMenuOpen((prevState: boolean) => !prevState)}
          />
        )}
      </header>
      {isMobile && !isMenuOpen && <PlanetStructure />}
      {isMenuOpen && <Menu />}
    </>
  );
}
