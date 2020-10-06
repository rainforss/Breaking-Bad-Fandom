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
      className: _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.deathCountButton,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkc0Rpc3BsYXkuanMiXSwibmFtZXMiOlsiQ2FyZHNEaXNwbGF5IiwiY2hhcmFjdGVycyIsImN1bHByaXQiLCJvbkNsaWNrIiwiU2VyaWFsaXplIiwic3RyaW5nIiwic3BsaXQiLCJqb2luIiwic3R5bGVzIiwiY2FyZFNlY3Rpb24iLCJtYXAiLCJjaGFyYWN0ZXIiLCJjaGFyX2lkIiwiZmxpcENhcmQiLCJmbGlwQ2FyZElubmVyIiwiZmxpcENhcmRGcm9udCIsImNhcmRJbWFnZSIsImltZyIsIm5hbWUiLCJmbGlwQ2FyZEJhY2siLCJjaGFySW5mbyIsImNhcmRUaXRsZSIsImJpcnRoZGF5Iiwibmlja25hbWUiLCJvY2N1cGF0aW9uIiwiam9iIiwiZGVhdGhDb3VudEJ1dHRvbiIsImRlYXRoQ291bnQiLCJjaGFyU3RhdHVzIiwic3RhdHVzIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBc0M7QUFBQSxNQUFuQ0MsVUFBbUMsUUFBbkNBLFVBQW1DO0FBQUEsTUFBdkJDLE9BQXVCLFFBQXZCQSxPQUF1QjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFDekQsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsTUFBRDtBQUFBLFdBQVlBLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhLEdBQWIsRUFBa0JDLElBQWxCLENBQXVCLEdBQXZCLENBQVo7QUFBQSxHQUFsQjs7QUFDQSxTQUNFO0FBQUssYUFBUyxFQUFFQywrREFBTSxDQUFDQyxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dSLFVBQVUsQ0FBQ1MsR0FBWCxDQUFlLFVBQUNDLFNBQUQ7QUFBQSxXQUNkO0FBQUssU0FBRyxFQUFFQSxTQUFTLENBQUNDLE9BQXBCO0FBQTZCLGVBQVMsRUFBRUosK0RBQU0sQ0FBQ0ssUUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFFTCwrREFBTSxDQUFDTSxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUVOLCtEQUFNLENBQUNPLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLGVBQVMsRUFBRVAsK0RBQU0sQ0FBQ1EsU0FEcEI7QUFFRSxTQUFHLEVBQUVMLFNBQVMsQ0FBQ00sR0FGakI7QUFHRSxTQUFHLEVBQUVOLFNBQVMsQ0FBQ08sSUFIakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREYsRUFRRTtBQUFLLGVBQVMsRUFBRVYsK0RBQU0sQ0FBQ1csWUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFFWCwrREFBTSxDQUFDWSxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUVaLCtEQUFNLENBQUNhLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksZ0RBQXlDakIsU0FBUyxDQUNwRE8sU0FBUyxDQUFDTyxJQUQwQyxDQUFsRCxDQUROO0FBSUUsWUFBTSxFQUFDLFFBSlQ7QUFLRSxTQUFHLEVBQUMscUJBTE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU9HUCxTQUFTLENBQUNPLElBUGIsQ0FERixDQURGLEVBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBZ0JQLFNBQVMsQ0FBQ1csUUFBMUIsQ0FaRixFQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWdCWCxTQUFTLENBQUNZLFFBQTFCLENBYkYsRUFjR1osU0FBUyxDQUFDYSxVQUFWLENBQXFCZCxHQUFyQixDQUF5QixVQUFDZSxHQUFEO0FBQUEsYUFDeEI7QUFBSyxXQUFHLEVBQUVBLEdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFnQkEsR0FBaEIsQ0FEd0I7QUFBQSxLQUF6QixDQWRILENBREYsRUFtQkU7QUFBSyxlQUFTLEVBQUVqQiwrREFBTSxDQUFDa0IsZ0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHNEQUFEO0FBQVEsYUFBTyxFQUFDLGdCQUFoQjtBQUFpQyxhQUFPLEVBQUV2QixPQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURGLEVBSUUsTUFBQyxxREFBRDtBQUFPLGFBQU8sRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0QsT0FBTyxJQUFJUyxTQUFTLENBQUNPLElBQVYsS0FBbUJoQixPQUFPLENBQUNnQixJQUF0QyxHQUNHaEIsT0FBTyxDQUFDeUIsVUFEWCxHQUVHLEVBSE4sQ0FKRixDQW5CRixFQTZCRTtBQUNFLGVBQVMsRUFBRW5CLCtEQUFNLENBQUNvQixVQURwQjtBQUVFLFdBQUssRUFDSGpCLFNBQVMsQ0FBQ2tCLE1BQVYsS0FBcUIsT0FBckIsR0FDSTtBQUFFQyxhQUFLLEVBQUU7QUFBVCxPQURKLEdBRUk7QUFBRUEsYUFBSyxFQUFFO0FBQVQsT0FMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BUUduQixTQUFTLENBQUNrQixNQVJiLENBN0JGLENBUkYsQ0FERixDQURjO0FBQUEsR0FBZixDQURILENBREY7QUF5REQsQ0EzREQ7O0tBQU03QixZO0FBNkRTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zcGlub2ZmLjUxMDcyZTcxOGI2MTJkMzA1MjE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYWRnZSwgQnV0dG9uIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NhcmRzRGlzcGxheS5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBDYXJkc0Rpc3BsYXkgPSAoeyBjaGFyYWN0ZXJzLCBjdWxwcml0LCBvbkNsaWNrIH0pID0+IHtcclxuICBjb25zdCBTZXJpYWxpemUgPSAoc3RyaW5nKSA9PiBzdHJpbmcuc3BsaXQoXCIgXCIpLmpvaW4oXCJfXCIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRTZWN0aW9ufT5cclxuICAgICAge2NoYXJhY3RlcnMubWFwKChjaGFyYWN0ZXIpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17Y2hhcmFjdGVyLmNoYXJfaWR9IGNsYXNzTmFtZT17c3R5bGVzLmZsaXBDYXJkfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxpcENhcmRJbm5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxpcENhcmRGcm9udH0+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZEltYWdlfVxyXG4gICAgICAgICAgICAgICAgc3JjPXtjaGFyYWN0ZXIuaW1nfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtjaGFyYWN0ZXIubmFtZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGlwQ2FyZEJhY2t9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhckluZm99PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL2JyZWFraW5nYmFkLmZhbmRvbS5jb20vd2lraS8ke1NlcmlhbGl6ZShcclxuICAgICAgICAgICAgICAgICAgICAgIGNoYXJhY3Rlci5uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgKX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hhcmFjdGVyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5CaXJ0aGRheToge2NoYXJhY3Rlci5iaXJ0aGRheX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+Tmlja25hbWU6IHtjaGFyYWN0ZXIubmlja25hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7Y2hhcmFjdGVyLm9jY3VwYXRpb24ubWFwKChqb2IpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2pvYn0+e2pvYn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVhdGhDb3VudEJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLWRhbmdlclwiIG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICBSZXZlYWwgRGVhdGggQ291bnRcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJhZGdlIHZhcmlhbnQ9XCJkYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgICAge2N1bHByaXQgJiYgY2hhcmFjdGVyLm5hbWUgPT09IGN1bHByaXQubmFtZVxyXG4gICAgICAgICAgICAgICAgICAgID8gY3VscHJpdC5kZWF0aENvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jaGFyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICBjaGFyYWN0ZXIuc3RhdHVzID09PSBcIkFsaXZlXCJcclxuICAgICAgICAgICAgICAgICAgICA/IHsgY29sb3I6IFwiZ3JlZW5cIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgOiB7IGNvbG9yOiBcInllbGxvd1wiIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y2hhcmFjdGVyLnN0YXR1c31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZHNEaXNwbGF5O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9