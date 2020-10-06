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
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("img", {
    alt: "",
    src: "/logo.png",
    className: _AppNavBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.logo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
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
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("img", {
    alt: "",
    src: "/bcs.svg.png",
    className: _AppNavBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.logo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
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
    className: _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.quote,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, quotes.find(quote => quote.author === character.name) ? `" ${quotes.find(quote => quote.author === character.name).quote} "` : ""), __jsx("div", {
    className: _CardsDisplay_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.deathCountButton,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outline-danger",
    name: character.name,
    onClick: onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
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
      lineNumber: 56,
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
	"quote": "CardsDisplay_quote__2QGrk",
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
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "E:\\breakingbad\\components\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Layout = props => {
  return __jsx("div", {
    className: "position-relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
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
      lineNumber: 12,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "description",
    content: "A Breaking Bad information site. Find out more information such as current status and kill counts about the characters here within simple clicks!",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "title",
    property: "og:title",
    content: "A Breaking Bad Fandom",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:type",
    content: "Website",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "image",
    property: "og:image",
    content: "https://res.cloudinary.com/rainforss/image/upload/v1602019986/breakingbadsite_uv8c93.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "description",
    property: "og:description",
    content: "A Breaking Bad information site. Find out more information such as current status and kill counts about the characters here within simple clicks!",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "author",
    content: "Jake Chen",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.contacts,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://www.linkedin.com/in/jake-chen-210818128/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.externalLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    style: {
      height: "100%"
    },
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faLinkedin"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  })), __jsx("a", {
    href: "https://github.com/rainforss/Breaking-Bad-Fandom",
    target: "_blank",
    rel: "noopener noreferrer",
    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.externalLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    style: {
      height: "100%"
    },
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faGithubSquare"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }))), __jsx(_AppNavBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
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
	"bgContainer": "Layout_bgContainer__TA56p",
	"contacts": "Layout_contacts__iu9yb",
	"externalLink": "Layout_externalLink__9qPWH"
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
    style: {
      fontSize: "0.9rem"
    },
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
      lineNumber: 18,
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
      lineNumber: 21,
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
    size: "sm",
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
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onClick,
    variant: "secondary",
    size: "sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
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
  const result = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`${"https://www.breakingbadapi.com/api/"}characters?category=Breaking+Bad&limit=12`);
  const quotes = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`${"https://www.breakingbadapi.com/api/"}quotes`);
  const allChar = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`${"https://www.breakingbadapi.com/api/"}characters?category=Breaking+Bad`);
  return {
    props: {
      characters: result.data,
      total: allChar.data.length,
      quotes: quotes.data
    }
  };
};

/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHBOYXZCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHBOYXZCYXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmRzRGlzcGxheS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmRzRGlzcGxheS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYWdpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoQmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoQmFyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlUGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3dyXCIiXSwibmFtZXMiOlsiQXBwTmF2YmFyIiwicm91dGVyIiwidXNlUm91dGVyIiwiekluZGV4IiwicHVzaCIsInBhdGhuYW1lIiwiZGlzcGxheSIsInN0eWxlcyIsImxvZ28iLCJDYXJkc0Rpc3BsYXkiLCJjaGFyYWN0ZXJzIiwiY3VscHJpdCIsIm9uQ2xpY2siLCJxdW90ZXMiLCJTZXJpYWxpemUiLCJzdHJpbmciLCJzcGxpdCIsImpvaW4iLCJjYXJkU2VjdGlvbiIsIm1hcCIsImNoYXJhY3RlciIsImNoYXJfaWQiLCJmbGlwQ2FyZCIsImZsaXBDYXJkSW5uZXIiLCJmbGlwQ2FyZEZyb250IiwiY2FyZEltYWdlIiwiaW1nIiwibmFtZSIsImZsaXBDYXJkQmFjayIsImNoYXJJbmZvIiwiY2FyZFRpdGxlIiwiYmlydGhkYXkiLCJuaWNrbmFtZSIsIm9jY3VwYXRpb24iLCJqb2IiLCJxdW90ZSIsImZpbmQiLCJhdXRob3IiLCJkZWF0aENvdW50QnV0dG9uIiwiZGVhdGhDb3VudCIsImNoYXJTdGF0dXMiLCJzdGF0dXMiLCJjb2xvciIsIkxheW91dCIsInByb3BzIiwiY29udGFjdHMiLCJleHRlcm5hbExpbmsiLCJoZWlnaHQiLCJmYUxpbmtlZGluIiwiZmFHaXRodWJTcXVhcmUiLCJjaGlsZHJlbiIsIlBhZ2luYXRpb24iLCJ0b3RhbCIsImN1cnJlbnQiLCJpc0xvYWRpbmdNb3JlIiwiaXNSZWFjaGluZ0VuZCIsImZvbnRTaXplIiwiU2VhcmNoQmFyIiwidmFsdWUiLCJvbkNoYW5nZSIsIm9uS2V5UHJlc3MiLCJzZWFyY2hCYXIiLCJ1c2VQYWdpbmF0aW9uIiwicXVlcnlVUkwiLCJwYWdlU2l6ZSIsImZldGNoZXIiLCJkYXRhIiwiZXJyb3IiLCJtdXRhdGUiLCJzaXplIiwic2V0U2l6ZSIsImlzVmFsaWRhdGluZyIsInVzZVNXUkluZmluaXRlIiwiaW5kZXgiLCJJbmRleCIsInNlYXJjaFJlc3VsdHMiLCJ0b3RhbE51bWJlck9mUmVzdWx0cyIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJ1c2VTdGF0ZSIsInNlYXJjaGVkIiwic2V0U2VhcmNoZWQiLCJyZXZlYWwiLCJzZXRSZXZlYWwiLCJjaGFyTmFtZSIsInNldENoYXJOYW1lIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsInVybCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsInByb2Nlc3MiLCJjaGFycyIsImNvbmNhdCIsImlzTG9hZGluZ0luaXRpYWxEYXRhIiwiaXNFbXB0eSIsImxlbmd0aCIsImlzUmVmcmVzaGluZyIsImN1bHByaXRFcnJvciIsInVzZVNXUiIsImUiLCJ0YXJnZXQiLCJrZXkiLCJjdXJyZW50VGFyZ2V0IiwiZ2V0U3RhdGljUHJvcHMiLCJyZXN1bHQiLCJhbGxDaGFyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxTQUFTLEdBQUcsTUFBTTtBQUN0QixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsU0FDRSxNQUFDLHNEQUFEO0FBQ0UsTUFB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dEI7QUFHQSxTQUFPO0FBQ0xqRCxTQUFLLEVBQUU7QUFDTGxDLGdCQUFVLEVBQUVpRyxNQUFNLENBQUN6QyxJQURkO0FBRUxkLFdBQUssRUFBRXdELE9BQU8sQ0FBQzFDLElBQVIsQ0FBYWdDLE1BRmY7QUFHTHJGLFlBQU0sRUFBRUEsTUFBTSxDQUFDcUQ7QUFIVjtBQURGLEdBQVA7QUFPRCxDQWZNLEM7Ozs7Ozs7Ozs7O0FDMUZQLCtEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQXBwTmF2QmFyLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IEFwcE5hdmJhciA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPE5hdmJhclxyXG4gICAgICBiZz1cInRyYW5zcGFyZW50XCJcclxuICAgICAgdmFyaWFudD1cImRhcmtcIlxyXG4gICAgICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBweS01XCJcclxuICAgICAgc3R5bGU9e3sgekluZGV4OiAxMCB9fVxyXG4gICAgPlxyXG4gICAgICA8TmF2YmFyLkJyYW5kXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvc3Bpbm9mZlwiKX1cclxuICAgICAgICBjbGFzc05hbWU9XCJtci0wXCJcclxuICAgICAgICBzdHlsZT17cm91dGVyLnBhdGhuYW1lID09PSBcIi9cIiA/IHt9IDogeyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGltZyBhbHQ9XCJcIiBzcmM9XCIvbG9nby5wbmdcIiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSAvPlxyXG4gICAgICA8L05hdmJhci5CcmFuZD5cclxuICAgICAgPE5hdmJhci5CcmFuZFxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1wiKX1cclxuICAgICAgICBjbGFzc05hbWU9XCJtci0wXCJcclxuICAgICAgICBzdHlsZT17cm91dGVyLnBhdGhuYW1lID09PSBcIi9zcGlub2ZmXCIgPyB7fSA6IHsgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxpbWcgYWx0PVwiXCIgc3JjPVwiL2Jjcy5zdmcucG5nXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gLz5cclxuICAgICAgPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICA8L05hdmJhcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTmF2YmFyO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkZXJcIjogXCJBcHBOYXZCYXJfaGVhZGVyX18xelNWWVwiLFxuXHRcImxvZ29cIjogXCJBcHBOYXZCYXJfbG9nb19fMjByV09cIixcblx0XCJsaW5rc1wiOiBcIkFwcE5hdkJhcl9saW5rc19fMVVIX2RcIlxufTtcbiIsImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9DYXJkc0Rpc3BsYXkubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgQ2FyZHNEaXNwbGF5ID0gKHsgY2hhcmFjdGVycywgY3VscHJpdCwgb25DbGljaywgcXVvdGVzIH0pID0+IHtcclxuICBjb25zdCBTZXJpYWxpemUgPSAoc3RyaW5nKSA9PiBzdHJpbmcuc3BsaXQoXCIgXCIpLmpvaW4oXCJfXCIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRTZWN0aW9ufT5cclxuICAgICAge2NoYXJhY3RlcnMubWFwKChjaGFyYWN0ZXIpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17Y2hhcmFjdGVyLmNoYXJfaWR9IGNsYXNzTmFtZT17c3R5bGVzLmZsaXBDYXJkfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxpcENhcmRJbm5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxpcENhcmRGcm9udH0+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZEltYWdlfVxyXG4gICAgICAgICAgICAgICAgc3JjPXtjaGFyYWN0ZXIuaW1nfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtjaGFyYWN0ZXIubmFtZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGlwQ2FyZEJhY2t9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhckluZm99PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL2JyZWFraW5nYmFkLmZhbmRvbS5jb20vd2lraS8ke1NlcmlhbGl6ZShcclxuICAgICAgICAgICAgICAgICAgICAgIGNoYXJhY3Rlci5uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgKX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hhcmFjdGVyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5CaXJ0aGRheToge2NoYXJhY3Rlci5iaXJ0aGRheX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+Tmlja25hbWU6IHtjaGFyYWN0ZXIubmlja25hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7Y2hhcmFjdGVyLm9jY3VwYXRpb24ubWFwKChqb2IpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2pvYn0+e2pvYn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucXVvdGV9PlxyXG4gICAgICAgICAgICAgICAge3F1b3Rlcy5maW5kKChxdW90ZSkgPT4gcXVvdGUuYXV0aG9yID09PSBjaGFyYWN0ZXIubmFtZSlcclxuICAgICAgICAgICAgICAgICAgPyBgXCIgJHtcclxuICAgICAgICAgICAgICAgICAgICAgIHF1b3Rlcy5maW5kKChxdW90ZSkgPT4gcXVvdGUuYXV0aG9yID09PSBjaGFyYWN0ZXIubmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1b3RlXHJcbiAgICAgICAgICAgICAgICAgICAgfSBcImBcclxuICAgICAgICAgICAgICAgICAgOiBcIlwifVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVhdGhDb3VudEJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lLWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9e2NoYXJhY3Rlci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7Y3VscHJpdCAmJiBjaGFyYWN0ZXIubmFtZSA9PT0gY3VscHJpdFswXS5uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgPyBjdWxwcml0WzBdLmRlYXRoQ291bnRcclxuICAgICAgICAgICAgICAgICAgICA6IFwiUmV2ZWFsIEtpbGwgQ291bnRcIn1cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNoYXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgIGNoYXJhY3Rlci5zdGF0dXMgPT09IFwiQWxpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID8geyBjb2xvcjogXCJncmVlblwiIH1cclxuICAgICAgICAgICAgICAgICAgICA6IHsgY29sb3I6IFwieWVsbG93XCIgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjaGFyYWN0ZXIuc3RhdHVzfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkc0Rpc3BsYXk7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNhcmRTZWN0aW9uXCI6IFwiQ2FyZHNEaXNwbGF5X2NhcmRTZWN0aW9uX18zRERiZVwiLFxuXHRcImZsaXBDYXJkXCI6IFwiQ2FyZHNEaXNwbGF5X2ZsaXBDYXJkX18xUGhjLVwiLFxuXHRcImZsaXBDYXJkSW5uZXJcIjogXCJDYXJkc0Rpc3BsYXlfZmxpcENhcmRJbm5lcl9fRkwwVDFcIixcblx0XCJjYXJkSW1hZ2VcIjogXCJDYXJkc0Rpc3BsYXlfY2FyZEltYWdlX181U3BmVFwiLFxuXHRcImZsaXBDYXJkRnJvbnRcIjogXCJDYXJkc0Rpc3BsYXlfZmxpcENhcmRGcm9udF9fQmFSV0VcIixcblx0XCJmbGlwQ2FyZEJhY2tcIjogXCJDYXJkc0Rpc3BsYXlfZmxpcENhcmRCYWNrX18xZ05aVlwiLFxuXHRcImNoYXJJbmZvXCI6IFwiQ2FyZHNEaXNwbGF5X2NoYXJJbmZvX19kVDc0VVwiLFxuXHRcImNhcmRUaXRsZVwiOiBcIkNhcmRzRGlzcGxheV9jYXJkVGl0bGVfXzNYZGZZXCIsXG5cdFwicXVvdGVcIjogXCJDYXJkc0Rpc3BsYXlfcXVvdGVfXzJRR3JrXCIsXG5cdFwiZGVhdGhDb3VudEJ1dHRvblwiOiBcIkNhcmRzRGlzcGxheV9kZWF0aENvdW50QnV0dG9uX18yZW80N1wiLFxuXHRcImNoYXJTdGF0dXNcIjogXCJDYXJkc0Rpc3BsYXlfY2hhclN0YXR1c19fMXlkOHlcIlxufTtcbiIsImltcG9ydCBBcHBOYXZCYXIgZnJvbSBcIi4vQXBwTmF2QmFyXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9MYXlvdXQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IGZhR2l0aHViU3F1YXJlLCBmYUxpbmtlZGluIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIjtcclxuXHJcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5UaGUgQnJlYWtpbmcgQmFkIFVuaXZlcnNlPC90aXRsZT5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC05YUl0Mm5ScEMxMlVrOWdTOWJhRGw0MTFOUUFwRm1DMjZFd0FPSDhXZ1psNU1ZWXhGZmMrTmNQYjFkS0dqN1NrXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgY29udGVudD1cIkEgQnJlYWtpbmcgQmFkIGluZm9ybWF0aW9uIHNpdGUuIEZpbmQgb3V0IG1vcmUgaW5mb3JtYXRpb24gc3VjaCBhcyBjdXJyZW50IHN0YXR1cyBhbmQga2lsbCBjb3VudHMgYWJvdXQgdGhlIGNoYXJhY3RlcnMgaGVyZSB3aXRoaW4gc2ltcGxlIGNsaWNrcyFcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOnRpdGxlXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJBIEJyZWFraW5nIEJhZCBGYW5kb21cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIldlYnNpdGVcIiAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZVwiXHJcbiAgICAgICAgICBjb250ZW50PVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vcmFpbmZvcnNzL2ltYWdlL3VwbG9hZC92MTYwMjAxOTk4Ni9icmVha2luZ2JhZHNpdGVfdXY4YzkzLnBuZ1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgY29udGVudD1cIkEgQnJlYWtpbmcgQmFkIGluZm9ybWF0aW9uIHNpdGUuIEZpbmQgb3V0IG1vcmUgaW5mb3JtYXRpb24gc3VjaCBhcyBjdXJyZW50IHN0YXR1cyBhbmQga2lsbCBjb3VudHMgYWJvdXQgdGhlIGNoYXJhY3RlcnMgaGVyZSB3aXRoaW4gc2ltcGxlIGNsaWNrcyFcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJKYWtlIENoZW5cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdHN9PlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2pha2UtY2hlbi0yMTA4MTgxMjgvXCJcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmV4dGVybmFsTGlua31cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIgfX0gaWNvbj17ZmFMaW5rZWRpbn0gLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcmFpbmZvcnNzL0JyZWFraW5nLUJhZC1GYW5kb21cIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZXh0ZXJuYWxMaW5rfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fSBpY29uPXtmYUdpdGh1YlNxdWFyZX0gLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPEFwcE5hdkJhciAvPlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJiZ0NvbnRhaW5lclwiOiBcIkxheW91dF9iZ0NvbnRhaW5lcl9fVEE1NnBcIixcblx0XCJjb250YWN0c1wiOiBcIkxheW91dF9jb250YWN0c19faXU5eWJcIixcblx0XCJleHRlcm5hbExpbmtcIjogXCJMYXlvdXRfZXh0ZXJuYWxMaW5rX185cVBXSFwiXG59O1xuIiwiaW1wb3J0IHsgQWxlcnQsIEJ1dHRvbiwgUHJvZ3Jlc3NCYXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcblxyXG5jb25zdCBQYWdpbmF0aW9uID0gKHtcclxuICBvbkNsaWNrLFxyXG4gIHRvdGFsLFxyXG4gIGN1cnJlbnQsXHJcbiAgaXNMb2FkaW5nTW9yZSxcclxuICBpc1JlYWNoaW5nRW5kLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy03NSBteC1hdXRvIG15LTVcIj5cclxuICAgICAgPEFsZXJ0XHJcbiAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjAuOXJlbVwiIH19XHJcbiAgICAgICAgdmFyaWFudD1cImRhcmtcIlxyXG4gICAgICA+XHJcbiAgICAgICAgRGlzcGxheWluZyB7Y3VycmVudH0gb3V0IG9mIHt0b3RhbH0gY2hhcmFjdGVyc1xyXG4gICAgICAgIDxQcm9ncmVzc0JhciBhbmltYXRlZCBub3c9e2N1cnJlbnR9IG1heD17dG90YWx9IGNsYXNzTmFtZT1cIm10LTNcIiAvPlxyXG4gICAgICA8L0FsZXJ0PlxyXG5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgICAgYmxvY2tcclxuICAgICAgICB2YXJpYW50PVwiaW5mb1wiXHJcbiAgICAgICAgZGlzYWJsZWQ9e2lzUmVhY2hpbmdFbmQgfHwgaXNMb2FkaW5nTW9yZSB8fCBjdXJyZW50ID09PSB0b3RhbH1cclxuICAgICAgPlxyXG4gICAgICAgIHtpc0xvYWRpbmdNb3JlXHJcbiAgICAgICAgICA/IFwiTG9hZGluZy4uLlwiXHJcbiAgICAgICAgICA6IGlzUmVhY2hpbmdFbmQgfHwgY3VycmVudCA9PT0gdG90YWxcclxuICAgICAgICAgID8gXCJObyBNb3JlIFJlc3VsdHNcIlxyXG4gICAgICAgICAgOiBcIkxvYWQgTW9yZSBSZXN1bHRzXCJ9XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb247XHJcbiIsImltcG9ydCB7IElucHV0R3JvdXAsIEZvcm1Db250cm9sLCBCdXR0b24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vU2VhcmNoQmFyLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IFNlYXJjaEJhciA9ICh7IHZhbHVlLCBvbkNoYW5nZSwgb25DbGljaywgb25LZXlQcmVzcyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoQmFyfT5cclxuICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiU2VhcmNoLi4uXCJcclxuICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJiYXNpYy1hZGRvbjJcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgb25LZXlQcmVzcz17b25LZXlQcmVzc31cclxuICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SW5wdXRHcm91cC5BcHBlbmQ+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2t9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBzaXplPVwic21cIj5cclxuICAgICAgICAgICAgU2VhcmNoXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0lucHV0R3JvdXAuQXBwZW5kPlxyXG4gICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzZWFyY2hCYXJcIjogXCJTZWFyY2hCYXJfc2VhcmNoQmFyX18ydGZQX1wiXG59O1xuIiwiaW1wb3J0IHsgdXNlU1dSSW5maW5pdGUgfSBmcm9tIFwic3dyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlUGFnaW5hdGlvbiA9IChxdWVyeVVSTCwgcGFnZVNpemUsIGZldGNoZXIpID0+IHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBtdXRhdGUsIHNpemUsIHNldFNpemUsIGlzVmFsaWRhdGluZyB9ID0gdXNlU1dSSW5maW5pdGUoXHJcbiAgICAoaW5kZXgpID0+IGAke3F1ZXJ5VVJMfSZsaW1pdD0ke3BhZ2VTaXplfSZvZmZzZXQ9JHtpbmRleCAqIHBhZ2VTaXplfWAsXHJcbiAgICBmZXRjaGVyXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHsgZGF0YSwgZXJyb3IsIG11dGF0ZSwgc2l6ZSwgc2V0U2l6ZSwgaXNWYWxpZGF0aW5nIH07XHJcbn07XHJcbiIsImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VQYWdpbmF0aW9uIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVBhZ2luYXRpb25cIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuaW1wb3J0IENhcmRzRGlzcGxheSBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkc0Rpc3BsYXlcIjtcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2hCYXJcIjtcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvUGFnaW5hdGlvblwiO1xyXG5cclxuY29uc3QgSW5kZXggPSAoeyBjaGFyYWN0ZXJzLCB0b3RhbCwgcXVvdGVzIH0pID0+IHtcclxuICBsZXQgc2VhcmNoUmVzdWx0cyA9IGNoYXJhY3RlcnM7XHJcbiAgbGV0IHRvdGFsTnVtYmVyT2ZSZXN1bHRzID0gdG90YWw7XHJcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc2VhcmNoZWQsIHNldFNlYXJjaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcmV2ZWFsLCBzZXRSZXZlYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjaGFyTmFtZSwgc2V0Q2hhck5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3NlYXJjaFZhbHVlLCBzZXRTZWFyY2hWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBmZXRjaGVyID0gKHVybCkgPT4gYXhpb3MuZ2V0KHVybCkudGhlbigocmVzKSA9PiByZXMuZGF0YSk7XHJcbiAgY29uc3QgcXVlcnlVUkwgPSBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1jaGFyYWN0ZXJzP25hbWU9JHtxdWVyeX1gO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIG11dGF0ZSwgc2l6ZSwgc2V0U2l6ZSwgaXNWYWxpZGF0aW5nIH0gPSB1c2VQYWdpbmF0aW9uKFxyXG4gICAgcXVlcnlVUkwsXHJcbiAgICAxMixcclxuICAgIGZldGNoZXJcclxuICApO1xyXG5cclxuICBjb25zdCBjaGFycyA9IGRhdGEgPyBbXS5jb25jYXQoLi4uZGF0YSkgOiBbXTtcclxuICBjb25zdCBpc0xvYWRpbmdJbml0aWFsRGF0YSA9ICFkYXRhICYmICFlcnJvcjtcclxuICBjb25zdCBpc0xvYWRpbmdNb3JlID1cclxuICAgIGlzTG9hZGluZ0luaXRpYWxEYXRhIHx8XHJcbiAgICAoc2l6ZSA+IDAgJiYgZGF0YSAmJiB0eXBlb2YgZGF0YVtzaXplIC0gMV0gPT09IFwidW5kZWZpbmVkXCIpO1xyXG4gIGNvbnN0IGlzRW1wdHkgPSBkYXRhPy5bMF0/Lmxlbmd0aCA9PT0gMDtcclxuICBjb25zdCBpc1JlYWNoaW5nRW5kID0gaXNFbXB0eSB8fCAoZGF0YSAmJiBkYXRhW2RhdGEubGVuZ3RoIC0gMV0/Lmxlbmd0aCA8IDEyKTtcclxuICBjb25zdCBpc1JlZnJlc2hpbmcgPSBpc1ZhbGlkYXRpbmcgJiYgZGF0YSAmJiBkYXRhLmxlbmd0aCA9PT0gc2l6ZTtcclxuXHJcbiAgY29uc3QgeyBkYXRhOiBjdWxwcml0LCBlcnJvcjogY3VscHJpdEVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICByZXZlYWxcclxuICAgICAgPyBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1kZWF0aC1jb3VudD9uYW1lPSR7Y2hhck5hbWV9YFxyXG4gICAgICA6IG51bGwsXHJcbiAgICBmZXRjaGVyXHJcbiAgKTtcclxuXHJcbiAgaWYgKGNoYXJzLmxlbmd0aCAhPT0gMCB8fCBzZWFyY2hlZCkge1xyXG4gICAgc2VhcmNoUmVzdWx0cyA9IGNoYXJzO1xyXG4gIH1cclxuICBpZiAoc2VhcmNoZWQgJiYgcXVlcnkpIHtcclxuICAgIHRvdGFsTnVtYmVyT2ZSZXN1bHRzID0gY2hhcnMubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPFNlYXJjaEJhclxyXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaFZhbHVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hWYWx1ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBvbktleVByZXNzPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICAgIHNldFF1ZXJ5KHNlYXJjaFZhbHVlKTtcclxuICAgICAgICAgICAgICBzZXRTZWFyY2hlZCh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0UXVlcnkoc2VhcmNoVmFsdWUpO1xyXG4gICAgICAgICAgICBzZXRTZWFyY2hlZCh0cnVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Q2FyZHNEaXNwbGF5XHJcbiAgICAgICAgICBjaGFyYWN0ZXJzPXtzZWFyY2hSZXN1bHRzfVxyXG4gICAgICAgICAgcXVvdGVzPXtxdW90ZXN9XHJcbiAgICAgICAgICBjdWxwcml0PXtjdWxwcml0fVxyXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgc2V0Q2hhck5hbWUoZS5jdXJyZW50VGFyZ2V0Lm5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCIrXCIpKTtcclxuICAgICAgICAgICAgc2V0UmV2ZWFsKHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFNpemUoc2l6ZSArIDEpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGlzTG9hZGluZ01vcmU9e2lzTG9hZGluZ01vcmV9XHJcbiAgICAgICAgICBpc1JlYWNoaW5nRW5kPXtpc1JlYWNoaW5nRW5kfVxyXG4gICAgICAgICAgY3VycmVudD17Y2hhcnMubGVuZ3RofVxyXG4gICAgICAgICAgdG90YWw9e3RvdGFsTnVtYmVyT2ZSZXN1bHRzfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfWNoYXJhY3RlcnM/Y2F0ZWdvcnk9QnJlYWtpbmcrQmFkJmxpbWl0PTEyYFxyXG4gICk7XHJcbiAgY29uc3QgcXVvdGVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfXF1b3Rlc2ApO1xyXG4gIGNvbnN0IGFsbENoYXIgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1jaGFyYWN0ZXJzP2NhdGVnb3J5PUJyZWFraW5nK0JhZGBcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBjaGFyYWN0ZXJzOiByZXN1bHQuZGF0YSxcclxuICAgICAgdG90YWw6IGFsbENoYXIuZGF0YS5sZW5ndGgsXHJcbiAgICAgIHF1b3RlczogcXVvdGVzLmRhdGEsXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=