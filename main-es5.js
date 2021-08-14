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
        decls: 216,
        vars: 15,
        consts: [[1, "container-fluid", 3, "ngClass"], ["id", "head", 1, "row"], [1, "col-12", 2, "z-index", "999 !important"], [1, "header-span", 3, "click"], ["src", "assets/pn.png", "alt", "", 1, "pn-logo"], ["id", "nome", 2, "font-size", "300%", 3, "ngClass"], [1, "row"], ["id", "back", 1, "col-3", 2, "cursor", "pointer", 3, "click"], [1, "col-12", "toggle-container", 2, "text-align", "center"], ["color", "primary", 3, "checked", "change"], [1, "d-flex", "justify-content-center", "align-items-center"], ["matRipple", "", 1, "mat-elevation-z8", "mt-4", 3, "ngClass"], [1, "row", "sezione", 2, "margin-top", "2%", 3, "ngClass"], [1, "col-lg-6", "col-xs-12", "left"], ["src", "./assets/leaf.png", "alt", "", 1, "icon"], [1, "col-lg-6", "col-xs-12", "right"], [1, "impo"], [1, "d-flex", "justify-content-center"], ["matRipple", "", 1, "mat-elevation-z24", "mt-2", 3, "ngClass"], [1, "row", "sezione", 3, "ngClass"], ["src", "./assets/pencil.png", "alt", "", 1, "icon"], [1, "when"], [1, "info"], ["matRipple", "", 1, "mat-elevation-z20", "mt-2", 3, "ngClass"], ["src", "./assets/briefcase.png", "alt", "", 1, "icon"], ["src", "./assets/presentation.png", "alt", "", 1, "icon"], ["id", "t4f", 1, "impo", 3, "click"], ["id", "eaa", 1, "impo"], ["href", "https://flyeaa.com/", "target", "_blank"], ["src", "./assets/diamond.png", "alt", "", 1, "icon"], [1, "topic"], [1, "moreinfo"], ["src", "./assets/ball.png", "alt", "", 1, "icon"], [1, "d-flex", "justify-content-center", 2, "text-align", "center", "margin-top", "3%"], ["color", "primary", "selected", "true", 1, "mat-elevation-z6"], ["href", "javascript:void(0)", 2, "color", "white", 3, "click"], [1, "d-flex", "justify-content-center", "pt-3", "pb-1", "eina-light", "txt-70"]],
        template: function CvComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvComponent_Template_span_click_3_listener() {
              return ctx.goHome();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "aolo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvComponent_Template_div_click_8_listener() {
              return ctx.goHome();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-slide-toggle", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CvComponent_Template_mat_slide_toggle_change_10_listener() {
              return ctx.switchMode();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Regular Contractor at ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Accenture");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " for Angular/Ionic based project.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Web Developing Assistant at Tor Vergata University");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "2019-now");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "University Tutor for HTML + CSS + JavaScript based courses.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Front End Developer at Trevize s.r.l");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "2019-2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Collaborated as Front End Developer for Angular, Ionic and Wordpress based projects. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Web Developing Teaching Assistant at Betacom");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Teaching Assistant for Angular based courses.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Journalist at Quotidiano del Lazio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "2018-2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Office Clerk at Tor Vergata University");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "2018");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "mat-card", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvComponent_Template_span_click_133_listener() {
              return ctx.goTv();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " Tor Vergata 4 Foreigners");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Angular web app and Ionic mobile app for University of Rome Tor Vergata\u2019s foreign students. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "European Aviation Academy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "https://flyeaa.com/ ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " Elementor + Wordpress based web site ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "mat-card", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Skills");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "img", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Developing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Angular, Typescript, Ionic, Javascript, Nativescript, Wordpress ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Logo / Icon Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "span", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Illustrator, Photoshop");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Languages");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "English C1, German B1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "mat-card", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Interests");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "img", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Creation of minimal graphic contents");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Sports");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Basketball");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "span", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Playing since 2002");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Soccer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "mat-chip-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "mat-chip", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "a", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvComponent_Template_a_click_212_listener() {
              return ctx.downloadPdf("./assets/cv-paolo-nazzaro-pdf.pdf", "cv-paolo-nazzaro");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, " Download PDF ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, " Designed by Paolo Nazzaro\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](57);

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
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRipple"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChip"]],
        styles: [".icon[_ngcontent-%COMP%]{\n    width: 7%;\n    padding-top: 5%;\n}\n\nmat-card[_ngcontent-%COMP%] {\n    margin-bottom: 3%;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    border-radius: 20px;\n    \n    z-index: 999;\n}\n\n.sezione[_ngcontent-%COMP%]{\n    padding-top: 2%;\n    padding-bottom: 2%;\n    font-family: 'Eina-light';\n}\n\n.left[_ngcontent-%COMP%]{\n    text-align: center;\n}\n\nh1[_ngcontent-%COMP%]{\n    font-family: 'Eina-bold';\n}\n\n.impo[_ngcontent-%COMP%]{\n    font-family: 'Eina-semibold';\n}\n\n.lessimpo[_ngcontent-%COMP%]{\n    font-family: 'Eina-regular';\n}\n\n.when[_ngcontent-%COMP%]{\n    font-family: 'Eina-regular';\n    font-size: 80%;\n}\n\n.topic[_ngcontent-%COMP%]{\n    font-family: 'Eina-regular';\n    font-size: 90%;\n}\n\n.info[_ngcontent-%COMP%]{\n    font-size: 90%;\n}\n\n.moreinfo[_ngcontent-%COMP%]{\n    font-size: 80%;\n}\n\n#linea[_ngcontent-%COMP%] {\n    height: 1px;\n    background-color: black;\n}\n\n#t4f[_ngcontent-%COMP%]{\n    cursor: pointer;\n}\n\n#t4f[_ngcontent-%COMP%]:hover{\n    font-size: 110%;\n    transition-duration: 0.5s;\n}\n\n@media (max-width: 992px){\n    #back[_ngcontent-%COMP%]{\n        display: none;\n    }\n    .left[_ngcontent-%COMP%]{\n        text-align: left;\n    }\n    h1[_ngcontent-%COMP%]{\n        font-size: 180%;\n    }\n    .icon[_ngcontent-%COMP%]{\n        display: none;\n    }\n    .web[_ngcontent-%COMP%]{\n        display: none;\n        font-weight: lighter;\n    }\n}\n\n@media (min-width: 993px){\n    .mob[_ngcontent-%COMP%]{\n        display: none;\n    }\n    .lightsez[_ngcontent-%COMP%]:hover {\n        \n        color: black;\n        transition-duration: 0.5s;\n    }\n}\n\n.card-container[_ngcontent-%COMP%] {\n\n    width: 300px;\n\n    height: 270px;\n\n    position: relative;\n\n    perspective: 500px;\n\n}\n\n.flippable-card[_ngcontent-%COMP%] {\n\n    width: 100%;\n\n    height: 100%;\n\n    position: absolute;\n\n    transform-style: preserve-3d;\n\n    transition: transform 1s;\n\n}\n\n.flippable-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n\n    margin: 0;\n\n    display: block;\n\n    position: absolute;\n\n    width: 252px;\n\n    height: 222px;\n\n    -webkit-backface-visibility: hidden;\n\n            backface-visibility: hidden;\n\n}\n\n.flippable-card[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n\n    background: #f0f0f0;\n\n    transform: rotateY( 180deg );\n\n}\n\n.flippable-card.flipped[_ngcontent-%COMP%] {\n\n    transform: rotateY( 180deg );\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3YvY3YuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTtJQUNJLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiwwQ0FBMEM7SUFDMUMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUNBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsY0FBYztBQUNsQjs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUdBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGFBQWE7UUFDYixvQkFBb0I7SUFDeEI7QUFDSjs7QUFHQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksK0JBQStCO1FBQy9CLFlBQVk7UUFDWix5QkFBeUI7SUFDN0I7QUFDSjs7QUFFQTs7SUFFSSxZQUFZOztJQUVaLGFBQWE7O0lBRWIsa0JBQWtCOztJQUlsQixrQkFBa0I7O0FBRXRCOztBQUlBOztJQUVJLFdBQVc7O0lBRVgsWUFBWTs7SUFFWixrQkFBa0I7O0lBRWxCLDRCQUE0Qjs7SUFFNUIsd0JBQXdCOztBQUU1Qjs7QUFJQTs7SUFFSSxTQUFTOztJQUVULGNBQWM7O0lBRWQsa0JBQWtCOztJQUVsQixZQUFZOztJQUVaLGFBQWE7O0lBRWIsbUNBQTJCOztZQUEzQiwyQkFBMkI7O0FBRS9COztBQUlBOztJQUVJLG1CQUFtQjs7SUFFbkIsNEJBQTRCOztBQUVoQzs7QUFJQTs7SUFFSSw0QkFBNEI7O0FBRWhDIiwiZmlsZSI6InNyYy9hcHAvY3YvY3YuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbi5pY29ue1xuICAgIHdpZHRoOiA3JTtcbiAgICBwYWRkaW5nLXRvcDogNSU7XG59XG5cbm1hdC1jYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAvKiBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggMHB4ICNjOGRjZmY7ICovXG4gICAgei1pbmRleDogOTk5O1xufVxuXG4uc2V6aW9uZXtcbiAgICBwYWRkaW5nLXRvcDogMiU7XG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xuICAgIGZvbnQtZmFtaWx5OiAnRWluYS1saWdodCc7XG59XG5cbi5sZWZ0e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmgxe1xuICAgIGZvbnQtZmFtaWx5OiAnRWluYS1ib2xkJztcbn1cbi5pbXBve1xuICAgIGZvbnQtZmFtaWx5OiAnRWluYS1zZW1pYm9sZCc7XG59XG4ubGVzc2ltcG97XG4gICAgZm9udC1mYW1pbHk6ICdFaW5hLXJlZ3VsYXInO1xufVxuLndoZW57XG4gICAgZm9udC1mYW1pbHk6ICdFaW5hLXJlZ3VsYXInO1xuICAgIGZvbnQtc2l6ZTogODAlO1xufVxuLnRvcGlje1xuICAgIGZvbnQtZmFtaWx5OiAnRWluYS1yZWd1bGFyJztcbiAgICBmb250LXNpemU6IDkwJTtcbn1cbi5pbmZve1xuICAgIGZvbnQtc2l6ZTogOTAlO1xufVxuLm1vcmVpbmZve1xuICAgIGZvbnQtc2l6ZTogODAlO1xufVxuI2xpbmVhIHtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbiN0NGZ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuI3Q0Zjpob3ZlcntcbiAgICBmb250LXNpemU6IDExMCU7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpe1xuICAgICNiYWNre1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAubGVmdHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gICAgaDF7XG4gICAgICAgIGZvbnQtc2l6ZTogMTgwJTtcbiAgICB9XG4gICAgLmljb257XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC53ZWJ7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIH1cbn1cblxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkzcHgpe1xuICAgIC5tb2J7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5saWdodHNlejpob3ZlciB7XG4gICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmMWYyZjY7ICovXG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbiAgICB9XG59XG5cbi5jYXJkLWNvbnRhaW5lciB7XG5cbiAgICB3aWR0aDogMzAwcHg7XG5cbiAgICBoZWlnaHQ6IDI3MHB4O1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogNTAwcHg7XG5cbiAgICBwZXJzcGVjdGl2ZTogNTAwcHg7XG5cbn1cblxuXG5cbi5mbGlwcGFibGUtY2FyZCB7XG5cbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGhlaWdodDogMTAwJTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG5cbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG5cbn1cblxuXG5cbi5mbGlwcGFibGUtY2FyZCBtYXQtY2FyZCB7XG5cbiAgICBtYXJnaW46IDA7XG5cbiAgICBkaXNwbGF5OiBibG9jaztcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgIHdpZHRoOiAyNTJweDtcblxuICAgIGhlaWdodDogMjIycHg7XG5cbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG5cbn1cblxuXG5cbi5mbGlwcGFibGUtY2FyZCAuYmFjayB7XG5cbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcblxufVxuXG5cblxuLmZsaXBwYWJsZS1jYXJkLmZsaXBwZWQge1xuXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcblxufSJdfQ== */", ".sfondolight[_ngcontent-%COMP%] { background-color: white }\n  .sfondodark[_ngcontent-%COMP%] { background-color: #222f3e !important; color: whitesmoke !important; }\n    .testolight[_ngcontent-%COMP%]     { color: black !important; }\n    .testodark[_ngcontent-%COMP%]      { color: whitesmoke !important; }\n    .shadowdark[_ngcontent-%COMP%]     { box-shadow: -10px 15px 40px -20px #c8dcff; }\n    .cardark[_ngcontent-%COMP%]        { background-color: #222f3e; background-blend-mode: darken; color: whitesmoke;}"],
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
        decls: 43,
        vars: 5,
        consts: [[1, "container-fluid", 3, "ngClass"], ["id", "head", 1, "row"], [1, "col-12", 2, "z-index", "999 !important"], [1, "header-span", 3, "click"], ["src", "assets/pn.png", "alt", "", 1, "pn-logo"], ["id", "nome", 2, "font-size", "300%", 3, "ngClass"], [1, "row"], ["id", "back", 1, "col-3", 2, "cursor", "pointer", 3, "click"], [1, "col-12", "toggle-container", 2, "text-align", "center"], ["color", "primary", 3, "checked", "change"], [1, "d-flex", "justify-content-center", "align-items-center"], ["matRipple", "", 1, "mat-elevation-z12", "mt-4", 3, "ngClass"], [1, "row", "sezione", 2, "margin-top", "2%", 3, "ngClass"], [1, "col-lg-6", "col-xs-12", "d-flex", "align-items-center", "justify-content-center", "left"], [1, "col-lg-6", "col-xs-12", "right"], [1, "textTeach", 2, "font-family", "Eina-semibold"], ["href", "http://giorgiopiccardo.com", "target", "_blank"], ["color", "primary", "selected", "true", 1, "p-2"], ["href", "https://www-2020.linfo.lettere.uniroma2.it/", "target", "_blank", 2, "color", "white"], [2, "font-family", "Eina-bold"], [2, "font-family", "Eina-light"], [2, "font-family", "Eina-semibold"], [1, "fixed-bottom", "d-flex", "justify-content-center", "pt-3", "pb-1", "eina-light", "txt-70"]],
        template: function TeachingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeachingComponent_Template_span_click_3_listener() {
              return ctx.goHome();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "aolo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeachingComponent_Template_div_click_8_listener() {
              return ctx.goHome();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-slide-toggle", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TeachingComponent_Template_mat_slide_toggle_change_10_listener() {
              return ctx.switchMode();
            });

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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "testolight" : "testodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.mode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "lightsez" : "");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRipple"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChip"]],
        styles: [".left[_ngcontent-%COMP%] {\n    font-family: 'Eina-bold';\n}\n\nmat-card[_ngcontent-%COMP%] {\n    border-radius: 25px;\n    \n}\n\n.container-fluid[_ngcontent-%COMP%] {\n    height: 100vh !important;\n}\n\n@media (max-width: 992px){\n    .left[_ngcontent-%COMP%]{\n        justify-content: left !important;\n    }\n    h1[_ngcontent-%COMP%]{\n        font-size: 180%;\n        text-align: left;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hpbmcvdGVhY2hpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixxREFBcUQ7QUFDekQ7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSTtRQUNJLGdDQUFnQztJQUNwQztJQUNBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdGVhY2hpbmcvdGVhY2hpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZWZ0IHtcbiAgICBmb250LWZhbWlseTogJ0VpbmEtYm9sZCc7XG59XG5cbm1hdC1jYXJkIHtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIC8qIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCAwcHggI2M4ZGNmZiAhaW1wb3J0YW50OyAqL1xufVxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCl7XG4gICAgLmxlZnR7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBoMXtcbiAgICAgICAgZm9udC1zaXplOiAxODAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbn0iXX0= */", ".sfondolight[_ngcontent-%COMP%] { background-color: white } \n    .sfondodark[_ngcontent-%COMP%] { background-color: #222f3e; color: whitesmoke; }\n    .visible[_ngcontent-%COMP%] { overflow: visible; transition-duration: 1s;}\n    .hidden[_ngcontent-%COMP%] { overflow: hidden; }"]
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

      var ColorsComponent = /*#__PURE__*/function () {
        function ColorsComponent(_snackBar, x, ts) {
          _classCallCheck(this, ColorsComponent);

          this._snackBar = _snackBar;
          this.x = x;
          this.ts = ts;
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
        }, {
          key: "goHome",
          value: function goHome() {
            this.x.navigate(['/']);
          }
        }]);

        return ColorsComponent;
      }();

      ColorsComponent.ɵfac = function ColorsComponent_Factory(t) {
        return new (t || ColorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"]));
      };

      ColorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ColorsComponent,
        selectors: [["app-colors"]],
        decls: 22,
        vars: 3,
        consts: [[1, "container-fluid", 3, "ngClass"], ["id", "head", 1, "row"], [1, "col-12", 2, "z-index", "999 !important"], [1, "header-span", 3, "click"], ["src", "assets/pn.png", "alt", "", 1, "pn-logo"], ["id", "nome", 2, "font-size", "300%", 3, "ngClass"], [1, "row"], [1, "col-lg-12", "col-xs-12", 2, "text-align", "center"], ["color", "primary", 3, "checked", "change"], [1, "d-flex", "justify-content-center", "align-items-center", "flex-column", "pt-3"], ["matRipple", "", 1, "mb-2", "mat-elevation-z12", 2, "background-color", "#10ac84", "width", "50%", "height", "70px", 3, "click"], ["matRipple", "", 1, "mb-2", "mat-elevation-z12", 2, "background-color", "#dbf3ec", "width", "50%", "height", "70px", 3, "click"], ["matRipple", "", 1, "mb-2", "mat-elevation-z12", 2, "background-color", "#c8dcff", "width", "50%", "height", "70px", 3, "click"], ["matRipple", "", 1, "mb-2", "mat-elevation-z12", 2, "background-color", "#3880ff", "width", "50%", "height", "70px", 3, "click"], ["matRipple", "", 1, "mb-2", "mat-elevation-z12", 2, "background-color", "#5f27cd", "width", "50%", "height", "70px", 3, "click"], ["matRipple", "", 1, "mb-2", "mat-elevation-z12", 2, "background-color", "#eb3b6d", "width", "50%", "height", "70px", 3, "click"], ["matRipple", "", 1, "mb-2", "mat-elevation-z12", 2, "background-color", "#E0544C", "width", "50%", "height", "70px", 3, "click"], ["matRipple", "", 1, "mb-2", "mat-elevation-z12", 2, "background-color", "#facbd9", "width", "50%", "height", "70px", 3, "click"], ["matRipple", "", 1, "mb-2", "mat-elevation-z12", 2, "background-color", "#e5ddf7", "width", "50%", "height", "70px", 3, "click"], [1, "d-flex", "justify-content-center", "pt-3", "pb-1", "eina-light", "txt-70"]],
        template: function ColorsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorsComponent_Template_span_click_3_listener() {
              return ctx.goHome();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ColorsComponent_Template_mat_slide_toggle_change_9_listener() {
              return ctx.switchMode();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorsComponent_Template_mat_card_click_11_listener() {
              return ctx.copyMessage("#10ac84");
            })("click", function ColorsComponent_Template_mat_card_click_11_listener() {
              return ctx.openSnackBar("HEX copied in your clipboard!", "OK");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorsComponent_Template_mat_card_click_12_listener() {
              return ctx.copyMessage("#dbf3ec");
            })("click", function ColorsComponent_Template_mat_card_click_12_listener() {
              return ctx.openSnackBar("HEX copied in your clipboard!", "OK");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorsComponent_Template_mat_card_click_13_listener() {
              return ctx.copyMessage("#c8dcff");
            })("click", function ColorsComponent_Template_mat_card_click_13_listener() {
              return ctx.openSnackBar("HEX copied in your clipboard!", "OK");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorsComponent_Template_mat_card_click_14_listener() {
              return ctx.copyMessage("#3880ff");
            })("click", function ColorsComponent_Template_mat_card_click_14_listener() {
              return ctx.openSnackBar("HEX copied in your clipboard!", "OK");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorsComponent_Template_mat_card_click_15_listener() {
              return ctx.copyMessage("#5f27cd");
            })("click", function ColorsComponent_Template_mat_card_click_15_listener() {
              return ctx.openSnackBar("HEX copied in your clipboard!", "OK");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorsComponent_Template_mat_card_click_16_listener() {
              return ctx.copyMessage("#eb3b6d");
            })("click", function ColorsComponent_Template_mat_card_click_16_listener() {
              return ctx.openSnackBar("HEX copied in your clipboard!", "OK");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorsComponent_Template_mat_card_click_17_listener() {
              return ctx.copyMessage("#e0544c");
            })("click", function ColorsComponent_Template_mat_card_click_17_listener() {
              return ctx.openSnackBar("HEX copied in your clipboard!", "OK");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorsComponent_Template_mat_card_click_18_listener() {
              return ctx.copyMessage("#facbd9");
            })("click", function ColorsComponent_Template_mat_card_click_18_listener() {
              return ctx.openSnackBar("HEX copied in your clipboard!", "OK");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorsComponent_Template_mat_card_click_19_listener() {
              return ctx.copyMessage("#e5ddf7");
            })("click", function ColorsComponent_Template_mat_card_click_19_listener() {
              return ctx.openSnackBar("HEX copied in your clipboard!", "OK");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Designed by Paolo Nazzaro ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "testolight" : "testodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.mode);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRipple"]],
        styles: ["mat-card[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\n@media (max-width: 992px) {\n    .container-fluid[_ngcontent-%COMP%] {\n        height: 100vh !important;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sb3JzL2NvbG9ycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb2xvcnMvY29sb3JzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAuY29udGFpbmVyLWZsdWlkIHtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xuICAgIH1cbn0iXX0= */", ".sfondolight[_ngcontent-%COMP%] { background-color: white }\n  \n    .sfondodark[_ngcontent-%COMP%] { background-color: #222f3e; color: whitesmoke; }"]
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
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"]
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
        decls: 76,
        vars: 7,
        consts: [[1, "container-fluid", 3, "ngClass"], ["id", "head", 1, "row"], [1, "col-12", 2, "z-index", "999 !important"], [1, "header-span", 3, "click"], ["src", "assets/pn.png", "alt", "", 1, "pn-logo"], ["id", "nome", 2, "font-size", "300%", 3, "ngClass"], [1, "row"], [1, "col-12", 2, "text-align", "center"], ["color", "primary", 3, "checked", "change"], [1, "d-flex", "justify-content-center", "align-items-center", "px-2", "pt-3"], ["matRipple", "", 1, "mat-elevation-z12", "w-100", 3, "ngClass"], [1, "row", "sezione", "d-flex", "justify-content-center", "align-items-center", 2, "margin-top", "2%", 3, "ngClass"], [1, "col-lg-6", "col-xs-12", "d-flex", "justify-content-center"], ["src", "./assets/homeiphone.png", "id", "iphone", "alt", ""], [1, "col-lg-6", "col-xs-12", "right"], ["id", "torvergata"], ["id", "text"], [1, "row", "sezione", "back", "d-flex", "justify-content-center", "align-items-center", 2, "margin-top", "2%", 3, "ngClass"], ["src", "./assets/docsphone.png", "id", "iphone", "alt", ""], [1, "d-flex", "justify-content-center", "pt-3", "pb-1", "eina-light", "txt-70"]],
        template: function TorvergataComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TorvergataComponent_Template_span_click_3_listener() {
              return ctx.goHome();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TorvergataComponent_Template_mat_slide_toggle_change_9_listener() {
              return ctx.switchMode();
            });

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
          }

          if (rf & 2) {
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


      var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../dialog/dialog.component */
      "ZYp2");
      /* harmony import */


      var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../app.constants */
      "dkQB");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _theme_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../theme.service */
      "deNa");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb"); // import { faInstagram } from '@fortawesome/free-brands-svg-icons';


      var _c0 = function _c0(a0) {
        return {
          "background-color": a0
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "color": a0
        };
      };

      var _c2 = function _c2(a0, a1) {
        return {
          "background-color": a0,
          "color": a1
        };
      };

      var HomepageComponent = /*#__PURE__*/function () {
        function HomepageComponent(x, ts, dialog) {
          _classCallCheck(this, HomepageComponent);

          this.x = x;
          this.ts = ts;
          this.dialog = dialog;
          this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLinkedin"];
          this.faInstagram = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faInstagram"];
          this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEnvelope"]; // matslidetoggle : MatSlideToggle;

          this.AVVOCATO = _app_constants__WEBPACK_IMPORTED_MODULE_4__["AVVOCATO"];
          this.T2M = _app_constants__WEBPACK_IMPORTED_MODULE_4__["T2M"];
          this.MOKA = _app_constants__WEBPACK_IMPORTED_MODULE_4__["MOKA"];
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
        }, {
          key: "openDialog",
          value: function openDialog(title, description, image, url, color) {
            var dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], {
              data: {
                title: title,
                description: description,
                image: image,
                url: url,
                color: color
              }
            });
          }
        }]);

        return HomepageComponent;
      }();

      HomepageComponent.ɵfac = function HomepageComponent_Factory(t) {
        return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theme_service__WEBPACK_IMPORTED_MODULE_6__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]));
      };

      HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomepageComponent,
        selectors: [["app-homepage"]],
        decls: 83,
        vars: 41,
        consts: [[1, "container-fluid", 2, "height", "100%", 3, "ngStyle"], ["id", "head", 1, "row"], [1, "col-12", 2, "z-index", "999 !important"], [1, "header-span"], ["src", "assets/pn.png", "alt", "", 1, "pn-logo"], ["id", "nome", 2, "font-size", "300%", 3, "ngClass"], [1, "row"], [1, "col-lg-12", "col-xs-12", "toggle-container", "text-center"], ["color", "primary", 3, "checked", "change"], [1, "riga", "firstrow", "d-flex", "justify-content-around", "align-items-center", "pt-3", "pb-5"], [1, "w-100", "px-5"], [1, "bio-card", "text-center", "mat-elevation-z24", 3, "ngStyle"], [2, "color", "#10ac84"], [1, "d-flex", "justify-content-center", "text-center", "flex-column"], [3, "ngClass"], [1, "mat-elevation-z6", 3, "ngClass", "click"], [1, "work-card", "text-center", "mat-elevation-z24", 3, "ngStyle"], [2, "color", "#3880ff"], [1, "d-flex", "justify-content-center", "text-center", "flex-wrap"], ["routerLink", "teaching", 1, "mat-elevation-z6", 3, "ngClass"], ["routerLink", "logo-designer", 1, "mat-elevation-z6", 3, "ngClass"], [1, "riga", "d-flex", "justify-content-around", "align-items-center", "pb-3"], [1, "proj-card", "text-center", "mat-elevation-z24", 3, "ngStyle"], [2, "color", "#5f27cd"], [3, "ngStyle"], [1, "mat-elevation-z6", 3, "ngClass"], ["href", "https://flyeaa.com/", "target", "_blank", 2, "color", "inherit !important"], [2, "color", "inherit !important", 3, "click"], [1, "contacts-card", "text-center", "mat-elevation-z24", 3, "ngStyle"], [2, "color", "#eb3b6d"], ["href", "mailto:paolonazzaro23@gmail.com"], [3, "icon"], ["href", "https://www.linkedin.com/in/paolonazzaro23/", "target", "_blank"], ["href", "https://www.instagram.com/paolonazzaro.png/", "target", "_blank"], [1, "footer", "text-center"], [1, "d-flex", "justify-content-center", 2, "z-index", "999 !important"], [1, "mat-elevation-z6", 3, "ngStyle", "click"], [1, "pt-4", "eina-light", "txt-70", 3, "ngClass"]],
        template: function HomepageComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HomepageComponent_Template_mat_slide_toggle_change_9_listener() {
              return ctx.switchMode();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_mat_chip_click_21_listener() {
              return ctx.goCV();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-chip", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_mat_chip_click_31_listener() {
              return ctx.goWork();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Front End Developer ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-chip", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Teaching Assistant ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-chip", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Freelance Logo Designer ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-card", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-card-title", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h1", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-chip-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-chip", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_mat_chip_click_46_listener() {
              return ctx.goTv();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Tor Vergata for Foreigners ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-chip", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " European Aviation Academy ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-chip", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_a_click_52_listener() {
              return ctx.openDialog(ctx.AVVOCATO.title, ctx.AVVOCATO.description, ctx.AVVOCATO.image, ctx.AVVOCATO.url, ctx.AVVOCATO.color);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Il mio avvocato ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-chip", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_a_click_55_listener() {
              return ctx.openDialog(ctx.T2M.title, ctx.T2M.description, ctx.T2M.image, ctx.T2M.url, ctx.T2M.color);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Time To Marketing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-chip", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_a_click_58_listener() {
              return ctx.openDialog(ctx.MOKA.title, ctx.MOKA.description, ctx.MOKA.image, ctx.MOKA.url, ctx.MOKA.color);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Moka ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-card", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-card-title", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Contacts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-chip-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-chip", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "fa-icon", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-chip", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "fa-icon", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-chip", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "fa-icon", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-chip", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_mat_chip_click_79_listener() {
              return ctx.goColors();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Colors ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Designed by Paolo Nazzaro ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, ctx.mode ? "#222f3e" : ""));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "testolight" : "testodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.mode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, ctx.mode ? "rgba(16, 172, 132,0.2)" : ""));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "" : "testodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "bio-chip" : "bio-chip-dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c0, ctx.mode ? "rgba(56, 128, 255,0.2)" : ""));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "work-chip" : "work-chip-dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "work-chip" : "work-chip-dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "work-chip" : "work-chip-dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c0, ctx.mode ? "rgba(94, 39, 205,0.2)" : ""));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c1, ctx.mode ? " #e5ddf7" : ""));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "proj-chip" : "proj-chip-dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "proj-chip" : "proj-chip-dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "proj-chip" : "proj-chip-dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "proj-chip" : "proj-chip-dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "proj-chip" : "proj-chip-dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c0, ctx.mode ? "rgba(235, 59, 109,0.2)" : ""));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "contacts-chip" : "contacts-chip-dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faEnvelope);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "contacts-chip" : "contacts-chip-dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faLinkedin);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "contacts-chip" : "contacts-chip-dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faInstagram);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](38, _c2, ctx.mode ? "#212E3C" : "whitesmoke", ctx.mode ? "whitesmoke" : "#212E3C"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "testolight" : "testodark");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardContent"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChip"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FaIconComponent"]],
        styles: [".voce[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n.voce[_ngcontent-%COMP%]:hover{\n    background-color: #b2bec3;\n    transition-duration: 1s;\n}\np[_ngcontent-%COMP%]{\n    font-family: 'Eina-light';\n    font-size: 40%;\n}\n\n.contact[_ngcontent-%COMP%]{\n    font-family: 'SF-ultralight';\n    font-size: 40%;\n    vertical-align: middle;\n}\n#square[_ngcontent-%COMP%] {\n    text-align: center;\n    font-family: 'Eina-bold';\n    font-size: 300%;\n    padding-top: 5%;\n    height: 100%;\n}\n.voice[_ngcontent-%COMP%]{\n    cursor: pointer;\n    height: 30vh;\n    align-items: center;\n}\n.voice[_ngcontent-%COMP%]:hover{\n    transition-duration: 1s;\n}\n.social[_ngcontent-%COMP%]{\n    width: 10%;\n}\n.arrow[_ngcontent-%COMP%] {\n    width: 1.5vw;\n}\n#rgbimg[_ngcontent-%COMP%]{\n    width: 4vw;\n}\n#rgbimg[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    opacity: 50%;\n    transform: rotate(360deg);\n    transition-duration: 1s; \n}\n#rgbtxt[_ngcontent-%COMP%]{\n    font-family: 'Eina-bold';\n    font-size: 150%;\n    border-width: 1px solid black;\n}\na[_ngcontent-%COMP%]{\n    text-decoration: none;\n}\n\n@media (max-width: 992px){\n\n    .voice[_ngcontent-%COMP%]{\n        height: 35vh;\n    }\n    .arrow[_ngcontent-%COMP%]{\n        width: 4vw;\n    }\n    #rgbimg[_ngcontent-%COMP%]{\n        width: 8vw;\n    }\n    p[_ngcontent-%COMP%]{\n        font-family: 'Eina-light';\n        font-size: 40%;\n    }\n    \n    #gmail[_ngcontent-%COMP%]{\n        width: 10vw;\n    }\n    #linkedin[_ngcontent-%COMP%]{\n        width: 10vw;\n    }\n    #instagram[_ngcontent-%COMP%]{\n        width: 10vw;\n    }\n}\n@media (min-width: 993px){\n    #rgbtxt[_ngcontent-%COMP%]{\n        display: none;\n    }\n\n    #gmail[_ngcontent-%COMP%]{\n        width: 2vw;\n    }\n    #linkedin[_ngcontent-%COMP%]{\n        width: 2vw;\n    }\n    #instagram[_ngcontent-%COMP%]{\n        width: 2vw;\n    }\n}\na[_ngcontent-%COMP%] {\n    color: inherit;\n}\nfa-icon[_ngcontent-%COMP%] {\n    padding-left: 5px;\n    padding-right: 5px;\n    font-size: 130%;\n}\nfa-icon[_ngcontent-%COMP%]:hover{\n    color: lightgrey;\n    transition-duration: 0.3s;\n}\n\nmat-card[_ngcontent-%COMP%]{\n    border-radius: 10px;\n    z-index: 999;\n}\n  .mat-chip-list-wrapper{\n    justify-content: center !important;\n}\nmat-card-title[_ngcontent-%COMP%] {\n    font-family: 'Eina-bold';\n}\nmat-card-content[_ngcontent-%COMP%]{\n    font-family: 'Eina-light';\n    font-size: 100% !important;\n}\nmat-chip[_ngcontent-%COMP%] {\n    font-family: 'Eina-semibold';\n    cursor: pointer;\n}\n.bio-card[_ngcontent-%COMP%] {\n    background-color: #dbf3ec; \n}\n.bio-chip[_ngcontent-%COMP%] {\n    background-color: #ffffff; \n    color: #10ac84;\n}\n.bio-chip-dark[_ngcontent-%COMP%] {\n    background-color: #10AC84; \n    color: whitesmoke;\n}\n.work-card[_ngcontent-%COMP%] {\n    background-color: #c8dcff;\n}\n.work-chip[_ngcontent-%COMP%] {\n    background-color: white;\n    color: #3880ff;\n}\n.work-chip-dark[_ngcontent-%COMP%] {\n    background-color: #3880ff;\n    color: whitesmoke;\n}\n.proj-card[_ngcontent-%COMP%] {\n    background-color: #e5ddf7; \n}\n.proj-chip[_ngcontent-%COMP%] {\n    background-color: white; \n    color: #5f27cd;\n}\n.proj-chip-dark[_ngcontent-%COMP%] {\n    background-color: #5f27cd; \n    color: whitesmoke;\n}\n.contacts-card[_ngcontent-%COMP%]{\n    background-color: #facbd9;\n}\n.contacts-chip[_ngcontent-%COMP%] {\n    background-color: white;\n    color: #eb3b6d;\n}\n.contacts-chip-dark[_ngcontent-%COMP%] {\n    background-color: #eb3b6d;\n    color: whitesmoke;\n}\n@media (max-width: 992px) {\n    .riga[_ngcontent-%COMP%]{\n        flex-direction: column;\n        padding-bottom: 3% !important;\n    }\n    .firstrow[_ngcontent-%COMP%] {\n        padding-bottom: 0px !important;\n    }\n    mat-card[_ngcontent-%COMP%] {\n        margin-bottom: 5%;\n    }\n    .w-100[_ngcontent-%COMP%]{\n        padding-left: 1% !important;\n        padding-right: 1% !important;\n    }\n}\n@media (min-width: 993px) {\n    mat-card[_ngcontent-%COMP%] {\n        height: 27vh;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBRUE7OztHQUdHO0FBRUg7SUFDSSw0QkFBNEI7SUFDNUIsY0FBYztJQUNkLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7QUFFQSxTQUFTO0FBQUU7O0lBRVA7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0kseUJBQXlCO1FBQ3pCLGNBQWM7SUFDbEI7SUFDQTs7T0FFRztJQUNIO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7SUFDZjtBQUNKO0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFJQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3QjtBQUVBLFFBQVE7QUFFUjtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7QUFFQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDBCQUEwQjtBQUM5QjtBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLDZCQUE2QjtJQUNqQztJQUNBO1FBQ0ksOEJBQThCO0lBQ2xDO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLDJCQUEyQjtRQUMzQiw0QkFBNEI7SUFDaEM7QUFDSjtBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCOztBQUVKIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52b2NlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udm9jZTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiZWMzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xufVxuXG5we1xuICAgIGZvbnQtZmFtaWx5OiAnRWluYS1saWdodCc7XG4gICAgZm9udC1zaXplOiA0MCU7XG59XG5cbi8qIGZhLWljb257XG4gICAgZm9udC1zaXplOiA2MCU7XG4gICAgY29sb3I6IGJsYWNrOyAgICBcbn0gKi9cblxuLmNvbnRhY3R7XG4gICAgZm9udC1mYW1pbHk6ICdTRi11bHRyYWxpZ2h0JztcbiAgICBmb250LXNpemU6IDQwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4jc3F1YXJlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdFaW5hLWJvbGQnO1xuICAgIGZvbnQtc2l6ZTogMzAwJTtcbiAgICBwYWRkaW5nLXRvcDogNSU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLnZvaWNle1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDMwdmg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnZvaWNlOmhvdmVye1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xufVxuXG4uc29jaWFse1xuICAgIHdpZHRoOiAxMCU7XG59XG5cbi5hcnJvdyB7XG4gICAgd2lkdGg6IDEuNXZ3O1xufVxuXG4jcmdiaW1ne1xuICAgIHdpZHRoOiA0dnc7XG59XG4jcmdiaW1nOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvcGFjaXR5OiA1MCU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxczsgXG59XG5cbiNyZ2J0eHR7XG4gICAgZm9udC1mYW1pbHk6ICdFaW5hLWJvbGQnO1xuICAgIGZvbnQtc2l6ZTogMTUwJTtcbiAgICBib3JkZXItd2lkdGg6IDFweCBzb2xpZCBibGFjaztcbn1cblxuYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qbW9iaWxlKi8gQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KXtcblxuICAgIC52b2ljZXtcbiAgICAgICAgaGVpZ2h0OiAzNXZoO1xuICAgIH1cbiAgICAuYXJyb3d7XG4gICAgICAgIHdpZHRoOiA0dnc7XG4gICAgfVxuICAgICNyZ2JpbWd7XG4gICAgICAgIHdpZHRoOiA4dnc7XG4gICAgfVxuICAgIHB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnRWluYS1saWdodCc7XG4gICAgICAgIGZvbnQtc2l6ZTogNDAlO1xuICAgIH1cbiAgICAvKiAuY29udGF0dGl7XG4gICAgICAgIGZvbnQtc2l6ZTogNDAlO1xuICAgIH0gKi9cbiAgICAjZ21haWx7XG4gICAgICAgIHdpZHRoOiAxMHZ3O1xuICAgIH1cbiAgICAjbGlua2VkaW57XG4gICAgICAgIHdpZHRoOiAxMHZ3O1xuICAgIH1cbiAgICAjaW5zdGFncmFte1xuICAgICAgICB3aWR0aDogMTB2dztcbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTNweCl7XG4gICAgI3JnYnR4dHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAjZ21haWx7XG4gICAgICAgIHdpZHRoOiAydnc7XG4gICAgfVxuICAgICNsaW5rZWRpbntcbiAgICAgICAgd2lkdGg6IDJ2dztcbiAgICB9XG4gICAgI2luc3RhZ3JhbXtcbiAgICAgICAgd2lkdGg6IDJ2dztcbiAgICB9XG59XG5cblxuXG5hIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbn1cblxuZmEtaWNvbiB7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTMwJTtcbn1cblxuZmEtaWNvbjpob3ZlcntcbiAgICBjb2xvcjogbGlnaHRncmV5O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG59XG5cbi8qIE5FVyAqL1xuXG5tYXQtY2FyZHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHotaW5kZXg6IDk5OTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtY2hpcC1saXN0LXdyYXBwZXJ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxubWF0LWNhcmQtdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiAnRWluYS1ib2xkJztcbn1cblxubWF0LWNhcmQtY29udGVudHtcbiAgICBmb250LWZhbWlseTogJ0VpbmEtbGlnaHQnO1xuICAgIGZvbnQtc2l6ZTogMTAwJSAhaW1wb3J0YW50O1xufVxuXG5tYXQtY2hpcCB7XG4gICAgZm9udC1mYW1pbHk6ICdFaW5hLXNlbWlib2xkJztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5iaW8tY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZjNlYzsgXG59XG4uYmlvLWNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IFxuICAgIGNvbG9yOiAjMTBhYzg0O1xufVxuLmJpby1jaGlwLWRhcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMEFDODQ7IFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4ud29yay1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhkY2ZmO1xufVxuLndvcmstY2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6ICMzODgwZmY7XG59XG4ud29yay1jaGlwLWRhcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODgwZmY7XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5wcm9qLWNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWRkZjc7IFxufVxuLnByb2otY2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IFxuICAgIGNvbG9yOiAjNWYyN2NkO1xufVxuLnByb2otY2hpcC1kYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWYyN2NkOyBcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLmNvbnRhY3RzLWNhcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhY2JkOTtcbn1cbi5jb250YWN0cy1jaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogI2ViM2I2ZDtcbn1cbi5jb250YWN0cy1jaGlwLWRhcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYjNiNmQ7XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgIC5yaWdhe1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMyUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmZpcnN0cm93IHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBtYXQtY2FyZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICAgIH1cbiAgICAudy0xMDB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMSUgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMSUgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTNweCkge1xuICAgIG1hdC1jYXJkIHtcbiAgICAgICAgaGVpZ2h0OiAyN3ZoO1xuICAgIH1cblxufVxuIl19 */", ".testolight[_ngcontent-%COMP%]     { color: black !important; }\n    .testodark[_ngcontent-%COMP%]      { color: whitesmoke !important; }\n    .shadowdark[_ngcontent-%COMP%]     { box-shadow: -10px 15px 40px -20px #c8dcff; }\n    .cardark[_ngcontent-%COMP%]        { background-blend-mode: darken; }"]
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
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _theme_service__WEBPACK_IMPORTED_MODULE_6__["ThemeService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
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
        styles: ["#head[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-top: 2%;\n    font-size: 300%;\n    \n    color: black;\n}\n#head[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    color: lightgrey;\n    transition-duration: 0.3s;\n}\n.col-12[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n#mode[_ngcontent-%COMP%] {\n    width: 4vw;\n    margin-bottom: 2%;\n}\n#mode[_ngcontent-%COMP%]:hover{\n    opacity: 70%;\n    cursor: pointer;\n    transition-duration: 0.5s;\n    transform: rotate(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNoZWFkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDIlO1xuICAgIGZvbnQtc2l6ZTogMzAwJTtcbiAgICAvKiBmb250LWZhbWlseTogJ0FkYW0nOyAqL1xuICAgIGNvbG9yOiBibGFjaztcbn1cbiNoZWFkOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogbGlnaHRncmV5O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG59XG5cbi5jb2wtMTJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jbW9kZSB7XG4gICAgd2lkdGg6IDR2dztcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbn1cbiNtb2RlOmhvdmVye1xuICAgIG9wYWNpdHk6IDcwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4iXX0= */"]
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
      "zkoq");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ngx-google-analytics */
      "Wdmj");
      /* harmony import */


      var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./dialog/dialog.component */
      "ZYp2");
      /* harmony import */


      var _logo_designer_logo_designer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./logo-designer/logo-designer.component */
      "feZc"); // import { HomeComponent } from './home/home.component';
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
      }, {
        path: 'teaching',
        component: _teaching_teaching_component__WEBPACK_IMPORTED_MODULE_11__["TeachingComponent"]
      }, {
        path: 'logo-designer',
        component: _logo_designer_logo_designer_component__WEBPACK_IMPORTED_MODULE_24__["LogoDesignerComponent"]
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
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes), _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDividerModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"], ngx_google_analytics__WEBPACK_IMPORTED_MODULE_22__["NgxGoogleAnalyticsModule"].forRoot('G-B9X2K11W9Z'), _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], // HomeComponent,
          _colors_colors_component__WEBPACK_IMPORTED_MODULE_6__["ColorsComponent"], _torvergata_torvergata_component__WEBPACK_IMPORTED_MODULE_7__["TorvergataComponent"], _cv_cv_component__WEBPACK_IMPORTED_MODULE_8__["CvComponent"], _work_work_component__WEBPACK_IMPORTED_MODULE_9__["WorkComponent"], _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__["HomepageComponent"], _teaching_teaching_component__WEBPACK_IMPORTED_MODULE_11__["TeachingComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_23__["DialogComponent"], _logo_designer_logo_designer_component__WEBPACK_IMPORTED_MODULE_24__["LogoDesignerComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDividerModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"], ngx_google_analytics__WEBPACK_IMPORTED_MODULE_22__["NgxGoogleAnalyticsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], // HomeComponent,
            _colors_colors_component__WEBPACK_IMPORTED_MODULE_6__["ColorsComponent"], _torvergata_torvergata_component__WEBPACK_IMPORTED_MODULE_7__["TorvergataComponent"], _cv_cv_component__WEBPACK_IMPORTED_MODULE_8__["CvComponent"], _work_work_component__WEBPACK_IMPORTED_MODULE_9__["WorkComponent"], _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__["HomepageComponent"], _teaching_teaching_component__WEBPACK_IMPORTED_MODULE_11__["TeachingComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_23__["DialogComponent"], _logo_designer_logo_designer_component__WEBPACK_IMPORTED_MODULE_24__["LogoDesignerComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes), _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDividerModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"], ngx_google_analytics__WEBPACK_IMPORTED_MODULE_22__["NgxGoogleAnalyticsModule"].forRoot('G-B9X2K11W9Z'), _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZYp2":
    /*!********************************************!*\
      !*** ./src/app/dialog/dialog.component.ts ***!
      \********************************************/

    /*! exports provided: DialogComponent */

    /***/
    function ZYp2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DialogComponent", function () {
        return DialogComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");

      var DialogComponent = /*#__PURE__*/function () {
        function DialogComponent(data) {
          _classCallCheck(this, DialogComponent);

          this.data = data;
        }

        _createClass(DialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DialogComponent;
      }();

      DialogComponent.ɵfac = function DialogComponent_Factory(t) {
        return new (t || DialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      DialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DialogComponent,
        selectors: [["app-dialog"]],
        decls: 16,
        vars: 5,
        consts: [[1, "row", "d-flex", "justify-content-center"], [1, "col-12", "col-lg-6", "eina-semibold", "logo-info"], [1, "eina-bold"], [1, "eina-light"], ["selected", "", 1, "visit", 3, "color"], ["target", "_blank", 3, "href"], [1, "col-12", "col-lg-6", "d-flex", "align-items-center", "justify-content-center"], ["alt", "", 1, "logo", 3, "src"]],
        template: function DialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Logo designer for ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-chip", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Visit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.data.title, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.description);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.data.color);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.data.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.data.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        directives: [_angular_material_chips__WEBPACK_IMPORTED_MODULE_2__["MatChip"]],
        styles: [".logo[_ngcontent-%COMP%] {\n    width: 60%;\n}\n\n@media only screen and (max-width: 992px){\n    .logo-info[_ngcontent-%COMP%]{\n        text-align: center;\n    }\n    .visit[_ngcontent-%COMP%] {\n        margin-bottom: 5%;\n    }\n}\n\na[_ngcontent-%COMP%] {\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcbiAgICB3aWR0aDogNjAlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KXtcbiAgICAubG9nby1pbmZve1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC52aXNpdCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICAgIH1cbn1cblxuYSB7XG4gICAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dialog',
            templateUrl: './dialog.component.html',
            styleUrls: ['./dialog.component.css']
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
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
    "dkQB":
    /*!**********************************!*\
      !*** ./src/app/app.constants.ts ***!
      \**********************************/

    /*! exports provided: AVVOCATO, T2M, MOKA */

    /***/
    function dkQB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AVVOCATO", function () {
        return AVVOCATO;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "T2M", function () {
        return T2M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MOKA", function () {
        return MOKA;
      });

      var AVVOCATO = {
        title: 'Il mio avvocato',
        description: 'Online tool for legal assistance.',
        image: 'assets/avvocato-logo.png',
        url: 'https://ilmioavvocato.online/',
        color: 'primary',
        date: 'February 2021',
        flip: 'inactive'
      };
      var T2M = {
        title: 'Time To Marketing',
        description: 'Online marketing community.',
        image: 'assets/t2m.png',
        url: 'https://timetomarketing.netlify.app/',
        color: 'accent',
        date: 'April 2021',
        flip: 'inactive'
      };
      var MOKA = {
        title: 'Moka',
        description: 'Musical project based in Rome.',
        image: 'assets/moka.png',
        url: 'https://www.instagram.com/musichedeimoka/',
        color: 'warn',
        date: 'July 2021',
        flip: 'inactive'
      };
      /***/
    },

    /***/
    "feZc":
    /*!**********************************************************!*\
      !*** ./src/app/logo-designer/logo-designer.component.ts ***!
      \**********************************************************/

    /*! exports provided: LogoDesignerComponent */

    /***/
    function feZc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoDesignerComponent", function () {
        return LogoDesignerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../app.constants */
      "dkQB");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
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

      function LogoDesignerComponent_mat_card_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Client ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Description ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r2 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.mode === false ? "sfondolight" : "sfondodark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r2.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r2.date);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", project_r2.description, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", project_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function LogoDesignerComponent_div_31_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", project_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function LogoDesignerComponent_div_31_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Client ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Description ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-chip-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-chip", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Visit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r3.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r3.date);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", project_r3.description, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", project_r3.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", project_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function LogoDesignerComponent_div_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogoDesignerComponent_div_31_Template_mat_card_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var i_r4 = ctx.index;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.toggleFlip(i_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LogoDesignerComponent_div_31_div_2_Template, 2, 1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LogoDesignerComponent_div_31_div_3_Template, 16, 5, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r4 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@flipState", ctx_r1.projects[i_r4].flip)("ngClass", ctx_r1.mode === false ? "sfondolight" : "sfondodark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.projects[i_r4].flip === "inactive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.projects[i_r4].flip === "active");
        }
      }

      var LogoDesignerComponent = /*#__PURE__*/function () {
        function LogoDesignerComponent(x, ts) {
          _classCallCheck(this, LogoDesignerComponent);

          this.x = x;
          this.ts = ts;
          this.AVVOCATO = _app_constants__WEBPACK_IMPORTED_MODULE_1__["AVVOCATO"];
          this.T2M = _app_constants__WEBPACK_IMPORTED_MODULE_1__["T2M"];
          this.MOKA = _app_constants__WEBPACK_IMPORTED_MODULE_1__["MOKA"];
          this.projects = [_app_constants__WEBPACK_IMPORTED_MODULE_1__["T2M"], _app_constants__WEBPACK_IMPORTED_MODULE_1__["MOKA"], _app_constants__WEBPACK_IMPORTED_MODULE_1__["AVVOCATO"]];
        }

        _createClass(LogoDesignerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.ts.modeBool === true) {
              this.mode = true;
            } else {
              this.mode = false;
            }

            if (this.mode === true) {
              this.T2M.image = 'assets/t2m-dark.png';
            } else {
              this.T2M.image = 'assets/t2m.png';
            }
          } // flip: string = 'inactive';

        }, {
          key: "toggleFlip",
          value: function toggleFlip(index) {
            this.projects[index].flip = this.projects[index].flip == 'inactive' ? 'active' : 'inactive';
          }
        }, {
          key: "switchMode",
          value: function switchMode() {
            this.ts.switchMode();
            this.mode = this.ts.modeBool;

            if (this.mode === true) {
              this.T2M.image = 'assets/t2m-dark.png';
            } else {
              this.T2M.image = 'assets/t2m.png';
            }

            console.log(this.mode);
          }
        }, {
          key: "goHome",
          value: function goHome() {
            this.x.navigate(['/']);
          }
        }]);

        return LogoDesignerComponent;
      }();

      LogoDesignerComponent.ɵfac = function LogoDesignerComponent_Factory(t) {
        return new (t || LogoDesignerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"]));
      };

      LogoDesignerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LogoDesignerComponent,
        selectors: [["app-logo-designer"]],
        decls: 34,
        vars: 7,
        consts: [[1, "container-fluid", "mb-3", 3, "ngClass"], ["id", "head", 1, "row"], [1, "col-12", 2, "z-index", "999 !important"], [1, "header-span", 3, "click"], ["src", "assets/pn.png", "alt", "", 1, "pn-logo"], ["id", "nome", 2, "font-size", "300%", 3, "ngClass"], [1, "row"], ["id", "back", 1, "col-3", 2, "cursor", "pointer", 3, "click"], [1, "col-12", "toggle-container", 2, "text-align", "center"], ["color", "primary", 3, "checked", "change"], [1, "d-flex", "justify-content-center", "align-items-center"], ["matRipple", "", 1, "mat-elevation-z12", "mt-4", 3, "ngClass"], [1, "row", 2, "margin-top", "2%", 3, "ngClass"], [1, "col-lg-6", "col-xs-12", "d-flex", "align-items-center", "justify-content-center", "left", "eina-bold"], [1, "col-lg-6", "col-xs-12", "right"], [1, "eina-semibold"], [1, "eina-regular"], ["href", "http://giorgiopiccardo.com", "target", "_blank"], [1, "eina-light", "txt-90"], [1, "web-projects", "d-flex", "flex-column", "justify-content-center", "align-items-center"], ["class", "mat-elevation-z12 mt-4", "matRipple", "", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "mobile-projects", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", "pt-3", "pb-1", "eina-light", "txt-70"], [1, "row", "d-flex", "align-items-center", "project-content"], [1, "col-lg-6", "eina-regular", "pl-4"], [1, "col-lg-6", "text-center"], ["alt", "", 1, "project-img", 3, "src"], [1, "mobile-projects"], [1, "tp-box", "mat-elevation-z12", "mt-4", "d-flex", "align-items-center", 3, "ngClass", "click"], ["class", "front-card text-center d-flex align-items-center justify-content-center", 4, "ngIf"], ["class", "back-card eina-regular pl-4", 4, "ngIf"], [1, "front-card", "text-center", "d-flex", "align-items-center", "justify-content-center"], [1, "back-card", "eina-regular", "pl-4"], ["selected", "", 1, "visit", "mt-2", "px-3", 3, "color"], ["target", "_blank", 1, "text-white", "eina-semibold", 3, "href"]],
        template: function LogoDesignerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogoDesignerComponent_Template_span_click_3_listener() {
              return ctx.goHome();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "aolo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogoDesignerComponent_Template_div_click_8_listener() {
              return ctx.goHome();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-slide-toggle", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LogoDesignerComponent_Template_mat_slide_toggle_change_10_listener() {
              return ctx.switchMode();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Logo Designer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Enhancing brands' visual identity.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Formal participation to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Un nuovo logo per La nuvola");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " You can find some of my recent projects just below. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, LogoDesignerComponent_mat_card_30_Template, 16, 5, "mat-card", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, LogoDesignerComponent_div_31_Template, 4, 4, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Designed by Paolo Nazzaro\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "testolight" : "testodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.mode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "lightsez" : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRipple"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChip"]],
        styles: ["mat-card[_ngcontent-%COMP%] {\n    border-radius: 25px;\n    \n}\n\n.project-img[_ngcontent-%COMP%] {\n    width: 30%;\n}\n\n\n\n@media (max-width: 992px){\n    .web-projects[_ngcontent-%COMP%] {\n        display: none !important;\n    }\n    .left[_ngcontent-%COMP%]{\n        justify-content: left !important;\n    }\n    h1[_ngcontent-%COMP%]{\n        font-size: 180%;\n        text-align: left;\n    }\n    .project-content[_ngcontent-%COMP%] {\n        flex-direction: column-reverse;\n        text-align: left;\n        padding-left: 0px !important;\n    }\n    .project-img[_ngcontent-%COMP%] {\n        margin-bottom: 5%;\n        text-align: left !important;\n        width: 60%;\n    }\n}\n\n@media (min-width: 993px){\n    .mobile-projects[_ngcontent-%COMP%] {\n        display: none;\n    }\n    mat-card[_ngcontent-%COMP%] {\n        max-width: 70%;\n    }\n}\n\n.tp-box[_ngcontent-%COMP%] {\n    height: 250px;\n}\n\n.back-card[_ngcontent-%COMP%] {\n    transform: scale(-1, 1);\n}\n\n.mat-chip-list-wrapper[_nghost-%COMP%] {\n    justify-content: flex-end !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nby1kZXNpZ25lci9sb2dvLWRlc2lnbmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHFEQUFxRDtBQUN6RDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTs7R0FFRzs7QUFFSDtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxnQ0FBZ0M7SUFDcEM7SUFDQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLDhCQUE4QjtRQUM5QixnQkFBZ0I7UUFDaEIsNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsMkJBQTJCO1FBQzNCLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBS0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDIiwiZmlsZSI6InNyYy9hcHAvbG9nby1kZXNpZ25lci9sb2dvLWRlc2lnbmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbm1hdC1jYXJkIHtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIC8qIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCAwcHggI2M4ZGNmZiAhaW1wb3J0YW50OyAqL1xufVxuXG4ucHJvamVjdC1pbWcge1xuICAgIHdpZHRoOiAzMCU7XG59XG5cbi8qIC5jb250YWluZXItZmx1aWQge1xuICAgIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbn0gKi9cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KXtcbiAgICAud2ViLXByb2plY3RzIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubGVmdHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGgxe1xuICAgICAgICBmb250LXNpemU6IDE4MCU7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICAgIC5wcm9qZWN0LWNvbnRlbnQge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5wcm9qZWN0LWltZyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkzcHgpe1xuICAgIC5tb2JpbGUtcHJvamVjdHMge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICBtYXQtY2FyZCB7XG4gICAgICAgIG1heC13aWR0aDogNzAlO1xuICAgIH1cbn1cblxuLnRwLWJveCB7XG4gICAgaGVpZ2h0OiAyNTBweDtcbn1cblxuLmJhY2stY2FyZCB7XG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcbn1cblxuOmhvc3QoLm1hdC1jaGlwLWxpc3Qtd3JhcHBlcikge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcbn0iXX0= */", ".sfondolight[_ngcontent-%COMP%] { background-color: white } \n    .sfondodark[_ngcontent-%COMP%] { background-color: #222f3e; color: whitesmoke; }\n    .visible[_ngcontent-%COMP%] { overflow: visible; transition-duration: 1s;}\n    .hidden[_ngcontent-%COMP%] { overflow: hidden; }"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('flipState', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            transform: 'rotateY(179deg)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            transform: 'rotateY(0)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('active => inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('150ms ease-out')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('150ms ease-in'))])]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoDesignerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-logo-designer',
            templateUrl: './logo-designer.component.html',
            styleUrls: ['./logo-designer.component.css'],
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('flipState', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              transform: 'rotateY(179deg)'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              transform: 'rotateY(0)'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('active => inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('150ms ease-out')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('150ms ease-in'))])]
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
        decls: 45,
        vars: 5,
        consts: [[1, "container-fluid", 3, "ngClass"], ["id", "head", 1, "row"], [1, "col-12", 2, "z-index", "999 !important"], [1, "header-span", 3, "click"], ["src", "assets/pn.png", "alt", "", 1, "pn-logo"], ["id", "nome", 2, "font-size", "300%", 3, "ngClass"], [1, "row"], ["id", "back", 1, "col-3", 2, "cursor", "pointer", 3, "click"], [1, "col-12", "toggle-container", 2, "text-align", "center"], ["color", "primary", 3, "checked", "change"], [1, "d-flex", "justify-content-center", "align-items-center"], ["matRipple", "", 1, "mat-elevation-z12", "mt-4", 3, "ngClass"], [1, "row", 2, "margin-top", "2%", 3, "ngClass"], [1, "col-lg-6", "col-xs-12", "d-flex", "align-items-center", "justify-content-center", "text-center", "left"], [1, "col-lg-6", "col-xs-12", "right"], [1, "textTeach", 2, "font-family", "Eina-bold"], ["href", "http://www.rotechnology.it/", "target", "_blank"], [2, "font-family", "Eina-light"], [2, "font-family", "Eina-semibold"], [1, "fixed-bottom", "d-flex", "justify-content-center", "pt-3", "pb-1", "eina-light", "txt-70"]],
        template: function WorkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkComponent_Template_span_click_3_listener() {
              return ctx.goHome();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "aolo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkComponent_Template_div_click_8_listener() {
              return ctx.goHome();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-slide-toggle", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function WorkComponent_Template_mat_slide_toggle_change_10_listener() {
              return ctx.switchMode();
            });

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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "testolight" : "testodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.mode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "sfondolight" : "sfondodark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode === false ? "lightsez" : "");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRipple"]],
        styles: [".left[_ngcontent-%COMP%] {\n    font-family: 'Eina-bold';\n}\n\nmat-card[_ngcontent-%COMP%] {\n    border-radius: 25px;\n    \n}\n\n.container-fluid[_ngcontent-%COMP%] {\n    height: 100vh !important;\n}\n\n@media (max-width: 992px){\n    .left[_ngcontent-%COMP%]{\n        justify-content: left !important;\n    }\n    h1[_ngcontent-%COMP%]{\n        font-size: 180%;\n        text-align: left;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay93b3JrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIscURBQXFEO0FBQ3pEOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0k7UUFDSSxnQ0FBZ0M7SUFDcEM7SUFDQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3dvcmsvd29yay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlZnQge1xuICAgIGZvbnQtZmFtaWx5OiAnRWluYS1ib2xkJztcbn1cblxubWF0LWNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgLyogYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IDBweCAjYzhkY2ZmICFpbXBvcnRhbnQ7ICovXG59XG5cbi5jb250YWluZXItZmx1aWQge1xuICAgIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KXtcbiAgICAubGVmdHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGgxe1xuICAgICAgICBmb250LXNpemU6IDE4MCU7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxufSJdfQ== */", ".sfondolight[_ngcontent-%COMP%] { background-color: white } \n    .sfondodark[_ngcontent-%COMP%] { background-color: #222f3e; color: whitesmoke; }\n    .visible[_ngcontent-%COMP%] { overflow: visible; transition-duration: 1s;}\n    .hidden[_ngcontent-%COMP%] { overflow: hidden; }"]
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