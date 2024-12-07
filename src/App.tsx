import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
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
import Login from "./pages/auth/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthProvider";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/auth">
        <Route path="login" element={<Login />} />
      </Route>
      <Route
        path="/"
        element={
          <AuthProvider>
            <ProtectedRoute>
              <Layout>
                <Outlet />
              </Layout>
            </ProtectedRoute>
          </AuthProvider>
        }
      >
        <Route index element={<Home />} />
        <Route path="playground/about" element={<About />} />
        <Route path="playground/contact" element={<Contact />} />
        <Route path="models/genesis" element={<Genesis />} />
        <Route path="models/explorer" element={<Explorer />} />
        <Route path="models/quantum" element={<Quantum />} />
        <Route path="docs/introduction" element={<Introduction />} />
        <Route path="docs/get-started" element={<GetStarted />} />
        <Route path="docs/tutorials" element={<Tutorials />} />
        <Route path="docs/changelog" element={<Changelog />} />
        <Route path="settings/general" element={<General />} />
        <Route path="settings/team" element={<Team />} />
        <Route path="settings/billing" element={<Billing />} />
        <Route path="settings/limits" element={<Limits />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  )
);

const App = () => {
  return (
    <>
      <ThemeInit />
      <RouterProvider router={router} />
    </>
  );
};

export default App;