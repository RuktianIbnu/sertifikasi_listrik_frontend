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
/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./level */ "./pages/master/level.js");
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
      }, this), tabActive === "pelanggan" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pelanggan__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 39
      }, this), tabActive === "user" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_user__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 34
      }, this), tabActive === "level" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_level__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
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

var _jsxFileName = "C:\\project\\sertifikasi_listrik_frontend\\pages\\master\\level.js";







const AddLevel = _loadable_component__WEBPACK_IMPORTED_MODULE_7___default()(() => __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ../../components/level/AddLevel */ "./components/level/AddLevel.js")));
const EditLevel = _loadable_component__WEBPACK_IMPORTED_MODULE_7___default()(() => __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! ../../components/level/EditLevel */ "./components/level/EditLevel.js")));

function Level() {
  const {
    0: level,
    1: setLevel
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
    fetchLevel();
  }, [search, showAdd, showEdit, activePage]);

  const handlePageChange = pageNumber => {
    setActivePage(pageNumber);
  };

  const fetchLevel = async () => {
    try {
      const headers = {
        Authorization: accessToken
      };
      const response = await _helpers_global__WEBPACK_IMPORTED_MODULE_6__["axiosGeneral"].get("/resources/level", {
        headers,
        params: {
          page: activePage,
          limit: takeSize,
          search // sort,

        }
      });
      setLevel([]);
      const {
        status,
        data
      } = response;

      if (status === 200) {
        setLevel(data.data);
        setTotal(data.pagination.total_entries); // console.log(data.pagination.total_entries)
      }
    } catch (error) {
      addToast(Object(_helpers_global__WEBPACK_IMPORTED_MODULE_6__["errorHandler"])(error), {
        appearance: "error"
      });
    }
  };

  const deleteLevel = async idLevel => {
    try {
      const headers = {
        Authorization: accessToken
      };
      const response = await _helpers_global__WEBPACK_IMPORTED_MODULE_6__["axiosGeneral"].delete(`/resources/level/${idLevel}`, {
        headers
      });
      const {
        status
      } = response;

      if (status === 200) {
        addToast("Berhasil hapus level", {
          appearance: "success"
        });
        fetchLevel();
      }
    } catch (error) {
      addToast(Object(_helpers_global__WEBPACK_IMPORTED_MODULE_6__["errorHandler"])(error), {
        appearance: "error"
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "my-10 px-10",
    children: showAdd ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AddLevel, {
      show: showAdd,
      setShow: val => setShowAdd(val)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }, this) : showEdit ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(EditLevel, {
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
          children: "Data Level"
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
            children: "Nama Level"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm font-bold ml-6 mb-0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 13
        }, this), level.map((item, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            background: index % 2 === 0 ? "#E7E7E7" : "#F3F3F3"
          },
          className: "flex flex-row break-normal py-2 px-3 items-center hover:opacity-80",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 w-20",
            children: index + 1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 w-11/12",
            children: item.nama_level
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
                setSelectedId(item.id_level);
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
                if (window.confirm(`Yakin hapus ` + item.nama_level + ` ?`)) {
                  deleteLevel(item.id_level);
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
          lineNumber: 121,
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
/* harmony default export */ __webpack_exports__["default"] = (Level);

/***/ }),

/***/ "./pages/master/pelanggan.js":
/*!***********************************!*\
  !*** ./pages/master/pelanggan.js ***!
  \***********************************/
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

var _jsxFileName = "C:\\project\\sertifikasi_listrik_frontend\\pages\\master\\pelanggan.js";







const AddPelanggan = _loadable_component__WEBPACK_IMPORTED_MODULE_7___default()(() => __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! ../../components/pelanggan/AddPelanggan */ "./components/pelanggan/AddPelanggan.js")));
const EditPelanggan = _loadable_component__WEBPACK_IMPORTED_MODULE_7___default()(() => __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ../../components/pelanggan/EditPelanggan */ "./components/pelanggan/EditPelanggan.js")));

function Pelanggan() {
  const {
    0: pelanggan,
    1: setPelanggan
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
    fetchPelanggan();
  }, [search, showAdd, showEdit, activePage]);

  const handlePageChange = pageNumber => {
    setActivePage(pageNumber);
  };

  const fetchPelanggan = async () => {
    try {
      const headers = {
        Authorization: accessToken
      };
      const response = await _helpers_global__WEBPACK_IMPORTED_MODULE_6__["axiosGeneral"].get("/resources/pelanggan", {
        headers,
        params: {
          page: activePage,
          limit: takeSize,
          search // sort,

        }
      });
      setPelanggan([]);
      const {
        status,
        data
      } = response;

      if (status === 200) {
        setPelanggan(data.data);
        setTotal(data.pagination.total_entries); // console.log(data.pagination.total_entries)
      }
    } catch (error) {
      addToast(Object(_helpers_global__WEBPACK_IMPORTED_MODULE_6__["errorHandler"])(error), {
        appearance: "error"
      });
    }
  };

  const deletePelanggan = async idPelanggan => {
    try {
      const headers = {
        Authorization: accessToken
      };
      const response = await _helpers_global__WEBPACK_IMPORTED_MODULE_6__["axiosGeneral"].delete(`/resources/pelanggan/${idPelanggan}`, {
        headers
      });
      const {
        status
      } = response;

      if (status === 200) {
        addToast("Berhasil hapus level", {
          appearance: "success"
        });
        fetchPelanggan();
      }
    } catch (error) {
      addToast(Object(_helpers_global__WEBPACK_IMPORTED_MODULE_6__["errorHandler"])(error), {
        appearance: "error"
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "my-10 px-10",
    children: showAdd ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AddPelanggan, {
      show: showAdd,
      setShow: val => setShowAdd(val)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }, this) : showEdit ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(EditPelanggan, {
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
          children: "Data Pelanggan"
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
            children: "Username"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 font-bold w-11/12",
            children: "Nomor KWH"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 font-bold w-11/12",
            children: "Nama Pelanggan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 font-bold w-11/12",
            children: "Alamat"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 font-bold w-11/12",
            children: "Daya"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm font-bold ml-6 mb-0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 13
        }, this), pelanggan.map((item, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            background: index % 2 === 0 ? "#E7E7E7" : "#F3F3F3"
          },
          className: "flex flex-row break-normal py-2 px-3 items-center hover:opacity-80",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 w-20",
            children: index + 1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 w-11/12",
            children: item.username
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 w-11/12",
            children: item.nomor_kwh
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 w-11/12",
            children: item.nama_pelanggan
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 w-11/12",
            children: item.alamat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 w-11/12",
            children: item.id_tarif
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex flex-row justify-end ml-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              style: {
                color: "#6F6F6F"
              },
              onClick: () => {
                console.log(item.id_pelanggan);
                setSelectedId(item.id_pelanggan);
                setShowEdit(!showEdit);
              },
              className: "material-icons cursor-pointer mr-4",
              children: "edit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              onClick: () => {
                if (window.confirm(`Yakin hapus ` + item.nama_pelanggan + ` ?`)) {
                  deletePelanggan(item.id_pelanggan);
                }
              },
              style: {
                color: "#6F6F6F"
              },
              className: "material-icons cursor-pointer",
              children: "delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 17
          }, this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
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
              lineNumber: 177,
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
              lineNumber: 182,
              columnNumber: 19
            }, this),
            activeClass: "bg-blue-400",
            activeLinkClass: "text-white"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
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
/* harmony default export */ __webpack_exports__["default"] = (Pelanggan);

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







