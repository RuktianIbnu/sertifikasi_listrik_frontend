import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdToc, MdAdd, MdEdit, MdDelete } from "react-icons/md";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import { axiosGeneral } from "../../helpers/global";
import * as Yup from "yup";
import { useFormik } from "formik";
import {useSelector} from 'react-redux';

export default function Jabatan() {

  const [showModal, setShowModal] = useState(false);
  const accessToken = useSelector((state) => state.accessToken);
  const [dataJabatan, setDataJabatan] = useState([]);

  useEffect(() => {
    getDataJabatan();
  }, []);

  const getDataJabatan = async () => {
    try {

      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };

      const response = axiosGeneral.get("/resources/jabatan", {
        headers,
      });

      const {status, data} = response;
      if (status === 200) {
        setDataJabatan(data.data);
      } else {
        console.log("kosong : ", data.data)
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <Wrapper>
      <div className="flex flex-row justify-between items-center pb-24">
        <MenuTitle>Master Direktorat</MenuTitle>
        <ButtonAdd className="button" onClick={() => setShowModal(true)}>Tambah Direktorat</ButtonAdd>
      </div>
      <Card>
      {dataJabatan.length > 0 ? (
        <>
        <div className="flex flex-row mb-10">
          <p className="font-extrabold w-14 mr-2">No.</p>
          <p className="font-extrabold mr-2 w-96">Nama Jabatan</p>
          <p className="font-extrabold">Nama Atasan</p>
        </div>
        {dataJabatan.map((item, index) => (
          <div className="flex flex-row mb-10">
            <p className="font-extrabold w-14 mr-2">{index + 1}</p>
        <p className="font-extrabold mr-2 w-96">{item.nama_jabatan}</p>
            <p className="font-extrabold">{item.parent_id}</p>
          </div>
        ))}
        </>
      ) : (
        <>
        </>
      )}
      </Card>
      <Modal modalTitle="Tambah Jabatan"
        show={showModal}
        onClickBackdrop={() => setShowModal(!showModal)}
      >
        <Input
          labelText="Nama Jabatan"
          onChange={(e) => console.log(e.target.value)}
        />
        <div class="col-span-6 sm:col-span-3">
          <label className="font-bold text-black text-sm">Atasan</label>
          <select onChange={(e) => console.log(e.target.value)} id="atasan" name="atasan" autocomplete="atasan" className="w-full bg-gray-200 rounded-xl py-2 px-4 font-nunito focus:outline-none">
            <option value="lantaskim">Direktur</option>
            <option value="lantaskim">Kepala Sub Direktorat</option>
            <option value="kermakim">Kepala Seksi</option>
            <option value="sitik">Staff</option>
          </select>
        </div>
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