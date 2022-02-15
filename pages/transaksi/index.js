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
import Search from "../../components/Search";

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

export default function Transaksi() {
  const accessToken = useSelector((state) => state.accessToken);
  const [listPertanyaan, setListPertanyaan] = useState([]);
  const [showList, setShowList] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [selectedID, setSelectedID] = useState();
  const { addToast } = useToasts();
  const dispatch = useDispatch();

  return (
    <div>
      <Head>
        <title>Transaction - E-Survey</title>
      </Head>
        <Wrapper>
          <div className="flex flex-row justify-between items-center pb-24">
            <MenuTitle>Kuisioner</MenuTitle>
            <ButtonAdd
              hidden={showAdd}
              onClick={() => Router.push("/transaksi/assign")}
              className="cursor-pointer"
            >
              Assign To
            </ButtonAdd>
            <ButtonAdd
              hidden={showList}
              onClick={() => {
                // setShowList(true);
                // setShowAdd(false);
              }}
              className="cursor-pointer"
            >
              Kembali
            </ButtonAdd>
          </div>
          <>
            <Search />
            <Card>
              <div className="flex flex-row border-b-2 mb-4">
                <p className="text-sm font-bold w-10">#</p>
                <p className="text-sm font-bold w-4/5">Tittle</p>
                <p className="text-sm font-bold w-4/5">Description</p>
                <p className="text-sm font-bold w-3/4">Assign To</p>
                <p className="text-sm font-bold text-center">Action</p>
              </div>
              {listPertanyaan.map((value, index) => (
                <div
                  key={index}
                  className="flex flex-row border-b py-2 items-center"
                >
                  <p className="text-sm w-10">{index + 1}</p>
                  <p className="text-sm w-4/5">{value.pertanyaan}</p>
                  <p className="text-sm w-32 text-center">{value.bobot}%</p>
                  <div className="flex flex-row w-32">
                    {/* <Tooltip title="Edit">
                    <Edit className="cursor-pointer ml-4" size="24px" />
                  </Tooltip> */}
                    <Tooltip
                      onClick={() => deletePertanyaan(value.id)}
                      title="Hapus"
                    >
                      <Delete className="cursor-pointer ml-4" size="24px" />
                    </Tooltip>
                    <Tooltip
                      onClick={() => {
                        // setSelectedID(value.id);
                        // setShowList(false);
                        // setShowDetail(true);
                      }}
                      title="Detail"
                    >
                      <Visibility className="cursor-pointer ml-4" size="24px" />
                    </Tooltip>
                  </div>
                </div>
              ))}
            </Card>
          </>
        </Wrapper>
    </div>
  );
}
