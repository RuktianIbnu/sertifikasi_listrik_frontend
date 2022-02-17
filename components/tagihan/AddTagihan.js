import Select from "react-select";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { axiosGeneral, errorHandler } from "../../helpers/global";
import { useToasts } from "react-toast-notifications";
import { useFormik } from "formik";
import styled from "styled-components";

const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 5px 15px 4px rgba(0, 0, 0, 0.25);
`;

function AddTagihan({ show, setShow }) {
  const accessToken = useSelector((state) => state.accessToken);
  const { addToast } = useToasts();
  const [penggunaanOption, setPenggunaanOption] = useState([]);
  const [meterAwal, setMeterAwal] = useState();
  const [meterAkhir, setMeterAkhir] = useState();
  const [idPelanggan, setIdPelanggan] = useState();


  useEffect(() => {
    fetchPenggunaan();
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
    onSubmit: (values) => createTagihan(values),
  });

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
          search: "Belum Bayar",
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
            label: iterator.pelanggan_detail.nomor_kwh + " - " + iterator.pelanggan_detail.nama_pelanggan,
          };
          penggunaanArr.push(val);
        }
        setPenggunaanOption(penggunaanArr);
      }
    } catch (error) {
      addToast(errorHandler(error), { appearance: "error" });
    }
  };

  const getDataPenggunaanById = async (idPenggunaan) => {
    try {
      const headers = {
        Authorization: accessToken,
      };

      const response = await axiosGeneral.get(`/resources/penggunaan/${idPenggunaan}`, {
        headers,
        params: {
          start: 0,
          limit: 999,
        },
      });
      const { status, data } = response;
      if (status === 200) {
        formik.setFieldValue("id_penggunaan", data.data.id_penggunaan);
        setIdPelanggan(data.data.id_pelanggan)
        formik.setFieldValue("bulan", data.data.bulan);
        formik.setFieldValue("tahun", data.data.tahun);
        formik.setFieldValue("status", data.data.status);
        const akhir = data.data.meter_akhir;
        const awal = data.data.meter_awal;
        const hasil = akhir - awal;
        formik.setFieldValue("jumlah_meter", hasil );
        setMeterAkhir(data.data.meter_akhir);
        setMeterAwal(data.data.meter_awal);
      }
    } catch (error) {
      addToast(errorHandler(error), { appearance: "error" });
    }
  };

  const createTagihan = async (values) => {
    try {
      const headers = {
        Authorization: accessToken,
      };
      values.id_pelanggan = idPelanggan;
      const response = await axiosGeneral.post(`/resources/tagihan`, 
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

  return (
    <Card className="w-3/5 h-4/5 block mx-auto px-4 my-3">
      <div className="block mx-auto py-4">
        <h1 className="font-bold text-3xl text-black mb-16">
          Tambah Data Tagihan
        </h1>
        <form onSubmit={formik.handleSubmit} method="POST">
          <div className="col-span-2 my-4">
            <label htmlFor="email" className="block font-semibold text-sm">
              Nama Pengguna
            </label>
            <Select
              placeholder="Pilih penggunaan"
              options={penggunaanOption}
              name="id_penggunaan"
              isClearable={true}
              defaultValue={penggunaanOption.find(
                (v) => v.value === formik.values.id_penggunaan
              )}
              onChange={(e) => {
                const val = e ? e.value : null;
                getDataPenggunaanById(val);
                formik.setFieldValue("id_penggunaan", val);
              }}
            />
          </div>
          <div className="col-span-4">
            <label htmlFor="email" className="block font-semibold text-sm">
              Bulan
            </label>
            <input
              className="py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base"
              name="bulan"
              placeholder="Bulan"
              type="text"
              disabled
              value={formik.values.bulan}
              onChange={formik.handleChange}
            />
            {formik.errors.bulan && (
              <span className="text-xs text-red-500">
                {formik.errors.bulan}
              </span>
            )}
          </div>
          <div className="col-span-4">
            <label htmlFor="email" className="block font-semibold text-sm">
              Tahun
            </label>
            <input
              className="py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base"
              name="tahun"
              placeholder="Jumlah meter"
              type="number"
              disabled
              value={formik.values.tahun}
              onChange={formik.handleChange}
            />
            {formik.errors.tahun && (
              <span className="text-xs text-red-500">
                {formik.errors.tahun}
              </span>
            )}
          </div>
          <div className="flex justify-between">
            <div className="w-full mr-2">
            <label htmlFor="email" className="block font-semibold text-sm">
              Meter Awal
            </label>
            <input
              className="py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base"
              placeholder="Meter awal"
              type="number"
              disabled
              value={meterAwal}
            />
            </div>
            <div className="w-full ml-2">
            <label htmlFor="email" className="block font-semibold text-sm">
              Meter Akhir
            </label>
            <input
              className="py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base"
              placeholder="Meter akhir"
              type="number"
              disabled
              value={meterAkhir}
            />
            </div>
          </div>
          <div className="col-span-4">
            <label htmlFor="email" className="block font-semibold text-sm">
              Penggunaan (Meter)
            </label>
            <input
              className="py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base"
              name="jumlah_meter"
              placeholder="Jumlah meter"
              type="number"
              disabled
              value={formik.values.jumlah_meter}
              onChange={formik.handleChange}
            />
            {formik.errors.jumlah_meter && (
              <span className="text-xs text-red-500">
                {formik.errors.jumlah_meter}
              </span>
            )}
          </div>
          <div className="col-span-2 my-4">
            <label htmlFor="email" className="block font-semibold text-sm">
              Status
            </label>
            <input
              className="py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base"
              name="status"
              placeholder="Status"
              type="text"
              disabled
              value={formik.values.status}
              onChange={formik.handleChange}
            />
            {formik.errors.status && (
              <span className="text-xs text-red-500">
                {formik.errors.status}
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

export default AddTagihan;
