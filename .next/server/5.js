exports.ids = [5];
exports.modules = {

/***/ "./components/tagihan/EditTagihan.js":
/*!*******************************************!*\
  !*** ./components/tagihan/EditTagihan.js ***!
  \*******************************************/
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

var _jsxFileName = "C:\\project\\sertifikasi_listrik_frontend\\components\\tagihan\\EditTagihan.js";








const Card = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 5px 15px 4px rgba(0, 0, 0, 0.25);
`;

function EditTagihan({
  show,
  setShow,
  id
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
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    fetchPelanggan();
    fetchPenggunaan();
    fetchTagihanDetail(id);
    ListYear();
  }, []);
  const formik = Object(formik__WEBPACK_IMPORTED_MODULE_7__["useFormik"])({
    initialValues: {
      id_penggunaan: 0,
      id_pelanggan: 0,
      bulan: "",
      tahun: 0,
      jumlah_meter: 0,
      status: ""
    },
    onSubmit: values => updateTagihan(values)
  });

  const updateTagihan = async values => {
    try {
      const headers = {
        Authorization: accessToken
      };
      const response = await _helpers_global__WEBPACK_IMPORTED_MODULE_4__["axiosGeneral"].put(`/resources/tagihan/${id}`, values, {
        headers
      });
      const {
        status
      } = response;

      if (status === 200) {
        addToast("Berhasil ubah tagihan", {
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

  const fetchTagihanDetail = async id => {
    try {
      const headers = {
        Authorization: accessToken
      };
      const response = await _helpers_global__WEBPACK_IMPORTED_MODULE_4__["axiosGeneral"].get(`/resources/tagihan/${id}`, {
        headers
      });
      const {
        status,
        data
      } = response;

      if (status === 200) {
        formik.setFieldValue("id_penggunaan", data.data.id_penggunaan);
        formik.setFieldValue("id_pelanggan", data.data.id_pelanggan);
        formik.setFieldValue("bulan", data.data.bulan);
        formik.setFieldValue("tahun", data.data.tahun);
        formik.setFieldValue("jumlah_meter", data.data.penggunaan_detail.meter_akhir - data.data.penggunaan_detail.meter_akhir);
        formik.setFieldValue("status", data.data.status);
      }
    } catch (error) {
      addToast(Object(_helpers_global__WEBPACK_IMPORTED_MODULE_4__["errorHandler"])(error), {
        appearance: "error"
      });
    }
  };

  const optionsBulan = [{
    value: "January",
    label: "January"
  }, {
    value: "February",
    label: "February"
  }, {
    value: "March",
    label: "March"
  }, {
    value: "April",
    label: "April"
  }, {
    value: "May",
    label: "May"
  }, {
    value: "June",
    label: "June"
  }, {
    value: "July",
    label: "July"
  }, {
    value: "August",
    label: "August"
  }, {
    value: "September",
    label: "September"
  }, {
    value: "October",
    label: "October"
  }, {
    value: "November",
    label: "November"
  }, {
    value: "December",
    label: "December"
  }];
  const optionStatus = [{
    value: 'Sudah Bayar',
    label: 'Sudah Bayar'
  }, {
    value: 'Belum Bayar',
    label: 'Belum Bayar'
  }];

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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
    className: "w-3/5 h-4/5 block mx-auto px-4 my-3",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "block mx-auto py-4",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "font-bold text-3xl text-black mb-20",
        children: "Ubah Data Penggunaan"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: formik.handleSubmit,
        method: "POST",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Pilih Penggunaan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
            placeholder: "Pilih penggunaan",
            options: penggunaanOption,
            name: "id_penggunaan",
            value: penggunaanOption[penggunaanOption.findIndex(x => x.value == formik.values.id_penggunaan)],
            onChange: e => {
              formik.setFieldValue("id_penggunaan", e.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Pilih Pelanggan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
            placeholder: "Pilih pelanggan",
            options: pelangganOption,
            name: "id_pelanggan",
            value: pelangganOption[pelangganOption.findIndex(x => x.value == formik.values.id_pelanggan)],
            onChange: e => {
              formik.setFieldValue("id_pelanggan", e.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Pilih Bulan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
            placeholder: "Pilih pelanggan",
            options: optionsBulan,
            name: "bulan",
            value: optionsBulan[optionsBulan.findIndex(x => x.value == formik.values.bulan)],
            onChange: e => {
              formik.setFieldValue("bulan", e.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Pilih Tahun"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 257,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
            placeholder: "Pilih pelanggan",
            options: listYears,
            name: "tahun",
            value: listYears[listYears.findIndex(x => x.value == formik.values.tahun)],
            onChange: e => {
              formik.setFieldValue("tahun", e.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-4 my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Jumlah Meter"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 277,
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
            lineNumber: 280,
            columnNumber: 13
          }, this), formik.errors.jumlah_meter && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "text-xs text-red-500",
            children: formik.errors.jumlah_meter
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 289,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Pilih Status"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 295,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
            placeholder: "Pilih status",
            options: optionStatus,
            name: "status",
            value: optionStatus[optionStatus.findIndex(x => x.value == formik.values.status)],
            onChange: e => {
              formik.setFieldValue("status", e.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-row justify-end items-center mt-20",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            onClick: () => setShow(!show),
            className: "px-12 text-white py-2 font-semibold bg-gray-400 rounded cursor-pointer",
            children: "Batal"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 315,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "submit",
            className: "px-12 text-white py-2 font-semibold bg-blue-500 rounded cursor-pointer ml-10",
            children: "Simpan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 321,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 190,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (EditTagihan);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhZ2loYW4vRWRpdFRhZ2loYW4uanMiXSwibmFtZXMiOlsiQ2FyZCIsInN0eWxlZCIsImRpdiIsIkVkaXRUYWdpaGFuIiwic2hvdyIsInNldFNob3ciLCJpZCIsImFjY2Vzc1Rva2VuIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImFkZFRvYXN0IiwidXNlVG9hc3RzIiwicGVsYW5nZ2FuT3B0aW9uIiwic2V0UGVsYW5nZ2FuT3B0aW9uIiwidXNlU3RhdGUiLCJwZW5nZ3VuYWFuT3B0aW9uIiwic2V0UGVuZ2d1bmFhbk9wdGlvbiIsImxpc3RZZWFycyIsInNldExpc3RZZWFycyIsInVzZUVmZmVjdCIsImZldGNoUGVsYW5nZ2FuIiwiZmV0Y2hQZW5nZ3VuYWFuIiwiZmV0Y2hUYWdpaGFuRGV0YWlsIiwiTGlzdFllYXIiLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwiaWRfcGVuZ2d1bmFhbiIsImlkX3BlbGFuZ2dhbiIsImJ1bGFuIiwidGFodW4iLCJqdW1sYWhfbWV0ZXIiLCJzdGF0dXMiLCJvblN1Ym1pdCIsInZhbHVlcyIsInVwZGF0ZVRhZ2loYW4iLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwiYXhpb3NHZW5lcmFsIiwicHV0IiwiYXBwZWFyYW5jZSIsImVycm9yIiwiZXJyb3JIYW5kbGVyIiwiZ2V0IiwiZGF0YSIsInNldEZpZWxkVmFsdWUiLCJwZW5nZ3VuYWFuX2RldGFpbCIsIm1ldGVyX2FraGlyIiwib3B0aW9uc0J1bGFuIiwidmFsdWUiLCJsYWJlbCIsIm9wdGlvblN0YXR1cyIsIm1heE9mZnNldCIsInRoaXNZZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiYWxsWWVhcnMiLCJpdGVyYXRvciIsInZhbCIsInB1c2giLCJwYXJhbXMiLCJzdGFydCIsImxpbWl0IiwicGVsYW5nZ2FuQXJyIiwicGVsYW5nZ2FuIiwibmFtYV9wZWxhbmdnYW4iLCJwZW5nZ3VuYWFuQXJyIiwicGVuZ2d1bmFhbiIsImhhbmRsZVN1Ym1pdCIsImZpbmRJbmRleCIsIngiLCJlIiwiaGFuZGxlQ2hhbmdlIiwiZXJyb3JzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLElBQUksR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBSTtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxDQUpBOztBQU1BLFNBQVNDLFdBQVQsQ0FBcUI7QUFBRUMsTUFBRjtBQUFRQyxTQUFSO0FBQWlCQztBQUFqQixDQUFyQixFQUE0QztBQUMxQyxRQUFNQyxXQUFXLEdBQUdDLCtEQUFXLENBQUVDLEtBQUQsSUFBV0EsS0FBSyxDQUFDRixXQUFsQixDQUEvQjtBQUNBLFFBQU07QUFBRUc7QUFBRixNQUFlQywyRUFBUyxFQUE5QjtBQUNBLFFBQU07QUFBQSxPQUFDQyxlQUFEO0FBQUEsT0FBa0JDO0FBQWxCLE1BQXdDQyxzREFBUSxDQUFDLEVBQUQsQ0FBdEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsZ0JBQUQ7QUFBQSxPQUFtQkM7QUFBbkIsTUFBMENGLHNEQUFRLENBQUMsRUFBRCxDQUF4RDtBQUNBLFFBQU07QUFBQSxPQUFDRyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0Qkosc0RBQVEsQ0FBQyxFQUFELENBQTFDO0FBRUFLLHlEQUFTLENBQUMsTUFBTTtBQUNkQyxrQkFBYztBQUNkQyxtQkFBZTtBQUNmQyxzQkFBa0IsQ0FBQ2hCLEVBQUQsQ0FBbEI7QUFDQWlCLFlBQVE7QUFDVCxHQUxRLEVBS04sRUFMTSxDQUFUO0FBT0EsUUFBTUMsTUFBTSxHQUFHQyx3REFBUyxDQUFDO0FBQ3ZCQyxpQkFBYSxFQUFFO0FBQ2JDLG1CQUFhLEVBQUUsQ0FERjtBQUViQyxrQkFBWSxFQUFFLENBRkQ7QUFHYkMsV0FBSyxFQUFFLEVBSE07QUFJYkMsV0FBSyxFQUFFLENBSk07QUFLYkMsa0JBQVksRUFBRSxDQUxEO0FB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QkFBTyxFQUFDLE9BQWY7QUFBdUIscUJBQVMsRUFBQyw2QkFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRSxxRUFBQyxtREFBRDtBQUNFLHVCQUFXLEVBQUMsY0FEZDtBQUVFLG1CQUFPLEVBQUVxQixZQUZYO0FBR0UsZ0JBQUksRUFBQyxRQUhQO0FBSUUsaUJBQUssRUFDSEEsWUFBWSxDQUNWQSxZQUFZLENBQUNrQixTQUFiLENBQ0dDLENBQUQsSUFBT0EsQ0FBQyxDQUFDckIsS0FBRixJQUFXMUIsTUFBTSxDQUFDVSxNQUFQLENBQWNGLE1BRGxDLENBRFUsQ0FMaEI7QUFXRSxvQkFBUSxFQUFHd0MsQ0FBRCxJQUFPO0FBQ2ZoRCxvQkFBTSxDQUFDc0IsYUFBUCxDQUFxQixRQUFyQixFQUErQjBCLENBQUMsQ0FBQ3RCLEtBQWpDO0FBQ0Q7QUFiSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFuR0YsZUF1SEU7QUFBSyxtQkFBUyxFQUFDLDhDQUFmO0FBQUEsa0NBQ0U7QUFDRSxtQkFBTyxFQUFFLE1BQU03QyxPQUFPLENBQUMsQ0FBQ0QsSUFBRixDQUR4QjtBQUVFLHFCQUFTLEVBQUMsd0VBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFPRTtBQUNFLGdCQUFJLEVBQUMsUUFEUDtBQUVFLHFCQUFTLEVBQUMsOEVBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXZIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErSUQ7O0FBRWNELDBFQUFmLEUiLCJmaWxlIjoiNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGF4aW9zR2VuZXJhbCwgZXJyb3JIYW5kbGVyIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvZ2xvYmFsXCI7XHJcbmltcG9ydCB7IHVzZVRvYXN0cyB9IGZyb20gXCJyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zXCI7XHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCI7XHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwcHggNXB4IDE1cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBFZGl0VGFnaWhhbih7IHNob3csIHNldFNob3csIGlkIH0pIHtcclxuICBjb25zdCBhY2Nlc3NUb2tlbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWNjZXNzVG9rZW4pO1xyXG4gIGNvbnN0IHsgYWRkVG9hc3QgfSA9IHVzZVRvYXN0cygpO1xyXG4gIGNvbnN0IFtwZWxhbmdnYW5PcHRpb24sIHNldFBlbGFuZ2dhbk9wdGlvbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3BlbmdndW5hYW5PcHRpb24sIHNldFBlbmdndW5hYW5PcHRpb25dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsaXN0WWVhcnMsIHNldExpc3RZZWFyc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFBlbGFuZ2dhbigpO1xyXG4gICAgZmV0Y2hQZW5nZ3VuYWFuKCk7XHJcbiAgICBmZXRjaFRhZ2loYW5EZXRhaWwoaWQpO1xyXG4gICAgTGlzdFllYXIoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XHJcbiAgICBpbml0aWFsVmFsdWVzOiB7XHJcbiAgICAgIGlkX3BlbmdndW5hYW46IDAsXHJcbiAgICAgIGlkX3BlbGFuZ2dhbjogMCxcclxuICAgICAgYnVsYW46IFwiXCIsXHJcbiAgICAgIHRhaHVuOiAwLFxyXG4gICAgICBqdW1sYWhfbWV0ZXI6IDAsXHJcbiAgICAgIHN0YXR1czogXCJcIixcclxuICAgIH0sXHJcbiAgICBvblN1Ym1pdDogKHZhbHVlcykgPT4gdXBkYXRlVGFnaWhhbih2YWx1ZXMpLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB1cGRhdGVUYWdpaGFuID0gYXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBhY2Nlc3NUb2tlbixcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0dlbmVyYWwucHV0KFxyXG4gICAgICAgIGAvcmVzb3VyY2VzL3RhZ2loYW4vJHtpZH1gLFxyXG4gICAgICAgIHZhbHVlcyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IHJlc3BvbnNlO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBhZGRUb2FzdChcIkJlcmhhc2lsIHViYWggdGFnaWhhblwiLCB7IGFwcGVhcmFuY2U6IFwic3VjY2Vzc1wiIH0pO1xyXG4gICAgICAgIHNldFNob3coIXNob3cpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhZGRUb2FzdChlcnJvckhhbmRsZXIoZXJyb3IpLCB7IGFwcGVhcmFuY2U6IFwiZXJyb3JcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaFRhZ2loYW5EZXRhaWwgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYWNjZXNzVG9rZW4sXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NHZW5lcmFsLmdldChgL3Jlc291cmNlcy90YWdpaGFuLyR7aWR9YCwge1xyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gcmVzcG9uc2U7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwiaWRfcGVuZ2d1bmFhblwiLCBkYXRhLmRhdGEuaWRfcGVuZ2d1bmFhbik7XHJcbiAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJpZF9wZWxhbmdnYW5cIiwgZGF0YS5kYXRhLmlkX3BlbGFuZ2dhbik7XHJcbiAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJidWxhblwiLCBkYXRhLmRhdGEuYnVsYW4pO1xyXG4gICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwidGFodW5cIiwgZGF0YS5kYXRhLnRhaHVuKTtcclxuICAgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZShcImp1bWxhaF9tZXRlclwiLCBkYXRhLmRhdGEucGVuZ2d1bmFhbl9kZXRhaWwubWV0ZXJfYWtoaXIgLSBkYXRhLmRhdGEucGVuZ2d1bmFhbl9kZXRhaWwubWV0ZXJfYWtoaXIpO1xyXG4gICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwic3RhdHVzXCIsIGRhdGEuZGF0YS5zdGF0dXMpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhZGRUb2FzdChlcnJvckhhbmRsZXIoZXJyb3IpLCB7IGFwcGVhcmFuY2U6IFwiZXJyb3JcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvcHRpb25zQnVsYW4gPSBbXHJcbiAgICB7IHZhbHVlOiBcIkphbnVhcnlcIiwgbGFiZWw6IFwiSmFudWFyeVwiIH0sXHJcbiAgICB7IHZhbHVlOiBcIkZlYnJ1YXJ5XCIsIGxhYmVsOiBcIkZlYnJ1YXJ5XCIgfSxcclxuICAgIHsgdmFsdWU6IFwiTWFyY2hcIiwgbGFiZWw6IFwiTWFyY2hcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJBcHJpbFwiLCBsYWJlbDogXCJBcHJpbFwiIH0sXHJcbiAgICB7IHZhbHVlOiBcIk1heVwiLCBsYWJlbDogXCJNYXlcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJKdW5lXCIsIGxhYmVsOiBcIkp1bmVcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJKdWx5XCIsIGxhYmVsOiBcIkp1bHlcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJBdWd1c3RcIiwgbGFiZWw6IFwiQXVndXN0XCIgfSxcclxuICAgIHsgdmFsdWU6IFwiU2VwdGVtYmVyXCIsIGxhYmVsOiBcIlNlcHRlbWJlclwiIH0sXHJcbiAgICB7IHZhbHVlOiBcIk9jdG9iZXJcIiwgbGFiZWw6IFwiT2N0b2JlclwiIH0sXHJcbiAgICB7IHZhbHVlOiBcIk5vdmVtYmVyXCIsIGxhYmVsOiBcIk5vdmVtYmVyXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiRGVjZW1iZXJcIiwgbGFiZWw6IFwiRGVjZW1iZXJcIiB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IG9wdGlvblN0YXR1cyA9IFtcclxuICAgIHsgdmFsdWU6ICdTdWRhaCBCYXlhcicsIGxhYmVsOiAnU3VkYWggQmF5YXInIH0sXHJcbiAgICB7IHZhbHVlOiAnQmVsdW0gQmF5YXInLCBsYWJlbDogJ0JlbHVtIEJheWFyJyB9LFxyXG4gIF1cclxuXHJcblxyXG4gIGNvbnN0IExpc3RZZWFyID0gKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgbWF4T2Zmc2V0ID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldO1xyXG4gICAgICBjb25zdCB0aGlzWWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgY29uc3QgYWxsWWVhcnMgPSBbXTtcclxuICAgICAgZm9yIChjb25zdCBpdGVyYXRvciBvZiBtYXhPZmZzZXQpIHtcclxuICAgICAgICBsZXQgdmFsID0ge1xyXG4gICAgICAgICAgdmFsdWU6IHRoaXNZZWFyIC0gaXRlcmF0b3IsXHJcbiAgICAgICAgICBsYWJlbDogdGhpc1llYXIgLSBpdGVyYXRvcixcclxuICAgICAgICB9O1xyXG4gICAgICAgIGFsbFllYXJzLnB1c2godmFsKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRMaXN0WWVhcnMoYWxsWWVhcnMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWRkVG9hc3QoZXJyb3JIYW5kbGVyKGVycm9yKSwgeyBhcHBlYXJhbmNlOiBcImVycm9yXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hQZWxhbmdnYW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGFjY2Vzc1Rva2VuLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0dlbmVyYWwuZ2V0KFwiL3Jlc291cmNlcy9wZWxhbmdnYW5cIiwge1xyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBzdGFydDogMCxcclxuICAgICAgICAgIGxpbWl0OiA5OTksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIHNldFBlbGFuZ2dhbk9wdGlvbihbXSk7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSByZXNwb25zZTtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgY29uc3QgcGVsYW5nZ2FuQXJyID0gW107XHJcbiAgICAgICAgY29uc3QgcGVsYW5nZ2FuID0gZGF0YS5kYXRhO1xyXG4gICAgICAgIGZvciAoY29uc3QgaXRlcmF0b3Igb2YgcGVsYW5nZ2FuKSB7XHJcbiAgICAgICAgICBsZXQgdmFsID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogaXRlcmF0b3IuaWRfcGVsYW5nZ2FuLFxyXG4gICAgICAgICAgICBsYWJlbDogaXRlcmF0b3IubmFtYV9wZWxhbmdnYW4sXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgcGVsYW5nZ2FuQXJyLnB1c2godmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0UGVsYW5nZ2FuT3B0aW9uKHBlbGFuZ2dhbkFycik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFkZFRvYXN0KGVycm9ySGFuZGxlcihlcnJvciksIHsgYXBwZWFyYW5jZTogXCJlcnJvclwiIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoUGVuZ2d1bmFhbiA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYWNjZXNzVG9rZW4sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zR2VuZXJhbC5nZXQoXCIvcmVzb3VyY2VzL3BlbmdndW5hYW5cIiwge1xyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBzdGFydDogMCxcclxuICAgICAgICAgIGxpbWl0OiA5OTksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIHNldFBlbmdndW5hYW5PcHRpb24oW10pO1xyXG4gICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gcmVzcG9uc2U7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGNvbnN0IHBlbmdndW5hYW5BcnIgPSBbXTtcclxuICAgICAgICBjb25zdCBwZW5nZ3VuYWFuID0gZGF0YS5kYXRhO1xyXG4gICAgICAgIGZvciAoY29uc3QgaXRlcmF0b3Igb2YgcGVuZ2d1bmFhbikge1xyXG4gICAgICAgICAgbGV0IHZhbCA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IGl0ZXJhdG9yLmlkX3BlbmdndW5hYW4sXHJcbiAgICAgICAgICAgIGxhYmVsOiBpdGVyYXRvci5idWxhbiArIFwiIFwiICsgaXRlcmF0b3IudGFodW4sXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgcGVuZ2d1bmFhbkFyci5wdXNoKHZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFBlbmdndW5hYW5PcHRpb24ocGVuZ2d1bmFhbkFycik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFkZFRvYXN0KGVycm9ySGFuZGxlcihlcnJvciksIHsgYXBwZWFyYW5jZTogXCJlcnJvclwiIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCBjbGFzc05hbWU9XCJ3LTMvNSBoLTQvNSBibG9jayBteC1hdXRvIHB4LTQgbXktM1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIG14LWF1dG8gcHktNFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0zeGwgdGV4dC1ibGFjayBtYi0yMFwiPlxyXG4gICAgICAgICAgVWJhaCBEYXRhIFBlbmdndW5hYW5cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fSBtZXRob2Q9XCJQT1NUXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIFBpbGloIFBlbmdndW5hYW5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGlsaWggcGVuZ2d1bmFhblwiXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17cGVuZ2d1bmFhbk9wdGlvbn1cclxuICAgICAgICAgICAgICBuYW1lPVwiaWRfcGVuZ2d1bmFhblwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e1xyXG4gICAgICAgICAgICAgICAgcGVuZ2d1bmFhbk9wdGlvbltcclxuICAgICAgICAgICAgICAgICAgcGVuZ2d1bmFhbk9wdGlvbi5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgICAgICAgICAgKHgpID0+IHgudmFsdWUgPT0gZm9ybWlrLnZhbHVlcy5pZF9wZW5nZ3VuYWFuXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZShcImlkX3BlbmdndW5hYW5cIiwgZS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICBQaWxpaCBQZWxhbmdnYW5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGlsaWggcGVsYW5nZ2FuXCJcclxuICAgICAgICAgICAgICBvcHRpb25zPXtwZWxhbmdnYW5PcHRpb259XHJcbiAgICAgICAgICAgICAgbmFtZT1cImlkX3BlbGFuZ2dhblwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e1xyXG4gICAgICAgICAgICAgICAgcGVsYW5nZ2FuT3B0aW9uW1xyXG4gICAgICAgICAgICAgICAgICBwZWxhbmdnYW5PcHRpb24uZmluZEluZGV4KFxyXG4gICAgICAgICAgICAgICAgICAgICh4KSA9PiB4LnZhbHVlID09IGZvcm1pay52YWx1ZXMuaWRfcGVsYW5nZ2FuXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZShcImlkX3BlbGFuZ2dhblwiLCBlLnZhbHVlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIFBpbGloIEJ1bGFuXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBpbGloIHBlbGFuZ2dhblwiXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc0J1bGFufVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJidWxhblwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uc0J1bGFuW1xyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zQnVsYW4uZmluZEluZGV4KFxyXG4gICAgICAgICAgICAgICAgICAgICh4KSA9PiB4LnZhbHVlID09IGZvcm1pay52YWx1ZXMuYnVsYW5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwiYnVsYW5cIiwgZS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICBQaWxpaCBUYWh1blxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaWxpaCBwZWxhbmdnYW5cIlxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e2xpc3RZZWFyc31cclxuICAgICAgICAgICAgICBuYW1lPVwidGFodW5cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICAgIGxpc3RZZWFyc1tcclxuICAgICAgICAgICAgICAgICAgbGlzdFllYXJzLmZpbmRJbmRleChcclxuICAgICAgICAgICAgICAgICAgICAoeCkgPT4geC52YWx1ZSA9PSBmb3JtaWsudmFsdWVzLnRhaHVuXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZShcInRhaHVuXCIsIGUudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tNCBteS00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICBKdW1sYWggTWV0ZXJcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBweC0zIGJnLWdyYXktMTAwIHJvdW5kZWQgYmxvY2sgdy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJqdW1sYWhfbWV0ZXJcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSnVtbGFoIG1ldGVyXCJcclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5qdW1sYWhfbWV0ZXJ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLmp1bWxhaF9tZXRlciAmJiAoXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXJlZC01MDBcIj5cclxuICAgICAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLmp1bWxhaF9tZXRlcn1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1zZW1pYm9sZCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgUGlsaWggU3RhdHVzXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBpbGloIHN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uU3RhdHVzfVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICAgIG9wdGlvblN0YXR1c1tcclxuICAgICAgICAgICAgICAgICAgb3B0aW9uU3RhdHVzLmZpbmRJbmRleChcclxuICAgICAgICAgICAgICAgICAgICAoeCkgPT4geC52YWx1ZSA9PSBmb3JtaWsudmFsdWVzLnN0YXR1c1xyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJzdGF0dXNcIiwgZS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlciBtdC0yMFwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvdyghc2hvdyl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMTIgdGV4dC13aGl0ZSBweS0yIGZvbnQtc2VtaWJvbGQgYmctZ3JheS00MDAgcm91bmRlZCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBCYXRhbFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTEyIHRleHQtd2hpdGUgcHktMiBmb250LXNlbWlib2xkIGJnLWJsdWUtNTAwIHJvdW5kZWQgY3Vyc29yLXBvaW50ZXIgbWwtMTBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU2ltcGFuXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0VGFnaWhhbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==