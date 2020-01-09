(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("MediumEditor"), require("PropTypes"), require("React"), require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["MediumEditor", "PropTypes", "React", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["ReactTextbox"] = factory(require("MediumEditor"), require("PropTypes"), require("React"), require("ReactDOM"));
	else
		root["ReactTextbox"] = factory(root["MediumEditor"], root["PropTypes"], root["React"], root["ReactDOM"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_medium_editor__, __WEBPACK_EXTERNAL_MODULE_prop_types__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/components/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/images/三角形_收起@2x.png":
/*!*************************************!*\
  !*** ./assets/images/三角形_收起@2x.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAIBAMAAAA/ygPCAAAAGFBMVEVHcEx4eHh+fn53d3d3d3d4eHh4eHh3d3ee7MjcAAAAB3RSTlMAziCPnvFTAjVZvQAAAC9JREFUCNdjcC8HAgcGRiBZyMDAFF5eHsTAwJBeXp4ApJjLixlAQFwATCkqMMAAAGDVCN6rdolmAAAAAElFTkSuQmCC");

/***/ }),

/***/ "./assets/images/下划线@2x.png":
/*!**********************************!*\
  !*** ./assets/images/下划线@2x.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcBAMAAACAI8KnAAAAIVBMVEVHcExdYGddaWpeZ2hdYWddYWddYGZdYmhfY2lcYGZcYGYn+ereAAAACnRSTlMA5xQauYjdXzP4XiimIgAAAERlWElmTU0AKgAAAAgAAgESAAMAAAABAAYAAIdpAAQAAAABAAAAJgAAAAAAAqACAAQAAAABAAAAHKADAAQAAAABAAAAHAAAAAC0p6D3AAAAW0lEQVQY02NgoC4IgRNgIGUAI2jMzWoAErMUYFyvAgYGjoVwZ1QJMTCwLIVzWZYVcXglwblMXqtmLWtA+IE9a2EAiqcUiPV9oCAYiMBcsQoMlsHsUQIDBVLDFAATShWeFhha3wAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./assets/images/两侧对齐_正常@2x.png":
/*!**************************************!*\
  !*** ./assets/images/两侧对齐_正常@2x.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcBAMAAACAI8KnAAAAD1BMVEVHcExdYWdI5LdcYGZH47aKrMSLAAAAA3RSTlMAtbXYz9kgAAAAI0lEQVQY02NgIA0wGkOBADYuJYDJBQoUsHEpAbRzM+1MRgYA7rkOe8zGQhEAAAAASUVORK5CYII=");

/***/ }),

/***/ "./assets/images/两侧对齐_选中@2x.png":
/*!**************************************!*\
  !*** ./assets/images/两侧对齐_选中@2x.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcAgMAAAAPYzcHAAAACVBMVEVHcExdYWdcYGYAUvvjAAAAAnRSTlMAtc2YijsAAAAZSURBVAjXY2DABaRWrVq1BIkmBAabeggAADnWFeGWsPsoAAAAAElFTkSuQmCC");

/***/ }),

/***/ "./assets/images/右对齐_正常@2x.png":
/*!*************************************!*\
  !*** ./assets/images/右对齐_正常@2x.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcBAMAAACAI8KnAAAAElBMVEVHcExdYWdI5LdI5LdcYGZH47bSueyMAAAABHRSTlMAtbW0Jbh3CQAAAClJREFUGNNjYCANiLhAgCNWLmVANRQEglC5wZSbS0s3i6AaJUI9kxEAAOQyEFgkHFHJAAAAAElFTkSuQmCC");

/***/ }),

/***/ "./assets/images/右对齐_选中@2x.png":
/*!*************************************!*\
  !*** ./assets/images/右对齐_选中@2x.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcAgMAAAAPYzcHAAAACVBMVEVHcExdYWdcYGYAUvvjAAAAAnRSTlMAtc2YijsAAAAfSURBVAjXY2DABbJWrVo1AYkmCLKg6rKIU09r8yEAAB3GFRkFFNVBAAAAAElFTkSuQmCC");

/***/ }),

/***/ "./assets/images/居中对齐_正常@2x.png":
/*!**************************************!*\
  !*** ./assets/images/居中对齐_正常@2x.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcBAMAAACAI8KnAAAAD1BMVEVcYGb///9H47aMj5N97MxWxFcuAAAALklEQVQY02MQRAEMhLjCDFBgiI1LklHoXBElMHDEzqXAZBq6WRhuEjYuJSYjAQC90xkblBEKDgAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./assets/images/居中对齐_选中@2x.png":
/*!**************************************!*\
  !*** ./assets/images/居中对齐_选中@2x.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcAgMAAAAPYzcHAAAACVBMVEVHcExdYWdcYGYAUvvjAAAAAnRSTlMAtc2YijsAAAAgSURBVAjXY2DABaRWrVq1BIkmBBiB6hyQaEKA1uZDAACAnxPtrom7uwAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./assets/images/左对齐_正常@2x.png":
/*!*************************************!*\
  !*** ./assets/images/左对齐_正常@2x.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcBAMAAACAI8KnAAAAElBMVEVHcExdYWdI5LdI5LdcYGZH47bSueyMAAAABHRSTlMAtbW0Jbh3CQAAACpJREFUGNNjYCARiLhAgCNWLiVANRQEglC5wQxUALRzswiqQSLUMhcFAADjARBYvOcRJQAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./assets/images/左对齐_选中@2x.png":
/*!*************************************!*\
  !*** ./assets/images/左对齐_选中@2x.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcAgMAAAAPYzcHAAAACVBMVEVHcExdYWdcYGYAUvvjAAAAAnRSTlMAtc2YijsAAAAfSURBVAjXY2DABdhWrVq1EokmBNigytiIU05z8yEAAAZDEsEx8RsbAAAAAElFTkSuQmCC");

/***/ }),

/***/ "./assets/images/文字颜色@2x.png":
/*!***********************************!*\
  !*** ./assets/images/文字颜色@2x.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASBAMAAACgFUNZAAAAMFBMVEVcYGZHcExhY2tfYWZcYWZka21dYGhdYGZcYWZcYWZcYGdeYWddYGZeYWhcYGddYWeNHl0JAAAAEHRSTlP/AB0t1A5opeKNvXzyQEZVBBh9XQAAAH9JREFUCNdjEBQUlE8EEgxAHMAEZSRwQhkOPIFghhzHgkQwQ4r7gyOYoXBUghfMmFAozQ5iiB4wFGJQBDLEuAQFCyYCGSIcLi4NR4GMBwxAwAZkLJhsbGzNIsggBDJWsOEigyRQq6DghkKGGGYQQ4GJ4cJCEEOcjUFMEcQQ2goABD8YOLosWT4AAAAASUVORK5CYII=");

/***/ }),

/***/ "./assets/images/斜体@2x.png":
/*!*********************************!*\
  !*** ./assets/images/斜体@2x.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcBAMAAACAI8KnAAAAIVBMVEVHcExdYWdhb29dYWZfYmhdYWddYGZeYmhcYWZdYWZcYGYenmqRAAAACnRSTlMAtA2RK2/1UOLE796rKwAAAFBJREFUGNNjYKAxYFy1apUATi4D0zIFZNXsC1E0My9F4XIsQeF6NaBwowRQuFIBKNwsB2QeywoUSdbFKFzO5ShctUUo3KoJKFwrA+J9Sx4AAEkDEYmzlQj7AAAAAElFTkSuQmCC");

/***/ }),

/***/ "./assets/images/粗体@2x.png":
/*!*********************************!*\
  !*** ./assets/images/粗体@2x.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcBAMAAACAI8KnAAAAHlBMVEVHcExdYWddYWdcYGZgYGlcYWpdYGZeYGZeYmlcYGaOK88qAAAACXRSTlMAmbPlPTrXekmAjsR4AAAAWUlEQVQY02NgoClonjnTyAHBtZw5c+Z0BHdmoqDmTIT0TAEG1pkKyFwGTQM8XBTFaEYBwUQGFO7MAmTFQjOnoJgcOQmFyzQZHxdZMapRlqgWAb0/WYXiQAQAodIjwkTzNA4AAAAASUVORK5CYII=");

/***/ }),

/***/ "./node_modules/@simonwep/pickr/dist/pickr.min.js":
/*!********************************************************!*\
  !*** ./node_modules/@simonwep/pickr/dist/pickr.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! Pickr 1.4.8 MIT | https://github.com/Simonwep/pickr */
