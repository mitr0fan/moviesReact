module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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

/***/ "./src/actions/movies-actions.ts":
/*!***************************************!*\
  !*** ./src/actions/movies-actions.ts ***!
  \***************************************/
/*! exports provided: getMovies, changeSearchType, getUnsortedMovies, changeSortType, selectMovieId, selectedMovie, changeLoadingStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovies", function() { return getMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeSearchType", function() { return changeSearchType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnsortedMovies", function() { return getUnsortedMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeSortType", function() { return changeSortType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMovieId", function() { return selectMovieId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedMovie", function() { return selectedMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeLoadingStatus", function() { return changeLoadingStatus; });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/actionTypes */ "./src/constants/actionTypes.ts");

function getMovies(movies) {
  return {
    type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_MOVIES"],
    payload: movies
  };
}
function changeSearchType(type) {
  return {
    type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_SEARCH_TYPE"],
    payload: type
  };
}
function getUnsortedMovies(movies) {
  return {
    type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_UNSORTED_MOVIES"],
    payload: movies
  };
}
function changeSortType(type) {
  return {
    type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_SORT_TYPE"],
    payload: type
  };
}
function selectMovieId(id) {
  return {
    type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["SELECT_MOVIE_ID"],
    payload: id
  };
}
function selectedMovie(movie) {
  return {
    type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["SELECTED_MOVIE"],
    payload: movie
  };
}
function changeLoadingStatus(status) {
  return {
    type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_LOADING_STATUS"],
    payload: status
  };
}

/***/ }),

/***/ "./src/components/amount-and-sort-panel/amount-and-sort-panel.scss":
/*!*************************************************************************!*\
  !*** ./src/components/amount-and-sort-panel/amount-and-sort-panel.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/amount-and-sort-panel/amount-and-sort-panel.tsx":
/*!************************************************************************!*\
  !*** ./src/components/amount-and-sort-panel/amount-and-sort-panel.tsx ***!
  \************************************************************************/
/*! exports provided: AmountAndSortPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmountAndSortPanel", function() { return AmountAndSortPanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _amount_and_sort_panel_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./amount-and-sort-panel.scss */ "./src/components/amount-and-sort-panel/amount-and-sort-panel.scss");
/* harmony import */ var _amount_and_sort_panel_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_amount_and_sort_panel_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.ts");
var _jsxFileName = "C:\\Users\\Anton\\Desktop\\React\\movies-react\\movies-react\\src\\components\\amount-and-sort-panel\\amount-and-sort-panel.tsx";



class AmountAndSortPanel extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "amount-panel",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "panel-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "amount-panel__count",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, this.props.count, " movies found"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "Sort by"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: this.props.sortType === 'date' ? 'amount-panel__sort-date amount-panel__sort-date_active' : 'amount-panel__sort-date',
      onClick: () => this.props.sortBy(_constants_constants__WEBPACK_IMPORTED_MODULE_2__["CONSTANTS"].SORT_BY_DATE),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "release date"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: this.props.sortType === 'rating' ? 'amount-panel__sort-rating amount-panel__sort-rating_active' : 'amount-panel__sort-rating',
      onClick: () => this.props.sortBy(_constants_constants__WEBPACK_IMPORTED_MODULE_2__["CONSTANTS"].SORT_BY_RATING),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "rating")));
  }

}

/***/ }),

/***/ "./src/components/footer/footer.scss":
/*!*******************************************!*\
  !*** ./src/components/footer/footer.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/footer/footer.tsx":
/*!******************************************!*\
  !*** ./src/components/footer/footer.tsx ***!
  \******************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.scss */ "./src/components/footer/footer.scss");
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Anton\\Desktop\\React\\movies-react\\movies-react\\src\\components\\footer\\footer.tsx";


class Footer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const date = new Date().getFullYear();
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container-footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
      className: "footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "Movies, ", date));
  }

}

/***/ }),

/***/ "./src/constants/actionTypes.ts":
/*!**************************************!*\
  !*** ./src/constants/actionTypes.ts ***!
  \**************************************/
/*! exports provided: GET_MOVIES, SELECT_MOVIE_ID, SELECTED_MOVIE, SEARCH_MOVIES, CHANGE_SEARCH_TYPE, GET_UNSORTED_MOVIES, CHANGE_SORT_TYPE, CHANGE_LOADING_STATUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIES", function() { return GET_MOVIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_MOVIE_ID", function() { return SELECT_MOVIE_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_MOVIE", function() { return SELECTED_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_MOVIES", function() { return SEARCH_MOVIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_SEARCH_TYPE", function() { return CHANGE_SEARCH_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_UNSORTED_MOVIES", function() { return GET_UNSORTED_MOVIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_SORT_TYPE", function() { return CHANGE_SORT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_LOADING_STATUS", function() { return CHANGE_LOADING_STATUS; });
const GET_MOVIES = 'GET_MOVIES';
const SELECT_MOVIE_ID = 'SELECT_MOVIE_ID';
const SELECTED_MOVIE = 'SELECT_MOVIE';
const SEARCH_MOVIES = 'SEARCH_MOVIES';
const CHANGE_SEARCH_TYPE = 'CHANGE_SEARCH_TYPE';
const GET_UNSORTED_MOVIES = 'GET_UNSORTED_MOVIES';
const CHANGE_SORT_TYPE = 'CHANGE_SORT_TYPE';
const CHANGE_LOADING_STATUS = 'CHANGE_LOADING_STATUS';

/***/ }),

