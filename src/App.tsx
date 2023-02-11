import { CredentialsContextProvider } from "./pages/MapEditor.tsx/contexts/CredentialsContext";
import MapEditor from "./pages/MapEditor.tsx/MapEditor";

const App = () => {
  return (
    <div className="App">
      <div style={{ width: "100vw", height: "100vh" }}>
        <CredentialsContextProvider>
          <MapEditor />
        </CredentialsContextProvider>
      </div>
    </div>
  );
};

export default App;