!function(t,e){ true?module.exports=e():undefined}(window,(function(){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=1)}([function(t){t.exports=JSON.parse('{"a":"1.4.8"}')},function(t,e,o){"use strict";o.r(e);var n={};function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function r(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){s(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}o.r(n),o.d(n,"on",(function(){return c})),o.d(n,"off",(function(){return a})),o.d(n,"createElementFromString",(function(){return p})),o.d(n,"removeAttribute",(function(){return u})),o.d(n,"createFromTemplate",(function(){return h})),o.d(n,"eventPath",(function(){return d})),o.d(n,"resolveElement",(function(){return f})),o.d(n,"adjustableInputNumbers",(function(){return m}));const c=l.bind(null,"addEventListener"),a=l.bind(null,"removeEventListener");function l(t,e,o,n,i={}){e instanceof HTMLCollection||e instanceof NodeList?e=Array.from(e):Array.isArray(e)||(e=[e]),Array.isArray(o)||(o=[o]);for(const s of e)for(const e of o)s[t](e,n,r({capture:!1},i));return Array.prototype.slice.call(arguments,1)}function p(t){const e=document.createElement("div");return e.innerHTML=t.trim(),e.firstElementChild}function u(t,e){const o=t.getAttribute(e);return t.removeAttribute(e),o}function h(t){return function t(e,o={}){const n=u(e,":obj"),i=u(e,":ref"),r=n?o[n]={}:o;i&&(o[i]=e);for(const o of Array.from(e.children)){const e=u(o,":arr"),n=t(o,e?{}:r);e&&(r[e]||(r[e]=[])).push(Object.keys(n).length?n:o)}return o}(p(t))}function d(t){let e=t.path||t.composedPath&&t.composedPath();if(e)return e;let o=t.target.parentElement;for(e=[t.target,o];o=o.parentElement;)e.push(o);return e.push(document,window),e}function f(t){return t instanceof Element?t:"string"==typeof t?t.split(/>>/g).reduce((t,e,o,n)=>(t=t.querySelector(e),o<n.length-1?t.shadowRoot:t),document):null}function m(t,e=(t=>t)){function o(o){const n=[.001,.01,.1][Number(o.shiftKey||2*o.ctrlKey)]*(o.deltaY<0?1:-1);let i=0,r=t.selectionStart;t.value=t.value.replace(/[\d.]+/g,(t,o)=>o<=r&&o+t.length>=r?(r=o,e(Number(t),n,i)):(i++,t)),t.focus(),t.setSelectionRange(r,r),o.preventDefault(),t.dispatchEvent(new Event("input"))}c(t,"focus",()=>c(window,"wheel",o,{passive:!1})),c(t,"blur",()=>a(window,"wheel",o))}var v=o(0);const{min:b,max:g,floor:y,round:_}=Math;function w(t,e,o){e/=100,o/=100;const n=y(t=t/360*6),i=t-n,r=o*(1-e),s=o*(1-i*e),c=o*(1-(1-i)*e),a=n%6;return[255*[o,s,r,r,c,o][a],255*[c,o,o,s,r,r][a],255*[r,r,c,o,o,s][a]]}function C(t,e,o){const n=(2-(e/=100))*(o/=100)/2;return 0!==n&&(e=1===n?0:n<.5?e*o/(2*n):e*o/(2-2*n)),[t,100*e,100*n]}function A(t,e,o){let n,i,r;const s=b(t/=255,e/=255,o/=255),c=g(t,e,o),a=c-s;if(r=c,0===a)n=i=0;else{i=a/c;const r=((c-t)/6+a/2)/a,s=((c-e)/6+a/2)/a,l=((c-o)/6+a/2)/a;t===c?n=l-s:e===c?n=1/3+r-l:o===c&&(n=2/3+s-r),n<0?n+=1:n>1&&(n-=1)}return[360*n,100*i,100*r]}function k(t,e,o,n){return e/=100,o/=100,[...A(255*(1-b(1,(t/=100)*(1-(n/=100))+n)),255*(1-b(1,e*(1-n)+n)),255*(1-b(1,o*(1-n)+n)))]}function S(t,e,o){return e/=100,[t,2*(e*=(o/=100)<.5?o:1-o)/(o+e)*100,100*(o+e)]}function O(t){return A(...t.match(/.{2}/g).map(t=>parseInt(t,16)))}function j(t){t=t.match(/^[a-zA-Z]+$/)?function(t){if("black"===t.toLowerCase())return"#000";const e=document.createElement("canvas").getContext("2d");return e.fillStyle=t,"#000"===e.fillStyle?null:e.fillStyle}(t):t;const e={cmyk:/^cmyk[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)/i,rgba:/^((rgba)|rgb)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,hsla:/^((hsla)|hsl)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,hsva:/^((hsva)|hsv)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,hexa:/^#?(([\dA-Fa-f]{3,4})|([\dA-Fa-f]{6})|([\dA-Fa-f]{8}))$/i},o=t=>t.map(t=>/^(|\d+)\.\d+|\d+$/.test(t)?Number(t):void 0);let n;t:for(const i in e){if(!(n=e[i].exec(t)))continue;const r=t=>!!n[2]==("number"==typeof t);switch(i){case"cmyk":{const[,t,e,r,s]=o(n);if(t>100||e>100||r>100||s>100)break t;return{values:k(t,e,r,s),type:i}}case"rgba":{const[,,,t,e,s,c]=o(n);if(t>255||e>255||s>255||c<0||c>1||!r(c))break t;return{values:[...A(t,e,s),c],a:c,type:i}}case"hexa":{let[,t]=n;4!==t.length&&3!==t.length||(t=t.split("").map(t=>t+t).join(""));const e=t.substring(0,6);let o=t.substring(6);return o=o?parseInt(o,16)/255:void 0,{values:[...O(e),o],a:o,type:i}}case"hsla":{const[,,,t,e,s,c]=o(n);if(t>360||e>100||s>100||c<0||c>1||!r(c))break t;return{values:[...S(t,e,s),c],a:c,type:i}}case"hsva":{const[,,,t,e,s,c]=o(n);if(t>360||e>100||s>100||c<0||c>1||!r(c))break t;return{values:[t,e,s,c],a:c,type:i}}}}return{values:null,type:null}}function x(t=0,e=0,o=0,n=1){const i=(t,e)=>(o=-1)=>e(~o?t.map(t=>Number(t.toFixed(o))):t),r={h:t,s:e,v:o,a:n,toHSVA(){const t=[r.h,r.s,r.v,r.a];return t.toString=i(t,t=>"hsva(".concat(t[0],", ").concat(t[1],"%, ").concat(t[2],"%, ").concat(r.a,")")),t},toHSLA(){const t=[...C(r.h,r.s,r.v),r.a];return t.toString=i(t,t=>"hsla(".concat(t[0],", ").concat(t[1],"%, ").concat(t[2],"%, ").concat(r.a,")")),t},toRGBA(){const t=[...w(r.h,r.s,r.v),r.a];return t.toString=i(t,t=>"rgba(".concat(t[0],", ").concat(t[1],", ").concat(t[2],", ").concat(r.a,")")),t},toCMYK(){const t=function(t,e,o){const n=w(t,e,o),i=n[0]/255,r=n[1]/255,s=n[2]/255;let c,a,l,p;return c=b(1-i,1-r,1-s),a=1===c?0:(1-i-c)/(1-c),l=1===c?0:(1-r-c)/(1-c),p=1===c?0:(1-s-c)/(1-c),[100*a,100*l,100*p,100*c]}(r.h,r.s,r.v);return t.toString=i(t,t=>"cmyk(".concat(t[0],"%, ").concat(t[1],"%, ").concat(t[2],"%, ").concat(t[3],"%)")),t},toHEXA(){const t=function(t,e,o){return w(t,e,o).map(t=>_(t).toString(16).padStart(2,"0"))}(r.h,r.s,r.v),e=r.a>=1?"":Number((255*r.a).toFixed(0)).toString(16).toUpperCase().padStart(2,"0");return e&&t.push(e),t.toString=()=>"#".concat(t.join("").toUpperCase()),t},clone:()=>x(r.h,r.s,r.v,r.a)};return r}const E=t=>Math.max(Math.min(t,1),0);function L(t){const e={options:Object.assign({lock:null,onchange:()=>0,onstop:()=>0},t),_keyboard(t){const{type:n,key:i}=t;if(document.activeElement===o.wrapper){const{lock:o}=e.options,r="ArrowUp"===i,s="ArrowRight"===i,c="ArrowDown"===i,a="ArrowLeft"===i;if("keydown"===n&&(r||s||c||a)){let n=0,i=0;"v"===o?n=r||s?1:-1:"h"===o?n=r||s?-1:1:(i=r?-1:c?1:0,n=a?-1:s?1:0),e.update(E(e.cache.x+.01*n),E(e.cache.y+.01*i)),t.preventDefault()}else i.startsWith("Arrow")&&(e.options.onstop(),t.preventDefault())}},_tapstart(t){c(document,["mouseup","touchend","touchcancel"],e._tapstop),c(document,["mousemove","touchmove"],e._tapmove),t.preventDefault(),e._tapmove(t)},_tapmove(t){const{options:{lock:n},cache:i}=e,{element:r,wrapper:s}=o,c=s.getBoundingClientRect();let a=0,l=0;if(t){const e=t&&t.touches&&t.touches[0];a=t?(e||t).clientX:0,l=t?(e||t).clientY:0,a<c.left?a=c.left:a>c.left+c.width&&(a=c.left+c.width),l<c.top?l=c.top:l>c.top+c.height&&(l=c.top+c.height),a-=c.left,l-=c.top}else i&&(a=i.x*c.width,l=i.y*c.height);"h"!==n&&(r.style.left="calc(".concat(a/c.width*100,"% - ").concat(r.offsetWidth/2,"px)")),"v"!==n&&(r.style.top="calc(".concat(l/c.height*100,"% - ").concat(r.offsetHeight/2,"px)")),e.cache={x:a/c.width,y:l/c.height};const p=E(a/s.offsetWidth),u=E(l/s.offsetHeight);switch(n){case"v":return o.onchange(p);case"h":return o.onchange(u);default:return o.onchange(p,u)}},_tapstop(){e.options.onstop(),a(document,["mouseup","touchend","touchcancel"],e._tapstop),a(document,["mousemove","touchmove"],e._tapmove)},trigger(){e._tapmove()},update(t=0,o=0){const{left:n,top:i,width:r,height:s}=e.options.wrapper.getBoundingClientRect();"h"===e.options.lock&&(o=t),e._tapmove({clientX:n+r*t,clientY:i+s*o})},destroy(){const{options:t,_tapstart:o}=e;a([t.wrapper,t.element],"mousedown",o),a([t.wrapper,t.element],"touchstart",o,{passive:!1})}},{options:o,_tapstart:n,_keyboard:i}=e;return c([o.wrapper,o.element],"mousedown",n),c([o.wrapper,o.element],"touchstart",n,{passive:!1}),c(document,["keydown","keyup"],i),e}function P(t={}){t=Object.assign({onchange:()=>0,className:"",elements:[]},t);const e=c(t.elements,"click",e=>{t.elements.forEach(o=>o.classList[e.target===o?"add":"remove"](t.className)),t.onchange(e)});return{destroy:()=>a(...e)}}function B({el:t,reference:e,padding:o=8}){const n={start:"sme",middle:"mse",end:"ems"},i={top:"tbrl",right:"rltb",bottom:"btrl",left:"lrbt"},r=((t={})=>(e,o=t[e])=>{if(o)return o;const[n,i="middle"]=e.split("-"),r="top"===n||"bottom"===n;return t[e]={position:n,variant:i,isVertical:r}})();return{update(s){const{position:c,variant:a,isVertical:l}=r(s),p=e.getBoundingClientRect(),u=t.getBoundingClientRect(),h=t=>t?{t:p.top-u.height-o,b:p.bottom+o}:{r:p.right+o,l:p.left-u.width-o},d=t=>t?{s:p.left+p.width-u.width,m:-u.width/2+(p.left+p.width/2),e:p.left}:{s:p.bottom-u.height,m:p.bottom-p.height/2-u.height/2,e:p.bottom-p.height},f={};function m(e,o,n){const i="top"===n,r=i?u.height:u.width,s=window[i?"innerHeight":"innerWidth"];for(const i of e){const e=o[i],c=f[n]="".concat(e,"px");if(e>0&&e+r<s)return t.style[n]=c,!0}return!1}for(const t of[l,!l]){const e=m(i[c],h(t),t?"top":"left"),o=m(n[a],d(t),t?"left":"top");if(e&&o)return}t.style.left=f.left,t.style.top=f.top}}}var R=({components:t,strings:e,useAsButton:o,inline:n,appClass:i,theme:r,lockOpacity:s})=>{const c=t=>t?"":'style="display:none" hidden',a=h('\n      <div :ref="root" class="pickr">\n\n        '.concat(o?"":'<button type="button" :ref="button" class="pcr-button"></button>','\n\n        <div :ref="app" class="pcr-app ').concat(i||"",'" data-theme="').concat(r,'" ').concat(n?'style="position: unset"':"",' aria-label="color picker dialog" role="form">\n          <div class="pcr-selection" ').concat(c(t.palette),'>\n            <div :obj="preview" class="pcr-color-preview" ').concat(c(t.preview),'>\n              <button type="button" :ref="lastColor" class="pcr-last-color" aria-label="use previous color"></button>\n              <div :ref="currentColor" class="pcr-current-color"></div>\n            </div>\n\n            <div :obj="palette" class="pcr-color-palette">\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="palette" class="pcr-palette" tabindex="0" aria-label="color selection area" role="listbox"></div>\n            </div>\n\n            <div :obj="hue" class="pcr-color-chooser" ').concat(c(t.hue),'>\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="slider" class="pcr-hue pcr-slider" tabindex="0" aria-label="hue selection slider" role="slider"></div>\n            </div>\n\n            <div :obj="opacity" class="pcr-color-opacity" ').concat(c(t.opacity),'>\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="slider" class="pcr-opacity pcr-slider" tabindex="0" aria-label="opacity selection slider" role="slider"></div>\n            </div>\n          </div>\n\n          <div class="pcr-swatches ').concat(t.palette?"":"pcr-last",'" :ref="swatches"></div> \n\n          <div :obj="interaction" class="pcr-interaction" ').concat(c(Object.keys(t.interaction).length),'>\n            <input :ref="result" class="pcr-result" type="text" spellcheck="false" ').concat(c(t.interaction.input),'>\n\n            <input :arr="options" class="pcr-type" data-type="HEXA" value="').concat(s?"HEX":"HEXA",'" type="button" ').concat(c(t.interaction.hex),'>\n            <input :arr="options" class="pcr-type" data-type="RGBA" value="').concat(s?"RGB":"RGBA",'" type="button" ').concat(c(t.interaction.rgba),'>\n            <input :arr="options" class="pcr-type" data-type="HSLA" value="').concat(s?"HSL":"HSLA",'" type="button" ').concat(c(t.interaction.hsla),'>\n            <input :arr="options" class="pcr-type" data-type="HSVA" value="').concat(s?"HSV":"HSVA",'" type="button" ').concat(c(t.interaction.hsva),'>\n            <input :arr="options" class="pcr-type" data-type="CMYK" value="CMYK" type="button" ').concat(c(t.interaction.cmyk),'>\n\n            <input :ref="save" class="pcr-save" value="').concat(e.save||"Save",'" type="button" ').concat(c(t.interaction.save),' aria-label="save and exit">\n            <input :ref="cancel" class="pcr-cancel" value="').concat(e.cancel||"Cancel",'" type="button" ').concat(c(t.interaction.cancel),' aria-label="cancel and exit">\n            <input :ref="clear" class="pcr-clear" value="').concat(e.clear||"Clear",'" type="button" ').concat(c(t.interaction.clear),' aria-label="clear and exit">\n          </div>\n        </div>\n      </div>\n    ')),l=a.interaction;return l.options.find(t=>!t.hidden&&!t.classList.add("active")),l.type=()=>l.options.find(t=>t.classList.contains("active")),a};function H(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}class D{constructor(t){H(this,"_initializingActive",!0),H(this,"_recalc",!0),H(this,"_nanopop",null),H(this,"_root",null),H(this,"_color",x()),H(this,"_lastColor",x()),H(this,"_swatchColors",[]),H(this,"_eventListener",{init:[],save:[],hide:[],show:[],clear:[],change:[],changestop:[],cancel:[],swatchselect:[]}),this.options=t=Object.assign({appClass:null,theme:"classic",useAsButton:!1,padding:8,disabled:!1,comparison:!0,closeOnScroll:!1,outputPrecision:0,lockOpacity:!1,autoReposition:!0,container:"body",components:{interaction:{}},strings:{},swatches:null,inline:!1,sliders:null,default:"#42445a",defaultRepresentation:null,position:"bottom-middle",adjustableNumbers:!0,showAlways:!1,closeWithKey:"Escape"},t);const{swatches:e,components:o,theme:n,sliders:i,lockOpacity:r,padding:s}=t;["nano","monolith"].includes(n)&&!i&&(t.sliders="h"),o.interaction||(o.interaction={});const{preview:c,opacity:a,hue:l,palette:p}=o;o.opacity=!r&&a,o.palette=p||c||a||l,this._preBuild(),this._buildComponents(),this._bindEvents(),this._finalBuild(),e&&e.length&&e.forEach(t=>this.addSwatch(t));const{button:u,app:h}=this._root;this._nanopop=B({reference:u,padding:s,el:h}),u.setAttribute("role","button"),u.setAttribute("aria-label","toggle color picker dialog");const d=this;requestAnimationFrame((function e(){if(!h.offsetWidth&&h.parentElement!==t.container)return requestAnimationFrame(e);d.setColor(t.default),d._rePositioningPicker(),t.defaultRepresentation&&(d._representation=t.defaultRepresentation,d.setColorRepresentation(d._representation)),t.showAlways&&d.show(),d._initializingActive=!1,d._emit("init")}))}_preBuild(){const t=this.options;for(const e of["el","container"])t[e]=f(t[e]);this._root=R(t),t.useAsButton&&(this._root.button=t.el),t.container.appendChild(this._root.root)}_finalBuild(){const t=this.options,e=this._root;if(t.container.removeChild(e.root),t.inline){const o=t.el.parentElement;t.el.nextSibling?o.insertBefore(e.app,t.el.nextSibling):o.appendChild(e.app)}else t.container.appendChild(e.app);t.useAsButton?t.inline&&t.el.remove():t.el.parentNode.replaceChild(e.root,t.el),t.disabled&&this.disable(),t.comparison||(e.button.style.transition="none",t.useAsButton||(e.preview.lastColor.style.transition="none")),this.hide()}_buildComponents(){const t=this,e=this.options.components,o=(t.options.sliders||"v").repeat(2),[n,i]=o.match(/^[vh]+$/g)?o:[],r=()=>this._color||(this._color=this._lastColor.clone()),s={palette:L({element:t._root.palette.picker,wrapper:t._root.palette.palette,onstop:()=>t._emit("changestop",t),onchange(o,n){if(!e.palette)return;const i=r(),{_root:s,options:c}=t,{lastColor:a,currentColor:l}=s.preview;t._recalc&&(i.s=100*o,i.v=100-100*n,i.v<0&&(i.v=0),t._updateOutput());const p=i.toRGBA().toString(0);this.element.style.background=p,this.wrapper.style.background="\n                        linear-gradient(to top, rgba(0, 0, 0, ".concat(i.a,"), transparent),\n                        linear-gradient(to left, hsla(").concat(i.h,", 100%, 50%, ").concat(i.a,"), rgba(255, 255, 255, ").concat(i.a,"))\n                    "),c.comparison?c.useAsButton||t._lastColor||(a.style.color=p):(s.button.style.color=p,s.button.classList.remove("clear"));const u=i.toHEXA().toString();for(const{el:e,color:o}of t._swatchColors)e.classList[u===o.toHEXA().toString()?"add":"remove"]("pcr-active");l.style.color=p}}),hue:L({lock:"v"===i?"h":"v",element:t._root.hue.picker,wrapper:t._root.hue.slider,onstop:()=>t._emit("changestop",t),onchange(o){if(!e.hue||!e.palette)return;const n=r();t._recalc&&(n.h=360*o),this.element.style.backgroundColor="hsl(".concat(n.h,", 100%, 50%)"),s.palette.trigger()}}),opacity:L({lock:"v"===n?"h":"v",element:t._root.opacity.picker,wrapper:t._root.opacity.slider,onstop:()=>t._emit("changestop",t),onchange(o){if(!e.opacity||!e.palette)return;const n=r();t._recalc&&(n.a=Math.round(100*o)/100),this.element.style.background="rgba(0, 0, 0, ".concat(n.a,")"),s.palette.trigger()}}),selectable:P({elements:t._root.interaction.options,className:"active",onchange(e){t._representation=e.target.getAttribute("data-type").toUpperCase(),t._recalc&&t._updateOutput()}})};this._components=s}_bindEvents(){const{_root:t,options:e}=this,o=[c(t.interaction.clear,"click",()=>this._clearColor()),c([t.interaction.cancel,t.preview.lastColor],"click",()=>{this._emit("cancel",this),this.setHSVA(...(this._lastColor||this._color).toHSVA(),!0)}),c(t.interaction.save,"click",()=>{!this.applyColor()&&!e.showAlways&&this.hide()}),c(t.interaction.result,["keyup","input"],t=>{this.setColor(t.target.value,!0)&&!this._initializingActive&&this._emit("change",this._color),t.stopImmediatePropagation()}),c(t.interaction.result,["focus","blur"],t=>{this._recalc="blur"===t.type,this._recalc&&this._updateOutput()}),c([t.palette.palette,t.palette.picker,t.hue.slider,t.hue.picker,t.opacity.slider,t.opacity.picker],["mousedown","touchstart"],()=>this._recalc=!0)];if(!e.showAlways){const n=e.closeWithKey;o.push(c(t.button,"click",()=>this.isOpen()?this.hide():this.show()),c(document,"keyup",t=>this.isOpen()&&(t.key===n||t.code===n)&&this.hide()),c(document,["touchstart","mousedown"],e=>{this.isOpen()&&!d(e).some(e=>e===t.app||e===t.button)&&this.hide()},{capture:!0}))}if(e.adjustableNumbers){const e={rgba:[255,255,255,1],hsva:[360,100,100,1],hsla:[360,100,100,1],cmyk:[100,100,100,100]};m(t.interaction.result,(t,o,n)=>{const i=e[this.getColorRepresentation().toLowerCase()];if(i){const e=i[n],r=t+(e>=100?1e3*o:o);return r<=0?0:Number((r<e?r:e).toPrecision(3))}return t})}if(e.autoReposition&&!e.inline){let t=null;const n=this;o.push(c(window,["scroll","resize"],()=>{n.isOpen()&&(e.closeOnScroll&&n.hide(),null===t?(t=setTimeout(()=>t=null,100),requestAnimationFrame((function e(){n._rePositioningPicker(),null!==t&&requestAnimationFrame(e)}))):(clearTimeout(t),t=setTimeout(()=>t=null,100)))},{capture:!0}))}this._eventBindings=o}_rePositioningPicker(){const{options:t}=this;if(!t.inline){const{app:e}=this._root;matchMedia("(max-width: 576px)").matches?Object.assign(e.style,{margin:"auto",height:"".concat(e.getBoundingClientRect().height,"px"),top:0,bottom:0,left:0,right:0}):(Object.assign(e.style,{margin:null,right:null,top:null,bottom:null,left:null,height:null}),this._nanopop.update(t.position))}}_updateOutput(){const{_root:t,_color:e,options:o}=this;if(t.interaction.type()){const n="to".concat(t.interaction.type().getAttribute("data-type"));t.interaction.result.value="function"==typeof e[n]?e[n]().toString(o.outputPrecision):""}!this._initializingActive&&this._recalc&&this._emit("change",e)}_clearColor(t=!1){const{_root:e,options:o}=this;o.useAsButton||(e.button.style.color="rgba(0, 0, 0, 0.15)"),e.button.classList.add("clear"),o.showAlways||this.hide(),this._lastColor=null,this._initializingActive||t||(this._emit("save",null),this._emit("clear",this))}_parseLocalColor(t){const{values:e,type:o,a:n}=j(t),{lockOpacity:i}=this.options,r=void 0!==n&&1!==n;return e&&3===e.length&&(e[3]=void 0),{values:!e||i&&r?null:e,type:o}}_emit(t,...e){this._eventListener[t].forEach(t=>t(...e,this))}on(t,e){return"function"==typeof e&&"string"==typeof t&&t in this._eventListener&&this._eventListener[t].push(e),this}off(t,e){const o=this._eventListener[t];if(o){const t=o.indexOf(e);~t&&o.splice(t,1)}return this}addSwatch(t){const{values:e}=this._parseLocalColor(t);if(e){const{_swatchColors:t,_root:o}=this,n=x(...e),i=p('<button type="button" style="color: '.concat(n.toRGBA().toString(0),'" aria-label="color swatch"/>'));return o.swatches.appendChild(i),t.push({el:i,color:n}),this._eventBindings.push(c(i,"click",()=>{this.setHSVA(...n.toHSVA(),!0),this._emit("swatchselect",n),this._emit("change",n)})),!0}return!1}removeSwatch(t){const e=this._swatchColors[t];if(e){const{el:o}=e;return this._root.swatches.removeChild(o),this._swatchColors.splice(t,1),!0}return!1}applyColor(t=!1){const{preview:e,button:o}=this._root,n=this._color.toRGBA().toString(0);return e.lastColor.style.color=n,this.options.useAsButton||(o.style.color=n),o.classList.remove("clear"),this._lastColor=this._color.clone(),this._initializingActive||t||this._emit("save",this._color),this}destroy(){this._eventBindings.forEach(t=>a(...t)),Object.keys(this._components).forEach(t=>this._components[t].destroy())}destroyAndRemove(){this.destroy();const{root:t,app:e}=this._root;t.parentElement&&t.parentElement.removeChild(t),e.parentElement.removeChild(e),Object.keys(this).forEach(t=>this[t]=null)}hide(){return this._root.app.classList.remove("visible"),this._emit("hide",this),this}show(){return this.options.disabled||(this._root.app.classList.add("visible"),this._rePositioningPicker(),this._emit("show",this)),this}isOpen(){return this._root.app.classList.contains("visible")}setHSVA(t=360,e=0,o=0,n=1,i=!1){const r=this._recalc;if(this._recalc=!1,t<0||t>360||e<0||e>100||o<0||o>100||n<0||n>1)return!1;this._color=x(t,e,o,n);const{hue:s,opacity:c,palette:a}=this._components;return s.update(t/360),c.update(n),a.update(e/100,1-o/100),i||this.applyColor(),r&&this._updateOutput(),this._recalc=r,!0}setColor(t,e=!1){if(null===t)return this._clearColor(e),!0;const{values:o,type:n}=this._parseLocalColor(t);if(o){const t=n.toUpperCase(),{options:i}=this._root.interaction,r=i.find(e=>e.getAttribute("data-type")===t);if(r&&!r.hidden)for(const t of i)t.classList[t===r?"add":"remove"]("active");return!!this.setHSVA(...o,e)&&this.setColorRepresentation(t)}return!1}setColorRepresentation(t){return t=t.toUpperCase(),!!this._root.interaction.options.find(e=>e.getAttribute("data-type").startsWith(t)&&!e.click())}getColorRepresentation(){return this._representation}getColor(){return this._color}getSelectedColor(){return this._lastColor}getRoot(){return this._root}disable(){return this.hide(),this.options.disabled=!0,this._root.button.classList.add("disabled"),this}enable(){return this.options.disabled=!1,this._root.button.classList.remove("disabled"),this}}D.utils=n,D.libs={HSVaColor:x,Moveable:L,Nanopop:B,Selectable:P},D.create=t=>new D(t),D.version=v.a;e.default=D}]).default}));
//# sourceMappingURL=pickr.min.js.map

/***/ }),

/***/ "./node_modules/@simonwep/pickr/dist/themes/nano.min.css":
/*!***************************************************************!*\
  !*** ./node_modules/@simonwep/pickr/dist/themes/nano.min.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../css-loader/dist/cjs.js!./nano.min.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/@simonwep/pickr/dist/themes/nano.min.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var id = "!!../../../../css-loader/dist/cjs.js!./nano.min.css";
var update = api(id, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/@simonwep/pickr/dist/themes/nano.min.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/@simonwep/pickr/dist/themes/nano.min.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*! Pickr 1.4.8 MIT | https://github.com/Simonwep/pickr */.pickr{position:relative;overflow:visible;-webkit-transform:translateY(0);transform:translateY(0)}.pickr *{box-sizing:border-box;outline:none;border:none;-webkit-appearance:none}.pickr .pcr-button{position:relative;height:2em;width:2em;padding:.5em;cursor:pointer;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;border-radius:.15em;background:url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\" stroke=\"%2342445A\" stroke-width=\"5px\" stroke-linecap=\"round\"><path d=\"M45,45L5,5\"></path><path d=\"M45,5L5,45\"></path></svg>') no-repeat 50%;background-size:0;-webkit-transition:all .3s;transition:all .3s}.pickr .pcr-button:before{background:url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\"><path fill=\"white\" d=\"M1,0H2V1H1V0ZM0,1H1V2H0V1Z\"/><path fill=\"gray\" d=\"M0,0H1V1H0V0ZM1,1H2V2H1V1Z\"/></svg>');background-size:.5em;z-index:-1;z-index:auto}.pickr .pcr-button:after,.pickr .pcr-button:before{position:absolute;content:\"\";top:0;left:0;width:100%;height:100%;border-radius:.15em}.pickr .pcr-button:after{-webkit-transition:background .3s;transition:background .3s;background:currentColor}.pickr .pcr-button.clear{background-size:70%}.pickr .pcr-button.clear:before{opacity:0}.pickr .pcr-button.clear:focus{box-shadow:0 0 0 1px hsla(0,0%,100%,.85),0 0 0 3px currentColor}.pickr .pcr-button.disabled{cursor:not-allowed}.pcr-app *,.pickr *{box-sizing:border-box;outline:none;border:none;-webkit-appearance:none}.pcr-app button.pcr-active,.pcr-app button:focus,.pcr-app input.pcr-active,.pcr-app input:focus,.pickr button.pcr-active,.pickr button:focus,.pickr input.pcr-active,.pickr input:focus{box-shadow:0 0 0 1px hsla(0,0%,100%,.85),0 0 0 3px currentColor}.pcr-app .pcr-palette,.pcr-app .pcr-slider,.pickr .pcr-palette,.pickr .pcr-slider{-webkit-transition:box-shadow .3s;transition:box-shadow .3s}.pcr-app .pcr-palette:focus,.pcr-app .pcr-slider:focus,.pickr .pcr-palette:focus,.pickr .pcr-slider:focus{box-shadow:0 0 0 1px hsla(0,0%,100%,.85),0 0 0 3px rgba(0,0,0,.25)}.pcr-app{position:fixed;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;z-index:10000;border-radius:.1em;background:#fff;opacity:0;visibility:hidden;-webkit-transition:opacity .3s,visibility 0s .3s;transition:opacity .3s,visibility 0s .3s;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-shadow:0 .15em 1.5em 0 rgba(0,0,0,.1),0 0 1em 0 rgba(0,0,0,.03);left:0;top:0}.pcr-app.visible{-webkit-transition:opacity .3s;transition:opacity .3s;visibility:visible;opacity:1}.pcr-app .pcr-swatches{display:-webkit-box;display:flex;flex-wrap:wrap;margin-top:.75em}.pcr-app .pcr-swatches.pcr-last{margin:0}@supports (display:grid){.pcr-app .pcr-swatches{display:grid;-webkit-box-align:center;align-items:center;grid-template-columns:repeat(auto-fit,1.75em)}}.pcr-app .pcr-swatches>button{font-size:1em;position:relative;width:calc(1.75em - 5px);height:calc(1.75em - 5px);border-radius:.15em;cursor:pointer;margin:2.5px;flex-shrink:0;justify-self:center;-webkit-transition:all .15s;transition:all .15s;overflow:hidden;background:transparent;z-index:1}.pcr-app .pcr-swatches>button:before{position:absolute;content:\"\";top:0;left:0;width:100%;height:100%;background:url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\"><path fill=\"white\" d=\"M1,0H2V1H1V0ZM0,1H1V2H0V1Z\"/><path fill=\"gray\" d=\"M0,0H1V1H0V0ZM1,1H2V2H1V1Z\"/></svg>');background-size:6px;border-radius:.15em;z-index:-1}.pcr-app .pcr-swatches>button:after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background:currentColor;border:1px solid rgba(0,0,0,.05);border-radius:.15em;box-sizing:border-box}.pcr-app .pcr-swatches>button:hover{-webkit-filter:brightness(1.05);filter:brightness(1.05)}.pcr-app .pcr-interaction{display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;margin:0 -.2em}.pcr-app .pcr-interaction>*{margin:0 .2em}.pcr-app .pcr-interaction input{letter-spacing:.07em;font-size:.75em;text-align:center;cursor:pointer;color:#75797e;background:#f1f3f4;border-radius:.15em;-webkit-transition:all .15s;transition:all .15s;padding:.45em .5em;margin-top:.75em}.pcr-app .pcr-interaction input:hover{-webkit-filter:brightness(.975);filter:brightness(.975)}.pcr-app .pcr-interaction input:focus{box-shadow:0 0 0 1px hsla(0,0%,100%,.85),0 0 0 3px rgba(66,133,244,.75)}.pcr-app .pcr-interaction .pcr-result{color:#75797e;text-align:left;-webkit-box-flex:1;flex:1 1 8em;min-width:8em;-webkit-transition:all .2s;transition:all .2s;border-radius:.15em;background:#f1f3f4;cursor:text}.pcr-app .pcr-interaction .pcr-result::-moz-selection{background:#4285f4;color:#fff}.pcr-app .pcr-interaction .pcr-result::selection{background:#4285f4;color:#fff}.pcr-app .pcr-interaction .pcr-type.active{color:#fff;background:#4285f4}.pcr-app .pcr-interaction .pcr-cancel,.pcr-app .pcr-interaction .pcr-clear,.pcr-app .pcr-interaction .pcr-save{width:auto;color:#fff}.pcr-app .pcr-interaction .pcr-cancel:hover,.pcr-app .pcr-interaction .pcr-clear:hover,.pcr-app .pcr-interaction .pcr-save:hover{-webkit-filter:brightness(.925);filter:brightness(.925)}.pcr-app .pcr-interaction .pcr-save{background:#4285f4}.pcr-app .pcr-interaction .pcr-cancel,.pcr-app .pcr-interaction .pcr-clear{background:#f44250}.pcr-app .pcr-interaction .pcr-cancel:focus,.pcr-app .pcr-interaction .pcr-clear:focus{box-shadow:0 0 0 1px hsla(0,0%,100%,.85),0 0 0 3px rgba(244,66,80,.75)}.pcr-app .pcr-selection .pcr-picker{position:absolute;height:18px;width:18px;border:2px solid #fff;border-radius:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.pcr-app .pcr-selection .pcr-color-chooser,.pcr-app .pcr-selection .pcr-color-opacity,.pcr-app .pcr-selection .pcr-color-palette{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;cursor:grab;cursor:-webkit-grab}.pcr-app .pcr-selection .pcr-color-chooser:active,.pcr-app .pcr-selection .pcr-color-opacity:active,.pcr-app .pcr-selection .pcr-color-palette:active{cursor:grabbing;cursor:-webkit-grabbing}.pcr-app[data-theme=nano]{width:14.25em;max-width:95vw}.pcr-app[data-theme=nano] .pcr-swatches{margin-top:.6em;padding:0 .6em}.pcr-app[data-theme=nano] .pcr-interaction{padding:0 .6em .6em}.pcr-app[data-theme=nano] .pcr-selection{display:grid;grid-gap:.6em;grid-template-columns:1fr 4fr;grid-template-rows:5fr auto auto;-webkit-box-align:center;align-items:center;height:10.5em;width:100%;align-self:flex-start}.pcr-app[data-theme=nano] .pcr-selection .pcr-color-preview{grid-area:2/1/4/1;height:100%;width:100%;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:center;justify-content:center;margin-left:.6em}.pcr-app[data-theme=nano] .pcr-selection .pcr-color-preview .pcr-last-color{display:none}.pcr-app[data-theme=nano] .pcr-selection .pcr-color-preview .pcr-current-color{position:relative;background:currentColor;width:2em;height:2em;border-radius:50em;overflow:hidden}.pcr-app[data-theme=nano] .pcr-selection .pcr-color-preview .pcr-current-color:before{position:absolute;content:\"\";top:0;left:0;width:100%;height:100%;background:url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\"><path fill=\"white\" d=\"M1,0H2V1H1V0ZM0,1H1V2H0V1Z\"/><path fill=\"gray\" d=\"M0,0H1V1H0V0ZM1,1H2V2H1V1Z\"/></svg>');background-size:.5em;border-radius:.15em;z-index:-1}.pcr-app[data-theme=nano] .pcr-selection .pcr-color-palette{grid-area:1/1/2/3;width:100%;height:100%;z-index:1}.pcr-app[data-theme=nano] .pcr-selection .pcr-color-palette .pcr-palette{border-radius:.15em;width:100%;height:100%}.pcr-app[data-theme=nano] .pcr-selection .pcr-color-palette .pcr-palette:before{position:absolute;content:\"\";top:0;left:0;width:100%;height:100%;background:url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\"><path fill=\"white\" d=\"M1,0H2V1H1V0ZM0,1H1V2H0V1Z\"/><path fill=\"gray\" d=\"M0,0H1V1H0V0ZM1,1H2V2H1V1Z\"/></svg>');background-size:.5em;border-radius:.15em;z-index:-1}.pcr-app[data-theme=nano] .pcr-selection .pcr-color-chooser{grid-area:2/2/2/2}.pcr-app[data-theme=nano] .pcr-selection .pcr-color-opacity{grid-area:3/2/3/2}.pcr-app[data-theme=nano] .pcr-selection .pcr-color-chooser,.pcr-app[data-theme=nano] .pcr-selection .pcr-color-opacity{height:.5em;margin:0 .6em}.pcr-app[data-theme=nano] .pcr-selection .pcr-color-chooser .pcr-picker,.pcr-app[data-theme=nano] .pcr-selection .pcr-color-opacity .pcr-picker{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pcr-app[data-theme=nano] .pcr-selection .pcr-color-chooser .pcr-slider,.pcr-app[data-theme=nano] .pcr-selection .pcr-color-opacity .pcr-slider{-webkit-box-flex:1;flex-grow:1;border-radius:50em}.pcr-app[data-theme=nano] .pcr-selection .pcr-color-chooser .pcr-slider{background:-webkit-gradient(linear,left top,right top,from(red),color-stop(#ff0),color-stop(#0f0),color-stop(#0ff),color-stop(#00f),color-stop(#f0f),to(red));background:linear-gradient(90deg,red,#ff0,#0f0,#0ff,#00f,#f0f,red)}.pcr-app[data-theme=nano] .pcr-selection .pcr-color-opacity .pcr-slider{background:-webkit-gradient(linear,left top,right top,from(transparent),to(#000)),url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\"><path fill=\"white\" d=\"M1,0H2V1H1V0ZM0,1H1V2H0V1Z\"/><path fill=\"gray\" d=\"M0,0H1V1H0V0ZM1,1H2V2H1V1Z\"/></svg>');background:linear-gradient(90deg,transparent,#000),url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\"><path fill=\"white\" d=\"M1,0H2V1H1V0ZM0,1H1V2H0V1Z\"/><path fill=\"gray\" d=\"M0,0H1V1H0V0ZM1,1H2V2H1V1Z\"/></svg>');background-size:100%,.25em}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/editor/editor.less":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/editor/editor.less ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".coursebox-editor {\n  width: 194px;\n  padding: 3px;\n  font-size: 14px;\n}\n.coursebox-editor #font-style,\n.coursebox-editor #font-layout-style {\n  margin-top: 5px;\n}\n.coursebox-editor #font-style .__font-color,\n.coursebox-editor #font-style .__font-size,\n.coursebox-editor #font-style .__font-style {\n  margin: 0 3px 5px 0;\n}\n.coursebox-editor #font-layout-style .__font-layout,\n.coursebox-editor #font-layout-style .__font-line-height,\n.coursebox-editor #font-layout-style .__font-padding-top-bottom,\n.coursebox-editor #font-layout-style .__font-padding-left-right {\n  margin: 0 3px 5px 0;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/font-layout-button-group/font-layout-button-group.less":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/font-layout-button-group/font-layout-button-group.less ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".coursebox-font-layout-button-group {\n  display: inline-block;\n  vertical-align: bottom;\n  padding: 3px;\n  border-radius: 2px;\n  border: 1px solid #E8E8E8;\n}\n.coursebox-font-layout-button-group .coursebox-button-icon {\n  margin: 0 6px;\n}\n.coursebox-font-layout-button-group .coursebox-button-icon:first-child {\n  margin-left: 0;\n}\n.coursebox-font-layout-button-group .coursebox-button-icon:last-child {\n  margin-right: 0;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/font-style-button-group/font-style-button-group.less":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/font-style-button-group/font-style-button-group.less ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".coursebox-font-style-button-group {\n  display: inline-block;\n  vertical-align: bottom;\n  padding: 3px;\n  border-radius: 2px;\n  border: 1px solid #E8E8E8;\n}\n.coursebox-font-style-button-group .coursebox-button-icon {\n  margin: 0 6px;\n}\n.coursebox-font-style-button-group .coursebox-button-icon:first-child {\n  margin-left: 0;\n}\n.coursebox-font-style-button-group .coursebox-button-icon:last-child {\n  margin-right: 0;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/input-color/input-color.less":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/input-color/input-color.less ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".coursebox-input-color {\n  background-color: #fff;\n  width: 52px;\n  height: 32px;\n  box-sizing: content-box;\n  padding: 0;\n  margin: 0;\n  border: 1px solid #E8E8E8;\n  border-radius: 2px;\n  outline: none;\n  vertical-align: bottom;\n}\n.coursebox-input-color .font-color-icon {\n  width: 14px;\n  height: 14px;\n  margin-left: 10px;\n  float: left;\n}\n.coursebox-input-color .font-color-icon img {\n  width: 8px;\n  height: 9px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.coursebox-input-color .font-color-icon .font-color-bar {\n  width: 10px;\n  height: 3px;\n  margin-top: 2px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.coursebox-input-color .font-color-collapse {\n  float: right;\n  margin-right: 9px;\n}\n.coursebox-input-color .font-color-collapse img {\n  width: 6px;\n  height: 4px;\n  vertical-align: middle;\n}\n.coursebox-input-color:hover {\n  border-color: #5C6066;\n}\n.pickr-fix-position {\n  margin-top: 20px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/input-select/input-select.less":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/input-select/input-select.less ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".coursebox-input-select {\n  position: relative;\n  display: inline-block;\n  background-color: #fff;\n  height: 32px;\n  line-height: 32px;\n  box-sizing: content-box;\n  padding: 0 10px;\n  margin: 0;\n  border: 1px solid #E8E8E8;\n  border-radius: 2px;\n  outline: none;\n  vertical-align: bottom;\n}\n.coursebox-input-select .icon {\n  display: inline-block;\n  vertical-align: middle;\n  width: 14px;\n  height: 14px;\n  padding: 2px;\n  margin-right: 7px;\n}\n.coursebox-input-select .select-value {\n  display: inline-block;\n  width: 14px;\n  font-size: 12px;\n  margin-right: 1px;\n  text-align: center;\n  color: #333;\n}\n.coursebox-input-select .unit {\n  font-size: 12px;\n  margin-left: 1px;\n  color: #333;\n}\n.coursebox-input-select .select-collapse {\n  float: right;\n  margin-left: 7px;\n}\n.coursebox-input-select .select-collapse img {\n  width: 6px;\n  height: 4px;\n  vertical-align: middle;\n}\n.coursebox-input-select .options {\n  position: absolute;\n  z-index: 99;\n  left: -1px;\n  width: 100%;\n}\n.coursebox-input-select .options ul,\n.coursebox-input-select .options ol {\n  background-color: #fff;\n  border: 1px solid #E8E8E8;\n  min-width: 100%;\n  list-style-type: none;\n  padding-left: 0;\n  margin-top: 0;\n  margin-left: 0;\n  max-height: 10em;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.coursebox-input-select .options ul li,\n.coursebox-input-select .options ol li {\n  font-size: 12px;\n  padding-left: 7px;\n  user-select: none;\n}\n.coursebox-input-select .options ul li.selected,\n.coursebox-input-select .options ol li.selected {\n  background-color: #E8E8E8;\n}\n.coursebox-input-select .options ul li:hover,\n.coursebox-input-select .options ol li:hover {\n  background-color: #E8E8E8;\n}\n.coursebox-input-select:hover {\n  border-color: #5C6066;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/select-button/select-button.less":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/select-button/select-button.less ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".coursebox-button-icon {\n  width: 36px;\n  height: 26px;\n  border: 1px solid transparent;\n  border-radius: 1px;\n  background-color: #fff;\n  outline: none;\n  vertical-align: bottom;\n}\n.coursebox-button-icon .icon {\n  width: 14px;\n  height: 14px;\n  padding: 2px;\n}\n.coursebox-button-icon:hover {\n  border-color: #5C6066;\n}\n.coursebox-button-icon.selected {\n  background-color: #E8E8E8;\n  border-color: transparent;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/textbox/textbox.less":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/textbox/textbox.less ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".coursebox-textbox .textbox {\n  margin: 0;\n  display: inline-block;\n  outline: none;\n  border: 1px dashed #aaa;\n}\n.coursebox-textbox .textbox p {\n  margin: 0;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    for (var i = 0; i < modules.length; i++) {
      var item = [].concat(modules[i]);

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/debug/src/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/debug/src/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */
function log(...args) {
	// This hackery is required for IE8/9, where
	// the `console.log` function doesn't have 'apply'
	return typeof console === 'object' &&
		console.log &&
		console.log(...args);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(/*! ./common */ "./node_modules/debug/src/common.js")(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/debug/src/common.js":
/*!******************************************!*\
  !*** ./node_modules/debug/src/common.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* Active `debug` instances.
	*/
	createDebug.instances = [];

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return match;
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.enabled = createDebug.enabled(namespace);
		debug.useColors = createDebug.useColors();
		debug.color = selectColor(namespace);
		debug.destroy = destroy;
		debug.extend = extend;
		// Debug.formatArgs = formatArgs;
		// debug.rawLog = rawLog;

		// env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		createDebug.instances.push(debug);

		return debug;
	}

	function destroy() {
		const index = createDebug.instances.indexOf(this);
		if (index !== -1) {
			createDebug.instances.splice(index, 1);
			return true;
		}
		return false;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}

		for (i = 0; i < createDebug.instances.length; i++) {
			const instance = createDebug.instances[i];
			instance.enabled = createDebug.enabled(instance.namespace);
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ "./node_modules/ms/index.js":
/*!**********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function addModulesToDom(id, list, options) {
  id = options.base ? id + options.base : id;

  if (!stylesInDom[id]) {
    stylesInDom[id] = [];
  }

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var part = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };
    var styleInDomById = stylesInDom[id];

    if (styleInDomById[i]) {
      styleInDomById[i].updater(part);
    } else {
      styleInDomById.push({
        updater: addStyle(part, options)
      });
    }
  }

  for (var j = list.length; j < stylesInDom[id].length; j++) {
    stylesInDom[id][j].updater();
  }

  stylesInDom[id].length = list.length;

  if (stylesInDom[id].length === 0) {
    delete stylesInDom[id];
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (id, list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  addModulesToDom(id, list, options);
  return function update(newList) {
    addModulesToDom(id, newList || [], options);
  };
};

/***/ }),

/***/ "./src/commons/computed_state.js":
/*!***************************************!*\
  !*** ./src/commons/computed_state.js ***!
  \***************************************/
/*! exports provided: computedState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computedState", function() { return computedState; });
var debug = __webpack_require__(/*! ./debug */ "./src/commons/debug.js")('textbox:commons:button');

function rgba2hex(orig) {
  var a = '',
      rgb = orig.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
      alpha = (rgb && rgb[4] || "").trim(),
      hex = rgb ? (rgb[1] | 1 << 8).toString(16).slice(1) + (rgb[2] | 1 << 8).toString(16).slice(1) + (rgb[3] | 1 << 8).toString(16).slice(1) : orig;

  if (alpha !== '') {
    a = (255 * parseFloat(alpha)).toString(16);
  }

  hex = hex + a;
  return "#".concat(hex);
}

var STYLE_PROPS = ['fontSize', 'color', 'fontWeight', 'textDecoration', 'fontStyle', 'textAlign', 'lineHeight', 'paddingTop', 'paddingLeft'];

function computedState() {
  var currentState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var node = arguments.length > 1 ? arguments[1] : undefined;
  var currentWindow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;
  var nodeName = node.nodeName.toLowerCase();
  var computedStyle = currentWindow.getComputedStyle(node, null);
  debug('computedState', nodeName);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = STYLE_PROPS[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var styleProp = _step.value;
      // 设置过就不在设置
      if (typeof currentState[styleProp] !== 'undefined' && styleProp !== 'text-decoration') continue;

      switch (styleProp) {
        case 'fontSize':
          var fontSize = '14px'; // if (nodeName === 'font' && node.hasAttribute('size')) {
          // 	fontSize = node.getAttribute('size');
          // } else {

          fontSize = computedStyle.getPropertyValue('font-size'); // }

          currentState[styleProp] = fontSize;
          break;

        case 'color':
          var color = '#000';

          if (nodeName === 'font' && node.hasAttribute('color')) {
            color = node.getAttribute('color');
          } else {
            color = computedStyle.getPropertyValue('color');
            if (color.startsWith('rgb')) color = rgba2hex(color);
          }

          currentState[styleProp] = color;
          break;

        case 'fontWeight':
          var fontWeight = 'normal';

          if (nodeName === 'b' || nodeName === 'strong') {
            fontWeight = 'bold';
          } else {
            fontWeight = computedStyle.getPropertyValue('font-weight');
          }

          currentState[styleProp] = fontWeight;
          break;

        case 'textDecoration':
          var textDecoration = 'none';

          if (nodeName === 'i' || nodeName === 'em') {
            textDecoration = 'italic';
          } else if (nodeName === 'u') {
            textDecoration = 'underline';
          } else if (nodeName === 'strike' || nodeName === 'del' || nodeName === 's') {
            textDecoration = 'line-through';
          } else {
            textDecoration = computedStyle.getPropertyValue('text-decoration');
            if (textDecoration.split(' ').length > 0) textDecoration = textDecoration.split(' ')[0];
          }

          currentState[styleProp] = textDecoration;
          break;

        case 'fontStyle':
          var fontStyle = 'normal';

          if (nodeName === 'i' || nodeName === 'em') {
            fontStyle = 'italic';
          } else {
            fontStyle = computedStyle.getPropertyValue('font-style');
          }

          currentState[styleProp] = fontStyle;
          break;

        case 'textAlign':
          var textAlign = computedStyle.getPropertyValue('text-align');
          currentState[styleProp] = textAlign;
          break;

        case 'lineHeight':
          var lineHeight = computedStyle.getPropertyValue('line-height');
          currentState[styleProp] = lineHeight;
          break;

        case 'paddingTop':
          var paddingTop = computedStyle.getPropertyValue('padding-top');
          currentState[styleProp] = paddingTop;
          break;

        case 'paddingLeft':
          var paddingLeft = computedStyle.getPropertyValue('padding-left');
          currentState[styleProp] = paddingLeft;
          break;
      }

      debug('currentState: %j', currentState);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return currentState;
}



/***/ }),

/***/ "./src/commons/debug.js":
/*!******************************!*\
  !*** ./src/commons/debug.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var debug = function debug() {
  return function () {};
};

if (true) {
  debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
}

module.exports = debug;

/***/ }),

/***/ "./src/commons/throttle.js":
/*!*********************************!*\
  !*** ./src/commons/throttle.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * 节流函数
 *
 * 主要特征:
 * 1. 频繁执行是固定间隔调用
 *
 **/
function throttle(func, threshold) {
  var start = Date.now(),
      timer;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var ctx = this,
        curr = Date.now();
    clearTimeout(timer);

    if (curr - start >= threshold) {
      func.apply(ctx, args);
      start = curr;
    } else {
      var timeout = start + threshold - curr;
      timer = setTimeout(function () {
        func.apply(ctx, args);
        start = curr;
      }, timeout);
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (throttle);

/***/ }),

/***/ "./src/commons/utils.js":
/*!******************************!*\
  !*** ./src/commons/utils.js ***!
  \******************************/
/*! exports provided: isNode, isElement, isSyntheticEvent, isReactComponentInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNode", function() { return isNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSyntheticEvent", function() { return isSyntheticEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReactComponentInstance", function() { return isReactComponentInstance; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isSyntheticEvent(evt) {
  return evt.nativeEvent instanceof Event;
} //Returns true if it is a DOM node


function isNode(node) {
  return (typeof Node === "undefined" ? "undefined" : _typeof(Node)) === 'object' ? node instanceof Node : node && _typeof(node) === 'object' && typeof node.nodeType === 'number' && typeof node.nodeName === 'string';
} //Returns true if it is a DOM element    


function isElement(element) {
  return (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) === 'object' ? element instanceof HTMLElement : //DOM2
  element && _typeof(element) === 'object' && element !== null && element.nodeType === 1 && typeof element.nodeName === 'string';
}

function isClassComponent(component) {
  return typeof component === 'function' && !!component.prototype.isReactComponent;
}

function isFunctionComponent(component) {
  return typeof component === 'function' && String(component).includes('return React.createElement');
}

function isReactComponent(component) {
  return isClassComponent(component) || isFunctionComponent(component);
}

function isReactComponentInstance(componentInstance) {
  return isReactComponent(componentInstance.constructor);
}



/***/ }),

