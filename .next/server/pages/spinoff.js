module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/spinoff.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AppNavBar.js":
/*!*********************************!*\
  !*** ./components/AppNavBar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AppNavBar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppNavBar.module.css */ "./components/AppNavBar.module.css");
/* harmony import */ var _AppNavBar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AppNavBar_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "E:\\breakingbad\\components\\AppNavBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const AppNavbar = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    bg: "transparent",
    variant: "dark",
    className: "d-flex justify-content-center py-5",
    style: {
      zIndex: 10
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Brand, {
    onClick: () => router.push("/spinoff"),
    className: "mr-0",
    style: router.pathname === "/" ? {} : {
      display: "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("img", {
    alt: "",
    src: "/logo.png",
    className: _AppNavBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.logo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Brand, {
    onClick: () => router.push("/"),
    className: "mr-0",
    style: router.pathname === "/spinoff" ? {} : {
      display: "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("img", {
    alt: "",
    src: "/bcs.svg.png",
    className: _AppNavBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.logo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (AppNavbar);

/***/ }),

/***/ "./components/AppNavBar.module.css":
/*!*****************************************!*\
  !*** ./components/AppNavBar.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "AppNavBar_header__1zSVY",
	"logo": "AppNavBar_logo__20rWO",
	"links": "AppNavBar_links__1UH_d"
};


/***/ }),

/***/ "./components/CardsDisplay.js":
/*!************************************!*\
  !*** ./components/CardsDisplay.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardsDisplay.module.css */ "./components/CardsDisplay.module.css");
/* harmony import */ var _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\breakingbad\\components\\CardsDisplay.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CardsDisplay = ({
  characters,
  culprit,
  onClick,
  quotes
}) => {
  const Serialize = string => string.split(" ").join("_");

  return __jsx("div", {
    className: _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cardSection,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, characters.map(character => __jsx("div", {
    key: character.char_id,
    className: _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.flipCard,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.flipCardInner,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.flipCardFront,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cardImage,
    src: character.img,
    alt: character.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.flipCardBack,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.charInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cardTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: `https://breakingbad.fandom.com/wiki/${Serialize(character.name)}`,
    target: "_blank",
    rel: "noopener noreferrer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 19
    }
  }, character.name)), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, "Birthday: ", character.birthday), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, "Nickname: ", character.nickname), character.occupation.map(job => __jsx("div", {
    key: job,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 19
    }
  }, job))), __jsx("div", {
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, quotes.find(quote => quote.author === character.name) ? quotes.find(quote => quote.author === character.name).quote : ""), __jsx("div", {
    className: _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.deathCountButton,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outline-danger",
    name: character.name,
    onClick: onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, culprit && character.name === culprit[0].name ? culprit[0].deathCount : "Reveal Kill Count")), __jsx("div", {
    className: _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.charStatus,
    style: character.status === "Alive" ? {
      color: "green"
    } : {
      color: "yellow"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, character.status))))));
};

/* harmony default export */ __webpack_exports__["default"] = (CardsDisplay);

/***/ }),

/***/ "./components/CardsDisplay.module.css":
/*!********************************************!*\
  !*** ./components/CardsDisplay.module.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"cardSection": "CardsDisplay_cardSection__3DDbe",
	"flipCard": "CardsDisplay_flipCard__1Phc-",
	"flipCardInner": "CardsDisplay_flipCardInner__FL0T1",
	"cardImage": "CardsDisplay_cardImage__5SpfT",
	"flipCardFront": "CardsDisplay_flipCardFront__BaRWE",
	"flipCardBack": "CardsDisplay_flipCardBack__1gNZV",
	"charInfo": "CardsDisplay_charInfo__dT74U",
	"cardTitle": "CardsDisplay_cardTitle__3XdfY",
	"deathCountButton": "CardsDisplay_deathCountButton__2eo47",
	"charStatus": "CardsDisplay_charStatus__1yd8y"
};


/***/ }),

/***/ "./components/Construction.js":
/*!************************************!*\
  !*** ./components/Construction.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Construction_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Construction.module.css */ "./components/Construction.module.css");
/* harmony import */ var _Construction_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Construction_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\breakingbad\\components\\Construction.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Construction = ({
  target
}) => {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
    variant: "danger",
    className: "my-5 w-75 mx-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, "Some information and functions are not properly implemented yet because", " ", __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"].Link, {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, target), " is still under construction");
};

