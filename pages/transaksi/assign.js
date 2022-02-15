import MainLayout from "../../components/MainLayout";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Edit,
  Delete,
  Visibility,
  CheckBox,
  RadioButtonChecked,
  Publish,
  Subject,
  Add,
} from "@material-ui/icons";
import { Tooltip } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { axiosGeneral } from "../../helpers/global";
import { useToasts } from "react-toast-notifications";
import ReactLoading from "react-loading";
import { setLoading } from "../../store/actionCreator";
import Head from "next/head";
import Router from "next/router";
import Select from "react-select";
import { MdSearch } from "react-icons/md";
import Modal from "../../components/Modal";
import Button from "../../components/Button";
import makeAnimated from "react-select/animated";
import Search from "../../components/Search";

const animatedComponents = makeAnimated();

const Wrapper = styled.div`
  padding: 23px 54px 0px 54px;
`;
const MenuTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #000;
`;
const ButtonPilih = styled.div`
  font-size: 14px;
  background: #4361ee;
  color: #fff;
  padding: 10px 10px;
  border-radius: 10px;
  font-weight: 500;
  width: 70%;
  cursor: pointer;
  text-align: center;
`;
const ButtonAdd = styled.div`
  font-size: 14px;
  background: #4361ee;
  color: #fff;
  padding: 10px 23px;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
`;
const ButtonBack = styled.div`
  font-size: 14px;
  background: #4361ee;
  color: #fff;
  padding: 10px 23px;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
