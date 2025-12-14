import { Outlet } from "react-router";
import HeaderLayout from "./header-layout";
import FooterLayout from "./footer-layout";

export default function GlobalLayout() {
  return (
    <div className="flex min-h-[100vh] flex-col bg-amber-100">
      <HeaderLayout />
      <main className="m-auto w-full max-w-300 flex-1 px-4 py-6">
        <Outlet />
      </main>
      <FooterLayout />
    </div>
  );
}
