import Select from "react-select";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { axiosGeneral, errorHandler } from "../../helpers/global";
import { useToasts } from "react-toast-notifications";
import * as Yup from "yup";
import { useFormik } from "formik";
import styled from "styled-components";

const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 5px 15px 4px rgba(0, 0, 0, 0.25);
`;

function EditTagihan({ show, setShow, id }) {
  const accessToken = useSelector((state) => state.accessToken);
  const { addToast } = useToasts();
  const [pelangganOption, setPelangganOption] = useState([]);
  const [penggunaanOption, setPenggunaanOption] = useState([]);
  const [listYears, setListYears] = useState([]);

  useEffect(() => {
    fetchPelanggan();
    fetchPenggunaan();
    fetchTagihanDetail(id);
    ListYear();
  }, []);

  const formik = useFormik({
    initialValues: {
      id_penggunaan: 0,
      id_pelanggan: 0,
      bulan: "",
      tahun: 0,
      jumlah_meter: 0,
      status: "",
    },
    onSubmit: (values) => updateTagihan(values),
  });

  const updateTagihan = async (values) => {
    try {
      const headers = {
        Authorization: accessToken,
      };
      const response = await axiosGeneral.put(
        `/resources/tagihan/${id}`,
        values,
        {
          headers,
        }
      );
      const { status } = response;
      if (status === 200) {
        addToast("Berhasil ubah tagihan", { appearance: "success" });
        setShow(!show);
      }
    } catch (error) {
      addToast(errorHandler(error), { appearance: "error" });
    }
  };

  const fetchTagihanDetail = async (id) => {
    try {
      const headers = {
        Authorization: accessToken,
      };
      const response = await axiosGeneral.get(`/resources/tagihan/${id}`, {
        headers,
      });
      const { status, data } = response;
      if (status === 200) {
        formik.setFieldValue("id_penggunaan", data.data[0].id_penggunaan);
        formik.setFieldValue("id_pelanggan", data.data[0].id_pelanggan);
        formik.setFieldValue("bulan", data.data[0].bulan);
        formik.setFieldValue("tahun", data.data[0].tahun);
        formik.setFieldValue("jumlah_meter", data.data[0].jumlah_meter);
        formik.setFieldValue("status", data.data[0].status);
      }
    } catch (error) {
      addToast(errorHandler(error), { appearance: "error" });
    }
  };

  const optionsBulan = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },
  ];

  const optionStatus = [
    { value: 'Sudah Bayar', label: 'Sudah Bayar' },
    { value: 'Belum Bayar', label: 'Belum Bayar' },
  ]


  const ListYear = () => {
    try {
      const maxOffset = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      const thisYear = new Date().getFullYear();
      const allYears = [];
      for (const iterator of maxOffset) {
        let val = {
          value: thisYear - iterator,
          label: thisYear - iterator,
        };
        allYears.push(val);
      }
      setListYears(allYears);
    } catch (error) {
      addToast(errorHandler(error), { appearance: "error" });
    }
  };

  const fetchPelanggan = async () => {
    try {
      const headers = {
        Authorization: accessToken,
      };

      const response = await axiosGeneral.get("/resources/pelanggan", {
        headers,
        params: {
          start: 0,
          limit: 999,
        },
      });
      setPelangganOption([]);
      const { status, data } = response;
      if (status === 200) {
        const pelangganArr = [];
        const pelanggan = data.data;
        for (const iterator of pelanggan) {
          let val = {
            value: iterator.id_pelanggan,
            label: iterator.nama_pelanggan,
          };
          pelangganArr.push(val);
        }
        setPelangganOption(pelangganArr);
      }
    } catch (error) {
      addToast(errorHandler(error), { appearance: "error" });
    }
  };

  const fetchPenggunaan = async () => {
    try {
      const headers = {
        Authorization: accessToken,
      };

      const response = await axiosGeneral.get("/resources/penggunaan", {
        headers,
        params: {
          start: 0,
          limit: 999,
        },
      });
      setPenggunaanOption([]);
      const { status, data } = response;
      if (status === 200) {
        const penggunaanArr = [];
        const penggunaan = data.data;
        for (const iterator of penggunaan) {
          let val = {
            value: iterator.id_penggunaan,
            label: iterator.bulan + " " + iterator.tahun,
          };
          penggunaanArr.push(val);
        }
        setPenggunaanOption(penggunaanArr);
      }
    } catch (error) {
      addToast(errorHandler(error), { appearance: "error" });
    }
  };

  return (
    <Card className="w-3/5 h-4/5 block mx-auto px-4 my-3">
      <div className="block mx-auto py-4">
        <h1 className="font-bold text-3xl text-black mb-20">
          Ubah Data Penggunaan
        </h1>
        <form onSubmit={formik.handleSubmit} method="POST">
          <div className="col-span-4">
            <label htmlFor="email" className="block font-semibold text-sm">
              Pilih Penggunaan
            </label>
            <Select
              placeholder="Pilih penggunaan"
              options={penggunaanOption}
              name="id_penggunaan"
              value={
                penggunaanOption[
                  penggunaanOption.findIndex(
                    (x) => x.value == formik.values.id_penggunaan
                  )
                ]
              }
              onChange={(e) => {
                formik.setFieldValue("id_penggunaan", e.value);
              }}
            />
          </div>
          <div className="col-span-4">
            <label htmlFor="email" className="block font-semibold text-sm">
              Pilih Pelanggan
            </label>
            <Select
              placeholder="Pilih pelanggan"
              options={pelangganOption}
              name="id_pelanggan"
              value={
                pelangganOption[
                  pelangganOption.findIndex(
                    (x) => x.value == formik.values.id_pelanggan
                  )
                ]
              }
              onChange={(e) => {
                formik.setFieldValue("id_pelanggan", e.value);
              }}
            />
          </div>
          <div className="col-span-4">
            <label htmlFor="email" className="block font-semibold text-sm">
              Pilih Bulan
            </label>
            <Select
              placeholder="Pilih pelanggan"
              options={optionsBulan}
              name="bulan"
              value={
                optionsBulan[
                  optionsBulan.findIndex(
                    (x) => x.value == formik.values.bulan
                  )
                ]
              }
              onChange={(e) => {
                formik.setFieldValue("bulan", e.value);
              }}
            />
          </div>
          <div className="col-span-4">
            <label htmlFor="email" className="block font-semibold text-sm">
              Pilih Tahun
            </label>
            <Select
              placeholder="Pilih pelanggan"
              options={listYears}
              name="tahun"
              value={
                listYears[
                  listYears.findIndex(
                    (x) => x.value == formik.values.tahun
                  )
                ]
              }
              onChange={(e) => {
                formik.setFieldValue("tahun", e.value);
              }}
            />
          </div>
          <div className="col-span-4 my-4">
            <label htmlFor="email" className="block font-semibold text-sm">
              Jumlah Meter
            </label>
            <input
              className="py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base"
              name="jumlah_meter"
              placeholder="Jumlah meter"
              type="number"
              value={formik.values.jumlah_meter}
              onChange={formik.handleChange}
            />
            {formik.errors.jumlah_meter && (
              <span className="text-xs text-red-500">
                {formik.errors.jumlah_meter}
              </span>
            )}
          </div>
          <div className="col-span-4">
            <label htmlFor="email" className="block font-semibold text-sm">
              Pilih Status
            </label>
            <Select
              placeholder="Pilih status"
              options={optionStatus}
              name="status"
              value={
                optionStatus[
                  optionStatus.findIndex(
                    (x) => x.value == formik.values.status
                  )
                ]
              }
              onChange={(e) => {
                formik.setFieldValue("status", e.value);
              }}
            />
          </div>
          <div className="flex flex-row justify-end items-center mt-20">
            <div
              onClick={() => setShow(!show)}
              className="px-12 text-white py-2 font-semibold bg-gray-400 rounded cursor-pointer"
            >
              Batal
            </div>
            <button
              type="submit"
              className="px-12 text-white py-2 font-semibold bg-blue-500 rounded cursor-pointer ml-10"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </Card>
  );
}

export default EditTagihan;
