import React, { createContext, useState } from "react";

type MapContextType = {
  googleApiKey?: string;
  setGoogleApiKey?: (key: string) => void;
};

export const MapContext = createContext<MapContextType>({});

export const MapContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [googleApiKey, setGoogleApiKey] = useState<string | undefined>();

  return (
    <MapContext.Provider value={{ googleApiKey, setGoogleApiKey }}>
      {children}
    </MapContext.Provider>
  );
};
