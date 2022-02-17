exports.ids = [3];
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
        formik.setFieldValue("id_penggunaan", data.data[0].id_penggunaan);
        formik.setFieldValue("id_pelanggan", data.data[0].id_pelanggan);
        formik.setFieldValue("bulan", data.data[0].bulan);
        formik.setFieldValue("tahun", data.data[0].tahun);
        formik.setFieldValue("jumlah_meter", data.data[0].jumlah_meter);
        formik.setFieldValue("status", data.data[0].status);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhZ2loYW4vRWRpdFRhZ2loYW4uanMiXSwibmFtZXMiOlsiQ2FyZCIsInN0eWxlZCIsImRpdiIsIkVkaXRUYWdpaGFuIiwic2hvdyIsInNldFNob3ciLCJpZCIsImFjY2Vzc1Rva2VuIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImFkZFRvYXN0IiwidXNlVG9hc3RzIiwicGVsYW5nZ2FuT3B0aW9uIiwic2V0UGVsYW5nZ2FuT3B0aW9uIiwidXNlU3RhdGUiLCJwZW5nZ3VuYWFuT3B0aW9uIiwic2V0UGVuZ2d1bmFhbk9wdGlvbiIsImxpc3RZZWFycyIsInNldExpc3RZZWFycyIsInVzZUVmZmVjdCIsImZldGNoUGVsYW5nZ2FuIiwiZmV0Y2hQZW5nZ3VuYWFuIiwiZmV0Y2hUYWdpaGFuRGV0YWlsIiwiTGlzdFllYXIiLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwiaWRfcGVuZ2d1bmFhbiIsImlkX3BlbGFuZ2dhbiIsImJ1bGFuIiwidGFodW4iLCJqdW1sYWhfbWV0ZXIiLCJzdGF0dXMiLCJvblN1Ym1pdCIsInZhbHVlcyIsInVwZGF0ZVRhZ2loYW4iLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwiYXhpb3NHZW5lcmFsIiwicHV0IiwiYXBwZWFyYW5jZSIsImVycm9yIiwiZXJyb3JIYW5kbGVyIiwiZ2V0IiwiZGF0YSIsInNldEZpZWxkVmFsdWUiLCJvcHRpb25zQnVsYW4iLCJ2YWx1ZSIsImxhYmVsIiwib3B0aW9uU3RhdHVzIiwibWF4T2Zmc2V0IiwidGhpc1llYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJhbGxZZWFycyIsIml0ZXJhdG9yIiwidmFsIiwicHVzaCIsInBhcmFtcyIsInN0YXJ0IiwibGltaXQiLCJwZWxhbmdnYW5BcnIiLCJwZWxhbmdnYW4iLCJuYW1hX3BlbGFuZ2dhbiIsInBlbmdndW5hYW5BcnIiLCJwZW5nZ3VuYWFuIiwiaGFuZGxlU3VibWl0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akM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRSxxRUFBQyxtREFBRDtBQUNFLHVCQUFXLEVBQUMsY0FEZDtBQUVFLG1CQUFPLEVBQUVtQixZQUZYO0FBR0UsZ0JBQUksRUFBQyxRQUhQO0FBSUUsaUJBQUssRUFDSEEsWUFBWSxDQUNWQSxZQUFZLENBQUNrQixTQUFiLENBQ0dDLENBQUQsSUFBT0EsQ0FBQyxDQUFDckIsS0FBRixJQUFXeEIsTUFBTSxDQUFDVSxNQUFQLENBQWNGLE1BRGxDLENBRFUsQ0FMaEI7QUFXRSxvQkFBUSxFQUFHc0MsQ0FBRCxJQUFPO0FBQ2Y5QyxvQkFBTSxDQUFDc0IsYUFBUCxDQUFxQixRQUFyQixFQUErQndCLENBQUMsQ0FBQ3RCLEtBQWpDO0FBQ0Q7QUFiSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFuR0YsZUF1SEU7QUFBSyxtQkFBUyxFQUFDLDhDQUFmO0FBQUEsa0NBQ0U7QUFDRSxtQkFBTyxFQUFFLE1BQU0zQyxPQUFPLENBQUMsQ0FBQ0QsSUFBRixDQUR4QjtBQUVFLHFCQUFTLEVBQUMsd0VBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFPRTtBQUNFLGdCQUFJLEVBQUMsUUFEUDtBQUVFLHFCQUFTLEVBQUMsOEVBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXZIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErSUQ7O0FBRWNELDBFQUFmLEUiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGF4aW9zR2VuZXJhbCwgZXJyb3JIYW5kbGVyIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvZ2xvYmFsXCI7XHJcbmltcG9ydCB7IHVzZVRvYXN0cyB9IGZyb20gXCJyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zXCI7XHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCI7XHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwcHggNXB4IDE1cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBFZGl0VGFnaWhhbih7IHNob3csIHNldFNob3csIGlkIH0pIHtcclxuICBjb25zdCBhY2Nlc3NUb2tlbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWNjZXNzVG9rZW4pO1xyXG4gIGNvbnN0IHsgYWRkVG9hc3QgfSA9IHVzZVRvYXN0cygpO1xyXG4gIGNvbnN0IFtwZWxhbmdnYW5PcHRpb24sIHNldFBlbGFuZ2dhbk9wdGlvbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3BlbmdndW5hYW5PcHRpb24sIHNldFBlbmdndW5hYW5PcHRpb25dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsaXN0WWVhcnMsIHNldExpc3RZZWFyc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFBlbGFuZ2dhbigpO1xyXG4gICAgZmV0Y2hQZW5nZ3VuYWFuKCk7XHJcbiAgICBmZXRjaFRhZ2loYW5EZXRhaWwoaWQpO1xyXG4gICAgTGlzdFllYXIoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XHJcbiAgICBpbml0aWFsVmFsdWVzOiB7XHJcbiAgICAgIGlkX3BlbmdndW5hYW46IDAsXHJcbiAgICAgIGlkX3BlbGFuZ2dhbjogMCxcclxuICAgICAgYnVsYW46IFwiXCIsXHJcbiAgICAgIHRhaHVuOiAwLFxyXG4gICAgICBqdW1sYWhfbWV0ZXI6IDAsXHJcbiAgICAgIHN0YXR1czogXCJcIixcclxuICAgIH0sXHJcbiAgICBvblN1Ym1pdDogKHZhbHVlcykgPT4gdXBkYXRlVGFnaWhhbih2YWx1ZXMpLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB1cGRhdGVUYWdpaGFuID0gYXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBhY2Nlc3NUb2tlbixcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0dlbmVyYWwucHV0KFxyXG4gICAgICAgIGAvcmVzb3VyY2VzL3RhZ2loYW4vJHtpZH1gLFxyXG4gICAgICAgIHZhbHVlcyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IHJlc3BvbnNlO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBhZGRUb2FzdChcIkJlcmhhc2lsIHViYWggdGFnaWhhblwiLCB7IGFwcGVhcmFuY2U6IFwic3VjY2Vzc1wiIH0pO1xyXG4gICAgICAgIHNldFNob3coIXNob3cpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhZGRUb2FzdChlcnJvckhhbmRsZXIoZXJyb3IpLCB7IGFwcGVhcmFuY2U6IFwiZXJyb3JcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaFRhZ2loYW5EZXRhaWwgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYWNjZXNzVG9rZW4sXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NHZW5lcmFsLmdldChgL3Jlc291cmNlcy90YWdpaGFuLyR7aWR9YCwge1xyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gcmVzcG9uc2U7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwiaWRfcGVuZ2d1bmFhblwiLCBkYXRhLmRhdGFbMF0uaWRfcGVuZ2d1bmFhbik7XHJcbiAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJpZF9wZWxhbmdnYW5cIiwgZGF0YS5kYXRhWzBdLmlkX3BlbGFuZ2dhbik7XHJcbiAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJidWxhblwiLCBkYXRhLmRhdGFbMF0uYnVsYW4pO1xyXG4gICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwidGFodW5cIiwgZGF0YS5kYXRhWzBdLnRhaHVuKTtcclxuICAgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZShcImp1bWxhaF9tZXRlclwiLCBkYXRhLmRhdGFbMF0uanVtbGFoX21ldGVyKTtcclxuICAgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZShcInN0YXR1c1wiLCBkYXRhLmRhdGFbMF0uc3RhdHVzKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWRkVG9hc3QoZXJyb3JIYW5kbGVyKGVycm9yKSwgeyBhcHBlYXJhbmNlOiBcImVycm9yXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3B0aW9uc0J1bGFuID0gW1xyXG4gICAgeyB2YWx1ZTogXCJKYW51YXJ5XCIsIGxhYmVsOiBcIkphbnVhcnlcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJGZWJydWFyeVwiLCBsYWJlbDogXCJGZWJydWFyeVwiIH0sXHJcbiAgICB7IHZhbHVlOiBcIk1hcmNoXCIsIGxhYmVsOiBcIk1hcmNoXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiQXByaWxcIiwgbGFiZWw6IFwiQXByaWxcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJNYXlcIiwgbGFiZWw6IFwiTWF5XCIgfSxcclxuICAgIHsgdmFsdWU6IFwiSnVuZVwiLCBsYWJlbDogXCJKdW5lXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiSnVseVwiLCBsYWJlbDogXCJKdWx5XCIgfSxcclxuICAgIHsgdmFsdWU6IFwiQXVndXN0XCIsIGxhYmVsOiBcIkF1Z3VzdFwiIH0sXHJcbiAgICB7IHZhbHVlOiBcIlNlcHRlbWJlclwiLCBsYWJlbDogXCJTZXB0ZW1iZXJcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJPY3RvYmVyXCIsIGxhYmVsOiBcIk9jdG9iZXJcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJOb3ZlbWJlclwiLCBsYWJlbDogXCJOb3ZlbWJlclwiIH0sXHJcbiAgICB7IHZhbHVlOiBcIkRlY2VtYmVyXCIsIGxhYmVsOiBcIkRlY2VtYmVyXCIgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBvcHRpb25TdGF0dXMgPSBbXHJcbiAgICB7IHZhbHVlOiAnU3VkYWggQmF5YXInLCBsYWJlbDogJ1N1ZGFoIEJheWFyJyB9LFxyXG4gICAgeyB2YWx1ZTogJ0JlbHVtIEJheWFyJywgbGFiZWw6ICdCZWx1bSBCYXlhcicgfSxcclxuICBdXHJcblxyXG5cclxuICBjb25zdCBMaXN0WWVhciA9ICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IG1heE9mZnNldCA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XTtcclxuICAgICAgY29uc3QgdGhpc1llYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgIGNvbnN0IGFsbFllYXJzID0gW107XHJcbiAgICAgIGZvciAoY29uc3QgaXRlcmF0b3Igb2YgbWF4T2Zmc2V0KSB7XHJcbiAgICAgICAgbGV0IHZhbCA9IHtcclxuICAgICAgICAgIHZhbHVlOiB0aGlzWWVhciAtIGl0ZXJhdG9yLFxyXG4gICAgICAgICAgbGFiZWw6IHRoaXNZZWFyIC0gaXRlcmF0b3IsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBhbGxZZWFycy5wdXNoKHZhbCk7XHJcbiAgICAgIH1cclxuICAgICAgc2V0TGlzdFllYXJzKGFsbFllYXJzKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFkZFRvYXN0KGVycm9ySGFuZGxlcihlcnJvciksIHsgYXBwZWFyYW5jZTogXCJlcnJvclwiIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoUGVsYW5nZ2FuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBhY2Nlc3NUb2tlbixcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NHZW5lcmFsLmdldChcIi9yZXNvdXJjZXMvcGVsYW5nZ2FuXCIsIHtcclxuICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgc3RhcnQ6IDAsXHJcbiAgICAgICAgICBsaW1pdDogOTk5LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRQZWxhbmdnYW5PcHRpb24oW10pO1xyXG4gICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gcmVzcG9uc2U7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGNvbnN0IHBlbGFuZ2dhbkFyciA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHBlbGFuZ2dhbiA9IGRhdGEuZGF0YTtcclxuICAgICAgICBmb3IgKGNvbnN0IGl0ZXJhdG9yIG9mIHBlbGFuZ2dhbikge1xyXG4gICAgICAgICAgbGV0IHZhbCA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IGl0ZXJhdG9yLmlkX3BlbGFuZ2dhbixcclxuICAgICAgICAgICAgbGFiZWw6IGl0ZXJhdG9yLm5hbWFfcGVsYW5nZ2FuLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHBlbGFuZ2dhbkFyci5wdXNoKHZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFBlbGFuZ2dhbk9wdGlvbihwZWxhbmdnYW5BcnIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhZGRUb2FzdChlcnJvckhhbmRsZXIoZXJyb3IpLCB7IGFwcGVhcmFuY2U6IFwiZXJyb3JcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaFBlbmdndW5hYW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGFjY2Vzc1Rva2VuLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0dlbmVyYWwuZ2V0KFwiL3Jlc291cmNlcy9wZW5nZ3VuYWFuXCIsIHtcclxuICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgc3RhcnQ6IDAsXHJcbiAgICAgICAgICBsaW1pdDogOTk5LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRQZW5nZ3VuYWFuT3B0aW9uKFtdKTtcclxuICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBjb25zdCBwZW5nZ3VuYWFuQXJyID0gW107XHJcbiAgICAgICAgY29uc3QgcGVuZ2d1bmFhbiA9IGRhdGEuZGF0YTtcclxuICAgICAgICBmb3IgKGNvbnN0IGl0ZXJhdG9yIG9mIHBlbmdndW5hYW4pIHtcclxuICAgICAgICAgIGxldCB2YWwgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBpdGVyYXRvci5pZF9wZW5nZ3VuYWFuLFxyXG4gICAgICAgICAgICBsYWJlbDogaXRlcmF0b3IuYnVsYW4gKyBcIiBcIiArIGl0ZXJhdG9yLnRhaHVuLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHBlbmdndW5hYW5BcnIucHVzaCh2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRQZW5nZ3VuYWFuT3B0aW9uKHBlbmdndW5hYW5BcnIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhZGRUb2FzdChlcnJvckhhbmRsZXIoZXJyb3IpLCB7IGFwcGVhcmFuY2U6IFwiZXJyb3JcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgY2xhc3NOYW1lPVwidy0zLzUgaC00LzUgYmxvY2sgbXgtYXV0byBweC00IG15LTNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBteC1hdXRvIHB5LTRcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtM3hsIHRleHQtYmxhY2sgbWItMjBcIj5cclxuICAgICAgICAgIFViYWggRGF0YSBQZW5nZ3VuYWFuXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH0gbWV0aG9kPVwiUE9TVFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICBQaWxpaCBQZW5nZ3VuYWFuXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBpbGloIHBlbmdndW5hYW5cIlxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3BlbmdndW5hYW5PcHRpb259XHJcbiAgICAgICAgICAgICAgbmFtZT1cImlkX3BlbmdndW5hYW5cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICAgIHBlbmdndW5hYW5PcHRpb25bXHJcbiAgICAgICAgICAgICAgICAgIHBlbmdndW5hYW5PcHRpb24uZmluZEluZGV4KFxyXG4gICAgICAgICAgICAgICAgICAgICh4KSA9PiB4LnZhbHVlID09IGZvcm1pay52YWx1ZXMuaWRfcGVuZ2d1bmFhblxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJpZF9wZW5nZ3VuYWFuXCIsIGUudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1zZW1pYm9sZCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgUGlsaWggUGVsYW5nZ2FuXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBpbGloIHBlbGFuZ2dhblwiXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17cGVsYW5nZ2FuT3B0aW9ufVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJpZF9wZWxhbmdnYW5cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICAgIHBlbGFuZ2dhbk9wdGlvbltcclxuICAgICAgICAgICAgICAgICAgcGVsYW5nZ2FuT3B0aW9uLmZpbmRJbmRleChcclxuICAgICAgICAgICAgICAgICAgICAoeCkgPT4geC52YWx1ZSA9PSBmb3JtaWsudmFsdWVzLmlkX3BlbGFuZ2dhblxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJpZF9wZWxhbmdnYW5cIiwgZS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICBQaWxpaCBCdWxhblxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaWxpaCBwZWxhbmdnYW5cIlxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnNCdWxhbn1cclxuICAgICAgICAgICAgICBuYW1lPVwiYnVsYW5cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnNCdWxhbltcclxuICAgICAgICAgICAgICAgICAgb3B0aW9uc0J1bGFuLmZpbmRJbmRleChcclxuICAgICAgICAgICAgICAgICAgICAoeCkgPT4geC52YWx1ZSA9PSBmb3JtaWsudmFsdWVzLmJ1bGFuXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZShcImJ1bGFuXCIsIGUudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1zZW1pYm9sZCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgUGlsaWggVGFodW5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGlsaWggcGVsYW5nZ2FuXCJcclxuICAgICAgICAgICAgICBvcHRpb25zPXtsaXN0WWVhcnN9XHJcbiAgICAgICAgICAgICAgbmFtZT1cInRhaHVuXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICBsaXN0WWVhcnNbXHJcbiAgICAgICAgICAgICAgICAgIGxpc3RZZWFycy5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgICAgICAgICAgKHgpID0+IHgudmFsdWUgPT0gZm9ybWlrLnZhbHVlcy50YWh1blxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJ0YWh1blwiLCBlLnZhbHVlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTQgbXktNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1zZW1pYm9sZCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgSnVtbGFoIE1ldGVyXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTIgcHgtMyBiZy1ncmF5LTEwMCByb3VuZGVkIGJsb2NrIHctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC1iYXNlXCJcclxuICAgICAgICAgICAgICBuYW1lPVwianVtbGFoX21ldGVyXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkp1bWxhaCBtZXRlclwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuanVtbGFoX21ldGVyfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy5qdW1sYWhfbWV0ZXIgJiYgKFxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yZWQtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy5qdW1sYWhfbWV0ZXJ9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIFBpbGloIFN0YXR1c1xyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaWxpaCBzdGF0dXNcIlxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvblN0YXR1c31cclxuICAgICAgICAgICAgICBuYW1lPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICBvcHRpb25TdGF0dXNbXHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvblN0YXR1cy5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgICAgICAgICAgKHgpID0+IHgudmFsdWUgPT0gZm9ybWlrLnZhbHVlcy5zdGF0dXNcclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwic3RhdHVzXCIsIGUudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWVuZCBpdGVtcy1jZW50ZXIgbXQtMjBcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3coIXNob3cpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTEyIHRleHQtd2hpdGUgcHktMiBmb250LXNlbWlib2xkIGJnLWdyYXktNDAwIHJvdW5kZWQgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQmF0YWxcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0xMiB0ZXh0LXdoaXRlIHB5LTIgZm9udC1zZW1pYm9sZCBiZy1ibHVlLTUwMCByb3VuZGVkIGN1cnNvci1wb2ludGVyIG1sLTEwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNpbXBhblxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdFRhZ2loYW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=