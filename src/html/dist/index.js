/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./html/js/ts/index.ts":
/*!*****************************!*\
  !*** ./html/js/ts/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Recognition = window.webkitSpeechRecognition || window.SpeechRecognition;\nvar recognition = new Recognition();\nvar start = document.getElementById(\"start\");\nvar result = document.getElementById(\"result\");\nvar msg = document.createElement(\"p\");\nrecognition.lang = 'ja-JP';\nrecognition.interimResults = true;\nrecognition.continuous = true;\nrecognition.onresult = function (event) {\n    var textInfo = event.results[event.results.length - 1][0];\n    if (textInfo != undefined) {\n        var message = textInfo === null || textInfo === void 0 ? void 0 : textInfo.transcript;\n        msg.textContent = message;\n        result === null || result === void 0 ? void 0 : result.appendChild(msg);\n    }\n};\nstart === null || start === void 0 ? void 0 : start.addEventListener('click', function () {\n    recognition.start();\n});\n\n\n//# sourceURL=webpack://voice_app/./html/js/ts/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./html/js/ts/index.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;