const AddTarif = _loadable_component__WEBPACK_IMPORTED_MODULE_7___default()(() => __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ../../components/tarif/AddTarif */ "./components/tarif/AddTarif.js")));
const EditTarif = _loadable_component__WEBPACK_IMPORTED_MODULE_7___default()(() => __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! ../../components/tarif/EditTarif */ "./components/tarif/EditTarif.js")));

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
    children: showAdd ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AddTarif, {
      show: showAdd,
      setShow: val => setShowAdd(val)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }, this) : showEdit ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(EditTarif, {
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







const AddUser = _loadable_component__WEBPACK_IMPORTED_MODULE_7___default()(() => __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! ../../components/user/AddUser */ "./components/user/AddUser.js")));
const EditUser = _loadable_component__WEBPACK_IMPORTED_MODULE_7___default()(() => __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.bind(null, /*! ../../components/user/EditUser */ "./components/user/EditUser.js")));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYWluTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NpZGViYXIvTWVudUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbWFzdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL21hc3Rlci9sZXZlbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9tYXN0ZXIvcGVsYW5nZ2FuLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL21hc3Rlci90YXJpZi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9tYXN0ZXIvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25DcmVhdG9yLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGxvYWRhYmxlL2NvbXBvbmVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZm9ybWlrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL21kXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtanMtcGFnaW5hdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2VsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdG9hc3Qtbm90aWZpY2F0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwieXVwXCIiXSwibmFtZXMiOlsiTWFpbkxheW91dCIsImNoaWxkcmVuIiwiYWNjZXNzVG9rZW4iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlRWZmZWN0IiwiUm91dGVyIiwicmVwbGFjZSIsImJhY2tncm91bmQiLCJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiTWVudVdyYXBwZXIiLCJ1bCIsIlNwYWNlciIsIlNpZGViYXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiZG9Mb2dvdXQiLCJzZXRBY2Nlc3NUb2tlbiIsInNldFVzZXIiLCJwdXNoIiwibGkiLCJwcm9wcyIsImlzQWN0aXZlIiwiSWNvbldyYXBwZXIiLCJzcGFuIiwiTWVudUl0ZW0iLCJvbkNsaWNrIiwibmFtZSIsImljb24iLCJ0ZXh0Iiwicm91dGVyIiwidXNlUm91dGVyIiwicGF0aCIsInBhdGhuYW1lIiwic3BsaXQiLCJCQVNFX1VSTCIsImF4aW9zR2VuZXJhbCIsIkF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsInJlc3BvbnNlVHlwZSIsImVycm9ySGFuZGxlciIsImVycm9yIiwicmVzcG9uc2UiLCJ1bmRlZmluZWQiLCJzdGF0dXMiLCJkYXRhIiwibWVzc2FnZSIsIlRhYmJhciIsIlRhYkl0ZW0iLCJNYXN0ZXIiLCJ0YWJBY3RpdmUiLCJzZXRUYWJBY3RpdmUiLCJ1c2VTdGF0ZSIsIkFkZExldmVsIiwibG9hZGFibGUiLCJFZGl0TGV2ZWwiLCJMZXZlbCIsImxldmVsIiwic2V0TGV2ZWwiLCJhZGRUb2FzdCIsInVzZVRvYXN0cyIsInNob3dBZGQiLCJzZXRTaG93QWRkIiwic2hvd0VkaXQiLCJzZXRTaG93RWRpdCIsInNlbGVjdGVkSWQiLCJzZXRTZWxlY3RlZElkIiwidGFrZVNpemUiLCJ0b3RhbCIsInNldFRvdGFsIiwiYWN0aXZlUGFnZSIsInNldEFjdGl2ZVBhZ2UiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJzb3J0IiwiZmV0Y2hMZXZlbCIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJwYWdlTnVtYmVyIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJnZXQiLCJwYXJhbXMiLCJwYWdlIiwibGltaXQiLCJwYWdpbmF0aW9uIiwidG90YWxfZW50cmllcyIsImFwcGVhcmFuY2UiLCJkZWxldGVMZXZlbCIsImlkTGV2ZWwiLCJkZWxldGUiLCJ2YWwiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJuYW1hX2xldmVsIiwiY29sb3IiLCJpZF9sZXZlbCIsIndpbmRvdyIsImNvbmZpcm0iLCJCdXR0b25BZGQiLCJBZGRQZWxhbmdnYW4iLCJFZGl0UGVsYW5nZ2FuIiwiUGVsYW5nZ2FuIiwicGVsYW5nZ2FuIiwic2V0UGVsYW5nZ2FuIiwiZmV0Y2hQZWxhbmdnYW4iLCJkZWxldGVQZWxhbmdnYW4iLCJpZFBlbGFuZ2dhbiIsInVzZXJuYW1lIiwibm9tb3Jfa3doIiwibmFtYV9wZWxhbmdnYW4iLCJhbGFtYXQiLCJpZF90YXJpZiIsImNvbnNvbGUiLCJsb2ciLCJpZF9wZWxhbmdnYW4iLCJBZGRUYXJpZiIsIkVkaXRUYXJpZiIsIlRhcmlmIiwidGFyaWYiLCJzZXRUYXJpZiIsImZldGNoVGFyaWYiLCJkZWxldGVUYXJpZiIsImlkVGFyaWYiLCJkYXlhIiwidGFyaWZwZXJrd2giLCJBZGRVc2VyIiwiRWRpdFVzZXIiLCJVc2VyIiwidXNlciIsImZldGNoVXNlciIsImRlbGV0ZVVzZXIiLCJpZFVzZXIiLCJuYW1hX2FkbWluIiwiaWRfdXNlciIsInBheWxvYWQiLCJ0eXBlIiwiU0VUX1VTRVIiLCJTRVRfQUNDRVNTX1RPS0VOIiwic2V0TG9hZGluZyIsIlNFVF9MT0FESU5HIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7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RXRDTDtBQUZzQyxDQUFkLENBQW5CLEM7Ozs7Ozs7Ozs7OztBQ2hCUDtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1FLFFBQVEsR0FBRyxVQUFqQjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1FLFdBQVcsR0FBRyxhQUFwQixDOzs7Ozs7Ozs7OztBQ0ZQLGdEOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InBhZ2VzL21hc3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInBhZ2VzL21hc3RlclwiOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyByZXF1aXJlKCkgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IDApIHtcbiBcdFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi4vXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIik7XG4gXHRcdFx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHM7XG4gXHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9tYXN0ZXIvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL1NpZGViYXJcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IE1haW5MYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgYWNjZXNzVG9rZW4gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFjY2Vzc1Rva2VuKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFhY2Nlc3NUb2tlbikge1xyXG4gICAgICBSb3V0ZXIucmVwbGFjZShcIi9cIik7XHJcbiAgICB9XHJcbiAgfSwgW2FjY2Vzc1Rva2VuXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwiaC1zY3JlZW4gaXRlbXMtc3RhcnQgZmxleFwiXHJcbiAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiI0ZBRkJGQ1wiIH19XHJcbiAgICA+XHJcbiAgICAgIDxTaWRlYmFyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtc2NyZWVuIG92ZXJmbG93LWF1dG9cIj57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkxheW91dDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBNZEhvbWUsIE1kVG9kYXksIE1kUGVvcGxlLCBNZFBvd2VyU2V0dGluZ3NOZXcsIE1kSW1wb3J0Q29udGFjdHMgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCIuL3NpZGViYXIvTWVudUl0ZW1cIjtcclxuaW1wb3J0IHsgRGVzY3JpcHRpb24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHNldEFjY2Vzc1Rva2VuLCBzZXRVc2VyIH0gZnJvbSBcIi4uL3N0b3JlL2FjdGlvbkNyZWF0b3JcIjtcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxNSU7XHJcbiAgYmFja2dyb3VuZDogIzAwNzE3NTtcclxuICBjb2xvcjogI2ZmZjtcclxuYDtcclxuY29uc3QgTWVudVdyYXBwZXIgPSBzdHlsZWQudWxgXHJcbiAgcGFkZGluZzogMHB4IDE1cHg7XHJcbmA7XHJcbmNvbnN0IFNwYWNlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IGF1dG87XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlYmFyKCkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3QgZG9Mb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChzZXRBY2Nlc3NUb2tlbihudWxsKSk7XHJcbiAgICBkaXNwYXRjaChzZXRVc2VyKG51bGwpKTtcclxuICAgIFJvdXRlci5yZXBsYWNlKFwiL1wiKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlciBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIGgtZnVsbCBvdmVyZmxvdy15LWF1dG9cIj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIGNsYXNzTmFtZT1cInAtNFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWJvbGQgdGV4dC1jZW50ZXIgbWItMzYgdGV4dC15ZWxsb3ctMzAwXCI+TElTVFJJSzwvaDQ+XHJcbiAgICAgIDxNZW51V3JhcHBlciBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICB0ZXh0PVwiRGFzaGJvYXJkXCJcclxuICAgICAgICAgIGljb249ezxNZEhvbWUgc2l6ZT1cIjI0cHhcIiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBtci0zXCIgLz59XHJcbiAgICAgICAgICBuYW1lPVwiZGFzaGJvYXJkXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgdGV4dD1cIk1hc3RlclwiXHJcbiAgICAgICAgICBpY29uPXs8RGVzY3JpcHRpb24gc2l6ZT1cIjI0cHhcIiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBtci0zXCIgLz59XHJcbiAgICAgICAgICBuYW1lPVwibWFzdGVyXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKFwiL21hc3RlclwiKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgdGV4dD1cIlRyYW5zYWtzaVwiXHJcbiAgICAgICAgICBpY29uPXs8TWRQZW9wbGUgc2l6ZT1cIjI0cHhcIiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBtci0zXCIgLz59XHJcbiAgICAgICAgICBuYW1lPVwidHJhbnNha3NpXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKFwiL3RyYW5zYWtzaVwiKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgdGV4dD1cIktlbHVhclwiXHJcbiAgICAgICAgICBpY29uPXs8TWRQb3dlclNldHRpbmdzTmV3IHNpemU9XCIyNHB4XCIgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggbXItM1wiIC8+fVxyXG4gICAgICAgICAgbmFtZT1cInJlcG9ydFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtkb0xvZ291dH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L01lbnVXcmFwcGVyPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQubGlgXHJcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAyMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PiAocHJvcHMuaXNBY3RpdmUgPyBcIiNGRkNEMDVcIiA6IFwiXCIpfTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGNvbG9yOiAkeyhwcm9wcykgPT4gKHByb3BzLmlzQWN0aXZlID8gXCIjMDAwXCIgOiBcIiNGRkZcIil9O1xyXG5gO1xyXG5cclxuY29uc3QgSWNvbldyYXBwZXIgPSBzdHlsZWQuc3BhbmBcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBNZW51SXRlbSA9ICh7IG9uQ2xpY2ssIG5hbWUsIGljb24sIHRleHQgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFssIHBhdGhdID0gcm91dGVyLnBhdGhuYW1lLnNwbGl0KFwiL1wiKTtcclxuICBjb25zdCBpc0FjdGl2ZSA9IHBhdGggPT09IG5hbWU7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyIG9uQ2xpY2s9e29uQ2xpY2t9IGlzQWN0aXZlPXtpc0FjdGl2ZX0+XHJcbiAgICAgIDxJY29uV3JhcHBlcj57aWNvbn08L0ljb25XcmFwcGVyPlxyXG4gICAgICB7dGV4dH1cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudUl0ZW07XHJcbiIsImltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBCQVNFX1VSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDo5MDAwL3YxXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYXhpb3NHZW5lcmFsID0gQXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBCQVNFX1VSTCxcclxuICByZXNwb25zZVR5cGU6IFwianNvblwiLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBlcnJvckhhbmRsZXIgPSAoZXJyb3IpID0+IHtcclxuICByZXR1cm4gZXJyb3IucmVzcG9uc2UgIT09IHVuZGVmaW5lZFxyXG4gICAgPyBgUmVzcG9uc2UgJHtlcnJvci5yZXNwb25zZS5zdGF0dXN9OiAke2Vycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZX1gXHJcbiAgICA6IGVycm9yLm1lc3NhZ2U7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBNYWluTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01haW5MYXlvdXRcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IFRhcmlmIGZyb20gXCIuL3RhcmlmXCI7XHJcbmltcG9ydCBQZWxhbmdnYW4gZnJvbSBcIi4vcGVsYW5nZ2FuXCI7XHJcbmltcG9ydCBMZXZlbCBmcm9tIFwiLi9sZXZlbFwiO1xyXG5pbXBvcnQgVXNlciBmcm9tIFwiLi91c2VyXCI7XHJcblxyXG5jb25zdCBUYWJiYXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHBhZGRpbmc6IDIwcHggNDBweCAwcHggNDBweDtcclxuYDtcclxuY29uc3QgVGFiSXRlbSA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyLjVyZW07XHJcbmA7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hc3RlcigpIHtcclxuICBjb25zdCBbdGFiQWN0aXZlLCBzZXRUYWJBY3RpdmVdID0gdXNlU3RhdGUoXCJ1c2VyXCIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TWFzdGVyIC0gTGlzdHJpazwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPE1haW5MYXlvdXQ+XHJcbiAgICAgICAgPFRhYmJhciBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8VGFiSXRlbVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUYWJBY3RpdmUoXCJwZWxhbmdnYW5cIil9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGN1cnNvci1wb2ludGVyICR7XHJcbiAgICAgICAgICAgICAgdGFiQWN0aXZlID09PSBcInBlbGFuZ2dhblwiXHJcbiAgICAgICAgICAgICAgICA/IFwiYm9yZGVyLWItMiBib3JkZXItYmxhY2sgdGV4dC1ibGFja1wiXHJcbiAgICAgICAgICAgICAgICA6IFwidGV4dC1ncmF5LTQwMFwiXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBQZWxhbmdnYW5cclxuICAgICAgICAgIDwvVGFiSXRlbT5cclxuICAgICAgICAgIDxUYWJJdGVtXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhYkFjdGl2ZShcInRhcmlmXCIpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BjdXJzb3ItcG9pbnRlciAke1xyXG4gICAgICAgICAgICAgIHRhYkFjdGl2ZSA9PT0gXCJ0YXJpZlwiXHJcbiAgICAgICAgICAgICAgICA/IFwiYm9yZGVyLWItMiBib3JkZXItYmxhY2sgdGV4dC1ibGFja1wiXHJcbiAgICAgICAgICAgICAgICA6IFwidGV4dC1ncmF5LTQwMFwiXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBUYXJpZlxyXG4gICAgICAgICAgPC9UYWJJdGVtPlxyXG4gICAgICAgICAgPFRhYkl0ZW1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGFiQWN0aXZlKFwibGV2ZWxcIil9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGN1cnNvci1wb2ludGVyICR7XHJcbiAgICAgICAgICAgICAgdGFiQWN0aXZlID09PSBcImxldmVsXCJcclxuICAgICAgICAgICAgICAgID8gXCJib3JkZXItYi0yIGJvcmRlci1ibGFjayB0ZXh0LWJsYWNrXCJcclxuICAgICAgICAgICAgICAgIDogXCJ0ZXh0LWdyYXktNDAwXCJcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIExldmVsXHJcbiAgICAgICAgICA8L1RhYkl0ZW0+XHJcbiAgICAgICAgICA8VGFiSXRlbVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUYWJBY3RpdmUoXCJ1c2VyXCIpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BjdXJzb3ItcG9pbnRlciAke1xyXG4gICAgICAgICAgICAgIHRhYkFjdGl2ZSA9PT0gXCJ1c2VyXCJcclxuICAgICAgICAgICAgICAgID8gXCJib3JkZXItYi0yIGJvcmRlci1ibGFjayB0ZXh0LWJsYWNrXCJcclxuICAgICAgICAgICAgICAgIDogXCJ0ZXh0LWdyYXktNDAwXCJcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFVzZXJcclxuICAgICAgICAgIDwvVGFiSXRlbT5cclxuICAgICAgICA8L1RhYmJhcj5cclxuICAgICAgICB7dGFiQWN0aXZlID09PSBcInBlbGFuZ2dhblwiICYmIDxQZWxhbmdnYW4gLz59XHJcbiAgICAgICAge3RhYkFjdGl2ZSA9PT0gXCJ1c2VyXCIgJiYgPFVzZXIgLz59XHJcbiAgICAgICAge3RhYkFjdGl2ZSA9PT0gXCJsZXZlbFwiICYmIDxMZXZlbCAvPn1cclxuICAgICAgICB7dGFiQWN0aXZlID09PSBcInRhcmlmXCIgJiYgPFRhcmlmIC8+fVxyXG4gICAgICA8L01haW5MYXlvdXQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcInJlYWN0LWpzLXBhZ2luYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlVG9hc3RzIH0gZnJvbSBcInJlYWN0LXRvYXN0LW5vdGlmaWNhdGlvbnNcIjtcclxuaW1wb3J0IHsgYXhpb3NHZW5lcmFsLCBlcnJvckhhbmRsZXIgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9nbG9iYWxcIjtcclxuaW1wb3J0IGxvYWRhYmxlIGZyb20gXCJAbG9hZGFibGUvY29tcG9uZW50XCI7XHJcbmNvbnN0IEFkZExldmVsID0gbG9hZGFibGUoKCkgPT5cclxuICBpbXBvcnQoXCIuLi8uLi9jb21wb25lbnRzL2xldmVsL0FkZExldmVsXCIpXHJcbik7XHJcbmNvbnN0IEVkaXRMZXZlbCA9IGxvYWRhYmxlKCgpID0+XHJcbiAgaW1wb3J0KFwiLi4vLi4vY29tcG9uZW50cy9sZXZlbC9FZGl0TGV2ZWxcIilcclxuKTtcclxuXHJcbmZ1bmN0aW9uIExldmVsKCkge1xyXG4gIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IGFjY2Vzc1Rva2VuID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hY2Nlc3NUb2tlbik7XHJcbiAgY29uc3QgeyBhZGRUb2FzdCB9ID0gdXNlVG9hc3RzKCk7XHJcbiAgY29uc3QgW3Nob3dBZGQsIHNldFNob3dBZGRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93RWRpdCwgc2V0U2hvd0VkaXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZElkLCBzZXRTZWxlY3RlZElkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAvLyBQYWdpbmF0aW9uXHJcbiAgY29uc3QgdGFrZVNpemUgPSAxMDtcclxuICBjb25zdCBbdG90YWwsIHNldFRvdGFsXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFthY3RpdmVQYWdlLCBzZXRBY3RpdmVQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBzb3J0ID0gXCJcIjtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoTGV2ZWwoKTtcclxuICB9LCBbc2VhcmNoLCBzaG93QWRkLCBzaG93RWRpdCwgYWN0aXZlUGFnZV0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKHBhZ2VOdW1iZXIpID0+IHtcclxuICAgIHNldEFjdGl2ZVBhZ2UocGFnZU51bWJlcik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hMZXZlbCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYWNjZXNzVG9rZW4sXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NHZW5lcmFsLmdldChcIi9yZXNvdXJjZXMvbGV2ZWxcIiwge1xyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBwYWdlOiBhY3RpdmVQYWdlLFxyXG4gICAgICAgICAgbGltaXQ6IHRha2VTaXplLFxyXG4gICAgICAgICAgc2VhcmNoLFxyXG4gICAgICAgICAgLy8gc29ydCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNldExldmVsKFtdKTtcclxuICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBzZXRMZXZlbChkYXRhLmRhdGEpO1xyXG4gICAgICAgIHNldFRvdGFsKGRhdGEucGFnaW5hdGlvbi50b3RhbF9lbnRyaWVzKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLnBhZ2luYXRpb24udG90YWxfZW50cmllcylcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWRkVG9hc3QoZXJyb3JIYW5kbGVyKGVycm9yKSwgeyBhcHBlYXJhbmNlOiBcImVycm9yXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlTGV2ZWwgPSBhc3luYyAoaWRMZXZlbCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBhY2Nlc3NUb2tlbixcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0dlbmVyYWwuZGVsZXRlKFxyXG4gICAgICAgIGAvcmVzb3VyY2VzL2xldmVsLyR7aWRMZXZlbH1gLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gcmVzcG9uc2U7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGFkZFRvYXN0KFwiQmVyaGFzaWwgaGFwdXMgbGV2ZWxcIiwgeyBhcHBlYXJhbmNlOiBcInN1Y2Nlc3NcIiB9KTtcclxuICAgICAgICBmZXRjaExldmVsKCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFkZFRvYXN0KGVycm9ySGFuZGxlcihlcnJvciksIHsgYXBwZWFyYW5jZTogXCJlcnJvclwiIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTEwIHB4LTEwXCI+XHJcbiAgICAgIHtzaG93QWRkID8gKFxyXG4gICAgICAgIDxBZGRMZXZlbCBzaG93PXtzaG93QWRkfSBzZXRTaG93PXsodmFsKSA9PiBzZXRTaG93QWRkKHZhbCl9IC8+XHJcbiAgICAgICkgOiBzaG93RWRpdCA/IChcclxuICAgICAgICA8RWRpdExldmVsXHJcbiAgICAgICAgICBpZD17c2VsZWN0ZWRJZH1cclxuICAgICAgICAgIHNob3c9e3Nob3dFZGl0fVxyXG4gICAgICAgICAgc2V0U2hvdz17KHZhbCkgPT4gc2V0U2hvd0VkaXQodmFsKX1cclxuICAgICAgICAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHNoYWRvdyB3LWZ1bGwgcm91bmRlZCBweC02IHB5LTEwXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0yeGwgdGV4dC1ibGFjayBtYi0yMFwiPlxyXG4gICAgICAgICAgICAgIERhdGEgTGV2ZWxcclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbXQtNCBtYi04XCI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbkFkZCBvbkNsaWNrPXsoKSA9PiBzZXRTaG93QWRkKCFzaG93QWRkKX0+XHJcbiAgICAgICAgICAgICAgICBEYXRhIEJhcnVcclxuICAgICAgICAgICAgICA8L0J1dHRvbkFkZD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTIgcHgtNCBiZy1ncmF5LTIwMCB3LTEvMyByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDYXJpXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRBY3RpdmVQYWdlKDEpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGJyZWFrLW5vcm1hbCBpdGVtcy1jZW50ZXIgYm9yZGVyLWItMiBweC0zIHB5LTJcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yLTIgbWItMCBmb250LWJvbGQgdy0yMFwiPiM8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtci0yIG1iLTAgZm9udC1ib2xkIHctMTEvMTJcIj5OYW1hIExldmVsPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIG1sLTYgbWItMFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7bGV2ZWwubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBpbmRleCAlIDIgPT09IDAgPyBcIiNFN0U3RTdcIiA6IFwiI0YzRjNGM1wiIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGJyZWFrLW5vcm1hbCBweS0yIHB4LTMgaXRlbXMtY2VudGVyIGhvdmVyOm9wYWNpdHktODBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXItMiBtYi0wIHctMjBcIj57aW5kZXggKyAxfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXItMiBtYi0wIHctMTEvMTJcIj57aXRlbS5uYW1hX2xldmVsfTwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWVuZCBtbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiIzZGNkY2RlwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJZChpdGVtLmlkX2xldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dFZGl0KCFzaG93RWRpdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBjdXJzb3ItcG9pbnRlciBtci00XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRcclxuICAgICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNvbmZpcm0oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYFlha2luIGhhcHVzIGAgKyBpdGVtLm5hbWFfbGV2ZWwgKyBgID9gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVMZXZlbChpdGVtLmlkX2xldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiM2RjZGNkZcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZVxyXG4gICAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG10LTggZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWVuZCBpdGVtcy1lbmRcIj5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgICAgYWN0aXZlUGFnZT17YWN0aXZlUGFnZX1cclxuICAgICAgICAgICAgICAgIGl0ZW1zQ291bnRQZXJQYWdlPXt0YWtlU2l6ZX1cclxuICAgICAgICAgICAgICAgIHRvdGFsSXRlbXNDb3VudD17dG90YWx9XHJcbiAgICAgICAgICAgICAgICBwYWdlUmFuZ2VEaXNwbGF5ZWQ9ezV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUGFnZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIGl0ZW1DbGFzcz1cImJnLWJsdWUtMTAwIHB5LTIgcHgtNCBteC0xIHJvdW5kZWQgZm9udC1ib2xkXCJcclxuICAgICAgICAgICAgICAgIGxpbmtDbGFzcz1cInRleHQtZ3JheS03MDAgaG92ZXI6bm8tdW5kZXJsaW5lIGhvdmVyOnRleHQtZ3JheS03MDBcIlxyXG4gICAgICAgICAgICAgICAgaGlkZUZpcnN0TGFzdFBhZ2VzPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgcHJldlBhZ2VUZXh0PXtcclxuICAgICAgICAgICAgICAgICAgPGkgc3R5bGU9e3sgY29sb3I6IFwiIzZGNkY2RlwiIH19IGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dfYmFja1xyXG4gICAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBuZXh0UGFnZVRleHQ9e1xyXG4gICAgICAgICAgICAgICAgICA8aSBzdHlsZT17eyBjb2xvcjogXCIjNkY2RjZGXCIgfX0gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICBhcnJvd19mb3J3YXJkXHJcbiAgICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYmctYmx1ZS00MDBcIlxyXG4gICAgICAgICAgICAgICAgYWN0aXZlTGlua0NsYXNzPVwidGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IEJ1dHRvbkFkZCA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJhY2tncm91bmQ6ICM0MzYxZWU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMTBweCAyM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMZXZlbDtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwicmVhY3QtanMtcGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VUb2FzdHMgfSBmcm9tIFwicmVhY3QtdG9hc3Qtbm90aWZpY2F0aW9uc1wiO1xyXG5pbXBvcnQgeyBheGlvc0dlbmVyYWwsIGVycm9ySGFuZGxlciB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2dsb2JhbFwiO1xyXG5pbXBvcnQgbG9hZGFibGUgZnJvbSBcIkBsb2FkYWJsZS9jb21wb25lbnRcIjtcclxuY29uc3QgQWRkUGVsYW5nZ2FuID0gbG9hZGFibGUoKCkgPT5cclxuICBpbXBvcnQoXCIuLi8uLi9jb21wb25lbnRzL3BlbGFuZ2dhbi9BZGRQZWxhbmdnYW5cIilcclxuKTtcclxuY29uc3QgRWRpdFBlbGFuZ2dhbiA9IGxvYWRhYmxlKCgpID0+XHJcbiAgaW1wb3J0KFwiLi4vLi4vY29tcG9uZW50cy9wZWxhbmdnYW4vRWRpdFBlbGFuZ2dhblwiKVxyXG4pO1xyXG5cclxuZnVuY3Rpb24gUGVsYW5nZ2FuKCkge1xyXG4gIGNvbnN0IFtwZWxhbmdnYW4sIHNldFBlbGFuZ2dhbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgYWNjZXNzVG9rZW4gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFjY2Vzc1Rva2VuKTtcclxuICBjb25zdCB7IGFkZFRvYXN0IH0gPSB1c2VUb2FzdHMoKTtcclxuICBjb25zdCBbc2hvd0FkZCwgc2V0U2hvd0FkZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dFZGl0LCBzZXRTaG93RWRpdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkSWQsIHNldFNlbGVjdGVkSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIC8vIFBhZ2luYXRpb25cclxuICBjb25zdCB0YWtlU2l6ZSA9IDEwO1xyXG4gIGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2FjdGl2ZVBhZ2UsIHNldEFjdGl2ZVBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHNvcnQgPSBcIlwiO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hQZWxhbmdnYW4oKTtcclxuICB9LCBbc2VhcmNoLCBzaG93QWRkLCBzaG93RWRpdCwgYWN0aXZlUGFnZV0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKHBhZ2VOdW1iZXIpID0+IHtcclxuICAgIHNldEFjdGl2ZVBhZ2UocGFnZU51bWJlcik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hQZWxhbmdnYW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGFjY2Vzc1Rva2VuLFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zR2VuZXJhbC5nZXQoXCIvcmVzb3VyY2VzL3BlbGFuZ2dhblwiLCB7XHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHBhZ2U6IGFjdGl2ZVBhZ2UsXHJcbiAgICAgICAgICBsaW1pdDogdGFrZVNpemUsXHJcbiAgICAgICAgICBzZWFyY2gsXHJcbiAgICAgICAgICAvLyBzb3J0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2V0UGVsYW5nZ2FuKFtdKTtcclxuICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBzZXRQZWxhbmdnYW4oZGF0YS5kYXRhKTtcclxuICAgICAgICBzZXRUb3RhbChkYXRhLnBhZ2luYXRpb24udG90YWxfZW50cmllcyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YS5wYWdpbmF0aW9uLnRvdGFsX2VudHJpZXMpXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFkZFRvYXN0KGVycm9ySGFuZGxlcihlcnJvciksIHsgYXBwZWFyYW5jZTogXCJlcnJvclwiIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZVBlbGFuZ2dhbiA9IGFzeW5jIChpZFBlbGFuZ2dhbikgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBhY2Nlc3NUb2tlbixcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0dlbmVyYWwuZGVsZXRlKFxyXG4gICAgICAgIGAvcmVzb3VyY2VzL3BlbGFuZ2dhbi8ke2lkUGVsYW5nZ2FufWAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVycyxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSByZXNwb25zZTtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgYWRkVG9hc3QoXCJCZXJoYXNpbCBoYXB1cyBsZXZlbFwiLCB7IGFwcGVhcmFuY2U6IFwic3VjY2Vzc1wiIH0pO1xyXG4gICAgICAgIGZldGNoUGVsYW5nZ2FuKCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFkZFRvYXN0KGVycm9ySGFuZGxlcihlcnJvciksIHsgYXBwZWFyYW5jZTogXCJlcnJvclwiIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTEwIHB4LTEwXCI+XHJcbiAgICAgIHtzaG93QWRkID8gKFxyXG4gICAgICAgIDxBZGRQZWxhbmdnYW4gc2hvdz17c2hvd0FkZH0gc2V0U2hvdz17KHZhbCkgPT4gc2V0U2hvd0FkZCh2YWwpfSAvPlxyXG4gICAgICApIDogc2hvd0VkaXQgPyAoXHJcbiAgICAgICAgPEVkaXRQZWxhbmdnYW5cclxuICAgICAgICAgIGlkPXtzZWxlY3RlZElkfVxyXG4gICAgICAgICAgc2hvdz17c2hvd0VkaXR9XHJcbiAgICAgICAgICBzZXRTaG93PXsodmFsKSA9PiBzZXRTaG93RWRpdCh2YWwpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93IHctZnVsbCByb3VuZGVkIHB4LTYgcHktMTBcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTJ4bCB0ZXh0LWJsYWNrIG1iLTIwXCI+XHJcbiAgICAgICAgICAgICAgRGF0YSBQZWxhbmdnYW5cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbXQtNCBtYi04XCI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbkFkZCBvbkNsaWNrPXsoKSA9PiBzZXRTaG93QWRkKCFzaG93QWRkKX0+XHJcbiAgICAgICAgICAgICAgICBEYXRhIEJhcnVcclxuICAgICAgICAgICAgICA8L0J1dHRvbkFkZD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTIgcHgtNCBiZy1ncmF5LTIwMCB3LTEvMyByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDYXJpXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRBY3RpdmVQYWdlKDEpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGJyZWFrLW5vcm1hbCBpdGVtcy1jZW50ZXIgYm9yZGVyLWItMiBweC0zIHB5LTJcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yLTIgbWItMCBmb250LWJvbGQgdy0yMFwiPiM8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtci0yIG1iLTAgZm9udC1ib2xkIHctMTEvMTJcIj5Vc2VybmFtZTwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yLTIgbWItMCBmb250LWJvbGQgdy0xMS8xMlwiPk5vbW9yIEtXSDwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yLTIgbWItMCBmb250LWJvbGQgdy0xMS8xMlwiPk5hbWEgUGVsYW5nZ2FuPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXItMiBtYi0wIGZvbnQtYm9sZCB3LTExLzEyXCI+QWxhbWF0PC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXItMiBtYi0wIGZvbnQtYm9sZCB3LTExLzEyXCI+RGF5YTwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCBtbC02IG1iLTBcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3BlbGFuZ2dhbi5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IGluZGV4ICUgMiA9PT0gMCA/IFwiI0U3RTdFN1wiIDogXCIjRjNGM0YzXCIgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgYnJlYWstbm9ybWFsIHB5LTIgcHgtMyBpdGVtcy1jZW50ZXIgaG92ZXI6b3BhY2l0eS04MFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtci0yIG1iLTAgdy0yMFwiPntpbmRleCArIDF9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtci0yIG1iLTAgdy0xMS8xMlwiPntpdGVtLnVzZXJuYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXItMiBtYi0wIHctMTEvMTJcIj57aXRlbS5ub21vcl9rd2h9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtci0yIG1iLTAgdy0xMS8xMlwiPntpdGVtLm5hbWFfcGVsYW5nZ2FufTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXItMiBtYi0wIHctMTEvMTJcIj57aXRlbS5hbGFtYXR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtci0yIG1iLTAgdy0xMS8xMlwiPntpdGVtLmlkX3RhcmlmfTwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWVuZCBtbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiIzZGNkY2RlwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLmlkX3BlbGFuZ2dhbilcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkSWQoaXRlbS5pZF9wZWxhbmdnYW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0VkaXQoIXNob3dFZGl0KTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGN1cnNvci1wb2ludGVyIG1yLTRcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdFxyXG4gICAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY29uZmlybShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBgWWFraW4gaGFwdXMgYCArIGl0ZW0ubmFtYV9wZWxhbmdnYW4gKyBgID9gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVQZWxhbmdnYW4oaXRlbS5pZF9wZWxhbmdnYW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiIzZGNkY2RlwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtOCBmbGV4IGZsZXgtcm93IGp1c3RpZnktZW5kIGl0ZW1zLWVuZFwiPlxyXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVQYWdlPXthY3RpdmVQYWdlfVxyXG4gICAgICAgICAgICAgICAgaXRlbXNDb3VudFBlclBhZ2U9e3Rha2VTaXplfVxyXG4gICAgICAgICAgICAgICAgdG90YWxJdGVtc0NvdW50PXt0b3RhbH1cclxuICAgICAgICAgICAgICAgIHBhZ2VSYW5nZURpc3BsYXllZD17NX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVQYWdlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgaXRlbUNsYXNzPVwiYmctYmx1ZS0xMDAgcHktMiBweC00IG14LTEgcm91bmRlZCBmb250LWJvbGRcIlxyXG4gICAgICAgICAgICAgICAgbGlua0NsYXNzPVwidGV4dC1ncmF5LTcwMCBob3Zlcjpuby11bmRlcmxpbmUgaG92ZXI6dGV4dC1ncmF5LTcwMFwiXHJcbiAgICAgICAgICAgICAgICBoaWRlRmlyc3RMYXN0UGFnZXM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBwcmV2UGFnZVRleHQ9e1xyXG4gICAgICAgICAgICAgICAgICA8aSBzdHlsZT17eyBjb2xvcjogXCIjNkY2RjZGXCIgfX0gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICBhcnJvd19iYWNrXHJcbiAgICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5leHRQYWdlVGV4dD17XHJcbiAgICAgICAgICAgICAgICAgIDxpIHN0eWxlPXt7IGNvbG9yOiBcIiM2RjZGNkZcIiB9fSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIGFycm93X2ZvcndhcmRcclxuICAgICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJiZy1ibHVlLTQwMFwiXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVMaW5rQ2xhc3M9XCJ0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgQnV0dG9uQWRkID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYmFja2dyb3VuZDogIzQzNjFlZTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxMHB4IDIzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBlbGFuZ2dhbjtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwicmVhY3QtanMtcGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VUb2FzdHMgfSBmcm9tIFwicmVhY3QtdG9hc3Qtbm90aWZpY2F0aW9uc1wiO1xyXG5pbXBvcnQgeyBheGlvc0dlbmVyYWwsIGVycm9ySGFuZGxlciB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2dsb2JhbFwiO1xyXG5pbXBvcnQgbG9hZGFibGUgZnJvbSBcIkBsb2FkYWJsZS9jb21wb25lbnRcIjtcclxuY29uc3QgQWRkVGFyaWYgPSBsb2FkYWJsZSgoKSA9PlxyXG4gIGltcG9ydChcIi4uLy4uL2NvbXBvbmVudHMvdGFyaWYvQWRkVGFyaWZcIilcclxuKTtcclxuY29uc3QgRWRpdFRhcmlmID0gbG9hZGFibGUoKCkgPT5cclxuICBpbXBvcnQoXCIuLi8uLi9jb21wb25lbnRzL3RhcmlmL0VkaXRUYXJpZlwiKVxyXG4pO1xyXG5cclxuZnVuY3Rpb24gVGFyaWYoKSB7XHJcbiAgY29uc3QgW3RhcmlmLCBzZXRUYXJpZl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgYWNjZXNzVG9rZW4gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFjY2Vzc1Rva2VuKTtcclxuICBjb25zdCB7IGFkZFRvYXN0IH0gPSB1c2VUb2FzdHMoKTtcclxuICBjb25zdCBbc2hvd0FkZCwgc2V0U2hvd0FkZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dFZGl0LCBzZXRTaG93RWRpdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkSWQsIHNldFNlbGVjdGVkSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIC8vIFBhZ2luYXRpb25cclxuICBjb25zdCB0YWtlU2l6ZSA9IDEwO1xyXG4gIGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2FjdGl2ZVBhZ2UsIHNldEFjdGl2ZVBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHNvcnQgPSBcIlwiO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hUYXJpZigpO1xyXG4gIH0sIFtzZWFyY2gsIHNob3dBZGQsIHNob3dFZGl0LCBhY3RpdmVQYWdlXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBhZ2VDaGFuZ2UgPSAocGFnZU51bWJlcikgPT4ge1xyXG4gICAgc2V0QWN0aXZlUGFnZShwYWdlTnVtYmVyKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaFRhcmlmID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBhY2Nlc3NUb2tlbixcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0dlbmVyYWwuZ2V0KFwiL3Jlc291cmNlcy90YXJpZlwiLCB7XHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHBhZ2U6IGFjdGl2ZVBhZ2UsXHJcbiAgICAgICAgICBsaW1pdDogdGFrZVNpemUsXHJcbiAgICAgICAgICBzZWFyY2gsXHJcbiAgICAgICAgICAvLyBzb3J0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2V0VGFyaWYoW10pO1xyXG4gICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gcmVzcG9uc2U7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIHNldFRhcmlmKGRhdGEuZGF0YSk7XHJcbiAgICAgICAgc2V0VG90YWwoZGF0YS5wYWdpbmF0aW9uLnRvdGFsX2VudHJpZXMpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEucGFnaW5hdGlvbi50b3RhbF9lbnRyaWVzKVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhZGRUb2FzdChlcnJvckhhbmRsZXIoZXJyb3IpLCB7IGFwcGVhcmFuY2U6IFwiZXJyb3JcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVUYXJpZiA9IGFzeW5jIChpZFRhcmlmKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGFjY2Vzc1Rva2VuLFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zR2VuZXJhbC5kZWxldGUoXHJcbiAgICAgICAgYC9yZXNvdXJjZXMvdGFyaWYvJHtpZFRhcmlmfWAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVycyxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSByZXNwb25zZTtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgYWRkVG9hc3QoXCJCZXJoYXNpbCBoYXB1cyB0YXJpZlwiLCB7IGFwcGVhcmFuY2U6IFwic3VjY2Vzc1wiIH0pO1xyXG4gICAgICAgIGZldGNoVGFyaWYoKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWRkVG9hc3QoZXJyb3JIYW5kbGVyKGVycm9yKSwgeyBhcHBlYXJhbmNlOiBcImVycm9yXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMTAgcHgtMTBcIj5cclxuICAgICAge3Nob3dBZGQgPyAoXHJcbiAgICAgICAgPEFkZFRhcmlmIHNob3c9e3Nob3dBZGR9IHNldFNob3c9eyh2YWwpID0+IHNldFNob3dBZGQodmFsKX0gLz5cclxuICAgICAgKSA6IHNob3dFZGl0ID8gKFxyXG4gICAgICAgIDxFZGl0VGFyaWZcclxuICAgICAgICAgIGlkPXtzZWxlY3RlZElkfVxyXG4gICAgICAgICAgc2hvdz17c2hvd0VkaXR9XHJcbiAgICAgICAgICBzZXRTaG93PXsodmFsKSA9PiBzZXRTaG93RWRpdCh2YWwpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93IHctZnVsbCByb3VuZGVkIHB4LTYgcHktMTBcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTJ4bCB0ZXh0LWJsYWNrIG1iLTIwXCI+XHJcbiAgICAgICAgICAgICAgRGF0YSBUYXJpZlxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtdC00IG1iLThcIj5cclxuICAgICAgICAgICAgICA8QnV0dG9uQWRkIG9uQ2xpY2s9eygpID0+IHNldFNob3dBZGQoIXNob3dBZGQpfT5cclxuICAgICAgICAgICAgICAgIERhdGEgQmFydVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uQWRkPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBweC00IGJnLWdyYXktMjAwIHctMS8zIHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIHRleHQtYmFzZVwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNhcmlcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVBhZ2UoMSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgYnJlYWstbm9ybWFsIGl0ZW1zLWNlbnRlciBib3JkZXItYi0yIHB4LTMgcHktMlwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXItMiBtYi0wIGZvbnQtYm9sZCB3LTIwXCI+IzwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yLTIgbWItMCBmb250LWJvbGQgdy0xMS8xMlwiPkRheWE8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtci0yIG1iLTAgZm9udC1ib2xkIHctMTEvMTJcIj5UYXJpZiBwZXIgS1dIPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIG1sLTYgbWItMFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7dGFyaWYubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBpbmRleCAlIDIgPT09IDAgPyBcIiNFN0U3RTdcIiA6IFwiI0YzRjNGM1wiIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGJyZWFrLW5vcm1hbCBweS0yIHB4LTMgaXRlbXMtY2VudGVyIGhvdmVyOm9wYWNpdHktODBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXItMiBtYi0wIHctMjBcIj57aW5kZXggKyAxfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXItMiBtYi0wIHctMTEvMTJcIj57aXRlbS5kYXlhfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXItMiBtYi0wIHctMTEvMTJcIj57aXRlbS50YXJpZnBlcmt3aH08L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1lbmQgbWwtNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiM2RjZGNkZcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkSWQoaXRlbS5pZF90YXJpZik7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93RWRpdCghc2hvd0VkaXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgY3Vyc29yLXBvaW50ZXIgbXItNFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBlZGl0XHJcbiAgICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jb25maXJtKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGBZYWtpbiBoYXB1cyBgICsgaXRlbS5kYXlhICsgYCA/YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlVGFyaWYoaXRlbS5pZF90YXJpZik7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjNkY2RjZGXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBkZWxldGVcclxuICAgICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtdC04IGZsZXggZmxleC1yb3cganVzdGlmeS1lbmQgaXRlbXMtZW5kXCI+XHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2U9e2FjdGl2ZVBhZ2V9XHJcbiAgICAgICAgICAgICAgICBpdGVtc0NvdW50UGVyUGFnZT17dGFrZVNpemV9XHJcbiAgICAgICAgICAgICAgICB0b3RhbEl0ZW1zQ291bnQ9e3RvdGFsfVxyXG4gICAgICAgICAgICAgICAgcGFnZVJhbmdlRGlzcGxheWVkPXs1fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBpdGVtQ2xhc3M9XCJiZy1ibHVlLTEwMCBweS0yIHB4LTQgbXgtMSByb3VuZGVkIGZvbnQtYm9sZFwiXHJcbiAgICAgICAgICAgICAgICBsaW5rQ2xhc3M9XCJ0ZXh0LWdyYXktNzAwIGhvdmVyOm5vLXVuZGVybGluZSBob3Zlcjp0ZXh0LWdyYXktNzAwXCJcclxuICAgICAgICAgICAgICAgIGhpZGVGaXJzdExhc3RQYWdlcz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHByZXZQYWdlVGV4dD17XHJcbiAgICAgICAgICAgICAgICAgIDxpIHN0eWxlPXt7IGNvbG9yOiBcIiM2RjZGNkZcIiB9fSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIGFycm93X2JhY2tcclxuICAgICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbmV4dFBhZ2VUZXh0PXtcclxuICAgICAgICAgICAgICAgICAgPGkgc3R5bGU9e3sgY29sb3I6IFwiIzZGNkY2RlwiIH19IGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dfZm9yd2FyZFxyXG4gICAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImJnLWJsdWUtNDAwXCJcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUxpbmtDbGFzcz1cInRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBCdXR0b25BZGQgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBiYWNrZ3JvdW5kOiAjNDM2MWVlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDEwcHggMjNweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFyaWY7XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcInJlYWN0LWpzLXBhZ2luYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlVG9hc3RzIH0gZnJvbSBcInJlYWN0LXRvYXN0LW5vdGlmaWNhdGlvbnNcIjtcclxuaW1wb3J0IHsgYXhpb3NHZW5lcmFsLCBlcnJvckhhbmRsZXIgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9nbG9iYWxcIjtcclxuaW1wb3J0IGxvYWRhYmxlIGZyb20gXCJAbG9hZGFibGUvY29tcG9uZW50XCI7XHJcbmNvbnN0IEFkZFVzZXIgPSBsb2FkYWJsZSgoKSA9PlxyXG4gIGltcG9ydChcIi4uLy4uL2NvbXBvbmVudHMvdXNlci9BZGRVc2VyXCIpXHJcbik7XHJcbmNvbnN0IEVkaXRVc2VyID0gbG9hZGFibGUoKCkgPT5cclxuICBpbXBvcnQoXCIuLi8uLi9jb21wb25lbnRzL3VzZXIvRWRpdFVzZXJcIilcclxuKTtcclxuXHJcbmZ1bmN0aW9uIFVzZXIoKSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IGFjY2Vzc1Rva2VuID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hY2Nlc3NUb2tlbik7XHJcbiAgY29uc3QgeyBhZGRUb2FzdCB9ID0gdXNlVG9hc3RzKCk7XHJcbiAgY29uc3QgW3Nob3dBZGQsIHNldFNob3dBZGRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93RWRpdCwgc2V0U2hvd0VkaXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZElkLCBzZXRTZWxlY3RlZElkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAvLyBQYWdpbmF0aW9uXHJcbiAgY29uc3QgdGFrZVNpemUgPSAxMDtcclxuICBjb25zdCBbdG90YWwsIHNldFRvdGFsXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFthY3RpdmVQYWdlLCBzZXRBY3RpdmVQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBzb3J0ID0gXCJcIjtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoVXNlcigpO1xyXG4gIH0sIFtzZWFyY2gsIHNob3dBZGQsIHNob3dFZGl0LCBhY3RpdmVQYWdlXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBhZ2VDaGFuZ2UgPSAocGFnZU51bWJlcikgPT4ge1xyXG4gICAgc2V0QWN0aXZlUGFnZShwYWdlTnVtYmVyKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGFjY2Vzc1Rva2VuLFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zR2VuZXJhbC5nZXQoXCIvcmVzb3VyY2VzL3VzZXJcIiwge1xyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBwYWdlOiBhY3RpdmVQYWdlLFxyXG4gICAgICAgICAgbGltaXQ6IHRha2VTaXplLFxyXG4gICAgICAgICAgc2VhcmNoLFxyXG4gICAgICAgICAgLy8gc29ydCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNldFVzZXIoW10pO1xyXG4gICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gcmVzcG9uc2U7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIHNldFVzZXIoZGF0YS5kYXRhKTtcclxuICAgICAgICBzZXRUb3RhbChkYXRhLnBhZ2luYXRpb24udG90YWxfZW50cmllcyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YS5wYWdpbmF0aW9uLnRvdGFsX2VudHJpZXMpXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFkZFRvYXN0KGVycm9ySGFuZGxlcihlcnJvciksIHsgYXBwZWFyYW5jZTogXCJlcnJvclwiIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZVVzZXIgPSBhc3luYyAoaWRVc2VyKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGFjY2Vzc1Rva2VuLFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zR2VuZXJhbC5kZWxldGUoXHJcbiAgICAgICAgYC9yZXNvdXJjZXMvdXNlci8ke2lkVXNlcn1gLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gcmVzcG9uc2U7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGFkZFRvYXN0KFwiQmVyaGFzaWwgaGFwdXMgdXNlclwiLCB7IGFwcGVhcmFuY2U6IFwic3VjY2Vzc1wiIH0pO1xyXG4gICAgICAgIGZldGNoVXNlcigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhZGRUb2FzdChlcnJvckhhbmRsZXIoZXJyb3IpLCB7IGFwcGVhcmFuY2U6IFwiZXJyb3JcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJteS0xMCBweC0xMFwiPlxyXG4gICAgICB7c2hvd0FkZCA/IChcclxuICAgICAgICA8QWRkVXNlciBzaG93PXtzaG93QWRkfSBzZXRTaG93PXsodmFsKSA9PiBzZXRTaG93QWRkKHZhbCl9IC8+XHJcbiAgICAgICkgOiBzaG93RWRpdCA/IChcclxuICAgICAgICA8RWRpdFVzZXJcclxuICAgICAgICAgIGlkPXtzZWxlY3RlZElkfVxyXG4gICAgICAgICAgc2hvdz17c2hvd0VkaXR9XHJcbiAgICAgICAgICBzZXRTaG93PXsodmFsKSA9PiBzZXRTaG93RWRpdCh2YWwpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93IHctZnVsbCByb3VuZGVkIHB4LTYgcHktMTBcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTJ4bCB0ZXh0LWJsYWNrIG1iLTIwXCI+XHJcbiAgICAgICAgICAgICAgRGF0YSBVc2VyXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG10LTQgbWItOFwiPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25BZGQgb25DbGljaz17KCkgPT4gc2V0U2hvd0FkZCghc2hvd0FkZCl9PlxyXG4gICAgICAgICAgICAgICAgRGF0YSBCYXJ1XHJcbiAgICAgICAgICAgICAgPC9CdXR0b25BZGQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgYnJlYWstbm9ybWFsIGl0ZW1zLWNlbnRlciBib3JkZXItYi0yIHB4LTMgcHktMlwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXItMiBtYi0wIGZvbnQtYm9sZCB3LTIwXCI+IzwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yLTIgbWItMCBmb250LWJvbGQgdy0xMS8xMlwiPnVzZXJuYW1lPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXItMiBtYi0wIGZvbnQtYm9sZCB3LTExLzEyXCI+bmFtYSB1c2VyPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXItMiBtYi0wIGZvbnQtYm9sZCB3LTExLzEyXCI+bGV2ZWw8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgbWwtNiBtYi0wXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHt1c2VyLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogaW5kZXggJSAyID09PSAwID8gXCIjRTdFN0U3XCIgOiBcIiNGM0YzRjNcIiB9fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBicmVhay1ub3JtYWwgcHktMiBweC0zIGl0ZW1zLWNlbnRlciBob3ZlcjpvcGFjaXR5LTgwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yLTIgbWItMCB3LTIwXCI+e2luZGV4ICsgMX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yLTIgbWItMCB3LTExLzEyXCI+e2l0ZW0udXNlcm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtci0yIG1iLTAgdy0xMS8xMlwiPntpdGVtLm5hbWFfYWRtaW59PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtci0yIG1iLTAgdy0xMS8xMlwiPntpdGVtLmlkX2xldmVsfTwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWVuZCBtbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiIzZGNkY2RlwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJZChpdGVtLmlkX3VzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0VkaXQoIXNob3dFZGl0KTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGN1cnNvci1wb2ludGVyIG1yLTRcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdFxyXG4gICAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY29uZmlybShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBgWWFraW4gaGFwdXMgYCArIGl0ZW0udXNlcm5hbWUgKyBgID9gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVVc2VyKGl0ZW0uaWRfdXNlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjNkY2RjZGXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBkZWxldGVcclxuICAgICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtdC04IGZsZXggZmxleC1yb3cganVzdGlmeS1lbmQgaXRlbXMtZW5kXCI+XHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2U9e2FjdGl2ZVBhZ2V9XHJcbiAgICAgICAgICAgICAgICBpdGVtc0NvdW50UGVyUGFnZT17dGFrZVNpemV9XHJcbiAgICAgICAgICAgICAgICB0b3RhbEl0ZW1zQ291bnQ9e3RvdGFsfVxyXG4gICAgICAgICAgICAgICAgcGFnZVJhbmdlRGlzcGxheWVkPXs1fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBpdGVtQ2xhc3M9XCJiZy1ibHVlLTEwMCBweS0yIHB4LTQgbXgtMSByb3VuZGVkIGZvbnQtYm9sZFwiXHJcbiAgICAgICAgICAgICAgICBsaW5rQ2xhc3M9XCJ0ZXh0LWdyYXktNzAwIGhvdmVyOm5vLXVuZGVybGluZSBob3Zlcjp0ZXh0LWdyYXktNzAwXCJcclxuICAgICAgICAgICAgICAgIGhpZGVGaXJzdExhc3RQYWdlcz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHByZXZQYWdlVGV4dD17XHJcbiAgICAgICAgICAgICAgICAgIDxpIHN0eWxlPXt7IGNvbG9yOiBcIiM2RjZGNkZcIiB9fSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIGFycm93X2JhY2tcclxuICAgICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbmV4dFBhZ2VUZXh0PXtcclxuICAgICAgICAgICAgICAgICAgPGkgc3R5bGU9e3sgY29sb3I6IFwiIzZGNkY2RlwiIH19IGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dfZm9yd2FyZFxyXG4gICAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImJnLWJsdWUtNDAwXCJcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUxpbmtDbGFzcz1cInRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBCdXR0b25BZGQgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBiYWNrZ3JvdW5kOiAjNDM2MWVlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDEwcHggMjNweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcclxuIiwiaW1wb3J0IHtcclxuICBTRVRfQUNDRVNTX1RPS0VOLFxyXG4gIFNFVF9MT0FESU5HLFxyXG4gIFNFVF9VU0VSLFxyXG59IGZyb20gXCIuL2FjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRVc2VyID0gKHBheWxvYWQpID0+ICh7XHJcbiAgdHlwZTogU0VUX1VTRVIsXHJcbiAgcGF5bG9hZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0QWNjZXNzVG9rZW4gPSAocGF5bG9hZCkgPT4gKHtcclxuICB0eXBlOiBTRVRfQUNDRVNTX1RPS0VOLFxyXG4gIHBheWxvYWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldExvYWRpbmcgPSAocGF5bG9hZCkgPT4gKHtcclxuICB0eXBlOiBTRVRfTE9BRElORyxcclxuICBwYXlsb2FkLFxyXG59KTtcclxuIiwiZXhwb3J0IGNvbnN0IFNFVF9VU0VSID0gXCJTRVRfVVNFUlwiO1xyXG5leHBvcnQgY29uc3QgU0VUX0FDQ0VTU19UT0tFTiA9IFwiU0VUX0FDQ0VTU19UT0tFTlwiO1xyXG5leHBvcnQgY29uc3QgU0VUX0xPQURJTkcgPSBcIlNFVF9MT0FESU5HXCI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBsb2FkYWJsZS9jb21wb25lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvcm1pa1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvbWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtanMtcGFnaW5hdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zZWxlY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3Qtbm90aWZpY2F0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwieXVwXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=