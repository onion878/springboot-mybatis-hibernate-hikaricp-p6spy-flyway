"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var btn_component_1 = require("./btn.component");
var btn_config_1 = require("./btn.config");
var btn_component_2 = require("./btn.component");
exports.ButtonComponent = btn_component_2.ButtonComponent;
var btn_config_2 = require("./btn.config");
exports.BtnConfig = btn_config_2.BtnConfig;
var NgButtonModule = (function () {
    function NgButtonModule() {
    }
    NgButtonModule_1 = NgButtonModule;
    NgButtonModule.forRoot = function () { return { ngModule: NgButtonModule_1, providers: [btn_config_1.BtnConfig] }; };
    NgButtonModule = NgButtonModule_1 = __decorate([
        core_1.NgModule({ declarations: [btn_component_1.ButtonComponent], exports: [btn_component_1.ButtonComponent], imports: [common_1.CommonModule], entryComponents: [btn_component_1.ButtonComponent] })
    ], NgButtonModule);
    return NgButtonModule;
    var NgButtonModule_1;
}());
exports.NgButtonModule = NgButtonModule;
//# sourceMappingURL=btn.module.js.map