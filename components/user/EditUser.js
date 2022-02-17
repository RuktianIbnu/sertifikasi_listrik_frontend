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

function EditUser({ show, setShow, id }) {
  const accessToken = useSelector((state) => state.accessToken);
  const { addToast } = useToasts();
  const [levelOptions, setLevelOptions] = useState([]);

  useEffect(() => {
    fetchLevel();
    fetchDetailUser(id);
  }, []);

  const formik = useFormik({
    initialValues: {
        id_user: id,
        username: "",
        nama_admin: "",
        id_level: null,
    },
    onSubmit: (values) => updateUser(values),
  });

  const updateUser = async (values) => {
    try {
      const headers = {
        Authorization: accessToken,
      };
      const response = await axiosGeneral.put(
        `/resources/user/${id}`,
        values,
        {
          headers,
        }
      );
      const { status } = response;
      if (status === 200) {
        addToast("Berhasil ubah user", { appearance: "success" });
        setShow(!show);
      }
    } catch (error) {
      addToast(errorHandler(error), { appearance: "error" });
    }
  };

  const fetchDetailUser = async () => {
    try {
      const headers = {
        Authorization: accessToken,
      };
      const response = await axiosGeneral.get(`/resources/user/${id}`, {
        headers,
      });
      const { status, data } = response;
      if (status === 200) {
        formik.setFieldValue("username", data.data.username);
        formik.setFieldValue("nama_admin", data.data.nama_admin);
        formik.setFieldValue("id_level", data.data.id_level);
      }
    } catch (error) {
      addToast(errorHandler(error), { appearance: "error" });
    }
  };

  const fetchLevel = async () => {
    try {
      const headers = {
        Authorization: accessToken,
      };

      const response = await axiosGeneral.get("/resources/level", {
        headers,
        params: {
          start: 0,
          limit: 999,
        },
      });
      setLevelOptions([]);
      const { status, data } = response;
      if (status === 200) {
        const levelArr = [];
        const level = data.data;
        for (const iterator of level) {
          let val = {
            value: iterator.id_level,
            label: iterator.nama_level,
          };
          levelArr.push(val);
        }
        setLevelOptions(levelArr);
      }
    } catch (error) {
      addToast(errorHandler(error), { appearance: "error" });
    }
  };

  return (
    <Card className="w-3/5 h-4/5 block mx-auto px-4 my-3">
      <div className="block mx-auto py-4">
        <h1 className="font-bold text-3xl text-black mb-20">
          Ubah Data User
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
              Nama User
            </label>
            <input
              className="py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base"
              name="nama_admin"
              placeholder="Nama User"
              type="text"
              value={formik.values.nama_admin}
              onChange={formik.handleChange}
            />
            {formik.errors.nama_admin && (
              <span className="text-xs text-red-500">
                {formik.errors.nama_admin}
              </span>
            )}
          </div>
          <div className="col-span-4">
            <label htmlFor="email" className="block font-semibold text-sm">
              Level
            </label>
            <Select
              placeholder="Pilih level"
              options={levelOptions}
              name="id_level"
              value={
                levelOptions[
                levelOptions.findIndex(
                  (x) => x.value == formik.values.id_level
                )
                ]
              }
              onChange={(e) => {
                formik.setFieldValue("id_level", e.value);
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

export default EditUser;
