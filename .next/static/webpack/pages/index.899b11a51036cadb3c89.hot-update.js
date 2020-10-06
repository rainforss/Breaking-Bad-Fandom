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

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_3__["default"])(reveal ? "".concat("https://www.breakingbadapi.com/api/", "death-count?name=").concat(charName) : null, fetcher),
      culprit = _useSWR.data,
      culpritError = _useSWR.error;

  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_3__["default"])(searched ? "".concat("https://www.breakingbadapi.com/api/", "characters?name=").concat(query) : null, fetcher),
      queriedCharacters = _useSWR2.data,
      characterError = _useSWR2.error;

  if (queriedCharacters && searched) {
    searchResults = queriedCharacters;
  }

  if (characterError) {
    console.log("error");
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
      lineNumber: 38,
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
      lineNumber: 46,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjaGFyYWN0ZXJzIiwic2VhcmNoUmVzdWx0cyIsInVzZVN0YXRlIiwicXVlcnkiLCJzZXRRdWVyeSIsInNlYXJjaGVkIiwic2V0U2VhcmNoZWQiLCJyZXZlYWwiLCJzZXRSZXZlYWwiLCJjaGFyTmFtZSIsInNldENoYXJOYW1lIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsImZldGNoZXIiLCJ1cmwiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwidXNlU1dSIiwicHJvY2VzcyIsImN1bHByaXQiLCJjdWxwcml0RXJyb3IiLCJlcnJvciIsInF1ZXJpZWRDaGFyYWN0ZXJzIiwiY2hhcmFjdGVyRXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY3VycmVudFRhcmdldCIsIm5hbWUiLCJzcGxpdCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBb0I7QUFBQTs7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCO0FBQ2hDLE1BQUlDLGFBQWEsR0FBR0QsVUFBcEI7O0FBRGdDLGtCQUVORSxzREFBUSxDQUFDLEVBQUQsQ0FGRjtBQUFBLE1BRXpCQyxLQUZ5QjtBQUFBLE1BRWxCQyxRQUZrQjs7QUFBQSxtQkFHQUYsc0RBQVEsQ0FBQyxLQUFELENBSFI7QUFBQSxNQUd6QkcsUUFIeUI7QUFBQSxNQUdmQyxXQUhlOztBQUFBLG1CQUlKSixzREFBUSxDQUFDLEtBQUQsQ0FKSjtBQUFBLE1BSXpCSyxNQUp5QjtBQUFBLE1BSWpCQyxTQUppQjs7QUFBQSxtQkFLQU4sc0RBQVEsQ0FBQyxFQUFELENBTFI7QUFBQSxNQUt6Qk8sUUFMeUI7QUFBQSxNQUtmQyxXQUxlOztBQUFBLG1CQU1NUixzREFBUSxDQUFDLEVBQUQsQ0FOZDtBQUFBLE1BTXpCUyxXQU55QjtBQUFBLE1BTVpDLGNBTlk7O0FBT2hDLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEdBQUQ7QUFBQSxXQUFTQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVGLEdBQVYsRUFBZUcsSUFBZixDQUFvQixVQUFDQyxHQUFEO0FBQUEsYUFBU0EsR0FBRyxDQUFDQyxJQUFiO0FBQUEsS0FBcEIsQ0FBVDtBQUFBLEdBQWhCOztBQVBnQyxnQkFRZUMsbURBQU0sQ0FDbkRiLE1BQU0sYUFDQ2MscUNBREQsOEJBQ3FEWixRQURyRCxJQUVGLElBSCtDLEVBSW5ESSxPQUptRCxDQVJyQjtBQUFBLE1BUWxCUyxPQVJrQixXQVF4QkgsSUFSd0I7QUFBQSxNQVFGSSxZQVJFLFdBUVRDLEtBUlM7O0FBQUEsaUJBYzJCSixtREFBTSxDQUMvRGYsUUFBUSxhQUNEZ0IscUNBREMsNkJBQ2tEbEIsS0FEbEQsSUFFSixJQUgyRCxFQUkvRFUsT0FKK0QsQ0FkakM7QUFBQSxNQWNsQlksaUJBZGtCLFlBY3hCTixJQWR3QjtBQUFBLE1BY1FPLGNBZFIsWUFjQ0YsS0FkRDs7QUFvQmhDLE1BQUlDLGlCQUFpQixJQUFJcEIsUUFBekIsRUFBbUM7QUFDakNKLGlCQUFhLEdBQUd3QixpQkFBaEI7QUFDRDs7QUFDRCxNQUFJQyxjQUFKLEVBQW9CO0FBQ2xCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0Q7O0FBRUQsU0FDRSxtRUFDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQ0UsU0FBSyxFQUFFakIsV0FEVDtBQUVFLFlBQVEsRUFBRSxrQkFBQ2tCLENBQUQ7QUFBQSxhQUFPakIsY0FBYyxDQUFDaUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBckI7QUFBQSxLQUZaO0FBR0UsV0FBTyxFQUFFLG1CQUFNO0FBQ2IzQixjQUFRLENBQUNPLFdBQUQsQ0FBUjtBQUNBTCxpQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNELEtBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBU0UsTUFBQyxnRUFBRDtBQUNFLGNBQVUsRUFBRUwsYUFEZDtBQUVFLFdBQU8sRUFBRXFCLE9BRlg7QUFHRSxXQUFPLEVBQUUsaUJBQUNPLENBQUQsRUFBTztBQUNkbkIsaUJBQVcsQ0FBQ21CLENBQUMsQ0FBQ0csYUFBRixDQUFnQkMsSUFBaEIsQ0FBcUJDLEtBQXJCLENBQTJCLEdBQTNCLEVBQWdDQyxJQUFoQyxDQUFxQyxHQUFyQyxDQUFELENBQVg7QUFDQTNCLGVBQVMsQ0FBQyxJQUFELENBQVQ7QUFDRCxLQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQURGLENBREY7QUFzQkQsQ0FqREQ7O0dBQU1ULEs7VUFRMkNxQiwyQyxFQU1ZQSwyQzs7O0tBZHZEckIsSzs7QUFtRFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg5OWIxMWE1MTAzNmNhZGIzYzg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuaW1wb3J0IENhcmRzRGlzcGxheSBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkc0Rpc3BsYXlcIjtcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2hCYXJcIjtcclxuXHJcbmNvbnN0IEluZGV4ID0gKHsgY2hhcmFjdGVycyB9KSA9PiB7XHJcbiAgbGV0IHNlYXJjaFJlc3VsdHMgPSBjaGFyYWN0ZXJzO1xyXG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3NlYXJjaGVkLCBzZXRTZWFyY2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3JldmVhbCwgc2V0UmV2ZWFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY2hhck5hbWUsIHNldENoYXJOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzZWFyY2hWYWx1ZSwgc2V0U2VhcmNoVmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGF4aW9zLmdldCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpO1xyXG4gIGNvbnN0IHsgZGF0YTogY3VscHJpdCwgZXJyb3I6IGN1bHByaXRFcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgcmV2ZWFsXHJcbiAgICAgID8gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9ZGVhdGgtY291bnQ/bmFtZT0ke2NoYXJOYW1lfWBcclxuICAgICAgOiBudWxsLFxyXG4gICAgZmV0Y2hlclxyXG4gICk7XHJcbiAgY29uc3QgeyBkYXRhOiBxdWVyaWVkQ2hhcmFjdGVycywgZXJyb3I6IGNoYXJhY3RlckVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBzZWFyY2hlZFxyXG4gICAgICA/IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfWNoYXJhY3RlcnM/bmFtZT0ke3F1ZXJ5fWBcclxuICAgICAgOiBudWxsLFxyXG4gICAgZmV0Y2hlclxyXG4gICk7XHJcbiAgaWYgKHF1ZXJpZWRDaGFyYWN0ZXJzICYmIHNlYXJjaGVkKSB7XHJcbiAgICBzZWFyY2hSZXN1bHRzID0gcXVlcmllZENoYXJhY3RlcnM7XHJcbiAgfVxyXG4gIGlmIChjaGFyYWN0ZXJFcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coXCJlcnJvclwiKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxTZWFyY2hCYXJcclxuICAgICAgICAgIHZhbHVlPXtzZWFyY2hWYWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoVmFsdWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRRdWVyeShzZWFyY2hWYWx1ZSk7XHJcbiAgICAgICAgICAgIHNldFNlYXJjaGVkKHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxDYXJkc0Rpc3BsYXlcclxuICAgICAgICAgIGNoYXJhY3RlcnM9e3NlYXJjaFJlc3VsdHN9XHJcbiAgICAgICAgICBjdWxwcml0PXtjdWxwcml0fVxyXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgc2V0Q2hhck5hbWUoZS5jdXJyZW50VGFyZ2V0Lm5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCIrXCIpKTtcclxuICAgICAgICAgICAgc2V0UmV2ZWFsKHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1jaGFyYWN0ZXJzYFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGNoYXJhY3RlcnM6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9