import MainContent from "./sections/MainContent";
import SideMenu from "./sections/SideMenu";

const MapEditor = () => {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex" }}>
      <div style={{ width: "360px", height: "100%" }}>
        <SideMenu />
      </div>
      <div style={{ flexGrow: 1, height: "100%" }}>
        <MainContent />
      </div>
    </div>
  );
};

export default MapEditor;
