import "./PlanetButton.scss";

type PlanetButtonsProps = {
  name: string;
  isSelected: boolean;
  number?: string;
  onClickHandler: () => void;
};

export function PlanetButton({ name, isSelected, number, onClickHandler }: PlanetButtonsProps) {
  return (
    <button className={`planet-button ${isSelected ? "planet-button--selected" : ""}`} onClick={onClickHandler}>
      <div className="planet-button__number-and-name">
        {number && <span className="planet-button__number">{number}</span>}
        <span className="planet-button__name">{name}</span>
      </div>
    </button>
  );
}
