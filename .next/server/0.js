exports.ids = [0];
exports.modules = {

/***/ "./components/penggunaan/AddPenggunaan.js":
/*!************************************************!*\
  !*** ./components/penggunaan/AddPenggunaan.js ***!
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

var _jsxFileName = "C:\\project\\sertifikasi_listrik_frontend\\components\\penggunaan\\AddPenggunaan.js";








const Card = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 5px 15px 4px rgba(0, 0, 0, 0.25);
`;

function AddPenggunaan({
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
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    fetchPelanggan();
    ListYear();
  }, []);
  const formik = Object(formik__WEBPACK_IMPORTED_MODULE_7__["useFormik"])({
    initialValues: {
      id_pelanggan: parseInt(0),
      bulan: "",
      tahun: 0,
      meter_awal: "",
      meter_akhir: ""
    },
    onSubmit: values => createPenggunaan(values)
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

  const createPenggunaan = async values => {
    try {
      const headers = {
        Authorization: accessToken
      };
      const response = await _helpers_global__WEBPACK_IMPORTED_MODULE_4__["axiosGeneral"].post(`/resources/penggunaan`, values, {
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
        children: "Tambah Data Penggunaan"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: formik.handleSubmit,
        method: "POST",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-2 my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Pelanggan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
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
            lineNumber: 134,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-2 my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Bulan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
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
            lineNumber: 152,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-2 my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Tahun"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
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
            lineNumber: 170,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Meter Awal"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base",
            name: "meter_awal",
            placeholder: "Meter awal",
            type: "number",
            value: formik.values.meter_awal,
            onChange: formik.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 13
          }, this), formik.errors.meter_awal && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "text-xs text-red-500",
            children: formik.errors.meter_awal
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Meter Akhir"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base",
            name: "meter_akhir",
            placeholder: "Meter akhir",
            type: "number",
            value: formik.values.meter_akhir,
            onChange: formik.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 13
          }, this), formik.errors.meter_akhir && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "text-xs text-red-500",
            children: formik.errors.meter_akhir
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-row justify-end my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            onClick: () => setShow(!show),
            className: "px-12 mx-3 text-white py-2 text-center w-1/6 font-semibold bg-gray-400 rounded cursor-pointer",
            children: "Batal"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "submit" //   style={{ background: "#4361ee" }}
            ,
            className: "inline-block py-2 text-gray-50 bg-blue-500 px-4 text-center w-1/6 rounded font-bold cursor-pointer focus:outline-none",
            children: "Simpan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 234,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 124,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (AddPenggunaan);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BlbmdndW5hYW4vQWRkUGVuZ2d1bmFhbi5qcyJdLCJuYW1lcyI6WyJDYXJkIiwic3R5bGVkIiwiZGl2IiwiQWRkUGVuZ2d1bmFhbiIsInNob3ciLCJzZXRTaG93IiwiYWNjZXNzVG9rZW4iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYWRkVG9hc3QiLCJ1c2VUb2FzdHMiLCJwZWxhbmdnYW5PcHRpb24iLCJzZXRQZWxhbmdnYW5PcHRpb24iLCJ1c2VTdGF0ZSIsImxpc3RZZWFycyIsInNldExpc3RZZWFycyIsIm9wdGlvbnNCdWxhbiIsInZhbHVlIiwibGFiZWwiLCJ1c2VFZmZlY3QiLCJmZXRjaFBlbGFuZ2dhbiIsIkxpc3RZZWFyIiwiZm9ybWlrIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsImlkX3BlbGFuZ2dhbiIsInBhcnNlSW50IiwiYnVsYW4iLCJ0YWh1biIsIm1ldGVyX2F3YWwiLCJtZXRlcl9ha2hpciIsIm9uU3VibWl0IiwidmFsdWVzIiwiY3JlYXRlUGVuZ2d1bmFhbiIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicmVzcG9uc2UiLCJheGlvc0dlbmVyYWwiLCJnZXQiLCJwYXJhbXMiLCJzdGFydCIsImxpbWl0Iiwic3RhdHVzIiwiZGF0YSIsInBlbGFuZ2dhbkFyciIsInBlbGFuZ2dhbiIsIml0ZXJhdG9yIiwidmFsIiwibmFtYV9wZWxhbmdnYW4iLCJwdXNoIiwiZXJyb3IiLCJlcnJvckhhbmRsZXIiLCJhcHBlYXJhbmNlIiwicG9zdCIsIm1heE9mZnNldCIsInRoaXNZZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiYWxsWWVhcnMiLCJoYW5kbGVTdWJtaXQiLCJmaW5kIiwidiIsImUiLCJzZXRGaWVsZFZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZXJyb3JzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0FFRTtBQUZGO0FBR0UscUJBQVMsRUFBQyx1SEFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbEdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJIRDs7QUFFY0QsNEVBQWYsRSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgYXhpb3NHZW5lcmFsLCBlcnJvckhhbmRsZXIgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9nbG9iYWxcIjtcclxuaW1wb3J0IHsgdXNlVG9hc3RzIH0gZnJvbSBcInJlYWN0LXRvYXN0LW5vdGlmaWNhdGlvbnNcIjtcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcclxuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTVweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuYDtcclxuXHJcbmZ1bmN0aW9uIEFkZFBlbmdndW5hYW4oeyBzaG93LCBzZXRTaG93IH0pIHtcclxuICBjb25zdCBhY2Nlc3NUb2tlbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWNjZXNzVG9rZW4pO1xyXG4gIGNvbnN0IHsgYWRkVG9hc3QgfSA9IHVzZVRvYXN0cygpO1xyXG4gIGNvbnN0IFtwZWxhbmdnYW5PcHRpb24sIHNldFBlbGFuZ2dhbk9wdGlvbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xpc3RZZWFycywgc2V0TGlzdFllYXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3Qgb3B0aW9uc0J1bGFuID0gW1xyXG4gICAgeyB2YWx1ZTogJ0phbnVhcnknLCBsYWJlbDogJ0phbnVhcnknIH0sXHJcbiAgICB7IHZhbHVlOiAnRmVicnVhcnknLCBsYWJlbDogJ0ZlYnJ1YXJ5JyB9LFxyXG4gICAgeyB2YWx1ZTogJ01hcmNoJywgbGFiZWw6ICdNYXJjaCcgfSxcclxuICAgIHsgdmFsdWU6ICdBcHJpbCcsIGxhYmVsOiAnQXByaWwnIH0sXHJcbiAgICB7IHZhbHVlOiAnTWF5JywgbGFiZWw6ICdNYXknIH0sXHJcbiAgICB7IHZhbHVlOiAnSnVuZScsIGxhYmVsOiAnSnVuZScgfSxcclxuICAgIHsgdmFsdWU6ICdKdWx5JywgbGFiZWw6ICdKdWx5JyB9LFxyXG4gICAgeyB2YWx1ZTogJ0F1Z3VzdCcsIGxhYmVsOiAnQXVndXN0JyB9LFxyXG4gICAgeyB2YWx1ZTogJ1NlcHRlbWJlcicsIGxhYmVsOiAnU2VwdGVtYmVyJyB9LFxyXG4gICAgeyB2YWx1ZTogJ09jdG9iZXInLCBsYWJlbDogJ09jdG9iZXInIH0sXHJcbiAgICB7IHZhbHVlOiAnTm92ZW1iZXInLCBsYWJlbDogJ05vdmVtYmVyJyB9LFxyXG4gICAgeyB2YWx1ZTogJ0RlY2VtYmVyJywgbGFiZWw6ICdEZWNlbWJlcicgfVxyXG4gIF1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoUGVsYW5nZ2FuKCk7XHJcbiAgICBMaXN0WWVhcigpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcclxuICAgIGluaXRpYWxWYWx1ZXM6IHtcclxuICAgICAgaWRfcGVsYW5nZ2FuOiBwYXJzZUludCgwKSxcclxuICAgICAgYnVsYW46IFwiXCIsXHJcbiAgICAgIHRhaHVuOiAwLFxyXG4gICAgICBtZXRlcl9hd2FsOiBcIlwiLFxyXG4gICAgICBtZXRlcl9ha2hpcjogXCJcIixcclxuICAgIH0sXHJcbiAgICBvblN1Ym1pdDogKHZhbHVlcykgPT4gY3JlYXRlUGVuZ2d1bmFhbih2YWx1ZXMpLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBmZXRjaFBlbGFuZ2dhbiA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYWNjZXNzVG9rZW4sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zR2VuZXJhbC5nZXQoXCIvcmVzb3VyY2VzL3BlbGFuZ2dhblwiLCB7XHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICAgICAgbGltaXQ6IDk5OSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgc2V0UGVsYW5nZ2FuT3B0aW9uKFtdKTtcclxuICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBjb25zdCBwZWxhbmdnYW5BcnIgPSBbXTtcclxuICAgICAgICBjb25zdCBwZWxhbmdnYW4gPSBkYXRhLmRhdGE7XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVyYXRvciBvZiBwZWxhbmdnYW4pIHtcclxuICAgICAgICAgIGxldCB2YWwgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBpdGVyYXRvci5pZF9wZWxhbmdnYW4sXHJcbiAgICAgICAgICAgIGxhYmVsOiBpdGVyYXRvci5uYW1hX3BlbGFuZ2dhbixcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBwZWxhbmdnYW5BcnIucHVzaCh2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRQZWxhbmdnYW5PcHRpb24ocGVsYW5nZ2FuQXJyKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWRkVG9hc3QoZXJyb3JIYW5kbGVyKGVycm9yKSwgeyBhcHBlYXJhbmNlOiBcImVycm9yXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY3JlYXRlUGVuZ2d1bmFhbiA9IGFzeW5jICh2YWx1ZXMpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYWNjZXNzVG9rZW4sXHJcbiAgICAgIH07XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zR2VuZXJhbC5wb3N0KGAvcmVzb3VyY2VzL3BlbmdndW5hYW5gLCBcclxuICAgICAgdmFsdWVzLCB7XHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSByZXNwb25zZTtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxIHx8IHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgc2V0U2hvdyghc2hvdyk7XHJcbiAgICAgIH1cclxuICAgICAgYWRkVG9hc3QoXCJCZXJoYXNpbCBzaW1wYW4gZGF0YVwiLCB7IGFwcGVhcmFuY2U6IFwic3VjY2Vzc1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWRkVG9hc3QoZXJyb3JIYW5kbGVyKGVycm9yKSwgeyBhcHBlYXJhbmNlOiBcImVycm9yXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgTGlzdFllYXIgPSAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBtYXhPZmZzZXQgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV07XHJcbiAgICAgIGNvbnN0IHRoaXNZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICBjb25zdCBhbGxZZWFycyA9IFtdO1xyXG4gICAgICBmb3IgKGNvbnN0IGl0ZXJhdG9yIG9mIG1heE9mZnNldCkge1xyXG4gICAgICAgIGxldCB2YWwgPSB7XHJcbiAgICAgICAgICB2YWx1ZTogdGhpc1llYXIgLSBpdGVyYXRvcixcclxuICAgICAgICAgIGxhYmVsOiB0aGlzWWVhciAtIGl0ZXJhdG9yLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgYWxsWWVhcnMucHVzaCh2YWwpO1xyXG4gICAgICB9XHJcbiAgICAgIHNldExpc3RZZWFycyhhbGxZZWFycyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhZGRUb2FzdChlcnJvckhhbmRsZXIoZXJyb3IpLCB7IGFwcGVhcmFuY2U6IFwiZXJyb3JcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgY2xhc3NOYW1lPVwidy0zLzUgaC00LzUgYmxvY2sgbXgtYXV0byBweC00IG15LTNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBteC1hdXRvIHB5LTRcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtM3hsIHRleHQtYmxhY2sgbWItMTZcIj5cclxuICAgICAgICAgIFRhbWJhaCBEYXRhIFBlbmdndW5hYW5cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fSBtZXRob2Q9XCJQT1NUXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIG15LTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIFBlbGFuZ2dhblxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaWxpaCBwZWxhbmdnYW5cIlxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3BlbGFuZ2dhbk9wdGlvbn1cclxuICAgICAgICAgICAgICBuYW1lPVwiaWRfcGVsYW5nZ2FuXCJcclxuICAgICAgICAgICAgICBpc0NsZWFyYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3BlbGFuZ2dhbk9wdGlvbi5maW5kKFxyXG4gICAgICAgICAgICAgICAgKHYpID0+IHYudmFsdWUgPT09IGZvcm1pay52YWx1ZXMuaWRfcGVsYW5nZ2FuXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGUgPyBlLnZhbHVlIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwiaWRfcGVsYW5nZ2FuXCIsIHZhbCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIG15LTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIEJ1bGFuXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBpbGloIGJ1bGFuXCJcclxuICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zQnVsYW59XHJcbiAgICAgICAgICAgICAgbmFtZT1cImJ1bGFuXCJcclxuICAgICAgICAgICAgICBpc0NsZWFyYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e29wdGlvbnNCdWxhbi5maW5kKFxyXG4gICAgICAgICAgICAgICAgKHYpID0+IHYudmFsdWUgPT09IGZvcm1pay52YWx1ZXMuYnVsYW5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gZSA/IGUudmFsdWUgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJidWxhblwiLCB2YWwpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBteS00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICBUYWh1blxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaWxpaCBUYWh1blwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwidGFodW5cIlxyXG4gICAgICAgICAgICAgICAgaXNDbGVhcmFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtsaXN0WWVhcnN9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e29wdGlvbnNCdWxhbi5maW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICh2KSA9PiB2LnZhbHVlID09PSBmb3JtaWsudmFsdWVzLnRhaHVuXHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGUgPyBlLnZhbHVlIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZShcInRhaHVuXCIsIHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgY29uc3QgdmFsID0gZSA/IGUudmFsdWUgOiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgLy8gICBzZXRZZWFyKHZhbCk7XHJcbiAgICAgICAgICAgICAgICAvLyB9fVxyXG4gICAgICAgICAgICAgICAgLy8gdmFsdWU9e2xpc3RZZWFycy5maW5kKChvcCkgPT4gb3AudmFsdWUgPT09IHllYXIpfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICBNZXRlciBBd2FsXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTIgcHgtMyBiZy1ncmF5LTEwMCByb3VuZGVkIGJsb2NrIHctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC1iYXNlXCJcclxuICAgICAgICAgICAgICBuYW1lPVwibWV0ZXJfYXdhbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXRlciBhd2FsXCJcclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5tZXRlcl9hd2FsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy5tZXRlcl9hd2FsICYmIChcclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtcmVkLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMubWV0ZXJfYXdhbH1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1zZW1pYm9sZCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgTWV0ZXIgQWtoaXJcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBweC0zIGJnLWdyYXktMTAwIHJvdW5kZWQgYmxvY2sgdy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJtZXRlcl9ha2hpclwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXRlciBha2hpclwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMubWV0ZXJfYWtoaXJ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLm1ldGVyX2FraGlyICYmIChcclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtcmVkLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMubWV0ZXJfYWtoaXJ9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1lbmQgbXktNFwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvdyghc2hvdyl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMTIgbXgtMyB0ZXh0LXdoaXRlIHB5LTIgdGV4dC1jZW50ZXIgdy0xLzYgZm9udC1zZW1pYm9sZCBiZy1ncmF5LTQwMCByb3VuZGVkIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEJhdGFsXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgLy8gICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIiM0MzYxZWVcIiB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBweS0yIHRleHQtZ3JheS01MCBiZy1ibHVlLTUwMCBweC00IHRleHQtY2VudGVyIHctMS82IHJvdW5kZWQgZm9udC1ib2xkIGN1cnNvci1wb2ludGVyIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTaW1wYW5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZFBlbmdndW5hYW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=