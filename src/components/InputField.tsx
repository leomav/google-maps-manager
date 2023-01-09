import { TextField, TextFieldProps } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

const InputField = (props: TextFieldProps) => {
  const [fieldState, setFieldState] = useState({
    touched: false,
    error: false,
  });

  const handleBlur = useCallback(
    (e: any) => {
      setFieldState((oldState) => ({
        ...oldState,
        touched: true,
      }));
    },
    [props.error]
  );

  useEffect(() => {
    if (!fieldState.touched) {
      return;
    }
    setFieldState((oldState) => ({
      ...oldState,
      error: props.error ? props.error : false,
    }));
  }, [props.error, fieldState.touched]);

  return (
    <TextField
      {...props}
      onBlur={handleBlur}
      error={fieldState.error}
      helperText={fieldState.error ? props.helperText : ""}
    />
  );
};

export default InputField;
