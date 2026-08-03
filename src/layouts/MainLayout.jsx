import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Aurora from "../components/Aurora";

const MainLayout = () => (
  <div className="flex min-h-screen flex-col">
    <Aurora />
    <Navbar />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default MainLayout;
