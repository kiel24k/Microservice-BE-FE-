import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const UserLayout = () => {
  return (
    <>
      <nav>
        <Navbar/>
      </nav>
      <section>
        <Outlet/>
      </section>
    </>
  );
};

export default UserLayout;
