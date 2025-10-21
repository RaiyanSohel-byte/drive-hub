import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Loader from "../components/common/Loader";

const MainLayout = () => {
  const { state } = useNavigation();
  return (
    <div>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main>{state === "loading" ? <Loader /> : <Outlet />}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
