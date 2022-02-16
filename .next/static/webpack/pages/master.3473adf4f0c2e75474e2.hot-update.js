webpackHotUpdate_N_E("pages/master",{

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sidebar; });
/* harmony import */ var C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sidebar_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar/MenuItem */ "./components/sidebar/MenuItem.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actionCreator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/actionCreator */ "./store/actionCreator.js");



var _jsxFileName = "C:\\project\\sertifikasi_listrik_frontend\\components\\Sidebar.js",
    _s = $RefreshSig$();

function _templateObject3() {
  var data = Object(C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: auto;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 0px 15px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 15%;\n  background: #007175;\n  color: #fff;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
_c = Wrapper;
var MenuWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].ul(_templateObject2());
_c2 = MenuWrapper;
var Spacer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject3());
function Sidebar() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();

  var doLogout = function doLogout() {
    dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_9__["setAccessToken"])(null));
    dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_9__["setUser"])(null));
    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.replace("/");
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Wrapper, {
    className: "flex-shrink-0 h-full overflow-y-auto",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
      className: "p-4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h4", {
      className: "text-5xl font-bold text-center mb-36 text-yellow-300",
      children: "LISTRIK"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(MenuWrapper, {
      className: "flex flex-col",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_sidebar_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        text: "Dashboard",
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_4__["MdHome"], {
          size: "24px",
          className: "inline-flex mr-3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 17
        }, this),
        name: "dashboard",
        onClick: function onClick() {
          return next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/dashboard");
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_sidebar_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        text: "Master",
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["Description"], {
          size: "24px",
          className: "inline-flex mr-3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }, this),
        name: "master",
        onClick: function onClick() {
          return next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/master");
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_sidebar_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        text: "Transaksi",
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_4__["MdPeople"], {
          size: "24px",
          className: "inline-flex mr-3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }, this),
        name: "transaksi",
        onClick: function onClick() {
          return next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/transaksi");
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_sidebar_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        text: "Keluar",
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_4__["MdPowerSettingsNew"], {
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

_s(Sidebar, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"]];
});

_c3 = Sidebar;

var _c, _c2, _c3;

$RefreshReg$(_c, "Wrapper");
$RefreshReg$(_c2, "MenuWrapper");
$RefreshReg$(_c3, "Sidebar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyLmpzIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJNZW51V3JhcHBlciIsInVsIiwiU3BhY2VyIiwiU2lkZWJhciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJkb0xvZ291dCIsInNldEFjY2Vzc1Rva2VuIiwic2V0VXNlciIsIlJvdXRlciIsInJlcGxhY2UiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBYjtLQUFNRixPO0FBS04sSUFBTUcsV0FBVyxHQUFHRix5REFBTSxDQUFDRyxFQUFWLG9CQUFqQjtNQUFNRCxXO0FBR04sSUFBTUUsTUFBTSxHQUFHSix5REFBTSxDQUFDQyxHQUFWLG9CQUFaO0FBSWUsU0FBU0ksT0FBVCxHQUFtQjtBQUFBOztBQUNoQyxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUVBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckJGLFlBQVEsQ0FBQ0csMkVBQWMsQ0FBQyxJQUFELENBQWYsQ0FBUjtBQUNBSCxZQUFRLENBQUNJLG9FQUFPLENBQUMsSUFBRCxDQUFSLENBQVI7QUFDQUMsc0RBQU0sQ0FBQ0MsT0FBUCxDQUFlLEdBQWY7QUFDRCxHQUpEOztBQUtBLHNCQUNFLHFFQUFDLE9BQUQ7QUFBUyxhQUFTLEVBQUMsc0NBQW5CO0FBQUEsNEJBQ0U7QUFDRSxlQUFTLEVBQUM7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFJLGVBQVMsRUFBQyxzREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBS0UscUVBQUMsV0FBRDtBQUFhLGVBQVMsRUFBQyxlQUF2QjtBQUFBLDhCQUNFLHFFQUFDLHlEQUFEO0FBQ0UsWUFBSSxFQUFDLFdBRFA7QUFFRSxZQUFJLGVBQUUscUVBQUMscURBQUQ7QUFBUSxjQUFJLEVBQUMsTUFBYjtBQUFvQixtQkFBUyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRlI7QUFHRSxZQUFJLEVBQUMsV0FIUDtBQUlFLGVBQU8sRUFBRTtBQUFBLGlCQUFNRCxrREFBTSxDQUFDRSxJQUFQLENBQVksWUFBWixDQUFOO0FBQUE7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFPRSxxRUFBQyx5REFBRDtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsWUFBSSxlQUFFLHFFQUFDLDhEQUFEO0FBQWEsY0FBSSxFQUFDLE1BQWxCO0FBQXlCLG1CQUFTLEVBQUM7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGUjtBQUdFLFlBQUksRUFBQyxRQUhQO0FBSUUsZUFBTyxFQUFFO0FBQUEsaUJBQU1GLGtEQUFNLENBQUNFLElBQVAsQ0FBWSxTQUFaLENBQU47QUFBQTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixlQWFFLHFFQUFDLHlEQUFEO0FBQ0UsWUFBSSxFQUFDLFdBRFA7QUFFRSxZQUFJLGVBQUUscUVBQUMsdURBQUQ7QUFBVSxjQUFJLEVBQUMsTUFBZjtBQUFzQixtQkFBUyxFQUFDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRlI7QUFHRSxZQUFJLEVBQUMsV0FIUDtBQUlFLGVBQU8sRUFBRTtBQUFBLGlCQUFNRixrREFBTSxDQUFDRSxJQUFQLENBQVksWUFBWixDQUFOO0FBQUE7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkYsZUFtQkUscUVBQUMseURBQUQ7QUFDRSxZQUFJLEVBQUMsUUFEUDtBQUVFLFlBQUksZUFBRSxxRUFBQyxpRUFBRDtBQUFvQixjQUFJLEVBQUMsTUFBekI7QUFBZ0MsbUJBQVMsRUFBQztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZSO0FBR0UsWUFBSSxFQUFDLFFBSFA7QUFJRSxlQUFPLEVBQUVMO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtDRDs7R0ExQ3VCSCxPO1VBQ0xFLHVEOzs7TUFES0YsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYXN0ZXIuMzQ3M2FkZjRmMGMyZTc1NDc0ZTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgTWRIb21lLCBNZFRvZGF5LCBNZFBlb3BsZSwgTWRQb3dlclNldHRpbmdzTmV3LCBNZEltcG9ydENvbnRhY3RzIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiLi9zaWRlYmFyL01lbnVJdGVtXCI7XHJcbmltcG9ydCB7IERlc2NyaXB0aW9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBzZXRBY2Nlc3NUb2tlbiwgc2V0VXNlciB9IGZyb20gXCIuLi9zdG9yZS9hY3Rpb25DcmVhdG9yXCI7XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTUlO1xyXG4gIGJhY2tncm91bmQ6ICMwMDcxNzU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbmA7XHJcbmNvbnN0IE1lbnVXcmFwcGVyID0gc3R5bGVkLnVsYFxyXG4gIHBhZGRpbmc6IDBweCAxNXB4O1xyXG5gO1xyXG5jb25zdCBTcGFjZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiBhdXRvO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZWJhcigpIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IGRvTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goc2V0QWNjZXNzVG9rZW4obnVsbCkpO1xyXG4gICAgZGlzcGF0Y2goc2V0VXNlcihudWxsKSk7XHJcbiAgICBSb3V0ZXIucmVwbGFjZShcIi9cIik7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXIgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCBoLWZ1bGwgb3ZlcmZsb3cteS1hdXRvXCI+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBjbGFzc05hbWU9XCJwLTRcIlxyXG4gICAgICAvPlxyXG4gICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC01eGwgZm9udC1ib2xkIHRleHQtY2VudGVyIG1iLTM2IHRleHQteWVsbG93LTMwMFwiPkxJU1RSSUs8L2g0PlxyXG4gICAgICA8TWVudVdyYXBwZXIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgdGV4dD1cIkRhc2hib2FyZFwiXHJcbiAgICAgICAgICBpY29uPXs8TWRIb21lIHNpemU9XCIyNHB4XCIgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggbXItM1wiIC8+fVxyXG4gICAgICAgICAgbmFtZT1cImRhc2hib2FyZFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIil9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgIHRleHQ9XCJNYXN0ZXJcIlxyXG4gICAgICAgICAgaWNvbj17PERlc2NyaXB0aW9uIHNpemU9XCIyNHB4XCIgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggbXItM1wiIC8+fVxyXG4gICAgICAgICAgbmFtZT1cIm1hc3RlclwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaChcIi9tYXN0ZXJcIil9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgIHRleHQ9XCJUcmFuc2Frc2lcIlxyXG4gICAgICAgICAgaWNvbj17PE1kUGVvcGxlIHNpemU9XCIyNHB4XCIgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggbXItM1wiIC8+fVxyXG4gICAgICAgICAgbmFtZT1cInRyYW5zYWtzaVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaChcIi90cmFuc2Frc2lcIil9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgIHRleHQ9XCJLZWx1YXJcIlxyXG4gICAgICAgICAgaWNvbj17PE1kUG93ZXJTZXR0aW5nc05ldyBzaXplPVwiMjRweFwiIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IG1yLTNcIiAvPn1cclxuICAgICAgICAgIG5hbWU9XCJyZXBvcnRcIlxyXG4gICAgICAgICAgb25DbGljaz17ZG9Mb2dvdXR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9NZW51V3JhcHBlcj5cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=