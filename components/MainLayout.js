import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import Router from "next/router";

const MainLayout = ({ children }) => {
  const accessToken = useSelector((state) => state.accessToken);
  useEffect(() => {
    if (!accessToken) {
      Router.replace("/");
    }
  }, [accessToken]);
  return (
    <div
      className="h-screen items-start flex"
      style={{ background: "#FAFBFC" }}
    >
      <Sidebar />
      <div className="w-full h-screen overflow-auto">{children}</div>
    </div>
  );
};

export default MainLayout;
