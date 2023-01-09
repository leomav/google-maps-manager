import React from "react";
import { MapContextProvider } from "./pages/MapEditor.tsx/contexts/MapContext";
import MapEditor from "./pages/MapEditor.tsx/MapEditor";

const App = () => {
  return (
    <div className="App">
      <div style={{ width: "100vw", height: "100vh" }}>
        <MapContextProvider>
          <MapEditor />
        </MapContextProvider>
      </div>
    </div>
  );
};

export default App;
