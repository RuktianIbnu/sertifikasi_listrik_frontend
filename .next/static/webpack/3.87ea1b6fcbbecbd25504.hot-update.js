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
      var headers, response, status;
      return C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              headers = {
                Authorization: accessToken
              };
              console.log(values.tahun);
              _context2.next = 5;
              return _helpers_global__WEBPACK_IMPORTED_MODULE_7__["axiosGeneral"].post("/resources/penggunaan", values, {
                headers: headers
              });

            case 5:
              response = _context2.sent;
              status = response.status;

              if (status === 201 || status === 200) {
                setShow(!show);
              }

              addToast("Berhasil simpan data", {
                appearance: "success"
              });
              _context2.next = 14;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](0);
              addToast(Object(_helpers_global__WEBPACK_IMPORTED_MODULE_7__["errorHandler"])(_context2.t0), {
                appearance: "error"
              });

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 11]]);
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
        lineNumber: 127,
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
            lineNumber: 132,
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
            lineNumber: 135,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "col-span-2 my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Bulan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
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
            lineNumber: 153,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "col-span-2 my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Tahun"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
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
            lineNumber: 171,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "col-span-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Meter Awal"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 193,
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
            lineNumber: 196,
            columnNumber: 13
          }, this), formik.errors.meter_awal && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
            className: "text-xs text-red-500",
            children: formik.errors.meter_awal
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "col-span-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Meter Akhir"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 211,
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
            lineNumber: 214,
            columnNumber: 13
          }, this), formik.errors.meter_akhir && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
            className: "text-xs text-red-500",
            children: formik.errors.meter_akhir
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 210,
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
            lineNumber: 229,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
            type: "submit" //   style={{ background: "#4361ee" }}
            ,
            className: "inline-block py-2 text-gray-50 bg-blue-500 px-4 text-center w-1/6 rounded font-bold cursor-pointer focus:outline-none",
            children: "Simpan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 125,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wZW5nZ3VuYWFuL0FkZFBlbmdndW5hYW4uanMiXSwibmFtZXMiOlsiQ2FyZCIsInN0eWxlZCIsImRpdiIsIkFkZFBlbmdndW5hYW4iLCJzaG93Iiwic2V0U2hvdyIsImFjY2Vzc1Rva2VuIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZVRvYXN0cyIsImFkZFRvYXN0IiwidXNlU3RhdGUiLCJwZWxhbmdnYW5PcHRpb24iLCJzZXRQZWxhbmdnYW5PcHRpb24iLCJsaXN0WWVhcnMiLCJzZXRMaXN0WWVhcnMiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJ5ZWFyIiwic2V0WWVhciIsIm9wdGlvbnNCdWxhbiIsInZhbHVlIiwibGFiZWwiLCJ1c2VFZmZlY3QiLCJmZXRjaFBlbGFuZ2dhbiIsIkxpc3RZZWFyIiwiZm9ybWlrIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsImlkX3BlbGFuZ2dhbiIsInBhcnNlSW50IiwiYnVsYW4iLCJ0YWh1biIsIm1ldGVyX2F3YWwiLCJtZXRlcl9ha2hpciIsIm9uU3VibWl0IiwidmFsdWVzIiwiY3JlYXRlUGVuZ2d1bmFhbiIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYXhpb3NHZW5lcmFsIiwiZ2V0IiwicGFyYW1zIiwic3RhcnQiLCJsaW1pdCIsInJlc3BvbnNlIiwic3RhdHVzIiwiZGF0YSIsInBlbGFuZ2dhbkFyciIsInBlbGFuZ2dhbiIsIml0ZXJhdG9yIiwidmFsIiwibmFtYV9wZWxhbmdnYW4iLCJwdXNoIiwiZXJyb3JIYW5kbGVyIiwiYXBwZWFyYW5jZSIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwibWF4T2Zmc2V0IiwidGhpc1llYXIiLCJhbGxZZWFycyIsImVycm9yIiwiaGFuZGxlU3VibWl0IiwiZmluZCIsInYiLCJlIiwic2V0RmllbGRWYWx1ZSIsImhhbmRsZUNoYW5nZSIsImVycm9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Ljg3ZWExYjZmY2JiZWNiZDI1NTA0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBheGlvc0dlbmVyYWwsIGVycm9ySGFuZGxlciB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2dsb2JhbFwiO1xyXG5pbXBvcnQgeyB1c2VUb2FzdHMgfSBmcm9tIFwicmVhY3QtdG9hc3Qtbm90aWZpY2F0aW9uc1wiO1xyXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBDYXJkID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxNXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG5gO1xyXG5cclxuZnVuY3Rpb24gQWRkUGVuZ2d1bmFhbih7IHNob3csIHNldFNob3cgfSkge1xyXG4gIGNvbnN0IGFjY2Vzc1Rva2VuID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hY2Nlc3NUb2tlbik7XHJcbiAgY29uc3QgeyBhZGRUb2FzdCB9ID0gdXNlVG9hc3RzKCk7XHJcbiAgY29uc3QgW3BlbGFuZ2dhbk9wdGlvbiwgc2V0UGVsYW5nZ2FuT3B0aW9uXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbGlzdFllYXJzLCBzZXRMaXN0WWVhcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt5ZWFyLCBzZXRZZWFyXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSk7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnNCdWxhbiA9IFtcclxuICAgIHsgdmFsdWU6ICdKYW51YXJ5JywgbGFiZWw6ICdKYW51YXJ5JyB9LFxyXG4gICAgeyB2YWx1ZTogJ0ZlYnJ1YXJ5JywgbGFiZWw6ICdGZWJydWFyeScgfSxcclxuICAgIHsgdmFsdWU6ICdNYXJjaCcsIGxhYmVsOiAnTWFyY2gnIH0sXHJcbiAgICB7IHZhbHVlOiAnQXByaWwnLCBsYWJlbDogJ0FwcmlsJyB9LFxyXG4gICAgeyB2YWx1ZTogJ01heScsIGxhYmVsOiAnTWF5JyB9LFxyXG4gICAgeyB2YWx1ZTogJ0p1bmUnLCBsYWJlbDogJ0p1bmUnIH0sXHJcbiAgICB7IHZhbHVlOiAnSnVseScsIGxhYmVsOiAnSnVseScgfSxcclxuICAgIHsgdmFsdWU6ICdBdWd1c3QnLCBsYWJlbDogJ0F1Z3VzdCcgfSxcclxuICAgIHsgdmFsdWU6ICdTZXB0ZW1iZXInLCBsYWJlbDogJ1NlcHRlbWJlcicgfSxcclxuICAgIHsgdmFsdWU6ICdPY3RvYmVyJywgbGFiZWw6ICdPY3RvYmVyJyB9LFxyXG4gICAgeyB2YWx1ZTogJ05vdmVtYmVyJywgbGFiZWw6ICdOb3ZlbWJlcicgfSxcclxuICAgIHsgdmFsdWU6ICdEZWNlbWJlcicsIGxhYmVsOiAnRGVjZW1iZXInIH1cclxuICBdXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFBlbGFuZ2dhbigpO1xyXG4gICAgTGlzdFllYXIoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XHJcbiAgICBpbml0aWFsVmFsdWVzOiB7XHJcbiAgICAgIGlkX3BlbGFuZ2dhbjogcGFyc2VJbnQoMCksXHJcbiAgICAgIGJ1bGFuOiBcIlwiLFxyXG4gICAgICB0YWh1bjogXCJcIixcclxuICAgICAgbWV0ZXJfYXdhbDogXCJcIixcclxuICAgICAgbWV0ZXJfYWtoaXI6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgb25TdWJtaXQ6ICh2YWx1ZXMpID0+IGNyZWF0ZVBlbmdndW5hYW4odmFsdWVzKSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZmV0Y2hQZWxhbmdnYW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGFjY2Vzc1Rva2VuLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0dlbmVyYWwuZ2V0KFwiL3Jlc291cmNlcy9wZWxhbmdnYW5cIiwge1xyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBzdGFydDogMCxcclxuICAgICAgICAgIGxpbWl0OiA5OTksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIHNldFBlbGFuZ2dhbk9wdGlvbihbXSk7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSByZXNwb25zZTtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgY29uc3QgcGVsYW5nZ2FuQXJyID0gW107XHJcbiAgICAgICAgY29uc3QgcGVsYW5nZ2FuID0gZGF0YS5kYXRhO1xyXG4gICAgICAgIGZvciAoY29uc3QgaXRlcmF0b3Igb2YgcGVsYW5nZ2FuKSB7XHJcbiAgICAgICAgICBsZXQgdmFsID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogaXRlcmF0b3IuaWRfcGVsYW5nZ2FuLFxyXG4gICAgICAgICAgICBsYWJlbDogaXRlcmF0b3IubmFtYV9wZWxhbmdnYW4sXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgcGVsYW5nZ2FuQXJyLnB1c2godmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0UGVsYW5nZ2FuT3B0aW9uKHBlbGFuZ2dhbkFycik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFkZFRvYXN0KGVycm9ySGFuZGxlcihlcnJvciksIHsgYXBwZWFyYW5jZTogXCJlcnJvclwiIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNyZWF0ZVBlbmdndW5hYW4gPSBhc3luYyAodmFsdWVzKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGFjY2Vzc1Rva2VuLFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZXMudGFodW4pXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NHZW5lcmFsLnBvc3QoYC9yZXNvdXJjZXMvcGVuZ2d1bmFhbmAsIFxyXG4gICAgICB2YWx1ZXMsIHtcclxuICAgICAgICBoZWFkZXJzLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IHJlc3BvbnNlO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEgfHwgc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBzZXRTaG93KCFzaG93KTtcclxuICAgICAgfVxyXG4gICAgICBhZGRUb2FzdChcIkJlcmhhc2lsIHNpbXBhbiBkYXRhXCIsIHsgYXBwZWFyYW5jZTogXCJzdWNjZXNzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhZGRUb2FzdChlcnJvckhhbmRsZXIoZXJyb3IpLCB7IGFwcGVhcmFuY2U6IFwiZXJyb3JcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBMaXN0WWVhciA9ICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IG1heE9mZnNldCA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XTtcclxuICAgICAgY29uc3QgdGhpc1llYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgIGNvbnN0IGFsbFllYXJzID0gW107XHJcbiAgICAgIGZvciAoY29uc3QgaXRlcmF0b3Igb2YgbWF4T2Zmc2V0KSB7XHJcbiAgICAgICAgbGV0IHZhbCA9IHtcclxuICAgICAgICAgIHZhbHVlOiB0aGlzWWVhciAtIGl0ZXJhdG9yLFxyXG4gICAgICAgICAgbGFiZWw6IHRoaXNZZWFyIC0gaXRlcmF0b3IsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBhbGxZZWFycy5wdXNoKHZhbCk7XHJcbiAgICAgIH1cclxuICAgICAgc2V0TGlzdFllYXJzKGFsbFllYXJzKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFkZFRvYXN0KGVycm9ySGFuZGxlcihlcnJvciksIHsgYXBwZWFyYW5jZTogXCJlcnJvclwiIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCBjbGFzc05hbWU9XCJ3LTMvNSBoLTQvNSBibG9jayBteC1hdXRvIHB4LTQgbXktM1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIG14LWF1dG8gcHktNFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0zeGwgdGV4dC1ibGFjayBtYi0xNlwiPlxyXG4gICAgICAgICAgVGFtYmFoIERhdGEgUGVuZ2d1bmFhblxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9IG1ldGhvZD1cIlBPU1RcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgbXktNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1zZW1pYm9sZCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgUGVsYW5nZ2FuXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBpbGloIHBlbGFuZ2dhblwiXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17cGVsYW5nZ2FuT3B0aW9ufVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJpZF9wZWxhbmdnYW5cIlxyXG4gICAgICAgICAgICAgIGlzQ2xlYXJhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cGVsYW5nZ2FuT3B0aW9uLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAodikgPT4gdi52YWx1ZSA9PT0gZm9ybWlrLnZhbHVlcy5pZF9wZWxhbmdnYW5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gZSA/IGUudmFsdWUgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJpZF9wZWxhbmdnYW5cIiwgdmFsKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgbXktNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1zZW1pYm9sZCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgQnVsYW5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGlsaWggYnVsYW5cIlxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnNCdWxhbn1cclxuICAgICAgICAgICAgICBuYW1lPVwiYnVsYW5cIlxyXG4gICAgICAgICAgICAgIGlzQ2xlYXJhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17b3B0aW9uc0J1bGFuLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAodikgPT4gdi52YWx1ZSA9PT0gZm9ybWlrLnZhbHVlcy5idWxhblxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBlID8gZS52YWx1ZSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZShcImJ1bGFuXCIsIHZhbCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIG15LTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIFRhaHVuXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctYXV0b1wiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBpbGloIFRhaHVuXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0YWh1blwiXHJcbiAgICAgICAgICAgICAgICBpc0NsZWFyYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e2xpc3RZZWFyc31cclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17b3B0aW9uc0J1bGFuLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgKHYpID0+IHYudmFsdWUgPT09IGZvcm1pay52YWx1ZXMudGFodW5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsID0gZSA/IGUudmFsdWUgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwidGFodW5cIiwgdmFsKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICBjb25zdCB2YWwgPSBlID8gZS52YWx1ZSA6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAvLyAgIHNldFllYXIodmFsKTtcclxuICAgICAgICAgICAgICAgIC8vIH19XHJcbiAgICAgICAgICAgICAgICAvLyB2YWx1ZT17bGlzdFllYXJzLmZpbmQoKG9wKSA9PiBvcC52YWx1ZSA9PT0geWVhcil9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIE1ldGVyIEF3YWxcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBweC0zIGJnLWdyYXktMTAwIHJvdW5kZWQgYmxvY2sgdy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJtZXRlcl9hd2FsXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1ldGVyIGF3YWxcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLm1ldGVyX2F3YWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLm1ldGVyX2F3YWwgJiYgKFxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yZWQtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy5tZXRlcl9hd2FsfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICBNZXRlciBBa2hpclxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweS0yIHB4LTMgYmctZ3JheS0xMDAgcm91bmRlZCBibG9jayB3LWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lIHRleHQtYmFzZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm1ldGVyX2FraGlyXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1ldGVyIGFraGlyXCJcclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5tZXRlcl9ha2hpcn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMubWV0ZXJfYWtoaXIgJiYgKFxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yZWQtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy5tZXRlcl9ha2hpcn1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWVuZCBteS00XCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KCFzaG93KX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0xMiBteC0zIHRleHQtd2hpdGUgcHktMiB0ZXh0LWNlbnRlciB3LTEvNiBmb250LXNlbWlib2xkIGJnLWdyYXktNDAwIHJvdW5kZWQgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQmF0YWxcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAvLyAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiIzQzNjFlZVwiIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHB5LTIgdGV4dC1ncmF5LTUwIGJnLWJsdWUtNTAwIHB4LTQgdGV4dC1jZW50ZXIgdy0xLzYgcm91bmRlZCBmb250LWJvbGQgY3Vyc29yLXBvaW50ZXIgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNpbXBhblxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkUGVuZ2d1bmFhbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==