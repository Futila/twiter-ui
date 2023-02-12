import { createBrowserRouter } from "react-router-dom";
import { TimeLine } from "./pages/TimeLine";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <TimeLine />,
  },
  {
    path: "/tweet",
    element: <h1>Tweet</h1>,
  },
]);
