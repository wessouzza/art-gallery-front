import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router";
import './layout.css';
import { SearchProvider } from "../../context/SearchContext";

const Layout = () => {
  return (
    <>
      <SearchProvider>
      <Navbar/>
      <main>
        <Outlet />
      </main>
      <Footer />
      </SearchProvider>
    </>
  );
};

export default Layout;
