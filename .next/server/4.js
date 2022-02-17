exports.ids = [4];
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
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\project\\sertifikasi_listrik_frontend\\components\\tagihan\\AddTagihan.js";







const Card = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div`
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
    0: penggunaanOption,
    1: setPenggunaanOption
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const {
    0: meterAwal,
    1: setMeterAwal
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  const {
    0: meterAkhir,
    1: setMeterAkhir
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  const {
    0: idPelanggan,
    1: setIdPelanggan
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    fetchPenggunaan();
  }, []);
  const formik = Object(formik__WEBPACK_IMPORTED_MODULE_6__["useFormik"])({
    initialValues: {
      id_penggunaan: 0,
      id_pelanggan: 0,
      bulan: "",
      tahun: 0,
      jumlah_meter: 0,
      status: ""
    },
    onSubmit: values => createTagihan(values)
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
          limit: 999,
          search: "Belum Bayar"
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
            label: iterator.pelanggan_detail.nomor_kwh + " - " + iterator.pelanggan_detail.nama_pelanggan
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

  const getDataPenggunaanById = async idPenggunaan => {
    try {
      const headers = {
        Authorization: accessToken
      };
      const response = await _helpers_global__WEBPACK_IMPORTED_MODULE_4__["axiosGeneral"].get(`/resources/penggunaan/${idPenggunaan}`, {
        headers,
        params: {
          start: 0,
          limit: 999
        }
      });
      const {
        status,
        data
      } = response;

      if (status === 200) {
        formik.setFieldValue("id_penggunaan", data.data.id_penggunaan);
        setIdPelanggan(data.data.id_pelanggan);
        formik.setFieldValue("bulan", data.data.bulan);
        formik.setFieldValue("tahun", data.data.tahun);
        formik.setFieldValue("status", data.data.status);
        const akhir = data.data.meter_akhir;
        const awal = data.data.meter_awal;
        const hasil = akhir - awal;
        formik.setFieldValue("jumlah_meter", hasil);
        setMeterAkhir(data.data.meter_akhir);
        setMeterAwal(data.data.meter_awal);
      }
    } catch (error) {
      addToast(Object(_helpers_global__WEBPACK_IMPORTED_MODULE_4__["errorHandler"])(error), {
        appearance: "error"
      });
    }
  };

  const createTagihan = async values => {
    try {
      const headers = {
        Authorization: accessToken
      };
      values.id_pelanggan = idPelanggan;
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
    className: "w-3/5 h-4/5 block mx-auto px-4 my-3",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "block mx-auto py-4",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "font-bold text-3xl text-black mb-16",
        children: "Tambah Data Tagihan"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: formik.handleSubmit,
        method: "POST",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-2 my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Nama Pengguna"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
            placeholder: "Pilih penggunaan",
            options: penggunaanOption,
            name: "id_penggunaan",
            isClearable: true,
            defaultValue: penggunaanOption.find(v => v.value === formik.values.id_penggunaan),
            onChange: e => {
              const val = e ? e.value : null;
              getDataPenggunaanById(val);
              formik.setFieldValue("id_penggunaan", val);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Bulan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base",
            name: "bulan",
            placeholder: "Bulan",
            type: "text",
            disabled: true,
            value: formik.values.bulan,
            onChange: formik.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 13
          }, this), formik.errors.bulan && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "text-xs text-red-500",
            children: formik.errors.bulan
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Tahun"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base",
            name: "tahun",
            placeholder: "Jumlah meter",
            type: "number",
            disabled: true,
            value: formik.values.tahun,
            onChange: formik.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 13
          }, this), formik.errors.tahun && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "text-xs text-red-500",
            children: formik.errors.tahun
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex justify-between",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-full mr-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "email",
              className: "block font-semibold text-sm",
              children: "Meter Awal"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              className: "py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base",
              placeholder: "Meter awal",
              type: "number",
              disabled: true,
              value: meterAwal
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-full ml-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "email",
              className: "block font-semibold text-sm",
              children: "Meter Akhir"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              className: "py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base",
              placeholder: "Meter akhir",
              type: "number",
              disabled: true,
              value: meterAkhir
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Penggunaan (Meter)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base",
            name: "jumlah_meter",
            placeholder: "Jumlah meter",
            type: "number",
            disabled: true,
            value: formik.values.jumlah_meter,
            onChange: formik.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 13
          }, this), formik.errors.jumlah_meter && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "text-xs text-red-500",
            children: formik.errors.jumlah_meter
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-2 my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Status"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base",
            name: "status",
            placeholder: "Status",
            type: "text",
            disabled: true,
            value: formik.values.status,
            onChange: formik.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 238,
            columnNumber: 13
          }, this), formik.errors.status && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "text-xs text-red-500",
            children: formik.errors.status
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 248,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-row justify-end my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            onClick: () => setShow(!show),
            className: "px-12 mx-3 text-white py-2 text-center w-1/6 font-semibold bg-gray-400 rounded cursor-pointer",
            children: "Batal"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 254,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "submit" //   style={{ background: "#4361ee" }}
            ,
            className: "inline-block py-2 text-gray-50 bg-blue-500 px-4 text-center w-1/6 rounded font-bold cursor-pointer focus:outline-none",
            children: "Simpan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 126,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (AddTagihan);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhZ2loYW4vQWRkVGFnaWhhbi5qcyJdLCJuYW1lcyI6WyJDYXJkIiwic3R5bGVkIiwiZGl2IiwiQWRkVGFnaWhhbiIsInNob3ciLCJzZXRTaG93IiwiYWNjZXNzVG9rZW4iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYWRkVG9hc3QiLCJ1c2VUb2FzdHMiLCJwZW5nZ3VuYWFuT3B0aW9uIiwic2V0UGVuZ2d1bmFhbk9wdGlvbiIsInVzZVN0YXRlIiwibWV0ZXJBd2FsIiwic2V0TWV0ZXJBd2FsIiwibWV0ZXJBa2hpciIsInNldE1ldGVyQWtoaXIiLCJpZFBlbGFuZ2dhbiIsInNldElkUGVsYW5nZ2FuIiwidXNlRWZmZWN0IiwiZmV0Y2hQZW5nZ3VuYWFuIiwiZm9ybWlrIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsImlkX3BlbmdndW5hYW4iLCJpZF9wZWxhbmdnYW4iLCJidWxhbiIsInRhaHVuIiwianVtbGFoX21ldGVyIiwic3RhdHVzIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJjcmVhdGVUYWdpaGFuIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXNwb25zZSIsImF4aW9zR2VuZXJhbCIsImdldCIsInBhcmFtcyIsInN0YXJ0IiwibGltaXQiLCJzZWFyY2giLCJkYXRhIiwicGVuZ2d1bmFhbkFyciIsInBlbmdndW5hYW4iLCJpdGVyYXRvciIsInZhbCIsInZhbHVlIiwibGFiZWwiLCJwZWxhbmdnYW5fZGV0YWlsIiwibm9tb3Jfa3doIiwibmFtYV9wZWxhbmdnYW4iLCJwdXNoIiwiZXJyb3IiLCJlcnJvckhhbmRsZXIiLCJhcHBlYXJhbmNlIiwiZ2V0RGF0YVBlbmdndW5hYW5CeUlkIiwiaWRQZW5nZ3VuYWFuIiwic2V0RmllbGRWYWx1ZSIsImFraGlyIiwibWV0ZXJfYWtoaXIiLCJhd2FsIiwibWV0ZXJfYXdhbCIsImhhc2lsIiwicG9zdCIsImhhbmRsZVN1Ym1pdCIsImZpbmQiLCJ2IiwiZSIs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LHlFQUFmLEUiLCJmaWxlIjoiNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGF4aW9zR2VuZXJhbCwgZXJyb3JIYW5kbGVyIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvZ2xvYmFsXCI7XHJcbmltcG9ydCB7IHVzZVRvYXN0cyB9IGZyb20gXCJyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zXCI7XHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwcHggNXB4IDE1cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBBZGRUYWdpaGFuKHsgc2hvdywgc2V0U2hvdyB9KSB7XHJcbiAgY29uc3QgYWNjZXNzVG9rZW4gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFjY2Vzc1Rva2VuKTtcclxuICBjb25zdCB7IGFkZFRvYXN0IH0gPSB1c2VUb2FzdHMoKTtcclxuICBjb25zdCBbcGVuZ2d1bmFhbk9wdGlvbiwgc2V0UGVuZ2d1bmFhbk9wdGlvbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW21ldGVyQXdhbCwgc2V0TWV0ZXJBd2FsXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW21ldGVyQWtoaXIsIHNldE1ldGVyQWtoaXJdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbaWRQZWxhbmdnYW4sIHNldElkUGVsYW5nZ2FuXSA9IHVzZVN0YXRlKCk7XHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hQZW5nZ3VuYWFuKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xyXG4gICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICBpZF9wZW5nZ3VuYWFuOiAwLFxyXG4gICAgICBpZF9wZWxhbmdnYW46IDAsXHJcbiAgICAgIGJ1bGFuOiBcIlwiLFxyXG4gICAgICB0YWh1bjogMCxcclxuICAgICAganVtbGFoX21ldGVyOiAwLFxyXG4gICAgICBzdGF0dXM6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgb25TdWJtaXQ6ICh2YWx1ZXMpID0+IGNyZWF0ZVRhZ2loYW4odmFsdWVzKSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZmV0Y2hQZW5nZ3VuYWFuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBhY2Nlc3NUb2tlbixcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NHZW5lcmFsLmdldChcIi9yZXNvdXJjZXMvcGVuZ2d1bmFhblwiLCB7XHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICAgICAgbGltaXQ6IDk5OSxcclxuICAgICAgICAgIHNlYXJjaDogXCJCZWx1bSBCYXlhclwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRQZW5nZ3VuYWFuT3B0aW9uKFtdKTtcclxuICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBjb25zdCBwZW5nZ3VuYWFuQXJyID0gW107XHJcbiAgICAgICAgY29uc3QgcGVuZ2d1bmFhbiA9IGRhdGEuZGF0YTtcclxuICAgICAgICBmb3IgKGNvbnN0IGl0ZXJhdG9yIG9mIHBlbmdndW5hYW4pIHtcclxuICAgICAgICAgIGxldCB2YWwgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBpdGVyYXRvci5pZF9wZW5nZ3VuYWFuLFxyXG4gICAgICAgICAgICBsYWJlbDogaXRlcmF0b3IucGVsYW5nZ2FuX2RldGFpbC5ub21vcl9rd2ggKyBcIiAtIFwiICsgaXRlcmF0b3IucGVsYW5nZ2FuX2RldGFpbC5uYW1hX3BlbGFuZ2dhbixcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBwZW5nZ3VuYWFuQXJyLnB1c2godmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0UGVuZ2d1bmFhbk9wdGlvbihwZW5nZ3VuYWFuQXJyKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWRkVG9hc3QoZXJyb3JIYW5kbGVyKGVycm9yKSwgeyBhcHBlYXJhbmNlOiBcImVycm9yXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0RGF0YVBlbmdndW5hYW5CeUlkID0gYXN5bmMgKGlkUGVuZ2d1bmFhbikgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBhY2Nlc3NUb2tlbixcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NHZW5lcmFsLmdldChgL3Jlc291cmNlcy9wZW5nZ3VuYWFuLyR7aWRQZW5nZ3VuYWFufWAsIHtcclxuICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgc3RhcnQ6IDAsXHJcbiAgICAgICAgICBsaW1pdDogOTk5LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gcmVzcG9uc2U7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwiaWRfcGVuZ2d1bmFhblwiLCBkYXRhLmRhdGEuaWRfcGVuZ2d1bmFhbik7XHJcbiAgICAgICAgc2V0SWRQZWxhbmdnYW4oZGF0YS5kYXRhLmlkX3BlbGFuZ2dhbilcclxuICAgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZShcImJ1bGFuXCIsIGRhdGEuZGF0YS5idWxhbik7XHJcbiAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJ0YWh1blwiLCBkYXRhLmRhdGEudGFodW4pO1xyXG4gICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwic3RhdHVzXCIsIGRhdGEuZGF0YS5zdGF0dXMpO1xyXG4gICAgICAgIGNvbnN0IGFraGlyID0gZGF0YS5kYXRhLm1ldGVyX2FraGlyO1xyXG4gICAgICAgIGNvbnN0IGF3YWwgPSBkYXRhLmRhdGEubWV0ZXJfYXdhbDtcclxuICAgICAgICBjb25zdCBoYXNpbCA9IGFraGlyIC0gYXdhbDtcclxuICAgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZShcImp1bWxhaF9tZXRlclwiLCBoYXNpbCApO1xyXG4gICAgICAgIHNldE1ldGVyQWtoaXIoZGF0YS5kYXRhLm1ldGVyX2FraGlyKTtcclxuICAgICAgICBzZXRNZXRlckF3YWwoZGF0YS5kYXRhLm1ldGVyX2F3YWwpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhZGRUb2FzdChlcnJvckhhbmRsZXIoZXJyb3IpLCB7IGFwcGVhcmFuY2U6IFwiZXJyb3JcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjcmVhdGVUYWdpaGFuID0gYXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBhY2Nlc3NUb2tlbixcclxuICAgICAgfTtcclxuICAgICAgdmFsdWVzLmlkX3BlbGFuZ2dhbiA9IGlkUGVsYW5nZ2FuO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zR2VuZXJhbC5wb3N0KGAvcmVzb3VyY2VzL3RhZ2loYW5gLCBcclxuICAgICAgdmFsdWVzLCB7XHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSByZXNwb25zZTtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxIHx8IHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgc2V0U2hvdyghc2hvdyk7XHJcbiAgICAgIH1cclxuICAgICAgYWRkVG9hc3QoXCJCZXJoYXNpbCBzaW1wYW4gZGF0YVwiLCB7IGFwcGVhcmFuY2U6IFwic3VjY2Vzc1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWRkVG9hc3QoZXJyb3JIYW5kbGVyKGVycm9yKSwgeyBhcHBlYXJhbmNlOiBcImVycm9yXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIGNsYXNzTmFtZT1cInctMy81IGgtNC81IGJsb2NrIG14LWF1dG8gcHgtNCBteS0zXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgbXgtYXV0byBweS00XCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTN4bCB0ZXh0LWJsYWNrIG1iLTE2XCI+XHJcbiAgICAgICAgICBUYW1iYWggRGF0YSBUYWdpaGFuXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH0gbWV0aG9kPVwiUE9TVFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIG15LTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIE5hbWEgUGVuZ2d1bmFcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGlsaWggcGVuZ2d1bmFhblwiXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17cGVuZ2d1bmFhbk9wdGlvbn1cclxuICAgICAgICAgICAgICBuYW1lPVwiaWRfcGVuZ2d1bmFhblwiXHJcbiAgICAgICAgICAgICAgaXNDbGVhcmFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwZW5nZ3VuYWFuT3B0aW9uLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAodikgPT4gdi52YWx1ZSA9PT0gZm9ybWlrLnZhbHVlcy5pZF9wZW5nZ3VuYWFuXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGUgPyBlLnZhbHVlIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIGdldERhdGFQZW5nZ3VuYWFuQnlJZCh2YWwpO1xyXG4gICAgICAgICAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJpZF9wZW5nZ3VuYWFuXCIsIHZhbCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICBCdWxhblxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweS0yIHB4LTMgYmctZ3JheS0xMDAgcm91bmRlZCBibG9jayB3LWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lIHRleHQtYmFzZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImJ1bGFuXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJ1bGFuXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5idWxhbn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMuYnVsYW4gJiYgKFxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yZWQtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy5idWxhbn1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1zZW1pYm9sZCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgVGFodW5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBweC0zIGJnLWdyYXktMTAwIHJvdW5kZWQgYmxvY2sgdy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ0YWh1blwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJKdW1sYWggbWV0ZXJcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMudGFodW59XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLnRhaHVuICYmIChcclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtcmVkLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMudGFodW59XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1yLTJcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIE1ldGVyIEF3YWxcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBweC0zIGJnLWdyYXktMTAwIHJvdW5kZWQgYmxvY2sgdy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWV0ZXIgYXdhbFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICB2YWx1ZT17bWV0ZXJBd2FsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWwtMlwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1zZW1pYm9sZCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgTWV0ZXIgQWtoaXJcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBweC0zIGJnLWdyYXktMTAwIHJvdW5kZWQgYmxvY2sgdy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWV0ZXIgYWtoaXJcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgdmFsdWU9e21ldGVyQWtoaXJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIFBlbmdndW5hYW4gKE1ldGVyKVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweS0yIHB4LTMgYmctZ3JheS0xMDAgcm91bmRlZCBibG9jayB3LWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lIHRleHQtYmFzZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImp1bWxhaF9tZXRlclwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJKdW1sYWggbWV0ZXJcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuanVtbGFoX21ldGVyfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy5qdW1sYWhfbWV0ZXIgJiYgKFxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yZWQtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy5qdW1sYWhfbWV0ZXJ9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgbXktNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1zZW1pYm9sZCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgU3RhdHVzXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTIgcHgtMyBiZy1ncmF5LTEwMCByb3VuZGVkIGJsb2NrIHctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC1iYXNlXCJcclxuICAgICAgICAgICAgICBuYW1lPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuc3RhdHVzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy5zdGF0dXMgJiYgKFxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yZWQtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy5zdGF0dXN9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1lbmQgbXktNFwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvdyghc2hvdyl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMTIgbXgtMyB0ZXh0LXdoaXRlIHB5LTIgdGV4dC1jZW50ZXIgdy0xLzYgZm9udC1zZW1pYm9sZCBiZy1ncmF5LTQwMCByb3VuZGVkIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEJhdGFsXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgLy8gICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIiM0MzYxZWVcIiB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBweS0yIHRleHQtZ3JheS01MCBiZy1ibHVlLTUwMCBweC00IHRleHQtY2VudGVyIHctMS82IHJvdW5kZWQgZm9udC1ib2xkIGN1cnNvci1wb2ludGVyIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTaW1wYW5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZFRhZ2loYW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=