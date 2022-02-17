exports.ids = [2];
exports.modules = {

/***/ "./components/tagihan/AddTagihan.js":
/*!******************************************!*\
  !*** ./components/tagihan/AddTagihan.js ***!
  \******************************************/
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

var _jsxFileName = "C:\\project\\sertifikasi_listrik_frontend\\components\\tagihan\\AddTagihan.js";








const Card = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 5px 15px 4px rgba(0, 0, 0, 0.25);
`;

function AddTagihan({
  show,
  setShow
}) {
  const accessToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.accessToken);
  const {
    addToast
  } = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__["useToasts"])();
  const {
    0: pelangganOption,
    1: setPelangganOption
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const {
    0: penggunaanOption,
    1: setPenggunaanOption
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const {
    0: listYears,
    1: setListYears
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
  const optionStatus = [{
    value: 'Sudah Bayar',
    label: 'Sudah Bayar'
  }, {
    value: 'Belum Bayar',
    label: 'Belum Bayar'
  }];
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    fetchPelanggan();
    ListYear();
    fetchPenggunaan();
  }, []);
  const formik = Object(formik__WEBPACK_IMPORTED_MODULE_7__["useFormik"])({
    initialValues: {
      id_penggunaan: 0,
      id_pelanggan: 0,
      bulan: "",
      tahun: 0,
      jumlah_meter: "",
      status: ""
    },
    onSubmit: values => createPenggunaan(values)
  });

  const fetchPenggunaan = async () => {
    try {
      const headers = {
        Authorization: accessToken
      };
      const response = await _helpers_global__WEBPACK_IMPORTED_MODULE_4__["axiosGeneral"].get("/resources/penggunaan", {
        headers,
        params: {
          start: 0,
          limit: 999
        }
      });
      setPenggunaanOption([]);
      const {
        status,
        data
      } = response;

      if (status === 200) {
        const penggunaanArr = [];
        const penggunaan = data.data;

        for (const iterator of penggunaan) {
          let val = {
            value: iterator.id_penggunaan,
            label: iterator.bulan + " " + iterator.tahun
          };
          penggunaanArr.push(val);
        }

        setPenggunaanOption(penggunaanArr);
      }
    } catch (error) {
      addToast(Object(_helpers_global__WEBPACK_IMPORTED_MODULE_4__["errorHandler"])(error), {
        appearance: "error"
      });
    }
  };

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

  const createPenggunaan = async values => {
    try {
      const headers = {
        Authorization: accessToken
      };
      const response = await _helpers_global__WEBPACK_IMPORTED_MODULE_4__["axiosGeneral"].post(`/resources/tagihan`, values, {
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

  const ListYear = () => {
    try {
      const maxOffset = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      const thisYear = new Date().getFullYear();
      const allYears = [];

      for (const iterator of maxOffset) {
        let val = {
          value: thisYear - iterator,
          label: thisYear - iterator
        };
        allYears.push(val);
      }

      setListYears(allYears);
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
        children: "Tambah Data Tagihan"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: formik.handleSubmit,
        method: "POST",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-2 my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Penggunaan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
            placeholder: "Pilih penggunaan",
            options: penggunaanOption,
            name: "id_penggunaan",
            isClearable: true,
            defaultValue: penggunaanOption.find(v => v.value === formik.values.id_penggunaan),
            onChange: e => {
              const val = e ? e.value : null;
              formik.setFieldValue("id_penggunaan", val);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-2 my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Pelanggan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
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
            lineNumber: 192,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-2 my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Bulan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
            placeholder: "Pilih bulan",
            options: optionsBulan,
            name: "bulan",
            isClearable: true,
            defaultValue: optionsBulan.find(v => v.value === formik.values.bulan),
            onChange: e => {
              const val = e ? e.value : null;
              formik.setFieldValue("bulan", val);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-2 my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Tahun"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
            className: "w-auto",
            placeholder: "Pilih Tahun",
            name: "tahun",
            isClearable: true,
            options: listYears,
            defaultValue: optionsBulan.find(v => v.value === formik.values.tahun),
            onChange: e => {
              const val = e ? e.value : null;
              formik.setFieldValue("tahun", val);
            } // onChange={(e) => {
            //   const val = e ? e.value : "";
            //   setYear(val);
            // }}
            // value={listYears.find((op) => op.value === year)}

          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Jumlah Meter"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base",
            name: "jumlah_meter",
            placeholder: "Jumlah meter",
            type: "number",
            value: formik.values.jumlah_meter,
            onChange: formik.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 13
          }, this), formik.errors.jumlah_meter && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "text-xs text-red-500",
            children: formik.errors.jumlah_meter
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 262,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-2 my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Status"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 268,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
            placeholder: "Pilih status",
            options: optionStatus,
            name: "status",
            isClearable: true,
            defaultValue: optionStatus.find(v => v.value === formik.values.status),
            onChange: e => {
              const val = e ? e.value : null;
              formik.setFieldValue("status", val);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 271,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-row justify-end my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            onClick: () => setShow(!show),
            className: "px-12 mx-3 text-white py-2 text-center w-1/6 font-semibold bg-gray-400 rounded cursor-pointer",
            children: "Batal"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 286,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "submit" //   style={{ background: "#4361ee" }}
            ,
            className: "inline-block py-2 text-gray-50 bg-blue-500 px-4 text-center w-1/6 rounded font-bold cursor-pointer focus:outline-none",
            children: "Simpan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 292,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 164,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (AddTagihan);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhZ2loYW4vQWRkVGFnaWhhbi5qcyJdLCJuYW1lcyI6WyJDYXJkIiwic3R5bGVkIiwiZGl2IiwiQWRkVGFnaWhhbiIsInNob3ciLCJzZXRTaG93IiwiYWNjZXNzVG9rZW4iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYWRkVG9hc3QiLCJ1c2VUb2FzdHMiLCJwZWxhbmdnYW5PcHRpb24iLCJzZXRQZWxhbmdnYW5PcHRpb24iLCJ1c2VTdGF0ZSIsInBlbmdndW5hYW5PcHRpb24iLCJzZXRQZW5nZ3VuYWFuT3B0aW9uIiwibGlzdFllYXJzIiwic2V0TGlzdFllYXJzIiwib3B0aW9uc0J1bGFuIiwidmFsdWUiLCJsYWJlbCIsIm9wdGlvblN0YXR1cyIsInVzZUVmZmVjdCIsImZldGNoUGVsYW5nZ2FuIiwiTGlzdFllYXIiLCJmZXRjaFBlbmdndW5hYW4iLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwiaWRfcGVuZ2d1bmFhbiIsImlkX3BlbGFuZ2dhbiIsImJ1bGFuIiwidGFodW4iLCJqdW1sYWhfbWV0ZXIiLCJzdGF0dXMiLCJvblN1Ym1pdCIsInZhbHVlcyIsImNyZWF0ZVBlbmdndW5hYW4iLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwiYXhpb3NHZW5lcmFsIiwiZ2V0IiwicGFyYW1zIiwic3RhcnQiLCJsaW1pdCIsImRhdGEiLCJwZW5nZ3VuYWFuQXJyIiwicGVuZ2d1bmFhbiIsIml0ZXJhdG9yIiwidmFsIiwicHVzaCIsImVycm9yIiwiZXJyb3JIYW5kbGVyIiwiYXBwZWFyYW5jZSIsInBlbGFuZ2dhbkFyciIsInBlbGFuZ2dhbiIsIm5hbWFfcGVsYW5nZ2FuIiwicG9zdCIsIm1heE9mZnNldCIsInRoaXNZZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiYWxsWWVhcnMiLCJoYW5kbGVTdWJtaXQiLCJmaW5kIiwidiIsImUiLCJzZXRGaWVsZFZhbHVlIiwiaGFuZGxl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LGtCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFwSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNklEOztBQUVjRCx5RUFBZixFIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBheGlvc0dlbmVyYWwsIGVycm9ySGFuZGxlciB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2dsb2JhbFwiO1xyXG5pbXBvcnQgeyB1c2VUb2FzdHMgfSBmcm9tIFwicmVhY3QtdG9hc3Qtbm90aWZpY2F0aW9uc1wiO1xyXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBDYXJkID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxNXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG5gO1xyXG5cclxuZnVuY3Rpb24gQWRkVGFnaWhhbih7IHNob3csIHNldFNob3cgfSkge1xyXG4gIGNvbnN0IGFjY2Vzc1Rva2VuID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hY2Nlc3NUb2tlbik7XHJcbiAgY29uc3QgeyBhZGRUb2FzdCB9ID0gdXNlVG9hc3RzKCk7XHJcbiAgY29uc3QgW3BlbGFuZ2dhbk9wdGlvbiwgc2V0UGVsYW5nZ2FuT3B0aW9uXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcGVuZ2d1bmFhbk9wdGlvbiwgc2V0UGVuZ2d1bmFhbk9wdGlvbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xpc3RZZWFycywgc2V0TGlzdFllYXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3Qgb3B0aW9uc0J1bGFuID0gW1xyXG4gICAgeyB2YWx1ZTogJ0phbnVhcnknLCBsYWJlbDogJ0phbnVhcnknIH0sXHJcbiAgICB7IHZhbHVlOiAnRmVicnVhcnknLCBsYWJlbDogJ0ZlYnJ1YXJ5JyB9LFxyXG4gICAgeyB2YWx1ZTogJ01hcmNoJywgbGFiZWw6ICdNYXJjaCcgfSxcclxuICAgIHsgdmFsdWU6ICdBcHJpbCcsIGxhYmVsOiAnQXByaWwnIH0sXHJcbiAgICB7IHZhbHVlOiAnTWF5JywgbGFiZWw6ICdNYXknIH0sXHJcbiAgICB7IHZhbHVlOiAnSnVuZScsIGxhYmVsOiAnSnVuZScgfSxcclxuICAgIHsgdmFsdWU6ICdKdWx5JywgbGFiZWw6ICdKdWx5JyB9LFxyXG4gICAgeyB2YWx1ZTogJ0F1Z3VzdCcsIGxhYmVsOiAnQXVndXN0JyB9LFxyXG4gICAgeyB2YWx1ZTogJ1NlcHRlbWJlcicsIGxhYmVsOiAnU2VwdGVtYmVyJyB9LFxyXG4gICAgeyB2YWx1ZTogJ09jdG9iZXInLCBsYWJlbDogJ09jdG9iZXInIH0sXHJcbiAgICB7IHZhbHVlOiAnTm92ZW1iZXInLCBsYWJlbDogJ05vdmVtYmVyJyB9LFxyXG4gICAgeyB2YWx1ZTogJ0RlY2VtYmVyJywgbGFiZWw6ICdEZWNlbWJlcicgfVxyXG4gIF1cclxuXHJcbiAgY29uc3Qgb3B0aW9uU3RhdHVzID0gW1xyXG4gICAgeyB2YWx1ZTogJ1N1ZGFoIEJheWFyJywgbGFiZWw6ICdTdWRhaCBCYXlhcicgfSxcclxuICAgIHsgdmFsdWU6ICdCZWx1bSBCYXlhcicsIGxhYmVsOiAnQmVsdW0gQmF5YXInIH0sXHJcbiAgXVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hQZWxhbmdnYW4oKTtcclxuICAgIExpc3RZZWFyKCk7XHJcbiAgICBmZXRjaFBlbmdndW5hYW4oKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XHJcbiAgICBpbml0aWFsVmFsdWVzOiB7XHJcbiAgICAgIGlkX3BlbmdndW5hYW46IDAsXHJcbiAgICAgIGlkX3BlbGFuZ2dhbjogMCxcclxuICAgICAgYnVsYW46IFwiXCIsXHJcbiAgICAgIHRhaHVuOiAwLFxyXG4gICAgICBqdW1sYWhfbWV0ZXI6IFwiXCIsXHJcbiAgICAgIHN0YXR1czogXCJcIixcclxuICAgIH0sXHJcbiAgICBvblN1Ym1pdDogKHZhbHVlcykgPT4gY3JlYXRlUGVuZ2d1bmFhbih2YWx1ZXMpLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBmZXRjaFBlbmdndW5hYW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGFjY2Vzc1Rva2VuLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0dlbmVyYWwuZ2V0KFwiL3Jlc291cmNlcy9wZW5nZ3VuYWFuXCIsIHtcclxuICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgc3RhcnQ6IDAsXHJcbiAgICAgICAgICBsaW1pdDogOTk5LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRQZW5nZ3VuYWFuT3B0aW9uKFtdKTtcclxuICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBjb25zdCBwZW5nZ3VuYWFuQXJyID0gW107XHJcbiAgICAgICAgY29uc3QgcGVuZ2d1bmFhbiA9IGRhdGEuZGF0YTtcclxuICAgICAgICBmb3IgKGNvbnN0IGl0ZXJhdG9yIG9mIHBlbmdndW5hYW4pIHtcclxuICAgICAgICAgIGxldCB2YWwgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBpdGVyYXRvci5pZF9wZW5nZ3VuYWFuLFxyXG4gICAgICAgICAgICBsYWJlbDogaXRlcmF0b3IuYnVsYW4gKyBcIiBcIiArIGl0ZXJhdG9yLnRhaHVuLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHBlbmdndW5hYW5BcnIucHVzaCh2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRQZW5nZ3VuYWFuT3B0aW9uKHBlbmdndW5hYW5BcnIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhZGRUb2FzdChlcnJvckhhbmRsZXIoZXJyb3IpLCB7IGFwcGVhcmFuY2U6IFwiZXJyb3JcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaFBlbGFuZ2dhbiA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYWNjZXNzVG9rZW4sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zR2VuZXJhbC5nZXQoXCIvcmVzb3VyY2VzL3BlbGFuZ2dhblwiLCB7XHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICAgICAgbGltaXQ6IDk5OSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgc2V0UGVsYW5nZ2FuT3B0aW9uKFtdKTtcclxuICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBjb25zdCBwZWxhbmdnYW5BcnIgPSBbXTtcclxuICAgICAgICBjb25zdCBwZWxhbmdnYW4gPSBkYXRhLmRhdGE7XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVyYXRvciBvZiBwZWxhbmdnYW4pIHtcclxuICAgICAgICAgIGxldCB2YWwgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBpdGVyYXRvci5pZF9wZWxhbmdnYW4sXHJcbiAgICAgICAgICAgIGxhYmVsOiBpdGVyYXRvci5uYW1hX3BlbGFuZ2dhbixcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBwZWxhbmdnYW5BcnIucHVzaCh2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRQZWxhbmdnYW5PcHRpb24ocGVsYW5nZ2FuQXJyKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWRkVG9hc3QoZXJyb3JIYW5kbGVyKGVycm9yKSwgeyBhcHBlYXJhbmNlOiBcImVycm9yXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY3JlYXRlUGVuZ2d1bmFhbiA9IGFzeW5jICh2YWx1ZXMpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYWNjZXNzVG9rZW4sXHJcbiAgICAgIH07XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zR2VuZXJhbC5wb3N0KGAvcmVzb3VyY2VzL3RhZ2loYW5gLCBcclxuICAgICAgdmFsdWVzLCB7XHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSByZXNwb25zZTtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxIHx8IHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgc2V0U2hvdyghc2hvdyk7XHJcbiAgICAgIH1cclxuICAgICAgYWRkVG9hc3QoXCJCZXJoYXNpbCBzaW1wYW4gZGF0YVwiLCB7IGFwcGVhcmFuY2U6IFwic3VjY2Vzc1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWRkVG9hc3QoZXJyb3JIYW5kbGVyKGVycm9yKSwgeyBhcHBlYXJhbmNlOiBcImVycm9yXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgTGlzdFllYXIgPSAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBtYXhPZmZzZXQgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV07XHJcbiAgICAgIGNvbnN0IHRoaXNZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICBjb25zdCBhbGxZZWFycyA9IFtdO1xyXG4gICAgICBmb3IgKGNvbnN0IGl0ZXJhdG9yIG9mIG1heE9mZnNldCkge1xyXG4gICAgICAgIGxldCB2YWwgPSB7XHJcbiAgICAgICAgICB2YWx1ZTogdGhpc1llYXIgLSBpdGVyYXRvcixcclxuICAgICAgICAgIGxhYmVsOiB0aGlzWWVhciAtIGl0ZXJhdG9yLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgYWxsWWVhcnMucHVzaCh2YWwpO1xyXG4gICAgICB9XHJcbiAgICAgIHNldExpc3RZZWFycyhhbGxZZWFycyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhZGRUb2FzdChlcnJvckhhbmRsZXIoZXJyb3IpLCB7IGFwcGVhcmFuY2U6IFwiZXJyb3JcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgY2xhc3NOYW1lPVwidy0zLzUgaC00LzUgYmxvY2sgbXgtYXV0byBweC00IG15LTNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBteC1hdXRvIHB5LTRcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtM3hsIHRleHQtYmxhY2sgbWItMTZcIj5cclxuICAgICAgICAgIFRhbWJhaCBEYXRhIFRhZ2loYW5cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fSBtZXRob2Q9XCJQT1NUXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgbXktNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1zZW1pYm9sZCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgUGVuZ2d1bmFhblxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaWxpaCBwZW5nZ3VuYWFuXCJcclxuICAgICAgICAgICAgICBvcHRpb25zPXtwZW5nZ3VuYWFuT3B0aW9ufVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJpZF9wZW5nZ3VuYWFuXCJcclxuICAgICAgICAgICAgICBpc0NsZWFyYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3BlbmdndW5hYW5PcHRpb24uZmluZChcclxuICAgICAgICAgICAgICAgICh2KSA9PiB2LnZhbHVlID09PSBmb3JtaWsudmFsdWVzLmlkX3BlbmdndW5hYW5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gZSA/IGUudmFsdWUgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJpZF9wZW5nZ3VuYWFuXCIsIHZhbCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIG15LTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIFBlbGFuZ2dhblxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaWxpaCBwZWxhbmdnYW5cIlxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3BlbGFuZ2dhbk9wdGlvbn1cclxuICAgICAgICAgICAgICBuYW1lPVwiaWRfcGVsYW5nZ2FuXCJcclxuICAgICAgICAgICAgICBpc0NsZWFyYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3BlbGFuZ2dhbk9wdGlvbi5maW5kKFxyXG4gICAgICAgICAgICAgICAgKHYpID0+IHYudmFsdWUgPT09IGZvcm1pay52YWx1ZXMuaWRfcGVsYW5nZ2FuXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGUgPyBlLnZhbHVlIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwiaWRfcGVsYW5nZ2FuXCIsIHZhbCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIG15LTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIEJ1bGFuXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBpbGloIGJ1bGFuXCJcclxuICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zQnVsYW59XHJcbiAgICAgICAgICAgICAgbmFtZT1cImJ1bGFuXCJcclxuICAgICAgICAgICAgICBpc0NsZWFyYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e29wdGlvbnNCdWxhbi5maW5kKFxyXG4gICAgICAgICAgICAgICAgKHYpID0+IHYudmFsdWUgPT09IGZvcm1pay52YWx1ZXMuYnVsYW5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gZSA/IGUudmFsdWUgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJidWxhblwiLCB2YWwpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBteS00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICBUYWh1blxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaWxpaCBUYWh1blwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwidGFodW5cIlxyXG4gICAgICAgICAgICAgICAgaXNDbGVhcmFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtsaXN0WWVhcnN9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e29wdGlvbnNCdWxhbi5maW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICh2KSA9PiB2LnZhbHVlID09PSBmb3JtaWsudmFsdWVzLnRhaHVuXHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGUgPyBlLnZhbHVlIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZShcInRhaHVuXCIsIHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgY29uc3QgdmFsID0gZSA/IGUudmFsdWUgOiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgLy8gICBzZXRZZWFyKHZhbCk7XHJcbiAgICAgICAgICAgICAgICAvLyB9fVxyXG4gICAgICAgICAgICAgICAgLy8gdmFsdWU9e2xpc3RZZWFycy5maW5kKChvcCkgPT4gb3AudmFsdWUgPT09IHllYXIpfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICBKdW1sYWggTWV0ZXJcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBweC0zIGJnLWdyYXktMTAwIHJvdW5kZWQgYmxvY2sgdy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJqdW1sYWhfbWV0ZXJcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSnVtbGFoIG1ldGVyXCJcclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5qdW1sYWhfbWV0ZXJ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLmp1bWxhaF9tZXRlciAmJiAoXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXJlZC01MDBcIj5cclxuICAgICAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLmp1bWxhaF9tZXRlcn1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBteS00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICBTdGF0dXNcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGlsaWggc3RhdHVzXCJcclxuICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb25TdGF0dXN9XHJcbiAgICAgICAgICAgICAgbmFtZT1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgaXNDbGVhcmFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtvcHRpb25TdGF0dXMuZmluZChcclxuICAgICAgICAgICAgICAgICh2KSA9PiB2LnZhbHVlID09PSBmb3JtaWsudmFsdWVzLnN0YXR1c1xyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBlID8gZS52YWx1ZSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZShcInN0YXR1c1wiLCB2YWwpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWVuZCBteS00XCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KCFzaG93KX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0xMiBteC0zIHRleHQtd2hpdGUgcHktMiB0ZXh0LWNlbnRlciB3LTEvNiBmb250LXNlbWlib2xkIGJnLWdyYXktNDAwIHJvdW5kZWQgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQmF0YWxcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAvLyAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiIzQzNjFlZVwiIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHB5LTIgdGV4dC1ncmF5LTUwIGJnLWJsdWUtNTAwIHB4LTQgdGV4dC1jZW50ZXIgdy0xLzYgcm91bmRlZCBmb250LWJvbGQgY3Vyc29yLXBvaW50ZXIgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNpbXBhblxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkVGFnaWhhbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==