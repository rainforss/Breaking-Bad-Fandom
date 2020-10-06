webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CardsDisplay.js":
/*!************************************!*\
  !*** ./components/CardsDisplay.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardsDisplay.module.css */ "./components/CardsDisplay.module.css");
/* harmony import */ var _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "E:\\breakingbad\\components\\CardsDisplay.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var CardsDisplay = function CardsDisplay(_ref) {
  var characters = _ref.characters;

  var Serialize = function Serialize(string) {
    return string.split(" ").join("_");
  };

  return __jsx("div", {
    className: _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardSection,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, characters.map(function (character) {
    return __jsx("div", {
      key: character.char_id,
      className: _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.flipCard,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.flipCardInner,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.flipCardFront,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }, __jsx("img", {
      className: _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardImage,
      src: character.img,
      alt: character.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.flipCardBack,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.charInfo,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardTitle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "https://breakingbad.fandom.com/wiki/".concat(Serialize(character.name)),
      target: "_blank",
      rel: "noopener noreferrer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 19
      }
    }, character.name)), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    }, "Birthday:", " ", character.birthday.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    })), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }, "Nickname: ", character.nickname), character.occupation.map(function (job) {
      return __jsx("div", {
        key: job,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 19
        }
      }, job);
    })), __jsx("div", {
      className: _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.charStatus,
      style: character.status === "Alive" ? {
        color: "green"
      } : {
        color: "yellow"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 15
      }
    }, character.status))));
  }));
};

_c = CardsDisplay;
/* harmony default export */ __webpack_exports__["default"] = (CardsDisplay);

var _c;

