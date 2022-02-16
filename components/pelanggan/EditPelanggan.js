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

function EditPelanggan({ show, setShow, id }) {
  const accessToken = useSelector((state) => state.accessToken);
  const { addToast } = useToasts();
  const [taridOption, setTarifOption] = useState([]);

  useEffect(() => {
    fetchTarif();
    fetchDetailPelanggan(id);
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
    onSubmit: (values) => updatePelanggan(values),
  });

  const updatePelanggan = async (values) => {
    try {
      const headers = {
        Authorization: accessToken,
      };
      const response = await axiosGeneral.put(
        `/resources/pelanggan/${id}`,
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

  const fetchDetailPelanggan = async (id) => {
    try {
      const headers = {
        Authorization: accessToken,
      };
      const response = await axiosGeneral.get(`/resources/pelanggan/${id}`, {
        headers,
      });
      const { status, data } = response;
      if (status === 200) {
        formik.setFieldValue("username", data.data[0].username);
        formik.setFieldValue("password", data.data[0].password);
        formik.setFieldValue("nomor_kwh", data.data[0].nomor_kwh);
        formik.setFieldValue("nama_pelanggan", data.data[0].nama_pelanggan);
        formik.setFieldValue("alamat", data.data[0].alamat);
        formik.setFieldValue("id_tarif", data.data[0].id_tarif);
      }
    } catch (error) {
      addToast(errorHandler(error), { appearance: "error" });
    }
  };

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

  return (
    <Card className="w-3/5 h-4/5 block mx-auto px-4 my-3">
      <div className="block mx-auto py-4">
        <h1 className="font-bold text-3xl text-black mb-20">
          Ubah Data Pelanggan
        </h1>
        <form onSubmit={formik.handleSubmit} method="POST">
          <div className="col-span-4 my-4">
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
          <div className="col-span-4 my-4">
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
          <div className="col-span-4 my-4">
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
          <div className="col-span-4 my-4">
            <label htmlFor="email" className="block font-semibold text-sm">
              Nama Pelanggan
            </label>
            <input
              className="py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base"
              name="nama_pelanggan"
              placeholder="Nama pelanggan"
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
          <div className="col-span-4 my-4">
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
          <div className="col-span-4">
            <label htmlFor="email" className="block font-semibold text-sm">
              Pilih Tarif
            </label>
            <Select
              placeholder="Pilih tarif"
              options={taridOption}
              name="id_tarif"
              value={
                taridOption[
                taridOption.findIndex(
                  (x) => x.value == formik.values.id_tarif
                )
                ]
              }
              onChange={(e) => {
                formik.setFieldValue("id_tarif", e.value);
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

export default EditPelanggan;
