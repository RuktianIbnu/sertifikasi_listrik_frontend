import React, { useState } from "react";
import Head from "next/head";
import MainLayout from "../../components/MainLayout";
import styled from "styled-components";
import Tarif from "./tarif";
import Pelanggan from "./pelanggan";
import Level from "./level";
import User from "./user";

const Tabbar = styled.div`
  width: 100%;
  background: #fff;
  height: 60px;
  padding: 20px 40px 0px 40px;
`;
const TabItem = styled.div`
  font-weight: bold;
  margin-right: 2.5rem;
`;
export default function Master() {
  const [tabActive, setTabActive] = useState("user");
  return (
    <div>
      <Head>
        <title>Master - Listrik</title>
      </Head>
      <MainLayout>
        <Tabbar className="flex flex-row justify-items-center">
          <TabItem
            onClick={() => setTabActive("pelanggan")}
            className={`cursor-pointer ${
              tabActive === "pelanggan"
                ? "border-b-2 border-black text-black"
                : "text-gray-400"
            }`}
          >
            Pelanggan
          </TabItem>
          <TabItem
            onClick={() => setTabActive("tarif")}
            className={`cursor-pointer ${
              tabActive === "tarif"
                ? "border-b-2 border-black text-black"
                : "text-gray-400"
            }`}
          >
            Tarif
          </TabItem>
          <TabItem
            onClick={() => setTabActive("level")}
            className={`cursor-pointer ${
              tabActive === "level"
                ? "border-b-2 border-black text-black"
                : "text-gray-400"
            }`}
          >
            Level
          </TabItem>
          <TabItem
            onClick={() => setTabActive("user")}
            className={`cursor-pointer ${
              tabActive === "user"
                ? "border-b-2 border-black text-black"
                : "text-gray-400"
            }`}
          >
            User
          </TabItem>
        </Tabbar>
        {tabActive === "pelanggan" && <Pelanggan />}
        {tabActive === "user" && <User />}
        {tabActive === "level" && <Level />}
        {tabActive === "tarif" && <Tarif />}
      </MainLayout>
    </div>
  );
}
