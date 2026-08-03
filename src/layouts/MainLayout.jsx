import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Aurora from "../components/Aurora";
import ScrollProgress from "../components/ScrollProgress";
import PageTransition from "../components/PageTransition";

const MainLayout = () => (
  <div className="flex min-h-screen flex-col">
    <Aurora />
    <ScrollProgress />
    <Navbar />
    <main className="flex-1">
      <PageTransition>
        <Outlet />
      </PageTransition>
    </main>
    <Footer />
  </div>
);

export default MainLayout;
