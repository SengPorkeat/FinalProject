import { Navbar } from "flowbite-react";
import { NavbarComponent } from "./components/navbar/NavbarComponent";
import "./App.css";
import Home from "./page/home/Home";

export default function App() {
  return (
    <>
      <Home />
      {/* <main className="flex justify-center items-center flex-col">
        <h2 className="text-center text-2xl font-bold m-5">
          This is Section Page
        </h2>
      </main> */}
    </>
  );
}
