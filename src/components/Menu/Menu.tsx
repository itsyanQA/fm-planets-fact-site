import { PLANETS } from "../../constants/constants";
import MenuItem from "./sub-components/MenuItem/MenuItem";
import "./Menu.scss";

export default function Menu() {
  return (
    <ul className="menu">
      {PLANETS.map((planet) => (
        <MenuItem planet={planet} />
      ))}
    </ul>
  );
}
