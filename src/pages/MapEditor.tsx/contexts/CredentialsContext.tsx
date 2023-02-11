import React, { createContext, useEffect, useState } from "react";

type CredentialsContextType = {
  googleApiKey?: string;
  setGoogleApiKey?: (key: string) => void;
};

export const CredentialsContext = createContext<CredentialsContextType>({});

export const CredentialsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [googleApiKey, setGoogleApiKey] = useState<string | undefined>();

  useEffect(() => {
    const key = localStorage.getItem("googleApiKey");
    if (key) {
      setGoogleApiKey(key);
    }
  }, []);

  return (
    <CredentialsContext.Provider value={{ googleApiKey, setGoogleApiKey }}>
      {children}
    </CredentialsContext.Provider>
  );
};
