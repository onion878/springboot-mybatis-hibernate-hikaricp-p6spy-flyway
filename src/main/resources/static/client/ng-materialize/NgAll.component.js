"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var btn_module_1 = require("./button/btn.module");
var btn_module_2 = require("./button/btn.module");
exports.NgButtonModule = btn_module_2.NgButtonModule;
exports.ButtonComponent = btn_module_2.ButtonComponent;
var NGB_MODULES = [
    btn_module_1.NgButtonModule
];
var NgAllRootModule = (function () {
    function NgAllRootModule() {
    }
    NgAllRootModule = __decorate([
        core_1.NgModule({
            imports: [
                btn_module_1.NgButtonModule.forRoot()
            ],
            exports: NGB_MODULES
        })
    ], NgAllRootModule);
    return NgAllRootModule;
}());
exports.NgAllRootModule = NgAllRootModule;
var NgAllModule = (function () {
    function NgAllModule() {
    }
    NgAllModule.forRoot = function () { return { ngModule: NgAllRootModule }; };
    NgAllModule = __decorate([
        core_1.NgModule({ imports: NGB_MODULES, exports: NGB_MODULES })
    ], NgAllModule);
    return NgAllModule;
}());
exports.NgAllModule = NgAllModule;
//# sourceMappingURL=NgAll.component.js.map