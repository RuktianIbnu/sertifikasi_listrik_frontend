import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdToc, MdAdd, MdEdit, MdDelete } from "react-icons/md";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";

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
export default function Seksi() {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedDirektorat, setSelectedDirektorat] = useState([]);
  const [selectedSubDirektorat, setSelectedSubDirektorat] = useState([]);
  const [iDeskripsi, setiDeskripsi] = useState("");
  const [iSeksi, setiSeksi] = useState("");

  return (
    <Wrapper>
      <div className="flex flex-row justify-between items-center pb-24">
        <MenuTitle>Master Seksi</MenuTitle>
        <ButtonAdd className="button" onClick={() => setShowModal(true)}>Tambah Seksi</ButtonAdd>
      </div>
      <Card>
        <div className="flex flex-row mb-10">
          <p className="font-extrabold w-12">No.</p>
          <p className="font-extrabold w-1/6">Kode Direktorat</p>
          <p className="font-extrabold w-1/6 mr-4">Kode Sub Direktorat</p>
          <p className="font-extrabold w-1/6">Kode Seksi</p>
          <p className="font-extrabold w-1/2">Deskripsi</p>
        </div>
        <div className="flex flex-row items-baseline">
          <div className="w-12 text-sm font-nunito font-semibold text-black">
            1
          </div>
          <div className="w-1/6 text-sm font-nunito font-semibold text-black">
          Lantaskim
          </div>
          <div className="w-1/6 mr-4 text-sm font-nunito font-semibold text-black">
          subdit visa
          </div>
          <div className="w-1/6 text-sm font-nunito font-semibold text-black">
          seksi statusverikasi
          </div>
          <div className="w-1/2 text-sm font-nunito font-semibold text-black">
          Seksi Status Verifikasi
          </div>
          <div className="flex flex-row absolute right-20">
            <div className="hover:bg-gray-400 rounded-full cursor-pointer p-2 mr-3">
              <MdEdit size="24px" color="#565656" />
            </div>
            <div className="hover:bg-gray-400 rounded-full cursor-pointer p-2 mr-3">
              <MdDelete size="24px" color="#565656" />
            </div>
          </div>
        </div>
      </Card>
      <Modal modalTitle="Tambah Seksi"
        show={showModal}
        onClickBackdrop={() => setShowModal(!showModal)}
      >
        <div class="col-span-6 sm:col-span-3">
          <label className="font-bold text-black text-sm">Direktorat</label>
          <select onChange={(e) => setSelectedDirektorat(e.target.value)} id="direktorat" name="direktorat" autocomplete="direktorat" className="w-full bg-gray-200 rounded-xl py-2 px-4 font-nunito focus:outline-none">
            <option value="">Pilih Direktorat</option>
            <option value="lantaskim">Dit Lantaskim</option>
            <option value="kermakim">Dit Kermakim</option>
            <option value="sistik">Dit Sistik</option>
          </select>
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label className="font-bold text-black text-sm">Sub Direktorat</label>
          <select onChange={(e) => setSelectedSubDirektorat(e.target.value)} id="subdirektorat" name="subdirektorat" autocomplete="subdirektorat" className="w-full bg-gray-200 rounded-xl py-2 px-4 font-nunito focus:outline-none">
            <option value="">Pilih Sub Direktorat</option>
            <option value="YYY">SubDit YYY</option>
            <option value="XXX">SubDit XXX</option>
            <option value="ZZZ">SubDit ZZZ</option>
          </select>
        </div>
        <Input
          labelText="Kode Seksi"
          onChange={(e) => setiSeksi(e.target.value)}
        />
        <TextArea
          onChange={(e) => setiDeskripsi(e.target.value)}
          className="mt-4"
          labelText="Deskripsi"
        />
        <Button
          buttonText="Simpan"
          buttonColor="#4361EE"
          buttonTextColor="#FFF"
          fontSize={14}
          className="mt-4"
        />
      </Modal>
    </Wrapper>
  );
}
