webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _helpers_global__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/global */ "./helpers/global.js");
/* harmony import */ var _store_actionCreator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/actionCreator */ "./store/actionCreator.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-toast-notifications */ "./node_modules/react-toast-notifications/dist/index.js");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var otp_input_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! otp-input-react */ "./node_modules/otp-input-react/dist/index.js");
/* harmony import */ var otp_input_react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(otp_input_react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Input */ "./components/Input.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");






var _jsxFileName = "C:\\project\\sertifikasi_listrik_frontend\\pages\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















var FormSchema = yup__WEBPACK_IMPORTED_MODULE_12__["object"]().shape({
  email: yup__WEBPACK_IMPORTED_MODULE_12__["string"]().email().required("* Email tidak boleh kosong"),
  password: yup__WEBPACK_IMPORTED_MODULE_12__["string"]().required("* Password tidak boleh kosong")
});
var FormSchemaPassword = yup__WEBPACK_IMPORTED_MODULE_12__["object"]().shape(Object(C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
  password: yup__WEBPACK_IMPORTED_MODULE_12__["string"]().required("* Password tidak boleh kosong"),
  ulangi_password: yup__WEBPACK_IMPORTED_MODULE_12__["string"]().required("*Ulangi Password tidak boleh kosong")
}, "ulangi_password", yup__WEBPACK_IMPORTED_MODULE_12__["string"]().oneOf([yup__WEBPACK_IMPORTED_MODULE_12__["ref"]("password"), null], "Password tidak sama!")));
function Home() {
  _s();

  var _this = this;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();
  var accessToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.accessToken;
  });

  var _useToasts = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_14__["useToasts"])(),
      addToast = _useToasts.addToast;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(),
      OTP = _useState[0],
      setOTP = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(false),
      isOtp = _useState2[0],
      setIsOtp = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(""),
      tokenTemp = _useState3[0],
      setTokenTemp = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(),
      tokenVerify = _useState4[0],
      setTokenVerify = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(false),
      isNewPassword = _useState5[0],
      setIsNewPassword = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(function () {
    if (accessToken) {
      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.replace("/dashboard");
    }

    var url = new URLSearchParams(location.search);

    if (url.get("token") != null) {
      setTokenVerify(url.get("token").toString());
      setIsNewPassword(true);
    }
  }, []);

  var doLogin = /*#__PURE__*/function () {
    var _ref = Object(C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values) {
      var body, response, status, data;
      return C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_11__["setLoading"])(true));
              body = {
                email: values.email,
                password: values.password,
                app_id: "admin-panel"
              };
              _context.next = 5;
              return _helpers_global__WEBPACK_IMPORTED_MODULE_10__["axiosGeneral"].post("/login", body);

            case 5:
              response = _context.sent;
              status = response.status, data = response.data; // console.log(data);

              if (status === 200) {
                setTokenTemp(data.data.temp_token);
                dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_11__["setLoading"])(false));
                setIsOtp(true);
                setOTP("");
              }

              _context.next = 14;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_11__["setLoading"])(false));
              addToast(_context.t0.response.data.message, {
                appearance: "error"
              });

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function doLogin(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_13__["useFormik"])({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: FormSchema,
    onSubmit: function onSubmit(values) {
      return doLogin(values);
    }
  });

  var renderButton = function renderButton(buttonProps) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", _objectSpread(_objectSpread({
      className: "px-5 py-2 bg-blue-300 rounded text-white mb-4 text-sm"
    }, buttonProps), {}, {
      children: buttonProps.remainingTime !== 0 ? "Kirim Ulang (".concat(buttonProps.remainingTime, "s)") : "Kirim Ulang"
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, _this);
  };

  var renderTime = function renderTime(remainingTime) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {}, void 0, false);
  };

  var doMatchOtp = /*#__PURE__*/function () {
    var _ref2 = Object(C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var body, response, status, data;
      return C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              body = {
                otp: OTP,
                temp_token: tokenTemp
              };
              dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_11__["setLoading"])(true));
              _context2.next = 5;
              return _helpers_global__WEBPACK_IMPORTED_MODULE_10__["axiosGeneral"].post("/verify-otp", body);

            case 5:
              response = _context2.sent;
              status = response.status, data = response.data; //console.log(status);

              if (status === 200) {
                dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_11__["setUser"])(data.data.user_metadata));
                dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_11__["setAccessToken"])(data.data.token));
                next_router__WEBPACK_IMPORTED_MODULE_6___default.a.replace("/dashboard");
                dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_11__["setLoading"])(false));
              }

              _context2.next = 15;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_11__["setLoading"])(false));
              addToast("Gagal melanjutkan", {
                appearance: "error"
              });
              setOTP("");

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 10]]);
    }));

    return function doMatchOtp() {
      return _ref2.apply(this, arguments);
    };
  }();

  var doResendOtp = /*#__PURE__*/function () {
    var _ref3 = Object(C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var body, response, status, data;
      return C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              body = {
                temp_token: tokenTemp
              };
              dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_11__["setLoading"])(true));
              _context3.next = 5;
              return _helpers_global__WEBPACK_IMPORTED_MODULE_10__["axiosGeneral"].post("/resend-otp", body);

            case 5:
              response = _context3.sent;
              status = response.status, data = response.data;

              if (status === 200) {
                addToast("Silahkan cek email anda", {
                  appearance: "success"
                });
                dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_11__["setLoading"])(false));
              }

              _context3.next = 14;
              break;

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](0);
              dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_11__["setLoading"])(false));
              addToast("kesalahan request data", {
                appearance: "error"
              });

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 10]]);
    }));

    return function doResendOtp() {
      return _ref3.apply(this, arguments);
    };
  }();

  var doChangePassword = /*#__PURE__*/function () {
    var _ref4 = Object(C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(values) {
      var body, response, status, data;
      return C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;

              if (values) {
                _context4.next = 3;
                break;
              }

              return _context4.abrupt("return");

            case 3:
              body = {
                new_password: formikPassword.values.password,
                temp_token: tokenVerify
              };
              console.log(body, tokenVerify);
              dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_11__["setLoading"])(true));
              _context4.next = 8;
              return _helpers_global__WEBPACK_IMPORTED_MODULE_10__["axiosGeneral"].post("/verify-forget-password", body);

            case 8:
              response = _context4.sent;
              status = response.status, data = response.data;
              console.log(status, data.data);

              if (status === 200) {
                addToast("Password berhasil di ganti", {
                  appearance: "success"
                });
                setIsNewPassword(false);
                dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_11__["setLoading"])(false));
              } else {
                addToast("Password berhasil di ganti", {
                  appearance: "warning"
                });
                dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_11__["setLoading"])(false));
              }

              _context4.next = 18;
              break;

            case 14:
              _context4.prev = 14;
              _context4.t0 = _context4["catch"](0);
              dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_11__["setLoading"])(false));
              addToast("Password gagal di ganti", {
                appearance: "error"
              });

            case 18:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 14]]);
    }));

    return function doChangePassword(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();

  var formikPassword = Object(formik__WEBPACK_IMPORTED_MODULE_13__["useFormik"])({
    initialValues: {
      password: "",
      ulangi_password: ""
    },
    validationSchema: FormSchemaPassword,
    enableReinitialize: false,
    onSubmit: function onSubmit(values) {
      return doChangePassword(values);
    }
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("title", {
        children: "Login - LISTRIK"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Container"], {
      fluid: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        className: "overflow-hidden",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
          className: "col-left",
          xl: "3",
          lg: "3",
          children: isNewPassword == true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "on-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("form", {
                onSubmit: formikPassword.handleSubmit,
                method: "POST",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
                  children: "Listrik"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 200,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h3", {
                  children: "Lupa Password"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 201,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Group, {
                  className: "mt-5",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Label, {
                    children: "Password"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 203,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Control, {
                    className: "custom-input",
                    placeholder: "Password",
                    autoComplete: "false",
                    type: "password",
                    name: "password",
                    onChange: formikPassword.handleChange,
                    value: formikPassword.values.password
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 204,
                    columnNumber: 23
                  }, this), formikPassword.errors.password && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
                    className: "text-xs text-red-500",
                    children: formikPassword.errors.password
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 214,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Label, {
                    children: "Ulangi Password"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 218,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Control, {
                    className: "custom-input",
                    placeholder: "Ulangi Password",
                    autoComplete: "false",
                    type: "password",
                    name: "ulangi_password",
                    onChange: formikPassword.handleChange,
                    value: formikPassword.values.ulangi_password
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 219,
                    columnNumber: 23
                  }, this), formikPassword.errors.ulangi_password && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
                    className: "text-xs text-red-500",
                    children: formikPassword.errors.ulangi_password
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 229,
                    columnNumber: 25
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 202,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
                  variant: "warning",
                  type: "submit",
                  className: "mt-5",
                  block: true,
                  children: "Kirim"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 234,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                  className: "flex flex-row justify-center mt-4",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                    className: "font-semibold justify-left",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
                      className: "text-blue-600 justify-left",
                      type: "button",
                      onClick: function onClick() {
                        return setIsNewPassword(false);
                      },
                      children: "Kembali ke halaman login"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 244,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 243,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 242,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 17
            }, this)
          }, void 0, false) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
            children: isOtp == false ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                className: "on-center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
                  children: "Listrik"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 261,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h3", {
                  className: "font-semibold",
                  children: "Masuk"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 262,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("form", {
                  onSubmit: formik.handleSubmit,
                  method: "POST",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Group, {
                    className: "mt-5",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Label, {
                      children: "Username"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 265,
                      columnNumber: 27
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Control, {
                      className: "custom-input",
                      type: "text",
                      autoComplete: "false",
                      name: "email",
                      onChange: formik.handleChange,
                      value: formik.values.email
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 266,
                      columnNumber: 27
                    }, this), formik.errors.email && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
                      className: "text-xs text-red-500",
                      children: formik.errors.email
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 275,
                      columnNumber: 29
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 264,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Group, {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Label, {
                      htmlFor: "password",
                      children: "Password"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 281,
                      columnNumber: 27
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Control, {
                      className: "custom-input",
                      type: "password",
                      autoComplete: "true",
                      name: "password",
                      onChange: formik.handleChange,
                      value: formik.values.password
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 282,
                      columnNumber: 27
                    }, this), formik.errors.password && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
                      className: "text-xs text-red-500",
                      children: formik.errors.password
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 291,
                      columnNumber: 29
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 280,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                    href: "/forgot-password",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
                      className: "forgot-password-link",
                      children: "Lupa Password?"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 297,
                      columnNumber: 27
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 296,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
                    disabled: formik.isSubmitting,
                    variant: "warning",
                    type: "submit",
                    className: "mt-4",
                    block: true,
                    children: "Login"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 301,
                    columnNumber: 25
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 263,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 260,
                columnNumber: 21
              }, this)
            }, void 0, false) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "on-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(otp_input_react__WEBPACK_IMPORTED_MODULE_15__["ResendOTP"], {
                renderButton: renderButton,
                renderTime: renderTime,
                maxTime: 90,
                style: {
                  justifyContent: "center"
                },
                onResendClick: function onResendClick() {
                  return doResendOtp();
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 315,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(otp_input_react__WEBPACK_IMPORTED_MODULE_15___default.a, {
                value: OTP,
                onChange: function onChange(value) {
                  return setOTP(value);
                },
                autoFocus: true,
                OTPLength: 5,
                otpType: "number",
                inputClassName: "outline-none rounded font-bold mx-2",
                inputStyles: {
                  color: "#000",
                  backgroundColor: "#F2F2F2",
                  width: "2.8rem",
                  height: 50
                },
                style: {
                  justifyContent: "center",
                  width: "auto",
                  marginLeft: 20
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 322,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                className: "mt-6 w-full",
                onClick: function onClick() {
                  return doMatchOtp();
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
                  className: "w-full",
                  children: "Lanjutkan"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 342,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 341,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                className: "text-xs md:text-base text-center w-full mt-4 font-semibold",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
                  className: "text-blue-600",
                  type: "button",
                  onClick: function onClick() {
                    return setIsOtp(false);
                  },
                  children: "Kembali ke halaman login"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 345,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 344,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 314,
              columnNumber: 19
            }, this)
          }, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
          className: "col-right",
          xl: "9",
          lg: "9",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Image"], {
            src: "https://www.imigrasi.go.id/uploads/logo/10-52-13-logo-imigrasi_-_Copy.png",
            alt: "Logo Imigrasi",
            className: "imigrasi-logo mx-auto",
            fluid: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 359,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("style", {
      children: "\n        .forgot-password-link {\n          font-size: 13px;\n          color: #4361EE;\n          text-align: right;\n          display:block;\n          cursor: pointer;\n        }\n        .imigrasi-logo {\n          width:90%;\n          height: 50vh;\n          object-fit: contain;\n          margin-top:20vh;\n          margin-left: auto;\n          margin-right: auto;\n          display:block;\n        }\n        .on-center {\n          margin-top:60%;\n        }\n        .col-right {\n          background: #03045E;\n          height: 100vh;\n        }\n        .col-left {\n          background: #FDFDFD;\n          height: 100vh;\n          max-height: 100vh;\n          padding-left: 36px;\n          padding-right: 36px;\n        }\n        h1 {\n          font-family: \"Poppins\", sans-serif;\n          font-weight: bold;\n          font-size: 3.75rem;\n          color: #323232;\n          text-align:center;\n          margin-bottom: 75px;\n        }\n        h3 {\n          font-weight: 600;\n        }\n        .inline-icon {\n          position: absolute;\n          bottom: .45rem;\n          right: .45rem;\n          font-size: 24px;\n          cursor:pointer;\n        }\n        .btn-warning {\n          color: #2B2D42 !important;\n          font-weight: bold !important;\n          border-radius: 10px;\n          text-transform: uppercase;\n          height:40px;\n          font-size: 14px;\n        }\n        .custom-input {\n          background: #f5f5f5;\n          border: 1px solid #a8dadc !important;\n          border-radius: 10px !important;\n          font-size: 14px !important;\n          color: #445455 !important;\n          height:40px;\n          padding-left:17px;\n        }\n        .custom-input:focus {\n          background: #f5f5f5;\n        }\n      "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Home, "wZyftzs0apam1RXFQiAB2zyIUt8=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"], react_toast_notifications__WEBPACK_IMPORTED_MODULE_14__["useToasts"], formik__WEBPACK_IMPORTED_MODULE_13__["useFormik"], formik__WEBPACK_IMPORTED_MODULE_13__["useFormik"]];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRm9ybVNjaGVtYSIsIll1cCIsInNoYXBlIiwiZW1haWwiLCJyZXF1aXJlZCIsInBhc3N3b3JkIiwiRm9ybVNjaGVtYVBhc3N3b3JkIiwidWxhbmdpX3Bhc3N3b3JkIiwib25lT2YiLCJIb21lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImFjY2Vzc1Rva2VuIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZVRvYXN0cyIsImFkZFRvYXN0IiwidXNlU3RhdGUiLCJPVFAiLCJzZXRPVFAiLCJpc090cCIsInNldElzT3RwIiwidG9rZW5UZW1wIiwic2V0VG9rZW5UZW1wIiwidG9rZW5WZXJpZnkiLCJzZXRUb2tlblZlcmlmeSIsImlzTmV3UGFzc3dvcmQiLCJzZXRJc05ld1Bhc3N3b3JkIiwidXNlRWZmZWN0IiwiUm91dGVyIiwicmVwbGFjZSIsInVybCIsIlVSTFNlYXJjaFBhcmFtcyIsImxvY2F0aW9uIiwic2VhcmNoIiwiZ2V0IiwidG9TdHJpbmciLCJkb0xvZ2luIiwidmFsdWVzIiwic2V0TG9hZGluZyIsImJvZHkiLCJhcHBfaWQiLCJheGlvc0dlbmVyYWwiLCJwb3N0IiwicmVzcG9uc2UiLCJzdGF0dXMiLCJkYXRhIiwidGVtcF90b2tlbiIsIm1lc3NhZ2UiLCJhcHBlYXJhbmNlIiwiZm9ybWlrIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsInZhbGlkYXRpb25TY2hlbWEiLCJvblN1Ym1pdCIsInJlbmRlckJ1dHRvbiIsImJ1dHRvblByb3BzIiwicmVtYWluaW5nVGltZSIsInJlbmRlclRpbWUiLCJkb01hdGNoT3RwIiwib3RwIiwic2V0VXNlciIsInVzZXJfbWV0YWRhdGEiLCJzZXRBY2Nlc3NUb2tlbiIsInRva2VuIiwiZG9SZXNlbmRPdHAiLCJkb0NoYW5nZVBhc3N3b3JkIiwibmV3X3Bhc3N3b3JkIiwiZm9ybWlrUGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiZW5hYmxlUmVpbml0aWFsaXplIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiZXJyb3JzIiwiaXNTdWJtaXR0aW5nIiwianVzdGlmeUNvbnRlbnQiLCJ2YWx1ZSIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW5MZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHQywyQ0FBQSxHQUFhQyxLQUFiLENBQW1CO0FBQ3BDQyxPQUFLLEVBQUVGLDJDQUFBLEdBQWFFLEtBQWIsR0FBcUJDLFFBQXJCLENBQThCLDRCQUE5QixDQUQ2QjtBQUVwQ0MsVUFBUSxFQUFFSiwyQ0FBQSxHQUFhRyxRQUFiLENBQXNCLCtCQUF0QjtBQUYwQixDQUFuQixDQUFuQjtBQUtBLElBQU1FLGtCQUFrQixHQUFHTCwyQ0FBQSxHQUFhQyxLQUFiO0FBQ3pCRyxVQUFRLEVBQUVKLDJDQUFBLEdBQWFHLFFBQWIsQ0FBc0IsK0JBQXRCLENBRGU7QUFFekJHLGlCQUFlLEVBQUVOLDJDQUFBLEdBQWFHLFFBQWIsQ0FBc0IscUNBQXRCO0FBRlEsc0JBR1JILDJDQUFBLEdBQWFPLEtBQWIsQ0FDZixDQUFDUCx3Q0FBQSxDQUFRLFVBQVIsQ0FBRCxFQUFzQixJQUF0QixDQURlLEVBRWYsc0JBRmUsQ0FIUSxFQUEzQjtBQVNlLFNBQVNRLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFDN0IsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLFdBQVcsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRixXQUFqQjtBQUFBLEdBQUQsQ0FBL0I7O0FBRjZCLG1CQUdSRyw0RUFBUyxFQUhEO0FBQUEs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O0tBcEpEMUMsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kZjIyOGE3YWJmMDhhYmQ2N2VhZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIEZvcm0sIEJ1dHRvbiwgSW1hZ2UgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGF4aW9zR2VuZXJhbCB9IGZyb20gXCIuLi9oZWxwZXJzL2dsb2JhbFwiO1xyXG5pbXBvcnQgeyBzZXRBY2Nlc3NUb2tlbiwgc2V0VXNlciwgc2V0TG9hZGluZyB9IGZyb20gXCIuLi9zdG9yZS9hY3Rpb25DcmVhdG9yXCI7XHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCI7XHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IHsgdXNlVG9hc3RzIH0gZnJvbSBcInJlYWN0LXRvYXN0LW5vdGlmaWNhdGlvbnNcIjtcclxuaW1wb3J0IE9UUElucHV0LCB7IFJlc2VuZE9UUCB9IGZyb20gXCJvdHAtaW5wdXQtcmVhY3RcIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9jb21wb25lbnRzL0lucHV0XCI7XHJcbmltcG9ydCB7IEZvcm1hdExpc3RCdWxsZXRlZFNoYXJwIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5cclxuY29uc3QgRm9ybVNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgZW1haWw6IFl1cC5zdHJpbmcoKS5lbWFpbCgpLnJlcXVpcmVkKFwiKiBFbWFpbCB0aWRhayBib2xlaCBrb3NvbmdcIiksXHJcbiAgcGFzc3dvcmQ6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIiogUGFzc3dvcmQgdGlkYWsgYm9sZWgga29zb25nXCIpLFxyXG59KTtcclxuXHJcbmNvbnN0IEZvcm1TY2hlbWFQYXNzd29yZCA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgcGFzc3dvcmQ6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIiogUGFzc3dvcmQgdGlkYWsgYm9sZWgga29zb25nXCIpLFxyXG4gIHVsYW5naV9wYXNzd29yZDogWXVwLnN0cmluZygpLnJlcXVpcmVkKFwiKlVsYW5naSBQYXNzd29yZCB0aWRhayBib2xlaCBrb3NvbmdcIiksXHJcbiAgdWxhbmdpX3Bhc3N3b3JkOiBZdXAuc3RyaW5nKCkub25lT2YoXHJcbiAgICBbWXVwLnJlZihcInBhc3N3b3JkXCIpLCBudWxsXSxcclxuICAgIFwiUGFzc3dvcmQgdGlkYWsgc2FtYSFcIlxyXG4gICksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgYWNjZXNzVG9rZW4gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFjY2Vzc1Rva2VuKTtcclxuICBjb25zdCB7IGFkZFRvYXN0IH0gPSB1c2VUb2FzdHMoKTtcclxuICBjb25zdCBbT1RQLCBzZXRPVFBdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbaXNPdHAsIHNldElzT3RwXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdG9rZW5UZW1wLCBzZXRUb2tlblRlbXBdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Rva2VuVmVyaWZ5LCBzZXRUb2tlblZlcmlmeV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtpc05ld1Bhc3N3b3JkLCBzZXRJc05ld1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhY2Nlc3NUb2tlbikge1xyXG4gICAgICBSb3V0ZXIucmVwbGFjZShcIi9kYXNoYm9hcmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgaWYgKHVybC5nZXQoXCJ0b2tlblwiKSAhPSBudWxsKSB7XHJcbiAgICAgIHNldFRva2VuVmVyaWZ5KHVybC5nZXQoXCJ0b2tlblwiKS50b1N0cmluZygpKTtcclxuICAgICAgc2V0SXNOZXdQYXNzd29yZCh0cnVlKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGRvTG9naW4gPSBhc3luYyAodmFsdWVzKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKTtcclxuICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICBlbWFpbDogdmFsdWVzLmVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkOiB2YWx1ZXMucGFzc3dvcmQsXHJcbiAgICAgICAgYXBwX2lkOiBcImFkbWluLXBhbmVsXCIsXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NHZW5lcmFsLnBvc3QoXCIvbG9naW5cIiwgYm9keSk7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSByZXNwb25zZTtcclxuICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIHNldFRva2VuVGVtcChkYXRhLmRhdGEudGVtcF90b2tlbik7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICAgIHNldElzT3RwKHRydWUpO1xyXG4gICAgICAgIHNldE9UUChcIlwiKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICBhZGRUb2FzdChlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsIHsgYXBwZWFyYW5jZTogXCJlcnJvclwiIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XHJcbiAgICBpbml0aWFsVmFsdWVzOiB7XHJcbiAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICBwYXNzd29yZDogXCJcIixcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uU2NoZW1hOiBGb3JtU2NoZW1hLFxyXG4gICAgb25TdWJtaXQ6ICh2YWx1ZXMpID0+IGRvTG9naW4odmFsdWVzKSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcmVuZGVyQnV0dG9uID0gKGJ1dHRvblByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPVwicHgtNSBweS0yIGJnLWJsdWUtMzAwIHJvdW5kZWQgdGV4dC13aGl0ZSBtYi00IHRleHQtc21cIlxyXG4gICAgICAgIHsuLi5idXR0b25Qcm9wc31cclxuICAgICAgPlxyXG4gICAgICAgIHtidXR0b25Qcm9wcy5yZW1haW5pbmdUaW1lICE9PSAwXHJcbiAgICAgICAgICA/IGBLaXJpbSBVbGFuZyAoJHtidXR0b25Qcm9wcy5yZW1haW5pbmdUaW1lfXMpYFxyXG4gICAgICAgICAgOiBcIktpcmltIFVsYW5nXCJ9XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJUaW1lID0gKHJlbWFpbmluZ1RpbWUpID0+IHtcclxuICAgIHJldHVybiA8PjwvPjtcclxuICB9O1xyXG5cclxuICBjb25zdCBkb01hdGNoT3RwID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICBvdHA6IE9UUCxcclxuICAgICAgICB0ZW1wX3Rva2VuOiB0b2tlblRlbXAsXHJcbiAgICAgIH07XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpO1xyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0dlbmVyYWwucG9zdChcIi92ZXJpZnktb3RwXCIsIGJvZHkpO1xyXG4gICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gcmVzcG9uc2U7XHJcbiAgICAgIC8vY29uc29sZS5sb2coc3RhdHVzKTtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0VXNlcihkYXRhLmRhdGEudXNlcl9tZXRhZGF0YSkpO1xyXG4gICAgICAgIGRpc3BhdGNoKHNldEFjY2Vzc1Rva2VuKGRhdGEuZGF0YS50b2tlbikpO1xyXG4gICAgICAgIFJvdXRlci5yZXBsYWNlKFwiL2Rhc2hib2FyZFwiKTtcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgIGFkZFRvYXN0KFwiR2FnYWwgbWVsYW5qdXRrYW5cIiwgeyBhcHBlYXJhbmNlOiBcImVycm9yXCIgfSk7XHJcbiAgICAgIHNldE9UUChcIlwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBkb1Jlc2VuZE90cCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgdGVtcF90b2tlbjogdG9rZW5UZW1wLFxyXG4gICAgICB9O1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NHZW5lcmFsLnBvc3QoXCIvcmVzZW5kLW90cFwiLCBib2R5KTtcclxuXHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSByZXNwb25zZTtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgYWRkVG9hc3QoXCJTaWxhaGthbiBjZWsgZW1haWwgYW5kYVwiLCB7IGFwcGVhcmFuY2U6IFwic3VjY2Vzc1wiIH0pO1xyXG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICBhZGRUb2FzdChcImtlc2FsYWhhbiByZXF1ZXN0IGRhdGFcIiwgeyBhcHBlYXJhbmNlOiBcImVycm9yXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZG9DaGFuZ2VQYXNzd29yZCA9IGFzeW5jICh2YWx1ZXMpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghdmFsdWVzKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgbmV3X3Bhc3N3b3JkOiBmb3JtaWtQYXNzd29yZC52YWx1ZXMucGFzc3dvcmQsXHJcbiAgICAgICAgdGVtcF90b2tlbjogdG9rZW5WZXJpZnksXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhib2R5LCB0b2tlblZlcmlmeSk7XHJcblxyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0dlbmVyYWwucG9zdChgL3ZlcmlmeS1mb3JnZXQtcGFzc3dvcmRgLCBib2R5KTtcclxuICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICBjb25zb2xlLmxvZyhzdGF0dXMsIGRhdGEuZGF0YSk7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGFkZFRvYXN0KFwiUGFzc3dvcmQgYmVyaGFzaWwgZGkgZ2FudGlcIiwge1xyXG4gICAgICAgICAgYXBwZWFyYW5jZTogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0SXNOZXdQYXNzd29yZChmYWxzZSk7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFkZFRvYXN0KFwiUGFzc3dvcmQgYmVyaGFzaWwgZGkgZ2FudGlcIiwge1xyXG4gICAgICAgICAgYXBwZWFyYW5jZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgIGFkZFRvYXN0KFwiUGFzc3dvcmQgZ2FnYWwgZGkgZ2FudGlcIiwgeyBhcHBlYXJhbmNlOiBcImVycm9yXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZm9ybWlrUGFzc3dvcmQgPSB1c2VGb3JtaWsoe1xyXG4gICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgdWxhbmdpX3Bhc3N3b3JkOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb25TY2hlbWE6IEZvcm1TY2hlbWFQYXNzd29yZCxcclxuICAgIGVuYWJsZVJlaW5pdGlhbGl6ZTogZmFsc2UsXHJcbiAgICBvblN1Ym1pdDogKHZhbHVlcykgPT4gZG9DaGFuZ2VQYXNzd29yZCh2YWx1ZXMpLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkxvZ2luIC0gTElTVFJJSzwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPENvbnRhaW5lciBmbHVpZD5cclxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJjb2wtbGVmdFwiIHhsPVwiM1wiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICB7aXNOZXdQYXNzd29yZCA9PSB0cnVlID8gKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9uLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybWlrUGFzc3dvcmQuaGFuZGxlU3VibWl0fSBtZXRob2Q9XCJQT1NUXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPkxpc3RyaWs8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5MdXBhIFBhc3N3b3JkPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtdC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5QYXNzd29yZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pa1Bhc3N3b3JkLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pa1Bhc3N3b3JkLnZhbHVlcy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrUGFzc3dvcmQuZXJyb3JzLnBhc3N3b3JkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXJlZC01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrUGFzc3dvcmQuZXJyb3JzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+VWxhbmdpIFBhc3N3b3JkPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20taW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVsYW5naSBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVsYW5naV9wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWtQYXNzd29yZC5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWtQYXNzd29yZC52YWx1ZXMudWxhbmdpX3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIHtmb3JtaWtQYXNzd29yZC5lcnJvcnMudWxhbmdpX3Bhc3N3b3JkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXJlZC01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrUGFzc3dvcmQuZXJyb3JzLnVsYW5naV9wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIndhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC01XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGJsb2NrXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgS2lyaW1cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIGp1c3RpZnktbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZS02MDAganVzdGlmeS1sZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc05ld1Bhc3N3b3JkKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEtlbWJhbGkga2UgaGFsYW1hbiBsb2dpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIHtpc090cCA9PSBmYWxzZSA/IChcclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9uLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgxPkxpc3RyaWs8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5NYXN1azwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH0gbWV0aG9kPVwiUE9TVFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtdC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+VXNlcm5hbWU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMuZW1haWwgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXJlZC01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20taW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy5wYXNzd29yZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtcmVkLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZm9yZ290LXBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9yZ290LXBhc3N3b3JkLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEx1cGEgUGFzc3dvcmQ/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Zm9ybWlrLmlzU3VibWl0dGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwid2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib24tY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlc2VuZE9UUFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQnV0dG9uPXtyZW5kZXJCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICByZW5kZXJUaW1lPXtyZW5kZXJUaW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbWF4VGltZT17OTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25SZXNlbmRDbGljaz17KCkgPT4gZG9SZXNlbmRPdHAoKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxPVFBJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e09UUH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldE9UUCh2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICAgICAgICAgIE9UUExlbmd0aD17NX1cclxuICAgICAgICAgICAgICAgICAgICAgIG90cFR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXRDbGFzc05hbWU9XCJvdXRsaW5lLW5vbmUgcm91bmRlZCBmb250LWJvbGQgbXgtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dFN0eWxlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRjJGMkYyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIuOHJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiB3LWZ1bGxcIiBvbkNsaWNrPXsoKSA9PiBkb01hdGNoT3RwKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5MYW5qdXRrYW48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgbWQ6dGV4dC1iYXNlIHRleHQtY2VudGVyIHctZnVsbCBtdC00IGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZS02MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPdHAoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBLZW1iYWxpIGtlIGhhbGFtYW4gbG9naW5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImNvbC1yaWdodFwiIHhsPVwiOVwiIGxnPVwiOVwiPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5pbWlncmFzaS5nby5pZC91cGxvYWRzL2xvZ28vMTAtNTItMTMtbG9nby1pbWlncmFzaV8tX0NvcHkucG5nXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJMb2dvIEltaWdyYXNpXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWlncmFzaS1sb2dvIG14LWF1dG9cIlxyXG4gICAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDxzdHlsZT57YFxyXG4gICAgICAgIC5mb3Jnb3QtcGFzc3dvcmQtbGluayB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICBjb2xvcjogIzQzNjFFRTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmltaWdyYXNpLWxvZ28ge1xyXG4gICAgICAgICAgd2lkdGg6OTAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgICAgICAgIG1hcmdpbi10b3A6MjB2aDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm9uLWNlbnRlciB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOjYwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbC1yaWdodCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDMwNDVFO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbC1sZWZ0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNGREZERkQ7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgbWF4LWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDM2cHg7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMy43NXJlbTtcclxuICAgICAgICAgIGNvbG9yOiAjMzIzMjMyO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA3NXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW5saW5lLWljb24ge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm90dG9tOiAuNDVyZW07XHJcbiAgICAgICAgICByaWdodDogLjQ1cmVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4td2FybmluZyB7XHJcbiAgICAgICAgICBjb2xvcjogIzJCMkQ0MiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgaGVpZ2h0OjQwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jdXN0b20taW5wdXQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhOGRhZGMgIWltcG9ydGFudDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgY29sb3I6ICM0NDU0NTUgIWltcG9ydGFudDtcclxuICAgICAgICAgIGhlaWdodDo0MHB4O1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OjE3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jdXN0b20taW5wdXQ6Zm9jdXMge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==