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

  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    fetchPelanggan();
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
              _context2.next = 4;
              return _helpers_global__WEBPACK_IMPORTED_MODULE_7__["axiosGeneral"].post("/resources/penggunaan", values, {
                headers: headers
              });

            case 4:
              response = _context2.sent;
              status = response.status;

              if (status === 201 || status === 200) {
                setShow(!show);
              }

              addToast("Berhasil simpan data", {
                appearance: "success"
              });
              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              addToast(Object(_helpers_global__WEBPACK_IMPORTED_MODULE_7__["errorHandler"])(_context2.t0), {
                appearance: "error"
              });

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 10]]);
    }));

    return function createPenggunaan(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Card, {
    className: "w-3/5 h-4/5 block mx-auto px-4 my-3",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "block mx-auto py-4",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
        className: "font-bold text-3xl text-black mb-16",
        children: "Tambah Data Penggunaan"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
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
            lineNumber: 97,
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
            lineNumber: 100,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "col-span-2 my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Bulan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_4__["default"], {
            placeholder: "Pilih bulan",
            options: months,
            name: "bulan",
            isClearable: true,
            defaultValue: months.find(function (v) {
              return v.value === formik.values.bulan;
            }),
            onChange: function onChange(e) {
              var val = e ? e.value : null;
              formik.setFieldValue("bulan", val);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "col-span-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Meter Awal"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
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
            lineNumber: 136,
            columnNumber: 13
          }, this), formik.errors.meter_awal && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
            className: "text-xs text-red-500",
            children: formik.errors.meter_awal
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 15
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
            children: "Meter Akhir"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
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
            lineNumber: 154,
            columnNumber: 13
          }, this), formik.errors.meter_akhir && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
            className: "text-xs text-red-500",
            children: formik.errors.meter_akhir
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 150,
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
            lineNumber: 169,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
            type: "submit" //   style={{ background: "#4361ee" }}
            ,
            className: "inline-block py-2 text-gray-50 bg-blue-500 px-4 text-center w-1/6 rounded font-bold cursor-pointer focus:outline-none",
            children: "Simpan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 5
  }, this);
}

