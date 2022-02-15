webpackHotUpdate_N_E("pages/master",{

/***/ "./pages/master/user.js":
/*!******************************!*\
  !*** ./pages/master/user.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-js-pagination */ "./node_modules/react-js-pagination/dist/Pagination.js");
/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_js_pagination__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toast-notifications */ "./node_modules/react-toast-notifications/dist/index.js");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helpers_global__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helpers/global */ "./helpers/global.js");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");





var _jsxFileName = "C:\\project\\sertifikasi_listrik_frontend\\pages\\master\\user.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 14px;\n  background: #4361ee;\n  color: #fff;\n  padding: 10px 23px;\n  border-radius: 10px;\n  font-weight: 700;\n  cursor: pointer;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var AddUser = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_10__["default"])(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../components/user/AddUser */ "./components/user/AddUser.js"));
});
_c2 = AddUser;
var EditUser = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_10__["default"])(_c3 = function _c3() {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../../components/user/EditUser */ "./components/user/EditUser.js"));
});
_c4 = EditUser;

function User() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      user = _useState[0],
      setUser = _useState[1];

  var accessToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.accessToken;
  });

  var _useToasts = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_8__["useToasts"])(),
      addToast = _useToasts.addToast;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      showAdd = _useState2[0],
      setShowAdd = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      showEdit = _useState3[0],
      setShowEdit = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      selectedId = _useState4[0],
      setSelectedId = _useState4[1]; // Pagination


  var takeSize = 10;

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      total = _useState5[0],
      setTotal = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(1),
      activePage = _useState6[0],
      setActivePage = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      search = _useState7[0],
      setSearch = _useState7[1];

  var sort = "";
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    fetchUser();
  }, [search, showAdd, showEdit, activePage]);

  var handlePageChange = function handlePageChange(pageNumber) {
    setActivePage(pageNumber);
  };

  var fetchUser = /*#__PURE__*/function () {
    var _ref = Object(C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var headers, response, status, data;
      return C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              headers = {
                Authorization: accessToken
              };
              _context.next = 4;
              return _helpers_global__WEBPACK_IMPORTED_MODULE_9__["axiosGeneral"].get("/resources/user", {
                headers: headers,
                params: {
                  page: activePage,
                  limit: takeSize,
                  search: search // sort,

                }
              });

            case 4:
              response = _context.sent;
              setUser([]);
              status = response.status, data = response.data;

              if (status === 200) {
                setUser(data.data);
                setTotal(data.pagination.total_entries); // console.log(data.pagination.total_entries)
              }

              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              addToast(Object(_helpers_global__WEBPACK_IMPORTED_MODULE_9__["errorHandler"])(_context.t0), {
                appearance: "error"
              });

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function fetchUser() {
      return _ref.apply(this, arguments);
    };
  }();

  var deleteUser = /*#__PURE__*/function () {
    var _ref2 = Object(C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(idUser) {
      var headers, response, status;
      return C_project_sertifikasi_listrik_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              headers = {
                Authorization: accessToken
              };
              _context2.next = 4;
              return _helpers_global__WEBPACK_IMPORTED_MODULE_9__["axiosGeneral"]["delete"]("/resources/user/".concat(idUser), {
                headers: headers
              });

            case 4:
              response = _context2.sent;
              status = response.status;

              if (status === 200) {
                addToast("Berhasil hapus user", {
                  appearance: "success"
                });
                fetchUser();
              }

              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              addToast(Object(_helpers_global__WEBPACK_IMPORTED_MODULE_9__["errorHandler"])(_context2.t0), {
                appearance: "error"
              });

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 9]]);
    }));

    return function deleteUser(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: "my-10 px-10",
    children: showAdd ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(AddUser, {
      show: showAdd,
      setShow: function setShow(val) {
        return setShowAdd(val);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }, this) : showEdit ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(EditUser, {
      id: selectedId,
      show: showEdit,
      setShow: function setShow(val) {
        return setShowEdit(val);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "bg-white shadow w-full rounded px-6 py-10",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
          className: "font-bold text-2xl text-black mb-20",
          children: "Data User"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "flex flex-row justify-between items-center mt-4 mb-8",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(ButtonAdd, {
            onClick: function onClick() {
              return setShowAdd(!showAdd);
            },
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "flex flex-row break-normal items-center border-b-2 px-3 py-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 font-bold w-20",
            children: "#"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 font-bold w-11/12",
            children: "username"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 font-bold w-11/12",
            children: "nama user"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
            className: "text-sm mr-2 mb-0 font-bold w-11/12",
            children: "level"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
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
        }, this), user.map(function (item, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            style: {
              background: index % 2 === 0 ? "#E7E7E7" : "#F3F3F3"
            },
            className: "flex flex-row break-normal py-2 px-3 items-center hover:opacity-80",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
              className: "text-sm mr-2 mb-0 w-20",
              children: index + 1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
              className: "text-sm mr-2 mb-0 w-11/12",
              children: item.username
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
              className: "text-sm mr-2 mb-0 w-11/12",
              children: item.nama_admin
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
              className: "text-sm mr-2 mb-0 w-11/12",
              children: item.id_level
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "flex flex-row justify-end ml-6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("i", {
                style: {
                  color: "#6F6F6F"
                },
                onClick: function onClick() {
                  setSelectedId(item.id_user);
                  setShowEdit(!showEdit);
                },
                className: "material-icons cursor-pointer mr-4",
                children: "edit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("i", {
                onClick: function onClick() {
                  if (window.confirm("Yakin hapus " + item.username + " ?")) {
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
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 17
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 15
          }, _this);
        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "w-full mt-8 flex flex-row justify-end items-end",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_js_pagination__WEBPACK_IMPORTED_MODULE_6___default.a, {
            activePage: activePage,
            itemsCountPerPage: takeSize,
            totalItemsCount: total,
            pageRangeDisplayed: 5,
            onChange: handlePageChange,
            itemClass: "bg-blue-100 py-2 px-4 mx-1 rounded font-bold",
            linkClass: "text-gray-700 hover:no-underline hover:text-gray-700",
            hideFirstLastPages: true,
            prevPageText: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("i", {
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
            nextPageText: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("i", {
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

_s(User, "ACcs0mpa5NbRPan22byhZozkTzQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], react_toast_notifications__WEBPACK_IMPORTED_MODULE_8__["useToasts"]];
});

_c5 = User;
var ButtonAdd = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject());
_c6 = ButtonAdd;
/* harmony default export */ __webpack_exports__["default"] = (User);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "AddUser$loadable");
$RefreshReg$(_c2, "AddUser");
$RefreshReg$(_c3, "EditUser$loadable");
$RefreshReg$(_c4, "EditUser");
$RefreshReg$(_c5, "User");
$RefreshReg$(_c6, "ButtonAdd");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFzdGVyL3VzZXIuanMiXSwibmFtZXMiOlsiQWRkVXNlciIsImxvYWRhYmxlIiwiRWRpdFVzZXIiLCJVc2VyIiwidXNlU3RhdGUiLCJ1c2VyIiwic2V0VXNlciIsImFjY2Vzc1Rva2VuIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZVRvYXN0cyIsImFkZFRvYXN0Iiwic2hvd0FkZCIsInNldFNob3dBZGQiLCJzaG93RWRpdCIsInNldFNob3dFZGl0Iiwic2VsZWN0ZWRJZCIsInNldFNlbGVjdGVkSWQiLCJ0YWtlU2l6ZSIsInRvdGFsIiwic2V0VG90YWwiLCJhY3RpdmVQYWdlIiwic2V0QWN0aXZlUGFnZSIsInNlYXJjaCIsInNldFNlYXJjaCIsInNvcnQiLCJ1c2VFZmZlY3QiLCJmZXRjaFVzZXIiLCJoYW5kbGVQYWdlQ2hhbmdlIiwicGFnZU51bWJlciIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYXhpb3NHZW5lcmFsIiwiZ2V0IiwicGFyYW1zIiwicGFnZSIsImxpbWl0IiwicmVzcG9uc2UiLCJzdGF0dXMiLCJkYXRhIiwicGFnaW5hdGlvbiIsInRvdGFsX2VudHJpZXMiLCJlcnJvckhhbmRsZXIiLCJhcHBlYXJhbmNlIiwiZGVsZXRlVXNlciIsImlkVXNlciIsInZhbCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImJhY2tncm91bmQiLCJ1c2VybmFtZSIsIm5hbWFfYWRtaW4iLCJpZF9sZXZlbCIsImNvbG9yIiwiaWRfdXNlciIsIndpbmRvdyIsImNvbmZpcm0iLCJCdXR0b25BZGQiLCJzdHlsZWQiLCJkaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsT0FBTyxHQUFHQyxvRUFBUSxNQUFDO0FBQUEsU0FDdkIsa0pBRHVCO0FBQUEsQ0FBRCxDQUF4QjtNQUFN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QUZyQjtBQUdFLDJCQUFlLEVBQUVDLEtBSG5CO0FBSUUsOEJBQWtCLEVBQUUsQ0FKdEI7QUFLRSxvQkFBUSxFQUFFUyxnQkFMWjtBQU1FLHFCQUFTLEVBQUMsOENBTlo7QUFPRSxxQkFBUyxFQUFDLHNEQVBaO0FBUUUsOEJBQWtCLEVBQUUsSUFSdEI7QUFTRSx3QkFBWSxlQUNWO0FBQUcsbUJBQUssRUFBRTtBQUFFMEIscUJBQUssRUFBRTtBQUFULGVBQVY7QUFBZ0MsdUJBQVMsRUFBQyxnQkFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVko7QUFjRSx3QkFBWSxlQUNWO0FBQUcsbUJBQUssRUFBRTtBQUFFQSxxQkFBSyxFQUFFO0FBQVQsZUFBVjtBQUFnQyx1QkFBUyxFQUFDLGdCQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFmSjtBQW1CRSx1QkFBVyxFQUFDLGFBbkJkO0FBb0JFLDJCQUFlLEVBQUM7QUFwQmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXZERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVko7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0dEOztHQXZLUW5ELEk7VUFFYUssdUQsRUFDQ0UsbUU7OztNQUhkUCxJO0FBeUtULElBQU11RCxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQWY7TUFBTUYsUztBQVVTdkQsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFzdGVyLmU3ZjQyYzhiYmY0OGIzMzdmNzQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCJyZWFjdC1qcy1wYWdpbmF0aW9uXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVRvYXN0cyB9IGZyb20gXCJyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zXCI7XHJcbmltcG9ydCB7IGF4aW9zR2VuZXJhbCwgZXJyb3JIYW5kbGVyIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvZ2xvYmFsXCI7XHJcbmltcG9ydCBsb2FkYWJsZSBmcm9tIFwiQGxvYWRhYmxlL2NvbXBvbmVudFwiO1xyXG5jb25zdCBBZGRVc2VyID0gbG9hZGFibGUoKCkgPT5cclxuICBpbXBvcnQoXCIuLi8uLi9jb21wb25lbnRzL3VzZXIvQWRkVXNlclwiKVxyXG4pO1xyXG5jb25zdCBFZGl0VXNlciA9IGxvYWRhYmxlKCgpID0+XHJcbiAgaW1wb3J0KFwiLi4vLi4vY29tcG9uZW50cy91c2VyL0VkaXRVc2VyXCIpXHJcbik7XHJcblxyXG5mdW5jdGlvbiBVc2VyKCkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBhY2Nlc3NUb2tlbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWNjZXNzVG9rZW4pO1xyXG4gIGNvbnN0IHsgYWRkVG9hc3QgfSA9IHVzZVRvYXN0cygpO1xyXG4gIGNvbnN0IFtzaG93QWRkLCBzZXRTaG93QWRkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd0VkaXQsIHNldFNob3dFZGl0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2VsZWN0ZWRJZCwgc2V0U2VsZWN0ZWRJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgLy8gUGFnaW5hdGlvblxyXG4gIGNvbnN0IHRha2VTaXplID0gMTA7XHJcbiAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYWN0aXZlUGFnZSwgc2V0QWN0aXZlUGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgc29ydCA9IFwiXCI7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFVzZXIoKTtcclxuICB9LCBbc2VhcmNoLCBzaG93QWRkLCBzaG93RWRpdCwgYWN0aXZlUGFnZV0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKHBhZ2VOdW1iZXIpID0+IHtcclxuICAgIHNldEFjdGl2ZVBhZ2UocGFnZU51bWJlcik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBhY2Nlc3NUb2tlbixcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0dlbmVyYWwuZ2V0KFwiL3Jlc291cmNlcy91c2VyXCIsIHtcclxuICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgcGFnZTogYWN0aXZlUGFnZSxcclxuICAgICAgICAgIGxpbWl0OiB0YWtlU2l6ZSxcclxuICAgICAgICAgIHNlYXJjaCxcclxuICAgICAgICAgIC8vIHNvcnQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZXRVc2VyKFtdKTtcclxuICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBzZXRVc2VyKGRhdGEuZGF0YSk7XHJcbiAgICAgICAgc2V0VG90YWwoZGF0YS5wYWdpbmF0aW9uLnRvdGFsX2VudHJpZXMpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEucGFnaW5hdGlvbi50b3RhbF9lbnRyaWVzKVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhZGRUb2FzdChlcnJvckhhbmRsZXIoZXJyb3IpLCB7IGFwcGVhcmFuY2U6IFwiZXJyb3JcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVVc2VyID0gYXN5bmMgKGlkVXNlcikgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBhY2Nlc3NUb2tlbixcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0dlbmVyYWwuZGVsZXRlKFxyXG4gICAgICAgIGAvcmVzb3VyY2VzL3VzZXIvJHtpZFVzZXJ9YCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IHJlc3BvbnNlO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBhZGRUb2FzdChcIkJlcmhhc2lsIGhhcHVzIHVzZXJcIiwgeyBhcHBlYXJhbmNlOiBcInN1Y2Nlc3NcIiB9KTtcclxuICAgICAgICBmZXRjaFVzZXIoKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWRkVG9hc3QoZXJyb3JIYW5kbGVyKGVycm9yKSwgeyBhcHBlYXJhbmNlOiBcImVycm9yXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMTAgcHgtMTBcIj5cclxuICAgICAge3Nob3dBZGQgPyAoXHJcbiAgICAgICAgPEFkZFVzZXIgc2hvdz17c2hvd0FkZH0gc2V0U2hvdz17KHZhbCkgPT4gc2V0U2hvd0FkZCh2YWwpfSAvPlxyXG4gICAgICApIDogc2hvd0VkaXQgPyAoXHJcbiAgICAgICAgPEVkaXRVc2VyXHJcbiAgICAgICAgICBpZD17c2VsZWN0ZWRJZH1cclxuICAgICAgICAgIHNob3c9e3Nob3dFZGl0fVxyXG4gICAgICAgICAgc2V0U2hvdz17KHZhbCkgPT4gc2V0U2hvd0VkaXQodmFsKX1cclxuICAgICAgICAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHNoYWRvdyB3LWZ1bGwgcm91bmRlZCBweC02IHB5LTEwXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0yeGwgdGV4dC1ibGFjayBtYi0yMFwiPlxyXG4gICAgICAgICAgICAgIERhdGEgVXNlclxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtdC00IG1iLThcIj5cclxuICAgICAgICAgICAgICA8QnV0dG9uQWRkIG9uQ2xpY2s9eygpID0+IHNldFNob3dBZGQoIXNob3dBZGQpfT5cclxuICAgICAgICAgICAgICAgIERhdGEgQmFydVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uQWRkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGJyZWFrLW5vcm1hbCBpdGVtcy1jZW50ZXIgYm9yZGVyLWItMiBweC0zIHB5LTJcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yLTIgbWItMCBmb250LWJvbGQgdy0yMFwiPiM8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtci0yIG1iLTAgZm9udC1ib2xkIHctMTEvMTJcIj51c2VybmFtZTwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yLTIgbWItMCBmb250LWJvbGQgdy0xMS8xMlwiPm5hbWEgdXNlcjwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yLTIgbWItMCBmb250LWJvbGQgdy0xMS8xMlwiPmxldmVsPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIG1sLTYgbWItMFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7dXNlci5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IGluZGV4ICUgMiA9PT0gMCA/IFwiI0U3RTdFN1wiIDogXCIjRjNGM0YzXCIgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgYnJlYWstbm9ybWFsIHB5LTIgcHgtMyBpdGVtcy1jZW50ZXIgaG92ZXI6b3BhY2l0eS04MFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtci0yIG1iLTAgdy0yMFwiPntpbmRleCArIDF9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtci0yIG1iLTAgdy0xMS8xMlwiPntpdGVtLnVzZXJuYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXItMiBtYi0wIHctMTEvMTJcIj57aXRlbS5uYW1hX2FkbWlufTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXItMiBtYi0wIHctMTEvMTJcIj57aXRlbS5pZF9sZXZlbH08L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1lbmQgbWwtNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiM2RjZGNkZcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkSWQoaXRlbS5pZF91c2VyKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dFZGl0KCFzaG93RWRpdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBjdXJzb3ItcG9pbnRlciBtci00XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRcclxuICAgICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNvbmZpcm0oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYFlha2luIGhhcHVzIGAgKyBpdGVtLnVzZXJuYW1lICsgYCA/YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlVXNlcihpdGVtLmlkX3VzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiIzZGNkY2RlwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtOCBmbGV4IGZsZXgtcm93IGp1c3RpZnktZW5kIGl0ZW1zLWVuZFwiPlxyXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVQYWdlPXthY3RpdmVQYWdlfVxyXG4gICAgICAgICAgICAgICAgaXRlbXNDb3VudFBlclBhZ2U9e3Rha2VTaXplfVxyXG4gICAgICAgICAgICAgICAgdG90YWxJdGVtc0NvdW50PXt0b3RhbH1cclxuICAgICAgICAgICAgICAgIHBhZ2VSYW5nZURpc3BsYXllZD17NX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVQYWdlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgaXRlbUNsYXNzPVwiYmctYmx1ZS0xMDAgcHktMiBweC00IG14LTEgcm91bmRlZCBmb250LWJvbGRcIlxyXG4gICAgICAgICAgICAgICAgbGlua0NsYXNzPVwidGV4dC1ncmF5LTcwMCBob3Zlcjpuby11bmRlcmxpbmUgaG92ZXI6dGV4dC1ncmF5LTcwMFwiXHJcbiAgICAgICAgICAgICAgICBoaWRlRmlyc3RMYXN0UGFnZXM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBwcmV2UGFnZVRleHQ9e1xyXG4gICAgICAgICAgICAgICAgICA8aSBzdHlsZT17eyBjb2xvcjogXCIjNkY2RjZGXCIgfX0gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICBhcnJvd19iYWNrXHJcbiAgICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5leHRQYWdlVGV4dD17XHJcbiAgICAgICAgICAgICAgICAgIDxpIHN0eWxlPXt7IGNvbG9yOiBcIiM2RjZGNkZcIiB9fSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIGFycm93X2ZvcndhcmRcclxuICAgICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJiZy1ibHVlLTQwMFwiXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVMaW5rQ2xhc3M9XCJ0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgQnV0dG9uQWRkID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYmFja2dyb3VuZDogIzQzNjFlZTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxMHB4IDIzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=