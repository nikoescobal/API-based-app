/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const url = 'https://api.artic.edu/api/v1/artworks'\n\nconst getImages = async () => {\n  const response = await fetch(url);\n  const data = await response.json();\n  const images = data.data;\n\n  let imageString = images.map((image) => {\n    return {\n      id: image['id'],\n      image_id: image['image_id'],\n      title: image['title'],\n      date: image['date_start']\n    }\n  })\n  imageString = imageString.filter(image => image.image_id !== null && image.title !== null);\n\n  console.log(imageString);\n}\n\ngetImages();\n\n//# sourceURL=webpack://js-template/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;