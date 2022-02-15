module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/master": 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/master/index.js");
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
        name: "user",
        onClick: () => next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/user")
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

/***/ "./pages/master/index.js":
/*!*******************************!*\
  !*** ./pages/master/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Master; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MainLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MainLayout */ "./components/MainLayout.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tarif */ "./pages/master/tarif.js");
/* harmony import */ var _pelanggan__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pelanggan */ "./pages/master/pelanggan.js");
/* harmony import */ var _pelanggan__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_pelanggan__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./level */ "./pages/master/level.js");
/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_level__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user */ "./pages/master/user.js");

var _jsxFileName = "C:\\project\\sertifikasi_listrik_frontend\\pages\\master\\index.js";








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
function Master() {
  const {
    0: tabActive,
    1: setTabActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("user");
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Master - Listrik"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MainLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Tabbar, {
        className: "flex flex-row justify-items-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TabItem, {
          onClick: () => setTabActive("pelanggan"),
          className: `cursor-pointer ${tabActive === "pelanggan" ? "border-b-2 border-black text-black" : "text-gray-400"}`,
          children: "Pelanggan"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TabItem, {
          onClick: () => setTabActive("tarif"),
          className: `cursor-pointer ${tabActive === "tarif" ? "border-b-2 border-black text-black" : "text-gray-400"}`,
          children: "Tarif"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TabItem, {
          onClick: () => setTabActive("level"),
          className: `cursor-pointer ${tabActive === "level" ? "border-b-2 border-black text-black" : "text-gray-400"}`,
          children: "Level"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TabItem, {
          onClick: () => setTabActive("user"),
          className: `cursor-pointer ${tabActive === "user" ? "border-b-2 border-black text-black" : "text-gray-400"}`,
          children: "User"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), tabActive === "pelanggan" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pelanggan__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 39
      }, this), tabActive === "user" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_user__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 34
      }, this), tabActive === "level" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_level__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 35
      }, this), tabActive === "tarif" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tarif__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 35
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./pages/master/level.js":
/*!*******************************!*\
  !*** ./pages/master/level.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/master/pelanggan.js":
/*!***********************************!*\
  !*** ./pages/master/pelanggan.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/master/tarif.js":
/*!*******************************!*\
  !*** ./pages/master/tarif.js ***!
  \*******************************/
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

var _jsxFileName = "C:\\project\\sertifikasi_listrik_frontend\\pages\\master\\tarif.js";







const AddTarif = _loadable_component__WEBPACK_IMPORTED_MODULE_7___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ../../components/tarif/AddTarif */ "./components/tarif/AddTarif.js", 7)));
const EditTarif = _loadable_component__WEBPACK_IMPORTED_MODULE_7___default()(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! ../../components/tarif/EditTarif */ "./components/tarif/EditTarif.js", 7)));

function Tarif() {
  const {
    0: tarif,
    1: setTarif
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
    fetchTarif();
  }, [search, showAdd, showEdit, activePage]);

  const handlePageChange = pageNumber => {
    setActivePage(pageNumber);
  };

  const fetchTarif = async () => {
    try {
      const headers = {
        Authorization: accessToken
      };
      const response = await _helpers_global__WEBPACK_IMPORTED_MODULE_6__["axiosGeneral"].get("/resources/tarif", {
        headers,
        params: {
          page: activePage,
          limit: takeSize,
          search // sort,

        }
      });
      setTarif([]);
      const {
        status,
        data
      } = response;

      if (status === 200) {
        setTarif(data.data);
        setTotal(data.pagination.total_entries); // console.log(data.pagination.total_entries)
      }
    } catch (error) {
      addToast(Object(_helpers_global__WEBPACK_IMPORTED_MODULE_6__["errorHandler"])(error), {
        appearance: "error"
      });
    }
  };

  const deleteTarif = async idTarif => {
    try {
      const headers = {
        Authorization: accessToken
      };
      const response = await _helpers_global__WEBPACK_IMPORTED_MODULE_6__["axiosGeneral"].delete(`/resources/tarif/${idTarif}`, {
        headers
      });
      const {
        status
      } = response;

      if (status === 200) {
        addToast("Berhasil hapus tarif", {
          appearance: "success"
        });
        fetchTarif();
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
          children: "Data Tarif"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-row justify-between items-center mt-4 mb-8",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ButtonAdd, {
            onClick: () => setShowAdd(!showAdd),
            children: "Data Baru"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "py-2 px-4 bg-gray-200 w-1/3 rounded focus:outline-none text-base",
            placeholder: "Cari",
            onChange: e => {
              setSearch(e.target.value);
              setActivePage(1);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
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
            lineNumber: 116,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 font-bold w-11/12",
            children: "Daya"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 font-bold w-11/12",
            children: "Tarif per KWH"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm font-bold ml-6 mb-0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 13
        }, this), tarif.map((item, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            background: index % 2 === 0 ? "#E7E7E7" : "#F3F3F3"
          },
          className: "flex flex-row break-normal py-2 px-3 items-center hover:opacity-80",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 w-20",
            children: index + 1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 w-11/12",
            children: item.daya
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 w-11/12",
            children: item.tarifperkwh
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
                setSelectedId(item.id_tarif);
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
                if (window.confirm(`Yakin hapus ` + item.daya + ` ?`)) {
                  deleteTarif(item.id_tarif);
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
          lineNumber: 122,
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
/* harmony default export */ __webpack_exports__["default"] = (Tarif);

/***/ }),

/***/ "./pages/master/user.js":
/*!******************************!*\
  !*** ./pages/master/user.js ***!
  \******************************/
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

var _jsxFileName = "C:\\project\\sertifikasi_listrik_frontend\\pages\\master\\user.js";







const AddUser = _loadable_component__WEBPACK_IMPORTED_MODULE_7___default()(() => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../../components/user/AddUser */ "./components/user/AddUser.js")));
const EditUser = _loadable_component__WEBPACK_IMPORTED_MODULE_7___default()(() => __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../../components/user/EditUser */ "./components/user/EditUser.js")));

