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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _colors_colors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./colors/colors.component */ "./src/app/colors/colors.component.ts");









const appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'colors', component: _colors_colors_component__WEBPACK_IMPORTED_MODULE_6__["ColorsComponent"] }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _colors_colors_component__WEBPACK_IMPORTED_MODULE_6__["ColorsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _colors_colors_component__WEBPACK_IMPORTED_MODULE_6__["ColorsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ColorsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ColorsComponent.ɵfac = function ColorsComponent_Factory(t) { return new (t || ColorsComponent)(); };
ColorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ColorsComponent, selectors: [["app-colors"]], decls: 42, vars: 0, consts: [["id", "head", 1, "row"], [1, "col-12"], ["routerLink", ""], [2, "color", "darkgray"], [1, "row"], [1, "prova", 2, "background-color", "rgba(253,203,110, 0.1)"], [1, "codice"], [1, "prova", 2, "background-color", "rgba(6,82,221, 0.05)"], [1, "prova", 2, "background-color", "rgba(235,59,90, 0.1)"], [1, "prova", 2, "background-color", "rgb(253,203,110)"], [1, "prova", 2, "background-color", "rgb(6,82,221)"], [1, "prova", 2, "background-color", "rgb(235,59,90)"], [1, "prova", 2, "background-color", "rgb(178, 190, 195)"], [1, "prova", 2, "background-color", "rgb(0,0,0)"], [2, "font-family", "SF-ultralight", "display", "flex", "justify-content", "center", "margin-top", "2%"]], template: function ColorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Paolo Na");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "zz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "aro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "rgba (253, 203, 110, 0.1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "rgba (6, 82, 221, 0.05)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "rgba (235, 59, 90, 0.1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "rgb (253, 203, 110)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "rgb (6, 82, 221)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "rgb (235, 59, 90)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "rgb (178, 190, 195)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "rgb (0, 0, 0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Designed by Paolo Nazzaro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["#head[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-top: 2%;\n    font-size: 300%;\n    font-family: 'Adam';\n    color: black;\n}\n#head[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n}\n.col-12[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.codice[_ngcontent-%COMP%]{\n    visibility: hidden;\n    font-family: 'SF-ultralight';\n}\n.codice[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n}\n.prova[_ngcontent-%COMP%]:hover   .codice[_ngcontent-%COMP%]{\n    visibility: visible;\n    transition-duration: 2s;\n    transition-timing-function: ease-out;\n}\n.prova[_ngcontent-%COMP%]{\n    width: 25%;\n    height: 15vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.prova[_ngcontent-%COMP%]:hover{\n    width: 100vw;\n    transition-duration: 2s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sb3JzL2NvbG9ycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG9DQUFvQztBQUN4QztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbG9ycy9jb2xvcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNoZWFkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDIlO1xuICAgIGZvbnQtc2l6ZTogMzAwJTtcbiAgICBmb250LWZhbWlseTogJ0FkYW0nO1xuICAgIGNvbG9yOiBibGFjaztcbn1cbiNoZWFkOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbC0xMntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY29kaWNle1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBmb250LWZhbWlseTogJ1NGLXVsdHJhbGlnaHQnO1xufVxuLmNvZGljZTpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucHJvdmE6aG92ZXIgIC5jb2RpY2V7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAycztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG59XG5cbi5wcm92YXtcbiAgICB3aWR0aDogMjUlO1xuICAgIGhlaWdodDogMTV2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJvdmE6aG92ZXJ7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDJzO1xufSJdfQ== */", ".sfondolight[_ngcontent-%COMP%] { background-color: white }\n  \n    .sfondodark[_ngcontent-%COMP%] { background-color: #222f3e; color: whitesmoke; }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-colors',
                templateUrl: './colors.component.html',
                styleUrls: ['./colors.component.css']
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




function HomeComponent_img_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_img_10_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.switchMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_img_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_img_11_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.switchMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor() {
        this.mode = false;
    }
    ngOnInit() {
    }
    switchMode() {
        this.mode = !this.mode;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 61, vars: 5, consts: [[1, "container-fluid", 3, "ngClass"], ["id", "head", 1, "row"], [1, "col-12"], [1, "text-flicker-in-glow", "text-shadow-drop-center{", 3, "ngClass"], [2, "color", "darkgrey"], [1, "row"], [1, "col-12", 2, "text-align", "center"], ["src", "assets/drop.png", "alt", "", "id", "mode", 3, "click", 4, "ngIf"], ["src", "assets/droplight.png", "alt", "", "id", "mode", 3, "click", 4, "ngIf"], ["id", "first", 1, "row", "riga"], [1, "col-lg-2"], ["id", "bio", 1, "col-lg-4", "col-xs-6", "single"], [1, "more"], ["id", "work", 1, "col-lg-4", "col-xs-6", "single"], ["id", "second", 1, "row", "riga"], ["id", "hobby", 1, "col-lg-4", "col-xs-12", "single"], ["id", "projects", 1, "col-lg-4", "col-xs-12", "single"], ["id", "about", 1, "col-lg-4", "col-xs-12", "single"], ["id", "icone"], ["href", "https://www.linkedin.com/in/paolo-nazzaro-a41611183/"], ["src", "assets/linkedin.png", "alt", "", "id", "linkedin", 1, "social"], ["href", "https://www.youtube.com/channel/UCAaN5f0-UZ6r6PJboSdtj6w?view_as=subscriber"], ["src", "assets/youtube.png", "alt", "", "id", "youtube", 1, "social"], ["href", "https://www.instagram.com/paolonazzaro.png/"], ["src", "assets/instagram.png", "alt", "", "id", "insta", 1, "social"], [1, "fondo", 3, "ngClass"], [2, "display", "flex", "justify-content", "center"], ["src", "assets/rgb.png", "id", "rgb", "alt", "", "routerLink", "colors"], ["id", "footer"], ["src", "assets/drop.png", "alt", "", "id", "mode", 3, "click"], ["src", "assets/droplight.png", "alt", "", "id", "mode", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Paolo Nazzaro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " 22 / 10 / 1996");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Roma ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Hobby ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Basketball ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Football Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Tor Vergata 4 Foreigners ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " paolonazzaro23@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Designed by Paolo Nazzaro");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n    height: 100vh;\n}\n\n#head[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-top: 2%;\n    font-size: 300%;\n    font-family: 'Adam';\n    color: black;\n}\n\n\n\n@media (max-width: 992px){\n    #head[_ngcontent-%COMP%]{\n        font-size: 200%;\n    }\n    \n    #second[_ngcontent-%COMP%]   .single[_ngcontent-%COMP%]{\n        height: 20vh;\n    }\n    #rgb[_ngcontent-%COMP%]{\n        \n        width: 20vw;\n    }\n}\n\n\n\n@media (min-width: 992px){}\n\n#mode[_ngcontent-%COMP%] {\n    width: 4vw;\n    margin-bottom: 2%;\n}\n\n#mode[_ngcontent-%COMP%]:hover{\n    opacity: 70%;\n    cursor: pointer;\n    transition-duration: 0.5s;\n    transform: rotate(180deg);\n}\n\n.riga[_ngcontent-%COMP%]{\n    text-align: center;\n    font-family: 'Abraham';\n    font-size: 200%;\n}\n\n#first[_ngcontent-%COMP%]{\n    height: 28vh;\n}\n\n#second[_ngcontent-%COMP%]{\n    height: 15vw;\n    margin-bottom: 2%;\n}\n\n.single[_ngcontent-%COMP%]{\n    padding-top: 1.5%;\n}\n\n.single[_ngcontent-%COMP%]:hover{\n    transition-duration: 0.7s;\n    cursor: pointer;\n}\n\n#bio[_ngcontent-%COMP%] {\n    border-right: 1px solid black;\n}\n\n#bio[_ngcontent-%COMP%]:hover{\n    background-color: black;\n    color: white;\n}\n\n.more[_ngcontent-%COMP%] {\n    font-family: 'SF-ultralight';\n    \n    \n    font-size: 60%;\n    display: none;\n    color: whitesmoke;\n    padding-top: 3%;\n}\n\n.single[_ngcontent-%COMP%]:hover   .more[_ngcontent-%COMP%]{\n    display: block;\n    transition-duration: 2s;\n}\n\n#work[_ngcontent-%COMP%]:hover{\n    background-color: #b2bec3;\n    color: white;\n}\n\n#hobby[_ngcontent-%COMP%]{\n    background-color: rgba(253,203,110, 0.1);\n}\n\n#hobby[_ngcontent-%COMP%]:hover{\n    background-color: #fdcb6e;\n    color: white;\n}\n\n#projects[_ngcontent-%COMP%]{\n    background-color: rgba(6,82,221, 0.05);\n}\n\n#projects[_ngcontent-%COMP%]:hover{\n    background-color: #0652DD;\n    color: white;\n}\n\n#about[_ngcontent-%COMP%]{\n    background-color: rgba(235,59,90, 0.1);\n}\n\n#about[_ngcontent-%COMP%]:hover{\n    background-color: #eb3b5a;\n    color: white;\n}\n\n#icone[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n}\n\n#rgb[_ngcontent-%COMP%]{\n    width: 5vw;\n\n    padding-bottom: 2%;\n}\n\n#rgb[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    opacity: 50%;\n    transform: rotate(360deg);\n    transition-duration: 1s;  \n}\n\n#foot[_ngcontent-%COMP%]{\n    margin-bottom: -10%;\n}\n\n.social[_ngcontent-%COMP%]{\n    width: 30%;\n    \n}\n\n#insta[_ngcontent-%COMP%]{\n    width: 50%;\n}\n\n#youtube[_ngcontent-%COMP%]{\n    width: 35%;\n    padding-top: 2%;\n}\n\n#footer[_ngcontent-%COMP%]{font-family: 'SF-ultralight'; display: flex; justify-content: center; margin-top: 2%;\n}\n\n@media screen and (max-width: 992px) {\n    \n    .col-lg-2[_ngcontent-%COMP%]{\n        display: none;\n    }\n    #mode[_ngcontent-%COMP%] {\n        width: 7vw;\n        margin-bottom: 1%;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUEsU0FBUzs7QUFBRTtJQUNQO1FBQ0ksZUFBZTtJQUNuQjtJQUNBOztPQUVHO0lBQ0g7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsV0FBVztJQUNmO0FBQ0o7O0FBRUEsVUFBVTs7QUFBQywwQkFBMEI7O0FBR3JDO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7O0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLDRCQUE0QjtJQUM1Qiw4SUFBOEk7SUFDOUksMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0ksVUFBVTs7SUFFVixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qix1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUEsUUFBUSw0QkFBNEIsRUFBRSxhQUFhLEVBQUUsdUJBQXVCLEVBQUUsY0FBYztBQUM1Rjs7QUFFQTtJQUNJOzs7OztPQUtHO0lBQ0g7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsaUJBQWlCO0lBQ3JCO0VBQ0Y7O0FBRUE7d2lFQUNzaUUiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbiNoZWFkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDIlO1xuICAgIGZvbnQtc2l6ZTogMzAwJTtcbiAgICBmb250LWZhbWlseTogJ0FkYW0nO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLyptb2JpbGUqLyBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpe1xuICAgICNoZWFke1xuICAgICAgICBmb250LXNpemU6IDIwMCU7XG4gICAgfVxuICAgIC8qICNmaXJzdHtcbiAgICAgICAgaGVpZ2h0OiAxdmg7XG4gICAgfSAqL1xuICAgICNzZWNvbmQgLnNpbmdsZXtcbiAgICAgICAgaGVpZ2h0OiAyMHZoO1xuICAgIH1cbiAgICAjcmdie1xuICAgICAgICAvKiBoZWlnaHQ6IDV2aDsgKi9cbiAgICAgICAgd2lkdGg6IDIwdnc7XG4gICAgfVxufVxuXG4vKmRlc2t0b3AqL0BtZWRpYSAobWluLXdpZHRoOiA5OTJweCl7fVxuXG5cbiNtb2RlIHtcbiAgICB3aWR0aDogNHZ3O1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xufVxuI21vZGU6aG92ZXJ7XG4gICAgb3BhY2l0eTogNzAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi5yaWdhe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ0FicmFoYW0nO1xuICAgIGZvbnQtc2l6ZTogMjAwJTtcbn1cbiNmaXJzdHtcbiAgICBoZWlnaHQ6IDI4dmg7XG59XG4jc2Vjb25ke1xuICAgIGhlaWdodDogMTV2dztcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbn1cbi5zaW5nbGV7XG4gICAgcGFkZGluZy10b3A6IDEuNSU7XG59XG4uc2luZ2xlOmhvdmVye1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuN3M7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2JpbyB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG59XG4jYmlvOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5tb3JlIHtcbiAgICBmb250LWZhbWlseTogJ1NGLXVsdHJhbGlnaHQnO1xuICAgIC8qIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7ICovXG4gICAgLyogZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7ICovXG4gICAgZm9udC1zaXplOiA2MCU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICBwYWRkaW5nLXRvcDogMyU7XG59XG5cbi5zaW5nbGU6aG92ZXIgIC5tb3Jle1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDJzO1xufVxuI3dvcms6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IyYmVjMztcbiAgICBjb2xvcjogd2hpdGU7XG59XG4jaG9iYnl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTMsMjAzLDExMCwgMC4xKTtcbn1cbiNob2JieTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRjYjZlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiNwcm9qZWN0c3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYsODIsMjIxLCAwLjA1KTtcbn1cbiNwcm9qZWN0czpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY1MkREO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiNhYm91dHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNSw1OSw5MCwgMC4xKTtcbn1cbiNhYm91dDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWIzYjVhO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiNpY29uZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiNyZ2J7XG4gICAgd2lkdGg6IDV2dztcblxuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcbn1cbiNyZ2I6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG9wYWNpdHk6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFzOyAgXG59XG4jZm9vdHtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTAlO1xufVxuXG4uc29jaWFse1xuICAgIHdpZHRoOiAzMCU7XG4gICAgLyogaGVpZ2h0OiAyMHZoOyAqL1xufVxuXG4jaW5zdGF7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuI3lvdXR1YmV7XG4gICAgd2lkdGg6IDM1JTtcbiAgICBwYWRkaW5nLXRvcDogMiU7XG59XG5cbiNmb290ZXJ7Zm9udC1mYW1pbHk6ICdTRi11bHRyYWxpZ2h0JzsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IG1hcmdpbi10b3A6IDIlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgIC8qICNmb290ZXJ7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgICNyZ2J7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB9ICovXG4gICAgLmNvbC1sZy0ye1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAjbW9kZSB7XG4gICAgICAgIHdpZHRoOiA3dnc7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDElO1xuICAgIH1cbiAgfVxuXG4gIC8qIC50ZXh0LWZsaWNrZXItaW4tZ2xvd3thbmltYXRpb246dGV4dC1mbGlja2VyLWluLWdsb3cgNHMgbGluZWFyIGJvdGh9XG4gIEBrZXlmcmFtZXMgdGV4dC1mbGlja2VyLWluLWdsb3d7MCV7b3BhY2l0eTowfTEwJXtvcGFjaXR5OjA7dGV4dC1zaGFkb3c6bm9uZX0xMC4xJXtvcGFjaXR5OjE7dGV4dC1zaGFkb3c6bm9uZX0xMC4yJXtvcGFjaXR5OjA7dGV4dC1zaGFkb3c6bm9uZX0yMCV7b3BhY2l0eTowO3RleHQtc2hhZG93Om5vbmV9MjAuMSV7b3BhY2l0eToxO3RleHQtc2hhZG93OjAgMCAzMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjI1KX0yMC42JXtvcGFjaXR5OjA7dGV4dC1zaGFkb3c6bm9uZX0zMCV7b3BhY2l0eTowO3RleHQtc2hhZG93Om5vbmV9MzAuMSV7b3BhY2l0eToxO3RleHQtc2hhZG93OjAgMCAzMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjQ1KSwwIDAgNjBweCByZ2JhKDI1NSwyNTUsMjU1LC4yNSl9MzAuNSV7b3BhY2l0eToxO3RleHQtc2hhZG93OjAgMCAzMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjQ1KSwwIDAgNjBweCByZ2JhKDI1NSwyNTUsMjU1LC4yNSl9MzAuNiV7b3BhY2l0eTowO3RleHQtc2hhZG93Om5vbmV9NDUle29wYWNpdHk6MDt0ZXh0LXNoYWRvdzpub25lfTQ1LjEle29wYWNpdHk6MTt0ZXh0LXNoYWRvdzowIDAgMzBweCByZ2JhKDI1NSwyNTUsMjU1LC40NSksMCAwIDYwcHggcmdiYSgyNTUsMjU1LDI1NSwuMjUpfTUwJXtvcGFjaXR5OjE7dGV4dC1zaGFkb3c6MCAwIDMwcHggcmdiYSgyNTUsMjU1LDI1NSwuNDUpLDAgMCA2MHB4IHJnYmEoMjU1LDI1NSwyNTUsLjI1KX01NSV7b3BhY2l0eToxO3RleHQtc2hhZG93OjAgMCAzMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjQ1KSwwIDAgNjBweCByZ2JhKDI1NSwyNTUsMjU1LC4yNSl9NTUuMSV7b3BhY2l0eTowO3RleHQtc2hhZG93Om5vbmV9NTcle29wYWNpdHk6MDt0ZXh0LXNoYWRvdzpub25lfTU3LjEle29wYWNpdHk6MTt0ZXh0LXNoYWRvdzowIDAgMzBweCByZ2JhKDI1NSwyNTUsMjU1LC41NSksMCAwIDYwcHggcmdiYSgyNTUsMjU1LDI1NSwuMzUpfTYwJXtvcGFjaXR5OjE7dGV4dC1zaGFkb3c6MCAwIDMwcHggcmdiYSgyNTUsMjU1LDI1NSwuNTUpLDAgMCA2MHB4IHJnYmEoMjU1LDI1NSwyNTUsLjM1KX02MC4xJXtvcGFjaXR5OjA7dGV4dC1zaGFkb3c6bm9uZX02NSV7b3BhY2l0eTowO3RleHQtc2hhZG93Om5vbmV9NjUuMSV7b3BhY2l0eToxO3RleHQtc2hhZG93OjAgMCAzMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjU1KSwwIDAgNjBweCByZ2JhKDI1NSwyNTUsMjU1LC4zNSksMCAwIDEwMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjEpfTc1JXtvcGFjaXR5OjE7dGV4dC1zaGFkb3c6MCAwIDMwcHggcmdiYSgyNTUsMjU1LDI1NSwuNTUpLDAgMCA2MHB4IHJnYmEoMjU1LDI1NSwyNTUsLjM1KSwwIDAgMTAwcHggcmdiYSgyNTUsMjU1LDI1NSwuMSl9NzUuMSV7b3BhY2l0eTowO3RleHQtc2hhZG93Om5vbmV9Nzcle29wYWNpdHk6MDt0ZXh0LXNoYWRvdzpub25lfTc3LjEle29wYWNpdHk6MTt0ZXh0LXNoYWRvdzowIDAgMzBweCByZ2JhKDI1NSwyNTUsMjU1LC41NSksMCAwIDYwcHggcmdiYSgyNTUsMjU1LDI1NSwuNCksMCAwIDExMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjIpLDAgMCAxMDBweCByZ2JhKDI1NSwyNTUsMjU1LC4xKX04NSV7b3BhY2l0eToxO3RleHQtc2hhZG93OjAgMCAzMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjU1KSwwIDAgNjBweCByZ2JhKDI1NSwyNTUsMjU1LC40KSwwIDAgMTEwcHggcmdiYSgyNTUsMjU1LDI1NSwuMiksMCAwIDEwMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjEpfTg1LjEle29wYWNpdHk6MDt0ZXh0LXNoYWRvdzpub25lfTg2JXtvcGFjaXR5OjA7dGV4dC1zaGFkb3c6bm9uZX04Ni4xJXtvcGFjaXR5OjE7dGV4dC1zaGFkb3c6MCAwIDMwcHggcmdiYSgyNTUsMjU1LDI1NSwuNiksMCAwIDYwcHggcmdiYSgyNTUsMjU1LDI1NSwuNDUpLDAgMCAxMTBweCByZ2JhKDI1NSwyNTUsMjU1LC4yNSksMCAwIDEwMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjEpfTEwMCV7b3BhY2l0eToxO3RleHQtc2hhZG93OjAgMCAzMHB4IHJnYmEoMjU1LDI1NSwyNTUsLjYpLDAgMCA2MHB4IHJnYmEoMjU1LDI1NSwyNTUsLjQ1KSwwIDAgMTEwcHggcmdiYSgyNTUsMjU1LDI1NSwuMjUpLDAgMCAxMDBweCByZ2JhKDI1NSwyNTUsMjU1LC4xKX19ICovXG4iXX0= */", ".sfondolight[_ngcontent-%COMP%] { background-color: white }\n  \n    .sfondodark[_ngcontent-%COMP%] { background-color: #222f3e !important; color: whitesmoke !important; }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
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