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
                      label: '' + iterator.pelanggan_detail.nomor_kwh + " - " + iterator.pelanggan_detail.nama_pelanggan
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YWdpaGFuL0FkZFRhZ2loYW4uanMiXSwibmFtZXMiOlsiQ2FyZCIsInN0eWxlZCIsImRpdiIsIkFkZFRhZ2loYW4iLCJzaG93Iiwic2V0U2hvdyIsImFjY2Vzc1Rva2VuIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZVRvYXN0cyIsImFkZFRvYXN0IiwidXNlU3RhdGUiLCJwZW5nZ3VuYWFuT3B0aW9uIiwic2V0UGVuZ2d1bmFhbk9wdGlvbiIsIm1ldGVyQXdhbCIsInNldE1ldGVyQXdhbCIsIm1ldGVyQWtoaXIiLCJzZXRNZXRlckFraGlyIiwiaWRQZWxhbmdnYW4iLCJzZXRJZFBlbGFuZ2dhbiIsInVzZUVmZmVjdCIsImZldGNoUGVuZ2d1bmFhbiIsImZvcm1payIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJpZF9wZW5nZ3VuYWFuIiwiaWRfcGVsYW5nZ2FuIiwiYnVsYW4iLCJ0YWh1biIsImp1bWxhaF9tZXRlciIsInN0YXR1cyIsIm9uU3VibWl0IiwidmFsdWVzIiwiY3JlYXRlVGFnaWhhbiIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYXhpb3NHZW5lcmFsIiwiZ2V0IiwicGFyYW1zIiwic3RhcnQiLCJsaW1pdCIsInNlYXJjaCIsInJlc3BvbnNlIiwiZGF0YSIsInBlbmdndW5hYW5BcnIiLCJwZW5nZ3VuYWFuIiwiaXRlcmF0b3IiLCJ2YWwiLCJ2YWx1ZSIsImxhYmVsIiwicGVsYW5nZ2FuX2RldGFpbCIsIm5vbW9yX2t3aCIsIm5hbWFfcGVsYW5nZ2FuIiwicHVzaCIsImVycm9ySGFuZGxlciIsImFwcGVhcmFuY2UiLCJnZXREYXRhUGVuZ2d1bmFhbkJ5SWQiLCJpZFBlbmdndW5hYW4iLCJzZXRGaWVsZFZhbHVlIiwiYWtoaXIiLCJtZXRlcl9ha2hpciIsImF3YWwiLCJtZXRlcl9hd2FsIiwiaGFzaWwiLCJwb3N0IiwiaGFuZGxlU3VibWl0IiwiZmluZCIsInYiLCJlIiwiaGFu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TSxDQUFDZ0QsTUFBUCxDQUFjeEM7QUFEakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdkdGLGVBMEhFO0FBQUssbUJBQVMsRUFBQyxnQ0FBZjtBQUFBLGtDQUNFO0FBQ0UsbUJBQU8sRUFBRTtBQUFBLHFCQUFNekIsT0FBTyxDQUFDLENBQUNELElBQUYsQ0FBYjtBQUFBLGFBRFg7QUFFRSxxQkFBUyxFQUFDLCtGQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBT0U7QUFDRSxnQkFBSSxFQUFDLFFBRFAsQ0FFRTtBQUZGO0FBR0UscUJBQVMsRUFBQyx1SEFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBMUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1KRDs7R0FqUVFELFU7VUFDYUksdUQsRUFDQ0UsbUUsRUFXTmMsZ0Q7OztNQWJScEIsVTtBQW1RTUEseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svNS40YWMxMGNiZWYzMjA1OTY5ZGFhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgYXhpb3NHZW5lcmFsLCBlcnJvckhhbmRsZXIgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9nbG9iYWxcIjtcclxuaW1wb3J0IHsgdXNlVG9hc3RzIH0gZnJvbSBcInJlYWN0LXRvYXN0LW5vdGlmaWNhdGlvbnNcIjtcclxuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTVweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuYDtcclxuXHJcbmZ1bmN0aW9uIEFkZFRhZ2loYW4oeyBzaG93LCBzZXRTaG93IH0pIHtcclxuICBjb25zdCBhY2Nlc3NUb2tlbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWNjZXNzVG9rZW4pO1xyXG4gIGNvbnN0IHsgYWRkVG9hc3QgfSA9IHVzZVRvYXN0cygpO1xyXG4gIGNvbnN0IFtwZW5nZ3VuYWFuT3B0aW9uLCBzZXRQZW5nZ3VuYWFuT3B0aW9uXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbWV0ZXJBd2FsLCBzZXRNZXRlckF3YWxdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbbWV0ZXJBa2hpciwgc2V0TWV0ZXJBa2hpcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtpZFBlbGFuZ2dhbiwgc2V0SWRQZWxhbmdnYW5dID0gdXNlU3RhdGUoKTtcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFBlbmdndW5hYW4oKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XHJcbiAgICBpbml0aWFsVmFsdWVzOiB7XHJcbiAgICAgIGlkX3BlbmdndW5hYW46IDAsXHJcbiAgICAgIGlkX3BlbGFuZ2dhbjogMCxcclxuICAgICAgYnVsYW46IFwiXCIsXHJcbiAgICAgIHRhaHVuOiAwLFxyXG4gICAgICBqdW1sYWhfbWV0ZXI6IDAsXHJcbiAgICAgIHN0YXR1czogXCJcIixcclxuICAgIH0sXHJcbiAgICBvblN1Ym1pdDogKHZhbHVlcykgPT4gY3JlYXRlVGFnaWhhbih2YWx1ZXMpLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBmZXRjaFBlbmdndW5hYW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGFjY2Vzc1Rva2VuLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0dlbmVyYWwuZ2V0KFwiL3Jlc291cmNlcy9wZW5nZ3VuYWFuXCIsIHtcclxuICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgc3RhcnQ6IDAsXHJcbiAgICAgICAgICBsaW1pdDogOTk5LFxyXG4gICAgICAgICAgc2VhcmNoOiBcIkJlbHVtIEJheWFyXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIHNldFBlbmdndW5hYW5PcHRpb24oW10pO1xyXG4gICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gcmVzcG9uc2U7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGNvbnN0IHBlbmdndW5hYW5BcnIgPSBbXTtcclxuICAgICAgICBjb25zdCBwZW5nZ3VuYWFuID0gZGF0YS5kYXRhO1xyXG4gICAgICAgIGZvciAoY29uc3QgaXRlcmF0b3Igb2YgcGVuZ2d1bmFhbikge1xyXG4gICAgICAgICAgbGV0IHZhbCA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IGl0ZXJhdG9yLmlkX3BlbmdndW5hYW4sXHJcbiAgICAgICAgICAgIGxhYmVsOiAnJytpdGVyYXRvci5wZWxhbmdnYW5fZGV0YWlsLm5vbW9yX2t3aCArIFwiIC0gXCIgKyBpdGVyYXRvci5wZWxhbmdnYW5fZGV0YWlsLm5hbWFfcGVsYW5nZ2FuLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHBlbmdndW5hYW5BcnIucHVzaCh2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRQZW5nZ3VuYWFuT3B0aW9uKHBlbmdndW5hYW5BcnIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhZGRUb2FzdChlcnJvckhhbmRsZXIoZXJyb3IpLCB7IGFwcGVhcmFuY2U6IFwiZXJyb3JcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBnZXREYXRhUGVuZ2d1bmFhbkJ5SWQgPSBhc3luYyAoaWRQZW5nZ3VuYWFuKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGFjY2Vzc1Rva2VuLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0dlbmVyYWwuZ2V0KGAvcmVzb3VyY2VzL3BlbmdndW5hYW4vJHtpZFBlbmdndW5hYW59YCwge1xyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBzdGFydDogMCxcclxuICAgICAgICAgIGxpbWl0OiA5OTksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSByZXNwb25zZTtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJpZF9wZW5nZ3VuYWFuXCIsIGRhdGEuZGF0YS5pZF9wZW5nZ3VuYWFuKTtcclxuICAgICAgICBzZXRJZFBlbGFuZ2dhbihkYXRhLmRhdGEuaWRfcGVsYW5nZ2FuKVxyXG4gICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwiYnVsYW5cIiwgZGF0YS5kYXRhLmJ1bGFuKTtcclxuICAgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZShcInRhaHVuXCIsIGRhdGEuZGF0YS50YWh1bik7XHJcbiAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJzdGF0dXNcIiwgZGF0YS5kYXRhLnN0YXR1cyk7XHJcbiAgICAgICAgY29uc3QgYWtoaXIgPSBkYXRhLmRhdGEubWV0ZXJfYWtoaXI7XHJcbiAgICAgICAgY29uc3QgYXdhbCA9IGRhdGEuZGF0YS5tZXRlcl9hd2FsO1xyXG4gICAgICAgIGNvbnN0IGhhc2lsID0gYWtoaXIgLSBhd2FsO1xyXG4gICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwianVtbGFoX21ldGVyXCIsIGhhc2lsICk7XHJcbiAgICAgICAgc2V0TWV0ZXJBa2hpcihkYXRhLmRhdGEubWV0ZXJfYWtoaXIpO1xyXG4gICAgICAgIHNldE1ldGVyQXdhbChkYXRhLmRhdGEubWV0ZXJfYXdhbCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFkZFRvYXN0KGVycm9ySGFuZGxlcihlcnJvciksIHsgYXBwZWFyYW5jZTogXCJlcnJvclwiIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNyZWF0ZVRhZ2loYW4gPSBhc3luYyAodmFsdWVzKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGFjY2Vzc1Rva2VuLFxyXG4gICAgICB9O1xyXG4gICAgICB2YWx1ZXMuaWRfcGVsYW5nZ2FuID0gaWRQZWxhbmdnYW47XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NHZW5lcmFsLnBvc3QoYC9yZXNvdXJjZXMvdGFnaWhhbmAsIFxyXG4gICAgICB2YWx1ZXMsIHtcclxuICAgICAgICBoZWFkZXJzLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IHJlc3BvbnNlO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEgfHwgc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBzZXRTaG93KCFzaG93KTtcclxuICAgICAgfVxyXG4gICAgICBhZGRUb2FzdChcIkJlcmhhc2lsIHNpbXBhbiBkYXRhXCIsIHsgYXBwZWFyYW5jZTogXCJzdWNjZXNzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhZGRUb2FzdChlcnJvckhhbmRsZXIoZXJyb3IpLCB7IGFwcGVhcmFuY2U6IFwiZXJyb3JcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgY2xhc3NOYW1lPVwidy0zLzUgaC00LzUgYmxvY2sgbXgtYXV0byBweC00IG15LTNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBteC1hdXRvIHB5LTRcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtM3hsIHRleHQtYmxhY2sgbWItMTZcIj5cclxuICAgICAgICAgIFRhbWJhaCBEYXRhIFRhZ2loYW5cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fSBtZXRob2Q9XCJQT1NUXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgbXktNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1zZW1pYm9sZCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgTmFtYSBQZW5nZ3VuYVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaWxpaCBwZW5nZ3VuYWFuXCJcclxuICAgICAgICAgICAgICBvcHRpb25zPXtwZW5nZ3VuYWFuT3B0aW9ufVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJpZF9wZW5nZ3VuYWFuXCJcclxuICAgICAgICAgICAgICBpc0NsZWFyYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3BlbmdndW5hYW5PcHRpb24uZmluZChcclxuICAgICAgICAgICAgICAgICh2KSA9PiB2LnZhbHVlID09PSBmb3JtaWsudmFsdWVzLmlkX3BlbmdndW5hYW5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gZSA/IGUudmFsdWUgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgZ2V0RGF0YVBlbmdndW5hYW5CeUlkKHZhbCk7XHJcbiAgICAgICAgICAgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZShcImlkX3BlbmdndW5hYW5cIiwgdmFsKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIEJ1bGFuXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTIgcHgtMyBiZy1ncmF5LTEwMCByb3VuZGVkIGJsb2NrIHctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC1iYXNlXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiYnVsYW5cIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQnVsYW5cIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmJ1bGFufVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy5idWxhbiAmJiAoXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXJlZC01MDBcIj5cclxuICAgICAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLmJ1bGFufVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICBUYWh1blxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweS0yIHB4LTMgYmctZ3JheS0xMDAgcm91bmRlZCBibG9jayB3LWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lIHRleHQtYmFzZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInRhaHVuXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkp1bWxhaCBtZXRlclwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy50YWh1bn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMudGFodW4gJiYgKFxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yZWQtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy50YWh1bn1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXItMlwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1zZW1pYm9sZCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgTWV0ZXIgQXdhbFxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweS0yIHB4LTMgYmctZ3JheS0xMDAgcm91bmRlZCBibG9jayB3LWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lIHRleHQtYmFzZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXRlciBhd2FsXCJcclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgIHZhbHVlPXttZXRlckF3YWx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtbC0yXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICBNZXRlciBBa2hpclxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweS0yIHB4LTMgYmctZ3JheS0xMDAgcm91bmRlZCBibG9jayB3LWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lIHRleHQtYmFzZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXRlciBha2hpclwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICB2YWx1ZT17bWV0ZXJBa2hpcn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1zZW1pYm9sZCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgUGVuZ2d1bmFhbiAoTWV0ZXIpXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTIgcHgtMyBiZy1ncmF5LTEwMCByb3VuZGVkIGJsb2NrIHctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC1iYXNlXCJcclxuICAgICAgICAgICAgICBuYW1lPVwianVtbGFoX21ldGVyXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkp1bWxhaCBtZXRlclwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5qdW1sYWhfbWV0ZXJ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLmp1bWxhaF9tZXRlciAmJiAoXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXJlZC01MDBcIj5cclxuICAgICAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLmp1bWxhaF9tZXRlcn1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBteS00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICBTdGF0dXNcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBweC0zIGJnLWdyYXktMTAwIHJvdW5kZWQgYmxvY2sgdy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3RhdHVzXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5zdGF0dXN9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLnN0YXR1cyAmJiAoXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXJlZC01MDBcIj5cclxuICAgICAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLnN0YXR1c31cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWVuZCBteS00XCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KCFzaG93KX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0xMiBteC0zIHRleHQtd2hpdGUgcHktMiB0ZXh0LWNlbnRlciB3LTEvNiBmb250LXNlbWlib2xkIGJnLWdyYXktNDAwIHJvdW5kZWQgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQmF0YWxcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAvLyAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiIzQzNjFlZVwiIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHB5LTIgdGV4dC1ncmF5LTUwIGJnLWJsdWUtNTAwIHB4LTQgdGV4dC1jZW50ZXIgdy0xLzYgcm91bmRlZCBmb250LWJvbGQgY3Vyc29yLXBvaW50ZXIgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNpbXBhblxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkVGFnaWhhbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==