/***/ "./src/components/editor/editor.less":
/*!*******************************************!*\
  !*** ./src/components/editor/editor.less ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./editor.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/editor/editor.less");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var id = "!!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./editor.less";
var update = api(id, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/editor/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/editor/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.less */ "./src/components/editor/editor.less");
/* harmony import */ var _editor_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _input_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input-select */ "./src/components/input-select/index.jsx");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _input_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../input-color */ "./src/components/input-color/index.jsx");
/* harmony import */ var medium_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! medium-editor */ "medium-editor");
/* harmony import */ var medium_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(medium_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _font_style_button_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../font-style-button-group */ "./src/components/font-style-button-group/index.jsx");
/* harmony import */ var _font_layout_button_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../font-layout-button-group */ "./src/components/font-layout-button-group/index.jsx");
/* harmony import */ var _commons_computed_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @commons/computed_state */ "./src/commons/computed_state.js");
/* harmony import */ var _commons_throttle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @commons/throttle */ "./src/commons/throttle.js");
/* harmony import */ var _commons_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @commons/utils */ "./src/commons/utils.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // import InputNumber from '../input-number';






 // import ImageLineHeight from '@assets/images/行间距_正常@2x.png';
// import ImagePaddingLeftAndRight from '@assets/images/左右边距_正常@2x.png';
// import ImagePaddingTopAndBottom from '@assets/images/上下边距_正常@2x.png';





