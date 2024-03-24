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

/***/ "./src/js/install.js":
/*!***************************!*\
  !*** ./src/js/install.js ***!
  \***************************/
/***/ (() => {

eval("let deferredPrompt; // this variable should be outside the scope of the event\nconst butInstall = document.getElementById('buttonInstall');\n\n// Logic for installing the PWA\n// Add an event handler to the `beforeinstallprompt` event\nwindow.addEventListener('beforeinstallprompt', event => {\n  // Prevent the default behavior of the prompt\n  event.preventDefault();\n\n  // Store the event for later use\n  deferredPrompt = event;\n\n  // Show the installation button\n  butInstall.style.display = 'block';\n});\n\n// Implement a click event handler on the `butInstall` element\nbutInstall.addEventListener('click', async () => {\n  // Check if deferredPrompt is set\n  if (deferredPrompt) {\n    // Show the installation prompt\n    deferredPrompt.prompt();\n\n    // Wait for the user to respond to the prompt\n    const choiceResult = await deferredPrompt.userChoice;\n\n    // Check the user's choice\n    if (choiceResult.outcome === 'accepted') {\n      console.log('PWA installed');\n    } else {\n      console.log('PWA installation rejected');\n    }\n\n    // Clear the deferredPrompt variable\n    deferredPrompt = null;\n\n    // Hide the installation button\n    butInstall.style.display = 'none';\n  }\n});\n\n// Add an event handler for the `appinstalled` event\nwindow.addEventListener('appinstalled', event => {\n  console.log('PWA successfully installed');\n});\n\n//# sourceURL=webpack://JATE/./src/js/install.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/install.js"]();
/******/ 	
/******/ })()
;