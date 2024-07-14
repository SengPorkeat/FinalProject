import { NavbarComponent } from "../navbar/NavbarComponent";
import { Outlet } from "react-router-dom";
import { FooterComponent } from "../footer/FooterComponent";
import { NavBarComponent2 } from "../navbar/NavBarComponent2";
export default function Layout() {
  return (
    <>
      <header>
        <NavBarComponent2 />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <FooterComponent />
      </footer>
    </>
  );
}
