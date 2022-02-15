module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./helpers/global.js":
/*!***************************!*\
  !*** ./helpers/global.js ***!
  \***************************/
/*! exports provided: BASE_URL, axiosGeneral */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axiosGeneral", function() { return axiosGeneral; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const BASE_URL = "https://localhost/v1";
const axiosGeneral = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: BASE_URL,
  responseType: "json"
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/global */ "./helpers/global.js");
/* harmony import */ var _store_actionCreator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/actionCreator */ "./store/actionCreator.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-toast-notifications */ "react-toast-notifications");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "C:\\project\\sertifikasi_listrik_frontend\\pages\\index.js";










const FormSchema = yup__WEBPACK_IMPORTED_MODULE_8__["object"]().shape({
  password: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required("* Password tidak boleh kosong")
});
const FormSchemaPassword = yup__WEBPACK_IMPORTED_MODULE_8__["object"]().shape({
  password: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required("* Password tidak boleh kosong"),
  ulangi_password: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required("*Ulangi Password tidak boleh kosong"),
  ulangi_password: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().oneOf([yup__WEBPACK_IMPORTED_MODULE_8__["ref"]("password"), null], "Password tidak sama!")
});
function Home() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const accessToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.accessToken);
  const {
    addToast
  } = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_10__["useToasts"])();
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    if (accessToken) {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.replace("/dashboard");
    }

    const url = new URLSearchParams(location.search);

    if (url.get("token") != null) {
      setTokenVerify(url.get("token").toString());
      setIsNewPassword(true);
    }
  }, []);

  const doLogin = async values => {
    try {
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_7__["setLoading"])(true));
      const body = {
        email: values.email,
        password: values.password,
        app_id: "admin-panel"
      };
      const response = await _helpers_global__WEBPACK_IMPORTED_MODULE_6__["axiosGeneral"].post("/login", body);
      const {
        status,
        data
      } = response; // console.log(data);

      if (status === 200) {
        setTokenTemp(data.data.temp_token);
        dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_7__["setLoading"])(false));
        setIsOtp(true);
        setOTP("");
      }
    } catch (error) {
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_7__["setLoading"])(false));
      addToast(error.response.data.message, {
        appearance: "error"
      });
    }
  };

  const formik = Object(formik__WEBPACK_IMPORTED_MODULE_9__["useFormik"])({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: FormSchema,
    onSubmit: values => doLogin(values)
  });
  const formikPassword = Object(formik__WEBPACK_IMPORTED_MODULE_9__["useFormik"])({
    initialValues: {
      password: "",
      ulangi_password: ""
    },
    validationSchema: FormSchemaPassword,
    enableReinitialize: false,
    onSubmit: values => doChangePassword(values)
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Login - LISTRIK"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      fluid: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        className: "overflow-hidden",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
          className: "col-left",
          xl: "3",
          lg: "3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "on-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                children: "Listrik"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "font-semibold",
                children: "Masuk"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
                onSubmit: formik.handleSubmit,
                method: "POST",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
                  className: "mt-5",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
                    children: "Username"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
                    className: "custom-input",
                    type: "text",
                    autoComplete: "false",
                    name: "email",
                    onChange: formik.handleChange,
                    value: formik.values.email
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 21
                  }, this), formik.errors.email && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "text-xs text-red-500",
                    children: formik.errors.email
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
                    htmlFor: "password",
                    children: "Password"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 114,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
                    className: "custom-input",
                    type: "password",
                    autoComplete: "true",
                    name: "password",
                    onChange: formik.handleChange,
                    value: formik.values.password
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 21
                  }, this), formik.errors.password && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "text-xs text-red-500",
                    children: formik.errors.password
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
                  disabled: formik.isSubmitting,
                  variant: "warning",
                  type: "submit",
                  className: "mt-4",
                  block: true,
                  children: "Login"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, this)
          }, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
          className: "col-right",
          xl: "9",
          lg: "9",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Image"], {
            src: "https://www.imigrasi.go.id/uploads/logo/10-52-13-logo-imigrasi_-_Copy.png",
            alt: "Logo Imigrasi",
            className: "imigrasi-logo mx-auto",
            fluid: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
      children: `
        .forgot-password-link {
          font-size: 13px;
          color: #4361EE;
          text-align: right;
          display:block;
          cursor: pointer;
        }
        .imigrasi-logo {
          width:90%;
          height: 50vh;
          object-fit: contain;
          margin-top:20vh;
          margin-left: auto;
          margin-right: auto;
          display:block;
        }
        .on-center {
          margin-top:60%;
        }
        .col-right {
          background: #03045E;
          height: 100vh;
        }
        .col-left {
          background: #FDFDFD;
          height: 100vh;
          max-height: 100vh;
          padding-left: 36px;
          padding-right: 36px;
        }
        h1 {
          font-family: "Poppins", sans-serif;
          font-weight: bold;
          font-size: 3.75rem;
          color: #323232;
          text-align:center;
          margin-bottom: 75px;
        }
        h3 {
          font-weight: 600;
        }
        .inline-icon {
          position: absolute;
          bottom: .45rem;
          right: .45rem;
          font-size: 24px;
          cursor:pointer;
        }
        .btn-warning {
          color: #2B2D42 !important;
          font-weight: bold !important;
          border-radius: 10px;
          text-transform: uppercase;
          height:40px;
          font-size: 14px;
        }
        .custom-input {
          background: #f5f5f5;
          border: 1px solid #a8dadc !important;
          border-radius: 10px !important;
          font-size: 14px !important;
          color: #445455 !important;
          height:40px;
          padding-left:17px;
        }
        .custom-input:focus {
          background: #f5f5f5;
        }
      `
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./store/actionCreator.js":
/*!********************************!*\
  !*** ./store/actionCreator.js ***!
  \********************************/
