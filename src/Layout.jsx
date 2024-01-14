import { Outlet } from "react-router-dom";
import AsideNav from "./components/AsideNav";

export default function Layout() {
  return (
    <div className="h-screen w-full flex  flex-col  md:flex-row ">
      <AsideNav />
      <main className="w-full h-[calc(100vh-20px)] md:w-3/4 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