/***/ "./src/constants/constants.ts":
/*!************************************!*\
  !*** ./src/constants/constants.ts ***!
  \************************************/
/*! exports provided: CONSTANTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSTANTS", function() { return CONSTANTS; });
const CONSTANTS = {
  URL_FILMS: 'https://reactjs-cdp.herokuapp.com/movies',
  SEARCH_BY_TITLE_STATE: 'title',
  SEARCH_BY_GENRE_STATE: 'genres',
  SORT_BY_RATING: 'rating',
  SORT_BY_DATE: 'date'
};

/***/ }),

/***/ "./src/containers/header/header.scss":
/*!*******************************************!*\
  !*** ./src/containers/header/header.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/containers/header/header.tsx":
/*!******************************************!*\
  !*** ./src/containers/header/header.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.scss */ "./src/containers/header/header.scss");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_movies_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/movies-actions */ "./src/actions/movies-actions.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var _services_httpRequest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/httpRequest */ "./src/services/httpRequest.ts");
/* harmony import */ var _components_amount_and_sort_panel_amount_and_sort_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/amount-and-sort-panel/amount-and-sort-panel */ "./src/components/amount-and-sort-panel/amount-and-sort-panel.tsx");
var _jsxFileName = "C:\\Users\\Anton\\Desktop\\React\\movies-react\\movies-react\\src\\containers\\header\\header.tsx";








class Header extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  static getInitialProps({
    store
  }) {}

  constructor(props) {
    super(props);
    this.inputValue = '';
    this.handlerInput = this.handlerInput.bind(this);
    this.sortBy = this.sortBy.bind(this);
  }

  handlerInput(event) {
    const element = event.target;
    this.inputValue = element.value;
  }

  handlerSearchButton() {
    const url = `?search=${this.inputValue}&searchBy=${this.props.searchType}`;
    Object(_services_httpRequest__WEBPACK_IMPORTED_MODULE_5__["http"])(_constants_constants__WEBPACK_IMPORTED_MODULE_4__["CONSTANTS"].URL_FILMS + url).then(res => {
      this.props.dispatch(Object(_actions_movies_actions__WEBPACK_IMPORTED_MODULE_3__["getMovies"])([...res.data]));
      this.props.dispatch(Object(_actions_movies_actions__WEBPACK_IMPORTED_MODULE_3__["getUnsortedMovies"])([...res.data]));

      if (this.props.sortType !== '') {
        this.props.dispatch(Object(_actions_movies_actions__WEBPACK_IMPORTED_MODULE_3__["changeSortType"])(''));
      }
    }).finally(() => this.props.dispatch(Object(_actions_movies_actions__WEBPACK_IMPORTED_MODULE_3__["changeLoadingStatus"])(false)));
  }

  searchByTitle() {
    this.props.dispatch(Object(_actions_movies_actions__WEBPACK_IMPORTED_MODULE_3__["changeSearchType"])(_constants_constants__WEBPACK_IMPORTED_MODULE_4__["CONSTANTS"].SEARCH_BY_TITLE_STATE));
  }

  searchByGenre() {
    this.props.dispatch(Object(_actions_movies_actions__WEBPACK_IMPORTED_MODULE_3__["changeSearchType"])(_constants_constants__WEBPACK_IMPORTED_MODULE_4__["CONSTANTS"].SEARCH_BY_GENRE_STATE));
  }

  sortFunction(sortType) {
    if (sortType === _constants_constants__WEBPACK_IMPORTED_MODULE_4__["CONSTANTS"].SORT_BY_DATE) {
      return this.props.movies.sort((a, b) => {
        return new Date(b.release_date).getTime() - new Date(a.release_date).getTime();
      });
    }

    if (sortType === _constants_constants__WEBPACK_IMPORTED_MODULE_4__["CONSTANTS"].SORT_BY_RATING) {
      return this.props.movies.sort((a, b) => {
        return b.vote_average - a.vote_average;
      });
    }
  }

  sortBy(sortType) {
    if (this.props.sortType !== sortType) {
      this.props.dispatch(Object(_actions_movies_actions__WEBPACK_IMPORTED_MODULE_3__["changeSortType"])(sortType));
      const movies = this.sortFunction(sortType);
      this.props.dispatch(Object(_actions_movies_actions__WEBPACK_IMPORTED_MODULE_3__["getMovies"])([...movies]));
    } else {
      this.props.dispatch(Object(_actions_movies_actions__WEBPACK_IMPORTED_MODULE_3__["changeSortType"])(''));
      this.props.dispatch(Object(_actions_movies_actions__WEBPACK_IMPORTED_MODULE_3__["getMovies"])([...this.props.unsortedMovies]));
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
      className: "header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "header__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "header__app-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, "Movies"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "header__input-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, "Find your movie"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "header__input-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "header__input",
      type: "text",
      onChange: this.handlerInput,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "header__buttons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, "SEARCH BY"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: this.props.searchType === 'title' ? 'button button_active' : 'button',
      onClick: () => this.searchByTitle(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, "TITLE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: this.props.searchType === 'genres' ? 'button button_active' : 'button',
      onClick: () => this.searchByGenre(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, "GENRE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "empty",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "button button_search",
      onClick: () => this.handlerSearchButton(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, "SEARCH")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_amount_and_sort_panel_amount_and_sort_panel__WEBPACK_IMPORTED_MODULE_6__["AmountAndSortPanel"], {
      count: this.props.movies.length,
      sortBy: this.sortBy,
      sortType: this.props.sortType,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }));
  }

}

