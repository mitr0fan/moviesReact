webpackHotUpdate("static\\development\\pages\\movie.js",{

/***/ "./src/pages/movie/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/movie/index.tsx ***!
  \***********************************/
/*! exports provided: MovieInfoPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieInfoPage", function() { return MovieInfoPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _movie_info_movie_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movie-info/movie-info */ "./src/pages/movie-info/movie-info.tsx");
/* harmony import */ var _films_content_films_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../films-content/films-content */ "./src/pages/films-content/films-content.tsx");
/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footer/footer */ "./src/components/footer/footer.tsx");
/* harmony import */ var _page_not_found_page_not_found__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../page-not-found/page-not-found */ "./src/pages/page-not-found/page-not-found.tsx");
/* harmony import */ var _services_httpRequest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/httpRequest */ "./src/services/httpRequest.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var _actions_movies_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/movies-actions */ "./src/actions/movies-actions.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_loading_loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/loading/loading */ "./src/components/loading/loading.tsx");
var _jsxFileName = "C:\\Users\\Anton\\Desktop\\React\\movies-react\\movies-react\\src\\pages\\movie\\index.tsx";










class MovieInfoPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  static getInitialProps({
    store,
    query
  }) {
    return {
      store,
      query
    };
  }

  componentDidMount() {
    if (!this.props.selectedMovie) {
      const id = this.props.query.id;
      Object(_services_httpRequest__WEBPACK_IMPORTED_MODULE_5__["http"])(_constants_constants__WEBPACK_IMPORTED_MODULE_6__["CONSTANTS"].URL_FILMS + `/${id}`).then(movie => {
        if (movie.title) {
          this.props.dispatch(Object(_actions_movies_actions__WEBPACK_IMPORTED_MODULE_7__["selectedMovie"])(movie));
          const url = `?search=${movie.genres[0]}&searchBy=genres`;
          Object(_services_httpRequest__WEBPACK_IMPORTED_MODULE_5__["http"])(_constants_constants__WEBPACK_IMPORTED_MODULE_6__["CONSTANTS"].URL_FILMS + url).then(res => {
            this.props.dispatch(Object(_actions_movies_actions__WEBPACK_IMPORTED_MODULE_7__["getMovies"])([...res.data]));
            this.props.dispatch(Object(_actions_movies_actions__WEBPACK_IMPORTED_MODULE_7__["getUnsortedMovies"])([...res.data]));
          });
        }
      }).finally(() => this.props.dispatch(Object(_actions_movies_actions__WEBPACK_IMPORTED_MODULE_7__["changeLoadingStatus"])(false)));
    }
  }

  backToMainPage() {
    this.props.dispatch(Object(_actions_movies_actions__WEBPACK_IMPORTED_MODULE_7__["changeLoadingStatus"])(false));
    this.props.dispatch(Object(_actions_movies_actions__WEBPACK_IMPORTED_MODULE_7__["getUnsortedMovies"])([...this.props.movies]));
  }

  loading() {
    if (this.props.loadingStatus) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_loading_loading__WEBPACK_IMPORTED_MODULE_9__["Loading"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      });
    }
  }

  render() {
    if (!isNaN(+this.props.query.id)) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, this.loading(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_movie_info_movie_info__WEBPACK_IMPORTED_MODULE_1__["MovieInfo"], {
        backToMainPage: this.backToMainPage.bind(this),
        selectedMovie: this.props.selectedMovie,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_films_content_films_content__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_footer_footer__WEBPACK_IMPORTED_MODULE_3__["Footer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_page_not_found_page_not_found__WEBPACK_IMPORTED_MODULE_4__["PageNotFound"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      });
    }
  }

}

function mapStateToProps(state) {
  return {
    selectedMovie: state.selectedMovie,
    movies: state.movies,
    loadingStatus: state.loadingStatus
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps)(MovieInfoPage));

/***/ })

})
//# sourceMappingURL=movie.js.b4aa1571ad2083afff45.hot-update.js.map