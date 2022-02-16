webpackHotUpdate_N_E(4,{

/***/ "./components/pelanggan/EditPelanggan.js":
/*!***********************************************!*\
  !*** ./components/pelanggan/EditPelanggan.js ***!
  \***********************************************/
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





var _jsxFileName = "C:\\project\\sertifikasi_listrik_frontend\\components\\pelanggan\\EditPelanggan.js",
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

function EditPelanggan(_ref) {
  _s();

  var show = _ref.show,
      setShow = _ref.setShow,
      id = _ref.id;
  var accessToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.accessToken;
  });

  var _useToasts = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_8__["useToasts"])(),
      addToast = _useToasts.addToast;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      levelOptions = _useState[0],
      setLevelOptions = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    fetchTarif();
    fetchDetailPelanggan(id);
  }, []);
  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_10__["useFormik"])({
    initialValues: {
      username: "",
      password: "",
      nomor_kwh: 0,
      nama_pelanggan: "",
      alamat: "",
      id_tarif: parseInt(0)
    },
    onSubmit: function onSubmit(values) {
      return updatePelanggan(values);
    }
  });

  var updatePelanggan = /*#__PURE__*/function () {
    var _ref2 = Object(C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values) {
      var headers, response, status;
      return C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              headers = {
                Authorization: accessToken
              };
              _context.next = 4;
              return _helpers_global__WEBPACK_IMPORTED_MODULE_7__["axiosGeneral"].put("/resources/pelanggan/".concat(id), values, {
                headers: headers
              });

            case 4:
              response = _context.sent;
              status = response.status;

              if (status === 200) {
                addToast("Berhasil ubah pelanggan", {
                  appearance: "success"
                });
                setShow(!show);
              }

              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              addToast(Object(_helpers_global__WEBPACK_IMPORTED_MODULE_7__["errorHandler"])(_context.t0), {
                appearance: "error"
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    return function updatePelanggan(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var fetchDetailPelanggan = /*#__PURE__*/function () {
    var _ref3 = Object(C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var headers, response, status, data;
      return C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              headers = {
                Authorization: accessToken
              };
              _context2.next = 4;
              return _helpers_global__WEBPACK_IMPORTED_MODULE_7__["axiosGeneral"].get("/resources/pelanggan/".concat(id), {
                headers: headers
              });

            case 4:
              response = _context2.sent;
              status = response.status, data = response.data;

              if (status === 200) {
                formik.setFieldValue("username", data.data[0].username);
                formik.setFieldValue("nama_admin", data.data[0].nama_admin);
                formik.setFieldValue("id_level", data.data[0].id_level);
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

    return function fetchDetailPelanggan() {
      return _ref3.apply(this, arguments);
    };
  }();

  var fetchTarif = /*#__PURE__*/function () {
    var _ref4 = Object(C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var headers, response, status, data, levelArr, level, _iterator, _step, iterator, val;

      return C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              headers = {
                Authorization: accessToken
              };
              _context3.next = 4;
              return _helpers_global__WEBPACK_IMPORTED_MODULE_7__["axiosGeneral"].get("/resources/tarif", {
                headers: headers,
                params: {
                  start: 0,
                  limit: 999
                }
              });

            case 4:
              response = _context3.sent;
              setLevelOptions([]);
              status = response.status, data = response.data;

              if (status === 200) {
                levelArr = [];
                level = data.data;
                _iterator = _createForOfIteratorHelper(level);

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    iterator = _step.value;
                    val = {
                      value: iterator.id_level,
                      label: iterator.nama_level
                    };
                    levelArr.push(val);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                setLevelOptions(levelArr);
              }

              _context3.next = 13;
              break;

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](0);
              addToast(Object(_helpers_global__WEBPACK_IMPORTED_MODULE_7__["errorHandler"])(_context3.t0), {
                appearance: "error"
              });

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 10]]);
    }));

    return function fetchTarif() {
      return _ref4.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Card, {
    className: "w-3/5 h-4/5 block mx-auto px-4 my-3",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "block mx-auto py-4",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
        className: "font-bold text-3xl text-black mb-20",
        children: "Ubah Data User"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("form", {
        onSubmit: formik.handleSubmit,
        method: "POST",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "col-span-4 my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Username"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
            className: "py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base",
            name: "username",
            placeholder: "Username",
            type: "text",
            value: formik.values.username,
            onChange: formik.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, this), formik.errors.username && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
            className: "text-xs text-red-500",
            children: formik.errors.username
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "col-span-4 my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Nama User"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
            className: "py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base",
            name: "nama_admin",
            placeholder: "Nama User",
            type: "text",
            value: formik.values.nama_admin,
            onChange: formik.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, this), formik.errors.nama_admin && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
            className: "text-xs text-red-500",
            children: formik.errors.nama_admin
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "col-span-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Level"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_4__["default"], {
            placeholder: "Pilih level",
            options: levelOptions,
            name: "id_level",
            value: levelOptions[levelOptions.findIndex(function (x) {
              return x.value == formik.values.id_level;
            })],
            onChange: function onChange(e) {
              formik.setFieldValue("id_level", e.value);
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "flex flex-row justify-end items-center mt-20",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            onClick: function onClick() {
              return setShow(!show);
            },
            className: "px-12 text-white py-2 font-semibold bg-gray-400 rounded cursor-pointer",
            children: "Batal"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
            type: "submit",
            className: "px-12 text-white py-2 font-semibold bg-blue-500 rounded cursor-pointer ml-10",
            children: "Simpan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 112,
    columnNumber: 5
  }, this);
}

_s(EditPelanggan, "tDDuVg+PXeIC37x90fvDSUqf0IQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], react_toast_notifications__WEBPACK_IMPORTED_MODULE_8__["useToasts"], formik__WEBPACK_IMPORTED_MODULE_10__["useFormik"]];
});

_c2 = EditPelanggan;
/* harmony default export */ __webpack_exports__["default"] = (EditPelanggan);

var _c, _c2;

$RefreshReg$(_c, "Card");
$RefreshReg$(_c2, "EditPelanggan");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wZWxhbmdnYW4vRWRpdFBlbGFuZ2dhbi5qcyJdLCJuYW1lcyI6WyJDYXJkIiwic3R5bGVkIiwiZGl2IiwiRWRpdFBlbGFuZ2dhbiIsInNob3ciLCJzZXRTaG93IiwiaWQiLCJhY2Nlc3NUb2tlbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VUb2FzdHMiLCJhZGRUb2FzdCIsInVzZVN0YXRlIiwibGV2ZWxPcHRpb25zIiwic2V0TGV2ZWxPcHRpb25zIiwidXNlRWZmZWN0IiwiZmV0Y2hUYXJpZiIsImZldGNoRGV0YWlsUGVsYW5nZ2FuIiwiZm9ybWlrIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJub21vcl9rd2giLCJuYW1hX3BlbGFuZ2dhbiIsImFsYW1hdCIsImlkX3RhcmlmIiwicGFyc2VJbnQiLCJvblN1Ym1pdCIsInZhbHVlcyIsInVwZGF0ZVBlbGFuZ2dhbiIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYXhpb3NHZW5lcmFsIiwicHV0IiwicmVzcG9uc2UiLCJzdGF0dXMiLCJhcHBlYXJhbmNlIiwiZXJyb3JIYW5kbGVyIiwiZ2V0IiwiZGF0YSIsInNldEZpZWxkVmFsdWUiLCJuYW1hX2FkbWluIiwiaWRfbGV2ZWwiLCJwYXJhbXMiLCJzdGFydCIsImxpbWl0IiwibGV2ZWxBcnIiLCJsZXZlbCIsIml0ZXJhdG9yIiwidmFsIiwidmFsdWUiLCJsYWJlbCIsIm5hbWFfbGV2ZWwiLCJwdXNoIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiZXJyb3JzIiwiZmluZEluZGV4IiwieCIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLDBEQUFNLENBQUND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LG9CQUFRLEVBQUUsa0JBQUNpQixDQUFELEVBQU87QUFDZjFDLG9CQUFNLENBQUN1QixhQUFQLENBQXFCLFVBQXJCLEVBQWlDbUIsQ0FBQyxDQUFDVCxLQUFuQztBQUNEO0FBYkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckNGLGVBeURFO0FBQUssbUJBQVMsRUFBQyw4Q0FBZjtBQUFBLGtDQUNFO0FBQ0UsbUJBQU8sRUFBRTtBQUFBLHFCQUFNOUMsT0FBTyxDQUFDLENBQUNELElBQUYsQ0FBYjtBQUFBLGFBRFg7QUFFRSxxQkFBUyxFQUFDLHdFQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBT0U7QUFDRSxnQkFBSSxFQUFDLFFBRFA7QUFFRSxxQkFBUyxFQUFDLDhFQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF6REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUZEOztHQWhMUUQsYTtVQUNhSyx1RCxFQUNDRSxtRSxFQVFOUyxpRDs7O01BVlJoQixhO0FBa0xNQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay80LjY3Zjk2NGZiNTYxMGYyYzRlNTlmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBheGlvc0dlbmVyYWwsIGVycm9ySGFuZGxlciB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2dsb2JhbFwiO1xyXG5pbXBvcnQgeyB1c2VUb2FzdHMgfSBmcm9tIFwicmVhY3QtdG9hc3Qtbm90aWZpY2F0aW9uc1wiO1xyXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBDYXJkID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxNXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG5gO1xyXG5cclxuZnVuY3Rpb24gRWRpdFBlbGFuZ2dhbih7IHNob3csIHNldFNob3csIGlkIH0pIHtcclxuICBjb25zdCBhY2Nlc3NUb2tlbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWNjZXNzVG9rZW4pO1xyXG4gIGNvbnN0IHsgYWRkVG9hc3QgfSA9IHVzZVRvYXN0cygpO1xyXG4gIGNvbnN0IFtsZXZlbE9wdGlvbnMsIHNldExldmVsT3B0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFRhcmlmKCk7XHJcbiAgICBmZXRjaERldGFpbFBlbGFuZ2dhbihpZCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xyXG4gICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgIG5vbW9yX2t3aDogMCxcclxuICAgICAgbmFtYV9wZWxhbmdnYW46IFwiXCIsXHJcbiAgICAgIGFsYW1hdDogXCJcIixcclxuICAgICAgaWRfdGFyaWY6IHBhcnNlSW50KDApLFxyXG4gICAgfSxcclxuICAgIG9uU3VibWl0OiAodmFsdWVzKSA9PiB1cGRhdGVQZWxhbmdnYW4odmFsdWVzKSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdXBkYXRlUGVsYW5nZ2FuID0gYXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBhY2Nlc3NUb2tlbixcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0dlbmVyYWwucHV0KFxyXG4gICAgICAgIGAvcmVzb3VyY2VzL3BlbGFuZ2dhbi8ke2lkfWAsXHJcbiAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gcmVzcG9uc2U7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGFkZFRvYXN0KFwiQmVyaGFzaWwgdWJhaCBwZWxhbmdnYW5cIiwgeyBhcHBlYXJhbmNlOiBcInN1Y2Nlc3NcIiB9KTtcclxuICAgICAgICBzZXRTaG93KCFzaG93KTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWRkVG9hc3QoZXJyb3JIYW5kbGVyKGVycm9yKSwgeyBhcHBlYXJhbmNlOiBcImVycm9yXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hEZXRhaWxQZWxhbmdnYW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGFjY2Vzc1Rva2VuLFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zR2VuZXJhbC5nZXQoYC9yZXNvdXJjZXMvcGVsYW5nZ2FuLyR7aWR9YCwge1xyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gcmVzcG9uc2U7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwidXNlcm5hbWVcIiwgZGF0YS5kYXRhWzBdLnVzZXJuYW1lKTtcclxuICAgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZShcIm5hbWFfYWRtaW5cIiwgZGF0YS5kYXRhWzBdLm5hbWFfYWRtaW4pO1xyXG4gICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwiaWRfbGV2ZWxcIiwgZGF0YS5kYXRhWzBdLmlkX2xldmVsKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWRkVG9hc3QoZXJyb3JIYW5kbGVyKGVycm9yKSwgeyBhcHBlYXJhbmNlOiBcImVycm9yXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hUYXJpZiA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYWNjZXNzVG9rZW4sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zR2VuZXJhbC5nZXQoXCIvcmVzb3VyY2VzL3RhcmlmXCIsIHtcclxuICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgc3RhcnQ6IDAsXHJcbiAgICAgICAgICBsaW1pdDogOTk5LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRMZXZlbE9wdGlvbnMoW10pO1xyXG4gICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gcmVzcG9uc2U7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGNvbnN0IGxldmVsQXJyID0gW107XHJcbiAgICAgICAgY29uc3QgbGV2ZWwgPSBkYXRhLmRhdGE7XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVyYXRvciBvZiBsZXZlbCkge1xyXG4gICAgICAgICAgbGV0IHZhbCA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IGl0ZXJhdG9yLmlkX2xldmVsLFxyXG4gICAgICAgICAgICBsYWJlbDogaXRlcmF0b3IubmFtYV9sZXZlbCxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBsZXZlbEFyci5wdXNoKHZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldExldmVsT3B0aW9ucyhsZXZlbEFycik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFkZFRvYXN0KGVycm9ySGFuZGxlcihlcnJvciksIHsgYXBwZWFyYW5jZTogXCJlcnJvclwiIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCBjbGFzc05hbWU9XCJ3LTMvNSBoLTQvNSBibG9jayBteC1hdXRvIHB4LTQgbXktM1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIG14LWF1dG8gcHktNFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0zeGwgdGV4dC1ibGFjayBtYi0yMFwiPlxyXG4gICAgICAgICAgVWJhaCBEYXRhIFVzZXJcclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fSBtZXRob2Q9XCJQT1NUXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTQgbXktNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1zZW1pYm9sZCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgVXNlcm5hbWVcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBweC0zIGJnLWdyYXktMTAwIHJvdW5kZWQgYmxvY2sgdy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy51c2VybmFtZSAmJiAoXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXJlZC01MDBcIj5cclxuICAgICAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi00IG15LTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIE5hbWEgVXNlclxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweS0yIHB4LTMgYmctZ3JheS0xMDAgcm91bmRlZCBibG9jayB3LWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lIHRleHQtYmFzZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWFfYWRtaW5cIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtYSBVc2VyXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMubmFtYV9hZG1pbn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMubmFtYV9hZG1pbiAmJiAoXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXJlZC01MDBcIj5cclxuICAgICAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLm5hbWFfYWRtaW59XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIExldmVsXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBpbGloIGxldmVsXCJcclxuICAgICAgICAgICAgICBvcHRpb25zPXtsZXZlbE9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgbmFtZT1cImlkX2xldmVsXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICBsZXZlbE9wdGlvbnNbXHJcbiAgICAgICAgICAgICAgICBsZXZlbE9wdGlvbnMuZmluZEluZGV4KFxyXG4gICAgICAgICAgICAgICAgICAoeCkgPT4geC52YWx1ZSA9PSBmb3JtaWsudmFsdWVzLmlkX2xldmVsXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJpZF9sZXZlbFwiLCBlLnZhbHVlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyIG10LTIwXCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KCFzaG93KX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0xMiB0ZXh0LXdoaXRlIHB5LTIgZm9udC1zZW1pYm9sZCBiZy1ncmF5LTQwMCByb3VuZGVkIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEJhdGFsXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMTIgdGV4dC13aGl0ZSBweS0yIGZvbnQtc2VtaWJvbGQgYmctYmx1ZS01MDAgcm91bmRlZCBjdXJzb3ItcG9pbnRlciBtbC0xMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTaW1wYW5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRQZWxhbmdnYW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=