module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/transaksi": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/transaksi/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/MainLayout.js":
/*!**********************************!*\
  !*** ./components/MainLayout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidebar */ "./components/Sidebar.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\project\\sertifikasi_listrik_frontend\\components\\MainLayout.js";





const MainLayout = ({
  children
}) => {
  const accessToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.accessToken);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!accessToken) {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.replace("/");
    }
  }, [accessToken]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "h-screen items-start flex",
    style: {
      background: "#FAFBFC"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w-full h-screen overflow-auto",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MainLayout);

/***/ }),

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sidebar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sidebar_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/MenuItem */ "./components/sidebar/MenuItem.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_actionCreator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/actionCreator */ "./store/actionCreator.js");

var _jsxFileName = "C:\\project\\sertifikasi_listrik_frontend\\components\\Sidebar.js";








const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  width: 15%;
  background: #007175;
  color: #fff;
`;
const MenuWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.ul`
  padding: 0px 15px;
`;
const Spacer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  width: auto;
`;
function Sidebar() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();

  const doLogout = () => {
    dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_8__["setAccessToken"])(null));
    dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_8__["setUser"])(null));
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.replace("/");
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Wrapper, {
    className: "flex-shrink-0 h-full overflow-y-auto",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      className: "p-4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
      className: "text-5xl font-bold text-center mb-36 text-yellow-300",
      children: "LISTRIK"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuWrapper, {
      className: "flex flex-col",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sidebar_MenuItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        text: "Dashboard",
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdHome"], {
          size: "24px",
          className: "inline-flex mr-3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 17
        }, this),
        name: "dashboard",
        onClick: () => next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/dashboard")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sidebar_MenuItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        text: "Master",
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__["Description"], {
          size: "24px",
          className: "inline-flex mr-3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }, this),
        name: "master",
        onClick: () => next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/master")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sidebar_MenuItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        text: "Transaksi",
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdPeople"], {
          size: "24px",
          className: "inline-flex mr-3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }, this),
        name: "transaksi",
        onClick: () => next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/transaksi")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sidebar_MenuItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        text: "Keluar",
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdPowerSettingsNew"], {
          size: "24px",
          className: "inline-flex mr-3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 17
        }, this),
        name: "report",
        onClick: doLogout
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/sidebar/MenuItem.js":
/*!****************************************!*\
  !*** ./components/sidebar/MenuItem.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\project\\sertifikasi_listrik_frontend\\components\\sidebar\\MenuItem.js";



const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.li`
  padding: 10px 0px 10px 22px;
  margin-bottom: 18px;
  cursor: pointer;
  font-weight: bold;
  background: ${props => props.isActive ? "#FFCD05" : ""};
  border-radius: 10px;
  color: ${props => props.isActive ? "#000" : "#FFF"};
`;
const IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.span`
  margin-right: 10px;
`;

const MenuItem = ({
  onClick,
  name,
  icon,
  text
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const [, path] = router.pathname.split("/");
  const isActive = path === name;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Wrapper, {
    onClick: onClick,
    isActive: isActive,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconWrapper, {
      children: icon
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined), text]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MenuItem);

/***/ }),

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

/***/ "./pages/transaksi/index.js":
/*!**********************************!*\
  !*** ./pages/transaksi/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Transaksi; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MainLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MainLayout */ "./components/MainLayout.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _penggunaan__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./penggunaan */ "./pages/transaksi/penggunaan.js");
/* harmony import */ var _tagihan__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tagihan */ "./pages/transaksi/tagihan.js");
/* harmony import */ var _pembayaran__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pembayaran */ "./pages/transaksi/pembayaran.js");

var _jsxFileName = "C:\\project\\sertifikasi_listrik_frontend\\pages\\transaksi\\index.js";







const Tabbar = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
  width: 100%;
  background: #fff;
  height: 60px;
  padding: 20px 40px 0px 40px;
`;
const TabItem = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
  font-weight: bold;
  margin-right: 2.5rem;
`;
function Transaksi() {
  const {
    0: tabActive,
    1: setTabActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("penggunaan");
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Transaksi - Listrik"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MainLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Tabbar, {
        className: "flex flex-row justify-items-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TabItem, {
          onClick: () => setTabActive("penggunaan"),
          className: `cursor-pointer ${tabActive === "penggunaan" ? "border-b-2 border-black text-black" : "text-gray-400"}`,
          children: "Penggunaan"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TabItem, {
          onClick: () => setTabActive("tagihan"),
          className: `cursor-pointer ${tabActive === "tagihan" ? "border-b-2 border-black text-black" : "text-gray-400"}`,
          children: "Tagihan"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TabItem, {
          onClick: () => setTabActive("pembayaran"),
          className: `cursor-pointer ${tabActive === "pembayaran" ? "border-b-2 border-black text-black" : "text-gray-400"}`,
          children: "Pembayaran"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), tabActive === "penggunaan" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_penggunaan__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 40
      }, this), tabActive === "tagihan" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tagihan__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 37
      }, this), tabActive === "pembayaran" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pembayaran__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 40
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./pages/transaksi/pembayaran.js":
/*!***************************************!*\
  !*** ./pages/transaksi/pembayaran.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-js-pagination */ "react-js-pagination");
/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_js_pagination__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toast-notifications */ "react-toast-notifications");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/global */ "./helpers/global.js");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @loadable/component */ "@loadable/component");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\project\\sertifikasi_listrik_frontend\\pages\\transaksi\\pembayaran.js";







const AddUser = _loadable_component__WEBPACK_IMPORTED_MODULE_7___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../components/user/AddUser */ "./components/user/AddUser.js")));
const EditUser = _loadable_component__WEBPACK_IMPORTED_MODULE_7___default()(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../components/user/EditUser */ "./components/user/EditUser.js")));

function Pembayaran() {
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const accessToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.accessToken);
  const {
    addToast
  } = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__["useToasts"])();
  const {
    0: showAdd,
    1: setShowAdd
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: showEdit,
    1: setShowEdit
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: selectedId,
    1: setSelectedId
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null); // Pagination

  const takeSize = 10;
  const {
    0: total,
    1: setTotal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: activePage,
    1: setActivePage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1);
  const {
    0: search,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const sort = "";
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    fetchUser();
  }, [search, showAdd, showEdit, activePage]);

  const handlePageChange = pageNumber => {
    setActivePage(pageNumber);
  };

  const fetchUser = async () => {
    try {
      const headers = {
        Authorization: accessToken
      };
      const response = await _helpers_global__WEBPACK_IMPORTED_MODULE_6__["axiosGeneral"].get("/resources/user", {
        headers,
        params: {
          page: activePage,
          limit: takeSize,
          search // sort,

        }
      });
      setUser([]);
      const {
        status,
        data
      } = response;

      if (status === 200) {
        setUser(data.data);
        setTotal(data.pagination.total_entries); // console.log(data.pagination.total_entries)
      }
    } catch (error) {
      addToast(Object(_helpers_global__WEBPACK_IMPORTED_MODULE_6__["errorHandler"])(error), {
        appearance: "error"
      });
    }
  };

  const deleteUser = async idUser => {
    try {
      const headers = {
        Authorization: accessToken
      };
      const response = await _helpers_global__WEBPACK_IMPORTED_MODULE_6__["axiosGeneral"].delete(`/resources/user/${idUser}`, {
        headers
      });
      const {
        status
      } = response;

      if (status === 200) {
        addToast("Berhasil hapus user", {
          appearance: "success"
        });
        fetchUser();
      }
    } catch (error) {
      addToast(Object(_helpers_global__WEBPACK_IMPORTED_MODULE_6__["errorHandler"])(error), {
        appearance: "error"
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "my-10 px-10",
    children: showAdd ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AddUser, {
      show: showAdd,
      setShow: val => setShowAdd(val)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }, this) : showEdit ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(EditUser, {
      id: selectedId,
      show: showEdit,
      setShow: val => setShowEdit(val)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "bg-white shadow w-full rounded px-6 py-10",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "font-bold text-2xl text-black mb-20",
          children: "Data User"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-row justify-between items-center mt-4 mb-8",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ButtonAdd, {
            onClick: () => setShowAdd(!showAdd),
            children: "Data Baru"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-row break-normal items-center border-b-2 px-3 py-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 font-bold w-20",
            children: "#"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 font-bold w-11/12",
            children: "username"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 font-bold w-11/12",
            children: "nama user"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 font-bold w-11/12",
            children: "level"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm font-bold ml-6 mb-0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 13
        }, this), user.map((item, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            background: index % 2 === 0 ? "#E7E7E7" : "#F3F3F3"
          },
          className: "flex flex-row break-normal py-2 px-3 items-center hover:opacity-80",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 w-20",
            children: index + 1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 w-11/12",
            children: item.username
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 w-11/12",
            children: item.nama_admin
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 w-11/12",
            children: item.id_level
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex flex-row justify-end ml-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              style: {
                color: "#6F6F6F"
              },
              onClick: () => {
                setSelectedId(item.id_user);
                setShowEdit(!showEdit);
              },
              className: "material-icons cursor-pointer mr-4",
              children: "edit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              onClick: () => {
                if (window.confirm(`Yakin hapus ` + item.username + ` ?`)) {
                  deleteUser(item.id_user);
                }
              },
              style: {
                color: "#6F6F6F"
              },
              className: "material-icons cursor-pointer",
              children: "delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 17
          }, this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 15
        }, this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full mt-8 flex flex-row justify-end items-end",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_js_pagination__WEBPACK_IMPORTED_MODULE_3___default.a, {
            activePage: activePage,
            itemsCountPerPage: takeSize,
            totalItemsCount: total,
            pageRangeDisplayed: 5,
            onChange: handlePageChange,
            itemClass: "bg-blue-100 py-2 px-4 mx-1 rounded font-bold",
            linkClass: "text-gray-700 hover:no-underline hover:text-gray-700",
            hideFirstLastPages: true,
            prevPageText: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              style: {
                color: "#6F6F6F"
              },
              className: "material-icons",
              children: "arrow_back"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 19
            }, this),
            nextPageText: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              style: {
                color: "#6F6F6F"
              },
              className: "material-icons",
              children: "arrow_forward"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 19
            }, this),
            activeClass: "bg-blue-400",
            activeLinkClass: "text-white"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 5
  }, this);
}

