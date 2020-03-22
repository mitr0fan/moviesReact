webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _main_page_main_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page/main-page */ "./src/pages/main-page/main-page.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_loading_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/loading/loading */ "./src/components/loading/loading.tsx");
var _jsxFileName = "C:\\Users\\Anton\\Desktop\\React\\movies-react\\movies-react\\src\\pages\\index.tsx";





class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  static getInitialProps({
    state
  }) {}

  loading() {
    // if(this.props.loadingStatus) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_loading_loading__WEBPACK_IMPORTED_MODULE_3__["Loading"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }); // }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.loading(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_main_page_main_page__WEBPACK_IMPORTED_MODULE_1__["MainPage"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }));
  }

}

function mapStateToProps(state) {
  return {
    loadingStatus: state.loadingStatus
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Index));

/***/ })

})
//# sourceMappingURL=index.js.996c6f03c65522521ca7.hot-update.js.map