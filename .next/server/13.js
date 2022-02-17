exports.ids = [13];
exports.modules = {

/***/ "./components/user/EditUser.js":
/*!*************************************!*\
  !*** ./components/user/EditUser.js ***!
  \*************************************/
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

var _jsxFileName = "C:\\project\\sertifikasi_listrik_frontend\\components\\user\\EditUser.js";








const Card = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 5px 15px 4px rgba(0, 0, 0, 0.25);
`;

function EditUser({
  show,
  setShow,
  id
}) {
  const accessToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.accessToken);
  const {
    addToast
  } = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__["useToasts"])();
  const {
    0: levelOptions,
    1: setLevelOptions
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    fetchLevel();
    fetchDetailUser(id);
  }, []);
  const formik = Object(formik__WEBPACK_IMPORTED_MODULE_7__["useFormik"])({
    initialValues: {
      id_user: id,
      username: "",
      nama_admin: "",
      id_level: null
    },
    onSubmit: values => updateUser(values)
  });

  const updateUser = async values => {
    try {
      const headers = {
        Authorization: accessToken
      };
      const response = await _helpers_global__WEBPACK_IMPORTED_MODULE_4__["axiosGeneral"].put(`/resources/user/${id}`, values, {
        headers
      });
      const {
        status
      } = response;

      if (status === 200) {
        addToast("Berhasil ubah user", {
          appearance: "success"
        });
        setShow(!show);
      }
    } catch (error) {
      addToast(Object(_helpers_global__WEBPACK_IMPORTED_MODULE_4__["errorHandler"])(error), {
        appearance: "error"
      });
    }
  };

  const fetchDetailUser = async () => {
    try {
      const headers = {
        Authorization: accessToken
      };
      const response = await _helpers_global__WEBPACK_IMPORTED_MODULE_4__["axiosGeneral"].get(`/resources/user/${id}`, {
        headers
      });
      const {
        status,
        data
      } = response;

      if (status === 200) {
        formik.setFieldValue("username", data.data.username);
        formik.setFieldValue("nama_admin", data.data.nama_admin);
        formik.setFieldValue("id_level", data.data.id_level);
      }
    } catch (error) {
      addToast(Object(_helpers_global__WEBPACK_IMPORTED_MODULE_4__["errorHandler"])(error), {
        appearance: "error"
      });
    }
  };

  const fetchLevel = async () => {
    try {
      const headers = {
        Authorization: accessToken
      };
      const response = await _helpers_global__WEBPACK_IMPORTED_MODULE_4__["axiosGeneral"].get("/resources/level", {
        headers,
        params: {
          start: 0,
          limit: 999
        }
      });
      setLevelOptions([]);
      const {
        status,
        data
      } = response;

      if (status === 200) {
        const levelArr = [];
        const level = data.data;

        for (const iterator of level) {
          let val = {
            value: iterator.id_level,
            label: iterator.nama_level
          };
          levelArr.push(val);
        }

        setLevelOptions(levelArr);
      }
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
        className: "font-bold text-3xl text-black mb-20",
        children: "Ubah Data User"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: formik.handleSubmit,
        method: "POST",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-4 my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Username"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base",
            name: "username",
            placeholder: "Username",
            type: "text",
            value: formik.values.username,
            onChange: formik.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, this), formik.errors.username && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "text-xs text-red-500",
            children: formik.errors.username
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-4 my-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Nama User"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base",
            name: "nama_admin",
            placeholder: "Nama User",
            type: "text",
            value: formik.values.nama_admin,
            onChange: formik.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }, this), formik.errors.nama_admin && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "text-xs text-red-500",
            children: formik.errors.nama_admin
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block font-semibold text-sm",
            children: "Level"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
            placeholder: "Pilih level",
            options: levelOptions,
            name: "id_level",
            value: levelOptions[levelOptions.findIndex(x => x.value == formik.values.id_level)],
            onChange: e => {
              formik.setFieldValue("id_level", e.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-row justify-end items-center mt-20",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            onClick: () => setShow(!show),
            className: "px-12 text-white py-2 font-semibold bg-gray-400 rounded cursor-pointer",
            children: "Batal"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "submit",
            className: "px-12 text-white py-2 font-semibold bg-blue-500 rounded cursor-pointer ml-10",
            children: "Simpan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (EditUser);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXIvRWRpdFVzZXIuanMiXSwibmFtZXMiOlsiQ2FyZCIsInN0eWxlZCIsImRpdiIsIkVkaXRVc2VyIiwic2hvdyIsInNldFNob3ciLCJpZCIsImFjY2Vzc1Rva2VuIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImFkZFRvYXN0IiwidXNlVG9hc3RzIiwibGV2ZWxPcHRpb25zIiwic2V0TGV2ZWxPcHRpb25zIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJmZXRjaExldmVsIiwiZmV0Y2hEZXRhaWxVc2VyIiwiZm9ybWlrIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsImlkX3VzZXIiLCJ1c2VybmFtZSIsIm5hbWFfYWRtaW4iLCJpZF9sZXZlbCIsIm9uU3VibWl0IiwidmFsdWVzIiwidXBkYXRlVXNlciIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicmVzcG9uc2UiLCJheGlvc0dlbmVyYWwiLCJwdXQiLCJzdGF0dXMiLCJhcHBlYXJhbmNlIiwiZXJyb3IiLCJlcnJvckhhbmRsZXIiLCJnZXQiLCJkYXRhIiwic2V0RmllbGRWYWx1ZSIsInBhcmFtcyIsInN0YXJ0IiwibGltaXQiLCJsZXZlbEFyciIsImxldmVsIiwiaXRlcmF0b3IiLCJ2YWwiLCJ2YWx1ZSIsImxhYmVsIiwibmFtYV9sZXZlbCIsInB1c2giLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJlcnJvcnMiLCJmaW5kSW5kZXgiLCJ4IiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxJQUFJLEdBQUdDLHdEQUFNLENBQUNDLEdBQUk7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsQ0FKQTs7QUFNQSxTQUFTQyxRQUFULENBQWtCO0FBQUVDLE1BQUY7QUFBUUMsU0FBUjtBQUFpQkM7QUFBakIsQ0FBbEIsRUFBeUM7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cUJBQVMsRUFBQyw2QkFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRSxxRUFBQyxtREFBRDtBQUNFLHVCQUFXLEVBQUMsYUFEZDtBQUVFLG1CQUFPLEVBQUVYLFlBRlg7QUFHRSxnQkFBSSxFQUFDLFVBSFA7QUFJRSxpQkFBSyxFQUNIQSxZQUFZLENBQ1pBLFlBQVksQ0FBQzBDLFNBQWIsQ0FDR0MsQ0FBRCxJQUFPQSxDQUFDLENBQUNSLEtBQUYsSUFBVzdCLE1BQU0sQ0FBQ1EsTUFBUCxDQUFjRixRQURsQyxDQURZLENBTGhCO0FBV0Usb0JBQVEsRUFBR2dDLENBQUQsSUFBTztBQUNmdEMsb0JBQU0sQ0FBQ3FCLGFBQVAsQ0FBcUIsVUFBckIsRUFBaUNpQixDQUFDLENBQUNULEtBQW5DO0FBQ0Q7QUFiSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFyQ0YsZUF5REU7QUFBSyxtQkFBUyxFQUFDLDhDQUFmO0FBQUEsa0NBQ0U7QUFDRSxtQkFBTyxFQUFFLE1BQU0xQyxPQUFPLENBQUMsQ0FBQ0QsSUFBRixDQUR4QjtBQUVFLHFCQUFTLEVBQUMsd0VBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFPRTtBQUNFLGdCQUFJLEVBQUMsUUFEUDtBQUVFLHFCQUFTLEVBQUMsOEVBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXpERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpRkQ7O0FBRWNELHVFQUFmLEUiLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBheGlvc0dlbmVyYWwsIGVycm9ySGFuZGxlciB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2dsb2JhbFwiO1xyXG5pbXBvcnQgeyB1c2VUb2FzdHMgfSBmcm9tIFwicmVhY3QtdG9hc3Qtbm90aWZpY2F0aW9uc1wiO1xyXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBDYXJkID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxNXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG5gO1xyXG5cclxuZnVuY3Rpb24gRWRpdFVzZXIoeyBzaG93LCBzZXRTaG93LCBpZCB9KSB7XHJcbiAgY29uc3QgYWNjZXNzVG9rZW4gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFjY2Vzc1Rva2VuKTtcclxuICBjb25zdCB7IGFkZFRvYXN0IH0gPSB1c2VUb2FzdHMoKTtcclxuICBjb25zdCBbbGV2ZWxPcHRpb25zLCBzZXRMZXZlbE9wdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hMZXZlbCgpO1xyXG4gICAgZmV0Y2hEZXRhaWxVc2VyKGlkKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XHJcbiAgICBpbml0aWFsVmFsdWVzOiB7XHJcbiAgICAgICAgaWRfdXNlcjogaWQsXHJcbiAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgbmFtYV9hZG1pbjogXCJcIixcclxuICAgICAgICBpZF9sZXZlbDogbnVsbCxcclxuICAgIH0sXHJcbiAgICBvblN1Ym1pdDogKHZhbHVlcykgPT4gdXBkYXRlVXNlcih2YWx1ZXMpLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB1cGRhdGVVc2VyID0gYXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBhY2Nlc3NUb2tlbixcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0dlbmVyYWwucHV0KFxyXG4gICAgICAgIGAvcmVzb3VyY2VzL3VzZXIvJHtpZH1gLFxyXG4gICAgICAgIHZhbHVlcyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IHJlc3BvbnNlO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBhZGRUb2FzdChcIkJlcmhhc2lsIHViYWggdXNlclwiLCB7IGFwcGVhcmFuY2U6IFwic3VjY2Vzc1wiIH0pO1xyXG4gICAgICAgIHNldFNob3coIXNob3cpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhZGRUb2FzdChlcnJvckhhbmRsZXIoZXJyb3IpLCB7IGFwcGVhcmFuY2U6IFwiZXJyb3JcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaERldGFpbFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGFjY2Vzc1Rva2VuLFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zR2VuZXJhbC5nZXQoYC9yZXNvdXJjZXMvdXNlci8ke2lkfWAsIHtcclxuICAgICAgICBoZWFkZXJzLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZShcInVzZXJuYW1lXCIsIGRhdGEuZGF0YS51c2VybmFtZSk7XHJcbiAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJuYW1hX2FkbWluXCIsIGRhdGEuZGF0YS5uYW1hX2FkbWluKTtcclxuICAgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZShcImlkX2xldmVsXCIsIGRhdGEuZGF0YS5pZF9sZXZlbCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFkZFRvYXN0KGVycm9ySGFuZGxlcihlcnJvciksIHsgYXBwZWFyYW5jZTogXCJlcnJvclwiIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoTGV2ZWwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGFjY2Vzc1Rva2VuLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0dlbmVyYWwuZ2V0KFwiL3Jlc291cmNlcy9sZXZlbFwiLCB7XHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICAgICAgbGltaXQ6IDk5OSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgc2V0TGV2ZWxPcHRpb25zKFtdKTtcclxuICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBjb25zdCBsZXZlbEFyciA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGxldmVsID0gZGF0YS5kYXRhO1xyXG4gICAgICAgIGZvciAoY29uc3QgaXRlcmF0b3Igb2YgbGV2ZWwpIHtcclxuICAgICAgICAgIGxldCB2YWwgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBpdGVyYXRvci5pZF9sZXZlbCxcclxuICAgICAgICAgICAgbGFiZWw6IGl0ZXJhdG9yLm5hbWFfbGV2ZWwsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgbGV2ZWxBcnIucHVzaCh2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRMZXZlbE9wdGlvbnMobGV2ZWxBcnIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhZGRUb2FzdChlcnJvckhhbmRsZXIoZXJyb3IpLCB7IGFwcGVhcmFuY2U6IFwiZXJyb3JcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgY2xhc3NOYW1lPVwidy0zLzUgaC00LzUgYmxvY2sgbXgtYXV0byBweC00IG15LTNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBteC1hdXRvIHB5LTRcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtM3hsIHRleHQtYmxhY2sgbWItMjBcIj5cclxuICAgICAgICAgIFViYWggRGF0YSBVc2VyXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH0gbWV0aG9kPVwiUE9TVFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi00IG15LTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIFVzZXJuYW1lXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTIgcHgtMyBiZy1ncmF5LTEwMCByb3VuZGVkIGJsb2NrIHctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC1iYXNlXCJcclxuICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy51c2VybmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMudXNlcm5hbWUgJiYgKFxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yZWQtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy51c2VybmFtZX1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tNCBteS00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICBOYW1hIFVzZXJcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBweC0zIGJnLWdyYXktMTAwIHJvdW5kZWQgYmxvY2sgdy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1hX2FkbWluXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWEgVXNlclwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLm5hbWFfYWRtaW59XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLm5hbWFfYWRtaW4gJiYgKFxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yZWQtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy5uYW1hX2FkbWlufVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICBMZXZlbFxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaWxpaCBsZXZlbFwiXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17bGV2ZWxPcHRpb25zfVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJpZF9sZXZlbFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e1xyXG4gICAgICAgICAgICAgICAgbGV2ZWxPcHRpb25zW1xyXG4gICAgICAgICAgICAgICAgbGV2ZWxPcHRpb25zLmZpbmRJbmRleChcclxuICAgICAgICAgICAgICAgICAgKHgpID0+IHgudmFsdWUgPT0gZm9ybWlrLnZhbHVlcy5pZF9sZXZlbFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwiaWRfbGV2ZWxcIiwgZS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlciBtdC0yMFwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvdyghc2hvdyl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMTIgdGV4dC13aGl0ZSBweS0yIGZvbnQtc2VtaWJvbGQgYmctZ3JheS00MDAgcm91bmRlZCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBCYXRhbFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTEyIHRleHQtd2hpdGUgcHktMiBmb250LXNlbWlib2xkIGJnLWJsdWUtNTAwIHJvdW5kZWQgY3Vyc29yLXBvaW50ZXIgbWwtMTBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU2ltcGFuXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0VXNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==