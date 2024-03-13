import { Outlet } from "react-router-dom";
import Home from "../components/Home";

export default function RootLayout() {
  return (
    <>
      <Home />
      <main>
        <Outlet />
      </main>
    </>
  );
}