function User() {
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
/* harmony default export */ __webpack_exports__["default"] = (User);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYWluTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NpZGViYXIvTWVudUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbWFzdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL21hc3Rlci90YXJpZi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9tYXN0ZXIvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25DcmVhdG9yLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGxvYWRhYmxlL2NvbXBvbmVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZm9ybWlrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL21kXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtanMtcGFnaW5hdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2VsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdG9hc3Qtbm90aWZpY2F0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwieXVwXCIiXSwibmFtZXMiOlsiTWFpbkxheW91dCIsImNoaWxkcmVuIiwiYWNjZXNzVG9rZW4iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlRWZmZWN0IiwiUm91dGVyIiwicmVwbGFjZSIsImJhY2tncm91bmQiLCJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiTWVudVdyYXBwZXIiLCJ1bCIsIlNwYWNlciIsIlNpZGViYXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiZG9Mb2dvdXQiLCJzZXRBY2Nlc3NUb2tlbiIsInNldFVzZXIiLCJwdXNoIiwibGkiLCJwcm9wcyIsImlzQWN0aXZlIiwiSWNvbldyYXBwZXIiLCJzcGFuIiwiTWVudUl0ZW0iLCJvbkNsaWNrIiwibmFtZSIsImljb24iLCJ0ZXh0Iiwicm91dGVyIiwidXNlUm91dGVyIiwicGF0aCIsInBhdGhuYW1lIiwic3BsaXQiLCJCQVNFX1VSTCIsImF4aW9zR2VuZXJhbCIsIkF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsInJlc3BvbnNlVHlwZSIsImVycm9ySGFuZGxlciIsImVycm9yIiwicmVzcG9uc2UiLCJ1bmRlZmluZWQiLCJzdGF0dXMiLCJkYXRhIiwibWVzc2FnZSIsIlRhYmJhciIsIlRhYkl0ZW0iLCJNYXN0ZXIiLCJ0YWJBY3RpdmUiLCJzZXRUYWJBY3RpdmUiLCJ1c2VTdGF0ZSIsIkFkZFRhcmlmIiwibG9hZGFibGUiLCJFZGl0VGFyaWYiLCJUYXJpZiIsInRhcmlmIiwic2V0VGFyaWYiLCJhZGRUb2FzdCIsInVzZVRvYXN0cyIsInNob3dBZGQiLCJzZXRTaG93QWRkIiwic2hvd0VkaXQiLCJzZXRTaG93RWRpdCIsInNlbGVjdGVkSWQiLCJzZXRTZWxlY3RlZElkIiwidGFrZVNpemUiLCJ0b3RhbCIsInNldFRvdGFsIiwiYWN0aXZlUGFnZSIsInNldEFjdGl2ZVBhZ2UiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJzb3J0IiwiZmV0Y2hUYXJpZiIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJwYWdlTnVtYmVyIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJnZXQiLCJwYXJhbXMiLCJwYWdlIiwibGltaXQiLCJwYWdpbmF0aW9uIiwidG90YWxfZW50cmllcyIsImFwcGVhcmFuY2UiLCJkZWxldGVUYXJpZiIsImlkVGFyaWYiLCJkZWxldGUiLCJ2YWwiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJkYXlhIiwidGFyaWZwZXJrd2giLCJjb2xvciIsImlkX3RhcmlmIiwid2luZG93IiwiY29uZmlybSIsIkJ1dHRvbkFkZCIsIkFkZFVzZXIiLCJFZGl0VXNlciIsIlVzZXIiLCJ1c2VyIiwiZmV0Y2hVc2VyIiwiZGVsZXRlVXNlciIsImlkVXNlciIsInVzZXJuYW1lIiwibmFtYV9hZG1pbiIsImlkX2xldmVsIiwiaWRfdXNlciIsInBheWxvYWQiLCJ0eXBlIiwiU0VUX1VTRVIiLCJTRVRfQUNDRVNTX1RPS0VOIiwic2V0TG9hZGluZyIsIlNFVF9MT0FESU5HIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7O1FBRUE7UUFDQTtRQUNBLG1DQUFtQztRQUNuQztRQUNBO1FBQ0E7UUFDQTtRQUNBLGtCQUFrQixxQkFBcUI7UUFDdkM7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFB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LE9BQUQsS0FBYztBQUN0Q0MsTUFBSSxFQUFFSSxvREFEZ0M7QUFFdENMO0FBRnNDLENBQWQsQ0FBbkIsQzs7Ozs7Ozs7Ozs7O0FDaEJQO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTUUsUUFBUSxHQUFHLFVBQWpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUUsV0FBVyxHQUFHLGFBQXBCLEM7Ozs7Ozs7Ozs7O0FDRlAsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoicGFnZXMvbWFzdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicGFnZXMvbWFzdGVyXCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIHJlcXVpcmUoKSBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gMCkge1xuIFx0XHRcdHZhciBjaHVuayA9IHJlcXVpcmUoXCIuLi9cIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiKTtcbiBcdFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBjaHVuay5tb2R1bGVzLCBjaHVua0lkcyA9IGNodW5rLmlkcztcbiBcdFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gdW5jYXVnaHQgZXJyb3IgaGFuZGxlciBmb3Igd2VicGFjayBydW50aW1lXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7XG4gXHRcdHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gXHRcdFx0dGhyb3cgZXJyOyAvLyBjYXRjaCB0aGlzIGVycm9yIGJ5IHVzaW5nIGltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL21hc3Rlci9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4vU2lkZWJhclwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgTWFpbkxheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBhY2Nlc3NUb2tlbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWNjZXNzVG9rZW4pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgIFJvdXRlci5yZXBsYWNlKFwiL1wiKTtcclxuICAgIH1cclxuICB9LCBbYWNjZXNzVG9rZW5dKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJoLXNjcmVlbiBpdGVtcy1zdGFydCBmbGV4XCJcclxuICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogXCIjRkFGQkZDXCIgfX1cclxuICAgID5cclxuICAgICAgPFNpZGViYXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1zY3JlZW4gb3ZlcmZsb3ctYXV0b1wiPntjaGlsZHJlbn08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluTGF5b3V0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IE1kSG9tZSwgTWRUb2RheSwgTWRQZW9wbGUsIE1kUG93ZXJTZXR0aW5nc05ldywgTWRJbXBvcnRDb250YWN0cyB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIi4vc2lkZWJhci9NZW51SXRlbVwiO1xyXG5pbXBvcnQgeyBEZXNjcmlwdGlvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgc2V0QWNjZXNzVG9rZW4sIHNldFVzZXIgfSBmcm9tIFwiLi4vc3RvcmUvYWN0aW9uQ3JlYXRvclwiO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDE1JTtcclxuICBiYWNrZ3JvdW5kOiAjMDA3MTc1O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG5gO1xyXG5jb25zdCBNZW51V3JhcHBlciA9IHN0eWxlZC51bGBcclxuICBwYWRkaW5nOiAwcHggMTVweDtcclxuYDtcclxuY29uc3QgU3BhY2VyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogYXV0bztcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGViYXIoKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBkb0xvZ291dCA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHNldEFjY2Vzc1Rva2VuKG51bGwpKTtcclxuICAgIGRpc3BhdGNoKHNldFVzZXIobnVsbCkpO1xyXG4gICAgUm91dGVyLnJlcGxhY2UoXCIvXCIpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyIGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgaC1mdWxsIG92ZXJmbG93LXktYXV0b1wiPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgY2xhc3NOYW1lPVwicC00XCJcclxuICAgICAgLz5cclxuICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciBtYi0zNiB0ZXh0LXllbGxvdy0zMDBcIj5MSVNUUklLPC9oND5cclxuICAgICAgPE1lbnVXcmFwcGVyIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgIHRleHQ9XCJEYXNoYm9hcmRcIlxyXG4gICAgICAgICAgaWNvbj17PE1kSG9tZSBzaXplPVwiMjRweFwiIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IG1yLTNcIiAvPn1cclxuICAgICAgICAgIG5hbWU9XCJkYXNoYm9hcmRcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICB0ZXh0PVwiTWFzdGVyXCJcclxuICAgICAgICAgIGljb249ezxEZXNjcmlwdGlvbiBzaXplPVwiMjRweFwiIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IG1yLTNcIiAvPn1cclxuICAgICAgICAgIG5hbWU9XCJtYXN0ZXJcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goXCIvbWFzdGVyXCIpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICB0ZXh0PVwiVHJhbnNha3NpXCJcclxuICAgICAgICAgIGljb249ezxNZFBlb3BsZSBzaXplPVwiMjRweFwiIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IG1yLTNcIiAvPn1cclxuICAgICAgICAgIG5hbWU9XCJ1c2VyXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKFwiL3VzZXJcIil9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgIHRleHQ9XCJLZWx1YXJcIlxyXG4gICAgICAgICAgaWNvbj17PE1kUG93ZXJTZXR0aW5nc05ldyBzaXplPVwiMjRweFwiIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IG1yLTNcIiAvPn1cclxuICAgICAgICAgIG5hbWU9XCJyZXBvcnRcIlxyXG4gICAgICAgICAgb25DbGljaz17ZG9Mb2dvdXR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9NZW51V3JhcHBlcj5cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmxpYFxyXG4gIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggMjJweDtcclxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gKHByb3BzLmlzQWN0aXZlID8gXCIjRkZDRDA1XCIgOiBcIlwiKX07XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBjb2xvcjogJHsocHJvcHMpID0+IChwcm9wcy5pc0FjdGl2ZSA/IFwiIzAwMFwiIDogXCIjRkZGXCIpfTtcclxuYDtcclxuXHJcbmNvbnN0IEljb25XcmFwcGVyID0gc3R5bGVkLnNwYW5gXHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgTWVudUl0ZW0gPSAoeyBvbkNsaWNrLCBuYW1lLCBpY29uLCB0ZXh0IH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbLCBwYXRoXSA9IHJvdXRlci5wYXRobmFtZS5zcGxpdChcIi9cIik7XHJcbiAgY29uc3QgaXNBY3RpdmUgPSBwYXRoID09PSBuYW1lO1xyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlciBvbkNsaWNrPXtvbkNsaWNrfSBpc0FjdGl2ZT17aXNBY3RpdmV9PlxyXG4gICAgICA8SWNvbldyYXBwZXI+e2ljb259PC9JY29uV3JhcHBlcj5cclxuICAgICAge3RleHR9XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVJdGVtO1xyXG4iLCJpbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQkFTRV9VUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6OTAwMC92MVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF4aW9zR2VuZXJhbCA9IEF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogQkFTRV9VUkwsXHJcbiAgcmVzcG9uc2VUeXBlOiBcImpzb25cIixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZXJyb3JIYW5kbGVyID0gKGVycm9yKSA9PiB7XHJcbiAgcmV0dXJuIGVycm9yLnJlc3BvbnNlICE9PSB1bmRlZmluZWRcclxuICAgID8gYFJlc3BvbnNlICR7ZXJyb3IucmVzcG9uc2Uuc3RhdHVzfTogJHtlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2V9YFxyXG4gICAgOiBlcnJvci5tZXNzYWdlO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTWFpbkxheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NYWluTGF5b3V0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBUYXJpZiBmcm9tIFwiLi90YXJpZlwiO1xyXG5pbXBvcnQgUGVsYW5nZ2FuIGZyb20gXCIuL3BlbGFuZ2dhblwiO1xyXG5pbXBvcnQgTGV2ZWwgZnJvbSBcIi4vbGV2ZWxcIjtcclxuaW1wb3J0IFVzZXIgZnJvbSBcIi4vdXNlclwiO1xyXG5cclxuY29uc3QgVGFiYmFyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBwYWRkaW5nOiAyMHB4IDQwcHggMHB4IDQwcHg7XHJcbmA7XHJcbmNvbnN0IFRhYkl0ZW0gPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1yaWdodDogMi41cmVtO1xyXG5gO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXN0ZXIoKSB7XHJcbiAgY29uc3QgW3RhYkFjdGl2ZSwgc2V0VGFiQWN0aXZlXSA9IHVzZVN0YXRlKFwidXNlclwiKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk1hc3RlciAtIExpc3RyaWs8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxNYWluTGF5b3V0PlxyXG4gICAgICAgIDxUYWJiYXIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPFRhYkl0ZW1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGFiQWN0aXZlKFwicGVsYW5nZ2FuXCIpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BjdXJzb3ItcG9pbnRlciAke1xyXG4gICAgICAgICAgICAgIHRhYkFjdGl2ZSA9PT0gXCJwZWxhbmdnYW5cIlxyXG4gICAgICAgICAgICAgICAgPyBcImJvcmRlci1iLTIgYm9yZGVyLWJsYWNrIHRleHQtYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgOiBcInRleHQtZ3JheS00MDBcIlxyXG4gICAgICAgICAgICB9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgUGVsYW5nZ2FuXHJcbiAgICAgICAgICA8L1RhYkl0ZW0+XHJcbiAgICAgICAgICA8VGFiSXRlbVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUYWJBY3RpdmUoXCJ0YXJpZlwiKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgY3Vyc29yLXBvaW50ZXIgJHtcclxuICAgICAgICAgICAgICB0YWJBY3RpdmUgPT09IFwidGFyaWZcIlxyXG4gICAgICAgICAgICAgICAgPyBcImJvcmRlci1iLTIgYm9yZGVyLWJsYWNrIHRleHQtYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgOiBcInRleHQtZ3JheS00MDBcIlxyXG4gICAgICAgICAgICB9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVGFyaWZcclxuICAgICAgICAgIDwvVGFiSXRlbT5cclxuICAgICAgICAgIDxUYWJJdGVtXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhYkFjdGl2ZShcImxldmVsXCIpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BjdXJzb3ItcG9pbnRlciAke1xyXG4gICAgICAgICAgICAgIHRhYkFjdGl2ZSA9PT0gXCJsZXZlbFwiXHJcbiAgICAgICAgICAgICAgICA/IFwiYm9yZGVyLWItMiBib3JkZXItYmxhY2sgdGV4dC1ibGFja1wiXHJcbiAgICAgICAgICAgICAgICA6IFwidGV4dC1ncmF5LTQwMFwiXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBMZXZlbFxyXG4gICAgICAgICAgPC9UYWJJdGVtPlxyXG4gICAgICAgICAgPFRhYkl0ZW1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGFiQWN0aXZlKFwidXNlclwiKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgY3Vyc29yLXBvaW50ZXIgJHtcclxuICAgICAgICAgICAgICB0YWJBY3RpdmUgPT09IFwidXNlclwiXHJcbiAgICAgICAgICAgICAgICA/IFwiYm9yZGVyLWItMiBib3JkZXItYmxhY2sgdGV4dC1ibGFja1wiXHJcbiAgICAgICAgICAgICAgICA6IFwidGV4dC1ncmF5LTQwMFwiXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBVc2VyXHJcbiAgICAgICAgICA8L1RhYkl0ZW0+XHJcbiAgICAgICAgPC9UYWJiYXI+XHJcbiAgICAgICAge3RhYkFjdGl2ZSA9PT0gXCJwZWxhbmdnYW5cIiAmJiA8UGVsYW5nZ2FuIC8+fVxyXG4gICAgICAgIHt0YWJBY3RpdmUgPT09IFwidXNlclwiICYmIDxVc2VyIC8+fVxyXG4gICAgICAgIHt0YWJBY3RpdmUgPT09IFwibGV2ZWxcIiAmJiA8TGV2ZWwgLz59XHJcbiAgICAgICAge3RhYkFjdGl2ZSA9PT0gXCJ0YXJpZlwiICYmIDxUYXJpZiAvPn1cclxuICAgICAgPC9NYWluTGF5b3V0PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCJyZWFjdC1qcy1wYWdpbmF0aW9uXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVRvYXN0cyB9IGZyb20gXCJyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zXCI7XHJcbmltcG9ydCB7IGF4aW9zR2VuZXJhbCwgZXJyb3JIYW5kbGVyIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvZ2xvYmFsXCI7XHJcbmltcG9ydCBsb2FkYWJsZSBmcm9tIFwiQGxvYWRhYmxlL2NvbXBvbmVudFwiO1xyXG5jb25zdCBBZGRUYXJpZiA9IGxvYWRhYmxlKCgpID0+XHJcbiAgaW1wb3J0KFwiLi4vLi4vY29tcG9uZW50cy90YXJpZi9BZGRUYXJpZlwiKVxyXG4pO1xyXG5jb25zdCBFZGl0VGFyaWYgPSBsb2FkYWJsZSgoKSA9PlxyXG4gIGltcG9ydChcIi4uLy4uL2NvbXBvbmVudHMvdGFyaWYvRWRpdFRhcmlmXCIpXHJcbik7XHJcblxyXG5mdW5jdGlvbiBUYXJpZigpIHtcclxuICBjb25zdCBbdGFyaWYsIHNldFRhcmlmXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBhY2Nlc3NUb2tlbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWNjZXNzVG9rZW4pO1xyXG4gIGNvbnN0IHsgYWRkVG9hc3QgfSA9IHVzZVRvYXN0cygpO1xyXG4gIGNvbnN0IFtzaG93QWRkLCBzZXRTaG93QWRkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd0VkaXQsIHNldFNob3dFZGl0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2VsZWN0ZWRJZCwgc2V0U2VsZWN0ZWRJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgLy8gUGFnaW5hdGlvblxyXG4gIGNvbnN0IHRha2VTaXplID0gMTA7XHJcbiAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYWN0aXZlUGFnZSwgc2V0QWN0aXZlUGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgc29ydCA9IFwiXCI7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFRhcmlmKCk7XHJcbiAgfSwgW3NlYXJjaCwgc2hvd0FkZCwgc2hvd0VkaXQsIGFjdGl2ZVBhZ2VdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUGFnZUNoYW5nZSA9IChwYWdlTnVtYmVyKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVQYWdlKHBhZ2VOdW1iZXIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoVGFyaWYgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGFjY2Vzc1Rva2VuLFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zR2VuZXJhbC5nZXQoXCIvcmVzb3VyY2VzL3RhcmlmXCIsIHtcclxuICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgcGFnZTogYWN0aXZlUGFnZSxcclxuICAgICAgICAgIGxpbWl0OiB0YWtlU2l6ZSxcclxuICAgICAgICAgIHNlYXJjaCxcclxuICAgICAgICAgIC8vIHNvcnQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZXRUYXJpZihbXSk7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSByZXNwb25zZTtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgc2V0VGFyaWYoZGF0YS5kYXRhKTtcclxuICAgICAgICBzZXRUb3RhbChkYXRhLnBhZ2luYXRpb24udG90YWxfZW50cmllcyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YS5wYWdpbmF0aW9uLnRvdGFsX2VudHJpZXMpXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFkZFRvYXN0KGVycm9ySGFuZGxlcihlcnJvciksIHsgYXBwZWFyYW5jZTogXCJlcnJvclwiIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZVRhcmlmID0gYXN5bmMgKGlkVGFyaWYpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYWNjZXNzVG9rZW4sXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NHZW5lcmFsLmRlbGV0ZShcclxuICAgICAgICBgL3Jlc291cmNlcy90YXJpZi8ke2lkVGFyaWZ9YCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IHJlc3BvbnNlO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBhZGRUb2FzdChcIkJlcmhhc2lsIGhhcHVzIHRhcmlmXCIsIHsgYXBwZWFyYW5jZTogXCJzdWNjZXNzXCIgfSk7XHJcbiAgICAgICAgZmV0Y2hUYXJpZigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhZGRUb2FzdChlcnJvckhhbmRsZXIoZXJyb3IpLCB7IGFwcGVhcmFuY2U6IFwiZXJyb3JcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJteS0xMCBweC0xMFwiPlxyXG4gICAgICB7c2hvd0FkZCA/IChcclxuICAgICAgICA8QWRkVXNlciBzaG93PXtzaG93QWRkfSBzZXRTaG93PXsodmFsKSA9PiBzZXRTaG93QWRkKHZhbCl9IC8+XHJcbiAgICAgICkgOiBzaG93RWRpdCA/IChcclxuICAgICAgICA8RWRpdFVzZXJcclxuICAgICAgICAgIGlkPXtzZWxlY3RlZElkfVxyXG4gICAgICAgICAgc2hvdz17c2hvd0VkaXR9XHJcbiAgICAgICAgICBzZXRTaG93PXsodmFsKSA9PiBzZXRTaG93RWRpdCh2YWwpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93IHctZnVsbCByb3VuZGVkIHB4LTYgcHktMTBcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTJ4bCB0ZXh0LWJsYWNrIG1iLTIwXCI+XHJcbiAgICAgICAgICAgICAgRGF0YSBUYXJpZlxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtdC00IG1iLThcIj5cclxuICAgICAgICAgICAgICA8QnV0dG9uQWRkIG9uQ2xpY2s9eygpID0+IHNldFNob3dBZGQoIXNob3dBZGQpfT5cclxuICAgICAgICAgICAgICAgIERhdGEgQmFydVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uQWRkPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBweC00IGJnLWdyYXktMjAwIHctMS8zIHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIHRleHQtYmFzZVwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNhcmlcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVBhZ2UoMSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgYnJlYWstbm9ybWFsIGl0ZW1zLWNlbnRlciBib3JkZXItYi0yIHB4LTMgcHktMlwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXItMiBtYi0wIGZvbnQtYm9sZCB3LTIwXCI+IzwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yLTIgbWItMCBmb250LWJvbGQgdy0xMS8xMlwiPkRheWE8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtci0yIG1iLTAgZm9udC1ib2xkIHctMTEvMTJcIj5UYXJpZiBwZXIgS1dIPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIG1sLTYgbWItMFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7dGFyaWYubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBpbmRleCAlIDIgPT09IDAgPyBcIiNFN0U3RTdcIiA6IFwiI0YzRjNGM1wiIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGJyZWFrLW5vcm1hbCBweS0yIHB4LTMgaXRlbXMtY2VudGVyIGhvdmVyOm9wYWNpdHktODBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXItMiBtYi0wIHctMjBcIj57aW5kZXggKyAxfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXItMiBtYi0wIHctMTEvMTJcIj57aXRlbS5kYXlhfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXItMiBtYi0wIHctMTEvMTJcIj57aXRlbS50YXJpZnBlcmt3aH08L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1lbmQgbWwtNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiM2RjZGNkZcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkSWQoaXRlbS5pZF90YXJpZik7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93RWRpdCghc2hvd0VkaXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgY3Vyc29yLXBvaW50ZXIgbXItNFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBlZGl0XHJcbiAgICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jb25maXJtKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGBZYWtpbiBoYXB1cyBgICsgaXRlbS5kYXlhICsgYCA/YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlVGFyaWYoaXRlbS5pZF90YXJpZik7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjNkY2RjZGXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBkZWxldGVcclxuICAgICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtdC04IGZsZXggZmxleC1yb3cganVzdGlmeS1lbmQgaXRlbXMtZW5kXCI+XHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2U9e2FjdGl2ZVBhZ2V9XHJcbiAgICAgICAgICAgICAgICBpdGVtc0NvdW50UGVyUGFnZT17dGFrZVNpemV9XHJcbiAgICAgICAgICAgICAgICB0b3RhbEl0ZW1zQ291bnQ9e3RvdGFsfVxyXG4gICAgICAgICAgICAgICAgcGFnZVJhbmdlRGlzcGxheWVkPXs1fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBpdGVtQ2xhc3M9XCJiZy1ibHVlLTEwMCBweS0yIHB4LTQgbXgtMSByb3VuZGVkIGZvbnQtYm9sZFwiXHJcbiAgICAgICAgICAgICAgICBsaW5rQ2xhc3M9XCJ0ZXh0LWdyYXktNzAwIGhvdmVyOm5vLXVuZGVybGluZSBob3Zlcjp0ZXh0LWdyYXktNzAwXCJcclxuICAgICAgICAgICAgICAgIGhpZGVGaXJzdExhc3RQYWdlcz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHByZXZQYWdlVGV4dD17XHJcbiAgICAgICAgICAgICAgICAgIDxpIHN0eWxlPXt7IGNvbG9yOiBcIiM2RjZGNkZcIiB9fSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIGFycm93X2JhY2tcclxuICAgICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbmV4dFBhZ2VUZXh0PXtcclxuICAgICAgICAgICAgICAgICAgPGkgc3R5bGU9e3sgY29sb3I6IFwiIzZGNkY2RlwiIH19IGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dfZm9yd2FyZFxyXG4gICAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImJnLWJsdWUtNDAwXCJcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUxpbmtDbGFzcz1cInRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBCdXR0b25BZGQgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBiYWNrZ3JvdW5kOiAjNDM2MWVlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDEwcHggMjNweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFyaWY7XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcInJlYWN0LWpzLXBhZ2luYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlVG9hc3RzIH0gZnJvbSBcInJlYWN0LXRvYXN0LW5vdGlmaWNhdGlvbnNcIjtcclxuaW1wb3J0IHsgYXhpb3NHZW5lcmFsLCBlcnJvckhhbmRsZXIgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9nbG9iYWxcIjtcclxuaW1wb3J0IGxvYWRhYmxlIGZyb20gXCJAbG9hZGFibGUvY29tcG9uZW50XCI7XHJcbmNvbnN0IEFkZFVzZXIgPSBsb2FkYWJsZSgoKSA9PlxyXG4gIGltcG9ydChcIi4uLy4uL2NvbXBvbmVudHMvdXNlci9BZGRVc2VyXCIpXHJcbik7XHJcbmNvbnN0IEVkaXRVc2VyID0gbG9hZGFibGUoKCkgPT5cclxuICBpbXBvcnQoXCIuLi8uLi9jb21wb25lbnRzL3VzZXIvRWRpdFVzZXJcIilcclxuKTtcclxuXHJcbmZ1bmN0aW9uIFVzZXIoKSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IGFjY2Vzc1Rva2VuID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hY2Nlc3NUb2tlbik7XHJcbiAgY29uc3QgeyBhZGRUb2FzdCB9ID0gdXNlVG9hc3RzKCk7XHJcbiAgY29uc3QgW3Nob3dBZGQsIHNldFNob3dBZGRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93RWRpdCwgc2V0U2hvd0VkaXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZElkLCBzZXRTZWxlY3RlZElkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAvLyBQYWdpbmF0aW9uXHJcbiAgY29uc3QgdGFrZVNpemUgPSAxMDtcclxuICBjb25zdCBbdG90YWwsIHNldFRvdGFsXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFthY3RpdmVQYWdlLCBzZXRBY3RpdmVQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBzb3J0ID0gXCJcIjtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoVXNlcigpO1xyXG4gIH0sIFtzZWFyY2gsIHNob3dBZGQsIHNob3dFZGl0LCBhY3RpdmVQYWdlXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBhZ2VDaGFuZ2UgPSAocGFnZU51bWJlcikgPT4ge1xyXG4gICAgc2V0QWN0aXZlUGFnZShwYWdlTnVtYmVyKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGFjY2Vzc1Rva2VuLFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zR2VuZXJhbC5nZXQoXCIvcmVzb3VyY2VzL3VzZXJcIiwge1xyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBwYWdlOiBhY3RpdmVQYWdlLFxyXG4gICAgICAgICAgbGltaXQ6IHRha2VTaXplLFxyXG4gICAgICAgICAgc2VhcmNoLFxyXG4gICAgICAgICAgLy8gc29ydCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNldFVzZXIoW10pO1xyXG4gICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gcmVzcG9uc2U7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIHNldFVzZXIoZGF0YS5kYXRhKTtcclxuICAgICAgICBzZXRUb3RhbChkYXRhLnBhZ2luYXRpb24udG90YWxfZW50cmllcyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YS5wYWdpbmF0aW9uLnRvdGFsX2VudHJpZXMpXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFkZFRvYXN0KGVycm9ySGFuZGxlcihlcnJvciksIHsgYXBwZWFyYW5jZTogXCJlcnJvclwiIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZVVzZXIgPSBhc3luYyAoaWRVc2VyKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGFjY2Vzc1Rva2VuLFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zR2VuZXJhbC5kZWxldGUoXHJcbiAgICAgICAgYC9yZXNvdXJjZXMvdXNlci8ke2lkVXNlcn1gLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gcmVzcG9uc2U7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGFkZFRvYXN0KFwiQmVyaGFzaWwgaGFwdXMgdXNlclwiLCB7IGFwcGVhcmFuY2U6IFwic3VjY2Vzc1wiIH0pO1xyXG4gICAgICAgIGZldGNoVXNlcigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhZGRUb2FzdChlcnJvckhhbmRsZXIoZXJyb3IpLCB7IGFwcGVhcmFuY2U6IFwiZXJyb3JcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJteS0xMCBweC0xMFwiPlxyXG4gICAgICB7c2hvd0FkZCA/IChcclxuICAgICAgICA8QWRkVXNlciBzaG93PXtzaG93QWRkfSBzZXRTaG93PXsodmFsKSA9PiBzZXRTaG93QWRkKHZhbCl9IC8+XHJcbiAgICAgICkgOiBzaG93RWRpdCA/IChcclxuICAgICAgICA8RWRpdFVzZXJcclxuICAgICAgICAgIGlkPXtzZWxlY3RlZElkfVxyXG4gICAgICAgICAgc2hvdz17c2hvd0VkaXR9XHJcbiAgICAgICAgICBzZXRTaG93PXsodmFsKSA9PiBzZXRTaG93RWRpdCh2YWwpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93IHctZnVsbCByb3VuZGVkIHB4LTYgcHktMTBcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTJ4bCB0ZXh0LWJsYWNrIG1iLTIwXCI+XHJcbiAgICAgICAgICAgICAgRGF0YSBVc2VyXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG10LTQgbWItOFwiPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25BZGQgb25DbGljaz17KCkgPT4gc2V0U2hvd0FkZCghc2hvd0FkZCl9PlxyXG4gICAgICAgICAgICAgICAgRGF0YSBCYXJ1XHJcbiAgICAgICAgICAgICAgPC9CdXR0b25BZGQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgYnJlYWstbm9ybWFsIGl0ZW1zLWNlbnRlciBib3JkZXItYi0yIHB4LTMgcHktMlwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXItMiBtYi0wIGZvbnQtYm9sZCB3LTIwXCI+IzwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yLTIgbWItMCBmb250LWJvbGQgdy0xMS8xMlwiPnVzZXJuYW1lPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXItMiBtYi0wIGZvbnQtYm9sZCB3LTExLzEyXCI+bmFtYSB1c2VyPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXItMiBtYi0wIGZvbnQtYm9sZCB3LTExLzEyXCI+bGV2ZWw8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgbWwtNiBtYi0wXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHt1c2VyLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogaW5kZXggJSAyID09PSAwID8gXCIjRTdFN0U3XCIgOiBcIiNGM0YzRjNcIiB9fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBicmVhay1ub3JtYWwgcHktMiBweC0zIGl0ZW1zLWNlbnRlciBob3ZlcjpvcGFjaXR5LTgwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yLTIgbWItMCB3LTIwXCI+e2luZGV4ICsgMX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yLTIgbWItMCB3LTExLzEyXCI+e2l0ZW0udXNlcm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtci0yIG1iLTAgdy0xMS8xMlwiPntpdGVtLm5hbWFfYWRtaW59PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtci0yIG1iLTAgdy0xMS8xMlwiPntpdGVtLmlkX2xldmVsfTwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWVuZCBtbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiIzZGNkY2RlwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJZChpdGVtLmlkX3VzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0VkaXQoIXNob3dFZGl0KTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGN1cnNvci1wb2ludGVyIG1yLTRcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdFxyXG4gICAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY29uZmlybShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBgWWFraW4gaGFwdXMgYCArIGl0ZW0udXNlcm5hbWUgKyBgID9gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVVc2VyKGl0ZW0uaWRfdXNlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjNkY2RjZGXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBkZWxldGVcclxuICAgICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtdC04IGZsZXggZmxleC1yb3cganVzdGlmeS1lbmQgaXRlbXMtZW5kXCI+XHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2U9e2FjdGl2ZVBhZ2V9XHJcbiAgICAgICAgICAgICAgICBpdGVtc0NvdW50UGVyUGFnZT17dGFrZVNpemV9XHJcbiAgICAgICAgICAgICAgICB0b3RhbEl0ZW1zQ291bnQ9e3RvdGFsfVxyXG4gICAgICAgICAgICAgICAgcGFnZVJhbmdlRGlzcGxheWVkPXs1fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBpdGVtQ2xhc3M9XCJiZy1ibHVlLTEwMCBweS0yIHB4LTQgbXgtMSByb3VuZGVkIGZvbnQtYm9sZFwiXHJcbiAgICAgICAgICAgICAgICBsaW5rQ2xhc3M9XCJ0ZXh0LWdyYXktNzAwIGhvdmVyOm5vLXVuZGVybGluZSBob3Zlcjp0ZXh0LWdyYXktNzAwXCJcclxuICAgICAgICAgICAgICAgIGhpZGVGaXJzdExhc3RQYWdlcz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHByZXZQYWdlVGV4dD17XHJcbiAgICAgICAgICAgICAgICAgIDxpIHN0eWxlPXt7IGNvbG9yOiBcIiM2RjZGNkZcIiB9fSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIGFycm93X2JhY2tcclxuICAgICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbmV4dFBhZ2VUZXh0PXtcclxuICAgICAgICAgICAgICAgICAgPGkgc3R5bGU9e3sgY29sb3I6IFwiIzZGNkY2RlwiIH19IGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dfZm9yd2FyZFxyXG4gICAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImJnLWJsdWUtNDAwXCJcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUxpbmtDbGFzcz1cInRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBCdXR0b25BZGQgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBiYWNrZ3JvdW5kOiAjNDM2MWVlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDEwcHggMjNweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcclxuIiwiaW1wb3J0IHtcclxuICBTRVRfQUNDRVNTX1RPS0VOLFxyXG4gIFNFVF9MT0FESU5HLFxyXG4gIFNFVF9VU0VSLFxyXG59IGZyb20gXCIuL2FjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRVc2VyID0gKHBheWxvYWQpID0+ICh7XHJcbiAgdHlwZTogU0VUX1VTRVIsXHJcbiAgcGF5bG9hZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0QWNjZXNzVG9rZW4gPSAocGF5bG9hZCkgPT4gKHtcclxuICB0eXBlOiBTRVRfQUNDRVNTX1RPS0VOLFxyXG4gIHBheWxvYWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldExvYWRpbmcgPSAocGF5bG9hZCkgPT4gKHtcclxuICB0eXBlOiBTRVRfTE9BRElORyxcclxuICBwYXlsb2FkLFxyXG59KTtcclxuIiwiZXhwb3J0IGNvbnN0IFNFVF9VU0VSID0gXCJTRVRfVVNFUlwiO1xyXG5leHBvcnQgY29uc3QgU0VUX0FDQ0VTU19UT0tFTiA9IFwiU0VUX0FDQ0VTU19UT0tFTlwiO1xyXG5leHBvcnQgY29uc3QgU0VUX0xPQURJTkcgPSBcIlNFVF9MT0FESU5HXCI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBsb2FkYWJsZS9jb21wb25lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvcm1pa1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvbWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtanMtcGFnaW5hdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zZWxlY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3Qtbm90aWZpY2F0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwieXVwXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=