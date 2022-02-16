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

function AddPelanggan({ show, setShow }) {
  const accessToken = useSelector((state) => state.accessToken);
  const { addToast } = useToasts();
  const [tarifOption, setTarifOption] = useState([]);

  useEffect(() => {
    fetchTarif();
  }, []);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      nomor_kwh: 0,
      nama_pelanggan: "",
      alamat: "",
      id_tarif: parseInt(0),
    },
    onSubmit: (values) => createPelanggan(values),
  });

  const fetchTarif = async () => {
    try {
      const headers = {
        Authorization: accessToken,
      };

      const response = await axiosGeneral.get("/resources/tarif", {
        headers,
        params: {
          start: 0,
          limit: 999,
        },
      });
      setTarifOption([]);
      const { status, data } = response;
      if (status === 200) {
        const tarifArr = [];
        const tarif = data.data;
        for (const iterator of tarif) {
          let val = {
            value: iterator.id_tarif,
            label: iterator.daya,
          };
          tarifArr.push(val);
        }
        setTarifOption(tarifArr);
      }
    } catch (error) {
      addToast(errorHandler(error), { appearance: "error" });
    }
  };

  const createPelanggan = async (values) => {
    try {
      const headers = {
        Authorization: accessToken,
      };
      
      const response = await axiosGeneral.post(`/resources/pelanggan`, 
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
          Tambah Data Pelanggan
        </h1>
        <form onSubmit={formik.handleSubmit} method="POST">
          <div className="col-span-4">
            <label htmlFor="email" className="block font-semibold text-sm">
              Username
            </label>
            <input
              className="py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base"
              name="username"
              placeholder="Username"
              type="text"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
            {formik.errors.username && (
              <span className="text-xs text-red-500">
                {formik.errors.username}
              </span>
            )}
          </div>
          <div className="col-span-4">
            <label htmlFor="email" className="block font-semibold text-sm">
              Password
            </label>
            <input
              className="py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base"
              name="password"
              placeholder="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password && (
              <span className="text-xs text-red-500">
                {formik.errors.password}
              </span>
            )}
          </div>
          <div className="col-span-4">
            <label htmlFor="email" className="block font-semibold text-sm">
              Nomor KWH
            </label>
            <input
              className="py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base"
              name="nomor_kwh"
              placeholder="Nomor KWH"
              type="number"
              value={formik.values.nomor_kwh}
              onChange={formik.handleChange}
            />
            {formik.errors.nomor_kwh && (
              <span className="text-xs text-red-500">
                {formik.errors.nomor_kwh}
              </span>
            )}
          </div>
          <div className="col-span-4">
            <label htmlFor="email" className="block font-semibold text-sm">
              Nama Pelanggan
            </label>
            <input
              className="py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base"
              name="nama_pelanggan"
              placeholder="Nama Pelanggan"
              type="text"
              value={formik.values.nama_pelanggan}
              onChange={formik.handleChange}
            />
            {formik.errors.nama_pelanggan && (
              <span className="text-xs text-red-500">
                {formik.errors.nama_pelanggan}
              </span>
            )}
          </div>
          <div className="col-span-4">
            <label htmlFor="email" className="block font-semibold text-sm">
              Alamat
            </label>
            <input
              className="py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base"
              name="alamat"
              placeholder="Alamat"
              type="text"
              value={formik.values.alamat}
              onChange={formik.handleChange}
            />
            {formik.errors.alamat && (
              <span className="text-xs text-red-500">
                {formik.errors.alamat}
              </span>
            )}
          </div>
          <div className="col-span-2 my-4">
            <label htmlFor="email" className="block font-semibold text-sm">
              Daya
            </label>
            <Select
              placeholder="Pilih Daya"
              options={tarifOption}
              name="id_tarif"
              isClearable={true}
              defaultValue={tarifOption.find(
                (v) => v.value === formik.values.id_tarif
              )}
              onChange={(e) => {
                const val = e ? e.value : null;
                formik.setFieldValue("id_tarif", val);
              }}
            />
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

export default AddPelanggan;
