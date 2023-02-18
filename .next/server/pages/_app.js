/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./appStore/store.ts":
/*!***************************!*\
  !*** ./appStore/store.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slices_appSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slices/appSlice */ \"./slices/appSlice.ts\");\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        app: _slices_appSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    },\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({\n            serializableCheck: false\n        })\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHBTdG9yZS9zdG9yZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVFO0FBQzNCO0FBRXJDLE1BQU1FLFFBQVFGLGdFQUFjQSxDQUFDO0lBQ2xDRyxTQUFTO1FBQ1BDLEtBQUtILHdEQUFVQTtJQUNqQjtJQUNBSSxZQUFZLENBQUNDLHVCQUNYQSxxQkFBcUI7WUFDbkJDLG1CQUFtQixLQUFLO1FBQzFCO0FBQ0osR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZsYXNoY2FyZC1hcHAvLi9hcHBTdG9yZS9zdG9yZS50cz83M2ZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlLCBUaHVua0FjdGlvbiwgQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgYXBwUmVkdWNlciBmcm9tIFwiLi4vc2xpY2VzL2FwcFNsaWNlXCI7IFxuXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gIHJlZHVjZXI6IHtcbiAgICBhcHA6IGFwcFJlZHVjZXIsXG4gIH0sXG4gIG1pZGRsZXdhcmU6IChnZXREZWZhdWx0TWlkZGxld2FyZSkgPT5cbiAgICBnZXREZWZhdWx0TWlkZGxld2FyZSh7XG4gICAgICBzZXJpYWxpemFibGVDaGVjazogZmFsc2UsXG4gICAgfSksIC8vLmNvbmNhdChsb2dnZXIpLFxufSk7XG5cbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHN0b3JlLmdldFN0YXRlPjtcbmV4cG9ydCB0eXBlIEFwcFRodW5rPFJldHVyblR5cGUgPSB2b2lkPiA9IFRodW5rQWN0aW9uPFxuICBSZXR1cm5UeXBlLFxuICBSb290U3RhdGUsXG4gIHVua25vd24sXG4gIEFjdGlvbjxzdHJpbmc+XG4+O1xuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwiYXBwUmVkdWNlciIsInN0b3JlIiwicmVkdWNlciIsImFwcCIsIm1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsInNlcmlhbGl6YWJsZUNoZWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./appStore/store.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _appStore_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../appStore/store */ \"./appStore/store.ts\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst MyApp = ({ Component , pageProps: { session , ...pageProps }  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n        session: session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n            store: _appStore_store__WEBPACK_IMPORTED_MODULE_3__.store,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/minspk/FSJ/flashcards-mpark63/pages/_app.tsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/minspk/FSJ/flashcards-mpark63/pages/_app.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/minspk/FSJ/flashcards-mpark63/pages/_app.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUN1QztBQUVXO0FBQ1I7QUFFWDtBQUUvQixNQUFNRyxRQUE4QyxDQUFDLEVBQ25EQyxVQUFTLEVBQ1RDLFdBQVcsRUFBRUMsUUFBTyxFQUFFLEdBQUdELFdBQVcsR0FDckMsR0FBSztJQUNKLHFCQUNFLDhEQUFDSiw0REFBZUE7UUFBQ0ssU0FBU0E7a0JBQ3hCLDRFQUFDTixpREFBUUE7WUFBQ0UsT0FBT0Esa0RBQUtBO3NCQUNwQiw0RUFBQ0U7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQztBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxhc2hjYXJkLWFwcC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHlwZSBBcHBUeXBlIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHR5cGUgU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCB7IFNlc3Npb25Qcm92aWRlciB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL2FwcFN0b3JlL3N0b3JlXCI7XG5cbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuXG5jb25zdCBNeUFwcDogQXBwVHlwZTx7IHNlc3Npb246IFNlc3Npb24gfCBudWxsIH0+ID0gKHtcbiAgQ29tcG9uZW50LFxuICBwYWdlUHJvcHM6IHsgc2Vzc2lvbiwgLi4ucGFnZVByb3BzIH0sXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFNlc3Npb25Qcm92aWRlciBzZXNzaW9uPXtzZXNzaW9ufT5cbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1Byb3ZpZGVyPlxuICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiUHJvdmlkZXIiLCJTZXNzaW9uUHJvdmlkZXIiLCJzdG9yZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./slices/appSlice.ts":
