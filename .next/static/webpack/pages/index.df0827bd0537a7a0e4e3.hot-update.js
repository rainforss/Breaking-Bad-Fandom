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
      culprit = _useSWR.culprit,
      error = _useSWR.error;

  console.log(charName);
  console.log(culprit);
  console.log(error);

  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_3__["default"])(searched ? "".concat("https://www.breakingbadapi.com/api/", "characters?name=").concat(query) : null, fetcher),
      data = _useSWR2.data,
      dataError = _useSWR2.dataError;

  if (data && searched) {
    searchResults = data;
  }

  if (dataError) {
    console.log("error");
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
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
      lineNumber: 41,
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
      lineNumber: 49,
      columnNumber: 9
    }
  })));
};

_s(Index, "SACcAo7QNL/1aruLK7WR3WF9Tyk=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjaGFyYWN0ZXJzIiwic2VhcmNoUmVzdWx0cyIsInVzZVN0YXRlIiwicXVlcnkiLCJzZXRRdWVyeSIsInNlYXJjaGVkIiwic2V0U2VhcmNoZWQiLCJyZXZlYWwiLCJzZXRSZXZlYWwiLCJjaGFyTmFtZSIsInNldENoYXJOYW1lIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsImZldGNoZXIiLCJ1cmwiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwidXNlU1dSIiwicHJvY2VzcyIsImN1bHByaXQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkYXRhRXJyb3IiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjdXJyZW50VGFyZ2V0IiwibmFtZSIsInNwbGl0Iiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFvQjtBQUFBOztBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDaEMsTUFBSUMsYUFBYSxHQUFHRCxVQUFwQjs7QUFEZ0Msa0JBRU5FLHNEQUFRLENBQUMsRUFBRCxDQUZGO0FBQUEsTUFFekJDLEtBRnlCO0FBQUEsTUFFbEJDLFFBRmtCOztBQUFBLG1CQUdBRixzREFBUSxDQUFDLEtBQUQsQ0FIUjtBQUFBLE1BR3pCRyxRQUh5QjtBQUFBLE1BR2ZDLFdBSGU7O0FBQUEsbUJBSUpKLHNEQUFRLENBQUMsS0FBRCxDQUpKO0FBQUEsTUFJekJLLE1BSnlCO0FBQUEsTUFJakJDLFNBSmlCOztBQUFBLG1CQUtBTixzREFBUSxDQUFDLEVBQUQsQ0FMUjtBQUFBLE1BS3pCTyxRQUx5QjtBQUFBLE1BS2ZDLFdBTGU7O0FBQUEsbUJBTU1SLHNEQUFRLENBQUMsRUFBRCxDQU5kO0FBQUEsTUFNekJTLFdBTnlCO0FBQUEsTUFNWkMsY0FOWTs7QUFPaEMsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRDtBQUFBLFdBQVNDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVUYsR0FBVixFQUFlRyxJQUFmLENBQW9CLFVBQUNDLEdBQUQ7QUFBQSxhQUFTQSxHQUFHLENBQUNDLElBQWI7QUFBQSxLQUFwQixDQUFUO0FBQUEsR0FBaEI7O0FBUGdDLGdCQVFMQyxtREFBTSxDQUMvQmIsTUFBTSxhQUNDYyxxQ0FERCw4QkFDcURaLFFBRHJELElBRUYsSUFIMkIsRUFJL0JJLE9BSitCLENBUkQ7QUFBQSxNQVF4QlMsT0FSd0IsV0FReEJBLE9BUndCO0FBQUEsTUFRZkMsS0FSZSxXQVFmQSxLQVJlOztBQWNoQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVloQixRQUFaO0FBQ0FlLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxPQUFaO0FBQ0FFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaOztBQWhCZ0MsaUJBaUJKSCxtREFBTSxDQUNoQ2YsUUFBUSxhQUNEZ0IscUNBREMsNkJBQ2tEbEIsS0FEbEQsSUFFSixJQUg0QixFQUloQ1UsT0FKZ0MsQ0FqQkY7QUFBQSxNQWlCeEJNLElBakJ3QixZQWlCeEJBLElBakJ3QjtBQUFBLE1BaUJsQk8sU0FqQmtCLFlBaUJsQkEsU0FqQmtCOztBQXVCaEMsTUFBSVAsSUFBSSxJQUFJZCxRQUFaLEVBQXNCO0FBQ3BCSixpQkFBYSxHQUFHa0IsSUFBaEI7QUFDRDs7QUFDRCxNQUFJTyxTQUFKLEVBQWU7QUFDYkYsV0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNEOztBQUVELFNBQ0UsbUVBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUNFLFNBQUssRUFBRWQsV0FEVDtBQUVFLFlBQVEsRUFBRSxrQkFBQ2dCLENBQUQ7QUFBQSxhQUFPZixjQUFjLENBQUNlLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXJCO0FBQUEsS0FGWjtBQUdFLFdBQU8sRUFBRSxtQkFBTTtBQUNiekIsY0FBUSxDQUFDTyxXQUFELENBQVI7QUFDQUwsaUJBQVcsQ0FBQyxJQUFELENBQVg7QUFDRCxLQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVNFLE1BQUMsZ0VBQUQ7QUFDRSxjQUFVLEVBQUVMLGFBRGQ7QUFFRSxXQUFPLEVBQUVxQixPQUZYO0FBR0UsV0FBTyxFQUFFLGlCQUFDSyxDQUFELEVBQU87QUFDZGpCLGlCQUFXLENBQUNpQixDQUFDLENBQUNHLGFBQUYsQ0FBZ0JDLElBQWhCLENBQXFCQyxLQUFyQixDQUEyQixHQUEzQixFQUFnQ0MsSUFBaEMsQ0FBcUMsR0FBckMsQ0FBRCxDQUFYO0FBQ0F6QixlQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0QsS0FOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsQ0FERixDQURGO0FBc0JELENBcEREOztHQUFNVCxLO1VBUXVCcUIsMkMsRUFTQ0EsMkM7OztLQWpCeEJyQixLOztBQXNEU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGYwODI3YmQwNTM3YTdhMGU0ZTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xyXG5pbXBvcnQgQ2FyZHNEaXNwbGF5IGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRzRGlzcGxheVwiO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuLi9jb21wb25lbnRzL1NlYXJjaEJhclwiO1xyXG5cclxuY29uc3QgSW5kZXggPSAoeyBjaGFyYWN0ZXJzIH0pID0+IHtcclxuICBsZXQgc2VhcmNoUmVzdWx0cyA9IGNoYXJhY3RlcnM7XHJcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc2VhcmNoZWQsIHNldFNlYXJjaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcmV2ZWFsLCBzZXRSZXZlYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjaGFyTmFtZSwgc2V0Q2hhck5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3NlYXJjaFZhbHVlLCBzZXRTZWFyY2hWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBmZXRjaGVyID0gKHVybCkgPT4gYXhpb3MuZ2V0KHVybCkudGhlbigocmVzKSA9PiByZXMuZGF0YSk7XHJcbiAgY29uc3QgeyBjdWxwcml0LCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgcmV2ZWFsXHJcbiAgICAgID8gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9ZGVhdGgtY291bnQ/bmFtZT0ke2NoYXJOYW1lfWBcclxuICAgICAgOiBudWxsLFxyXG4gICAgZmV0Y2hlclxyXG4gICk7XHJcbiAgY29uc29sZS5sb2coY2hhck5hbWUpO1xyXG4gIGNvbnNvbGUubG9nKGN1bHByaXQpO1xyXG4gIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICBjb25zdCB7IGRhdGEsIGRhdGFFcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgc2VhcmNoZWRcclxuICAgICAgPyBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1jaGFyYWN0ZXJzP25hbWU9JHtxdWVyeX1gXHJcbiAgICAgIDogbnVsbCxcclxuICAgIGZldGNoZXJcclxuICApO1xyXG4gIGlmIChkYXRhICYmIHNlYXJjaGVkKSB7XHJcbiAgICBzZWFyY2hSZXN1bHRzID0gZGF0YTtcclxuICB9XHJcbiAgaWYgKGRhdGFFcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coXCJlcnJvclwiKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxTZWFyY2hCYXJcclxuICAgICAgICAgIHZhbHVlPXtzZWFyY2hWYWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoVmFsdWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRRdWVyeShzZWFyY2hWYWx1ZSk7XHJcbiAgICAgICAgICAgIHNldFNlYXJjaGVkKHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxDYXJkc0Rpc3BsYXlcclxuICAgICAgICAgIGNoYXJhY3RlcnM9e3NlYXJjaFJlc3VsdHN9XHJcbiAgICAgICAgICBjdWxwcml0PXtjdWxwcml0fVxyXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgc2V0Q2hhck5hbWUoZS5jdXJyZW50VGFyZ2V0Lm5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCIrXCIpKTtcclxuICAgICAgICAgICAgc2V0UmV2ZWFsKHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1jaGFyYWN0ZXJzYFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGNoYXJhY3RlcnM6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9