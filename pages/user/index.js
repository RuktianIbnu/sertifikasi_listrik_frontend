import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { axiosGeneral } from "../../helpers/global";
import MainLayout from "../../components/MainLayout";
import Pagination from "react-js-pagination";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import Select from "react-select";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useToasts } from "react-toast-notifications";
import { setLoading } from "../../store/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import Search from "../../components/Search";

const FormSchema = Yup.object().shape({
  password: Yup.string().required("* Password tidak boleh kosong"),
  ulangi_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords don't match!"
  ),
});

export default function User() {
  const [showModal, setShowModal] = useState(false);
  const [jabatanDropdown, setJabatanDropdown] = useState([]);
  const [selectedJabatan, setSelectedJabatan] = useState(0);
  const [dataInstasi, setDataInstansi] = useState([]);
  const [selectedInstansi, setSelectedInstansi] = useState(0);
  const accessToken = useSelector((state) => state.accessToken);
  const [getNip, setNip] = useState("");
  const [getNama, setNama] = useState("");
  const [getEmail, setEmail] = useState("");
  const [getNohp, setNohp] = useState("");
  const [selectedAktif, setSelectedAktif] = useState(false);
  const [selectedHakAkses, setSelectedHakAkses] = useState("");
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const [dataAllUser, setDataAllUser] = useState([]);
  const [haveId, setHaveId] = useState();
  const [isEdit, setIsEdit] = useState(false);

  // Pagination
  const takeSize = 10;
  const [total, setTotal] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    if (accessToken != null) {
      GetInstansi();
      GetJabatan();
      GetAllUser();
    }
  }, [activePage, search, sort]);

  const GetAllUser = async () => {
    try {
      const headers = {
        Authorization: accessToken,
      };

      const response = await axiosGeneral.get("/resources/pegawai", {
        headers,
        params: {
          start: (activePage - 1) * takeSize,
          take_size: takeSize,
          search,
          sort,
        },
      });
      setDataAllUser([]);
      const { status, data } = response;
      if (status === 200) {
        const AllUser = data.data.pegawai;

        setDataAllUser(AllUser);
        setTotal(data.data.count_record);
      } else if (status === 500) {
        addToast("Gagal Mengambil Data User", { appearance: "error" });
        dispatch(setLoading(false));
      }
    } catch (error) {
      addToast("Gagal Mengambil Data User", { appearance: "error" });
      dispatch(setLoading(false));
    }
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    // setStart((activePage - 1) * takeSize);
  };

  const GetInstansi = async () => {
    try {
      const headers = {
        Authorization: accessToken,
      };

      const response = await axiosGeneral.get("/resources/instansi", {
        headers,
        params: {
          start: 0,
          take_size: 999,
        },
      });

      const { status, data } = response;
      if (status === 200) {
        const intansiArr = [];
        const instansi = data.data.instansi;
        for (const iterator of instansi) {
          let val = {
            value: iterator.id,
            label: iterator.kode_instansi + " - " + iterator.nama_instansi,
          };
          intansiArr.push(val);
        }
        setDataInstansi(intansiArr);
        dispatch(setLoading(false));
      } else if (status === 500) {
        addToast("Gagal Mengambil Data Instansi", { appearance: "error" });
      }
    } catch (error) {
      addToast(error.response.data.message, { appearance: "error" });
      dispatch(setLoading(false));
    }
  };

  const GetJabatan = async () => {
    try {
      const headers = {
        Authorization: accessToken,
      };
      const response = await axiosGeneral.get("/resources/jabatan", {
        headers,
      });
      const { data, status } = response;
      if (status === 200) {
        const jabatanArr = [];
        const jabatan = data.data;
        for (const iterator of jabatan) {
          jabatanArr.push(iterator);
        }
        setJabatanDropdown(jabatanArr);
      } else if (status === 500) {
        addToast("Gagal Mengambil Data Jabatan", { appearance: "error" });
      }
    } catch (error) {
      addToast(error.response.data.message, { appearance: "error" });
    }
  };

  const doSave = async (values) => {
    try {
      if (isEdit == false) {
        const body = {
          nip: getNip,
          nama_lengkap: getNama,
          no_hp: getNohp,
          id_jabatan: parseInt(selectedJabatan),
          id_instansi: parseInt(selectedInstansi),
          email: getEmail,
          password: formik.values.password,
          role: selectedHakAkses,
          active: selectedAktif === "true" ? true : false,
        };

        const headers = {
          Authorization: accessToken,
        };

        dispatch(setLoading(true));
        const response = await axiosGeneral.post(`/resources/pegawai`, body, {
          headers,
        });
        const { status, data } = response;
        if (status === 200) {
          addToast("Berhasil tambah user", { appearance: "success" });
          dispatch(setLoading(false));
          GetInstansi();
          GetJabatan();
          GetAllUser();
        }
      } else if (isEdit == true) {
        const body = {
          nip: getNip,
          nama_lengkap: getNama,
          no_hp: getNohp,
          id_jabatan: parseInt(selectedJabatan),
          id_instansi: parseInt(selectedInstansi),
          email: getEmail,
          role: selectedHakAkses,
          active: selectedAktif === "true" ? true : false,
        };

        const headers = {
          Authorization: accessToken,
        };

        dispatch(setLoading(true));
        const response = await axiosGeneral.put(
          `/resources/pegawai/${haveId}`,
          body,
          {
            headers,
          }
        );
        const { status, data } = response;
        if (status === 200) {
          addToast("Berhasil edit user", { appearance: "success" });
          GetUserById(haveId);
          dispatch(setLoading(false));
          GetInstansi();
          GetJabatan();
          GetAllUser();
        }
      }
    } catch (error) {
      dispatch(setLoading(false));
      addToast("Gagal eksekusi", { appearance: "error" });
    }
  };

  const DoNull = () => {
    setNip();
    setNama();
    setNohp();
    setSelectedJabatan();
    setSelectedInstansi();
    setEmail();
    setSelectedHakAkses();
    setSelectedAktif();
  };

  const doModalEdit = async (id) => {
    try {
      DoNull();
      GetUserById(id);
      setHaveId(id);
      setShowModal(true);
    } catch (error) {
      addToast("Gagal tambah user", { appearance: "error" });
    }
  };

  const GetUserById = async (id) => {
    try {
      const headers = {
        Authorization: accessToken,
      };
      dispatch(setLoading(true));
      const response = await axiosGeneral.get(`/resources/pegawai/${id}`, {
        headers,
      });
      const { status, data } = response;
      if (status === 200) {
        setNip(data.data.nip);
        setNama(data.data.nama_lengkap);
        setNohp(data.data.no_hp);
        setSelectedJabatan(data.data.jabatan.id);
        setSelectedInstansi(data.data.instansi.id);
        setEmail(data.data.account_detail.email);
        setSelectedHakAkses(data.data.account_detail.role);
        setSelectedAktif(data.data.account_detail.active);
        dispatch(setLoading(false));
      } else if (status === 500) {
        addToast("Gagal Mengambil Data User", { appearance: "error" });
        dispatch(setLoading(false));
      }
    } catch (error) {
      addToast("Gagal Mengambil Data User", { appearance: "error" });
      dispatch(setLoading(false));
    }
  };

  const doDelete = async (id) => {
    try {
      const headers = {
        Authorization: accessToken,
      };
      dispatch(setLoading(true));
      const response = await axiosGeneral.delete(`/resources/pegawai/${id}`, {
        headers,
      });
      const { status, data } = response;
      if (status === 200) {
        addToast("Berhasil hapus user", { appearance: "success" });
        dispatch(setLoading(false));
        GetInstansi();
        GetJabatan();
        GetAllUser();
      } else {
        addToast("Gagal hapus user", { appearance: "warning" });
        dispatch(setLoading(false));
      }
    } catch (error) {
      addToast("Gagal hapus user", { appearance: "error" });
      dispatch(setLoading(false));
    }
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      ulangi_password: "",
    },
    validationSchema: FormSchema,
    enableReinitialize: true,
  });

  return (
    <MainLayout>
      <div className="pt-10 px-8">
        <div className="flex flex-row justify-between items-center pb-14 w-full">
          <MenuTitle>Users</MenuTitle>
          <ButtonAdd
            className="button"
            onClick={() => {
              setShowModal(true);
              setIsEdit(false);
              DoNull();
            }}
          >
            Tambah User
          </ButtonAdd>
        </div>
        <Search
          placeholder="Cari NIP, nama pegawai, email..."
          onChange={(e) => {
            setSearch(e.target.value);
            setActivePage(1);
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
            <div className="text-sm font-bold col-span-2 text-left break-all">
              NIP - Nama
            </div>
            <div className="text-sm font-bold col-span-3 text-left break-all">
              Jabatan - Instansi
            </div>
            <div className="text-sm font-bold col-span-3 text-left break-all">
              Email
            </div>
            <div className="text-sm font-bold text-left break-all">
              Hak Akses
            </div>
            <div className="text-sm font-bold text-left break-all">Status</div>
            <div className="text-sm font-bold text-left break-all">Action</div>
          </div>
          {dataAllUser.map((value, index) => (
            <div
              key={index}
              className="grid grid-cols-12 gap-4 border-b items-center py-2"
            >
              <div className="text-sm text-center justify-center">
                {index + 1}
              </div>
              <div className="text-sm col-span-2 break-words break-all text-left">
                {value.nip} <br />-<br /> {value.nama_lengkap}
              </div>
              <div className="text-sm col-span-3 whitespace-normal text-left">
                {value.jabatan.nama_jabatan} <br />-<br />{" "}
                {value.instansi.nama_instansi}
              </div>
              <div className="text-sm col-span-3 break-words break-all text-left">
                {value.account_detail.email + " "}
              </div>
              <div className="text-sm text-left break-all ">
                {value.account_detail.role}
              </div>
              <div className="text-sm text-left">
                {value.account_detail.active === true ? "Aktif" : "Non Aktif"}
              </div>
              <div className="text-sm text-left">
                {/* <Tooltip title="Edit">
                    <Edit className="cursor-pointer ml-4" size="24px" />
                  </Tooltip> */}
                <Tooltip
                  onClick={() => {
                    setIsEdit(true);
                    doModalEdit(value.id);
                  }}
                  title="Edit"
                >
                  <Edit className="cursor-pointer mr-2" size="24px" />
                </Tooltip>
                <Tooltip onClick={() => doDelete(value.id)} title="Hapus">
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
          modalSize="lg"
          modalTitle={isEdit == true ? "Detail User" : "Tambah User"}
          show={showModal}
          onClickBackdrop={() => {
            setShowModal(!showModal);
            setIsEdit(false);
          }}
        >
          <Input
            labelText="NIP"
            valueData={getNip}
            onChange={(e) => setNip(e.target.value)}
          />
          <Input
            labelText="Nama"
            valueData={getNama}
            onChange={(e) => setNama(e.target.value)}
          />
          <Input
            labelText="Email"
            type="email"
            valueData={getEmail}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            labelText="No Handphone"
            valueData={getNohp}
            onChange={(e) => setNohp(e.target.value)}
          />
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="my-2">
              <label className="font-bold text-black text-sm">Jabatan</label>
              <select
                onChange={(e) =>
                  setSelectedJabatan(parseInt(e.target.value) || 0)
                }
                name="jabatan"
                placeholder="jabatan"
                defaultValue="0"
                value={selectedJabatan}
                className="w-full bg-gray-200 rounded-xl py-2 px-2 font-nunito focus:outline-none text-sm md:text-base"
              >
                <option value="0" disabled>
                  Pilih Jabatan
                </option>
                {jabatanDropdown.map((item, index) => (
                  <option value={item.id} key={index}>
                    {item.nama_jabatan}
                  </option>
                ))}
              </select>
            </div>
            <div className="my-2 block">
              <label className="font-bold text-black text-sm">
                Detail Instansi
              </label>
              <Select
                placeholder="Pilih detail instansi"
                value={dataInstasi.find((op) => op.value === selectedInstansi)}
                onChange={(e) => setSelectedInstansi(e.value)}
                options={dataInstasi}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="my-2">
              <label className="font-bold text-black text-sm">Hak Akses</label>
              <select
                value={selectedHakAkses}
                onChange={(e) => setSelectedHakAkses(e.target.value)}
                id="direktorat"
                name="direktorat"
                defaultValue=""
                className="w-full bg-gray-200 rounded-xl py-2 px-4 font-nunito focus:outline-none"
              >
                <option value="">Pilih Hak Akses</option>
                <option value="respondent">Respondent</option>
                <option value="superadmin">Superadmin</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="my-2">
              <label className="font-bold text-black text-sm">
                User Status
              </label>
              <select
                onChange={(e) => setSelectedAktif(e.target.value)}
                id="direktorat"
                name="direktorat"
                value={selectedAktif}
                defaultValue=""
                className="w-full bg-gray-200 rounded-xl py-2 px-4 font-nunito focus:outline-none"
              >
                <option disabled value="">
                  Pilih status user
                </option>
                <option value={true}>Aktif</option>
                <option value={false}>Non-Aktif</option>
              </select>
            </div>
          </div>
          <form onSubmit={formik.handleSubmit}>
            {isEdit == false && (
              <>
                <Input
                  labelText="Password"
                  classes="my-2"
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={formik.handleChange}
                  valueData={formik.values.password}
                />
                {formik.errors.password && (
                  <span className="text-xs text-red-500">
                    {formik.errors.password}
                  </span>
                )}
                <Input
                  labelText="Ulangi Password"
                  classes="my-2"
                  placeholder="Ulangi Password"
                  type="password"
                  name="ulangi_password"
                  onChange={formik.handleChange}
                  valueData={formik.values.ulangi_password}
                />
                {formik.errors.ulangi_password && (
                  <span className="text-xs text-red-500">
                    {formik.errors.ulangi_password}
                  </span>
                )}
              </>
            )}
          </form>
          <Button
            onClick={doSave}
            buttonText="Simpan"
            buttonColor="#4361EE"
            buttonTextColor="#FFF"
            fontSize={14}
            className="mt-4"
            type="submit"
          />
        </Modal>
      </div>
    </MainLayout>
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