var debug = __webpack_require__(/*! @commons/debug */ "./src/commons/debug.js")('textbox:editor');

function removeStyle(element) {
  for (var _len = arguments.length, styleNames = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    styleNames[_key - 1] = arguments[_key];
  }

  for (var _i = 0, _styleNames = styleNames; _i < _styleNames.length; _i++) {
    var styleName = _styleNames[_i];
    element.style[styleName] = null;
  }

  var children = element.children;
  if (children.length === 0) return;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var child = _step.value;
      removeStyle.apply(void 0, [child].concat(styleNames));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

var TextboxEditor =
/*#__PURE__*/
function (_Component) {
  _inherits(TextboxEditor, _Component);

  function TextboxEditor(props) {
    var _this;

    _classCallCheck(this, TextboxEditor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextboxEditor).call(this, props));
    _this.state = {
      textStyle: {}
    };
    _this.onTextStyleChange = _this.onTextStyleChange.bind(_assertThisInitialized(_this));
    _this.throttleCheckState = Object(_commons_throttle__WEBPACK_IMPORTED_MODULE_9__["default"])(_this.checkState, 250).bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TextboxEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      debug('componentDidMount');
      if (this.getTextbox() && !this.attachedEvent) this.attachEventHandlers();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      debug('componentWillUnmount');
      this.detachEventHandlers();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      debug('componentDidUpdate');
      if (this.getTextbox() && !this.attachedEvent) this.attachEventHandlers();
    }
  }, {
    key: "detachEventHandlers",
    value: function detachEventHandlers() {
      if (this.attachedEvent) {
        debug('detachEventHandlers');
        this.attachedEvent = true; // this.getTextbox().subscribe('blur', this.handleBlur.bind(this)); // 禁用、重置

        this.getTextbox().unsubscribe('focus', this.throttleCheckState);
        this.getTextbox().unsubscribe('positionToolbar', this.throttleCheckState);
        this.getTextbox().unsubscribe('editableInput', this.throttleCheckState); // Updating the state of the toolbar as things change

        this.getTextbox().unsubscribe('editableClick', this.throttleCheckState);
        this.getTextbox().unsubscribe('editableKeyup', this.throttleCheckState);
      }
    }
  }, {
    key: "attachEventHandlers",
    value: function attachEventHandlers() {
      if (!this.attachedEvent) {
        debug('attachEventHandlers');
        this.attachedEvent = true; // this.throttleCheckState();
        // MediumEditor custom events for when user beings and ends interaction with a contenteditable and its elements
        // this.getTextbox().subscribe('blur', this.handleBlur.bind(this)); // 禁用、重置

        this.getTextbox().subscribe('focus', this.throttleCheckState);
        this.getTextbox().subscribe('positionToolbar', this.throttleCheckState);
        this.getTextbox().subscribe('editableInput', this.throttleCheckState); // Updating the state of the toolbar as things change

        this.getTextbox().subscribe('editableClick', this.throttleCheckState);
        this.getTextbox().subscribe('editableKeyup', this.throttleCheckState);
      }
    }
  }, {
    key: "checkState",
    value: function checkState() {
      var _this$getTextbox$opti;

      debug('checkState');
      var selectionRange = medium_editor__WEBPACK_IMPORTED_MODULE_5___default.a.selection.getSelectionRange((_this$getTextbox$opti = this.getTextbox().options) === null || _this$getTextbox$opti === void 0 ? void 0 : _this$getTextbox$opti.ownerDocument);
      if (!selectionRange) return;
      var parentNode = medium_editor__WEBPACK_IMPORTED_MODULE_5___default.a.selection.getSelectedParentElement(selectionRange); // Make sure the selection parent isn't outside of the contenteditable

      if (!this.getTextbox().elements.some(function (element) {
        return medium_editor__WEBPACK_IMPORTED_MODULE_5___default.a.util.isDescendant(element, parentNode, true);
      })) {
        return;
      }

      var textStyle = {}; // Climb up the DOM and do manual checks for whether a certain extension is currently enabled for this node

      while (parentNode) {
        var _this$getTextbox$opti2;

        Object(_commons_computed_state__WEBPACK_IMPORTED_MODULE_8__["computedState"])(textStyle, parentNode, (_this$getTextbox$opti2 = this.getTextbox().options) === null || _this$getTextbox$opti2 === void 0 ? void 0 : _this$getTextbox$opti2.contentWindow); // we can abort the search upwards if we leave the contentEditable element

        if (medium_editor__WEBPACK_IMPORTED_MODULE_5___default.a.util.isMediumEditorElement(parentNode)) {
          break;
        }

        parentNode = parentNode.parentNode;
      }

      debug('textStyle %o', textStyle);
      this.setState({
        textStyle: textStyle
      });
    }
  }, {
    key: "getTextboxDOM",
    value: function getTextboxDOM() {
      debug('getTextboxDOM', this.props.textboxDOM);

      if (this.props.textboxDOM) {
        var textboxDOM = this.props.textboxDOM;

        if (Object(_commons_utils__WEBPACK_IMPORTED_MODULE_10__["isReactComponentInstance"])(textboxDOM)) {
          return react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.findDOMNode(textboxDOM);
        } else if (Object(_commons_utils__WEBPACK_IMPORTED_MODULE_10__["isElement"])(textboxDOM)) {
          return textboxDOM;
        } else {
          throw new Error('`textboxDOM` 必须是一个 HTMLElement 或者 React Component 实例');
        }
      }
    }
  }, {
    key: "getTextbox",
    value: function getTextbox() {
      var dom = this.getTextboxDOM();
      return dom ? medium_editor__WEBPACK_IMPORTED_MODULE_5___default.a.getEditorFromElement(dom) : null;
    }
  }, {
    key: "onTextStyleChange",
    value: function onTextStyleChange(field, value) {
      debug('onTextStyleChange', field, value);
      var medium = this.getTextbox();
      if (!medium) return;
      var textboxDOM = this.getTextboxDOM();
      var selection = medium.options.ownerDocument.getSelection();
      var selectionRange = medium_editor__WEBPACK_IMPORTED_MODULE_5___default.a.selection.getSelectionRange(medium.options.ownerDocument);
      var parentNode = medium_editor__WEBPACK_IMPORTED_MODULE_5___default.a.selection.getSelectedParentElement(selectionRange);

      if (medium) {
        switch (field) {
          case 'fontWeight':
            medium.execAction('bold');
            break;

          case 'fontStyle':
            medium.execAction('italic');
            break;

          case 'textDecoration':
            medium.execAction('underline');
            break;

          case 'color':
            // fix <font color></font>
            medium.options.ownerDocument.execCommand('styleWithCSS', false, true);
            medium.execAction('foreColor', {
              value: value
            });
            medium.options.ownerDocument.execCommand('styleWithCSS', false, false);
            break;

          case 'fontSize':
            medium.execAction('fontSize', {
              value: 7
            });

            if (textboxDOM) {
              var nodes = textboxDOM.querySelectorAll('font[size="7"]');
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = nodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var node = _step2.value;
                  node.removeAttribute('size');
                  node.style.fontSize = "".concat(value, "px");
                }
              } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                    _iterator2["return"]();
                  }
                } finally {
                  if (_didIteratorError2) {
                    throw _iteratorError2;
                  }
                }
              }

              medium.trigger('editableInput', null, textboxDOM);
            }

            break;

          case 'textAlign':
            if (value === 'center') {
              medium.execAction('justifyCenter');
            } else if (value === 'left') {
              medium.execAction('justifyLeft');
            } else if (value === 'right') {
              medium.execAction('justifyRight');
            } else if (value === 'justify') {
              medium.execAction('justifyFull');
            }

            this.checkState();
            medium.trigger('editableInput', null, textboxDOM);
            break;

          case 'lineHeight':
            // 没有选中时
            if (selection.isCollapsed) {
              while (parentNode) {
                if (parentNode.parentNode === textboxDOM) break;
                parentNode = parentNode.parentNode;
              }
            }

            if (!parentNode) break;
            removeStyle(parentNode, 'lineHeight');
            parentNode.style.lineHeight = value;
            medium.trigger('editableInput', null, textboxDOM);
            break;

          case 'paddingTop':
          case 'paddingBottom':
          case 'paddingLeft':
          case 'paddingRight':
            while (parentNode) {
              if (parentNode.parentNode === textboxDOM) break;
              parentNode = parentNode.parentNode;
            }

            if (!parentNode) break;
            removeStyle(parentNode, field);
            parentNode.style[field] = value;
            medium.trigger('editableInput', null, textboxDOM);
            break;
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _this$state$textStyle2;

      var _this$state$textStyle = this.state.textStyle,
          fontSize = _this$state$textStyle.fontSize,
          paddingTop = _this$state$textStyle.paddingTop,
          paddingLeft = _this$state$textStyle.paddingLeft,
          lineHeight = _this$state$textStyle.lineHeight;
      if (typeof fontSize === 'string' && fontSize.endsWith('px')) fontSize = parseFloat(fontSize);
      if (typeof paddingTop === 'string' && paddingTop.endsWith('px')) paddingTop = parseFloat(paddingTop);
      if (typeof paddingLeft === 'string' && paddingLeft.endsWith('px')) paddingLeft = parseFloat(paddingLeft);
      if (typeof lineHeight === 'string' && lineHeight.endsWith('px')) lineHeight = (parseFloat(lineHeight) / fontSize).toFixed(1);
      return React.createElement("div", {
        className: "coursebox-editor"
      }, React.createElement("label", {
        htmlFor: "font-size-style"
      }, "\u6587\u5B57"), React.createElement("div", {
        id: "font-style"
      }, React.createElement(_input_color__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "__font-color",
        value: this.state.textStyle.color,
        onChange: function onChange(color) {
          return _this2.onTextStyleChange('color', color);
        }
      }), React.createElement(_input_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "__font-size",
        value: fontSize,
        options: [12, 13, 14, 16, 18, 20, 28, 36, 48, 72],
        unit: "px",
        onChange: function onChange(fontSize) {
          return _this2.onTextStyleChange('fontSize', fontSize);
        }
      }), React.createElement(_font_style_button_group__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "__font-style",
        fontWeight: (_this$state$textStyle2 = this.state.textStyle) === null || _this$state$textStyle2 === void 0 ? void 0 : _this$state$textStyle2.fontWeight,
        fontStyle: this.state.textStyle.fontStyle,
        textDecoration: this.state.textStyle.textDecoration,
        onFontStyleChange: function onFontStyleChange(field, val) {
          _this2.onTextStyleChange(field, val);
        }
      })), React.createElement("label", {
        htmlFor: "font-layout-style"
      }, "\u5E03\u5C40"), React.createElement("div", {
        id: "font-layout-style"
      }, React.createElement(_font_layout_button_group__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "__font-layout",
        textAlign: this.state.textStyle.textAlign,
        onFontLayoutChange: function onFontLayoutChange(textAlign) {
          return _this2.onTextStyleChange('textAlign', textAlign);
        }
      })));
    }
  }]);

  return TextboxEditor;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TextboxEditor);

