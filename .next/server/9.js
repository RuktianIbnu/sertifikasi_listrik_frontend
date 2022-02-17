exports.ids = [9];
exports.modules = {

/***/ "./components/pelanggan/EditPelanggan.js":
/*!***********************************************!*\
  !*** ./components/pelanggan/EditPelanggan.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/global */ "./helpers/global.js");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toast-notifications */ "react-toast-notifications");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\project\\sertifikasi_listrik_frontend\\components\\pelanggan\\EditPelanggan.js";








const Card = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 5px 15px 4px rgba(0, 0, 0, 0.25);
`;

function EditPelanggan({
  show,
  setShow,
  id
}) {
  const accessToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.accessToken);
  const {
    addToast
  } = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__["useToasts"])();
  const {
    0: taridOption,
    1: setTarifOption
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    fetchTarif();
    fetchDetailPelanggan(id);
  }, []);
  const formik = Object(formik__WEBPACK_IMPORTED_MODULE_7__["useFormik"])({
    initialValues: {
      username: "",
      password: "",
      nomor_kwh: 0,
      nama_pelanggan: "",
      alamat: "",
      id_tarif: parseInt(0)
    },
    onSubmit: values => updatePelanggan(values)
  });

  const updatePelanggan = async values => {
    try {
      const headers = {
        Authorization: accessToken
      };
      const response = await _helpers_global__WEBPACK_IMPORTED_MODULE_4__["axiosGeneral"].put(`/resources/pelanggan/${id}`, values, {
        headers
      });
      const {
        status
      } = response;

      if (status === 200) {
        addToast("Berhasil ubah pelanggan", {
          appearance: "success"
        });
        setShow(!show);
      }
    } catch (error) {
      addToast(Object(_helpers_global__WEBPACK_IMPORTED_MODULE_4__["errorHandler"])(error), {
        appearance: "error"
      });
    }
  };

  const fetchDetailPelanggan = async id => {
    try {
      const headers = {
        Authorization: accessToken
      };
      const response = await _helpers_global__WEBPACK_IMPORTED_MODULE_4__["axiosGeneral"].get(`/resources/pelanggan/${id}`, {
        headers
      });
      const {
        status,
        data
      } = response;

      if (status === 200) {
        formik.setFieldValue("username", data.data.username);
        formik.setFieldValue("password", data.data.password);
        formik.setFieldValue("nomor_kwh", data.data.nomor_kwh);
        formik.setFieldValue("nama_pelanggan", data.data.nama_pelanggan);
        formik.setFieldValue("alamat", data.data.alamat);
        formik.setFieldValue("id_tarif", data.data.id_tarif);
      }
    } catch (error) {
      addToast(Object(_helpers_global__WEBPACK_IMPORTED_MODULE_4__["errorHandler"])(error), {
        appearance: "error"
      });
    }
  };

  const fetchTarif = async () => {
    try {
      const headers = {
        Authorization: accessToken
      };
      const response = await _helpers_global__WEBPACK_IMPORTED_MODULE_4__["axiosGeneral"].get("/resources/tarif", {
        headers,
        params: {
          start: 0,
          limit: 999
        }
      });
      setTarifOption([]);
      const {
        status,
        data
      } = response;

      if (status === 200) {
        const tarifArr = [];
        const tarif = data.data;

        for (const iterator of tarif) {
          let val = {
            value: iterator.id_tarif,
            label: iterator.daya
          };
          tarifArr.push(val);
        }

        setTarifOption(tarifArr);
      }
    } catch (error) {
      addToast(Object(_helpers_global__WEBPACK_IMPORTED_MODULE_4__["errorHandler"])(error), {
        appearance: "error"
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
    className: "w-3/5 h-4/5 block mx-auto px-4 my-3",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "block mx-auto py-4",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "font-bold text-3xl text-black mb-20",
        children: "Ubah Data Pelanggan"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: formik.handleSubmit,
        method: "POST",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-4 my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Username"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base",
            name: "username",
            placeholder: "Username",
            type: "text",
            value: formik.values.username,
            onChange: formik.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, this), formik.errors.username && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "text-xs text-red-500",
            children: formik.errors.username
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-4 my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base",
            name: "password",
            placeholder: "Password",
            type: "password",
            value: formik.values.password,
            onChange: formik.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, this), formik.errors.password && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "text-xs text-red-500",
            children: formik.errors.password
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-4 my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Nomor KWH"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base",
            name: "nomor_kwh",
            placeholder: "Nomor KWH",
            type: "number",
            value: formik.values.nomor_kwh,
            onChange: formik.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 13
          }, this), formik.errors.nomor_kwh && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "text-xs text-red-500",
            children: formik.errors.nomor_kwh
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-4 my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Nama Pelanggan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base",
            name: "nama_pelanggan",
            placeholder: "Nama pelanggan",
            type: "text",
            value: formik.values.nama_pelanggan,
            onChange: formik.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 13
          }, this), formik.errors.nama_pelanggan && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "text-xs text-red-500",
            children: formik.errors.nama_pelanggan
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-4 my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Alamat"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base",
            name: "alamat",
            placeholder: "Alamat",
            type: "text",
            value: formik.values.alamat,
            onChange: formik.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 13
          }, this), formik.errors.alamat && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "text-xs text-red-500",
            children: formik.errors.alamat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Pilih Tarif"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
            placeholder: "Pilih tarif",
            options: taridOption,
            name: "id_tarif",
            value: taridOption[taridOption.findIndex(x => x.value == formik.values.id_tarif)],
            onChange: e => {
              formik.setFieldValue("id_tarif", e.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-row justify-end items-center mt-20",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            onClick: () => setShow(!show),
            className: "px-12 text-white py-2 font-semibold bg-gray-400 rounded cursor-pointer",
            children: "Batal"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "submit",
            className: "px-12 text-white py-2 font-semibold bg-blue-500 rounded cursor-pointer ml-10",
            children: "Simpan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 238,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 115,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (EditPelanggan);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BlbGFuZ2dhbi9FZGl0UGVsYW5nZ2FuLmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJzdHlsZWQiLCJkaXYiLCJFZGl0UGVsYW5nZ2FuIiwic2hvdyIsInNldFNob3ciLCJpZCIsImFjY2Vzc1Rva2VuIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImFkZFRvYXN0IiwidXNlVG9hc3RzIiwidGFyaWRPcHRpb24iLCJzZXRUYXJpZk9wdGlvbiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZmV0Y2hUYXJpZiIsImZldGNoRGV0YWlsUGVsYW5nZ2FuIiwiZm9ybWlrIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJub21vcl9rd2giLCJuYW1hX3BlbGFuZ2dhbiIsImFsYW1hdCIsImlkX3RhcmlmIiwicGFyc2VJbnQiLCJvblN1Ym1pdCIsInZhbHVlcyIsInVwZGF0ZVBlbGFuZ2dhbiIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicmVzcG9uc2UiLCJheGlvc0dlbmVyYWwiLCJwdXQiLCJzdGF0dXMiLCJhcHBlYXJhbmNlIiwiZXJyb3IiLCJlcnJvckhhbmRsZXIiLCJnZXQiLCJkYXRhIiwic2V0RmllbGRWYWx1ZSIsInBhcmFtcyIsInN0YXJ0IiwibGltaXQiLCJ0YXJpZkFyciIsInRhcmlmIiwiaXRlcmF0b3IiLCJ2YWwiLCJ2YWx1ZSIsImxhYmVsIiwiZGF5YSIsInB1c2giLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJlcnJvcnMiLCJmaW5kSW5kZXgiLCJ4IiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxJQUFJLEdBQUdDLHdEQUFNLENBQUNDLEdBQUk7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsQ0FKQTs7QUFNQSxTQUFTQyxhQUFU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NkJBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBSUUscUVBQUMsbURBQUQ7QUFDRSx1QkFBVyxFQUFDLGFBRGQ7QUFFRSxtQkFBTyxFQUFFYixXQUZYO0FBR0UsZ0JBQUksRUFBQyxVQUhQO0FBSUUsaUJBQUssRUFDSEEsV0FBVyxDQUNYQSxXQUFXLENBQUM2QyxTQUFaLENBQ0dDLENBQUQsSUFBT0EsQ0FBQyxDQUFDUixLQUFGLElBQVdoQyxNQUFNLENBQUNXLE1BQVAsQ0FBY0gsUUFEbEMsQ0FEVyxDQUxmO0FBV0Usb0JBQVEsRUFBR2lDLENBQUQsSUFBTztBQUNmekMsb0JBQU0sQ0FBQ3dCLGFBQVAsQ0FBcUIsVUFBckIsRUFBaUNpQixDQUFDLENBQUNULEtBQW5DO0FBQ0Q7QUFiSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkEzRkYsZUErR0U7QUFBSyxtQkFBUyxFQUFDLDhDQUFmO0FBQUEsa0NBQ0U7QUFDRSxtQkFBTyxFQUFFLE1BQU03QyxPQUFPLENBQUMsQ0FBQ0QsSUFBRixDQUR4QjtBQUVFLHFCQUFTLEVBQUMsd0VBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFPRTtBQUNFLGdCQUFJLEVBQUMsUUFEUDtBQUVFLHFCQUFTLEVBQUMsOEVBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQS9HRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1SUQ7O0FBRWNELDRFQUFmLEUiLCJmaWxlIjoiOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGF4aW9zR2VuZXJhbCwgZXJyb3JIYW5kbGVyIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvZ2xvYmFsXCI7XHJcbmltcG9ydCB7IHVzZVRvYXN0cyB9IGZyb20gXCJyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zXCI7XHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCI7XHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwcHggNXB4IDE1cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBFZGl0UGVsYW5nZ2FuKHsgc2hvdywgc2V0U2hvdywgaWQgfSkge1xyXG4gIGNvbnN0IGFjY2Vzc1Rva2VuID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hY2Nlc3NUb2tlbik7XHJcbiAgY29uc3QgeyBhZGRUb2FzdCB9ID0gdXNlVG9hc3RzKCk7XHJcbiAgY29uc3QgW3RhcmlkT3B0aW9uLCBzZXRUYXJpZk9wdGlvbl0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFRhcmlmKCk7XHJcbiAgICBmZXRjaERldGFpbFBlbGFuZ2dhbihpZCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xyXG4gICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgIG5vbW9yX2t3aDogMCxcclxuICAgICAgbmFtYV9wZWxhbmdnYW46IFwiXCIsXHJcbiAgICAgIGFsYW1hdDogXCJcIixcclxuICAgICAgaWRfdGFyaWY6IHBhcnNlSW50KDApLFxyXG4gICAgfSxcclxuICAgIG9uU3VibWl0OiAodmFsdWVzKSA9PiB1cGRhdGVQZWxhbmdnYW4odmFsdWVzKSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdXBkYXRlUGVsYW5nZ2FuID0gYXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBhY2Nlc3NUb2tlbixcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0dlbmVyYWwucHV0KFxyXG4gICAgICAgIGAvcmVzb3VyY2VzL3BlbGFuZ2dhbi8ke2lkfWAsXHJcbiAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gcmVzcG9uc2U7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGFkZFRvYXN0KFwiQmVyaGFzaWwgdWJhaCBwZWxhbmdnYW5cIiwgeyBhcHBlYXJhbmNlOiBcInN1Y2Nlc3NcIiB9KTtcclxuICAgICAgICBzZXRTaG93KCFzaG93KTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWRkVG9hc3QoZXJyb3JIYW5kbGVyKGVycm9yKSwgeyBhcHBlYXJhbmNlOiBcImVycm9yXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hEZXRhaWxQZWxhbmdnYW4gPSBhc3luYyAoaWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYWNjZXNzVG9rZW4sXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NHZW5lcmFsLmdldChgL3Jlc291cmNlcy9wZWxhbmdnYW4vJHtpZH1gLCB7XHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSByZXNwb25zZTtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJ1c2VybmFtZVwiLCBkYXRhLmRhdGEudXNlcm5hbWUpO1xyXG4gICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwicGFzc3dvcmRcIiwgZGF0YS5kYXRhLnBhc3N3b3JkKTtcclxuICAgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZShcIm5vbW9yX2t3aFwiLCBkYXRhLmRhdGEubm9tb3Jfa3doKTtcclxuICAgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZShcIm5hbWFfcGVsYW5nZ2FuXCIsIGRhdGEuZGF0YS5uYW1hX3BlbGFuZ2dhbik7XHJcbiAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJhbGFtYXRcIiwgZGF0YS5kYXRhLmFsYW1hdCk7XHJcbiAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJpZF90YXJpZlwiLCBkYXRhLmRhdGEuaWRfdGFyaWYpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhZGRUb2FzdChlcnJvckhhbmRsZXIoZXJyb3IpLCB7IGFwcGVhcmFuY2U6IFwiZXJyb3JcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaFRhcmlmID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBhY2Nlc3NUb2tlbixcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NHZW5lcmFsLmdldChcIi9yZXNvdXJjZXMvdGFyaWZcIiwge1xyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBzdGFydDogMCxcclxuICAgICAgICAgIGxpbWl0OiA5OTksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIHNldFRhcmlmT3B0aW9uKFtdKTtcclxuICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBjb25zdCB0YXJpZkFyciA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHRhcmlmID0gZGF0YS5kYXRhO1xyXG4gICAgICAgIGZvciAoY29uc3QgaXRlcmF0b3Igb2YgdGFyaWYpIHtcclxuICAgICAgICAgIGxldCB2YWwgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBpdGVyYXRvci5pZF90YXJpZixcclxuICAgICAgICAgICAgbGFiZWw6IGl0ZXJhdG9yLmRheWEsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgdGFyaWZBcnIucHVzaCh2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUYXJpZk9wdGlvbih0YXJpZkFycik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFkZFRvYXN0KGVycm9ySGFuZGxlcihlcnJvciksIHsgYXBwZWFyYW5jZTogXCJlcnJvclwiIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCBjbGFzc05hbWU9XCJ3LTMvNSBoLTQvNSBibG9jayBteC1hdXRvIHB4LTQgbXktM1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIG14LWF1dG8gcHktNFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0zeGwgdGV4dC1ibGFjayBtYi0yMFwiPlxyXG4gICAgICAgICAgVWJhaCBEYXRhIFBlbGFuZ2dhblxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9IG1ldGhvZD1cIlBPU1RcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tNCBteS00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICBVc2VybmFtZVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweS0yIHB4LTMgYmctZ3JheS0xMDAgcm91bmRlZCBibG9jayB3LWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lIHRleHQtYmFzZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLnVzZXJuYW1lICYmIChcclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtcmVkLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTQgbXktNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1zZW1pYm9sZCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgUGFzc3dvcmRcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBweC0zIGJnLWdyYXktMTAwIHJvdW5kZWQgYmxvY2sgdy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMucGFzc3dvcmQgJiYgKFxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yZWQtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tNCBteS00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICBOb21vciBLV0hcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBweC0zIGJnLWdyYXktMTAwIHJvdW5kZWQgYmxvY2sgdy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJub21vcl9rd2hcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tb3IgS1dIXCJcclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5ub21vcl9rd2h9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLm5vbW9yX2t3aCAmJiAoXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXJlZC01MDBcIj5cclxuICAgICAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLm5vbW9yX2t3aH1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tNCBteS00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICBOYW1hIFBlbGFuZ2dhblxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweS0yIHB4LTMgYmctZ3JheS0xMDAgcm91bmRlZCBibG9jayB3LWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lIHRleHQtYmFzZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWFfcGVsYW5nZ2FuXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWEgcGVsYW5nZ2FuXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMubmFtYV9wZWxhbmdnYW59XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLm5hbWFfcGVsYW5nZ2FuICYmIChcclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtcmVkLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMubmFtYV9wZWxhbmdnYW59XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTQgbXktNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1zZW1pYm9sZCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgQWxhbWF0XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTIgcHgtMyBiZy1ncmF5LTEwMCByb3VuZGVkIGJsb2NrIHctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC1iYXNlXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiYWxhbWF0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFsYW1hdFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmFsYW1hdH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMuYWxhbWF0ICYmIChcclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtcmVkLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMuYWxhbWF0fVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICBQaWxpaCBUYXJpZlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaWxpaCB0YXJpZlwiXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17dGFyaWRPcHRpb259XHJcbiAgICAgICAgICAgICAgbmFtZT1cImlkX3RhcmlmXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICB0YXJpZE9wdGlvbltcclxuICAgICAgICAgICAgICAgIHRhcmlkT3B0aW9uLmZpbmRJbmRleChcclxuICAgICAgICAgICAgICAgICAgKHgpID0+IHgudmFsdWUgPT0gZm9ybWlrLnZhbHVlcy5pZF90YXJpZlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwiaWRfdGFyaWZcIiwgZS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlciBtdC0yMFwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvdyghc2hvdyl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMTIgdGV4dC13aGl0ZSBweS0yIGZvbnQtc2VtaWJvbGQgYmctZ3JheS00MDAgcm91bmRlZCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBCYXRhbFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTEyIHRleHQtd2hpdGUgcHktMiBmb250LXNlbWlib2xkIGJnLWJsdWUtNTAwIHJvdW5kZWQgY3Vyc29yLXBvaW50ZXIgbWwtMTBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU2ltcGFuXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0UGVsYW5nZ2FuO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9