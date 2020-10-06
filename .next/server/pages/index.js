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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
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

/***/ "./components/SearchBar.js":
/*!*********************************!*\
  !*** ./components/SearchBar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SearchBar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchBar.module.css */ "./components/SearchBar.module.css");
/* harmony import */ var _SearchBar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\breakingbad\\components\\SearchBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SearchBar = ({
  value,
  onChange,
  onClick,
  onKeyPress
}) => {
  return __jsx("div", {
    className: _SearchBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.searchBar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    placeholder: "Search...",
    "aria-label": "Search...",
    "aria-describedby": "basic-addon2",
    onChange: onChange,
    value: value,
    onKeyPress: onKeyPress,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"].Append, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onClick,
    variant: "secondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, "Search"))));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

/***/ }),

/***/ "./components/SearchBar.module.css":
/*!*****************************************!*\
  !*** ./components/SearchBar.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"searchBar": "SearchBar_searchBar__2tfP_"
};


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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_usePagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/usePagination */ "./hooks/usePagination.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_CardsDisplay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CardsDisplay */ "./components/CardsDisplay.js");
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SearchBar */ "./components/SearchBar.js");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Pagination */ "./components/Pagination.js");
var _jsxFileName = "E:\\breakingbad\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const Index = ({
  characters,
  total,
  quotes
}) => {
  var _data$, _data;

  let searchResults = characters;
  let totalNumberOfResults = total;
  const {
    0: query,
    1: setQuery
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: searched,
    1: setSearched
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: reveal,
    1: setReveal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: charName,
    1: setCharName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: searchValue,
    1: setSearchValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");

  const fetcher = url => axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url).then(res => res.data);

  const queryURL = `${"https://www.breakingbadapi.com/api/"}characters?name=${query}`;
  const {
    data,
    error,
    mutate,
    size,
    setSize,
    isValidating
  } = Object(_hooks_usePagination__WEBPACK_IMPORTED_MODULE_2__["usePagination"])(queryURL, 12, fetcher);
  const chars = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore = isLoadingInitialData || size > 0 && data && typeof data[size - 1] === "undefined";
  const isEmpty = (data === null || data === void 0 ? void 0 : (_data$ = data[0]) === null || _data$ === void 0 ? void 0 : _data$.length) === 0;
  const isReachingEnd = isEmpty || data && ((_data = data[data.length - 1]) === null || _data === void 0 ? void 0 : _data.length) < 12;
  const isRefreshing = isValidating && data && data.length === size;
  const {
    data: culprit,
    error: culpritError
  } = swr__WEBPACK_IMPORTED_MODULE_4___default()(reveal ? `${"https://www.breakingbadapi.com/api/"}death-count?name=${charName}` : null, fetcher);

  if (chars.length !== 0 || searched) {
    searchResults = chars;
  }

  if (searched && query) {
    totalNumberOfResults = chars.length;
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx(_components_SearchBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: searchValue,
    onChange: e => setSearchValue(e.target.value),
    onKeyPress: e => {
      if (e.key === "Enter") {
        setQuery(searchValue);
        setSearched(true);
      }
    },
    onClick: () => {
      setQuery(searchValue);
      setSearched(true);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }), __jsx(_components_CardsDisplay__WEBPACK_IMPORTED_MODULE_5__["default"], {
    characters: searchResults,
    quotes: quotes,
    culprit: culprit,
    onClick: e => {
      setCharName(e.currentTarget.name.split(" ").join("+"));
      setReveal(true);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }), __jsx(_components_Pagination__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: () => {
      setSize(size + 1);
    },
    isLoadingMore: isLoadingMore,
    isReachingEnd: isReachingEnd,
    current: chars.length,
    total: totalNumberOfResults,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);
const getStaticProps = async () => {
  const result = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`${"https://www.breakingbadapi.com/api/"}characters?limit=12`);
  const quotes = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`${"https://www.breakingbadapi.com/api/"}quotes`);
  const allChar = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`${"https://www.breakingbadapi.com/api/"}characters`);
  return {
    props: {
      characters: result.data,
      total: allChar.data.length,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHBOYXZCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHBOYXZCYXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmRzRGlzcGxheS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmRzRGlzcGxheS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYWdpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoQmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoQmFyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlUGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd3JcIiJdLCJuYW1lcyI6WyJBcHBOYXZiYXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ6SW5kZXgiLCJwdXNoIiwicGF0aG5hbWUiLCJkaXNwbGF5Iiwic3R5bGVzIiwibG9nbyIsIkNhcmRzRGlzcGxheSIsImNoYXJhY3RlcnMiLCJjdWxwcml0Iiwib25DbGljayIsInF1b3RlcyIsIlNlcmlhbGl6ZSIsInN0cmluZyIsInNwbGl0Iiwiam9pbiIsImNhcmRTZWN0aW9uIiwibWFwIiwiY2hhcmFjdGVyIiwiY2hhcl9pZCIsImZsaXBDYXJkIiwiZmxpcENhcmRJbm5lciIsImZsaXBDYXJkRnJvbnQiLCJjYXJkSW1hZ2UiLCJpbWciLCJuYW1lIiwiZmxpcENhcmRCYWNrIiwiY2hhckluZm8iLCJjYXJkVGl0bGUiLCJiaXJ0aGRheSIsIm5pY2tuYW1lIiwib2NjdXBhdGlvbiIsImpvYiIsImZpbmQiLCJxdW90ZSIsImF1dGhvciIsImRlYXRoQ291bnRCdXR0b24iLCJkZWF0aENvdW50IiwiY2hhclN0YXR1cyIsInN0YXR1cyIsImNvbG9yIiwiTGF5b3V0IiwicHJvcHMiLCJjaGlsZHJlbiIsIlBhZ2luYXRpb24iLCJ0b3RhbCIsImN1cnJlbnQiLCJpc0xvYWRpbmdNb3JlIiwiaXNSZWFjaGluZ0VuZCIsIlNlYXJjaEJhciIsInZhbHVlIiwib25DaGFuZ2UiLCJvbktleVByZXNzIiwic2VhcmNoQmFyIiwidXNlUGFnaW5hdGlvbiIsInF1ZXJ5VVJMIiwicGFnZVNpemUiLCJmZXRjaGVyIiwiZGF0YSIsImVycm9yIiwibXV0YXRlIiwic2l6ZSIsInNldFNpemUiLCJpc1ZhbGlkYXRpbmciLCJ1c2VTV1JJbmZpbml0ZSIsImluZGV4IiwiSW5kZXgiLCJzZWFyY2hSZXN1bHRzIiwidG90YWxOdW1iZXJPZlJlc3VsdHMiLCJxdWVyeSIsInNldFF1ZXJ5IiwidXNlU3RhdGUiLCJzZWFyY2hlZCIsInNldFNlYXJjaGVkIiwicmV2ZWFsIiwic2V0UmV2ZWFsIiwiY2hhck5hbWUiLCJzZXRDaGFyTmFtZSIsInNlYXJjaFZhbHVlIiwic2V0U2VhcmNoVmFsdWUiLCJ1cmwiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJwcm9jZXNzIiwiY2hhcnMiLCJjb25jYXQiLCJpc0xvYWRpbmdJbml0aWFsRGF0YSIsImlzRW1wdHkiLCJsZW5ndGgiLCJpc1JlZnJlc2hpbmciLCJjdWxwcml0RXJyb3IiLCJ1c2VTV1IiLCJlIiwidGFyZ2V0Iiwia2V5IiwiY3Vy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K0VlRixvRUFBZjtBQUVPLE1BQU1nQyxjQUFjLEdBQUcsWUFBWTtBQUN4QyxRQUFNQyxNQUFNLEdBQUcsTUFBTWxCLDRDQUFLLENBQUNDLEdBQU4sQ0FDbEIsR0FBRUcscUNBQWlDLHFCQURqQixDQUFyQjtBQUdBLFFBQU0xRSxNQUFNLEdBQUcsTUFBTXNFLDRDQUFLLENBQUNDLEdBQU4sQ0FBVyxHQUFFRyxxQ0FBaUMsUUFBOUMsQ0FBckI7QUFDQSxRQUFNZSxPQUFPLEdBQUcsTUFBTW5CLDRDQUFLLENBQUNDLEdBQU4sQ0FDbkIsR0FBRUcscUNBQWlDLFlBRGhCLENBQXRCO0FBR0EsU0FBTztBQUNMM0MsU0FBSyxFQUFFO0FBQ0xsQyxnQkFBVSxFQUFFMkYsTUFBTSxDQUFDekMsSUFEZDtBQUVMYixXQUFLLEVBQUV1RCxPQUFPLENBQUMxQyxJQUFSLENBQWFnQyxNQUZmO0FBR0wvRSxZQUFNLEVBQUVBLE1BQU0sQ0FBQytDO0FBSFY7QUFERixHQUFQO0FBT0QsQ0FmTSxDOzs7Ozs7Ozs7OztBQzFGUCxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0FwcE5hdkJhci5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBBcHBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxOYXZiYXJcclxuICAgICAgYmc9XCJ0cmFuc3BhcmVudFwiXHJcbiAgICAgIHZhcmlhbnQ9XCJkYXJrXCJcclxuICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgcHktNVwiXHJcbiAgICAgIHN0eWxlPXt7IHpJbmRleDogMTAgfX1cclxuICAgID5cclxuICAgICAgey8qIDxOYXYgY2xhc3NOYW1lPVwibXgtM1wiPlxyXG4gICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmtzfT5CcmVha2luZyBCYWQ8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgPC9OYXY+ICovfVxyXG4gICAgICA8TmF2YmFyLkJyYW5kXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvc3Bpbm9mZlwiKX1cclxuICAgICAgICBjbGFzc05hbWU9XCJtci0wXCJcclxuICAgICAgICBzdHlsZT17cm91dGVyLnBhdGhuYW1lID09PSBcIi9cIiA/IHt9IDogeyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGltZyBhbHQ9XCJcIiBzcmM9XCIvbG9nby5wbmdcIiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSAvPlxyXG4gICAgICA8L05hdmJhci5CcmFuZD5cclxuICAgICAgPE5hdmJhci5CcmFuZFxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1wiKX1cclxuICAgICAgICBjbGFzc05hbWU9XCJtci0wXCJcclxuICAgICAgICBzdHlsZT17cm91dGVyLnBhdGhuYW1lID09PSBcIi9zcGlub2ZmXCIgPyB7fSA6IHsgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxpbWcgYWx0PVwiXCIgc3JjPVwiL2Jjcy5zdmcucG5nXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gLz5cclxuICAgICAgPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgIHsvKiA8TmF2IGNsYXNzTmFtZT1cIm14LTNcIj5cclxuICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3NwaW5vZmZcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubGlua3N9PkJldHRlciBDYWxsIFNhdWw8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgPC9OYXY+ICovfVxyXG4gICAgPC9OYXZiYXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcE5hdmJhcjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVhZGVyXCI6IFwiQXBwTmF2QmFyX2hlYWRlcl9fMXpTVllcIixcblx0XCJsb2dvXCI6IFwiQXBwTmF2QmFyX2xvZ29fXzIwcldPXCIsXG5cdFwibGlua3NcIjogXCJBcHBOYXZCYXJfbGlua3NfXzFVSF9kXCJcbn07XG4iLCJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ2FyZHNEaXNwbGF5Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IENhcmRzRGlzcGxheSA9ICh7IGNoYXJhY3RlcnMsIGN1bHByaXQsIG9uQ2xpY2ssIHF1b3RlcyB9KSA9PiB7XHJcbiAgY29uc3QgU2VyaWFsaXplID0gKHN0cmluZykgPT4gc3RyaW5nLnNwbGl0KFwiIFwiKS5qb2luKFwiX1wiKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkU2VjdGlvbn0+XHJcbiAgICAgIHtjaGFyYWN0ZXJzLm1hcCgoY2hhcmFjdGVyKSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2NoYXJhY3Rlci5jaGFyX2lkfSBjbGFzc05hbWU9e3N0eWxlcy5mbGlwQ2FyZH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsaXBDYXJkSW5uZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsaXBDYXJkRnJvbnR9PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRJbWFnZX1cclxuICAgICAgICAgICAgICAgIHNyYz17Y2hhcmFjdGVyLmltZ31cclxuICAgICAgICAgICAgICAgIGFsdD17Y2hhcmFjdGVyLm5hbWV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxpcENhcmRCYWNrfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXJJbmZvfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZFRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly9icmVha2luZ2JhZC5mYW5kb20uY29tL3dpa2kvJHtTZXJpYWxpemUoXHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXIubmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICl9YH1cclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoYXJhY3Rlci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+QmlydGhkYXk6IHtjaGFyYWN0ZXIuYmlydGhkYXl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2Pk5pY2tuYW1lOiB7Y2hhcmFjdGVyLm5pY2tuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAge2NoYXJhY3Rlci5vY2N1cGF0aW9uLm1hcCgoam9iKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtqb2J9Pntqb2J9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7cXVvdGVzLmZpbmQoKHF1b3RlKSA9PiBxdW90ZS5hdXRob3IgPT09IGNoYXJhY3Rlci5uYW1lKVxyXG4gICAgICAgICAgICAgICAgICA/IHF1b3Rlcy5maW5kKChxdW90ZSkgPT4gcXVvdGUuYXV0aG9yID09PSBjaGFyYWN0ZXIubmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgIC5xdW90ZVxyXG4gICAgICAgICAgICAgICAgICA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZWF0aENvdW50QnV0dG9ufT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmUtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT17Y2hhcmFjdGVyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtjdWxwcml0ICYmIGNoYXJhY3Rlci5uYW1lID09PSBjdWxwcml0WzBdLm5hbWVcclxuICAgICAgICAgICAgICAgICAgICA/IGN1bHByaXRbMF0uZGVhdGhDb3VudFxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJSZXZlYWwgS2lsbCBDb3VudFwifVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2hhclN0YXR1c31cclxuICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyLnN0YXR1cyA9PT0gXCJBbGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyB7IGNvbG9yOiBcImdyZWVuXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgIDogeyBjb2xvcjogXCJ5ZWxsb3dcIiB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2NoYXJhY3Rlci5zdGF0dXN9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRzRGlzcGxheTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2FyZFNlY3Rpb25cIjogXCJDYXJkc0Rpc3BsYXlfY2FyZFNlY3Rpb25fXzNERGJlXCIsXG5cdFwiZmxpcENhcmRcIjogXCJDYXJkc0Rpc3BsYXlfZmxpcENhcmRfXzFQaGMtXCIsXG5cdFwiZmxpcENhcmRJbm5lclwiOiBcIkNhcmRzRGlzcGxheV9mbGlwQ2FyZElubmVyX19GTDBUMVwiLFxuXHRcImNhcmRJbWFnZVwiOiBcIkNhcmRzRGlzcGxheV9jYXJkSW1hZ2VfXzVTcGZUXCIsXG5cdFwiZmxpcENhcmRGcm9udFwiOiBcIkNhcmRzRGlzcGxheV9mbGlwQ2FyZEZyb250X19CYVJXRVwiLFxuXHRcImZsaXBDYXJkQmFja1wiOiBcIkNhcmRzRGlzcGxheV9mbGlwQ2FyZEJhY2tfXzFnTlpWXCIsXG5cdFwiY2hhckluZm9cIjogXCJDYXJkc0Rpc3BsYXlfY2hhckluZm9fX2RUNzRVXCIsXG5cdFwiY2FyZFRpdGxlXCI6IFwiQ2FyZHNEaXNwbGF5X2NhcmRUaXRsZV9fM1hkZllcIixcblx0XCJkZWF0aENvdW50QnV0dG9uXCI6IFwiQ2FyZHNEaXNwbGF5X2RlYXRoQ291bnRCdXR0b25fXzJlbzQ3XCIsXG5cdFwiY2hhclN0YXR1c1wiOiBcIkNhcmRzRGlzcGxheV9jaGFyU3RhdHVzX18xeWQ4eVwiXG59O1xuIiwiaW1wb3J0IEFwcE5hdkJhciBmcm9tIFwiLi9BcHBOYXZCYXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0xheW91dC5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+VGhlIEJyZWFraW5nIEJhZCBVbml2ZXJzZTwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtOWFJdDJuUnBDMTJVazlnUzliYURsNDExTlFBcEZtQzI2RXdBT0g4V2dabDVNWVl4RmZjK05jUGIxZEtHajdTa1wiXHJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8QXBwTmF2QmFyIC8+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJnQ29udGFpbmVyXCI6IFwiTGF5b3V0X2JnQ29udGFpbmVyX19UQTU2cFwiXG59O1xuIiwiaW1wb3J0IHsgQWxlcnQsIEJ1dHRvbiwgUHJvZ3Jlc3NCYXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcblxyXG5jb25zdCBQYWdpbmF0aW9uID0gKHtcclxuICBvbkNsaWNrLFxyXG4gIHRvdGFsLFxyXG4gIGN1cnJlbnQsXHJcbiAgaXNMb2FkaW5nTW9yZSxcclxuICBpc1JlYWNoaW5nRW5kLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy03NSBteC1hdXRvIG15LTVcIj5cclxuICAgICAgPEFsZXJ0IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgdmFyaWFudD1cImRhcmtcIj5cclxuICAgICAgICBEaXNwbGF5aW5nIHtjdXJyZW50fSBvdXQgb2Yge3RvdGFsfSBjaGFyYWN0ZXJzXHJcbiAgICAgICAgPFByb2dyZXNzQmFyIGFuaW1hdGVkIG5vdz17Y3VycmVudH0gbWF4PXt0b3RhbH0gY2xhc3NOYW1lPVwibXQtM1wiIC8+XHJcbiAgICAgIDwvQWxlcnQ+XHJcblxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgICBibG9ja1xyXG4gICAgICAgIHZhcmlhbnQ9XCJpbmZvXCJcclxuICAgICAgICBkaXNhYmxlZD17aXNSZWFjaGluZ0VuZCB8fCBpc0xvYWRpbmdNb3JlIHx8IGN1cnJlbnQgPT09IHRvdGFsfVxyXG4gICAgICA+XHJcbiAgICAgICAge2lzTG9hZGluZ01vcmVcclxuICAgICAgICAgID8gXCJMb2FkaW5nLi4uXCJcclxuICAgICAgICAgIDogaXNSZWFjaGluZ0VuZCB8fCBjdXJyZW50ID09PSB0b3RhbFxyXG4gICAgICAgICAgPyBcIk5vIE1vcmUgUmVzdWx0c1wiXHJcbiAgICAgICAgICA6IFwiTG9hZCBNb3JlIFJlc3VsdHNcIn1cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcclxuIiwiaW1wb3J0IHsgSW5wdXRHcm91cCwgRm9ybUNvbnRyb2wsIEJ1dHRvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9TZWFyY2hCYXIubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgU2VhcmNoQmFyID0gKHsgdmFsdWUsIG9uQ2hhbmdlLCBvbkNsaWNrLCBvbktleVByZXNzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hCYXJ9PlxyXG4gICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICA8Rm9ybUNvbnRyb2xcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCJcclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJTZWFyY2guLi5cIlxyXG4gICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImJhc2ljLWFkZG9uMlwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICBvbktleVByZXNzPXtvbktleVByZXNzfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPElucHV0R3JvdXAuQXBwZW5kPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrfSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgIFNlYXJjaFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9JbnB1dEdyb3VwLkFwcGVuZD5cclxuICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhcjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2VhcmNoQmFyXCI6IFwiU2VhcmNoQmFyX3NlYXJjaEJhcl9fMnRmUF9cIlxufTtcbiIsImltcG9ydCB7IHVzZVNXUkluZmluaXRlIH0gZnJvbSBcInN3clwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVBhZ2luYXRpb24gPSAocXVlcnlVUkwsIHBhZ2VTaXplLCBmZXRjaGVyKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbXV0YXRlLCBzaXplLCBzZXRTaXplLCBpc1ZhbGlkYXRpbmcgfSA9IHVzZVNXUkluZmluaXRlKFxyXG4gICAgKGluZGV4KSA9PiBgJHtxdWVyeVVSTH0mbGltaXQ9JHtwYWdlU2l6ZX0mb2Zmc2V0PSR7aW5kZXggKiBwYWdlU2l6ZX1gLFxyXG4gICAgZmV0Y2hlclxyXG4gICk7XHJcblxyXG4gIHJldHVybiB7IGRhdGEsIGVycm9yLCBtdXRhdGUsIHNpemUsIHNldFNpemUsIGlzVmFsaWRhdGluZyB9O1xyXG59O1xyXG4iLCJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUGFnaW5hdGlvbiB9IGZyb20gXCIuLi9ob29rcy91c2VQYWdpbmF0aW9uXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XHJcbmltcG9ydCBDYXJkc0Rpc3BsYXkgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZHNEaXNwbGF5XCI7XHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoQmFyXCI7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1BhZ2luYXRpb25cIjtcclxuXHJcbmNvbnN0IEluZGV4ID0gKHsgY2hhcmFjdGVycywgdG90YWwsIHF1b3RlcyB9KSA9PiB7XHJcbiAgbGV0IHNlYXJjaFJlc3VsdHMgPSBjaGFyYWN0ZXJzO1xyXG4gIGxldCB0b3RhbE51bWJlck9mUmVzdWx0cyA9IHRvdGFsO1xyXG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3NlYXJjaGVkLCBzZXRTZWFyY2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3JldmVhbCwgc2V0UmV2ZWFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY2hhck5hbWUsIHNldENoYXJOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzZWFyY2hWYWx1ZSwgc2V0U2VhcmNoVmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGF4aW9zLmdldCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpO1xyXG4gIGNvbnN0IHF1ZXJ5VVJMID0gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9Y2hhcmFjdGVycz9uYW1lPSR7cXVlcnl9YDtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBtdXRhdGUsIHNpemUsIHNldFNpemUsIGlzVmFsaWRhdGluZyB9ID0gdXNlUGFnaW5hdGlvbihcclxuICAgIHF1ZXJ5VVJMLFxyXG4gICAgMTIsXHJcbiAgICBmZXRjaGVyXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgY2hhcnMgPSBkYXRhID8gW10uY29uY2F0KC4uLmRhdGEpIDogW107XHJcbiAgY29uc3QgaXNMb2FkaW5nSW5pdGlhbERhdGEgPSAhZGF0YSAmJiAhZXJyb3I7XHJcbiAgY29uc3QgaXNMb2FkaW5nTW9yZSA9XHJcbiAgICBpc0xvYWRpbmdJbml0aWFsRGF0YSB8fFxyXG4gICAgKHNpemUgPiAwICYmIGRhdGEgJiYgdHlwZW9mIGRhdGFbc2l6ZSAtIDFdID09PSBcInVuZGVmaW5lZFwiKTtcclxuICBjb25zdCBpc0VtcHR5ID0gZGF0YT8uWzBdPy5sZW5ndGggPT09IDA7XHJcbiAgY29uc3QgaXNSZWFjaGluZ0VuZCA9IGlzRW1wdHkgfHwgKGRhdGEgJiYgZGF0YVtkYXRhLmxlbmd0aCAtIDFdPy5sZW5ndGggPCAxMik7XHJcbiAgY29uc3QgaXNSZWZyZXNoaW5nID0gaXNWYWxpZGF0aW5nICYmIGRhdGEgJiYgZGF0YS5sZW5ndGggPT09IHNpemU7XHJcblxyXG4gIGNvbnN0IHsgZGF0YTogY3VscHJpdCwgZXJyb3I6IGN1bHByaXRFcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgcmV2ZWFsXHJcbiAgICAgID8gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9ZGVhdGgtY291bnQ/bmFtZT0ke2NoYXJOYW1lfWBcclxuICAgICAgOiBudWxsLFxyXG4gICAgZmV0Y2hlclxyXG4gICk7XHJcblxyXG4gIGlmIChjaGFycy5sZW5ndGggIT09IDAgfHwgc2VhcmNoZWQpIHtcclxuICAgIHNlYXJjaFJlc3VsdHMgPSBjaGFycztcclxuICB9XHJcbiAgaWYgKHNlYXJjaGVkICYmIHF1ZXJ5KSB7XHJcbiAgICB0b3RhbE51bWJlck9mUmVzdWx0cyA9IGNoYXJzLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxTZWFyY2hCYXJcclxuICAgICAgICAgIHZhbHVlPXtzZWFyY2hWYWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoVmFsdWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgb25LZXlQcmVzcz17KGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgICBzZXRRdWVyeShzZWFyY2hWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgc2V0U2VhcmNoZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFF1ZXJ5KHNlYXJjaFZhbHVlKTtcclxuICAgICAgICAgICAgc2V0U2VhcmNoZWQodHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPENhcmRzRGlzcGxheVxyXG4gICAgICAgICAgY2hhcmFjdGVycz17c2VhcmNoUmVzdWx0c31cclxuICAgICAgICAgIHF1b3Rlcz17cXVvdGVzfVxyXG4gICAgICAgICAgY3VscHJpdD17Y3VscHJpdH1cclxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldENoYXJOYW1lKGUuY3VycmVudFRhcmdldC5uYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiK1wiKSk7XHJcbiAgICAgICAgICAgIHNldFJldmVhbCh0cnVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRTaXplKHNpemUgKyAxKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBpc0xvYWRpbmdNb3JlPXtpc0xvYWRpbmdNb3JlfVxyXG4gICAgICAgICAgaXNSZWFjaGluZ0VuZD17aXNSZWFjaGluZ0VuZH1cclxuICAgICAgICAgIGN1cnJlbnQ9e2NoYXJzLmxlbmd0aH1cclxuICAgICAgICAgIHRvdGFsPXt0b3RhbE51bWJlck9mUmVzdWx0c31cclxuICAgICAgICAvPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1jaGFyYWN0ZXJzP2xpbWl0PTEyYFxyXG4gICk7XHJcbiAgY29uc3QgcXVvdGVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfXF1b3Rlc2ApO1xyXG4gIGNvbnN0IGFsbENoYXIgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1jaGFyYWN0ZXJzYFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGNoYXJhY3RlcnM6IHJlc3VsdC5kYXRhLFxyXG4gICAgICB0b3RhbDogYWxsQ2hhci5kYXRhLmxlbmd0aCxcclxuICAgICAgcXVvdGVzOiBxdW90ZXMuZGF0YSxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd3JcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==