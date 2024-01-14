import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import {
  Home,
  ActivityTracker,
  Journal,
  MedicationReminder,
} from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <div>Error: go back</div>,
      children: [
        {
          path: "/",
          element: <Home />,
          errorElement: <div>Error: while fetching home page</div>,
        },
        {
          path: "/activity-tracker",
          element: <ActivityTracker />,
          errorElement: <div>Error: while fetching activity page</div>,
        },
        { path: "/journal", element: <Journal /> },
        { path: "/medication", element: <MedicationReminder /> },
        
      ],
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
