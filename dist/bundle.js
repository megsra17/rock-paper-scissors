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

/***/ "./src/js/element.js":
/*!***************************!*\
  !*** ./src/js/element.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"choicesElements\": () => (/* binding */ choicesElements),\n/* harmony export */   \"computerScoreEl\": () => (/* binding */ computerScoreEl),\n/* harmony export */   \"humanScoreEl\": () => (/* binding */ humanScoreEl),\n/* harmony export */   \"paperEl\": () => (/* binding */ paperEl),\n/* harmony export */   \"resultEl\": () => (/* binding */ resultEl),\n/* harmony export */   \"rockEl\": () => (/* binding */ rockEl),\n/* harmony export */   \"scissorsEl\": () => (/* binding */ scissorsEl)\n/* harmony export */ });\nconst rockEl = document.querySelector(\"#rock\");\nconst paperEl = document.querySelector(\"#paper\");\nconst scissorsEl = document.querySelector(\"#scissors\");\nconst humanScoreEl = document.querySelector(\"#human-score\");\nconst computerScoreEl = document.querySelector(\"#computer-score\");\nconst resultEl = document.querySelector(\"#result\");\nconst choicesElements = [rockEl, paperEl, scissorsEl];\n\n\n//# sourceURL=webpack://rock-paper-scissors/./src/js/element.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ \"./src/js/element.js\");\n\n\n//define Rock / Paper / Scissors\nvar choice = [\"r\", \"p\", \"s\"];\nvar humanScore = 0;\nvar computerScore = 0;\nvar clickable = true;\n\nfunction resetUI() {\n  clickable = true;\n  _element__WEBPACK_IMPORTED_MODULE_0__.resultEl.innerText = \"Rock Paper Scissors\";\n  choicesElements.forEach(function (el) {\n    el.style.display = \"block\";\n    el.classList.remove(\"loser\");\n    var spans = el.querySelectorAll(\"span\");\n    for (var i = 0; i < spans.length; i++) {\n      spans[i].remove();\n    }\n  });\n}\n\nfunction updateScores() {\n  _element__WEBPACK_IMPORTED_MODULE_0__.humanScoreEl.innerText = humanScore;\n  _element__WEBPACK_IMPORTED_MODULE_0__.computerScoreEl.innerText = computerScore;\n}\n\nfunction showResults(personChoiceEl, robotChoiceEl, result) {\n  clickable = false;\n  _element__WEBPACK_IMPORTED_MODULE_0__.resultEl.innerText = result;\n  updateScores();\n  //hide all 3\n  choicesElements.forEach(function (el) {\n    el.style.display = \"none\";\n  });\n  personChoiceEl.style.display = \"block\";\n  robotChoiceEl.style.display = \"block\";\n\n  var personSpan = document.createElement(\"span\");\n  personSpan.innerText = \"You\";\n  personChoiceEl.appendChild(personSpan);\n  var robotSpan = document.createElement(\"span\");\n  robotSpan.innerText = \"Computer\";\n  robotChoiceEl.appendChild(robotSpan);\n\n  if (result === \"YOU WON\") {\n    robotChoiceEl.classList.add(\"loser\");\n  } else if (result === \"YOU LOST\") {\n    personChoiceEl.classList.add(\"loser\");\n  }\n\n  setTimeout(function () {\n    resetUI();\n  }, 3000);\n}\n\nfunction startRound(event) {\n  if (!clickable) return;\n  var personChoiceEl = event.target;\n  if (event.target.matches(\"img\")) {\n    personChoiceEl = event.target.parentElement;\n  } else {\n    personChoiceEl = event.target;\n  }\n  var personChoice = personChoiceEl.dataset.letter;\n\n  var robot = Math.floor(Math.random() * choice.length);\n  var robotChoice = choice[robot];\n  var robotChoiceEl = document.querySelector(\n    '[data-letter=\"' + robotChoice + '\"]'\n  );\n\n  var result;\n  if (personChoice === robotChoice) {\n    result = \"TIED\";\n  } else if (\n    (personChoice === \"r\" && robotChoice === \"s\") ||\n    (personChoice === \"p\" && robotChoice === \"r\") ||\n    (personChoice === \"s\" && robotChoice === \"p\")\n  ) {\n    humanScore++;\n    result = \"YOU WON\";\n  } else {\n    result = \"YOU LOST\";\n    computerScore++;\n  }\n\n  showResults(personChoiceEl, robotChoiceEl, result);\n}\n\n_element__WEBPACK_IMPORTED_MODULE_0__.rockEl.addEventListener(\"click\", startRound);\n_element__WEBPACK_IMPORTED_MODULE_0__.scissorsEl.addEventListener(\"click\", startRound);\n_element__WEBPACK_IMPORTED_MODULE_0__.paperEl.addEventListener(\"click\", startRound);\n\n//  var game = function () {\n\n// //display total stats (wins, Losses, Ties)\n// alert('Stats: \\n  Wins: ' + w + '\\n Losses: ' + l + '\\n Ties: ' + t );\n// //ask to play again\n\n// var playAgain = confirm('Play Again')\n//     if (playAgain){\n//         game();\n//     }\n//     //if play agin (restart)\n//     //else stop game\n// };\n// game();\n\n// /*function greaterThan(x,y){\n// if(x>y){\n// return x;\n// }else {\n//     return y;\n// }\n// }*/\n\n// function sumNumber(x){\n//     var sum = 0;\n//     for(var i=1; i <= x; i++){\n//         sum += i;\n//     }\n//     return sum\n// }\n\n\n//# sourceURL=webpack://rock-paper-scissors/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;