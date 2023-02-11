import { CircularProgress } from "@mui/material";
import {
  DrawingManager,
  GoogleMap,
  LoadScript,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useCallback, useContext, useEffect, useState } from "react";
import { MAP_LIBRARIES } from "../../../utils/general";
import { CredentialsContext } from "../contexts/CredentialsContext";
import CustomDrawingManager from "./DrawingManager";

// "AIzaSyD0o3aaqSPi2gsdgFVDJmaArmajyacv5dU"
const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 37.396409648536746,
  lng: 25.268773757459652,
};

const mapOptions = {
  streetViewControl: false,
  mapTypeId: "satellite", // hybrid, satellite, roadmap
  gestureHandling: "greedy",
  // mapTypeControl: false,
  fullscreenControl: false,
  center: center,
  zoom: 2,
};

const Map = () => {
  const { googleApiKey } = useContext(CredentialsContext);

  const [drawingManager, setDrawingManager] =
    useState<google.maps.drawing.DrawingManager>();
  const [map, setMap] = useState<google.maps.Map | null>(null);

  // Google Api Loader
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: googleApiKey ? googleApiKey : "",
    libraries: MAP_LIBRARIES,
  });

  const handleLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const handleUnmount = useCallback((map: google.maps.Map) => {
    setMap(null);
  }, []);

  useEffect(() => {
    if (isLoaded && googleApiKey) {
      localStorage.setItem("googleApiKey", googleApiKey);
    }
  }, [isLoaded]);

  return isLoaded ? (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        options={mapOptions}
        onLoad={handleLoad}
        onUnmount={handleUnmount}
      >
        {/* Child components, such as markers, info windows, etcgg. */}
        <CustomDrawingManager map={map}></CustomDrawingManager>
      </GoogleMap>
    </div>
  ) : (
    <CircularProgress />
  );
};

export default Map;
