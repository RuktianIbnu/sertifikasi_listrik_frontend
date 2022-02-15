import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Visibility,
  Edit,
  Delete,
  CheckBox,
  RadioButtonChecked,
  Publish,
  Subject,
} from "@material-ui/icons";
import { Tooltip } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { axiosGeneral } from "../../helpers/global";
import ReactLoading from "react-loading";
import { Modal } from "react-bootstrap";
import { useToasts } from "react-toast-notifications";
import { setLoading } from "../../store/actionCreator";
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

export default function Tipe() {
  const [selectedTipeID, setSelectedTipeID] = useState();
  const accessToken = useSelector((state) => state.accessToken);
  const [listPoinItem, setlistPoinItem] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [kode, setKode] = useState("");
  const [tipe, setTipe] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const [selectedID, setSelectedID] = useState();

  useEffect(() => {
    getTipePoint();
  }, [showDetail]);

  const createTipePoin = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
      const body = {
        kode,
        tipe,
        deskripsi: document.getElementById("tipe_deskripsi").innerText,
      };
      const response = await axiosGeneral.post("/resources/tipe-poin", body, {
        headers,
      });
      const { status } = response;
      if (status === 200) {
        setShowAdd(false);
        addToast("Tipe poin berhasil ditambahkan", { appearance: "success" });
        getTipePoint();
      }
      console.log(body);
    } catch (error) {
      addToast(error.response.data.message, { appearance: "error" });
    }
  };

  const getTipePoint = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
      dispatch(setLoading(true));
      setlistPoinItem([]);
      const response = await axiosGeneral.get(
        "resources/tipe-poin?showItem=false",
        { headers }
      );
      const { data, status } = response;
      if (status === 200) {
        setlistPoinItem(data.data);
        dispatch(setLoading(false));
      }
    } catch (error) {
      addToast(error.response.data.message, { appearance: "error" });
      dispatch(setLoading(false));
    }
  };

  const deleteTipePoin = async (id) => {
    try {
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
      dispatch(setLoading(true));
      const response = await axiosGeneral.delete(`/resources/tipe-poin/${id}`, {
        headers,
      });
      const { status } = response;
      if (status === 200) {
        addToast("Tipe poin berhasil dihapus", { appearance: "success" });
        getTipePoint();
        dispatch(setLoading(false));
      }
    } catch (error) {
      addToast(error.response.data.message, { appearance: "error" });
      dispatch(setLoading(false));
    }
  };

  const editTipePoin = async (id) => {
    try {
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
      const body = {
        kode,
        tipe,
        deskripsi,
      };
      dispatch(setLoading(true));
      setShowEdit(false);
      const response = await axiosGeneral.put(
        `/resources/tipe-poin/${id}`,
        body,
        { headers }
      );
      const { status } = response;
      if (status === 200) {
        dispatch(setLoading(false));

        // make it empty
        setSelectedID();
        setKode();
        setTipe();
        setDeskripsi();
        addToast("Berhasil update tipe poin", { appearance: "success" });
        getTipePoint();
      }
    } catch (error) {
      addToast(error.response.data.message, { appearance: "error" });
      console.log(error);
      dispatch(setLoading(false));
    }
  };
  return (
    <Wrapper>
      <div className="flex flex-row justify-between items-center pb-24">
        <MenuTitle>Master Tipe Poin</MenuTitle>
        <ButtonAdd onClick={() => setShowAdd(true)} className="cursor-pointer">
          Tambah Kuisioner baru
        </ButtonAdd>
      </div>
      <Search />
      <Card>
        {showDetail === true ? (
          <TipePoinItem
            setShowDetail={() => setShowDetail(false)}
            id={selectedTipeID}
          />
        ) : (
          <div>
            <div className="flex mb-6">
              {/* <div
                onClick={() => setShowAdd(true)}
                className="py-2 px-4 w-auto text-center bg-blue-400 text-white rounded-lg text-sm cursor-pointer"
              >
                Tambah Tipe Poin Baru
              </div> */}
            </div>
            <div className="flex flex-row font-bold text-sm mb-3 text-left border-b-2 pb-2">
              <div className="w-10">#</div>
              <div className="w-36">Kode</div>
              <div className="w-52">Tipe</div>
              <div className="w-3/5">Deskripsi</div>
              <div>Action</div>
            </div>
            {listPoinItem.map((value, index) => (
              <div
                key={index}
                className="flex flex-row py-3 border-b items-center"
              >
                <div className="w-10">{index + 1}</div>
                <div className="w-36">{value.kode}</div>
                <div className="w-52">{value.tipe}</div>
                <div className="w-3/5">{value.deskripsi}</div>
                <div className="grid grid-cols-3 gap-3">
                  <Tooltip
                    onClick={() => {
                      setSelectedID(value.id);
                      setKode(value.kode);
                      setTipe(value.tipe);
                      setDeskripsi(value.deskripsi);
                      setShowEdit(true);
                    }}
                    title="Edit"
                  >
                    <Edit className="cursor-pointer" size="24px" />
                  </Tooltip>
                  <Tooltip
                    onClick={() => deleteTipePoin(value.id)}
                    title="Hapus"
                  >
                    <Delete className="cursor-pointer" size="24px" />
                  </Tooltip>
                  <Tooltip
                    onClick={() => {
                      setShowDetail(true);
                      setSelectedTipeID(value.id);
                    }}
                    title={`Detail - ${value.tipe}`}
                  >
                    <Visibility className="cursor-pointer" size="24px" />
                  </Tooltip>
                </div>
              </div>
            ))}
            {/* Modal Add */}
            <Modal show={showAdd} onHide={() => setShowAdd(false)}>
              <div className="p-4">
                <div className="col-span-6 sm:col-span-3">
                  <div className="mt-3">
                    <label className="text-sm font-bold pb-0">Kode</label>
                    <input
                      type="text"
                      onChange={(e) => setKode(e.target.value)}
                      className="block w-full  text-sm py-2 px-3 bg-gray-300 rounded focus:outline-none"
                    />
                  </div>
                  <div className="mt-3">
                    <label className="text-sm font-bold pb-0">Tipe</label>
                    <input
                      type="text"
                      onChange={(e) => setTipe(e.target.value)}
                      className="block w-full  text-sm py-2 px-3 bg-gray-300 rounded focus:outline-none"
                    />
                  </div>
                  <div className="mt-3">
                    <label className="text-sm font-bold pb-0">Deskripsi</label>
                    <span
                      id="tipe_deskripsi"
                      className="text-sm py-2 w-full block bg-gray-300 px-3 rounded focus:outline-none"
                      contentEditable
                    ></span>
                  </div>
                </div>
                <div
                  onClick={createTipePoin}
                  className="py-2 px-4 text-center mt-4 bg-blue-400 text-white rounded-lg text-sm cursor-pointer"
                >
                  Tambah Tipe Poin
                </div>
              </div>
            </Modal>

            {/* Modal Edit */}
            {selectedID && (
              <Modal show={showEdit} onHide={() => setShowEdit(false)}>
                <div className="p-4">
                  <div className="col-span-6 sm:col-span-3">
                    <div className="mt-3">
                      <label className="text-sm font-bold pb-0">Kode</label>
                      <input
                        type="text"
                        onChange={(e) => setKode(e.target.value)}
                        value={kode}
                        className="block w-full  text-sm py-2 px-3 bg-gray-300 rounded focus:outline-none"
                      />
                    </div>
                    <div className="mt-3">
                      <label className="text-sm font-bold pb-0">Tipe</label>
                      <input
                        type="text"
                        onChange={(e) => setTipe(e.target.value)}
                        value={tipe}
                        className="block w-full  text-sm py-2 px-3 bg-gray-300 rounded focus:outline-none"
                      />
                    </div>
                    <div className="mt-3">
                      <label className="text-sm font-bold pb-0">
                        Deskripsi
                      </label>
                      <textarea
                        value={deskripsi}
                        onChange={(e) => setDeskripsi(e.target.value)}
                        className="text-sm py-2 w-full block bg-gray-300 px-3 rounded focus:outline-none"
                      ></textarea>
                    </div>
                  </div>
                  <div
                    onClick={() => editTipePoin(selectedID)}
                    className="py-2 px-4 text-center mt-4 bg-blue-400 text-white rounded-lg text-sm cursor-pointer"
                  >
                    Update Tipe Poin
                  </div>
                </div>
              </Modal>
            )}
          </div>
        )}
      </Card>
    </Wrapper>
  );
}

