function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'definitely';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["#head[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-top: 2%;\n    font-size: 300%;\n    font-family: 'Adam';\n    color: black;\n}\n#head[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    color: lightgrey;\n    transition-duration: 0.3s;\n}\n.col-12[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n#mode[_ngcontent-%COMP%] {\n    width: 4vw;\n    margin-bottom: 2%;\n}\n#mode[_ngcontent-%COMP%]:hover{\n    opacity: 70%;\n    cursor: pointer;\n    transition-duration: 0.5s;\n    transform: rotate(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNoZWFkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDIlO1xuICAgIGZvbnQtc2l6ZTogMzAwJTtcbiAgICBmb250LWZhbWlseTogJ0FkYW0nO1xuICAgIGNvbG9yOiBibGFjaztcbn1cbiNoZWFkOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogbGlnaHRncmV5O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG59XG5cbi5jb2wtMTJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jbW9kZSB7XG4gICAgd2lkdGg6IDR2dztcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbn1cbiNtb2RlOmhvdmVye1xuICAgIG9wYWNpdHk6IDcwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _colors_colors_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./colors/colors.component */
    "./src/app/colors/colors.component.ts");
    /* harmony import */


    var _torvergata_torvergata_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./torvergata/torvergata.component */
    "./src/app/torvergata/torvergata.component.ts");
    /* harmony import */


    var _cv_cv_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./cv/cv.component */
    "./src/app/cv/cv.component.ts");
    /* harmony import */


    var _work_work_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./work/work.component */
    "./src/app/work/work.component.ts");
    /* harmony import */


    var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./homepage/homepage.component */
    "./src/app/homepage/homepage.component.ts");

    var appRoutes = [{
      path: '',
      component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__["HomepageComponent"]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
    }, {
      path: 'colors',
      component: _colors_colors_component__WEBPACK_IMPORTED_MODULE_7__["ColorsComponent"]
    }, {
      path: 'torvergata',
      component: _torvergata_torvergata_component__WEBPACK_IMPORTED_MODULE_8__["TorvergataComponent"]
    }, {
      path: 'cv',
      component: _cv_cv_component__WEBPACK_IMPORTED_MODULE_9__["CvComponent"]
    }, {
      path: 'work',
      component: _work_work_component__WEBPACK_IMPORTED_MODULE_10__["WorkComponent"]
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _colors_colors_component__WEBPACK_IMPORTED_MODULE_7__["ColorsComponent"], _torvergata_torvergata_component__WEBPACK_IMPORTED_MODULE_8__["TorvergataComponent"], _cv_cv_component__WEBPACK_IMPORTED_MODULE_9__["CvComponent"], _work_work_component__WEBPACK_IMPORTED_MODULE_10__["WorkComponent"], _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__["HomepageComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _colors_colors_component__WEBPACK_IMPORTED_MODULE_7__["ColorsComponent"], _torvergata_torvergata_component__WEBPACK_IMPORTED_MODULE_8__["TorvergataComponent"], _cv_cv_component__WEBPACK_IMPORTED_MODULE_9__["CvComponent"], _work_work_component__WEBPACK_IMPORTED_MODULE_10__["WorkComponent"], _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__["HomepageComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes)],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/colors/colors.component.ts":
  /*!********************************************!*\
    !*** ./src/app/colors/colors.component.ts ***!
    \********************************************/

  /*! exports provided: ColorsComponent */

  /***/
  function srcAppColorsColorsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorsComponent", function () {
      return ColorsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ColorsComponent =
    /*#__PURE__*/
    function () {
      function ColorsComponent() {
        _classCallCheck(this, ColorsComponent);

        this.mode = false;
      }

      _createClass(ColorsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "switchMode",
        value: function switchMode() {
          this.mode = !this.mode;
        }
      }]);

      return ColorsComponent;
    }();

    ColorsComponent.ɵfac = function ColorsComponent_Factory(t) {
      return new (t || ColorsComponent)();
    };

    ColorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ColorsComponent,
      selectors: [["app-colors"]],
      decls: 43,
      vars: 2,
      consts: [[1, "container-fluid", 3, "ngClass"], ["id", "head", 1, "row"], [1, "col-12"], ["routerLink", "", "id", "nome", 3, "ngClass"], [2, "color", "darkgrey"], [1, "row"], [1, "prova", 2, "background-color", "rgba(6,82,221, 0.05)"], [1, "codice"], [1, "prova", 2, "background-color", "rgba(253,203,110, 0.1)"], [1, "prova", 2, "background-color", "rgba(235,59,90, 0.1)"], [1, "prova", 2, "background-color", "rgb(255, 159, 26)", "color", "white"], [1, "prova", 2, "background-color", "rgb(235,59,90)", "color", "white"], [1, "prova", 2, "background-color", "rgb(6,82,221)", "color", "white"], [1, "prova", 2, "background-color", "rgb(178, 190, 195)", "color", "white"], [1, "prova", 2, "background-color", "rgb(0,0,0)", "color", "white"], [2, "font-family", "SF-ultralight", "display", "flex", "justify-content", "center", "margin-top", "2%"]],
      template: function ColorsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Paolo Na");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "zz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "aro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "rgba (6, 82, 221, 0.05)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "rgba (253, 203, 110, 0.1)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "rgba (235, 59, 90, 0.1)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "rgb (255, 159, 26)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "rgb (235, 59, 90)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "rgb (6, 82, 221)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "rgb (178, 190, 195)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "rgb (0, 0, 0)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Designed by Paolo Nazzaro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: [".container-fluid[_ngcontent-%COMP%] {\n}\n#head[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-top: 2%;\n}\n#nome[_ngcontent-%COMP%]{\n    font-size: 400%;\n    font-family: 'Adam';\n}\n#nome[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    color: lightgrey;\n    transition-duration: 1s;\n}\n#mode[_ngcontent-%COMP%] {\n    width: 4vw;\n}\n#mode[_ngcontent-%COMP%]:hover{\n    opacity: 70%;\n    cursor: pointer;\n    transition-duration: 0.5s;\n    transform: rotate(180deg);\n}\n.col-12[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.codice[_ngcontent-%COMP%]{\n    visibility: hidden;\n    font-family: 'SF-ultralight';\n}\n.codice[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n}\n.prova[_ngcontent-%COMP%]:hover   .codice[_ngcontent-%COMP%]{\n    visibility: visible;\n    transition-duration: 2s;\n    transition-timing-function: ease-out;\n}\n.prova[_ngcontent-%COMP%]{\n    width: 25%;\n    height: 15vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.prova[_ngcontent-%COMP%]:hover{\n    width: 100vw;\n    transition-duration: 2s;\n}\n@media (max-width: 992px){\n    #nome[_ngcontent-%COMP%]{\n        font-size: 220%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sb3JzL2NvbG9ycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG9DQUFvQztBQUN4QztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb2xvcnMvY29sb3JzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcbn1cbiNoZWFkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDIlO1xufVxuI25vbWV7XG4gICAgZm9udC1zaXplOiA0MDAlO1xuICAgIGZvbnQtZmFtaWx5OiAnQWRhbSc7XG59XG4jbm9tZTpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IGxpZ2h0Z3JleTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcbn1cblxuI21vZGUge1xuICAgIHdpZHRoOiA0dnc7XG59XG4jbW9kZTpob3ZlcntcbiAgICBvcGFjaXR5OiA3MCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLmNvbC0xMntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY29kaWNle1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBmb250LWZhbWlseTogJ1NGLXVsdHJhbGlnaHQnO1xufVxuLmNvZGljZTpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucHJvdmE6aG92ZXIgIC5jb2RpY2V7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAycztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG59XG5cbi5wcm92YXtcbiAgICB3aWR0aDogMjUlO1xuICAgIGhlaWdodDogMTV2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJvdmE6aG92ZXJ7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDJzO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpe1xuICAgICNub21le1xuICAgICAgICBmb250LXNpemU6IDIyMCU7XG4gICAgfVxufSJdfQ== */", ".sfondolight[_ngcontent-%COMP%] { background-color: white }\n  \n    .sfondodark[_ngcontent-%COMP%] { background-color: #222f3e; color: whitesmoke; }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-colors',
          templateUrl: './colors.component.html',
          styleUrls: ['./colors.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cv/cv.component.ts":
  /*!************************************!*\
    !*** ./src/app/cv/cv.component.ts ***!
    \************************************/

  /*! exports provided: CvComponent */

  /***/
  function srcAppCvCvComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CvComponent", function () {
      return CvComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function CvComponent_img_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvComponent_img_14_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.switchMode();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvComponent_img_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvComponent_img_15_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.switchMode();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var CvComponent =
    /*#__PURE__*/
    function () {
      function CvComponent() {
        _classCallCheck(this, CvComponent);

        this.mode = false;
        this.stateDeg = 'small';
        this.stateEu = 'small';
        this.stateBk = 'small';
      }

      _createClass(CvComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "switchMode",
        value: function switchMode() {
          this.mode = !this.mode;
        }
      }, {
        key: "animateDeg",
        value: function animateDeg() {
          this.stateDeg = this.stateDeg === 'small' ? 'large' : 'small';
        }
      }, {
        key: "animateEu",
        value: function animateEu() {
          this.stateEu = this.stateEu === 'small' ? 'medium' : 'small';
        }
      }, {
        key: "animateBk",
        value: function animateBk() {
          this.stateBk = this.stateBk === 'small' ? 'short' : 'small';
        }
      }]);

      return CvComponent;
    }();

    CvComponent.ɵfac = function CvComponent_Factory(t) {
      return new (t || CvComponent)();
    };

    CvComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CvComponent,
      selectors: [["app-cv"]],
      decls: 152,
      vars: 10,
      consts: [[1, "container-fluid", 3, "ngClass"], ["id", "head", 1, "row"], [1, "col-12"], ["routerLink", "", "id", "nome", 3, "ngClass"], [2, "color", "darkgrey"], [1, "row"], ["routerLink", "", "id", "back", 1, "col-3", 2, "cursor", "pointer"], [1, "underlineShort"], ["src", "assets/back.png", "alt", "", 2, "width", "1.7vw"], [1, "col-lg-6", "col-xs-12", 2, "text-align", "center"], ["src", "assets/drop.png", "alt", "", "id", "mode", 3, "click", 4, "ngIf"], ["src", "assets/droplight.png", "alt", "", "id", "mode", 3, "click", 4, "ngIf"], ["id", "bio", 1, "col-lg-6", "col-xs-12", "box"], [1, "content"], ["id", "edu", 1, "col-lg-6", "col-xs-12", "box"], [1, "underline", 2, "cursor", "pointer", 3, "click"], ["src", "assets/down-arrow.png", 2, "width", "1.5vw", "padding-left", "8px"], [1, "txt"], ["id", "eduMob", 1, "col-lg-6", "col-xs-12", "box"], ["id", "work", 1, "col-lg-6", "col-xs-12", "box"], ["id", "hobbyWeb", 1, "col-lg-6", "col-xs-12", "box"], [1, "txt", 2, "text-align", "center"], ["id", "hobbyMob", 1, "col-lg-6", "col-xs-12", "box"], ["src", "assets/drop.png", "alt", "", "id", "mode", 3, "click"], ["src", "assets/droplight.png", "alt", "", "id", "mode", 3, "click"]],
      template: function CvComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Paolo Na");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "zz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "aro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CvComponent_img_14_Template, 1, 0, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CvComponent_img_15_Template, 1, 0, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Bio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Paolo Nazzaro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Date of birth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " 22 / 10 / 1996");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Place of birth ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Rome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Education & Training");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " 2018");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Scientific High School Degree ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "(85/100)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " 2018");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "b", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvComponent_Template_b_click_42_listener() {
            return ctx.animateEu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " European Project EU-MADE4LL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Formal participation in a joint syllabus including readings, workshops and assignments. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Production of a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Corporate Video");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " regarding the University of Rome Tor Vergata; analysis of design choices applying the notions of multimodal digital literacy. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " 2015-2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "b", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvComponent_Template_b_click_53_listener() {
            return ctx.animateDeg();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Languages in the Information Society Degree");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "During the three-year degree course, skills regarding linguistic, glottology and philology have been acquired. The course was also focused on the application and development of digital tools for web communication, such as ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "HTML, CSS, Javascript, Drupal, Wordpress, Java");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, ". At the end of the three-year course, it has been achieved a C1 English level and a B1 German level. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Graduated with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "110/110");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " with the thesis ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\"Font's analysis and use in web communication\".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Education & Training");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " 2010-2015");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Scientific High School Degree ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "(85/100)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " 2018");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "b", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvComponent_Template_b_click_78_listener() {
            return ctx.animateEu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " European Project EU-MADE4LL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Formal participation in a joint syllabus including readings, workshops and assignments. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Production of a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Corporate Video");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " regarding the University of Rome Tor Vergata; analysis of design choices applying the notions of multimodal digital literacy. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " 2015-2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "b", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvComponent_Template_b_click_89_listener() {
            return ctx.animateDeg();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Languages in the Information Society");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "During the three-year degree course, skills regarding linguistic, glottology and philology have been acquired. The course was also focused on the application and development of digital tools for web communication, such as ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "HTML, CSS, Javascript, Drupal, Wordpress, Java");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, ". At the end of the three-year course, it has been achieved a C1 English level and a B1 German level. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Graduated with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "110/110");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " with the thesis ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "\"Font's analysis and use in web communication\".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Work Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " 2019 ~ ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " Web Developing teaching assistant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " at Tor Vergata University ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " 2019 ~ Collaborating with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Trevize s.r.l");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " 2019 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Web Developing teaching assistant ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "at Betacom s.r.l ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " 2018 ~");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Journalist ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " at Il Quotidiano del Lazio and Romait ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " 2018 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " Office clerk ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " at Tor Vergata University Internships' Office ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Hobby");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "b", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvComponent_Template_b_click_136_listener() {
            return ctx.animateBk();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Basketball ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Balling since 2002. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " Football Manager ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Hobby");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "b", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvComponent_Template_b_click_146_listener() {
            return ctx.animateBk();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Basketball ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " Balling since 2002. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " Football Manager ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@Web", ctx.stateEu);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@Web", ctx.stateDeg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@Mob", ctx.stateEu);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@Mob", ctx.stateDeg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@Web", ctx.stateBk);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@Mob", ctx.stateBk);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: ["#head[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-top: 2%;\n}\n#nome[_ngcontent-%COMP%]{\n    font-size: 400%;\n    font-family: 'Adam';\n}\n#nome[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    color: lightgrey;\n    transition-duration: 1s;\n}\n#mode[_ngcontent-%COMP%] {\n    width: 4vw;\n}\n#mode[_ngcontent-%COMP%]:hover{\n    opacity: 70%;\n    cursor: pointer;\n    transition-duration: 0.5s;\n    transform: rotate(180deg);\n}\n.box[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-top: 2%;\n    padding-bottom: 2%;\n}\n.box[_ngcontent-%COMP%]:hover{\n    background-color: rgba(241, 242, 246, 0.8);\n    transition-duration: 0.5s;\n    color: black;\n}\nh2[_ngcontent-%COMP%]{\n    text-align: center;\n    font-size: 300%;\n}\n.content[_ngcontent-%COMP%] {\n    font-family: 'SF-ultralight';\n    text-align: left;\n    font-size: 110%f;\n    \n}\nb[_ngcontent-%COMP%]{\n    font-family: 'SF-regular';\n}\n.underlineShort[_ngcontent-%COMP%]:after{\n    content: '';\n    width: 0px;\n    height: 1px;\n    display: block;\n    background: black;\n    transition: 300ms;\n}\n.underlineShort[_ngcontent-%COMP%]:hover:after {\n    width: 55%;\n  }\n.underline[_ngcontent-%COMP%]:after {\n    content: '';\n    width: 0px;\n    height: 1px;\n    display: block;\n    background: black;\n    transition: 300ms;\n}\n.underline[_ngcontent-%COMP%]:hover:after {\n    width: 75%;\n  }\n.txt[_ngcontent-%COMP%]{\n    height: 0px;\n    overflow: hidden;\n}\n@media (max-width: 992px){\n    #nome[_ngcontent-%COMP%]{\n        font-size: 220%;\n    }\n    #mode[_ngcontent-%COMP%]{\n        width: 8vw;\n    }\n    #back[_ngcontent-%COMP%]{\n        display: none;\n    }\n    h2[_ngcontent-%COMP%]{\n        font-size: 210%;\n    }\n    .content[_ngcontent-%COMP%] {\n        font-family: 'SF-ultralight';\n        text-align: left;\n        display: inline-block;\n    }\n    #edu[_ngcontent-%COMP%]{\n        display: none;\n    }\n    #hobbyWeb[_ngcontent-%COMP%]{\n        display: none;\n    }\n    .box[_ngcontent-%COMP%]{\n        text-align: left;\n    }\n    h2[_ngcontent-%COMP%]{\n        text-align: left;\n    }\n}\n@media (min-width: 993px){\n    #eduMob[_ngcontent-%COMP%] {\n    display: none;\n    }\n    #hobbyMob[_ngcontent-%COMP%]{\n        display: none;\n    }   \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3YvY3YuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSwwQ0FBMEM7SUFDMUMseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixXQUFXO0lBQ1gsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFVBQVU7RUFDWjtBQUVGO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixXQUFXO0lBQ1gsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFVBQVU7RUFDWjtBQUNGO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLDRCQUE0QjtRQUM1QixnQkFBZ0I7UUFDaEIscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKO0FBRUE7SUFDSTtJQUNBLGFBQWE7SUFDYjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY3YvY3YuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNoZWFkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDIlO1xufVxuI25vbWV7XG4gICAgZm9udC1zaXplOiA0MDAlO1xuICAgIGZvbnQtZmFtaWx5OiAnQWRhbSc7XG59XG4jbm9tZTpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IGxpZ2h0Z3JleTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcbn1cblxuI21vZGUge1xuICAgIHdpZHRoOiA0dnc7XG59XG4jbW9kZTpob3ZlcntcbiAgICBvcGFjaXR5OiA3MCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLmJveCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAyJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XG59XG4uYm94OmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDIsIDI0NiwgMC44KTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICAgIGNvbG9yOiBibGFjaztcbn1cbmgye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDMwMCU7XG59XG4uY29udGVudCB7XG4gICAgZm9udC1mYW1pbHk6ICdTRi11bHRyYWxpZ2h0JztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTEwJWY7XG4gICAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xufVxuYntcbiAgICBmb250LWZhbWlseTogJ1NGLXJlZ3VsYXInO1xufVxuLnVuZGVybGluZVNob3J0OmFmdGVye1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHdpZHRoOiAwcHg7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgdHJhbnNpdGlvbjogMzAwbXM7XG59XG4udW5kZXJsaW5lU2hvcnQ6aG92ZXI6YWZ0ZXIge1xuICAgIHdpZHRoOiA1NSU7XG4gIH1cblxuLnVuZGVybGluZTphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgd2lkdGg6IDBweDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICB0cmFuc2l0aW9uOiAzMDBtcztcbn1cbi51bmRlcmxpbmU6aG92ZXI6YWZ0ZXIge1xuICAgIHdpZHRoOiA3NSU7XG4gIH1cbi50eHR7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KXtcbiAgICAjbm9tZXtcbiAgICAgICAgZm9udC1zaXplOiAyMjAlO1xuICAgIH1cbiAgICAjbW9kZXtcbiAgICAgICAgd2lkdGg6IDh2dztcbiAgICB9XG4gICAgI2JhY2t7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIGgye1xuICAgICAgICBmb250LXNpemU6IDIxMCU7XG4gICAgfVxuICAgIC5jb250ZW50IHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTRi11bHRyYWxpZ2h0JztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgICAjZWR1e1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAjaG9iYnlXZWJ7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5ib3h7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICAgIGgye1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5M3B4KXtcbiAgICAjZWR1TW9iIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAjaG9iYnlNb2J7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfSAgIFxufVxuIl19 */", ".sfondolight[_ngcontent-%COMP%] { background-color: white } \n    .sfondodark[_ngcontent-%COMP%] { background-color: #222f3e; color: whitesmoke; }\n    .visible[_ngcontent-%COMP%] { overflow: visible; transition-duration: 1s;}\n    .hidden[_ngcontent-%COMP%] { overflow: hidden; }"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('Web', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('small', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          height: '0px'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('short', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          height: '30px'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('medium', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          height: '80px'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('large', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          height: '130px'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('small <=> short', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('small <=> medium', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('small <=> large', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in'))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('Mob', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('small', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          height: '0px'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('short', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          height: '50px'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('medium', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          height: '130px'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('large', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          height: '225px'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('small <=> short', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('small <=> medium', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('small <=> large', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in'))])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CvComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cv',
          templateUrl: './cv.component.html',
          styleUrls: ['./cv.component.css'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('Web', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('small', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            height: '0px'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('short', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            height: '30px'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('medium', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            height: '80px'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('large', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            height: '130px'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('small <=> short', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('small <=> medium', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('small <=> large', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in'))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('Mob', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('small', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            height: '0px'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('short', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            height: '50px'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('medium', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            height: '130px'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('large', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            height: '225px'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('small <=> short', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('small <=> medium', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('small <=> large', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in'))])]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomeComponent_img_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_img_10_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.switchMode();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_img_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_img_11_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.switchMode();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(x) {
        _classCallCheck(this, HomeComponent);

        this.x = x;
        this.mode = false;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "switchMode",
        value: function switchMode() {
          this.mode = !this.mode;
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 68,
      vars: 4,
      consts: [[1, "container-fluid", 3, "ngClass"], ["id", "head", 1, "row"], [1, "col-12"], [3, "ngClass"], [2, "color", "darkgrey"], [1, "row"], [1, "col-12", 2, "text-align", "center"], ["src", "assets/drop.png", "alt", "", "id", "mode", 3, "click", 4, "ngIf"], ["src", "assets/droplight.png", "alt", "", "id", "mode", 3, "click", 4, "ngIf"], ["id", "first", 1, "row", "riga"], [1, "col-lg-2"], ["id", "bio", "routerLink", "cv", 1, "col-lg-4", "col-xs-6", "single"], [1, "more"], ["routerLink", "cv", 1, "underline"], ["src", "assets/next.png", "alt", "", 2, "width", "1.5vw"], ["id", "work", "routerLink", "work", 1, "col-lg-4", "col-xs-6", "single"], ["id", "biomobile", 1, "boxmobile"], [2, "font-family", "Abraham"], [1, "moremobile"], ["id", "workmobile", 1, "boxmobile"], ["id", "second", 1, "row", "riga"], ["id", "hobby", 1, "col-lg-4", "col-xs-12", "single"], ["id", "projects", 1, "col-lg-4", "col-xs-12", "single"], ["routerLink", "torvergata", 1, "underline"], ["id", "about", 1, "col-lg-4", "col-xs-12", "single"], ["src", "assets/drop.png", "alt", "", "id", "mode", 3, "click"], ["src", "assets/droplight.png", "alt", "", "id", "mode", 3, "click"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Paolo Na");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "zz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "aro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_img_10_Template, 1, 0, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_img_11_Template, 1, 0, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Bio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Rome - 22 / 10 / 1996");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Curriculum Vitae ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Work");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Frontend Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Teaching Assistant ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h1", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Bio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Rome - 22 / 10 / 1996 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Curriculum Vitae");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h1", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Work");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Frontend Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Teaching Assistant ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Hobby ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Basketball ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Football Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Projects ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Tor Vergata 4 Foreigners ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "About ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " paolonazzaro23@gmail.com ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: [".container-fluid[_ngcontent-%COMP%] {\n    \n}\n\n#head[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-top: 2%;\n    font-size: 300%;\n    font-family: 'Adam';\n    color: black;\n    padding-right: 0px;\n}\n\n#head[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    color: lightgrey;\n    transition-duration: 1s;\n}\n\n\n\n@media (max-width: 992px){\n    #head[_ngcontent-%COMP%]{\n        font-size: 250%;\n    }\n    #first[_ngcontent-%COMP%]{\n        display: none;\n    }\n    #first[_ngcontent-%COMP%]   .single[_ngcontent-%COMP%]{\n        height: 20vh;\n    }\n    #second[_ngcontent-%COMP%]   .single[_ngcontent-%COMP%]{\n        height: 20vh;\n    }\n    #rgb[_ngcontent-%COMP%]{\n        \n        width: 80%;\n    }\n    #work[_ngcontent-%COMP%] {\n        height: 20vh;\n    }\n    .col-lg-2[_ngcontent-%COMP%]{\n        display: none;\n    }\n    #mode[_ngcontent-%COMP%] {\n        width: 8vw;\n        margin-bottom: 1%;\n    }\n    .social[_ngcontent-%COMP%] {\n        width: 50vw;\n    }\n    .fondo[_ngcontent-%COMP%] {\n        padding-top: 30%;\n    }\n}\n\n\n\n@media (min-width: 992px){\n    .boxmobile[_ngcontent-%COMP%] {\n        display: none;\n    }\n\n}\n\n#mode[_ngcontent-%COMP%] {\n    width: 4vw;\n    margin-bottom: 2%;\n\n}\n\n#mode[_ngcontent-%COMP%]:hover{\n    opacity: 70%;\n    cursor: pointer;\n    transition-duration: 0.5s;\n    transform: rotate(180deg);\n}\n\n.riga[_ngcontent-%COMP%]{\n    text-align: center;\n    font-family: 'Abraham';\n    font-size: 200%;\n\n}\n\n#first[_ngcontent-%COMP%]{\n    height: 35vh;\n}\n\n#second[_ngcontent-%COMP%]{\n    height: 18vw;\n    margin-bottom: 2%;\n}\n\n.single[_ngcontent-%COMP%]{\n    padding-top: 1.5%;\n}\n\n.single[_ngcontent-%COMP%]:hover{\n    transition-duration: 0.7s;\n    cursor: pointer;\n}\n\n#bio[_ngcontent-%COMP%] {\n    border-right: 1px solid black;\n}\n\n#bio[_ngcontent-%COMP%]:hover{\n    background-color: black;\n    color: white;\n}\n\n.more[_ngcontent-%COMP%] {\n    font-family: 'SF-ultralight';\n    font-size: 60%;\n    display: none;\n    color: whitesmoke;\n    padding-top: 3%;\n}\n\n.single[_ngcontent-%COMP%]:hover   .more[_ngcontent-%COMP%]{\n    display: block;\n    transition-duration: 2s;\n}\n\n#work[_ngcontent-%COMP%]:hover{\n    background-color: #b2bec3;\n    color: white;\n}\n\n#hobby[_ngcontent-%COMP%]{\n    background-color: rgba(253,203,110, 0.1);\n}\n\n#hobby[_ngcontent-%COMP%]:hover{\n    background-color: #ff9f1a;\n    color: white;\n}\n\n#projects[_ngcontent-%COMP%]{\n    background-color: rgba(6,82,221, 0.05);\n}\n\n#projects[_ngcontent-%COMP%]:hover{\n    background-color: #0652DD;\n    color: white;\n}\n\n#about[_ngcontent-%COMP%]{\n    background-color: rgba(235,59,90, 0.1);\n}\n\n#about[_ngcontent-%COMP%]:hover{\n    background-color: #eb3b5a;\n    color: white;\n}\n\n#rgb[_ngcontent-%COMP%]{\n    width: 5vw;\n    margin-top: -2%;\n    padding-bottom: 2%;\n}\n\n#rgb[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    opacity: 50%;\n    transform: rotate(360deg);\n    transition-duration: 1s;  \n}\n\n#icone[_ngcontent-%COMP%]{\n    \n}\n\n.social[_ngcontent-%COMP%]{\n    width: 2vw;\n    \n}\n\n#footer[_ngcontent-%COMP%]{font-family: 'SF-ultralight'; display: flex; justify-content: center; margin-top: 2%;\n}\n\n.underline[_ngcontent-%COMP%]:after {\n    content: '';\n    width: 0px;\n    height: 1px;\n    display: block;\n    background: white;\n    transition: 300ms;\n\n}\n\n.underline[_ngcontent-%COMP%]:hover:after {\n    width: 75%;\n  }\n\n.moremobile[_ngcontent-%COMP%] {\n    font-family: 'SF-Ultralight';\n    font-size: 60%;\n    display: none;\n  }\n\n.boxmobile[_ngcontent-%COMP%] {\n    text-align: center; height: 20vh; padding-top: 1.5%; font-size: 200%;\n  }\n\n.boxmobile[_ngcontent-%COMP%]:hover{\n      color: white;\n      transition-duration: 1s;\n  }\n\n.boxmobile[_ngcontent-%COMP%]:hover   .moremobile[_ngcontent-%COMP%]{\n      display: block;\n      color: white;\n      transition-duration: 2s;\n  }\n\n#biomobile[_ngcontent-%COMP%]:hover{\n      background-color: black;\n  }\n\n#workmobile[_ngcontent-%COMP%]:hover {\n      background-color: #b2bec3;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUdBLFNBQVM7O0FBQUU7SUFDUDtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO0lBQ2Q7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFVBQVU7UUFDVixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUEsVUFBVTs7QUFBQztJQUNQO1FBQ0ksYUFBYTtJQUNqQjs7QUFFSjs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7O0FBRXJCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZix5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixlQUFlOztBQUVuQjs7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7O0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixjQUFjO0lBQ2QsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qix1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSTs4QkFDMEI7QUFDOUI7O0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBLFFBQVEsNEJBQTRCLEVBQUUsYUFBYSxFQUFFLHVCQUF1QixFQUFFLGNBQWM7QUFDNUY7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLFdBQVc7SUFDWCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSxVQUFVO0VBQ1o7O0FBRUE7SUFDRSw0QkFBNEI7SUFDNUIsY0FBYztJQUNkLGFBQWE7RUFDZjs7QUFFQTtJQUNFLGtCQUFrQixFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxlQUFlO0VBQ3RFOztBQUVBO01BQ0ksWUFBWTtNQUNaLHVCQUF1QjtFQUMzQjs7QUFFQTtNQUNJLGNBQWM7TUFDZCxZQUFZO01BQ1osdUJBQXVCO0VBQzNCOztBQUVBO01BQ0ksdUJBQXVCO0VBQzNCOztBQUNBO01BQ0kseUJBQXlCO0VBQzdCOztBQUNBO3dpRUFDc2lFIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcbiAgICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xufVxuXG4jaGVhZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAyJTtcbiAgICBmb250LXNpemU6IDMwMCU7XG4gICAgZm9udC1mYW1pbHk6ICdBZGFtJztcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuI2hlYWQ6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiBsaWdodGdyZXk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG59XG5cblxuLyptb2JpbGUqLyBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpe1xuICAgICNoZWFke1xuICAgICAgICBmb250LXNpemU6IDI1MCU7XG4gICAgfVxuICAgICNmaXJzdHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgI2ZpcnN0IC5zaW5nbGV7XG4gICAgICAgIGhlaWdodDogMjB2aDtcbiAgICB9XG4gICAgI3NlY29uZCAuc2luZ2xle1xuICAgICAgICBoZWlnaHQ6IDIwdmg7XG4gICAgfVxuICAgICNyZ2J7XG4gICAgICAgIC8qIGhlaWdodDogMjB2aDsgKi9cbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG4gICAgI3dvcmsge1xuICAgICAgICBoZWlnaHQ6IDIwdmg7XG4gICAgfVxuICAgIC5jb2wtbGctMntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgI21vZGUge1xuICAgICAgICB3aWR0aDogOHZ3O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxJTtcbiAgICB9XG4gICAgLnNvY2lhbCB7XG4gICAgICAgIHdpZHRoOiA1MHZ3O1xuICAgIH1cbiAgICAuZm9uZG8ge1xuICAgICAgICBwYWRkaW5nLXRvcDogMzAlO1xuICAgIH1cbn1cblxuLypkZXNrdG9wKi9AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpe1xuICAgIC5ib3htb2JpbGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxufVxuXG4jbW9kZSB7XG4gICAgd2lkdGg6IDR2dztcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcblxufVxuI21vZGU6aG92ZXJ7XG4gICAgb3BhY2l0eTogNzAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi5yaWdhe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ0FicmFoYW0nO1xuICAgIGZvbnQtc2l6ZTogMjAwJTtcblxufVxuI2ZpcnN0e1xuICAgIGhlaWdodDogMzV2aDtcbn1cbiNzZWNvbmR7XG4gICAgaGVpZ2h0OiAxOHZ3O1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xufVxuLnNpbmdsZXtcbiAgICBwYWRkaW5nLXRvcDogMS41JTtcbn1cbi5zaW5nbGU6aG92ZXJ7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC43cztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jYmlvIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbn1cbiNiaW86aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLm1vcmUge1xuICAgIGZvbnQtZmFtaWx5OiAnU0YtdWx0cmFsaWdodCc7XG4gICAgZm9udC1zaXplOiA2MCU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICBwYWRkaW5nLXRvcDogMyU7XG59XG5cbi5zaW5nbGU6aG92ZXIgIC5tb3Jle1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDJzO1xufVxuI3dvcms6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IyYmVjMztcbiAgICBjb2xvcjogd2hpdGU7XG59XG4jaG9iYnl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTMsMjAzLDExMCwgMC4xKTtcbn1cbiNob2JieTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ZjFhO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiNwcm9qZWN0c3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYsODIsMjIxLCAwLjA1KTtcbn1cbiNwcm9qZWN0czpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY1MkREO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiNhYm91dHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNSw1OSw5MCwgMC4xKTtcbn1cbiNhYm91dDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWIzYjVhO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuI3JnYntcbiAgICB3aWR0aDogNXZ3O1xuICAgIG1hcmdpbi10b3A6IC0yJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XG59XG4jcmdiOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvcGFjaXR5OiA1MCU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxczsgIFxufVxuI2ljb25le1xuICAgIC8qIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG59XG4uc29jaWFse1xuICAgIHdpZHRoOiAydnc7XG4gICAgLyogaGVpZ2h0OiAyMHZoOyAqL1xufVxuXG4jZm9vdGVye2ZvbnQtZmFtaWx5OiAnU0YtdWx0cmFsaWdodCc7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBtYXJnaW4tdG9wOiAyJTtcbn1cblxuLnVuZGVybGluZTphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgd2lkdGg6IDBweDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiAzMDBtcztcblxufVxuICBcbi51bmRlcmxpbmU6aG92ZXI6YWZ0ZXIge1xuICAgIHdpZHRoOiA3NSU7XG4gIH1cblxuICAubW9yZW1vYmlsZSB7XG4gICAgZm9udC1mYW1pbHk6ICdTRi1VbHRyYWxpZ2h0JztcbiAgICBmb250LXNpemU6IDYwJTtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmJveG1vYmlsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBoZWlnaHQ6IDIwdmg7IHBhZGRpbmctdG9wOiAxLjUlOyBmb250LXNpemU6IDIwMCU7XG4gIH1cblxuICAuYm94bW9iaWxlOmhvdmVye1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG4gIH1cblxuICAuYm94bW9iaWxlOmhvdmVyIC5tb3JlbW9iaWxle1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAycztcbiAgfVxuXG4gICNiaW9tb2JpbGU6aG92ZXJ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgfVxuICAjd29ya21vYmlsZTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiZWMzO1xuICB9XG4gIC8qIC50ZXh0LWZsaWNrZXItaW4tZ2xvd3thbmltYXRpb246dGV4dC1mbGlja2VyLWluLWdsb3cgNHMgbGluZWFyIGJvdGh9XG4gIEBrZXlmcmFtZXMgdGV4dC1mbGlja2VyLWluLWdsb3d7MCV7b3BhY2l0eTowfTEwJXtvcGFjaXR5OjA7dGV4dC1zaGFkb3c6bm9uZX0xMC4xJXtvcGFjaXR5OjE7dGV4dC1zaGFkb3c6bm9uZX0xMC4yJXtvcGFjaXR5OjA7dGV4dC1zaGFkb3c6bm9uZX0yMCV7b3BhY2l0eTowO3RleHQtc2hhZG93Om5vbmV9MjAuMSV7b3BhY2l0eToxO3RleHQtc2hhZG93OjAgMCAzMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjI1KX0yMC42JXtvcGFjaXR5OjA7dGV4dC1zaGFkb3c6bm9uZX0zMCV7b3BhY2l0eTowO3RleHQtc2hhZG93Om5vbmV9MzAuMSV7b3BhY2l0eToxO3RleHQtc2hhZG93OjAgMCAzMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjQ1KSwwIDAgNjBweCByZ2JhKDI1NSwyNTUsMjU1LC4yNSl9MzAuNSV7b3BhY2l0eToxO3RleHQtc2hhZG93OjAgMCAzMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjQ1KSwwIDAgNjBweCByZ2JhKDI1NSwyNTUsMjU1LC4yNSl9MzAuNiV7b3BhY2l0eTowO3RleHQtc2hhZG93Om5vbmV9NDUle29wYWNpdHk6MDt0ZXh0LXNoYWRvdzpub25lfTQ1LjEle29wYWNpdHk6MTt0ZXh0LXNoYWRvdzowIDAgMzBweCByZ2JhKDI1NSwyNTUsMjU1LC40NSksMCAwIDYwcHggcmdiYSgyNTUsMjU1LDI1NSwuMjUpfTUwJXtvcGFjaXR5OjE7dGV4dC1zaGFkb3c6MCAwIDMwcHggcmdiYSgyNTUsMjU1LDI1NSwuNDUpLDAgMCA2MHB4IHJnYmEoMjU1LDI1NSwyNTUsLjI1KX01NSV7b3BhY2l0eToxO3RleHQtc2hhZG93OjAgMCAzMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjQ1KSwwIDAgNjBweCByZ2JhKDI1NSwyNTUsMjU1LC4yNSl9NTUuMSV7b3BhY2l0eTowO3RleHQtc2hhZG93Om5vbmV9NTcle29wYWNpdHk6MDt0ZXh0LXNoYWRvdzpub25lfTU3LjEle29wYWNpdHk6MTt0ZXh0LXNoYWRvdzowIDAgMzBweCByZ2JhKDI1NSwyNTUsMjU1LC41NSksMCAwIDYwcHggcmdiYSgyNTUsMjU1LDI1NSwuMzUpfTYwJXtvcGFjaXR5OjE7dGV4dC1zaGFkb3c6MCAwIDMwcHggcmdiYSgyNTUsMjU1LDI1NSwuNTUpLDAgMCA2MHB4IHJnYmEoMjU1LDI1NSwyNTUsLjM1KX02MC4xJXtvcGFjaXR5OjA7dGV4dC1zaGFkb3c6bm9uZX02NSV7b3BhY2l0eTowO3RleHQtc2hhZG93Om5vbmV9NjUuMSV7b3BhY2l0eToxO3RleHQtc2hhZG93OjAgMCAzMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjU1KSwwIDAgNjBweCByZ2JhKDI1NSwyNTUsMjU1LC4zNSksMCAwIDEwMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjEpfTc1JXtvcGFjaXR5OjE7dGV4dC1zaGFkb3c6MCAwIDMwcHggcmdiYSgyNTUsMjU1LDI1NSwuNTUpLDAgMCA2MHB4IHJnYmEoMjU1LDI1NSwyNTUsLjM1KSwwIDAgMTAwcHggcmdiYSgyNTUsMjU1LDI1NSwuMSl9NzUuMSV7b3BhY2l0eTowO3RleHQtc2hhZG93Om5vbmV9Nzcle29wYWNpdHk6MDt0ZXh0LXNoYWRvdzpub25lfTc3LjEle29wYWNpdHk6MTt0ZXh0LXNoYWRvdzowIDAgMzBweCByZ2JhKDI1NSwyNTUsMjU1LC41NSksMCAwIDYwcHggcmdiYSgyNTUsMjU1LDI1NSwuNCksMCAwIDExMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjIpLDAgMCAxMDBweCByZ2JhKDI1NSwyNTUsMjU1LC4xKX04NSV7b3BhY2l0eToxO3RleHQtc2hhZG93OjAgMCAzMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjU1KSwwIDAgNjBweCByZ2JhKDI1NSwyNTUsMjU1LC40KSwwIDAgMTEwcHggcmdiYSgyNTUsMjU1LDI1NSwuMiksMCAwIDEwMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjEpfTg1LjEle29wYWNpdHk6MDt0ZXh0LXNoYWRvdzpub25lfTg2JXtvcGFjaXR5OjA7dGV4dC1zaGFkb3c6bm9uZX04Ni4xJXtvcGFjaXR5OjE7dGV4dC1zaGFkb3c6MCAwIDMwcHggcmdiYSgyNTUsMjU1LDI1NSwuNiksMCAwIDYwcHggcmdiYSgyNTUsMjU1LDI1NSwuNDUpLDAgMCAxMTBweCByZ2JhKDI1NSwyNTUsMjU1LC4yNSksMCAwIDEwMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjEpfTEwMCV7b3BhY2l0eToxO3RleHQtc2hhZG93OjAgMCAzMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjYpLDAgMCA2MHB4IHJnYmEoMjU1LDI1NSwyNTUsLjQ1KSwwIDAgMTEwcHggcmdiYSgyNTUsMjU1LDI1NSwuMjUpLDAgMCAxMDBweCByZ2JhKDI1NSwyNTUsMjU1LC4xKX19ICovXG4iXX0= */", ".sfondolight[_ngcontent-%COMP%] { background-color: white }\n  \n    .sfondodark[_ngcontent-%COMP%] { background-color: #222f3e !important; color: whitesmoke !important; }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/homepage.component.ts":
  /*!************************************************!*\
    !*** ./src/app/homepage/homepage.component.ts ***!
    \************************************************/

  /*! exports provided: HomepageComponent */

  /***/
  function srcAppHomepageHomepageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomepageComponent", function () {
      return HomepageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function HomepageComponent_img_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_img_10_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.switchMode();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomepageComponent_img_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_img_11_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.switchMode();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HomepageComponent =
    /*#__PURE__*/
    function () {
      function HomepageComponent() {
        _classCallCheck(this, HomepageComponent);

        this.mode = false;
      }

      _createClass(HomepageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "switchMode",
        value: function switchMode() {
          this.mode = !this.mode;
        }
      }]);

      return HomepageComponent;
    }();

    HomepageComponent.ɵfac = function HomepageComponent_Factory(t) {
      return new (t || HomepageComponent)();
    };

    HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomepageComponent,
      selectors: [["app-homepage"]],
      decls: 42,
      vars: 4,
      consts: [[1, "container-fluid", 3, "ngClass"], ["id", "head", 1, "row"], [1, "col-12"], ["id", "nome", 3, "ngClass"], [2, "color", "darkgrey"], [1, "row"], [1, "col-lg-12", "col-xs-12", 2, "text-align", "center"], ["src", "assets/drop.png", "alt", "", "id", "mode", 3, "click", 4, "ngIf"], ["src", "assets/droplight.png", "alt", "", "id", "mode", 3, "click", 4, "ngIf"], ["id", "square", 1, "row"], ["id", "bio", "routerLink", "cv", 1, "col-lg-6", "col-xs-12", "voice"], ["routerLink", "cv", 1, "underline"], ["src", "assets/next.png", "alt", "", 1, "arrow"], ["id", "work", "routerLink", "work", 1, "col-lg-6", "col-xs-12", "voice"], ["id", "projects", 1, "col-lg-6", "col-xs-12", "voice"], ["routerLink", "torvergata", 1, "underline"], ["id", "about", 1, "col-lg-6", "col-xs-12", "voice"], [2, "display", "flex", "justify-content", "center", "margin-top", "3%"], ["src", "assets/rgb.png", "alt", "", "id", "rgb", "routerLink", "colors"], ["id", "foot"], ["src", "assets/drop.png", "alt", "", "id", "mode", 3, "click"], ["src", "assets/droplight.png", "alt", "", "id", "mode", 3, "click"]],
      template: function HomepageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Paolo Na");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "zz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "aro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomepageComponent_img_10_Template, 1, 0, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomepageComponent_img_11_Template, 1, 0, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Bio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " 22 / 10 / 1996 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Rome ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Curriculum Vitae ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Work ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Frontend Developer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Teaching Assistant ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Projects ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Tor Vergata 4 Foreigners ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " About ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "paolonazzaro23@gmail.com ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Designed by Paolo Nazzaro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: ["#title[_ngcontent-%COMP%]{\n    height: 50vh;\n    display: flex;\n    align-items: center;\n    padding-left: 15%;\n}\n\n#pn[_ngcontent-%COMP%] {\n    font-family: 'SF-bold';\n    font-size: 400%;\n    letter-spacing: 2px;\n}\n\n#menu[_ngcontent-%COMP%] {\n    font-family: 'SF-regular';\n    font-size: 250%;\n    \n    text-align: center;\n    height: 50vh;\n}\n\n.voce[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\n.voce[_ngcontent-%COMP%]:hover{\n    background-color: #b2bec3;\n    transition-duration: 1s;\n}\n\n.underline[_ngcontent-%COMP%]:after {\n    content: '';\n    width: 0px;\n    height: 1px;\n    display: block;\n    background: white;\n    transition: 300ms;\n\n}\n\n.underline[_ngcontent-%COMP%]:hover:after {\n    width: 75%;\n  }\n\np[_ngcontent-%COMP%]{\n    font-family: 'SF-ultralight';\n    font-size: 50%;\n}\n\n\n\n#head[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-top: 2%;\n}\n\n#nome[_ngcontent-%COMP%]{\n    font-size: 400%;\n    font-family: 'Adam';\n}\n\n#nome[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    color: lightgrey;\n    transition-duration: 1s;\n}\n\n#mode[_ngcontent-%COMP%] {\n    width: 4vw;\n}\n\n#mode[_ngcontent-%COMP%]:hover{\n    opacity: 70%;\n    cursor: pointer;\n    transition-duration: 0.5s;\n    transform: rotate(180deg);\n}\n\n#square[_ngcontent-%COMP%] {\n    text-align: center;\n    font-family: 'SF-semibold';\n    font-size: 300%;\n    padding-top: 5%;\n    height: 100%;\n}\n\n.voice[_ngcontent-%COMP%]{\n    cursor: pointer;\n    height: 30vh;\n}\n\n.voice[_ngcontent-%COMP%]:hover{\n    transition-duration: 1s;\n}\n\n#bio[_ngcontent-%COMP%]{\n    background-color: rgba(189, 195, 199, 0.1);\n}\n\n#bio[_ngcontent-%COMP%]:hover{\n    background-color: black;\n    color: white;\n}\n\n#work[_ngcontent-%COMP%]{\n    \n    background-color: rgba(11, 232, 129, 0.05);    \n}\n\n#work[_ngcontent-%COMP%]:hover{\n    background-color: rgb(11, 232, 129);\n}\n\n#projects[_ngcontent-%COMP%] {\n    \n    background-color: rgba(6,82,221, 0.05);\n}\n\n#projects[_ngcontent-%COMP%]:hover{\n    background-color: rgb(6,82,221);\n    color: white;\n}\n\n#about[_ngcontent-%COMP%]{\n    \n    background-color: rgba(235,59,90, 0.1);\n}\n\n#about[_ngcontent-%COMP%]:hover{\n    background-color: rgb(235,59,90);\n}\n\n.arrow[_ngcontent-%COMP%] {\n    width: 1.5vw;\n}\n\n#rgb[_ngcontent-%COMP%]{\n    width: 4vw;\n}\n\n#rgb[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    opacity: 50%;\n    transform: rotate(360deg);\n    transition-duration: 1s; \n}\n\n#foot[_ngcontent-%COMP%]{\n    padding-top: 4%;\n    display: flex;\n    justify-content: center;\n    font-family: 'SF-ultralight';\n    font-size: 110%;\n}\n\n\n\n@media (max-width: 992px){\n    #nome[_ngcontent-%COMP%]{\n        font-size: 220%;\n    }\n    #mode[_ngcontent-%COMP%]{\n        width: 8vw;\n    }\n    .voice[_ngcontent-%COMP%]{\n        height: 35vh;\n    }\n    .arrow[_ngcontent-%COMP%]{\n        width: 4vw;\n    }\n    #rgb[_ngcontent-%COMP%]{\n        width: 8vw;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztJQUNYLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLFVBQVU7RUFDWjs7QUFHRjtJQUNJLDRCQUE0QjtJQUM1QixjQUFjO0FBQ2xCOztBQUVBLEtBQUs7O0FBRUw7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUM7O0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdEQUFnRDtJQUNoRCwwQ0FBMEM7QUFDOUM7O0FBQ0E7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxnREFBZ0Q7SUFDaEQsc0NBQXNDO0FBQzFDOztBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsc0NBQXNDO0FBQzFDOztBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1QixlQUFlO0FBQ25COztBQUVBLFNBQVM7O0FBQUU7SUFDUDtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGl0bGV7XG4gICAgaGVpZ2h0OiA1MHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1JTtcbn1cblxuI3BuIHtcbiAgICBmb250LWZhbWlseTogJ1NGLWJvbGQnO1xuICAgIGZvbnQtc2l6ZTogNDAwJTtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG4jbWVudSB7XG4gICAgZm9udC1mYW1pbHk6ICdTRi1yZWd1bGFyJztcbiAgICBmb250LXNpemU6IDI1MCU7XG4gICAgLyogbGV0dGVyLXNwYWNpbmc6IDJweDsgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA1MHZoO1xufVxuXG4udm9jZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnZvY2U6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IyYmVjMztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcbn1cblxuLnVuZGVybGluZTphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgd2lkdGg6IDBweDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiAzMDBtcztcblxufVxuICBcbi51bmRlcmxpbmU6aG92ZXI6YWZ0ZXIge1xuICAgIHdpZHRoOiA3NSU7XG4gIH1cblxuXG5we1xuICAgIGZvbnQtZmFtaWx5OiAnU0YtdWx0cmFsaWdodCc7XG4gICAgZm9udC1zaXplOiA1MCU7XG59XG5cbi8qICAqL1xuXG4jaGVhZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAyJTtcbn1cbiNub21le1xuICAgIGZvbnQtc2l6ZTogNDAwJTtcbiAgICBmb250LWZhbWlseTogJ0FkYW0nO1xufVxuI25vbWU6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiBsaWdodGdyZXk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG59XG5cbiNtb2RlIHtcbiAgICB3aWR0aDogNHZ3O1xufVxuI21vZGU6aG92ZXJ7XG4gICAgb3BhY2l0eTogNzAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbiNzcXVhcmUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ1NGLXNlbWlib2xkJztcbiAgICBmb250LXNpemU6IDMwMCU7XG4gICAgcGFkZGluZy10b3A6IDUlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi52b2ljZXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiAzMHZoO1xufVxuXG4udm9pY2U6aG92ZXJ7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG59XG5cbiNiaW97XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODksIDE5NSwgMTk5LCAwLjEpO1xufVxuI2Jpbzpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiN3b3Jre1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg5LCAxOTUsIDE5OSwgMC4xKTsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExLCAyMzIsIDEyOSwgMC4wNSk7ICAgIFxufVxuI3dvcms6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExLCAyMzIsIDEyOSk7XG59XG5cbiNwcm9qZWN0cyB7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODksIDE5NSwgMTk5LCAwLjMpOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNiw4MiwyMjEsIDAuMDUpO1xufVxuI3Byb2plY3RzOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2LDgyLDIyMSk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4jYWJvdXR7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAxKTsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNSw1OSw5MCwgMC4xKTtcbn1cbiNhYm91dDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LDU5LDkwKTtcbn1cblxuLmFycm93IHtcbiAgICB3aWR0aDogMS41dnc7XG59XG5cbiNyZ2J7XG4gICAgd2lkdGg6IDR2dztcbn1cbiNyZ2I6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG9wYWNpdHk6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFzOyBcbn1cblxuI2Zvb3R7XG4gICAgcGFkZGluZy10b3A6IDQlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdTRi11bHRyYWxpZ2h0JztcbiAgICBmb250LXNpemU6IDExMCU7XG59XG5cbi8qbW9iaWxlKi8gQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KXtcbiAgICAjbm9tZXtcbiAgICAgICAgZm9udC1zaXplOiAyMjAlO1xuICAgIH1cbiAgICAjbW9kZXtcbiAgICAgICAgd2lkdGg6IDh2dztcbiAgICB9XG4gICAgLnZvaWNle1xuICAgICAgICBoZWlnaHQ6IDM1dmg7XG4gICAgfVxuICAgIC5hcnJvd3tcbiAgICAgICAgd2lkdGg6IDR2dztcbiAgICB9XG4gICAgI3JnYntcbiAgICAgICAgd2lkdGg6IDh2dztcbiAgICB9XG59Il19 */", ".sfondolight[_ngcontent-%COMP%] { background-color: white }\n  \n    .sfondodark[_ngcontent-%COMP%] { background-color: #222f3e !important; color: whitesmoke !important; }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-homepage',
          templateUrl: './homepage.component.html',
          styleUrls: ['./homepage.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/torvergata/torvergata.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/torvergata/torvergata.component.ts ***!
    \****************************************************/

  /*! exports provided: TorvergataComponent */

  /***/
  function srcAppTorvergataTorvergataComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TorvergataComponent", function () {
      return TorvergataComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function TorvergataComponent_img_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TorvergataComponent_img_14_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.switchMode();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TorvergataComponent_img_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TorvergataComponent_img_15_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.switchMode();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var TorvergataComponent =
    /*#__PURE__*/
    function () {
      function TorvergataComponent() {
        _classCallCheck(this, TorvergataComponent);

        this.mode = false;
      }

      _createClass(TorvergataComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "switchMode",
        value: function switchMode() {
          this.mode = !this.mode;
        }
      }]);

      return TorvergataComponent;
    }();

    TorvergataComponent.ɵfac = function TorvergataComponent_Factory(t) {
      return new (t || TorvergataComponent)();
    };

    TorvergataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TorvergataComponent,
      selectors: [["app-torvergata"]],
      decls: 47,
      vars: 4,
      consts: [[1, "container-fluid", 3, "ngClass"], ["id", "head", 1, "row"], [1, "col-12"], ["routerLink", "", "id", "nome", 3, "ngClass"], [2, "color", "darkgrey"], [1, "row"], ["routerLink", "", "id", "back", 1, "col-3", 2, "cursor", "pointer"], [1, "underlineShort"], ["src", "assets/back.png", "alt", "", 2, "width", "1.7vw"], [1, "col-lg-6", "col-xs-12", 2, "text-align", "center"], ["src", "assets/drop.png", "alt", "", "id", "mode", 3, "click", 4, "ngIf"], ["src", "assets/droplight.png", "alt", "", "id", "mode", 3, "click", 4, "ngIf"], [1, "row", 2, "margin-top", "3%", "text-align", "center"], [1, "col-lg-6", "col-xs-12"], ["src", "./assets/iphone.png", "id", "iphone", "alt", ""], ["id", "torvergata"], ["id", "text"], ["id", "footer"], ["src", "assets/drop.png", "alt", "", "id", "mode", 3, "click"], ["src", "assets/droplight.png", "alt", "", "id", "mode", 3, "click"]],
      template: function TorvergataComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Paolo Na");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "zz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "aro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TorvergataComponent_img_14_Template, 1, 0, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TorvergataComponent_img_15_Template, 1, 0, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Tor Vergata 4 Foreigners");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "NativeScript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " + ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Angular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "JWT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Authentication");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "File ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Uploading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Designed by Paolo Nazzaro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["#head[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-top: 2%;\n}\n#nome[_ngcontent-%COMP%]{\n    font-size: 400%;\n    font-family: 'Adam';\n}\n#nome[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    color: lightgrey;\n    transition-duration: 1s;\n}\n#mode[_ngcontent-%COMP%] {\n    width: 4vw;\n}\n#mode[_ngcontent-%COMP%]:hover{\n    opacity: 70%;\n    cursor: pointer;\n    transition-duration: 0.5s;\n    transform: rotate(180deg);\n}\n#iphone[_ngcontent-%COMP%] {\n    width: 20vw;\n}\n#torvergata[_ngcontent-%COMP%] {\n    font-family: 'SF-regular';\n    letter-spacing: 2px;\n}\n#text[_ngcontent-%COMP%] {\n    font-family: 'SF-ultralight';\n}\n#footer[_ngcontent-%COMP%]{font-family: 'SF-ultralight'; display: flex; justify-content: center; margin-top: 2%;}\n@media (max-width: 992px){\n    #nome[_ngcontent-%COMP%]{\n        font-size: 220%;\n    }\n    #back[_ngcontent-%COMP%]{\n        display: none;\n    }\n    #rgb[_ngcontent-%COMP%]{\n        \n        width: 20vw;\n    }\n    #iphone[_ngcontent-%COMP%]{\n        width: 50vw;\n    }\n    #mode[_ngcontent-%COMP%]{\n        width: 8vw;\n    }\n    #torvergata[_ngcontent-%COMP%] {\n        font-family: 'SF-regular';\n    }\n}\n.underlineShort[_ngcontent-%COMP%]:after{\n    content: '';\n    width: 0px;\n    height: 1px;\n    display: block;\n    background: black;\n    transition: 300ms;\n}\n.underlineShort[_ngcontent-%COMP%]:hover:after {\n    width: 55%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9ydmVyZ2F0YS90b3J2ZXJnYXRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZix5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCO0FBR0E7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQztBQUVBLFFBQVEsNEJBQTRCLEVBQUUsYUFBYSxFQUFFLHVCQUF1QixFQUFFLGNBQWMsQ0FBQztBQUc3RjtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLHlCQUF5QjtJQUM3QjtBQUNKO0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLFdBQVc7SUFDWCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksVUFBVTtFQUNaIiwiZmlsZSI6InNyYy9hcHAvdG9ydmVyZ2F0YS90b3J2ZXJnYXRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAyJTtcbn1cbiNub21le1xuICAgIGZvbnQtc2l6ZTogNDAwJTtcbiAgICBmb250LWZhbWlseTogJ0FkYW0nO1xufVxuI25vbWU6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiBsaWdodGdyZXk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG59XG5cbiNtb2RlIHtcbiAgICB3aWR0aDogNHZ3O1xufVxuI21vZGU6aG92ZXJ7XG4gICAgb3BhY2l0eTogNzAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cblxuI2lwaG9uZSB7XG4gICAgd2lkdGg6IDIwdnc7XG59XG5cbiN0b3J2ZXJnYXRhIHtcbiAgICBmb250LWZhbWlseTogJ1NGLXJlZ3VsYXInO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbiN0ZXh0IHtcbiAgICBmb250LWZhbWlseTogJ1NGLXVsdHJhbGlnaHQnO1xufVxuXG4jZm9vdGVye2ZvbnQtZmFtaWx5OiAnU0YtdWx0cmFsaWdodCc7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBtYXJnaW4tdG9wOiAyJTt9XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KXtcbiAgICAjbm9tZXtcbiAgICAgICAgZm9udC1zaXplOiAyMjAlO1xuICAgIH1cbiAgICAjYmFja3tcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgI3JnYntcbiAgICAgICAgLyogaGVpZ2h0OiA1dmg7ICovXG4gICAgICAgIHdpZHRoOiAyMHZ3O1xuICAgIH1cbiAgICAjaXBob25le1xuICAgICAgICB3aWR0aDogNTB2dztcbiAgICB9XG4gICAgI21vZGV7XG4gICAgICAgIHdpZHRoOiA4dnc7XG4gICAgfVxuICAgICN0b3J2ZXJnYXRhIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTRi1yZWd1bGFyJztcbiAgICB9XG59XG5cbi51bmRlcmxpbmVTaG9ydDphZnRlcntcbiAgICBjb250ZW50OiAnJztcbiAgICB3aWR0aDogMHB4O1xuICAgIGhlaWdodDogMXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIHRyYW5zaXRpb246IDMwMG1zO1xufVxuLnVuZGVybGluZVNob3J0OmhvdmVyOmFmdGVyIHtcbiAgICB3aWR0aDogNTUlO1xuICB9XG4iXX0= */", ".sfondolight[_ngcontent-%COMP%] { background-color: white }\n  \n    .sfondodark[_ngcontent-%COMP%] { background-color: #222f3e !important; color: whitesmoke !important; }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TorvergataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-torvergata',
          templateUrl: './torvergata.component.html',
          styleUrls: ['./torvergata.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/work/work.component.ts":
  /*!****************************************!*\
    !*** ./src/app/work/work.component.ts ***!
    \****************************************/

  /*! exports provided: WorkComponent */

  /***/
  function srcAppWorkWorkComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkComponent", function () {
      return WorkComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function WorkComponent_img_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkComponent_img_14_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.switchMode();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function WorkComponent_img_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkComponent_img_15_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.switchMode();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var WorkComponent =
    /*#__PURE__*/
    function () {
      function WorkComponent() {
        _classCallCheck(this, WorkComponent);

        this.mode = false;
      }

      _createClass(WorkComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "switchMode",
        value: function switchMode() {
          this.mode = !this.mode;
        }
      }]);

      return WorkComponent;
    }();

    WorkComponent.ɵfac = function WorkComponent_Factory(t) {
      return new (t || WorkComponent)();
    };

    WorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WorkComponent,
      selectors: [["app-work"]],
      decls: 66,
      vars: 4,
      consts: [[1, "container-fluid", 3, "ngClass"], ["id", "head", 1, "row"], [1, "col-12"], ["routerLink", "", "id", "nome", 3, "ngClass"], [2, "color", "darkgrey"], [1, "row"], ["routerLink", "", "id", "back", 1, "col-3", 2, "cursor", "pointer"], [1, "underlineShort"], ["src", "assets/back.png", "alt", "", 2, "width", "1.7vw"], [1, "col-lg-6", "col-xs-12", 2, "text-align", "center"], ["src", "assets/drop.png", "alt", "", "id", "mode", 3, "click", 4, "ngIf"], ["src", "assets/droplight.png", "alt", "", "id", "mode", 3, "click", 4, "ngIf"], [1, "row", "sezione", 2, "margin-top", "3%"], [1, "col-lg-6", "col-xs-12", 2, "display", "flex", "justify-content", "center"], [1, "title"], [1, "text"], ["id", "linea", 1, "col-12"], ["id", "teachingweb", 1, "row", "sezione"], ["href", "http://gixpix.github.io/"], ["id", "teachingmobile", 1, "row", "sezione"], ["src", "assets/drop.png", "alt", "", "id", "mode", 3, "click"], ["src", "assets/droplight.png", "alt", "", "id", "mode", 3, "click"]],
      template: function WorkComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Paolo Na");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "zz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "aro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, WorkComponent_img_14_Template, 1, 0, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, WorkComponent_img_15_Template, 1, 0, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Frontend ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Collaborating with Trevize s.r.l ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, ": HTML, CSS, Angular, NativeScript ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Prof. Giorgio Piccardo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "'s teaching assistant ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Tor Vergata ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "University ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Teaching ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Assistant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Teaching ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Assistant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Prof. Giorgio Piccardo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "'s teaching assistant ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Tor Vergata ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "University ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".container-fluid[_ngcontent-%COMP%] {\n    height: 100vh;\n}\n\n#head[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-top: 2%;\n}\n\n#nome[_ngcontent-%COMP%]{\n    font-size: 400%;\n    font-family: 'Adam';\n}\n\n#nome[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    color: lightgrey;\n    transition-duration: 1s;\n}\n\n#mode[_ngcontent-%COMP%] {\n    width: 4vw;\n}\n\n#mode[_ngcontent-%COMP%]:hover{\n    opacity: 70%;\n    cursor: pointer;\n    transition-duration: 0.5s;\n    transform: rotate(180deg);\n}\n\n\n\n@media (max-width: 992px){\n    #nome[_ngcontent-%COMP%]{\n        font-size: 220%;\n    }\n    #mode[_ngcontent-%COMP%] {\n        width: 8vw;\n        margin-bottom: 1%;\n    }\n    #back[_ngcontent-%COMP%]{\n        display: none;\n    }\n    #teachingweb[_ngcontent-%COMP%]{\n        display: none;\n    }\n}\n\n.sezione[_ngcontent-%COMP%]{\n    padding-bottom: 2%;\n}\n\n.sezione[_ngcontent-%COMP%]:hover{\n    background-color: rgba(241, 242, 246, 0.6);\n    transition-duration: 1s;\n    color: black;\n}\n\n.title[_ngcontent-%COMP%] {\n    font-family: 'SF-semibold';\n    font-size: 350%;\n}\n\n.text[_ngcontent-%COMP%]{\n    text-align: left;\n    padding-top: 8%; \n    font-family: 'SF-regular';   \n    font-size: 110%;\n}\n\n#linea[_ngcontent-%COMP%] {\n    height: 1px;\n    background-color: black;\n}\n\n.underlineShort[_ngcontent-%COMP%]:after{\n    content: '';\n    width: 0px;\n    height: 1px;\n    display: block;\n    background: black;\n    transition: 300ms;\n}\n\n.underlineShort[_ngcontent-%COMP%]:hover:after {\n    width: 55%;\n  }\n\na[_ngcontent-%COMP%]{\n      color: inherit;\n  }\n\na[_ngcontent-%COMP%]:hover{\n      text-decoration: none;\n  }\n\n@media (min-width: 993px){\n      #teachingmobile[_ngcontent-%COMP%]{\n          display: none;\n      }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay93b3JrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7O0FBRUEsU0FBUzs7QUFBRTtJQUNQO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksMENBQTBDO0lBQzFDLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztJQUNYLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksVUFBVTtFQUNaOztBQUVBO01BQ0ksY0FBYztFQUNsQjs7QUFDQTtNQUNJLHFCQUFxQjtFQUN6Qjs7QUFFQTtNQUNJO1VBQ0ksYUFBYTtNQUNqQjtFQUNKIiwiZmlsZSI6InNyYy9hcHAvd29yay93b3JrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4jaGVhZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAyJTtcbn1cbiNub21le1xuICAgIGZvbnQtc2l6ZTogNDAwJTtcbiAgICBmb250LWZhbWlseTogJ0FkYW0nO1xufVxuI25vbWU6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiBsaWdodGdyZXk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG59XG5cbiNtb2RlIHtcbiAgICB3aWR0aDogNHZ3O1xufVxuI21vZGU6aG92ZXJ7XG4gICAgb3BhY2l0eTogNzAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi8qbW9iaWxlKi8gQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KXtcbiAgICAjbm9tZXtcbiAgICAgICAgZm9udC1zaXplOiAyMjAlO1xuICAgIH1cbiAgICAjbW9kZSB7XG4gICAgICAgIHdpZHRoOiA4dnc7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDElO1xuICAgIH1cbiAgICAjYmFja3tcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgI3RlYWNoaW5nd2Vie1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbi5zZXppb25le1xuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcbn1cbi5zZXppb25lOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDIsIDI0NiwgMC42KTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6ICdTRi1zZW1pYm9sZCc7XG4gICAgZm9udC1zaXplOiAzNTAlO1xufVxuLnRleHR7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLXRvcDogOCU7IFxuICAgIGZvbnQtZmFtaWx5OiAnU0YtcmVndWxhcic7ICAgXG4gICAgZm9udC1zaXplOiAxMTAlO1xufVxuXG4jbGluZWEge1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuLnVuZGVybGluZVNob3J0OmFmdGVye1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHdpZHRoOiAwcHg7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgdHJhbnNpdGlvbjogMzAwbXM7XG59XG4udW5kZXJsaW5lU2hvcnQ6aG92ZXI6YWZ0ZXIge1xuICAgIHdpZHRoOiA1NSU7XG4gIH1cblxuICBhe1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cbiAgYTpob3ZlcntcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTNweCl7XG4gICAgICAjdGVhY2hpbmdtb2JpbGV7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgfSJdfQ== */", ".sfondolight[_ngcontent-%COMP%] { background-color: white }\n  \n    .sfondodark[_ngcontent-%COMP%] { background-color: #222f3e !important; color: whitesmoke !important; }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-work',
          templateUrl: './work.component.html',
          styleUrls: ['./work.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/paolonazzaro/Desktop/definitely/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map