import "./PlanetInfoChip.scss";

type PlanetInfoChipProps = {
  label: string;
  description: string | undefined;
};

export function PlanetInfoChip({ label, description }: PlanetInfoChipProps) {
  return (
    <div className="planet-info-chip">
      <label className="planet-info-chip__label">{label}</label>
      <span className="planet-info-chip__description">{description}</span>
    </div>
  );
}
