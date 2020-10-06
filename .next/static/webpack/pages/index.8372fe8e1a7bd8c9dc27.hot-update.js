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
      culprit = _useSWR.data,
      culpritError = _useSWR.error;

  console.log(charName);
  console.log(culprit);

  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_3__["default"])(searched ? "".concat("https://www.breakingbadapi.com/api/", "characters?name=").concat(query) : null, fetcher),
      queriedCharacters = _useSWR2.data,
      characterError = _useSWR2.error;

  if (data && searched) {
    searchResults = queriedCharacters;
  }

  if (characterError) {
    console.log("error");
  }

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

_s(Index, "98jKWR+4Hs+Smp6drsi4MQ5C+/4=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_3__["default"], swr__WEBPACK_IMPORTED_MODULE_3__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjaGFyYWN0ZXJzIiwic2VhcmNoUmVzdWx0cyIsInVzZVN0YXRlIiwicXVlcnkiLCJzZXRRdWVyeSIsInNlYXJjaGVkIiwic2V0U2VhcmNoZWQiLCJyZXZlYWwiLCJzZXRSZXZlYWwiLCJjaGFyTmFtZSIsInNldENoYXJOYW1lIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsImZldGNoZXIiLCJ1cmwiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwidXNlU1dSIiwiY3VscHJpdCIsImN1bHByaXRFcnJvciIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJxdWVyaWVkQ2hhcmFjdGVycyIsImNoYXJhY3RlckVycm9yIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY3VycmVudFRhcmdldCIsIm5hbWUiLCJzcGxpdCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBb0I7QUFBQTs7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCO0FBQ2hDLE1BQUlDLGFBQWEsR0FBR0QsVUFBcEI7O0FBRGdDLGtCQUVORSxzREFBUSxDQUFDLEVBQUQsQ0FGRjtBQUFBLE1BRXpCQyxLQUZ5QjtBQUFBLE1BRWxCQyxRQUZrQjs7QUFBQSxtQkFHQUYsc0RBQVEsQ0FBQyxLQUFELENBSFI7QUFBQSxNQUd6QkcsUUFIeUI7QUFBQSxNQUdmQyxXQUhlOztBQUFBLG1CQUlKSixzREFBUSxDQUFDLEtBQUQsQ0FKSjtBQUFBLE1BSXpCSyxNQUp5QjtBQUFBLE1BSWpCQyxTQUppQjs7QUFBQSxtQkFLQU4sc0RBQVEsQ0FBQyxFQUFELENBTFI7QUFBQSxNQUt6Qk8sUUFMeUI7QUFBQSxNQUtmQyxXQUxlOztBQUFBLG1CQU1NUixzREFBUSxDQUFDLEVBQUQsQ0FOZDtBQUFBLE1BTXpCUyxXQU55QjtBQUFBLE1BTVpDLGNBTlk7O0FBT2hDLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEdBQUQ7QUFBQSxXQUFTQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVGLEdBQVYsRUFBZUcsSUFBZixDQUFvQixVQUFDQyxHQUFEO0FBQUEsYUFBU0EsR0FBRyxDQUFDQyxJQUFiO0FBQUEsS0FBcEIsQ0FBVDtBQUFBLEdBQWhCOztBQVBnQyxnQkFRZUMsbURBQU0sQ0FDbkRiLE1BQU0sd0VBRUYsSUFIK0MsRUFJbkRNLE9BSm1ELENBUnJCO0FBQUEsTUFRbEJRLE9BUmtCLFdBUXhCRixJQVJ3QjtBQUFBLE1BUUZHLFlBUkUsV0FRVEMsS0FSUzs7QUFjaENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZaEIsUUFBWjtBQUNBZSxTQUFPLENBQUNDLEdBQVIsQ0FBWUosT0FBWjs7QUFmZ0MsaUJBZ0IyQkQsbURBQU0sQ0FDL0RmLFFBQVEsYUFDRHFCLHFDQURDLDZCQUNrRHZCLEtBRGxELElBRUosSUFIMkQsRUFJL0RVLE9BSitELENBaEJqQztBQUFBLE1BZ0JsQmMsaUJBaEJrQixZQWdCeEJSLElBaEJ3QjtBQUFBLE1BZ0JRUyxjQWhCUixZQWdCQ0wsS0FoQkQ7O0FBc0JoQyxNQUFJSixJQUFJLElBQUlkLFFBQVosRUFBc0I7QUFDcEJKLGlCQUFhLEdBQUcwQixpQkFBaEI7QUFDRDs7QUFDRCxNQUFJQyxjQUFKLEVBQW9CO0FBQ2xCSixXQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0Q7O0FBRUQsU0FDRSxtRUFDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQ0UsU0FBSyxFQUFFZCxXQURUO0FBRUUsWUFBUSxFQUFFLGtCQUFDa0IsQ0FBRDtBQUFBLGFBQU9qQixjQUFjLENBQUNpQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFyQjtBQUFBLEtBRlo7QUFHRSxXQUFPLEVBQUUsbUJBQU07QUFDYjNCLGNBQVEsQ0FBQ08sV0FBRCxDQUFSO0FBQ0FMLGlCQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0QsS0FOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFTRSxNQUFDLGdFQUFEO0FBQ0UsY0FBVSxFQUFFTCxhQURkO0FBRUUsV0FBTyxFQUFFb0IsT0FGWDtBQUdFLFdBQU8sRUFBRSxpQkFBQ1EsQ0FBRCxFQUFPO0FBQ2RuQixpQkFBVyxDQUFDbUIsQ0FBQyxDQUFDRyxhQUFGLENBQWdCQyxJQUFoQixDQUFxQkMsS0FBckIsQ0FBMkIsR0FBM0IsRUFBZ0NDLElBQWhDLENBQXFDLEdBQXJDLENBQUQsQ0FBWDtBQUNBM0IsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNELEtBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLENBREYsQ0FERjtBQXNCRCxDQW5ERDs7R0FBTVQsSztVQVEyQ3FCLDJDLEVBUVlBLDJDOzs7S0FoQnZEckIsSzs7QUFxRFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjgzNzJmZThlMWE3YmQ4YzlkYzI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuaW1wb3J0IENhcmRzRGlzcGxheSBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkc0Rpc3BsYXlcIjtcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2hCYXJcIjtcclxuXHJcbmNvbnN0IEluZGV4ID0gKHsgY2hhcmFjdGVycyB9KSA9PiB7XHJcbiAgbGV0IHNlYXJjaFJlc3VsdHMgPSBjaGFyYWN0ZXJzO1xyXG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3NlYXJjaGVkLCBzZXRTZWFyY2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3JldmVhbCwgc2V0UmV2ZWFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY2hhck5hbWUsIHNldENoYXJOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzZWFyY2hWYWx1ZSwgc2V0U2VhcmNoVmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGF4aW9zLmdldCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpO1xyXG4gIGNvbnN0IHsgZGF0YTogY3VscHJpdCwgZXJyb3I6IGN1bHByaXRFcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgcmV2ZWFsXHJcbiAgICAgID8gYGh0dHBzOi8vd3d3LmJyZWFraW5nYmFkYXBpLmNvbS9hcGkvZGVhdGgtY291bnQ/bmFtZT1XYWx0ZXIrV2hpdGVgXHJcbiAgICAgIDogbnVsbCxcclxuICAgIGZldGNoZXJcclxuICApO1xyXG4gIGNvbnNvbGUubG9nKGNoYXJOYW1lKTtcclxuICBjb25zb2xlLmxvZyhjdWxwcml0KTtcclxuICBjb25zdCB7IGRhdGE6IHF1ZXJpZWRDaGFyYWN0ZXJzLCBlcnJvcjogY2hhcmFjdGVyRXJyb3IgfSA9IHVzZVNXUihcclxuICAgIHNlYXJjaGVkXHJcbiAgICAgID8gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9Y2hhcmFjdGVycz9uYW1lPSR7cXVlcnl9YFxyXG4gICAgICA6IG51bGwsXHJcbiAgICBmZXRjaGVyXHJcbiAgKTtcclxuICBpZiAoZGF0YSAmJiBzZWFyY2hlZCkge1xyXG4gICAgc2VhcmNoUmVzdWx0cyA9IHF1ZXJpZWRDaGFyYWN0ZXJzO1xyXG4gIH1cclxuICBpZiAoY2hhcmFjdGVyRXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8U2VhcmNoQmFyXHJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNoVmFsdWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0UXVlcnkoc2VhcmNoVmFsdWUpO1xyXG4gICAgICAgICAgICBzZXRTZWFyY2hlZCh0cnVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Q2FyZHNEaXNwbGF5XHJcbiAgICAgICAgICBjaGFyYWN0ZXJzPXtzZWFyY2hSZXN1bHRzfVxyXG4gICAgICAgICAgY3VscHJpdD17Y3VscHJpdH1cclxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldENoYXJOYW1lKGUuY3VycmVudFRhcmdldC5uYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiK1wiKSk7XHJcbiAgICAgICAgICAgIHNldFJldmVhbCh0cnVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9Y2hhcmFjdGVyc2BcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBjaGFyYWN0ZXJzOiByZXN1bHQuZGF0YSxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==