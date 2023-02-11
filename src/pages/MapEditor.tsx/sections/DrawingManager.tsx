import { AddLocation, Polyline } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import OnMapMenuContainer from "../../../components/OnMapMenuContainer";
import { DrawingManager } from "@react-google-maps/api";

type CustomDrawingManagerProps = {
  map: google.maps.Map | null;
};

const CustomDrawingManager = ({ map }: CustomDrawingManagerProps) => {
  const DRAWING_MODES: { [key: string]: any } = {
    none: null,
    marker: google.maps.drawing.OverlayType.MARKER,
    polygon: google.maps.drawing.OverlayType.POLYGON,
  };

  const [drawingManager, setDrawingManager] =
    useState<google.maps.drawing.DrawingManager>();
  const [drawingMode, setDrawingMode] = useState(DRAWING_MODES.none);

  const handleOnLoad = useCallback(
    (drawingManager: google.maps.drawing.DrawingManager | undefined) => {
      console.log(drawingManager);
      setDrawingManager(() => drawingManager);
    },
    []
  );

  const handlePolygonComplete = (polygon: any) => {
    setDrawingMode(() => DRAWING_MODES.none);
  };

  const handleMarkerComplete = (marker: any) => {
    setDrawingMode(() => DRAWING_MODES.none);
  };

  return (
    <div>
      <OnMapMenuContainer positionProps={{ left: 20, bottom: 40 }}>
        <div style={{ display: "flex", gap: "16px" }}>
          <IconButton
            sx={{ backgroundColor: "whitesmoke" }}
            onClick={() => setDrawingMode(DRAWING_MODES.marker)}
          >
            <AddLocation />
          </IconButton>
          <IconButton
            sx={{ backgroundColor: "whitesmoke" }}
            onClick={() => setDrawingMode(DRAWING_MODES.polygon)}
          >
            <Polyline />
          </IconButton>
        </div>
      </OnMapMenuContainer>
      <DrawingManager
        onLoad={handleOnLoad}
        drawingMode={drawingMode}
        options={{ drawingControl: false }}
        onPolygonComplete={handlePolygonComplete}
        onMarkerComplete={handleMarkerComplete}
      />
    </div>
  );
};

export default CustomDrawingManager;
