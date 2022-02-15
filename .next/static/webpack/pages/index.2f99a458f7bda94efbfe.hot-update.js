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
      lineNumber: 85,
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
        lineNumber: 190,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 189,
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
                  lineNumber: 199,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h3", {
                  children: "Lupa Password"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 200,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Group, {
                  className: "mt-5",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Label, {
                    children: "Password"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 202,
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
                    lineNumber: 203,
                    columnNumber: 23
                  }, this), formikPassword.errors.password && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
                    className: "text-xs text-red-500",
                    children: formikPassword.errors.password
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 213,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Label, {
                    children: "Ulangi Password"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 217,
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
                    lineNumber: 218,
                    columnNumber: 23
                  }, this), formikPassword.errors.ulangi_password && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
                    className: "text-xs text-red-500",
                    children: formikPassword.errors.ulangi_password
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 228,
                    columnNumber: 25
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 201,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
                  variant: "warning",
                  type: "submit",
                  className: "mt-5",
                  block: true,
                  children: "Kirim"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 233,
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
                      lineNumber: 243,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 242,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 241,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 198,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 197,
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
                  lineNumber: 260,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h3", {
                  className: "font-semibold",
                  children: "Masuk"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 261,
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
                      lineNumber: 264,
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
                      lineNumber: 265,
                      columnNumber: 27
                    }, this), formik.errors.email && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
                      className: "text-xs text-red-500",
                      children: formik.errors.email
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 274,
                      columnNumber: 29
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 263,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Group, {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Label, {
                      htmlFor: "password",
                      children: "Password"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 280,
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
                      lineNumber: 281,
                      columnNumber: 27
                    }, this), formik.errors.password && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
                      className: "text-xs text-red-500",
                      children: formik.errors.password
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 290,
                      columnNumber: 29
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 279,
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
                    lineNumber: 300,
                    columnNumber: 25
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 262,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 259,
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
                lineNumber: 314,
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
                lineNumber: 321,
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
                  lineNumber: 341,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 340,
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
                  lineNumber: 344,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 343,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 313,
              columnNumber: 19
            }, this)
          }, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
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
            lineNumber: 358,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 357,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("style", {
      children: "\n        .forgot-password-link {\n          font-size: 13px;\n          color: #4361EE;\n          text-align: right;\n          display:block;\n          cursor: pointer;\n        }\n        .imigrasi-logo {\n          width:90%;\n          height: 50vh;\n          object-fit: contain;\n          margin-top:20vh;\n          margin-left: auto;\n          margin-right: auto;\n          display:block;\n        }\n        .on-center {\n          margin-top:60%;\n        }\n        .col-right {\n          background: #03045E;\n          height: 100vh;\n        }\n        .col-left {\n          background: #FDFDFD;\n          height: 100vh;\n          max-height: 100vh;\n          padding-left: 36px;\n          padding-right: 36px;\n        }\n        h1 {\n          font-family: \"Poppins\", sans-serif;\n          font-weight: bold;\n          font-size: 3.75rem;\n          color: #323232;\n          text-align:center;\n          margin-bottom: 75px;\n        }\n        h3 {\n          font-weight: 600;\n        }\n        .inline-icon {\n          position: absolute;\n          bottom: .45rem;\n          right: .45rem;\n          font-size: 24px;\n          cursor:pointer;\n        }\n        .btn-warning {\n          color: #2B2D42 !important;\n          font-weight: bold !important;\n          border-radius: 10px;\n          text-transform: uppercase;\n          height:40px;\n          font-size: 14px;\n        }\n        .custom-input {\n          background: #f5f5f5;\n          border: 1px solid #a8dadc !important;\n          border-radius: 10px !important;\n          font-size: 14px !important;\n          color: #445455 !important;\n          height:40px;\n          padding-left:17px;\n        }\n        .custom-input:focus {\n          background: #f5f5f5;\n        }\n      "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 367,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRm9ybVNjaGVtYSIsIll1cCIsInNoYXBlIiwicGFzc3dvcmQiLCJyZXF1aXJlZCIsIkZvcm1TY2hlbWFQYXNzd29yZCIsInVsYW5naV9wYXNzd29yZCIsIm9uZU9mIiwiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJhY2Nlc3NUb2tlbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VUb2FzdHMiLCJhZGRUb2FzdCIsInVzZVN0YXRlIiwiT1RQIiwic2V0T1RQIiwiaXNPdHAiLCJzZXRJc090cCIsInRva2VuVGVtcCIsInNldFRva2VuVGVtcCIsInRva2VuVmVyaWZ5Iiwic2V0VG9rZW5WZXJpZnkiLCJpc05ld1Bhc3N3b3JkIiwic2V0SXNOZXdQYXNzd29yZCIsInVzZUVmZmVjdCIsIlJvdXRlciIsInJlcGxhY2UiLCJ1cmwiLCJVUkxTZWFyY2hQYXJhbXMiLCJsb2NhdGlvbiIsInNlYXJjaCIsImdldCIsInRvU3RyaW5nIiwiZG9Mb2dpbiIsInZhbHVlcyIsInNldExvYWRpbmciLCJib2R5IiwiZW1haWwiLCJhcHBfaWQiLCJheGlvc0dlbmVyYWwiLCJwb3N0IiwicmVzcG9uc2UiLCJzdGF0dXMiLCJkYXRhIiwidGVtcF90b2tlbiIsIm1lc3NhZ2UiLCJhcHBlYXJhbmNlIiwiZm9ybWlrIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsInZhbGlkYXRpb25TY2hlbWEiLCJvblN1Ym1pdCIsInJlbmRlckJ1dHRvbiIsImJ1dHRvblByb3BzIiwicmVtYWluaW5nVGltZSIsInJlbmRlclRpbWUiLCJkb01hdGNoT3RwIiwib3RwIiwic2V0VXNlciIsInVzZXJfbWV0YWRhdGEiLCJzZXRBY2Nlc3NUb2tlbiIsInRva2VuIiwiZG9SZXNlbmRPdHAiLCJkb0NoYW5nZVBhc3N3b3JkIiwibmV3X3Bhc3N3b3JkIiwiZm9ybWlrUGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiZW5hYmxlUmVpbml0aWFsaXplIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiZXJyb3JzIiwiaXNTdWJtaXR0aW5nIiwianVzdGlmeUNvbnRlbnQiLCJ2YWx1ZSIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW5MZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHQywyQ0FBQSxHQUFhQyxLQUFiLENBQW1CO0FBQ3BDQyxVQUFRLEVBQUVGLDJDQUFBLEdBQWFHLFFBQWIsQ0FBc0IsK0JBQXRCO0FBRDBCLENBQW5CLENBQW5CO0FBSUEsSUFBTUMsa0JBQWtCLEdBQUdKLDJDQUFBLEdBQWFDLEtBQWI7QUFDekJDLFVBQVEsRUFBRUYsMkNBQUEsR0FBYUcsUUFBYixDQUFzQiwrQkFBdEIsQ0FEZTtBQUV6QkUsaUJBQWUsRUFBRUwsMkNBQUEsR0FBYUcsUUFBYixDQUFzQixxQ0FBdEI7QUFGUSxzQkFHUkgsMkNBQUEsR0FBYU0sS0FBYixDQUNmLENBQUNOLHdDQUFBLENBQVEsVUFBUixDQUFELEVBQXNCLElBQXRCLENBRGUsRUFFZixzQkFGZSxDQUhRLEVBQTNCO0FBU2UsU0FBU08sSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUM3QixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNGLFdBQWpCO0FBQUEsR0FBRCxDQUEvQjs7QUFGNkIsbUJBR1JHLDRFQUFTLEVBSEQ7QUFBQSxNQUdyQkMsUUFIcUIsY0FHckJBLFFBSHFCOztBQUFBLGtCQUlQQyxzREFBUSxFQUpEO0FBQUEsTUFJdEJDLEdBSnNC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QTtBQUFBLHNCQTNCRixlQThCRTtBQUFLLHlCQUFTLEVBQUMsNERBQWY7QUFBQSx1Q0FDRTtBQUNFLDJCQUFTLEVBQUMsZUFEWjtBQUVFLHNCQUFJLEVBQUMsUUFGUDtBQUdFLHlCQUFPLEVBQUU7QUFBQSwyQkFBTXZDLFFBQVEsQ0FBQyxLQUFELENBQWQ7QUFBQSxtQkFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXpESjtBQTlESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBb0tFLHFFQUFDLG1EQUFEO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQTJCLFlBQUUsRUFBQyxHQUE5QjtBQUFrQyxZQUFFLEVBQUMsR0FBckM7QUFBQSxpQ0FDRSxxRUFBQyxxREFBRDtBQUNFLGVBQUcsRUFBQywyRUFETjtBQUVFLGVBQUcsRUFBQyxlQUZOO0FBR0UscUJBQVMsRUFBQyx1QkFIWjtBQUlFLGlCQUFLO0FBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBcEtGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQW1MRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5MRjtBQUFBLGtCQURGO0FBNFBEOztHQTFadUJaLEk7VUFDTEUsdUQsRUFDR0UsdUQsRUFDQ0Usb0UsRUEwQ05xQyxpRCxFQXVHUUEsaUQ7OztLQXBKRDNDLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmY5OWE0NThmN2JkYTk0ZWZiZmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLCBGb3JtLCBCdXR0b24sIEltYWdlIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBheGlvc0dlbmVyYWwgfSBmcm9tIFwiLi4vaGVscGVycy9nbG9iYWxcIjtcclxuaW1wb3J0IHsgc2V0QWNjZXNzVG9rZW4sIHNldFVzZXIsIHNldExvYWRpbmcgfSBmcm9tIFwiLi4vc3RvcmUvYWN0aW9uQ3JlYXRvclwiO1xyXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCB7IHVzZVRvYXN0cyB9IGZyb20gXCJyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zXCI7XHJcbmltcG9ydCBPVFBJbnB1dCwgeyBSZXNlbmRPVFAgfSBmcm9tIFwib3RwLWlucHV0LXJlYWN0XCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vY29tcG9uZW50cy9JbnB1dFwiO1xyXG5pbXBvcnQgeyBGb3JtYXRMaXN0QnVsbGV0ZWRTaGFycCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuXHJcbmNvbnN0IEZvcm1TY2hlbWEgPSBZdXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gIHBhc3N3b3JkOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXCIqIFBhc3N3b3JkIHRpZGFrIGJvbGVoIGtvc29uZ1wiKSxcclxufSk7XHJcblxyXG5jb25zdCBGb3JtU2NoZW1hUGFzc3dvcmQgPSBZdXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gIHBhc3N3b3JkOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXCIqIFBhc3N3b3JkIHRpZGFrIGJvbGVoIGtvc29uZ1wiKSxcclxuICB1bGFuZ2lfcGFzc3dvcmQ6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIipVbGFuZ2kgUGFzc3dvcmQgdGlkYWsgYm9sZWgga29zb25nXCIpLFxyXG4gIHVsYW5naV9wYXNzd29yZDogWXVwLnN0cmluZygpLm9uZU9mKFxyXG4gICAgW1l1cC5yZWYoXCJwYXNzd29yZFwiKSwgbnVsbF0sXHJcbiAgICBcIlBhc3N3b3JkIHRpZGFrIHNhbWEhXCJcclxuICApLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGFjY2Vzc1Rva2VuID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hY2Nlc3NUb2tlbik7XHJcbiAgY29uc3QgeyBhZGRUb2FzdCB9ID0gdXNlVG9hc3RzKCk7XHJcbiAgY29uc3QgW09UUCwgc2V0T1RQXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2lzT3RwLCBzZXRJc090cF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Rva2VuVGVtcCwgc2V0VG9rZW5UZW1wXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0b2tlblZlcmlmeSwgc2V0VG9rZW5WZXJpZnldID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbaXNOZXdQYXNzd29yZCwgc2V0SXNOZXdQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYWNjZXNzVG9rZW4pIHtcclxuICAgICAgUm91dGVyLnJlcGxhY2UoXCIvZGFzaGJvYXJkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKTtcclxuICAgIGlmICh1cmwuZ2V0KFwidG9rZW5cIikgIT0gbnVsbCkge1xyXG4gICAgICBzZXRUb2tlblZlcmlmeSh1cmwuZ2V0KFwidG9rZW5cIikudG9TdHJpbmcoKSk7XHJcbiAgICAgIHNldElzTmV3UGFzc3dvcmQodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBkb0xvZ2luID0gYXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSk7XHJcbiAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgZW1haWw6IHZhbHVlcy5lbWFpbCxcclxuICAgICAgICBwYXNzd29yZDogdmFsdWVzLnBhc3N3b3JkLFxyXG4gICAgICAgIGFwcF9pZDogXCJhZG1pbi1wYW5lbFwiLFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zR2VuZXJhbC5wb3N0KFwiL2xvZ2luXCIsIGJvZHkpO1xyXG4gICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gcmVzcG9uc2U7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBzZXRUb2tlblRlbXAoZGF0YS5kYXRhLnRlbXBfdG9rZW4pO1xyXG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgICBzZXRJc090cCh0cnVlKTtcclxuICAgICAgICBzZXRPVFAoXCJcIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgYWRkVG9hc3QoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCB7IGFwcGVhcmFuY2U6IFwiZXJyb3JcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xyXG4gICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICBlbWFpbDogXCJcIixcclxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvblNjaGVtYTogRm9ybVNjaGVtYSxcclxuICAgIG9uU3VibWl0OiAodmFsdWVzKSA9PiBkb0xvZ2luKHZhbHVlcyksXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHJlbmRlckJ1dHRvbiA9IChidXR0b25Qcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT1cInB4LTUgcHktMiBiZy1ibHVlLTMwMCByb3VuZGVkIHRleHQtd2hpdGUgbWItNCB0ZXh0LXNtXCJcclxuICAgICAgICB7Li4uYnV0dG9uUHJvcHN9XHJcbiAgICAgID5cclxuICAgICAgICB7YnV0dG9uUHJvcHMucmVtYWluaW5nVGltZSAhPT0gMFxyXG4gICAgICAgICAgPyBgS2lyaW0gVWxhbmcgKCR7YnV0dG9uUHJvcHMucmVtYWluaW5nVGltZX1zKWBcclxuICAgICAgICAgIDogXCJLaXJpbSBVbGFuZ1wifVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyVGltZSA9IChyZW1haW5pbmdUaW1lKSA9PiB7XHJcbiAgICByZXR1cm4gPD48Lz47XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZG9NYXRjaE90cCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgb3RwOiBPVFAsXHJcbiAgICAgICAgdGVtcF90b2tlbjogdG9rZW5UZW1wLFxyXG4gICAgICB9O1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NHZW5lcmFsLnBvc3QoXCIvdmVyaWZ5LW90cFwiLCBib2R5KTtcclxuICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKHN0YXR1cyk7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGRpc3BhdGNoKHNldFVzZXIoZGF0YS5kYXRhLnVzZXJfbWV0YWRhdGEpKTtcclxuICAgICAgICBkaXNwYXRjaChzZXRBY2Nlc3NUb2tlbihkYXRhLmRhdGEudG9rZW4pKTtcclxuICAgICAgICBSb3V0ZXIucmVwbGFjZShcIi9kYXNoYm9hcmRcIik7XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICBhZGRUb2FzdChcIkdhZ2FsIG1lbGFuanV0a2FuXCIsIHsgYXBwZWFyYW5jZTogXCJlcnJvclwiIH0pO1xyXG4gICAgICBzZXRPVFAoXCJcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZG9SZXNlbmRPdHAgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgIHRlbXBfdG9rZW46IHRva2VuVGVtcCxcclxuICAgICAgfTtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSk7XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zR2VuZXJhbC5wb3N0KFwiL3Jlc2VuZC1vdHBcIiwgYm9keSk7XHJcblxyXG4gICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gcmVzcG9uc2U7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGFkZFRvYXN0KFwiU2lsYWhrYW4gY2VrIGVtYWlsIGFuZGFcIiwgeyBhcHBlYXJhbmNlOiBcInN1Y2Nlc3NcIiB9KTtcclxuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgYWRkVG9hc3QoXCJrZXNhbGFoYW4gcmVxdWVzdCBkYXRhXCIsIHsgYXBwZWFyYW5jZTogXCJlcnJvclwiIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRvQ2hhbmdlUGFzc3dvcmQgPSBhc3luYyAodmFsdWVzKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIXZhbHVlcykgcmV0dXJuO1xyXG4gICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgIG5ld19wYXNzd29yZDogZm9ybWlrUGFzc3dvcmQudmFsdWVzLnBhc3N3b3JkLFxyXG4gICAgICAgIHRlbXBfdG9rZW46IHRva2VuVmVyaWZ5LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc29sZS5sb2coYm9keSwgdG9rZW5WZXJpZnkpO1xyXG5cclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NHZW5lcmFsLnBvc3QoYC92ZXJpZnktZm9yZ2V0LXBhc3N3b3JkYCwgYm9keSk7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSByZXNwb25zZTtcclxuICAgICAgY29uc29sZS5sb2coc3RhdHVzLCBkYXRhLmRhdGEpO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBhZGRUb2FzdChcIlBhc3N3b3JkIGJlcmhhc2lsIGRpIGdhbnRpXCIsIHtcclxuICAgICAgICAgIGFwcGVhcmFuY2U6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldElzTmV3UGFzc3dvcmQoZmFsc2UpO1xyXG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhZGRUb2FzdChcIlBhc3N3b3JkIGJlcmhhc2lsIGRpIGdhbnRpXCIsIHtcclxuICAgICAgICAgIGFwcGVhcmFuY2U6IFwid2FybmluZ1wiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICBhZGRUb2FzdChcIlBhc3N3b3JkIGdhZ2FsIGRpIGdhbnRpXCIsIHsgYXBwZWFyYW5jZTogXCJlcnJvclwiIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZvcm1pa1Bhc3N3b3JkID0gdXNlRm9ybWlrKHtcclxuICAgIGluaXRpYWxWYWx1ZXM6IHtcclxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgIHVsYW5naV9wYXNzd29yZDogXCJcIixcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uU2NoZW1hOiBGb3JtU2NoZW1hUGFzc3dvcmQsXHJcbiAgICBlbmFibGVSZWluaXRpYWxpemU6IGZhbHNlLFxyXG4gICAgb25TdWJtaXQ6ICh2YWx1ZXMpID0+IGRvQ2hhbmdlUGFzc3dvcmQodmFsdWVzKSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Mb2dpbiAtIExJU1RSSUs8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxDb250YWluZXIgZmx1aWQ+XHJcbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiY29sLWxlZnRcIiB4bD1cIjNcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAge2lzTmV3UGFzc3dvcmQgPT0gdHJ1ZSA/IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvbi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1pa1Bhc3N3b3JkLmhhbmRsZVN1Ym1pdH0gbWV0aG9kPVwiUE9TVFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5MaXN0cmlrPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+THVwYSBQYXNzd29yZDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+UGFzc3dvcmQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWtQYXNzd29yZC5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWtQYXNzd29yZC52YWx1ZXMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2Zvcm1pa1Bhc3N3b3JkLmVycm9ycy5wYXNzd29yZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yZWQtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1pa1Bhc3N3b3JkLmVycm9ycy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlVsYW5naSBQYXNzd29yZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVbGFuZ2kgUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1bGFuZ2lfcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrUGFzc3dvcmQuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrUGFzc3dvcmQudmFsdWVzLnVsYW5naV9wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrUGFzc3dvcmQuZXJyb3JzLnVsYW5naV9wYXNzd29yZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yZWQtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1pa1Bhc3N3b3JkLmVycm9ycy51bGFuZ2lfcGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ3YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBibG9ja1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEtpcmltXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIG10LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBqdXN0aWZ5LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNjAwIGp1c3RpZnktbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNOZXdQYXNzd29yZChmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBLZW1iYWxpIGtlIGhhbGFtYW4gbG9naW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7aXNPdHAgPT0gZmFsc2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvbi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMT5MaXN0cmlrPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+TWFzdWs8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9IG1ldGhvZD1cIlBPU1RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlVzZXJuYW1lPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLmVtYWlsICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yZWQtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMucGFzc3dvcmQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXJlZC01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9mb3Jnb3QtcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb3Jnb3QtcGFzc3dvcmQtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTHVwYSBQYXNzd29yZD9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Zm9ybWlrLmlzU3VibWl0dGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwid2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib24tY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlc2VuZE9UUFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQnV0dG9uPXtyZW5kZXJCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICByZW5kZXJUaW1lPXtyZW5kZXJUaW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbWF4VGltZT17OTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25SZXNlbmRDbGljaz17KCkgPT4gZG9SZXNlbmRPdHAoKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxPVFBJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e09UUH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldE9UUCh2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICAgICAgICAgIE9UUExlbmd0aD17NX1cclxuICAgICAgICAgICAgICAgICAgICAgIG90cFR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXRDbGFzc05hbWU9XCJvdXRsaW5lLW5vbmUgcm91bmRlZCBmb250LWJvbGQgbXgtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dFN0eWxlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRjJGMkYyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIuOHJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiB3LWZ1bGxcIiBvbkNsaWNrPXsoKSA9PiBkb01hdGNoT3RwKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5MYW5qdXRrYW48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgbWQ6dGV4dC1iYXNlIHRleHQtY2VudGVyIHctZnVsbCBtdC00IGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZS02MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPdHAoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBLZW1iYWxpIGtlIGhhbGFtYW4gbG9naW5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImNvbC1yaWdodFwiIHhsPVwiOVwiIGxnPVwiOVwiPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5pbWlncmFzaS5nby5pZC91cGxvYWRzL2xvZ28vMTAtNTItMTMtbG9nby1pbWlncmFzaV8tX0NvcHkucG5nXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJMb2dvIEltaWdyYXNpXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWlncmFzaS1sb2dvIG14LWF1dG9cIlxyXG4gICAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDxzdHlsZT57YFxyXG4gICAgICAgIC5mb3Jnb3QtcGFzc3dvcmQtbGluayB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICBjb2xvcjogIzQzNjFFRTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmltaWdyYXNpLWxvZ28ge1xyXG4gICAgICAgICAgd2lkdGg6OTAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgICAgICAgIG1hcmdpbi10b3A6MjB2aDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm9uLWNlbnRlciB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOjYwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbC1yaWdodCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDMwNDVFO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbC1sZWZ0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNGREZERkQ7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgbWF4LWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDM2cHg7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMy43NXJlbTtcclxuICAgICAgICAgIGNvbG9yOiAjMzIzMjMyO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA3NXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW5saW5lLWljb24ge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm90dG9tOiAuNDVyZW07XHJcbiAgICAgICAgICByaWdodDogLjQ1cmVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4td2FybmluZyB7XHJcbiAgICAgICAgICBjb2xvcjogIzJCMkQ0MiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgaGVpZ2h0OjQwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jdXN0b20taW5wdXQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhOGRhZGMgIWltcG9ydGFudDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgY29sb3I6ICM0NDU0NTUgIWltcG9ydGFudDtcclxuICAgICAgICAgIGhlaWdodDo0MHB4O1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OjE3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jdXN0b20taW5wdXQ6Zm9jdXMge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==