module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/style.js":
/*!*****************************!*\
  !*** ./components/style.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Style = () => __jsx("div", {
  className: "jsx-1081520196"
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("link", {
  rel: "icon",
  href: "/favicon.ico",
  className: "jsx-1081520196"
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
  className: "jsx-1081520196"
})), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1081520196"
}, "body{background-image:url('/128-61.png');background-repeat:repeat;margin:0 auto;padding:2%;max-width:1000px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxEZXZcXGdpdGh1YlxcbmV4dC1pbWFnZS1ncmlkXFxjb21wb25lbnRzXFxzdHlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVdUIsQUFHNkMsb0NBQ1gseUJBQ1gsY0FDSCxXQUNNLGlCQUNuQiIsImZpbGUiOiJDOlxcRGV2XFxnaXRodWJcXG5leHQtaW1hZ2UtZ3JpZFxcY29tcG9uZW50c1xcc3R5bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmNvbnN0IFN0eWxlID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjQuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiAvPlxuICAgIDwvSGVhZD5cblxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvMTI4LTYxLnBuZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgcGFkZGluZzogMiU7XG4gICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlXG4iXX0= */\n/*@ sourceURL=C:\\\\Dev\\\\github\\\\next-image-grid\\\\components\\\\style.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Style);

/***/ }),

/***/ "./pages/image/[id].js":
/*!*****************************!*\
  !*** ./pages/image/[id].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_sanitized_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-sanitized-html */ "react-sanitized-html");
