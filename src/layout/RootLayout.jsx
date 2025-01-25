
import Navbar from "../parts/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../parts/Footer";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
