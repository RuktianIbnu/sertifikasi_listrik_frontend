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
/*! exports provided: BASE_URL, axiosGeneral, errorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axiosGeneral", function() { return axiosGeneral; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorHandler", function() { return errorHandler; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const BASE_URL = "http://localhost:9000/v1";
const axiosGeneral = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: BASE_URL,
  responseType: "json"
});
const errorHandler = error => {
  return error.response !== undefined ? `Response ${error.response.status}: ${error.response.data.message}` : error.message;
};

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
  password: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required("* Password tidak boleh kosong")
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
        username: values.username,
        password: values.password
      };
      const response = await _helpers_global__WEBPACK_IMPORTED_MODULE_6__["axiosGeneral"].post("/login", body);
      const {
        status,
        data
      } = response; // console.log(data);

      if (status === 200) {
        dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_7__["setUser"])(data.data.user_metadata));
        dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_7__["setAccessToken"])(data.data.token));
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.replace("/dashboard");
        dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_7__["setLoading"])(false));
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
      username: "",
      password: ""
    },
    validationSchema: FormSchema,
    onSubmit: values => doLogin(values)
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container mt-52",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row justify-content-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-6 bg-blue-300 my-10 ",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: "text-center text-green-600 my-4",
              children: "LISTRIK"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
              className: "my-10",
              onSubmit: formik.handleSubmit,
              method: "POST",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "form-group",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  children: "Username "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  className: "custom-input form-control",
                  type: "text",
                  placeholder: "Username",
                  autoComplete: "false",
                  name: "username",
                  onChange: formik.handleChange,
                  value: formik.values.username
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 19
                }, this), formik.errors.username && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "text-xs text-red-500",
                  children: formik.errors.username
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "form-group",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  for: "exampleInputPassword1",
                  children: "Password"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "password",
                  className: "form-control",
                  placeholder: "Password",
                  name: "password",
                  onChange: formik.handleChange,
                  value: formik.values.password
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 19
                }, this), formik.errors.password && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "text-xs text-red-500",
                  children: formik.errors.password
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"] // disabled={formik.isSubmitting}
              , {
                variant: "warning",
                type: "submit",
                className: "mt-4 font-bold text-base",
                block: true,
                children: "Login"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, this)
  }, void 0, false);
} // return (
// <>
//   <Head>
//     <title>Login - LISTRIK</title>
//   </Head>
//   <Container className="bg-green-500 justify-content-md-center mt-28 ">
//     <Row>
//         <h1>Listrik</h1>
//         <h3 className="font-semibold">Masuk</h3>
//         <form onSubmit={formik.handleSubmit} method="POST">
//           <div className="mt-5">
//             <Form.Label>Username</Form.Label>
//             <Form.Control
//               className="custom-input"
//               type="text"
//               autoComplete="false"
//               name="email"
//               onChange={formik.handleChange}
//               value={formik.values.email}
//             />
//             {formik.errors.email && (
//               <span className="text-xs text-red-500">
//                 {formik.errors.email}
//               </span>
//             )}
//           </div>
//           <div>
//             <Form.Label htmlFor="password">Password</Form.Label>
//             <Form.Control
//               className="custom-input"
//               type="password"
//               autoComplete="true"
//               name="password"
//               onChange={formik.handleChange}
//               value={formik.values.password}
//             />
//             {formik.errors.password && (
//               <span className="text-xs text-red-500">
//                 {formik.errors.password}
//               </span>
//             )}
//           </div>
//           <Button
//             disabled={formik.isSubmitting}
//             variant="warning"
//             type="submit"
//             className="mt-4"
//             block
//           >
//             Login
//           </Button>
//         </form>
//     </Row>
//   </Container>
//   <style>{`
//     .imigrasi-logo {
//       width:90%;
//       height: 50vh;
//       object-fit: contain;
//       margin-top:20vh;
//       margin-left: auto;
//       margin-right: auto;
//       display:block;
//     }
//     .col-right {
//       background: #03045E;
//       height: 100vh;
//     }
//     .col-left {
//       background: #0e979c;
//       height: 100vh;
//       max-height: 100vh;
//       padding-left: 36px;
//       padding-right: 36px;
//     }
//     h1 {
//       font-family: "Poppins", sans-serif;
//       font-weight: bold;
//       font-size: 3.75rem;
//       color: #0e979c;
//       text-align:center;
//       margin-bottom: 75px;
//     }
//     h3 {
//       font-weight: 600;
//     }
//     .inline-icon {
//       position: absolute;
//       bottom: .45rem;
//       right: .45rem;
//       font-size: 24px;
//       cursor:pointer;
//     }
//     .btn-warning {
//       color: #2B2D42 !important;
//       font-weight: bold !important;
//       border-radius: 10px;
//       text-transform: uppercase;
//       height:40px;
//       font-size: 14px;
//     }
//     .custom-input {
//       background: #f5f5f5;
//       border: 1px solid #a8dadc !important;
//       border-radius: 10px !important;
//       font-size: 14px !important;
//       color: #445455 !important;
//       height:40px;
//       padding-left:17px;
//     }
//     .custom-input:focus {
//       background: #f5f5f5;
//     }
//   `}</style>
// </>
// );
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9uQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZm9ybWlrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdG9hc3Qtbm90aWZpY2F0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInl1cFwiIl0sIm5hbWVzIjpbIkJBU0VfVVJMIiwiYXhpb3NHZW5lcmFsIiwiQXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwicmVzcG9uc2VUeXBlIiwiZXJyb3JIYW5kbGVyIiwiZXJyb3IiLCJyZXNwb25zZSIsInVuZGVmaW5lZCIsInN0YXR1cyIsImRhdGEiLCJtZXNzYWdlIiwiRm9ybVNjaGVtYSIsIll1cCIsInNoYXBlIiwicGFzc3dvcmQiLCJyZXF1aXJlZCIsIkZvcm1TY2hlbWFQYXNzd29yZCIsIkhvbWUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiYWNjZXNzVG9rZW4iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYWRkVG9hc3QiLCJ1c2VUb2FzdHMiLCJ1c2VFZmZlY3QiLCJSb3V0ZXIiLCJyZXBsYWNlIiwidXJsIiwiVVJMU2VhcmNoUGFyYW1zIiwibG9jYXRpb24iLCJzZWFyY2giLCJnZXQiLCJzZXRUb2tlblZlcmlmeSIsInRvU3RyaW5nIiwic2V0SXNOZXdQYXNzd29yZCIsImRvTG9naW4iLCJ2YWx1ZXMiLCJzZXRMb2FkaW5nIiwiYm9keSIsInVzZXJuYW1lIiwicG9zdCIsInNldFVzZXIiLCJ1c2VyX21ldGFkYXRhIiwic2V0QWNjZXNzVG9rZW4iLCJ0b2tlbiIsImFwcGVhcmFuY2UiLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwidmFsaWRhdGlvblNjaGVtYSIsIm9uU3VibWl0IiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiZXJyb3JzIiwicGF5bG9hZCIsInR5cGUiLCJTRVRfVVNFUiIsIlNFVF9BQ0NFU1NfVE9LRU4iLCJTRVRfTE9BRElORyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7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Q0FBZCxDQUFuQixDOzs7Ozs7Ozs7Ozs7QUNoQlA7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNRSxRQUFRLEdBQUcsVUFBakI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsYUFBcEIsQzs7Ozs7Ozs7Ozs7QUNGUCxrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQkFTRV9VUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6OTAwMC92MVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF4aW9zR2VuZXJhbCA9IEF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogQkFTRV9VUkwsXHJcbiAgcmVzcG9uc2VUeXBlOiBcImpzb25cIixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZXJyb3JIYW5kbGVyID0gKGVycm9yKSA9PiB7XHJcbiAgcmV0dXJuIGVycm9yLnJlc3BvbnNlICE9PSB1bmRlZmluZWRcclxuICAgID8gYFJlc3BvbnNlICR7ZXJyb3IucmVzcG9uc2Uuc3RhdHVzfTogJHtlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2V9YFxyXG4gICAgOiBlcnJvci5tZXNzYWdlO1xyXG59O1xyXG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIEZvcm0sIEJ1dHRvbiwgSW1hZ2UgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGF4aW9zR2VuZXJhbCB9IGZyb20gXCIuLi9oZWxwZXJzL2dsb2JhbFwiO1xyXG5pbXBvcnQgeyBzZXRBY2Nlc3NUb2tlbiwgc2V0VXNlciwgc2V0TG9hZGluZyB9IGZyb20gXCIuLi9zdG9yZS9hY3Rpb25DcmVhdG9yXCI7XHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCI7XHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IHsgdXNlVG9hc3RzIH0gZnJvbSBcInJlYWN0LXRvYXN0LW5vdGlmaWNhdGlvbnNcIjtcclxuXHJcbmNvbnN0IEZvcm1TY2hlbWEgPSBZdXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gIHBhc3N3b3JkOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXCIqIFBhc3N3b3JkIHRpZGFrIGJvbGVoIGtvc29uZ1wiKSxcclxufSk7XHJcblxyXG5jb25zdCBGb3JtU2NoZW1hUGFzc3dvcmQgPSBZdXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gIHBhc3N3b3JkOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXCIqIFBhc3N3b3JkIHRpZGFrIGJvbGVoIGtvc29uZ1wiKSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBhY2Nlc3NUb2tlbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWNjZXNzVG9rZW4pO1xyXG4gIGNvbnN0IHsgYWRkVG9hc3QgfSA9IHVzZVRvYXN0cygpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgIFJvdXRlci5yZXBsYWNlKFwiL2Rhc2hib2FyZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICBpZiAodXJsLmdldChcInRva2VuXCIpICE9IG51bGwpIHtcclxuICAgICAgc2V0VG9rZW5WZXJpZnkodXJsLmdldChcInRva2VuXCIpLnRvU3RyaW5nKCkpO1xyXG4gICAgICBzZXRJc05ld1Bhc3N3b3JkKHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZG9Mb2dpbiA9IGFzeW5jICh2YWx1ZXMpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgIHVzZXJuYW1lOiB2YWx1ZXMudXNlcm5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHZhbHVlcy5wYXNzd29yZCxcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0dlbmVyYWwucG9zdChcIi9sb2dpblwiLCBib2R5KTtcclxuICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0VXNlcihkYXRhLmRhdGEudXNlcl9tZXRhZGF0YSkpO1xyXG4gICAgICAgIGRpc3BhdGNoKHNldEFjY2Vzc1Rva2VuKGRhdGEuZGF0YS50b2tlbikpO1xyXG4gICAgICAgIFJvdXRlci5yZXBsYWNlKFwiL2Rhc2hib2FyZFwiKTtcclxuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgYWRkVG9hc3QoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCB7IGFwcGVhcmFuY2U6IFwiZXJyb3JcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xyXG4gICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvblNjaGVtYTogRm9ybVNjaGVtYSxcclxuICAgIG9uU3VibWl0OiAodmFsdWVzKSA9PiBkb0xvZ2luKHZhbHVlcyksXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG10LTUyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgYmctYmx1ZS0zMDAgbXktMTAgXCI+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtZ3JlZW4tNjAwIG15LTRcIj5MSVNUUklLPC9oMT5cclxuICAgICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktMTBcIlxyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q9XCJQT1NUXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPlVzZXJuYW1lIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1pbnB1dCBmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMudXNlcm5hbWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yZWQtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZXhhbXBsZUlucHV0UGFzc3dvcmQxXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMucGFzc3dvcmQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yZWQtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgLy8gZGlzYWJsZWQ9e2Zvcm1pay5pc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ3YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTQgZm9udC1ib2xkIHRleHQtYmFzZVwiXHJcbiAgICAgICAgICAgICAgICAgIGJsb2NrXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4vLyByZXR1cm4gKFxyXG4vLyA8PlxyXG4vLyAgIDxIZWFkPlxyXG4vLyAgICAgPHRpdGxlPkxvZ2luIC0gTElTVFJJSzwvdGl0bGU+XHJcbi8vICAgPC9IZWFkPlxyXG4vLyAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwIGp1c3RpZnktY29udGVudC1tZC1jZW50ZXIgbXQtMjggXCI+XHJcbi8vICAgICA8Um93PlxyXG4vLyAgICAgICAgIDxoMT5MaXN0cmlrPC9oMT5cclxuLy8gICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPk1hc3VrPC9oMz5cclxuLy8gICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH0gbWV0aG9kPVwiUE9TVFwiPlxyXG4vLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01XCI+XHJcbi8vICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlVzZXJuYW1lPC9Gb3JtLkxhYmVsPlxyXG4vLyAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbi8vICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWlucHV0XCJcclxuLy8gICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbi8vICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZmFsc2VcIlxyXG4vLyAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbi8vICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbi8vICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuZW1haWx9XHJcbi8vICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLmVtYWlsICYmIChcclxuLy8gICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtcmVkLTUwMFwiPlxyXG4vLyAgICAgICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMuZW1haWx9XHJcbi8vICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4vLyAgICAgICAgICAgICApfVxyXG4vLyAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICA8ZGl2PlxyXG4vLyAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvRm9ybS5MYWJlbD5cclxuLy8gICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4vLyAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1pbnB1dFwiXHJcbi8vICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuLy8gICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJ0cnVlXCJcclxuLy8gICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4vLyAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4vLyAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnBhc3N3b3JkfVxyXG4vLyAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy5wYXNzd29yZCAmJiAoXHJcbi8vICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXJlZC01MDBcIj5cclxuLy8gICAgICAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLnBhc3N3b3JkfVxyXG4vLyAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgKX1cclxuLy8gICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgPEJ1dHRvblxyXG4vLyAgICAgICAgICAgICBkaXNhYmxlZD17Zm9ybWlrLmlzU3VibWl0dGluZ31cclxuLy8gICAgICAgICAgICAgdmFyaWFudD1cIndhcm5pbmdcIlxyXG4vLyAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuLy8gICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNFwiXHJcbi8vICAgICAgICAgICAgIGJsb2NrXHJcbi8vICAgICAgICAgICA+XHJcbi8vICAgICAgICAgICAgIExvZ2luXHJcbi8vICAgICAgICAgICA8L0J1dHRvbj5cclxuLy8gICAgICAgICA8L2Zvcm0+XHJcbi8vICAgICA8L1Jvdz5cclxuLy8gICA8L0NvbnRhaW5lcj5cclxuLy8gICA8c3R5bGU+e2BcclxuLy8gICAgIC5pbWlncmFzaS1sb2dvIHtcclxuLy8gICAgICAgd2lkdGg6OTAlO1xyXG4vLyAgICAgICBoZWlnaHQ6IDUwdmg7XHJcbi8vICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbi8vICAgICAgIG1hcmdpbi10b3A6MjB2aDtcclxuLy8gICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbi8vICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuLy8gICAgICAgZGlzcGxheTpibG9jaztcclxuLy8gICAgIH1cclxuLy8gICAgIC5jb2wtcmlnaHQge1xyXG4vLyAgICAgICBiYWNrZ3JvdW5kOiAjMDMwNDVFO1xyXG4vLyAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLmNvbC1sZWZ0IHtcclxuLy8gICAgICAgYmFja2dyb3VuZDogIzBlOTc5YztcclxuLy8gICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuLy8gICAgICAgbWF4LWhlaWdodDogMTAwdmg7XHJcbi8vICAgICAgIHBhZGRpbmctbGVmdDogMzZweDtcclxuLy8gICAgICAgcGFkZGluZy1yaWdodDogMzZweDtcclxuLy8gICAgIH1cclxuLy8gICAgIGgxIHtcclxuLy8gICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4vLyAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICAgICAgZm9udC1zaXplOiAzLjc1cmVtO1xyXG4vLyAgICAgICBjb2xvcjogIzBlOTc5YztcclxuLy8gICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbi8vICAgICAgIG1hcmdpbi1ib3R0b206IDc1cHg7XHJcbi8vICAgICB9XHJcbi8vICAgICBoMyB7XHJcbi8vICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbi8vICAgICB9XHJcbi8vICAgICAuaW5saW5lLWljb24ge1xyXG4vLyAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICAgIGJvdHRvbTogLjQ1cmVtO1xyXG4vLyAgICAgICByaWdodDogLjQ1cmVtO1xyXG4vLyAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbi8vICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLmJ0bi13YXJuaW5nIHtcclxuLy8gICAgICAgY29sb3I6ICMyQjJENDIgIWltcG9ydGFudDtcclxuLy8gICAgICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuLy8gICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuLy8gICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuLy8gICAgICAgaGVpZ2h0OjQwcHg7XHJcbi8vICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICAgIH1cclxuLy8gICAgIC5jdXN0b20taW5wdXQge1xyXG4vLyAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4vLyAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYThkYWRjICFpbXBvcnRhbnQ7XHJcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuLy8gICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICAgIGNvbG9yOiAjNDQ1NDU1ICFpbXBvcnRhbnQ7XHJcbi8vICAgICAgIGhlaWdodDo0MHB4O1xyXG4vLyAgICAgICBwYWRkaW5nLWxlZnQ6MTdweDtcclxuLy8gICAgIH1cclxuLy8gICAgIC5jdXN0b20taW5wdXQ6Zm9jdXMge1xyXG4vLyAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4vLyAgICAgfVxyXG4vLyAgIGB9PC9zdHlsZT5cclxuLy8gPC8+XHJcbi8vICk7XHJcbi8vIH1cclxuIiwiaW1wb3J0IHtcclxuICBTRVRfQUNDRVNTX1RPS0VOLFxyXG4gIFNFVF9MT0FESU5HLFxyXG4gIFNFVF9VU0VSLFxyXG59IGZyb20gXCIuL2FjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRVc2VyID0gKHBheWxvYWQpID0+ICh7XHJcbiAgdHlwZTogU0VUX1VTRVIsXHJcbiAgcGF5bG9hZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0QWNjZXNzVG9rZW4gPSAocGF5bG9hZCkgPT4gKHtcclxuICB0eXBlOiBTRVRfQUNDRVNTX1RPS0VOLFxyXG4gIHBheWxvYWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldExvYWRpbmcgPSAocGF5bG9hZCkgPT4gKHtcclxuICB0eXBlOiBTRVRfTE9BRElORyxcclxuICBwYXlsb2FkLFxyXG59KTtcclxuIiwiZXhwb3J0IGNvbnN0IFNFVF9VU0VSID0gXCJTRVRfVVNFUlwiO1xyXG5leHBvcnQgY29uc3QgU0VUX0FDQ0VTU19UT0tFTiA9IFwiU0VUX0FDQ0VTU19UT0tFTlwiO1xyXG5leHBvcnQgY29uc3QgU0VUX0xPQURJTkcgPSBcIlNFVF9MT0FESU5HXCI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvcm1pa1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0LW5vdGlmaWNhdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInl1cFwiKTsiXSwic291cmNlUm9vdCI6IiJ9