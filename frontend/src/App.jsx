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