_s(AddPenggunaan, "RQBqLsreOWMHJPoAot69yMR2uzA=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wZW5nZ3VuYWFuL0FkZFBlbmdndW5hYW4uanMiXSwibmFtZXMiOlsiQ2FyZCIsInN0eWxlZCIsImRpdiIsIkFkZFBlbmdndW5hYW4iLCJzaG93Iiwic2V0U2hvdyIsImFjY2Vzc1Rva2VuIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZVRvYXN0cyIsImFkZFRvYXN0IiwidXNlU3RhdGUiLCJwZWxhbmdnYW5PcHRpb24iLCJzZXRQZWxhbmdnYW5PcHRpb24iLCJtb250aHMiLCJ1c2VFZmZlY3QiLCJmZXRjaFBlbGFuZ2dhbiIsImZvcm1payIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJpZF9wZWxhbmdnYW4iLCJwYXJzZUludCIsImJ1bGFuIiwidGFodW4iLCJtZXRlcl9hd2FsIiwibWV0ZXJfYWtoaXIiLCJvblN1Ym1pdCIsInZhbHVlcyIsImNyZWF0ZVBlbmdndW5hYW4iLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImF4aW9zR2VuZXJhbCIsImdldCIsInBhcmFtcyIsInN0YXJ0IiwibGltaXQiLCJyZXNwb25zZSIsInN0YXR1cyIsImRhdGEiLCJwZWxhbmdnYW5BcnIiLCJwZWxhbmdnYW4iLCJpdGVyYXRvciIsInZhbCIsInZhbHVlIiwibGFiZWwiLCJuYW1hX3BlbGFuZ2dhbiIsInB1c2giLCJlcnJvckhhbmRsZXIiLCJhcHBlYXJhbmNlIiwicG9zdCIsImhhbmRsZVN1Ym1pdCIsImZpbmQiLCJ2IiwiZSIsInNldEZpZWxkVmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJlcnJvcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLDBEQUFNLENBQUNDLEdBQVYsbUJBQVY7S0FBTUYsSTs7QUFNTixTQUFTRyxhQUFU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O0FBQUEsc0JBQ0dSLE1BQU0sQ0FBQ3VDLE1BQVAsQ0FBYy9CO0FBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXZERixlQXlFRTtBQUFLLG1CQUFTLEVBQUMsZ0NBQWY7QUFBQSxrQ0FDRTtBQUNFLG1CQUFPLEVBQUU7QUFBQSxxQkFBTXBCLE9BQU8sQ0FBQyxDQUFDRCxJQUFGLENBQWI7QUFBQSxhQURYO0FBRUUscUJBQVMsRUFBQywrRkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQU9FO0FBQ0UsZ0JBQUksRUFBQyxRQURQLENBRUU7QUFGRjtBQUdFLHFCQUFTLEVBQUMsdUhBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXpFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrR0Q7O0dBM0tRRCxhO1VBQ2FJLHVELEVBQ0NFLG1FLEVBUU5TLGlEOzs7TUFWUmYsYTtBQTZLTUEsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svMy45MGY4YzllZGE4NTE1YWRkYzg4Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgYXhpb3NHZW5lcmFsLCBlcnJvckhhbmRsZXIgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9nbG9iYWxcIjtcclxuaW1wb3J0IHsgdXNlVG9hc3RzIH0gZnJvbSBcInJlYWN0LXRvYXN0LW5vdGlmaWNhdGlvbnNcIjtcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcclxuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTVweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuYDtcclxuXHJcbmZ1bmN0aW9uIEFkZFBlbmdndW5hYW4oeyBzaG93LCBzZXRTaG93IH0pIHtcclxuICBjb25zdCBhY2Nlc3NUb2tlbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWNjZXNzVG9rZW4pO1xyXG4gIGNvbnN0IHsgYWRkVG9hc3QgfSA9IHVzZVRvYXN0cygpO1xyXG4gIGNvbnN0IFtwZWxhbmdnYW5PcHRpb24sIHNldFBlbGFuZ2dhbk9wdGlvbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdmFyICBtb250aHMgPSBbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoUGVsYW5nZ2FuKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xyXG4gICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICBpZF9wZWxhbmdnYW46IHBhcnNlSW50KDApLFxyXG4gICAgICBidWxhbjogXCJcIixcclxuICAgICAgdGFodW46IFwiXCIsXHJcbiAgICAgIG1ldGVyX2F3YWw6IFwiXCIsXHJcbiAgICAgIG1ldGVyX2FraGlyOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIG9uU3VibWl0OiAodmFsdWVzKSA9PiBjcmVhdGVQZW5nZ3VuYWFuKHZhbHVlcyksXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGZldGNoUGVsYW5nZ2FuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBhY2Nlc3NUb2tlbixcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NHZW5lcmFsLmdldChcIi9yZXNvdXJjZXMvcGVsYW5nZ2FuXCIsIHtcclxuICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgc3RhcnQ6IDAsXHJcbiAgICAgICAgICBsaW1pdDogOTk5LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRQZWxhbmdnYW5PcHRpb24oW10pO1xyXG4gICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gcmVzcG9uc2U7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGNvbnN0IHBlbGFuZ2dhbkFyciA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHBlbGFuZ2dhbiA9IGRhdGEuZGF0YTtcclxuICAgICAgICBmb3IgKGNvbnN0IGl0ZXJhdG9yIG9mIHBlbGFuZ2dhbikge1xyXG4gICAgICAgICAgbGV0IHZhbCA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IGl0ZXJhdG9yLmlkX3BlbGFuZ2dhbixcclxuICAgICAgICAgICAgbGFiZWw6IGl0ZXJhdG9yLm5hbWFfcGVsYW5nZ2FuLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHBlbGFuZ2dhbkFyci5wdXNoKHZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFBlbGFuZ2dhbk9wdGlvbihwZWxhbmdnYW5BcnIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhZGRUb2FzdChlcnJvckhhbmRsZXIoZXJyb3IpLCB7IGFwcGVhcmFuY2U6IFwiZXJyb3JcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjcmVhdGVQZW5nZ3VuYWFuID0gYXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBhY2Nlc3NUb2tlbixcclxuICAgICAgfTtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NHZW5lcmFsLnBvc3QoYC9yZXNvdXJjZXMvcGVuZ2d1bmFhbmAsIFxyXG4gICAgICB2YWx1ZXMsIHtcclxuICAgICAgICBoZWFkZXJzLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IHJlc3BvbnNlO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEgfHwgc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBzZXRTaG93KCFzaG93KTtcclxuICAgICAgfVxyXG4gICAgICBhZGRUb2FzdChcIkJlcmhhc2lsIHNpbXBhbiBkYXRhXCIsIHsgYXBwZWFyYW5jZTogXCJzdWNjZXNzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhZGRUb2FzdChlcnJvckhhbmRsZXIoZXJyb3IpLCB7IGFwcGVhcmFuY2U6IFwiZXJyb3JcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgY2xhc3NOYW1lPVwidy0zLzUgaC00LzUgYmxvY2sgbXgtYXV0byBweC00IG15LTNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBteC1hdXRvIHB5LTRcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtM3hsIHRleHQtYmxhY2sgbWItMTZcIj5cclxuICAgICAgICAgIFRhbWJhaCBEYXRhIFBlbmdndW5hYW5cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fSBtZXRob2Q9XCJQT1NUXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIG15LTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIFBlbGFuZ2dhblxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaWxpaCBwZWxhbmdnYW5cIlxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3BlbGFuZ2dhbk9wdGlvbn1cclxuICAgICAgICAgICAgICBuYW1lPVwiaWRfcGVsYW5nZ2FuXCJcclxuICAgICAgICAgICAgICBpc0NsZWFyYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3BlbGFuZ2dhbk9wdGlvbi5maW5kKFxyXG4gICAgICAgICAgICAgICAgKHYpID0+IHYudmFsdWUgPT09IGZvcm1pay52YWx1ZXMuaWRfcGVsYW5nZ2FuXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGUgPyBlLnZhbHVlIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwiaWRfcGVsYW5nZ2FuXCIsIHZhbCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIG15LTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIEJ1bGFuXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBpbGloIGJ1bGFuXCJcclxuICAgICAgICAgICAgICBvcHRpb25zPXttb250aHN9XHJcbiAgICAgICAgICAgICAgbmFtZT1cImJ1bGFuXCJcclxuICAgICAgICAgICAgICBpc0NsZWFyYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e21vbnRocy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKHYpID0+IHYudmFsdWUgPT09IGZvcm1pay52YWx1ZXMuYnVsYW5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gZSA/IGUudmFsdWUgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJidWxhblwiLCB2YWwpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1zZW1pYm9sZCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgTWV0ZXIgQXdhbFxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweS0yIHB4LTMgYmctZ3JheS0xMDAgcm91bmRlZCBibG9jayB3LWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lIHRleHQtYmFzZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm1ldGVyX2F3YWxcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWV0ZXIgYXdhbFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMubWV0ZXJfYXdhbH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMubWV0ZXJfYXdhbCAmJiAoXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXJlZC01MDBcIj5cclxuICAgICAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLm1ldGVyX2F3YWx9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIE1ldGVyIEFraGlyXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTIgcHgtMyBiZy1ncmF5LTEwMCByb3VuZGVkIGJsb2NrIHctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC1iYXNlXCJcclxuICAgICAgICAgICAgICBuYW1lPVwibWV0ZXJfYWtoaXJcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWV0ZXIgYWtoaXJcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLm1ldGVyX2FraGlyfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy5tZXRlcl9ha2hpciAmJiAoXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXJlZC01MDBcIj5cclxuICAgICAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLm1ldGVyX2FraGlyfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktZW5kIG15LTRcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3coIXNob3cpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTEyIG14LTMgdGV4dC13aGl0ZSBweS0yIHRleHQtY2VudGVyIHctMS82IGZvbnQtc2VtaWJvbGQgYmctZ3JheS00MDAgcm91bmRlZCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBCYXRhbFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIC8vICAgc3R5bGU9e3sgYmFja2dyb3VuZDogXCIjNDM2MWVlXCIgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcHktMiB0ZXh0LWdyYXktNTAgYmctYmx1ZS01MDAgcHgtNCB0ZXh0LWNlbnRlciB3LTEvNiByb3VuZGVkIGZvbnQtYm9sZCBjdXJzb3ItcG9pbnRlciBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU2ltcGFuXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRQZW5nZ3VuYWFuO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9