$RefreshReg$(_c, "CardsDisplay");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkc0Rpc3BsYXkuanMiXSwibmFtZXMiOlsiQ2FyZHNEaXNwbGF5IiwiY2hhcmFjdGVycyIsIlNlcmlhbGl6ZSIsInN0cmluZyIsInNwbGl0Iiwiam9pbiIsInN0eWxlcyIsImNhcmRTZWN0aW9uIiwibWFwIiwiY2hhcmFjdGVyIiwiY2hhcl9pZCIsImZsaXBDYXJkIiwiZmxpcENhcmRJbm5lciIsImZsaXBDYXJkRnJvbnQiLCJjYXJkSW1hZ2UiLCJpbWciLCJuYW1lIiwiZmxpcENhcmRCYWNrIiwiY2hhckluZm8iLCJjYXJkVGl0bGUiLCJiaXJ0aGRheSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInllYXIiLCJtb250aCIsImRheSIsIm5pY2tuYW1lIiwib2NjdXBhdGlvbiIsImpvYiIsImNoYXJTdGF0dXMiLCJzdGF0dXMiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFvQjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7O0FBQ3ZDLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE1BQUQ7QUFBQSxXQUFZQSxNQUFNLENBQUNDLEtBQVAsQ0FBYSxHQUFiLEVBQWtCQyxJQUFsQixDQUF1QixHQUF2QixDQUFaO0FBQUEsR0FBbEI7O0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBRUMsK0RBQU0sQ0FBQ0MsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTixVQUFVLENBQUNPLEdBQVgsQ0FBZSxVQUFDQyxTQUFEO0FBQUEsV0FDZDtBQUFLLFNBQUcsRUFBRUEsU0FBUyxDQUFDQyxPQUFwQjtBQUE2QixlQUFTLEVBQUVKLCtEQUFNLENBQUNLLFFBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBRUwsK0RBQU0sQ0FBQ00sYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFFTiwrREFBTSxDQUFDTyxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFDRSxlQUFTLEVBQUVQLCtEQUFNLENBQUNRLFNBRHBCO0FBRUUsU0FBRyxFQUFFTCxTQUFTLENBQUNNLEdBRmpCO0FBR0UsU0FBRyxFQUFFTixTQUFTLENBQUNPLElBSGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGLEVBUUU7QUFBSyxlQUFTLEVBQUVWLCtEQUFNLENBQUNXLFlBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBRVgsK0RBQU0sQ0FBQ1ksUUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFFWiwrREFBTSxDQUFDYSxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFDRSxVQUFJLGdEQUF5Q2pCLFNBQVMsQ0FDcERPLFNBQVMsQ0FBQ08sSUFEMEMsQ0FBbEQsQ0FETjtBQUlFLFlBQU0sRUFBQyxRQUpUO0FBS0UsU0FBRyxFQUFDLHFCQUxOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FPR1AsU0FBUyxDQUFDTyxJQVBiLENBREYsQ0FERixFQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQ1ksR0FEWixFQUVHUCxTQUFTLENBQUNXLFFBQVYsQ0FBbUJDLGtCQUFuQixDQUFzQyxPQUF0QyxFQUErQztBQUM5Q0MsVUFBSSxFQUFFLFNBRHdDO0FBRTlDQyxXQUFLLEVBQUUsTUFGdUM7QUFHOUNDLFNBQUcsRUFBRTtBQUh5QyxLQUEvQyxDQUZILENBWkYsRUFvQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBZ0JmLFNBQVMsQ0FBQ2dCLFFBQTFCLENBcEJGLEVBcUJHaEIsU0FBUyxDQUFDaUIsVUFBVixDQUFxQmxCLEdBQXJCLENBQXlCLFVBQUNtQixHQUFEO0FBQUEsYUFDeEI7QUFBSyxXQUFHLEVBQUVBLEdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFnQkEsR0FBaEIsQ0FEd0I7QUFBQSxLQUF6QixDQXJCSCxDQURGLEVBMkJFO0FBQ0UsZUFBUyxFQUFFckIsK0RBQU0sQ0FBQ3NCLFVBRHBCO0FBRUUsV0FBSyxFQUNIbkIsU0FBUyxDQUFDb0IsTUFBVixLQUFxQixPQUFyQixHQUNJO0FBQUVDLGFBQUssRUFBRTtBQUFULE9BREosR0FFSTtBQUFFQSxhQUFLLEVBQUU7QUFBVCxPQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FRR3JCLFNBQVMsQ0FBQ29CLE1BUmIsQ0EzQkYsQ0FSRixDQURGLENBRGM7QUFBQSxHQUFmLENBREgsQ0FERjtBQXVERCxDQXpERDs7S0FBTTdCLFk7QUEyRFNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjAwMDVlMThkYjJmMzExYjI3Njk1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NhcmRzRGlzcGxheS5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBDYXJkc0Rpc3BsYXkgPSAoeyBjaGFyYWN0ZXJzIH0pID0+IHtcclxuICBjb25zdCBTZXJpYWxpemUgPSAoc3RyaW5nKSA9PiBzdHJpbmcuc3BsaXQoXCIgXCIpLmpvaW4oXCJfXCIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRTZWN0aW9ufT5cclxuICAgICAge2NoYXJhY3RlcnMubWFwKChjaGFyYWN0ZXIpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17Y2hhcmFjdGVyLmNoYXJfaWR9IGNsYXNzTmFtZT17c3R5bGVzLmZsaXBDYXJkfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxpcENhcmRJbm5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxpcENhcmRGcm9udH0+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZEltYWdlfVxyXG4gICAgICAgICAgICAgICAgc3JjPXtjaGFyYWN0ZXIuaW1nfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtjaGFyYWN0ZXIubmFtZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGlwQ2FyZEJhY2t9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhckluZm99PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL2JyZWFraW5nYmFkLmZhbmRvbS5jb20vd2lraS8ke1NlcmlhbGl6ZShcclxuICAgICAgICAgICAgICAgICAgICAgIGNoYXJhY3Rlci5uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgKX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hhcmFjdGVyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgQmlydGhkYXk6e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICB7Y2hhcmFjdGVyLmJpcnRoZGF5LnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgICAgICAgICAgICAgICAgICBtb250aDogXCJsb25nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+Tmlja25hbWU6IHtjaGFyYWN0ZXIubmlja25hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7Y2hhcmFjdGVyLm9jY3VwYXRpb24ubWFwKChqb2IpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2pvYn0+e2pvYn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jaGFyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICBjaGFyYWN0ZXIuc3RhdHVzID09PSBcIkFsaXZlXCJcclxuICAgICAgICAgICAgICAgICAgICA/IHsgY29sb3I6IFwiZ3JlZW5cIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgOiB7IGNvbG9yOiBcInllbGxvd1wiIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y2hhcmFjdGVyLnN0YXR1c31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZHNEaXNwbGF5O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9