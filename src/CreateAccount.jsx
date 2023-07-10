import React from "react";
import { signUpSchema } from "../src/schemas";
import { useFormik } from "formik"; //formik ar kaj data collect kora

const initialValues = {
  firstName: "", //name field a jei nam disi ota akhane dite hobe
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const CreateAccount = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues, //initial value pabo
      validationSchema: signUpSchema, //(validition hobe )   schema folder a index.jsx ar signUpSchema component akhane add korsi
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm(); //submit korar por form ar data jeno na dekhai reseet hoye jabe..
      }, //value pabo
    });
  console.log(errors); //kono err ase kina ta show korar jonno
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            First Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            value={values.firstName} //name field jei nam disi ota dite hobe
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.firstName && touched.firstName ? (
            <p className="text-red-400 font-semibold">{errors.firstName}</p>
          ) : null}            
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Last Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={values.lastName} //name field jei nam disi ota dite hobe
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.lastName && touched.lastName ? (
            <p className="text-red-400 font-semibold">{errors.lastName}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={values.email} //name field jei nam disi ota dite hobe
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.email && touched.email ? (
            <p className="text-red-400 font-semibold">{errors.email}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password} //name field jei nam disi ota dite hobe
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.password && touched.password ? (
            <p className="text-red-400 font-semibold">{errors.password}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Confirm Password:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={values.confirmPassword} //name field jei nam disi ota dite hobe
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.confirmPassword && touched.confirmPassword ? (
            <p className="text-red-400 font-semibold">
              {errors.confirmPassword}
            </p>
          ) : null}
        </div>
        <div className="flex items-center justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
