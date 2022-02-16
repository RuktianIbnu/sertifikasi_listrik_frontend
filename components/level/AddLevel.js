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

function AddLevel({ show, setShow }) {
  const accessToken = useSelector((state) => state.accessToken);
  const { addToast } = useToasts();
//   const [levelOption, setLevelOption] = useState([]);

  useEffect(() => {
  }, []);

  const formik = useFormik({
    initialValues: {
      nama_level: "",
    },
    onSubmit: (values) => createLevel(values),
  });

  const createLevel = async (values) => {
    try {
      
      const headers = {
        Authorization: accessToken,
      };
      const response = await axiosGeneral.post(`/resources/level`, 
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
          Tambah Data Level
        </h1>
        <form onSubmit={formik.handleSubmit} method="POST">
          <div className="col-span-4">
            <label htmlFor="email" className="block font-semibold text-sm">
              Nama Level
            </label>
            <input
              className="py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base"
              name="nama_level"
              placeholder="Nama Level"
              type="text"
              value={formik.values.nama_level}
              onChange={formik.handleChange}
            />
            {formik.errors.nama_level && (
              <span className="text-xs text-red-500">
                {formik.errors.nama_level}
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

export default AddLevel;
