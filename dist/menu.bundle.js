/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DSC00941.jpg":
/*!**************************!*\
  !*** ./src/DSC00941.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2dd71c6447bbee83d3fb.jpg";

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DSC00941_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DSC00941.jpg */ "./src/DSC00941.jpg");


function displayMenu() {
    const main = document.querySelector('main');
    const appetizers = [{
            name: "Crevettes Bordelaise",
            price: 24
        },
        {
            name: "Coquilles St. Jacques",
            price: 22
        },
        {
            name: "Escargot Bourguignon",
            price: 22
        }
    ];
    const entrees = [{
            name: "Duck Confit",
            price: 28
        },
        {
            name: "Poulet a la Marsala",
            price: 28
        },
        {
            name: "Filet Mignon",
            price: 32
        }
    ]
    const desserts = [{
            name: "Crème Brûlée",
            price: 12
        },
        {
            name: "Cheesecake",
            price: 9
        },
        {
            name: "Mousse Torte",
            price: 10
        }
    ]

    function convertMenuArr(arr) {
        let newArr = []
        newArr = arr.map((item) => {
            return `<li>${item.name}<span>${item.price}</span></li>`
        })
        return newArr.join('');
    }

    main.innerHTML = `<div class="list">
        <h2>appetizers</h2>
        <ul>
        ${convertMenuArr(appetizers)}
        </ul>
        <h2>entrées</h2>
        <ul>
        ${convertMenuArr(entrees)}
        </ul>
        <h2>dessert</h2>
        <ul>
        ${convertMenuArr(desserts)}
        </ul>
        </div>`;

    const menuPicture = new Image();
    menuPicture.src = _DSC00941_jpg__WEBPACK_IMPORTED_MODULE_0__;
    menuPicture.setAttribute('class', 'menupic');
    main.appendChild(menuPicture);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMenu);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQSw0Qjs7Ozs7Ozs7Ozs7Ozs7O0FDQXFDOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixVQUFVLFFBQVEsV0FBVztBQUN2RCxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLDBDQUFPO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEUiLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiOyIsImltcG9ydCBtZW51UGljIGZyb20gJy4vRFNDMDA5NDEuanBnJztcblxuZnVuY3Rpb24gZGlzcGxheU1lbnUoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBjb25zdCBhcHBldGl6ZXJzID0gW3tcbiAgICAgICAgICAgIG5hbWU6IFwiQ3JldmV0dGVzIEJvcmRlbGFpc2VcIixcbiAgICAgICAgICAgIHByaWNlOiAyNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkNvcXVpbGxlcyBTdC4gSmFjcXVlc1wiLFxuICAgICAgICAgICAgcHJpY2U6IDIyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiRXNjYXJnb3QgQm91cmd1aWdub25cIixcbiAgICAgICAgICAgIHByaWNlOiAyMlxuICAgICAgICB9XG4gICAgXTtcbiAgICBjb25zdCBlbnRyZWVzID0gW3tcbiAgICAgICAgICAgIG5hbWU6IFwiRHVjayBDb25maXRcIixcbiAgICAgICAgICAgIHByaWNlOiAyOFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIlBvdWxldCBhIGxhIE1hcnNhbGFcIixcbiAgICAgICAgICAgIHByaWNlOiAyOFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkZpbGV0IE1pZ25vblwiLFxuICAgICAgICAgICAgcHJpY2U6IDMyXG4gICAgICAgIH1cbiAgICBdXG4gICAgY29uc3QgZGVzc2VydHMgPSBbe1xuICAgICAgICAgICAgbmFtZTogXCJDcsOobWUgQnLDu2zDqWVcIixcbiAgICAgICAgICAgIHByaWNlOiAxMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkNoZWVzZWNha2VcIixcbiAgICAgICAgICAgIHByaWNlOiA5XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiTW91c3NlIFRvcnRlXCIsXG4gICAgICAgICAgICBwcmljZTogMTBcbiAgICAgICAgfVxuICAgIF1cblxuICAgIGZ1bmN0aW9uIGNvbnZlcnRNZW51QXJyKGFycikge1xuICAgICAgICBsZXQgbmV3QXJyID0gW11cbiAgICAgICAgbmV3QXJyID0gYXJyLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGA8bGk+JHtpdGVtLm5hbWV9PHNwYW4+JHtpdGVtLnByaWNlfTwvc3Bhbj48L2xpPmBcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIG5ld0Fyci5qb2luKCcnKTtcbiAgICB9XG5cbiAgICBtYWluLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwibGlzdFwiPlxuICAgICAgICA8aDI+YXBwZXRpemVyczwvaDI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgJHtjb252ZXJ0TWVudUFycihhcHBldGl6ZXJzKX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGgyPmVudHLDqWVzPC9oMj5cbiAgICAgICAgPHVsPlxuICAgICAgICAke2NvbnZlcnRNZW51QXJyKGVudHJlZXMpfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8aDI+ZGVzc2VydDwvaDI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgJHtjb252ZXJ0TWVudUFycihkZXNzZXJ0cyl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PmA7XG5cbiAgICBjb25zdCBtZW51UGljdHVyZSA9IG5ldyBJbWFnZSgpO1xuICAgIG1lbnVQaWN0dXJlLnNyYyA9IG1lbnVQaWM7XG4gICAgbWVudVBpY3R1cmUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51cGljJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZW51UGljdHVyZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlNZW51OyJdLCJzb3VyY2VSb290IjoiIn0=