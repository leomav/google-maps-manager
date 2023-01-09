import { TextField, Typography, Button } from "@mui/material";
import { useCallback, useContext, useState } from "react";
import InputField from "../../../components/InputField";
import { MapContext } from "../contexts/MapContext";

const Credentials = () => {
  const { setGoogleApiKey } = useContext(MapContext);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = useCallback(() => {
    if (setGoogleApiKey) {
      setGoogleApiKey(inputValue);
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "20%",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        <Typography variant="h4">
          Fill in your Google Api Key to use Google Maps
        </Typography>
        <br></br>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <InputField
            size="small"
            fullWidth
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required
            error={inputValue.length === 0}
            helperText={"This field cannot be empty."}
          />
          <span style={{ width: "10px" }} />
          <Button
            disabled={inputValue.length === 0}
            variant="contained"
            onSubmit={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Credentials;
