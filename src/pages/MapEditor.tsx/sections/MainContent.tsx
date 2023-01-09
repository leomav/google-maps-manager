import { useContext } from "react";
import { MapContext } from "../contexts/MapContext";
import Credentials from "./Credentials";
import Map from "./Map";

const MainContent = () => {
  const { googleApiKey } = useContext(MapContext);
  console.log("main");
  return googleApiKey ? <Map /> : <Credentials />;
};

export default MainContent;