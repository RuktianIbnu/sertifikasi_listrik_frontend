import React, { useState } from "react";
import styled from "styled-components";
import Pagination from "react-js-pagination";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";

import KegiatanRow from "../../components/kuesioner/KegiatanRow";
import OutputRow from "../../components/kuesioner/OutputRow";
import ImplementasiRow from "../../components/kuesioner/ImplementasiKuesioner";
import PertanyaanRow from "../../components/kuesioner/PertanyaanKuesioner";
import EmptyState from "../../components/EmptyState";
import Modal from "../../components/Modal";
import { Transition } from "@tailwindui/react";

const Wrapper = styled.div`
  padding: 23px 54px 0px 54px;
`;
const MenuTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #000;
`;
const ButtonAdd = styled.div`
  font-size: 14px;
  background: #4361ee;
  color: #fff;
  padding: 10px 23px;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
`;
const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.25);
  padding: 30px 46px 30px 46px;
`;

export default function Kuesioner() {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <Wrapper>
      <div className="flex flex-row justify-between items-center pb-24">
        <MenuTitle>Master Kuesioner</MenuTitle>
        <ButtonAdd
          className="cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          Tambah Kuisioner baru
        </ButtonAdd>
      </div>
      {/* <EmptyState message="Tidak ada Kuesioner" /> */}

      <Modal show={showModal} onClickBackdrop={() => setShowModal(!showModal)}>
        <h1>Default Control</h1>
      </Modal>
      <Card>
        <div className="flex flex-row mb-10">
          <p className="font-extrabold w-14 mr-2">No.</p>
          <p className="font-extrabold mr-2 w-96">Kegiatan</p>
          <p className="font-extrabold">Bobot</p>
        </div>
        <div>
          <KegiatanRow show={show} setShow={(val) => setShow(val)} number={1} />
          <div className={show === true ? "" : "hidden"}>
            <OutputRow />
            <div>
              <ImplementasiRow />
              <PertanyaanRow />
              <PertanyaanRow />
              <PertanyaanRow />
            </div>
            <ImplementasiRow />
            <ImplementasiRow />
          </div>
        </div>
        {[1, 2, 3, 4, 5].map((index) => (
          <KegiatanRow number={index + 1} key={index} />
        ))}
        <div className="w-full mt-8 flex flex-row justify-center items-center">
          <Pagination
            activePage={15}
            itemsCountPerPage={10}
            totalItemsCount={450}
            pageRangeDisplayed={5}
            onChange={(pageNumber) => console.log(pageNumber)}
            itemClass="bg-blue-100 py-2 px-4 mx-1 rounded font-bold"
            linkClass="text-gray-700 hover:no-underline hover:text-gray-700"
            hideFirstLastPages={true}
            prevPageText={<ChevronLeft />}
            nextPageText={<ChevronRight />}
            activeClass="bg-blue-400"
            activeLinkClass="text-white"
          />
        </div>
      </Card>
    </Wrapper>
  );
}