/*! exports provided: setUser, setAccessToken, setLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return setUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAccessToken", function() { return setAccessToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoading", function() { return setLoading; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./store/actions.js");

const setUser = payload => ({
  type: _actions__WEBPACK_IMPORTED_MODULE_0__["SET_USER"],
  payload
});
const setAccessToken = payload => ({
  type: _actions__WEBPACK_IMPORTED_MODULE_0__["SET_ACCESS_TOKEN"],
  payload
});
const setLoading = payload => ({
  type: _actions__WEBPACK_IMPORTED_MODULE_0__["SET_LOADING"],
  payload
});

/***/ }),

/***/ "./store/actions.js":
/*!**************************!*\
  !*** ./store/actions.js ***!
  \**************************/
/*! exports provided: SET_USER, SET_ACCESS_TOKEN, SET_LOADING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER", function() { return SET_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ACCESS_TOKEN", function() { return SET_ACCESS_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOADING", function() { return SET_LOADING; });
const SET_USER = "SET_USER";
const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";
const SET_LOADING = "SET_LOADING";

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-toast-notifications":
/*!********************************************!*\
  !*** external "react-toast-notifications" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toast-notifications");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9uQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZm9ybWlrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdG9hc3Qtbm90aWZpY2F0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInl1cFwiIl0sIm5hbWVzIjpbIkJBU0VfVVJMIiwiYXhpb3NHZW5lcmFsIiwiQXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwicmVzcG9uc2VUeXBlIiwiRm9ybVNjaGVtYSIsIll1cCIsInNoYXBlIiwicGFzc3dvcmQiLCJyZXF1aXJlZCIsIkZvcm1TY2hlbWFQYXNzd29yZCIsInVsYW5naV9wYXNzd29yZCIsIm9uZU9mIiwiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJhY2Nlc3NUb2tlbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJhZGRUb2FzdCIsInVzZVRvYXN0cyIsInVzZUVmZmVjdCIsIlJvdXRlciIsInJlcGxhY2UiLCJ1cmwiLCJVUkxTZWFyY2hQYXJhbXMiLCJsb2NhdGlvbiIsInNlYXJjaCIsImdldCIsInNldFRva2VuVmVyaWZ5IiwidG9TdHJpbmciLCJzZXRJc05ld1Bhc3N3b3JkIiwiZG9Mb2dpbiIsInZhbHVlcyIsInNldExvYWRpbmciLCJib2R5IiwiZW1haWwiLCJhcHBfaWQiLCJyZXNwb25zZSIsInBvc3QiLCJzdGF0dXMiLCJkYXRhIiwic2V0VG9rZW5UZW1wIiwidGVtcF90b2tlbiIsInNldElzT3RwIiwic2V0T1RQIiwiZXJyb3IiLCJtZXNzYWdlIiwiYXBwZWFyYW5jZSIsImZvcm1payIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJ2YWxpZGF0aW9uU2NoZW1hIiwib25TdWJtaXQiLCJmb3JtaWtQYXNzd29yZCIsImVuYWJsZVJlaW5pdGlhbGl6ZSIsImRvQ2hhbmdlUGFzc3dvcmQiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJlcnJvcnMiLCJpc1N1Ym1pdHRpbmciLCJzZXRVc2VyIiwicGF5bG9hZCIsInR5cGUiLCJTRVRfVVNFUiIsInNldEFjY2Vzc1Rva2VuIiwiU0VUX0FDQ0VTU19UT0tFTiIsIlNFVF9MT0FESU5HIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLFFBQVEsR0FBRyxzQkFBakI7QUFFQSxNQUFNQyxZQUFZLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sQ0FBYTtBQUN2Q0MsU0FBTyxFQUFFSixRQUQ4QjtBQUV2Q0ssY0FBWSxFQUFFO0FBRnlCLENBQWIsQ0FBckIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUMsVUFBVSxHQUFHQywwQ0FBQSxHQUFhQyxLQUFiLENBQW1CO0FBQ3BDQyxVQUFRLEVBQUVGLDBDQUFBLEdBQWFHLFFBQWIsQ0FBc0IsK0JBQXRCO0FBRDBCLENBQW5CLENBQW5CO0FBSUEsTUFBTUMsa0JBQWtCLEdBQUdKLDBDQUFBLEdBQWFDLEtBQWIsQ0FBbUI7QUFDNUNDLFVBQVEsRUFBRUYsMENBQUEsR0FBYUcsUUFBYixDQUFzQiwrQkFBdEIsQ0FEa0M7QUFFNUNFLGlCQUFlLEVBQUVMLDBDQUFBLEdBQWFHLFFBQWIsQ0FBc0IscUNBQXRCLENBRjJCO0FBRzVDRSxpQkFBZSxFQUFFTCwwQ0FBQSxHQUFhTSxLQUFiLENBQ2YsQ0FBQ04sdUNBQUEsQ0FBUSxVQUFSLENBQUQsRUFBc0IsSUFBdEIsQ0FEZSxFQUVmLHNCQUZlO0FBSDJCLENBQW5CLENBQTNCO0FBU2UsU0FBU08sSUFBVCxHQUFnQjtBQUM3QixRQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsUUFBTUMsV0FBVyxHQUFHQywrREFBVyxDQUFFQyxLQUFELElBQVdBLEtBQUssQ0FBQ0YsV0FBbEIsQ0FBL0I7QUFDQSxRQUFNO0FBQUVHO0FBQUYsTUFBZUMsNEVBQVMsRUFBOUI7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSUwsV0FBSixFQUFpQjtBQUNmTSx3REFBTSxDQUFDQyxPQUFQLENBQWUsWUFBZjtBQUNEOztBQUVELFVBQU1DLEdBQUcsR0FBRyxJQUFJQyxlQUFKLENBQW9CQyxRQUFRLENBQUNDLE1BQTdCLENBQVo7O0FBQ0EsUUFBSUgsR0FBRyxDQUFDSSxHQUFKLENBQVEsT0FBUixLQUFvQixJQUF4QixFQUE4QjtBQUM1QkMsb0JBQWMsQ0FBQ0wsR0FBRyxDQUFDSSxHQUFKLENBQVEsT0FBUixFQUFpQkUsUUFBakIsRUFBRCxDQUFkO0FBQ0FDLHNCQUFnQixDQUFDLElBQUQsQ0FBaEI7QUFDRDtBQUNGLEdBVlEsRUFVTixFQVZNLENBQVQ7O0FBWUEsUUFBTUMsT0FBTyxHQUFHLE1BQU9DLE1BQVAsSUFBa0I7QUFDaEMsUUFBSTtBQUNGbkIsY0FBUSxDQUFDb0IsdUVBQVUsQ0FBQyxJQUFELENBQVgsQ0FBUjtBQUNBLFlBQU1DLElBQUksR0FBRztBQUNYQyxhQUFLLEVBQUVILE1BQU0sQ0FBQ0csS0FESDtBQUVYNUIsZ0JBQVEsRUFBRXlCLE1BQU0sQ0FBQ3pCLFFBRk47QUFHWDZCLGNBQU0sRUFBRTtBQUhHLE9BQWI7QUFLQSxZQUFNQyxRQUFRLEdBQUcsTUFBTXRDLDREQUFZLENBQUN1QyxJQUFiLENBQWtCLFFBQWxCLEVBQTRCSixJQUE1QixDQUF2QjtBQUNBLFlBQU07QUFBRUssY0FBRjtBQUFVQztBQUFWLFVBQW1CSCxRQUF6QixDQVJFLENBU0Y7O0FBQ0EsVUFBSUUsTUFBTSxLQUFLLEdBQWYsRUFBb0I7QUFDbEJFLG9CQUFZLENBQUNELElBQUksQ0FBQ0EsSUFBTCxDQUFVRSxVQUFYLENBQVo7QUFDQTdCLGdCQUFRLENBQUNvQix1RUFBVSxDQUFDLEtBQUQsQ0FBWCxDQUFSO0FBQ0FVLGdCQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0FDLGNBQU0sQ0FBQyxFQUFELENBQU47QUFDRDtBQUNGLEtBaEJELENBZ0JFLE9BQU9DLEtBQVAsRUFBYztBQUNkaEMsY0FBUSxDQUFDb0IsdUVBQVUsQ0FBQyxLQUFELENBQVgsQ0FBUjtBQUNBZixjQUFRLENBQUMyQixLQUFLLENBQUNSLFFBQU4sQ0FBZUcsSUFBZixDQUFvQk0sT0FBckIsRUFBOEI7QUFBRUMsa0JBQVUsRUFBRTtBQUFkLE9BQTlCLENBQVI7QUFDRDtBQUNGLEdBckJEOztBQXVCQSxRQUFNQyxNQUFNLEdBQUdDLHdEQUFTLENBQUM7QUFDdkJDLGlCQUFhLEVBQUU7QUFDYmYsV0FBSyxFQUFFLEVBRE07QUFFYjVCLGNBQVEsRUFBRTtBQUZHLEtBRFE7QUFLdkI0QyxvQkFBZ0IsRUFBRS9DLFVBTEs7QUFNdkJnRCxZQUFRLEVBQUdwQixNQUFELElBQVlELE9BQU8sQ0FBQ0MsTUFBRDtBQU5OLEdBQUQsQ0FBeEI7QUFTQSxRQUFNcUIsY0FBYyxHQUFHSix3REFBUyxDQUFDO0FBQy9CQyxpQkFBYSxFQUFFO0FBQ2IzQyxjQUFRLEVBQUUsRUFERztBQUViRyxxQkFBZSxFQUFFO0FBRkosS0FEZ0I7QUFLL0J5QyxvQkFBZ0IsRUFBRTFDLGtCQUxhO0FBTS9CNkMsc0JBQWtCLEVBQUUsS0FOVztBQU8vQkYsWUFBUSxFQUFHcEIsTUFBRCxJQUFZdUIsZ0JBQWdCLENBQUN2QixNQUFEO0FBUFAsR0FBRCxDQUFoQztBQVVBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFLHFFQUFDLHlEQUFEO0FBQVcsV0FBSyxNQUFoQjtBQUFBLDZCQUNFLHFFQUFDLG1EQUFEO0FBQUssaUJBQVMsRUFBQyxpQkFBZjtBQUFBLGdDQUNFLHFFQUFDLG1EQUFEO0FBQUssbUJBQVMsRUFBQyxVQUFmO0FBQTBCLFlBQUUsRUFBQyxHQUE3QjtBQUFpQyxZQUFFLEVBQUMsR0FBcEM7QUFBQSxpQ0FDRTtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBQyxXQUFmO0FBQUEsc0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFFRTtBQUFJLHlCQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRixlQUdFO0FBQU0sd0JBQVEsRUFBRWdCLE1BQU0sQ0FBQ1EsWUFBdkI7QUFBcUMsc0JBQU0sRUFBQyxNQUE1QztBQUFBLHdDQUNFLHFFQUFDLG9EQUFELENBQU0sS0FBTjtBQUFZLDJCQUFTLEVBQUMsTUFBdEI7QUFBQSwwQ0FDRSxxRUFBQyxvREFBRCxDQUFNLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsZUFFRSxxRUFBQyxvREFBRCxDQUFNLE9BQU47QUFDRSw2QkFBUyxFQUFDLGNBRFo7QUFFRSx3QkFBSSxFQUFDLE1BRlA7QUFHRSxnQ0FBWSxFQUFDLE9BSGY7QUFJRSx3QkFBSSxFQUFDLE9BSlA7QUFLRSw0QkFBUSxFQUFFUixNQUFNLENBQUNTLFlBTG5CO0FBTUUseUJBQUssRUFBRVQsTUFBTSxDQUFDaEIsTUFBUCxDQUFjRztBQU52QjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZGLEVBVUdhLE1BQU0sQ0FBQ1UsTUFBUCxDQUFjdkIsS0FBZCxpQkFDQztBQUFNLDZCQUFTLEVBQUMsc0JBQWhCO0FBQUEsOEJBQ0dhLE1BQU0sQ0FBQ1UsTUFBUCxDQUFjdkI7QUFEakI7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFpQkUscUVBQUMsb0RBQUQsQ0FBTSxLQUFOO0FBQUEsMENBQ0UscUVBQUMsb0RBQUQsQ0FBTSxLQUFOO0FBQVksMkJBQU8sRUFBQyxVQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixlQUVFLHFFQUFDLG9EQUFELENBQU0sT0FBTjtBQUNFLDZCQUFTLEVBQUMsY0FEWjtBQUVFLHdCQUFJLEVBQUMsVUFGUDtBQUdFLGdDQUFZLEVBQUMsTUFIZjtBQUlFLHdCQUFJLEVBQUMsVUFKUDtBQUtFLDRCQUFRLEVBQUVhLE1BQU0sQ0FBQ1MsWUFMbkI7QUFNRSx5QkFBSyxFQUFFVCxNQUFNLENBQUNoQixNQUFQLENBQWN6QjtBQU52QjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZGLEVBVUd5QyxNQUFNLENBQUNVLE1BQVAsQ0FBY25ELFFBQWQsaUJBQ0M7QUFBTSw2QkFBUyxFQUFDLHNCQUFoQjtBQUFBLDhCQUNHeUMsTUFBTSxDQUFDVSxNQUFQLENBQWNuRDtBQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFqQkYsZUFzQ0UscUVBQUMsc0RBQUQ7QUFDRSwwQkFBUSxFQUFFeUMsTUFBTSxDQUFDVyxZQURuQjtBQUVFLHlCQUFPLEVBQUMsU0FGVjtBQUdFLHNCQUFJLEVBQUMsUUFIUDtBQUlFLDJCQUFTLEVBQUMsTUFKWjtBQUtFLHVCQUFLLE1BTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBdENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUF5REUscUVBQUMsbURBQUQ7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBMkIsWUFBRSxFQUFDLEdBQTlCO0FBQWtDLFlBQUUsRUFBQyxHQUFyQztBQUFBLGlDQUNFLHFFQUFDLHFEQUFEO0FBQ0UsZUFBRyxFQUFDLDJFQUROO0FBRUUsZUFBRyxFQUFDLGVBRk47QUFHRSxxQkFBUyxFQUFDLHVCQUhaO0FBSUUsaUJBQUs7QUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF6REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBd0VFO0FBQUEsZ0JBQVM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyRU07QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhFRjtBQUFBLGtCQURGO0FBaUpELEM7Ozs7Ozs7Ozs7OztBQ3BPRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNTyxNQUFNQyxPQUFPLEdBQUlDLE9BQUQsS0FBYztBQUNuQ0MsTUFBSSxFQUFFQyxpREFENkI7QUFFbkNGO0FBRm1DLENBQWQsQ0FBaEI7QUFLQSxNQUFNRyxjQUFjLEdBQUlILE9BQUQsS0FBYztBQUMxQ0MsTUFBSSxFQUFFRyx5REFEb0M7QUFFMUNKO0FBRjBDLENBQWQsQ0FBdkI7QUFLQSxNQUFNNUIsVUFBVSxHQUFJNEIsT0FBRCxLQUFjO0FBQ3RDQyxNQUFJLEVBQUVJLG9EQURnQztBQUV0Q0w7QUFGc0MsQ0FBZCxDQUFuQixDOzs7Ozs7Ozs7Ozs7QUNoQlA7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNRSxRQUFRLEdBQUcsVUFBakI7QUFDQSxNQUFNRSxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsYUFBcEIsQzs7Ozs7Ozs7Ozs7QUNGUCxrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQkFTRV9VUkwgPSBcImh0dHBzOi8vbG9jYWxob3N0L3YxXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYXhpb3NHZW5lcmFsID0gQXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBCQVNFX1VSTCxcclxuICByZXNwb25zZVR5cGU6IFwianNvblwiLFxyXG59KTtcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLCBGb3JtLCBCdXR0b24sIEltYWdlIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBheGlvc0dlbmVyYWwgfSBmcm9tIFwiLi4vaGVscGVycy9nbG9iYWxcIjtcclxuaW1wb3J0IHsgc2V0QWNjZXNzVG9rZW4sIHNldFVzZXIsIHNldExvYWRpbmcgfSBmcm9tIFwiLi4vc3RvcmUvYWN0aW9uQ3JlYXRvclwiO1xyXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCB7IHVzZVRvYXN0cyB9IGZyb20gXCJyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zXCI7XHJcblxyXG5jb25zdCBGb3JtU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICBwYXNzd29yZDogWXVwLnN0cmluZygpLnJlcXVpcmVkKFwiKiBQYXNzd29yZCB0aWRhayBib2xlaCBrb3NvbmdcIiksXHJcbn0pO1xyXG5cclxuY29uc3QgRm9ybVNjaGVtYVBhc3N3b3JkID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICBwYXNzd29yZDogWXVwLnN0cmluZygpLnJlcXVpcmVkKFwiKiBQYXNzd29yZCB0aWRhayBib2xlaCBrb3NvbmdcIiksXHJcbiAgdWxhbmdpX3Bhc3N3b3JkOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXCIqVWxhbmdpIFBhc3N3b3JkIHRpZGFrIGJvbGVoIGtvc29uZ1wiKSxcclxuICB1bGFuZ2lfcGFzc3dvcmQ6IFl1cC5zdHJpbmcoKS5vbmVPZihcclxuICAgIFtZdXAucmVmKFwicGFzc3dvcmRcIiksIG51bGxdLFxyXG4gICAgXCJQYXNzd29yZCB0aWRhayBzYW1hIVwiXHJcbiAgKSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBhY2Nlc3NUb2tlbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWNjZXNzVG9rZW4pO1xyXG4gIGNvbnN0IHsgYWRkVG9hc3QgfSA9IHVzZVRvYXN0cygpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgIFJvdXRlci5yZXBsYWNlKFwiL2Rhc2hib2FyZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICBpZiAodXJsLmdldChcInRva2VuXCIpICE9IG51bGwpIHtcclxuICAgICAgc2V0VG9rZW5WZXJpZnkodXJsLmdldChcInRva2VuXCIpLnRvU3RyaW5nKCkpO1xyXG4gICAgICBzZXRJc05ld1Bhc3N3b3JkKHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZG9Mb2dpbiA9IGFzeW5jICh2YWx1ZXMpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgIGVtYWlsOiB2YWx1ZXMuZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHZhbHVlcy5wYXNzd29yZCxcclxuICAgICAgICBhcHBfaWQ6IFwiYWRtaW4tcGFuZWxcIixcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0dlbmVyYWwucG9zdChcIi9sb2dpblwiLCBib2R5KTtcclxuICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgc2V0VG9rZW5UZW1wKGRhdGEuZGF0YS50ZW1wX3Rva2VuKTtcclxuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgICAgc2V0SXNPdHAodHJ1ZSk7XHJcbiAgICAgICAgc2V0T1RQKFwiXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgIGFkZFRvYXN0KGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSwgeyBhcHBlYXJhbmNlOiBcImVycm9yXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcclxuICAgIGluaXRpYWxWYWx1ZXM6IHtcclxuICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb25TY2hlbWE6IEZvcm1TY2hlbWEsXHJcbiAgICBvblN1Ym1pdDogKHZhbHVlcykgPT4gZG9Mb2dpbih2YWx1ZXMpLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBmb3JtaWtQYXNzd29yZCA9IHVzZUZvcm1payh7XHJcbiAgICBpbml0aWFsVmFsdWVzOiB7XHJcbiAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICB1bGFuZ2lfcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvblNjaGVtYTogRm9ybVNjaGVtYVBhc3N3b3JkLFxyXG4gICAgZW5hYmxlUmVpbml0aWFsaXplOiBmYWxzZSxcclxuICAgIG9uU3VibWl0OiAodmFsdWVzKSA9PiBkb0NoYW5nZVBhc3N3b3JkKHZhbHVlcyksXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TG9naW4gLSBMSVNUUklLPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Q29udGFpbmVyIGZsdWlkPlxyXG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImNvbC1sZWZ0XCIgeGw9XCIzXCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvbi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5MaXN0cmlrPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+TWFzdWs8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9IG1ldGhvZD1cIlBPU1RcIj5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlVzZXJuYW1lPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLmVtYWlsICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yZWQtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMucGFzc3dvcmQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXJlZC01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9mb3Jnb3QtcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb3Jnb3QtcGFzc3dvcmQtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTHVwYSBQYXNzd29yZD9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Zm9ybWlrLmlzU3VibWl0dGluZ31cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwid2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJjb2wtcmlnaHRcIiB4bD1cIjlcIiBsZz1cIjlcIj5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuaW1pZ3Jhc2kuZ28uaWQvdXBsb2Fkcy9sb2dvLzEwLTUyLTEzLWxvZ28taW1pZ3Jhc2lfLV9Db3B5LnBuZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiTG9nbyBJbWlncmFzaVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1pZ3Jhc2ktbG9nbyBteC1hdXRvXCJcclxuICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8c3R5bGU+e2BcclxuICAgICAgICAuZm9yZ290LXBhc3N3b3JkLWxpbmsge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgY29sb3I6ICM0MzYxRUU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWlncmFzaS1sb2dvIHtcclxuICAgICAgICAgIHdpZHRoOjkwJTtcclxuICAgICAgICAgIGhlaWdodDogNTB2aDtcclxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOjIwdmg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vbi1jZW50ZXIge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDo2MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2wtcmlnaHQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzAzMDQ1RTtcclxuICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2wtbGVmdCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkRGREZEO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAzNnB4O1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMzZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDMuNzVyZW07XHJcbiAgICAgICAgICBjb2xvcjogIzMyMzIzMjtcclxuICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNzVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmlubGluZS1pY29uIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJvdHRvbTogLjQ1cmVtO1xyXG4gICAgICAgICAgcmlnaHQ6IC40NXJlbTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuLXdhcm5pbmcge1xyXG4gICAgICAgICAgY29sb3I6ICMyQjJENDIgIWltcG9ydGFudDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgIGhlaWdodDo0MHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY3VzdG9tLWlucHV0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYThkYWRjICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgIGNvbG9yOiAjNDQ1NDU1ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBoZWlnaHQ6NDBweDtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDoxN3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY3VzdG9tLWlucHV0OmZvY3VzIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgU0VUX0FDQ0VTU19UT0tFTixcclxuICBTRVRfTE9BRElORyxcclxuICBTRVRfVVNFUixcclxufSBmcm9tIFwiLi9hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0VXNlciA9IChwYXlsb2FkKSA9PiAoe1xyXG4gIHR5cGU6IFNFVF9VU0VSLFxyXG4gIHBheWxvYWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEFjY2Vzc1Rva2VuID0gKHBheWxvYWQpID0+ICh7XHJcbiAgdHlwZTogU0VUX0FDQ0VTU19UT0tFTixcclxuICBwYXlsb2FkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRMb2FkaW5nID0gKHBheWxvYWQpID0+ICh7XHJcbiAgdHlwZTogU0VUX0xPQURJTkcsXHJcbiAgcGF5bG9hZCxcclxufSk7XHJcbiIsImV4cG9ydCBjb25zdCBTRVRfVVNFUiA9IFwiU0VUX1VTRVJcIjtcclxuZXhwb3J0IGNvbnN0IFNFVF9BQ0NFU1NfVE9LRU4gPSBcIlNFVF9BQ0NFU1NfVE9LRU5cIjtcclxuZXhwb3J0IGNvbnN0IFNFVF9MT0FESU5HID0gXCJTRVRfTE9BRElOR1wiO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmb3JtaWtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ5dXBcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==