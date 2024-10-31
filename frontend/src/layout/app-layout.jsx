import Cursor from "@/components/Cursor";
import Header from "@/components/shared/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen">
        <Cursor />
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
