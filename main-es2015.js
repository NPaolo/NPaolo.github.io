(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/paolo/Documents/projects/definitely/src/main.ts */"zUnb");


/***/ }),

/***/ "7/eh":
/*!************************************!*\
  !*** ./src/app/cv/cv.component.ts ***!
  \************************************/
/*! exports provided: CvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvComponent", function() { return CvComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme.service */ "deNa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");










const FileSaver = __webpack_require__(/*! file-saver */ "Iab2");
class CvComponent {
    constructor(x, ts) {
        this.x = x;
        this.ts = ts;
        this.stateDeg = 'small';
        this.stateEu = 'small';
        this.stateBk = 'small';
    }
    ngOnInit() {
        if (this.ts.modeBool === true) {
            this.mode = true;
        }
        else {
            this.mode = false;
        }
        console.log(this.ts.modeBool);
        console.log(this.mode);
    }
    switchMode() {
        this.ts.switchMode();
        this.mode = this.ts.modeBool;
        console.log(this.mode);
    }
    downloadPdf(pdfUrl, pdfName) {
        FileSaver.saveAs(pdfUrl, pdfName);
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
    goHome() {
        this.x.navigate(['/']);
    }
    goTv() {
        this.x.navigate(['torvergata']);
    }
}
CvComponent.ɵfac = function CvComponent_Factory(t) { return new (t || CvComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"])); };
CvComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvComponent, selectors: [["app-cv"]], decls: 213, vars: 15, consts: [[1, "container-fluid", 3, "ngClass"], ["id", "head", 1, "row"], [1, "col-12", 2, "z-index", "999 !important"], [1, "header-span", 3, "click"], ["src", "assets/pn.png", "alt", "", 1, "pn-logo"], ["id", "nome", 2, "font-size", "300%", 3, "ngClass"], [1, "row"], ["id", "back", 1, "col-3", 2, "cursor", "pointer", 3, "click"], [1, "col-12", "toggle-container", 2, "text-align", "center"], ["color", "primary", 3, "checked", "change"], [1, "d-flex", "justify-content-center", "align-items-center"], ["matRipple", "", 1, "mat-elevation-z8", "mt-4", 3, "ngClass"], [1, "row", "sezione", 2, "margin-top", "2%", 3, "ngClass"], [1, "col-lg-6", "col-xs-12", "left"], ["src", "./assets/leaf.png", "alt", "", 1, "icon"], [1, "col-lg-6", "col-xs-12", "right"], [1, "impo"], [1, "d-flex", "justify-content-center"], ["matRipple", "", 1, "mat-elevation-z24", "mt-2", 3, "ngClass"], [1, "row", "sezione", 3, "ngClass"], ["src", "./assets/pencil.png", "alt", "", 1, "icon"], [1, "when"], [1, "info"], ["matRipple", "", 1, "mat-elevation-z20", "mt-2", 3, "ngClass"], ["src", "./assets/briefcase.png", "alt", "", 1, "icon"], ["src", "./assets/presentation.png", "alt", "", 1, "icon"], ["id", "t4f", 1, "impo", 3, "click"], ["id", "eaa", 1, "impo"], ["href", "https://flyeaa.com/", "target", "_blank"], ["src", "./assets/diamond.png", "alt", "", 1, "icon"], [1, "topic"], [1, "moreinfo"], ["src", "./assets/ball.png", "alt", "", 1, "icon"], [1, "d-flex", "justify-content-center", 2, "text-align", "center", "margin-top", "3%"], ["color", "primary", "selected", "true", 1, "mat-elevation-z20"], ["href", "javascript:void(0)", 2, "color", "white", 3, "click"], [1, "d-flex", "justify-content-center", "pt-3", "pb-1", 2, "font-family", "Eina-light", "font-size", "75%"]], template: function CvComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvComponent_Template_span_click_3_listener() { return ctx.goHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "aolo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvComponent_Template_div_click_8_listener() { return ctx.goHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-slide-toggle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CvComponent_Template_mat_slide_toggle_change_10_listener() { return ctx.switchMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Bio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Paolo Nazzaro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Date of Birth ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "22 / 10 / 1996");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Place of Birth ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Rome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "paolonazzaro23@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-card", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Education & Training");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Languages in the Information Society Degree");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "2015-2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " University of Rome Tor Vergata ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Graduated with 110/110 with the thesis \"Font's analysis and use in web communication\". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "European project EU-MADE4LL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Production of a corporate video regarding the University of Rome Tor Vergata. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Scientific High School Degree");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "2010-2015");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-card", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Front End Developer at RoTechnology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "2020-now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Angular Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Web Developing Assistant at Tor Vergata University");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "2019-now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "University Tutor for HTML + CSS + JavaScript based courses.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Front End Developer at Trevize s.r.l");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "2019-2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Collaborated as Front End Developer for Angular, Ionic and Wordpress based projects. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Web Developing Teaching Assistant at Betacom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Teaching Assistant for Angular based courses.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Journalist at Quotidiano del Lazio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "2018-2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Office Clerk at Tor Vergata University");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "mat-card", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvComponent_Template_span_click_130_listener() { return ctx.goTv(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " Tor Vergata 4 Foreigners");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Angular web app and Ionic mobile app for University of Rome Tor Vergata\u2019s foreign students. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "European Aviation Academy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "https://flyeaa.com/ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " Elementor + Wordpress based web site ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "mat-card", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Developing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Angular, Typescript, Ionic, Javascript, Nativescript, Wordpress ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Logo / Icon Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Illustrator, Photoshop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Languages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "English C1, German B1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "mat-card", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Interests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Creation of minimal graphic contents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Sports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Basketball");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Playing since 2002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Soccer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "mat-chip-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "mat-chip", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvComponent_Template_a_click_209_listener() { return ctx.downloadPdf("./assets/cv-paolo-nazzaro-pdf.pdf", "cv-paolo-nazzaro"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " Download PDF ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, " Designed by Paolo Nazzaro\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "testolight" : "testodark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "" : "cardark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "lightsez" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "" : "cardark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "lightsez" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "" : "cardark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "lightsez" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "" : "cardark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "lightsez" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "" : "cardark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "lightsez" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "" : "cardark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "lightsez" : "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRipple"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChip"]], styles: [".icon[_ngcontent-%COMP%]{\n    width: 7%;\n    padding-top: 5%;\n}\n\nmat-card[_ngcontent-%COMP%] {\n    margin-bottom: 3%;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    border-radius: 20px;\n    \n    z-index: 999;\n}\n\n.sezione[_ngcontent-%COMP%]{\n    padding-top: 2%;\n    padding-bottom: 2%;\n    font-family: 'Eina-light';\n}\n\n.left[_ngcontent-%COMP%]{\n    text-align: center;\n}\n\nh1[_ngcontent-%COMP%]{\n    font-family: 'Eina-bold';\n}\n\n.impo[_ngcontent-%COMP%]{\n    font-family: 'Eina-semibold';\n}\n\n.lessimpo[_ngcontent-%COMP%]{\n    font-family: 'Eina-regular';\n}\n\n.when[_ngcontent-%COMP%]{\n    font-family: 'Eina-regular';\n    font-size: 80%;\n}\n\n.topic[_ngcontent-%COMP%]{\n    font-family: 'Eina-regular';\n    font-size: 90%;\n}\n\n.info[_ngcontent-%COMP%]{\n    font-size: 90%;\n}\n\n.moreinfo[_ngcontent-%COMP%]{\n    font-size: 80%;\n}\n\n#linea[_ngcontent-%COMP%] {\n    height: 1px;\n    background-color: black;\n}\n\n#t4f[_ngcontent-%COMP%]{\n    cursor: pointer;\n}\n\n#t4f[_ngcontent-%COMP%]:hover{\n    font-size: 110%;\n    transition-duration: 0.5s;\n}\n\n@media (max-width: 992px){\n    #back[_ngcontent-%COMP%]{\n        display: none;\n    }\n    .left[_ngcontent-%COMP%]{\n        text-align: left;\n    }\n    h1[_ngcontent-%COMP%]{\n        font-size: 180%;\n    }\n    .icon[_ngcontent-%COMP%]{\n        display: none;\n    }\n    .web[_ngcontent-%COMP%]{\n        display: none;\n        font-weight: lighter;\n    }\n}\n\n@media (min-width: 993px){\n    .mob[_ngcontent-%COMP%]{\n        display: none;\n    }\n    .lightsez[_ngcontent-%COMP%]:hover {\n        \n        color: black;\n        transition-duration: 0.5s;\n    }\n}\n\n.card-container[_ngcontent-%COMP%] {\n\n    width: 300px;\n\n    height: 270px;\n\n    position: relative;\n\n    perspective: 500px;\n\n}\n\n.flippable-card[_ngcontent-%COMP%] {\n\n    width: 100%;\n\n    height: 100%;\n\n    position: absolute;\n\n    transform-style: preserve-3d;\n\n    transition: transform 1s;\n\n}\n\n.flippable-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n\n    margin: 0;\n\n    display: block;\n\n    position: absolute;\n\n    width: 252px;\n\n    height: 222px;\n\n    -webkit-backface-visibility: hidden;\n\n            backface-visibility: hidden;\n\n}\n\n.flippable-card[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n\n    background: #f0f0f0;\n\n    transform: rotateY( 180deg );\n\n}\n\n.flippable-card.flipped[_ngcontent-%COMP%] {\n\n    transform: rotateY( 180deg );\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3YvY3YuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTtJQUNJLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiwwQ0FBMEM7SUFDMUMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUNBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsY0FBYztBQUNsQjs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUdBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGFBQWE7UUFDYixvQkFBb0I7SUFDeEI7QUFDSjs7QUFHQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksK0JBQStCO1FBQy9CLFlBQVk7UUFDWix5QkFBeUI7SUFDN0I7QUFDSjs7QUFFQTs7SUFFSSxZQUFZOztJQUVaLGFBQWE7O0lBRWIsa0JBQWtCOztJQUlsQixrQkFBa0I7O0FBRXRCOztBQUlBOztJQUVJLFdBQVc7O0lBRVgsWUFBWTs7SUFFWixrQkFBa0I7O0lBRWxCLDRCQUE0Qjs7SUFFNUIsd0JBQXdCOztBQUU1Qjs7QUFJQTs7SUFFSSxTQUFTOztJQUVULGNBQWM7O0lBRWQsa0JBQWtCOztJQUVsQixZQUFZOztJQUVaLGFBQWE7O0lBRWIsbUNBQTJCOztZQUEzQiwyQkFBMkI7O0FBRS9COztBQUlBOztJQUVJLG1CQUFtQjs7SUFFbkIsNEJBQTRCOztBQUVoQzs7QUFJQTs7SUFFSSw0QkFBNEI7O0FBRWhDIiwiZmlsZSI6InNyYy9hcHAvY3YvY3YuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbi5pY29ue1xuICAgIHdpZHRoOiA3JTtcbiAgICBwYWRkaW5nLXRvcDogNSU7XG59XG5cbm1hdC1jYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAvKiBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggMHB4ICNjOGRjZmY7ICovXG4gICAgei1pbmRleDogOTk5O1xufVxuXG4uc2V6aW9uZXtcbiAgICBwYWRkaW5nLXRvcDogMiU7XG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xuICAgIGZvbnQtZmFtaWx5OiAnRWluYS1saWdodCc7XG59XG5cbi5sZWZ0e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmgxe1xuICAgIGZvbnQtZmFtaWx5OiAnRWluYS1ib2xkJztcbn1cbi5pbXBve1xuICAgIGZvbnQtZmFtaWx5OiAnRWluYS1zZW1pYm9sZCc7XG59XG4ubGVzc2ltcG97XG4gICAgZm9udC1mYW1pbHk6ICdFaW5hLXJlZ3VsYXInO1xufVxuLndoZW57XG4gICAgZm9udC1mYW1pbHk6ICdFaW5hLXJlZ3VsYXInO1xuICAgIGZvbnQtc2l6ZTogODAlO1xufVxuLnRvcGlje1xuICAgIGZvbnQtZmFtaWx5OiAnRWluYS1yZWd1bGFyJztcbiAgICBmb250LXNpemU6IDkwJTtcbn1cbi5pbmZve1xuICAgIGZvbnQtc2l6ZTogOTAlO1xufVxuLm1vcmVpbmZve1xuICAgIGZvbnQtc2l6ZTogODAlO1xufVxuI2xpbmVhIHtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbiN0NGZ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuI3Q0Zjpob3ZlcntcbiAgICBmb250LXNpemU6IDExMCU7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpe1xuICAgICNiYWNre1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAubGVmdHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gICAgaDF7XG4gICAgICAgIGZvbnQtc2l6ZTogMTgwJTtcbiAgICB9XG4gICAgLmljb257XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC53ZWJ7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIH1cbn1cblxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkzcHgpe1xuICAgIC5tb2J7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5saWdodHNlejpob3ZlciB7XG4gICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmMWYyZjY7ICovXG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbiAgICB9XG59XG5cbi5jYXJkLWNvbnRhaW5lciB7XG5cbiAgICB3aWR0aDogMzAwcHg7XG5cbiAgICBoZWlnaHQ6IDI3MHB4O1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogNTAwcHg7XG5cbiAgICBwZXJzcGVjdGl2ZTogNTAwcHg7XG5cbn1cblxuXG5cbi5mbGlwcGFibGUtY2FyZCB7XG5cbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGhlaWdodDogMTAwJTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG5cbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG5cbn1cblxuXG5cbi5mbGlwcGFibGUtY2FyZCBtYXQtY2FyZCB7XG5cbiAgICBtYXJnaW46IDA7XG5cbiAgICBkaXNwbGF5OiBibG9jaztcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgIHdpZHRoOiAyNTJweDtcblxuICAgIGhlaWdodDogMjIycHg7XG5cbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG5cbn1cblxuXG5cbi5mbGlwcGFibGUtY2FyZCAuYmFjayB7XG5cbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcblxufVxuXG5cblxuLmZsaXBwYWJsZS1jYXJkLmZsaXBwZWQge1xuXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcblxufSJdfQ== */", ".sfondolight[_ngcontent-%COMP%] { background-color: white }\n  .sfondodark[_ngcontent-%COMP%] { background-color: #222f3e !important; color: whitesmoke !important; }\n    .testolight[_ngcontent-%COMP%]     { color: black !important; }\n    .testodark[_ngcontent-%COMP%]      { color: whitesmoke !important; }\n    .shadowdark[_ngcontent-%COMP%]     { box-shadow: -10px 15px 40px -20px #c8dcff; }\n    .cardark[_ngcontent-%COMP%]        { background-color: #222f3e; background-blend-mode: darken; color: whitesmoke;}"], data: { animation: [
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
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"] }]; }, null); })();


/***/ }),

