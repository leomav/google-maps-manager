import { Grid } from "@mui/material";

const Container = () => {
  console.log("hi");

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Grid
        sx={{ width: "100%", height: "100%", border: "solid blue" }}
        container
      >
        <div style={{ display: "flex" }}></div>
      </Grid>
    </div>
  );
};

export default Container;
