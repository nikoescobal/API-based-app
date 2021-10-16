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

eval("const url = 'https://api.artic.edu/api/v1/artworks?limit=20';\nconst artContent = document.createElement('div');\nconst artContainer = document.getElementById('art-container');\nartContent.classList.add('art-style');\n\nfunction postlike() {\n  console.log('hello');\n}\n\nconst getImages = async () => {\n  const response = await fetch(url);\n  const data = await response.json();\n  const images = data.data;\n\n\n  const imageString = images.map((image) => ({\n      id: image.id,\n      image_id: image.image_id,\n      title: image.title,\n      date: image.date_start,\n      artist: image.artist_title,\n    }))\n    .filter((image) => image.image_id !== null && image.artist !== null)\n\n    .map((img) => `<article\n      class=\"article-style\">\n      <h2 class=\"font-bold font-raleway text-lg\">${img.title},\n        ${img.date}</h2>\n      <h3 class=\"px-3 font-extralight font-raleway\">${img.artist}</h3>\n      <img class=\"image-style\" src=\"https://www.artic.edu/iiif/2/${img.image_id}/full/843,/0/default.jpg\"\n        alt=\"image of artwork\">\n      <figure class=\"flex justify-between px-3 space-x-4\">\n        <figcaption class=\"caption-container flex py-3 space-x-6 text-base w-full font-nunito\">\n          <img class=\"like\" id=\"${img.id}\" src=\"/src/heart-empty.png\" alt=\"heart icon\">&nbsp; Like\n          <img id=\"${img.id}\" src=\"/src/comment.png\" alt=\"comment icon\">&nbsp; Comment\n        </figcaption>\n      </figure>\n    </article>`).join('');\n  artContent.innerHTML = imageString;\n  artContainer.appendChild(artContent);\n  console.log(imageString);\n};\ngetImages();\n\n// const like = document.getElementsByClassName('like');\n\n// function addLikes() {\n//   console.log('poop');\n// }\n\n// like.addEventListener('click', addLikes);\n\n// document.getElementsByClass('caption-container').addEventListener(\"click\", () => {\n//   console.log('hello');\n// });\n\n// document.querySelector('#logo').addEventListener(\"click\", () => {\n//   console.log('hello');\n// });\n\n//# sourceURL=webpack://js-template/./src/index.js?");

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