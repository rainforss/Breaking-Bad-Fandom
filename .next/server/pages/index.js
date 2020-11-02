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
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
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
  total,
  quotes
}) => {
  var _data$, _data;

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
  let searchResults = chars;

  if (searched && query) {
    totalNumberOfResults = chars.length;
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
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
      lineNumber: 50,
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
      lineNumber: 64,
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
      lineNumber: 73,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);
const getServerSideProps = async () => {
  // const result = await axios.get(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}characters?limit=12`
  // );
  const quotes = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`${"https://www.breakingbadapi.com/api/"}quotes`);
  const allChar = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`${"https://www.breakingbadapi.com/api/"}characters`);
  return {
    props: {
      // characters: result.data,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHBOYXZCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHBOYXZCYXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmRzRGlzcGxheS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmRzRGlzcGxheS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYWdpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoQmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoQmFyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlUGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3dyXCIiXSwibmFtZXMiOlsiQXBwTmF2YmFyIiwicm91dGVyIiwidXNlUm91dGVyIiwiekluZGV4IiwicHVzaCIsInBhdGhuYW1lIiwiZGlzcGxheSIsInN0eWxlcyIsImxvZ28iLCJDYXJkc0Rpc3BsYXkiLCJjaGFyYWN0ZXJzIiwiY3VscHJpdCIsIm9uQ2xpY2siLCJxdW90ZXMiLCJTZXJpYWxpemUiLCJzdHJpbmciLCJzcGxpdCIsImpvaW4iLCJjYXJkU2VjdGlvbiIsIm1hcCIsImNoYXJhY3RlciIsImNoYXJfaWQiLCJmbGlwQ2FyZCIsImZsaXBDYXJkSW5uZXIiLCJmbGlwQ2FyZEZyb250IiwiY2FyZEltYWdlIiwiaW1nIiwibmFtZSIsImZsaXBDYXJkQmFjayIsImNoYXJJbmZvIiwiY2FyZFRpdGxlIiwiYmlydGhkYXkiLCJuaWNrbmFtZSIsIm9jY3VwYXRpb24iLCJqb2IiLCJxdW90ZSIsImZpbmQiLCJhdXRob3IiLCJkZWF0aENvdW50QnV0dG9uIiwiZGVhdGhDb3VudCIsImNoYXJTdGF0dXMiLCJzdGF0dXMiLCJjb2xvciIsIkxheW91dCIsInByb3BzIiwiY29udGFjdHMiLCJleHRlcm5hbExpbmsiLCJoZWlnaHQiLCJmYUxpbmtlZGluIiwiZmFHaXRodWJTcXVhcmUiLCJjaGlsZHJlbiIsIlBhZ2luYXRpb24iLCJ0b3RhbCIsImN1cnJlbnQiLCJpc0xvYWRpbmdNb3JlIiwiaXNSZWFjaGluZ0VuZCIsImZvbnRTaXplIiwiU2VhcmNoQmFyIiwidmFsdWUiLCJvbkNoYW5nZSIsIm9uS2V5UHJlc3MiLCJzZWFyY2hCYXIiLCJ1c2VQYWdpbmF0aW9uIiwicXVlcnlVUkwiLCJwYWdlU2l6ZSIsImZldGNoZXIiLCJkYXRhIiwiZXJyb3IiLCJtdXRhdGUiLCJzaXplIiwic2V0U2l6ZSIsImlzVmFsaWRhdGluZyIsInVzZVNXUkluZmluaXRlIiwiaW5kZXgiLCJJbmRleCIsInRvdGFsTnVtYmVyT2ZSZXN1bHRzIiwicXVlcnkiLCJzZXRRdWVyeSIsInVzZVN0YXRlIiwic2VhcmNoZWQiLCJzZXRTZWFyY2hlZCIsInJldmVhbCIsInNldFJldmVhbCIsImNoYXJOYW1lIiwic2V0Q2hhck5hbWUiLCJzZWFyY2hWYWx1ZSIsInNldFNlYXJjaFZhbHVlIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwicHJvY2VzcyIsImNoYXJzIiwiY29uY2F0IiwiaXNMb2FkaW5nSW5pdGlhbERhdGEiLCJpc0VtcHR5IiwibGVuZ3RoIiwiaXNSZWZyZXNoaW5nIiwiY3VscHJpdEVycm9yIiwidXNlU1dSIiwic2VhcmNoUmVzdWx0cyIsImUiLCJ0YXJnZXQiLCJrZXkiLCJjdXJyZW50VGFyZ2V0IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiYWxsQ2hhciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsU0FBUyxHQUFHLE1BQU07QUFDdEIsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFNBQ0UsTUFBQyxzREFBRDtBQUNFLE1BQUUsRUFB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QUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9BcHBOYXZCYXIubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgQXBwTmF2YmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TmF2YmFyXHJcbiAgICAgIGJnPVwidHJhbnNwYXJlbnRcIlxyXG4gICAgICB2YXJpYW50PVwiZGFya1wiXHJcbiAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHB5LTVcIlxyXG4gICAgICBzdHlsZT17eyB6SW5kZXg6IDEwIH19XHJcbiAgICA+XHJcbiAgICAgIDxOYXZiYXIuQnJhbmRcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9zcGlub2ZmXCIpfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1yLTBcIlxyXG4gICAgICAgIHN0eWxlPXtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL1wiID8ge30gOiB7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8aW1nIGFsdD1cIlwiIHNyYz1cIi9sb2dvLnBuZ1wiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IC8+XHJcbiAgICAgIDwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICA8TmF2YmFyLkJyYW5kXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1yLTBcIlxyXG4gICAgICAgIHN0eWxlPXtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL3NwaW5vZmZcIiA/IHt9IDogeyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGltZyBhbHQ9XCJcIiBzcmM9XCIvYmNzLnN2Zy5wbmdcIiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSAvPlxyXG4gICAgICA8L05hdmJhci5CcmFuZD5cclxuICAgIDwvTmF2YmFyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBOYXZiYXI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRlclwiOiBcIkFwcE5hdkJhcl9oZWFkZXJfXzF6U1ZZXCIsXG5cdFwibG9nb1wiOiBcIkFwcE5hdkJhcl9sb2dvX18yMHJXT1wiLFxuXHRcImxpbmtzXCI6IFwiQXBwTmF2QmFyX2xpbmtzX18xVUhfZFwiXG59O1xuIiwiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NhcmRzRGlzcGxheS5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBDYXJkc0Rpc3BsYXkgPSAoeyBjaGFyYWN0ZXJzLCBjdWxwcml0LCBvbkNsaWNrLCBxdW90ZXMgfSkgPT4ge1xyXG4gIGNvbnN0IFNlcmlhbGl6ZSA9IChzdHJpbmcpID0+IHN0cmluZy5zcGxpdChcIiBcIikuam9pbihcIl9cIik7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZFNlY3Rpb259PlxyXG4gICAgICB7Y2hhcmFjdGVycy5tYXAoKGNoYXJhY3RlcikgPT4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtjaGFyYWN0ZXIuY2hhcl9pZH0gY2xhc3NOYW1lPXtzdHlsZXMuZmxpcENhcmR9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGlwQ2FyZElubmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGlwQ2FyZEZyb250fT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBzcmM9e2NoYXJhY3Rlci5pbWd9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e2NoYXJhY3Rlci5uYW1lfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsaXBDYXJkQmFja30+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFySW5mb30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRUaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vYnJlYWtpbmdiYWQuZmFuZG9tLmNvbS93aWtpLyR7U2VyaWFsaXplKFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyLm5hbWVcclxuICAgICAgICAgICAgICAgICAgICApfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGFyYWN0ZXIubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PkJpcnRoZGF5OiB7Y2hhcmFjdGVyLmJpcnRoZGF5fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5OaWNrbmFtZToge2NoYXJhY3Rlci5uaWNrbmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtjaGFyYWN0ZXIub2NjdXBhdGlvbi5tYXAoKGpvYikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17am9ifT57am9ifTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdW90ZX0+XHJcbiAgICAgICAgICAgICAgICB7cXVvdGVzLmZpbmQoKHF1b3RlKSA9PiBxdW90ZS5hdXRob3IgPT09IGNoYXJhY3Rlci5uYW1lKVxyXG4gICAgICAgICAgICAgICAgICA/IGBcIiAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgcXVvdGVzLmZpbmQoKHF1b3RlKSA9PiBxdW90ZS5hdXRob3IgPT09IGNoYXJhY3Rlci5uYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVvdGVcclxuICAgICAgICAgICAgICAgICAgICB9IFwiYFxyXG4gICAgICAgICAgICAgICAgICA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZWF0aENvdW50QnV0dG9ufT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmUtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT17Y2hhcmFjdGVyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtjdWxwcml0ICYmIGNoYXJhY3Rlci5uYW1lID09PSBjdWxwcml0WzBdLm5hbWVcclxuICAgICAgICAgICAgICAgICAgICA/IGN1bHByaXRbMF0uZGVhdGhDb3VudFxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJSZXZlYWwgS2lsbCBDb3VudFwifVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2hhclN0YXR1c31cclxuICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyLnN0YXR1cyA9PT0gXCJBbGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyB7IGNvbG9yOiBcImdyZWVuXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgIDogeyBjb2xvcjogXCJ5ZWxsb3dcIiB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2NoYXJhY3Rlci5zdGF0dXN9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRzRGlzcGxheTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2FyZFNlY3Rpb25cIjogXCJDYXJkc0Rpc3BsYXlfY2FyZFNlY3Rpb25fXzNERGJlXCIsXG5cdFwiZmxpcENhcmRcIjogXCJDYXJkc0Rpc3BsYXlfZmxpcENhcmRfXzFQaGMtXCIsXG5cdFwiZmxpcENhcmRJbm5lclwiOiBcIkNhcmRzRGlzcGxheV9mbGlwQ2FyZElubmVyX19GTDBUMVwiLFxuXHRcImNhcmRJbWFnZVwiOiBcIkNhcmRzRGlzcGxheV9jYXJkSW1hZ2VfXzVTcGZUXCIsXG5cdFwiZmxpcENhcmRGcm9udFwiOiBcIkNhcmRzRGlzcGxheV9mbGlwQ2FyZEZyb250X19CYVJXRVwiLFxuXHRcImZsaXBDYXJkQmFja1wiOiBcIkNhcmRzRGlzcGxheV9mbGlwQ2FyZEJhY2tfXzFnTlpWXCIsXG5cdFwiY2hhckluZm9cIjogXCJDYXJkc0Rpc3BsYXlfY2hhckluZm9fX2RUNzRVXCIsXG5cdFwiY2FyZFRpdGxlXCI6IFwiQ2FyZHNEaXNwbGF5X2NhcmRUaXRsZV9fM1hkZllcIixcblx0XCJxdW90ZVwiOiBcIkNhcmRzRGlzcGxheV9xdW90ZV9fMlFHcmtcIixcblx0XCJkZWF0aENvdW50QnV0dG9uXCI6IFwiQ2FyZHNEaXNwbGF5X2RlYXRoQ291bnRCdXR0b25fXzJlbzQ3XCIsXG5cdFwiY2hhclN0YXR1c1wiOiBcIkNhcmRzRGlzcGxheV9jaGFyU3RhdHVzX18xeWQ4eVwiXG59O1xuIiwiaW1wb3J0IEFwcE5hdkJhciBmcm9tIFwiLi9BcHBOYXZCYXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0xheW91dC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFHaXRodWJTcXVhcmUsIGZhTGlua2VkaW4gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29uc1wiO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlRoZSBCcmVha2luZyBCYWQgVW5pdmVyc2U8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LTlhSXQyblJwQzEyVWs5Z1M5YmFEbDQxMU5RQXBGbUMyNkV3QU9IOFdnWmw1TVlZeEZmYytOY1BiMWRLR2o3U2tcIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBjb250ZW50PVwiQSBCcmVha2luZyBCYWQgaW5mb3JtYXRpb24gc2l0ZS4gRmluZCBvdXQgbW9yZSBpbmZvcm1hdGlvbiBzdWNoIGFzIGN1cnJlbnQgc3RhdHVzIGFuZCBraWxsIGNvdW50cyBhYm91dCB0aGUgY2hhcmFjdGVycyBoZXJlIHdpdGhpbiBzaW1wbGUgY2xpY2tzIVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgIHByb3BlcnR5PVwib2c6dGl0bGVcIlxyXG4gICAgICAgICAgY29udGVudD1cIkEgQnJlYWtpbmcgQmFkIEZhbmRvbVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwiV2Vic2l0ZVwiIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXHJcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9yYWluZm9yc3MvaW1hZ2UvdXBsb2FkL3YxNjAyMDE5OTg2L2JyZWFraW5nYmFkc2l0ZV91djhjOTMucG5nXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBjb250ZW50PVwiQSBCcmVha2luZyBCYWQgaW5mb3JtYXRpb24gc2l0ZS4gRmluZCBvdXQgbW9yZSBpbmZvcm1hdGlvbiBzdWNoIGFzIGN1cnJlbnQgc3RhdHVzIGFuZCBraWxsIGNvdW50cyBhYm91dCB0aGUgY2hhcmFjdGVycyBoZXJlIHdpdGhpbiBzaW1wbGUgY2xpY2tzIVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIkpha2UgQ2hlblwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWN0c30+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vamFrZS1jaGVuLTIxMDgxODEyOC9cIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZXh0ZXJuYWxMaW5rfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fSBpY29uPXtmYUxpbmtlZGlufSAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yYWluZm9yc3MvQnJlYWtpbmctQmFkLUZhbmRvbVwiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5leHRlcm5hbExpbmt9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiIH19IGljb249e2ZhR2l0aHViU3F1YXJlfSAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8QXBwTmF2QmFyIC8+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJnQ29udGFpbmVyXCI6IFwiTGF5b3V0X2JnQ29udGFpbmVyX19UQTU2cFwiLFxuXHRcImNvbnRhY3RzXCI6IFwiTGF5b3V0X2NvbnRhY3RzX19pdTl5YlwiLFxuXHRcImV4dGVybmFsTGlua1wiOiBcIkxheW91dF9leHRlcm5hbExpbmtfXzlxUFdIXCJcbn07XG4iLCJpbXBvcnQgeyBBbGVydCwgQnV0dG9uLCBQcm9ncmVzc0JhciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuXHJcbmNvbnN0IFBhZ2luYXRpb24gPSAoe1xyXG4gIG9uQ2xpY2ssXHJcbiAgdG90YWwsXHJcbiAgY3VycmVudCxcclxuICBpc0xvYWRpbmdNb3JlLFxyXG4gIGlzUmVhY2hpbmdFbmQsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LTc1IG14LWF1dG8gbXktNVwiPlxyXG4gICAgICA8QWxlcnRcclxuICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiMC45cmVtXCIgfX1cclxuICAgICAgICB2YXJpYW50PVwiZGFya1wiXHJcbiAgICAgID5cclxuICAgICAgICBEaXNwbGF5aW5nIHtjdXJyZW50fSBvdXQgb2Yge3RvdGFsfSBjaGFyYWN0ZXJzXHJcbiAgICAgICAgPFByb2dyZXNzQmFyIGFuaW1hdGVkIG5vdz17Y3VycmVudH0gbWF4PXt0b3RhbH0gY2xhc3NOYW1lPVwibXQtM1wiIC8+XHJcbiAgICAgIDwvQWxlcnQ+XHJcblxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgICBibG9ja1xyXG4gICAgICAgIHZhcmlhbnQ9XCJpbmZvXCJcclxuICAgICAgICBkaXNhYmxlZD17aXNSZWFjaGluZ0VuZCB8fCBpc0xvYWRpbmdNb3JlIHx8IGN1cnJlbnQgPT09IHRvdGFsfVxyXG4gICAgICA+XHJcbiAgICAgICAge2lzTG9hZGluZ01vcmVcclxuICAgICAgICAgID8gXCJMb2FkaW5nLi4uXCJcclxuICAgICAgICAgIDogaXNSZWFjaGluZ0VuZCB8fCBjdXJyZW50ID09PSB0b3RhbFxyXG4gICAgICAgICAgPyBcIk5vIE1vcmUgUmVzdWx0c1wiXHJcbiAgICAgICAgICA6IFwiTG9hZCBNb3JlIFJlc3VsdHNcIn1cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcclxuIiwiaW1wb3J0IHsgSW5wdXRHcm91cCwgRm9ybUNvbnRyb2wsIEJ1dHRvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9TZWFyY2hCYXIubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgU2VhcmNoQmFyID0gKHsgdmFsdWUsIG9uQ2hhbmdlLCBvbkNsaWNrLCBvbktleVByZXNzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hCYXJ9PlxyXG4gICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICA8Rm9ybUNvbnRyb2xcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCJcclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJTZWFyY2guLi5cIlxyXG4gICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImJhc2ljLWFkZG9uMlwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICBvbktleVByZXNzPXtvbktleVByZXNzfVxyXG4gICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJbnB1dEdyb3VwLkFwcGVuZD5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja30gdmFyaWFudD1cInNlY29uZGFyeVwiIHNpemU9XCJzbVwiPlxyXG4gICAgICAgICAgICBTZWFyY2hcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvSW5wdXRHcm91cC5BcHBlbmQ+XHJcbiAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNlYXJjaEJhclwiOiBcIlNlYXJjaEJhcl9zZWFyY2hCYXJfXzJ0ZlBfXCJcbn07XG4iLCJpbXBvcnQgeyB1c2VTV1JJbmZpbml0ZSB9IGZyb20gXCJzd3JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VQYWdpbmF0aW9uID0gKHF1ZXJ5VVJMLCBwYWdlU2l6ZSwgZmV0Y2hlcikgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIG11dGF0ZSwgc2l6ZSwgc2V0U2l6ZSwgaXNWYWxpZGF0aW5nIH0gPSB1c2VTV1JJbmZpbml0ZShcclxuICAgIChpbmRleCkgPT4gYCR7cXVlcnlVUkx9JmxpbWl0PSR7cGFnZVNpemV9Jm9mZnNldD0ke2luZGV4ICogcGFnZVNpemV9YCxcclxuICAgIGZldGNoZXJcclxuICApO1xyXG5cclxuICByZXR1cm4geyBkYXRhLCBlcnJvciwgbXV0YXRlLCBzaXplLCBzZXRTaXplLCBpc1ZhbGlkYXRpbmcgfTtcclxufTtcclxuIiwiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVBhZ2luYXRpb24gfSBmcm9tIFwiLi4vaG9va3MvdXNlUGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xyXG5pbXBvcnQgQ2FyZHNEaXNwbGF5IGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRzRGlzcGxheVwiO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuLi9jb21wb25lbnRzL1NlYXJjaEJhclwiO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uXCI7XHJcblxyXG5jb25zdCBJbmRleCA9ICh7IHRvdGFsLCBxdW90ZXMgfSkgPT4ge1xyXG4gIGxldCB0b3RhbE51bWJlck9mUmVzdWx0cyA9IHRvdGFsO1xyXG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3NlYXJjaGVkLCBzZXRTZWFyY2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3JldmVhbCwgc2V0UmV2ZWFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY2hhck5hbWUsIHNldENoYXJOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzZWFyY2hWYWx1ZSwgc2V0U2VhcmNoVmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGF4aW9zLmdldCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpO1xyXG4gIGNvbnN0IHF1ZXJ5VVJMID0gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9Y2hhcmFjdGVycz9uYW1lPSR7cXVlcnl9YDtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBtdXRhdGUsIHNpemUsIHNldFNpemUsIGlzVmFsaWRhdGluZyB9ID0gdXNlUGFnaW5hdGlvbihcclxuICAgIHF1ZXJ5VVJMLFxyXG4gICAgMTIsXHJcbiAgICBmZXRjaGVyXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgY2hhcnMgPSBkYXRhID8gW10uY29uY2F0KC4uLmRhdGEpIDogW107XHJcbiAgY29uc3QgaXNMb2FkaW5nSW5pdGlhbERhdGEgPSAhZGF0YSAmJiAhZXJyb3I7XHJcbiAgY29uc3QgaXNMb2FkaW5nTW9yZSA9XHJcbiAgICBpc0xvYWRpbmdJbml0aWFsRGF0YSB8fFxyXG4gICAgKHNpemUgPiAwICYmIGRhdGEgJiYgdHlwZW9mIGRhdGFbc2l6ZSAtIDFdID09PSBcInVuZGVmaW5lZFwiKTtcclxuICBjb25zdCBpc0VtcHR5ID0gZGF0YT8uWzBdPy5sZW5ndGggPT09IDA7XHJcbiAgY29uc3QgaXNSZWFjaGluZ0VuZCA9IGlzRW1wdHkgfHwgKGRhdGEgJiYgZGF0YVtkYXRhLmxlbmd0aCAtIDFdPy5sZW5ndGggPCAxMik7XHJcbiAgY29uc3QgaXNSZWZyZXNoaW5nID0gaXNWYWxpZGF0aW5nICYmIGRhdGEgJiYgZGF0YS5sZW5ndGggPT09IHNpemU7XHJcblxyXG4gIGNvbnN0IHsgZGF0YTogY3VscHJpdCwgZXJyb3I6IGN1bHByaXRFcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgcmV2ZWFsXHJcbiAgICAgID8gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9ZGVhdGgtY291bnQ/bmFtZT0ke2NoYXJOYW1lfWBcclxuICAgICAgOiBudWxsLFxyXG4gICAgZmV0Y2hlclxyXG4gICk7XHJcblxyXG4gIGxldCBzZWFyY2hSZXN1bHRzID0gY2hhcnM7XHJcblxyXG4gIGlmIChzZWFyY2hlZCAmJiBxdWVyeSkge1xyXG4gICAgdG90YWxOdW1iZXJPZlJlc3VsdHMgPSBjaGFycy5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8U2VhcmNoQmFyXHJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNoVmFsdWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIG9uS2V5UHJlc3M9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgICAgc2V0UXVlcnkoc2VhcmNoVmFsdWUpO1xyXG4gICAgICAgICAgICAgIHNldFNlYXJjaGVkKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRRdWVyeShzZWFyY2hWYWx1ZSk7XHJcbiAgICAgICAgICAgIHNldFNlYXJjaGVkKHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxDYXJkc0Rpc3BsYXlcclxuICAgICAgICAgIGNoYXJhY3RlcnM9e3NlYXJjaFJlc3VsdHN9XHJcbiAgICAgICAgICBxdW90ZXM9e3F1b3Rlc31cclxuICAgICAgICAgIGN1bHByaXQ9e2N1bHByaXR9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRDaGFyTmFtZShlLmN1cnJlbnRUYXJnZXQubmFtZS5zcGxpdChcIiBcIikuam9pbihcIitcIikpO1xyXG4gICAgICAgICAgICBzZXRSZXZlYWwodHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0U2l6ZShzaXplICsgMSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgaXNMb2FkaW5nTW9yZT17aXNMb2FkaW5nTW9yZX1cclxuICAgICAgICAgIGlzUmVhY2hpbmdFbmQ9e2lzUmVhY2hpbmdFbmR9XHJcbiAgICAgICAgICBjdXJyZW50PXtjaGFycy5sZW5ndGh9XHJcbiAgICAgICAgICB0b3RhbD17dG90YWxOdW1iZXJPZlJlc3VsdHN9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChcclxuICAvLyAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfWNoYXJhY3RlcnM/bGltaXQ9MTJgXHJcbiAgLy8gKTtcclxuICBjb25zdCBxdW90ZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9cXVvdGVzYCk7XHJcbiAgY29uc3QgYWxsQ2hhciA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfWNoYXJhY3RlcnNgXHJcbiAgKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgLy8gY2hhcmFjdGVyczogcmVzdWx0LmRhdGEsXHJcbiAgICAgIHRvdGFsOiBhbGxDaGFyLmRhdGEubGVuZ3RoLFxyXG4gICAgICBxdW90ZXM6IHF1b3Rlcy5kYXRhLFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiXSwic291cmNlUm9vdCI6IiJ9