webpackHotUpdate_N_E("pages/spinoff",{

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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardsDisplay.module.css */ "./components/CardsDisplay.module.css");
/* harmony import */ var _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "E:\\breakingbad\\components\\CardsDisplay.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var CardsDisplay = function CardsDisplay(_ref) {
  var characters = _ref.characters,
      culprit = _ref.culprit,
      onClick = _ref.onClick;

  var Serialize = function Serialize(string) {
    return string.split(" ").join("_");
  };

  return __jsx("div", {
    className: _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cardSection,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, characters.map(function (character) {
    return __jsx("div", {
      key: character.char_id,
      className: _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.flipCard,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.flipCardInner,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.flipCardFront,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }
    }, __jsx("img", {
      className: _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cardImage,
      src: character.img,
      alt: character.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.flipCardBack,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.charInfo,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cardTitle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "https://breakingbad.fandom.com/wiki/".concat(Serialize(character.name)),
      target: "_blank",
      rel: "noopener noreferrer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 19
      }
    }, character.name)), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }
    }, "Birthday: ", character.birthday), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    }, "Nickname: ", character.nickname), character.occupation.map(function (job) {
      return __jsx("div", {
        key: job,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 19
        }
      }, job);
    })), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 15
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      variant: "outline-danger",
      onClick: onClick,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }, "Reveal Death Count"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
      variant: "danger",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }
    }, culprit && character.name === culprit.name ? culprit.deathCount : "")), __jsx("div", {
      className: _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.charStatus,
      style: character.status === "Alive" ? {
        color: "green"
      } : {
        color: "yellow"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkc0Rpc3BsYXkuanMiXSwibmFtZXMiOlsiQ2FyZHNEaXNwbGF5IiwiY2hhcmFjdGVycyIsImN1bHByaXQiLCJvbkNsaWNrIiwiU2VyaWFsaXplIiwic3RyaW5nIiwic3BsaXQiLCJqb2luIiwic3R5bGVzIiwiY2FyZFNlY3Rpb24iLCJtYXAiLCJjaGFyYWN0ZXIiLCJjaGFyX2lkIiwiZmxpcENhcmQiLCJmbGlwQ2FyZElubmVyIiwiZmxpcENhcmRGcm9udCIsImNhcmRJbWFnZSIsImltZyIsIm5hbWUiLCJmbGlwQ2FyZEJhY2siLCJjaGFySW5mbyIsImNhcmRUaXRsZSIsImJpcnRoZGF5Iiwibmlja25hbWUiLCJvY2N1cGF0aW9uIiwiam9iIiwiZGVhdGhDb3VudCIsImNoYXJTdGF0dXMiLCJzdGF0dXMiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFzQztBQUFBLE1BQW5DQyxVQUFtQyxRQUFuQ0EsVUFBbUM7QUFBQSxNQUF2QkMsT0FBdUIsUUFBdkJBLE9BQXVCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjOztBQUN6RCxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxNQUFEO0FBQUEsV0FBWUEsTUFBTSxDQUFDQyxLQUFQLENBQWEsR0FBYixFQUFrQkMsSUFBbEIsQ0FBdUIsR0FBdkIsQ0FBWjtBQUFBLEdBQWxCOztBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLCtEQUFNLENBQUNDLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1IsVUFBVSxDQUFDUyxHQUFYLENBQWUsVUFBQ0MsU0FBRDtBQUFBLFdBQ2Q7QUFBSyxTQUFHLEVBQUVBLFNBQVMsQ0FBQ0MsT0FBcEI7QUFBNkIsZUFBUyxFQUFFSiwrREFBTSxDQUFDSyxRQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUVMLCtEQUFNLENBQUNNLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBRU4sK0RBQU0sQ0FBQ08sYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsZUFBUyxFQUFFUCwrREFBTSxDQUFDUSxTQURwQjtBQUVFLFNBQUcsRUFBRUwsU0FBUyxDQUFDTSxHQUZqQjtBQUdFLFNBQUcsRUFBRU4sU0FBUyxDQUFDTyxJQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FERixFQVFFO0FBQUssZUFBUyxFQUFFViwrREFBTSxDQUFDVyxZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUVYLCtEQUFNLENBQUNZLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBRVosK0RBQU0sQ0FBQ2EsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxnREFBeUNqQixTQUFTLENBQ3BETyxTQUFTLENBQUNPLElBRDBDLENBQWxELENBRE47QUFJRSxZQUFNLEVBQUMsUUFKVDtBQUtFLFNBQUcsRUFBQyxxQkFMTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BT0dQLFNBQVMsQ0FBQ08sSUFQYixDQURGLENBREYsRUFZRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFnQlAsU0FBUyxDQUFDVyxRQUExQixDQVpGLEVBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBZ0JYLFNBQVMsQ0FBQ1ksUUFBMUIsQ0FiRixFQWNHWixTQUFTLENBQUNhLFVBQVYsQ0FBcUJkLEdBQXJCLENBQXlCLFVBQUNlLEdBQUQ7QUFBQSxhQUN4QjtBQUFLLFdBQUcsRUFBRUEsR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWdCQSxHQUFoQixDQUR3QjtBQUFBLEtBQXpCLENBZEgsQ0FERixFQW1CRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxzREFBRDtBQUFRLGFBQU8sRUFBQyxnQkFBaEI7QUFBaUMsYUFBTyxFQUFFdEIsT0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixFQUlFLE1BQUMscURBQUQ7QUFBTyxhQUFPLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dELE9BQU8sSUFBSVMsU0FBUyxDQUFDTyxJQUFWLEtBQW1CaEIsT0FBTyxDQUFDZ0IsSUFBdEMsR0FDR2hCLE9BQU8sQ0FBQ3dCLFVBRFgsR0FFRyxFQUhOLENBSkYsQ0FuQkYsRUE2QkU7QUFDRSxlQUFTLEVBQUVsQiwrREFBTSxDQUFDbUIsVUFEcEI7QUFFRSxXQUFLLEVBQ0hoQixTQUFTLENBQUNpQixNQUFWLEtBQXFCLE9BQXJCLEdBQ0k7QUFBRUMsYUFBSyxFQUFFO0FBQVQsT0FESixHQUVJO0FBQUVBLGFBQUssRUFBRTtBQUFULE9BTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVFHbEIsU0FBUyxDQUFDaUIsTUFSYixDQTdCRixDQVJGLENBREYsQ0FEYztBQUFBLEdBQWYsQ0FESCxDQURGO0FBeURELENBM0REOztLQUFNNUIsWTtBQTZEU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3Bpbm9mZi44NjExMGMxZDcwYTRhNjAwOTBkOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFkZ2UsIEJ1dHRvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9DYXJkc0Rpc3BsYXkubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgQ2FyZHNEaXNwbGF5ID0gKHsgY2hhcmFjdGVycywgY3VscHJpdCwgb25DbGljayB9KSA9PiB7XHJcbiAgY29uc3QgU2VyaWFsaXplID0gKHN0cmluZykgPT4gc3RyaW5nLnNwbGl0KFwiIFwiKS5qb2luKFwiX1wiKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkU2VjdGlvbn0+XHJcbiAgICAgIHtjaGFyYWN0ZXJzLm1hcCgoY2hhcmFjdGVyKSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2NoYXJhY3Rlci5jaGFyX2lkfSBjbGFzc05hbWU9e3N0eWxlcy5mbGlwQ2FyZH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsaXBDYXJkSW5uZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsaXBDYXJkRnJvbnR9PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRJbWFnZX1cclxuICAgICAgICAgICAgICAgIHNyYz17Y2hhcmFjdGVyLmltZ31cclxuICAgICAgICAgICAgICAgIGFsdD17Y2hhcmFjdGVyLm5hbWV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxpcENhcmRCYWNrfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXJJbmZvfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZFRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly9icmVha2luZ2JhZC5mYW5kb20uY29tL3dpa2kvJHtTZXJpYWxpemUoXHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXIubmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICl9YH1cclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoYXJhY3Rlci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+QmlydGhkYXk6IHtjaGFyYWN0ZXIuYmlydGhkYXl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2Pk5pY2tuYW1lOiB7Y2hhcmFjdGVyLm5pY2tuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAge2NoYXJhY3Rlci5vY2N1cGF0aW9uLm1hcCgoam9iKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtqb2J9Pntqb2J9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1kYW5nZXJcIiBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgUmV2ZWFsIERlYXRoIENvdW50XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCYWRnZSB2YXJpYW50PVwiZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtjdWxwcml0ICYmIGNoYXJhY3Rlci5uYW1lID09PSBjdWxwcml0Lm5hbWVcclxuICAgICAgICAgICAgICAgICAgICA/IGN1bHByaXQuZGVhdGhDb3VudFxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIn1cclxuICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2hhclN0YXR1c31cclxuICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyLnN0YXR1cyA9PT0gXCJBbGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyB7IGNvbG9yOiBcImdyZWVuXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgIDogeyBjb2xvcjogXCJ5ZWxsb3dcIiB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2NoYXJhY3Rlci5zdGF0dXN9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRzRGlzcGxheTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==