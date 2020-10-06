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
  }, "Some characters and information might be missing because", " ", __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"].Link, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHBOYXZCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHBOYXZCYXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmRzRGlzcGxheS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmRzRGlzcGxheS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29uc3RydWN0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29uc3RydWN0aW9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlUGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9zcGlub2ZmLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd3JcIiJdLCJuYW1lcyI6WyJBcHBOYXZiYXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ6SW5kZXgiLCJwdXNoIiwicGF0aG5hbWUiLCJkaXNwbGF5Iiwic3R5bGVzIiwibG9nbyIsIkNhcmRzRGlzcGxheSIsImNoYXJhY3RlcnMiLCJjdWxwcml0Iiwib25DbGljayIsInF1b3RlcyIsIlNlcmlhbGl6ZSIsInN0cmluZyIsInNwbGl0Iiwiam9pbiIsImNhcmRTZWN0aW9uIiwibWFwIiwiY2hhcmFjdGVyIiwiY2hhcl9pZCIsImZsaXBDYXJkIiwiZmxpcENhcmRJbm5lciIsImZsaXBDYXJkRnJvbnQiLCJjYXJkSW1hZ2UiLCJpbWciLCJuYW1lIiwiZmxpcENhcmRCYWNrIiwiY2hhckluZm8iLCJjYXJkVGl0bGUiLCJiaXJ0aGRheSIsIm5pY2tuYW1lIiwib2NjdXBhdGlvbiIsImpvYiIsInF1b3RlIiwiZmluZCIsImF1dGhvciIsImRlYXRoQ291bnRCdXR0b24iLCJkZWF0aENvdW50IiwiY2hhclN0YXR1cyIsInN0YXR1cyIsImNvbG9yIiwiQ29uc3RydWN0aW9uIiwidGFyZ2V0IiwiTGF5b3V0IiwicHJvcHMiLCJjb250YWN0cyIsImV4dGVybmFsTGluayIsImhlaWdodCIsImZhTGlua2VkaW4iLCJmYUdpdGh1YlNxdWFyZSIsImNoaWxkcmVuIiwiUGFnaW5hdGlvbiIsInRvdGFsIiwiY3VycmVudCIsImlzTG9hZGluZ01vcmUiLCJpc1JlYWNoaW5nRW5kIiwiZm9udFNpemUiLCJ1c2VQYWdpbmF0aW9uIiwicXVlcnlVUkwiLCJwYWdlU2l6ZSIsImZldGNoZXIiLCJkYXRhIiwiZXJyb3IiLCJtdXRhdGUiLCJzaXplIiwic2V0U2l6ZSIsImlzVmFsaWRhdGluZyIsInVzZVNXUkluZmluaXRlIiwiaW5kZXgiLCJTcGluT2ZmIiwic2VhcmNoUmVzdWx0cyIsInJldmVhbCIsInNldFJldmVhbCIsInVzZVN0YXRlIiwiY2hhck5hbWUiLCJzZXRDaGFyTmFtZSIsInVybCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsInByb2Nlc3MiLCJjaGFycyIsImNvbmNhdCIsImlzTG9hZGluZ0luaXRpYWxEYXRhIiwiaXNFbXB0eSIsImxlbmd0aCIsImlzUmVmcmVzaGluZyIsImN1bHByaXRFcnJvciIsInVzZVNXUiIsImUiLCJjdXJyZW50VGFyZ2V0IiwiZ2V0U3RhdGljUHJvcHMiLCJyZXN1bHQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFNBQVMsR0FBRyxNQUFNO0FBQ3RCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxTQUNFLE1BQUMsc0RBQUQ7QUFDRSxNQUFFLEVBQUMsYUFETDtBQUVFLFdBQU8sRUFBQyxNQUZWO0FBR0UsYUFBUyxFQUFDLG9DQUhaO0FBSUUsU0FBSyxFQUFFO0FBQUVDLFlBQU0sRUFBRTtBQUFWLEtBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsc0RBQUQs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cGlub2ZmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9zcGlub2ZmLmpzXCIpO1xuIiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9BcHBOYXZCYXIubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgQXBwTmF2YmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TmF2YmFyXHJcbiAgICAgIGJnPVwidHJhbnNwYXJlbnRcIlxyXG4gICAgICB2YXJpYW50PVwiZGFya1wiXHJcbiAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHB5LTVcIlxyXG4gICAgICBzdHlsZT17eyB6SW5kZXg6IDEwIH19XHJcbiAgICA+XHJcbiAgICAgIDxOYXZiYXIuQnJhbmRcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9zcGlub2ZmXCIpfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1yLTBcIlxyXG4gICAgICAgIHN0eWxlPXtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL1wiID8ge30gOiB7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8aW1nIGFsdD1cIlwiIHNyYz1cIi9sb2dvLnBuZ1wiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IC8+XHJcbiAgICAgIDwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICA8TmF2YmFyLkJyYW5kXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1yLTBcIlxyXG4gICAgICAgIHN0eWxlPXtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL3NwaW5vZmZcIiA/IHt9IDogeyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGltZyBhbHQ9XCJcIiBzcmM9XCIvYmNzLnN2Zy5wbmdcIiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSAvPlxyXG4gICAgICA8L05hdmJhci5CcmFuZD5cclxuICAgIDwvTmF2YmFyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBOYXZiYXI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRlclwiOiBcIkFwcE5hdkJhcl9oZWFkZXJfXzF6U1ZZXCIsXG5cdFwibG9nb1wiOiBcIkFwcE5hdkJhcl9sb2dvX18yMHJXT1wiLFxuXHRcImxpbmtzXCI6IFwiQXBwTmF2QmFyX2xpbmtzX18xVUhfZFwiXG59O1xuIiwiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NhcmRzRGlzcGxheS5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBDYXJkc0Rpc3BsYXkgPSAoeyBjaGFyYWN0ZXJzLCBjdWxwcml0LCBvbkNsaWNrLCBxdW90ZXMgfSkgPT4ge1xyXG4gIGNvbnN0IFNlcmlhbGl6ZSA9IChzdHJpbmcpID0+IHN0cmluZy5zcGxpdChcIiBcIikuam9pbihcIl9cIik7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZFNlY3Rpb259PlxyXG4gICAgICB7Y2hhcmFjdGVycy5tYXAoKGNoYXJhY3RlcikgPT4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtjaGFyYWN0ZXIuY2hhcl9pZH0gY2xhc3NOYW1lPXtzdHlsZXMuZmxpcENhcmR9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGlwQ2FyZElubmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGlwQ2FyZEZyb250fT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBzcmM9e2NoYXJhY3Rlci5pbWd9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e2NoYXJhY3Rlci5uYW1lfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsaXBDYXJkQmFja30+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFySW5mb30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRUaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vYnJlYWtpbmdiYWQuZmFuZG9tLmNvbS93aWtpLyR7U2VyaWFsaXplKFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyLm5hbWVcclxuICAgICAgICAgICAgICAgICAgICApfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGFyYWN0ZXIubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PkJpcnRoZGF5OiB7Y2hhcmFjdGVyLmJpcnRoZGF5fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5OaWNrbmFtZToge2NoYXJhY3Rlci5uaWNrbmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtjaGFyYWN0ZXIub2NjdXBhdGlvbi5tYXAoKGpvYikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17am9ifT57am9ifTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdW90ZX0+XHJcbiAgICAgICAgICAgICAgICB7cXVvdGVzLmZpbmQoKHF1b3RlKSA9PiBxdW90ZS5hdXRob3IgPT09IGNoYXJhY3Rlci5uYW1lKVxyXG4gICAgICAgICAgICAgICAgICA/IGBcIiAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgcXVvdGVzLmZpbmQoKHF1b3RlKSA9PiBxdW90ZS5hdXRob3IgPT09IGNoYXJhY3Rlci5uYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVvdGVcclxuICAgICAgICAgICAgICAgICAgICB9IFwiYFxyXG4gICAgICAgICAgICAgICAgICA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZWF0aENvdW50QnV0dG9ufT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmUtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT17Y2hhcmFjdGVyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtjdWxwcml0ICYmIGNoYXJhY3Rlci5uYW1lID09PSBjdWxwcml0WzBdLm5hbWVcclxuICAgICAgICAgICAgICAgICAgICA/IGN1bHByaXRbMF0uZGVhdGhDb3VudFxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJSZXZlYWwgS2lsbCBDb3VudFwifVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2hhclN0YXR1c31cclxuICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyLnN0YXR1cyA9PT0gXCJBbGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyB7IGNvbG9yOiBcImdyZWVuXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgIDogeyBjb2xvcjogXCJ5ZWxsb3dcIiB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2NoYXJhY3Rlci5zdGF0dXN9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRzRGlzcGxheTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2FyZFNlY3Rpb25cIjogXCJDYXJkc0Rpc3BsYXlfY2FyZFNlY3Rpb25fXzNERGJlXCIsXG5cdFwiZmxpcENhcmRcIjogXCJDYXJkc0Rpc3BsYXlfZmxpcENhcmRfXzFQaGMtXCIsXG5cdFwiZmxpcENhcmRJbm5lclwiOiBcIkNhcmRzRGlzcGxheV9mbGlwQ2FyZElubmVyX19GTDBUMVwiLFxuXHRcImNhcmRJbWFnZVwiOiBcIkNhcmRzRGlzcGxheV9jYXJkSW1hZ2VfXzVTcGZUXCIsXG5cdFwiZmxpcENhcmRGcm9udFwiOiBcIkNhcmRzRGlzcGxheV9mbGlwQ2FyZEZyb250X19CYVJXRVwiLFxuXHRcImZsaXBDYXJkQmFja1wiOiBcIkNhcmRzRGlzcGxheV9mbGlwQ2FyZEJhY2tfXzFnTlpWXCIsXG5cdFwiY2hhckluZm9cIjogXCJDYXJkc0Rpc3BsYXlfY2hhckluZm9fX2RUNzRVXCIsXG5cdFwiY2FyZFRpdGxlXCI6IFwiQ2FyZHNEaXNwbGF5X2NhcmRUaXRsZV9fM1hkZllcIixcblx0XCJxdW90ZVwiOiBcIkNhcmRzRGlzcGxheV9xdW90ZV9fMlFHcmtcIixcblx0XCJkZWF0aENvdW50QnV0dG9uXCI6IFwiQ2FyZHNEaXNwbGF5X2RlYXRoQ291bnRCdXR0b25fXzJlbzQ3XCIsXG5cdFwiY2hhclN0YXR1c1wiOiBcIkNhcmRzRGlzcGxheV9jaGFyU3RhdHVzX18xeWQ4eVwiXG59O1xuIiwiaW1wb3J0IHsgQWxlcnQgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ29uc3RydWN0aW9uLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IENvbnN0cnVjdGlvbiA9ICh7IHRhcmdldCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBbGVydCB2YXJpYW50PVwiZGFuZ2VyXCIgY2xhc3NOYW1lPVwibXktNSB3LTc1IG14LWF1dG9cIj5cclxuICAgICAgU29tZSBjaGFyYWN0ZXJzIGFuZCBpbmZvcm1hdGlvbiBtaWdodCBiZSBtaXNzaW5nIGJlY2F1c2V7XCIgXCJ9XHJcbiAgICAgIDxBbGVydC5MaW5rIGhyZWY9XCIjXCI+e3RhcmdldH08L0FsZXJ0Lkxpbms+IGlzIHN0aWxsIHVuZGVyIGNvbnN0cnVjdGlvblxyXG4gICAgPC9BbGVydD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uc3RydWN0aW9uO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiaW1wb3J0IEFwcE5hdkJhciBmcm9tIFwiLi9BcHBOYXZCYXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0xheW91dC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFHaXRodWJTcXVhcmUsIGZhTGlua2VkaW4gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29uc1wiO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlRoZSBCcmVha2luZyBCYWQgVW5pdmVyc2U8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LTlhSXQyblJwQzEyVWs5Z1M5YmFEbDQxMU5RQXBGbUMyNkV3QU9IOFdnWmw1TVlZeEZmYytOY1BiMWRLR2o3U2tcIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBjb250ZW50PVwiQSBCcmVha2luZyBCYWQgaW5mb3JtYXRpb24gc2l0ZS4gRmluZCBvdXQgbW9yZSBpbmZvcm1hdGlvbiBzdWNoIGFzIGN1cnJlbnQgc3RhdHVzIGFuZCBraWxsIGNvdW50cyBhYm91dCB0aGUgY2hhcmFjdGVycyBoZXJlIHdpdGhpbiBzaW1wbGUgY2xpY2tzIVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgIHByb3BlcnR5PVwib2c6dGl0bGVcIlxyXG4gICAgICAgICAgY29udGVudD1cIkEgQnJlYWtpbmcgQmFkIEZhbmRvbVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwiV2Vic2l0ZVwiIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXHJcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9yYWluZm9yc3MvaW1hZ2UvdXBsb2FkL3YxNjAyMDE5OTg2L2JyZWFraW5nYmFkc2l0ZV91djhjOTMucG5nXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBjb250ZW50PVwiQSBCcmVha2luZyBCYWQgaW5mb3JtYXRpb24gc2l0ZS4gRmluZCBvdXQgbW9yZSBpbmZvcm1hdGlvbiBzdWNoIGFzIGN1cnJlbnQgc3RhdHVzIGFuZCBraWxsIGNvdW50cyBhYm91dCB0aGUgY2hhcmFjdGVycyBoZXJlIHdpdGhpbiBzaW1wbGUgY2xpY2tzIVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIkpha2UgQ2hlblwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWN0c30+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vamFrZS1jaGVuLTIxMDgxODEyOC9cIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZXh0ZXJuYWxMaW5rfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fSBpY29uPXtmYUxpbmtlZGlufSAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yYWluZm9yc3MvQnJlYWtpbmctQmFkLUZhbmRvbVwiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5leHRlcm5hbExpbmt9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiIH19IGljb249e2ZhR2l0aHViU3F1YXJlfSAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8QXBwTmF2QmFyIC8+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJnQ29udGFpbmVyXCI6IFwiTGF5b3V0X2JnQ29udGFpbmVyX19UQTU2cFwiLFxuXHRcImNvbnRhY3RzXCI6IFwiTGF5b3V0X2NvbnRhY3RzX19pdTl5YlwiLFxuXHRcImV4dGVybmFsTGlua1wiOiBcIkxheW91dF9leHRlcm5hbExpbmtfXzlxUFdIXCJcbn07XG4iLCJpbXBvcnQgeyBBbGVydCwgQnV0dG9uLCBQcm9ncmVzc0JhciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuXHJcbmNvbnN0IFBhZ2luYXRpb24gPSAoe1xyXG4gIG9uQ2xpY2ssXHJcbiAgdG90YWwsXHJcbiAgY3VycmVudCxcclxuICBpc0xvYWRpbmdNb3JlLFxyXG4gIGlzUmVhY2hpbmdFbmQsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LTc1IG14LWF1dG8gbXktNVwiPlxyXG4gICAgICA8QWxlcnRcclxuICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiMC45cmVtXCIgfX1cclxuICAgICAgICB2YXJpYW50PVwiZGFya1wiXHJcbiAgICAgID5cclxuICAgICAgICBEaXNwbGF5aW5nIHtjdXJyZW50fSBvdXQgb2Yge3RvdGFsfSBjaGFyYWN0ZXJzXHJcbiAgICAgICAgPFByb2dyZXNzQmFyIGFuaW1hdGVkIG5vdz17Y3VycmVudH0gbWF4PXt0b3RhbH0gY2xhc3NOYW1lPVwibXQtM1wiIC8+XHJcbiAgICAgIDwvQWxlcnQ+XHJcblxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgICBibG9ja1xyXG4gICAgICAgIHZhcmlhbnQ9XCJpbmZvXCJcclxuICAgICAgICBkaXNhYmxlZD17aXNSZWFjaGluZ0VuZCB8fCBpc0xvYWRpbmdNb3JlIHx8IGN1cnJlbnQgPT09IHRvdGFsfVxyXG4gICAgICA+XHJcbiAgICAgICAge2lzTG9hZGluZ01vcmVcclxuICAgICAgICAgID8gXCJMb2FkaW5nLi4uXCJcclxuICAgICAgICAgIDogaXNSZWFjaGluZ0VuZCB8fCBjdXJyZW50ID09PSB0b3RhbFxyXG4gICAgICAgICAgPyBcIk5vIE1vcmUgUmVzdWx0c1wiXHJcbiAgICAgICAgICA6IFwiTG9hZCBNb3JlIFJlc3VsdHNcIn1cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcclxuIiwiaW1wb3J0IHsgdXNlU1dSSW5maW5pdGUgfSBmcm9tIFwic3dyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlUGFnaW5hdGlvbiA9IChxdWVyeVVSTCwgcGFnZVNpemUsIGZldGNoZXIpID0+IHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBtdXRhdGUsIHNpemUsIHNldFNpemUsIGlzVmFsaWRhdGluZyB9ID0gdXNlU1dSSW5maW5pdGUoXHJcbiAgICAoaW5kZXgpID0+IGAke3F1ZXJ5VVJMfSZsaW1pdD0ke3BhZ2VTaXplfSZvZmZzZXQ9JHtpbmRleCAqIHBhZ2VTaXplfWAsXHJcbiAgICBmZXRjaGVyXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHsgZGF0YSwgZXJyb3IsIG11dGF0ZSwgc2l6ZSwgc2V0U2l6ZSwgaXNWYWxpZGF0aW5nIH07XHJcbn07XHJcbiIsImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XHJcbmltcG9ydCBDYXJkc0Rpc3BsYXkgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZHNEaXNwbGF5XCI7XHJcbmltcG9ydCBDb25zdHJ1Y3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29uc3RydWN0aW9uXCI7XHJcbmltcG9ydCB7IHVzZVBhZ2luYXRpb24gfSBmcm9tIFwiLi4vaG9va3MvdXNlUGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uXCI7XHJcblxyXG5jb25zdCBTcGluT2ZmID0gKHsgY2hhcmFjdGVycywgdG90YWwsIHF1b3RlcyB9KSA9PiB7XHJcbiAgbGV0IHNlYXJjaFJlc3VsdHMgPSBjaGFyYWN0ZXJzO1xyXG4gIGNvbnN0IFtyZXZlYWwsIHNldFJldmVhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NoYXJOYW1lLCBzZXRDaGFyTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBmZXRjaGVyID0gKHVybCkgPT4gYXhpb3MuZ2V0KHVybCkudGhlbigocmVzKSA9PiByZXMuZGF0YSk7XHJcbiAgY29uc3QgcXVlcnlVUkwgPSBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1jaGFyYWN0ZXJzP2NhdGVnb3J5PWJldHRlcitjYWxsK3NhdWxgO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIG11dGF0ZSwgc2l6ZSwgc2V0U2l6ZSwgaXNWYWxpZGF0aW5nIH0gPSB1c2VQYWdpbmF0aW9uKFxyXG4gICAgcXVlcnlVUkwsXHJcbiAgICAxMixcclxuICAgIGZldGNoZXJcclxuICApO1xyXG4gIGNvbnN0IGNoYXJzID0gZGF0YSA/IFtdLmNvbmNhdCguLi5kYXRhKSA6IFtdO1xyXG4gIGNvbnN0IGlzTG9hZGluZ0luaXRpYWxEYXRhID0gIWRhdGEgJiYgIWVycm9yO1xyXG4gIGNvbnN0IGlzTG9hZGluZ01vcmUgPVxyXG4gICAgaXNMb2FkaW5nSW5pdGlhbERhdGEgfHxcclxuICAgIChzaXplID4gMCAmJiBkYXRhICYmIHR5cGVvZiBkYXRhW3NpemUgLSAxXSA9PT0gXCJ1bmRlZmluZWRcIik7XHJcbiAgY29uc3QgaXNFbXB0eSA9IGRhdGE/LlswXT8ubGVuZ3RoID09PSAwO1xyXG4gIGNvbnN0IGlzUmVhY2hpbmdFbmQgPSBpc0VtcHR5IHx8IChkYXRhICYmIGRhdGFbZGF0YS5sZW5ndGggLSAxXT8ubGVuZ3RoIDwgMTIpO1xyXG4gIGNvbnN0IGlzUmVmcmVzaGluZyA9IGlzVmFsaWRhdGluZyAmJiBkYXRhICYmIGRhdGEubGVuZ3RoID09PSBzaXplO1xyXG5cclxuICBjb25zdCB7IGRhdGE6IGN1bHByaXQsIGVycm9yOiBjdWxwcml0RXJyb3IgfSA9IHVzZVNXUihcclxuICAgIHJldmVhbFxyXG4gICAgICA/IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfWRlYXRoLWNvdW50P25hbWU9JHtjaGFyTmFtZX1gXHJcbiAgICAgIDogbnVsbCxcclxuICAgIGZldGNoZXJcclxuICApO1xyXG5cclxuICBpZiAoY2hhcnMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICBzZWFyY2hSZXN1bHRzID0gY2hhcnM7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxDb25zdHJ1Y3Rpb24gdGFyZ2V0PVwiQmV0dGVyIENhbGwgU2F1bCBBUElcIiAvPlxyXG4gICAgICAgIDxDYXJkc0Rpc3BsYXlcclxuICAgICAgICAgIGNoYXJhY3RlcnM9e3NlYXJjaFJlc3VsdHN9XHJcbiAgICAgICAgICBjdWxwcml0PXtjdWxwcml0fVxyXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgc2V0Q2hhck5hbWUoZS5jdXJyZW50VGFyZ2V0Lm5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCIrXCIpKTtcclxuICAgICAgICAgICAgc2V0UmV2ZWFsKHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHF1b3Rlcz17cXVvdGVzfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0U2l6ZShzaXplICsgMSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgaXNMb2FkaW5nTW9yZT17aXNMb2FkaW5nTW9yZX1cclxuICAgICAgICAgIGlzUmVhY2hpbmdFbmQ9e2lzUmVhY2hpbmdFbmR9XHJcbiAgICAgICAgICBjdXJyZW50PXtjaGFycy5sZW5ndGh9XHJcbiAgICAgICAgICB0b3RhbD17dG90YWx9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3Bpbk9mZjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH1jaGFyYWN0ZXJzP2NhdGVnb3J5PWJldHRlcitjYWxsK3NhdWxgXHJcbiAgKTtcclxuICBjb25zdCBxdW90ZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9cXVvdGVzYCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGNoYXJhY3RlcnM6IHJlc3VsdC5kYXRhLFxyXG4gICAgICB0b3RhbDogcmVzdWx0LmRhdGEubGVuZ3RoLFxyXG4gICAgICBxdW90ZXM6IHF1b3Rlcy5kYXRhLFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiXSwic291cmNlUm9vdCI6IiJ9