import { Box, Button, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { User, UserFormProps } from "../utils/models";
import { getUserFormFields } from "../utils/user-form";

export const UserForm = ({ submit, cancel }: UserFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Partial<User>>({
    mode: "onTouched",
  });

  const userFormFields = getUserFormFields();
  const getFormField = (formField: any) => {
    const key = formField.field as keyof User;
    const error = errors[key];
    return (
      <TextField
        key={key}
        label={formField.label}
        placeholder={formField.placeholder}
        InputLabelProps={{
          shrink: true,
        }}
        error={!!error}
        helperText={error && formField.helperText}
        {...register(key, formField.validators)}
      />
    );
  };

  return (
    <Box sx={{ width: "400px", paddingTop: 1 }}>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
        onSubmit={handleSubmit(submit)}
      >
        <Stack spacing={4} width={"100%"}>
          {userFormFields.map((formField) => getFormField(formField))}
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button onClick={() => cancel()}>Cancel</Button>
            <Button type="submit" color="primary" variant="contained">
              Submit
            </Button>
          </Box>
        </Stack>
      </form>
    </Box>
  );
};
