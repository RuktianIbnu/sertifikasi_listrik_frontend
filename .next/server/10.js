exports.ids = [10];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhZ2loYW4vQWRkVGFnaWhhbi5qcyJdLCJuYW1lcyI6WyJDYXJkIiwic3R5bGVkIiwiZGl2IiwiQWRkVGFnaWhhbiIsInNob3ciLCJzZXRTaG93IiwiYWNjZXNzVG9rZW4iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYWRkVG9hc3QiLCJ1c2VUb2FzdHMiLCJwZWxhbmdnYW5PcHRpb24iLCJzZXRQZWxhbmdnYW5PcHRpb24iLCJ1c2VTdGF0ZSIsInBlbmdndW5hYW5PcHRpb24iLCJzZXRQZW5nZ3VuYWFuT3B0aW9uIiwibGlzdFllYXJzIiwic2V0TGlzdFllYXJzIiwib3B0aW9uc0J1bGFuIiwidmFsdWUiLCJsYWJlbCIsIm9wdGlvblN0YXR1cyIsInVzZUVmZmVjdCIsImZldGNoUGVsYW5nZ2FuIiwiTGlzdFllYXIiLCJmZXRjaFBlbmdndW5hYW4iLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwiaWRfcGVuZ2d1bmFhbiIsImlkX3BlbGFuZ2dhbiIsImJ1bGFuIiwidGFodW4iLCJqdW1sYWhfbWV0ZXIiLCJzdGF0dXMiLCJvblN1Ym1pdCIsInZhbHVlcyIsImNyZWF0ZVBlbmdndW5hYW4iLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwiYXhpb3NHZW5lcmFsIiwiZ2V0IiwicGFyYW1zIiwic3RhcnQiLCJsaW1pdCIsImRhdGEiLCJwZW5nZ3VuYWFuQXJyIiwicGVuZ2d1bmFhbiIsIml0ZXJhdG9yIiwidmFsIiwicHVzaCIsImVycm9yIiwiZXJyb3JIYW5kbGVyIiwiYXBwZWFyYW5jZSIsInBlbGFuZ2dhbkFyciIsInBlbGFuZ2dhbiIsIm5hbWFfcGVsYW5nZ2FuIiwicG9zdCIsIm1heE9mZnNldCIsInRoaXNZZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiYWxsWWVhcnMiLCJoYW5kbGVTdWJtaXQiLCJmaW5kIiwidiIsImUiLCJzZXRGaWVsZFZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZXJyb3JzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLElBQUksR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBSTtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxDQUpBOztBQU1BLFNBQVNDLFVBQVQsQ0FBb0I7QUFBRUMsTUFBRjtBQUFRQztBQUFSLENBQXBCLEVBQXVDO0FBQ3JDLFFBQU1DLFdBQVcsR0FBR0MsK0RBQVcsQ0FBRUMsS0FBRCxJQUFXQSxLQUFLLENBQUNGLFdBQWxCLENBQS9CO0FBQ0EsUUFBTTtBQUFFRztBQUFGLE1BQWVDLDJFQUFTLEVBQTlCO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLGVBQUQ7QUFBQSxPQUFrQkM7QUFBbEIsTUFBd0NDLHNEQUFRLENBQUMsRUFBRCxDQUF0RDtBQUNBLFFBQU07QUFBQSxPQUFDQyxnQkFBRDtBQUFBLE9BQW1CQztBQUFuQixNQUEwQ0Ysc0RBQVEsQ0FBQyxFQUFELENBQXhEO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCSixzREFBUSxDQUFDLEVBQUQsQ0FBMUM7QUFFQSxRQUFNSyxZQUFZLEdBQUcsQ0FDbkI7QUFBRUMsU0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFNBQUssRUFBRTtBQUEzQixHQURtQixFQUVuQjtBQUFFRCxTQUFLLEVBQUUsVUFBVDtBQUFxQkMsU0FBSyxFQUFFO0FBQTVCLEdBRm1CLEVBR25CO0FBQUVELFNBQUssRUFBRSxPQUFUO0FBQWtCQyxTQUFLLEVBQUU7QUFBekIsR0FIbUIsRUFJbkI7QUFBRUQsU0FBSyxFQUFFLE9BQVQ7QUFBa0JDLFNBQUssRUFBRTtBQUF6QixHQUptQixFQUtuQjtBQUFFRCxTQUFLLEVBQUUsS0FBVDtBQUFnQkMsU0FBSyxFQUFFO0FBQXZCLEdBTG1CLEVBTW5CO0FBQUVELFNBQUssRUFBRSxNQUFUO0FBQWlCQyxTQUFLLEVBQUU7QUFBeEIsR0FObUIsRUFPbkI7QUFBRUQsU0FBSyxFQUFFLE1BQVQ7QUFBaUJDLFNBQUssRUFBRTtBQUF4QixHQVBtQixFQVFuQjtBQUFFRCxTQUFLLEVBQUUsUUFBVDtBQUFtQkMsU0FBSyxFQUFFO0FBQTFCLEdBUm1CLEVBU25CO0FBQUVELFNBQUssRUFBRSxXQUFUO0FBQXNCQyxTQUFLLEVBQUU7QUFBN0IsR0FUbUIsRUFVbkI7QUFBRUQsU0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFNBQUssRUFBRTtBQUEzQixHQVZtQixFQVduQjtBQUFFRCxTQUFLLEVBQUUsVUFBVDtBQUFxQkMsU0FBSyxFQUFFO0FBQTVCLEdBWG1CLEVBWW5CO0FBQUVELFNBQUssRUFBRSxVQUFUO0FBQXFCQyxTQUFLLEVBQUU7QUFBNUIsR0FabUIsQ0FBckI7QUFlQSxRQUFNQyxZQUFZLEdBQUcsQ0FDbkI7QUFBRUYsU0FBSyxFQUFFLGFBQVQ7QUFBd0JDLFNBQUssRUFBRTtBQUEvQixHQURtQixFQUVuQjtBQUFFRCxTQUFLLEVBQUUsYUFBVDtBQUF3QkMsU0FBSyxFQUFFO0FBQS9CLEdBRm1CLENBQXJCO0FBS0FFLHlEQUFTLENBQUMsTUFBTTtBQUNkQyxrQkFBYztBQUNkQyxZQUFRO0FBQ1JDLG1CQUFlO0FBQ2hCLEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQSxRQUFNQyxNQUFNLEdBQUdDLHdEQUFTLENBQUM7QUFDdkJDLGlCQUFhLEVBQUU7QUFDYkMsbUJBQWEsRUFBRSxDQURGO0FBRWJDLGtCQUFZLEVBQUUsQ0FGRDtBQUdiQyxXQUFLLEVBQUUsRUFITTtBQUliQyxXQUFLLEVBQUUsQ0FKTTtBQUtiQyxrQkFBWSxFQUFFLEVBTEQ7QUFNYkMsWUFBTSxFQUFFO0FBTkssS0FEUTtBQVN2QkMsWUFBUSxFQUFHQyxNQUFELElBQVlDLGdCQUFnQixDQUFDRCxNQUFEO0FBVGYsR0FBRCxDQUF4Qjs7QUFZQSxRQUFNWCxlQUFlLEdBQUcsWUFBWTtBQUNsQyxRQUFJO0FBQ0YsWUFBTWEsT0FBTyxHQUFHO0FBQ2RDLHFCQUFhLEVBQUVqQztBQURELE9BQWhCO0FBSUEsWUFBTWtDLFFBQVEsR0FBRyxNQUFNQyw0REFBWSxDQUFDQyxHQUFiLENBQWlCLHVCQUFqQixFQUEwQztBQUMvREosZUFEK0Q7QUFFL0RLLGNBQU0sRUFBRTtBQUNOQyxlQUFLLEVBQUUsQ0FERDtBQUVOQyxlQUFLLEVBQUU7QUFGRDtBQUZ1RCxPQUExQyxDQUF2QjtBQU9BOUIseUJBQW1CLENBQUMsRUFBRCxDQUFuQjtBQUNBLFlBQU07QUFBRW1CLGNBQUY7QUFBVVk7QUFBVixVQUFtQk4sUUFBekI7O0FBQ0EsVUFBSU4sTUFBTSxLQUFLLEdBQWYsRUFBb0I7QUFDbEIsY0FBTWEsYUFBYSxHQUFHLEVBQXRCO0FBQ0EsY0FBTUMsVUFBVSxHQUFHRixJQUFJLENBQUNBLElBQXhCOztBQUNBLGFBQUssTUFBTUcsUUFBWCxJQUF1QkQsVUFBdkIsRUFBbUM7QUFDakMsY0FBSUUsR0FBRyxHQUFHO0FBQ1IvQixpQkFBSyxFQUFFOEIsUUFBUSxDQUFDcEIsYUFEUjtBQUVSVCxpQkFBSyxFQUFFNkIsUUFBUSxDQUFDbEIsS0FBVCxHQUFpQixHQUFqQixHQUF1QmtCLFFBQVEsQ0FBQ2pCO0FBRi9CLFdBQVY7QUFJQWUsdUJBQWEsQ0FBQ0ksSUFBZCxDQUFtQkQsR0FBbkI7QUFDRDs7QUFDRG5DLDJCQUFtQixDQUFDZ0MsYUFBRCxDQUFuQjtBQUNEO0FBQ0YsS0ExQkQsQ0EwQkUsT0FBT0ssS0FBUCxFQUFjO0FBQ2QzQyxjQUFRLENBQUM0QyxvRUFBWSxDQUFDRCxLQUFELENBQWIsRUFBc0I7QUFBRUUsa0JBQVUsRUFBRTtBQUFkLE9BQXRCLENBQVI7QUFDRDtBQUNGLEdBOUJEOztBQWdDQSxRQUFNL0IsY0FBYyxHQUFHLFlBQVk7QUFDakMsUUFBSTtBQUNGLFlBQU1lLE9BQU8sR0FBRztBQUNkQyxxQkFBYSxFQUFFakM7QUFERCxPQUFoQjtBQUlBLFlBQU1rQyxRQUFRLEdBQUcsTUFBTUMsNERBQVksQ0FBQ0MsR0FBYixDQUFpQixzQkFBakIsRUFBeUM7QUFDOURKLGVBRDhEO0FBRTlESyxjQUFNLEVBQUU7QUFDTkMsZUFBSyxFQUFFLENBREQ7QUFFTkMsZUFBSyxFQUFFO0FBRkQ7QUFGc0QsT0FBekMsQ0FBdkI7QUFPQWpDLHdCQUFrQixDQUFDLEVBQUQsQ0FBbEI7QUFDQSxZQUFNO0FBQUVzQixjQUFGO0FBQVVZO0FBQVYsVUFBbUJOLFFBQXpCOztBQUNBLFVBQUlOLE1BQU0sS0FBSyxHQUFmLEVBQW9CO0FBQ2xCLGNBQU1xQixZQUFZLEdBQUcsRUFBckI7QUFDQSxjQUFNQyxTQUFTLEdBQUdWLElBQUksQ0FBQ0EsSUFBdkI7O0FBQ0EsYUFBSyxNQUFNRyxRQUFYLElBQXVCTyxTQUF2QixFQUFrQztBQUNoQyxjQUFJTixHQUFHLEdBQUc7QUFDUi9CLGlCQUFLLEVBQUU4QixRQUFRLENBQUNuQixZQURSO0FBRVJWLGlCQUFLLEVBQUU2QixRQUFRLENBQUNRO0FBRlIsV0FBVjtBQUlBRixzQkFBWSxDQUFDSixJQUFiLENBQWtCRCxHQUFsQjtBQUNEOztBQUNEdEMsMEJBQWtCLENBQUMyQyxZQUFELENBQWxCO0FBQ0Q7QUFDRixLQTFCRCxDQTBCRSxPQUFPSCxLQUFQLEVBQWM7QUFDZDNDLGNBQVEsQ0FBQzRDLG9FQUFZLENBQUNELEtBQUQsQ0FBYixFQUFzQjtBQUFFRSxrQkFBVSxFQUFFO0FBQWQsT0FBdEIsQ0FBUjtBQUNEO0FBQ0YsR0E5QkQ7O0FBZ0NBLFFBQU1qQixnQkFBZ0IsR0FBRyxNQUFPRCxNQUFQLElBQWtCO0FBQ3pDLFFBQUk7QUFDRixZQUFNRSxPQUFPLEdBQUc7QUFDZEMscUJBQWEsRUFBRWpDO0FBREQsT0FBaEI7QUFJQSxZQUFNa0MsUUFBUSxHQUFHLE1BQU1DLDREQUFZLENBQUNpQixJQUFiLENBQW1CLG9CQUFuQixFQUN2QnRCLE1BRHVCLEVBQ2Y7QUFDTkU7QUFETSxPQURlLENBQXZCO0FBSUEsWUFBTTtBQUFFSjtBQUFGLFVBQWFNLFFBQW5COztBQUNBLFVBQUlOLE1BQU0sS0FBSyxHQUFYLElBQWtCQSxNQUFNLEtBQUssR0FBakMsRUFBc0M7QUFDcEM3QixlQUFPLENBQUMsQ0FBQ0QsSUFBRixDQUFQO0FBQ0Q7O0FBQ0RLLGNBQVEsQ0FBQyxzQkFBRCxFQUF5QjtBQUFFNkMsa0JBQVUsRUFBRTtBQUFkLE9BQXpCLENBQVI7QUFDRCxLQWRELENBY0UsT0FBT0YsS0FBUCxFQUFjO0FBQ2QzQyxjQUFRLENBQUM0QyxvRUFBWSxDQUFDRCxLQUFELENBQWIsRUFBc0I7QUFBRUUsa0JBQVUsRUFBRTtBQUFkLE9BQXRCLENBQVI7QUFDRDtBQUNGLEdBbEJEOztBQW9CQSxRQUFNOUIsUUFBUSxHQUFHLE1BQU07QUFDckIsUUFBSTtBQUNGLFlBQU1tQyxTQUFTLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixDQUFsQjtBQUNBLFlBQU1DLFFBQVEsR0FBRyxJQUFJQyxJQUFKLEdBQVdDLFdBQVgsRUFBakI7QUFDQSxZQUFNQyxRQUFRLEdBQUcsRUFBakI7O0FBQ0EsV0FBSyxNQUFNZCxRQUFYLElBQXVCVSxTQUF2QixFQUFrQztBQUNoQyxZQUFJVCxHQUFHLEdBQUc7QUFDUi9CLGVBQUssRUFBRXlDLFFBQVEsR0FBR1gsUUFEVjtBQUVSN0IsZUFBSyxFQUFFd0MsUUFBUSxHQUFHWDtBQUZWLFNBQVY7QUFJQWMsZ0JBQVEsQ0FBQ1osSUFBVCxDQUFjRCxHQUFkO0FBQ0Q7O0FBQ0RqQyxrQkFBWSxDQUFDOEMsUUFBRCxDQUFaO0FBQ0QsS0FaRCxDQVlFLE9BQU9YLEtBQVAsRUFBYztBQUNkM0MsY0FBUSxDQUFDNEMsb0VBQVksQ0FBQ0QsS0FBRCxDQUFiLEVBQXNCO0FBQUVFLGtCQUFVLEVBQUU7QUFBZCxPQUF0QixDQUFSO0FBQ0Q7QUFDRixHQWhCRDs7QUFrQkEsc0JBQ0UscUVBQUMsSUFBRDtBQUFNLGFBQVMsRUFBQyxxQ0FBaEI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxvQkFBZjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBQyxxQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUU7QUFBTSxnQkFBUSxFQUFFNUIsTUFBTSxDQUFDc0MsWUFBdkI7QUFBcUMsY0FBTSxFQUFDLE1BQTVDO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUEsa0NBQ0U7QUFBTyxtQkFBTyxFQUFDLE9BQWY7QUFBdUIscUJBQVMsRUFBQyw2QkFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRSxxRUFBQyxtREFBRDtBQUNFLHVCQUFXLEVBQUMsa0JBRGQ7QUFFRSxtQkFBTyxFQUFFbEQsZ0JBRlg7QUFHRSxnQkFBSSxFQUFDLGVBSFA7QUFJRSx1QkFBVyxFQUFFLElBSmY7QUFLRSx3QkFBWSxFQUFFQSxnQkFBZ0IsQ0FBQ21ELElBQWpCLENBQ1hDLENBQUQsSUFBT0EsQ0FBQyxDQUFDL0MsS0FBRixLQUFZTyxNQUFNLENBQUNVLE1BQVAsQ0FBY1AsYUFEckIsQ0FMaEI7QUFRRSxvQkFBUSxFQUFHc0MsQ0FBRCxJQUFPO0FBQ2Ysb0JBQU1qQixHQUFHLEdBQUdpQixDQUFDLEdBQUdBLENBQUMsQ0FBQ2hELEtBQUwsR0FBYSxJQUExQjtBQUNBTyxvQkFBTSxDQUFDMEMsYUFBUCxDQUFxQixlQUFyQixFQUFzQ2xCLEdBQXRDO0FBQ0Q7QUFYSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQW1CRTtBQUFLLG1CQUFTLEVBQUMsaUJBQWY7QUFBQSxrQ0FDRTtBQUFPLG1CQUFPLEVBQUMsT0FBZjtBQUF1QixxQkFBUyxFQUFDLDZCQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUlFLHFFQUFDLG1EQUFEO0FBQ0UsdUJBQVcsRUFBQyxpQkFEZDtBQUVFLG1CQUFPLEVBQUV2QyxlQUZYO0FBR0UsZ0JBQUksRUFBQyxjQUhQO0FBSUUsdUJBQVcsRUFBRSxJQUpmO0FBS0Usd0JBQVksRUFBRUEsZUFBZSxDQUFDc0QsSUFBaEIsQ0FDWEMsQ0FBRCxJQUFPQSxDQUFDLENBQUMvQyxLQUFGLEtBQVlPLE1BQU0sQ0FBQ1UsTUFBUCxDQUFjTixZQURyQixDQUxoQjtBQVFFLG9CQUFRLEVBQUdxQyxDQUFELElBQU87QUFDZixvQkFBTWpCLEdBQUcsR0FBR2lCLENBQUMsR0FBR0EsQ0FBQyxDQUFDaEQsS0FBTCxHQUFhLElBQTFCO0FBQ0FPLG9CQUFNLENBQUMwQyxhQUFQLENBQXFCLGNBQXJCLEVBQXFDbEIsR0FBckM7QUFDRDtBQVhIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5CRixlQXFDRTtBQUFLLG1CQUFTLEVBQUMsaUJBQWY7QUFBQSxrQ0FDRTtBQUFPLG1CQUFPLEVBQUMsT0FBZjtBQUF1QixxQkFBUyxFQUFDLDZCQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUlFLHFFQUFDLG1EQUFEO0FBQ0UsdUJBQVcsRUFBQyxhQURkO0FBRUUsbUJBQU8sRUFBRWhDLFlBRlg7QUFHRSxnQkFBSSxFQUFDLE9BSFA7QUFJRSx1QkFBVyxFQUFFLElBSmY7QUFLRSx3QkFBWSxFQUFFQSxZQUFZLENBQUMrQyxJQUFiLENBQ1hDLENBQUQsSUFBT0EsQ0FBQyxDQUFDL0MsS0FBRixLQUFZTyxNQUFNLENBQUNVLE1BQVAsQ0FBY0wsS0FEckIsQ0FMaEI7QUFRRSxvQkFBUSxFQUFHb0MsQ0FBRCxJQUFPO0FBQ2Ysb0JBQU1qQixHQUFHLEdBQUdpQixDQUFDLEdBQUdBLENBQUMsQ0FBQ2hELEtBQUwsR0FBYSxJQUExQjtBQUNBTyxvQkFBTSxDQUFDMEMsYUFBUCxDQUFxQixPQUFyQixFQUE4QmxCLEdBQTlCO0FBQ0Q7QUFYSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFyQ0YsZUF1REU7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUEsa0NBQ0U7QUFBTyxtQkFBTyxFQUFDLE9BQWY7QUFBdUIscUJBQVMsRUFBQyw2QkFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRSxxRUFBQyxtREFBRDtBQUNJLHFCQUFTLEVBQUMsUUFEZDtBQUVJLHVCQUFXLEVBQUMsYUFGaEI7QUFHSSxnQkFBSSxFQUFDLE9BSFQ7QUFJSSx1QkFBVyxFQUFFLElBSmpCO0FBS0ksbUJBQU8sRUFBRWxDLFNBTGI7QUFNSSx3QkFBWSxFQUFFRSxZQUFZLENBQUMrQyxJQUFiLENBQ1RDLENBQUQsSUFBT0EsQ0FBQyxDQUFDL0MsS0FBRixLQUFZTyxNQUFNLENBQUNVLE1BQVAsQ0FBY0osS0FEdkIsQ0FObEI7QUFTTSxvQkFBUSxFQUFHbUMsQ0FBRCxJQUFPO0FBQ2Ysb0JBQU1qQixHQUFHLEdBQUdpQixDQUFDLEdBQUdBLENBQUMsQ0FBQ2hELEtBQUwsR0FBYSxJQUExQjtBQUNBTyxvQkFBTSxDQUFDMEMsYUFBUCxDQUFxQixPQUFyQixFQUE4QmxCLEdBQTlCO0FBQ0QsYUFaUCxDQWFJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXZERixlQWdGRTtBQUFLLG1CQUFTLEVBQUMsWUFBZjtBQUFBLGtDQUNFO0FBQU8sbUJBQU8sRUFBQyxPQUFmO0FBQXVCLHFCQUFTLEVBQUMsNkJBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBSUU7QUFDRSxxQkFBUyxFQUFDLHlFQURaO0FBRUUsZ0JBQUksRUFBQyxjQUZQO0FBR0UsdUJBQVcsRUFBQyxjQUhkO0FBSUUsZ0JBQUksRUFBQyxRQUpQO0FBS0UsaUJBQUssRUFBRXhCLE1BQU0sQ0FBQ1UsTUFBUCxDQUFjSCxZQUx2QjtBQU1FLG9CQUFRLEVBQUVQLE1BQU0sQ0FBQzJDO0FBTm5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkYsRUFZRzNDLE1BQU0sQ0FBQzRDLE1BQVAsQ0FBY3JDLFlBQWQsaUJBQ0M7QUFBTSxxQkFBUyxFQUFDLHNCQUFoQjtBQUFBLHNCQUNHUCxNQUFNLENBQUM0QyxNQUFQLENBQWNyQztBQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoRkYsZUFrR0U7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUEsa0NBQ0U7QUFBTyxtQkFBTyxFQUFDLE9BQWY7QUFBdUIscUJBQVMsRUFBQyw2QkFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRSxxRUFBQyxtREFBRDtBQUNFLHVCQUFXLEVBQUMsY0FEZDtBQUVFLG1CQUFPLEVBQUVaLFlBRlg7QUFHRSxnQkFBSSxFQUFDLFFBSFA7QUFJRSx1QkFBVyxFQUFFLElBSmY7QUFLRSx3QkFBWSxFQUFFQSxZQUFZLENBQUM0QyxJQUFiLENBQ1hDLENBQUQsSUFBT0EsQ0FBQyxDQUFDL0MsS0FBRixLQUFZTyxNQUFNLENBQUNVLE1BQVAsQ0FBY0YsTUFEckIsQ0FMaEI7QUFRRSxvQkFBUSxFQUFHaUMsQ0FBRCxJQUFPO0FBQ2Ysb0JBQU1qQixHQUFHLEdBQUdpQixDQUFDLEdBQUdBLENBQUMsQ0FBQ2hELEtBQUwsR0FBYSxJQUExQjtBQUNBTyxvQkFBTSxDQUFDMEMsYUFBUCxDQUFxQixRQUFyQixFQUErQmxCLEdBQS9CO0FBQ0Q7QUFYSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsR0YsZUFvSEU7QUFBSyxtQkFBUyxFQUFDLGdDQUFmO0FBQUEsa0NBQ0U7QUFDRSxtQkFBTyxFQUFFLE1BQU03QyxPQUFPLENBQUMsQ0FBQ0QsSUFBRixDQUR4QjtBQUVFLHFCQUFTLEVBQUMsK0ZBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFPRTtBQUNFLGdCQUFJLEVBQUMsUUFEUCxDQUVFO0FBRkY7QUFHRSxxQkFBUyxFQUFDLHVIQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFwSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNklEOztBQUVjRCx5RUFBZixFIiwiZmlsZSI6IjEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgYXhpb3NHZW5lcmFsLCBlcnJvckhhbmRsZXIgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9nbG9iYWxcIjtcclxuaW1wb3J0IHsgdXNlVG9hc3RzIH0gZnJvbSBcInJlYWN0LXRvYXN0LW5vdGlmaWNhdGlvbnNcIjtcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcclxuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTVweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuYDtcclxuXHJcbmZ1bmN0aW9uIEFkZFRhZ2loYW4oeyBzaG93LCBzZXRTaG93IH0pIHtcclxuICBjb25zdCBhY2Nlc3NUb2tlbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWNjZXNzVG9rZW4pO1xyXG4gIGNvbnN0IHsgYWRkVG9hc3QgfSA9IHVzZVRvYXN0cygpO1xyXG4gIGNvbnN0IFtwZWxhbmdnYW5PcHRpb24sIHNldFBlbGFuZ2dhbk9wdGlvbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3BlbmdndW5hYW5PcHRpb24sIHNldFBlbmdndW5hYW5PcHRpb25dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsaXN0WWVhcnMsIHNldExpc3RZZWFyc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnNCdWxhbiA9IFtcclxuICAgIHsgdmFsdWU6ICdKYW51YXJ5JywgbGFiZWw6ICdKYW51YXJ5JyB9LFxyXG4gICAgeyB2YWx1ZTogJ0ZlYnJ1YXJ5JywgbGFiZWw6ICdGZWJydWFyeScgfSxcclxuICAgIHsgdmFsdWU6ICdNYXJjaCcsIGxhYmVsOiAnTWFyY2gnIH0sXHJcbiAgICB7IHZhbHVlOiAnQXByaWwnLCBsYWJlbDogJ0FwcmlsJyB9LFxyXG4gICAgeyB2YWx1ZTogJ01heScsIGxhYmVsOiAnTWF5JyB9LFxyXG4gICAgeyB2YWx1ZTogJ0p1bmUnLCBsYWJlbDogJ0p1bmUnIH0sXHJcbiAgICB7IHZhbHVlOiAnSnVseScsIGxhYmVsOiAnSnVseScgfSxcclxuICAgIHsgdmFsdWU6ICdBdWd1c3QnLCBsYWJlbDogJ0F1Z3VzdCcgfSxcclxuICAgIHsgdmFsdWU6ICdTZXB0ZW1iZXInLCBsYWJlbDogJ1NlcHRlbWJlcicgfSxcclxuICAgIHsgdmFsdWU6ICdPY3RvYmVyJywgbGFiZWw6ICdPY3RvYmVyJyB9LFxyXG4gICAgeyB2YWx1ZTogJ05vdmVtYmVyJywgbGFiZWw6ICdOb3ZlbWJlcicgfSxcclxuICAgIHsgdmFsdWU6ICdEZWNlbWJlcicsIGxhYmVsOiAnRGVjZW1iZXInIH1cclxuICBdXHJcblxyXG4gIGNvbnN0IG9wdGlvblN0YXR1cyA9IFtcclxuICAgIHsgdmFsdWU6ICdTdWRhaCBCYXlhcicsIGxhYmVsOiAnU3VkYWggQmF5YXInIH0sXHJcbiAgICB7IHZhbHVlOiAnQmVsdW0gQmF5YXInLCBsYWJlbDogJ0JlbHVtIEJheWFyJyB9LFxyXG4gIF1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoUGVsYW5nZ2FuKCk7XHJcbiAgICBMaXN0WWVhcigpO1xyXG4gICAgZmV0Y2hQZW5nZ3VuYWFuKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xyXG4gICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICBpZF9wZW5nZ3VuYWFuOiAwLFxyXG4gICAgICBpZF9wZWxhbmdnYW46IDAsXHJcbiAgICAgIGJ1bGFuOiBcIlwiLFxyXG4gICAgICB0YWh1bjogMCxcclxuICAgICAganVtbGFoX21ldGVyOiBcIlwiLFxyXG4gICAgICBzdGF0dXM6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgb25TdWJtaXQ6ICh2YWx1ZXMpID0+IGNyZWF0ZVBlbmdndW5hYW4odmFsdWVzKSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZmV0Y2hQZW5nZ3VuYWFuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBhY2Nlc3NUb2tlbixcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NHZW5lcmFsLmdldChcIi9yZXNvdXJjZXMvcGVuZ2d1bmFhblwiLCB7XHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICAgICAgbGltaXQ6IDk5OSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgc2V0UGVuZ2d1bmFhbk9wdGlvbihbXSk7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSByZXNwb25zZTtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgY29uc3QgcGVuZ2d1bmFhbkFyciA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHBlbmdndW5hYW4gPSBkYXRhLmRhdGE7XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVyYXRvciBvZiBwZW5nZ3VuYWFuKSB7XHJcbiAgICAgICAgICBsZXQgdmFsID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogaXRlcmF0b3IuaWRfcGVuZ2d1bmFhbixcclxuICAgICAgICAgICAgbGFiZWw6IGl0ZXJhdG9yLmJ1bGFuICsgXCIgXCIgKyBpdGVyYXRvci50YWh1bixcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBwZW5nZ3VuYWFuQXJyLnB1c2godmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0UGVuZ2d1bmFhbk9wdGlvbihwZW5nZ3VuYWFuQXJyKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWRkVG9hc3QoZXJyb3JIYW5kbGVyKGVycm9yKSwgeyBhcHBlYXJhbmNlOiBcImVycm9yXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hQZWxhbmdnYW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGFjY2Vzc1Rva2VuLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0dlbmVyYWwuZ2V0KFwiL3Jlc291cmNlcy9wZWxhbmdnYW5cIiwge1xyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBzdGFydDogMCxcclxuICAgICAgICAgIGxpbWl0OiA5OTksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIHNldFBlbGFuZ2dhbk9wdGlvbihbXSk7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSByZXNwb25zZTtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgY29uc3QgcGVsYW5nZ2FuQXJyID0gW107XHJcbiAgICAgICAgY29uc3QgcGVsYW5nZ2FuID0gZGF0YS5kYXRhO1xyXG4gICAgICAgIGZvciAoY29uc3QgaXRlcmF0b3Igb2YgcGVsYW5nZ2FuKSB7XHJcbiAgICAgICAgICBsZXQgdmFsID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogaXRlcmF0b3IuaWRfcGVsYW5nZ2FuLFxyXG4gICAgICAgICAgICBsYWJlbDogaXRlcmF0b3IubmFtYV9wZWxhbmdnYW4sXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgcGVsYW5nZ2FuQXJyLnB1c2godmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0UGVsYW5nZ2FuT3B0aW9uKHBlbGFuZ2dhbkFycik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFkZFRvYXN0KGVycm9ySGFuZGxlcihlcnJvciksIHsgYXBwZWFyYW5jZTogXCJlcnJvclwiIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNyZWF0ZVBlbmdndW5hYW4gPSBhc3luYyAodmFsdWVzKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGFjY2Vzc1Rva2VuLFxyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0dlbmVyYWwucG9zdChgL3Jlc291cmNlcy90YWdpaGFuYCwgXHJcbiAgICAgIHZhbHVlcywge1xyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gcmVzcG9uc2U7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMSB8fCBzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIHNldFNob3coIXNob3cpO1xyXG4gICAgICB9XHJcbiAgICAgIGFkZFRvYXN0KFwiQmVyaGFzaWwgc2ltcGFuIGRhdGFcIiwgeyBhcHBlYXJhbmNlOiBcInN1Y2Nlc3NcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFkZFRvYXN0KGVycm9ySGFuZGxlcihlcnJvciksIHsgYXBwZWFyYW5jZTogXCJlcnJvclwiIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IExpc3RZZWFyID0gKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgbWF4T2Zmc2V0ID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldO1xyXG4gICAgICBjb25zdCB0aGlzWWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgY29uc3QgYWxsWWVhcnMgPSBbXTtcclxuICAgICAgZm9yIChjb25zdCBpdGVyYXRvciBvZiBtYXhPZmZzZXQpIHtcclxuICAgICAgICBsZXQgdmFsID0ge1xyXG4gICAgICAgICAgdmFsdWU6IHRoaXNZZWFyIC0gaXRlcmF0b3IsXHJcbiAgICAgICAgICBsYWJlbDogdGhpc1llYXIgLSBpdGVyYXRvcixcclxuICAgICAgICB9O1xyXG4gICAgICAgIGFsbFllYXJzLnB1c2godmFsKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRMaXN0WWVhcnMoYWxsWWVhcnMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWRkVG9hc3QoZXJyb3JIYW5kbGVyKGVycm9yKSwgeyBhcHBlYXJhbmNlOiBcImVycm9yXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIGNsYXNzTmFtZT1cInctMy81IGgtNC81IGJsb2NrIG14LWF1dG8gcHgtNCBteS0zXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgbXgtYXV0byBweS00XCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTN4bCB0ZXh0LWJsYWNrIG1iLTE2XCI+XHJcbiAgICAgICAgICBUYW1iYWggRGF0YSBUYWdpaGFuXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH0gbWV0aG9kPVwiUE9TVFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIG15LTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIFBlbmdndW5hYW5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGlsaWggcGVuZ2d1bmFhblwiXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17cGVuZ2d1bmFhbk9wdGlvbn1cclxuICAgICAgICAgICAgICBuYW1lPVwiaWRfcGVuZ2d1bmFhblwiXHJcbiAgICAgICAgICAgICAgaXNDbGVhcmFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwZW5nZ3VuYWFuT3B0aW9uLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAodikgPT4gdi52YWx1ZSA9PT0gZm9ybWlrLnZhbHVlcy5pZF9wZW5nZ3VuYWFuXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGUgPyBlLnZhbHVlIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwiaWRfcGVuZ2d1bmFhblwiLCB2YWwpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBteS00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICBQZWxhbmdnYW5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGlsaWggcGVsYW5nZ2FuXCJcclxuICAgICAgICAgICAgICBvcHRpb25zPXtwZWxhbmdnYW5PcHRpb259XHJcbiAgICAgICAgICAgICAgbmFtZT1cImlkX3BlbGFuZ2dhblwiXHJcbiAgICAgICAgICAgICAgaXNDbGVhcmFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwZWxhbmdnYW5PcHRpb24uZmluZChcclxuICAgICAgICAgICAgICAgICh2KSA9PiB2LnZhbHVlID09PSBmb3JtaWsudmFsdWVzLmlkX3BlbGFuZ2dhblxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBlID8gZS52YWx1ZSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZShcImlkX3BlbGFuZ2dhblwiLCB2YWwpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBteS00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICBCdWxhblxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaWxpaCBidWxhblwiXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc0J1bGFufVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJidWxhblwiXHJcbiAgICAgICAgICAgICAgaXNDbGVhcmFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtvcHRpb25zQnVsYW4uZmluZChcclxuICAgICAgICAgICAgICAgICh2KSA9PiB2LnZhbHVlID09PSBmb3JtaWsudmFsdWVzLmJ1bGFuXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGUgPyBlLnZhbHVlIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwiYnVsYW5cIiwgdmFsKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgbXktNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1zZW1pYm9sZCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgVGFodW5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1hdXRvXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGlsaWggVGFodW5cIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInRhaHVuXCJcclxuICAgICAgICAgICAgICAgIGlzQ2xlYXJhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17bGlzdFllYXJzfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtvcHRpb25zQnVsYW4uZmluZChcclxuICAgICAgICAgICAgICAgICAgICAodikgPT4gdi52YWx1ZSA9PT0gZm9ybWlrLnZhbHVlcy50YWh1blxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBlID8gZS52YWx1ZSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJ0YWh1blwiLCB2YWwpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgIGNvbnN0IHZhbCA9IGUgPyBlLnZhbHVlIDogXCJcIjtcclxuICAgICAgICAgICAgICAgIC8vICAgc2V0WWVhcih2YWwpO1xyXG4gICAgICAgICAgICAgICAgLy8gfX1cclxuICAgICAgICAgICAgICAgIC8vIHZhbHVlPXtsaXN0WWVhcnMuZmluZCgob3ApID0+IG9wLnZhbHVlID09PSB5ZWFyKX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1zZW1pYm9sZCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgSnVtbGFoIE1ldGVyXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTIgcHgtMyBiZy1ncmF5LTEwMCByb3VuZGVkIGJsb2NrIHctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC1iYXNlXCJcclxuICAgICAgICAgICAgICBuYW1lPVwianVtbGFoX21ldGVyXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkp1bWxhaCBtZXRlclwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuanVtbGFoX21ldGVyfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy5qdW1sYWhfbWV0ZXIgJiYgKFxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yZWQtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy5qdW1sYWhfbWV0ZXJ9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgbXktNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1zZW1pYm9sZCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgU3RhdHVzXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBpbGloIHN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uU3RhdHVzfVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgIGlzQ2xlYXJhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17b3B0aW9uU3RhdHVzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAodikgPT4gdi52YWx1ZSA9PT0gZm9ybWlrLnZhbHVlcy5zdGF0dXNcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gZSA/IGUudmFsdWUgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJzdGF0dXNcIiwgdmFsKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1lbmQgbXktNFwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvdyghc2hvdyl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMTIgbXgtMyB0ZXh0LXdoaXRlIHB5LTIgdGV4dC1jZW50ZXIgdy0xLzYgZm9udC1zZW1pYm9sZCBiZy1ncmF5LTQwMCByb3VuZGVkIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEJhdGFsXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgLy8gICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIiM0MzYxZWVcIiB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBweS0yIHRleHQtZ3JheS01MCBiZy1ibHVlLTUwMCBweC00IHRleHQtY2VudGVyIHctMS82IHJvdW5kZWQgZm9udC1ib2xkIGN1cnNvci1wb2ludGVyIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTaW1wYW5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZFRhZ2loYW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=