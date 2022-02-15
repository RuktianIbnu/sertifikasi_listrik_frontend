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
  Clear,
} from "@material-ui/icons";
import { Tooltip } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { axiosGeneral } from "../../helpers/global";
import { useToasts } from "react-toast-notifications";
import ReactLoading from "react-loading";
import { setLoading } from "../../store/actionCreator";

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

export default function Pertanyaan() {
  const accessToken = useSelector((state) => state.accessToken);
  const [listPertanyaan, setListPertanyaan] = useState([]);
  const [showList, setShowList] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [selectedID, setSelectedID] = useState();
  const { addToast } = useToasts();
  const dispatch = useDispatch();

  useEffect(() => {
    getPertanyaan();
  }, [showAdd, showDetail]);

  const getPertanyaan = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
      setListPertanyaan([]);
      dispatch(setLoading(true));
      const response = await axiosGeneral.get("/resources/poin-kuesioner", {
        headers,
      });
      const { status, data } = response;
      if (status === 200) {
        setListPertanyaan(data.data);
        dispatch(setLoading(false));
      }
    } catch (error) {
      addToast("get_pertanyaan "+error.response.data.message, { appearance: "error" });
      dispatch(setLoading(false));
    }
  };
  const deletePertanyaan = async (ID) => {
    try {
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
      const response = await axiosGeneral.delete(
        `/resources/poin-kuesioner/${ID}`,
        { headers }
      );
      const { status } = response;
      if (status === 200) {
        getPertanyaan();
        addToast("Berhasil hapus", { appearance: "success" });
      }
    } catch (error) {
      addToast(error.response.data.message, { appearance: "error" });
    }
  };
  return (
    <Wrapper>
      <div className="flex flex-row justify-between items-center pb-24">
        <MenuTitle>Master Pertanyaan</MenuTitle>
        <ButtonAdd
          hidden={showAdd}
          onClick={() => {
            setShowList(false);
            setShowAdd(true);
          }}
          className="cursor-pointer"
        >
          Tambah Pertanyaan baru
        </ButtonAdd>
        <ButtonAdd
          hidden={showList}
          onClick={() => {
            setShowList(true);
            setShowAdd(false);
          }}
          className="cursor-pointer"
        >
          Kembali
        </ButtonAdd>
      </div>
      <Card hidden={showAdd}>
        {showList && (
          <>
            <div className="flex flex-row border-b-2 mb-4">
              <p className="text-sm font-bold w-10">#</p>
              <p className="text-sm font-bold w-4/5">Pertanyaan</p>
              <p className="text-sm font-bold w-32 text-center">Bobot</p>
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
                      setSelectedID(value.id);
                      setShowList(false);
                      setShowDetail(true);
                    }}
                    title="Detail"
                  >
                    <Visibility className="cursor-pointer ml-4" size="24px" />
                  </Tooltip>
                </div>
              </div>
            ))}
          </>
        )}
        {showDetail && (
          <DetailPertanyaan
            id={selectedID}
            setShowDetail={(val) => {
              setShowDetail(val);
              setShowList(true);
            }}
          />
        )}
      </Card>
      {showAdd && (
        <TambahPertanyaan
          setShowAdd={(val) => {
            setShowAdd(val);
            setShowList(true);
          }}
        />
      )}
    </Wrapper>
  );
}
const DetailPertanyaan = ({ setShowDetail, id }) => {
  const accessToken = useSelector((state) => state.accessToken);
  const [tipePoin, setTipePoin] = useState([]);
  const [tipePoinItem, setTipePoinItem] = useState([]);
  const [pertanyaan, setPertanyaan] = useState("");
  const [bobot, setBobot] = useState("");
  const [tipePoinID, setTipePoinID] = useState("NULL");
  const { addToast } = useToasts();

  useEffect(() => {
    getTipePoin();
    getPertanyaanByID();
  }, []);

  const getPertanyaanByID = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
      const response = await axiosGeneral.get(
        `/resources/poin-kuesioner/${id}`,
        { headers }
      );
      const { status, data } = response;
      if (status === 200) {
        console.log(data.data.item);
        setTipePoinItem(data.data.item);
        setTipePoinID(data.data.id_tipe_poin);
        setPertanyaan(data.data.pertanyaan);
        setBobot(data.data.bobot);
      }
    } catch (error) {
      addToast("get_pertanyaanByID "+error.response.data.message, { appearance: "error" });
    }
  };

  const getTipePoin = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
      setTipePoin([]);
      const response = await axiosGeneral.get("/resources/tipe-poin", {
        headers,
      });
      const { status, data } = response;
      if (status === 200) {
        setTipePoin(data.data);
      }
    } catch (error) {
      addToast("getTipePoin "+error.response.data.message, { appearance: "error" });
    }
  };
  const getTipePoinByID = async (id) => {
    try {
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
      setTipePoinItem([]);
      const response = await axiosGeneral.get(`/resources/tipe-poin/${id}`, {
        headers,
      });
      const { status, data } = response;
      if (status === 200) {
        const tipePoinItem = data.data.item;
        for (const item of tipePoinItem) {
          item.label = "";
          item.deskripsi = "";
          item.bobot = 0;
        }
        setTipePoinItem(tipePoinItem);
      }
    } catch (error) {
      addToast("getTipePoinByID "+error.response.data.message, { appearance: "error" });
    }
  };

  const updatePertanyaan = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
      const body = {
        pertanyaan,
        bobot: parseFloat(bobot) || 0,
        id_tipe_poin: parseInt(tipePoinID),
        item: [],
      };
      for (const item of tipePoinItem) {
        const tempItem = {
          id_tipe_poin_item: item.id,
          label: item.label,
          deskripsi: item.deskripsi,
          bobot: parseInt(item.bobot) || 0,
        };
        body.item.push(tempItem);
      }
      // console.log(body);
      const response = await axiosGeneral.put(
        `/resources/poin-kuesioner/${id}`,
        body,
        { headers }
      );
      const { status } = response;
      if (status === 200) {
        addToast("Berhasil disimpan", { appearance: "success" });
        setShowDetail(false);
      }
    } catch (error) {
      addToast(error.response.data.message, { appearance: "error" });
    }
  };

  return (
    <>
      <div>
        <h2 className="text-lg font-bold mb-4">Tambah Pertanyaan Baru</h2>
        <div className="grid grid-flow-col col-auto gap-6 mb-10">
          <div className="col-span-3">
            <label className="text-sm font-bold pb-0">Pertanyaan</label>
            <input
              value={pertanyaan}
              onChange={(e) => setPertanyaan(e.target.value)}
              className="block w-full  text-sm py-2 px-3 bg-gray-200 rounded focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-bold pb-0">Bobot</label>
            <input
              value={bobot}
              onChange={(e) => setBobot(e.target.value)}
              className="block w-full  text-sm py-2 px-3 bg-gray-200 rounded focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-bold pb-0">Tipe Poin</label>
            <select
              value={tipePoinID}
              onChange={(e) => {
                getTipePoinByID(e.target.value);
                setTipePoinID(e.target.value);
              }}
              className="block w-full  text-sm py-2 px-3 bg-gray-200 rounded focus:outline-none"
            >
              <option value="NULL" disabled>
                Pilih Tipe Poin
              </option>
              {tipePoin.map((value, index) => (
                <option key={index} value={value.id}>
                  {value.kode}
                </option>
              ))}
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
        {tipePoinItem.map((value, index) => (
          <div
            key={index}
            className="grid grid-flow-col grid-cols-4 gap-4 py-2"
          >
            <input
              value={value.label}
              onChange={(e) => {
                const { value } = e.target;
                let tempArr = [...tipePoinItem];
                tempArr[index].label = value;
                setTipePoinItem(tempArr);
              }}
              className=" w-full text-sm py-2 px-3 bg-gray-200 rounded focus:outline-none"
            />
            <input
              value={value.deskripsi}
              onChange={(e) => {
                const { value } = e.target;
                let tempArr = [...tipePoinItem];
                tempArr[index].deskripsi = value;
                setTipePoinItem(tempArr);
              }}
              className=" w-full text-sm py-2 px-3 bg-gray-200 rounded focus:outline-none"
            />
            <input
              value={value.bobot}
              onChange={(e) => {
                const { value } = e.target;
                let tempArr = [...tipePoinItem];
                tempArr[index].bobot = parseInt(value);
                setTipePoinItem(tempArr);
              }}
              pattern="[0-9]"
              className=" w-full text-sm py-2 px-3 bg-gray-200 rounded focus:outline-none"
            />
            <div className="justify-items-center items-center flex justify-center">
              {value.control_type === "radio_button" && (
                <Tooltip title="Pilihan">
                  <RadioButtonChecked />
                </Tooltip>
              )}
              {value.control_type === "checkbox" && (
                <Tooltip title="Pilihan ganda">
                  <CheckBox />
                </Tooltip>
              )}
              {value.control_type === "upload_file" && (
                <Tooltip title="Upload file">
                  <Publish />
                </Tooltip>
              )}
              {value.control_type === "freetext" && (
                <Tooltip title="Freetext">
                  <Subject />
                </Tooltip>
              )}
            </div>
          </div>
        ))}
        <div className="grid grid-cols-10 mt-16">
          <button
            onClick={updatePertanyaan}
            disabled={tipePoinItem.length === 0}
            className={`py-2 bg-blue-400 text-white rounded text-center ${
              tipePoinItem.length === 0
                ? "cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            Simpan
          </button>
          <button
            onClick={() => setShowDetail(false)}
            className="py-2 bg-red-400 ml-3 text-white rounded text-center"
          >
            Kembali
          </button>
        </div>
      </div>
    </>
  );
};

const TambahPertanyaan = ({ setShowAdd }) => {
  const accessToken = useSelector((state) => state.accessToken);
  const [questions, setQuestions] = useState([]);
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionDescription, setQuestionDescription] = useState("");
  const [questionScore, setQuestionScore] = useState();
  const [questionType, setQuestionType] = useState([]);
  const [tipePoinItem, setTipePoinItem] = useState([]);

  const { addToast } = useToasts();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTipePoin();
  }, []);

  const fetchTipePoin = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
      setQuestionType([]);
      dispatch(setLoading(true));
      const response = await axiosGeneral.get("/resources/tipe-poin", {
        headers,
      });
      const { status, data } = response;
      if (status === 200) {
        setQuestionType(data.data);
        dispatch(setLoading(false));
      }
    } catch (error) {
      addToast("fetchTipePoin "+error.response.data.message, { appearance: "error" });
      dispatch(setLoading(false));
    }
  };
  const fetchQuestionItemsByID = async (index) => {
    try {
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
      dispatch(setLoading(true));
      let newArr = [...questions];
      newArr[index].item = [];
      const id = newArr[index].id_tipe_poin;

      const response = await axiosGeneral.get(`/resources/tipe-poin/${id}`, {
        headers,
      });
      const { status, data } = response;
      if (status === 200) {
        const questionItems = data.data.item;
        for (const item of questionItems) {
          item.label = "";
          item.deskripsi = "";
          item.bobot = 0;
        }
        newArr[index].item = questionItems;
        setQuestions(newArr);
        dispatch(setLoading(false));
      }
    } catch (error) {
      addToast(error.response.data.message, { appearance: "error" });
      dispatch(setLoading(false));
    }
  };

  const createPertanyaan = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
      const body = {
        pertanyaan,
        bobot: parseFloat(bobot) || 0,
        id_tipe_poin: parseInt(tipePoinID),
        item: [],
      };
      for (const item of tipePoinItem) {
        const tempItem = {
          id_tipe_poin_item: item.id,
          label: item.label,
          deskripsi: item.deskripsi,
          bobot: parseInt(item.bobot) || 0,
        };
        body.item.push(tempItem);
      }
      dispatch(setLoading(true));
      const response = await axiosGeneral.post(
        "/resources/poin-kuesioner",
        body,
        { headers }
      );
      const { status } = response;
      if (status === 200) {
        addToast("Berhasil disimpan", { appearance: "success" });
        dispatch(setLoading(false));
        setShowAdd(false);
      }
    } catch (error) {
      addToast(error.response.data.message, { appearance: "error" });
      dispatch(setLoading(false));
    }
  };
  const addNewQuestion = () => {
    const body = {
      pertanyaan: "",
      bobot: 0,
      id_tipe_poin: 0,
      item: [],
    };
    let newQuestion = [...questions];
    newQuestion.push(body);
    setQuestions(newQuestion);
  };
  const removeQuestion = (index) => {
    let questionsArr = [...questions];
    questionsArr.splice(index, 1);
    setQuestions(questionsArr);
  };
  return (
    <>
      <div>
        <h2 className="text-lg font-bold mb-4">Tambah Pertanyaan Baru</h2>
        <div className="bg-white shadow rounded-xl p-6">
          <div className="flex flex-row gap-6 mb-6">
            <div className="w-4/5">
              <label className="block text-sm font-bold pb-0">Title</label>
              <input
                value={questionTitle}
                onChange={(e) => setQuestionTitle(e.target.value)}
                className="w-full text-sm py-2 px-3 bg-gray-200 rounded focus:outline-none"
              />
            </div>
            <div className="w-1/5">
              <label className="block text-sm font-bold pb-0">Bobot Keseluruhan</label>
              <input
                value={questionScore}
                maxLength={3}
                max={100}
                onChange={(e) =>
                  setQuestionScore(
                    e.target.value
                      .replace(/[^1-9.]/g, "")
                      .replace(/(\..*)\./g, "$1")
                  )
                }
                className="w-full text-sm py-2 px-3 bg-gray-200 rounded focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold pb-0">Deskripsi</label>
            <textarea
              value={questionDescription}
              onChange={(e) => setQuestionDescription(e.target.value)}
              className="w-full text-sm py-3 px-3 bg-gray-200 rounded focus:outline-none h-28 resize-none"
            ></textarea>
          </div>
        </div>
        {questions.map((question, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-xl p-6 my-4 relative"
          >
            <div
              onClick={() => removeQuestion(index)}
              className="absolute -right-3 -top-3 bg-red-400 cursor-pointer rounded-full p-2"
            >
              <Clear htmlColor="#FFF" />
            </div>
            <div className="grid grid-flow-col auto-cols-fr gap-2 mb-10">
              <div className="col-span-4">
                <label className="text-sm font-bold pb-0">Pertanyaan</label>
                <input
                  value={question.pertanyaan}
                  onChange={(e) => {
                    const { value } = e.target;
                    let newArr = [...questions];
                    newArr[index].pertanyaan = value;
                    setQuestions(newArr);
                  }}
                  className="block w-full  text-sm py-2 px-3 bg-gray-200 rounded focus:outline-none"
                />
              </div>
              <div className="col-span-3">
                <label className="text-sm font-bold pb-0">Tipe Jawaban</label>
                <select
                  defaultValue="NULL"
                  onChange={(e) => {
                    const { value } = e.target;
                    let newArr = [...questions];
                    newArr[index].id_tipe_poin = value;
                    setQuestions(newArr);
                    fetchQuestionItemsByID(index);
                  }}
                  className="block w-full  text-sm py-2 px-3 bg-gray-200 rounded focus:outline-none"
                >
                  <option value="NULL" disabled>
                    Pilih Tipe Jawaban
                  </option>
                  {questionType.map((value, index) => (
                    <option key={index} value={value.id}>
                      ({value.kode}) {value.deskripsi}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-bold pb-0">Bobot</label>
                <input
                  value={question.bobot}
                  onChange={(e) => {
                    const { value } = e.target;
                    let newArr = [...questions];
                    newArr[index].bobot = value
                      .replace(/[^0-9.]/g, "")
                      .replace(/(\..*)\./g, "$1");
                    setQuestions(newArr);
                  }}
                  className="block w-full  text-sm py-2 px-3 bg-gray-200 rounded focus:outline-none"
                />
              </div>
            </div>
            <div className="grid grid-flow-col auto-cols-fr gap-2 border-b-2">
              <p className="text-sm font-bold">Label</p>
              <p className="text-sm font-bold col-span-6">Deskripsi</p>
              <p className="text-sm font-bold">Bobot</p>
              <p className="text-sm font-bold justify-items-center items-center flex justify-center">
                Tipe Kontrol
              </p>
            </div>
            {question.item.map((value, index) => (
              <div
                key={index}
                className="grid grid-flow-col auto-cols-fr gap-2 py-2"
              >
                <input
                  value={value.label}
                  placeholder="Isi label disini..."
                  onChange={(e) => {
                    let tempArr = [...question.item];
                    tempArr[index].label = e.target.value;
                    let newArr = [...questions];
                    newArr.item = tempArr;
                    setQuestions(newArr);
                  }}
                  className="w-full text-sm py-2 px-3 bg-gray-200 rounded focus:outline-none"
                />
                <input
                  value={value.deskripsi}
                  placeholder="Deskripsi..."
                  onChange={(e) => {
                    let tempArr = [...question.item];
                    let newArr = [...questions];
                    tempArr[index].deskripsi = e.target.value;
                    newArr.item = tempArr;
                    setQuestions(newArr);
                  }}
                  className="w-full col-span-6 text-sm py-2 px-3 bg-gray-200 rounded focus:outline-none"
                />
                <input
                  value={value.bobot}
                  onChange={(e) => {
                    let tempArr = [...question.item];
                    let newArr = [...questions];
                    tempArr[index].bobot = e.target.value
                      .replace(/[^1-9.]/g, "")
                      .replace(/(\..*)\./g, "$1");
                    newArr.item = tempArr;
                    setQuestions(newArr);
                  }}
                  pattern="[0-9]{1,5}"
                  type="tel"
                  maxLength="3"
                  max="100"
                  min="1"
                  className=" w-full text-sm py-2 px-3 bg-gray-200 rounded focus:outline-none"
                />
                <div className="justify-items-center items-center flex justify-center">
                  {value.control_type === "radio_button" && (
                    <Tooltip title="Pilihan">
                      <RadioButtonChecked />
                    </Tooltip>
                  )}
                  {value.control_type === "checkbox" && (
                    <Tooltip title="Pilihan ganda">
                      <CheckBox />
                    </Tooltip>
                  )}
                  {value.control_type === "upload_file" && (
                    <Tooltip title="Upload file">
                      <Publish />
                    </Tooltip>
                  )}
                  {value.control_type === "freetext" && (
                    <Tooltip title="Freetext">
                      <Subject />
                    </Tooltip>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
        <button
          onClick={addNewQuestion}
          className="bg-gray-100 font-bold text-gray-700 border-dashed border-2 hover:bg-gray-200 cursor-pointer focus:outline-none rounded py-2 my-4 w-full block"
        >
          Tambah Item Pertanyaan
        </button>

        <div className="grid grid-cols-10 mt-16">
          <button
            onClick={() => console.log(questions)}
            // disabled={tipePoinItem.length === 0}
            className={`py-2 bg-blue-400 mr-3 text-white rounded text-center ${
              tipePoinItem.length === 0
                ? "cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            Simpan
          </button>
          {/* <button
            onClick={() => setShowAdd(false)}
            className="py-2 bg-red-400 ml-3 text-white rounded text-center"
          >
            Kembali
          </button> */}
        </div>
      </div>
    </>
  );
};