function mapStateToProps(state) {
  return {
    searchType: state.searchType,
    movies: state.movies,
    unsortedMovies: state.unsortedMovies,
    sortType: state.sortType
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Header));

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/footer/footer */ "./src/components/footer/footer.tsx");
/* harmony import */ var _containers_header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/header/header */ "./src/containers/header/header.tsx");
var _jsxFileName = "C:\\Users\\Anton\\Desktop\\React\\movies-react\\movies-react\\src\\pages\\index.tsx";



class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_header_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_footer_footer__WEBPACK_IMPORTED_MODULE_1__["Footer"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, `
                        body {
                            margin: 0;
                            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
                                'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
                                'Helvetica Neue', sans-serif;
                            -webkit-font-smoothing: antialiased;
                            -moz-osx-font-smoothing: grayscale;
                        }
                    `));
  }

}

/***/ }),

/***/ "./src/reducers/movies-reducer.ts":
/*!****************************************!*\
  !*** ./src/reducers/movies-reducer.ts ***!
  \****************************************/
/*! exports provided: changeMoviesState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeMoviesState", function() { return changeMoviesState; });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/actionTypes */ "./src/constants/actionTypes.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constants */ "./src/constants/constants.ts");


const initiaiState = {
  movies: [],
  searchType: _constants_constants__WEBPACK_IMPORTED_MODULE_1__["CONSTANTS"].SEARCH_BY_TITLE_STATE,
  unsortedMovies: [],
  sortType: '',
  movieId: null,
  selectedMovie: null,
  loadingStatus: false
};
function changeMoviesState(state = initiaiState, action) {
  switch (action.type) {
    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_MOVIES"]:
      return { ...state,
        movies: action.payload
      };

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["SEARCH_MOVIES"]:
      return { ...state,
        movies: action.payload
      };

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_SEARCH_TYPE"]:
      return { ...state,
        searchType: action.payload
      };

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_UNSORTED_MOVIES"]:
      return { ...state,
        unsortedMovies: action.payload
      };

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_SORT_TYPE"]:
      return { ...state,
        sortType: action.payload
      };

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["SELECT_MOVIE_ID"]:
      return { ...state,
        movieId: action.payload
      };

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["SELECTED_MOVIE"]:
      return { ...state,
        selectedMovie: action.payload
      };

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_LOADING_STATUS"]:
      return { ...state,
        loadingStatus: action.payload
      };

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/services/httpRequest.ts":
/*!*************************************!*\
  !*** ./src/services/httpRequest.ts ***!
  \*************************************/
/*! exports provided: http */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "http", function() { return http; });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/store */ "./src/store/store.ts");
/* harmony import */ var _actions_movies_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/movies-actions */ "./src/actions/movies-actions.ts");


function http(url) {
  _store_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(Object(_actions_movies_actions__WEBPACK_IMPORTED_MODULE_1__["changeLoadingStatus"])(true));
  return fetch(url).then(response => response.json(), error => console.warn(error));
}

/***/ }),

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_movies_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/movies-reducer */ "./src/reducers/movies-reducer.ts");


const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_movies_reducer__WEBPACK_IMPORTED_MODULE_1__["changeMoviesState"]);
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./src/pages/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Anton\Desktop\React\movies-react\movies-react\src\pages\index.tsx */"./src/pages/index.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map