/***/ "ATnn":
/*!************************************************!*\
  !*** ./src/app/teaching/teaching.component.ts ***!
  \************************************************/
/*! exports provided: TeachingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachingComponent", function() { return TeachingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme.service */ "deNa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");









class TeachingComponent {
    constructor(x, ts) {
        this.x = x;
        this.ts = ts;
    }
    ngOnInit() {
        if (this.ts.modeBool === true) {
            this.mode = true;
        }
        else {
            this.mode = false;
        }
        console.log(this.ts.modeBool);
        console.log(this.mode);
    }
    switchMode() {
        this.ts.switchMode();
        this.mode = this.ts.modeBool;
        console.log(this.mode);
    }
    goHome() {
        this.x.navigate(['/']);
    }
}
TeachingComponent.ɵfac = function TeachingComponent_Factory(t) { return new (t || TeachingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"])); };
TeachingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeachingComponent, selectors: [["app-teaching"]], decls: 43, vars: 5, consts: [[1, "container-fluid", 3, "ngClass"], ["id", "head", 1, "row"], [1, "col-12", 2, "z-index", "999 !important"], [1, "header-span", 3, "click"], ["src", "assets/pn.png", "alt", "", 1, "pn-logo"], ["id", "nome", 2, "font-size", "300%", 3, "ngClass"], [1, "row"], ["id", "back", 1, "col-3", 2, "cursor", "pointer", 3, "click"], [1, "col-12", "toggle-container", 2, "text-align", "center"], ["color", "primary", 3, "checked", "change"], [1, "d-flex", "justify-content-center", "align-items-center"], ["matRipple", "", 1, "mat-elevation-z12", "mt-4", 3, "ngClass"], [1, "row", "sezione", 2, "margin-top", "2%", 3, "ngClass"], [1, "col-lg-6", "col-xs-12", "d-flex", "align-items-center", "justify-content-center", "left"], [1, "col-lg-6", "col-xs-12", "right"], [1, "textTeach", 2, "font-family", "Eina-semibold"], ["href", "http://giorgiopiccardo.com", "target", "_blank"], ["color", "primary", "selected", "true", 1, "mat-elevation-z20", "p-2"], ["href", "https://www-2020.linfo.lettere.uniroma2.it/", "target", "_blank", 2, "color", "white"], [2, "font-family", "Eina-bold"], [2, "font-family", "Eina-light"], [2, "font-family", "Eina-semibold"], [1, "fixed-bottom", "d-flex", "justify-content-center", "pt-3", "pb-1", 2, "font-family", "Eina-light", "font-size", "75%"]], template: function TeachingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeachingComponent_Template_span_click_3_listener() { return ctx.goHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "aolo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeachingComponent_Template_div_click_8_listener() { return ctx.goHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-slide-toggle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TeachingComponent_Template_mat_slide_toggle_change_10_listener() { return ctx.switchMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Teaching Assistant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Prof. Giorgio Piccardo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "'s teaching assistant for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Web Developing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " courses.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-chip-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-chip", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " LINFO course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Tor Vergata University");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Via Columbia, 1, 00133 Roma RM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Languages in the Information Society");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Designed by Paolo Nazzaro\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "testolight" : "testodark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "lightsez" : "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRipple"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChip"]], styles: [".left[_ngcontent-%COMP%] {\n    font-family: 'Eina-bold';\n}\n\nmat-card[_ngcontent-%COMP%] {\n    border-radius: 25px;\n    \n}\n\n.container-fluid[_ngcontent-%COMP%] {\n    height: 100vh !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hpbmcvdGVhY2hpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixxREFBcUQ7QUFDekQ7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC90ZWFjaGluZy90ZWFjaGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlZnQge1xuICAgIGZvbnQtZmFtaWx5OiAnRWluYS1ib2xkJztcbn1cblxubWF0LWNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgLyogYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IDBweCAjYzhkY2ZmICFpbXBvcnRhbnQ7ICovXG59XG5cbi5jb250YWluZXItZmx1aWQge1xuICAgIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbn0iXX0= */", ".sfondolight[_ngcontent-%COMP%] { background-color: white } \n    .sfondodark[_ngcontent-%COMP%] { background-color: #222f3e; color: whitesmoke; }\n    .visible[_ngcontent-%COMP%] { overflow: visible; transition-duration: 1s;}\n    .hidden[_ngcontent-%COMP%] { overflow: hidden; }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeachingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-teaching',
                templateUrl: './teaching.component.html',
                styleUrls: ['./teaching.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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

/***/ "KYig":
/*!********************************************!*\
  !*** ./src/app/colors/colors.component.ts ***!
  \********************************************/
/*! exports provided: ColorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsComponent", function() { return ColorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme.service */ "deNa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");









class ColorsComponent {
    constructor(_snackBar, x, ts) {
        this._snackBar = _snackBar;
        this.x = x;
        this.ts = ts;
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
    ngOnInit() {
        if (this.ts.modeBool === true) {
            this.mode = true;
        }
        else {
            this.mode = false;
        }
        console.log(this.ts.modeBool);
        console.log(this.mode);
    }
    switchMode() {
        this.ts.switchMode();
        this.mode = this.ts.modeBool;
        console.log(this.mode);
    }
    copyMessage(val) {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    }
    goHome() {
        this.x.navigate(['/']);
    }
}
ColorsComponent.ɵfac = function ColorsComponent_Factory(t) { return new (t || ColorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"])); };
ColorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ColorsComponent, selectors: [["app-colors"]], decls: 21, vars: 3, consts: [[1, "container-fluid", 3, "ngClass"], ["id", "head", 1, "row"], [1, "col-12", 2, "z-index", "999 !important"], [1, "header-span", 3, "click"], ["src", "assets/pn.png", "alt", "", 1, "pn-logo"], ["id", "nome", 2, "font-size", "300%", 3, "ngClass"], [1, "row"], [1, "col-lg-12", "col-xs-12", 2, "text-align", "center"], ["color", "primary", 3, "checked", "change"], [1, "d-flex", "justify-content-center", "align-items-center", "flex-column", "pt-3"], ["matRipple", "", 1, "mb-2", "mat-elevation-z12", 2, "background-color", "#10ac84", "width", "50%", "height", "70px", 3, "click"], ["matRipple", "", 1, "mb-2", "mat-elevation-z12", 2, "background-color", "#dbf3ec", "width", "50%", "height", "70px", 3, "click"], ["matRipple", "", 1, "mb-2", "mat-elevation-z12", 2, "background-color", "#c8dcff", "width", "50%", "height", "70px", 3, "click"], ["matRipple", "", 1, "mb-2", "mat-elevation-z12", 2, "background-color", "#3880ff", "width", "50%", "height", "70px", 3, "click"], ["matRipple", "", 1, "mb-2", "mat-elevation-z12", 2, "background-color", "#5f27cd", "width", "50%", "height", "70px", 3, "click"], ["matRipple", "", 1, "mb-2", "mat-elevation-z12", 2, "background-color", "#eb3b6d", "width", "50%", "height", "70px", 3, "click"], ["matRipple", "", 1, "mb-2", "mat-elevation-z12", 2, "background-color", "#facbd9", "width", "50%", "height", "70px", 3, "click"], ["matRipple", "", 1, "mb-2", "mat-elevation-z12", 2, "background-color", "#e5ddf7", "width", "50%", "height", "70px", 3, "click"], [1, "d-flex", "justify-content-center", "pt-3", "pb-1", 2, "font-family", "Eina-light", "font-size", "75%"]], template: function ColorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorsComponent_Template_span_click_3_listener() { return ctx.goHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "aolo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-slide-toggle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ColorsComponent_Template_mat_slide_toggle_change_9_listener() { return ctx.switchMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorsComponent_Template_mat_card_click_11_listener() { return ctx.copyMessage("#10ac84"); })("click", function ColorsComponent_Template_mat_card_click_11_listener() { return ctx.openSnackBar("HEX copied in your clipboard!", "OK"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorsComponent_Template_mat_card_click_12_listener() { return ctx.copyMessage("#dbf3ec"); })("click", function ColorsComponent_Template_mat_card_click_12_listener() { return ctx.openSnackBar("HEX copied in your clipboard!", "OK"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorsComponent_Template_mat_card_click_13_listener() { return ctx.copyMessage("#c8dcff"); })("click", function ColorsComponent_Template_mat_card_click_13_listener() { return ctx.openSnackBar("HEX copied in your clipboard!", "OK"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorsComponent_Template_mat_card_click_14_listener() { return ctx.copyMessage("#3880ff"); })("click", function ColorsComponent_Template_mat_card_click_14_listener() { return ctx.openSnackBar("HEX copied in your clipboard!", "OK"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorsComponent_Template_mat_card_click_15_listener() { return ctx.copyMessage("#5f27cd"); })("click", function ColorsComponent_Template_mat_card_click_15_listener() { return ctx.openSnackBar("HEX copied in your clipboard!", "OK"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorsComponent_Template_mat_card_click_16_listener() { return ctx.copyMessage("#eb3b6d"); })("click", function ColorsComponent_Template_mat_card_click_16_listener() { return ctx.openSnackBar("HEX copied in your clipboard!", "OK"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorsComponent_Template_mat_card_click_17_listener() { return ctx.copyMessage("#facbd9"); })("click", function ColorsComponent_Template_mat_card_click_17_listener() { return ctx.openSnackBar("HEX copied in your clipboard!", "OK"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorsComponent_Template_mat_card_click_18_listener() { return ctx.copyMessage("#e5ddf7"); })("click", function ColorsComponent_Template_mat_card_click_18_listener() { return ctx.openSnackBar("HEX copied in your clipboard!", "OK"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Designed by Paolo Nazzaro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "testolight" : "testodark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.mode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRipple"]], styles: ["mat-card[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\n@media (max-width: 992px) {\n    .container-fluid[_ngcontent-%COMP%] {\n        height: 100vh !important;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sb3JzL2NvbG9ycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb2xvcnMvY29sb3JzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAuY29udGFpbmVyLWZsdWlkIHtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xuICAgIH1cbn0iXX0= */", ".sfondolight[_ngcontent-%COMP%] { background-color: white }\n  \n    .sfondodark[_ngcontent-%COMP%] { background-color: #222f3e; color: whitesmoke; }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-colors',
                templateUrl: './colors.component.html',
                styleUrls: ['./colors.component.css']
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"] }]; }, null); })();


/***/ }),

/***/ "L6WB":
/*!****************************************************!*\
  !*** ./src/app/torvergata/torvergata.component.ts ***!
  \****************************************************/
/*! exports provided: TorvergataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TorvergataComponent", function() { return TorvergataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme.service */ "deNa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");








class TorvergataComponent {
    constructor(x, ts) {
        this.x = x;
        this.ts = ts;
    }
    ngOnInit() {
        if (this.ts.modeBool === true) {
            this.mode = true;
        }
        else {
            this.mode = false;
        }
        console.log(this.ts.modeBool);
        console.log(this.mode);
    }
    switchMode() {
        this.ts.switchMode();
        this.mode = this.ts.modeBool;
        console.log(this.mode);
    }
    goHome() {
        this.x.navigate(['/']);
    }
}
TorvergataComponent.ɵfac = function TorvergataComponent_Factory(t) { return new (t || TorvergataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"])); };
TorvergataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TorvergataComponent, selectors: [["app-torvergata"]], decls: 76, vars: 7, consts: [[1, "container-fluid", 3, "ngClass"], ["id", "head", 1, "row"], [1, "col-12", 2, "z-index", "999 !important"], [1, "header-span", 3, "click"], ["src", "assets/pn.png", "alt", "", 1, "pn-logo"], ["id", "nome", 2, "font-size", "300%", 3, "ngClass"], [1, "row"], [1, "col-12", 2, "text-align", "center"], ["color", "primary", 3, "checked", "change"], [1, "d-flex", "justify-content-center", "align-items-center", "px-2", "pt-3"], ["matRipple", "", 1, "mat-elevation-z12", "w-100", 3, "ngClass"], [1, "row", "sezione", "d-flex", "justify-content-center", "align-items-center", 2, "margin-top", "2%", 3, "ngClass"], [1, "col-lg-6", "col-xs-12", "d-flex", "justify-content-center"], ["src", "./assets/homeiphone.png", "id", "iphone", "alt", ""], [1, "col-lg-6", "col-xs-12", "right"], ["id", "torvergata"], ["id", "text"], [1, "row", "sezione", "back", "d-flex", "justify-content-center", "align-items-center", 2, "margin-top", "2%", 3, "ngClass"], ["src", "./assets/docsphone.png", "id", "iphone", "alt", ""], [1, "d-flex", "justify-content-center", "pt-3", "pb-1", 2, "font-family", "Eina-light", "font-size", "75%"]], template: function TorvergataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TorvergataComponent_Template_span_click_3_listener() { return ctx.goHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "aolo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-slide-toggle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TorvergataComponent_Template_mat_slide_toggle_change_9_listener() { return ctx.switchMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Tor Vergata 4 Foreigners");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Ionic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " + ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "iOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " + ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Android");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "JWT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Authentication");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " + ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " + ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Camera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " File Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Multilanguage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "File ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Designed by Paolo Nazzaro\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "testolight" : "testodark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "lightsez" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "lightsez" : "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRipple"]], styles: ["mat-card[_ngcontent-%COMP%] {\n    border-radius: 25px;\n    \n    margin-bottom: 3%;\n}\n\n#iphone[_ngcontent-%COMP%] {\n    width: 20vw;\n}\n\n#torvergata[_ngcontent-%COMP%] {\n    font-family: 'Eina-bold';\n    white-space: nowrap;\n}\n\n#text[_ngcontent-%COMP%] {\n    font-family: 'Eina-light';\n}\n\nb[_ngcontent-%COMP%]{\n    font-family: 'Eina-regular';\n}\n\n#footer[_ngcontent-%COMP%]{font-family: 'SF-ultralight'; display: flex; justify-content: center; margin-top: 2%;}\n\n.features[_ngcontent-%COMP%]{\n    font-family: 'Eina-regular';\n    text-align: center;\n}\n\n@media (max-width: 992px){\n    #back[_ngcontent-%COMP%]{\n        display: none;\n    }\n    #rgb[_ngcontent-%COMP%]{\n        \n        width: 20vw;\n    }\n    #iphone[_ngcontent-%COMP%]{\n        width: 50vw;\n        padding-top: 5%;\n        padding-bottom: 5%;\n    }\n    #mode[_ngcontent-%COMP%]{\n        width: 8vw;\n    }\n    #torvergata[_ngcontent-%COMP%]{\n        font-size: 150%;\n        text-align: center;\n        padding-top: 3%;\n    }\n    #templateWeb[_ngcontent-%COMP%]{\n        display: none;\n    }\n    #text[_ngcontent-%COMP%] {\n        text-align: center;\n    }\n    .back[_ngcontent-%COMP%] {\n        flex-direction: column-reverse !important;\n    }\n}\n\n@media (min-width: 992px){\n      #templateMobile[_ngcontent-%COMP%]{\n          display: none;\n      }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9ydmVyZ2F0YS90b3J2ZXJnYXRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIscURBQXFEO0lBQ3JELGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUEsUUFBUSw0QkFBNEIsRUFBRSxhQUFhLEVBQUUsdUJBQXVCLEVBQUUsY0FBYyxDQUFDOztBQUU3RjtJQUNJLDJCQUEyQjtJQUMzQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7UUFDWCxlQUFlO1FBQ2Ysa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSx5Q0FBeUM7SUFDN0M7QUFDSjs7QUFFRTtNQUNJO1VBQ0ksYUFBYTtNQUNqQjtFQUNKIiwiZmlsZSI6InNyYy9hcHAvdG9ydmVyZ2F0YS90b3J2ZXJnYXRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAvKiBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggMHB4ICNlNWRkZjcgIWltcG9ydGFudDsgKi9cbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcbn1cblxuI2lwaG9uZSB7XG4gICAgd2lkdGg6IDIwdnc7XG59XG5cbiN0b3J2ZXJnYXRhIHtcbiAgICBmb250LWZhbWlseTogJ0VpbmEtYm9sZCc7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuI3RleHQge1xuICAgIGZvbnQtZmFtaWx5OiAnRWluYS1saWdodCc7XG59XG5ie1xuICAgIGZvbnQtZmFtaWx5OiAnRWluYS1yZWd1bGFyJztcbn1cblxuI2Zvb3Rlcntmb250LWZhbWlseTogJ1NGLXVsdHJhbGlnaHQnOyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgbWFyZ2luLXRvcDogMiU7fVxuXG4uZmVhdHVyZXN7XG4gICAgZm9udC1mYW1pbHk6ICdFaW5hLXJlZ3VsYXInO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KXtcbiAgICAjYmFja3tcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgI3JnYntcbiAgICAgICAgLyogaGVpZ2h0OiA1dmg7ICovXG4gICAgICAgIHdpZHRoOiAyMHZ3O1xuICAgIH1cbiAgICAjaXBob25le1xuICAgICAgICB3aWR0aDogNTB2dztcbiAgICAgICAgcGFkZGluZy10b3A6IDUlO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNSU7XG4gICAgfVxuICAgICNtb2Rle1xuICAgICAgICB3aWR0aDogOHZ3O1xuICAgIH1cbiAgICAjdG9ydmVyZ2F0YXtcbiAgICAgICAgZm9udC1zaXplOiAxNTAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzJTtcbiAgICB9XG4gICAgI3RlbXBsYXRlV2Vie1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAjdGV4dCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmJhY2sge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2UgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KXtcbiAgICAgICN0ZW1wbGF0ZU1vYmlsZXtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICB9XG5cbiJdfQ== */", ".sfondolight[_ngcontent-%COMP%] { background-color: white }\n  \n    .sfondodark[_ngcontent-%COMP%] { background-color: #222f3e !important; color: whitesmoke !important; }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TorvergataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-torvergata',
                templateUrl: './torvergata.component.html',
                styleUrls: ['./torvergata.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"] }]; }, null); })();


/***/ }),

/***/ "Oh3b":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "8tEE");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme.service */ "deNa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");

// import { faInstagram } from '@fortawesome/free-brands-svg-icons';












const _c0 = function (a0) { return { "background-color": a0 }; };
const _c1 = function (a0) { return { "color": a0 }; };
class HomepageComponent {
    // matslidetoggle : MatSlideToggle;
    constructor(x, ts) {
        this.x = x;
        this.ts = ts;
        this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLinkedin"];
        this.faInstagram = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faInstagram"];
        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEnvelope"];
    }
    ngOnInit() {
        if (this.ts.modeBool === true) {
            this.mode = true;
        }
        else {
            this.mode = false;
        }
        console.log(this.ts.modeBool);
        console.log(this.mode);
    }
    switchMode() {
        // this.mode = !this.mode;
        this.ts.switchMode();
        this.mode = this.ts.modeBool;
        console.log(this.mode);
    }
    goCV() {
        this.x.navigate(['cv']);
    }
    goWork() {
        this.x.navigate(['work']);
    }
    goTv() {
        this.x.navigate(['torvergata']);
    }
    goColors() {
        this.x.navigate(['colors']);
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"])); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 85, vars: 25, consts: [[1, "container-fluid", 2, "height", "100%", 3, "ngStyle"], ["id", "head", 1, "row"], [1, "col-12", 2, "z-index", "999 !important"], [1, "header-span"], ["src", "assets/pn.png", "alt", "", 1, "pn-logo"], ["id", "nome", 2, "font-size", "300%", 3, "ngClass"], [1, "row"], [1, "col-lg-12", "col-xs-12", "toggle-container", 2, "text-align", "center"], ["color", "primary", 3, "checked", "change"], [1, "riga", "firstrow", "d-flex", "justify-content-around", "align-items-center", "pt-3", "pb-5"], [1, "w-100", "px-5"], [1, "bio-card", "text-center", "mat-elevation-z24", 3, "ngStyle"], [2, "color", "#10ac84"], [1, "d-flex", "justify-content-center", "text-center", "flex-column"], [3, "ngClass"], [1, "mat-elevation-z6", "bio-chip", 3, "click"], [1, "work-card", "text-center", "mat-elevation-z24", 3, "ngStyle"], [2, "color", "#3880ff"], [1, "d-flex", "justify-content-center", "text-center", "flex-wrap"], [1, "mat-elevation-z6", "work-chip", 3, "click"], ["routerLink", "teaching", 1, "mat-elevation-z6", "work-chip"], [1, "mat-elevation-z6", "work-chip"], [1, "riga", "d-flex", "justify-content-around", "align-items-center", "pb-3"], [1, "proj-card", "text-center", "mat-elevation-z24", 3, "ngStyle"], [2, "color", "#5f27cd"], [3, "ngStyle"], [1, "mat-elevation-z6", "proj-chip", 3, "click"], [1, "mat-elevation-z6", "proj-chip"], ["href", "https://flyeaa.com/", "target", "_blank", 2, "color", "inherit !important"], [1, "contacts-card", "text-center", "mat-elevation-z24", 3, "ngStyle"], [2, "color", "#eb3b6d"], [1, "mat-elevation-z6", "contacts-chip"], ["href", "mailto:paolonazzaro23@gmail.com"], [3, "icon"], ["href", "https://www.linkedin.com/in/paolonazzaro23/", "target", "_blank"], ["href", "https://www.instagram.com/paolonazzaro.png/", "target", "_blank"], [1, "footer", "text-center"], [1, "d-flex", "justify-content-center", 2, "z-index", "999 !important"], ["color", "primary", 2, "z-index", "999 !important", 3, "click"], [1, "pt-4", 2, "font-family", "Eina-light", "font-size", "75%", 3, "ngClass"], [1, "circles"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "aolo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-slide-toggle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HomepageComponent_Template_mat_slide_toggle_change_9_listener() { return ctx.switchMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-title", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Bio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-chip-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "22 / 10 / 1996");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-chip", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_mat_chip_click_21_listener() { return ctx.goCV(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Curriculum Vitae");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card-title", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-chip-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-chip", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_mat_chip_click_31_listener() { return ctx.goWork(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Front End Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-chip", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Teaching Assistant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-chip", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Freelance Graphic Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-card", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-card-title", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h1", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-chip-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-chip", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_mat_chip_click_46_listener() { return ctx.goTv(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Tor Vergata for Foreigners");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-chip", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " European Aviation Academy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-card", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-card-title", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-chip-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-chip", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "fa-icon", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-chip", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "fa-icon", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-chip", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "fa-icon", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-icon", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_mat_icon_click_70_listener() { return ctx.goColors(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "colorize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Designed by Paolo Nazzaro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "ul", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.mode ? "#222f3e" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "testolight" : "testodark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.mode ? "rgba(16, 172, 132,0.2)" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "" : "testodark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.mode ? "rgba(56, 128, 255,0.2)" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.mode ? "rgba(94, 39, 205,0.2)" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c1, ctx.mode ? " #e5ddf7" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx.mode ? "rgba(235, 59, 109,0.2)" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faEnvelope);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faLinkedin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faInstagram);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "testolight" : "testodark");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChip"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FaIconComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"]], styles: [".voce[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\n\n\n.voce[_ngcontent-%COMP%]:hover{\n    background-color: #b2bec3;\n    transition-duration: 1s;\n}\n\n\n\np[_ngcontent-%COMP%]{\n    font-family: 'Eina-light';\n    font-size: 40%;\n}\n\n\n\n\n\n\n\n.contact[_ngcontent-%COMP%]{\n    font-family: 'SF-ultralight';\n    font-size: 40%;\n    vertical-align: middle;\n}\n\n\n\n\n\n\n\n#square[_ngcontent-%COMP%] {\n    text-align: center;\n    font-family: 'Eina-bold';\n    font-size: 300%;\n    padding-top: 5%;\n    height: 100%;\n}\n\n\n\n.voice[_ngcontent-%COMP%]{\n    cursor: pointer;\n    height: 30vh;\n    align-items: center;\n}\n\n\n\n.voice[_ngcontent-%COMP%]:hover{\n    transition-duration: 1s;\n}\n\n\n\n#bio[_ngcontent-%COMP%]{\n    \n}\n\n\n\n#bio[_ngcontent-%COMP%]:hover{\n    background-color: black;\n    color: white;\n}\n\n\n\n#work[_ngcontent-%COMP%]{\n    \n    \n}\n\n\n\n#work[_ngcontent-%COMP%]:hover{\n    \n    background-color: #10ac84;\n    color: white;\n}\n\n\n\n#projects[_ngcontent-%COMP%] {\n    \n    \n}\n\n\n\n#projects[_ngcontent-%COMP%]:hover{\n    \n    background-color: #5f27cd;\n    color: white;\n}\n\n\n\n#about[_ngcontent-%COMP%]{\n    \n    \n}\n\n\n\n#about[_ngcontent-%COMP%]:hover{\n    background-color: rgb(235,59,90);\n    color: white;\n}\n\n\n\n.social[_ngcontent-%COMP%]{\n    width: 10%;\n}\n\n\n\n.arrow[_ngcontent-%COMP%] {\n    width: 1.5vw;\n}\n\n\n\n#rgbimg[_ngcontent-%COMP%]{\n    width: 4vw;\n}\n\n\n\n#rgbimg[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    opacity: 50%;\n    transform: rotate(360deg);\n    transition-duration: 1s; \n}\n\n\n\n#rgbtxt[_ngcontent-%COMP%]{\n    font-family: 'Eina-bold';\n    font-size: 150%;\n    border-width: 1px solid black;\n}\n\n\n\na[_ngcontent-%COMP%]{\n    text-decoration: none;\n}\n\n\n\n\n\n\n\n@media (max-width: 992px){\n\n    .voice[_ngcontent-%COMP%]{\n        height: 35vh;\n    }\n    .arrow[_ngcontent-%COMP%]{\n        width: 4vw;\n    }\n    #rgbimg[_ngcontent-%COMP%]{\n        width: 8vw;\n    }\n    p[_ngcontent-%COMP%]{\n        font-family: 'Eina-light';\n        font-size: 40%;\n    }\n    \n    #gmail[_ngcontent-%COMP%]{\n        width: 10vw;\n    }\n    #linkedin[_ngcontent-%COMP%]{\n        width: 10vw;\n    }\n    #instagram[_ngcontent-%COMP%]{\n        width: 10vw;\n    }\n}\n\n\n\n@media (min-width: 993px){\n    #rgbtxt[_ngcontent-%COMP%]{\n        display: none;\n    }\n\n    #gmail[_ngcontent-%COMP%]{\n        width: 2vw;\n    }\n    #linkedin[_ngcontent-%COMP%]{\n        width: 2vw;\n    }\n    #instagram[_ngcontent-%COMP%]{\n        width: 2vw;\n    }\n}\n\n\n\na[_ngcontent-%COMP%] {\n    color: inherit;\n}\n\n\n\nfa-icon[_ngcontent-%COMP%] {\n    padding-left: 5px;\n    padding-right: 5px;\n    font-size: 130%;\n}\n\n\n\nfa-icon[_ngcontent-%COMP%]:hover{\n    color: lightgrey;\n    transition-duration: 0.3s;\n}\n\n\n\nmat-icon[_ngcontent-%COMP%] {\n    font-size: 250%;\n}\n\n\n\n\n\n\n\nmat-card[_ngcontent-%COMP%]{\n    border-radius: 10px;\n    z-index: 999;\n}\n\n\n\n  .mat-chip-list-wrapper{\n    justify-content: center !important;\n}\n\n\n\nmat-card-title[_ngcontent-%COMP%] {\n    font-family: 'Eina-bold';\n}\n\n\n\nmat-card-content[_ngcontent-%COMP%]{\n    font-family: 'Eina-light';\n    font-size: 100% !important;\n}\n\n\n\nmat-chip[_ngcontent-%COMP%] {\n    font-family: 'Eina-semibold';\n    cursor: pointer;\n}\n\n\n\n.bio-card[_ngcontent-%COMP%] {\n    background-color: #dbf3ec; \n    \n}\n\n\n\n.bio-chip[_ngcontent-%COMP%] {\n    background-color: white; \n    color: #10ac84;\n    justify-content: center;\n}\n\n\n\n.work-card[_ngcontent-%COMP%] {\n    background-color: #c8dcff;\n    \n}\n\n\n\n.work-chip[_ngcontent-%COMP%] {\n    background-color: white;\n    color: #3880ff;\n    justify-content: center;\n}\n\n\n\n.proj-card[_ngcontent-%COMP%] {\n    background-color: #e5ddf7; \n    \n}\n\n\n\n.proj-chip[_ngcontent-%COMP%] {\n    background-color: white; \n    color: #5f27cd;\n    justify-content: center;\n}\n\n\n\n.contacts-card[_ngcontent-%COMP%]{\n    background-color: #facbd9;\n    \n}\n\n\n\n.contacts-chip[_ngcontent-%COMP%] {\n    background-color: white;\n    color: #eb3b6d;\n    justify-content: center;\n}\n\n\n\n@media (max-width: 992px) {\n    .riga[_ngcontent-%COMP%]{\n        flex-direction: column;\n        padding-bottom: 3% !important;\n    }\n    .firstrow[_ngcontent-%COMP%] {\n        padding-bottom: 0px !important;\n    }\n    mat-card[_ngcontent-%COMP%] {\n        margin-bottom: 5%;\n    }\n    .w-100[_ngcontent-%COMP%]{\n        padding-left: 1% !important;\n        padding-right: 1% !important;\n    }\n}\n\n\n\n@media (min-width: 993px) {\n    mat-card[_ngcontent-%COMP%] {\n        height: 27vh;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FtQ0s7Ozs7QUFJTDtJQUNJLGVBQWU7QUFDbkI7Ozs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix1QkFBdUI7QUFDM0I7Ozs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOzs7O0FBRUE7OztHQUdHOzs7O0FBRUg7SUFDSSw0QkFBNEI7SUFDNUIsY0FBYztJQUNkLHNCQUFzQjtBQUMxQjs7OztBQUNBLEtBQUs7Ozs7QUFJTDtJQUNJLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZO0FBQ2hCOzs7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7OztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOzs7O0FBRUE7SUFDSSxnREFBZ0Q7QUFDcEQ7Ozs7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOzs7O0FBRUE7SUFDSSxnREFBZ0Q7SUFDaEQsbURBQW1EO0FBQ3ZEOzs7O0FBQ0E7SUFDSSx5Q0FBeUM7SUFDekMseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7Ozs7QUFFQTtJQUNJLGdEQUFnRDtJQUNoRCwyQ0FBMkM7QUFDL0M7Ozs7QUFDQTtJQUNJLHFDQUFxQztJQUNyQyx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7OztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLDRDQUE0QztBQUNoRDs7OztBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFlBQVk7QUFDaEI7Ozs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7OztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7OztBQUVBO0lBQ0ksVUFBVTtBQUNkOzs7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qix1QkFBdUI7QUFDM0I7Ozs7QUFJQTtJQUNJLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsNkJBQTZCO0FBQ2pDOzs7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7Ozs7QUFFQSxTQUFTOzs7O0FBQUU7O0lBRVA7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0kseUJBQXlCO1FBQ3pCLGNBQWM7SUFDbEI7SUFDQTs7T0FFRztJQUNIO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7SUFDZjtBQUNKOzs7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7Ozs7QUFJQTtJQUNJLGNBQWM7QUFDbEI7Ozs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3Qjs7OztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7OztBQUlBLFFBQVE7Ozs7QUFFUjtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOzs7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7Ozs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7OztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDBCQUEwQjtBQUM5Qjs7OztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGVBQWU7QUFDbkI7Ozs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwwQ0FBMEM7QUFDOUM7Ozs7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsdUJBQXVCO0FBQzNCOzs7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsMENBQTBDO0FBQzlDOzs7O0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsY0FBYztJQUNkLHVCQUF1QjtBQUMzQjs7OztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDBDQUEwQztBQUM5Qzs7OztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCx1QkFBdUI7QUFDM0I7Ozs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwwQ0FBMEM7QUFDOUM7Ozs7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsdUJBQXVCO0FBQzNCOzs7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtRQUN0Qiw2QkFBNkI7SUFDakM7SUFDQTtRQUNJLDhCQUE4QjtJQUNsQztJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSwyQkFBMkI7UUFDM0IsNEJBQTRCO0lBQ2hDO0FBQ0o7Ozs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBodG1sLCAuY29udGFpbmVyLWZsdWlkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6MTAwdmggIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgYmFja2dyb3VuZC1zaXplOiA0MDAlIDQwMCU7XG4gICAgYW5pbWF0aW9uOiBncmFkaWVudCAxNXMgZWFzZSBpbmZpbml0ZTtcbn1cblxuLnNmb25kb2xpZ2h0e1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCB3aGl0ZSwgd2hpdGVzbW9rZSwgcmdiYSg5NCwgMzksIDIwNSwwLjIpKTtcbiAgYmFja2dyb3VuZC1zaXplOiA0MDAlIDQwMCU7XG4gIGFuaW1hdGlvbjogZ3JhZGllbnQgMTBzIGVhc2UgaW5maW5pdGU7XG59XG4uc2ZvbmRvZGFyayB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICMyMjJmM2UsIGJsYWNrKTtcbiAgYmFja2dyb3VuZC1zaXplOiA0MDAlIDQwMCU7XG4gIGFuaW1hdGlvbjogZ3JhZGllbnQgMTBzIGVhc2UgaW5maW5pdGU7XG59XG5cbiAgYm9keSB7XG4gICAgICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XG4gIH1cblxuICBAa2V5ZnJhbWVzIGdyYWRpZW50IHtcbiAgICAgIDAlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gICAgICB9XG4gICAgICA1MCUge1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICAgICAgfVxuICB9ICovXG5cblxuXG4udm9jZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnZvY2U6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IyYmVjMztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcbn1cblxucHtcbiAgICBmb250LWZhbWlseTogJ0VpbmEtbGlnaHQnO1xuICAgIGZvbnQtc2l6ZTogNDAlO1xufVxuXG4vKiBmYS1pY29ue1xuICAgIGZvbnQtc2l6ZTogNjAlO1xuICAgIGNvbG9yOiBibGFjazsgICAgXG59ICovXG5cbi5jb250YWN0e1xuICAgIGZvbnQtZmFtaWx5OiAnU0YtdWx0cmFsaWdodCc7XG4gICAgZm9udC1zaXplOiA0MCU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi8qICAqL1xuXG5cblxuI3NxdWFyZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnRWluYS1ib2xkJztcbiAgICBmb250LXNpemU6IDMwMCU7XG4gICAgcGFkZGluZy10b3A6IDUlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi52b2ljZXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiAzMHZoO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi52b2ljZTpob3ZlcntcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcbn1cblxuI2Jpb3tcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4OSwgMTk1LCAxOTksIDAuMik7ICovXG59XG4jYmlvOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuI3dvcmt7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODksIDE5NSwgMTk5LCAwLjEpOyAqL1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTEsIDIzMiwgMTI5LCAwLjEpOyAgICAgKi9cbn1cbiN3b3JrOmhvdmVye1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigxMSwgMjMyLCAxMjkpOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMGFjODQ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4jcHJvamVjdHMge1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg5LCAxOTUsIDE5OSwgMC4zKTsgKi9cbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYsODIsMjIxLCAwLjEpOyAqL1xufVxuI3Byb2plY3RzOmhvdmVye1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYig2LDgyLDIyMSk7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmMjdjZDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiNhYm91dHtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpOyAqL1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM1LDU5LDkwLCAwLjIpOyAqL1xufVxuI2Fib3V0OmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsNTksOTApO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNvY2lhbHtcbiAgICB3aWR0aDogMTAlO1xufVxuXG4uYXJyb3cge1xuICAgIHdpZHRoOiAxLjV2dztcbn1cblxuI3JnYmltZ3tcbiAgICB3aWR0aDogNHZ3O1xufVxuI3JnYmltZzpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogNTAlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7IFxufVxuXG5cblxuI3JnYnR4dHtcbiAgICBmb250LWZhbWlseTogJ0VpbmEtYm9sZCc7XG4gICAgZm9udC1zaXplOiAxNTAlO1xuICAgIGJvcmRlci13aWR0aDogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG5he1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyptb2JpbGUqLyBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpe1xuXG4gICAgLnZvaWNle1xuICAgICAgICBoZWlnaHQ6IDM1dmg7XG4gICAgfVxuICAgIC5hcnJvd3tcbiAgICAgICAgd2lkdGg6IDR2dztcbiAgICB9XG4gICAgI3JnYmltZ3tcbiAgICAgICAgd2lkdGg6IDh2dztcbiAgICB9XG4gICAgcHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdFaW5hLWxpZ2h0JztcbiAgICAgICAgZm9udC1zaXplOiA0MCU7XG4gICAgfVxuICAgIC8qIC5jb250YXR0aXtcbiAgICAgICAgZm9udC1zaXplOiA0MCU7XG4gICAgfSAqL1xuICAgICNnbWFpbHtcbiAgICAgICAgd2lkdGg6IDEwdnc7XG4gICAgfVxuICAgICNsaW5rZWRpbntcbiAgICAgICAgd2lkdGg6IDEwdnc7XG4gICAgfVxuICAgICNpbnN0YWdyYW17XG4gICAgICAgIHdpZHRoOiAxMHZ3O1xuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5M3B4KXtcbiAgICAjcmdidHh0e1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICNnbWFpbHtcbiAgICAgICAgd2lkdGg6IDJ2dztcbiAgICB9XG4gICAgI2xpbmtlZGlue1xuICAgICAgICB3aWR0aDogMnZ3O1xuICAgIH1cbiAgICAjaW5zdGFncmFte1xuICAgICAgICB3aWR0aDogMnZ3O1xuICAgIH1cbn1cblxuXG5cbmEge1xuICAgIGNvbG9yOiBpbmhlcml0O1xufVxuXG5mYS1pY29uIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgZm9udC1zaXplOiAxMzAlO1xufVxuXG5mYS1pY29uOmhvdmVye1xuICAgIGNvbG9yOiBsaWdodGdyZXk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbn1cblxubWF0LWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjUwJTtcbn1cblxuXG5cbi8qIE5FVyAqL1xuXG5tYXQtY2FyZHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHotaW5kZXg6IDk5OTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtY2hpcC1saXN0LXdyYXBwZXJ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxubWF0LWNhcmQtdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiAnRWluYS1ib2xkJztcbn1cblxubWF0LWNhcmQtY29udGVudHtcbiAgICBmb250LWZhbWlseTogJ0VpbmEtbGlnaHQnO1xuICAgIGZvbnQtc2l6ZTogMTAwJSAhaW1wb3J0YW50O1xufVxuXG5tYXQtY2hpcCB7XG4gICAgZm9udC1mYW1pbHk6ICdFaW5hLXNlbWlib2xkJztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5iaW8tY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZjNlYzsgXG4gICAgLyogYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IDBweCAjZGJmM2VjOyAqL1xufVxuLmJpby1jaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgXG4gICAgY29sb3I6ICMxMGFjODQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi53b3JrLWNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjOGRjZmY7XG4gICAgLyogYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IDBweCAjYzhkY2ZmOyAqL1xufVxuLndvcmstY2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6ICMzODgwZmY7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wcm9qLWNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWRkZjc7IFxuICAgIC8qIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCAwcHggI2U1ZGRmNzsgKi9cbn1cbi5wcm9qLWNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcbiAgICBjb2xvcjogIzVmMjdjZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRhY3RzLWNhcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhY2JkOTtcbiAgICAvKiBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggMHB4ICNmYWNiZDk7ICovXG59XG4uY29udGFjdHMtY2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6ICNlYjNiNmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgIC5yaWdhe1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMyUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmZpcnN0cm93IHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBtYXQtY2FyZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICAgIH1cbiAgICAudy0xMDB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMSUgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMSUgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTNweCkge1xuICAgIG1hdC1jYXJkIHtcbiAgICAgICAgaGVpZ2h0OiAyN3ZoO1xuICAgIH1cblxufVxuIl19 */", ".testolight[_ngcontent-%COMP%]     { color: black !important; }\n    .testodark[_ngcontent-%COMP%]      { color: whitesmoke !important; }\n    .shadowdark[_ngcontent-%COMP%]     { box-shadow: -10px 15px 40px -20px #c8dcff; }\n    .cardark[_ngcontent-%COMP%]        { background-blend-mode: darken; }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'definitely';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["#head[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-top: 2%;\n    font-size: 300%;\n    \n    color: black;\n}\n#head[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    color: lightgrey;\n    transition-duration: 0.3s;\n}\n.col-12[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n#mode[_ngcontent-%COMP%] {\n    width: 4vw;\n    margin-bottom: 2%;\n}\n#mode[_ngcontent-%COMP%]:hover{\n    opacity: 70%;\n    cursor: pointer;\n    transition-duration: 0.5s;\n    transform: rotate(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNoZWFkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDIlO1xuICAgIGZvbnQtc2l6ZTogMzAwJTtcbiAgICAvKiBmb250LWZhbWlseTogJ0FkYW0nOyAqL1xuICAgIGNvbG9yOiBibGFjaztcbn1cbiNoZWFkOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogbGlnaHRncmV5O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG59XG5cbi5jb2wtMTJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jbW9kZSB7XG4gICAgd2lkdGg6IDR2dztcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbn1cbiNtb2RlOmhvdmVye1xuICAgIG9wYWNpdHk6IDcwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _colors_colors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./colors/colors.component */ "KYig");
/* harmony import */ var _torvergata_torvergata_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./torvergata/torvergata.component */ "L6WB");
/* harmony import */ var _cv_cv_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cv/cv.component */ "7/eh");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./work/work.component */ "kH/F");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./homepage/homepage.component */ "Oh3b");
/* harmony import */ var _teaching_teaching_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./teaching/teaching.component */ "ATnn");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");






