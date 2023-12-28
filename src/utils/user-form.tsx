import { FormFieldModel } from "./models";

export const getUserFormFields = (): FormFieldModel[] => [
  {
    field: "name",
    label: "Name",
    placeholder: "Name",
    type: "text",
    helperText: "Invalid Name",
  },
  {
    field: "email",
    label: "Email",
    placeholder: "Email",
    type: "email",
    validators: {
      required: true,
      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    },
    helperText: "Invalid Email",
  },
  {
    field: "phone",
    label: "Phone",
    placeholder: "Phone",
    type: "text",
    validators: {
      required: true,
      pattern: /^[0-9]*$/,
    },
    helperText: "Invalid Phone (only numbers)",
  },
];
