webpackHotUpdate_N_E("pages/spinoff",{

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
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next */ "next");
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_CardsDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CardsDisplay */ "./components/CardsDisplay.js");
/* harmony import */ var _components_Construction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Construction */ "./components/Construction.js");
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

  var _useSWR = Object(next__WEBPACK_IMPORTED_MODULE_3__["useSWR"])(reveal ? "".concat("https://www.breakingbadapi.com/api/", "death-count?name=").concat(charName) : null, fetcher),
      culprit = _useSWR.data,
      culpritError = _useSWR.error;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(_components_Construction__WEBPACK_IMPORTED_MODULE_5__["default"], {
    target: "Better Call Saul API",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), __jsx(_components_CardsDisplay__WEBPACK_IMPORTED_MODULE_4__["default"], {
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

_s(SpinOff, "sBRBaQobhFgVYveVxtYDfKPpLKE=", false, function () {
  return [next__WEBPACK_IMPORTED_MODULE_3__["useSWR"]];
});

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

/***/ }),

/***/ "next":
/*!***********************!*\
  !*** external "next" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = next;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3Bpbm9mZi5qcyIsIndlYnBhY2s6Ly9fTl9FL2V4dGVybmFsIFwibmV4dFwiIl0sIm5hbWVzIjpbIlNwaW5PZmYiLCJjaGFyYWN0ZXJzIiwidXNlU3RhdGUiLCJyZXZlYWwiLCJzZXRSZXZlYWwiLCJjaGFyTmFtZSIsInNldENoYXJOYW1lIiwiZmV0Y2hlciIsInVybCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJ1c2VTV1IiLCJwcm9jZXNzIiwiY3VscHJpdCIsImN1bHByaXRFcnJvciIsImVycm9yIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJuYW1lIiwic3BsaXQiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBb0I7QUFBQTs7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCOztBQUFBLGtCQUNOQyxzREFBUSxDQUFDLEtBQUQsQ0FERjtBQUFBLE1BQzNCQyxNQUQyQjtBQUFBLE1BQ25CQyxTQURtQjs7QUFBQSxtQkFFRkYsc0RBQVEsQ0FBQyxFQUFELENBRk47QUFBQSxNQUUzQkcsUUFGMkI7QUFBQSxNQUVqQkMsV0FGaUI7O0FBR2xDLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEdBQUQ7QUFBQSxXQUFTQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVGLEdBQVYsRUFBZUcsSUFBZixDQUFvQixVQUFDQyxHQUFEO0FBQUEsYUFBU0EsR0FBRyxDQUFDQyxJQUFiO0FBQUEsS0FBcEIsQ0FBVDtBQUFBLEdBQWhCOztBQUhrQyxnQkFJYUMsbURBQU0sQ0FDbkRYLE1BQU0sYUFDQ1kscUNBREQsOEJBQ3FEVixRQURyRCxJQUVGLElBSCtDLEVBSW5ERSxPQUptRCxDQUpuQjtBQUFBLE1BSXBCUyxPQUpvQixXQUkxQkgsSUFKMEI7QUFBQSxNQUlKSSxZQUpJLFdBSVhDLEtBSlc7O0FBVWxDLFNBQ0UsbUVBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFjLFVBQU0sRUFBQyxzQkFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxnRUFBRDtBQUNFLGNBQVUsRUFBRWpCLFVBRGQ7QUFFRSxXQUFPLEVBQUVlLE9BRlg7QUFHRSxXQUFPLEVBQUUsaUJBQUNHLENBQUQsRUFBTztBQUNkYixpQkFBVyxDQUFDYSxDQUFDLENBQUNDLGFBQUYsQ0FBZ0JDLElBQWhCLENBQXFCQyxLQUFyQixDQUEyQixHQUEzQixFQUFnQ0MsSUFBaEMsQ0FBcUMsR0FBckMsQ0FBRCxDQUFYO0FBQ0FuQixlQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0QsS0FOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixDQURGO0FBZUQsQ0F6QkQ7O0dBQU1KLE87VUFJMkNjLDJDOzs7S0FKM0NkLE87O0FBMkJTQSxzRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBLHNCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwaW5vZmYuYTFjNGYyMzM1NDk2Y2Y5YTE2NGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlU1dSIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IENhcmRzRGlzcGxheSBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkc0Rpc3BsYXlcIjtcclxuaW1wb3J0IENvbnN0cnVjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9Db25zdHJ1Y3Rpb25cIjtcclxuXHJcbmNvbnN0IFNwaW5PZmYgPSAoeyBjaGFyYWN0ZXJzIH0pID0+IHtcclxuICBjb25zdCBbcmV2ZWFsLCBzZXRSZXZlYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjaGFyTmFtZSwgc2V0Q2hhck5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGF4aW9zLmdldCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpO1xyXG4gIGNvbnN0IHsgZGF0YTogY3VscHJpdCwgZXJyb3I6IGN1bHByaXRFcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgcmV2ZWFsXHJcbiAgICAgID8gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9ZGVhdGgtY291bnQ/bmFtZT0ke2NoYXJOYW1lfWBcclxuICAgICAgOiBudWxsLFxyXG4gICAgZmV0Y2hlclxyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPENvbnN0cnVjdGlvbiB0YXJnZXQ9XCJCZXR0ZXIgQ2FsbCBTYXVsIEFQSVwiIC8+XHJcbiAgICAgICAgPENhcmRzRGlzcGxheVxyXG4gICAgICAgICAgY2hhcmFjdGVycz17Y2hhcmFjdGVyc31cclxuICAgICAgICAgIGN1bHByaXQ9e2N1bHByaXR9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRDaGFyTmFtZShlLmN1cnJlbnRUYXJnZXQubmFtZS5zcGxpdChcIiBcIikuam9pbihcIitcIikpO1xyXG4gICAgICAgICAgICBzZXRSZXZlYWwodHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwaW5PZmY7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9Y2hhcmFjdGVycz9jYXRlZ29yeT1iZXR0ZXIrY2FsbCtzYXVsYFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGNoYXJhY3RlcnM6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IG5leHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==