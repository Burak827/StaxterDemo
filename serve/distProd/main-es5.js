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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>\n  :host {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 8px 0;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .spacer {\n    flex: 1;\n  }\n\n  .toolbar {\n    height: 60px;\n    margin: -8px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar img {\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo:hover {\n    opacity: 0.8;\n  }\n\n  .content {\n    display: flex;\n    margin: 32px auto;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card svg.material-icons path {\n    fill: #888;\n  }\n\n  .card-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container .card:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container .card:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container .card:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(black, 0.35);\n  }\n\n  .card-container .card:not(.highlight-card):hover .material-icons path {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card span {\n    margin-left: 60px;\n  }\n\n  svg#rocket {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke {\n    height: 100vh;\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a,\n  a:visited,\n  a:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: #125699;\n  }\n\n  .terminal {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal pre {\n    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer a {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27, 31, 35, .2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n  }\n\n  .github-star-badge:hover {\n    background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n    border-color: rgba(27, 31, 35, .35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge .material-icons {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  /* Responsive Styles */\n  @media screen and (max-width: 767px) {\n\n    .card-container>*:not(.circle-link),\n    .terminal {\n      width: 100%;\n    }\n\n    .card:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card span {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke {\n      display: none;\n      visibility: hidden;\n    }\n  }\n</style>\n\n<div class=\"sidenav\">\n  <app-side-bar></app-side-bar>\n</div>\n\n<!-- Page content -->\n<div class=\"main\">\n  <router-outlet></router-outlet>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/layout/side-bar/side-bar.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/layout/side-bar/side-bar.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsLayoutSideBarSideBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<a routerLink=\"\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Latest Rates</a>\n<a routerLink=\"lastthirty\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: false}\">Last 30 Days</a>\n<a routerLink=\"topfive\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Top 5</a>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/last-thirty/last-thirty.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/last-thirty/last-thirty.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsPagesLastThirtyLastThirtyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ba-component-title\">\n    Last 30 Days\n</div>\n\n<span>\n    USD\n</span>\n\n<div class=\"ba-row\">\n    <span class=\"ba-flex-float-right\">\n        <mat-form-field>\n            <mat-label>Select Base Currency</mat-label>\n            <mat-select [(value)]=\"currentBase\" (selectionChange)=\"onBaseCurrencyChange()\">\n                <mat-option *ngFor=\"let currency of currencyList\" [(value)]=\"currency\">{{currency}}</mat-option>\n            </mat-select>\n        </mat-form-field>\n    </span>\n</div>\n\n<div>\n    <ngx-charts-bar-vertical [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"dataSource\" [gradient]=\"gradient\"\n        [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\" [showXAxisLabel]=\"showXAxisLabel\"\n        [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\">\n    </ngx-charts-bar-vertical>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/latest-rates/latest-rates.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/latest-rates/latest-rates.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsPagesLatestRatesLatestRatesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ba-component-title\">\r\n    Latest Rates\r\n</div>\r\n\r\n<span class=\"ba-float-right\">\r\n    <mat-form-field>\r\n        <mat-label>Select Base Currency</mat-label>\r\n        <mat-select [(value)]=\"currentBase\" (selectionChange)=\"onBaseCurrencyChange()\">\r\n            <mat-option *ngFor=\"let currency of currencyList\" [(value)]=\"currency\">{{currency}}</mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n</span>\r\n\r\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n    <!-- Currency Column -->\r\n    <ng-container matColumnDef=\"currency\">\r\n        <th mat-header-cell *matHeaderCellDef>Currency</th>\r\n        <td mat-cell *matCellDef=\"let rate\"> {{rate.currency}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Spot Column -->\r\n    <ng-container matColumnDef=\"spot\">\r\n        <th mat-header-cell *matHeaderCellDef>Spot</th>\r\n        <td mat-cell *matCellDef=\"let rate\"> {{rate.spot | currencyValue}}\r\n        </td>\r\n    </ng-container>\r\n\r\n    <!-- Increase/Decrease Column -->\r\n    <ng-container matColumnDef=\"incDec\">\r\n        <th mat-header-cell *matHeaderCellDef>Trend</th>\r\n        <td mat-cell *matCellDef=\"let rate\" [ngSwitch]=\"rate.incDec\" class=\"disable-select\">\r\n            <span *ngSwitchCase=\"0\" class=\"material-icons ba-color-green\">keyboard_arrow_up</span>\r\n            <span *ngSwitchCase=\"1\" class=\"material-icons ba-color-red\">keyboard_arrow_down</span>\r\n            <span *ngSwitchCase=\"2\" class=\"material-icons\">trending_flat</span>\r\n        </td>\r\n    </ng-container>\r\n\r\n    <!-- Chart Column -->\r\n    <ng-container matColumnDef=\"chart\">\r\n        <th mat-header-cell *matHeaderCellDef>Chart</th>\r\n        <td mat-cell *matCellDef=\"let rate\">\r\n            <span class=\"material-icons chart-button disable-select\"\r\n                (click)=\"navigateToChart(rate.currency)\">timeline</span>\r\n        </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/top-five/top-five.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/top-five/top-five.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsPagesTopFiveTopFiveComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ba-component-title\">\n    Top 5\n</div>\n\n<span>\n    <mat-button-toggle-group #group=\"matButtonToggleGroup\" (change)=\"onChangeTrend()\" value=\"increase\"\n        aria-label=\"Font Style\">\n        <mat-button-toggle value=\"increase\">Increase</mat-button-toggle>\n        <mat-button-toggle value=\"decrease\">Decrease</mat-button-toggle>\n    </mat-button-toggle-group>\n</span>\n\n<span class=\"ba-float-right\">\n    <mat-form-field>\n        <mat-label>Select Base Currency</mat-label>\n        <mat-select [(value)]=\"currentBase\" (selectionChange)=\"onBaseCurrencyChange()\">\n            <mat-option *ngFor=\"let currency of currencyList\" [(value)]=\"currency\">{{currency}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n</span>\n\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n    <!-- Currency Column -->\n    <ng-container matColumnDef=\"currency\">\n        <th mat-header-cell *matHeaderCellDef>Currency</th>\n        <td mat-cell *matCellDef=\"let rate\"> {{rate.currency}} </td>\n    </ng-container>\n\n    <!-- Spot Column -->\n    <ng-container matColumnDef=\"difference\">\n        <th mat-header-cell *matHeaderCellDef>Difference</th>\n        <td mat-cell *matCellDef=\"let rate\"> {{rate.difference  | currencyValue}}\n        </td>\n    </ng-container>\n\n    <!-- Increase/Decrease Column -->\n    <ng-container matColumnDef=\"percentage\">\n        <th mat-header-cell *matHeaderCellDef>%</th>\n        <td mat-cell *matCellDef=\"let rate\">{{rate.percentage | currencyValue}}</td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _views_pages_latest_rates_latest_rates_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./views/pages/latest-rates/latest-rates.component */
    "./src/app/views/pages/latest-rates/latest-rates.component.ts");
    /* harmony import */


    var _views_pages_last_thirty_last_thirty_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./views/pages/last-thirty/last-thirty.component */
    "./src/app/views/pages/last-thirty/last-thirty.component.ts");
    /* harmony import */


    var _views_pages_top_five_top_five_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./views/pages/top-five/top-five.component */
    "./src/app/views/pages/top-five/top-five.component.ts");

    var routes = [{
      path: '',
      component: _views_pages_latest_rates_latest_rates_component__WEBPACK_IMPORTED_MODULE_3__["LatestRatesComponent"],
      pathMatch: 'full'
    }, {
      path: 'lastthirty/:cur',
      component: _views_pages_last_thirty_last_thirty_component__WEBPACK_IMPORTED_MODULE_4__["LastThirtyComponent"]
    }, {
      path: 'lastthirty',
      component: _views_pages_last_thirty_last_thirty_component__WEBPACK_IMPORTED_MODULE_4__["LastThirtyComponent"]
    }, {
      path: 'topfive',
      component: _views_pages_top_five_top_five_component__WEBPACK_IMPORTED_MODULE_5__["TopFiveComponent"]
    }, // no layout routes
    // otherwise redirect to home
    {
      path: '**',
      redirectTo: ''
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sidenav {\n  height: 100%;\n  width: 360px;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #111;\n  overflow-x: hidden;\n  padding-top: 20px;\n}\n\n.main {\n  margin-left: 360px;\n  /* Same as the width of the sidebar */\n  padding: 30px 30px;\n}\n\n@media screen and (max-height: 450px) {\n  .sidenav {\n    padding-top: 15px;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .sidenav {\n    width: 160px !important;\n  }\n\n  .main {\n    margin-left: 160px !important;\n    /* Same as the width of the sidebar */\n  }\n}\n\n@media screen and (max-height: 450px) {\n  a {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxCdXJhayBBa2FyXFxQcm9qZWN0c1xcc3RheHRlci10YXNrL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFlBQUE7RUFDQSxZQUpxQjtFQUtyQixlQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFmcUI7RUFlZSxxQ0FBQTtFQUNwQyxrQkFBQTtBQ0RGOztBRElBO0VBQ0U7SUFDRSxpQkFBQTtFQ0RGO0FBQ0Y7O0FESUE7RUFDRTtJQUNFLHVCQTVCa0I7RUMwQnBCOztFRElBO0lBQ0UsNkJBL0JrQjtJQStCaUIscUNBQUE7RUNBckM7QUFDRjs7QURHQTtFQUNFO0lBQ0UsZUFBQTtFQ0RGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbGVmdC1wYWRkaW5nLW1vYmlsZTogMTYwcHggIWltcG9ydGFudDtcclxuJGxlZnQtcGFkZGluZy1kZXNrdG9wOiAzNjBweDtcclxuXHJcbi5zaWRlbmF2IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6ICRsZWZ0LXBhZGRpbmctZGVza3RvcDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAkbGVmdC1wYWRkaW5nLWRlc2t0b3A7IC8qIFNhbWUgYXMgdGhlIHdpZHRoIG9mIHRoZSBzaWRlYmFyICovXHJcbiAgcGFkZGluZzogMzBweCAzMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcclxuICAuc2lkZW5hdiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLnNpZGVuYXYge1xyXG4gICAgd2lkdGg6ICRsZWZ0LXBhZGRpbmctbW9iaWxlO1xyXG4gIH1cclxuICAubWFpbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogJGxlZnQtcGFkZGluZy1tb2JpbGU7IC8qIFNhbWUgYXMgdGhlIHdpZHRoIG9mIHRoZSBzaWRlYmFyICovXHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcclxuICBhIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuIiwiLnNpZGVuYXYge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAzNjBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5tYWluIHtcbiAgbWFyZ2luLWxlZnQ6IDM2MHB4O1xuICAvKiBTYW1lIGFzIHRoZSB3aWR0aCBvZiB0aGUgc2lkZWJhciAqL1xuICBwYWRkaW5nOiAzMHB4IDMwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xuICAuc2lkZW5hdiB7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5zaWRlbmF2IHtcbiAgICB3aWR0aDogMTYwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYWluIHtcbiAgICBtYXJnaW4tbGVmdDogMTYwcHggIWltcG9ydGFudDtcbiAgICAvKiBTYW1lIGFzIHRoZSB3aWR0aCBvZiB0aGUgc2lkZWJhciAqL1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcbiAgYSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59Il19 */";
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'staxter-task';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _views_pages_latest_rates_latest_rates_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./views/pages/latest-rates/latest-rates.component */
    "./src/app/views/pages/latest-rates/latest-rates.component.ts");
    /* harmony import */


    var _views_pages_last_thirty_last_thirty_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./views/pages/last-thirty/last-thirty.component */
    "./src/app/views/pages/last-thirty/last-thirty.component.ts");
    /* harmony import */


    var _views_pages_top_five_top_five_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./views/pages/top-five/top-five.component */
    "./src/app/views/pages/top-five/top-five.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _views_layout_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./views/layout/side-bar/side-bar.component */
    "./src/app/views/layout/side-bar/side-bar.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @swimlane/ngx-charts */
    "./node_modules/@swimlane/ngx-charts/fesm2015/swimlane-ngx-charts.js");
    /* harmony import */


    var _pipes_currency_value_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./pipes/currency.value.pipe */
    "./src/app/pipes/currency.value.pipe.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _views_pages_latest_rates_latest_rates_component__WEBPACK_IMPORTED_MODULE_5__["LatestRatesComponent"], _views_pages_last_thirty_last_thirty_component__WEBPACK_IMPORTED_MODULE_6__["LastThirtyComponent"], _views_pages_top_five_top_five_component__WEBPACK_IMPORTED_MODULE_7__["TopFiveComponent"], _views_layout_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_9__["SideBarComponent"], _pipes_currency_value_pipe__WEBPACK_IMPORTED_MODULE_21__["CurrencyValuePipe"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_20__["NgxChartsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/models/chart.data.model.ts":
  /*!********************************************!*\
    !*** ./src/app/models/chart.data.model.ts ***!
    \********************************************/

  /*! exports provided: ChartDataModel */

  /***/
  function srcAppModelsChartDataModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartDataModel", function () {
      return ChartDataModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ChartDataModel = function ChartDataModel(init) {
      _classCallCheck(this, ChartDataModel);

      Object.assign(this, init);
    };
    /***/

  },

  /***/
  "./src/app/models/difference.enum.ts":
  /*!*******************************************!*\
    !*** ./src/app/models/difference.enum.ts ***!
    \*******************************************/

  /*! exports provided: DifferenceEnum */

  /***/
  function srcAppModelsDifferenceEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DifferenceEnum", function () {
      return DifferenceEnum;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var DifferenceEnum;

    (function (DifferenceEnum) {
      DifferenceEnum[DifferenceEnum["Increasing"] = 0] = "Increasing";
      DifferenceEnum[DifferenceEnum["Decreasing"] = 1] = "Decreasing";
      DifferenceEnum[DifferenceEnum["Same"] = 2] = "Same";
    })(DifferenceEnum || (DifferenceEnum = {}));
    /***/

  },

  /***/
  "./src/app/models/latestrate.model.ts":
  /*!********************************************!*\
    !*** ./src/app/models/latestrate.model.ts ***!
    \********************************************/

  /*! exports provided: LatestRate */

  /***/
  function srcAppModelsLatestrateModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LatestRate", function () {
      return LatestRate;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _rate_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./rate.model */
    "./src/app/models/rate.model.ts");

    var LatestRate = /*#__PURE__*/function () {
      function LatestRate() {
        _classCallCheck(this, LatestRate);
      }

      _createClass(LatestRate, [{
        key: "deserialize",
        value: function deserialize(input) {
          var rates = Object.assign(this, input);
          this.date = new Date(input.date);
          var rateList = [];

          for (var rate in input.rates) {
            if (input.rates.hasOwnProperty(rate)) {
              rateList.push(new _rate_model__WEBPACK_IMPORTED_MODULE_1__["Rate"]().deserialize({
                key: rate,
                value: input.rates[rate]
              }));
            }
          }

          this.rates = rateList;
          return rates;
        }
      }, {
        key: "getCurrencyListOnly",
        value: function getCurrencyListOnly() {
          var currencyList = [];
          var rates = this.rates;

          for (var rate in rates) {
            if (rates.hasOwnProperty(rate)) {
              var rateObj = rates[rate];
              currencyList.push(rateObj.currencyName);
            }
          }

          return currencyList;
        }
      }]);

      return LatestRate;
    }();
    /***/

  },

  /***/
  "./src/app/models/latestrates.table.model.ts":
  /*!***************************************************!*\
    !*** ./src/app/models/latestrates.table.model.ts ***!
    \***************************************************/

  /*! exports provided: LatestRatesTableModel */

  /***/
  function srcAppModelsLatestratesTableModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LatestRatesTableModel", function () {
      return LatestRatesTableModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var LatestRatesTableModel = function LatestRatesTableModel() {
      _classCallCheck(this, LatestRatesTableModel);
    };
    /***/

  },

  /***/
  "./src/app/models/rate.model.ts":
  /*!**************************************!*\
    !*** ./src/app/models/rate.model.ts ***!
    \**************************************/

  /*! exports provided: Rate */

  /***/
  function srcAppModelsRateModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Rate", function () {
      return Rate;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Rate = /*#__PURE__*/function () {
      function Rate() {
        _classCallCheck(this, Rate);
      }

      _createClass(Rate, [{
        key: "deserialize",
        value: function deserialize(input) {
          this.currencyName = input.key;
          this.value = input.value;
          return this;
        }
      }]);

      return Rate;
    }();
    /***/

  },

  /***/
  "./src/app/models/rateList.model.ts":
  /*!******************************************!*\
    !*** ./src/app/models/rateList.model.ts ***!
    \******************************************/

  /*! exports provided: RateList */

  /***/
  function srcAppModelsRateListModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RateList", function () {
      return RateList;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _rate_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./rate.model */
    "./src/app/models/rate.model.ts");

    var RateList = /*#__PURE__*/function () {
      function RateList() {
        _classCallCheck(this, RateList);
      }

      _createClass(RateList, [{
        key: "deserialize",
        value: function deserialize(input) {
          this.date = new Date(input.date);
          var rateList = [];

          for (var rate in input.rates) {
            if (input.rates.hasOwnProperty(rate)) {
              rateList.push(new _rate_model__WEBPACK_IMPORTED_MODULE_1__["Rate"]().deserialize({
                key: rate,
                value: input.rates[rate]
              }));
            }
          }

          this.rates = rateList;
          return this;
        }
      }]);

      return RateList;
    }();
    /***/

  },

  /***/
  "./src/app/models/rates.model.ts":
  /*!***************************************!*\
    !*** ./src/app/models/rates.model.ts ***!
    \***************************************/

  /*! exports provided: Rates */

  /***/
  function srcAppModelsRatesModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Rates", function () {
      return Rates;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _rateList_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./rateList.model */
    "./src/app/models/rateList.model.ts");
    /* harmony import */


    var _latestrates_table_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./latestrates.table.model */
    "./src/app/models/latestrates.table.model.ts");
    /* harmony import */


    var _difference_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./difference.enum */
    "./src/app/models/difference.enum.ts");
    /* harmony import */


    var _top_five_table_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./top.five.table.model */
    "./src/app/models/top.five.table.model.ts");
    /* harmony import */


    var _chart_data_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./chart.data.model */
    "./src/app/models/chart.data.model.ts");

    var Rates = /*#__PURE__*/function () {
      function Rates() {
        _classCallCheck(this, Rates);
      }

      _createClass(Rates, [{
        key: "deserialize",
        value: function deserialize(input) {
          this.startDate = new Date(input.start_at);
          this.endDate = new Date(input.end_at);
          this.base = input.base;
          var rateList = [];

          for (var rate in input.rates) {
            if (input.rates.hasOwnProperty(rate)) {
              rateList.push(new _rateList_model__WEBPACK_IMPORTED_MODULE_1__["RateList"]().deserialize({
                date: rate,
                rates: input.rates[rate]
              }));
            }
          } // sorting the chart model according to dates


          rateList.sort(function (a, b) {
            // return a.name - b.percentage : b.percentage - a.percentage;
            return a.date > b.date ? 1 : -1;
          });
          this.rateList = rateList;
          return this;
        }
      }, {
        key: "getLatestRatesTableModel",
        value: function getLatestRatesTableModel() {
          var model = [];
          var rates = this.rateList[0].rates; // make sure rates are sorted in terms of days are decreasing

          this.rateList.sort(function (a, b) {
            return b.date.getTime() - a.date.getTime();
          });

          for (var rate in rates) {
            if (rates.hasOwnProperty(rate) && rates[rate].currencyName !== this.base // no need show the base currency itself on the table
            ) {
                var rateObject = rates[rate];
                var previousDayValue = this.getSpecificDayCurrency(this.rateList[1].rates, rates[rate].currencyName);
                var row = new _latestrates_table_model__WEBPACK_IMPORTED_MODULE_2__["LatestRatesTableModel"]();
                row.currency = rateObject.currencyName;
                row.spot = rateObject.value;
                row.incDec = rateObject.value > previousDayValue ? _difference_enum__WEBPACK_IMPORTED_MODULE_3__["DifferenceEnum"].Increasing : rateObject.value === previousDayValue ? _difference_enum__WEBPACK_IMPORTED_MODULE_3__["DifferenceEnum"].Same : _difference_enum__WEBPACK_IMPORTED_MODULE_3__["DifferenceEnum"].Decreasing;
                model.push(row);
              }
          }

          return model;
        }
      }, {
        key: "getSpecificDayCurrency",
        value: function getSpecificDayCurrency(rates, currencyName) {
          for (var rate in rates) {
            if (rates.hasOwnProperty(rate) && rates[rate].currencyName === currencyName) {
              return rates[rate].value;
            }
          }

          return 1;
        }
      }, {
        key: "getTopFive",
        value: function getTopFive(trend) {
          // trend true for increase, false for decrease
          var model = []; // make sure rates are sorted in terms of days are decreasing

          this.rateList.sort(function (a, b) {
            return b.date.getTime() - a.date.getTime();
          });
          var rates = this.rateList[0].rates; // getting the last day(assuming today)

          for (var rate in rates) {
            if (rates.hasOwnProperty(rate) && rates[rate].currencyName !== this.base // no need show the base currency itself on the table
            ) {
                var rateObject = rates[rate];
                var previousDayValue = this.getSpecificDayCurrency(this.rateList[1].rates, rates[rate].currencyName);
                var row = new _top_five_table_model__WEBPACK_IMPORTED_MODULE_4__["TopFiveTableModel"]();
                var diff = Math.round(Math.abs(rateObject.value - previousDayValue) * 1000) / 1000;
                row.currency = rateObject.currencyName;
                row.difference = rateObject.value - previousDayValue;
                row.percentage = diff / (rateObject.value > previousDayValue ? previousDayValue : rateObject.value) * 100;
                model.push(row);
              }
          }

          model.sort(function (a, b) {
            return trend ? a.percentage - b.percentage : b.percentage - a.percentage;
          });
          model = model.slice(0, 5);
          return model;
        }
      }, {
        key: "getCurrencyListOnly",
        value: function getCurrencyListOnly() {
          var currencyList = [];
          var rates = this.rateList[0].rates;

          for (var rate in rates) {
            if (rates.hasOwnProperty(rate)) {
              var rateObj = rates[rate];
              currencyList.push(rateObj.currencyName);
            }
          }

          return currencyList;
        }
      }, {
        key: "getDateStringForAPI",
        value: function getDateStringForAPI(date) {
          var mm = date.getMonth() + 1; // getMonth() is zero-based

          var dd = date.getDate();
          return [date.getFullYear(), (mm > 9 ? '' : '0') + mm, (dd > 9 ? '' : '0') + dd].join('-');
        }
      }, {
        key: "getChartDataModel",
        value: function getChartDataModel(currency) {
          var rateListToLoop = this.rateList;
          var chartDataList = [];

          for (var rateDay in rateListToLoop) {
            if (rateListToLoop.hasOwnProperty(rateDay)) {
              var rateDayObj = rateListToLoop[rateDay];
              var dayString = this.getDateStringForAPI(rateDayObj.date);
              var curVal = void 0;

              for (var rate in rateDayObj.rates) {
                if (rateDayObj.rates.hasOwnProperty(rate) && rateDayObj.rates[rate].currencyName === currency) {
                  curVal = rateDayObj.rates[rate].value;
                  break;
                }
              }

              chartDataList.push(new _chart_data_model__WEBPACK_IMPORTED_MODULE_5__["ChartDataModel"]({
                name: dayString,
                value: curVal
              }));
            }
          }

          return chartDataList;
        }
      }]);

      return Rates;
    }();
    /***/

  },

  /***/
  "./src/app/models/top.five.table.model.ts":
  /*!************************************************!*\
    !*** ./src/app/models/top.five.table.model.ts ***!
    \************************************************/

  /*! exports provided: TopFiveTableModel */

  /***/
  function srcAppModelsTopFiveTableModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopFiveTableModel", function () {
      return TopFiveTableModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var TopFiveTableModel = function TopFiveTableModel() {
      _classCallCheck(this, TopFiveTableModel);
    };
    /***/

  },

  /***/
  "./src/app/pipes/currency.value.pipe.ts":
  /*!**********************************************!*\
    !*** ./src/app/pipes/currency.value.pipe.ts ***!
    \**********************************************/

  /*! exports provided: CurrencyValuePipe */

  /***/
  function srcAppPipesCurrencyValuePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrencyValuePipe", function () {
      return CurrencyValuePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CurrencyValuePipe = /*#__PURE__*/function () {
      function CurrencyValuePipe() {
        _classCallCheck(this, CurrencyValuePipe);
      }

      _createClass(CurrencyValuePipe, [{
        key: "transform",
        // pipe to show only 4 decimal parts
        value: function transform(value) {
          return value.toFixed(4);
        }
      }]);

      return CurrencyValuePipe;
    }();

    CurrencyValuePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'currencyValue'
    })], CurrencyValuePipe);
    /***/
  },

  /***/
  "./src/app/services/rates.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/rates.service.ts ***!
    \*******************************************/

  /*! exports provided: RatesService */

  /***/
  function srcAppServicesRatesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RatesService", function () {
      return RatesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _models_rates_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/rates.model */
    "./src/app/models/rates.model.ts");
    /* harmony import */


    var _models_latestrate_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/latestrate.model */
    "./src/app/models/latestrate.model.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _utilities_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../utilities/helper.service */
    "./src/app/utilities/helper.service.ts");

    var RatesService = /*#__PURE__*/function () {
      function RatesService(http, helperService) {
        _classCallCheck(this, RatesService);

        this.http = http;
        this.helperService = helperService;
        this.apiRootUrl = 'https://api.exchangeratesapi.io/';
      }

      _createClass(RatesService, [{
        key: "getLatestRate",
        value: function getLatestRate() {
          return this.http.get(this.apiRootUrl + 'latest').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
            return new _models_latestrate_model__WEBPACK_IMPORTED_MODULE_4__["LatestRate"]().deserialize(data);
          }));
        }
      }, {
        key: "getLatestRateWithBase",
        value: function getLatestRateWithBase(base) {
          var queryParams = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('base', base)
          };
          return this.http.get(this.apiRootUrl + 'latest', queryParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
            return new _models_latestrate_model__WEBPACK_IMPORTED_MODULE_4__["LatestRate"]().deserialize(data);
          }));
        }
      }, {
        key: "getHistoricalRateWithBaseAndTimeInterval",
        value: function getHistoricalRateWithBaseAndTimeInterval(base, startDate, endDate) {
          var queryParams = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('base', base).set('start_at', this.helperService.getDateStringForAPI(startDate)).set('end_at', this.helperService.getDateStringForAPI(endDate))
          };
          return this.http.get(this.apiRootUrl + 'history', queryParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
            return new _models_rates_model__WEBPACK_IMPORTED_MODULE_3__["Rates"]().deserialize(data);
          }));
        }
      }]);

      return RatesService;
    }();

    RatesService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _utilities_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"]
      }];
    };

    RatesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RatesService);
    /***/
  },

  /***/
  "./src/app/utilities/helper.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/utilities/helper.service.ts ***!
    \*********************************************/

  /*! exports provided: HelperService */

  /***/
  function srcAppUtilitiesHelperServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelperService", function () {
      return HelperService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HelperService = /*#__PURE__*/function () {
      function HelperService() {
        _classCallCheck(this, HelperService);
      }

      _createClass(HelperService, [{
        key: "getDateStringForAPI",
        value: function getDateStringForAPI(date) {
          var mm = date.getMonth() + 1; // getMonth() is zero-based

          var dd = date.getDate();
          return [date.getFullYear(), (mm > 9 ? '' : '0') + mm, (dd > 9 ? '' : '0') + dd].join('-');
        }
      }]);

      return HelperService;
    }();

    HelperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], HelperService);
    /***/
  },

  /***/
  "./src/app/views/layout/side-bar/side-bar.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/views/layout/side-bar/side-bar.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsLayoutSideBarSideBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-size: 25px;\n  color: #818181;\n  display: block;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\na:hover {\n  color: #f1f1f1;\n}\n\na.active {\n  color: #f1f1f1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbGF5b3V0L3NpZGUtYmFyL0M6XFxVc2Vyc1xcQnVyYWsgQWthclxcUHJvamVjdHNcXHN0YXh0ZXItdGFzay9zcmNcXGFwcFxcdmlld3NcXGxheW91dFxcc2lkZS1iYXJcXHNpZGUtYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9sYXlvdXQvc2lkZS1iYXIvc2lkZS1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBTlc7RUFPWCxjQUFBO0VBQ0EsaURBQUE7QUNGRjs7QURLQTtFQUNFLGNBYmE7QUNXZjs7QURLQTtFQUNFLGNBakJhO0FDZWYiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9sYXlvdXQvc2lkZS1iYXIvc2lkZS1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItYWN0aXZlOiAjZjFmMWYxO1xyXG4kY29sb3ItZ3JheTogIzgxODE4MTtcclxuXHJcbmEge1xyXG4gIHBhZGRpbmc6IDZweCA4cHggNnB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBjb2xvcjogJGNvbG9yLWdyYXk7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICBjb2xvcjogJGNvbG9yLWFjdGl2ZTtcclxufVxyXG5cclxuYS5hY3RpdmUge1xyXG4gIGNvbG9yOiAkY29sb3ItYWN0aXZlO1xyXG59XHJcblxyXG4iLCJhIHtcbiAgcGFkZGluZzogNnB4IDhweCA2cHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjODE4MTgxO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6ICNmMWYxZjE7XG59XG5cbmEuYWN0aXZlIHtcbiAgY29sb3I6ICNmMWYxZjE7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/views/layout/side-bar/side-bar.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/views/layout/side-bar/side-bar.component.ts ***!
    \*************************************************************/

  /*! exports provided: SideBarComponent */

  /***/
  function srcAppViewsLayoutSideBarSideBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideBarComponent", function () {
      return SideBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var SideBarComponent = /*#__PURE__*/function () {
      function SideBarComponent(fb) {
        _classCallCheck(this, SideBarComponent);

        this.options = fb.group({
          bottom: 0,
          fixed: false,
          top: 0
        });
      }

      _createClass(SideBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SideBarComponent;
    }();

    SideBarComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    SideBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-side-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./side-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/layout/side-bar/side-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./side-bar.component.scss */
      "./src/app/views/layout/side-bar/side-bar.component.scss")).default]
    })], SideBarComponent);
    /***/
  },

  /***/
  "./src/app/views/pages/last-thirty/last-thirty.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/views/pages/last-thirty/last-thirty.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsPagesLastThirtyLastThirtyComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2xhc3QtdGhpcnR5L2xhc3QtdGhpcnR5LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/views/pages/last-thirty/last-thirty.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/views/pages/last-thirty/last-thirty.component.ts ***!
    \******************************************************************/

  /*! exports provided: LastThirtyComponent */

  /***/
  function srcAppViewsPagesLastThirtyLastThirtyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LastThirtyComponent", function () {
      return LastThirtyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_rates_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/rates.service */
    "./src/app/services/rates.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LastThirtyComponent = /*#__PURE__*/function () {
      function LastThirtyComponent(ratesService, route) {
        _classCallCheck(this, LastThirtyComponent);

        this.ratesService = ratesService;
        this.route = route;
        this.referenceCurrency = 'USD';
        this.currentBase = 'TRY'; // options

        this.view = [800, 400];
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Dates';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Currency';
        this.colorScheme = {
          domain: ['#1111A4']
        };
      }

      _createClass(LastThirtyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.params.subscribe(function (event) {
            if (event.cur) {
              _this.currentBase = event.cur;
            }
          });
          this.fromDate = new Date();
          this.fromDate.setDate(new Date().getDate() - 30); // to get the last 30 days

          this.toDate = new Date();
          this.ratesService.getHistoricalRateWithBaseAndTimeInterval(this.referenceCurrency, this.fromDate, this.toDate).subscribe(function (success) {
            _this.baseData = success;
            _this.currencyList = _this.baseData.getCurrencyListOnly();
            _this.dataSource = _this.baseData.getChartDataModel(_this.currentBase);
          });
        }
      }, {
        key: "onBaseCurrencyChange",
        value: function onBaseCurrencyChange() {
          var _this2 = this;

          console.log(this.view);
          this.ratesService.getHistoricalRateWithBaseAndTimeInterval(this.referenceCurrency, this.fromDate, this.toDate).subscribe(function (success) {
            _this2.baseData = success;
            _this2.dataSource = _this2.baseData.getChartDataModel(_this2.currentBase);
          });
        }
      }]);

      return LastThirtyComponent;
    }();

    LastThirtyComponent.ctorParameters = function () {
      return [{
        type: src_app_services_rates_service__WEBPACK_IMPORTED_MODULE_2__["RatesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    LastThirtyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-last-thirty',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./last-thirty.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/last-thirty/last-thirty.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./last-thirty.component.scss */
      "./src/app/views/pages/last-thirty/last-thirty.component.scss")).default]
    })], LastThirtyComponent);
    /***/
  },

  /***/
  "./src/app/views/pages/latest-rates/latest-rates.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/views/pages/latest-rates/latest-rates.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsPagesLatestRatesLatestRatesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ba-color-red {\n  color: red;\n}\n\n.ba-color-green {\n  color: green;\n}\n\n.chart-button {\n  padding: 0.4rem 0.4rem;\n  border-radius: 3rem;\n  margin-right: -0.8rem;\n}\n\n.chart-button:hover {\n  background-color: #e4e4e4;\n  cursor: pointer;\n}\n\n.chart-button:active {\n  background-color: #c5c5c5;\n}\n\n.disable-select {\n  user-select: none;\n  /* supported by Chrome and Opera */\n  -webkit-user-select: none;\n  /* Safari */\n  -khtml-user-select: none;\n  /* Konqueror HTML */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvbGF0ZXN0LXJhdGVzL0M6XFxVc2Vyc1xcQnVyYWsgQWthclxcUHJvamVjdHNcXHN0YXh0ZXItdGFzay9zcmNcXGFwcFxcdmlld3NcXHBhZ2VzXFxsYXRlc3QtcmF0ZXNcXGxhdGVzdC1yYXRlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvcGFnZXMvbGF0ZXN0LXJhdGVzL2xhdGVzdC1yYXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFBbUIsa0NBQUE7RUFDbkIseUJBQUE7RUFBMkIsV0FBQTtFQUMzQix3QkFBQTtFQUEwQixtQkFBQTtFQUMxQixzQkFBQTtFQUF3QixZQUFBO0VBQ3hCLHFCQUFBO0VBQXVCLDJCQUFBO0FDTXpCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvbGF0ZXN0LXJhdGVzL2xhdGVzdC1yYXRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYS1jb2xvci1yZWQge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5iYS1jb2xvci1ncmVlbiB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uY2hhcnQtYnV0dG9uIHtcclxuICBwYWRkaW5nOiAwLjRyZW0gMC40cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMC44cmVtO1xyXG59XHJcblxyXG4uY2hhcnQtYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LCAyMjgsIDIyOCk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2hhcnQtYnV0dG9uOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NywgMTk3LCAxOTcpO1xyXG59XHJcblxyXG4uZGlzYWJsZS1zZWxlY3Qge1xyXG4gIHVzZXItc2VsZWN0OiBub25lOyAvKiBzdXBwb3J0ZWQgYnkgQ2hyb21lIGFuZCBPcGVyYSAqL1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xyXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogS29ucXVlcm9yIEhUTUwgKi9cclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBGaXJlZm94ICovXHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXHJcbn1cclxuIiwiLmJhLWNvbG9yLXJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5iYS1jb2xvci1ncmVlbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmNoYXJ0LWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDAuNHJlbSAwLjRyZW07XG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XG4gIG1hcmdpbi1yaWdodDogLTAuOHJlbTtcbn1cblxuLmNoYXJ0LWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNoYXJ0LWJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzVjNWM1O1xufVxuXG4uZGlzYWJsZS1zZWxlY3Qge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogc3VwcG9ydGVkIGJ5IENocm9tZSBhbmQgT3BlcmEgKi9cbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogU2FmYXJpICovXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogS29ucXVlcm9yIEhUTUwgKi9cbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogRmlyZWZveCAqL1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/views/pages/latest-rates/latest-rates.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/views/pages/latest-rates/latest-rates.component.ts ***!
    \********************************************************************/

  /*! exports provided: LatestRatesComponent */

  /***/
  function srcAppViewsPagesLatestRatesLatestRatesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LatestRatesComponent", function () {
      return LatestRatesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_rates_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/rates.service */
    "./src/app/services/rates.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LatestRatesComponent = /*#__PURE__*/function () {
      function LatestRatesComponent(ratesService, router) {
        _classCallCheck(this, LatestRatesComponent);

        this.ratesService = ratesService;
        this.router = router;
        this.currentBase = 'USD';
        this.displayedColumns = ['currency', 'spot', 'incDec', 'chart'];
      }

      _createClass(LatestRatesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.fromDate = new Date();
          this.fromDate.setDate(new Date().getDate() - 4);
          this.toDate = new Date();
          this.ratesService.getHistoricalRateWithBaseAndTimeInterval(this.currentBase, this.fromDate, this.toDate).subscribe(function (success) {
            _this3.baseData = success;
            _this3.currencyList = _this3.baseData.getCurrencyListOnly();
            _this3.dataSource = _this3.baseData.getLatestRatesTableModel();
          });
        }
      }, {
        key: "onBaseCurrencyChange",
        value: function onBaseCurrencyChange() {
          var _this4 = this;

          this.ratesService.getHistoricalRateWithBaseAndTimeInterval(this.currentBase, this.fromDate, this.toDate).subscribe(function (success) {
            _this4.baseData = success;
            _this4.dataSource = _this4.baseData.getLatestRatesTableModel();
          });
        }
      }, {
        key: "navigateToChart",
        value: function navigateToChart(currency) {
          this.router.navigateByUrl('lastthirty/' + currency);
        }
      }]);

      return LatestRatesComponent;
    }();

    LatestRatesComponent.ctorParameters = function () {
      return [{
        type: src_app_services_rates_service__WEBPACK_IMPORTED_MODULE_2__["RatesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LatestRatesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-latest-rates',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./latest-rates.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/latest-rates/latest-rates.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./latest-rates.component.scss */
      "./src/app/views/pages/latest-rates/latest-rates.component.scss")).default]
    })], LatestRatesComponent);
    /***/
  },

  /***/
  "./src/app/views/pages/top-five/top-five.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/views/pages/top-five/top-five.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsPagesTopFiveTopFiveComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3RvcC1maXZlL3RvcC1maXZlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/views/pages/top-five/top-five.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/views/pages/top-five/top-five.component.ts ***!
    \************************************************************/

  /*! exports provided: TopFiveComponent */

  /***/
  function srcAppViewsPagesTopFiveTopFiveComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopFiveComponent", function () {
      return TopFiveComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_rates_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/rates.service */
    "./src/app/services/rates.service.ts");

    var TopFiveComponent = /*#__PURE__*/function () {
      function TopFiveComponent(ratesService) {
        _classCallCheck(this, TopFiveComponent);

        this.ratesService = ratesService;
        this.currentBase = 'USD';
        this.displayedColumns = ['currency', 'difference', 'percentage'];
      }

      _createClass(TopFiveComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.fromDate = new Date();
          this.fromDate.setDate(new Date().getDate() - 10);
          this.toDate = new Date();
          this.ratesService.getHistoricalRateWithBaseAndTimeInterval(this.currentBase, this.fromDate, this.toDate).subscribe(function (success) {
            _this5.baseData = success;
            _this5.currencyList = _this5.baseData.getCurrencyListOnly();
            _this5.dataSource = _this5.baseData.getTopFive(_this5.trendButtonGroup.value === 'increase');
          });
        }
      }, {
        key: "onChangeTrend",
        value: function onChangeTrend() {
          this.dataSource = this.baseData.getTopFive(this.trendButtonGroup.value === 'increase');
        }
      }, {
        key: "onBaseCurrencyChange",
        value: function onBaseCurrencyChange() {
          var _this6 = this;

          this.ratesService.getHistoricalRateWithBaseAndTimeInterval(this.currentBase, this.fromDate, this.toDate).subscribe(function (success) {
            _this6.baseData = success;
            _this6.dataSource = _this6.baseData.getTopFive(_this6.trendButtonGroup.value === 'increase');
          });
        }
      }]);

      return TopFiveComponent;
    }();

    TopFiveComponent.ctorParameters = function () {
      return [{
        type: src_app_services_rates_service__WEBPACK_IMPORTED_MODULE_2__["RatesService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('group', {
      static: true
    })], TopFiveComponent.prototype, "trendButtonGroup", void 0);
    TopFiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-top-five',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./top-five.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/top-five/top-five.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./top-five.component.scss */
      "./src/app/views/pages/top-five/top-five.component.scss")).default]
    })], TopFiveComponent);
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
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
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
    /*! C:\Users\Burak Akar\Projects\staxter-task\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map