/* harmony import */ var react_sanitized_html__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_sanitized_html__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _util_webserver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util/webserver */ "./util/webserver.js");
/* harmony import */ var _components_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/style */ "./components/style.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const Image = ({
  image
}) => __jsx("div", {
  className: "jsx-3587580869"
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", {
  className: "jsx-3587580869"
}, image.title)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
  className: "my-container"
}, __jsx("h1", {
  className: "jsx-3587580869" + " " + "text-center h2"
}, image.title), __jsx("figure", {
  className: "jsx-3587580869"
}, __jsx("img", {
  src: "/" + image.img + ".jpg",
  className: "jsx-3587580869" + " " + "figure-img img-fluid"
}), __jsx("figcaption", {
  className: "jsx-3587580869" + " " + "lead"
}, !image.original ? " " : __jsx("div", {
  className: "jsx-3587580869" + " " + "sm"
}, __jsx("small", {
  className: "jsx-3587580869"
}, __jsx("a", {
  href: image.original,
  className: "jsx-3587580869"
}, "Original image here"))), __jsx("div", {
  className: "jsx-3587580869" + " " + "text-center"
}, image.caption))), !image.story ? "" : __jsx(react_sanitized_html__WEBPACK_IMPORTED_MODULE_5___default.a, {
  html: image.story,
  className: "story"
})), __jsx(_components_style__WEBPACK_IMPORTED_MODULE_8__["default"], null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3587580869"
}, ".my-container{background-color:rgba(255,255,255,0.8);border-radius:1vh;padding:2% 0;color:#111;}.sm{font-size:75%;line-height:1;}a{color:inherit;-webkit-text-decoration:underline;text-decoration:underline;}img.figure-img{margin:0;}.story{padding:2%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxEZXZcXGdpdGh1YlxcbmV4dC1pbWFnZS1ncmlkXFxwYWdlc1xcaW1hZ2VcXFtpZF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkN1QixBQUdnRCxBQU16QixBQUlBLEFBSUwsQUFJWixTQUhDLEVBR0EsR0FYZ0IsQUFJWSxjQUg1QixXQVBvQixrQkFDTCxhQUNGLElBU2IsT0FSQSIsImZpbGUiOiJDOlxcRGV2XFxnaXRodWJcXG5leHQtaW1hZ2UtZ3JpZFxccGFnZXNcXGltYWdlXFxbaWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IFNhbml0aXplZEhUTUwgZnJvbSAncmVhY3Qtc2FuaXRpemVkLWh0bWwnXHJcbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tICdyZWFjdHN0cmFwJ1xyXG5pbXBvcnQge3dlYnNlcnZlcn0gZnJvbSAnLi4vLi4vdXRpbC93ZWJzZXJ2ZXInXHJcbmltcG9ydCBTdHlsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3N0eWxlJ1xyXG5cclxuY29uc3QgSW1hZ2UgPSAoe2ltYWdlfSkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPntpbWFnZS50aXRsZX08L3RpdGxlPlxyXG4gICAgPC9IZWFkPlxyXG5cclxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwibXktY29udGFpbmVyXCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBoMlwiPntpbWFnZS50aXRsZX08L2gxPlxyXG4gICAgICA8ZmlndXJlPlxyXG4gICAgICAgIDxpbWcgc3JjPXtcIi9cIitpbWFnZS5pbWcrXCIuanBnXCJ9IGNsYXNzTmFtZT1cImZpZ3VyZS1pbWcgaW1nLWZsdWlkXCIvPlxyXG4gICAgICAgIDxmaWdjYXB0aW9uIGNsYXNzTmFtZT1cImxlYWRcIj5cclxuICAgICAgICAgIHshaW1hZ2Uub3JpZ2luYWwgPyBcIiBcIiA6XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21cIj5cclxuICAgICAgICAgICAgICA8c21hbGw+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPXtpbWFnZS5vcmlnaW5hbH0+T3JpZ2luYWwgaW1hZ2UgaGVyZTwvYT5cclxuICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAge2ltYWdlLmNhcHRpb259XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2ZpZ2NhcHRpb24+XHJcbiAgICAgIDwvZmlndXJlPlxyXG4gICAgICB7IWltYWdlLnN0b3J5ID8gXCJcIiA6XHJcbiAgICAgICAgPFNhbml0aXplZEhUTUwgXHJcbiAgICAgICAgICBodG1sPXtpbWFnZS5zdG9yeX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInN0b3J5XCJcclxuICAgICAgICAvPlxyXG4gICAgICB9XHJcblxyXG4gICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgPFN0eWxlIC8+XHJcblxyXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgLm15LWNvbnRhaW5lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcclxuICAgICAgICBwYWRkaW5nOiAyJSAwO1xyXG4gICAgICAgIGNvbG9yOiAjMTExO1xyXG4gICAgICB9XHJcbiAgICAgIC5zbXtcclxuICAgICAgICBmb250LXNpemU6IDc1JTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgfVxyXG4gICAgICBhIHtcclxuICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgfVxyXG4gICAgICBpbWcuZmlndXJlLWltZyB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5zdG9yeSB7XHJcbiAgICAgICAgcGFkZGluZzogMiVcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuSW1hZ2UucHJvcFR5cGVzID0ge1xyXG4gIGltYWdlOiBQcm9wVHlwZXMub2JqZWN0XHJcbn1cclxuXHJcbkltYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7cXVlcnl9KSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7d2Vic2VydmVyfS9hcGkvaW1hZ2VzLyR7cXVlcnkuaWR9YClcclxuICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIHJldHVybiB7IGltYWdlOiBqc29uLmltYWdlIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2U7Il19 */\n/*@ sourceURL=C:\\\\Dev\\\\github\\\\next-image-grid\\\\pages\\\\image\\\\[id].js */"));

Image.propTypes = {
  image: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
};

Image.getInitialProps = async ({
  query
}) => {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(`${_util_webserver__WEBPACK_IMPORTED_MODULE_7__["webserver"]}/api/images/${query.id}`);
  const json = await res.json();
  return {
    image: json.image
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./util/webserver.js":
/*!***************************!*\
  !*** ./util/webserver.js ***!
  \***************************/
/*! exports provided: webserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webserver", function() { return webserver; });
const dev = "development" !== 'production';
const webserver = dev ? 'http://localhost:3000' : 'https://your_deployment.server.com';

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./pages/image/[id].js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Dev\github\next-image-grid\pages\image\[id].js */"./pages/image/[id].js");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-sanitized-html":
/*!***************************************!*\
  !*** external "react-sanitized-html" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-sanitized-html");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=[id].js.map