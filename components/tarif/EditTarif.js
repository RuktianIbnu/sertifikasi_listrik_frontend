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

function EditTarif({ show, setShow, id }) {
  const accessToken = useSelector((state) => state.accessToken);
  const { addToast } = useToasts();

  useEffect(() => {
    fetchTarif(id);
  }, []);

  const formik = useFormik({
    initialValues: {
        id_tarif: id,
        daya: 0,
        tarifperkwh: 0,
    },
    onSubmit: (values) => updateTarif(values),
  });

  const updateTarif = async (values) => {
    try {
      const headers = {
        Authorization: accessToken,
      };
      const request = {
        daya: parseInt(values.daya) ,
        tarifperkwh: parseFloat(values.tarifperkwh)
    }
      const response = await axiosGeneral.put(
        `/resources/tarif/${id}`,
        request,
        {
          headers,
        }
      );
      const { status } = response;
      if (status === 200) {
        addToast("Berhasil ubah Tarif", { appearance: "success" });
        setShow(!show);
      }
    } catch (error) {
      addToast(errorHandler(error), { appearance: "error" });
    }
  };

  const fetchTarif = async (id) => {
    try {
      const headers = {
        Authorization: accessToken,
      };
      const response = await axiosGeneral.get(`/resources/tarif/${id}`, {
        headers,
      });
      const { status, data } = response;
      if (status === 200) {
        formik.setFieldValue("daya", data.data[0].daya);
        formik.setFieldValue("tarifperkwh", data.data[0].tarifperkwh);
        formik.setFieldValue("id_tarif", data.data[0].id_tarif);
      }
    } catch (error) {
      addToast(errorHandler(error), { appearance: "error" });
    }
  };

  return (
    <Card className="w-3/5 h-4/5 block mx-auto px-4 my-3">
      <div className="block mx-auto py-4">
        <h1 className="font-bold text-3xl text-black mb-20">
          Ubah Data Tarif
        </h1>
        <form onSubmit={formik.handleSubmit} method="POST">
          <div className="col-span-4 my-4">
            <label htmlFor="email" className="block font-semibold text-sm">
              Daya
            </label>
            <input
              className="py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base"
              name="daya"
              placeholder="Daya"
              type="text"
              value={formik.values.daya}
              onChange={formik.handleChange}
            />
            {formik.errors.daya && (
              <span className="text-xs text-red-500">
                {formik.errors.daya}
              </span>
            )}
          </div>
          <div className="col-span-4 my-4">
            <label htmlFor="email" className="block font-semibold text-sm">
              Tarif perKWH
            </label>
            <input
              className="py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base"
              name="tarifperkwh"
              placeholder="Tarif perKWH"
              type="text"
              value={formik.values.tarifperkwh}
              onChange={formik.handleChange}
            />
            {formik.errors.tarifperkwh && (
              <span className="text-xs text-red-500">
                {formik.errors.tarifperwkh}
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

export default EditTarif;
