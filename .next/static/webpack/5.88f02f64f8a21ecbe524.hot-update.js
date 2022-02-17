webpackHotUpdate_N_E(5,{

/***/ "./components/tagihan/AddTagihan.js":
/*!******************************************!*\
  !*** ./components/tagihan/AddTagihan.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _helpers_global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/global */ "./helpers/global.js");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toast-notifications */ "./node_modules/react-toast-notifications/dist/index.js");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");





var _jsxFileName = "C:\\project\\sertifikasi_listrik_frontend\\components\\tagihan\\AddTagihan.js",
    _s = $RefreshSig$();

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _templateObject() {
  var data = Object(C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 0px 5px 15px 4px rgba(0, 0, 0, 0.25);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var Card = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject());
_c = Card;

function AddTagihan(_ref) {
  _s();

  var show = _ref.show,
      setShow = _ref.setShow;
  var accessToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.accessToken;
  });

  var _useToasts = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_8__["useToasts"])(),
      addToast = _useToasts.addToast;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      penggunaanOption = _useState[0],
      setPenggunaanOption = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      meterAwal = _useState2[0],
      setMeterAwal = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      meterAkhir = _useState3[0],
      setMeterAkhir = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      idPelanggan = _useState4[0],
      setIdPelanggan = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    fetchPenggunaan();
  }, []);
  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_9__["useFormik"])({
    initialValues: {
      id_penggunaan: 0,
      id_pelanggan: 0,
      bulan: "",
      tahun: 0,
      jumlah_meter: 0,
      status: ""
    },
    onSubmit: function onSubmit(values) {
      return createTagihan(values);
    }
  });

  var fetchPenggunaan = /*#__PURE__*/function () {
    var _ref2 = Object(C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var headers, response, status, data, penggunaanArr, penggunaan, _iterator, _step, iterator, val;

      return C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              headers = {
                Authorization: accessToken
              };
              _context.next = 4;
              return _helpers_global__WEBPACK_IMPORTED_MODULE_7__["axiosGeneral"].get("/resources/penggunaan", {
                headers: headers,
                params: {
                  start: 0,
                  limit: 999,
                  search: "Belum Bayar"
                }
              });

            case 4:
              response = _context.sent;
              setPenggunaanOption([]);
              status = response.status, data = response.data;

              if (status === 200) {
                penggunaanArr = [];
                penggunaan = data.data;
                _iterator = _createForOfIteratorHelper(penggunaan);

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    iterator = _step.value;
                    val = {
                      value: iterator.id_penggunaan,
                      label: iterator.pelanggan_detail.nomor_kwh.toString() + " - " + iterator.pelanggan_detail.nama_pelanggan
                    };
                    penggunaanArr.push(val);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                setPenggunaanOption(penggunaanArr);
              }

              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              addToast(Object(_helpers_global__WEBPACK_IMPORTED_MODULE_7__["errorHandler"])(_context.t0), {
                appearance: "error"
              });

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function fetchPenggunaan() {
      return _ref2.apply(this, arguments);
    };
  }();

  var getDataPenggunaanById = /*#__PURE__*/function () {
    var _ref3 = Object(C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(idPenggunaan) {
      var headers, response, status, data, akhir, awal, hasil;
      return C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              headers = {
                Authorization: accessToken
              };
              _context2.next = 4;
              return _helpers_global__WEBPACK_IMPORTED_MODULE_7__["axiosGeneral"].get("/resources/penggunaan/".concat(idPenggunaan), {
                headers: headers,
                params: {
                  start: 0,
                  limit: 999
                }
              });

            case 4:
              response = _context2.sent;
              status = response.status, data = response.data;

              if (status === 200) {
                formik.setFieldValue("id_penggunaan", data.data.id_penggunaan);
                setIdPelanggan(data.data.id_pelanggan);
                formik.setFieldValue("bulan", data.data.bulan);
                formik.setFieldValue("tahun", data.data.tahun);
                formik.setFieldValue("status", data.data.status);
                akhir = data.data.meter_akhir;
                awal = data.data.meter_awal;
                hasil = akhir - awal;
                formik.setFieldValue("jumlah_meter", hasil);
                setMeterAkhir(data.data.meter_akhir);
                setMeterAwal(data.data.meter_awal);
              }

              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              addToast(Object(_helpers_global__WEBPACK_IMPORTED_MODULE_7__["errorHandler"])(_context2.t0), {
                appearance: "error"
              });

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 9]]);
    }));

    return function getDataPenggunaanById(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var createTagihan = /*#__PURE__*/function () {
    var _ref4 = Object(C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(values) {
      var headers, response, status;
      return C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              headers = {
                Authorization: accessToken
              };
              values.id_pelanggan = idPelanggan;
              _context3.next = 5;
              return _helpers_global__WEBPACK_IMPORTED_MODULE_7__["axiosGeneral"].post("/resources/tagihan", values, {
                headers: headers
              });

            case 5:
              response = _context3.sent;
              status = response.status;

              if (status === 201 || status === 200) {
                setShow(!show);
              }

              addToast("Berhasil simpan data", {
                appearance: "success"
              });
              _context3.next = 14;
              break;

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](0);
              addToast(Object(_helpers_global__WEBPACK_IMPORTED_MODULE_7__["errorHandler"])(_context3.t0), {
                appearance: "error"
              });

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 11]]);
    }));

    return function createTagihan(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Card, {
    className: "w-3/5 h-4/5 block mx-auto px-4 my-3",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "block mx-auto py-4",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
        className: "font-bold text-3xl text-black mb-16",
        children: "Tambah Data Tagihan"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("form", {
        onSubmit: formik.handleSubmit,
        method: "POST",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "col-span-2 my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Nama Pengguna"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_4__["default"], {
            placeholder: "Pilih penggunaan",
            options: penggunaanOption,
            name: "id_penggunaan",
            isClearable: true,
            defaultValue: penggunaanOption.find(function (v) {
              return v.value === formik.values.id_penggunaan;
            }),
            onChange: function onChange(e) {
              var val = e ? e.value : null;
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "col-span-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Bulan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
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
          }, this), formik.errors.bulan && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "col-span-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Tahun"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
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
          }, this), formik.errors.tahun && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "flex justify-between",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "w-full mr-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
              htmlFor: "email",
              className: "block font-semibold text-sm",
              children: "Meter Awal"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
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
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "w-full ml-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
              htmlFor: "email",
              className: "block font-semibold text-sm",
              children: "Meter Akhir"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "col-span-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Penggunaan (Meter)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
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
          }, this), formik.errors.jumlah_meter && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "col-span-2 my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Status"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
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
          }, this), formik.errors.status && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "flex flex-row justify-end my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            onClick: function onClick() {
              return setShow(!show);
            },
            className: "px-12 mx-3 text-white py-2 text-center w-1/6 font-semibold bg-gray-400 rounded cursor-pointer",
            children: "Batal"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 254,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
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

