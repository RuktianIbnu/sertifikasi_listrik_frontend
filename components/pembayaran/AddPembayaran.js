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

function AddPembayaran({ show, setShow }) {
  const accessToken = useSelector((state) => state.accessToken);
  const { addToast } = useToasts();
  const [pelangganOption, setPelangganOption] = useState([]);
  const [listYears, setListYears] = useState([]);

  const optionsBulan = [
    { value: 'January', label: 'January' },
    { value: 'February', label: 'February' },
    { value: 'March', label: 'March' },
    { value: 'April', label: 'April' },
    { value: 'May', label: 'May' },
    { value: 'June', label: 'June' },
    { value: 'July', label: 'July' },
    { value: 'August', label: 'August' },
    { value: 'September', label: 'September' },
    { value: 'October', label: 'October' },
    { value: 'November', label: 'November' },
    { value: 'December', label: 'December' }
  ]

  useEffect(() => {
    fetchPelanggan();
    ListYear();
  }, []);

  const formik = useFormik({
    initialValues: {
      id_pelanggan: parseInt(0),
      bulan: "",
      tahun: 0,
      meter_awal: "",
      meter_akhir: "",
    },
    onSubmit: (values) => createPenggunaan(values),
  });

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

  const createPenggunaan = async (values) => {
    try {
      const headers = {
        Authorization: accessToken,
      };
      
      const response = await axiosGeneral.post(`/resources/penggunaan`, 
      values, {
        headers,
      });
      const { status } = response;
      if (status === 201 || status === 200) {
        setShow(!show);
      }
      addToast("Berhasil simpan data", { appearance: "success" });
    } catch (error) {
      addToast(errorHandler(error), { appearance: "error" });
    }
  };

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

  return (
    <Card className="w-3/5 h-4/5 block mx-auto px-4 my-3">
      <div className="block mx-auto py-4">
        <h1 className="font-bold text-3xl text-black mb-16">
          Tambah Data Penggunaan
        </h1>
        <form onSubmit={formik.handleSubmit} method="POST">
        <div className="col-span-2 my-4">
            <label htmlFor="email" className="block font-semibold text-sm">
              Pelanggan
            </label>
            <Select
              placeholder="Pilih pelanggan"
              options={pelangganOption}
              name="id_pelanggan"
              isClearable={true}
              defaultValue={pelangganOption.find(
                (v) => v.value === formik.values.id_pelanggan
              )}
              onChange={(e) => {
                const val = e ? e.value : null;
                formik.setFieldValue("id_pelanggan", val);
              }}
            />
          </div>
          <div className="col-span-2 my-4">
            <label htmlFor="email" className="block font-semibold text-sm">
              Bulan
            </label>
            <Select
              placeholder="Pilih bulan"
              options={optionsBulan}
              name="bulan"
              isClearable={true}
              defaultValue={optionsBulan.find(
                (v) => v.value === formik.values.bulan
              )}
              onChange={(e) => {
                const val = e ? e.value : null;
                formik.setFieldValue("bulan", val);
              }}
            />
          </div>
          <div className="col-span-2 my-4">
            <label htmlFor="email" className="block font-semibold text-sm">
              Tahun
            </label>
            <Select
                className="w-auto"
                placeholder="Pilih Tahun"
                name="tahun"
                isClearable={true}
                options={listYears}
                defaultValue={optionsBulan.find(
                    (v) => v.value === formik.values.tahun
                  )}
                  onChange={(e) => {
                    const val = e ? e.value : null;
                    formik.setFieldValue("tahun", val);
                  }}
                // onChange={(e) => {
                //   const val = e ? e.value : "";
                //   setYear(val);
                // }}
                // value={listYears.find((op) => op.value === year)}
                
              />
          </div>
          <div className="col-span-4">
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
          <div className="col-span-4">
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
          <div className="flex flex-row justify-end my-4">
            <div
              onClick={() => setShow(!show)}
              className="px-12 mx-3 text-white py-2 text-center w-1/6 font-semibold bg-gray-400 rounded cursor-pointer"
            >
              Batal
            </div>
            <button
              type="submit"
              //   style={{ background: "#4361ee" }}
              className="inline-block py-2 text-gray-50 bg-blue-500 px-4 text-center w-1/6 rounded font-bold cursor-pointer focus:outline-none"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </Card>
  );
}

export default AddPembayaran;
