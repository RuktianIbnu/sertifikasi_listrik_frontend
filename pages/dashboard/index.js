import React, { useState, useEffect } from "react";
import MainLayout from "../../components/MainLayout";
import Head from "next/head";

import { useDispatch, useSelector } from "react-redux";

export default function Dashboard() {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.accessToken);
  const userdetail = useSelector((state) => state.user);

  useEffect(() => {
    if (accessToken != null) {
      console.log(accessToken)
      console.log(userdetail)
    }
  }, []);

  
  return (
    <div>
      <Head>
        <title>Dashboard - Listrik</title>
      </Head>
      <MainLayout>
        <div className="pt-10 px-8">
        <h1>dashboard</h1>
        </div>
      </MainLayout>
    </div>
  );
}
