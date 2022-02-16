import React, { useState } from "react";
import Head from "next/head";
import MainLayout from "../../components/MainLayout";
import styled from "styled-components";
import Penggunaan from "./penggunaan";
import Tagihan from "./tagihan";
import Pembayaran from "./pembayaran";

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
export default function Transaksi() {
  const [tabActive, setTabActive] = useState("penggunaan");
  return (
    <div>
      <Head>
        <title>Transaksi - Listrik</title>
      </Head>
      <MainLayout>
        <Tabbar className="flex flex-row justify-items-center">
          <TabItem
            onClick={() => setTabActive("penggunaan")}
            className={`cursor-pointer ${
              tabActive === "penggunaan"
                ? "border-b-2 border-black text-black"
                : "text-gray-400"
            }`}
          >
            Penggunaan
          </TabItem>
          <TabItem
            onClick={() => setTabActive("tagihan")}
            className={`cursor-pointer ${
              tabActive === "tagihan"
                ? "border-b-2 border-black text-black"
                : "text-gray-400"
            }`}
          >
            Tagihan
          </TabItem>
          <TabItem
            onClick={() => setTabActive("pembayaran")}
            className={`cursor-pointer ${
              tabActive === "pembayaran"
                ? "border-b-2 border-black text-black"
                : "text-gray-400"
            }`}
          >
            Pembayaran
          </TabItem>
        </Tabbar>
        {tabActive === "penggunaan" && <Penggunaan/>}
        {tabActive === "tagihan" && <Tagihan />}
        {tabActive === "pembayaran" && <Pembayaran />}
      </MainLayout>
    </div>
  );
}
