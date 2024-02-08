import { useContext } from "react";
import { HomePageContext, HomePageContextType } from "../context/home-page-context";

export function useHomePageContext() {
  const context = useContext(HomePageContext);

  if (!context) {
    throw new Error("Component must be wrapped inside HomePageContextProvider");
  }

  return context as HomePageContextType;
}
