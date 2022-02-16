webpackHotUpdate_N_E(3,{

/***/ "./components/penggunaan/AddPenggunaan.js":
/*!************************************************!*\
  !*** ./components/penggunaan/AddPenggunaan.js ***!
  \************************************************/
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
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");





var _jsxFileName = "C:\\project\\sertifikasi_listrik_frontend\\components\\penggunaan\\AddPenggunaan.js",
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









var Card = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject());
_c = Card;

function AddPenggunaan(_ref) {
  _s();

  var show = _ref.show,
      setShow = _ref.setShow;
  var accessToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.accessToken;
  });

  var _useToasts = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_8__["useToasts"])(),
      addToast = _useToasts.addToast;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      pelangganOption = _useState[0],
      setPelangganOption = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      listYears = _useState2[0],
      setListYears = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(new Date().getFullYear()),
      year = _useState3[0],
      setYear = _useState3[1];

  var optionsBulan = [{
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
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    fetchPelanggan();
    ListYear();
  }, []);
  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_10__["useFormik"])({
    initialValues: {
      id_pelanggan: parseInt(0),
      bulan: "",
      tahun: "",
      meter_awal: "",
      meter_akhir: ""
    },
    onSubmit: function onSubmit(values) {
      return createPenggunaan(values);
    }
  });

  var fetchPelanggan = /*#__PURE__*/function () {
    var _ref2 = Object(C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var headers, response, status, data, pelangganArr, pelanggan, _iterator, _step, iterator, val;

      return C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              headers = {
                Authorization: accessToken
              };
              _context.next = 4;
              return _helpers_global__WEBPACK_IMPORTED_MODULE_7__["axiosGeneral"].get("/resources/pelanggan", {
                headers: headers,
                params: {
                  start: 0,
                  limit: 999
                }
              });

            case 4:
              response = _context.sent;
              setPelangganOption([]);
              status = response.status, data = response.data;

              if (status === 200) {
                pelangganArr = [];
                pelanggan = data.data;
                _iterator = _createForOfIteratorHelper(pelanggan);

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    iterator = _step.value;
                    val = {
                      value: iterator.id_pelanggan,
                      label: iterator.nama_pelanggan
                    };
                    pelangganArr.push(val);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                setPelangganOption(pelangganArr);
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

    return function fetchPelanggan() {
      return _ref2.apply(this, arguments);
    };
  }();

  var createPenggunaan = /*#__PURE__*/function () {
    var _ref3 = Object(C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(values) {
      var headers, tahun, response, status;
      return C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              headers = {
                Authorization: accessToken
              };
              tahun = values.tahun;
              values.tahun = toString(tahun);
              _context2.next = 6;
              return _helpers_global__WEBPACK_IMPORTED_MODULE_7__["axiosGeneral"].post("/resources/penggunaan", values, {
                headers: headers
              });

            case 6:
              response = _context2.sent;
              status = response.status;

              if (status === 201 || status === 200) {
                setShow(!show);
              }

              addToast("Berhasil simpan data", {
                appearance: "success"
              });
              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](0);
              addToast(Object(_helpers_global__WEBPACK_IMPORTED_MODULE_7__["errorHandler"])(_context2.t0), {
                appearance: "error"
              });

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 12]]);
    }));

    return function createPenggunaan(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var ListYear = function ListYear() {
    try {
      var maxOffset = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      var thisYear = new Date().getFullYear();
      var allYears = [];

      for (var _i = 0, _maxOffset = maxOffset; _i < _maxOffset.length; _i++) {
        var iterator = _maxOffset[_i];
        var val = {
          value: thisYear - iterator,
          label: thisYear - iterator
        };
        allYears.push(val);
      }

      setListYears(allYears);
    } catch (error) {
      addToast(Object(_helpers_global__WEBPACK_IMPORTED_MODULE_7__["errorHandler"])(error), {
        appearance: "error"
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Card, {
    className: "w-3/5 h-4/5 block mx-auto px-4 my-3",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "block mx-auto py-4",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
        className: "font-bold text-3xl text-black mb-16",
        children: "Tambah Data Penggunaan"
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
            children: "Pelanggan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_4__["default"], {
            placeholder: "Pilih pelanggan",
            options: pelangganOption,
            name: "id_pelanggan",
            isClearable: true,
            defaultValue: pelangganOption.find(function (v) {
              return v.value === formik.values.id_pelanggan;
            }),
            onChange: function onChange(e) {
              var val = e ? e.value : null;
              formik.setFieldValue("id_pelanggan", val);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "col-span-2 my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Bulan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_4__["default"], {
            placeholder: "Pilih bulan",
            options: optionsBulan,
            name: "bulan",
            isClearable: true,
            defaultValue: optionsBulan.find(function (v) {
              return v.value === formik.values.bulan;
            }),
            onChange: function onChange(e) {
              var val = e ? e.value : null;
              formik.setFieldValue("bulan", val);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "col-span-2 my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Tahun"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: "w-auto",
            placeholder: "Pilih Tahun",
            name: "tahun",
            isClearable: true,
            options: listYears,
            defaultValue: optionsBulan.find(function (v) {
              return v.value === formik.values.tahun;
            }),
            onChange: function onChange(e) {
              var val = e ? e.value : null;
              formik.setFieldValue("tahun", val);
            } // onChange={(e) => {
            //   const val = e ? e.value : "";
            //   setYear(val);
            // }}
            // value={listYears.find((op) => op.value === year)}

          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "col-span-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Meter Awal"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
            className: "py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base",
            name: "meter_awal",
            placeholder: "Meter awal",
            type: "number",
            value: formik.values.meter_awal,
            onChange: formik.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 13
          }, this), formik.errors.meter_awal && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
            className: "text-xs text-red-500",
            children: formik.errors.meter_awal
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "col-span-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Meter Akhir"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
            className: "py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base",
            name: "meter_akhir",
            placeholder: "Meter akhir",
            type: "number",
            value: formik.values.meter_akhir,
            onChange: formik.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 13
          }, this), formik.errors.meter_akhir && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
            className: "text-xs text-red-500",
            children: formik.errors.meter_akhir
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 211,
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
            lineNumber: 230,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
            type: "submit" //   style={{ background: "#4361ee" }}
            ,
            className: "inline-block py-2 text-gray-50 bg-blue-500 px-4 text-center w-1/6 rounded font-bold cursor-pointer focus:outline-none",
            children: "Simpan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 229,
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

_s(AddPenggunaan, "mYgWAVWYUcgBQKIMR77mjy7G/AM=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], react_toast_notifications__WEBPACK_IMPORTED_MODULE_8__["useToasts"], formik__WEBPACK_IMPORTED_MODULE_10__["useFormik"]];
});

_c2 = AddPenggunaan;
/* harmony default export */ __webpack_exports__["default"] = (AddPenggunaan);

var _c, _c2;

$RefreshReg$(_c, "Card");
$RefreshReg$(_c2, "AddPenggunaan");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wZW5nZ3VuYWFuL0FkZFBlbmdndW5hYW4uanMiXSwibmFtZXMiOlsiQ2FyZCIsInN0eWxlZCIsImRpdiIsIkFkZFBlbmdndW5hYW4iLCJzaG93Iiwic2V0U2hvdyIsImFjY2Vzc1Rva2VuIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZVRvYXN0cyIsImFkZFRvYXN0IiwidXNlU3RhdGUiLCJwZWxhbmdnYW5PcHRpb24iLCJzZXRQZWxhbmdnYW5PcHRpb24iLCJsaXN0WWVhcnMiLCJzZXRMaXN0WWVhcnMiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJ5ZWFyIiwic2V0WWVhciIsIm9wdGlvbnNCdWxhbiIsInZhbHVlIiwibGFiZWwiLCJ1c2VFZmZlY3QiLCJmZXRjaFBlbGFuZ2dhbiIsIkxpc3RZZWFyIiwiZm9ybWlrIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsImlkX3BlbGFuZ2dhbiIsInBhcnNlSW50IiwiYnVsYW4iLCJ0YWh1biIsIm1ldGVyX2F3YWwiLCJtZXRlcl9ha2hpciIsIm9uU3VibWl0IiwidmFsdWVzIiwiY3JlYXRlUGVuZ2d1bmFhbiIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYXhpb3NHZW5lcmFsIiwiZ2V0IiwicGFyYW1zIiwic3RhcnQiLCJsaW1pdCIsInJlc3BvbnNlIiwic3RhdHVzIiwiZGF0YSIsInBlbGFuZ2dhbkFyciIsInBlbGFuZ2dhbiIsIml0ZXJhdG9yIiwidmFsIiwibmFtYV9wZWxhbmdnYW4iLCJwdXNoIiwiZXJyb3JIYW5kbGVyIiwiYXBwZWFyYW5jZSIsInRvU3RyaW5nIiwicG9zdCIsIm1heE9mZnNldCIsInRoaXNZZWFyIiwiYWxsWWVhcnMiLCJlcnJvciIsImhhbmRsZVN1Ym1pdCIsImZpbmQiLCJ2IiwiZSIsInNldEZpZWxkVmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJlcnJvcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrLzMuZDhlMzdlYzBmYThiMzQ0YTk1YzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGF4aW9zR2VuZXJhbCwgZXJyb3JIYW5kbGVyIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvZ2xvYmFsXCI7XHJcbmltcG9ydCB7IHVzZVRvYXN0cyB9IGZyb20gXCJyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zXCI7XHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCI7XHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwcHggNXB4IDE1cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBBZGRQZW5nZ3VuYWFuKHsgc2hvdywgc2V0U2hvdyB9KSB7XHJcbiAgY29uc3QgYWNjZXNzVG9rZW4gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFjY2Vzc1Rva2VuKTtcclxuICBjb25zdCB7IGFkZFRvYXN0IH0gPSB1c2VUb2FzdHMoKTtcclxuICBjb25zdCBbcGVsYW5nZ2FuT3B0aW9uLCBzZXRQZWxhbmdnYW5PcHRpb25dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsaXN0WWVhcnMsIHNldExpc3RZZWFyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3llYXIsIHNldFllYXJdID0gdXNlU3RhdGUobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpKTtcclxuXHJcbiAgY29uc3Qgb3B0aW9uc0J1bGFuID0gW1xyXG4gICAgeyB2YWx1ZTogJ0phbnVhcnknLCBsYWJlbDogJ0phbnVhcnknIH0sXHJcbiAgICB7IHZhbHVlOiAnRmVicnVhcnknLCBsYWJlbDogJ0ZlYnJ1YXJ5JyB9LFxyXG4gICAgeyB2YWx1ZTogJ01hcmNoJywgbGFiZWw6ICdNYXJjaCcgfSxcclxuICAgIHsgdmFsdWU6ICdBcHJpbCcsIGxhYmVsOiAnQXByaWwnIH0sXHJcbiAgICB7IHZhbHVlOiAnTWF5JywgbGFiZWw6ICdNYXknIH0sXHJcbiAgICB7IHZhbHVlOiAnSnVuZScsIGxhYmVsOiAnSnVuZScgfSxcclxuICAgIHsgdmFsdWU6ICdKdWx5JywgbGFiZWw6ICdKdWx5JyB9LFxyXG4gICAgeyB2YWx1ZTogJ0F1Z3VzdCcsIGxhYmVsOiAnQXVndXN0JyB9LFxyXG4gICAgeyB2YWx1ZTogJ1NlcHRlbWJlcicsIGxhYmVsOiAnU2VwdGVtYmVyJyB9LFxyXG4gICAgeyB2YWx1ZTogJ09jdG9iZXInLCBsYWJlbDogJ09jdG9iZXInIH0sXHJcbiAgICB7IHZhbHVlOiAnTm92ZW1iZXInLCBsYWJlbDogJ05vdmVtYmVyJyB9LFxyXG4gICAgeyB2YWx1ZTogJ0RlY2VtYmVyJywgbGFiZWw6ICdEZWNlbWJlcicgfVxyXG4gIF1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoUGVsYW5nZ2FuKCk7XHJcbiAgICBMaXN0WWVhcigpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcclxuICAgIGluaXRpYWxWYWx1ZXM6IHtcclxuICAgICAgaWRfcGVsYW5nZ2FuOiBwYXJzZUludCgwKSxcclxuICAgICAgYnVsYW46IFwiXCIsXHJcbiAgICAgIHRhaHVuOiBcIlwiLFxyXG4gICAgICBtZXRlcl9hd2FsOiBcIlwiLFxyXG4gICAgICBtZXRlcl9ha2hpcjogXCJcIixcclxuICAgIH0sXHJcbiAgICBvblN1Ym1pdDogKHZhbHVlcykgPT4gY3JlYXRlUGVuZ2d1bmFhbih2YWx1ZXMpLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBmZXRjaFBlbGFuZ2dhbiA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYWNjZXNzVG9rZW4sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zR2VuZXJhbC5nZXQoXCIvcmVzb3VyY2VzL3BlbGFuZ2dhblwiLCB7XHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICAgICAgbGltaXQ6IDk5OSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgc2V0UGVsYW5nZ2FuT3B0aW9uKFtdKTtcclxuICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBjb25zdCBwZWxhbmdnYW5BcnIgPSBbXTtcclxuICAgICAgICBjb25zdCBwZWxhbmdnYW4gPSBkYXRhLmRhdGE7XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVyYXRvciBvZiBwZWxhbmdnYW4pIHtcclxuICAgICAgICAgIGxldCB2YWwgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBpdGVyYXRvci5pZF9wZWxhbmdnYW4sXHJcbiAgICAgICAgICAgIGxhYmVsOiBpdGVyYXRvci5uYW1hX3BlbGFuZ2dhbixcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBwZWxhbmdnYW5BcnIucHVzaCh2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRQZWxhbmdnYW5PcHRpb24ocGVsYW5nZ2FuQXJyKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWRkVG9hc3QoZXJyb3JIYW5kbGVyKGVycm9yKSwgeyBhcHBlYXJhbmNlOiBcImVycm9yXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY3JlYXRlUGVuZ2d1bmFhbiA9IGFzeW5jICh2YWx1ZXMpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYWNjZXNzVG9rZW4sXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IHRhaHVuID0gdmFsdWVzLnRhaHVuXHJcbiAgICAgIHZhbHVlcy50YWh1biA9IHRvU3RyaW5nKHRhaHVuKVxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zR2VuZXJhbC5wb3N0KGAvcmVzb3VyY2VzL3BlbmdndW5hYW5gLCBcclxuICAgICAgdmFsdWVzLCB7XHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSByZXNwb25zZTtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxIHx8IHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgc2V0U2hvdyghc2hvdyk7XHJcbiAgICAgIH1cclxuICAgICAgYWRkVG9hc3QoXCJCZXJoYXNpbCBzaW1wYW4gZGF0YVwiLCB7IGFwcGVhcmFuY2U6IFwic3VjY2Vzc1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWRkVG9hc3QoZXJyb3JIYW5kbGVyKGVycm9yKSwgeyBhcHBlYXJhbmNlOiBcImVycm9yXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgTGlzdFllYXIgPSAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBtYXhPZmZzZXQgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV07XHJcbiAgICAgIGNvbnN0IHRoaXNZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICBjb25zdCBhbGxZZWFycyA9IFtdO1xyXG4gICAgICBmb3IgKGNvbnN0IGl0ZXJhdG9yIG9mIG1heE9mZnNldCkge1xyXG4gICAgICAgIGxldCB2YWwgPSB7XHJcbiAgICAgICAgICB2YWx1ZTogdGhpc1llYXIgLSBpdGVyYXRvcixcclxuICAgICAgICAgIGxhYmVsOiB0aGlzWWVhciAtIGl0ZXJhdG9yLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgYWxsWWVhcnMucHVzaCh2YWwpO1xyXG4gICAgICB9XHJcbiAgICAgIHNldExpc3RZZWFycyhhbGxZZWFycyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhZGRUb2FzdChlcnJvckhhbmRsZXIoZXJyb3IpLCB7IGFwcGVhcmFuY2U6IFwiZXJyb3JcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgY2xhc3NOYW1lPVwidy0zLzUgaC00LzUgYmxvY2sgbXgtYXV0byBweC00IG15LTNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBteC1hdXRvIHB5LTRcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtM3hsIHRleHQtYmxhY2sgbWItMTZcIj5cclxuICAgICAgICAgIFRhbWJhaCBEYXRhIFBlbmdndW5hYW5cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fSBtZXRob2Q9XCJQT1NUXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIG15LTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIFBlbGFuZ2dhblxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaWxpaCBwZWxhbmdnYW5cIlxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3BlbGFuZ2dhbk9wdGlvbn1cclxuICAgICAgICAgICAgICBuYW1lPVwiaWRfcGVsYW5nZ2FuXCJcclxuICAgICAgICAgICAgICBpc0NsZWFyYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3BlbGFuZ2dhbk9wdGlvbi5maW5kKFxyXG4gICAgICAgICAgICAgICAgKHYpID0+IHYudmFsdWUgPT09IGZvcm1pay52YWx1ZXMuaWRfcGVsYW5nZ2FuXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGUgPyBlLnZhbHVlIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwiaWRfcGVsYW5nZ2FuXCIsIHZhbCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIG15LTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIEJ1bGFuXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBpbGloIGJ1bGFuXCJcclxuICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zQnVsYW59XHJcbiAgICAgICAgICAgICAgbmFtZT1cImJ1bGFuXCJcclxuICAgICAgICAgICAgICBpc0NsZWFyYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e29wdGlvbnNCdWxhbi5maW5kKFxyXG4gICAgICAgICAgICAgICAgKHYpID0+IHYudmFsdWUgPT09IGZvcm1pay52YWx1ZXMuYnVsYW5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gZSA/IGUudmFsdWUgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJidWxhblwiLCB2YWwpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBteS00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICBUYWh1blxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaWxpaCBUYWh1blwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwidGFodW5cIlxyXG4gICAgICAgICAgICAgICAgaXNDbGVhcmFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtsaXN0WWVhcnN9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e29wdGlvbnNCdWxhbi5maW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICh2KSA9PiB2LnZhbHVlID09PSBmb3JtaWsudmFsdWVzLnRhaHVuXHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGUgPyBlLnZhbHVlIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZShcInRhaHVuXCIsIHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgY29uc3QgdmFsID0gZSA/IGUudmFsdWUgOiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgLy8gICBzZXRZZWFyKHZhbCk7XHJcbiAgICAgICAgICAgICAgICAvLyB9fVxyXG4gICAgICAgICAgICAgICAgLy8gdmFsdWU9e2xpc3RZZWFycy5maW5kKChvcCkgPT4gb3AudmFsdWUgPT09IHllYXIpfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICBNZXRlciBBd2FsXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTIgcHgtMyBiZy1ncmF5LTEwMCByb3VuZGVkIGJsb2NrIHctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC1iYXNlXCJcclxuICAgICAgICAgICAgICBuYW1lPVwibWV0ZXJfYXdhbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXRlciBhd2FsXCJcclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5tZXRlcl9hd2FsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy5tZXRlcl9hd2FsICYmIChcclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtcmVkLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMubWV0ZXJfYXdhbH1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1zZW1pYm9sZCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgTWV0ZXIgQWtoaXJcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBweC0zIGJnLWdyYXktMTAwIHJvdW5kZWQgYmxvY2sgdy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJtZXRlcl9ha2hpclwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXRlciBha2hpclwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMubWV0ZXJfYWtoaXJ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLm1ldGVyX2FraGlyICYmIChcclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtcmVkLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMubWV0ZXJfYWtoaXJ9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1lbmQgbXktNFwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvdyghc2hvdyl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMTIgbXgtMyB0ZXh0LXdoaXRlIHB5LTIgdGV4dC1jZW50ZXIgdy0xLzYgZm9udC1zZW1pYm9sZCBiZy1ncmF5LTQwMCByb3VuZGVkIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEJhdGFsXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgLy8gICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIiM0MzYxZWVcIiB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBweS0yIHRleHQtZ3JheS01MCBiZy1ibHVlLTUwMCBweC00IHRleHQtY2VudGVyIHctMS82IHJvdW5kZWQgZm9udC1ib2xkIGN1cnNvci1wb2ludGVyIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTaW1wYW5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZFBlbmdndW5hYW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=