const ButtonAdd = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  font-size: 14px;
  background: #4361ee;
  color: #fff;
  padding: 10px 23px;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
`;
/* harmony default export */ __webpack_exports__["default"] = (Pembayaran);

/***/ }),

/***/ "./pages/transaksi/penggunaan.js":
/*!***************************************!*\
  !*** ./pages/transaksi/penggunaan.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-js-pagination */ "react-js-pagination");
/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_js_pagination__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toast-notifications */ "react-toast-notifications");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/global */ "./helpers/global.js");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @loadable/component */ "@loadable/component");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\project\\sertifikasi_listrik_frontend\\pages\\transaksi\\penggunaan.js";







const AddPenggunaan = _loadable_component__WEBPACK_IMPORTED_MODULE_7___default()(() => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../../components/penggunaan/AddPenggunaan */ "./components/penggunaan/AddPenggunaan.js")));
const EditPenggunaan = _loadable_component__WEBPACK_IMPORTED_MODULE_7___default()(() => __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../../components/penggunaan/EditPenggunaan */ "./components/penggunaan/EditPenggunaan.js")));

function Penggunaan() {
  const {
    0: penggunaan,
    1: setPenggunaan
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const accessToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.accessToken);
  const {
    addToast
  } = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__["useToasts"])();
  const {
    0: showAdd,
    1: setShowAdd
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: showEdit,
    1: setShowEdit
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: selectedId,
    1: setSelectedId
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null); // Pagination

  const takeSize = 10;
  const {
    0: total,
    1: setTotal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: activePage,
    1: setActivePage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1);
  const {
    0: search,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const sort = "";
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    fetchPenggunaan();
  }, [search, showAdd, showEdit, activePage]);

  const handlePageChange = pageNumber => {
    setActivePage(pageNumber);
  };

  const fetchPenggunaan = async () => {
    try {
      const headers = {
        Authorization: accessToken
      };
      const response = await _helpers_global__WEBPACK_IMPORTED_MODULE_6__["axiosGeneral"].get("/resources/penggunaan", {
        headers,
        params: {
          page: activePage,
          limit: takeSize,
          search // sort,

        }
      });
      setPenggunaan([]);
      const {
        status,
        data
      } = response;

      if (status === 200) {
        setPenggunaan(data.data);
        setTotal(data.pagination.total_entries); // console.log(data.pagination.total_entries)
      }
    } catch (error) {
      addToast(Object(_helpers_global__WEBPACK_IMPORTED_MODULE_6__["errorHandler"])(error), {
        appearance: "error"
      });
    }
  };

  const deletePenggunaan = async id_penggunaan => {
    try {
      const headers = {
        Authorization: accessToken
      };
      const response = await _helpers_global__WEBPACK_IMPORTED_MODULE_6__["axiosGeneral"].delete(`/resources/penggunaan/${id_penggunaan}`, {
        headers
      });
      const {
        status
      } = response;

      if (status === 200) {
        addToast("Berhasil hapus penggunaan", {
          appearance: "success"
        });
        fetchPenggunaan();
      }
    } catch (error) {
      addToast(Object(_helpers_global__WEBPACK_IMPORTED_MODULE_6__["errorHandler"])(error), {
        appearance: "error"
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "my-10 px-10",
    children: showAdd ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AddPenggunaan, {
      show: showAdd,
      setShow: val => setShowAdd(val)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }, this) : showEdit ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(EditPenggunaan, {
      id: selectedId,
      show: showEdit,
      setShow: val => setShowEdit(val)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "bg-white shadow w-full rounded px-6 py-10",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "font-bold text-2xl text-black mb-20",
          children: "Data Penggunaan"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-row justify-between items-center mt-4 mb-8",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ButtonAdd, {
            onClick: () => setShowAdd(!showAdd),
            children: "Data Baru"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-row break-normal items-center border-b-2 px-3 py-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 font-bold w-20",
            children: "#"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 font-bold w-11/12",
            children: "Pelanggan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 font-bold w-11/12",
            children: "Bulan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 font-bold w-11/12",
            children: "Tahun"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 font-bold w-11/12",
            children: "Meter Awal"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 font-bold w-11/12",
            children: "Meter Akhir"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm font-bold ml-6 mb-0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 13
        }, this), penggunaan.map((item, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            background: index % 2 === 0 ? "#E7E7E7" : "#F3F3F3"
          },
          className: "flex flex-row break-normal py-2 px-3 items-center hover:opacity-80",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 w-20",
            children: index + 1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 w-11/12",
            children: item.id_penggunaan
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 w-11/12",
            children: item.bulan
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 w-11/12",
            children: item.tahun
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 w-11/12",
            children: item.meter_awal
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 w-11/12",
            children: item.meter_akhir
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex flex-row justify-end ml-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              style: {
                color: "#6F6F6F"
              },
              onClick: () => {
                setSelectedId(item.id_penggunaan);
                setShowEdit(!showEdit);
              },
              className: "material-icons cursor-pointer mr-4",
              children: "edit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              onClick: () => {
                if (window.confirm(`Yakin hapus ` + item.id_pelanggan + ` ?`)) {
                  deletePenggunaan(item.id_penggunaan);
                }
              },
              style: {
                color: "#6F6F6F"
              },
              className: "material-icons cursor-pointer",
              children: "delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 17
          }, this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 15
        }, this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full mt-8 flex flex-row justify-end items-end",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_js_pagination__WEBPACK_IMPORTED_MODULE_3___default.a, {
            activePage: activePage,
            itemsCountPerPage: takeSize,
            totalItemsCount: total,
            pageRangeDisplayed: 5,
            onChange: handlePageChange,
            itemClass: "bg-blue-100 py-2 px-4 mx-1 rounded font-bold",
            linkClass: "text-gray-700 hover:no-underline hover:text-gray-700",
            hideFirstLastPages: true,
            prevPageText: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              style: {
                color: "#6F6F6F"
              },
              className: "material-icons",
              children: "arrow_back"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 19
            }, this),
            nextPageText: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              style: {
                color: "#6F6F6F"
              },
              className: "material-icons",
              children: "arrow_forward"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 19
            }, this),
            activeClass: "bg-blue-400",
            activeLinkClass: "text-white"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 5
  }, this);
}

const ButtonAdd = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  font-size: 14px;
  background: #4361ee;
  color: #fff;
  padding: 10px 23px;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
`;
/* harmony default export */ __webpack_exports__["default"] = (Penggunaan);

/***/ }),

/***/ "./pages/transaksi/tagihan.js":
/*!************************************!*\
  !*** ./pages/transaksi/tagihan.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-js-pagination */ "react-js-pagination");
/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_js_pagination__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toast-notifications */ "react-toast-notifications");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/global */ "./helpers/global.js");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @loadable/component */ "@loadable/component");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\project\\sertifikasi_listrik_frontend\\pages\\transaksi\\tagihan.js";







const AddTagihan = _loadable_component__WEBPACK_IMPORTED_MODULE_7___default()(() => __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ../../components/tagihan/AddTagihan */ "./components/tagihan/AddTagihan.js")));
const EditTagihan = _loadable_component__WEBPACK_IMPORTED_MODULE_7___default()(() => __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! ../../components/tagihan/EditTagihan */ "./components/tagihan/EditTagihan.js")));

