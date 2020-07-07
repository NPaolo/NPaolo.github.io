(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'definitely';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["#head[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-top: 2%;\n    font-size: 300%;\n    font-family: 'Adam';\n    color: black;\n}\n#head[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    color: lightgrey;\n    transition-duration: 0.3s;\n}\n.col-12[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n#mode[_ngcontent-%COMP%] {\n    width: 4vw;\n    margin-bottom: 2%;\n}\n#mode[_ngcontent-%COMP%]:hover{\n    opacity: 70%;\n    cursor: pointer;\n    transition-duration: 0.5s;\n    transform: rotate(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNoZWFkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDIlO1xuICAgIGZvbnQtc2l6ZTogMzAwJTtcbiAgICBmb250LWZhbWlseTogJ0FkYW0nO1xuICAgIGNvbG9yOiBibGFjaztcbn1cbiNoZWFkOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogbGlnaHRncmV5O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG59XG5cbi5jb2wtMTJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jbW9kZSB7XG4gICAgd2lkdGg6IDR2dztcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbn1cbiNtb2RlOmhvdmVye1xuICAgIG9wYWNpdHk6IDcwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _colors_colors_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./colors/colors.component */ "./src/app/colors/colors.component.ts");
/* harmony import */ var _torvergata_torvergata_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./torvergata/torvergata.component */ "./src/app/torvergata/torvergata.component.ts");
/* harmony import */ var _cv_cv_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cv/cv.component */ "./src/app/cv/cv.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./work/work.component */ "./src/app/work/work.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");














const appRoutes = [
    { path: '', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__["HomepageComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'colors', component: _colors_colors_component__WEBPACK_IMPORTED_MODULE_7__["ColorsComponent"] },
    { path: 'torvergata', component: _torvergata_torvergata_component__WEBPACK_IMPORTED_MODULE_8__["TorvergataComponent"] },
    { path: 'cv', component: _cv_cv_component__WEBPACK_IMPORTED_MODULE_9__["CvComponent"] },
    { path: 'work', component: _work_work_component__WEBPACK_IMPORTED_MODULE_10__["WorkComponent"] },
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _colors_colors_component__WEBPACK_IMPORTED_MODULE_7__["ColorsComponent"],
        _torvergata_torvergata_component__WEBPACK_IMPORTED_MODULE_8__["TorvergataComponent"],
        _cv_cv_component__WEBPACK_IMPORTED_MODULE_9__["CvComponent"],
        _work_work_component__WEBPACK_IMPORTED_MODULE_10__["WorkComponent"],
        _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__["HomepageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _colors_colors_component__WEBPACK_IMPORTED_MODULE_7__["ColorsComponent"],
                    _torvergata_torvergata_component__WEBPACK_IMPORTED_MODULE_8__["TorvergataComponent"],
                    _cv_cv_component__WEBPACK_IMPORTED_MODULE_9__["CvComponent"],
                    _work_work_component__WEBPACK_IMPORTED_MODULE_10__["WorkComponent"],
                    _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__["HomepageComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/colors/colors.component.ts":
/*!********************************************!*\
  !*** ./src/app/colors/colors.component.ts ***!
  \********************************************/
/*! exports provided: ColorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsComponent", function() { return ColorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class ColorsComponent {
    constructor() {
        this.mode = false;
    }
    ngOnInit() {
    }
    switchMode() {
        this.mode = !this.mode;
    }
}
ColorsComponent.ɵfac = function ColorsComponent_Factory(t) { return new (t || ColorsComponent)(); };
ColorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ColorsComponent, selectors: [["app-colors"]], decls: 43, vars: 2, consts: [[1, "container-fluid", 3, "ngClass"], ["id", "head", 1, "row"], [1, "col-12"], ["routerLink", "", "id", "nome", 3, "ngClass"], [2, "color", "darkgrey"], [1, "row"], [1, "prova", 2, "background-color", "rgba(6,82,221, 0.05)"], [1, "codice"], [1, "prova", 2, "background-color", "rgba(253,203,110, 0.1)"], [1, "prova", 2, "background-color", "rgba(235,59,90, 0.1)"], [1, "prova", 2, "background-color", "rgb(255, 159, 26)", "color", "white"], [1, "prova", 2, "background-color", "rgb(235,59,90)", "color", "white"], [1, "prova", 2, "background-color", "rgb(6,82,221)", "color", "white"], [1, "prova", 2, "background-color", "rgb(178, 190, 195)", "color", "white"], [1, "prova", 2, "background-color", "rgb(0,0,0)", "color", "white"], [2, "font-family", "SF-ultralight", "display", "flex", "justify-content", "center", "margin-top", "2%"]], template: function ColorsComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n}\n#head[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-top: 2%;\n}\n#nome[_ngcontent-%COMP%]{\n    font-size: 400%;\n    font-family: 'Eina-bold';\n}\n#nome[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    color: lightgrey;\n    transition-duration: 1s;\n}\n#mode[_ngcontent-%COMP%] {\n    width: 4vw;\n}\n#mode[_ngcontent-%COMP%]:hover{\n    opacity: 70%;\n    cursor: pointer;\n    transition-duration: 0.5s;\n    transform: rotate(180deg);\n}\n.col-12[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.codice[_ngcontent-%COMP%]{\n    visibility: hidden;\n    font-family: 'SF-ultralight';\n}\n.codice[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n}\n.prova[_ngcontent-%COMP%]:hover   .codice[_ngcontent-%COMP%]{\n    visibility: visible;\n    transition-duration: 2s;\n    transition-timing-function: ease-out;\n}\n.prova[_ngcontent-%COMP%]{\n    width: 25%;\n    height: 15vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.prova[_ngcontent-%COMP%]:hover{\n    width: 100vw;\n    transition-duration: 2s;\n}\n@media (max-width: 992px){\n    #nome[_ngcontent-%COMP%]{\n        font-size: 260%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sb3JzL2NvbG9ycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG9DQUFvQztBQUN4QztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb2xvcnMvY29sb3JzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcbn1cbiNoZWFkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDIlO1xufVxuI25vbWV7XG4gICAgZm9udC1zaXplOiA0MDAlO1xuICAgIGZvbnQtZmFtaWx5OiAnRWluYS1ib2xkJztcbn1cbiNub21lOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogbGlnaHRncmV5O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xufVxuXG4jbW9kZSB7XG4gICAgd2lkdGg6IDR2dztcbn1cbiNtb2RlOmhvdmVye1xuICAgIG9wYWNpdHk6IDcwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4uY29sLTEye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb2RpY2V7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGZvbnQtZmFtaWx5OiAnU0YtdWx0cmFsaWdodCc7XG59XG4uY29kaWNlOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wcm92YTpob3ZlciAgLmNvZGljZXtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDJzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbn1cblxuLnByb3Zhe1xuICAgIHdpZHRoOiAyNSU7XG4gICAgaGVpZ2h0OiAxNXZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcm92YTpob3ZlcntcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMnM7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCl7XG4gICAgI25vbWV7XG4gICAgICAgIGZvbnQtc2l6ZTogMjYwJTtcbiAgICB9XG59Il19 */", ".sfondolight[_ngcontent-%COMP%] { background-color: white }\n  \n    .sfondodark[_ngcontent-%COMP%] { background-color: #222f3e; color: whitesmoke; }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-colors',
                templateUrl: './colors.component.html',
                styleUrls: ['./colors.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/cv/cv.component.ts":
/*!************************************!*\
  !*** ./src/app/cv/cv.component.ts ***!
  \************************************/
/*! exports provided: CvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvComponent", function() { return CvComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function CvComponent_img_14_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvComponent_img_14_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.switchMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CvComponent_img_15_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvComponent_img_15_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.switchMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CvComponent {
    constructor() {
        this.mode = false;
        this.stateDeg = 'small';
        this.stateEu = 'small';
        this.stateBk = 'small';
    }
    ngOnInit() {
    }
    switchMode() {
        this.mode = !this.mode;
    }
    animateDeg() {
        this.stateDeg = (this.stateDeg === 'small' ? 'large' : 'small');
    }
    animateEu() {
        this.stateEu = (this.stateEu === 'small' ? 'medium' : 'small');
    }
    animateBk() {
        this.stateBk = (this.stateBk === 'small' ? 'short' : 'small');
    }
}
CvComponent.ɵfac = function CvComponent_Factory(t) { return new (t || CvComponent)(); };
CvComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvComponent, selectors: [["app-cv"]], decls: 154, vars: 10, consts: [[1, "container-fluid", 3, "ngClass"], ["id", "head", 1, "row"], [1, "col-12"], ["routerLink", "", "id", "nome", 3, "ngClass"], [2, "color", "darkgrey"], [1, "row"], ["routerLink", "", "id", "back", 1, "col-3", 2, "cursor", "pointer"], [1, "underlineShort"], ["src", "assets/back.png", "alt", "", 2, "width", "1.7vw"], [1, "col-lg-6", "col-xs-12", 2, "text-align", "center"], ["src", "assets/drop.png", "alt", "", "id", "mode", 3, "click", 4, "ngIf"], ["src", "assets/droplight.png", "alt", "", "id", "mode", 3, "click", 4, "ngIf"], [1, "row", 2, "margin-top", "3%"], ["id", "bio", 1, "col-lg-6", "col-xs-12", "box"], [1, "content", "conBio"], ["id", "edu", 1, "col-lg-6", "col-xs-12", "box"], [1, "content", "conEdu"], [1, "underline", 2, "cursor", "pointer", 3, "click"], ["src", "assets/down-arrow.png", 2, "width", "1.5vw", "padding-left", "8px"], [1, "txt"], ["id", "eduMob", 1, "col-lg-6", "col-xs-12", "box"], [1, "content"], ["id", "work", 1, "col-lg-6", "col-xs-12", "box"], [1, "content", "conWor"], ["id", "hobbyWeb", 1, "col-lg-6", "col-xs-12", "box"], [1, "content", "conHob"], [1, "txt", 2, "text-align", "center"], ["id", "hobbyMob", 1, "col-lg-6", "col-xs-12", "box"], ["id", "foot"], ["src", "assets/drop.png", "alt", "", "id", "mode", 3, "click"], ["src", "assets/droplight.png", "alt", "", "id", "mode", 3, "click"]], template: function CvComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Bio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Education & Training");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Scientific High School Degree ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "(85/100)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "b", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvComponent_Template_b_click_42_listener() { return ctx.animateEu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " European Project EU-MADE4LL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Formal participation in a joint syllabus including readings, workshops and assignments. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Production of a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Corporate Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " regarding the University of Rome Tor Vergata. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " 2015-2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "b", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvComponent_Template_b_click_53_listener() { return ctx.animateDeg(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Languages in the Information Society Degree");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 19);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Education & Training");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " 2010-2015");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Scientific High School Degree ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "(85/100)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "b", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvComponent_Template_b_click_78_listener() { return ctx.animateEu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " European Project EU-MADE4LL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Formal participation in a joint syllabus including readings, workshops and assignments. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Production of a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Corporate Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " regarding the University of Rome Tor Vergata. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " 2015-2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "b", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvComponent_Template_b_click_89_listener() { return ctx.animateDeg(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Languages in the Information Society");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p", 19);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Work Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 23);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Hobby");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "b", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvComponent_Template_b_click_136_listener() { return ctx.animateBk(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Basketball ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Balling since 2002. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " Football Manager ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Hobby");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "b", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvComponent_Template_b_click_146_listener() { return ctx.animateBk(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Basketball ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " Balling since 2002. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " Football Manager ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Designed by Paolo Nazzaro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["#head[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-top: 2%;\n}\n#nome[_ngcontent-%COMP%]{\n    font-size: 400%;\n    font-family: 'Eina-bold';\n}\n#nome[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    color: lightgrey;\n    transition-duration: 1s;\n}\n#mode[_ngcontent-%COMP%] {\n    width: 4vw;\n}\n#mode[_ngcontent-%COMP%]:hover{\n    opacity: 70%;\n    cursor: pointer;\n    transition-duration: 0.5s;\n    transform: rotate(180deg);\n}\n.box[_ngcontent-%COMP%] {\n    text-align: left;\n    padding-top: 2%;\n    padding-bottom: 2%;\n}\n.box[_ngcontent-%COMP%]:hover{\n    background-color: rgba(241, 242, 246, 0.8);\n    transition-duration: 0.5s;\n    color: black;\n}\nh2[_ngcontent-%COMP%]{\n    text-align: center;\n    font-size: 300%;\n    font-family: 'Eina-semibold';\n}\n.content[_ngcontent-%COMP%] {\n    font-family: 'SF-ultralight';\n    font-size: 110%;\n    \n}\nb[_ngcontent-%COMP%]{\n    font-family: 'SF-regular';\n}\n.underlineShort[_ngcontent-%COMP%]:after{\n    content: '';\n    width: 0px;\n    height: 1px;\n    display: block;\n    background: black;\n    transition: 300ms;\n}\n.underlineShort[_ngcontent-%COMP%]:hover:after {\n    width: 55%;\n  }\n.underline[_ngcontent-%COMP%]:after {\n    content: '';\n    width: 0px;\n    height: 1px;\n    display: block;\n    background: black;\n    transition: 300ms;\n}\n.underline[_ngcontent-%COMP%]:hover:after {\n    width: 75%;\n  }\n.txt[_ngcontent-%COMP%]{\n    height: 0px;\n    overflow: hidden;\n}\np[_ngcontent-%COMP%]{\n    font-size: 80%;\n}\n#foot[_ngcontent-%COMP%]{\n    padding-top: 4%;\n    display: flex;\n    justify-content: center;\n    font-family: 'SF-ultralight';\n    font-size: 110%;\n}\n@media (max-width: 992px){\n    #nome[_ngcontent-%COMP%]{\n        font-size: 260%;\n    }\n    #mode[_ngcontent-%COMP%]{\n        width: 8vw;\n    }\n    #back[_ngcontent-%COMP%]{\n        display: none;\n    }\n    h2[_ngcontent-%COMP%]{\n        font-size: 210%;\n    }\n    .content[_ngcontent-%COMP%] {\n        font-family: 'SF-ultralight';\n        text-align: left;\n        display: inline-block;\n    }\n    #edu[_ngcontent-%COMP%]{\n        display: none;\n    }\n    #hobbyWeb[_ngcontent-%COMP%]{\n        display: none;\n    }\n    .box[_ngcontent-%COMP%]{\n        text-align: left;\n    }\n    h2[_ngcontent-%COMP%]{\n        text-align: left;\n    }\n}\n@media (min-width: 993px){\n    #eduMob[_ngcontent-%COMP%] {\n    display: none;\n    }\n    #hobbyMob[_ngcontent-%COMP%]{\n        display: none;\n    }   \n    .conBio[_ngcontent-%COMP%]{\n        margin-left: 35%;\n    }\n    .conEdu[_ngcontent-%COMP%]{\n        margin-left: 10%;\n    }\n    .conWor[_ngcontent-%COMP%]{\n        margin-left: 15%;\n    }\n    .conHob[_ngcontent-%COMP%]{\n        margin-left: 40%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3YvY3YuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSwwQ0FBMEM7SUFDMUMseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLFdBQVc7SUFDWCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksVUFBVTtFQUNaO0FBRUY7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLFdBQVc7SUFDWCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksVUFBVTtFQUNaO0FBQ0Y7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIsZUFBZTtBQUNuQjtBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLDRCQUE0QjtRQUM1QixnQkFBZ0I7UUFDaEIscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKO0FBRUE7SUFDSTtJQUNBLGFBQWE7SUFDYjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jdi9jdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hlYWQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMiU7XG59XG4jbm9tZXtcbiAgICBmb250LXNpemU6IDQwMCU7XG4gICAgZm9udC1mYW1pbHk6ICdFaW5hLWJvbGQnO1xufVxuI25vbWU6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiBsaWdodGdyZXk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG59XG5cbiNtb2RlIHtcbiAgICB3aWR0aDogNHZ3O1xufVxuI21vZGU6aG92ZXJ7XG4gICAgb3BhY2l0eTogNzAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi5ib3gge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy10b3A6IDIlO1xuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcbn1cbi5ib3g6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0MiwgMjQ2LCAwLjgpO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuaDJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMzAwJTtcbiAgICBmb250LWZhbWlseTogJ0VpbmEtc2VtaWJvbGQnO1xufVxuLmNvbnRlbnQge1xuICAgIGZvbnQtZmFtaWx5OiAnU0YtdWx0cmFsaWdodCc7XG4gICAgZm9udC1zaXplOiAxMTAlO1xuICAgIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cbn1cbmJ7XG4gICAgZm9udC1mYW1pbHk6ICdTRi1yZWd1bGFyJztcbn1cbi51bmRlcmxpbmVTaG9ydDphZnRlcntcbiAgICBjb250ZW50OiAnJztcbiAgICB3aWR0aDogMHB4O1xuICAgIGhlaWdodDogMXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIHRyYW5zaXRpb246IDMwMG1zO1xufVxuLnVuZGVybGluZVNob3J0OmhvdmVyOmFmdGVyIHtcbiAgICB3aWR0aDogNTUlO1xuICB9XG5cbi51bmRlcmxpbmU6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHdpZHRoOiAwcHg7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgdHJhbnNpdGlvbjogMzAwbXM7XG59XG4udW5kZXJsaW5lOmhvdmVyOmFmdGVyIHtcbiAgICB3aWR0aDogNzUlO1xuICB9XG4udHh0e1xuICAgIGhlaWdodDogMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5we1xuICAgIGZvbnQtc2l6ZTogODAlO1xufVxuI2Zvb3R7XG4gICAgcGFkZGluZy10b3A6IDQlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdTRi11bHRyYWxpZ2h0JztcbiAgICBmb250LXNpemU6IDExMCU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCl7XG4gICAgI25vbWV7XG4gICAgICAgIGZvbnQtc2l6ZTogMjYwJTtcbiAgICB9XG4gICAgI21vZGV7XG4gICAgICAgIHdpZHRoOiA4dnc7XG4gICAgfVxuICAgICNiYWNre1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICBoMntcbiAgICAgICAgZm9udC1zaXplOiAyMTAlO1xuICAgIH1cbiAgICAuY29udGVudCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnU0YtdWx0cmFsaWdodCc7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG4gICAgI2VkdXtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgI2hvYmJ5V2Vie1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuYm94e1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgICBoMntcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTNweCl7XG4gICAgI2VkdU1vYiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgI2hvYmJ5TW9ie1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH0gICBcbiAgICAuY29uQmlve1xuICAgICAgICBtYXJnaW4tbGVmdDogMzUlO1xuICAgIH1cbiAgICAuY29uRWR1e1xuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIH1cbiAgICAuY29uV29ye1xuICAgICAgICBtYXJnaW4tbGVmdDogMTUlO1xuICAgIH1cbiAgICAuY29uSG9ie1xuICAgICAgICBtYXJnaW4tbGVmdDogNDAlO1xuICAgIH1cbn1cblxuXG4iXX0= */", ".sfondolight[_ngcontent-%COMP%] { background-color: white } \n    .sfondodark[_ngcontent-%COMP%] { background-color: #222f3e; color: whitesmoke; }\n    .visible[_ngcontent-%COMP%] { overflow: visible; transition-duration: 1s;}\n    .hidden[_ngcontent-%COMP%] { overflow: hidden; }"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('Web', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('small', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0px' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('short', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '30px' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('medium', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '80px' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('large', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '130px' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('small <=> short', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('small <=> medium', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('small <=> large', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('Mob', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('small', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0px' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('short', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '50px' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('medium', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '130px' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('large', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '225px' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('small <=> short', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('small <=> medium', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('small <=> large', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CvComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cv',
                templateUrl: './cv.component.html',
                styleUrls: ['./cv.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('Web', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('small', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0px' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('short', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '30px' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('medium', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '80px' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('large', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '130px' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('small <=> short', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('small <=> medium', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('small <=> large', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('Mob', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('small', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0px' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('short', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '50px' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('medium', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '130px' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('large', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '225px' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('small <=> short', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('small <=> medium', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('small <=> large', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')),
                    ]),
                ],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function HomeComponent_img_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_img_10_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.switchMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_img_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_img_11_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.switchMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor(x) {
        this.x = x;
        this.mode = false;
    }
    ngOnInit() {
    }
    switchMode() {
        this.mode = !this.mode;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 68, vars: 4, consts: [[1, "container-fluid", 3, "ngClass"], ["id", "head", 1, "row"], [1, "col-12"], [3, "ngClass"], [2, "color", "darkgrey"], [1, "row"], [1, "col-12", 2, "text-align", "center"], ["src", "assets/drop.png", "alt", "", "id", "mode", 3, "click", 4, "ngIf"], ["src", "assets/droplight.png", "alt", "", "id", "mode", 3, "click", 4, "ngIf"], ["id", "first", 1, "row", "riga"], [1, "col-lg-2"], ["id", "bio", "routerLink", "cv", 1, "col-lg-4", "col-xs-6", "single"], [1, "more"], ["routerLink", "cv", 1, "underline"], ["src", "assets/next.png", "alt", "", 2, "width", "1.5vw"], ["id", "work", "routerLink", "work", 1, "col-lg-4", "col-xs-6", "single"], ["id", "biomobile", 1, "boxmobile"], [2, "font-family", "Abraham"], [1, "moremobile"], ["id", "workmobile", 1, "boxmobile"], ["id", "second", 1, "row", "riga"], ["id", "hobby", 1, "col-lg-4", "col-xs-12", "single"], ["id", "projects", 1, "col-lg-4", "col-xs-12", "single"], ["routerLink", "torvergata", 1, "underline"], ["id", "about", 1, "col-lg-4", "col-xs-12", "single"], ["src", "assets/drop.png", "alt", "", "id", "mode", 3, "click"], ["src", "assets/droplight.png", "alt", "", "id", "mode", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n    \n}\n\n#head[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-top: 2%;\n    font-size: 300%;\n    font-family: 'Adam';\n    color: black;\n    padding-right: 0px;\n}\n\n#head[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    color: lightgrey;\n    transition-duration: 1s;\n}\n\n\n\n@media (max-width: 992px){\n    #head[_ngcontent-%COMP%]{\n        font-size: 250%;\n    }\n    #first[_ngcontent-%COMP%]{\n        display: none;\n    }\n    #first[_ngcontent-%COMP%]   .single[_ngcontent-%COMP%]{\n        height: 20vh;\n    }\n    #second[_ngcontent-%COMP%]   .single[_ngcontent-%COMP%]{\n        height: 20vh;\n    }\n    #rgb[_ngcontent-%COMP%]{\n        \n        width: 80%;\n    }\n    #work[_ngcontent-%COMP%] {\n        height: 20vh;\n    }\n    .col-lg-2[_ngcontent-%COMP%]{\n        display: none;\n    }\n    #mode[_ngcontent-%COMP%] {\n        width: 8vw;\n        margin-bottom: 1%;\n    }\n    .social[_ngcontent-%COMP%] {\n        width: 50vw;\n    }\n    .fondo[_ngcontent-%COMP%] {\n        padding-top: 30%;\n    }\n}\n\n\n\n@media (min-width: 992px){\n    .boxmobile[_ngcontent-%COMP%] {\n        display: none;\n    }\n\n}\n\n#mode[_ngcontent-%COMP%] {\n    width: 4vw;\n    margin-bottom: 2%;\n\n}\n\n#mode[_ngcontent-%COMP%]:hover{\n    opacity: 70%;\n    cursor: pointer;\n    transition-duration: 0.5s;\n    transform: rotate(180deg);\n}\n\n.riga[_ngcontent-%COMP%]{\n    text-align: center;\n    font-family: 'Abraham';\n    font-size: 200%;\n\n}\n\n#first[_ngcontent-%COMP%]{\n    height: 35vh;\n}\n\n#second[_ngcontent-%COMP%]{\n    height: 18vw;\n    margin-bottom: 2%;\n}\n\n.single[_ngcontent-%COMP%]{\n    padding-top: 1.5%;\n}\n\n.single[_ngcontent-%COMP%]:hover{\n    transition-duration: 0.7s;\n    cursor: pointer;\n}\n\n#bio[_ngcontent-%COMP%] {\n    border-right: 1px solid black;\n}\n\n#bio[_ngcontent-%COMP%]:hover{\n    background-color: black;\n    color: white;\n}\n\n.more[_ngcontent-%COMP%] {\n    font-family: 'SF-ultralight';\n    font-size: 60%;\n    display: none;\n    color: whitesmoke;\n    padding-top: 3%;\n}\n\n.single[_ngcontent-%COMP%]:hover   .more[_ngcontent-%COMP%]{\n    display: block;\n    transition-duration: 2s;\n}\n\n#work[_ngcontent-%COMP%]:hover{\n    background-color: #b2bec3;\n    color: white;\n}\n\n#hobby[_ngcontent-%COMP%]{\n    background-color: rgba(253,203,110, 0.1);\n}\n\n#hobby[_ngcontent-%COMP%]:hover{\n    background-color: #ff9f1a;\n    color: white;\n}\n\n#projects[_ngcontent-%COMP%]{\n    background-color: rgba(6,82,221, 0.05);\n}\n\n#projects[_ngcontent-%COMP%]:hover{\n    background-color: #0652DD;\n    color: white;\n}\n\n#about[_ngcontent-%COMP%]{\n    background-color: rgba(235,59,90, 0.1);\n}\n\n#about[_ngcontent-%COMP%]:hover{\n    background-color: #eb3b5a;\n    color: white;\n}\n\n#rgb[_ngcontent-%COMP%]{\n    width: 5vw;\n    margin-top: -2%;\n    padding-bottom: 2%;\n}\n\n#rgb[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    opacity: 50%;\n    transform: rotate(360deg);\n    transition-duration: 1s;  \n}\n\n#icone[_ngcontent-%COMP%]{\n    \n}\n\n.social[_ngcontent-%COMP%]{\n    width: 2vw;\n    \n}\n\n#footer[_ngcontent-%COMP%]{font-family: 'SF-ultralight'; display: flex; justify-content: center; margin-top: 2%;\n}\n\n.underline[_ngcontent-%COMP%]:after {\n    content: '';\n    width: 0px;\n    height: 1px;\n    display: block;\n    background: white;\n    transition: 300ms;\n\n}\n\n.underline[_ngcontent-%COMP%]:hover:after {\n    width: 75%;\n  }\n\n.moremobile[_ngcontent-%COMP%] {\n    font-family: 'SF-Ultralight';\n    font-size: 60%;\n    display: none;\n  }\n\n.boxmobile[_ngcontent-%COMP%] {\n    text-align: center; height: 20vh; padding-top: 1.5%; font-size: 200%;\n  }\n\n.boxmobile[_ngcontent-%COMP%]:hover{\n      color: white;\n      transition-duration: 1s;\n  }\n\n.boxmobile[_ngcontent-%COMP%]:hover   .moremobile[_ngcontent-%COMP%]{\n      display: block;\n      color: white;\n      transition-duration: 2s;\n  }\n\n#biomobile[_ngcontent-%COMP%]:hover{\n      background-color: black;\n  }\n\n#workmobile[_ngcontent-%COMP%]:hover {\n      background-color: #b2bec3;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUdBLFNBQVM7O0FBQUU7SUFDUDtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO0lBQ2Q7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFVBQVU7UUFDVixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUEsVUFBVTs7QUFBQztJQUNQO1FBQ0ksYUFBYTtJQUNqQjs7QUFFSjs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7O0FBRXJCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZix5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixlQUFlOztBQUVuQjs7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7O0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixjQUFjO0lBQ2QsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qix1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSTs4QkFDMEI7QUFDOUI7O0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBLFFBQVEsNEJBQTRCLEVBQUUsYUFBYSxFQUFFLHVCQUF1QixFQUFFLGNBQWM7QUFDNUY7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLFdBQVc7SUFDWCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSxVQUFVO0VBQ1o7O0FBRUE7SUFDRSw0QkFBNEI7SUFDNUIsY0FBYztJQUNkLGFBQWE7RUFDZjs7QUFFQTtJQUNFLGtCQUFrQixFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxlQUFlO0VBQ3RFOztBQUVBO01BQ0ksWUFBWTtNQUNaLHVCQUF1QjtFQUMzQjs7QUFFQTtNQUNJLGNBQWM7TUFDZCxZQUFZO01BQ1osdUJBQXVCO0VBQzNCOztBQUVBO01BQ0ksdUJBQXVCO0VBQzNCOztBQUNBO01BQ0kseUJBQXlCO0VBQzdCOztBQUNBO3dpRUFDc2lFIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcbiAgICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xufVxuXG4jaGVhZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAyJTtcbiAgICBmb250LXNpemU6IDMwMCU7XG4gICAgZm9udC1mYW1pbHk6ICdBZGFtJztcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuI2hlYWQ6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiBsaWdodGdyZXk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG59XG5cblxuLyptb2JpbGUqLyBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpe1xuICAgICNoZWFke1xuICAgICAgICBmb250LXNpemU6IDI1MCU7XG4gICAgfVxuICAgICNmaXJzdHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgI2ZpcnN0IC5zaW5nbGV7XG4gICAgICAgIGhlaWdodDogMjB2aDtcbiAgICB9XG4gICAgI3NlY29uZCAuc2luZ2xle1xuICAgICAgICBoZWlnaHQ6IDIwdmg7XG4gICAgfVxuICAgICNyZ2J7XG4gICAgICAgIC8qIGhlaWdodDogMjB2aDsgKi9cbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG4gICAgI3dvcmsge1xuICAgICAgICBoZWlnaHQ6IDIwdmg7XG4gICAgfVxuICAgIC5jb2wtbGctMntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgI21vZGUge1xuICAgICAgICB3aWR0aDogOHZ3O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxJTtcbiAgICB9XG4gICAgLnNvY2lhbCB7XG4gICAgICAgIHdpZHRoOiA1MHZ3O1xuICAgIH1cbiAgICAuZm9uZG8ge1xuICAgICAgICBwYWRkaW5nLXRvcDogMzAlO1xuICAgIH1cbn1cblxuLypkZXNrdG9wKi9AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpe1xuICAgIC5ib3htb2JpbGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxufVxuXG4jbW9kZSB7XG4gICAgd2lkdGg6IDR2dztcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcblxufVxuI21vZGU6aG92ZXJ7XG4gICAgb3BhY2l0eTogNzAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi5yaWdhe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ0FicmFoYW0nO1xuICAgIGZvbnQtc2l6ZTogMjAwJTtcblxufVxuI2ZpcnN0e1xuICAgIGhlaWdodDogMzV2aDtcbn1cbiNzZWNvbmR7XG4gICAgaGVpZ2h0OiAxOHZ3O1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xufVxuLnNpbmdsZXtcbiAgICBwYWRkaW5nLXRvcDogMS41JTtcbn1cbi5zaW5nbGU6aG92ZXJ7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC43cztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jYmlvIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbn1cbiNiaW86aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLm1vcmUge1xuICAgIGZvbnQtZmFtaWx5OiAnU0YtdWx0cmFsaWdodCc7XG4gICAgZm9udC1zaXplOiA2MCU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICBwYWRkaW5nLXRvcDogMyU7XG59XG5cbi5zaW5nbGU6aG92ZXIgIC5tb3Jle1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDJzO1xufVxuI3dvcms6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IyYmVjMztcbiAgICBjb2xvcjogd2hpdGU7XG59XG4jaG9iYnl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTMsMjAzLDExMCwgMC4xKTtcbn1cbiNob2JieTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ZjFhO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiNwcm9qZWN0c3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYsODIsMjIxLCAwLjA1KTtcbn1cbiNwcm9qZWN0czpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY1MkREO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiNhYm91dHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNSw1OSw5MCwgMC4xKTtcbn1cbiNhYm91dDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWIzYjVhO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuI3JnYntcbiAgICB3aWR0aDogNXZ3O1xuICAgIG1hcmdpbi10b3A6IC0yJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XG59XG4jcmdiOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvcGFjaXR5OiA1MCU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxczsgIFxufVxuI2ljb25le1xuICAgIC8qIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG59XG4uc29jaWFse1xuICAgIHdpZHRoOiAydnc7XG4gICAgLyogaGVpZ2h0OiAyMHZoOyAqL1xufVxuXG4jZm9vdGVye2ZvbnQtZmFtaWx5OiAnU0YtdWx0cmFsaWdodCc7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBtYXJnaW4tdG9wOiAyJTtcbn1cblxuLnVuZGVybGluZTphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgd2lkdGg6IDBweDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiAzMDBtcztcblxufVxuICBcbi51bmRlcmxpbmU6aG92ZXI6YWZ0ZXIge1xuICAgIHdpZHRoOiA3NSU7XG4gIH1cblxuICAubW9yZW1vYmlsZSB7XG4gICAgZm9udC1mYW1pbHk6ICdTRi1VbHRyYWxpZ2h0JztcbiAgICBmb250LXNpemU6IDYwJTtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmJveG1vYmlsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBoZWlnaHQ6IDIwdmg7IHBhZGRpbmctdG9wOiAxLjUlOyBmb250LXNpemU6IDIwMCU7XG4gIH1cblxuICAuYm94bW9iaWxlOmhvdmVye1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG4gIH1cblxuICAuYm94bW9iaWxlOmhvdmVyIC5tb3JlbW9iaWxle1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAycztcbiAgfVxuXG4gICNiaW9tb2JpbGU6aG92ZXJ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgfVxuICAjd29ya21vYmlsZTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiZWMzO1xuICB9XG4gIC8qIC50ZXh0LWZsaWNrZXItaW4tZ2xvd3thbmltYXRpb246dGV4dC1mbGlja2VyLWluLWdsb3cgNHMgbGluZWFyIGJvdGh9XG4gIEBrZXlmcmFtZXMgdGV4dC1mbGlja2VyLWluLWdsb3d7MCV7b3BhY2l0eTowfTEwJXtvcGFjaXR5OjA7dGV4dC1zaGFkb3c6bm9uZX0xMC4xJXtvcGFjaXR5OjE7dGV4dC1zaGFkb3c6bm9uZX0xMC4yJXtvcGFjaXR5OjA7dGV4dC1zaGFkb3c6bm9uZX0yMCV7b3BhY2l0eTowO3RleHQtc2hhZG93Om5vbmV9MjAuMSV7b3BhY2l0eToxO3RleHQtc2hhZG93OjAgMCAzMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjI1KX0yMC42JXtvcGFjaXR5OjA7dGV4dC1zaGFkb3c6bm9uZX0zMCV7b3BhY2l0eTowO3RleHQtc2hhZG93Om5vbmV9MzAuMSV7b3BhY2l0eToxO3RleHQtc2hhZG93OjAgMCAzMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjQ1KSwwIDAgNjBweCByZ2JhKDI1NSwyNTUsMjU1LC4yNSl9MzAuNSV7b3BhY2l0eToxO3RleHQtc2hhZG93OjAgMCAzMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjQ1KSwwIDAgNjBweCByZ2JhKDI1NSwyNTUsMjU1LC4yNSl9MzAuNiV7b3BhY2l0eTowO3RleHQtc2hhZG93Om5vbmV9NDUle29wYWNpdHk6MDt0ZXh0LXNoYWRvdzpub25lfTQ1LjEle29wYWNpdHk6MTt0ZXh0LXNoYWRvdzowIDAgMzBweCByZ2JhKDI1NSwyNTUsMjU1LC40NSksMCAwIDYwcHggcmdiYSgyNTUsMjU1LDI1NSwuMjUpfTUwJXtvcGFjaXR5OjE7dGV4dC1zaGFkb3c6MCAwIDMwcHggcmdiYSgyNTUsMjU1LDI1NSwuNDUpLDAgMCA2MHB4IHJnYmEoMjU1LDI1NSwyNTUsLjI1KX01NSV7b3BhY2l0eToxO3RleHQtc2hhZG93OjAgMCAzMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjQ1KSwwIDAgNjBweCByZ2JhKDI1NSwyNTUsMjU1LC4yNSl9NTUuMSV7b3BhY2l0eTowO3RleHQtc2hhZG93Om5vbmV9NTcle29wYWNpdHk6MDt0ZXh0LXNoYWRvdzpub25lfTU3LjEle29wYWNpdHk6MTt0ZXh0LXNoYWRvdzowIDAgMzBweCByZ2JhKDI1NSwyNTUsMjU1LC41NSksMCAwIDYwcHggcmdiYSgyNTUsMjU1LDI1NSwuMzUpfTYwJXtvcGFjaXR5OjE7dGV4dC1zaGFkb3c6MCAwIDMwcHggcmdiYSgyNTUsMjU1LDI1NSwuNTUpLDAgMCA2MHB4IHJnYmEoMjU1LDI1NSwyNTUsLjM1KX02MC4xJXtvcGFjaXR5OjA7dGV4dC1zaGFkb3c6bm9uZX02NSV7b3BhY2l0eTowO3RleHQtc2hhZG93Om5vbmV9NjUuMSV7b3BhY2l0eToxO3RleHQtc2hhZG93OjAgMCAzMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjU1KSwwIDAgNjBweCByZ2JhKDI1NSwyNTUsMjU1LC4zNSksMCAwIDEwMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjEpfTc1JXtvcGFjaXR5OjE7dGV4dC1zaGFkb3c6MCAwIDMwcHggcmdiYSgyNTUsMjU1LDI1NSwuNTUpLDAgMCA2MHB4IHJnYmEoMjU1LDI1NSwyNTUsLjM1KSwwIDAgMTAwcHggcmdiYSgyNTUsMjU1LDI1NSwuMSl9NzUuMSV7b3BhY2l0eTowO3RleHQtc2hhZG93Om5vbmV9Nzcle29wYWNpdHk6MDt0ZXh0LXNoYWRvdzpub25lfTc3LjEle29wYWNpdHk6MTt0ZXh0LXNoYWRvdzowIDAgMzBweCByZ2JhKDI1NSwyNTUsMjU1LC41NSksMCAwIDYwcHggcmdiYSgyNTUsMjU1LDI1NSwuNCksMCAwIDExMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjIpLDAgMCAxMDBweCByZ2JhKDI1NSwyNTUsMjU1LC4xKX04NSV7b3BhY2l0eToxO3RleHQtc2hhZG93OjAgMCAzMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjU1KSwwIDAgNjBweCByZ2JhKDI1NSwyNTUsMjU1LC40KSwwIDAgMTEwcHggcmdiYSgyNTUsMjU1LDI1NSwuMiksMCAwIDEwMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjEpfTg1LjEle29wYWNpdHk6MDt0ZXh0LXNoYWRvdzpub25lfTg2JXtvcGFjaXR5OjA7dGV4dC1zaGFkb3c6bm9uZX04Ni4xJXtvcGFjaXR5OjE7dGV4dC1zaGFkb3c6MCAwIDMwcHggcmdiYSgyNTUsMjU1LDI1NSwuNiksMCAwIDYwcHggcmdiYSgyNTUsMjU1LDI1NSwuNDUpLDAgMCAxMTBweCByZ2JhKDI1NSwyNTUsMjU1LC4yNSksMCAwIDEwMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjEpfTEwMCV7b3BhY2l0eToxO3RleHQtc2hhZG93OjAgMCAzMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjYpLDAgMCA2MHB4IHJnYmEoMjU1LDI1NSwyNTUsLjQ1KSwwIDAgMTEwcHggcmdiYSgyNTUsMjU1LDI1NSwuMjUpLDAgMCAxMDBweCByZ2JhKDI1NSwyNTUsMjU1LC4xKX19ICovXG4iXX0= */", ".sfondolight[_ngcontent-%COMP%] { background-color: white }\n  \n    .sfondodark[_ngcontent-%COMP%] { background-color: #222f3e !important; color: whitesmoke !important; }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




function HomepageComponent_img_10_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_img_10_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.switchMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomepageComponent_img_11_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_img_11_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.switchMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomepageComponent {
    constructor() {
        this.mode = false;
    }
    ngOnInit() {
    }
    switchMode() {
        this.mode = !this.mode;
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 46, vars: 4, consts: [[1, "container-fluid", 3, "ngClass"], ["id", "head", 1, "row"], [1, "col-12"], ["id", "nome", 3, "ngClass"], [2, "color", "darkgrey"], [1, "row"], [1, "col-lg-12", "col-xs-12", 2, "text-align", "center"], ["src", "assets/drop.png", "alt", "", "id", "mode", 3, "click", 4, "ngIf"], ["src", "assets/droplight.png", "alt", "", "id", "mode", 3, "click", 4, "ngIf"], ["id", "square", 1, "row"], ["id", "bio", "routerLink", "cv", 1, "col-lg-6", "col-xs-12", "voice"], [1, "title"], ["routerLink", "cv", 1, "underline"], ["src", "assets/next.png", "alt", "", 1, "arrow"], ["id", "work", "routerLink", "work", 1, "col-lg-6", "col-xs-12", "voice"], ["id", "projects", 1, "col-lg-6", "col-xs-12", "voice"], ["routerLink", "torvergata", 1, "underline"], ["id", "about", 1, "col-lg-6", "col-xs-12", "voice"], [2, "display", "flex", "justify-content", "center", "margin-top", "3%"], ["src", "assets/rgb.png", "alt", "", "id", "rgb", "routerLink", "colors"], ["id", "foot"], ["src", "assets/drop.png", "alt", "", "id", "mode", 3, "click"], ["src", "assets/droplight.png", "alt", "", "id", "mode", 3, "click"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Bio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " 22 / 10 / 1996 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Rome ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Curriculum Vitae ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Frontend Developer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Teaching Assistant ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Tor Vergata 4 Foreigners ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "paolonazzaro23@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Designed by Paolo Nazzaro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["#pn[_ngcontent-%COMP%] {\n    font-family: 'SF-bold';\n    font-size: 400%;\n    letter-spacing: 2px;\n}\n\n#menu[_ngcontent-%COMP%] {\n    font-family: 'SF-regular';\n    font-size: 250%;\n    \n    text-align: center;\n    height: 50vh;\n}\n\n.voce[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\n.voce[_ngcontent-%COMP%]:hover{\n    background-color: #b2bec3;\n    transition-duration: 1s;\n}\n\n.underline[_ngcontent-%COMP%]:after {\n    content: '';\n    width: 0px;\n    height: 1px;\n    display: block;\n    background: white;\n    transition: 300ms;\n\n}\n\n.underline[_ngcontent-%COMP%]:hover:after {\n    width: 75%;\n  }\n\np[_ngcontent-%COMP%]{\n    font-family: 'SF-ultralight';\n    font-size: 50%;\n}\n\n\n\n#head[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-top: 2%;\n}\n\n#nome[_ngcontent-%COMP%]{\n    font-size: 400%;\n    font-family: 'Eina-bold';\n}\n\n#nome[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    color: lightgrey;\n    transition-duration: 1s;\n}\n\n#mode[_ngcontent-%COMP%] {\n    width: 4vw;\n}\n\n#mode[_ngcontent-%COMP%]:hover{\n    opacity: 70%;\n    cursor: pointer;\n    transition-duration: 0.5s;\n    transform: rotate(180deg);\n}\n\n#square[_ngcontent-%COMP%] {\n    text-align: center;\n    font-family: 'Eina-bold';\n    font-size: 300%;\n    padding-top: 5%;\n    height: 100%;\n}\n\n.voice[_ngcontent-%COMP%]{\n    cursor: pointer;\n    height: 30vh;\n}\n\n.voice[_ngcontent-%COMP%]:hover{\n    transition-duration: 1s;\n}\n\n#bio[_ngcontent-%COMP%]{\n    background-color: rgba(189, 195, 199, 0.1);\n}\n\n#bio[_ngcontent-%COMP%]:hover{\n    background-color: black;\n    color: white;\n}\n\n#work[_ngcontent-%COMP%]{\n    \n    background-color: rgba(11, 232, 129, 0.05);    \n}\n\n#work[_ngcontent-%COMP%]:hover{\n    background-color: rgb(11, 232, 129);\n    color: white;\n}\n\n#projects[_ngcontent-%COMP%] {\n    \n    background-color: rgba(6,82,221, 0.05);\n}\n\n#projects[_ngcontent-%COMP%]:hover{\n    background-color: rgb(6,82,221);\n    color: white;\n}\n\n#about[_ngcontent-%COMP%]{\n    \n    background-color: rgba(235,59,90, 0.1);\n}\n\n#about[_ngcontent-%COMP%]:hover{\n    background-color: rgb(235,59,90);\n    color: white;\n}\n\n.arrow[_ngcontent-%COMP%] {\n    width: 1.5vw;\n}\n\n#rgb[_ngcontent-%COMP%]{\n    width: 4vw;\n}\n\n#rgb[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    opacity: 50%;\n    transform: rotate(360deg);\n    transition-duration: 1s; \n}\n\n#foot[_ngcontent-%COMP%]{\n    padding-top: 4%;\n    display: flex;\n    justify-content: center;\n    font-family: 'SF-ultralight';\n    font-size: 110%;\n}\n\n\n\n@media (max-width: 992px){\n    #nome[_ngcontent-%COMP%]{\n        font-size: 260%;\n    }\n    #mode[_ngcontent-%COMP%]{\n        width: 8vw;\n    }\n    .title[_ngcontent-%COMP%]{\n        font-size: 80%;\n    }\n    .voice[_ngcontent-%COMP%]{\n        height: 35vh;\n    }\n    .arrow[_ngcontent-%COMP%]{\n        width: 4vw;\n    }\n    #rgb[_ngcontent-%COMP%]{\n        width: 8vw;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLFdBQVc7SUFDWCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSxVQUFVO0VBQ1o7O0FBR0Y7SUFDSSw0QkFBNEI7SUFDNUIsY0FBYztBQUNsQjs7QUFFQSxLQUFLOztBQUVMO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysd0JBQXdCO0FBQzVCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksMENBQTBDO0FBQzlDOztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnREFBZ0Q7SUFDaEQsMENBQTBDO0FBQzlDOztBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnREFBZ0Q7SUFDaEQsc0NBQXNDO0FBQzFDOztBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsc0NBQXNDO0FBQzFDOztBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLGVBQWU7QUFDbkI7O0FBRUEsU0FBUzs7QUFBRTtJQUNQO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuI3BuIHtcbiAgICBmb250LWZhbWlseTogJ1NGLWJvbGQnO1xuICAgIGZvbnQtc2l6ZTogNDAwJTtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG4jbWVudSB7XG4gICAgZm9udC1mYW1pbHk6ICdTRi1yZWd1bGFyJztcbiAgICBmb250LXNpemU6IDI1MCU7XG4gICAgLyogbGV0dGVyLXNwYWNpbmc6IDJweDsgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA1MHZoO1xufVxuXG4udm9jZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnZvY2U6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IyYmVjMztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcbn1cblxuLnVuZGVybGluZTphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgd2lkdGg6IDBweDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiAzMDBtcztcblxufVxuICBcbi51bmRlcmxpbmU6aG92ZXI6YWZ0ZXIge1xuICAgIHdpZHRoOiA3NSU7XG4gIH1cblxuXG5we1xuICAgIGZvbnQtZmFtaWx5OiAnU0YtdWx0cmFsaWdodCc7XG4gICAgZm9udC1zaXplOiA1MCU7XG59XG5cbi8qICAqL1xuXG4jaGVhZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAyJTtcbn1cbiNub21le1xuICAgIGZvbnQtc2l6ZTogNDAwJTtcbiAgICBmb250LWZhbWlseTogJ0VpbmEtYm9sZCc7XG59XG4jbm9tZTpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IGxpZ2h0Z3JleTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcbn1cblxuI21vZGUge1xuICAgIHdpZHRoOiA0dnc7XG59XG4jbW9kZTpob3ZlcntcbiAgICBvcGFjaXR5OiA3MCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuI3NxdWFyZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnRWluYS1ib2xkJztcbiAgICBmb250LXNpemU6IDMwMCU7XG4gICAgcGFkZGluZy10b3A6IDUlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi52b2ljZXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiAzMHZoO1xufVxuXG4udm9pY2U6aG92ZXJ7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG59XG5cbiNiaW97XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODksIDE5NSwgMTk5LCAwLjEpO1xufVxuI2Jpbzpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiN3b3Jre1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg5LCAxOTUsIDE5OSwgMC4xKTsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExLCAyMzIsIDEyOSwgMC4wNSk7ICAgIFxufVxuI3dvcms6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExLCAyMzIsIDEyOSk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4jcHJvamVjdHMge1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg5LCAxOTUsIDE5OSwgMC4zKTsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYsODIsMjIxLCAwLjA1KTtcbn1cbiNwcm9qZWN0czpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNiw4MiwyMjEpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2Fib3V0e1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzUsNTksOTAsIDAuMSk7XG59XG4jYWJvdXQ6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSw1OSw5MCk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uYXJyb3cge1xuICAgIHdpZHRoOiAxLjV2dztcbn1cblxuI3JnYntcbiAgICB3aWR0aDogNHZ3O1xufVxuI3JnYjpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogNTAlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7IFxufVxuXG4jZm9vdHtcbiAgICBwYWRkaW5nLXRvcDogNCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ1NGLXVsdHJhbGlnaHQnO1xuICAgIGZvbnQtc2l6ZTogMTEwJTtcbn1cblxuLyptb2JpbGUqLyBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpe1xuICAgICNub21le1xuICAgICAgICBmb250LXNpemU6IDI2MCU7XG4gICAgfVxuICAgICNtb2Rle1xuICAgICAgICB3aWR0aDogOHZ3O1xuICAgIH1cbiAgICAudGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogODAlO1xuICAgIH1cbiAgICAudm9pY2V7XG4gICAgICAgIGhlaWdodDogMzV2aDtcbiAgICB9XG4gICAgLmFycm93e1xuICAgICAgICB3aWR0aDogNHZ3O1xuICAgIH1cbiAgICAjcmdie1xuICAgICAgICB3aWR0aDogOHZ3O1xuICAgIH1cbn0iXX0= */", ".sfondolight[_ngcontent-%COMP%] { background-color: white }\n  \n    .sfondodark[_ngcontent-%COMP%] { background-color: #222f3e !important; color: whitesmoke !important; }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/torvergata/torvergata.component.ts":
/*!****************************************************!*\
  !*** ./src/app/torvergata/torvergata.component.ts ***!
  \****************************************************/
/*! exports provided: TorvergataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TorvergataComponent", function() { return TorvergataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




function TorvergataComponent_img_14_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TorvergataComponent_img_14_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.switchMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TorvergataComponent_img_15_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TorvergataComponent_img_15_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.switchMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TorvergataComponent {
    constructor() {
        this.mode = false;
    }
    ngOnInit() {
    }
    switchMode() {
        this.mode = !this.mode;
    }
}
TorvergataComponent.ɵfac = function TorvergataComponent_Factory(t) { return new (t || TorvergataComponent)(); };
TorvergataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TorvergataComponent, selectors: [["app-torvergata"]], decls: 79, vars: 4, consts: [[1, "container-fluid", 3, "ngClass"], ["id", "head", 1, "row"], [1, "col-12"], ["routerLink", "", "id", "nome", 3, "ngClass"], [2, "color", "darkgrey"], [1, "row"], ["routerLink", "", "id", "back", 1, "col-3", 2, "cursor", "pointer"], [1, "underlineShort"], ["src", "assets/back.png", "alt", "", 2, "width", "1.7vw"], [1, "col-lg-6", "col-xs-12", 2, "text-align", "center"], ["src", "assets/drop.png", "alt", "", "id", "mode", 3, "click", 4, "ngIf"], ["src", "assets/droplight.png", "alt", "", "id", "mode", 3, "click", 4, "ngIf"], ["id", "templateWeb", 1, "row", 2, "margin-top", "3%", "text-align", "center"], [1, "col-lg-6", "col-xs-12"], ["src", "./assets/iphone.png", "id", "iphone", "alt", ""], [1, "col-lg-6", "col-xs-12", 2, "margin-top", "5%"], ["id", "torvergata"], ["id", "text"], ["id", "templateMobile", 1, "row", 2, "margin-top", "3%", "text-align", "center"], [1, "col-12", "features"], ["id", "footer"], ["src", "assets/drop.png", "alt", "", "id", "mode", 3, "click"], ["src", "assets/droplight.png", "alt", "", "id", "mode", 3, "click"]], template: function TorvergataComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Tor Vergata 4 Foreigners");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Ionic");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "iOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " + ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Android");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "JWT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Authentication");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h1", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Tor Vergata 4 Foreigners");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Ionic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " + ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " app ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "JWT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Authentication ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " + ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " + ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Camera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " File Uploading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Designed by Paolo Nazzaro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["#head[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-top: 2%;\n}\n#nome[_ngcontent-%COMP%]{\n    font-size: 400%;\n    font-family: 'Eina-bold';\n}\n#nome[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    color: lightgrey;\n    transition-duration: 1s;\n}\n#mode[_ngcontent-%COMP%] {\n    width: 4vw;\n}\n#mode[_ngcontent-%COMP%]:hover{\n    opacity: 70%;\n    cursor: pointer;\n    transition-duration: 0.5s;\n    transform: rotate(180deg);\n}\n#iphone[_ngcontent-%COMP%] {\n    width: 20vw;\n}\n#torvergata[_ngcontent-%COMP%] {\n    font-family: 'Eina-bold';\n\n}\n#text[_ngcontent-%COMP%] {\n    font-family: 'Eina-light';\n}\nb[_ngcontent-%COMP%]{\n    font-family: 'Eina-regular';\n}\n#footer[_ngcontent-%COMP%]{font-family: 'SF-ultralight'; display: flex; justify-content: center; margin-top: 2%;}\n.features[_ngcontent-%COMP%]{\n    font-family: 'Eina-regular';\n    text-align: center;\n}\n@media (max-width: 992px){\n    #nome[_ngcontent-%COMP%]{\n        font-size: 260%;\n    }\n    #back[_ngcontent-%COMP%]{\n        display: none;\n    }\n    #rgb[_ngcontent-%COMP%]{\n        \n        width: 20vw;\n    }\n    #iphone[_ngcontent-%COMP%]{\n        width: 50vw;\n        padding-top: 5%;\n        padding-bottom: 5%;\n    }\n    #mode[_ngcontent-%COMP%]{\n        width: 8vw;\n    }\n    #torvergata[_ngcontent-%COMP%]{\n        font-size: 150%;\n        text-align: center;\n        padding-top: 3%;\n    }\n    #templateWeb[_ngcontent-%COMP%]{\n        display: none;\n    }\n}\n.underlineShort[_ngcontent-%COMP%]:after{\n    content: '';\n    width: 0px;\n    height: 1px;\n    display: block;\n    background: black;\n    transition: 300ms;\n}\n.underlineShort[_ngcontent-%COMP%]:hover:after {\n    width: 55%;\n  }\n@media (min-width: 992px){\n      #templateMobile[_ngcontent-%COMP%]{\n          display: none;\n      }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9ydmVyZ2F0YS90b3J2ZXJnYXRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZix5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCO0FBR0E7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLHdCQUF3Qjs7QUFFNUI7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBRUEsUUFBUSw0QkFBNEIsRUFBRSxhQUFhLEVBQUUsdUJBQXVCLEVBQUUsY0FBYyxDQUFDO0FBRTdGO0lBQ0ksMkJBQTJCO0lBQzNCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsV0FBVztJQUNmO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsZUFBZTtRQUNmLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGFBQWE7SUFDakI7QUFDSjtBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixXQUFXO0lBQ1gsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFVBQVU7RUFDWjtBQUNBO01BQ0k7VUFDSSxhQUFhO01BQ2pCO0VBQ0oiLCJmaWxlIjoic3JjL2FwcC90b3J2ZXJnYXRhL3RvcnZlcmdhdGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNoZWFkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDIlO1xufVxuI25vbWV7XG4gICAgZm9udC1zaXplOiA0MDAlO1xuICAgIGZvbnQtZmFtaWx5OiAnRWluYS1ib2xkJztcbn1cbiNub21lOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogbGlnaHRncmV5O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xufVxuXG4jbW9kZSB7XG4gICAgd2lkdGg6IDR2dztcbn1cbiNtb2RlOmhvdmVye1xuICAgIG9wYWNpdHk6IDcwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG5cbiNpcGhvbmUge1xuICAgIHdpZHRoOiAyMHZ3O1xufVxuXG4jdG9ydmVyZ2F0YSB7XG4gICAgZm9udC1mYW1pbHk6ICdFaW5hLWJvbGQnO1xuXG59XG5cbiN0ZXh0IHtcbiAgICBmb250LWZhbWlseTogJ0VpbmEtbGlnaHQnO1xufVxuYntcbiAgICBmb250LWZhbWlseTogJ0VpbmEtcmVndWxhcic7XG59XG5cbiNmb290ZXJ7Zm9udC1mYW1pbHk6ICdTRi11bHRyYWxpZ2h0JzsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IG1hcmdpbi10b3A6IDIlO31cblxuLmZlYXR1cmVze1xuICAgIGZvbnQtZmFtaWx5OiAnRWluYS1yZWd1bGFyJztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCl7XG4gICAgI25vbWV7XG4gICAgICAgIGZvbnQtc2l6ZTogMjYwJTtcbiAgICB9XG4gICAgI2JhY2t7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgICNyZ2J7XG4gICAgICAgIC8qIGhlaWdodDogNXZoOyAqL1xuICAgICAgICB3aWR0aDogMjB2dztcbiAgICB9XG4gICAgI2lwaG9uZXtcbiAgICAgICAgd2lkdGg6IDUwdnc7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUlO1xuICAgIH1cbiAgICAjbW9kZXtcbiAgICAgICAgd2lkdGg6IDh2dztcbiAgICB9XG4gICAgI3RvcnZlcmdhdGF7XG4gICAgICAgIGZvbnQtc2l6ZTogMTUwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLXRvcDogMyU7XG4gICAgfVxuICAgICN0ZW1wbGF0ZVdlYntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbi51bmRlcmxpbmVTaG9ydDphZnRlcntcbiAgICBjb250ZW50OiAnJztcbiAgICB3aWR0aDogMHB4O1xuICAgIGhlaWdodDogMXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIHRyYW5zaXRpb246IDMwMG1zO1xufVxuLnVuZGVybGluZVNob3J0OmhvdmVyOmFmdGVyIHtcbiAgICB3aWR0aDogNTUlO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCl7XG4gICAgICAjdGVtcGxhdGVNb2JpbGV7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgfVxuXG4iXX0= */", ".sfondolight[_ngcontent-%COMP%] { background-color: white }\n  \n    .sfondodark[_ngcontent-%COMP%] { background-color: #222f3e !important; color: whitesmoke !important; }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TorvergataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-torvergata',
                templateUrl: './torvergata.component.html',
                styleUrls: ['./torvergata.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/work/work.component.ts":
/*!****************************************!*\
  !*** ./src/app/work/work.component.ts ***!
  \****************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




function WorkComponent_img_14_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkComponent_img_14_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.switchMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WorkComponent_img_15_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkComponent_img_15_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.switchMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class WorkComponent {
    constructor() {
        this.mode = false;
    }
    ngOnInit() {
    }
    switchMode() {
        this.mode = !this.mode;
    }
}
WorkComponent.ɵfac = function WorkComponent_Factory(t) { return new (t || WorkComponent)(); };
WorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkComponent, selectors: [["app-work"]], decls: 68, vars: 4, consts: [[1, "container-fluid", 3, "ngClass"], ["id", "head", 1, "row"], [1, "col-12"], ["routerLink", "", "id", "nome", 3, "ngClass"], [2, "color", "darkgrey"], [1, "row"], ["routerLink", "", "id", "back", 1, "col-3", 2, "cursor", "pointer"], [1, "underlineShort"], ["src", "assets/back.png", "alt", "", 2, "width", "1.7vw"], [1, "col-lg-6", "col-xs-12", 2, "text-align", "center"], ["src", "assets/drop.png", "alt", "", "id", "mode", 3, "click", 4, "ngIf"], ["src", "assets/droplight.png", "alt", "", "id", "mode", 3, "click", 4, "ngIf"], [1, "row", "sezione", 2, "margin-top", "5%", "padding-bottom", "5%"], [1, "col-lg-6", "col-xs-12", 2, "display", "flex", "justify-content", "center"], [1, "title"], [1, "titleMob"], [1, "text"], ["id", "linea", 1, "col-12"], ["id", "teachingweb", 1, "row", "sezione", 2, "padding-top", "3%"], ["href", "http://gixpix.github.io/"], ["id", "teachingmobile", 1, "row", "sezione", 2, "padding-top", "5%"], ["id", "foot"], ["src", "assets/drop.png", "alt", "", "id", "mode", 3, "click"], ["src", "assets/droplight.png", "alt", "", "id", "mode", 3, "click"]], template: function WorkComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Frontend Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Collaborating with Trevize s.r.l ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, ": HTML, CSS, Angular, NativeScript, Ionic ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Prof. Giorgio Piccardo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "'s teaching assistant ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Tor Vergata ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "University ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Teaching ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Assistant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Teaching Assistant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 19);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Designed by Paolo Nazzaro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n    height: 100vh;\n}\n\n#head[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-top: 2%;\n}\n\n#nome[_ngcontent-%COMP%]{\n    font-size: 400%;\n    font-family: 'Eina-bold';\n}\n\n#nome[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    color: lightgrey;\n    transition-duration: 1s;\n}\n\n#mode[_ngcontent-%COMP%] {\n    width: 4vw;\n}\n\n#mode[_ngcontent-%COMP%]:hover{\n    opacity: 70%;\n    cursor: pointer;\n    transition-duration: 0.5s;\n    transform: rotate(180deg);\n}\n\n.title[_ngcontent-%COMP%] {\n    font-family: 'Eina-bold';\n    font-size: 350%;\n}\n\n.titleMob[_ngcontent-%COMP%]{\n    font-family: 'Eina-semibold';\n    font-size: 200%;\n}\n\n.text[_ngcontent-%COMP%]{\n    text-align: left;\n    padding-top: 8%; \n    font-family: 'SF-regular';   \n    font-size: 120%;\n    letter-spacing: 1px;\n}\n\n#foot[_ngcontent-%COMP%]{\n    padding-top: 4%;\n    display: flex;\n    justify-content: center;\n    font-family: 'SF-ultralight';\n    font-size: 110%;\n}\n\n\n\n@media (max-width: 992px){\n    #nome[_ngcontent-%COMP%]{\n        font-size: 260%;\n    }\n    #mode[_ngcontent-%COMP%] {\n        width: 8vw;\n        margin-bottom: 1%;\n    }\n    #back[_ngcontent-%COMP%]{\n        display: none;\n    }\n    .title[_ngcontent-%COMP%]{\n        display: none;\n    }\n    #teachingweb[_ngcontent-%COMP%]{\n        display: none;\n    }\n    .text[_ngcontent-%COMP%]{\n        text-align: center;\n        font-size: 100%;\n    }\n}\n\n.sezione[_ngcontent-%COMP%]{\n    padding-bottom: 2%;\n}\n\n.sezione[_ngcontent-%COMP%]:hover{\n    background-color: rgba(241, 242, 246, 0.6);\n    transition-duration: 1s;\n    color: black;\n}\n\n#linea[_ngcontent-%COMP%] {\n    height: 1px;\n    background-color: black;\n}\n\n.underlineShort[_ngcontent-%COMP%]:after{\n    content: '';\n    width: 0px;\n    height: 1px;\n    display: block;\n    background: black;\n    transition: 300ms;\n}\n\n.underlineShort[_ngcontent-%COMP%]:hover:after {\n    width: 55%;\n  }\n\na[_ngcontent-%COMP%]{\n      color: inherit;\n  }\n\na[_ngcontent-%COMP%]:hover{\n      text-decoration: none;\n  }\n\n@media (min-width: 993px){\n      #teachingmobile[_ngcontent-%COMP%]{\n          display: none;\n      }\n      .titleMob[_ngcontent-%COMP%]{\n          display: none;\n      }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay93b3JrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysd0JBQXdCO0FBQzVCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixlQUFlO0FBQ25COztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1QixlQUFlO0FBQ25COztBQUdBLFNBQVM7O0FBQUU7SUFDUDtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFVBQVU7UUFDVixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixlQUFlO0lBQ25CO0FBQ0o7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSwwQ0FBMEM7SUFDMUMsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBS0E7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixXQUFXO0lBQ1gsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxVQUFVO0VBQ1o7O0FBRUE7TUFDSSxjQUFjO0VBQ2xCOztBQUNBO01BQ0kscUJBQXFCO0VBQ3pCOztBQUVBO01BQ0k7VUFDSSxhQUFhO01BQ2pCO01BQ0E7VUFDSSxhQUFhO01BQ2pCO0VBQ0oiLCJmaWxlIjoic3JjL2FwcC93b3JrL3dvcmsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbiNoZWFkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDIlO1xufVxuI25vbWV7XG4gICAgZm9udC1zaXplOiA0MDAlO1xuICAgIGZvbnQtZmFtaWx5OiAnRWluYS1ib2xkJztcbn1cbiNub21lOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogbGlnaHRncmV5O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xufVxuXG4jbW9kZSB7XG4gICAgd2lkdGg6IDR2dztcbn1cbiNtb2RlOmhvdmVye1xuICAgIG9wYWNpdHk6IDcwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuLnRpdGxlIHtcbiAgICBmb250LWZhbWlseTogJ0VpbmEtYm9sZCc7XG4gICAgZm9udC1zaXplOiAzNTAlO1xufVxuLnRpdGxlTW9ie1xuICAgIGZvbnQtZmFtaWx5OiAnRWluYS1zZW1pYm9sZCc7XG4gICAgZm9udC1zaXplOiAyMDAlO1xufVxuLnRleHR7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLXRvcDogOCU7IFxuICAgIGZvbnQtZmFtaWx5OiAnU0YtcmVndWxhcic7ICAgXG4gICAgZm9udC1zaXplOiAxMjAlO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4jZm9vdHtcbiAgICBwYWRkaW5nLXRvcDogNCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ1NGLXVsdHJhbGlnaHQnO1xuICAgIGZvbnQtc2l6ZTogMTEwJTtcbn1cblxuXG4vKm1vYmlsZSovIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCl7XG4gICAgI25vbWV7XG4gICAgICAgIGZvbnQtc2l6ZTogMjYwJTtcbiAgICB9XG4gICAgI21vZGUge1xuICAgICAgICB3aWR0aDogOHZ3O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxJTtcbiAgICB9XG4gICAgI2JhY2t7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC50aXRsZXtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgI3RlYWNoaW5nd2Vie1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAudGV4dHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEwMCU7XG4gICAgfVxufVxuLnNlemlvbmV7XG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xufVxuLnNlemlvbmU6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0MiwgMjQ2LCAwLjYpO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuXG5cblxuI2xpbmVhIHtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbi51bmRlcmxpbmVTaG9ydDphZnRlcntcbiAgICBjb250ZW50OiAnJztcbiAgICB3aWR0aDogMHB4O1xuICAgIGhlaWdodDogMXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIHRyYW5zaXRpb246IDMwMG1zO1xufVxuLnVuZGVybGluZVNob3J0OmhvdmVyOmFmdGVyIHtcbiAgICB3aWR0aDogNTUlO1xuICB9XG5cbiAgYXtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG4gIGE6aG92ZXJ7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkzcHgpe1xuICAgICAgI3RlYWNoaW5nbW9iaWxle1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgICAudGl0bGVNb2J7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgfSJdfQ== */", ".sfondolight[_ngcontent-%COMP%] { background-color: white }\n  \n    .sfondodark[_ngcontent-%COMP%] { background-color: #222f3e !important; color: whitesmoke !important; }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-work',
                templateUrl: './work.component.html',
                styleUrls: ['./work.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/paolonazzaro/Desktop/definitely/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map