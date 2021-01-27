(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/paolo/Documents/projects/definitely/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "7/eh":
    /*!************************************!*\
      !*** ./src/app/cv/cv.component.ts ***!
      \************************************/

    /*! exports provided: CvComponent */

    /***/
    function eh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CvComponent", function () {
        return CvComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../theme.service */
      "deNa");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");

      var FileSaver = __webpack_require__(
      /*! file-saver */
      "Iab2");

      var CvComponent = /*#__PURE__*/function () {
        function CvComponent(x, ts) {
          _classCallCheck(this, CvComponent);

          this.x = x;
          this.ts = ts;
          this.stateDeg = 'small';
          this.stateEu = 'small';
          this.stateBk = 'small';
        }

        _createClass(CvComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.ts.modeBool === true) {
              this.mode = true;
            } else {
              this.mode = false;
            }

            console.log(this.ts.modeBool);
            console.log(this.mode);
          }
        }, {
          key: "switchMode",
          value: function switchMode() {
            this.ts.switchMode();
            this.mode = this.ts.modeBool;
            console.log(this.mode);
          }
        }, {
          key: "downloadPdf",
          value: function downloadPdf(pdfUrl, pdfName) {
            FileSaver.saveAs(pdfUrl, pdfName);
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
        }, {
          key: "goHome",
          value: function goHome() {
            this.x.navigate(['/']);
          }
        }, {
          key: "goTv",
          value: function goTv() {
            this.x.navigate(['torvergata']);
          }
        }]);

        return CvComponent;
      }();

      CvComponent.ɵfac = function CvComponent_Factory(t) {
        return new (t || CvComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"]));
      };

      CvComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CvComponent,
        selectors: [["app-cv"]],
        decls: 214,
        vars: 15,
        consts: [[1, "container-fluid", 3, "ngClass"], ["id", "head", 1, "row"], [1, "col-12"], ["id", "nome", 3, "ngClass", "click"], [2, "color", "darkgrey"], [1, "row"], ["id", "back", 1, "col-3", 2, "cursor", "pointer", 3, "click"], [1, "col-12", 2, "text-align", "center"], ["color", "primary", 3, "checked", "change"], [1, "d-flex", "justify-content-center", "align-items-center"], ["matRipple", "", 1, "mat-elevation-z8", "mt-4", 3, "ngClass"], [1, "row", "sezione", 2, "margin-top", "2%", 3, "ngClass"], [1, "col-lg-6", "col-xs-12", "left"], ["src", "./assets/leaf.png", "alt", "", 1, "icon"], [1, "col-lg-6", "col-xs-12", "right"], [1, "impo"], [1, "d-flex", "justify-content-center"], ["matRipple", "", 1, "mat-elevation-z24", "mt-2", 3, "ngClass"], [1, "row", "sezione", 3, "ngClass"], ["src", "./assets/pencil.png", "alt", "", 1, "icon"], [1, "when"], [1, "info"], ["matRipple", "", 1, "mat-elevation-z20", "mt-2", 3, "ngClass"], ["src", "./assets/briefcase.png", "alt", "", 1, "icon"], ["src", "./assets/presentation.png", "alt", "", 1, "icon"], ["id", "t4f", 1, "impo", 3, "click"], ["id", "eaa", 1, "impo"], ["href", "https://flyeaa.com/"], ["src", "./assets/diamond.png", "alt", "", 1, "icon"], [1, "topic"], [1, "moreinfo"], ["src", "./assets/ball.png", "alt", "", 1, "icon"], [1, "d-flex", "justify-content-center", 2, "text-align", "center", "margin-top", "3%"], ["color", "primary", "selected", "true", 1, "mat-elevation-z20"], ["href", "javascript:void(0)", 2, "color", "white", 3, "click"], [1, "d-flex", "justify-content-center", "pt-3", "pb-1", 2, "font-family", "Eina-light", "font-size", "75%"]],
        template: function CvComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvComponent_Template_span_click_3_listener() {
              return ctx.goHome();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvComponent_Template_div_click_9_listener() {
              return ctx.goHome();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-slide-toggle", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CvComponent_Template_mat_slide_toggle_change_11_listener() {
              return ctx.switchMode();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Bio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Paolo Nazzaro");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Date of Birth ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "22 / 10 / 1996");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Place of Birth ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Rome");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Email ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "paolonazzaro23@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-card", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Education & Training");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Languages in the Information Society Degree");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "2015-2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " University of Rome Tor Vergata ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Graduated with 110/110 with the thesis \"Font's analysis and use in web communication\". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "European project EU-MADE4LL");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "2017");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Production of a corporate video regarding the University of Rome Tor Vergata. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Scientific High School Degree");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "2010-2015");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-card", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Front End Developer at RoTechnology");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "2020-now");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Angular Developer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Web Developing Assistant at Tor Vergata University");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "2019-now");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "University Tutor for HTML + CSS + JavaScript based courses.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Front End Developer at Trevize s.r.l");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "2019-2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Collaborated as Front End Developer for Angular, Ionic and Wordpress based projects. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Web Developing Teaching Assistant at Betacom");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Teaching Assistant for Angular based courses.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Journalist at Quotidiano del Lazio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "2018-2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Office Clerk at Tor Vergata University");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "2018");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "mat-card", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvComponent_Template_span_click_131_listener() {
              return ctx.goTv();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " Tor Vergata 4 Foreigners");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Angular web app and Ionic mobile app for University of Rome Tor Vergata\u2019s foreign students. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "European Aviation Academy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "https://flyeaa.com/ ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " Elementor + Wordpress based web site ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "mat-card", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Skills");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Developing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Angular, Typescript, Ionic, Javascript, Nativescript, Wordpress ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "span", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Logo / Icon Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Illustrator, Photoshop");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Languages");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "English C1, German B1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "mat-card", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Interests");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "img", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Creation of minimal graphic contents");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Sports");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "span", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Basketball");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Playing since 2002");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "span", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Soccer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "mat-chip-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "mat-chip", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvComponent_Template_a_click_210_listener() {
              return ctx.downloadPdf("./assets/cv-paolo-nazzaro-pdf.pdf", "cv-paolo-nazzaro");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, " Download PDF ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, " Designed by Paolo Nazzaro\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.mode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "lightsez" : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "lightsez" : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "lightsez" : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "lightsez" : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "lightsez" : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "lightsez" : "");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRipple"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChip"]],
        styles: [".icon[_ngcontent-%COMP%]{\n    width: 7%;\n    padding-top: 5%;\n}\n\nmat-card[_ngcontent-%COMP%] {\n    margin-bottom: 3%;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    border-radius: 20px;\n    \n}\n\n.sezione[_ngcontent-%COMP%]{\n    padding-top: 2%;\n    padding-bottom: 2%;\n    font-family: 'Eina-light';\n}\n\n.left[_ngcontent-%COMP%]{\n    text-align: center;\n}\n\nh1[_ngcontent-%COMP%]{\n    font-family: 'Eina-bold';\n}\n\n.impo[_ngcontent-%COMP%]{\n    font-family: 'Eina-semibold';\n}\n\n.lessimpo[_ngcontent-%COMP%]{\n    font-family: 'Eina-regular';\n}\n\n.when[_ngcontent-%COMP%]{\n    font-family: 'Eina-regular';\n    font-size: 80%;\n}\n\n.topic[_ngcontent-%COMP%]{\n    font-family: 'Eina-regular';\n    font-size: 90%;\n}\n\n.info[_ngcontent-%COMP%]{\n    font-size: 90%;\n}\n\n.moreinfo[_ngcontent-%COMP%]{\n    font-size: 80%;\n}\n\n#linea[_ngcontent-%COMP%] {\n    height: 1px;\n    background-color: black;\n}\n\n#t4f[_ngcontent-%COMP%]{\n    cursor: pointer;\n}\n\n#t4f[_ngcontent-%COMP%]:hover{\n    font-size: 110%;\n    transition-duration: 0.5s;\n}\n\n@media (max-width: 992px){\n    #back[_ngcontent-%COMP%]{\n        display: none;\n    }\n    .left[_ngcontent-%COMP%]{\n        text-align: left;\n    }\n    h1[_ngcontent-%COMP%]{\n        font-size: 180%;\n    }\n    .icon[_ngcontent-%COMP%]{\n        display: none;\n    }\n    .web[_ngcontent-%COMP%]{\n        display: none;\n        font-weight: lighter;\n    }\n}\n\n@media (min-width: 993px){\n    .mob[_ngcontent-%COMP%]{\n        display: none;\n    }\n    .lightsez[_ngcontent-%COMP%]:hover {\n        \n        color: black;\n        transition-duration: 0.5s;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3YvY3YuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7O0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7O0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7O0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsY0FBYztBQUNsQjs7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBR0E7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLG9CQUFvQjtJQUN4QjtBQUNKOztBQUdBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSwrQkFBK0I7UUFDL0IsWUFBWTtRQUNaLHlCQUF5QjtJQUM3QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY3YvY3YuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmljb257XG4gICAgd2lkdGg6IDclO1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbn1cblxubWF0LWNhcmQge1xuICAgIG1hcmdpbi1ib3R0b206IDMlO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIC8qIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCAwcHggI2M4ZGNmZjsgKi9cbn1cblxuLnNlemlvbmV7XG4gICAgcGFkZGluZy10b3A6IDIlO1xuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcbiAgICBmb250LWZhbWlseTogJ0VpbmEtbGlnaHQnO1xufVxuXG4ubGVmdHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5oMXtcbiAgICBmb250LWZhbWlseTogJ0VpbmEtYm9sZCc7XG59XG4uaW1wb3tcbiAgICBmb250LWZhbWlseTogJ0VpbmEtc2VtaWJvbGQnO1xufVxuLmxlc3NpbXBve1xuICAgIGZvbnQtZmFtaWx5OiAnRWluYS1yZWd1bGFyJztcbn1cbi53aGVue1xuICAgIGZvbnQtZmFtaWx5OiAnRWluYS1yZWd1bGFyJztcbiAgICBmb250LXNpemU6IDgwJTtcbn1cbi50b3BpY3tcbiAgICBmb250LWZhbWlseTogJ0VpbmEtcmVndWxhcic7XG4gICAgZm9udC1zaXplOiA5MCU7XG59XG4uaW5mb3tcbiAgICBmb250LXNpemU6IDkwJTtcbn1cbi5tb3JlaW5mb3tcbiAgICBmb250LXNpemU6IDgwJTtcbn1cbiNsaW5lYSB7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4jdDRme1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiN0NGY6aG92ZXJ7XG4gICAgZm9udC1zaXplOiAxMTAlO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KXtcbiAgICAjYmFja3tcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmxlZnR7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICAgIGgxe1xuICAgICAgICBmb250LXNpemU6IDE4MCU7XG4gICAgfVxuICAgIC5pY29ue1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAud2Vie1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICB9XG59XG5cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5M3B4KXtcbiAgICAubW9ie1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAubGlnaHRzZXo6aG92ZXIge1xuICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMmY2OyAqL1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG4gICAgfVxufVxuXG5cbiJdfQ== */", ".sfondolight[_ngcontent-%COMP%] { background-color: white } \n    .sfondodark[_ngcontent-%COMP%] { background-color: #222f3e; color: whitesmoke; }\n    .visible[_ngcontent-%COMP%] { overflow: visible; transition-duration: 1s;}\n    .hidden[_ngcontent-%COMP%] { overflow: hidden; }"],
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
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ATnn":
    /*!************************************************!*\
      !*** ./src/app/teaching/teaching.component.ts ***!
      \************************************************/

    /*! exports provided: TeachingComponent */

    /***/
    function ATnn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeachingComponent", function () {
        return TeachingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../theme.service */
      "deNa");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");

      var TeachingComponent = /*#__PURE__*/function () {
        function TeachingComponent(x, ts) {
          _classCallCheck(this, TeachingComponent);

          this.x = x;
          this.ts = ts;
        }

        _createClass(TeachingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.ts.modeBool === true) {
              this.mode = true;
            } else {
              this.mode = false;
            }

            console.log(this.ts.modeBool);
            console.log(this.mode);
          }
        }, {
          key: "switchMode",
          value: function switchMode() {
            this.ts.switchMode();
            this.mode = this.ts.modeBool;
            console.log(this.mode);
          }
        }, {
          key: "goHome",
          value: function goHome() {
            this.x.navigate(['/']);
          }
        }]);

        return TeachingComponent;
      }();

      TeachingComponent.ɵfac = function TeachingComponent_Factory(t) {
        return new (t || TeachingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]));
      };

      TeachingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TeachingComponent,
        selectors: [["app-teaching"]],
        decls: 44,
        vars: 5,
        consts: [[1, "container-fluid", 3, "ngClass"], ["id", "head", 1, "row"], [1, "col-12"], ["id", "nome", 3, "ngClass", "click"], [2, "color", "darkgrey"], [1, "row"], ["id", "back", 1, "col-3", 2, "cursor", "pointer", 3, "click"], [1, "col-12", 2, "text-align", "center"], ["color", "primary", 3, "checked", "change"], [1, "d-flex", "justify-content-center", "align-items-center"], ["matRipple", "", 1, "mat-elevation-z12", "mt-4", 3, "ngClass"], [1, "row", "sezione", 2, "margin-top", "2%", 3, "ngClass"], [1, "col-lg-6", "col-xs-12", "d-flex", "align-items-center", "justify-content-center", "left"], [1, "col-lg-6", "col-xs-12", "right"], [1, "textTeach", 2, "font-family", "Eina-semibold"], ["href", "http://giorgiopiccardo.com"], ["color", "primary", "selected", "true", 1, "mat-elevation-z20", "p-2"], ["href", "https://www-2020.linfo.lettere.uniroma2.it/", 2, "color", "white"], [2, "font-family", "Eina-bold"], [2, "font-family", "Eina-light"], [2, "font-family", "Eina-semibold"], [1, "fixed-bottom", "d-flex", "justify-content-center", "pt-3", "pb-1", 2, "font-family", "Eina-light", "font-size", "75%"]],
        template: function TeachingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeachingComponent_Template_span_click_3_listener() {
              return ctx.goHome();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeachingComponent_Template_div_click_9_listener() {
              return ctx.goHome();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-slide-toggle", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TeachingComponent_Template_mat_slide_toggle_change_11_listener() {
              return ctx.switchMode();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Teaching Assistant");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Prof. Giorgio Piccardo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "'s teaching assistant for ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Web Developing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " courses.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-chip-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-chip", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " LINFO course");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Tor Vergata University");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Via Columbia, 1, 00133 Roma RM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Languages in the Information Society");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Designed by Paolo Nazzaro\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.mode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "lightsez" : "");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRipple"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChip"]],
        styles: [".left[_ngcontent-%COMP%] {\n    font-family: 'Eina-bold';\n}\n\nmat-card[_ngcontent-%COMP%] {\n    border-radius: 25px;\n    \n}\n\n.container-fluid[_ngcontent-%COMP%] {\n    height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hpbmcvdGVhY2hpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixxREFBcUQ7QUFDekQ7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvdGVhY2hpbmcvdGVhY2hpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZWZ0IHtcbiAgICBmb250LWZhbWlseTogJ0VpbmEtYm9sZCc7XG59XG5cbm1hdC1jYXJkIHtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIC8qIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCAwcHggI2M4ZGNmZiAhaW1wb3J0YW50OyAqL1xufVxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufSJdfQ== */", ".sfondolight[_ngcontent-%COMP%] { background-color: white } \n    .sfondodark[_ngcontent-%COMP%] { background-color: #222f3e; color: whitesmoke; }\n    .visible[_ngcontent-%COMP%] { overflow: visible; transition-duration: 1s;}\n    .hidden[_ngcontent-%COMP%] { overflow: hidden; }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeachingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-teaching',
            templateUrl: './teaching.component.html',
            styleUrls: ['./teaching.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
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
    "KYig":
    /*!********************************************!*\
      !*** ./src/app/colors/colors.component.ts ***!
      \********************************************/

    /*! exports provided: ColorsComponent */

    /***/
    function KYig(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColorsComponent", function () {
        return ColorsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      var ColorsComponent = /*#__PURE__*/function () {
        function ColorsComponent(_snackBar) {
          _classCallCheck(this, ColorsComponent);

          this._snackBar = _snackBar;
          this.mode = false;
        }

        _createClass(ColorsComponent, [{
          key: "openSnackBar",
          value: function openSnackBar(message, action) {
            this._snackBar.open(message, action, {
              duration: 2000
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "switchMode",
          value: function switchMode() {
            this.mode = !this.mode;
          }
        }, {
          key: "copyMessage",
          value: function copyMessage(val) {
            var selBox = document.createElement('textarea');
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
        }]);

        return ColorsComponent;
      }();

      ColorsComponent.ɵfac = function ColorsComponent_Factory(t) {
        return new (t || ColorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]));
      };

      ColorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ColorsComponent,
        selectors: [["app-colors"]],
        decls: 22,
        vars: 3,
        consts: [[1, "container-fluid", 3, "ngClass"], ["id", "head", 1, "row"], [1, "col-12"], ["routerLink", "", "id", "nome", 3, "ngClass"], [2, "color", "darkgrey"], [1, "row"], [1, "col-lg-12", "col-xs-12", 2, "text-align", "center"], ["color", "primary", 3, "checked", "change"], [1, "d-flex", "justify-content-center", "align-items-center", "flex-column", "pt-3"], ["matRipple", "", 1, "mb-2", "mat-elevation-z12", 2, "background-color", "#10ac84", "width", "50%", "height", "70px", 3, "click"], ["matRipple", "", 1, "mb-2", "mat-elevation-z12", 2, "background-color", "#dbf3ec", "width", "50%", "height", "70px", 3, "click"], ["matRipple", "", 1, "mb-2", "mat-elevation-z12", 2, "background-color", "#c8dcff", "width", "50%", "height", "70px", 3, "click"], ["matRipple", "", 1, "mb-2", "mat-elevation-z12", 2, "background-color", "#3880ff", "width", "50%", "height", "70px", 3, "click"], ["matRipple", "", 1, "mb-2", "mat-elevation-z12", 2, "background-color", "#5f27cd", "width", "50%", "height", "70px", 3, "click"], ["matRipple", "", 1, "mb-2", "mat-elevation-z12", 2, "background-color", "#eb3b6d", "width", "50%", "height", "70px", 3, "click"], ["matRipple", "", 1, "mb-2", "mat-elevation-z12", 2, "background-color", "#facbd9", "width", "50%", "height", "70px", 3, "click"], ["matRipple", "", 1, "mb-2", "mat-elevation-z12", 2, "background-color", "#e5ddf7", "width", "50%", "height", "70px", 3, "click"], [1, "d-flex", "justify-content-center", "pt-3", "pb-1", 2, "font-family", "Eina-light", "font-size", "75%"]],
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-slide-toggle", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ColorsComponent_Template_mat_slide_toggle_change_10_listener() {
              return ctx.switchMode();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorsComponent_Template_mat_card_click_12_listener() {
              return ctx.copyMessage("#10ac84");
            })("click", function ColorsComponent_Template_mat_card_click_12_listener() {
              return ctx.openSnackBar("HEX copied in your clipboard!", "OK");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorsComponent_Template_mat_card_click_13_listener() {
              return ctx.copyMessage("#dbf3ec");
            })("click", function ColorsComponent_Template_mat_card_click_13_listener() {
              return ctx.openSnackBar("HEX copied in your clipboard!", "OK");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorsComponent_Template_mat_card_click_14_listener() {
              return ctx.copyMessage("#c8dcff");
            })("click", function ColorsComponent_Template_mat_card_click_14_listener() {
              return ctx.openSnackBar("HEX copied in your clipboard!", "OK");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorsComponent_Template_mat_card_click_15_listener() {
              return ctx.copyMessage("#3880ff");
            })("click", function ColorsComponent_Template_mat_card_click_15_listener() {
              return ctx.openSnackBar("HEX copied in your clipboard!", "OK");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorsComponent_Template_mat_card_click_16_listener() {
              return ctx.copyMessage("#5f27cd");
            })("click", function ColorsComponent_Template_mat_card_click_16_listener() {
              return ctx.openSnackBar("HEX copied in your clipboard!", "OK");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorsComponent_Template_mat_card_click_17_listener() {
              return ctx.copyMessage("#eb3b6d");
            })("click", function ColorsComponent_Template_mat_card_click_17_listener() {
              return ctx.openSnackBar("HEX copied in your clipboard!", "OK");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorsComponent_Template_mat_card_click_18_listener() {
              return ctx.copyMessage("#facbd9");
            })("click", function ColorsComponent_Template_mat_card_click_18_listener() {
              return ctx.openSnackBar("HEX copied in your clipboard!", "OK");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorsComponent_Template_mat_card_click_19_listener() {
              return ctx.copyMessage("#e5ddf7");
            })("click", function ColorsComponent_Template_mat_card_click_19_listener() {
              return ctx.openSnackBar("HEX copied in your clipboard!", "OK");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Designed by Paolo Nazzaro ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.mode);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRipple"]],
        styles: ["mat-card[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\n@media (max-width: 992px) {\n    .container-fluid[_ngcontent-%COMP%] {\n        height: 100vh;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sb3JzL2NvbG9ycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29sb3JzL2NvbG9ycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgfVxufSJdfQ== */", ".sfondolight[_ngcontent-%COMP%] { background-color: white }\n  \n    .sfondodark[_ngcontent-%COMP%] { background-color: #222f3e; color: whitesmoke; }"]
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
          return [{
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "L6WB":
    /*!****************************************************!*\
      !*** ./src/app/torvergata/torvergata.component.ts ***!
      \****************************************************/

    /*! exports provided: TorvergataComponent */

    /***/
    function L6WB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TorvergataComponent", function () {
        return TorvergataComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../theme.service */
      "deNa");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      var TorvergataComponent = /*#__PURE__*/function () {
        function TorvergataComponent(x, ts) {
          _classCallCheck(this, TorvergataComponent);

          this.x = x;
          this.ts = ts;
        }

        _createClass(TorvergataComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.ts.modeBool === true) {
              this.mode = true;
            } else {
              this.mode = false;
            }

            console.log(this.ts.modeBool);
            console.log(this.mode);
          }
        }, {
          key: "switchMode",
          value: function switchMode() {
            this.ts.switchMode();
            this.mode = this.ts.modeBool;
            console.log(this.mode);
          }
        }, {
          key: "goHome",
          value: function goHome() {
            this.x.navigate(['/']);
          }
        }]);

        return TorvergataComponent;
      }();

      TorvergataComponent.ɵfac = function TorvergataComponent_Factory(t) {
        return new (t || TorvergataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]));
      };

      TorvergataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TorvergataComponent,
        selectors: [["app-torvergata"]],
        decls: 77,
        vars: 7,
        consts: [[1, "container-fluid", 3, "ngClass"], ["id", "head", 1, "row"], [1, "col-12"], ["id", "nome", 3, "ngClass", "click"], [2, "color", "darkgrey"], [1, "row"], [1, "col-12", 2, "text-align", "center"], ["color", "primary", 3, "checked", "change"], [1, "d-flex", "justify-content-center", "align-items-center", "px-2", "pt-3"], ["matRipple", "", 1, "mat-elevation-z12", "w-100", 3, "ngClass"], [1, "row", "sezione", "d-flex", "justify-content-center", "align-items-center", 2, "margin-top", "2%", 3, "ngClass"], [1, "col-lg-6", "col-xs-12", "d-flex", "justify-content-center"], ["src", "./assets/homeiphone.png", "id", "iphone", "alt", ""], [1, "col-lg-6", "col-xs-12", "right"], ["id", "torvergata"], ["id", "text"], [1, "row", "sezione", "back", "d-flex", "justify-content-center", "align-items-center", 2, "margin-top", "2%", 3, "ngClass"], ["src", "./assets/docsphone.png", "id", "iphone", "alt", ""], [1, "d-flex", "justify-content-center", "pt-3", "pb-1", 2, "font-family", "Eina-light", "font-size", "75%"]],
        template: function TorvergataComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TorvergataComponent_Template_span_click_3_listener() {
              return ctx.goHome();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-slide-toggle", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TorvergataComponent_Template_mat_slide_toggle_change_10_listener() {
              return ctx.switchMode();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Tor Vergata 4 Foreigners");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Ionic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " + ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Angular");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " app");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "iOS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " + ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Android");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "JWT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Authentication");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-card", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "PDF");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " + ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Gallery");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " + ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Camera");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " File Upload");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Multilanguage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "File ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Download");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Designed by Paolo Nazzaro\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.mode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "lightsez" : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "lightsez" : "");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRipple"]],
        styles: ["mat-card[_ngcontent-%COMP%] {\n    border-radius: 25px;\n    \n    margin-bottom: 3%;\n}\n\n#iphone[_ngcontent-%COMP%] {\n    width: 20vw;\n}\n\n#torvergata[_ngcontent-%COMP%] {\n    font-family: 'Eina-bold';\n    white-space: nowrap;\n}\n\n#text[_ngcontent-%COMP%] {\n    font-family: 'Eina-light';\n}\n\nb[_ngcontent-%COMP%]{\n    font-family: 'Eina-regular';\n}\n\n#footer[_ngcontent-%COMP%]{font-family: 'SF-ultralight'; display: flex; justify-content: center; margin-top: 2%;}\n\n.features[_ngcontent-%COMP%]{\n    font-family: 'Eina-regular';\n    text-align: center;\n}\n\n@media (max-width: 992px){\n    #back[_ngcontent-%COMP%]{\n        display: none;\n    }\n    #rgb[_ngcontent-%COMP%]{\n        \n        width: 20vw;\n    }\n    #iphone[_ngcontent-%COMP%]{\n        width: 50vw;\n        padding-top: 5%;\n        padding-bottom: 5%;\n    }\n    #mode[_ngcontent-%COMP%]{\n        width: 8vw;\n    }\n    #torvergata[_ngcontent-%COMP%]{\n        font-size: 150%;\n        text-align: center;\n        padding-top: 3%;\n    }\n    #templateWeb[_ngcontent-%COMP%]{\n        display: none;\n    }\n    #text[_ngcontent-%COMP%] {\n        text-align: center;\n    }\n    .back[_ngcontent-%COMP%] {\n        flex-direction: column-reverse !important;\n    }\n}\n\n@media (min-width: 992px){\n      #templateMobile[_ngcontent-%COMP%]{\n          display: none;\n      }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9ydmVyZ2F0YS90b3J2ZXJnYXRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIscURBQXFEO0lBQ3JELGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUEsUUFBUSw0QkFBNEIsRUFBRSxhQUFhLEVBQUUsdUJBQXVCLEVBQUUsY0FBYyxDQUFDOztBQUU3RjtJQUNJLDJCQUEyQjtJQUMzQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7UUFDWCxlQUFlO1FBQ2Ysa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSx5Q0FBeUM7SUFDN0M7QUFDSjs7QUFFRTtNQUNJO1VBQ0ksYUFBYTtNQUNqQjtFQUNKIiwiZmlsZSI6InNyYy9hcHAvdG9ydmVyZ2F0YS90b3J2ZXJnYXRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAvKiBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggMHB4ICNlNWRkZjcgIWltcG9ydGFudDsgKi9cbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcbn1cblxuI2lwaG9uZSB7XG4gICAgd2lkdGg6IDIwdnc7XG59XG5cbiN0b3J2ZXJnYXRhIHtcbiAgICBmb250LWZhbWlseTogJ0VpbmEtYm9sZCc7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuI3RleHQge1xuICAgIGZvbnQtZmFtaWx5OiAnRWluYS1saWdodCc7XG59XG5ie1xuICAgIGZvbnQtZmFtaWx5OiAnRWluYS1yZWd1bGFyJztcbn1cblxuI2Zvb3Rlcntmb250LWZhbWlseTogJ1NGLXVsdHJhbGlnaHQnOyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgbWFyZ2luLXRvcDogMiU7fVxuXG4uZmVhdHVyZXN7XG4gICAgZm9udC1mYW1pbHk6ICdFaW5hLXJlZ3VsYXInO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KXtcbiAgICAjYmFja3tcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgI3JnYntcbiAgICAgICAgLyogaGVpZ2h0OiA1dmg7ICovXG4gICAgICAgIHdpZHRoOiAyMHZ3O1xuICAgIH1cbiAgICAjaXBob25le1xuICAgICAgICB3aWR0aDogNTB2dztcbiAgICAgICAgcGFkZGluZy10b3A6IDUlO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNSU7XG4gICAgfVxuICAgICNtb2Rle1xuICAgICAgICB3aWR0aDogOHZ3O1xuICAgIH1cbiAgICAjdG9ydmVyZ2F0YXtcbiAgICAgICAgZm9udC1zaXplOiAxNTAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzJTtcbiAgICB9XG4gICAgI3RlbXBsYXRlV2Vie1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAjdGV4dCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmJhY2sge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2UgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KXtcbiAgICAgICN0ZW1wbGF0ZU1vYmlsZXtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICB9XG5cbiJdfQ== */", ".sfondolight[_ngcontent-%COMP%] { background-color: white }\n  \n    .sfondodark[_ngcontent-%COMP%] { background-color: #222f3e !important; color: whitesmoke !important; }"]
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
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Oh3b":
    /*!************************************************!*\
      !*** ./src/app/homepage/homepage.component.ts ***!
      \************************************************/

    /*! exports provided: HomepageComponent */

    /***/
    function Oh3b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomepageComponent", function () {
        return HomepageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @fortawesome/free-brands-svg-icons */
      "8tEE");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../theme.service */
      "deNa");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN"); // import { faInstagram } from '@fortawesome/free-brands-svg-icons';


      var HomepageComponent = /*#__PURE__*/function () {
        // matslidetoggle : MatSlideToggle;
        function HomepageComponent(x, ts) {
          _classCallCheck(this, HomepageComponent);

          this.x = x;
          this.ts = ts;
          this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLinkedin"];
          this.faInstagram = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faInstagram"];
          this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEnvelope"];
        }

        _createClass(HomepageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.ts.modeBool === true) {
              this.mode = true;
            } else {
              this.mode = false;
            }

            console.log(this.ts.modeBool);
            console.log(this.mode);
          }
        }, {
          key: "switchMode",
          value: function switchMode() {
            // this.mode = !this.mode;
            this.ts.switchMode();
            this.mode = this.ts.modeBool;
            console.log(this.mode);
          }
        }, {
          key: "goCV",
          value: function goCV() {
            this.x.navigate(['cv']);
          }
        }, {
          key: "goWork",
          value: function goWork() {
            this.x.navigate(['work']);
          }
        }, {
          key: "goTv",
          value: function goTv() {
            this.x.navigate(['torvergata']);
          }
        }, {
          key: "goColors",
          value: function goColors() {
            this.x.navigate(['colors']);
          }
        }]);

        return HomepageComponent;
      }();

      HomepageComponent.ɵfac = function HomepageComponent_Factory(t) {
        return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"]));
      };

      HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomepageComponent,
        selectors: [["app-homepage"]],
        decls: 75,
        vars: 10,
        consts: [[1, "container-fluid", 3, "ngClass"], ["id", "head", 1, "row"], [1, "col-12"], ["id", "nome", 3, "ngClass"], [2, "color", "darkgrey"], [1, "row"], [1, "col-lg-12", "col-xs-12", 2, "text-align", "center"], ["color", "primary", 3, "checked", "change"], [1, "riga", "firstrow", "d-flex", "justify-content-around", "align-items-center", "pt-3", "pb-5"], [1, "w-100", "px-5"], ["matRipple", "", 1, "bio-card", "text-center", "mat-elevation-z24", 3, "ngClass"], [2, "color", "#10ac84"], [1, "d-flex", "justify-content-center", "text-center", "flex-column"], [1, "mat-elevation-z6", "bio-chip", 3, "click"], ["matRipple", "", 1, "work-card", "text-center", "mat-elevation-z24", 3, "ngClass"], [2, "color", "#3880ff"], [1, "d-flex", "justify-content-center", "text-center", "flex-wrap"], [1, "mat-elevation-z6", "work-chip", 3, "click"], ["routerLink", "teaching", 1, "mat-elevation-z6", "work-chip"], [1, "mat-elevation-z6", "work-chip"], [1, "riga", "d-flex", "justify-content-around", "align-items-center", "pb-5"], ["matRipple", "", 1, "proj-card", "text-center", "mat-elevation-z24", 3, "ngClass"], [2, "color", "#5f27cd"], [1, "mat-elevation-z6", "proj-chip", 3, "click"], [1, "mat-elevation-z6", "proj-chip"], ["href", "https://flyeaa.com/", 2, "color", "inherit !important"], ["matRipple", "", 1, "contacts-card", "text-center", "mat-elevation-z24", 3, "ngClass"], [2, "color", "#eb3b6d"], [1, "mat-elevation-z6", "contacts-chip"], ["href", "mailto:paolonazzaro23@gmail.com"], [3, "icon"], ["href", "https://www.linkedin.com/in/paolonazzaro23/"], ["href", "https://www.instagram.com/paolonazzaro.png/"], [1, "d-flex", "flex-column", "align-items-center"], ["color", "primary", 3, "click"], [1, "d-flex", "justify-content-center", "pb-1", 2, "font-family", "Eina-light", "font-size", "75%"]],
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-slide-toggle", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HomepageComponent_Template_mat_slide_toggle_change_10_listener() {
              return ctx.switchMode();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-title", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Bio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-chip-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "22 / 10 / 1996");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-chip", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_mat_chip_click_22_listener() {
              return ctx.goCV();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Curriculum Vitae");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card-title", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-chip-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-chip", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_mat_chip_click_32_listener() {
              return ctx.goWork();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Front End Developer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-chip", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Teaching Assistant");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-chip", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Freelance Graphic Designer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-card", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-card-title", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-chip-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-chip", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_mat_chip_click_47_listener() {
              return ctx.goTv();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Tor Vergata for Foreigners");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-chip", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " European Aviation Academy ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-card", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-card-title", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Contatti");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-chip-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-chip", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "fa-icon", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-chip", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "fa-icon", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-chip", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "fa-icon", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-icon", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_mat_icon_click_71_listener() {
              return ctx.goColors();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "colorize");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Designed by Paolo Nazzaro ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.mode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "" : "sfondodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "" : "sfondodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "" : "sfondodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "" : "sfondodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faEnvelope);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faLinkedin);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faInstagram);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRipple"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChip"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FaIconComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"]],
        styles: [".voce[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n.voce[_ngcontent-%COMP%]:hover{\n    background-color: #b2bec3;\n    transition-duration: 1s;\n}\np[_ngcontent-%COMP%]{\n    font-family: 'Eina-light';\n    font-size: 40%;\n}\n\n.contact[_ngcontent-%COMP%]{\n    font-family: 'SF-ultralight';\n    font-size: 40%;\n    vertical-align: middle;\n}\n\n#square[_ngcontent-%COMP%] {\n    text-align: center;\n    font-family: 'Eina-bold';\n    font-size: 300%;\n    padding-top: 5%;\n    height: 100%;\n}\n.voice[_ngcontent-%COMP%]{\n    cursor: pointer;\n    height: 30vh;\n    align-items: center;\n}\n.voice[_ngcontent-%COMP%]:hover{\n    transition-duration: 1s;\n}\n#bio[_ngcontent-%COMP%]{\n    \n}\n#bio[_ngcontent-%COMP%]:hover{\n    background-color: black;\n    color: white;\n}\n#work[_ngcontent-%COMP%]{\n    \n    \n}\n#work[_ngcontent-%COMP%]:hover{\n    \n    background-color: #10ac84;\n    color: white;\n}\n#projects[_ngcontent-%COMP%] {\n    \n    \n}\n#projects[_ngcontent-%COMP%]:hover{\n    \n    background-color: #5f27cd;\n    color: white;\n}\n#about[_ngcontent-%COMP%]{\n    \n    \n}\n#about[_ngcontent-%COMP%]:hover{\n    background-color: rgb(235,59,90);\n    color: white;\n}\n.social[_ngcontent-%COMP%]{\n    width: 10%;\n}\n.arrow[_ngcontent-%COMP%] {\n    width: 1.5vw;\n}\n#rgbimg[_ngcontent-%COMP%]{\n    width: 4vw;\n}\n#rgbimg[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    opacity: 50%;\n    transform: rotate(360deg);\n    transition-duration: 1s; \n}\n#rgbtxt[_ngcontent-%COMP%]{\n    font-family: 'Eina-bold';\n    font-size: 150%;\n    border-width: 1px solid black;\n}\na[_ngcontent-%COMP%]{\n    text-decoration: none;\n}\n\n@media (max-width: 992px){\n    .voice[_ngcontent-%COMP%]{\n        height: 35vh;\n    }\n    .arrow[_ngcontent-%COMP%]{\n        width: 4vw;\n    }\n    #rgbimg[_ngcontent-%COMP%]{\n        width: 8vw;\n    }\n    p[_ngcontent-%COMP%]{\n        font-family: 'Eina-light';\n        font-size: 40%;\n    }\n    \n    #gmail[_ngcontent-%COMP%]{\n        width: 10vw;\n    }\n    #linkedin[_ngcontent-%COMP%]{\n        width: 10vw;\n    }\n    #instagram[_ngcontent-%COMP%]{\n        width: 10vw;\n    }\n}\n@media (min-width: 993px){\n    #rgbtxt[_ngcontent-%COMP%]{\n        display: none;\n    }\n\n    #gmail[_ngcontent-%COMP%]{\n        width: 2vw;\n    }\n    #linkedin[_ngcontent-%COMP%]{\n        width: 2vw;\n    }\n    #instagram[_ngcontent-%COMP%]{\n        width: 2vw;\n    }\n}\na[_ngcontent-%COMP%] {\n    color: inherit;\n}\nfa-icon[_ngcontent-%COMP%] {\n    padding-left: 5px;\n    padding-right: 5px;\n    font-size: 130%;\n}\nfa-icon[_ngcontent-%COMP%]:hover{\n    color: lightgrey;\n    transition-duration: 0.3s;\n}\nmat-icon[_ngcontent-%COMP%] {\n    font-size: 250%;\n}\n\nmat-card[_ngcontent-%COMP%]{\n    border-radius: 10px;\n}\n  .mat-chip-list-wrapper{\n    justify-content: center !important;\n}\nmat-card-title[_ngcontent-%COMP%] {\n    font-family: 'Eina-bold';\n}\nmat-card-content[_ngcontent-%COMP%]{\n    font-family: 'Eina-light';\n    font-size: 100% !important;\n}\nmat-chip[_ngcontent-%COMP%] {\n    font-family: 'Eina-semibold';\n    cursor: pointer;\n}\n.bio-card[_ngcontent-%COMP%] {\n    background-color: #dbf3ec; \n    \n}\n.bio-chip[_ngcontent-%COMP%] {\n    background-color: white; \n    color: #10ac84;\n    justify-content: center;\n}\n.work-card[_ngcontent-%COMP%] {\n    background-color: #c8dcff;\n    \n}\n.work-chip[_ngcontent-%COMP%] {\n    background-color: white;\n    color: #3880ff;\n    justify-content: center;\n}\n.proj-card[_ngcontent-%COMP%] {\n    background-color: #e5ddf7; \n    \n}\n.proj-chip[_ngcontent-%COMP%] {\n    background-color: white; \n    color: #5f27cd;\n    justify-content: center;\n}\n.contacts-card[_ngcontent-%COMP%]{\n    background-color: #facbd9;\n    \n}\n.contacts-chip[_ngcontent-%COMP%] {\n    background-color: white;\n    color: #eb3b6d;\n    justify-content: center;\n}\n@media (max-width: 992px) {\n    .riga[_ngcontent-%COMP%]{\n        flex-direction: column;\n        padding-bottom: 5% !important;\n    }\n    .firstrow[_ngcontent-%COMP%] {\n        padding-bottom: 0px !important;\n    }\n    mat-card[_ngcontent-%COMP%] {\n        margin-bottom: 5%;\n    }\n    .w-100[_ngcontent-%COMP%]{\n        padding-left: 1% !important;\n        padding-right: 1% !important;\n    }\n}\n@media (min-width: 993px) {\n    mat-card[_ngcontent-%COMP%] {\n        height: 27vh;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7QUFFQTs7O0dBR0c7QUFFSDtJQUNJLDRCQUE0QjtJQUM1QixjQUFjO0lBQ2Qsc0JBQXNCO0FBQzFCO0FBQ0EsS0FBSztBQUlMO0lBQ0ksa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLGdEQUFnRDtBQUNwRDtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGdEQUFnRDtJQUNoRCxtREFBbUQ7QUFDdkQ7QUFDQTtJQUNJLHlDQUF5QztJQUN6Qyx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksZ0RBQWdEO0lBQ2hELDJDQUEyQztBQUMvQztBQUNBO0lBQ0kscUNBQXFDO0lBQ3JDLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCO0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsNENBQTRDO0FBQ2hEO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksVUFBVTtBQUNkO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHVCQUF1QjtBQUMzQjtBQUlBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUVBLFNBQVM7QUFBRTtJQUNQO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLHlCQUF5QjtRQUN6QixjQUFjO0lBQ2xCO0lBQ0E7O09BRUc7SUFDSDtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7QUFDSjtBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBSUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFJQSxRQUFRO0FBRVI7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGtDQUFrQztBQUN0QztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsMEJBQTBCO0FBQzlCO0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsZUFBZTtBQUNuQjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDBDQUEwQztBQUM5QztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCx1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwwQ0FBMEM7QUFDOUM7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsMENBQTBDO0FBQzlDO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsY0FBYztJQUNkLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDBDQUEwQztBQUM5QztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCx1QkFBdUI7QUFDM0I7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLDZCQUE2QjtJQUNqQztJQUNBO1FBQ0ksOEJBQThCO0lBQ2xDO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLDJCQUEyQjtRQUMzQiw0QkFBNEI7SUFDaEM7QUFDSjtBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi52b2NlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udm9jZTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiZWMzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xufVxuXG5we1xuICAgIGZvbnQtZmFtaWx5OiAnRWluYS1saWdodCc7XG4gICAgZm9udC1zaXplOiA0MCU7XG59XG5cbi8qIGZhLWljb257XG4gICAgZm9udC1zaXplOiA2MCU7XG4gICAgY29sb3I6IGJsYWNrOyAgICBcbn0gKi9cblxuLmNvbnRhY3R7XG4gICAgZm9udC1mYW1pbHk6ICdTRi11bHRyYWxpZ2h0JztcbiAgICBmb250LXNpemU6IDQwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLyogICovXG5cblxuXG4jc3F1YXJlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdFaW5hLWJvbGQnO1xuICAgIGZvbnQtc2l6ZTogMzAwJTtcbiAgICBwYWRkaW5nLXRvcDogNSU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLnZvaWNle1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDMwdmg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnZvaWNlOmhvdmVye1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xufVxuXG4jYmlve1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg5LCAxOTUsIDE5OSwgMC4yKTsgKi9cbn1cbiNiaW86aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4jd29ya3tcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4OSwgMTk1LCAxOTksIDAuMSk7ICovXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMSwgMjMyLCAxMjksIDAuMSk7ICAgICAqL1xufVxuI3dvcms6aG92ZXJ7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDExLCAyMzIsIDEyOSk7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwYWM4NDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiNwcm9qZWN0cyB7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODksIDE5NSwgMTk5LCAwLjMpOyAqL1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNiw4MiwyMjEsIDAuMSk7ICovXG59XG4jcHJvamVjdHM6aG92ZXJ7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsODIsMjIxKTsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWYyN2NkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2Fib3V0e1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7ICovXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzUsNTksOTAsIDAuMik7ICovXG59XG4jYWJvdXQ6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSw1OSw5MCk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uc29jaWFse1xuICAgIHdpZHRoOiAxMCU7XG59XG5cbi5hcnJvdyB7XG4gICAgd2lkdGg6IDEuNXZ3O1xufVxuXG4jcmdiaW1ne1xuICAgIHdpZHRoOiA0dnc7XG59XG4jcmdiaW1nOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvcGFjaXR5OiA1MCU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxczsgXG59XG5cblxuXG4jcmdidHh0e1xuICAgIGZvbnQtZmFtaWx5OiAnRWluYS1ib2xkJztcbiAgICBmb250LXNpemU6IDE1MCU7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHggc29saWQgYmxhY2s7XG59XG5cbmF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKm1vYmlsZSovIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCl7XG4gICAgLnZvaWNle1xuICAgICAgICBoZWlnaHQ6IDM1dmg7XG4gICAgfVxuICAgIC5hcnJvd3tcbiAgICAgICAgd2lkdGg6IDR2dztcbiAgICB9XG4gICAgI3JnYmltZ3tcbiAgICAgICAgd2lkdGg6IDh2dztcbiAgICB9XG4gICAgcHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdFaW5hLWxpZ2h0JztcbiAgICAgICAgZm9udC1zaXplOiA0MCU7XG4gICAgfVxuICAgIC8qIC5jb250YXR0aXtcbiAgICAgICAgZm9udC1zaXplOiA0MCU7XG4gICAgfSAqL1xuICAgICNnbWFpbHtcbiAgICAgICAgd2lkdGg6IDEwdnc7XG4gICAgfVxuICAgICNsaW5rZWRpbntcbiAgICAgICAgd2lkdGg6IDEwdnc7XG4gICAgfVxuICAgICNpbnN0YWdyYW17XG4gICAgICAgIHdpZHRoOiAxMHZ3O1xuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5M3B4KXtcbiAgICAjcmdidHh0e1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICNnbWFpbHtcbiAgICAgICAgd2lkdGg6IDJ2dztcbiAgICB9XG4gICAgI2xpbmtlZGlue1xuICAgICAgICB3aWR0aDogMnZ3O1xuICAgIH1cbiAgICAjaW5zdGFncmFte1xuICAgICAgICB3aWR0aDogMnZ3O1xuICAgIH1cbn1cblxuXG5cbmEge1xuICAgIGNvbG9yOiBpbmhlcml0O1xufVxuXG5mYS1pY29uIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgZm9udC1zaXplOiAxMzAlO1xufVxuXG5mYS1pY29uOmhvdmVye1xuICAgIGNvbG9yOiBsaWdodGdyZXk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbn1cblxubWF0LWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjUwJTtcbn1cblxuXG5cbi8qIE5FVyAqL1xuXG5tYXQtY2FyZHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1jaGlwLWxpc3Qtd3JhcHBlcntcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG5tYXQtY2FyZC10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6ICdFaW5hLWJvbGQnO1xufVxuXG5tYXQtY2FyZC1jb250ZW50e1xuICAgIGZvbnQtZmFtaWx5OiAnRWluYS1saWdodCc7XG4gICAgZm9udC1zaXplOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbm1hdC1jaGlwIHtcbiAgICBmb250LWZhbWlseTogJ0VpbmEtc2VtaWJvbGQnO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJpby1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJmM2VjOyBcbiAgICAvKiBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggMHB4ICNkYmYzZWM7ICovXG59XG4uYmlvLWNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcbiAgICBjb2xvcjogIzEwYWM4NDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLndvcmstY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZGNmZjtcbiAgICAvKiBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggMHB4ICNjOGRjZmY7ICovXG59XG4ud29yay1jaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogIzM4ODBmZjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnByb2otY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZGRmNzsgXG4gICAgLyogYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IDBweCAjZTVkZGY3OyAqL1xufVxuLnByb2otY2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IFxuICAgIGNvbG9yOiAjNWYyN2NkO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGFjdHMtY2FyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFjYmQ5O1xuICAgIC8qIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCAwcHggI2ZhY2JkOTsgKi9cbn1cbi5jb250YWN0cy1jaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogI2ViM2I2ZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgLnJpZ2F7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1JSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuZmlyc3Ryb3cge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIG1hdC1jYXJkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgfVxuICAgIC53LTEwMHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxJSAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxJSAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5M3B4KSB7XG4gICAgbWF0LWNhcmQge1xuICAgICAgICBoZWlnaHQ6IDI3dmg7XG4gICAgfVxufVxuIl19 */", ".sfondolight[_ngcontent-%COMP%]    { background-color: white }\n    .sfondodark[_ngcontent-%COMP%]     { background-color: #222f3e !important; color: whitesmoke !important; }\n    .testolight[_ngcontent-%COMP%]     { color: black !important; }\n    .testodark[_ngcontent-%COMP%]      { color: whitesmoke !important; }\n    .shadowdark[_ngcontent-%COMP%]     { box-shadow: -10px 15px 40px -20px #c8dcff; }"]
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
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

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
        styles: ["#head[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-top: 2%;\n    font-size: 300%;\n    font-family: 'Adam';\n    color: black;\n}\n#head[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    color: lightgrey;\n    transition-duration: 0.3s;\n}\n.col-12[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n#mode[_ngcontent-%COMP%] {\n    width: 4vw;\n    margin-bottom: 2%;\n}\n#mode[_ngcontent-%COMP%]:hover{\n    opacity: 70%;\n    cursor: pointer;\n    transition-duration: 0.5s;\n    transform: rotate(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZix5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNoZWFkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDIlO1xuICAgIGZvbnQtc2l6ZTogMzAwJTtcbiAgICBmb250LWZhbWlseTogJ0FkYW0nO1xuICAgIGNvbG9yOiBibGFjaztcbn1cbiNoZWFkOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogbGlnaHRncmV5O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG59XG5cbi5jb2wtMTJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jbW9kZSB7XG4gICAgd2lkdGg6IDR2dztcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbn1cbiNtb2RlOmhvdmVye1xuICAgIG9wYWNpdHk6IDcwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4iXX0= */"]
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
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _colors_colors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./colors/colors.component */
      "KYig");
      /* harmony import */


      var _torvergata_torvergata_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./torvergata/torvergata.component */
      "L6WB");
      /* harmony import */


      var _cv_cv_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./cv/cv.component */
      "7/eh");
      /* harmony import */


      var _work_work_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./work/work.component */
      "kH/F");
      /* harmony import */


      var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./homepage/homepage.component */
      "Oh3b");
      /* harmony import */


      var _teaching_teaching_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./teaching/teaching.component */
      "ATnn");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq"); // import { HomeComponent } from './home/home.component';
      // MATERIAL


      var appRoutes = [{
        path: '',
        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__["HomepageComponent"]
      }, // {path: 'home', component: HomeComponent},
      {
        path: 'colors',
        component: _colors_colors_component__WEBPACK_IMPORTED_MODULE_6__["ColorsComponent"]
      }, {
        path: 'torvergata',
        component: _torvergata_torvergata_component__WEBPACK_IMPORTED_MODULE_7__["TorvergataComponent"]
      }, {
        path: 'cv',
        component: _cv_cv_component__WEBPACK_IMPORTED_MODULE_8__["CvComponent"]
      }, {
        path: 'work',
        component: _work_work_component__WEBPACK_IMPORTED_MODULE_9__["WorkComponent"]
      }, {
        path: 'teaching',
        component: _teaching_teaching_component__WEBPACK_IMPORTED_MODULE_11__["TeachingComponent"]
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
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes), _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDividerModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], // HomeComponent,
          _colors_colors_component__WEBPACK_IMPORTED_MODULE_6__["ColorsComponent"], _torvergata_torvergata_component__WEBPACK_IMPORTED_MODULE_7__["TorvergataComponent"], _cv_cv_component__WEBPACK_IMPORTED_MODULE_8__["CvComponent"], _work_work_component__WEBPACK_IMPORTED_MODULE_9__["WorkComponent"], _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__["HomepageComponent"], _teaching_teaching_component__WEBPACK_IMPORTED_MODULE_11__["TeachingComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDividerModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], // HomeComponent,
            _colors_colors_component__WEBPACK_IMPORTED_MODULE_6__["ColorsComponent"], _torvergata_torvergata_component__WEBPACK_IMPORTED_MODULE_7__["TorvergataComponent"], _cv_cv_component__WEBPACK_IMPORTED_MODULE_8__["CvComponent"], _work_work_component__WEBPACK_IMPORTED_MODULE_9__["WorkComponent"], _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__["HomepageComponent"], _teaching_teaching_component__WEBPACK_IMPORTED_MODULE_11__["TeachingComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes), _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDividerModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "deNa":
    /*!**********************************!*\
      !*** ./src/app/theme.service.ts ***!
      \**********************************/

    /*! exports provided: ThemeService */

    /***/
    function deNa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThemeService", function () {
        return ThemeService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ThemeService = /*#__PURE__*/function () {
        function ThemeService() {
          _classCallCheck(this, ThemeService);

          this.modeBool = false;
        }

        _createClass(ThemeService, [{
          key: "switchMode",
          value: function switchMode() {
            this.modeBool = !this.modeBool;
            console.log(this.modeBool);
          }
        }]);

        return ThemeService;
      }();

      ThemeService.ɵfac = function ThemeService_Factory(t) {
        return new (t || ThemeService)();
      };

      ThemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ThemeService,
        factory: ThemeService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "kH/F":
    /*!****************************************!*\
      !*** ./src/app/work/work.component.ts ***!
      \****************************************/

    /*! exports provided: WorkComponent */

    /***/
    function kHF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WorkComponent", function () {
        return WorkComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../theme.service */
      "deNa");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      var WorkComponent = /*#__PURE__*/function () {
        function WorkComponent(x, ts) {
          _classCallCheck(this, WorkComponent);

          this.x = x;
          this.ts = ts;
        }

        _createClass(WorkComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.ts.modeBool === true) {
              this.mode = true;
            } else {
              this.mode = false;
            }

            console.log(this.ts.modeBool);
            console.log(this.mode);
          }
        }, {
          key: "switchMode",
          value: function switchMode() {
            this.ts.switchMode();
            this.mode = this.ts.modeBool;
            console.log(this.mode);
          }
        }, {
          key: "goHome",
          value: function goHome() {
            this.x.navigate(['/']);
          }
        }]);

        return WorkComponent;
      }();

      WorkComponent.ɵfac = function WorkComponent_Factory(t) {
        return new (t || WorkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]));
      };

      WorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WorkComponent,
        selectors: [["app-work"]],
        decls: 41,
        vars: 5,
        consts: [[1, "container-fluid", 3, "ngClass"], ["id", "head", 1, "row"], [1, "col-12"], ["id", "nome", 3, "ngClass", "click"], [2, "color", "darkgrey"], [1, "row"], ["id", "back", 1, "col-3", 2, "cursor", "pointer", 3, "click"], [1, "col-12", 2, "text-align", "center"], ["color", "primary", 3, "checked", "change"], [1, "d-flex", "justify-content-center", "align-items-center"], ["matRipple", "", 1, "mat-elevation-z12", "mt-4", 3, "ngClass"], [1, "row", "sezione", 2, "margin-top", "2%", 3, "ngClass"], [1, "col-lg-6", "col-xs-12", "d-flex", "align-items-center", "justify-content-center", "text-center", "left"], [1, "col-lg-6", "col-xs-12", "right"], [1, "textTeach", 2, "font-family", "Eina-bold"], ["href", "http://www.rotechnology.it/"], [2, "font-family", "Eina-semibold"], [2, "font-family", "Eina-light"], [1, "fixed-bottom", "d-flex", "justify-content-center", "pt-3", "pb-1", 2, "font-family", "Eina-light", "font-size", "75%"]],
        template: function WorkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkComponent_Template_span_click_3_listener() {
              return ctx.goHome();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkComponent_Template_div_click_9_listener() {
              return ctx.goHome();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-slide-toggle", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function WorkComponent_Template_mat_slide_toggle_change_11_listener() {
              return ctx.switchMode();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Front End Developer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Angular Developer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " at ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "RoTechnology");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Collaborating with Trevize s.r.l");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Design and Development of web-sites, web-apps and mobile applications.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Skills : Angular, Ionic, NativeScript, Wordpress");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Designed by Paolo Nazzaro ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.mode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "lightsez" : "");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRipple"]],
        styles: [".left[_ngcontent-%COMP%] {\n    font-family: 'Eina-bold';\n}\n\nmat-card[_ngcontent-%COMP%] {\n    border-radius: 25px;\n    \n}\n\n.container-fluid[_ngcontent-%COMP%] {\n    height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay93b3JrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIscURBQXFEO0FBQ3pEOztBQUVBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3dvcmsvd29yay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlZnQge1xuICAgIGZvbnQtZmFtaWx5OiAnRWluYS1ib2xkJztcbn1cblxubWF0LWNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgLyogYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IDBweCAjYzhkY2ZmICFpbXBvcnRhbnQ7ICovXG59XG5cbi5jb250YWluZXItZmx1aWQge1xuICAgIGhlaWdodDogMTAwdmg7XG59Il19 */", ".sfondolight[_ngcontent-%COMP%] { background-color: white } \n    .sfondodark[_ngcontent-%COMP%] { background-color: #222f3e; color: whitesmoke; }\n    .visible[_ngcontent-%COMP%] { overflow: visible; transition-duration: 1s;}\n    .hidden[_ngcontent-%COMP%] { overflow: hidden; }"]
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
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

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
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map