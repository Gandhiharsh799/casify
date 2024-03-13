import { TextField } from "@mui/material";

export const InputField = ({
  type,
  name,
  label,
  value,
  onChange,
  onBlur,
  touched,
  error,
  helperText,
}) => {
  return (
    <TextField
      type={type}
      className="mb-3"
      name={name}
      label={label}
      variant="outlined"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={touched && error}
      sx={{
        width: "70%",
      }}
      helperText={touched && error ? helperText : ""}
      FormHelperTextProps={{
        sx: { fontSize: "12px", marginLeft: "0px" },
      }}
    />
  );
};
