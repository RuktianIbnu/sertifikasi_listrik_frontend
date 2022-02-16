exports.ids = [0];
exports.modules = {

/***/ "./components/level/AddLevel.js":
/*!**************************************!*\
  !*** ./components/level/AddLevel.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/global */ "./helpers/global.js");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toast-notifications */ "react-toast-notifications");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\project\\sertifikasi_listrik_frontend\\components\\level\\AddLevel.js";








const Card = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 5px 15px 4px rgba(0, 0, 0, 0.25);
`;

function AddLevel({
  show,
  setShow
}) {
  const accessToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.accessToken);
  const {
    addToast
  } = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__["useToasts"])(); //   const [levelOption, setLevelOption] = useState([]);

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {}, []);
  const formik = Object(formik__WEBPACK_IMPORTED_MODULE_7__["useFormik"])({
    initialValues: {
      nama_level: ""
    },
    onSubmit: values => createLevel(values)
  });

  const createLevel = async values => {
    try {
      const headers = {
        Authorization: accessToken
      };
      const response = await _helpers_global__WEBPACK_IMPORTED_MODULE_4__["axiosGeneral"].post(`/resources/level`, values, {
        headers
      });
      const {
        status
      } = response;

      if (status === 201 || status === 200) {
        setShow(!show);
      }

      addToast("Berhasil simpan data", {
        appearance: "success"
      });
    } catch (error) {
      addToast(Object(_helpers_global__WEBPACK_IMPORTED_MODULE_4__["errorHandler"])(error), {
        appearance: "error"
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
    className: "w-3/5 h-4/5 block mx-auto px-4 my-3",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "block mx-auto py-4",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "font-bold text-3xl text-black mb-16",
        children: "Tambah Data Level"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: formik.handleSubmit,
        method: "POST",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Nama Level"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base",
            name: "nama_level",
            placeholder: "Nama Level",
            type: "text",
            value: formik.values.nama_level,
            onChange: formik.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, this), formik.errors.nama_level && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "text-xs text-red-500",
            children: formik.errors.nama_level
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-row justify-end my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            onClick: () => setShow(!show),
            className: "px-12 mx-3 text-white py-2 text-center w-1/6 font-semibold bg-gray-400 rounded cursor-pointer",
            children: "Batal"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "submit" //   style={{ background: "#4361ee" }}
            ,
            className: "inline-block py-2 text-gray-50 bg-blue-500 px-4 text-center w-1/6 rounded font-bold cursor-pointer focus:outline-none",
            children: "Simpan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (AddLevel);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xldmVsL0FkZExldmVsLmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJzdHlsZWQiLCJkaXYiLCJBZGRMZXZlbCIsInNob3ciLCJzZXRTaG93IiwiYWNjZXNzVG9rZW4iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYWRkVG9hc3QiLCJ1c2VUb2FzdHMiLCJ1c2VFZmZlY3QiLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwibmFtYV9sZXZlbCIsIm9uU3VibWl0IiwidmFsdWVzIiwiY3JlYXRlTGV2ZWwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwiYXhpb3NHZW5lcmFsIiwicG9zdCIsInN0YXR1cyIsImFwcGVhcmFuY2UiLCJlcnJvciIsImVycm9ySGFuZGxlciIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsImVycm9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxJQUFJLEdBQUdDLHdEQUFNLENBQUNDLEdBQUk7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsQ0FKQTs7QUFNQSxTQUFTQyxRQUFULENBQWtCO0FBQUVDLE1BQUY7QUFBUUM7QUFBUixDQUFsQixFQUFxQztBQUNuQyxRQUFNQyxXQUFXLEdBQUdDLCtEQUFXLENBQUVDLEtBQUQsSUFBV0EsS0FBSyxDQUFDRixXQUFsQixDQUEvQjtBQUNBLFFBQU07QUFBRUc7QUFBRixNQUFlQywyRUFBUyxFQUE5QixDQUZtQyxDQUdyQzs7QUFFRUMseURBQVMsQ0FBQyxNQUFNLENBQ2YsQ0FEUSxFQUNOLEVBRE0sQ0FBVDtBQUdBLFFBQU1DLE1BQU0sR0FBR0Msd0RBQVMsQ0FBQztBQUN2QkMsaUJBQWEsRUFBRTtBQUNiQyxnQkFBVSxFQUFFO0FBREMsS0FEUTtBQUl2QkMsWUFBUSxFQUFHQyxNQUFELElBQVlDLFdBQVcsQ0FBQ0QsTUFBRDtBQUpWLEdBQUQsQ0FBeEI7O0FBT0EsUUFBTUMsV0FBVyxHQUFHLE1BQU9ELE1BQVAsSUFBa0I7QUFDcEMsUUFBSTtBQUVGLFlBQU1FLE9BQU8sR0FBRztBQUNkQyxxQkFBYSxFQUFFZDtBQURELE9BQWhCO0FBR0EsWUFBTWUsUUFBUSxHQUFHLE1BQU1DLDREQUFZLENBQUNDLElBQWIsQ0FBbUIsa0JBQW5CLEVBQ3ZCTixNQUR1QixFQUNmO0FBQ05FO0FBRE0sT0FEZSxDQUF2QjtBQUlBLFlBQU07QUFBRUs7QUFBRixVQUFhSCxRQUFuQjs7QUFDQSxVQUFJRyxNQUFNLEtBQUssR0FBWCxJQUFrQkEsTUFBTSxLQUFLLEdBQWpDLEVBQXNDO0FBQ3BDbkIsZUFBTyxDQUFDLENBQUNELElBQUYsQ0FBUDtBQUNEOztBQUNESyxjQUFRLENBQUMsc0JBQUQsRUFBeUI7QUFBRWdCLGtCQUFVLEVBQUU7QUFBZCxPQUF6QixDQUFSO0FBQ0QsS0FkRCxDQWNFLE9BQU9DLEtBQVAsRUFBYztBQUNkakIsY0FBUSxDQUFDa0Isb0VBQVksQ0FBQ0QsS0FBRCxDQUFiLEVBQXNCO0FBQUVELGtCQUFVLEVBQUU7QUFBZCxPQUF0QixDQUFSO0FBQ0Q7QUFDRixHQWxCRDs7QUFvQkEsc0JBQ0UscUVBQUMsSUFBRDtBQUFNLGFBQVMsRUFBQyxxQ0FBaEI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxvQkFBZjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBQyxxQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUU7QUFBTSxnQkFBUSxFQUFFYixNQUFNLENBQUNnQixZQUF2QjtBQUFxQyxjQUFNLEVBQUMsTUFBNUM7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsWUFBZjtBQUFBLGtDQUNFO0FBQU8sbUJBQU8sRUFBQyxPQUFmO0FBQXVCLHFCQUFTLEVBQUMsNkJBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBSUU7QUFDRSxxQkFBUyxFQUFDLHlFQURaO0FBRUUsZ0JBQUksRUFBQyxZQUZQO0FBR0UsdUJBQVcsRUFBQyxZQUhkO0FBSUUsZ0JBQUksRUFBQyxNQUpQO0FBS0UsaUJBQUssRUFBRWhCLE1BQU0sQ0FBQ0ssTUFBUCxDQUFjRixVQUx2QjtBQU1FLG9CQUFRLEVBQUVILE1BQU0sQ0FBQ2lCO0FBTm5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkYsRUFZR2pCLE1BQU0sQ0FBQ2tCLE1BQVAsQ0FBY2YsVUFBZCxpQkFDQztBQUFNLHFCQUFTLEVBQUMsc0JBQWhCO0FBQUEsc0JBQ0dILE1BQU0sQ0FBQ2tCLE1BQVAsQ0FBY2Y7QUFEakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFtQkU7QUFBSyxtQkFBUyxFQUFDLGdDQUFmO0FBQUEsa0NBQ0U7QUFDRSxtQkFBTyxFQUFFLE1BQU1WLE9BQU8sQ0FBQyxDQUFDRCxJQUFGLENBRHhCO0FBRUUscUJBQVMsRUFBQywrRkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQU9FO0FBQ0UsZ0JBQUksRUFBQyxRQURQLENBRUU7QUFGRjtBQUdFLHFCQUFTLEVBQUMsdUhBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0Q0Q7O0FBRWNELHVFQUFmLEUiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGF4aW9zR2VuZXJhbCwgZXJyb3JIYW5kbGVyIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvZ2xvYmFsXCI7XHJcbmltcG9ydCB7IHVzZVRvYXN0cyB9IGZyb20gXCJyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zXCI7XHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCI7XHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwcHggNXB4IDE1cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBBZGRMZXZlbCh7IHNob3csIHNldFNob3cgfSkge1xyXG4gIGNvbnN0IGFjY2Vzc1Rva2VuID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hY2Nlc3NUb2tlbik7XHJcbiAgY29uc3QgeyBhZGRUb2FzdCB9ID0gdXNlVG9hc3RzKCk7XHJcbi8vICAgY29uc3QgW2xldmVsT3B0aW9uLCBzZXRMZXZlbE9wdGlvbl0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xyXG4gICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICBuYW1hX2xldmVsOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIG9uU3VibWl0OiAodmFsdWVzKSA9PiBjcmVhdGVMZXZlbCh2YWx1ZXMpLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjcmVhdGVMZXZlbCA9IGFzeW5jICh2YWx1ZXMpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGFjY2Vzc1Rva2VuLFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zR2VuZXJhbC5wb3N0KGAvcmVzb3VyY2VzL2xldmVsYCwgXHJcbiAgICAgIHZhbHVlcywge1xyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gcmVzcG9uc2U7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMSB8fCBzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIHNldFNob3coIXNob3cpO1xyXG4gICAgICB9XHJcbiAgICAgIGFkZFRvYXN0KFwiQmVyaGFzaWwgc2ltcGFuIGRhdGFcIiwgeyBhcHBlYXJhbmNlOiBcInN1Y2Nlc3NcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFkZFRvYXN0KGVycm9ySGFuZGxlcihlcnJvciksIHsgYXBwZWFyYW5jZTogXCJlcnJvclwiIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCBjbGFzc05hbWU9XCJ3LTMvNSBoLTQvNSBibG9jayBteC1hdXRvIHB4LTQgbXktM1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIG14LWF1dG8gcHktNFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0zeGwgdGV4dC1ibGFjayBtYi0xNlwiPlxyXG4gICAgICAgICAgVGFtYmFoIERhdGEgTGV2ZWxcclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fSBtZXRob2Q9XCJQT1NUXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIE5hbWEgTGV2ZWxcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBweC0zIGJnLWdyYXktMTAwIHJvdW5kZWQgYmxvY2sgdy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1hX2xldmVsXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWEgTGV2ZWxcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5uYW1hX2xldmVsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy5uYW1hX2xldmVsICYmIChcclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtcmVkLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMubmFtYV9sZXZlbH1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWVuZCBteS00XCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KCFzaG93KX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0xMiBteC0zIHRleHQtd2hpdGUgcHktMiB0ZXh0LWNlbnRlciB3LTEvNiBmb250LXNlbWlib2xkIGJnLWdyYXktNDAwIHJvdW5kZWQgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQmF0YWxcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAvLyAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiIzQzNjFlZVwiIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHB5LTIgdGV4dC1ncmF5LTUwIGJnLWJsdWUtNTAwIHB4LTQgdGV4dC1jZW50ZXIgdy0xLzYgcm91bmRlZCBmb250LWJvbGQgY3Vyc29yLXBvaW50ZXIgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNpbXBhblxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkTGV2ZWw7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=