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
  const user = useSelector((state) => state.user);
  const { addToast } = useToasts();
  const [pelangganOption, setPelangganOption] = useState([]);
  const [tagihanOption, setTagihanOption] = useState([]);

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
    fetchTagihan();
  }, []);

  const formik = useFormik({
    initialValues: {
      id_tagihan: 0,
      id_pelanggan: 0,
      tanggal_pembayaran: "",
      bulan_bayar: "",
      biaya_admin: 0,
      total_bayar: 0,
      id_user: user.id_user,
    },
    onSubmit: (values) => createPembayaran(values),
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

  const fetchTagihan = async () => {
    try {
      const headers = {
        Authorization: accessToken,
      };

      const response = await axiosGeneral.get("/resources/tagihan", {
        headers,
        params: {
          start: 0,
          limit: 999,
        },
      });
      setTagihanOption([]);
      const { status, data } = response;
      if (status === 200) {
        const tagihanArr = [];
        const tagihan = data.data;
        for (const iterator of tagihan) {
          let val = {
            value: iterator.id_tagihan,
            label: iterator.id_penggunaan + " " + iterator.bulan + " " + iterator.tahun,
          };
          tagihanArr.push(val);
        }
        setTagihanOption(tagihanArr);
      }
    } catch (error) {
      addToast(errorHandler(error), { appearance: "error" });
    }
  };

  const createPembayaran = async (values) => {
    try {
      const headers = {
        Authorization: accessToken,
      };
      const body = {
        id_tagihan: values.id_tagihan,
        id_pelanggan: values.id_pelanggan,
        tanggal_pembayaran: new Date(values.tanggal_pembayaran),
        bulan_bayar: values.bulan_bayar,
        biaya_admin: values.biaya_admin,
        total_bayar: values.total_bayar,
        id_user: user.id_user,
      }
      
      
      const response = await axiosGeneral.post(`/resources/pembayaran`, 
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
          Tambah Data Pembayaran
        </h1>
        <form onSubmit={formik.handleSubmit} method="POST">
        <div className="col-span-2 my-4">
            <label htmlFor="email" className="block font-semibold text-sm">
              Tagihan
            </label>
            <Select
              placeholder="Pilih tagihan"
              options={tagihanOption}
              name="id_tagihan"
              isClearable={true}
              defaultValue={tagihanOption.find(
                (v) => v.value === formik.values.id_tagihan
              )}
              onChange={(e) => {
                const val = e ? e.value : null;
                formik.setFieldValue("id_tagihan", val);
              }}
            />
          </div>
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
              Bulan Bayar
            </label>
            <Select
              placeholder="Pilih bulan"
              options={optionsBulan}
              name="bulan_bayar"
              isClearable={true}
              defaultValue={optionsBulan.find(
                (v) => v.value === formik.values.bulan_bayar
              )}
              onChange={(e) => {
                const val = e ? e.value : null;
                formik.setFieldValue("bulan_bayar", val);
              }}
            />
          </div>
          <div className="col-span-4">
          <label htmlFor="email" className="block font-semibold text-sm">
                Tanggal Bayar
              </label>
              <input
                className="py-2 px-4 bg-gray-200 rounded block w-full focus:outline-none text-base"
                name="tanggal_bayar"
                placeholder="Pilih Tanggal"
                type="date"
                value={formik.values.tanggal_bayar}
                onChange={formik.handleChange}
              />
              {formik.errors.tanggal_bayar && (
                <span className="text-xs text-red-500">
                  {formik.errors.tanggal_bayar}
                </span>
              )}
          </div>
          <div className="col-span-4">
            <label htmlFor="email" className="block font-semibold text-sm">
              Biaya Admin
            </label>
            <input
              className="py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base"
              name="biaya_admin"
              placeholder="Biaya admin"
              type="text"
              value={formik.values.biaya_admin}
              onChange={formik.handleChange}
            />
            {formik.errors.biaya_admin && (
              <span className="text-xs text-red-500">
                {formik.errors.biaya_admin}
              </span>
            )}
          </div>
          <div className="col-span-4">
            <label htmlFor="email" className="block font-semibold text-sm">
              Total Bayar
            </label>
            <input
              className="py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base"
              name="total_bayar"
              placeholder="Total Bayar"
              type="text"
              value={formik.values.total_bayar}
              onChange={formik.handleChange}
            />
            {formik.errors.total_bayar && (
              <span className="text-xs text-red-500">
                {formik.errors.total_bayar}
              </span>
            )}
          </div>
          <div className="col-span-4">
            <label htmlFor="email" className="block font-semibold text-sm">
              User
            </label>
            <input
              className="py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base"
              name="id_user"
              placeholder="id user"
              type="text"
              disabled
              value={user.id_user}
              onChange={formik.handleChange}
            />
            {formik.errors.id_user && (
              <span className="text-xs text-red-500">
                {formik.errors.id_user}
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