/***/ }),

/***/ "./src/components/font-layout-button-group/font-layout-button-group.less":
/*!*******************************************************************************!*\
  !*** ./src/components/font-layout-button-group/font-layout-button-group.less ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./font-layout-button-group.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/font-layout-button-group/font-layout-button-group.less");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var id = "!!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./font-layout-button-group.less";
var update = api(id, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/font-layout-button-group/index.jsx":
/*!***********************************************************!*\
  !*** ./src/components/font-layout-button-group/index.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _font_layout_button_group_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./font-layout-button-group.less */ "./src/components/font-layout-button-group/font-layout-button-group.less");
/* harmony import */ var _font_layout_button_group_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_font_layout_button_group_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _select_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../select-button */ "./src/components/select-button/index.jsx");
/* harmony import */ var _assets_images_2x_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @assets/images/左对齐_正常@2x.png */ "./assets/images/左对齐_正常@2x.png");
/* harmony import */ var _assets_images_2x_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @assets/images/居中对齐_正常@2x.png */ "./assets/images/居中对齐_正常@2x.png");
/* harmony import */ var _assets_images_2x_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @assets/images/右对齐_正常@2x.png */ "./assets/images/右对齐_正常@2x.png");
/* harmony import */ var _assets_images_2x_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @assets/images/两侧对齐_正常@2x.png */ "./assets/images/两侧对齐_正常@2x.png");
/* harmony import */ var _assets_images_2x_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @assets/images/左对齐_选中@2x.png */ "./assets/images/左对齐_选中@2x.png");
/* harmony import */ var _assets_images_2x_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @assets/images/居中对齐_选中@2x.png */ "./assets/images/居中对齐_选中@2x.png");
/* harmony import */ var _assets_images_2x_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @assets/images/右对齐_选中@2x.png */ "./assets/images/右对齐_选中@2x.png");
/* harmony import */ var _assets_images_2x_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @assets/images/两侧对齐_选中@2x.png */ "./assets/images/两侧对齐_选中@2x.png");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }














