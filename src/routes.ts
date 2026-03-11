import { createBrowserRouter } from "react-router";
import { WebsiteView } from "./components/WebsiteView";
import { SupportView } from "./components/SupportView";

const basename =
  import.meta.env.BASE_URL === "/"
    ? "/"
    : import.meta.env.BASE_URL.replace(/\/$/, "");

export const router = createBrowserRouter([
  {
    path: "/",
    Component: WebsiteView,
  },
  {
    path: "/support",
    Component: SupportView,
  },
], {
  basename,
});
