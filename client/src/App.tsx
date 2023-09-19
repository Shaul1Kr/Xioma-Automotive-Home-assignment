import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layouts/Layout";
import LoginPage from "./Pages/LoginPage";
import Choice from "./Pages/Choice";
import CustomersPage from "./Pages/CustomersPage";
import AppointmentPage from "./Pages/AppointmentPage";

export default function App() {
  return <RouterProvider router={router} />;
}

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", element: <LoginPage /> },
      {
        path: "/choice",
        element: <Choice />,
      },
      { path: "/customers", element: <CustomersPage /> },
      { path: "/appointment", element: <AppointmentPage /> },
    ],
  },
]);
