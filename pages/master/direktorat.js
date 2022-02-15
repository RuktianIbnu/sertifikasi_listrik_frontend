import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import { axiosGeneral } from "../../helpers/global";
import Select from "react-select";
import { useToasts } from "react-toast-notifications";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../store/actionCreator";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Tooltip } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import Pagination from "react-js-pagination";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import Search from "../../components/Search";

const FormSchema = Yup.object().shape({
  kodeInstansi: Yup.string().required("* Kode Instansi tidak boleh kosong"),
  namaInstansi: Yup.string().required("* Nama Instansi tidak boleh kosong"),
});

export default function Direktorat() {
  const [showModal, setShowModal] = useState(false);
  const [dataInstasi, setDataInstansi] = useState([]);
  const [selectedInstansi, setSelectedInstansi] = useState(0);
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const accessToken = useSelector((state) => state.accessToken);
  const [dataInstasiAll, setDataInstansiAll] = useState([]);
  const [haveId, setHaveId] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [getKodeInstansi, setKodeInstansi] = useState("");
  const [getNamaInstansi, setNamaInstansi] = useState("");

  // Pagination
  const takeSize = 10;
  const [total, setTotal] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    if (accessToken != null) {
      GetInstansiAll();
    }
  }, [activePage, search, sort]);

  const GetInstansiById = async (id) => {
    try {
      const headers = {
        Authorization: accessToken,
      };
      dispatch(setLoading(true));
      const response = await axiosGeneral.get(`/resources/instansi/${id}`, {
        headers,
      });
      const { status, data } = response;
      if (status === 200) {
        setKodeInstansi(data.data.kode_instansi);
        setNamaInstansi(data.data.nama_instansi);
        setSelectedInstansi(data.data.parent_id);
        dispatch(setLoading(false));
      } else if (status === 500) {
        addToast("Gagal Mengambil Data instansi", { appearance: "error" });
        dispatch(setLoading(false));
      }
    } catch (error) {
      addToast("Gagal Mengambil Data instansi", { appearance: "error" });
      dispatch(setLoading(false));
    }
  };

  const doSave = async (values) => {
    try {
      if (isEdit == true) {
        const body = {
          kode_instansi: formik.values.kodeInstansi,
          nama_instansi: formik.values.namaInstansi,
          parent_id: selectedInstansi,
        };

        const headers = {
          Authorization: accessToken,
        };
        console.log(body);
        dispatch(setLoading(true));
        const response = await axiosGeneral.put(
          `/resources/instansi/${haveId}`,
          body,
          {
            headers,
          }
        );
        const { status, data } = response;
        if (status === 200) {
          addToast("Berhasil ubah Instansi", { appearance: "success" });
          dispatch(setLoading(false));
          DoNull();
          setShowModal(false);
          GetInstansiAll();
        }
      } else if (isEdit == false) {
        const body = {
          kode_instansi: formik.values.kodeInstansi,
          nama_instansi: formik.values.namaInstansi,
          parent_id: selectedInstansi,
        };

        const headers = {
          Authorization: accessToken,
        };

        dispatch(setLoading(true));
        const response = await axiosGeneral.post(`/resources/instansi`, body, {
          headers,
        });
        const { status, data } = response;
        if (status === 200) {
          addToast("Berhasil tambah Instansi", { appearance: "success" });
          DoNull();
          dispatch(setLoading(false));
          setShowModal(false)
          GetInstansiAll();
        }
      }
      console.log("kode : "+getKodeInstansi, "nama : "+getNamaInstansi)
    } catch (error) {
      dispatch(setLoading(false));
      addToast("Gagal eksekusi", { appearance: "error" });
    }
  };

  const GetInstansiAll = async () => {
    try {
      const headers = {
        Authorization: accessToken,
      };


      const response = await axiosGeneral.get("/resources/instansi", {
        headers,
        params: {
          start: (activePage - 1) * takeSize,
          take_size: takeSize,
          search,
          sort,
        },
      });

      setDataInstansiAll([]);
      const { status, data } = response;
      if (status === 200) {
        const AllInstani = data.data.instansi;

        setDataInstansiAll(AllInstani);
        setTotal(data.data.count_record);
        
        const intansiArr = [];
        const instansi = data.data.instansi;
        console.log(instansi)
        for (const iterator of instansi) {
          let val = {
            value: iterator.id,
            label: iterator.kode_instansi + " - " + iterator.nama_instansi,
          };
          intansiArr.push(val);
        }
        setDataInstansi(intansiArr);

        dispatch(setLoading(false));
        // setDataInstansiAll(data.data);
        // setTotal(data.data.count_record);
        
      } else if (status === 500) {
        addToast("Gagal Mengambil Data Instansi", { appearance: "error" });
      }
    } catch (error) {
      addToast(error.response.data.message, { appearance: "error" });
      dispatch(setLoading(false));
    }
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    // setStart((activePage - 1) * takeSize);
  };

  const formik = useFormik({
    initialValues: {
      kodeInstansi: getKodeInstansi , 
      namaInstansi: getNamaInstansi , 
    },
    validationSchema: FormSchema,
    enableReinitialize: true,
  });

  const DoNull = () => {
      setKodeInstansi(""),
      setNamaInstansi(""),
      setSelectedInstansi(0);
  };

  const doModalEdit = async (id) => {
    try {
      DoNull();
      GetInstansiById(id);
      setHaveId(id);
      setShowModal(true);
    } catch (error) {
      addToast("Gagal tambah instansi", { appearance: "error" });
    }
  };

  const doDelete = async (id) => {
    try {
      const headers = {
        Authorization: accessToken,
      };
      dispatch(setLoading(true));
      const response = await axiosGeneral.delete(
        `/resources/instansi/`+id ,
        {
          headers,
        }
      );
      const { status, data } = response;
      if (status === 200) {
        addToast("Berhasil hapus instansi", { appearance: "success" });
        dispatch(setLoading(false));
        GetInstansiAll();
      } else {
        addToast("Gagal hapus instansi", { appearance: "warning" });
        dispatch(setLoading(false));
      }
    } catch (error) {
      addToast("Gagal hapus instansi", { appearance: "error" });
      dispatch(setLoading(false));
    }
  };

  return (
    <Wrapper>
      <div className="flex flex-row justify-between items-center pb-24">
        <MenuTitle>Master Instansi</MenuTitle>
        <ButtonAdd
          className="button"
          onClick={() => {
            DoNull();
            setShowModal(true);
            setIsEdit(false);
          }}
        >
          Tambah Instansi
        </ButtonAdd>
      </div>
      <Search 
        placeholder="Cari Nama Instansi..."
        onChange={(e) => {
          setSearch(e.target.value)
          setActivePage(1)
        }}
        sortingArray={[
          { label: "Status Aktif", value: "active" },
          { label: "Status Non Aktif", value: "non_active" },
          { label: "Instansi Tertinggi", value: "instansi_tertinggi" },
          { label: "Instansi Terendah", value: "instansi_terendah" },
          { label: "Jabatan Tertinggi", value: "jabatan_tertinggi" },
          { label: "Jabatan Terendah", value: "jabatan_terendah" },
        ]}
        onClickSort={(val) => setSort(val)}
      />
      <Card>
        <div className="grid grid-cols-12 gap-4 border-b-2 my-2 items-center py-2">
          <div className="text-sm font-bold text-center">#</div>
          <div className="text-sm font-bold col-span-4 text-left break-all">
            Induk Instansi
          </div>
          <div className="text-sm font-bold col-span-2 text-left break-all">
            Kode Instansi
          </div>
          <div className="text-sm font-bold col-span-4 text-left break-all">
            Nama Instansi
          </div>
          <div className="text-sm font-bold text-left break-all">Action</div>
        </div>
        {dataInstasiAll.map((value, index) => (
          <div
            key={index}
            className="grid grid-cols-12 gap-4 border-b items-center py-2"
          >
            <div className="text-sm text-center justify-center">
              {index + 1}
            </div>
            <div className="text-sm col-span-4 break-words text-left">
              {value.parent_instansi || "-"}
            </div>
            <div className="text-sm col-span-2 whitespace-normal text-left">
              {value.kode_instansi}
            </div>
            <div className="text-sm col-span-4 break-words text-left">
              {value.nama_instansi}
            </div>
            <div className="text-sm text-left">
              <Tooltip
                onClick={() => {
                  setIsEdit(true);
                  doModalEdit(value.id);
                }}
                title="Edit"
              >
                <Edit className="cursor-pointer mr-2" size="24px" />
              </Tooltip>
              <Tooltip
                onClick={() => {if(window.confirm(`Yakin hapus ` +value.nama_instansi+` ?`)){doDelete(value.id)};}}
                title="Hapus"
              >
                <Delete className="cursor-pointer ml-2" size="24px" />
              </Tooltip>
            </div>
          </div>
        ))}
        <div className="w-full mt-8 flex flex-row justify-center items-center">
          <Pagination
            activePage={activePage}
            itemsCountPerPage={takeSize}
            totalItemsCount={total}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
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
      <Modal
        modalTitle="Tambah Instansi"
        show={showModal}
        onClickBackdrop={() => {
          setShowModal(!showModal);
          setIsEdit(false);
        }}
      >
        <div className="col-span-6 sm:col-span-3 mb-2">
          <label className="font-bold text-black text-sm">Induk Instansi</label>
          <Select
            placeholder="Pilih induk instansi"
            value={dataInstasi.find((op) => op.value === selectedInstansi)}
            onChange={(e) => setSelectedInstansi(e.value)}
            options={dataInstasi}
          />
        </div>
        <form onSubmit={formik.handleSubmit}>
          <Input
            labelText="Kode Instansi"
            className="my-2"
            placeholder="Kode Instansi"
            type="kodeInstansi"
            name="kodeInstansi"
            onChange={formik.handleChange}
            valueData={formik.values.kodeInstansi}
          />
          {formik.errors.kodeInstansi && (
            <span className="text-xs text-red-500">
              {formik.errors.kodeInstansi}
            </span>
          )}
          <TextArea
            labelText="Nama Instansi"
            className="my-2"
            placeholder="Nama Instansi"
            type="namaInstansi"
            name="namaInstansi"
            onChange={formik.handleChange}
            valueData={formik.values.namaInstansi}
          />
          {formik.errors.namaInstansi && (
            <span className="text-xs text-red-500">
              {formik.errors.namaInstansi}
            </span>
          )}
          <Button
            onClick={doSave}
            buttonText="Simpan"
            buttonColor="#4361EE"
            buttonTextColor="#FFF"
            fontSize={14}
            className="mt-4"
            type="submit"
          />
        </form>
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
