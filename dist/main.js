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

eval("const url = 'https://api.artic.edu/api/v1/artworks?limit=20';\nconst artContent = document.createElement('div');\nconst artContainer = document.getElementById('art-container');\nartContent.classList.add('art-style');\n\nasync function like(id) {\n  const appID = 'Y5ExZ6TMJ2KXP15dXk0s';\n  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/likes/`, {\n    method: 'Post',\n    headers: {\n      'content-type': 'application/json; charset=UTF-8'\n    },\n    body: JSON.stringify({\n      item_id: id\n    })\n  }).then(() => {\n    updateLikes\n    console.log(id);\n  })\n}\n\nconst likes = [];\n\nconst updateLikes = async () => {\n  const appID = 'Y5ExZ6TMJ2KXP15dXk0s';\n  const likeCount = document.querySelectorAll('.like-count')\n  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/likes`)\n    .then(response => response.json())\n    .then((data) => {\n      data.forEach((article, index) => {\n        likes.push(article.likes)\n      })\n      getImages();\n    })\n}\n\nwindow.onload = updateLikes;\n\nlet images = []\n/* eslint-disable */\n/* stylelint-disable */\nconst getLikeElements = () => {\n  const hearts = document.querySelectorAll('.like');\n  const likeCounter = document.querySelectorAll('.like-count');\n  hearts.forEach((heart, index) => {\n    let counter = 0;\n    heart.addEventListener('click', (e) => {\n      like(images[index].id)\n      counter += 1;\n      likeCounter[index].innerHTML = `${likes[index]+counter} Likes`\n    });\n  });\n};\n/* eslint-enable */\n/* stylelint-enable */\n\nconst getImages = async () => {\n  const response = await fetch(url);\n  const data = await response.json();\n  images = data.data;\n\n  images = images.map((image) => ({\n    id: image.id,\n    image_id: image.image_id,\n    title: image.title,\n    date: image.date_start,\n    artist: image.artist_title,\n  })).filter((image) => image.image_id !== null && image.artist !== null)\n  const imageString = images.map((img, index) => `<article\n      class=\"article-style\">\n      <h2 class=\"title\">${img.title},\n        ${img.date}</h2>\n      <h3 class=\"artist\">${img.artist}</h3>\n      <img class=\"image-style\" src=\"https://www.artic.edu/iiif/2/${img.image_id}/full/843,/0/default.jpg\"\n        alt=\"image of artwork\">\n      <figure class=\"caption-container\">\n        <figcaption class=\"caption-content\">\n          <img class=\"like\" id=\"${img.id}\" src=\"/src/heart-empty.png\" alt=\"like icon\">&nbsp;<span class=\"like-count\">${likes[index]} Likes</span>\n          <img class=\"comment\" id=\"${img.id}\" src=\"/src/comment.png\" alt=\"comment icon\">&nbsp; Comment\n        </figcaption>\n      </figure>\n    </article>`).join('');\n  artContent.innerHTML = imageString;\n  artContainer.appendChild(artContent);\n  getLikeElements();\n};\n\n//# sourceURL=webpack://js-template/./src/index.js?");

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