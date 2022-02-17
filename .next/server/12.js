exports.ids = [12];
exports.modules = {

/***/ "./components/pembayaran/AddPembayaran.js":
/*!************************************************!*\
  !*** ./components/pembayaran/AddPembayaran.js ***!
  \************************************************/
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

var _jsxFileName = "C:\\project\\sertifikasi_listrik_frontend\\components\\pembayaran\\AddPembayaran.js";








const Card = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 5px 15px 4px rgba(0, 0, 0, 0.25);
`;

function AddPembayaran({
  show,
  setShow
}) {
  const accessToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.accessToken);
  const user = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user);
  const {
    addToast
  } = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__["useToasts"])();
  const {
    0: pelangganOption,
    1: setPelangganOption
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const {
    0: tagihanOption,
    1: setTagihanOption
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const optionsBulan = [{
    value: 'January',
    label: 'January'
  }, {
    value: 'February',
    label: 'February'
  }, {
    value: 'March',
    label: 'March'
  }, {
    value: 'April',
    label: 'April'
  }, {
    value: 'May',
    label: 'May'
  }, {
    value: 'June',
    label: 'June'
  }, {
    value: 'July',
    label: 'July'
  }, {
    value: 'August',
    label: 'August'
  }, {
    value: 'September',
    label: 'September'
  }, {
    value: 'October',
    label: 'October'
  }, {
    value: 'November',
    label: 'November'
  }, {
    value: 'December',
    label: 'December'
  }];
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    fetchPelanggan();
    fetchTagihan();
  }, []);
  const formik = Object(formik__WEBPACK_IMPORTED_MODULE_7__["useFormik"])({
    initialValues: {
      id_tagihan: 0,
      id_pelanggan: 0,
      tanggal_pembayaran: "",
      bulan_bayar: "",
      biaya_admin: 0,
      total_bayar: 0,
      id_user: user.id_user
    },
    onSubmit: values => createPembayaran(values)
  });

  const fetchPelanggan = async () => {
    try {
      const headers = {
        Authorization: accessToken
      };
      const response = await _helpers_global__WEBPACK_IMPORTED_MODULE_4__["axiosGeneral"].get("/resources/pelanggan", {
        headers,
        params: {
          start: 0,
          limit: 999
        }
      });
      setPelangganOption([]);
      const {
        status,
        data
      } = response;

      if (status === 200) {
        const pelangganArr = [];
        const pelanggan = data.data;

        for (const iterator of pelanggan) {
          let val = {
            value: iterator.id_pelanggan,
            label: iterator.nama_pelanggan
          };
          pelangganArr.push(val);
        }

        setPelangganOption(pelangganArr);
      }
    } catch (error) {
      addToast(Object(_helpers_global__WEBPACK_IMPORTED_MODULE_4__["errorHandler"])(error), {
        appearance: "error"
      });
    }
  };

  const fetchTagihan = async () => {
    try {
      const headers = {
        Authorization: accessToken
      };
      const response = await _helpers_global__WEBPACK_IMPORTED_MODULE_4__["axiosGeneral"].get("/resources/tagihan", {
        headers,
        params: {
          start: 0,
          limit: 999
        }
      });
      setTagihanOption([]);
      const {
        status,
        data
      } = response;

      if (status === 200) {
        const tagihanArr = [];
        const tagihan = data.data;

        for (const iterator of tagihan) {
          let val = {
            value: iterator.id_tagihan,
            label: iterator.id_penggunaan + " " + iterator.bulan + " " + iterator.tahun
          };
          tagihanArr.push(val);
        }

        setTagihanOption(tagihanArr);
      }
    } catch (error) {
      addToast(Object(_helpers_global__WEBPACK_IMPORTED_MODULE_4__["errorHandler"])(error), {
        appearance: "error"
      });
    }
  };

  const createPembayaran = async values => {
    try {
      const headers = {
        Authorization: accessToken
      };
      const body = {
        id_tagihan: values.id_tagihan,
        id_pelanggan: values.id_pelanggan,
        tanggal_pembayaran: new Date(values.tanggal_pembayaran),
        bulan_bayar: values.bulan_bayar,
        biaya_admin: values.biaya_admin,
        total_bayar: values.total_bayar,
        id_user: user.id_user
      };
      const response = await _helpers_global__WEBPACK_IMPORTED_MODULE_4__["axiosGeneral"].post(`/resources/pembayaran`, values, {
        headers
      });
      const {
        status
      } = response;

      if (status === 201 || status === 200) {
        setShow(!show);
      }

      addToast("Berhasil simpan data", {
        appearance: "success"
      });
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
        className: "font-bold text-3xl text-black mb-16",
        children: "Tambah Data Pembayaran"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: formik.handleSubmit,
        method: "POST",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-2 my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Tagihan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
            placeholder: "Pilih tagihan",
            options: tagihanOption,
            name: "id_tagihan",
            isClearable: true,
            defaultValue: tagihanOption.find(v => v.value === formik.values.id_tagihan),
            onChange: e => {
              const val = e ? e.value : null;
              formik.setFieldValue("id_tagihan", val);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-2 my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Pelanggan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
            placeholder: "Pilih pelanggan",
            options: pelangganOption,
            name: "id_pelanggan",
            isClearable: true,
            defaultValue: pelangganOption.find(v => v.value === formik.values.id_pelanggan),
            onChange: e => {
              const val = e ? e.value : null;
              formik.setFieldValue("id_pelanggan", val);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-2 my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Bulan Bayar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
            placeholder: "Pilih bulan",
            options: optionsBulan,
            name: "bulan_bayar",
            isClearable: true,
            defaultValue: optionsBulan.find(v => v.value === formik.values.bulan_bayar),
            onChange: e => {
              const val = e ? e.value : null;
              formik.setFieldValue("bulan_bayar", val);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 13
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
            children: "Tanggal Bayar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "py-2 px-4 bg-gray-200 rounded block w-full focus:outline-none text-base",
            name: "tanggal_bayar",
            placeholder: "Pilih Tanggal",
            type: "date",
            value: formik.values.tanggal_bayar,
            onChange: formik.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 15
          }, this), formik.errors.tanggal_bayar && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "text-xs text-red-500",
            children: formik.errors.tanggal_bayar
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Biaya Admin"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base",
            name: "biaya_admin",
            placeholder: "Biaya admin",
            type: "text",
            value: formik.values.biaya_admin,
            onChange: formik.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 13
          }, this), formik.errors.biaya_admin && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "text-xs text-red-500",
            children: formik.errors.biaya_admin
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Total Bayar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 248,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base",
            name: "total_bayar",
            placeholder: "Total Bayar",
            type: "text",
            value: formik.values.total_bayar,
            onChange: formik.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 13
          }, this), formik.errors.total_bayar && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "text-xs text-red-500",
            children: formik.errors.total_bayar
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "User"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 266,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base",
            name: "id_user",
            placeholder: "id user",
            type: "text",
            disabled: true,
            value: user.id_user,
            onChange: formik.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 269,
            columnNumber: 13
          }, this), formik.errors.id_user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "text-xs text-red-500",
            children: formik.errors.id_user
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 279,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-row justify-end my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            onClick: () => setShow(!show),
            className: "px-12 mx-3 text-white py-2 text-center w-1/6 font-semibold bg-gray-400 rounded cursor-pointer",
            children: "Batal"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 285,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "submit" //   style={{ background: "#4361ee" }}
            ,
            className: "inline-block py-2 text-gray-50 bg-blue-500 px-4 text-center w-1/6 rounded font-bold cursor-pointer focus:outline-none",
            children: "Simpan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 291,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 151,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (AddPembayaran);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BlbWJheWFyYW4vQWRkUGVtYmF5YXJhbi5qcyJdLCJuYW1lcyI6WyJDYXJkIiwic3R5bGVkIiwiZGl2IiwiQWRkUGVtYmF5YXJhbiIsInNob3ciLCJzZXRTaG93IiwiYWNjZXNzVG9rZW4iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsImFkZFRvYXN0IiwidXNlVG9hc3RzIiwicGVsYW5nZ2FuT3B0aW9uIiwic2V0UGVsYW5nZ2FuT3B0aW9uIiwidXNlU3RhdGUiLCJ0YWdpaGFuT3B0aW9uIiwic2V0VGFnaWhhbk9wdGlvbiIsIm9wdGlvbnNCdWxhbiIsInZhbHVlIiwibGFiZWwiLCJ1c2VFZmZlY3QiLCJmZXRjaFBlbGFuZ2dhbiIsImZldGNoVGFnaWhhbiIsImZvcm1payIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJpZF90YWdpaGFuIiwiaWRfcGVsYW5nZ2FuIiwidGFuZ2dhbF9wZW1iYXlhcmFuIiwiYnVsYW5fYmF5YXIiLCJiaWF5YV9hZG1pbiIsInRvdGFsX2JheWFyIiwiaWRfdXNlciIsIm9uU3VibWl0IiwidmFsdWVzIiwiY3JlYXRlUGVtYmF5YXJhbiIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicmVzcG9uc2UiLCJheGlvc0dlbmVyYWwiLCJnZXQiLCJwYXJhbXMiLCJzdGFydCIsImxpbWl0Iiwic3RhdHVzIiwiZGF0YSIsInBlbGFuZ2dhbkFyciIsInBlbGFuZ2dhbiIsIml0ZXJhdG9yIiwidmFsIiwibmFtYV9wZWxhbmdnYW4iLCJwdXNoIiwiZXJyb3IiLCJlcnJvckhhbmRsZXIiLCJhcHBlYXJhbmNlIiwidGFnaWhhbkFyciIsInRhZ2loYW4iLCJpZF9wZW5nZ3VuYWFuIiwiYnVsYW4iLCJ0YWh1biIsImJvZHkiLCJEYXRlIiwicG9zdCIsImhhbmRsZVN1Ym1pdCIsImZpbmQiLCJ2IiwiZSIsInNldEZpZWxkVmFsdWUiLCJ0YW5nZ2FsX2JheWFyIiwiaGFuZGxlQ2hhbmdl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O0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUpEOztBQUVjRCw0RUFBZixFIiwiZmlsZSI6IjEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgYXhpb3NHZW5lcmFsLCBlcnJvckhhbmRsZXIgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9nbG9iYWxcIjtcclxuaW1wb3J0IHsgdXNlVG9hc3RzIH0gZnJvbSBcInJlYWN0LXRvYXN0LW5vdGlmaWNhdGlvbnNcIjtcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcclxuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTVweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuYDtcclxuXHJcbmZ1bmN0aW9uIEFkZFBlbWJheWFyYW4oeyBzaG93LCBzZXRTaG93IH0pIHtcclxuICBjb25zdCBhY2Nlc3NUb2tlbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWNjZXNzVG9rZW4pO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IHsgYWRkVG9hc3QgfSA9IHVzZVRvYXN0cygpO1xyXG4gIGNvbnN0IFtwZWxhbmdnYW5PcHRpb24sIHNldFBlbGFuZ2dhbk9wdGlvbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3RhZ2loYW5PcHRpb24sIHNldFRhZ2loYW5PcHRpb25dID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBvcHRpb25zQnVsYW4gPSBbXHJcbiAgICB7IHZhbHVlOiAnSmFudWFyeScsIGxhYmVsOiAnSmFudWFyeScgfSxcclxuICAgIHsgdmFsdWU6ICdGZWJydWFyeScsIGxhYmVsOiAnRmVicnVhcnknIH0sXHJcbiAgICB7IHZhbHVlOiAnTWFyY2gnLCBsYWJlbDogJ01hcmNoJyB9LFxyXG4gICAgeyB2YWx1ZTogJ0FwcmlsJywgbGFiZWw6ICdBcHJpbCcgfSxcclxuICAgIHsgdmFsdWU6ICdNYXknLCBsYWJlbDogJ01heScgfSxcclxuICAgIHsgdmFsdWU6ICdKdW5lJywgbGFiZWw6ICdKdW5lJyB9LFxyXG4gICAgeyB2YWx1ZTogJ0p1bHknLCBsYWJlbDogJ0p1bHknIH0sXHJcbiAgICB7IHZhbHVlOiAnQXVndXN0JywgbGFiZWw6ICdBdWd1c3QnIH0sXHJcbiAgICB7IHZhbHVlOiAnU2VwdGVtYmVyJywgbGFiZWw6ICdTZXB0ZW1iZXInIH0sXHJcbiAgICB7IHZhbHVlOiAnT2N0b2JlcicsIGxhYmVsOiAnT2N0b2JlcicgfSxcclxuICAgIHsgdmFsdWU6ICdOb3ZlbWJlcicsIGxhYmVsOiAnTm92ZW1iZXInIH0sXHJcbiAgICB7IHZhbHVlOiAnRGVjZW1iZXInLCBsYWJlbDogJ0RlY2VtYmVyJyB9XHJcbiAgXVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hQZWxhbmdnYW4oKTtcclxuICAgIGZldGNoVGFnaWhhbigpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcclxuICAgIGluaXRpYWxWYWx1ZXM6IHtcclxuICAgICAgaWRfdGFnaWhhbjogMCxcclxuICAgICAgaWRfcGVsYW5nZ2FuOiAwLFxyXG4gICAgICB0YW5nZ2FsX3BlbWJheWFyYW46IFwiXCIsXHJcbiAgICAgIGJ1bGFuX2JheWFyOiBcIlwiLFxyXG4gICAgICBiaWF5YV9hZG1pbjogMCxcclxuICAgICAgdG90YWxfYmF5YXI6IDAsXHJcbiAgICAgIGlkX3VzZXI6IHVzZXIuaWRfdXNlcixcclxuICAgIH0sXHJcbiAgICBvblN1Ym1pdDogKHZhbHVlcykgPT4gY3JlYXRlUGVtYmF5YXJhbih2YWx1ZXMpLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBmZXRjaFBlbGFuZ2dhbiA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYWNjZXNzVG9rZW4sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zR2VuZXJhbC5nZXQoXCIvcmVzb3VyY2VzL3BlbGFuZ2dhblwiLCB7XHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICAgICAgbGltaXQ6IDk5OSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgc2V0UGVsYW5nZ2FuT3B0aW9uKFtdKTtcclxuICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBjb25zdCBwZWxhbmdnYW5BcnIgPSBbXTtcclxuICAgICAgICBjb25zdCBwZWxhbmdnYW4gPSBkYXRhLmRhdGE7XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVyYXRvciBvZiBwZWxhbmdnYW4pIHtcclxuICAgICAgICAgIGxldCB2YWwgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBpdGVyYXRvci5pZF9wZWxhbmdnYW4sXHJcbiAgICAgICAgICAgIGxhYmVsOiBpdGVyYXRvci5uYW1hX3BlbGFuZ2dhbixcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBwZWxhbmdnYW5BcnIucHVzaCh2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRQZWxhbmdnYW5PcHRpb24ocGVsYW5nZ2FuQXJyKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWRkVG9hc3QoZXJyb3JIYW5kbGVyKGVycm9yKSwgeyBhcHBlYXJhbmNlOiBcImVycm9yXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hUYWdpaGFuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBhY2Nlc3NUb2tlbixcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NHZW5lcmFsLmdldChcIi9yZXNvdXJjZXMvdGFnaWhhblwiLCB7XHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICAgICAgbGltaXQ6IDk5OSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgc2V0VGFnaWhhbk9wdGlvbihbXSk7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSByZXNwb25zZTtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgY29uc3QgdGFnaWhhbkFyciA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHRhZ2loYW4gPSBkYXRhLmRhdGE7XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVyYXRvciBvZiB0YWdpaGFuKSB7XHJcbiAgICAgICAgICBsZXQgdmFsID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogaXRlcmF0b3IuaWRfdGFnaWhhbixcclxuICAgICAgICAgICAgbGFiZWw6IGl0ZXJhdG9yLmlkX3BlbmdndW5hYW4gKyBcIiBcIiArIGl0ZXJhdG9yLmJ1bGFuICsgXCIgXCIgKyBpdGVyYXRvci50YWh1bixcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICB0YWdpaGFuQXJyLnB1c2godmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGFnaWhhbk9wdGlvbih0YWdpaGFuQXJyKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWRkVG9hc3QoZXJyb3JIYW5kbGVyKGVycm9yKSwgeyBhcHBlYXJhbmNlOiBcImVycm9yXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY3JlYXRlUGVtYmF5YXJhbiA9IGFzeW5jICh2YWx1ZXMpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYWNjZXNzVG9rZW4sXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgaWRfdGFnaWhhbjogdmFsdWVzLmlkX3RhZ2loYW4sXHJcbiAgICAgICAgaWRfcGVsYW5nZ2FuOiB2YWx1ZXMuaWRfcGVsYW5nZ2FuLFxyXG4gICAgICAgIHRhbmdnYWxfcGVtYmF5YXJhbjogbmV3IERhdGUodmFsdWVzLnRhbmdnYWxfcGVtYmF5YXJhbiksXHJcbiAgICAgICAgYnVsYW5fYmF5YXI6IHZhbHVlcy5idWxhbl9iYXlhcixcclxuICAgICAgICBiaWF5YV9hZG1pbjogdmFsdWVzLmJpYXlhX2FkbWluLFxyXG4gICAgICAgIHRvdGFsX2JheWFyOiB2YWx1ZXMudG90YWxfYmF5YXIsXHJcbiAgICAgICAgaWRfdXNlcjogdXNlci5pZF91c2VyLFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0dlbmVyYWwucG9zdChgL3Jlc291cmNlcy9wZW1iYXlhcmFuYCwgXHJcbiAgICAgIHZhbHVlcywge1xyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gcmVzcG9uc2U7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMSB8fCBzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIHNldFNob3coIXNob3cpO1xyXG4gICAgICB9XHJcbiAgICAgIGFkZFRvYXN0KFwiQmVyaGFzaWwgc2ltcGFuIGRhdGFcIiwgeyBhcHBlYXJhbmNlOiBcInN1Y2Nlc3NcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFkZFRvYXN0KGVycm9ySGFuZGxlcihlcnJvciksIHsgYXBwZWFyYW5jZTogXCJlcnJvclwiIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCBjbGFzc05hbWU9XCJ3LTMvNSBoLTQvNSBibG9jayBteC1hdXRvIHB4LTQgbXktM1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIG14LWF1dG8gcHktNFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0zeGwgdGV4dC1ibGFjayBtYi0xNlwiPlxyXG4gICAgICAgICAgVGFtYmFoIERhdGEgUGVtYmF5YXJhblxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9IG1ldGhvZD1cIlBPU1RcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgbXktNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1zZW1pYm9sZCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgVGFnaWhhblxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaWxpaCB0YWdpaGFuXCJcclxuICAgICAgICAgICAgICBvcHRpb25zPXt0YWdpaGFuT3B0aW9ufVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJpZF90YWdpaGFuXCJcclxuICAgICAgICAgICAgICBpc0NsZWFyYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RhZ2loYW5PcHRpb24uZmluZChcclxuICAgICAgICAgICAgICAgICh2KSA9PiB2LnZhbHVlID09PSBmb3JtaWsudmFsdWVzLmlkX3RhZ2loYW5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gZSA/IGUudmFsdWUgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJpZF90YWdpaGFuXCIsIHZhbCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBteS00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICBQZWxhbmdnYW5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGlsaWggcGVsYW5nZ2FuXCJcclxuICAgICAgICAgICAgICBvcHRpb25zPXtwZWxhbmdnYW5PcHRpb259XHJcbiAgICAgICAgICAgICAgbmFtZT1cImlkX3BlbGFuZ2dhblwiXHJcbiAgICAgICAgICAgICAgaXNDbGVhcmFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwZWxhbmdnYW5PcHRpb24uZmluZChcclxuICAgICAgICAgICAgICAgICh2KSA9PiB2LnZhbHVlID09PSBmb3JtaWsudmFsdWVzLmlkX3BlbGFuZ2dhblxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBlID8gZS52YWx1ZSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZShcImlkX3BlbGFuZ2dhblwiLCB2YWwpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBteS00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICBCdWxhbiBCYXlhclxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaWxpaCBidWxhblwiXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc0J1bGFufVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJidWxhbl9iYXlhclwiXHJcbiAgICAgICAgICAgICAgaXNDbGVhcmFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtvcHRpb25zQnVsYW4uZmluZChcclxuICAgICAgICAgICAgICAgICh2KSA9PiB2LnZhbHVlID09PSBmb3JtaWsudmFsdWVzLmJ1bGFuX2JheWFyXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGUgPyBlLnZhbHVlIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwiYnVsYW5fYmF5YXJcIiwgdmFsKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTRcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgIFRhbmdnYWwgQmF5YXJcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBweC00IGJnLWdyYXktMjAwIHJvdW5kZWQgYmxvY2sgdy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInRhbmdnYWxfYmF5YXJcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaWxpaCBUYW5nZ2FsXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnRhbmdnYWxfYmF5YXJ9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLnRhbmdnYWxfYmF5YXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXJlZC01MDBcIj5cclxuICAgICAgICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMudGFuZ2dhbF9iYXlhcn1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIEJpYXlhIEFkbWluXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTIgcHgtMyBiZy1ncmF5LTEwMCByb3VuZGVkIGJsb2NrIHctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC1iYXNlXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiYmlheWFfYWRtaW5cIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQmlheWEgYWRtaW5cIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5iaWF5YV9hZG1pbn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMuYmlheWFfYWRtaW4gJiYgKFxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yZWQtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy5iaWF5YV9hZG1pbn1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1zZW1pYm9sZCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgVG90YWwgQmF5YXJcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBweC0zIGJnLWdyYXktMTAwIHJvdW5kZWQgYmxvY2sgdy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ0b3RhbF9iYXlhclwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUb3RhbCBCYXlhclwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnRvdGFsX2JheWFyfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy50b3RhbF9iYXlhciAmJiAoXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXJlZC01MDBcIj5cclxuICAgICAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLnRvdGFsX2JheWFyfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICBVc2VyXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTIgcHgtMyBiZy1ncmF5LTEwMCByb3VuZGVkIGJsb2NrIHctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC1iYXNlXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiaWRfdXNlclwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJpZCB1c2VyXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICB2YWx1ZT17dXNlci5pZF91c2VyfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy5pZF91c2VyICYmIChcclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtcmVkLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMuaWRfdXNlcn1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWVuZCBteS00XCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KCFzaG93KX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0xMiBteC0zIHRleHQtd2hpdGUgcHktMiB0ZXh0LWNlbnRlciB3LTEvNiBmb250LXNlbWlib2xkIGJnLWdyYXktNDAwIHJvdW5kZWQgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQmF0YWxcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAvLyAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiIzQzNjFlZVwiIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHB5LTIgdGV4dC1ncmF5LTUwIGJnLWJsdWUtNTAwIHB4LTQgdGV4dC1jZW50ZXIgdy0xLzYgcm91bmRlZCBmb250LWJvbGQgY3Vyc29yLXBvaW50ZXIgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNpbXBhblxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkUGVtYmF5YXJhbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==