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
      className: _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.deathCountButton,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 15
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      variant: "outline-danger",
      name: character.name,
      onClick: onClick,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }, culprit ? culprit.deathCount : "ape"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
      variant: "danger",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }
    }, culprit ? culprit.deathCount : "")), __jsx("div", {
      className: _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.charStatus,
      style: character.status === "Alive" ? {
        color: "green"
      } : {
        color: "yellow"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkc0Rpc3BsYXkuanMiXSwibmFtZXMiOlsiQ2FyZHNEaXNwbGF5IiwiY2hhcmFjdGVycyIsImN1bHByaXQiLCJvbkNsaWNrIiwiU2VyaWFsaXplIiwic3RyaW5nIiwic3BsaXQiLCJqb2luIiwic3R5bGVzIiwiY2FyZFNlY3Rpb24iLCJtYXAiLCJjaGFyYWN0ZXIiLCJjaGFyX2lkIiwiZmxpcENhcmQiLCJmbGlwQ2FyZElubmVyIiwiZmxpcENhcmRGcm9udCIsImNhcmRJbWFnZSIsImltZyIsIm5hbWUiLCJmbGlwQ2FyZEJhY2siLCJjaGFySW5mbyIsImNhcmRUaXRsZSIsImJpcnRoZGF5Iiwibmlja25hbWUiLCJvY2N1cGF0aW9uIiwiam9iIiwiZGVhdGhDb3VudEJ1dHRvbiIsImRlYXRoQ291bnQiLCJjaGFyU3RhdHVzIiwic3RhdHVzIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBc0M7QUFBQSxNQUFuQ0MsVUFBbUMsUUFBbkNBLFVBQW1DO0FBQUEsTUFBdkJDLE9BQXVCLFFBQXZCQSxPQUF1QjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFDekQsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsTUFBRDtBQUFBLFdBQVlBLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhLEdBQWIsRUFBa0JDLElBQWxCLENBQXVCLEdBQXZCLENBQVo7QUFBQSxHQUFsQjs7QUFDQSxTQUNFO0FBQUssYUFBUyxFQUFFQywrREFBTSxDQUFDQyxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dSLFVBQVUsQ0FBQ1MsR0FBWCxDQUFlLFVBQUNDLFNBQUQ7QUFBQSxXQUNkO0FBQUssU0FBRyxFQUFFQSxTQUFTLENBQUNDLE9BQXBCO0FBQTZCLGVBQVMsRUFBRUosK0RBQU0sQ0FBQ0ssUUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFFTCwrREFBTSxDQUFDTSxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUVOLCtEQUFNLENBQUNPLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLGVBQVMsRUFBRVAsK0RBQU0sQ0FBQ1EsU0FEcEI7QUFFRSxTQUFHLEVBQUVMLFNBQVMsQ0FBQ00sR0FGakI7QUFHRSxTQUFHLEVBQUVOLFNBQVMsQ0FBQ08sSUFIakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREYsRUFRRTtBQUFLLGVBQVMsRUFBRVYsK0RBQU0sQ0FBQ1csWUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFFWCwrREFBTSxDQUFDWSxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUVaLCtEQUFNLENBQUNhLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksZ0RBQXlDakIsU0FBUyxDQUNwRE8sU0FBUyxDQUFDTyxJQUQwQyxDQUFsRCxDQUROO0FBSUUsWUFBTSxFQUFDLFFBSlQ7QUFLRSxTQUFHLEVBQUMscUJBTE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU9HUCxTQUFTLENBQUNPLElBUGIsQ0FERixDQURGLEVBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBZ0JQLFNBQVMsQ0FBQ1csUUFBMUIsQ0FaRixFQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWdCWCxTQUFTLENBQUNZLFFBQTFCLENBYkYsRUFjR1osU0FBUyxDQUFDYSxVQUFWLENBQXFCZCxHQUFyQixDQUF5QixVQUFDZSxHQUFEO0FBQUEsYUFDeEI7QUFBSyxXQUFHLEVBQUVBLEdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFnQkEsR0FBaEIsQ0FEd0I7QUFBQSxLQUF6QixDQWRILENBREYsRUFtQkU7QUFBSyxlQUFTLEVBQUVqQiwrREFBTSxDQUFDa0IsZ0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHNEQUFEO0FBQ0UsYUFBTyxFQUFDLGdCQURWO0FBRUUsVUFBSSxFQUFFZixTQUFTLENBQUNPLElBRmxCO0FBR0UsYUFBTyxFQUFFZixPQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FLR0QsT0FBTyxHQUFHQSxPQUFPLENBQUN5QixVQUFYLEdBQXdCLEtBTGxDLENBREYsRUFRRSxNQUFDLHFEQUFEO0FBQU8sYUFBTyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHekIsT0FBTyxHQUFHQSxPQUFPLENBQUN5QixVQUFYLEdBQXdCLEVBRGxDLENBUkYsQ0FuQkYsRUErQkU7QUFDRSxlQUFTLEVBQUVuQiwrREFBTSxDQUFDb0IsVUFEcEI7QUFFRSxXQUFLLEVBQ0hqQixTQUFTLENBQUNrQixNQUFWLEtBQXFCLE9BQXJCLEdBQ0k7QUFBRUMsYUFBSyxFQUFFO0FBQVQsT0FESixHQUVJO0FBQUVBLGFBQUssRUFBRTtBQUFULE9BTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVFHbkIsU0FBUyxDQUFDa0IsTUFSYixDQS9CRixDQVJGLENBREYsQ0FEYztBQUFBLEdBQWYsQ0FESCxDQURGO0FBMkRELENBN0REOztLQUFNN0IsWTtBQStEU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjQ3ZGM4NzExMmExNDEyNzBlZDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhZGdlLCBCdXR0b24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ2FyZHNEaXNwbGF5Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IENhcmRzRGlzcGxheSA9ICh7IGNoYXJhY3RlcnMsIGN1bHByaXQsIG9uQ2xpY2sgfSkgPT4ge1xyXG4gIGNvbnN0IFNlcmlhbGl6ZSA9IChzdHJpbmcpID0+IHN0cmluZy5zcGxpdChcIiBcIikuam9pbihcIl9cIik7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZFNlY3Rpb259PlxyXG4gICAgICB7Y2hhcmFjdGVycy5tYXAoKGNoYXJhY3RlcikgPT4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtjaGFyYWN0ZXIuY2hhcl9pZH0gY2xhc3NOYW1lPXtzdHlsZXMuZmxpcENhcmR9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGlwQ2FyZElubmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGlwQ2FyZEZyb250fT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBzcmM9e2NoYXJhY3Rlci5pbWd9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e2NoYXJhY3Rlci5uYW1lfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsaXBDYXJkQmFja30+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFySW5mb30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRUaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vYnJlYWtpbmdiYWQuZmFuZG9tLmNvbS93aWtpLyR7U2VyaWFsaXplKFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyLm5hbWVcclxuICAgICAgICAgICAgICAgICAgICApfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGFyYWN0ZXIubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PkJpcnRoZGF5OiB7Y2hhcmFjdGVyLmJpcnRoZGF5fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5OaWNrbmFtZToge2NoYXJhY3Rlci5uaWNrbmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtjaGFyYWN0ZXIub2NjdXBhdGlvbi5tYXAoKGpvYikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17am9ifT57am9ifTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZWF0aENvdW50QnV0dG9ufT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmUtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT17Y2hhcmFjdGVyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtjdWxwcml0ID8gY3VscHJpdC5kZWF0aENvdW50IDogXCJhcGVcIn1cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJhZGdlIHZhcmlhbnQ9XCJkYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgICAge2N1bHByaXQgPyBjdWxwcml0LmRlYXRoQ291bnQgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jaGFyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICBjaGFyYWN0ZXIuc3RhdHVzID09PSBcIkFsaXZlXCJcclxuICAgICAgICAgICAgICAgICAgICA/IHsgY29sb3I6IFwiZ3JlZW5cIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgOiB7IGNvbG9yOiBcInllbGxvd1wiIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y2hhcmFjdGVyLnN0YXR1c31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZHNEaXNwbGF5O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9