function Tagihan() {
  const {
    0: tagihan,
    1: setTagihan
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const accessToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.accessToken);
  const {
    addToast
  } = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__["useToasts"])();
  const {
    0: showAdd,
    1: setShowAdd
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: showEdit,
    1: setShowEdit
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: selectedId,
    1: setSelectedId
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null); // Pagination

  const takeSize = 10;
  const {
    0: total,
    1: setTotal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: activePage,
    1: setActivePage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1);
  const {
    0: search,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const sort = "";
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    fetchTagihan();
  }, [search, showAdd, showEdit, activePage]);

  const handlePageChange = pageNumber => {
    setActivePage(pageNumber);
  };

  const fetchTagihan = async () => {
    try {
      const headers = {
        Authorization: accessToken
      };
      const response = await _helpers_global__WEBPACK_IMPORTED_MODULE_6__["axiosGeneral"].get("/resources/tagihan", {
        headers,
        params: {
          page: activePage,
          limit: takeSize,
          search // sort,

        }
      });
      setTagihan([]);
      const {
        status,
        data
      } = response;

      if (status === 200) {
        setTagihan(data.data);
        setTotal(data.pagination.total_entries); // console.log(data.pagination.total_entries)
      }
    } catch (error) {
      addToast(Object(_helpers_global__WEBPACK_IMPORTED_MODULE_6__["errorHandler"])(error), {
        appearance: "error"
      });
    }
  };

  const deleteTagihan = async idUser => {
    try {
      const headers = {
        Authorization: accessToken
      };
      const response = await _helpers_global__WEBPACK_IMPORTED_MODULE_6__["axiosGeneral"].delete(`/resources/tagihan/${idUser}`, {
        headers
      });
      const {
        status
      } = response;

      if (status === 200) {
        addToast("Berhasil hapus tagihan", {
          appearance: "success"
        });
        fetchTagihan();
      }
    } catch (error) {
      addToast(Object(_helpers_global__WEBPACK_IMPORTED_MODULE_6__["errorHandler"])(error), {
        appearance: "error"
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "my-10 px-10",
    children: showAdd ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AddTagihan, {
      show: showAdd,
      setShow: val => setShowAdd(val)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }, this) : showEdit ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(EditTagihan, {
      id: selectedId,
      show: showEdit,
      setShow: val => setShowEdit(val)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "bg-white shadow w-full rounded px-6 py-10",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "font-bold text-2xl text-black mb-20",
          children: "Data Tagihan"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-row justify-between items-center mt-4 mb-8",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ButtonAdd, {
            onClick: () => setShowAdd(!showAdd),
            children: "Data Baru"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-row break-normal items-center border-b-2 px-3 py-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 font-bold w-20",
            children: "#"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 font-bold w-11/12",
            children: "ID Penggunaan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 font-bold w-11/12",
            children: "Nama Pelanggan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 font-bold w-11/12",
            children: "Bulan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 font-bold w-11/12",
            children: "Tahun"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 font-bold w-11/12",
            children: "Jumlah Meter"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 font-bold w-11/12",
            children: "Status"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm font-bold ml-6 mb-0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 13
        }, this), tagihan.map((item, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            background: index % 2 === 0 ? "#E7E7E7" : "#F3F3F3"
          },
          className: "flex flex-row break-normal py-2 px-3 items-center hover:opacity-80",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 w-20",
            children: index + 1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 w-11/12",
            children: item.id_penggunaan
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 w-11/12",
            children: item.id_pelanggan
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 w-11/12",
            children: item.bulan
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 w-11/12",
            children: item.tahun
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 w-11/12",
            children: item.jumlah_meter
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 w-11/12",
            children: item.status
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex flex-row justify-end ml-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              style: {
                color: "#6F6F6F"
              },
              onClick: () => {
                setSelectedId(item.id_tagihan);
                setShowEdit(!showEdit);
              },
              className: "material-icons cursor-pointer mr-4",
              children: "edit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              onClick: () => {
                if (window.confirm(`Yakin hapus ` + item.id_pelanggan + ` ?`)) {
                  deleteTagihan(item.id_tagihan);
                }
              },
              style: {
                color: "#6F6F6F"
              },
              className: "material-icons cursor-pointer",
              children: "delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 17
          }, this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 15
        }, this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full mt-8 flex flex-row justify-end items-end",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_js_pagination__WEBPACK_IMPORTED_MODULE_3___default.a, {
            activePage: activePage,
            itemsCountPerPage: takeSize,
            totalItemsCount: total,
            pageRangeDisplayed: 5,
            onChange: handlePageChange,
            itemClass: "bg-blue-100 py-2 px-4 mx-1 rounded font-bold",
            linkClass: "text-gray-700 hover:no-underline hover:text-gray-700",
            hideFirstLastPages: true,
            prevPageText: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              style: {
                color: "#6F6F6F"
              },
              className: "material-icons",
              children: "arrow_back"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 19
            }, this),
            nextPageText: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              style: {
                color: "#6F6F6F"
              },
              className: "material-icons",
              children: "arrow_forward"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 19
            }, this),
            activeClass: "bg-blue-400",
            activeLinkClass: "text-white"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 5
  }, this);
}

const ButtonAdd = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  font-size: 14px;
  background: #4361ee;
  color: #fff;
  padding: 10px 23px;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