/* harmony default export */ __webpack_exports__["default"] = (Construction);

/***/ }),

/***/ "./components/Construction.module.css":
/*!********************************************!*\
  !*** ./components/Construction.module.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppNavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppNavBar */ "./components/AppNavBar.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout.module.css */ "./components/Layout.module.css");
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "E:\\breakingbad\\components\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Layout = props => {
  return __jsx("div", {
    className: "position-relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, "The Breaking Bad Universe"), __jsx("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
    integrity: "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",
    crossorigin: "anonymous",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  })), __jsx(_AppNavBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Layout.module.css":
/*!**************************************!*\
  !*** ./components/Layout.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"bgContainer": "Layout_bgContainer__TA56p"
};


/***/ }),

/***/ "./components/Pagination.js":
/*!**********************************!*\
  !*** ./components/Pagination.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\breakingbad\\components\\Pagination.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Pagination = ({
  onClick,
  total,
  current,
  isLoadingMore,
  isReachingEnd
}) => {
  return __jsx("div", {
    className: "w-75 mx-auto my-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
    className: "text-center",
    variant: "dark",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, "Displaying ", current, " out of ", total, " characters", __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ProgressBar"], {
    animated: true,
    now: current,
    max: total,
    className: "mt-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onClick,
    block: true,
    variant: "info",
    disabled: isReachingEnd || isLoadingMore || current === total,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, isLoadingMore ? "Loading..." : isReachingEnd || current === total ? "No More Results" : "Load More Results"));
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./hooks/usePagination.js":
/*!********************************!*\
  !*** ./hooks/usePagination.js ***!
  \********************************/
/*! exports provided: usePagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePagination", function() { return usePagination; });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_0__);

const usePagination = (queryURL, pageSize, fetcher) => {
  const {
    data,
    error,
    mutate,
    size,
    setSize,
    isValidating
  } = Object(swr__WEBPACK_IMPORTED_MODULE_0__["useSWRInfinite"])(index => `${queryURL}&limit=${pageSize}&offset=${index * pageSize}`, fetcher);
  return {
    data,
    error,
    mutate,
    size,
    setSize,
    isValidating
  };
};

/***/ }),

/***/ "./pages/spinoff.js":
/*!**************************!*\
  !*** ./pages/spinoff.js ***!
  \**************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_CardsDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CardsDisplay */ "./components/CardsDisplay.js");
