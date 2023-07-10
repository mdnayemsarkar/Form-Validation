import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SubmitForms from "./From";
import SubmitForm from "./App";
import CreateAccount from "./CreateAccount";


const Myproject = () => {
  const router = createBrowserRouter([
   
    {
      path: "submt",
      element: <SubmitForms />,
    },
    {
      path: "/",
      element: <CreateAccount />,
    },
    {
      path: "/submit",
      element: <SubmitForm />,
    },
  ]);
  return <RouterProvider router={router} />;
};
export default Myproject;