`;
const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.25);
  padding: 30px 25px 30px 25px;
  margin-bottom: 30px;
`;
export default function Assign() {
  const accessToken = useSelector((state) => state.accessToken);
  const [listPertanyaan, setListPertanyaan] = useState([]);
  const [showList, setShowList] = useState(true);
  const [showLov, setShowLov] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [selectedID, setSelectedID] = useState();
  const { addToast } = useToasts();
  const dispatch = useDispatch();

  const colourOptions = [
    { value: "ocean", label: "Direktorat A (Direktur)", color: "#00B8D9", isFixed: true },
    { value: "blue", label: "Direktorat A", color: "#0052CC" },
    { value: "purple", label: "Sub Direktorat x (Kasubdit)", color: "#5243AA" },
    { value: "red", label: "Subdirektorat", color: "#FF5630", isFixed: true },
    { value: "orange", label: "Orange", color: "#FF8B00" },
    { value: "yellow", label: "Yellow", color: "#FFC400" },
    { value: "green", label: "Green", color: "#36B37E" },
    { value: "forest", label: "Forest", color: "#00875A" },
    { value: "slate", label: "Slate", color: "#253858" },
    { value: "silver", label: "Silver", color: "#666666" },
  ];

  return (
    <div>
      <Head>
        <title>Assign To - E-Survey</title>
      </Head>
      <MainLayout>
        <Wrapper>
          <div className="flex flex-row justify-between items-center pb-24">
            <MenuTitle>Assign Kuisioner</MenuTitle>
            <ButtonBack
              onClick={() => Router.push("/transaksi")}
              className="cursor-pointer"
            >
              Kembali
            </ButtonBack>

            {/* <ButtonBack
              hidden={showList}
              onClick={() => {
                // setShowList(true);
                // setShowAdd(false);
              }}
              className="cursor-pointer"
            >
              Kembali
            </ButtonBack> */}
          </div>
          <Card>
            <label className="block text-sm font-bold pb-0">Pilih Title</label>
            {/* <div className="grid grid-cols-16 gap-4 my-2 items-center py-2"> */}
            <div className="flex flex-row my-2 py-2">
              <div className="w-11/12">
                <Select
                //   value={dataInstasi.find((op) => op.value === selectedInstansi)}
                //   onChange={(e) => setSelectedInstansi(e.value)}
                //   options={dataInstasi}
                />
              </div>
              {/* <div onClick={() => setShowLov(true)}>
                <MdSearch
                  size="24px"
                />
              </div> */}
              <div className="ml-4">
                {/* <label className="block text-sm font-bold pb-0">Search</label> */}
                <ButtonAdd
                  onClick={() => setShowLov(true)}
                  className="cursor-pointer"
                >
                  Search
                </ButtonAdd>
              </div>
            </div>
            <label className="block text-sm font-bold pb-0">
              Target Koresponden
            </label>
            <div>
              <Select
                isMulti
                closeMenuOnSelect={true}
                components={animatedComponents}
                options={colourOptions}
              />
            </div>
            <div className="my-4">
              <Select
                isMulti
                closeMenuOnSelect={true}
                components={animatedComponents}
                options={colourOptions}
              />
            </div>
            <div className="mt-4 w-24">
              {/* <label className="block text-sm font-bold pb-0">Search</label> */}
              <ButtonAdd
                className="cursor-pointer"
              >
                Simpan
              </ButtonAdd>
            </div>
          </Card>
          <Card>
            <div className="flex flex-row gap-6 mb-6">
              <div className="w-4/5">
                <label className="block text-sm font-bold pb-0">Title</label>
                <input className="w-full text-sm py-2 px-3 bg-gray-200 rounded focus:outline-none" disabled/>
              </div>
              <div className="w-1/5">
                <label className="block text-sm font-bold pb-0">Poin</label>
                <input className="w-full text-sm py-2 px-3 bg-gray-200 rounded focus:outline-none" disabled/>
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold pb-0">Deskripsi</label>
              <textarea className="w-full text-sm py-2 px-3 bg-gray-200 rounded focus:outline-none h-28 resize-none" disabled></textarea>
            </div>
          </Card>
          <Card>
            <div className="grid grid-flow-col col-auto gap-6 mb-10 ml-0">
              <div className="col-span-3">
                <label className="text-sm font-bold pb-0">Pertanyaan</label>
                <input className="block w-full  text-sm py-2 px-3 bg-gray-200 rounded focus:outline-none" disabled/>
              </div>
              <div>
                <label className="text-sm font-bold pb-0">Bobot</label>
                <input className="block w-full  text-sm py-2 px-3 bg-gray-200 rounded focus:outline-none" disabled/>
              </div>
              <div>
                <label className="text-sm font-bold pb-0">Tipe Poin</label>
                <select className="block w-full  text-sm py-2 px-3 bg-gray-200 rounded focus:outline-none" disabled>
                  <option value="NULL" disabled>
                    Pilih Tipe Poin
                  </option>
                </select>
              </div>
            </div>
            <div className="grid grid-flow-col grid-cols-4 gap-4 border-b-2">
              <p className="text-sm font-bold">Label</p>
              <p className="text-sm font-bold">Deskripsi</p>
              <p className="text-sm font-bold">Bobot</p>
              <p className="text-sm font-bold justify-items-center items-center flex justify-center">
                Tipe Kontrol
              </p>
            </div>
            <div className="grid grid-flow-col grid-cols-4 gap-4 py-2">
              <input className=" w-full text-sm py-2 px-3 bg-gray-200 rounded focus:outline-none" disabled/>
              <input className=" w-full text-sm py-2 px-3 bg-gray-200 rounded focus:outline-none" disabled/>
              <input
                pattern="[0-9]"
                className=" w-full text-sm py-2 px-3 bg-gray-200 rounded focus:outline-none"
                disabled
              />
              <div className="justify-items-center items-center flex justify-center">
                <Tooltip title="Pilihan">
                  <RadioButtonChecked />
                </Tooltip>
              </div>
            </div>
            <div className="grid grid-flow-col grid-cols-4 gap-4 py-2">
              <input className=" w-full text-sm py-2 px-3 bg-gray-200 rounded focus:outline-none" disabled/>
              <input className=" w-full text-sm py-2 px-3 bg-gray-200 rounded focus:outline-none" disabled/>
              <input
                pattern="[0-9]"
                className=" w-full text-sm py-2 px-3 bg-gray-200 rounded focus:outline-none"
                disabled
              />
              <div className="justify-items-center items-center flex justify-center">
                <Tooltip title="Pilihan ganda">
                  <CheckBox />
                </Tooltip>
              </div>
            </div>
          </Card>
          <Card>
            <div className="grid grid-flow-col col-auto gap-6 mb-10">
              <div className="col-span-3">
                <label className="text-sm font-bold pb-0">Pertanyaan</label>
                <input className="block w-full text-sm py-2 px-3 bg-gray-200 rounded" disabled/>
              </div>
              <div>
                <label className="text-sm font-bold pb-0">Bobot</label>
                <input className="block w-full  text-sm py-2 px-3 bg-gray-200 rounded" disabled/>
              </div>
              <div>
                <label className="text-sm font-bold pb-0">Tipe Poin</label>
                <select className="block w-full  text-sm py-2 px-3 bg-gray-200 rounded" disabled>
                  <option value="NULL" disabled>
                    Pilih Tipe Poin
                  </option>
                </select>
              </div>
            </div>
            <div className="grid grid-flow-col grid-cols-4 gap-4 border-b-2">
              <p className="text-sm font-bold">Label</p>
              <p className="text-sm font-bold">Deskripsi</p>
              <p className="text-sm font-bold">Bobot</p>
              <p className="text-sm font-bold justify-items-center items-center flex justify-center">
                Tipe Kontrol
              </p>
            </div>
            <div className="grid grid-flow-col grid-cols-4 gap-4 py-2">
              <input className=" w-full text-sm py-2 px-3 bg-gray-200 rounded focus:outline-none" disabled/>
              <input className=" w-full text-sm py-2 px-3 bg-gray-200 rounded focus:outline-none" disabled/>
              <input
                pattern="[0-9]"
                className=" w-full text-sm py-2 px-3 bg-gray-200 rounded focus:outline-none"
                disabled
              />
              <div className="justify-items-center items-center flex justify-center">
                <Tooltip title="Upload file">
                  <Publish />
                </Tooltip>
              </div>
            </div>
            <div className="grid grid-flow-col grid-cols-4 gap-4 py-2">
              <input className=" w-full text-sm py-2 px-3 bg-gray-200 rounded focus:outline-none" disabled/>
              <input className=" w-full text-sm py-2 px-3 bg-gray-200 rounded focus:outline-none" disabled/>
              <input
                pattern="[0-9]"
                className=" w-full text-sm py-2 px-3 bg-gray-200 rounded focus:outline-none"
                disabled
              />
              <div className="justify-items-center items-center flex justify-center">
                <Tooltip title="Freetext">
                  <Subject />
                </Tooltip>
              </div>
            </div>
          </Card>
          <Modal
            modalSize="xl"
            modalTitle={"Pilih Kuisioner"}
            show={showLov}
            onClickBackdrop={() => setShowLov(!showLov)}
          >
            <Search />
            <Card>
              <div className="grid grid-cols-10 gap-4 border-b-2 my-2 items-center py-2">
                <div className="text-sm font-bold text-left break-all">
                  Action
                </div>
                <div className="text-sm font-bold col-span-4 text-left break-all">
                  Tittle
                </div>
                <div className="text-sm font-bold col-span-4 text-left break-all">
                  Deskripsi
                </div>
                <div className="text-sm font-bold text-left break-all">
                  Poin
                </div>
              </div>
              <div className="grid grid-cols-10 gap-4 border-b items-center py-2">
                <div className="text-sm break-words break-all text-left">
                  <ButtonPilih type="submit">Pilih</ButtonPilih>
                </div>
                <div className="text-sm col-span-4 break-words break-all text-left">
                  tittle 1
                </div>
                <div className="text-sm col-span-4 whitespace-normal text-left">
                  deskripsi 1
                </div>
                <div className="text-sm break-words break-all text-left">
                  100
                </div>
              </div>
              <div className="grid grid-cols-10 gap-4 border-b items-center py-2">
                <div className="text-sm break-words break-all text-left">
                  <ButtonPilih type="submit">Pilih</ButtonPilih>
                </div>
                <div className="text-sm col-span-4 break-words break-all text-left">
                  tittle 2
                </div>
                <div className="text-sm col-span-4 whitespace-normal text-left">
                  deskripsi 2
                </div>
                <div className="text-sm break-words break-all text-left">
                  100
                </div>
              </div>
              <div className="grid grid-cols-10 gap-4 border-b items-center py-2">
                <div className="text-sm break-words break-all text-left">
                  <ButtonPilih type="submit">Pilih</ButtonPilih>
                </div>
                <div className="text-sm col-span-4 break-words break-all text-left">
                  tittle 3
                </div>
                <div className="text-sm col-span-4 whitespace-normal text-left">
                  deskripsi 3
                </div>
                <div className="text-sm break-words break-all text-left">
                  100
                </div>
              </div>
            </Card>
          </Modal>
        </Wrapper>
      </MainLayout>
    </div>
  );
}