/* harmony import */ var _components_Construction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Construction */ "./components/Construction.js");
/* harmony import */ var _hooks_usePagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/usePagination */ "./hooks/usePagination.js");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Pagination */ "./components/Pagination.js");
var _jsxFileName = "E:\\breakingbad\\pages\\spinoff.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const SpinOff = ({
  characters,
  total,
  quotes
}) => {
  var _data$, _data;

  let searchResults = characters;
  const {
    0: reveal,
    1: setReveal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: charName,
    1: setCharName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  const fetcher = url => axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url).then(res => res.data);

  const queryURL = `${"https://www.breakingbadapi.com/api/"}characters?category=better+call+saul`;
  const {
    data,
    error,
    mutate,
    size,
    setSize,
    isValidating
  } = Object(_hooks_usePagination__WEBPACK_IMPORTED_MODULE_6__["usePagination"])(queryURL, 12, fetcher);
  const chars = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore = isLoadingInitialData || size > 0 && data && typeof data[size - 1] === "undefined";
  const isEmpty = (data === null || data === void 0 ? void 0 : (_data$ = data[0]) === null || _data$ === void 0 ? void 0 : _data$.length) === 0;
  const isReachingEnd = isEmpty || data && ((_data = data[data.length - 1]) === null || _data === void 0 ? void 0 : _data.length) < 12;
  const isRefreshing = isValidating && data && data.length === size;
  const {
    data: culprit,
    error: culpritError
  } = swr__WEBPACK_IMPORTED_MODULE_3___default()(reveal ? `${"https://www.breakingbadapi.com/api/"}death-count?name=${charName}` : null, fetcher);

  if (chars.length !== 0) {
    searchResults = chars;
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx(_components_Construction__WEBPACK_IMPORTED_MODULE_5__["default"], {
    target: "Better Call Saul API",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }), __jsx(_components_CardsDisplay__WEBPACK_IMPORTED_MODULE_4__["default"], {
    characters: searchResults,
    culprit: culprit,
    onClick: e => {
      setCharName(e.currentTarget.name.split(" ").join("+"));
      setReveal(true);
    },
    quotes: quotes,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }), __jsx(_components_Pagination__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: () => {
      setSize(size + 1);
    },
    isLoadingMore: isLoadingMore,
    isReachingEnd: isReachingEnd,
    current: chars.length,
    total: total,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SpinOff);
const getStaticProps = async () => {
  const result = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${"https://www.breakingbadapi.com/api/"}characters?category=better+call+saul`);
  const quotes = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${"https://www.breakingbadapi.com/api/"}quotes`);
  return {
    props: {
      characters: result.data,
      total: result.data.length,
      quotes: quotes.data
    }
  };
};

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHBOYXZCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHBOYXZCYXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmRzRGlzcGxheS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmRzRGlzcGxheS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29uc3RydWN0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29uc3RydWN0aW9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlUGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9zcGlub2ZmLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3clwiIl0sIm5hbWVzIjpbIkFwcE5hdmJhciIsInJvdXRlciIsInVzZVJvdXRlciIsInpJbmRleCIsInB1c2giLCJwYXRobmFtZSIsImRpc3BsYXkiLCJzdHlsZXMiLCJsb2dvIiwiQ2FyZHNEaXNwbGF5IiwiY2hhcmFjdGVycyIsImN1bHByaXQiLCJvbkNsaWNrIiwicXVvdGVzIiwiU2VyaWFsaXplIiwic3RyaW5nIiwic3BsaXQiLCJqb2luIiwiY2FyZFNlY3Rpb24iLCJtYXAiLCJjaGFyYWN0ZXIiLCJjaGFyX2lkIiwiZmxpcENhcmQiLCJmbGlwQ2FyZElubmVyIiwiZmxpcENhcmRGcm9udCIsImNhcmRJbWFnZSIsImltZyIsIm5hbWUiLCJmbGlwQ2FyZEJhY2siLCJjaGFySW5mbyIsImNhcmRUaXRsZSIsImJpcnRoZGF5Iiwibmlja25hbWUiLCJvY2N1cGF0aW9uIiwiam9iIiwiZmluZCIsInF1b3RlIiwiYXV0aG9yIiwiZGVhdGhDb3VudEJ1dHRvbiIsImRlYXRoQ291bnQiLCJjaGFyU3RhdHVzIiwic3RhdHVzIiwiY29sb3IiLCJDb25zdHJ1Y3Rpb24iLCJ0YXJnZXQiLCJMYXlvdXQiLCJwcm9wcyIsImNoaWxkcmVuIiwiUGFnaW5hdGlvbiIsInRvdGFsIiwiY3VycmVudCIsImlzTG9hZGluZ01vcmUiLCJpc1JlYWNoaW5nRW5kIiwidXNlUGFnaW5hdGlvbiIsInF1ZXJ5VVJMIiwicGFnZVNpemUiLCJmZXRjaGVyIiwiZGF0YSIsImVycm9yIiwibXV0YXRlIiwic2l6ZSIsInNldFNpemUiLCJpc1ZhbGlkYXRpbmciLCJ1c2VTV1JJbmZpbml0ZSIsImluZGV4IiwiU3Bpbk9mZiIsInNlYXJjaFJlc3VsdHMiLCJyZXZlYWwiLCJzZXRSZXZlYWwiLCJ1c2VTdGF0ZSIsImNoYXJOYW1lIiwic2V0Q2hhck5hbWUiLCJ1cmwiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJwcm9jZXNzIiwiY2hhcnMiLCJjb25jYXQiLCJpc0xvYWRpbmdJbml0aWFsRGF0YSIsImlzRW1wdHkiLCJsZW5ndGgiLCJpc1JlZnJlc2hpbmciLCJjdWxwcml0RXJyb3IiLCJ1c2VTV1IiLCJlIiwiY3VycmVudFRhcmdldCIsImdldFN0YXRpY1Byb3BzIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNB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LEVBQUU7QUFDTHBDLGdCQUFVLEVBQUUrRSxNQUFNLENBQUNoQyxJQURkO0FBRUxSLFdBQUssRUFBRXdDLE1BQU0sQ0FBQ2hDLElBQVAsQ0FBWXlCLE1BRmQ7QUFHTHJFLFlBQU0sRUFBRUEsTUFBTSxDQUFDNEM7QUFIVjtBQURGLEdBQVA7QUFPRCxDQVpNLEM7Ozs7Ozs7Ozs7O0FDcEVQLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InBhZ2VzL3NwaW5vZmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3NwaW5vZmYuanNcIik7XG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0FwcE5hdkJhci5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBBcHBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxOYXZiYXJcclxuICAgICAgYmc9XCJ0cmFuc3BhcmVudFwiXHJcbiAgICAgIHZhcmlhbnQ9XCJkYXJrXCJcclxuICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgcHktNVwiXHJcbiAgICAgIHN0eWxlPXt7IHpJbmRleDogMTAgfX1cclxuICAgID5cclxuICAgICAgey8qIDxOYXYgY2xhc3NOYW1lPVwibXgtM1wiPlxyXG4gICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmtzfT5CcmVha2luZyBCYWQ8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgPC9OYXY+ICovfVxyXG4gICAgICA8TmF2YmFyLkJyYW5kXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvc3Bpbm9mZlwiKX1cclxuICAgICAgICBjbGFzc05hbWU9XCJtci0wXCJcclxuICAgICAgICBzdHlsZT17cm91dGVyLnBhdGhuYW1lID09PSBcIi9cIiA/IHt9IDogeyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGltZyBhbHQ9XCJcIiBzcmM9XCIvbG9nby5wbmdcIiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSAvPlxyXG4gICAgICA8L05hdmJhci5CcmFuZD5cclxuICAgICAgPE5hdmJhci5CcmFuZFxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1wiKX1cclxuICAgICAgICBjbGFzc05hbWU9XCJtci0wXCJcclxuICAgICAgICBzdHlsZT17cm91dGVyLnBhdGhuYW1lID09PSBcIi9zcGlub2ZmXCIgPyB7fSA6IHsgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxpbWcgYWx0PVwiXCIgc3JjPVwiL2Jjcy5zdmcucG5nXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gLz5cclxuICAgICAgPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgIHsvKiA8TmF2IGNsYXNzTmFtZT1cIm14LTNcIj5cclxuICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3NwaW5vZmZcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubGlua3N9PkJldHRlciBDYWxsIFNhdWw8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgPC9OYXY+ICovfVxyXG4gICAgPC9OYXZiYXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcE5hdmJhcjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVhZGVyXCI6IFwiQXBwTmF2QmFyX2hlYWRlcl9fMXpTVllcIixcblx0XCJsb2dvXCI6IFwiQXBwTmF2QmFyX2xvZ29fXzIwcldPXCIsXG5cdFwibGlua3NcIjogXCJBcHBOYXZCYXJfbGlua3NfXzFVSF9kXCJcbn07XG4iLCJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ2FyZHNEaXNwbGF5Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IENhcmRzRGlzcGxheSA9ICh7IGNoYXJhY3RlcnMsIGN1bHByaXQsIG9uQ2xpY2ssIHF1b3RlcyB9KSA9PiB7XHJcbiAgY29uc3QgU2VyaWFsaXplID0gKHN0cmluZykgPT4gc3RyaW5nLnNwbGl0KFwiIFwiKS5qb2luKFwiX1wiKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkU2VjdGlvbn0+XHJcbiAgICAgIHtjaGFyYWN0ZXJzLm1hcCgoY2hhcmFjdGVyKSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2NoYXJhY3Rlci5jaGFyX2lkfSBjbGFzc05hbWU9e3N0eWxlcy5mbGlwQ2FyZH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsaXBDYXJkSW5uZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsaXBDYXJkRnJvbnR9PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRJbWFnZX1cclxuICAgICAgICAgICAgICAgIHNyYz17Y2hhcmFjdGVyLmltZ31cclxuICAgICAgICAgICAgICAgIGFsdD17Y2hhcmFjdGVyLm5hbWV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxpcENhcmRCYWNrfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXJJbmZvfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZFRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly9icmVha2luZ2JhZC5mYW5kb20uY29tL3dpa2kvJHtTZXJpYWxpemUoXHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXIubmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICl9YH1cclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoYXJhY3Rlci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+QmlydGhkYXk6IHtjaGFyYWN0ZXIuYmlydGhkYXl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2Pk5pY2tuYW1lOiB7Y2hhcmFjdGVyLm5pY2tuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAge2NoYXJhY3Rlci5vY2N1cGF0aW9uLm1hcCgoam9iKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtqb2J9Pntqb2J9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7cXVvdGVzLmZpbmQoKHF1b3RlKSA9PiBxdW90ZS5hdXRob3IgPT09IGNoYXJhY3Rlci5uYW1lKVxyXG4gICAgICAgICAgICAgICAgICA/IHF1b3Rlcy5maW5kKChxdW90ZSkgPT4gcXVvdGUuYXV0aG9yID09PSBjaGFyYWN0ZXIubmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgIC5xdW90ZVxyXG4gICAgICAgICAgICAgICAgICA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZWF0aENvdW50QnV0dG9ufT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmUtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT17Y2hhcmFjdGVyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtjdWxwcml0ICYmIGNoYXJhY3Rlci5uYW1lID09PSBjdWxwcml0WzBdLm5hbWVcclxuICAgICAgICAgICAgICAgICAgICA/IGN1bHByaXRbMF0uZGVhdGhDb3VudFxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJSZXZlYWwgS2lsbCBDb3VudFwifVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2hhclN0YXR1c31cclxuICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyLnN0YXR1cyA9PT0gXCJBbGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyB7IGNvbG9yOiBcImdyZWVuXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgIDogeyBjb2xvcjogXCJ5ZWxsb3dcIiB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2NoYXJhY3Rlci5zdGF0dXN9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRzRGlzcGxheTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2FyZFNlY3Rpb25cIjogXCJDYXJkc0Rpc3BsYXlfY2FyZFNlY3Rpb25fXzNERGJlXCIsXG5cdFwiZmxpcENhcmRcIjogXCJDYXJkc0Rpc3BsYXlfZmxpcENhcmRfXzFQaGMtXCIsXG5cdFwiZmxpcENhcmRJbm5lclwiOiBcIkNhcmRzRGlzcGxheV9mbGlwQ2FyZElubmVyX19GTDBUMVwiLFxuXHRcImNhcmRJbWFnZVwiOiBcIkNhcmRzRGlzcGxheV9jYXJkSW1hZ2VfXzVTcGZUXCIsXG5cdFwiZmxpcENhcmRGcm9udFwiOiBcIkNhcmRzRGlzcGxheV9mbGlwQ2FyZEZyb250X19CYVJXRVwiLFxuXHRcImZsaXBDYXJkQmFja1wiOiBcIkNhcmRzRGlzcGxheV9mbGlwQ2FyZEJhY2tfXzFnTlpWXCIsXG5cdFwiY2hhckluZm9cIjogXCJDYXJkc0Rpc3BsYXlfY2hhckluZm9fX2RUNzRVXCIsXG5cdFwiY2FyZFRpdGxlXCI6IFwiQ2FyZHNEaXNwbGF5X2NhcmRUaXRsZV9fM1hkZllcIixcblx0XCJkZWF0aENvdW50QnV0dG9uXCI6IFwiQ2FyZHNEaXNwbGF5X2RlYXRoQ291bnRCdXR0b25fXzJlbzQ3XCIsXG5cdFwiY2hhclN0YXR1c1wiOiBcIkNhcmRzRGlzcGxheV9jaGFyU3RhdHVzX18xeWQ4eVwiXG59O1xuIiwiaW1wb3J0IHsgQWxlcnQgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ29uc3RydWN0aW9uLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IENvbnN0cnVjdGlvbiA9ICh7IHRhcmdldCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBbGVydCB2YXJpYW50PVwiZGFuZ2VyXCIgY2xhc3NOYW1lPVwibXktNSB3LTc1IG14LWF1dG9cIj5cclxuICAgICAgU29tZSBpbmZvcm1hdGlvbiBhbmQgZnVuY3Rpb25zIGFyZSBub3QgcHJvcGVybHkgaW1wbGVtZW50ZWQgeWV0IGJlY2F1c2V7XCIgXCJ9XHJcbiAgICAgIDxBbGVydC5MaW5rIGhyZWY9XCIjXCI+e3RhcmdldH08L0FsZXJ0Lkxpbms+IGlzIHN0aWxsIHVuZGVyIGNvbnN0cnVjdGlvblxyXG4gICAgPC9BbGVydD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uc3RydWN0aW9uO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiaW1wb3J0IEFwcE5hdkJhciBmcm9tIFwiLi9BcHBOYXZCYXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0xheW91dC5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+VGhlIEJyZWFraW5nIEJhZCBVbml2ZXJzZTwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtOWFJdDJuUnBDMTJVazlnUzliYURsNDExTlFBcEZtQzI2RXdBT0g4V2dabDVNWVl4RmZjK05jUGIxZEtHajdTa1wiXHJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8QXBwTmF2QmFyIC8+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJnQ29udGFpbmVyXCI6IFwiTGF5b3V0X2JnQ29udGFpbmVyX19UQTU2cFwiXG59O1xuIiwiaW1wb3J0IHsgQWxlcnQsIEJ1dHRvbiwgUHJvZ3Jlc3NCYXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcblxyXG5jb25zdCBQYWdpbmF0aW9uID0gKHtcclxuICBvbkNsaWNrLFxyXG4gIHRvdGFsLFxyXG4gIGN1cnJlbnQsXHJcbiAgaXNMb2FkaW5nTW9yZSxcclxuICBpc1JlYWNoaW5nRW5kLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy03NSBteC1hdXRvIG15LTVcIj5cclxuICAgICAgPEFsZXJ0IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgdmFyaWFudD1cImRhcmtcIj5cclxuICAgICAgICBEaXNwbGF5aW5nIHtjdXJyZW50fSBvdXQgb2Yge3RvdGFsfSBjaGFyYWN0ZXJzXHJcbiAgICAgICAgPFByb2dyZXNzQmFyIGFuaW1hdGVkIG5vdz17Y3VycmVudH0gbWF4PXt0b3RhbH0gY2xhc3NOYW1lPVwibXQtM1wiIC8+XHJcbiAgICAgIDwvQWxlcnQ+XHJcblxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgICBibG9ja1xyXG4gICAgICAgIHZhcmlhbnQ9XCJpbmZvXCJcclxuICAgICAgICBkaXNhYmxlZD17aXNSZWFjaGluZ0VuZCB8fCBpc0xvYWRpbmdNb3JlIHx8IGN1cnJlbnQgPT09IHRvdGFsfVxyXG4gICAgICA+XHJcbiAgICAgICAge2lzTG9hZGluZ01vcmVcclxuICAgICAgICAgID8gXCJMb2FkaW5nLi4uXCJcclxuICAgICAgICAgIDogaXNSZWFjaGluZ0VuZCB8fCBjdXJyZW50ID09PSB0b3RhbFxyXG4gICAgICAgICAgPyBcIk5vIE1vcmUgUmVzdWx0c1wiXHJcbiAgICAgICAgICA6IFwiTG9hZCBNb3JlIFJlc3VsdHNcIn1cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcclxuIiwiaW1wb3J0IHsgdXNlU1dSSW5maW5pdGUgfSBmcm9tIFwic3dyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlUGFnaW5hdGlvbiA9IChxdWVyeVVSTCwgcGFnZVNpemUsIGZldGNoZXIpID0+IHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBtdXRhdGUsIHNpemUsIHNldFNpemUsIGlzVmFsaWRhdGluZyB9ID0gdXNlU1dSSW5maW5pdGUoXHJcbiAgICAoaW5kZXgpID0+IGAke3F1ZXJ5VVJMfSZsaW1pdD0ke3BhZ2VTaXplfSZvZmZzZXQ9JHtpbmRleCAqIHBhZ2VTaXplfWAsXHJcbiAgICBmZXRjaGVyXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHsgZGF0YSwgZXJyb3IsIG11dGF0ZSwgc2l6ZSwgc2V0U2l6ZSwgaXNWYWxpZGF0aW5nIH07XHJcbn07XHJcbiIsImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XHJcbmltcG9ydCBDYXJkc0Rpc3BsYXkgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZHNEaXNwbGF5XCI7XHJcbmltcG9ydCBDb25zdHJ1Y3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29uc3RydWN0aW9uXCI7XHJcbmltcG9ydCB7IHVzZVBhZ2luYXRpb24gfSBmcm9tIFwiLi4vaG9va3MvdXNlUGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uXCI7XHJcblxyXG5jb25zdCBTcGluT2ZmID0gKHsgY2hhcmFjdGVycywgdG90YWwsIHF1b3RlcyB9KSA9PiB7XHJcbiAgbGV0IHNlYXJjaFJlc3VsdHMgPSBjaGFyYWN0ZXJzO1xyXG4gIGNvbnN0IFtyZXZlYWwsIHNldFJldmVhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NoYXJOYW1lLCBzZXRDaGFyTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBmZXRjaGVyID0gKHVybCkgPT4gYXhpb3MuZ2V0KHVybCkudGhlbigocmVzKSA9PiByZXMuZGF0YSk7XHJcbiAgY29uc3QgcXVlcnlVUkwgPSBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1jaGFyYWN0ZXJzP2NhdGVnb3J5PWJldHRlcitjYWxsK3NhdWxgO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIG11dGF0ZSwgc2l6ZSwgc2V0U2l6ZSwgaXNWYWxpZGF0aW5nIH0gPSB1c2VQYWdpbmF0aW9uKFxyXG4gICAgcXVlcnlVUkwsXHJcbiAgICAxMixcclxuICAgIGZldGNoZXJcclxuICApO1xyXG4gIGNvbnN0IGNoYXJzID0gZGF0YSA/IFtdLmNvbmNhdCguLi5kYXRhKSA6IFtdO1xyXG4gIGNvbnN0IGlzTG9hZGluZ0luaXRpYWxEYXRhID0gIWRhdGEgJiYgIWVycm9yO1xyXG4gIGNvbnN0IGlzTG9hZGluZ01vcmUgPVxyXG4gICAgaXNMb2FkaW5nSW5pdGlhbERhdGEgfHxcclxuICAgIChzaXplID4gMCAmJiBkYXRhICYmIHR5cGVvZiBkYXRhW3NpemUgLSAxXSA9PT0gXCJ1bmRlZmluZWRcIik7XHJcbiAgY29uc3QgaXNFbXB0eSA9IGRhdGE/LlswXT8ubGVuZ3RoID09PSAwO1xyXG4gIGNvbnN0IGlzUmVhY2hpbmdFbmQgPSBpc0VtcHR5IHx8IChkYXRhICYmIGRhdGFbZGF0YS5sZW5ndGggLSAxXT8ubGVuZ3RoIDwgMTIpO1xyXG4gIGNvbnN0IGlzUmVmcmVzaGluZyA9IGlzVmFsaWRhdGluZyAmJiBkYXRhICYmIGRhdGEubGVuZ3RoID09PSBzaXplO1xyXG5cclxuICBjb25zdCB7IGRhdGE6IGN1bHByaXQsIGVycm9yOiBjdWxwcml0RXJyb3IgfSA9IHVzZVNXUihcclxuICAgIHJldmVhbFxyXG4gICAgICA/IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfWRlYXRoLWNvdW50P25hbWU9JHtjaGFyTmFtZX1gXHJcbiAgICAgIDogbnVsbCxcclxuICAgIGZldGNoZXJcclxuICApO1xyXG5cclxuICBpZiAoY2hhcnMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICBzZWFyY2hSZXN1bHRzID0gY2hhcnM7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxDb25zdHJ1Y3Rpb24gdGFyZ2V0PVwiQmV0dGVyIENhbGwgU2F1bCBBUElcIiAvPlxyXG4gICAgICAgIDxDYXJkc0Rpc3BsYXlcclxuICAgICAgICAgIGNoYXJhY3RlcnM9e3NlYXJjaFJlc3VsdHN9XHJcbiAgICAgICAgICBjdWxwcml0PXtjdWxwcml0fVxyXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgc2V0Q2hhck5hbWUoZS5jdXJyZW50VGFyZ2V0Lm5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCIrXCIpKTtcclxuICAgICAgICAgICAgc2V0UmV2ZWFsKHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHF1b3Rlcz17cXVvdGVzfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0U2l6ZShzaXplICsgMSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgaXNMb2FkaW5nTW9yZT17aXNMb2FkaW5nTW9yZX1cclxuICAgICAgICAgIGlzUmVhY2hpbmdFbmQ9e2lzUmVhY2hpbmdFbmR9XHJcbiAgICAgICAgICBjdXJyZW50PXtjaGFycy5sZW5ndGh9XHJcbiAgICAgICAgICB0b3RhbD17dG90YWx9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3Bpbk9mZjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1jaGFyYWN0ZXJzP2NhdGVnb3J5PWJldHRlcitjYWxsK3NhdWxgXHJcbiAgKTtcclxuICBjb25zdCBxdW90ZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9cXVvdGVzYCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGNoYXJhY3RlcnM6IHJlc3VsdC5kYXRhLFxyXG4gICAgICB0b3RhbDogcmVzdWx0LmRhdGEubGVuZ3RoLFxyXG4gICAgICBxdW90ZXM6IHF1b3Rlcy5kYXRhLFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiXSwic291cmNlUm9vdCI6IiJ9