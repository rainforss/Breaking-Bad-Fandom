webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _components_CardsDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CardsDisplay */ "./components/CardsDisplay.js");
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SearchBar */ "./components/SearchBar.js");
var _this = undefined,
    _jsxFileName = "E:\\breakingbad\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var Index = function Index(_ref) {
  _s();

  var characters = _ref.characters;
  var searchResults = characters;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      query = _useState[0],
      setQuery = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      searched = _useState2[0],
      setSearched = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      reveal = _useState3[0],
      setReveal = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      charName = _useState4[0],
      setCharName = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      searchValue = _useState5[0],
      setSearchValue = _useState5[1];

  var fetcher = function fetcher(url) {
    return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url).then(function (res) {
      return res.data;
    });
  };

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_3__["default"])(reveal ? "https://www.breakingbadapi.com/api/death-count?name=Walter+White" : null, fetcher),
      data = _useSWR.data,
      error = _useSWR.error;

  console.log(charName);
  console.log(culprit); // const { data, dataError } = useSWR(
  //   searched
  //     ? `${process.env.NEXT_PUBLIC_BASE_URL}characters?name=${query}`
  //     : null,
  //   fetcher
  // );
  // if (data && searched) {
  //   searchResults = data;
  // }
  // if (dataError) {
  //   console.log("error");
  // }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx(_components_SearchBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: searchValue,
    onChange: function onChange(e) {
      return setSearchValue(e.target.value);
    },
    onClick: function onClick() {
      setQuery(searchValue);
      setSearched(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }), __jsx(_components_CardsDisplay__WEBPACK_IMPORTED_MODULE_4__["default"], {
    characters: searchResults,
    culprit: culprit,
    onClick: function onClick(e) {
      setCharName(e.currentTarget.name.split(" ").join("+"));
      setReveal(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  })));
};

_s(Index, "/0xQdalDDyYrurXtHLXiyPniLuw=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_3__["default"]];
});

