import { createBrowserRouter } from "react-router";
import { WebsiteView } from "./components/WebsiteView";
import { SupportView } from "./components/SupportView";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: WebsiteView,
  },
  {
    path: "/support",
    Component: SupportView,
  },
]);
