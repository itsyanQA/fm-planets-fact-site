import "./HomePage.scss";
import Header from "../components/Header/Header";
import { Planet } from "../components/Planet/Planet";
import { HomePageContextProvider } from "./HomePageContextProvider";
import { CodedBy } from "../components/CodedBy/CodedBy";

export default function HomePage() {
  return (
    <HomePageContextProvider>
      <Header />
      <Planet />
      <CodedBy />
    </HomePageContextProvider>
  );
}
