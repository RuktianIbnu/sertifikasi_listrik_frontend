import React, { useState } from "react";
import Head from "next/head";
import MainLayout from "../../components/MainLayout";
import styled from "styled-components";
import AssignTo from "../transaksi/index";
import Direktorat from "./direktorat";
import Subdirektorat from "./subdirektorat";
import Seksi from "./seksi";
import Jabatan from "./jabatan";
import Tipe from "./tipe";
import Pertanyaan from "./pertanyaan";

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
  const [tabActive, setTabActive] = useState("pertanyaan");
  return (
    <div>
      <Head>
        <title>Master - E-Survey</title>
      </Head>
      <MainLayout>
        <Tabbar className="flex flex-row justify-items-center">
          <TabItem
            onClick={() => setTabActive("AssignTo")}
            className={`cursor-pointer ${
              tabActive === "AssignTo"
                ? "border-b-2 border-black text-black"
                : "text-gray-400"
            }`}
          >
            Kuisioner
          </TabItem>
          <TabItem
            onClick={() => setTabActive("pertanyaan")}
            className={`cursor-pointer ${
              tabActive === "pertanyaan"
                ? "border-b-2 border-black text-black"
                : "text-gray-400"
            }`}
          >
            Pertanyaan
          </TabItem>
          {/* <TabItem
            onClick={() => setTabActive("jabatan")}
            className={`cursor-pointer ${
              tabActive === "jabatan"
                ? "border-b-2 border-black text-black"
                : "text-gray-400"
            }`}
          >
            Jabatan
          </TabItem> */}
          {/* <TabItem
            onClick={() => setTabActive("role")}
            className={`cursor-pointer ${
              tabActive === "role"
                ? "border-b-2 border-black text-black"
                : "text-gray-400"
            }`}
          >
            Role
          </TabItem>
          <TabItem
            onClick={() => setTabActive("format-nomor")}
            className={`cursor-pointer ${
              tabActive === "format-nomor"
                ? "border-b-2 border-black text-black"
                : "text-gray-400"
            }`}
          >
            Format Nomor
          </TabItem> */}
          <TabItem
            onClick={() => setTabActive("tipe")}
            className={`cursor-pointer ${
              tabActive === "tipe"
                ? "border-b-2 border-black text-black"
                : "text-gray-400"
            }`}
          >
            Tipe Poin
          </TabItem>
          <TabItem
            onClick={() => setTabActive("direktorat")}
            className={`cursor-pointer ${
              tabActive === "direktorat"
                ? "border-b-2 border-black text-black"
                : "text-gray-400"
            }`}
          >
            Instansi
          </TabItem>
          {/* <TabItem
            onClick={() => setTabActive("subdir")}
            className={`cursor-pointer ${
              tabActive === "subdir"
                ? "border-b-2 border-black text-black"
                : "text-gray-400"
            }`}
          >
            Sub Direktorat
          </TabItem> */}
          {/* <TabItem
            onClick={() => setTabActive("seksi")}
            className={`cursor-pointer ${
              tabActive === "seksi"
                ? "border-b-2 border-black text-black"
                : "text-gray-400"
            }`}
          >
            Seksi
          </TabItem> */}
        </Tabbar>
        {tabActive === "AssignTo" && <AssignTo />}
        {tabActive === "jabatan" && <Jabatan />}
        {tabActive === "role" && <h1>Role</h1>}
        {tabActive === "format-nomor" && <h1>Format Nomor</h1>}
        {tabActive === "direktorat" && <Direktorat />}
        {tabActive === "subdir" && <Subdirektorat />}
        {tabActive === "seksi" && <Seksi />}
        {tabActive === "tipe" && <Tipe />}
        {tabActive === "pertanyaan" && <Pertanyaan />}
      </MainLayout>
    </div>
  );
}
