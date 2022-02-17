exports.ids = [1];
exports.modules = {

/***/ "./components/penggunaan/EditPenggunaan.js":
/*!*************************************************!*\
  !*** ./components/penggunaan/EditPenggunaan.js ***!
  \*************************************************/
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

var _jsxFileName = "C:\\project\\sertifikasi_listrik_frontend\\components\\penggunaan\\EditPenggunaan.js";








const Card = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 5px 15px 4px rgba(0, 0, 0, 0.25);
`;

function EditPenggunaan({
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
    0: listYears,
    1: setListYears
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    fetchPelanggan();
    fetchPenggunaanDetail(id);
    ListYear();
  }, []);
  const formik = Object(formik__WEBPACK_IMPORTED_MODULE_7__["useFormik"])({
    initialValues: {
      id_pelanggan: parseInt(0),
      bulan: "",
      tahun: "",
      meter_awal: "",
      meter_akhir: ""
    },
    onSubmit: values => updatePelanggan(values)
  });

  const updatePelanggan = async values => {
    try {
      const headers = {
        Authorization: accessToken
      };
      const response = await _helpers_global__WEBPACK_IMPORTED_MODULE_4__["axiosGeneral"].put(`/resources/penggunaan/${id}`, values, {
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

  const fetchPenggunaanDetail = async id => {
    try {
      const headers = {
        Authorization: accessToken
      };
      const response = await _helpers_global__WEBPACK_IMPORTED_MODULE_4__["axiosGeneral"].get(`/resources/penggunaan/${id}`, {
        headers
      });
      const {
        status,
        data
      } = response;

      if (status === 200) {
        formik.setFieldValue("id_pelanggan", data.data[0].id_pelanggan);
        formik.setFieldValue("bulan", data.data[0].bulan);
        formik.setFieldValue("tahun", data.data[0].tahun);
        formik.setFieldValue("meter_awal", data.data[0].meter_awal);
        formik.setFieldValue("meter_akhir", data.data[0].meter_akhir);
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
    className: "w-3/5 h-4/5 block mx-auto px-4 my-3",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "block mx-auto py-4",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "font-bold text-3xl text-black mb-20",
        children: "Ubah Data Penggunaan"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: formik.handleSubmit,
        method: "POST",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Pilih Pelanggan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
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
            lineNumber: 158,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Pilih Bulan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
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
            lineNumber: 178,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Pilih Tahun"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
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
            lineNumber: 198,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-4 my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Meter Awal"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
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
            lineNumber: 218,
            columnNumber: 13
          }, this), formik.errors.meter_awal && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "text-xs text-red-500",
            children: formik.errors.meter_awal
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-4 my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Meter Akhir"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 233,
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
            lineNumber: 236,
            columnNumber: 13
          }, this), formik.errors.meter_akhir && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "text-xs text-red-500",
            children: formik.errors.meter_akhir
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 245,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-row justify-end items-center mt-20",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            onClick: () => setShow(!show),
            className: "px-12 text-white py-2 font-semibold bg-gray-400 rounded cursor-pointer",
            children: "Batal"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "submit",
            className: "px-12 text-white py-2 font-semibold bg-blue-500 rounded cursor-pointer ml-10",
            children: "Simpan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 257,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 148,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (EditPenggunaan);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BlbmdndW5hYW4vRWRpdFBlbmdndW5hYW4uanMiXSwibmFtZXMiOlsiQ2FyZCIsInN0eWxlZCIsImRpdiIsIkVkaXRQZW5nZ3VuYWFuIiwic2hvdyIsInNldFNob3ciLCJpZCIsImFjY2Vzc1Rva2VuIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImFkZFRvYXN0IiwidXNlVG9hc3RzIiwicGVsYW5nZ2FuT3B0aW9uIiwic2V0UGVsYW5nZ2FuT3B0aW9uIiwidXNlU3RhdGUiLCJsaXN0WWVhcnMiLCJzZXRMaXN0WWVhcnMiLCJ1c2VFZmZlY3QiLCJmZXRjaFBlbGFuZ2dhbiIsImZldGNoUGVuZ2d1bmFhbkRldGFpbCIsIkxpc3RZZWFyIiwiZm9ybWlrIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsImlkX3BlbGFuZ2dhbiIsInBhcnNlSW50IiwiYnVsYW4iLCJ0YWh1biIsIm1ldGVyX2F3YWwiLCJtZXRlcl9ha2hpciIsIm9uU3VibWl0IiwidmFsdWVzIiwidXBkYXRlUGVsYW5nZ2FuIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXNwb25zZSIsImF4aW9zR2VuZXJhbCIsInB1dCIsInN0YXR1cyIsImFwcGVhcmFuY2UiLCJlcnJvciIsImVycm9ySGFuZGxlciIsImdldCIsImRhdGEiLCJzZXRGaWVsZFZhbHVlIiwib3B0aW9uc0J1bGFuIiwidmFsdWUiLCJsYWJlbCIsIm1heE9mZnNldCIsInRoaXNZZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiYWxsWWVhcnMiLCJpdGVyYXRvciIsInZhbCIsInB1c2giLCJwYXJhbXMiLCJzdGFydCIsImxpbWl0IiwicGVsYW5nZ2FuQXJyIiwicGVsYW5nZ2FuIiwibmFtYV9wZWxhbmdnYW4iLCJoYW5kbGVTdWJtaXQiLCJmaW5kSW5kZXgiLCJ4IiwiZSIsImhhbmRsZUNoYW5nZSIsImVycm9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxJQUFJLEdBQUdDLHdEQUFNLENBQUNDLEdBQUk7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsQ0FKQTs7QUFNQSxTQUFTQyxjQUFULENBQXdCO0FBQUVDLE1BQUY7QUFBUUMsU0FBUjtBQUFpQkM7QUFBakIsQ0FBeEIsRUFBK0M7QUFDN0MsUUFBTUMsV0FBVyxHQUFHQywrREFBVyxDQUFFQyxLQUFELElBQVdBLEtBQUssQ0FBQ0YsV0FBbEIsQ0FBL0I7QUFDQSxRQUFNO0FBQUVHO0FBQUYsTUFBZUMsMkVBQVMsRUFBOUI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsZUFBRDtBQUFBLE9BQWtCQztBQUFsQixNQUF3Q0Msc0RBQVEsQ0FBQyxFQUFELENBQXREO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCRixzREFBUSxDQUFDLEVBQUQsQ0FBMUM7QUFFQUcseURBQVMsQ0FBQyxNQUFNO0FBQ2RDLGtCQUFjO0FBQ2RDLHlCQUFxQixDQUFDYixFQUFELENBQXJCO0FBQ0FjLFlBQVE7QUFDVCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUEsUUFBTUMsTUFBTSxHQUFHQyx3REFBUyxDQUFDO0FBQ3ZCQyxpQkFBYSxFQUFFO0FBQ2JDLGtCQUFZLEVBQUVDLFFBQVEsQ0FBQyxDQUFELENBRFQ7QUFFYkMsV0FBSyxFQUFFLEVBRk07QUFHYkMsV0FBSyxFQUFFLEVBSE07QUFJYkMsZ0JBQVUsRUFBRSxFQUpDO0FBS2JDLGlCQUFXLEVBQUU7QUFMQSxLQURRO0FBUXZCQyxZQUFRLEVBQUdDLE1BQUQsSUFBWUMsZUFBZSxDQUFDRCxNQUFEO0FBUmQsR0FBRCxDQUF4Qjs7QUFXQSxRQUFNQyxlQUFlLEdBQUcsTUFBT0QsTUFBUCxJQUFrQjtBQUN4QyxRQUFJO0FBQ0YsWUFBTUUsT0FBTyxHQUFHO0FBQ2RDLHFCQUFhLEVBQUUzQjtBQURELE9BQWhCO0FBR0EsWUFBTTRCLFFBQVEsR0FBRyxNQUFNQyw0REFBWSxDQUFDQyxHQUFiLENBQ3BCLHlCQUF3Qi9CLEVBQUcsRUFEUCxFQUVyQnlCLE1BRnFCLEVBR3JCO0FBQ0VFO0FBREYsT0FIcUIsQ0FBdkI7QUFPQSxZQUFNO0FBQUVLO0FBQUYsVUFBYUgsUUFBbkI7O0FBQ0EsVUFBSUcsTUFBTSxLQUFLLEdBQWYsRUFBb0I7QUFDbEI1QixnQkFBUSxDQUFDLHlCQUFELEVBQTRCO0FBQUU2QixvQkFBVSxFQUFFO0FBQWQsU0FBNUIsQ0FBUjtBQUNBbEMsZUFBTyxDQUFDLENBQUNELElBQUYsQ0FBUDtBQUNEO0FBQ0YsS0FoQkQsQ0FnQkUsT0FBT29DLEtBQVAsRUFBYztBQUNkOUIsY0FBUSxDQUFDK0Isb0VBQVksQ0FBQ0QsS0FBRCxDQUFiLEVBQXNCO0FBQUVELGtCQUFVLEVBQUU7QUFBZCxPQUF0QixDQUFSO0FBQ0Q7QUFDRixHQXBCRDs7QUFzQkEsUUFBTXBCLHFCQUFxQixHQUFHLE1BQU9iLEVBQVAsSUFBYztBQUMxQyxRQUFJO0FBQ0YsWUFBTTJCLE9BQU8sR0FBRztBQUNkQyxxQkFBYSxFQUFFM0I7QUFERCxPQUFoQjtBQUdBLFlBQU00QixRQUFRLEdBQUcsTUFBTUMsNERBQVksQ0FBQ00sR0FBYixDQUFrQix5QkFBd0JwQyxFQUFHLEVBQTdDLEVBQWdEO0FBQ3JFMkI7QUFEcUUsT0FBaEQsQ0FBdkI7QUFHQSxZQUFNO0FBQUVLLGNBQUY7QUFBVUs7QUFBVixVQUFtQlIsUUFBekI7O0FBQ0EsVUFBSUcsTUFBTSxLQUFLLEdBQWYsRUFBb0I7QUFDbEJqQixjQUFNLENBQUN1QixhQUFQLENBQXFCLGNBQXJCLEVBQXFDRCxJQUFJLENBQUNBLElBQUwsQ0FBVSxDQUFWLEVBQWFuQixZQUFsRDtBQUNBSCxjQUFNLENBQUN1QixhQUFQLENBQXFCLE9BQXJCLEVBQThCRCxJQUFJLENBQUNBLElBQUwsQ0FBVSxDQUFWLEVBQWFqQixLQUEzQztBQUNBTCxjQUFNLENBQUN1QixhQUFQLENBQXFCLE9BQXJCLEVBQThCRCxJQUFJLENBQUNBLElBQUwsQ0FBVSxDQUFWLEVBQWFoQixLQUEzQztBQUNBTixjQUFNLENBQUN1QixhQUFQLENBQXFCLFlBQXJCLEVBQW1DRCxJQUFJLENBQUNBLElBQUwsQ0FBVSxDQUFWLEVBQWFmLFVBQWhEO0FBQ0FQLGNBQU0sQ0FBQ3VCLGFBQVAsQ0FBcUIsYUFBckIsRUFBb0NELElBQUksQ0FBQ0EsSUFBTCxDQUFVLENBQVYsRUFBYWQsV0FBakQ7QUFDRDtBQUNGLEtBZkQsQ0FlRSxPQUFPVyxLQUFQLEVBQWM7QUFDZDlCLGNBQVEsQ0FBQytCLG9FQUFZLENBQUNELEtBQUQsQ0FBYixFQUFzQjtBQUFFRCxrQkFBVSxFQUFFO0FBQWQsT0FBdEIsQ0FBUjtBQUNEO0FBQ0YsR0FuQkQ7O0FBcUJBLFFBQU1NLFlBQVksR0FBRyxDQUNuQjtBQUFFQyxTQUFLLEVBQUUsU0FBVDtBQUFvQkMsU0FBSyxFQUFFO0FBQTNCLEdBRG1CLEVBRW5CO0FBQUVELFNBQUssRUFBRSxVQUFUO0FBQXFCQyxTQUFLLEVBQUU7QUFBNUIsR0FGbUIsRUFHbkI7QUFBRUQsU0FBSyxFQUFFLE9BQVQ7QUFBa0JDLFNBQUssRUFBRTtBQUF6QixHQUhtQixFQUluQjtBQUFFRCxTQUFLLEVBQUUsT0FBVDtBQUFrQkMsU0FBSyxFQUFFO0FBQXpCLEdBSm1CLEVBS25CO0FBQUVELFNBQUssRUFBRSxLQUFUO0FBQWdCQyxTQUFLLEVBQUU7QUFBdkIsR0FMbUIsRUFNbkI7QUFBRUQsU0FBSyxFQUFFLE1BQVQ7QUFBaUJDLFNBQUssRUFBRTtBQUF4QixHQU5tQixFQU9uQjtBQUFFRCxTQUFLLEVBQUUsTUFBVDtBQUFpQkMsU0FBSyxFQUFFO0FBQXhCLEdBUG1CLEVBUW5CO0FBQUVELFNBQUssRUFBRSxRQUFUO0FBQW1CQyxTQUFLLEVBQUU7QUFBMUIsR0FSbUIsRUFTbkI7QUFBRUQsU0FBSyxFQUFFLFdBQVQ7QUFBc0JDLFNBQUssRUFBRTtBQUE3QixHQVRtQixFQVVuQjtBQUFFRCxTQUFLLEVBQUUsU0FBVDtBQUFvQkMsU0FBSyxFQUFFO0FBQTNCLEdBVm1CLEVBV25CO0FBQUVELFNBQUssRUFBRSxVQUFUO0FBQXFCQyxTQUFLLEVBQUU7QUFBNUIsR0FYbUIsRUFZbkI7QUFBRUQsU0FBSyxFQUFFLFVBQVQ7QUFBcUJDLFNBQUssRUFBRTtBQUE1QixHQVptQixDQUFyQjs7QUFlQSxRQUFNM0IsUUFBUSxHQUFHLE1BQU07QUFDckIsUUFBSTtBQUNGLFlBQU00QixTQUFTLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixDQUFsQjtBQUNBLFlBQU1DLFFBQVEsR0FBRyxJQUFJQyxJQUFKLEdBQVdDLFdBQVgsRUFBakI7QUFDQSxZQUFNQyxRQUFRLEdBQUcsRUFBakI7O0FBQ0EsV0FBSyxNQUFNQyxRQUFYLElBQXVCTCxTQUF2QixFQUFrQztBQUNoQyxZQUFJTSxHQUFHLEdBQUc7QUFDUlIsZUFBSyxFQUFFRyxRQUFRLEdBQUdJLFFBRFY7QUFFUk4sZUFBSyxFQUFFRSxRQUFRLEdBQUdJO0FBRlYsU0FBVjtBQUlBRCxnQkFBUSxDQUFDRyxJQUFULENBQWNELEdBQWQ7QUFDRDs7QUFDRHRDLGtCQUFZLENBQUNvQyxRQUFELENBQVo7QUFDRCxLQVpELENBWUUsT0FBT1osS0FBUCxFQUFjO0FBQ2Q5QixjQUFRLENBQUMrQixvRUFBWSxDQUFDRCxLQUFELENBQWIsRUFBc0I7QUFBRUQsa0JBQVUsRUFBRTtBQUFkLE9BQXRCLENBQVI7QUFDRDtBQUNGLEdBaEJEOztBQWtCQSxRQUFNckIsY0FBYyxHQUFHLFlBQVk7QUFDakMsUUFBSTtBQUNGLFlBQU1lLE9BQU8sR0FBRztBQUNkQyxxQkFBYSxFQUFFM0I7QUFERCxPQUFoQjtBQUlBLFlBQU00QixRQUFRLEdBQUcsTUFBTUMsNERBQVksQ0FBQ00sR0FBYixDQUFpQixzQkFBakIsRUFBeUM7QUFDOURULGVBRDhEO0FBRTlEdUIsY0FBTSxFQUFFO0FBQ05DLGVBQUssRUFBRSxDQUREO0FBRU5DLGVBQUssRUFBRTtBQUZEO0FBRnNELE9BQXpDLENBQXZCO0FBT0E3Qyx3QkFBa0IsQ0FBQyxFQUFELENBQWxCO0FBQ0EsWUFBTTtBQUFFeUIsY0FBRjtBQUFVSztBQUFWLFVBQW1CUixRQUF6Qjs7QUFDQSxVQUFJRyxNQUFNLEtBQUssR0FBZixFQUFvQjtBQUNsQixjQUFNcUIsWUFBWSxHQUFHLEVBQXJCO0FBQ0EsY0FBTUMsU0FBUyxHQUFHakIsSUFBSSxDQUFDQSxJQUF2Qjs7QUFDQSxhQUFLLE1BQU1VLFFBQVgsSUFBdUJPLFNBQXZCLEVBQWtDO0FBQ2hDLGNBQUlOLEdBQUcsR0FBRztBQUNSUixpQkFBSyxFQUFFTyxRQUFRLENBQUM3QixZQURSO0FBRVJ1QixpQkFBSyxFQUFFTSxRQUFRLENBQUNRO0FBRlIsV0FBVjtBQUlBRixzQkFBWSxDQUFDSixJQUFiLENBQWtCRCxHQUFsQjtBQUNEOztBQUNEekMsMEJBQWtCLENBQUM4QyxZQUFELENBQWxCO0FBQ0Q7QUFDRixLQTFCRCxDQTBCRSxPQUFPbkIsS0FBUCxFQUFjO0FBQ2Q5QixjQUFRLENBQUMrQixvRUFBWSxDQUFDRCxLQUFELENBQWIsRUFBc0I7QUFBRUQsa0JBQVUsRUFBRTtBQUFkLE9BQXRCLENBQVI7QUFDRDtBQUNGLEdBOUJEOztBQWdDQSxzQkFDRSxxRUFBQyxJQUFEO0FBQU0sYUFBUyxFQUFDLHFDQUFoQjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLG9CQUFmO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLHFDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFNLGdCQUFRLEVBQUVsQixNQUFNLENBQUN5QyxZQUF2QjtBQUFxQyxjQUFNLEVBQUMsTUFBNUM7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsWUFBZjtBQUFBLGtDQUNFO0FBQU8sbUJBQU8sRUFBQyxPQUFmO0FBQXVCLHFCQUFTLEVBQUMsNkJBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBSUUscUVBQUMsbURBQUQ7QUFDRSx1QkFBVyxFQUFDLGlCQURkO0FBRUUsbUJBQU8sRUFBRWxELGVBRlg7QUFHRSxnQkFBSSxFQUFDLGNBSFA7QUFJRSxpQkFBSyxFQUNIQSxlQUFlLENBQ2JBLGVBQWUsQ0FBQ21ELFNBQWhCLENBQ0dDLENBQUQsSUFBT0EsQ0FBQyxDQUFDbEIsS0FBRixJQUFXekIsTUFBTSxDQUFDVSxNQUFQLENBQWNQLFlBRGxDLENBRGEsQ0FMbkI7QUFXRSxvQkFBUSxFQUFHeUMsQ0FBRCxJQUFPO0FBQ2Y1QyxvQkFBTSxDQUFDdUIsYUFBUCxDQUFxQixjQUFyQixFQUFxQ3FCLENBQUMsQ0FBQ25CLEtBQXZDO0FBQ0Q7QUFiSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQXFCRTtBQUFLLG1CQUFTLEVBQUMsWUFBZjtBQUFBLGtDQUNFO0FBQU8sbUJBQU8sRUFBQyxPQUFmO0FBQXVCLHFCQUFTLEVBQUMsNkJBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBSUUscUVBQUMsbURBQUQ7QUFDRSx1QkFBVyxFQUFDLGlCQURkO0FBRUUsbUJBQU8sRUFBRUQsWUFGWDtBQUdFLGdCQUFJLEVBQUMsT0FIUDtBQUlFLGlCQUFLLEVBQ0hBLFlBQVksQ0FDVkEsWUFBWSxDQUFDa0IsU0FBYixDQUNHQyxDQUFELElBQU9BLENBQUMsQ0FBQ2xCLEtBQUYsSUFBV3pCLE1BQU0sQ0FBQ1UsTUFBUCxDQUFjTCxLQURsQyxDQURVLENBTGhCO0FBV0Usb0JBQVEsRUFBR3VDLENBQUQsSUFBTztBQUNmNUMsb0JBQU0sQ0FBQ3VCLGFBQVAsQ0FBcUIsT0FBckIsRUFBOEJxQixDQUFDLENBQUNuQixLQUFoQztBQUNEO0FBYkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckJGLGVBeUNFO0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQUEsa0NBQ0U7QUFBTyxtQkFBTyxFQUFDLE9BQWY7QUFBdUIscUJBQVMsRUFBQyw2QkFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRSxxRUFBQyxtREFBRDtBQUNFLHVCQUFXLEVBQUMsaUJBRGQ7QUFFRSxtQkFBTyxFQUFFL0IsU0FGWDtBQUdFLGdCQUFJLEVBQUMsT0FIUDtBQUlFLGlCQUFLLEVBQ0hBLFNBQVMsQ0FDUEEsU0FBUyxDQUFDZ0QsU0FBVixDQUNHQyxDQUFELElBQU9BLENBQUMsQ0FBQ2xCLEtBQUYsSUFBV3pCLE1BQU0sQ0FBQ1UsTUFBUCxDQUFjSixLQURsQyxDQURPLENBTGI7QUFXRSxvQkFBUSxFQUFHc0MsQ0FBRCxJQUFPO0FBQ2Y1QyxvQkFBTSxDQUFDdUIsYUFBUCxDQUFxQixPQUFyQixFQUE4QnFCLENBQUMsQ0FBQ25CLEtBQWhDO0FBQ0Q7QUFiSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF6Q0YsZUE2REU7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUEsa0NBQ0U7QUFBTyxtQkFBTyxFQUFDLE9BQWY7QUFBdUIscUJBQVMsRUFBQyw2QkFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRTtBQUNFLHFCQUFTLEVBQUMseUVBRFo7QUFFRSxnQkFBSSxFQUFDLFlBRlA7QUFHRSx1QkFBVyxFQUFDLFlBSGQ7QUFJRSxnQkFBSSxFQUFDLFFBSlA7QUFLRSxpQkFBSyxFQUFFekIsTUFBTSxDQUFDVSxNQUFQLENBQWNILFVBTHZCO0FBTUUsb0JBQVEsRUFBRVAsTUFBTSxDQUFDNkM7QUFObkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRixFQVlHN0MsTUFBTSxDQUFDOEMsTUFBUCxDQUFjdkMsVUFBZCxpQkFDQztBQUFNLHFCQUFTLEVBQUMsc0JBQWhCO0FBQUEsc0JBQ0dQLE1BQU0sQ0FBQzhDLE1BQVAsQ0FBY3ZDO0FBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTdERixlQStFRTtBQUFLLG1CQUFTLEVBQUMsaUJBQWY7QUFBQSxrQ0FDRTtBQUFPLG1CQUFPLEVBQUMsT0FBZjtBQUF1QixxQkFBUyxFQUFDLDZCQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUlFO0FBQ0UscUJBQVMsRUFBQyx5RUFEWjtBQUVFLGdCQUFJLEVBQUMsYUFGUDtBQUdFLHVCQUFXLEVBQUMsYUFIZDtBQUlFLGdCQUFJLEVBQUMsUUFKUDtBQUtFLGlCQUFLLEVBQUVQLE1BQU0sQ0FBQ1UsTUFBUCxDQUFjRixXQUx2QjtBQU1FLG9CQUFRLEVBQUVSLE1BQU0sQ0FBQzZDO0FBTm5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkYsRUFZRzdDLE1BQU0sQ0FBQzhDLE1BQVAsQ0FBY3RDLFdBQWQsaUJBQ0M7QUFBTSxxQkFBUyxFQUFDLHNCQUFoQjtBQUFBLHNCQUNHUixNQUFNLENBQUM4QyxNQUFQLENBQWN0QztBQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkEvRUYsZUFpR0U7QUFBSyxtQkFBUyxFQUFDLDhDQUFmO0FBQUEsa0NBQ0U7QUFDRSxtQkFBTyxFQUFFLE1BQU14QixPQUFPLENBQUMsQ0FBQ0QsSUFBRixDQUR4QjtBQUVFLHFCQUFTLEVBQUMsd0VBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFPRTtBQUNFLGdCQUFJLEVBQUMsUUFEUDtBQUVFLHFCQUFTLEVBQUMsOEVBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5SEQ7O0FBRWNELDZFQUFmLEUiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGF4aW9zR2VuZXJhbCwgZXJyb3JIYW5kbGVyIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvZ2xvYmFsXCI7XHJcbmltcG9ydCB7IHVzZVRvYXN0cyB9IGZyb20gXCJyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zXCI7XHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCI7XHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwcHggNXB4IDE1cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBFZGl0UGVuZ2d1bmFhbih7IHNob3csIHNldFNob3csIGlkIH0pIHtcclxuICBjb25zdCBhY2Nlc3NUb2tlbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWNjZXNzVG9rZW4pO1xyXG4gIGNvbnN0IHsgYWRkVG9hc3QgfSA9IHVzZVRvYXN0cygpO1xyXG4gIGNvbnN0IFtwZWxhbmdnYW5PcHRpb24sIHNldFBlbGFuZ2dhbk9wdGlvbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xpc3RZZWFycywgc2V0TGlzdFllYXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoUGVsYW5nZ2FuKCk7XHJcbiAgICBmZXRjaFBlbmdndW5hYW5EZXRhaWwoaWQpO1xyXG4gICAgTGlzdFllYXIoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XHJcbiAgICBpbml0aWFsVmFsdWVzOiB7XHJcbiAgICAgIGlkX3BlbGFuZ2dhbjogcGFyc2VJbnQoMCksXHJcbiAgICAgIGJ1bGFuOiBcIlwiLFxyXG4gICAgICB0YWh1bjogXCJcIixcclxuICAgICAgbWV0ZXJfYXdhbDogXCJcIixcclxuICAgICAgbWV0ZXJfYWtoaXI6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgb25TdWJtaXQ6ICh2YWx1ZXMpID0+IHVwZGF0ZVBlbGFuZ2dhbih2YWx1ZXMpLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB1cGRhdGVQZWxhbmdnYW4gPSBhc3luYyAodmFsdWVzKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGFjY2Vzc1Rva2VuLFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zR2VuZXJhbC5wdXQoXHJcbiAgICAgICAgYC9yZXNvdXJjZXMvcGVuZ2d1bmFhbi8ke2lkfWAsXHJcbiAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gcmVzcG9uc2U7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGFkZFRvYXN0KFwiQmVyaGFzaWwgdWJhaCBwZWxhbmdnYW5cIiwgeyBhcHBlYXJhbmNlOiBcInN1Y2Nlc3NcIiB9KTtcclxuICAgICAgICBzZXRTaG93KCFzaG93KTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWRkVG9hc3QoZXJyb3JIYW5kbGVyKGVycm9yKSwgeyBhcHBlYXJhbmNlOiBcImVycm9yXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hQZW5nZ3VuYWFuRGV0YWlsID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGFjY2Vzc1Rva2VuLFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zR2VuZXJhbC5nZXQoYC9yZXNvdXJjZXMvcGVuZ2d1bmFhbi8ke2lkfWAsIHtcclxuICAgICAgICBoZWFkZXJzLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZShcImlkX3BlbGFuZ2dhblwiLCBkYXRhLmRhdGFbMF0uaWRfcGVsYW5nZ2FuKTtcclxuICAgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZShcImJ1bGFuXCIsIGRhdGEuZGF0YVswXS5idWxhbik7XHJcbiAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJ0YWh1blwiLCBkYXRhLmRhdGFbMF0udGFodW4pO1xyXG4gICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwibWV0ZXJfYXdhbFwiLCBkYXRhLmRhdGFbMF0ubWV0ZXJfYXdhbCk7XHJcbiAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJtZXRlcl9ha2hpclwiLCBkYXRhLmRhdGFbMF0ubWV0ZXJfYWtoaXIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhZGRUb2FzdChlcnJvckhhbmRsZXIoZXJyb3IpLCB7IGFwcGVhcmFuY2U6IFwiZXJyb3JcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvcHRpb25zQnVsYW4gPSBbXHJcbiAgICB7IHZhbHVlOiBcIkphbnVhcnlcIiwgbGFiZWw6IFwiSmFudWFyeVwiIH0sXHJcbiAgICB7IHZhbHVlOiBcIkZlYnJ1YXJ5XCIsIGxhYmVsOiBcIkZlYnJ1YXJ5XCIgfSxcclxuICAgIHsgdmFsdWU6IFwiTWFyY2hcIiwgbGFiZWw6IFwiTWFyY2hcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJBcHJpbFwiLCBsYWJlbDogXCJBcHJpbFwiIH0sXHJcbiAgICB7IHZhbHVlOiBcIk1heVwiLCBsYWJlbDogXCJNYXlcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJKdW5lXCIsIGxhYmVsOiBcIkp1bmVcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJKdWx5XCIsIGxhYmVsOiBcIkp1bHlcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJBdWd1c3RcIiwgbGFiZWw6IFwiQXVndXN0XCIgfSxcclxuICAgIHsgdmFsdWU6IFwiU2VwdGVtYmVyXCIsIGxhYmVsOiBcIlNlcHRlbWJlclwiIH0sXHJcbiAgICB7IHZhbHVlOiBcIk9jdG9iZXJcIiwgbGFiZWw6IFwiT2N0b2JlclwiIH0sXHJcbiAgICB7IHZhbHVlOiBcIk5vdmVtYmVyXCIsIGxhYmVsOiBcIk5vdmVtYmVyXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiRGVjZW1iZXJcIiwgbGFiZWw6IFwiRGVjZW1iZXJcIiB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IExpc3RZZWFyID0gKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgbWF4T2Zmc2V0ID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldO1xyXG4gICAgICBjb25zdCB0aGlzWWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgY29uc3QgYWxsWWVhcnMgPSBbXTtcclxuICAgICAgZm9yIChjb25zdCBpdGVyYXRvciBvZiBtYXhPZmZzZXQpIHtcclxuICAgICAgICBsZXQgdmFsID0ge1xyXG4gICAgICAgICAgdmFsdWU6IHRoaXNZZWFyIC0gaXRlcmF0b3IsXHJcbiAgICAgICAgICBsYWJlbDogdGhpc1llYXIgLSBpdGVyYXRvcixcclxuICAgICAgICB9O1xyXG4gICAgICAgIGFsbFllYXJzLnB1c2godmFsKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRMaXN0WWVhcnMoYWxsWWVhcnMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWRkVG9hc3QoZXJyb3JIYW5kbGVyKGVycm9yKSwgeyBhcHBlYXJhbmNlOiBcImVycm9yXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hQZWxhbmdnYW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGFjY2Vzc1Rva2VuLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0dlbmVyYWwuZ2V0KFwiL3Jlc291cmNlcy9wZWxhbmdnYW5cIiwge1xyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBzdGFydDogMCxcclxuICAgICAgICAgIGxpbWl0OiA5OTksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIHNldFBlbGFuZ2dhbk9wdGlvbihbXSk7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSByZXNwb25zZTtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgY29uc3QgcGVsYW5nZ2FuQXJyID0gW107XHJcbiAgICAgICAgY29uc3QgcGVsYW5nZ2FuID0gZGF0YS5kYXRhO1xyXG4gICAgICAgIGZvciAoY29uc3QgaXRlcmF0b3Igb2YgcGVsYW5nZ2FuKSB7XHJcbiAgICAgICAgICBsZXQgdmFsID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogaXRlcmF0b3IuaWRfcGVsYW5nZ2FuLFxyXG4gICAgICAgICAgICBsYWJlbDogaXRlcmF0b3IubmFtYV9wZWxhbmdnYW4sXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgcGVsYW5nZ2FuQXJyLnB1c2godmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0UGVsYW5nZ2FuT3B0aW9uKHBlbGFuZ2dhbkFycik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFkZFRvYXN0KGVycm9ySGFuZGxlcihlcnJvciksIHsgYXBwZWFyYW5jZTogXCJlcnJvclwiIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCBjbGFzc05hbWU9XCJ3LTMvNSBoLTQvNSBibG9jayBteC1hdXRvIHB4LTQgbXktM1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIG14LWF1dG8gcHktNFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0zeGwgdGV4dC1ibGFjayBtYi0yMFwiPlxyXG4gICAgICAgICAgVWJhaCBEYXRhIFBlbmdndW5hYW5cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fSBtZXRob2Q9XCJQT1NUXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIFBpbGloIFBlbGFuZ2dhblxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaWxpaCBwZWxhbmdnYW5cIlxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3BlbGFuZ2dhbk9wdGlvbn1cclxuICAgICAgICAgICAgICBuYW1lPVwiaWRfcGVsYW5nZ2FuXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICBwZWxhbmdnYW5PcHRpb25bXHJcbiAgICAgICAgICAgICAgICAgIHBlbGFuZ2dhbk9wdGlvbi5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgICAgICAgICAgKHgpID0+IHgudmFsdWUgPT0gZm9ybWlrLnZhbHVlcy5pZF9wZWxhbmdnYW5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwiaWRfcGVsYW5nZ2FuXCIsIGUudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1zZW1pYm9sZCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgUGlsaWggQnVsYW5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGlsaWggcGVsYW5nZ2FuXCJcclxuICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zQnVsYW59XHJcbiAgICAgICAgICAgICAgbmFtZT1cImJ1bGFuXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zQnVsYW5bXHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnNCdWxhbi5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgICAgICAgICAgKHgpID0+IHgudmFsdWUgPT0gZm9ybWlrLnZhbHVlcy5idWxhblxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJidWxhblwiLCBlLnZhbHVlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIFBpbGloIFRhaHVuXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBpbGloIHBlbGFuZ2dhblwiXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17bGlzdFllYXJzfVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ0YWh1blwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e1xyXG4gICAgICAgICAgICAgICAgbGlzdFllYXJzW1xyXG4gICAgICAgICAgICAgICAgICBsaXN0WWVhcnMuZmluZEluZGV4KFxyXG4gICAgICAgICAgICAgICAgICAgICh4KSA9PiB4LnZhbHVlID09IGZvcm1pay52YWx1ZXMudGFodW5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwidGFodW5cIiwgZS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi00IG15LTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIE1ldGVyIEF3YWxcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBweC0zIGJnLWdyYXktMTAwIHJvdW5kZWQgYmxvY2sgdy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJtZXRlcl9hd2FsXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1ldGVyIGF3YWxcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLm1ldGVyX2F3YWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLm1ldGVyX2F3YWwgJiYgKFxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yZWQtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy5tZXRlcl9hd2FsfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi00IG15LTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIE1ldGVyIEFraGlyXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTIgcHgtMyBiZy1ncmF5LTEwMCByb3VuZGVkIGJsb2NrIHctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC1iYXNlXCJcclxuICAgICAgICAgICAgICBuYW1lPVwibWV0ZXJfYWtoaXJcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWV0ZXIgYWtoaXJcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLm1ldGVyX2FraGlyfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy5tZXRlcl9ha2hpciAmJiAoXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXJlZC01MDBcIj5cclxuICAgICAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLm1ldGVyX2FraGlyfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlciBtdC0yMFwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvdyghc2hvdyl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMTIgdGV4dC13aGl0ZSBweS0yIGZvbnQtc2VtaWJvbGQgYmctZ3JheS00MDAgcm91bmRlZCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBCYXRhbFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTEyIHRleHQtd2hpdGUgcHktMiBmb250LXNlbWlib2xkIGJnLWJsdWUtNTAwIHJvdW5kZWQgY3Vyc29yLXBvaW50ZXIgbWwtMTBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU2ltcGFuXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0UGVuZ2d1bmFhbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==