var debug = __webpack_require__(/*! @commons/debug */ "./src/commons/debug.js")('textbox:font-layout-button-group');

var FontLayoutButtonGroup =
/*#__PURE__*/
function (_Component) {
  _inherits(FontLayoutButtonGroup, _Component);

  function FontLayoutButtonGroup(props) {
    var _this;

    _classCallCheck(this, FontLayoutButtonGroup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FontLayoutButtonGroup).call(this, props));
    _this.onFontLayoutChange = _this.onFontLayoutChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FontLayoutButtonGroup, [{
    key: "onFontLayoutChange",
    value: function onFontLayoutChange(textAlign) {
      var _this2 = this;

      return function (selected) {
        var _this2$props;

        debug('onFontLayoutChange %s %s', textAlign, selected);
        (_this2$props = _this2.props) === null || _this2$props === void 0 ? void 0 : _this2$props.onFontLayoutChange(selected ? textAlign : 'start');
      };
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      return React.createElement("div", {
        className: "coursebox-font-layout-button-group ".concat(className)
      }, React.createElement(_select_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        selected: this.props.textAlign === 'left' || this.props.textAlign === 'start',
        icon: this.props.textAlign === 'left' ? _assets_images_2x_png__WEBPACK_IMPORTED_MODULE_8__["default"] : _assets_images_2x_png__WEBPACK_IMPORTED_MODULE_4__["default"],
        onSelected: this.onFontLayoutChange('left')
      }), React.createElement(_select_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        selected: this.props.textAlign === 'center',
        icon: this.props.textAlign === 'center' ? _assets_images_2x_png__WEBPACK_IMPORTED_MODULE_9__["default"] : _assets_images_2x_png__WEBPACK_IMPORTED_MODULE_5__["default"],
        onSelected: this.onFontLayoutChange('center')
      }), React.createElement(_select_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        selected: this.props.textAlign === 'right',
        icon: this.props.textAlign === 'right' ? _assets_images_2x_png__WEBPACK_IMPORTED_MODULE_10__["default"] : _assets_images_2x_png__WEBPACK_IMPORTED_MODULE_6__["default"],
        onSelected: this.onFontLayoutChange('right')
      }));
    }
  }]);

  return FontLayoutButtonGroup;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.defaultProps = {
  textAlign: 'start',
  'className': ''
};
prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.propTypes = {
  textAlign: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  onFontLayoutChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FontLayoutButtonGroup);

