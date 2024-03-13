import { TextField } from "@mui/material";

export const ModalInput = ({
  name,
  type,
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
      name={name}
      type={type}
      label={label}
      variant="outlined"
      sx={{ width: "45%" }}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={touched && error}
      helperText={touched && error ? helperText : ""}
      FormHelperTextProps={{
        sx: { fontSize: "14px", marginLeft: "0px" },
      }}
      InputLabelProps={type === 'date'? {shrink: true }: {}}
      inputProps={type === 'date'? { placeholder: "" }: {}}
      
    />
  );
};
