import { useContext } from "react";
import { CredentialsContext } from "../contexts/CredentialsContext";
import Credentials from "./Credentials";
import Map from "./Map";

const MainContent = () => {
  const { googleApiKey } = useContext(CredentialsContext);
  return googleApiKey ? <Map /> : <Credentials />;
};

export default MainContent;