/***/ }),

/***/ "./src/components/font-style-button-group/font-style-button-group.less":
/*!*****************************************************************************!*\
  !*** ./src/components/font-style-button-group/font-style-button-group.less ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./font-style-button-group.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/font-style-button-group/font-style-button-group.less");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var id = "!!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./font-style-button-group.less";
var update = api(id, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/font-style-button-group/index.jsx":
/*!**********************************************************!*\
  !*** ./src/components/font-style-button-group/index.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _font_style_button_group_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./font-style-button-group.less */ "./src/components/font-style-button-group/font-style-button-group.less");
/* harmony import */ var _font_style_button_group_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_font_style_button_group_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _select_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../select-button */ "./src/components/select-button/index.jsx");
/* harmony import */ var _assets_images_2x_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @assets/images/粗体@2x.png */ "./assets/images/粗体@2x.png");
/* harmony import */ var _assets_images_2x_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @assets/images/斜体@2x.png */ "./assets/images/斜体@2x.png");
/* harmony import */ var _assets_images_2x_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @assets/images/下划线@2x.png */ "./assets/images/下划线@2x.png");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var debug = __webpack_require__(/*! @commons/debug */ "./src/commons/debug.js")('textbox:font-style-button-group');

var FontStyleButtonGroup =
/*#__PURE__*/
function (_Component) {
  _inherits(FontStyleButtonGroup, _Component);

  function FontStyleButtonGroup(props) {
    var _this;

    _classCallCheck(this, FontStyleButtonGroup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FontStyleButtonGroup).call(this, props));
    _this.onFontStyleChange = _this.onFontStyleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FontStyleButtonGroup, [{
    key: "onFontStyleChange",
    value: function onFontStyleChange(filed) {
      var _this2 = this;

      return function (val) {
        debug('onFontStyleChange', filed, val);

        switch (filed) {
          case 'fontWeight':
            _this2.props.onFontStyleChange(filed, val ? 'bold' : 'normal');

            break;

          case 'fontStyle':
            _this2.props.onFontStyleChange(filed, val ? 'italic' : 'normal');

            break;

          case 'textDecoration':
            _this2.props.onFontStyleChange(filed, val ? 'underline' : 'none');

            break;
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      return React.createElement("div", {
        className: "coursebox-font-style-button-group ".concat(className)
      }, React.createElement(_select_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        selected: this.props.fontWeight === 'bold',
        icon: _assets_images_2x_png__WEBPACK_IMPORTED_MODULE_4__["default"],
        onSelected: this.onFontStyleChange('fontWeight')
      }), React.createElement(_select_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        selected: this.props.fontStyle === 'italic',
        icon: _assets_images_2x_png__WEBPACK_IMPORTED_MODULE_5__["default"],
        onSelected: this.onFontStyleChange('fontStyle')
      }), React.createElement(_select_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        selected: this.props.textDecoration === 'underline',
        icon: _assets_images_2x_png__WEBPACK_IMPORTED_MODULE_6__["default"],
        onSelected: this.onFontStyleChange('textDecoration')
      }));
    }
  }]);

  return FontStyleButtonGroup;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

FontStyleButtonGroup.defaultProps = {
  fontWeight: 'normal',
  fontStyle: 'normal',
  textDecoration: 'none',
  className: ''
};
FontStyleButtonGroup.propTypes = {
  fontWeight: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  fontStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  textDecoration: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  onFontStyleChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FontStyleButtonGroup);

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: Textbox, Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _textbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textbox */ "./src/components/textbox/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textbox", function() { return _textbox__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor */ "./src/components/editor/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return _editor__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/components/input-color/index.jsx":
/*!**********************************************!*\
  !*** ./src/components/input-color/index.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input_color_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-color.less */ "./src/components/input-color/input-color.less");
/* harmony import */ var _input_color_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_input_color_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _simonwep_pickr_dist_themes_nano_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @simonwep/pickr/dist/themes/nano.min.css */ "./node_modules/@simonwep/pickr/dist/themes/nano.min.css");
/* harmony import */ var _simonwep_pickr_dist_themes_nano_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_simonwep_pickr_dist_themes_nano_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _simonwep_pickr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @simonwep/pickr */ "./node_modules/@simonwep/pickr/dist/pickr.min.js");
/* harmony import */ var _simonwep_pickr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_simonwep_pickr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _commons_throttle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commons/throttle */ "./src/commons/throttle.js");
/* harmony import */ var _assets_images_2x_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @assets/images/文字颜色@2x.png */ "./assets/images/文字颜色@2x.png");
/* harmony import */ var _assets_images_2x_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @assets/images/三角形_收起@2x.png */ "./assets/images/三角形_收起@2x.png");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var InputColor =
/*#__PURE__*/
function (_Component) {
  _inherits(InputColor, _Component);

  function InputColor(props) {
    var _this;

    _classCallCheck(this, InputColor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputColor).call(this, props));
    _this.pickColor = _this.pickColor.bind(_assertThisInitialized(_this));
    _this.throttleOnChange = Object(_commons_throttle__WEBPACK_IMPORTED_MODULE_4__["default"])(_this.onChange, 100).bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(InputColor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props,
          _this$props2,
          _this2 = this;

      var pickr = this.pickr = _simonwep_pickr__WEBPACK_IMPORTED_MODULE_3___default.a.create({
        el: '.coursebox-input-color .color-picker',
        useAsButton: true,
        // 初始默认值
        "default": ((_this$props = this.props) === null || _this$props === void 0 ? void 0 : _this$props.value) || '#333',
        theme: 'nano',
        // 位置 下-居中
        position: 'bottom-middle',
        // 是否一直显示 默认fasle，点击别的区域后会隐藏。初始就显示
        showAlways: true,
        // 重新定位
        autoReposition: true,
        appClass: 'pickr-fix-position',
        swatches: [((_this$props2 = this.props) === null || _this$props2 === void 0 ? void 0 : _this$props2.value) || '#333', 'rgba(244, 67, 54, 1)', 'rgba(233, 30, 99, 0.95)', 'rgba(156, 39, 176, 0.9)', 'rgba(103, 58, 183, 0.85)', 'rgba(63, 81, 181, 0.8)', 'rgba(33, 150, 243, 0.75)', 'rgba(3, 169, 244, 0.7)', 'rgba(0, 188, 212, 0.7)', 'rgba(0, 150, 136, 0.75)', 'rgba(76, 175, 80, 0.8)', 'rgba(139, 195, 74, 0.85)', 'rgba(205, 220, 57, 0.9)', 'rgba(255, 235, 59, 0.95)'],
        components: {
          // Main components
          preview: true,
          opacity: true,
          hue: true,
          // Input / output Options
          interaction: {
            hex: false,
            rgba: false,
            hsla: false,
            hsva: false,
            cmyk: false,
            input: true,
            clear: false,
            save: true
          }
        },
        strings: {
          save: 'Close' // 实时变化，保存即关闭

        }
      });
      pickr.on('init', function () {
        // 由于 showAlways 为 true ，默认显示。初始化完成先将其隐藏
        pickr.hide();
        pickr.__isShow = false;
      }).on('show', function () {
        console.log('[show]');
        pickr.__isShow = true;
      }).on('hide', function () {
        console.log('[hide]');
        pickr.__isShow = false;
      }).on('save', function (color) {
        pickr.hide();

        _this2.throttleOnChange(color.toHEXA().toString(0));
      }).on('change', function (color) {
        _this2.throttleOnChange(color.toHEXA().toString(0));
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.pickr && this.pickr.destroyAndRemove();
    } // 隐藏显示选色卡

  }, {
    key: "pickColor",
    value: function pickColor() {
      if (this.pickr.__isShow) {
        this.pickr.hide();
      } else {
        this.pickr.show();
      }
    }
  }, {
    key: "onChange",
    value: function onChange(val) {
      var _this$props3;

      (_this$props3 = this.props) === null || _this$props3 === void 0 ? void 0 : _this$props3.onChange(val);
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className || '';
      return React.createElement("button", {
        className: "coursebox-input-color ".concat(className),
        onClick: this.pickColor
      }, React.createElement("div", {
        className: "font-color-icon"
      }, React.createElement("img", {
        src: _assets_images_2x_png__WEBPACK_IMPORTED_MODULE_5__["default"]
      }), React.createElement("div", {
        className: "font-color-bar",
        style: {
          backgroundColor: this.props.value
        }
      })), React.createElement("div", {
        className: "font-color-collapse"
      }, React.createElement("img", {
        src: _assets_images_2x_png__WEBPACK_IMPORTED_MODULE_6__["default"]
      })), React.createElement("div", {
        className: "color-picker"
      }));
    }
  }]);

  return InputColor;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (InputColor);