_c = Index;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjaGFyYWN0ZXJzIiwic2VhcmNoUmVzdWx0cyIsInVzZVN0YXRlIiwicXVlcnkiLCJzZXRRdWVyeSIsInNlYXJjaGVkIiwic2V0U2VhcmNoZWQiLCJyZXZlYWwiLCJzZXRSZXZlYWwiLCJjaGFyTmFtZSIsInNldENoYXJOYW1lIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsImZldGNoZXIiLCJ1cmwiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwidXNlU1dSIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY3VscHJpdCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImN1cnJlbnRUYXJnZXQiLCJuYW1lIiwic3BsaXQiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQW9CO0FBQUE7O0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjtBQUNoQyxNQUFJQyxhQUFhLEdBQUdELFVBQXBCOztBQURnQyxrQkFFTkUsc0RBQVEsQ0FBQyxFQUFELENBRkY7QUFBQSxNQUV6QkMsS0FGeUI7QUFBQSxNQUVsQkMsUUFGa0I7O0FBQUEsbUJBR0FGLHNEQUFRLENBQUMsS0FBRCxDQUhSO0FBQUEsTUFHekJHLFFBSHlCO0FBQUEsTUFHZkMsV0FIZTs7QUFBQSxtQkFJSkosc0RBQVEsQ0FBQyxLQUFELENBSko7QUFBQSxNQUl6QkssTUFKeUI7QUFBQSxNQUlqQkMsU0FKaUI7O0FBQUEsbUJBS0FOLHNEQUFRLENBQUMsRUFBRCxDQUxSO0FBQUEsTUFLekJPLFFBTHlCO0FBQUEsTUFLZkMsV0FMZTs7QUFBQSxtQkFNTVIsc0RBQVEsQ0FBQyxFQUFELENBTmQ7QUFBQSxNQU16QlMsV0FOeUI7QUFBQSxNQU1aQyxjQU5ZOztBQU9oQyxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxHQUFEO0FBQUEsV0FBU0MsNENBQUssQ0FBQ0MsR0FBTixDQUFVRixHQUFWLEVBQWVHLElBQWYsQ0FBb0IsVUFBQ0MsR0FBRDtBQUFBLGFBQVNBLEdBQUcsQ0FBQ0MsSUFBYjtBQUFBLEtBQXBCLENBQVQ7QUFBQSxHQUFoQjs7QUFQZ0MsZ0JBUVJDLG1EQUFNLENBQzVCYixNQUFNLHdFQUVGLElBSHdCLEVBSTVCTSxPQUo0QixDQVJFO0FBQUEsTUFReEJNLElBUndCLFdBUXhCQSxJQVJ3QjtBQUFBLE1BUWxCRSxLQVJrQixXQVFsQkEsS0FSa0I7O0FBY2hDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWWQsUUFBWjtBQUNBYSxTQUFPLENBQUNDLEdBQVIsQ0FBWUMsT0FBWixFQWZnQyxDQWdCaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQ0UsbUVBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUNFLFNBQUssRUFBRWIsV0FEVDtBQUVFLFlBQVEsRUFBRSxrQkFBQ2MsQ0FBRDtBQUFBLGFBQU9iLGNBQWMsQ0FBQ2EsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBckI7QUFBQSxLQUZaO0FBR0UsV0FBTyxFQUFFLG1CQUFNO0FBQ2J2QixjQUFRLENBQUNPLFdBQUQsQ0FBUjtBQUNBTCxpQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNELEtBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBU0UsTUFBQyxnRUFBRDtBQUNFLGNBQVUsRUFBRUwsYUFEZDtBQUVFLFdBQU8sRUFBRXVCLE9BRlg7QUFHRSxXQUFPLEVBQUUsaUJBQUNDLENBQUQsRUFBTztBQUNkZixpQkFBVyxDQUFDZSxDQUFDLENBQUNHLGFBQUYsQ0FBZ0JDLElBQWhCLENBQXFCQyxLQUFyQixDQUEyQixHQUEzQixFQUFnQ0MsSUFBaEMsQ0FBcUMsR0FBckMsQ0FBRCxDQUFYO0FBQ0F2QixlQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0QsS0FOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsQ0FERixDQURGO0FBc0JELENBbkREOztHQUFNVCxLO1VBUW9CcUIsMkM7OztLQVJwQnJCLEs7O0FBcURTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zODc4NTQ5MDE3YjEyYmVjMzJiMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XHJcbmltcG9ydCBDYXJkc0Rpc3BsYXkgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZHNEaXNwbGF5XCI7XHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoQmFyXCI7XHJcblxyXG5jb25zdCBJbmRleCA9ICh7IGNoYXJhY3RlcnMgfSkgPT4ge1xyXG4gIGxldCBzZWFyY2hSZXN1bHRzID0gY2hhcmFjdGVycztcclxuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzZWFyY2hlZCwgc2V0U2VhcmNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyZXZlYWwsIHNldFJldmVhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NoYXJOYW1lLCBzZXRDaGFyTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc2VhcmNoVmFsdWUsIHNldFNlYXJjaFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBheGlvcy5nZXQodXJsKS50aGVuKChyZXMpID0+IHJlcy5kYXRhKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICByZXZlYWxcclxuICAgICAgPyBgaHR0cHM6Ly93d3cuYnJlYWtpbmdiYWRhcGkuY29tL2FwaS9kZWF0aC1jb3VudD9uYW1lPVdhbHRlcitXaGl0ZWBcclxuICAgICAgOiBudWxsLFxyXG4gICAgZmV0Y2hlclxyXG4gICk7XHJcbiAgY29uc29sZS5sb2coY2hhck5hbWUpO1xyXG4gIGNvbnNvbGUubG9nKGN1bHByaXQpO1xyXG4gIC8vIGNvbnN0IHsgZGF0YSwgZGF0YUVycm9yIH0gPSB1c2VTV1IoXHJcbiAgLy8gICBzZWFyY2hlZFxyXG4gIC8vICAgICA/IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfWNoYXJhY3RlcnM/bmFtZT0ke3F1ZXJ5fWBcclxuICAvLyAgICAgOiBudWxsLFxyXG4gIC8vICAgZmV0Y2hlclxyXG4gIC8vICk7XHJcbiAgLy8gaWYgKGRhdGEgJiYgc2VhcmNoZWQpIHtcclxuICAvLyAgIHNlYXJjaFJlc3VsdHMgPSBkYXRhO1xyXG4gIC8vIH1cclxuICAvLyBpZiAoZGF0YUVycm9yKSB7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xyXG4gIC8vIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPFNlYXJjaEJhclxyXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaFZhbHVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hWYWx1ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFF1ZXJ5KHNlYXJjaFZhbHVlKTtcclxuICAgICAgICAgICAgc2V0U2VhcmNoZWQodHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPENhcmRzRGlzcGxheVxyXG4gICAgICAgICAgY2hhcmFjdGVycz17c2VhcmNoUmVzdWx0c31cclxuICAgICAgICAgIGN1bHByaXQ9e2N1bHByaXR9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRDaGFyTmFtZShlLmN1cnJlbnRUYXJnZXQubmFtZS5zcGxpdChcIiBcIikuam9pbihcIitcIikpO1xyXG4gICAgICAgICAgICBzZXRSZXZlYWwodHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfWNoYXJhY3RlcnNgXHJcbiAgKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgY2hhcmFjdGVyczogcmVzdWx0LmRhdGEsXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=