_s(AddTagihan, "5JZHGQ9QqE50DohH/vY3sFJgwJE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], react_toast_notifications__WEBPACK_IMPORTED_MODULE_8__["useToasts"], formik__WEBPACK_IMPORTED_MODULE_9__["useFormik"]];
});

_c2 = AddTagihan;
/* harmony default export */ __webpack_exports__["default"] = (AddTagihan);

var _c, _c2;

$RefreshReg$(_c, "Card");
$RefreshReg$(_c2, "AddTagihan");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YWdpaGFuL0FkZFRhZ2loYW4uanMiXSwibmFtZXMiOlsiQ2FyZCIsInN0eWxlZCIsImRpdiIsIkFkZFRhZ2loYW4iLCJzaG93Iiwic2V0U2hvdyIsImFjY2Vzc1Rva2VuIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZVRvYXN0cyIsImFkZFRvYXN0IiwidXNlU3RhdGUiLCJwZW5nZ3VuYWFuT3B0aW9uIiwic2V0UGVuZ2d1bmFhbk9wdGlvbiIsIm1ldGVyQXdhbCIsInNldE1ldGVyQXdhbCIsIm1ldGVyQWtoaXIiLCJzZXRNZXRlckFraGlyIiwiaWRQZWxhbmdnYW4iLCJzZXRJZFBlbGFuZ2dhbiIsInVzZUVmZmVjdCIsImZldGNoUGVuZ2d1bmFhbiIsImZvcm1payIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJpZF9wZW5nZ3VuYWFuIiwiaWRfcGVsYW5nZ2FuIiwiYnVsYW4iLCJ0YWh1biIsImp1bWxhaF9tZXRlciIsInN0YXR1cyIsIm9uU3VibWl0IiwidmFsdWVzIiwiY3JlYXRlVGFnaWhhbiIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYXhpb3NHZW5lcmFsIiwiZ2V0IiwicGFyYW1zIiwic3RhcnQiLCJsaW1pdCIsInNlYXJjaCIsInJlc3BvbnNlIiwiZGF0YSIsInBlbmdndW5hYW5BcnIiLCJwZW5nZ3VuYWFuIiwiaXRlcmF0b3IiLCJ2YWwiLCJ2YWx1ZSIsImxhYmVsIiwicGVsYW5nZ2FuX2RldGFpbCIsIm5vbW9yX2t3aCIsInRvU3RyaW5nIiwibmFtYV9wZWxhbmdnYW4iLCJwdXNoIiwiZXJyb3JIYW5kbGVyIiwiYXBwZWFyYW5jZSIsImdldERhdGFQZW5nZ3VuYWFuQnlJZCIsImlkUGVuZ2d1bmFhbiIsInNldEZpZWxkVmFsdWUiLCJha2hpciIsIm1ldGVyX2FraGlyIiwiYXdhbCIsIm1ldGVyX2F3YWwiLCJoYXNpbCIsInBvc3QiLCJoYW5kbGVTdWJtaXQiLCJmaW5kIiwi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LHNCQUFoQjtBQUFBLHNCQUNHUixNQUFNLENBQUNpRCxNQUFQLENBQWN6QztBQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2R0YsZUEwSEU7QUFBSyxtQkFBUyxFQUFDLGdDQUFmO0FBQUEsa0NBQ0U7QUFDRSxtQkFBTyxFQUFFO0FBQUEscUJBQU16QixPQUFPLENBQUMsQ0FBQ0QsSUFBRixDQUFiO0FBQUEsYUFEWDtBQUVFLHFCQUFTLEVBQUMsK0ZBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFPRTtBQUNFLGdCQUFJLEVBQUMsUUFEUCxDQUVFO0FBRkY7QUFHRSxxQkFBUyxFQUFDLHVIQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkExSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUpEOztHQWpRUUQsVTtVQUNhSSx1RCxFQUNDRSxtRSxFQVdOYyxnRDs7O01BYlJwQixVO0FBbVFNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay81Ljg4ZjAyZjY0ZjhhMjFlY2JlNTI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBheGlvc0dlbmVyYWwsIGVycm9ySGFuZGxlciB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2dsb2JhbFwiO1xyXG5pbXBvcnQgeyB1c2VUb2FzdHMgfSBmcm9tIFwicmVhY3QtdG9hc3Qtbm90aWZpY2F0aW9uc1wiO1xyXG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBDYXJkID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxNXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG5gO1xyXG5cclxuZnVuY3Rpb24gQWRkVGFnaWhhbih7IHNob3csIHNldFNob3cgfSkge1xyXG4gIGNvbnN0IGFjY2Vzc1Rva2VuID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hY2Nlc3NUb2tlbik7XHJcbiAgY29uc3QgeyBhZGRUb2FzdCB9ID0gdXNlVG9hc3RzKCk7XHJcbiAgY29uc3QgW3BlbmdndW5hYW5PcHRpb24sIHNldFBlbmdndW5hYW5PcHRpb25dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFttZXRlckF3YWwsIHNldE1ldGVyQXdhbF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFttZXRlckFraGlyLCBzZXRNZXRlckFraGlyXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2lkUGVsYW5nZ2FuLCBzZXRJZFBlbGFuZ2dhbl0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoUGVuZ2d1bmFhbigpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcclxuICAgIGluaXRpYWxWYWx1ZXM6IHtcclxuICAgICAgaWRfcGVuZ2d1bmFhbjogMCxcclxuICAgICAgaWRfcGVsYW5nZ2FuOiAwLFxyXG4gICAgICBidWxhbjogXCJcIixcclxuICAgICAgdGFodW46IDAsXHJcbiAgICAgIGp1bWxhaF9tZXRlcjogMCxcclxuICAgICAgc3RhdHVzOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIG9uU3VibWl0OiAodmFsdWVzKSA9PiBjcmVhdGVUYWdpaGFuKHZhbHVlcyksXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGZldGNoUGVuZ2d1bmFhbiA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYWNjZXNzVG9rZW4sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zR2VuZXJhbC5nZXQoXCIvcmVzb3VyY2VzL3BlbmdndW5hYW5cIiwge1xyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBzdGFydDogMCxcclxuICAgICAgICAgIGxpbWl0OiA5OTksXHJcbiAgICAgICAgICBzZWFyY2g6IFwiQmVsdW0gQmF5YXJcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgc2V0UGVuZ2d1bmFhbk9wdGlvbihbXSk7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSByZXNwb25zZTtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgY29uc3QgcGVuZ2d1bmFhbkFyciA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHBlbmdndW5hYW4gPSBkYXRhLmRhdGE7XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVyYXRvciBvZiBwZW5nZ3VuYWFuKSB7XHJcbiAgICAgICAgICBsZXQgdmFsID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogaXRlcmF0b3IuaWRfcGVuZ2d1bmFhbixcclxuICAgICAgICAgICAgbGFiZWw6IGl0ZXJhdG9yLnBlbGFuZ2dhbl9kZXRhaWwubm9tb3Jfa3doLnRvU3RyaW5nKCkgKyBcIiAtIFwiICsgaXRlcmF0b3IucGVsYW5nZ2FuX2RldGFpbC5uYW1hX3BlbGFuZ2dhbixcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBwZW5nZ3VuYWFuQXJyLnB1c2godmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0UGVuZ2d1bmFhbk9wdGlvbihwZW5nZ3VuYWFuQXJyKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWRkVG9hc3QoZXJyb3JIYW5kbGVyKGVycm9yKSwgeyBhcHBlYXJhbmNlOiBcImVycm9yXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0RGF0YVBlbmdndW5hYW5CeUlkID0gYXN5bmMgKGlkUGVuZ2d1bmFhbikgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBhY2Nlc3NUb2tlbixcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NHZW5lcmFsLmdldChgL3Jlc291cmNlcy9wZW5nZ3VuYWFuLyR7aWRQZW5nZ3VuYWFufWAsIHtcclxuICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgc3RhcnQ6IDAsXHJcbiAgICAgICAgICBsaW1pdDogOTk5LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gcmVzcG9uc2U7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwiaWRfcGVuZ2d1bmFhblwiLCBkYXRhLmRhdGEuaWRfcGVuZ2d1bmFhbik7XHJcbiAgICAgICAgc2V0SWRQZWxhbmdnYW4oZGF0YS5kYXRhLmlkX3BlbGFuZ2dhbilcclxuICAgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZShcImJ1bGFuXCIsIGRhdGEuZGF0YS5idWxhbik7XHJcbiAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJ0YWh1blwiLCBkYXRhLmRhdGEudGFodW4pO1xyXG4gICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwic3RhdHVzXCIsIGRhdGEuZGF0YS5zdGF0dXMpO1xyXG4gICAgICAgIGNvbnN0IGFraGlyID0gZGF0YS5kYXRhLm1ldGVyX2FraGlyO1xyXG4gICAgICAgIGNvbnN0IGF3YWwgPSBkYXRhLmRhdGEubWV0ZXJfYXdhbDtcclxuICAgICAgICBjb25zdCBoYXNpbCA9IGFraGlyIC0gYXdhbDtcclxuICAgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZShcImp1bWxhaF9tZXRlclwiLCBoYXNpbCApO1xyXG4gICAgICAgIHNldE1ldGVyQWtoaXIoZGF0YS5kYXRhLm1ldGVyX2FraGlyKTtcclxuICAgICAgICBzZXRNZXRlckF3YWwoZGF0YS5kYXRhLm1ldGVyX2F3YWwpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhZGRUb2FzdChlcnJvckhhbmRsZXIoZXJyb3IpLCB7IGFwcGVhcmFuY2U6IFwiZXJyb3JcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjcmVhdGVUYWdpaGFuID0gYXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBhY2Nlc3NUb2tlbixcclxuICAgICAgfTtcclxuICAgICAgdmFsdWVzLmlkX3BlbGFuZ2dhbiA9IGlkUGVsYW5nZ2FuO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zR2VuZXJhbC5wb3N0KGAvcmVzb3VyY2VzL3RhZ2loYW5gLCBcclxuICAgICAgdmFsdWVzLCB7XHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSByZXNwb25zZTtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxIHx8IHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgc2V0U2hvdyghc2hvdyk7XHJcbiAgICAgIH1cclxuICAgICAgYWRkVG9hc3QoXCJCZXJoYXNpbCBzaW1wYW4gZGF0YVwiLCB7IGFwcGVhcmFuY2U6IFwic3VjY2Vzc1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWRkVG9hc3QoZXJyb3JIYW5kbGVyKGVycm9yKSwgeyBhcHBlYXJhbmNlOiBcImVycm9yXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIGNsYXNzTmFtZT1cInctMy81IGgtNC81IGJsb2NrIG14LWF1dG8gcHgtNCBteS0zXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgbXgtYXV0byBweS00XCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTN4bCB0ZXh0LWJsYWNrIG1iLTE2XCI+XHJcbiAgICAgICAgICBUYW1iYWggRGF0YSBUYWdpaGFuXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH0gbWV0aG9kPVwiUE9TVFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIG15LTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIE5hbWEgUGVuZ2d1bmFcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGlsaWggcGVuZ2d1bmFhblwiXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17cGVuZ2d1bmFhbk9wdGlvbn1cclxuICAgICAgICAgICAgICBuYW1lPVwiaWRfcGVuZ2d1bmFhblwiXHJcbiAgICAgICAgICAgICAgaXNDbGVhcmFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwZW5nZ3VuYWFuT3B0aW9uLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAodikgPT4gdi52YWx1ZSA9PT0gZm9ybWlrLnZhbHVlcy5pZF9wZW5nZ3VuYWFuXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGUgPyBlLnZhbHVlIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIGdldERhdGFQZW5nZ3VuYWFuQnlJZCh2YWwpO1xyXG4gICAgICAgICAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJpZF9wZW5nZ3VuYWFuXCIsIHZhbCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICBCdWxhblxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweS0yIHB4LTMgYmctZ3JheS0xMDAgcm91bmRlZCBibG9jayB3LWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lIHRleHQtYmFzZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImJ1bGFuXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJ1bGFuXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5idWxhbn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMuYnVsYW4gJiYgKFxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yZWQtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy5idWxhbn1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1zZW1pYm9sZCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgVGFodW5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBweC0zIGJnLWdyYXktMTAwIHJvdW5kZWQgYmxvY2sgdy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ0YWh1blwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJKdW1sYWggbWV0ZXJcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMudGFodW59XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLnRhaHVuICYmIChcclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtcmVkLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMudGFodW59XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1yLTJcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIE1ldGVyIEF3YWxcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBweC0zIGJnLWdyYXktMTAwIHJvdW5kZWQgYmxvY2sgdy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWV0ZXIgYXdhbFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICB2YWx1ZT17bWV0ZXJBd2FsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWwtMlwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1zZW1pYm9sZCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgTWV0ZXIgQWtoaXJcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBweC0zIGJnLWdyYXktMTAwIHJvdW5kZWQgYmxvY2sgdy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWV0ZXIgYWtoaXJcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgdmFsdWU9e21ldGVyQWtoaXJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIFBlbmdndW5hYW4gKE1ldGVyKVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweS0yIHB4LTMgYmctZ3JheS0xMDAgcm91bmRlZCBibG9jayB3LWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lIHRleHQtYmFzZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImp1bWxhaF9tZXRlclwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJKdW1sYWggbWV0ZXJcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuanVtbGFoX21ldGVyfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy5qdW1sYWhfbWV0ZXIgJiYgKFxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yZWQtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy5qdW1sYWhfbWV0ZXJ9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgbXktNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1zZW1pYm9sZCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgU3RhdHVzXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTIgcHgtMyBiZy1ncmF5LTEwMCByb3VuZGVkIGJsb2NrIHctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC1iYXNlXCJcclxuICAgICAgICAgICAgICBuYW1lPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuc3RhdHVzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy5zdGF0dXMgJiYgKFxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yZWQtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy5zdGF0dXN9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1lbmQgbXktNFwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvdyghc2hvdyl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMTIgbXgtMyB0ZXh0LXdoaXRlIHB5LTIgdGV4dC1jZW50ZXIgdy0xLzYgZm9udC1zZW1pYm9sZCBiZy1ncmF5LTQwMCByb3VuZGVkIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEJhdGFsXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgLy8gICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIiM0MzYxZWVcIiB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBweS0yIHRleHQtZ3JheS01MCBiZy1ibHVlLTUwMCBweC00IHRleHQtY2VudGVyIHctMS82IHJvdW5kZWQgZm9udC1ib2xkIGN1cnNvci1wb2ludGVyIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTaW1wYW5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZFRhZ2loYW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=