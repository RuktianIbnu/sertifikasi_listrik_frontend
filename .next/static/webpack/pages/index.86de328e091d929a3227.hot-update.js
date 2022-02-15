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
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "on-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
                children: "Listrik"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h3", {
                className: "font-semibold",
                children: "Masuk"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 198,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("form", {
                onSubmit: formik.handleSubmit,
                method: "POST",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Group, {
                  className: "mt-5",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Label, {
                    children: "Username"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 201,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Control, {
                    className: "custom-input",
                    type: "text",
                    autoComplete: "false",
                    name: "email",
                    onChange: formik.handleChange,
                    value: formik.values.email
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 202,
                    columnNumber: 21
                  }, this), formik.errors.email && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
                    className: "text-xs text-red-500",
                    children: formik.errors.email
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 211,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 200,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Group, {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Label, {
                    htmlFor: "password",
                    children: "Password"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 217,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Control, {
                    className: "custom-input",
                    type: "password",
                    autoComplete: "true",
                    name: "password",
                    onChange: formik.handleChange,
                    value: formik.values.password
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 218,
                    columnNumber: 21
                  }, this), formik.errors.password && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
                    className: "text-xs text-red-500",
                    children: formik.errors.password
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 227,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 216,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
                  disabled: formik.isSubmitting,
                  variant: "warning",
                  type: "submit",
                  className: "mt-4",
                  block: true,
                  children: "Login"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 237,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 15
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
            lineNumber: 251,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 250,
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
      lineNumber: 260,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRm9ybVNjaGVtYSIsIll1cCIsInNoYXBlIiwicGFzc3dvcmQiLCJyZXF1aXJlZCIsIkZvcm1TY2hlbWFQYXNzd29yZCIsInVsYW5naV9wYXNzd29yZCIsIm9uZU9mIiwiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJhY2Nlc3NUb2tlbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VUb2FzdHMiLCJhZGRUb2FzdCIsInVzZVN0YXRlIiwiT1RQIiwic2V0T1RQIiwiaXNPdHAiLCJzZXRJc090cCIsInRva2VuVGVtcCIsInNldFRva2VuVGVtcCIsInRva2VuVmVyaWZ5Iiwic2V0VG9rZW5WZXJpZnkiLCJpc05ld1Bhc3N3b3JkIiwic2V0SXNOZXdQYXNzd29yZCIsInVzZUVmZmVjdCIsIlJvdXRlciIsInJlcGxhY2UiLCJ1cmwiLCJVUkxTZWFyY2hQYXJhbXMiLCJsb2NhdGlvbiIsInNlYXJjaCIsImdldCIsInRvU3RyaW5nIiwiZG9Mb2dpbiIsInZhbHVlcyIsInNldExvYWRpbmciLCJib2R5IiwiZW1haWwiLCJhcHBfaWQiLCJheGlvc0dlbmVyYWwiLCJwb3N0IiwicmVzcG9uc2UiLCJzdGF0dXMiLCJkYXRhIiwidGVtcF90b2tlbiIsIm1lc3NhZ2UiLCJhcHBlYXJhbmNlIiwiZm9ybWlrIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsInZhbGlkYXRpb25TY2hlbWEiLCJvblN1Ym1pdCIsInJlbmRlckJ1dHRvbiIsImJ1dHRvblByb3BzIiwicmVtYWluaW5nVGltZSIsInJlbmRlclRpbWUiLCJkb01hdGNoT3RwIiwib3RwIiwic2V0VXNlciIsInVzZXJfbWV0YWRhdGEiLCJzZXRBY2Nlc3NUb2tlbiIsInRva2VuIiwiZG9SZXNlbmRPdHAiLCJkb0NoYW5nZVBhc3N3b3JkIiwibmV3X3Bhc3N3b3JkIiwiZm9ybWlrUGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiZW5hYmxlUmVpbml0aWFsaXplIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiZXJyb3JzIiwiaXNTdWJtaXR0aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHQywyQ0FBQSxHQUFhQyxLQUFiLENBQW1CO0FBQ3BDQyxVQUFRLEVBQUVGLDJDQUFBLEdBQWFHLFFBQWIsQ0FBc0IsK0JBQXRCO0FBRDBCLENBQW5CLENBQW5CO0FBSUEsSUFBTUMsa0JBQWtCLEdBQUdKLDJDQUFBLEdBQWFDLEtBQWI7QUFDekJDLFVBQVEsRUFBRUYsMkNBQUEsR0FBYUcsUUFBYixDQUFzQiwrQkFBdEIsQ0FEZTtBQUV6QkUsaUJBQWUsRUFBRUwsMkNBQUEsR0FBYUcsUUFBYixDQUFzQixxQ0FBdEI7QUFGUSxzQkFHUkgsMkNBQUEsR0FBYU0sS0FBYixDQUNmLENBQUNOLHdDQUFBLENBQVEsVUFBUixDQUFELEVBQXNCLElBQXRCLENBRGUsRUFFZixzQkFGZSxDQUhRLEVBQTNCO0FBU2UsU0FBU08sSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUM3QixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNGLFdBQWpCO0FBQUEsR0FBRCxDQUEvQjs7QUFGNkIsbUJBR1JHLDRFQUFTLEVBSEQ7QUFBQSxNQUdyQkMsUUFIcUIsY0FHckJBLFFBSHFCOztBQUFBLGtCQUlQQyxzREFBUSxFQUpEO0FBQUEsTUFJdEJDLEdBSnNCO0FBQUEsTUFJakJDLE1BSmlCOztBQUFBLG1CQUtIRixzREFBUSxDQUFDLEtBQUQsQ0FMTDtBQUFBLE1BS3RCRyxLQUxzQjtBQUFBLE1BS2ZD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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQXRDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBeURFLHFFQUFDLG1EQUFEO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQTJCLFlBQUUsRUFBQyxHQUE5QjtBQUFrQyxZQUFFLEVBQUMsR0FBckM7QUFBQSxpQ0FDRSxxRUFBQyxxREFBRDtBQUNFLGVBQUcsRUFBQywyRUFETjtBQUVFLGVBQUcsRUFBQyxlQUZOO0FBR0UscUJBQVMsRUFBQyx1QkFIWjtBQUlFLGlCQUFLO0FBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBekRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQXdFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhFRjtBQUFBLGtCQURGO0FBaUpEOztHQS9TdUJuRSxJO1VBQ0xFLHVELEVBQ0dFLHVELEVBQ0NFLG9FLEVBMENOcUMsaUQsRUF1R1FBLGlEOzs7S0FwSkQzQyxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg2ZGUzMjhlMDkxZDkyOWEzMjI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCwgRm9ybSwgQnV0dG9uLCBJbWFnZSB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgYXhpb3NHZW5lcmFsIH0gZnJvbSBcIi4uL2hlbHBlcnMvZ2xvYmFsXCI7XHJcbmltcG9ydCB7IHNldEFjY2Vzc1Rva2VuLCBzZXRVc2VyLCBzZXRMb2FkaW5nIH0gZnJvbSBcIi4uL3N0b3JlL2FjdGlvbkNyZWF0b3JcIjtcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcclxuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQgeyB1c2VUb2FzdHMgfSBmcm9tIFwicmVhY3QtdG9hc3Qtbm90aWZpY2F0aW9uc1wiO1xyXG5pbXBvcnQgT1RQSW5wdXQsIHsgUmVzZW5kT1RQIH0gZnJvbSBcIm90cC1pbnB1dC1yZWFjdFwiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW5wdXRcIjtcclxuaW1wb3J0IHsgRm9ybWF0TGlzdEJ1bGxldGVkU2hhcnAgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcblxyXG5jb25zdCBGb3JtU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICBwYXNzd29yZDogWXVwLnN0cmluZygpLnJlcXVpcmVkKFwiKiBQYXNzd29yZCB0aWRhayBib2xlaCBrb3NvbmdcIiksXHJcbn0pO1xyXG5cclxuY29uc3QgRm9ybVNjaGVtYVBhc3N3b3JkID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICBwYXNzd29yZDogWXVwLnN0cmluZygpLnJlcXVpcmVkKFwiKiBQYXNzd29yZCB0aWRhayBib2xlaCBrb3NvbmdcIiksXHJcbiAgdWxhbmdpX3Bhc3N3b3JkOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXCIqVWxhbmdpIFBhc3N3b3JkIHRpZGFrIGJvbGVoIGtvc29uZ1wiKSxcclxuICB1bGFuZ2lfcGFzc3dvcmQ6IFl1cC5zdHJpbmcoKS5vbmVPZihcclxuICAgIFtZdXAucmVmKFwicGFzc3dvcmRcIiksIG51bGxdLFxyXG4gICAgXCJQYXNzd29yZCB0aWRhayBzYW1hIVwiXHJcbiAgKSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBhY2Nlc3NUb2tlbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWNjZXNzVG9rZW4pO1xyXG4gIGNvbnN0IHsgYWRkVG9hc3QgfSA9IHVzZVRvYXN0cygpO1xyXG4gIGNvbnN0IFtPVFAsIHNldE9UUF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtpc090cCwgc2V0SXNPdHBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0b2tlblRlbXAsIHNldFRva2VuVGVtcF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdG9rZW5WZXJpZnksIHNldFRva2VuVmVyaWZ5XSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2lzTmV3UGFzc3dvcmQsIHNldElzTmV3UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgIFJvdXRlci5yZXBsYWNlKFwiL2Rhc2hib2FyZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICBpZiAodXJsLmdldChcInRva2VuXCIpICE9IG51bGwpIHtcclxuICAgICAgc2V0VG9rZW5WZXJpZnkodXJsLmdldChcInRva2VuXCIpLnRvU3RyaW5nKCkpO1xyXG4gICAgICBzZXRJc05ld1Bhc3N3b3JkKHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZG9Mb2dpbiA9IGFzeW5jICh2YWx1ZXMpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgIGVtYWlsOiB2YWx1ZXMuZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHZhbHVlcy5wYXNzd29yZCxcclxuICAgICAgICBhcHBfaWQ6IFwiYWRtaW4tcGFuZWxcIixcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0dlbmVyYWwucG9zdChcIi9sb2dpblwiLCBib2R5KTtcclxuICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgc2V0VG9rZW5UZW1wKGRhdGEuZGF0YS50ZW1wX3Rva2VuKTtcclxuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgICAgc2V0SXNPdHAodHJ1ZSk7XHJcbiAgICAgICAgc2V0T1RQKFwiXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgIGFkZFRvYXN0KGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSwgeyBhcHBlYXJhbmNlOiBcImVycm9yXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcclxuICAgIGluaXRpYWxWYWx1ZXM6IHtcclxuICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb25TY2hlbWE6IEZvcm1TY2hlbWEsXHJcbiAgICBvblN1Ym1pdDogKHZhbHVlcykgPT4gZG9Mb2dpbih2YWx1ZXMpLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCByZW5kZXJCdXR0b24gPSAoYnV0dG9uUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9XCJweC01IHB5LTIgYmctYmx1ZS0zMDAgcm91bmRlZCB0ZXh0LXdoaXRlIG1iLTQgdGV4dC1zbVwiXHJcbiAgICAgICAgey4uLmJ1dHRvblByb3BzfVxyXG4gICAgICA+XHJcbiAgICAgICAge2J1dHRvblByb3BzLnJlbWFpbmluZ1RpbWUgIT09IDBcclxuICAgICAgICAgID8gYEtpcmltIFVsYW5nICgke2J1dHRvblByb3BzLnJlbWFpbmluZ1RpbWV9cylgXHJcbiAgICAgICAgICA6IFwiS2lyaW0gVWxhbmdcIn1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclRpbWUgPSAocmVtYWluaW5nVGltZSkgPT4ge1xyXG4gICAgcmV0dXJuIDw+PC8+O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRvTWF0Y2hPdHAgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgIG90cDogT1RQLFxyXG4gICAgICAgIHRlbXBfdG9rZW46IHRva2VuVGVtcCxcclxuICAgICAgfTtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSk7XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zR2VuZXJhbC5wb3N0KFwiL3ZlcmlmeS1vdHBcIiwgYm9keSk7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSByZXNwb25zZTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhzdGF0dXMpO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBkaXNwYXRjaChzZXRVc2VyKGRhdGEuZGF0YS51c2VyX21ldGFkYXRhKSk7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0QWNjZXNzVG9rZW4oZGF0YS5kYXRhLnRva2VuKSk7XHJcbiAgICAgICAgUm91dGVyLnJlcGxhY2UoXCIvZGFzaGJvYXJkXCIpO1xyXG5cclxuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgYWRkVG9hc3QoXCJHYWdhbCBtZWxhbmp1dGthblwiLCB7IGFwcGVhcmFuY2U6IFwiZXJyb3JcIiB9KTtcclxuICAgICAgc2V0T1RQKFwiXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRvUmVzZW5kT3RwID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICB0ZW1wX3Rva2VuOiB0b2tlblRlbXAsXHJcbiAgICAgIH07XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpO1xyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0dlbmVyYWwucG9zdChcIi9yZXNlbmQtb3RwXCIsIGJvZHkpO1xyXG5cclxuICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBhZGRUb2FzdChcIlNpbGFoa2FuIGNlayBlbWFpbCBhbmRhXCIsIHsgYXBwZWFyYW5jZTogXCJzdWNjZXNzXCIgfSk7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgIGFkZFRvYXN0KFwia2VzYWxhaGFuIHJlcXVlc3QgZGF0YVwiLCB7IGFwcGVhcmFuY2U6IFwiZXJyb3JcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBkb0NoYW5nZVBhc3N3b3JkID0gYXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCF2YWx1ZXMpIHJldHVybjtcclxuICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICBuZXdfcGFzc3dvcmQ6IGZvcm1pa1Bhc3N3b3JkLnZhbHVlcy5wYXNzd29yZCxcclxuICAgICAgICB0ZW1wX3Rva2VuOiB0b2tlblZlcmlmeSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKGJvZHksIHRva2VuVmVyaWZ5KTtcclxuXHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zR2VuZXJhbC5wb3N0KGAvdmVyaWZ5LWZvcmdldC1wYXNzd29yZGAsIGJvZHkpO1xyXG4gICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gcmVzcG9uc2U7XHJcbiAgICAgIGNvbnNvbGUubG9nKHN0YXR1cywgZGF0YS5kYXRhKTtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgYWRkVG9hc3QoXCJQYXNzd29yZCBiZXJoYXNpbCBkaSBnYW50aVwiLCB7XHJcbiAgICAgICAgICBhcHBlYXJhbmNlOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRJc05ld1Bhc3N3b3JkKGZhbHNlKTtcclxuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWRkVG9hc3QoXCJQYXNzd29yZCBiZXJoYXNpbCBkaSBnYW50aVwiLCB7XHJcbiAgICAgICAgICBhcHBlYXJhbmNlOiBcIndhcm5pbmdcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgYWRkVG9hc3QoXCJQYXNzd29yZCBnYWdhbCBkaSBnYW50aVwiLCB7IGFwcGVhcmFuY2U6IFwiZXJyb3JcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmb3JtaWtQYXNzd29yZCA9IHVzZUZvcm1payh7XHJcbiAgICBpbml0aWFsVmFsdWVzOiB7XHJcbiAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICB1bGFuZ2lfcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvblNjaGVtYTogRm9ybVNjaGVtYVBhc3N3b3JkLFxyXG4gICAgZW5hYmxlUmVpbml0aWFsaXplOiBmYWxzZSxcclxuICAgIG9uU3VibWl0OiAodmFsdWVzKSA9PiBkb0NoYW5nZVBhc3N3b3JkKHZhbHVlcyksXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TG9naW4gLSBMSVNUUklLPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Q29udGFpbmVyIGZsdWlkPlxyXG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImNvbC1sZWZ0XCIgeGw9XCIzXCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvbi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5MaXN0cmlrPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+TWFzdWs8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9IG1ldGhvZD1cIlBPU1RcIj5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlVzZXJuYW1lPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLmVtYWlsICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yZWQtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMucGFzc3dvcmQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXJlZC01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9mb3Jnb3QtcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb3Jnb3QtcGFzc3dvcmQtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTHVwYSBQYXNzd29yZD9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Zm9ybWlrLmlzU3VibWl0dGluZ31cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwid2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJjb2wtcmlnaHRcIiB4bD1cIjlcIiBsZz1cIjlcIj5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuaW1pZ3Jhc2kuZ28uaWQvdXBsb2Fkcy9sb2dvLzEwLTUyLTEzLWxvZ28taW1pZ3Jhc2lfLV9Db3B5LnBuZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiTG9nbyBJbWlncmFzaVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1pZ3Jhc2ktbG9nbyBteC1hdXRvXCJcclxuICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8c3R5bGU+e2BcclxuICAgICAgICAuZm9yZ290LXBhc3N3b3JkLWxpbmsge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgY29sb3I6ICM0MzYxRUU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWlncmFzaS1sb2dvIHtcclxuICAgICAgICAgIHdpZHRoOjkwJTtcclxuICAgICAgICAgIGhlaWdodDogNTB2aDtcclxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOjIwdmg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vbi1jZW50ZXIge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDo2MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2wtcmlnaHQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzAzMDQ1RTtcclxuICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2wtbGVmdCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkRGREZEO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAzNnB4O1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMzZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDMuNzVyZW07XHJcbiAgICAgICAgICBjb2xvcjogIzMyMzIzMjtcclxuICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNzVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmlubGluZS1pY29uIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJvdHRvbTogLjQ1cmVtO1xyXG4gICAgICAgICAgcmlnaHQ6IC40NXJlbTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuLXdhcm5pbmcge1xyXG4gICAgICAgICAgY29sb3I6ICMyQjJENDIgIWltcG9ydGFudDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgIGhlaWdodDo0MHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY3VzdG9tLWlucHV0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYThkYWRjICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgIGNvbG9yOiAjNDQ1NDU1ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBoZWlnaHQ6NDBweDtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDoxN3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY3VzdG9tLWlucHV0OmZvY3VzIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=