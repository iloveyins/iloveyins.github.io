(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- NG-ZORRO -->\n<!-- <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd\" target=\"_blank\" style=\"display: flex;align-items: center;justify-content: center;height: 100%;width: 100%;\">\n  <img height=\"300\" src=\"https://img.alicdn.com/tfs/TB1NvvIwTtYBeNjy1XdXXXXyVXa-89-131.svg\">\n</a> -->\n\n\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'pwatest';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _home_test_home_test_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home-test/home-test.component */ "./src/app/home-test/home-test.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_8___default.a);
var appRoutes = [
    { path: '', component: _home_test_home_test_component__WEBPACK_IMPORTED_MODULE_11__["HomeTestComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_test_home_test_component__WEBPACK_IMPORTED_MODULE_11__["HomeTestComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production }),
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot(appRoutes, { enableTracing: true }),
            ],
            providers: [{ provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["zh_CN"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home-test/home-test.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-test/home-test.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home{\r\n    background-color: #3e4f5b;\r\n    height: 1000px;\r\n    width: 100%;\r\n    padding:5px;\r\n}\r\n.serach-input{\r\n    background-color: #63808c;\r\n    border: 0;\r\n    color: black;\r\n    border-radius: 0;\r\n}\r\n[nz-carousel-content] {\r\n    text-align: center;\r\n    height: 220px;\r\n    line-height: 220px;\r\n    background: #364d79;\r\n    color: #fff;\r\n    overflow: hidden;\r\n  }\r\n.home-title{\r\n      color: #fff;\r\n      padding: 5px 5px;\r\n  }\r\n.serach-content{\r\n    padding-bottom:5px;\r\n    /* position:fixed; */\r\n    /* z-index: 99; */\r\n }\r\n.img-list-content{\r\n    background-color: #50616b;\r\n    height: 150px;\r\n    color: #fff;\r\n  }\r\n.img-list-content div{\r\n      padding: 5px;\r\n      font-size: 10px;\r\n  }\r\n.img-list-content img{\r\n    width: 100%;\r\n    height: 100px;\r\n  }\r\n.bottom{\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      flex-direction: column;\r\n      padding-bottom: 50px;\r\n      color: #fff;\r\n  }\r\n.bottom-i{\r\n      width: 100%;\r\n      height: 30px;\r\n  }\r\n.bottom p{\r\n      margin-top: 20px;\r\n  }"

/***/ }),

/***/ "./src/app/home-test/home-test.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-test/home-test.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\n  <div nz-row>\n    <div nz-col [nzXs]=\"24\" class=\"serach-content\">\n      <nz-input-group [nzSuffix]=\"suffixTemplate\" nzPrefixIcon=\"anticon anticon-search\">\n        <input type=\"text\" nz-input placeholder=\"Enter your username\"  class=\"serach-input\">\n      </nz-input-group>\n      <ng-template #suffixTemplate><i class=\"anticon anticon-search\" (click)=\"username=null\" *ngIf=\"username\"></i></ng-template>\n    </div>\n  </div>\n  <div nz-row>\n    <nz-carousel nzAutoPlay>\n      <div nz-carousel-content *ngFor=\"let index of array\">\n        <img alt=\"example\" src=\"{{index}}\" />\n      </div>\n    </nz-carousel>\n  </div>\n  <div nz-row class=\"home-title\">\n    Upcconing nagice\n  </div>\n  <div nz-row [nzGutter]=\"6\" style=\"margin-bottom: 30px;\">\n    <div nz-col [nzXs]=\"6\">\n      <div class=\"img-list-content\" routerLink=\"./details-test\">\n        <img alt=\"example\" src=\"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png\" />\n        <div>\n          Europe Street beat\n        </div>\n      </div>\n    </div>\n    <div nz-col [nzXs]=\"6\">\n      <div class=\"img-list-content\">\n        <img alt=\"example\" src=\"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png\" />\n        <div>\n          Shameless\n        </div>\n      </div>\n    </div>\n    <div nz-col [nzXs]=\"6\">\n      <div class=\"img-list-content\" routerLink=\"./details-test\">\n        <img alt=\"example\" src=\"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png\" />\n        <div>\n          NCIS\n        </div>\n      </div>\n    </div>\n    <div nz-col [nzXs]=\"6\">\n      <div class=\"img-list-content\" routerLink=\"./details-test\">\n        <img alt=\"example\" src=\"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png\" />\n        <div>\n          TheNum\n        </div>\n      </div>\n    </div>\n  </div>\n  <div nz-row class=\"home-title\">\n    The Big Bang Theory\n  </div>\n  <div nz-row [nzGutter]=\"6\" style=\"margin-bottom: 30px;\">\n    <div nz-col [nzXs]=\"6\">\n      <div class=\"img-list-content\" routerLink=\"./details-test\">\n        <img alt=\"example\" src=\"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png\" />\n        <div>\n          Europe Sbottom\n        </div>\n      </div>\n    </div>\n    <div nz-col [nzXs]=\"6\">\n      <div class=\"img-list-content\" routerLink=\"./details-test\">\n        <img alt=\"example\" src=\"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png\" />\n        <div>\n          Beat\n        </div>\n      </div>\n    </div>\n    <div nz-col [nzXs]=\"6\">\n      <div class=\"img-list-content\" routerLink=\"./details-test\">\n        <img alt=\"example\" src=\"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png\" />\n        <div>\n          Europe beat\n        </div>\n      </div>\n    </div>\n    <div nz-col [nzXs]=\"6\">\n      <div class=\"img-list-content\" routerLink=\"./details-test\">\n        <img alt=\"example\" src=\"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png\" />\n        <div>\n          Europe Street\n        </div>\n      </div>\n    </div>\n  </div>\n  <div nz-row class=\"home-title\">\n    Popular movies\n  </div>\n  <div nz-row [nzGutter]=\"6\" style=\"margin-bottom: 30px;\">\n    <div nz-col [nzXs]=\"6\" routerLink=\"./details-test\">\n      <div class=\"img-list-content\">\n        <img alt=\"example\" src=\"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png\" />\n        <div>\n          Street beat\n        </div>\n      </div>\n    </div>\n    <div nz-col [nzXs]=\"6\">\n      <div class=\"img-list-content\" routerLink=\"./details-test\">\n        <img alt=\"example\" src=\"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png\" />\n        <div>\n          Europe\n        </div>\n      </div>\n    </div>\n    <div nz-col [nzXs]=\"6\">\n      <div class=\"img-list-content\" routerLink=\"./details-test\">\n        <img alt=\"example\" src=\"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png\" />\n        <div>\n          Street beat\n        </div>\n      </div>\n    </div>\n    <div nz-col [nzXs]=\"6\">\n      <div class=\"img-list-content\" routerLink=\"./details-test\">\n        <img alt=\"example\" src=\"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png\" />\n        <div>\n          Ea beat\n        </div>\n      </div>\n    </div>\n  </div>\n  <div nz-row class=\"bottom\">\n    <i class=\"anticon anticon-twitter\"></i>\n    <p>\n      This stors uess the TMD API bul i not enable\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home-test/home-test.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-test/home-test.component.ts ***!
  \**************************************************/
/*! exports provided: HomeTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTestComponent", function() { return HomeTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeTestComponent = /** @class */ (function () {
    function HomeTestComponent() {
        this.src = "";
        this.array = ["https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
            "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
            "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
            "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"];
        this.marksGutter = {
            8: 8,
            16: 16,
            24: 24,
            32: 32,
            40: 40,
            48: 48
        };
        this.marksCount = {
            2: 2,
            3: 3,
            4: 4,
            6: 6,
            8: 8,
            12: 12
        };
    }
    HomeTestComponent.prototype.ngOnInit = function () {
    };
    HomeTestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-test',
            template: __webpack_require__(/*! ./home-test.component.html */ "./src/app/home-test/home-test.component.html"),
            styles: [__webpack_require__(/*! ./home-test.component.css */ "./src/app/home-test/home-test.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeTestComponent);
    return HomeTestComponent;
}());



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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Y\Desktop\test-ng-zorro\pwatest\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map