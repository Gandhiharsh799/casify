import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export function SelectItem(
  name,
  label,
  values,
  handlChange,
  handleBlur,
  touched,
  errors,
  selectedItems
) {
  return (
    <FormControl variant="outlined" sx={{ width: "45%" }}>
      <InputLabel color={touched[name] ? "error" : "primary"}>
        {label}
      </InputLabel>
      <Select
        label={label}
        name={name}
        value={values[name]}
        onChange={handlChange}
        error={touched[name] && !!errors[name]}
        onBlur={handleBlur}
      >
        {selectedItems.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
      {touched[name] && errors[name] && (
        <div className="text-danger">
          <small>{errors[name]}</small>
        </div>
      )}
    </FormControl>
  );
}
