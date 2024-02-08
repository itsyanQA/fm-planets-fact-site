export type Planet = "MERCURY" | "VENUS" | "EARTH" | "MARS" | "JUPITER" | "SATURN" | "URANUS" | "NEPTUNE";

export type PlanetLayer = "PLANET" | "INTERNAL" | "GEOLOGY";

export type PlanetLayerButtonType = "overview" | "structure" | "geology";

export type PlanetLayerButton = {
  name: string;
  number?: string;
  type: PlanetLayerButtonType;
};

export type PlanetDataContent = {
  name: Capitalize<Planet>;
  overview: Content;
  structure: Content;
  geology: Content;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: ImagePath;
};

type Content = {
  content: string;
  source: string;
};

export type ImagePath = {
  planet: string;
  internal: string;
  geology: string;
};
