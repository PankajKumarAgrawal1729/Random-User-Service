import { Outlet } from "react-router-dom";
import { Header } from "..";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
