import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import { Outlet } from "react-router-dom";
import Home from "./pages/playground/Home";
import About from "./pages/playground/About";
import Contact from "./pages/playground/Contact";
import NotFound from "./pages/NotFound";
import Genesis from "./pages/models/Genesis";
import Explorer from "./pages/models/Explorer";
import Quantum from "./pages/models/Quantum";
import Introduction from "./pages/docs/Introduction";
import GetStarted from "./pages/docs/GetStarted";
import Tutorials from "./pages/docs/Tutorials";
import Changelog from "./pages/docs/Changelog";
import General from "./pages/settings/General";
import Team from "./pages/settings/Team";
import Billing from "./pages/settings/Billing";
import Limits from "./pages/settings/Limits";
import { ThemeInit } from "./components/theme-init";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Outlet /></Layout>,
    children: [
      { index: true, element: <Home /> },
      { path: "playground/about", element: <About /> },
      { path: "playground/contact", element: <Contact /> },
      { path: "models/genesis", element: <Genesis /> },
      { path: "models/explorer", element: <Explorer /> },
      { path: "models/quantum", element: <Quantum /> },
      { path: "docs/introduction", element: <Introduction /> },
      { path: "docs/get-started", element: <GetStarted /> },
      { path: "docs/tutorials", element: <Tutorials /> },
      { path: "docs/changelog", element: <Changelog /> },
      { path: "settings/general", element: <General /> },
      { path: "settings/team", element: <Team /> },
      { path: "settings/billing", element: <Billing /> },
      { path: "settings/limits", element: <Limits /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const App = () => {
  return (
    <>
      <ThemeInit />
      <RouterProvider router={router} />
    </>
  );
};

export default App;