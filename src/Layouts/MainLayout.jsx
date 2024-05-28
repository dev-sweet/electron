import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="py-5 mt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