// import { HomeComponent } from './home/home.component';







// MATERIAL










const appRoutes = [
    { path: '', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__["HomepageComponent"] },
    // {path: 'home', component: HomeComponent},
    { path: 'colors', component: _colors_colors_component__WEBPACK_IMPORTED_MODULE_6__["ColorsComponent"] },
    { path: 'torvergata', component: _torvergata_torvergata_component__WEBPACK_IMPORTED_MODULE_7__["TorvergataComponent"] },
    { path: 'cv', component: _cv_cv_component__WEBPACK_IMPORTED_MODULE_8__["CvComponent"] },
    { path: 'work', component: _work_work_component__WEBPACK_IMPORTED_MODULE_9__["WorkComponent"] },
    { path: 'teaching', component: _teaching_teaching_component__WEBPACK_IMPORTED_MODULE_11__["TeachingComponent"] },
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDividerModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        // HomeComponent,
        _colors_colors_component__WEBPACK_IMPORTED_MODULE_6__["ColorsComponent"],
        _torvergata_torvergata_component__WEBPACK_IMPORTED_MODULE_7__["TorvergataComponent"],
        _cv_cv_component__WEBPACK_IMPORTED_MODULE_8__["CvComponent"],
        _work_work_component__WEBPACK_IMPORTED_MODULE_9__["WorkComponent"],
        _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__["HomepageComponent"],
        _teaching_teaching_component__WEBPACK_IMPORTED_MODULE_11__["TeachingComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDividerModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    // HomeComponent,
                    _colors_colors_component__WEBPACK_IMPORTED_MODULE_6__["ColorsComponent"],
                    _torvergata_torvergata_component__WEBPACK_IMPORTED_MODULE_7__["TorvergataComponent"],
                    _cv_cv_component__WEBPACK_IMPORTED_MODULE_8__["CvComponent"],
                    _work_work_component__WEBPACK_IMPORTED_MODULE_9__["WorkComponent"],
                    _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__["HomepageComponent"],
                    _teaching_teaching_component__WEBPACK_IMPORTED_MODULE_11__["TeachingComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDividerModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
                ],
                schemas: [
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "deNa":
/*!**********************************!*\
  !*** ./src/app/theme.service.ts ***!
  \**********************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ThemeService {
    constructor() {
        this.modeBool = false;
    }
    switchMode() {
        this.modeBool = !this.modeBool;
        console.log(this.modeBool);
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(); };
ThemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "kH/F":
/*!****************************************!*\
  !*** ./src/app/work/work.component.ts ***!
  \****************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme.service */ "deNa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");








class WorkComponent {
    constructor(x, ts) {
        this.x = x;
        this.ts = ts;
    }
    ngOnInit() {
        if (this.ts.modeBool === true) {
            this.mode = true;
        }
        else {
            this.mode = false;
        }
        console.log(this.ts.modeBool);
        console.log(this.mode);
    }
    switchMode() {
        this.ts.switchMode();
        this.mode = this.ts.modeBool;
        console.log(this.mode);
    }
    goHome() {
        this.x.navigate(['/']);
    }
}
WorkComponent.ɵfac = function WorkComponent_Factory(t) { return new (t || WorkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"])); };
WorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkComponent, selectors: [["app-work"]], decls: 45, vars: 5, consts: [[1, "container-fluid", 3, "ngClass"], ["id", "head", 1, "row"], [1, "col-12", 2, "z-index", "999 !important"], [1, "header-span", 3, "click"], ["src", "assets/pn.png", "alt", "", 1, "pn-logo"], ["id", "nome", 2, "font-size", "300%", 3, "ngClass"], [1, "row"], ["id", "back", 1, "col-3", 2, "cursor", "pointer", 3, "click"], [1, "col-12", "toggle-container", 2, "text-align", "center"], ["color", "primary", 3, "checked", "change"], [1, "d-flex", "justify-content-center", "align-items-center"], ["matRipple", "", 1, "mat-elevation-z12", "mt-4", 3, "ngClass"], [1, "row", "sezione", 2, "margin-top", "2%", 3, "ngClass"], [1, "col-lg-6", "col-xs-12", "d-flex", "align-items-center", "justify-content-center", "text-center", "left"], [1, "col-lg-6", "col-xs-12", "right"], [1, "textTeach", 2, "font-family", "Eina-bold"], ["href", "http://www.rotechnology.it/", "target", "_blank"], [2, "font-family", "Eina-light"], [2, "font-family", "Eina-semibold"], [1, "fixed-bottom", "d-flex", "justify-content-center", "pt-3", "pb-1", 2, "font-family", "Eina-light", "font-size", "75%"]], template: function WorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkComponent_Template_span_click_3_listener() { return ctx.goHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "aolo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkComponent_Template_div_click_8_listener() { return ctx.goHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-slide-toggle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function WorkComponent_Template_mat_slide_toggle_change_10_listener() { return ctx.switchMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Front End Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Angular Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "RoTechnology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Regular Contractor at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Accenture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Collaborating with Trevize s.r.l");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Design and Development of web-sites, web-apps and mobile applications.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Skills : Angular, Ionic, NativeScript, Wordpress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Designed by Paolo Nazzaro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "testolight" : "testodark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "lightsez" : "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRipple"]], styles: [".left[_ngcontent-%COMP%] {\n    font-family: 'Eina-bold';\n}\n\nmat-card[_ngcontent-%COMP%] {\n    border-radius: 25px;\n    \n}\n\n.container-fluid[_ngcontent-%COMP%] {\n    height: 100vh !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay93b3JrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIscURBQXFEO0FBQ3pEOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvd29yay93b3JrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdCB7XG4gICAgZm9udC1mYW1pbHk6ICdFaW5hLWJvbGQnO1xufVxuXG5tYXQtY2FyZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAvKiBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggMHB4ICNjOGRjZmYgIWltcG9ydGFudDsgKi9cbn1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xufSJdfQ== */", ".sfondolight[_ngcontent-%COMP%] { background-color: white } \n    .sfondodark[_ngcontent-%COMP%] { background-color: #222f3e; color: whitesmoke; }\n    .visible[_ngcontent-%COMP%] { overflow: visible; transition-duration: 1s;}\n    .hidden[_ngcontent-%COMP%] { overflow: hidden; }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-work',
                templateUrl: './work.component.html',
                styleUrls: ['./work.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




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

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map