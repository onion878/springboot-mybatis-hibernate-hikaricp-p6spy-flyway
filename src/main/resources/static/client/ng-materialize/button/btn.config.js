"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BtnConfig = (function () {
    function BtnConfig() {
        this.clz = 'waves-yellow white black-text';
        this.btnData = {
            "btn-info": 'waves-teal cyan accent-3 black-text',
            "btn-success": 'waves-orange green darken-1',
            "btn-warning": 'waves-light amber accent-3 black-text',
            "btn-danger": 'orange darken-4',
            "btn-primary": 'waves-purple light-blue darken-4',
            "btn-default": 'waves-yellow white black-text'
        };
    }
    BtnConfig = __decorate([
        core_1.Injectable()
    ], BtnConfig);
    return BtnConfig;
}());
exports.BtnConfig = BtnConfig;
//# sourceMappingURL=btn.config.js.map