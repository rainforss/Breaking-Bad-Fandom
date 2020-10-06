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
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
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

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_3__["default"])(reveal ? "".concat("https://www.breakingbadapi.com/api/", "death-count?name=").concat(charName) : null, fetcher),
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
  return [swr__WEBPACK_IMPORTED_MODULE_3__["default"]];
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
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3Bpbm9mZi5qcyJdLCJuYW1lcyI6WyJTcGluT2ZmIiwiY2hhcmFjdGVycyIsInVzZVN0YXRlIiwicmV2ZWFsIiwic2V0UmV2ZWFsIiwiY2hhck5hbWUiLCJzZXRDaGFyTmFtZSIsImZldGNoZXIiLCJ1cmwiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwidXNlU1dSIiwicHJvY2VzcyIsImN1bHByaXQiLCJjdWxwcml0RXJyb3IiLCJlcnJvciIsImUiLCJjdXJyZW50VGFyZ2V0IiwibmFtZSIsInNwbGl0Iiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBb0I7QUFBQTs7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCOztBQUFBLGtCQUNOQyxzREFBUSxDQUFDLEtBQUQsQ0FERjtBQUFBLE1BQzNCQyxNQUQyQjtBQUFBLE1BQ25CQyxTQURtQjs7QUFBQSxtQkFFRkYsc0RBQVEsQ0FBQyxFQUFELENBRk47QUFBQSxNQUUzQkcsUUFGMkI7QUFBQSxNQUVqQkMsV0FGaUI7O0FBR2xDLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEdBQUQ7QUFBQSxXQUFTQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVGLEdBQVYsRUFBZUcsSUFBZixDQUFvQixVQUFDQyxHQUFEO0FBQUEsYUFBU0EsR0FBRyxDQUFDQyxJQUFiO0FBQUEsS0FBcEIsQ0FBVDtBQUFBLEdBQWhCOztBQUhrQyxnQkFJYUMsbURBQU0sQ0FDbkRYLE1BQU0sYUFDQ1kscUNBREQsOEJBQ3FEVixRQURyRCxJQUVGLElBSCtDLEVBSW5ERSxPQUptRCxDQUpuQjtBQUFBLE1BSXBCUyxPQUpvQixXQUkxQkgsSUFKMEI7QUFBQSxNQUlKSSxZQUpJLFdBSVhDLEtBSlc7O0FBVWxDLFNBQ0UsbUVBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFjLFVBQU0sRUFBQyxzQkFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxnRUFBRDtBQUNFLGNBQVUsRUFBRWpCLFVBRGQ7QUFFRSxXQUFPLEVBQUVlLE9BRlg7QUFHRSxXQUFPLEVBQUUsaUJBQUNHLENBQUQsRUFBTztBQUNkYixpQkFBVyxDQUFDYSxDQUFDLENBQUNDLGFBQUYsQ0FBZ0JDLElBQWhCLENBQXFCQyxLQUFyQixDQUEyQixHQUEzQixFQUFnQ0MsSUFBaEMsQ0FBcUMsR0FBckMsQ0FBRCxDQUFYO0FBQ0FuQixlQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0QsS0FOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixDQURGO0FBZUQsQ0F6QkQ7O0dBQU1KLE87VUFJMkNjLDJDOzs7S0FKM0NkLE87O0FBMkJTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zcGlub2ZmLjVkZjU3YmI2MTBjM2Q1MWJjMmZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xyXG5pbXBvcnQgQ2FyZHNEaXNwbGF5IGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRzRGlzcGxheVwiO1xyXG5pbXBvcnQgQ29uc3RydWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnN0cnVjdGlvblwiO1xyXG5cclxuY29uc3QgU3Bpbk9mZiA9ICh7IGNoYXJhY3RlcnMgfSkgPT4ge1xyXG4gIGNvbnN0IFtyZXZlYWwsIHNldFJldmVhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NoYXJOYW1lLCBzZXRDaGFyTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBmZXRjaGVyID0gKHVybCkgPT4gYXhpb3MuZ2V0KHVybCkudGhlbigocmVzKSA9PiByZXMuZGF0YSk7XHJcbiAgY29uc3QgeyBkYXRhOiBjdWxwcml0LCBlcnJvcjogY3VscHJpdEVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICByZXZlYWxcclxuICAgICAgPyBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1kZWF0aC1jb3VudD9uYW1lPSR7Y2hhck5hbWV9YFxyXG4gICAgICA6IG51bGwsXHJcbiAgICBmZXRjaGVyXHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8Q29uc3RydWN0aW9uIHRhcmdldD1cIkJldHRlciBDYWxsIFNhdWwgQVBJXCIgLz5cclxuICAgICAgICA8Q2FyZHNEaXNwbGF5XHJcbiAgICAgICAgICBjaGFyYWN0ZXJzPXtjaGFyYWN0ZXJzfVxyXG4gICAgICAgICAgY3VscHJpdD17Y3VscHJpdH1cclxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldENoYXJOYW1lKGUuY3VycmVudFRhcmdldC5uYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiK1wiKSk7XHJcbiAgICAgICAgICAgIHNldFJldmVhbCh0cnVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3Bpbk9mZjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1jaGFyYWN0ZXJzP2NhdGVnb3J5PWJldHRlcitjYWxsK3NhdWxgXHJcbiAgKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgY2hhcmFjdGVyczogcmVzdWx0LmRhdGEsXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=