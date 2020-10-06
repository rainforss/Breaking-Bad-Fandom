webpackHotUpdate_N_E("pages/spinoff",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false,

/***/ "./pages/spinoff.js":
/*!**************************!*\
  !*** ./pages/spinoff.js ***!
  \**************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_CardsDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CardsDisplay */ "./components/CardsDisplay.js");
/* harmony import */ var _components_Construction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Construction */ "./components/Construction.js");
var _this = undefined,
    _jsxFileName = "E:\\breakingbad\\pages\\spinoff.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var SpinOff = function SpinOff(_ref) {
  _s();

  var characters = _ref.characters;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      reveal = _useState[0],
      setReveal = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      charName = _useState2[0],
      setCharName = _useState2[1];

  var fetcher = function fetcher(url) {
    return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url).then(function (res) {
      return res.data;
    });
  };

  var _useSWR = useSWR(reveal ? "".concat("https://www.breakingbadapi.com/api/", "death-count?name=").concat(charName) : null, fetcher),
      culprit = _useSWR.data,
      culpritError = _useSWR.error;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(_components_Construction__WEBPACK_IMPORTED_MODULE_4__["default"], {
    target: "Better Call Saul API",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), __jsx(_components_CardsDisplay__WEBPACK_IMPORTED_MODULE_3__["default"], {
    characters: characters,
    culprit: culprit,
    onClick: function onClick(e) {
      setCharName(e.currentTarget.name.split(" ").join("+"));
      setReveal(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  })));
};

_s(SpinOff, "sBRBaQobhFgVYveVxtYDfKPpLKE=", true);

_c = SpinOff;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (SpinOff);

var _c;

$RefreshReg$(_c, "SpinOff");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3Bpbm9mZi5qcyJdLCJuYW1lcyI6WyJTcGluT2ZmIiwiY2hhcmFjdGVycyIsInVzZVN0YXRlIiwicmV2ZWFsIiwic2V0UmV2ZWFsIiwiY2hhck5hbWUiLCJzZXRDaGFyTmFtZSIsImZldGNoZXIiLCJ1cmwiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwidXNlU1dSIiwicHJvY2VzcyIsImN1bHByaXQiLCJjdWxwcml0RXJyb3IiLCJlcnJvciIsImUiLCJjdXJyZW50VGFyZ2V0IiwibmFtZSIsInNwbGl0Iiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBb0I7QUFBQTs7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCOztBQUFBLGtCQUNOQyxzREFBUSxDQUFDLEtBQUQsQ0FERjtBQUFBLE1BQzNCQyxNQUQyQjtBQUFBLE1BQ25CQyxTQURtQjs7QUFBQSxtQkFFRkYsc0RBQVEsQ0FBQyxFQUFELENBRk47QUFBQSxNQUUzQkcsUUFGMkI7QUFBQSxNQUVqQkMsV0FGaUI7O0FBR2xDLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEdBQUQ7QUFBQSxXQUFTQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVGLEdBQVYsRUFBZUcsSUFBZixDQUFvQixVQUFDQyxHQUFEO0FBQUEsYUFBU0EsR0FBRyxDQUFDQyxJQUFiO0FBQUEsS0FBcEIsQ0FBVDtBQUFBLEdBQWhCOztBQUhrQyxnQkFJYUMsTUFBTSxDQUNuRFgsTUFBTSxhQUNDWSxxQ0FERCw4QkFDcURWLFFBRHJELElBRUYsSUFIK0MsRUFJbkRFLE9BSm1ELENBSm5CO0FBQUEsTUFJcEJTLE9BSm9CLFdBSTFCSCxJQUowQjtBQUFBLE1BSUpJLFlBSkksV0FJWEMsS0FKVzs7QUFVbEMsU0FDRSxtRUFDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQWMsVUFBTSxFQUFDLHNCQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLGdFQUFEO0FBQ0UsY0FBVSxFQUFFakIsVUFEZDtBQUVFLFdBQU8sRUFBRWUsT0FGWDtBQUdFLFdBQU8sRUFBRSxpQkFBQ0csQ0FBRCxFQUFPO0FBQ2RiLGlCQUFXLENBQUNhLENBQUMsQ0FBQ0MsYUFBRixDQUFnQkMsSUFBaEIsQ0FBcUJDLEtBQXJCLENBQTJCLEdBQTNCLEVBQWdDQyxJQUFoQyxDQUFxQyxHQUFyQyxDQUFELENBQVg7QUFDQW5CLGVBQVMsQ0FBQyxJQUFELENBQVQ7QUFDRCxLQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLENBREY7QUFlRCxDQXpCRDs7R0FBTUosTzs7S0FBQUEsTzs7QUEyQlNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwaW5vZmYuYzY5ODRiMWM5NDYxYmQ1Y2E0NDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmltcG9ydCBDYXJkc0Rpc3BsYXkgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZHNEaXNwbGF5XCI7XHJcbmltcG9ydCBDb25zdHJ1Y3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29uc3RydWN0aW9uXCI7XHJcblxyXG5jb25zdCBTcGluT2ZmID0gKHsgY2hhcmFjdGVycyB9KSA9PiB7XHJcbiAgY29uc3QgW3JldmVhbCwgc2V0UmV2ZWFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY2hhck5hbWUsIHNldENoYXJOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBheGlvcy5nZXQodXJsKS50aGVuKChyZXMpID0+IHJlcy5kYXRhKTtcclxuICBjb25zdCB7IGRhdGE6IGN1bHByaXQsIGVycm9yOiBjdWxwcml0RXJyb3IgfSA9IHVzZVNXUihcclxuICAgIHJldmVhbFxyXG4gICAgICA/IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfWRlYXRoLWNvdW50P25hbWU9JHtjaGFyTmFtZX1gXHJcbiAgICAgIDogbnVsbCxcclxuICAgIGZldGNoZXJcclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxDb25zdHJ1Y3Rpb24gdGFyZ2V0PVwiQmV0dGVyIENhbGwgU2F1bCBBUElcIiAvPlxyXG4gICAgICAgIDxDYXJkc0Rpc3BsYXlcclxuICAgICAgICAgIGNoYXJhY3RlcnM9e2NoYXJhY3RlcnN9XHJcbiAgICAgICAgICBjdWxwcml0PXtjdWxwcml0fVxyXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgc2V0Q2hhck5hbWUoZS5jdXJyZW50VGFyZ2V0Lm5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCIrXCIpKTtcclxuICAgICAgICAgICAgc2V0UmV2ZWFsKHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGluT2ZmO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfWNoYXJhY3RlcnM/Y2F0ZWdvcnk9YmV0dGVyK2NhbGwrc2F1bGBcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBjaGFyYWN0ZXJzOiByZXN1bHQuZGF0YSxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==