/*!****************************!*\
  !*** ./slices/appSlice.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appSlice\": () => (/* binding */ appSlice),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"selectCurrentDeck\": () => (/* binding */ selectCurrentDeck),\n/* harmony export */   \"selectCurrentUser\": () => (/* binding */ selectCurrentUser),\n/* harmony export */   \"selectDecks\": () => (/* binding */ selectDecks),\n/* harmony export */   \"selectFlashcards\": () => (/* binding */ selectFlashcards),\n/* harmony export */   \"updateCurrentDeck\": () => (/* binding */ updateCurrentDeck),\n/* harmony export */   \"updateCurrentFlashcards\": () => (/* binding */ updateCurrentFlashcards),\n/* harmony export */   \"updateCurrentUser\": () => (/* binding */ updateCurrentUser),\n/* harmony export */   \"updateDecks\": () => (/* binding */ updateDecks)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    currentUser: {\n        _id: \"guest\",\n        deckIds: []\n    },\n    currentDecks: [],\n    currentDeck: null,\n    currentFlashcards: []\n};\n// Not being used as we can update database when user adds course, and call the reusable update user function for any updates to display\n// function addNewCourse(state: any, action: PayloadAction<NewCourse>) {}\nconst appSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"app\",\n    initialState,\n    reducers: {\n        updateCurrentUser: (state, action)=>{\n            state.currentUser = action.payload;\n        },\n        updateDecks: (state, action)=>{\n            state.currentDecks = action.payload;\n        },\n        updateCurrentDeck: (state, action)=>{\n            state.currentDeck = action.payload;\n        },\n        updateCurrentFlashcards: (state, action)=>{\n            state.currentFlashcards = action.payload;\n        }\n    }\n});\nconst { updateCurrentUser , updateDecks , updateCurrentDeck , updateCurrentFlashcards  } = appSlice.actions;\n// The function below is called a selector and allows us to select a value from\n// the state. Please make a selector for each state :)\nconst selectCurrentUser = (state)=>state.app.currentUser;\nconst selectCurrentDeck = (state)=>state.app.currentDeck;\nconst selectDecks = (state)=>state.app.currentDecks;\nconst selectFlashcards = (state)=>state.app.currentFlashcards;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zbGljZXMvYXBwU2xpY2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQzhEO0FBVTlELE1BQU1DLGVBQXlCO0lBQzdCQyxhQUFhO1FBQ1hDLEtBQUs7UUFDTEMsU0FBUyxFQUFFO0lBQ2I7SUFDQUMsY0FBYyxFQUFFO0lBQ2hCQyxhQUFhLElBQUk7SUFDakJDLG1CQUFtQixFQUFFO0FBQ3ZCO0FBRUEsd0lBQXdJO0FBQ3hJLHlFQUF5RTtBQUVsRSxNQUFNQyxXQUFXUiw2REFBV0EsQ0FBQztJQUNsQ1MsTUFBTTtJQUNOUjtJQUNBUyxVQUFVO1FBQ1JDLG1CQUFtQixDQUFDQyxPQUFZQyxTQUFnQztZQUM5REQsTUFBTVYsV0FBVyxHQUFHVyxPQUFPQyxPQUFPO1FBQ3BDO1FBQ0FDLGFBQWEsQ0FBQ0gsT0FBWUMsU0FBa0M7WUFDMURELE1BQU1QLFlBQVksR0FBR1EsT0FBT0MsT0FBTztRQUNyQztRQUNBRSxtQkFBbUIsQ0FBQ0osT0FBWUMsU0FBZ0M7WUFDOURELE1BQU1OLFdBQVcsR0FBR08sT0FBT0MsT0FBTztRQUNwQztRQUNBRyx5QkFBeUIsQ0FBQ0wsT0FBWUMsU0FBdUM7WUFDM0VELE1BQU1MLGlCQUFpQixHQUFHTSxPQUFPQyxPQUFPO1FBQzFDO0lBQ0Y7QUFDRixHQUFHO0FBRUksTUFBTSxFQUNYSCxrQkFBaUIsRUFDakJJLFlBQVcsRUFDWEMsa0JBQWlCLEVBQ2pCQyx3QkFBdUIsRUFDeEIsR0FBR1QsU0FBU1UsT0FBTyxDQUFDO0FBRXJCLCtFQUErRTtBQUMvRSxzREFBc0Q7QUFDL0MsTUFBTUMsb0JBQW9CLENBQUNQLFFBQXFCQSxNQUFNUSxHQUFHLENBQUNsQixXQUFXLENBQUM7QUFDdEUsTUFBTW1CLG9CQUFvQixDQUFDVCxRQUFxQkEsTUFBTVEsR0FBRyxDQUFDZCxXQUFXLENBQUM7QUFDdEUsTUFBTWdCLGNBQWMsQ0FBQ1YsUUFBcUJBLE1BQU1RLEdBQUcsQ0FBQ2YsWUFBWSxDQUFDO0FBQ2pFLE1BQU1rQixtQkFBbUIsQ0FBQ1gsUUFBcUJBLE1BQU1RLEdBQUcsQ0FBQ2IsaUJBQWlCLENBQUM7QUFFbEYsaUVBQWVDLFNBQVNnQixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbGFzaGNhcmQtYXBwLy4vc2xpY2VzL2FwcFNsaWNlLnRzPzQxYTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVjaywgRmxhc2hjYXJkLCBVc2VyIH0gZnJvbSAnLi4vdXRpbHMvY29tbW9uVHlwZXMnO1xuaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJy4uL2FwcFN0b3JlL3N0b3JlJztcblxudHlwZSBBcHBTbGljZSA9IHtcbiAgY3VycmVudFVzZXI6IFVzZXI7XG4gIGN1cnJlbnREZWNrczogRGVja1tdOyBcbiAgY3VycmVudERlY2s6IERlY2s7IFxuICBjdXJyZW50Rmxhc2hjYXJkczogRmxhc2hjYXJkW11cbn07XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogQXBwU2xpY2UgPSB7XG4gIGN1cnJlbnRVc2VyOiB7XG4gICAgX2lkOiBcImd1ZXN0XCIsIFxuICAgIGRlY2tJZHM6IFtdXG4gIH0sXG4gIGN1cnJlbnREZWNrczogW10sIFxuICBjdXJyZW50RGVjazogbnVsbCxcbiAgY3VycmVudEZsYXNoY2FyZHM6IFtdLCBcbn07XG5cbi8vIE5vdCBiZWluZyB1c2VkIGFzIHdlIGNhbiB1cGRhdGUgZGF0YWJhc2Ugd2hlbiB1c2VyIGFkZHMgY291cnNlLCBhbmQgY2FsbCB0aGUgcmV1c2FibGUgdXBkYXRlIHVzZXIgZnVuY3Rpb24gZm9yIGFueSB1cGRhdGVzIHRvIGRpc3BsYXlcbi8vIGZ1bmN0aW9uIGFkZE5ld0NvdXJzZShzdGF0ZTogYW55LCBhY3Rpb246IFBheWxvYWRBY3Rpb248TmV3Q291cnNlPikge31cblxuZXhwb3J0IGNvbnN0IGFwcFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAnYXBwJyxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIHVwZGF0ZUN1cnJlbnRVc2VyOiAoc3RhdGU6IGFueSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFVzZXI+KSA9PiB7XG4gICAgICBzdGF0ZS5jdXJyZW50VXNlciA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIH0sIFxuICAgIHVwZGF0ZURlY2tzOiAoc3RhdGU6IGFueSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPERlY2tbXT4pID0+IHtcbiAgICAgIHN0YXRlLmN1cnJlbnREZWNrcyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIH0sIFxuICAgIHVwZGF0ZUN1cnJlbnREZWNrOiAoc3RhdGU6IGFueSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPERlY2s+KSA9PiB7XG4gICAgICBzdGF0ZS5jdXJyZW50RGVjayA9IGFjdGlvbi5wYXlsb2FkOyBcbiAgICB9LCBcbiAgICB1cGRhdGVDdXJyZW50Rmxhc2hjYXJkczogKHN0YXRlOiBhbnksIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxGbGFzaGNhcmRbXT4pID0+IHtcbiAgICAgIHN0YXRlLmN1cnJlbnRGbGFzaGNhcmRzID0gYWN0aW9uLnBheWxvYWQ7IFxuICAgIH1cbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3Qge1xuICB1cGRhdGVDdXJyZW50VXNlcixcbiAgdXBkYXRlRGVja3MsIFxuICB1cGRhdGVDdXJyZW50RGVjayxcbiAgdXBkYXRlQ3VycmVudEZsYXNoY2FyZHNcbn0gPSBhcHBTbGljZS5hY3Rpb25zO1xuXG4vLyBUaGUgZnVuY3Rpb24gYmVsb3cgaXMgY2FsbGVkIGEgc2VsZWN0b3IgYW5kIGFsbG93cyB1cyB0byBzZWxlY3QgYSB2YWx1ZSBmcm9tXG4vLyB0aGUgc3RhdGUuIFBsZWFzZSBtYWtlIGEgc2VsZWN0b3IgZm9yIGVhY2ggc3RhdGUgOilcbmV4cG9ydCBjb25zdCBzZWxlY3RDdXJyZW50VXNlciA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5hcHAuY3VycmVudFVzZXI7XG5leHBvcnQgY29uc3Qgc2VsZWN0Q3VycmVudERlY2sgPSAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuYXBwLmN1cnJlbnREZWNrO1xuZXhwb3J0IGNvbnN0IHNlbGVjdERlY2tzID0gKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmFwcC5jdXJyZW50RGVja3M7XG5leHBvcnQgY29uc3Qgc2VsZWN0Rmxhc2hjYXJkcyA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5hcHAuY3VycmVudEZsYXNoY2FyZHM7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcFNsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJjdXJyZW50VXNlciIsIl9pZCIsImRlY2tJZHMiLCJjdXJyZW50RGVja3MiLCJjdXJyZW50RGVjayIsImN1cnJlbnRGbGFzaGNhcmRzIiwiYXBwU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJ1cGRhdGVDdXJyZW50VXNlciIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInVwZGF0ZURlY2tzIiwidXBkYXRlQ3VycmVudERlY2siLCJ1cGRhdGVDdXJyZW50Rmxhc2hjYXJkcyIsImFjdGlvbnMiLCJzZWxlY3RDdXJyZW50VXNlciIsImFwcCIsInNlbGVjdEN1cnJlbnREZWNrIiwic2VsZWN0RGVja3MiLCJzZWxlY3RGbGFzaGNhcmRzIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./slices/appSlice.ts\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();