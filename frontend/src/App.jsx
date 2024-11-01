import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import Home from "./pages/Home/Home";
import AppLayout from "./layout/app-layout";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Jobs from "./pages/Jobs/Jobs";
import OurTeam from "./pages/OurTeam";
import Browse from "./pages/Browse/Browse";
import Profile from "./pages/Profile/Profile";
import JobDescription from "./pages/Jobs/JobDescription";
import Companies from "./pages/admin/Companies";
import CompanyCreate from "./pages/admin/CompanyCreate";
import CompanySetup from "./pages/admin/CompanySetup";
import AdminJobs from "./pages/admin/AdminJobs";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/Signup",
        element: <Signup />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/description/:id",
        element: <JobDescription />,
      },
      {
        path: "/our-team",
        element: <OurTeam />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },

      // admins ke liye yaha se start hoga 

      {
        path: "/admin/companies",
        element: <Companies />,
      },
      {
        path: "/admin/companies/create",
        element: <CompanyCreate />,
      },
      {
        path: "/admin/companies/:id",
        element: <CompanySetup />,
      },
      {
        path: "/admin/jobs",
        element: <AdminJobs />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
