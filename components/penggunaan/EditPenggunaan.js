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

function EditPenggunaan({ show, setShow, id }) {
  const accessToken = useSelector((state) => state.accessToken);
  const { addToast } = useToasts();
  const [pelangganOption, setPelangganOption] = useState([]);
  const [listYears, setListYears] = useState([]);

  useEffect(() => {
    fetchPelanggan();
    fetchPenggunaanDetail(id);
    ListYear();
  }, []);

  const formik = useFormik({
    initialValues: {
      id_pelanggan: parseInt(0),
      bulan: "",
      tahun: "",
      meter_awal: "",
      meter_akhir: "",
    },
    onSubmit: (values) => updatePelanggan(values),
  });

  const updatePelanggan = async (values) => {
    try {
      const headers = {
        Authorization: accessToken,
      };
      const response = await axiosGeneral.put(
        `/resources/penggunaan/${id}`,
        values,
        {
          headers,
        }
      );
      const { status } = response;
      if (status === 200) {
        addToast("Berhasil ubah pelanggan", { appearance: "success" });
        setShow(!show);
      }
    } catch (error) {
      addToast(errorHandler(error), { appearance: "error" });
    }
  };

  const fetchPenggunaanDetail = async (id) => {
    try {
      const headers = {
        Authorization: accessToken,
      };
      const response = await axiosGeneral.get(`/resources/penggunaan/${id}`, {
        headers,
      });
      const { status, data } = response;
      if (status === 200) {
        formik.setFieldValue("id_pelanggan", data.data.id_pelanggan);
        formik.setFieldValue("bulan", data.data.bulan);
        formik.setFieldValue("tahun", data.data.tahun);
        formik.setFieldValue("meter_awal", data.data.meter_awal);
        formik.setFieldValue("meter_akhir", data.data.meter_akhir);
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

  return (
    <Card className="w-3/5 h-4/5 block mx-auto px-4 my-3">
      <div className="block mx-auto py-4">
        <h1 className="font-bold text-3xl text-black mb-20">
          Ubah Data Penggunaan
        </h1>
        <form onSubmit={formik.handleSubmit} method="POST">
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
              Meter Awal
            </label>
            <input
              className="py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base"
              name="meter_awal"
              placeholder="Meter awal"
              type="number"
              value={formik.values.meter_awal}
              onChange={formik.handleChange}
            />
            {formik.errors.meter_awal && (
              <span className="text-xs text-red-500">
                {formik.errors.meter_awal}
              </span>
            )}
          </div>
          <div className="col-span-4 my-4">
            <label htmlFor="email" className="block font-semibold text-sm">
              Meter Akhir
            </label>
            <input
              className="py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base"
              name="meter_akhir"
              placeholder="Meter akhir"
              type="number"
              value={formik.values.meter_akhir}
              onChange={formik.handleChange}
            />
            {formik.errors.meter_akhir && (
              <span className="text-xs text-red-500">
                {formik.errors.meter_akhir}
              </span>
            )}
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

export default EditPenggunaan;