const TipePoinItem = ({ id, setShowDetail }) => {
  const accessToken = useSelector((state) => state.accessToken);
  const [tipePoinDetail, setTipePoinDetail] = useState();
  const [showAdd, setShowAdd] = useState(false);
  const [controlType, setControlType] = useState();
  const { addToast } = useToasts();
  const dispatch = useDispatch();

  useEffect(() => {
    getTipePoinByID();
  }, []);

  const getTipePoinByID = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
      setTipePoinDetail();
      dispatch(setLoading(true));
      const response = await axiosGeneral.get(`/resources/tipe-poin/${id}`, {
        headers,
      });
      const { data, status } = response;
      if (status === 200) {
        setTipePoinDetail(data.data);
        dispatch(setLoading(false));
      }
    } catch (error) {
      addToast(error.response.data.message, { appearance: "error" });
      dispatch(setLoading(false));
    }
  };

  const createCreatePoinItem = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
      const body = {
        id_tipe_poin: id,
        control_type: controlType,
      };
      const response = await axiosGeneral.post(
        "/resources/tipe-poin-item",
        body,
        {
          headers,
        }
      );
      const { status } = response;
      if (status === 200) {
        addToast("Item berhasil ditambahkan", { appearance: "success" });
        setShowAdd(false);
        getTipePoinByID();
      }
    } catch (error) {
      addToast(error.response.data.message, { appearance: "error" });
    }
  };

  const deletePoinItem = async (id) => {
    try {
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
      dispatch(setLoading(true));
      const response = await axiosGeneral.delete(
        `/resources/tipe-poin-item/${id}`,
        {
          headers,
        }
      );
      const { status } = response;
      if (status === 200) {
        addToast("Item berhasil dihapus", { appearance: "success" });
        dispatch(setLoading(false));
        getTipePoinByID();
      }
    } catch (error) {
      addToast(error.response.data.message, { appearance: "error" });
      dispatch(setLoading(false));
    }
  };
  if (!tipePoinDetail) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <div className="flex flex-row justify-between mb-4">
        <div
          onClick={setShowDetail}
          className="py-2 px-4 bg-blue-400 text-white rounded-lg text-sm cursor-pointer"
        >
          Kembali
        </div>
        <div
          onClick={() => setShowAdd(true)}
          className="py-2 px-4 bg-blue-400 text-white rounded-lg text-sm cursor-pointer"
        >
          Tambah Poin Item Baru
        </div>
      </div>
      <div className="flex flex-row gap-6">
        <div className="w-1/4">
          <div className="mt-3">
            <label className="text-sm font-bold pb-0">Kode</label>
            <p className="text-sm py-2 w-full">{tipePoinDetail.kode}</p>
          </div>
          <div className="mt-3">
            <label className="text-sm font-bold pb-0">Tipe</label>
            <p className="text-sm py-2 w-full">{tipePoinDetail.tipe}</p>
          </div>
          <div className="mt-3">
            <label className="text-sm font-bold pb-0">Deskripsi</label>
            <p className="text-sm py-2 w-full">{tipePoinDetail.deskripsi}</p>
          </div>
        </div>
        <div className="w-full border-l-2 pl-4">
          <div className="flex flex-row font-bold text-sm mb-3 text-left border-b-2 pb-2">
            <div className="w-10">#</div>
            <div className="text-center w-36">Tipe Kontrol</div>
            <div>Action</div>
          </div>
          {tipePoinDetail.item.map((value, index) => (
            <div key={index} className="flex flex-row py-3 items-center">
              <div className="w-10">{index + 1}</div>
              <div className="text-center w-36">
                {value.control_type === "upload_file" && (
                  <Tooltip title="Upload file">
                    <Publish htmlColor="#6B7280" />
                  </Tooltip>
                )}
                {value.control_type === "option" && (
                  <Tooltip title="Pilihan">
                    <RadioButtonChecked htmlColor="#6B7280" />
                  </Tooltip>
                )}
                {value.control_type === "checkbox" && (
                  <Tooltip title="Pilihan ganda">
                    <CheckBox htmlColor="#6B7280" />
                  </Tooltip>
                )}
                {value.control_type === "freetext" && (
                  <Tooltip title="Isian">
                    <Subject htmlColor="#6B7280" />
                  </Tooltip>
                )}
              </div>
              <div className="grid grid-cols-3 text-center">
                <Tooltip onClick={() => deletePoinItem(value.id)} title="Hapus">
                  <Delete className="cursor-pointer" size="24px" />
                </Tooltip>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal show={showAdd} size="sm" onHide={() => setShowAdd(false)}>
        <div className="p-4">
          <div className="col-span-6 sm:col-span-3">
            <label className="font-bold text-black text-sm">Tipe</label>
            <select
              onChange={(e) => setControlType(e.target.value)}
              id="atasan"
              name="atasan"
              autocomplete="atasan"
              defaultValue="NULL"
              className="w-full bg-gray-200 rounded-xl py-2 px-4 font-nunito focus:outline-none"
            >
              <option value="NULL" disabled></option>
              <option value="freetext">Freetext</option>
              <option value="option">Option</option>
              <option value="checkbox">Checkbox</option>
              <option value="upload_file">Upload file</option>
            </select>
          </div>
          <div
            onClick={createCreatePoinItem}
            className="py-2 px-4 text-center mt-4 bg-blue-400 text-white rounded-lg text-sm cursor-pointer"
          >
            Tambah Poin Item Baru
          </div>
        </div>
      </Modal>
    </div>
  );
};
