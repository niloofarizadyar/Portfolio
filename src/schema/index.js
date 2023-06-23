import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters long")
    .required("Required"),
  email: yup.string().email("Please enter a valid email address"),
  type: yup
    .string()
    .oneOf(["card", "catalog", "video", "other"], "Invalid job type").required("Required"),
  description: yup.string().required("Required"),
});