`;
/* harmony default export */ __webpack_exports__["default"] = (Tagihan);

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

/***/ "@loadable/component":
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@loadable/component");

/***/ }),

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

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

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "react-js-pagination":
/*!**************************************!*\
  !*** external "react-js-pagination" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-js-pagination");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

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

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYWluTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NpZGViYXIvTWVudUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdHJhbnNha3NpL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3RyYW5zYWtzaS9wZW1iYXlhcmFuLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3RyYW5zYWtzaS9wZW5nZ3VuYWFuLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3RyYW5zYWtzaS90YWdpaGFuLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbkNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbG9hZGFibGUvY29tcG9uZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmb3JtaWtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvbWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1qcy1wYWdpbmF0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zZWxlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ5dXBcIiJdLCJuYW1lcyI6WyJNYWluTGF5b3V0IiwiY2hpbGRyZW4iLCJhY2Nlc3NUb2tlbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VFZmZlY3QiLCJSb3V0ZXIiLCJyZXBsYWNlIiwiYmFja2dyb3VuZCIsIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJNZW51V3JhcHBlciIsInVsIiwiU3BhY2VyIiwiU2lkZWJhciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJkb0xvZ291dCIsInNldEFjY2Vzc1Rva2VuIiwic2V0VXNlciIsInB1c2giLCJsaSIsInByb3BzIiwiaXNBY3RpdmUiLCJJY29uV3JhcHBlciIsInNwYW4iLCJNZW51SXRlbSIsIm9uQ2xpY2siLCJuYW1lIiwiaWNvbiIsInRleHQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRoIiwicGF0aG5hbWUiLCJzcGxpdCIsIkJBU0VfVVJMIiwiYXhpb3NHZW5lcmFsIiwiQXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwicmVzcG9uc2VUeXBlIiwiZXJyb3JIYW5kbGVyIiwiZXJyb3IiLCJyZXNwb25zZSIsInVuZGVmaW5lZCIsInN0YXR1cyIsImRhdGEiLCJtZXNzYWdlIiwiVGFiYmFyIiwiVGFiSXRlbSIsIlRyYW5zYWtzaSIsInRhYkFjdGl2ZSIsInNldFRhYkFjdGl2ZSIsInVzZVN0YXRlIiwiQWRkVXNlciIsImxvYWRhYmxlIiwiRWRpdFVzZXIiLCJQZW1iYXlhcmFuIiwidXNlciIsImFkZFRvYXN0IiwidXNlVG9hc3RzIiwic2hvd0FkZCIsInNldFNob3dBZGQiLCJzaG93RWRpdCIsInNldFNob3dFZGl0Iiwic2VsZWN0ZWRJZCIsInNldFNlbGVjdGVkSWQiLCJ0YWtlU2l6ZSIsInRvdGFsIiwic2V0VG90YWwiLCJhY3RpdmVQYWdlIiwic2V0QWN0aXZlUGFnZSIsInNlYXJjaCIsInNldFNlYXJjaCIsInNvcnQiLCJmZXRjaFVzZXIiLCJoYW5kbGVQYWdlQ2hhbmdlIiwicGFnZU51bWJlciIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZ2V0IiwicGFyYW1zIiwicGFnZSIsImxpbWl0IiwicGFnaW5hdGlvbiIsInRvdGFsX2VudHJpZXMiLCJhcHBlYXJhbmNlIiwiZGVsZXRlVXNlciIsImlkVXNlciIsImRlbGV0ZSIsInZhbCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInVzZXJuYW1lIiwibmFtYV9hZG1pbiIsImlkX2xldmVsIiwiY29sb3IiLCJpZF91c2VyIiwid2luZG93IiwiY29uZmlybSIsIkJ1dHRvbkFkZCIsIkFkZFBlbmdndW5hYW4iLCJFZGl0UGVuZ2d1bmFhbiIsIlBlbmdndW5hYW4iLCJwZW5nZ3VuYWFuIiwic2V0UGVuZ2d1bmFhbiIsImZldGNoUGVuZ2d1bmFhbiIsImRlbGV0ZVBlbmdndW5hYW4iLCJpZF9wZW5nZ3VuYWFuIiwiYnVsYW4iLCJ0YWh1biIsIm1ldGVyX2F3YWwiLCJtZXRlcl9ha2hpciIsImlkX3BlbGFuZ2dhbiIsIkFkZFRhZ2loYW4iLCJFZGl0VGFnaWhhbiIsIlRhZ2loYW4iLCJ0YWdpaGFuIiwic2V0VGFnaWhhbiIsImZldGNoVGFnaWhhbiIsImRlbGV0ZVRhZ2loYW4iLCJqdW1sYWhfbWV0ZXIiLCJpZF90YWdpaGFuIiwicGF5bG9hZCIsInR5cGUiLCJTRVRfVVNFUiIsIlNFVF9BQ0NFU1NfVE9LRU4iLCJzZXRMb2FkaW5nIiwiU0VUX0xPQURJTkciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtR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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FSQTtBQVVlNEcsc0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDdk1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1PLE1BQU1uRyxPQUFPLEdBQUkwRyxPQUFELEtBQWM7QUFDbkNDLE1BQUksRUFBRUMsaURBRDZCO0FBRW5DRjtBQUZtQyxDQUFkLENBQWhCO0FBS0EsTUFBTTNHLGNBQWMsR0FBSTJHLE9BQUQsS0FBYztBQUMxQ0MsTUFBSSxFQUFFRSx5REFEb0M7QUFFMUNIO0FBRjBDLENBQWQsQ0FBdkI7QUFLQSxNQUFNSSxVQUFVLEdBQUlKLE9BQUQsS0FBYztBQUN0Q0MsTUFBSSxFQUFFSSxvREFEZ0M7QUFFdENMO0FBRnNDLENBQWQsQ0FBbkIsQzs7Ozs7Ozs7Ozs7O0FDaEJQO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTUUsUUFBUSxHQUFHLFVBQWpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUUsV0FBVyxHQUFHLGFBQXBCLEM7Ozs7Ozs7Ozs7O0FDRlAsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoicGFnZXMvdHJhbnNha3NpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicGFnZXMvdHJhbnNha3NpXCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIHJlcXVpcmUoKSBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gMCkge1xuIFx0XHRcdHZhciBjaHVuayA9IHJlcXVpcmUoXCIuLi9cIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiKTtcbiBcdFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBjaHVuay5tb2R1bGVzLCBjaHVua0lkcyA9IGNodW5rLmlkcztcbiBcdFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gdW5jYXVnaHQgZXJyb3IgaGFuZGxlciBmb3Igd2VicGFjayBydW50aW1lXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7XG4gXHRcdHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gXHRcdFx0dGhyb3cgZXJyOyAvLyBjYXRjaCB0aGlzIGVycm9yIGJ5IHVzaW5nIGltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3RyYW5zYWtzaS9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4vU2lkZWJhclwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgTWFpbkxheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBhY2Nlc3NUb2tlbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWNjZXNzVG9rZW4pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgIFJvdXRlci5yZXBsYWNlKFwiL1wiKTtcclxuICAgIH1cclxuICB9LCBbYWNjZXNzVG9rZW5dKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJoLXNjcmVlbiBpdGVtcy1zdGFydCBmbGV4XCJcclxuICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogXCIjRkFGQkZDXCIgfX1cclxuICAgID5cclxuICAgICAgPFNpZGViYXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1zY3JlZW4gb3ZlcmZsb3ctYXV0b1wiPntjaGlsZHJlbn08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluTGF5b3V0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IE1kSG9tZSwgTWRUb2RheSwgTWRQZW9wbGUsIE1kUG93ZXJTZXR0aW5nc05ldywgTWRJbXBvcnRDb250YWN0cyB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIi4vc2lkZWJhci9NZW51SXRlbVwiO1xyXG5pbXBvcnQgeyBEZXNjcmlwdGlvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgc2V0QWNjZXNzVG9rZW4sIHNldFVzZXIgfSBmcm9tIFwiLi4vc3RvcmUvYWN0aW9uQ3JlYXRvclwiO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDE1JTtcclxuICBiYWNrZ3JvdW5kOiAjMDA3MTc1O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG5gO1xyXG5jb25zdCBNZW51V3JhcHBlciA9IHN0eWxlZC51bGBcclxuICBwYWRkaW5nOiAwcHggMTVweDtcclxuYDtcclxuY29uc3QgU3BhY2VyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogYXV0bztcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGViYXIoKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBkb0xvZ291dCA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHNldEFjY2Vzc1Rva2VuKG51bGwpKTtcclxuICAgIGRpc3BhdGNoKHNldFVzZXIobnVsbCkpO1xyXG4gICAgUm91dGVyLnJlcGxhY2UoXCIvXCIpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyIGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgaC1mdWxsIG92ZXJmbG93LXktYXV0b1wiPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgY2xhc3NOYW1lPVwicC00XCJcclxuICAgICAgLz5cclxuICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciBtYi0zNiB0ZXh0LXllbGxvdy0zMDBcIj5MSVNUUklLPC9oND5cclxuICAgICAgPE1lbnVXcmFwcGVyIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgIHRleHQ9XCJEYXNoYm9hcmRcIlxyXG4gICAgICAgICAgaWNvbj17PE1kSG9tZSBzaXplPVwiMjRweFwiIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IG1yLTNcIiAvPn1cclxuICAgICAgICAgIG5hbWU9XCJkYXNoYm9hcmRcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICB0ZXh0PVwiTWFzdGVyXCJcclxuICAgICAgICAgIGljb249ezxEZXNjcmlwdGlvbiBzaXplPVwiMjRweFwiIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IG1yLTNcIiAvPn1cclxuICAgICAgICAgIG5hbWU9XCJtYXN0ZXJcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goXCIvbWFzdGVyXCIpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICB0ZXh0PVwiVHJhbnNha3NpXCJcclxuICAgICAgICAgIGljb249ezxNZFBlb3BsZSBzaXplPVwiMjRweFwiIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IG1yLTNcIiAvPn1cclxuICAgICAgICAgIG5hbWU9XCJ0cmFuc2Frc2lcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goXCIvdHJhbnNha3NpXCIpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICB0ZXh0PVwiS2VsdWFyXCJcclxuICAgICAgICAgIGljb249ezxNZFBvd2VyU2V0dGluZ3NOZXcgc2l6ZT1cIjI0cHhcIiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBtci0zXCIgLz59XHJcbiAgICAgICAgICBuYW1lPVwicmVwb3J0XCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2RvTG9nb3V0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvTWVudVdyYXBwZXI+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5saWBcclxuICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDIycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+IChwcm9wcy5pc0FjdGl2ZSA/IFwiI0ZGQ0QwNVwiIDogXCJcIil9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgY29sb3I6ICR7KHByb3BzKSA9PiAocHJvcHMuaXNBY3RpdmUgPyBcIiMwMDBcIiA6IFwiI0ZGRlwiKX07XHJcbmA7XHJcblxyXG5jb25zdCBJY29uV3JhcHBlciA9IHN0eWxlZC5zcGFuYFxyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IE1lbnVJdGVtID0gKHsgb25DbGljaywgbmFtZSwgaWNvbiwgdGV4dCB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgWywgcGF0aF0gPSByb3V0ZXIucGF0aG5hbWUuc3BsaXQoXCIvXCIpO1xyXG4gIGNvbnN0IGlzQWN0aXZlID0gcGF0aCA9PT0gbmFtZTtcclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXIgb25DbGljaz17b25DbGlja30gaXNBY3RpdmU9e2lzQWN0aXZlfT5cclxuICAgICAgPEljb25XcmFwcGVyPntpY29ufTwvSWNvbldyYXBwZXI+XHJcbiAgICAgIHt0ZXh0fVxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51SXRlbTtcclxuIiwiaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJBU0VfVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjkwMDAvdjFcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBheGlvc0dlbmVyYWwgPSBBeGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IEJBU0VfVVJMLFxyXG4gIHJlc3BvbnNlVHlwZTogXCJqc29uXCIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVycm9ySGFuZGxlciA9IChlcnJvcikgPT4ge1xyXG4gIHJldHVybiBlcnJvci5yZXNwb25zZSAhPT0gdW5kZWZpbmVkXHJcbiAgICA/IGBSZXNwb25zZSAke2Vycm9yLnJlc3BvbnNlLnN0YXR1c306ICR7ZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlfWBcclxuICAgIDogZXJyb3IubWVzc2FnZTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IE1haW5MYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWFpbkxheW91dFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUGVuZ2d1bmFhbiBmcm9tIFwiLi9wZW5nZ3VuYWFuXCI7XHJcbmltcG9ydCBUYWdpaGFuIGZyb20gXCIuL3RhZ2loYW5cIjtcclxuaW1wb3J0IFBlbWJheWFyYW4gZnJvbSBcIi4vcGVtYmF5YXJhblwiO1xyXG5cclxuY29uc3QgVGFiYmFyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBwYWRkaW5nOiAyMHB4IDQwcHggMHB4IDQwcHg7XHJcbmA7XHJcbmNvbnN0IFRhYkl0ZW0gPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1yaWdodDogMi41cmVtO1xyXG5gO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUcmFuc2Frc2koKSB7XHJcbiAgY29uc3QgW3RhYkFjdGl2ZSwgc2V0VGFiQWN0aXZlXSA9IHVzZVN0YXRlKFwicGVuZ2d1bmFhblwiKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlRyYW5zYWtzaSAtIExpc3RyaWs8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxNYWluTGF5b3V0PlxyXG4gICAgICAgIDxUYWJiYXIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPFRhYkl0ZW1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGFiQWN0aXZlKFwicGVuZ2d1bmFhblwiKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgY3Vyc29yLXBvaW50ZXIgJHtcclxuICAgICAgICAgICAgICB0YWJBY3RpdmUgPT09IFwicGVuZ2d1bmFhblwiXHJcbiAgICAgICAgICAgICAgICA/IFwiYm9yZGVyLWItMiBib3JkZXItYmxhY2sgdGV4dC1ibGFja1wiXHJcbiAgICAgICAgICAgICAgICA6IFwidGV4dC1ncmF5LTQwMFwiXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBQZW5nZ3VuYWFuXHJcbiAgICAgICAgICA8L1RhYkl0ZW0+XHJcbiAgICAgICAgICA8VGFiSXRlbVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUYWJBY3RpdmUoXCJ0YWdpaGFuXCIpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BjdXJzb3ItcG9pbnRlciAke1xyXG4gICAgICAgICAgICAgIHRhYkFjdGl2ZSA9PT0gXCJ0YWdpaGFuXCJcclxuICAgICAgICAgICAgICAgID8gXCJib3JkZXItYi0yIGJvcmRlci1ibGFjayB0ZXh0LWJsYWNrXCJcclxuICAgICAgICAgICAgICAgIDogXCJ0ZXh0LWdyYXktNDAwXCJcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFRhZ2loYW5cclxuICAgICAgICAgIDwvVGFiSXRlbT5cclxuICAgICAgICAgIDxUYWJJdGVtXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhYkFjdGl2ZShcInBlbWJheWFyYW5cIil9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGN1cnNvci1wb2ludGVyICR7XHJcbiAgICAgICAgICAgICAgdGFiQWN0aXZlID09PSBcInBlbWJheWFyYW5cIlxyXG4gICAgICAgICAgICAgICAgPyBcImJvcmRlci1iLTIgYm9yZGVyLWJsYWNrIHRleHQtYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgOiBcInRleHQtZ3JheS00MDBcIlxyXG4gICAgICAgICAgICB9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgUGVtYmF5YXJhblxyXG4gICAgICAgICAgPC9UYWJJdGVtPlxyXG4gICAgICAgIDwvVGFiYmFyPlxyXG4gICAgICAgIHt0YWJBY3RpdmUgPT09IFwicGVuZ2d1bmFhblwiICYmIDxQZW5nZ3VuYWFuLz59XHJcbiAgICAgICAge3RhYkFjdGl2ZSA9PT0gXCJ0YWdpaGFuXCIgJiYgPFRhZ2loYW4gLz59XHJcbiAgICAgICAge3RhYkFjdGl2ZSA9PT0gXCJwZW1iYXlhcmFuXCIgJiYgPFBlbWJheWFyYW4gLz59XHJcbiAgICAgIDwvTWFpbkxheW91dD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwicmVhY3QtanMtcGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VUb2FzdHMgfSBmcm9tIFwicmVhY3QtdG9hc3Qtbm90aWZpY2F0aW9uc1wiO1xyXG5pbXBvcnQgeyBheGlvc0dlbmVyYWwsIGVycm9ySGFuZGxlciB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2dsb2JhbFwiO1xyXG5pbXBvcnQgbG9hZGFibGUgZnJvbSBcIkBsb2FkYWJsZS9jb21wb25lbnRcIjtcclxuY29uc3QgQWRkVXNlciA9IGxvYWRhYmxlKCgpID0+XHJcbiAgaW1wb3J0KFwiLi4vLi4vY29tcG9uZW50cy91c2VyL0FkZFVzZXJcIilcclxuKTtcclxuY29uc3QgRWRpdFVzZXIgPSBsb2FkYWJsZSgoKSA9PlxyXG4gIGltcG9ydChcIi4uLy4uL2NvbXBvbmVudHMvdXNlci9FZGl0VXNlclwiKVxyXG4pO1xyXG5cclxuZnVuY3Rpb24gUGVtYmF5YXJhbigpIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgYWNjZXNzVG9rZW4gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFjY2Vzc1Rva2VuKTtcclxuICBjb25zdCB7IGFkZFRvYXN0IH0gPSB1c2VUb2FzdHMoKTtcclxuICBjb25zdCBbc2hvd0FkZCwgc2V0U2hvd0FkZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dFZGl0LCBzZXRTaG93RWRpdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkSWQsIHNldFNlbGVjdGVkSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIC8vIFBhZ2luYXRpb25cclxuICBjb25zdCB0YWtlU2l6ZSA9IDEwO1xyXG4gIGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2FjdGl2ZVBhZ2UsIHNldEFjdGl2ZVBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHNvcnQgPSBcIlwiO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hVc2VyKCk7XHJcbiAgfSwgW3NlYXJjaCwgc2hvd0FkZCwgc2hvd0VkaXQsIGFjdGl2ZVBhZ2VdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUGFnZUNoYW5nZSA9IChwYWdlTnVtYmVyKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVQYWdlKHBhZ2VOdW1iZXIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYWNjZXNzVG9rZW4sXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NHZW5lcmFsLmdldChcIi9yZXNvdXJjZXMvdXNlclwiLCB7XHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHBhZ2U6IGFjdGl2ZVBhZ2UsXHJcbiAgICAgICAgICBsaW1pdDogdGFrZVNpemUsXHJcbiAgICAgICAgICBzZWFyY2gsXHJcbiAgICAgICAgICAvLyBzb3J0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2V0VXNlcihbXSk7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSByZXNwb25zZTtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgc2V0VXNlcihkYXRhLmRhdGEpO1xyXG4gICAgICAgIHNldFRvdGFsKGRhdGEucGFnaW5hdGlvbi50b3RhbF9lbnRyaWVzKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLnBhZ2luYXRpb24udG90YWxfZW50cmllcylcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWRkVG9hc3QoZXJyb3JIYW5kbGVyKGVycm9yKSwgeyBhcHBlYXJhbmNlOiBcImVycm9yXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlVXNlciA9IGFzeW5jIChpZFVzZXIpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYWNjZXNzVG9rZW4sXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NHZW5lcmFsLmRlbGV0ZShcclxuICAgICAgICBgL3Jlc291cmNlcy91c2VyLyR7aWRVc2VyfWAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVycyxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSByZXNwb25zZTtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgYWRkVG9hc3QoXCJCZXJoYXNpbCBoYXB1cyB1c2VyXCIsIHsgYXBwZWFyYW5jZTogXCJzdWNjZXNzXCIgfSk7XHJcbiAgICAgICAgZmV0Y2hVc2VyKCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFkZFRvYXN0KGVycm9ySGFuZGxlcihlcnJvciksIHsgYXBwZWFyYW5jZTogXCJlcnJvclwiIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTEwIHB4LTEwXCI+XHJcbiAgICAgIHtzaG93QWRkID8gKFxyXG4gICAgICAgIDxBZGRVc2VyIHNob3c9e3Nob3dBZGR9IHNldFNob3c9eyh2YWwpID0+IHNldFNob3dBZGQodmFsKX0gLz5cclxuICAgICAgKSA6IHNob3dFZGl0ID8gKFxyXG4gICAgICAgIDxFZGl0VXNlclxyXG4gICAgICAgICAgaWQ9e3NlbGVjdGVkSWR9XHJcbiAgICAgICAgICBzaG93PXtzaG93RWRpdH1cclxuICAgICAgICAgIHNldFNob3c9eyh2YWwpID0+IHNldFNob3dFZGl0KHZhbCl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBzaGFkb3cgdy1mdWxsIHJvdW5kZWQgcHgtNiBweS0xMFwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtMnhsIHRleHQtYmxhY2sgbWItMjBcIj5cclxuICAgICAgICAgICAgICBEYXRhIFVzZXJcclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbXQtNCBtYi04XCI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbkFkZCBvbkNsaWNrPXsoKSA9PiBzZXRTaG93QWRkKCFzaG93QWRkKX0+XHJcbiAgICAgICAgICAgICAgICBEYXRhIEJhcnVcclxuICAgICAgICAgICAgICA8L0J1dHRvbkFkZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBicmVhay1ub3JtYWwgaXRlbXMtY2VudGVyIGJvcmRlci1iLTIgcHgtMyBweS0yXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtci0yIG1iLTAgZm9udC1ib2xkIHctMjBcIj4jPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXItMiBtYi0wIGZvbnQtYm9sZCB3LTExLzEyXCI+dXNlcm5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtci0yIG1iLTAgZm9udC1ib2xkIHctMTEvMTJcIj5uYW1hIHVzZXI8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtci0yIG1iLTAgZm9udC1ib2xkIHctMTEvMTJcIj5sZXZlbDwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCBtbC02IG1iLTBcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3VzZXIubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBpbmRleCAlIDIgPT09IDAgPyBcIiNFN0U3RTdcIiA6IFwiI0YzRjNGM1wiIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGJyZWFrLW5vcm1hbCBweS0yIHB4LTMgaXRlbXMtY2VudGVyIGhvdmVyOm9wYWNpdHktODBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXItMiBtYi0wIHctMjBcIj57aW5kZXggKyAxfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXItMiBtYi0wIHctMTEvMTJcIj57aXRlbS51c2VybmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yLTIgbWItMCB3LTExLzEyXCI+e2l0ZW0ubmFtYV9hZG1pbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yLTIgbWItMCB3LTExLzEyXCI+e2l0ZW0uaWRfbGV2ZWx9PC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktZW5kIG1sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjNkY2RjZGXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZElkKGl0ZW0uaWRfdXNlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93RWRpdCghc2hvd0VkaXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgY3Vyc29yLXBvaW50ZXIgbXItNFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBlZGl0XHJcbiAgICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jb25maXJtKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGBZYWtpbiBoYXB1cyBgICsgaXRlbS51c2VybmFtZSArIGAgP2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVVzZXIoaXRlbS5pZF91c2VyKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiM2RjZGNkZcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZVxyXG4gICAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG10LTggZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWVuZCBpdGVtcy1lbmRcIj5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgICAgYWN0aXZlUGFnZT17YWN0aXZlUGFnZX1cclxuICAgICAgICAgICAgICAgIGl0ZW1zQ291bnRQZXJQYWdlPXt0YWtlU2l6ZX1cclxuICAgICAgICAgICAgICAgIHRvdGFsSXRlbXNDb3VudD17dG90YWx9XHJcbiAgICAgICAgICAgICAgICBwYWdlUmFuZ2VEaXNwbGF5ZWQ9ezV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUGFnZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIGl0ZW1DbGFzcz1cImJnLWJsdWUtMTAwIHB5LTIgcHgtNCBteC0xIHJvdW5kZWQgZm9udC1ib2xkXCJcclxuICAgICAgICAgICAgICAgIGxpbmtDbGFzcz1cInRleHQtZ3JheS03MDAgaG92ZXI6bm8tdW5kZXJsaW5lIGhvdmVyOnRleHQtZ3JheS03MDBcIlxyXG4gICAgICAgICAgICAgICAgaGlkZUZpcnN0TGFzdFBhZ2VzPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgcHJldlBhZ2VUZXh0PXtcclxuICAgICAgICAgICAgICAgICAgPGkgc3R5bGU9e3sgY29sb3I6IFwiIzZGNkY2RlwiIH19IGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dfYmFja1xyXG4gICAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBuZXh0UGFnZVRleHQ9e1xyXG4gICAgICAgICAgICAgICAgICA8aSBzdHlsZT17eyBjb2xvcjogXCIjNkY2RjZGXCIgfX0gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICBhcnJvd19mb3J3YXJkXHJcbiAgICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYmctYmx1ZS00MDBcIlxyXG4gICAgICAgICAgICAgICAgYWN0aXZlTGlua0NsYXNzPVwidGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IEJ1dHRvbkFkZCA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJhY2tncm91bmQ6ICM0MzYxZWU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMTBweCAyM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZW1iYXlhcmFuO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCJyZWFjdC1qcy1wYWdpbmF0aW9uXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVRvYXN0cyB9IGZyb20gXCJyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zXCI7XHJcbmltcG9ydCB7IGF4aW9zR2VuZXJhbCwgZXJyb3JIYW5kbGVyIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvZ2xvYmFsXCI7XHJcbmltcG9ydCBsb2FkYWJsZSBmcm9tIFwiQGxvYWRhYmxlL2NvbXBvbmVudFwiO1xyXG5jb25zdCBBZGRQZW5nZ3VuYWFuID0gbG9hZGFibGUoKCkgPT5cclxuICBpbXBvcnQoXCIuLi8uLi9jb21wb25lbnRzL3BlbmdndW5hYW4vQWRkUGVuZ2d1bmFhblwiKVxyXG4pO1xyXG5jb25zdCBFZGl0UGVuZ2d1bmFhbiA9IGxvYWRhYmxlKCgpID0+XHJcbiAgaW1wb3J0KFwiLi4vLi4vY29tcG9uZW50cy9wZW5nZ3VuYWFuL0VkaXRQZW5nZ3VuYWFuXCIpXHJcbik7XHJcblxyXG5mdW5jdGlvbiBQZW5nZ3VuYWFuKCkge1xyXG4gIGNvbnN0IFtwZW5nZ3VuYWFuLCBzZXRQZW5nZ3VuYWFuXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBhY2Nlc3NUb2tlbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWNjZXNzVG9rZW4pO1xyXG4gIGNvbnN0IHsgYWRkVG9hc3QgfSA9IHVzZVRvYXN0cygpO1xyXG4gIGNvbnN0IFtzaG93QWRkLCBzZXRTaG93QWRkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd0VkaXQsIHNldFNob3dFZGl0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2VsZWN0ZWRJZCwgc2V0U2VsZWN0ZWRJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgLy8gUGFnaW5hdGlvblxyXG4gIGNvbnN0IHRha2VTaXplID0gMTA7XHJcbiAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYWN0aXZlUGFnZSwgc2V0QWN0aXZlUGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgc29ydCA9IFwiXCI7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFBlbmdndW5hYW4oKTtcclxuICB9LCBbc2VhcmNoLCBzaG93QWRkLCBzaG93RWRpdCwgYWN0aXZlUGFnZV0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKHBhZ2VOdW1iZXIpID0+IHtcclxuICAgIHNldEFjdGl2ZVBhZ2UocGFnZU51bWJlcik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hQZW5nZ3VuYWFuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBhY2Nlc3NUb2tlbixcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0dlbmVyYWwuZ2V0KFwiL3Jlc291cmNlcy9wZW5nZ3VuYWFuXCIsIHtcclxuICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgcGFnZTogYWN0aXZlUGFnZSxcclxuICAgICAgICAgIGxpbWl0OiB0YWtlU2l6ZSxcclxuICAgICAgICAgIHNlYXJjaCxcclxuICAgICAgICAgIC8vIHNvcnQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZXRQZW5nZ3VuYWFuKFtdKTtcclxuICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBzZXRQZW5nZ3VuYWFuKGRhdGEuZGF0YSk7XHJcbiAgICAgICAgc2V0VG90YWwoZGF0YS5wYWdpbmF0aW9uLnRvdGFsX2VudHJpZXMpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEucGFnaW5hdGlvbi50b3RhbF9lbnRyaWVzKVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhZGRUb2FzdChlcnJvckhhbmRsZXIoZXJyb3IpLCB7IGFwcGVhcmFuY2U6IFwiZXJyb3JcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVQZW5nZ3VuYWFuID0gYXN5bmMgKGlkX3BlbmdndW5hYW4pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYWNjZXNzVG9rZW4sXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NHZW5lcmFsLmRlbGV0ZShcclxuICAgICAgICBgL3Jlc291cmNlcy9wZW5nZ3VuYWFuLyR7aWRfcGVuZ2d1bmFhbn1gLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gcmVzcG9uc2U7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGFkZFRvYXN0KFwiQmVyaGFzaWwgaGFwdXMgcGVuZ2d1bmFhblwiLCB7IGFwcGVhcmFuY2U6IFwic3VjY2Vzc1wiIH0pO1xyXG4gICAgICAgIGZldGNoUGVuZ2d1bmFhbigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhZGRUb2FzdChlcnJvckhhbmRsZXIoZXJyb3IpLCB7IGFwcGVhcmFuY2U6IFwiZXJyb3JcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJteS0xMCBweC0xMFwiPlxyXG4gICAgICB7c2hvd0FkZCA/IChcclxuICAgICAgICA8QWRkUGVuZ2d1bmFhbiBzaG93PXtzaG93QWRkfSBzZXRTaG93PXsodmFsKSA9PiBzZXRTaG93QWRkKHZhbCl9IC8+XHJcbiAgICAgICkgOiBzaG93RWRpdCA/IChcclxuICAgICAgICA8RWRpdFBlbmdndW5hYW5cclxuICAgICAgICAgIGlkPXtzZWxlY3RlZElkfVxyXG4gICAgICAgICAgc2hvdz17c2hvd0VkaXR9XHJcbiAgICAgICAgICBzZXRTaG93PXsodmFsKSA9PiBzZXRTaG93RWRpdCh2YWwpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93IHctZnVsbCByb3VuZGVkIHB4LTYgcHktMTBcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTJ4bCB0ZXh0LWJsYWNrIG1iLTIwXCI+XHJcbiAgICAgICAgICAgICAgRGF0YSBQZW5nZ3VuYWFuXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG10LTQgbWItOFwiPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25BZGQgb25DbGljaz17KCkgPT4gc2V0U2hvd0FkZCghc2hvd0FkZCl9PlxyXG4gICAgICAgICAgICAgICAgRGF0YSBCYXJ1XHJcbiAgICAgICAgICAgICAgPC9CdXR0b25BZGQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgYnJlYWstbm9ybWFsIGl0ZW1zLWNlbnRlciBib3JkZXItYi0yIHB4LTMgcHktMlwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXItMiBtYi0wIGZvbnQtYm9sZCB3LTIwXCI+IzwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yLTIgbWItMCBmb250LWJvbGQgdy0xMS8xMlwiPlBlbGFuZ2dhbjwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yLTIgbWItMCBmb250LWJvbGQgdy0xMS8xMlwiPkJ1bGFuPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXItMiBtYi0wIGZvbnQtYm9sZCB3LTExLzEyXCI+VGFodW48L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtci0yIG1iLTAgZm9udC1ib2xkIHctMTEvMTJcIj5NZXRlciBBd2FsPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXItMiBtYi0wIGZvbnQtYm9sZCB3LTExLzEyXCI+TWV0ZXIgQWtoaXI8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgbWwtNiBtYi0wXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtwZW5nZ3VuYWFuLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogaW5kZXggJSAyID09PSAwID8gXCIjRTdFN0U3XCIgOiBcIiNGM0YzRjNcIiB9fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBicmVhay1ub3JtYWwgcHktMiBweC0zIGl0ZW1zLWNlbnRlciBob3ZlcjpvcGFjaXR5LTgwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yLTIgbWItMCB3LTIwXCI+e2luZGV4ICsgMX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yLTIgbWItMCB3LTExLzEyXCI+e2l0ZW0uaWRfcGVuZ2d1bmFhbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yLTIgbWItMCB3LTExLzEyXCI+e2l0ZW0uYnVsYW59PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtci0yIG1iLTAgdy0xMS8xMlwiPntpdGVtLnRhaHVufTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXItMiBtYi0wIHctMTEvMTJcIj57aXRlbS5tZXRlcl9hd2FsfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXItMiBtYi0wIHctMTEvMTJcIj57aXRlbS5tZXRlcl9ha2hpcn08L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1lbmQgbWwtNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiM2RjZGNkZcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkSWQoaXRlbS5pZF9wZW5nZ3VuYWFuKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dFZGl0KCFzaG93RWRpdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBjdXJzb3ItcG9pbnRlciBtci00XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRcclxuICAgICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNvbmZpcm0oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYFlha2luIGhhcHVzIGAgKyBpdGVtLmlkX3BlbGFuZ2dhbiArIGAgP2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVBlbmdndW5hYW4oaXRlbS5pZF9wZW5nZ3VuYWFuKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiM2RjZGNkZcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZVxyXG4gICAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG10LTggZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWVuZCBpdGVtcy1lbmRcIj5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgICAgYWN0aXZlUGFnZT17YWN0aXZlUGFnZX1cclxuICAgICAgICAgICAgICAgIGl0ZW1zQ291bnRQZXJQYWdlPXt0YWtlU2l6ZX1cclxuICAgICAgICAgICAgICAgIHRvdGFsSXRlbXNDb3VudD17dG90YWx9XHJcbiAgICAgICAgICAgICAgICBwYWdlUmFuZ2VEaXNwbGF5ZWQ9ezV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUGFnZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIGl0ZW1DbGFzcz1cImJnLWJsdWUtMTAwIHB5LTIgcHgtNCBteC0xIHJvdW5kZWQgZm9udC1ib2xkXCJcclxuICAgICAgICAgICAgICAgIGxpbmtDbGFzcz1cInRleHQtZ3JheS03MDAgaG92ZXI6bm8tdW5kZXJsaW5lIGhvdmVyOnRleHQtZ3JheS03MDBcIlxyXG4gICAgICAgICAgICAgICAgaGlkZUZpcnN0TGFzdFBhZ2VzPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgcHJldlBhZ2VUZXh0PXtcclxuICAgICAgICAgICAgICAgICAgPGkgc3R5bGU9e3sgY29sb3I6IFwiIzZGNkY2RlwiIH19IGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dfYmFja1xyXG4gICAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBuZXh0UGFnZVRleHQ9e1xyXG4gICAgICAgICAgICAgICAgICA8aSBzdHlsZT17eyBjb2xvcjogXCIjNkY2RjZGXCIgfX0gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICBhcnJvd19mb3J3YXJkXHJcbiAgICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYmctYmx1ZS00MDBcIlxyXG4gICAgICAgICAgICAgICAgYWN0aXZlTGlua0NsYXNzPVwidGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IEJ1dHRvbkFkZCA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJhY2tncm91bmQ6ICM0MzYxZWU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMTBweCAyM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZW5nZ3VuYWFuO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCJyZWFjdC1qcy1wYWdpbmF0aW9uXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVRvYXN0cyB9IGZyb20gXCJyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zXCI7XHJcbmltcG9ydCB7IGF4aW9zR2VuZXJhbCwgZXJyb3JIYW5kbGVyIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvZ2xvYmFsXCI7XHJcbmltcG9ydCBsb2FkYWJsZSBmcm9tIFwiQGxvYWRhYmxlL2NvbXBvbmVudFwiO1xyXG5jb25zdCBBZGRUYWdpaGFuID0gbG9hZGFibGUoKCkgPT5cclxuICBpbXBvcnQoXCIuLi8uLi9jb21wb25lbnRzL3RhZ2loYW4vQWRkVGFnaWhhblwiKVxyXG4pO1xyXG5jb25zdCBFZGl0VGFnaWhhbiA9IGxvYWRhYmxlKCgpID0+XHJcbiAgaW1wb3J0KFwiLi4vLi4vY29tcG9uZW50cy90YWdpaGFuL0VkaXRUYWdpaGFuXCIpXHJcbik7XHJcblxyXG5mdW5jdGlvbiBUYWdpaGFuKCkge1xyXG4gIGNvbnN0IFt0YWdpaGFuLCBzZXRUYWdpaGFuXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBhY2Nlc3NUb2tlbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWNjZXNzVG9rZW4pO1xyXG4gIGNvbnN0IHsgYWRkVG9hc3QgfSA9IHVzZVRvYXN0cygpO1xyXG4gIGNvbnN0IFtzaG93QWRkLCBzZXRTaG93QWRkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd0VkaXQsIHNldFNob3dFZGl0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2VsZWN0ZWRJZCwgc2V0U2VsZWN0ZWRJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgLy8gUGFnaW5hdGlvblxyXG4gIGNvbnN0IHRha2VTaXplID0gMTA7XHJcbiAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYWN0aXZlUGFnZSwgc2V0QWN0aXZlUGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgc29ydCA9IFwiXCI7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFRhZ2loYW4oKTtcclxuICB9LCBbc2VhcmNoLCBzaG93QWRkLCBzaG93RWRpdCwgYWN0aXZlUGFnZV0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKHBhZ2VOdW1iZXIpID0+IHtcclxuICAgIHNldEFjdGl2ZVBhZ2UocGFnZU51bWJlcik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hUYWdpaGFuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBhY2Nlc3NUb2tlbixcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0dlbmVyYWwuZ2V0KFwiL3Jlc291cmNlcy90YWdpaGFuXCIsIHtcclxuICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgcGFnZTogYWN0aXZlUGFnZSxcclxuICAgICAgICAgIGxpbWl0OiB0YWtlU2l6ZSxcclxuICAgICAgICAgIHNlYXJjaCxcclxuICAgICAgICAgIC8vIHNvcnQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZXRUYWdpaGFuKFtdKTtcclxuICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBzZXRUYWdpaGFuKGRhdGEuZGF0YSk7XHJcbiAgICAgICAgc2V0VG90YWwoZGF0YS5wYWdpbmF0aW9uLnRvdGFsX2VudHJpZXMpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEucGFnaW5hdGlvbi50b3RhbF9lbnRyaWVzKVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhZGRUb2FzdChlcnJvckhhbmRsZXIoZXJyb3IpLCB7IGFwcGVhcmFuY2U6IFwiZXJyb3JcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVUYWdpaGFuID0gYXN5bmMgKGlkVXNlcikgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBhY2Nlc3NUb2tlbixcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0dlbmVyYWwuZGVsZXRlKFxyXG4gICAgICAgIGAvcmVzb3VyY2VzL3RhZ2loYW4vJHtpZFVzZXJ9YCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IHJlc3BvbnNlO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBhZGRUb2FzdChcIkJlcmhhc2lsIGhhcHVzIHRhZ2loYW5cIiwgeyBhcHBlYXJhbmNlOiBcInN1Y2Nlc3NcIiB9KTtcclxuICAgICAgICBmZXRjaFRhZ2loYW4oKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWRkVG9hc3QoZXJyb3JIYW5kbGVyKGVycm9yKSwgeyBhcHBlYXJhbmNlOiBcImVycm9yXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMTAgcHgtMTBcIj5cclxuICAgICAge3Nob3dBZGQgPyAoXHJcbiAgICAgICAgPEFkZFRhZ2loYW4gc2hvdz17c2hvd0FkZH0gc2V0U2hvdz17KHZhbCkgPT4gc2V0U2hvd0FkZCh2YWwpfSAvPlxyXG4gICAgICApIDogc2hvd0VkaXQgPyAoXHJcbiAgICAgICAgPEVkaXRUYWdpaGFuXHJcbiAgICAgICAgICBpZD17c2VsZWN0ZWRJZH1cclxuICAgICAgICAgIHNob3c9e3Nob3dFZGl0fVxyXG4gICAgICAgICAgc2V0U2hvdz17KHZhbCkgPT4gc2V0U2hvd0VkaXQodmFsKX1cclxuICAgICAgICAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHNoYWRvdyB3LWZ1bGwgcm91bmRlZCBweC02IHB5LTEwXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0yeGwgdGV4dC1ibGFjayBtYi0yMFwiPlxyXG4gICAgICAgICAgICAgIERhdGEgVGFnaWhhblxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtdC00IG1iLThcIj5cclxuICAgICAgICAgICAgICA8QnV0dG9uQWRkIG9uQ2xpY2s9eygpID0+IHNldFNob3dBZGQoIXNob3dBZGQpfT5cclxuICAgICAgICAgICAgICAgIERhdGEgQmFydVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uQWRkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGJyZWFrLW5vcm1hbCBpdGVtcy1jZW50ZXIgYm9yZGVyLWItMiBweC0zIHB5LTJcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yLTIgbWItMCBmb250LWJvbGQgdy0yMFwiPiM8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtci0yIG1iLTAgZm9udC1ib2xkIHctMTEvMTJcIj5JRCBQZW5nZ3VuYWFuPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXItMiBtYi0wIGZvbnQtYm9sZCB3LTExLzEyXCI+TmFtYSBQZWxhbmdnYW48L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtci0yIG1iLTAgZm9udC1ib2xkIHctMTEvMTJcIj5CdWxhbjwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yLTIgbWItMCBmb250LWJvbGQgdy0xMS8xMlwiPlRhaHVuPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXItMiBtYi0wIGZvbnQtYm9sZCB3LTExLzEyXCI+SnVtbGFoIE1ldGVyPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXItMiBtYi0wIGZvbnQtYm9sZCB3LTExLzEyXCI+U3RhdHVzPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIG1sLTYgbWItMFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7dGFnaWhhbi5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IGluZGV4ICUgMiA9PT0gMCA/IFwiI0U3RTdFN1wiIDogXCIjRjNGM0YzXCIgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgYnJlYWstbm9ybWFsIHB5LTIgcHgtMyBpdGVtcy1jZW50ZXIgaG92ZXI6b3BhY2l0eS04MFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtci0yIG1iLTAgdy0yMFwiPntpbmRleCArIDF9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtci0yIG1iLTAgdy0xMS8xMlwiPntpdGVtLmlkX3BlbmdndW5hYW59PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtci0yIG1iLTAgdy0xMS8xMlwiPntpdGVtLmlkX3BlbGFuZ2dhbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yLTIgbWItMCB3LTExLzEyXCI+e2l0ZW0uYnVsYW59PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtci0yIG1iLTAgdy0xMS8xMlwiPntpdGVtLnRhaHVufTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXItMiBtYi0wIHctMTEvMTJcIj57aXRlbS5qdW1sYWhfbWV0ZXJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtci0yIG1iLTAgdy0xMS8xMlwiPntpdGVtLnN0YXR1c308L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1lbmQgbWwtNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiM2RjZGNkZcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkSWQoaXRlbS5pZF90YWdpaGFuKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dFZGl0KCFzaG93RWRpdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBjdXJzb3ItcG9pbnRlciBtci00XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRcclxuICAgICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNvbmZpcm0oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYFlha2luIGhhcHVzIGAgKyBpdGVtLmlkX3BlbGFuZ2dhbiArIGAgP2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVRhZ2loYW4oaXRlbS5pZF90YWdpaGFuKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiM2RjZGNkZcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZVxyXG4gICAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG10LTggZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWVuZCBpdGVtcy1lbmRcIj5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgICAgYWN0aXZlUGFnZT17YWN0aXZlUGFnZX1cclxuICAgICAgICAgICAgICAgIGl0ZW1zQ291bnRQZXJQYWdlPXt0YWtlU2l6ZX1cclxuICAgICAgICAgICAgICAgIHRvdGFsSXRlbXNDb3VudD17dG90YWx9XHJcbiAgICAgICAgICAgICAgICBwYWdlUmFuZ2VEaXNwbGF5ZWQ9ezV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUGFnZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIGl0ZW1DbGFzcz1cImJnLWJsdWUtMTAwIHB5LTIgcHgtNCBteC0xIHJvdW5kZWQgZm9udC1ib2xkXCJcclxuICAgICAgICAgICAgICAgIGxpbmtDbGFzcz1cInRleHQtZ3JheS03MDAgaG92ZXI6bm8tdW5kZXJsaW5lIGhvdmVyOnRleHQtZ3JheS03MDBcIlxyXG4gICAgICAgICAgICAgICAgaGlkZUZpcnN0TGFzdFBhZ2VzPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgcHJldlBhZ2VUZXh0PXtcclxuICAgICAgICAgICAgICAgICAgPGkgc3R5bGU9e3sgY29sb3I6IFwiIzZGNkY2RlwiIH19IGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dfYmFja1xyXG4gICAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBuZXh0UGFnZVRleHQ9e1xyXG4gICAgICAgICAgICAgICAgICA8aSBzdHlsZT17eyBjb2xvcjogXCIjNkY2RjZGXCIgfX0gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICBhcnJvd19mb3J3YXJkXHJcbiAgICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYmctYmx1ZS00MDBcIlxyXG4gICAgICAgICAgICAgICAgYWN0aXZlTGlua0NsYXNzPVwidGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IEJ1dHRvbkFkZCA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJhY2tncm91bmQ6ICM0MzYxZWU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMTBweCAyM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWdpaGFuO1xyXG4iLCJpbXBvcnQge1xyXG4gIFNFVF9BQ0NFU1NfVE9LRU4sXHJcbiAgU0VUX0xPQURJTkcsXHJcbiAgU0VUX1VTRVIsXHJcbn0gZnJvbSBcIi4vYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFVzZXIgPSAocGF5bG9hZCkgPT4gKHtcclxuICB0eXBlOiBTRVRfVVNFUixcclxuICBwYXlsb2FkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRBY2Nlc3NUb2tlbiA9IChwYXlsb2FkKSA9PiAoe1xyXG4gIHR5cGU6IFNFVF9BQ0NFU1NfVE9LRU4sXHJcbiAgcGF5bG9hZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0TG9hZGluZyA9IChwYXlsb2FkKSA9PiAoe1xyXG4gIHR5cGU6IFNFVF9MT0FESU5HLFxyXG4gIHBheWxvYWQsXHJcbn0pO1xyXG4iLCJleHBvcnQgY29uc3QgU0VUX1VTRVIgPSBcIlNFVF9VU0VSXCI7XHJcbmV4cG9ydCBjb25zdCBTRVRfQUNDRVNTX1RPS0VOID0gXCJTRVRfQUNDRVNTX1RPS0VOXCI7XHJcbmV4cG9ydCBjb25zdCBTRVRfTE9BRElORyA9IFwiU0VUX0xPQURJTkdcIjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGxvYWRhYmxlL2NvbXBvbmVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZm9ybWlrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9tZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1qcy1wYWdpbmF0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNlbGVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ5dXBcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==