/***/ }),

/***/ "./src/components/input-color/input-color.less":
/*!*****************************************************!*\
  !*** ./src/components/input-color/input-color.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./input-color.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/input-color/input-color.less");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var id = "!!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./input-color.less";
var update = api(id, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/input-select/index.jsx":
/*!***********************************************!*\
  !*** ./src/components/input-select/index.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input_select_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-select.less */ "./src/components/input-select/input-select.less");
/* harmony import */ var _input_select_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_input_select_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_2x_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @assets/images/三角形_收起@2x.png */ "./assets/images/三角形_收起@2x.png");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var debug = __webpack_require__(/*! ../../commons/debug */ "./src/commons/debug.js")('textbox:input-select');

var InputSelect =
/*#__PURE__*/
function (_Component) {
  _inherits(InputSelect, _Component);

  function InputSelect(props) {
    var _this;

    _classCallCheck(this, InputSelect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputSelect).call(this, props));
    debug('props: %j', props);
    _this.inputRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.onMouseDown = _this.onMouseDown.bind(_assertThisInitialized(_this));
    _this.showOptions = _this.showOptions.bind(_assertThisInitialized(_this));
    _this.hideOptions = _this.hideOptions.bind(_assertThisInitialized(_this));
    _this.state = {
      showOptions: false
    };
    return _this;
  }

  _createClass(InputSelect, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mouseup', this.hideOptions);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mouseup', this.hideOptions);
    }
  }, {
    key: "hideOptions",
    value: function hideOptions(evt) {
      var dom = react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.findDOMNode(this);
      var target = evt.target;
      if (dom === target) return;
      var parent = target.parentNode;

      while (parent) {
        if (parent === dom) return;
        parent = parent.parentNode;
      }

      this.setState({
        showOptions: false
      });
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(evt) {
      evt.preventDefault();
    }
  }, {
    key: "onChange",
    value: function onChange(evt) {
      var _this$props;

      debug('[onChange]: %o', evt);
      var target = evt.target;
      var key = target.getAttribute('data-key');
      var value = target.getAttribute('data-value');
      (_this$props = this.props) === null || _this$props === void 0 ? void 0 : _this$props.onChange(key, value);
    }
  }, {
    key: "showOptions",
    value: function showOptions() {
      this.setState(function (prevState) {
        return {
          showOptions: !prevState.showOptions
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var className = this.props.className || '';
      var selectValue = this.props.value;
      var options = this.props.options.map(function (option) {
        var selected = false;

        if (option.key && option.value) {
          if (selectValue) selected = selectValue.toString() === option.key.toString();
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
            className: selected ? 'selected' : '',
            "data-key": option.key,
            "data-value": option.value,
            onClick: _this2.onChange
          }, option.value);
        } else {
          option = option.toString();
          if (selectValue) selected = selectValue.toString() === option;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
            className: selected ? 'selected' : '',
            "data-key": option,
            "data-value": option,
            onClick: _this2.onChange
          }, option);
        }
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "coursebox-input-select ".concat(className),
        onClick: this.showOptions,
        onMouseDown: this.onMouseDown
      }, this.props.icon ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "icon",
        src: this.props.icon
      }) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "select-value"
      }, selectValue), this.props.unit ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "unit"
      }, this.props.unit) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "select-collapse"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _assets_images_2x_png__WEBPACK_IMPORTED_MODULE_4__["default"]
      })), this.state.showOptions ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "options"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, options)) : null);
    }
  }]);

  return InputSelect;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

InputSelect.defaultProps = {};
InputSelect.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  // 值
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  // 图标
  icon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  // 单位
  unit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (InputSelect);

/***/ }),

/***/ "./src/components/input-select/input-select.less":
/*!*******************************************************!*\
  !*** ./src/components/input-select/input-select.less ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./input-select.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/input-select/input-select.less");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var id = "!!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./input-select.less";
var update = api(id, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/select-button/index.jsx":
/*!************************************************!*\
  !*** ./src/components/select-button/index.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _select_button_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-button.less */ "./src/components/select-button/select-button.less");
/* harmony import */ var _select_button_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_select_button_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var debug = __webpack_require__(/*! @commons/debug */ "./src/commons/debug.js")('textbox:button-icon');

var ButtonIcon =
/*#__PURE__*/
function (_Component) {
  _inherits(ButtonIcon, _Component);

  function ButtonIcon(props) {
    var _this;

    _classCallCheck(this, ButtonIcon);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ButtonIcon).call(this, props));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onMouseDown = _this.onMouseDown.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ButtonIcon, [{
    key: "onMouseDown",
    value: function onMouseDown(evt) {
      evt.preventDefault();
    }
  }, {
    key: "onClick",
    value: function onClick() {
      var _this$props;

      (_this$props = this.props) === null || _this$props === void 0 ? void 0 : _this$props.onSelected(!this.props.selected);
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      return React.createElement("button", {
        className: "coursebox-button-icon ".concat(className, " ").concat(this.props.selected ? 'selected' : ''),
        onClick: this.onClick,
        onMouseDown: this.onMouseDown
      }, React.createElement("img", {
        className: "icon",
        src: this.props.icon
      }));
    }
  }]);

  return ButtonIcon;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

ButtonIcon.defaultProps = {
  selected: false
};
ButtonIcon.propTypes = {
  selected: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  onSelected: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ButtonIcon);

/***/ }),

/***/ "./src/components/select-button/select-button.less":
/*!*********************************************************!*\
  !*** ./src/components/select-button/select-button.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./select-button.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/select-button/select-button.less");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var id = "!!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./select-button.less";
var update = api(id, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/textbox/index.jsx":
/*!******************************************!*\
  !*** ./src/components/textbox/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _textbox_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textbox.less */ "./src/components/textbox/textbox.less");
/* harmony import */ var _textbox_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_textbox_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var medium_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! medium-editor */ "medium-editor");
/* harmony import */ var medium_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(medium_editor__WEBPACK_IMPORTED_MODULE_4__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var debug = __webpack_require__(/*! ../../commons/debug */ "./src/commons/debug.js")('textbox:textbox');

var DEFAULT_OPTIONS = {
  toolbar: {
    buttons: ['bold', 'italic', 'underline', 'justifyLeft', 'justifyCenter', 'justifyRight']
  }
};

var Textbox =
/*#__PURE__*/
function (_Component) {
  _inherits(Textbox, _Component);

  function Textbox(props) {
    var _this;

    _classCallCheck(this, Textbox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Textbox).call(this, props));
    _this.state = {
      // 隔离循环刷新
      text: props.text,
      contentEditable: true
      /*'plaintext-only'*/

    }; // 输入框的引用

    _this.editorRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    _this.handleComposition = _this.handleComposition.bind(_assertThisInitialized(_this));
    _this.onContentChange = _this.onContentChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Textbox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      debug('componentDidMount');
      var dom = react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.findDOMNode(this);
      this.medium = new medium_editor__WEBPACK_IMPORTED_MODULE_4___default.a(dom, Object.assign(DEFAULT_OPTIONS, this.props.options));
      this.medium.subscribe('editableInput', function () {
        if (!_this2._isComposing) _this2.onContentChange(dom.innerHTML);
      });
      this.medium.on(dom, 'compositionend', this.handleComposition);
      this.medium.on(dom, 'compositionupdate', this.handleComposition);
      this.medium.on(dom, 'compositionend', this.handleComposition);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      debug('componentWillUnmount');
      this.medium.destroy();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      debug('componentDidUpdate'); // if (this.props.text !== this.state.text) {
      // 	this.setState({ text: this.props.text }, () => {
      // 		this.medium.restoreSelection();
      // 	});
      // }

      this.medium.restoreSelection();
    }
  }, {
    key: "handleComposition",
    value: function handleComposition(evt) {
      var dom = react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.findDOMNode(this);

      if (evt.type === 'compositionend') {
        // composition is end
        this._isComposing = false; // fixed for Chrome v53+ and detect all Chrome
        // https://chromium.googlesource.com/chromium/src/
        // +/afce9d93e76f2ff81baaa088a4ea25f67d1a76b3%5E%21/
        // if ((evt.target instanceof HTMLInputElement || evt.target.isContentEditable) && !this._isComposing && isChrome) {
        // 	// fire onChange
        // 	// props.onChange(e)
        // 	this.medium.trigger('editableInput', evt, this.editorRef.current);
        // }
        // chrome safari 渲染 compositionend 在input 事件后触发

        this.medium.trigger('editableInput', evt, dom);
      } else {
        // in composition
        this._isComposing = true;
      }
    }
  }, {
    key: "onContentChange",
    value: function onContentChange(text) {
      this.props.onContentChange && this.props.onContentChange(text);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          options = _this$props.options,
          text = _this$props.text,
          tag = _this$props.tag,
          contentEditable = _this$props.contentEditable,
          dangerouslySetInnerHTML = _this$props.dangerouslySetInnerHTML,
          props = _objectWithoutProperties(_this$props, ["options", "text", "tag", "contentEditable", "dangerouslySetInnerHTML"]);

      props.dangerouslySetInnerHTML = {
        __html: this.state.text
      };

      if (this.medium) {
        this.medium.saveSelection();
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(tag, props);
    }
  }]);

  return Textbox;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

Textbox.defaultProps = {
  tag: 'div',
  options: {}
};
Textbox.propTypes = _defineProperty({
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  onSelection: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.fun,
  options: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  max: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  setp: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
}, "options", prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object);
/* harmony default export */ __webpack_exports__["default"] = (Textbox);

/***/ }),

/***/ "./src/components/textbox/textbox.less":
/*!*********************************************!*\
  !*** ./src/components/textbox/textbox.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./textbox.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/textbox/textbox.less");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var id = "!!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./textbox.less";
var update = api(id, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "medium-editor":
/*!*******************************!*\
  !*** external "MediumEditor" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_medium_editor__;

/***/ }),

/***/ "prop-types":
/*!****************************!*\
  !*** external "PropTypes" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ })

/******/ });
});
//# sourceMappingURL=react-textbox.js.map