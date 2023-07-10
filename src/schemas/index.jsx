import * as yup from "yup";           //yup install kore nite hobe

export const signUpSchema = yup.object({
  firstName: yup.string().min(3).max(10).required("Fisrt Name is required"),
  lastName: yup.string().min(3).max(10).required("Last Name is required"),
  email: yup.string().email().required("Please enter your email"),
  password: yup.string().min(6).required("Please enter your password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords do not match"),
});
