"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var btn_config_1 = require("./btn.config");
/**
 * @Author Onion
 * 基础button,可以动态设置隐藏,可用,路由以及绑定点击事件
 */
var ButtonComponent = (function () {
    function ButtonComponent(btnConfig) {
        this.btnConfig = btnConfig;
        this.clz = btnConfig.clz;
    }
    Object.defineProperty(ButtonComponent.prototype, "hidden", {
        get: function () {
            return this._hidden;
        },
        set: function (value) {
            this._hidden = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            if (!value) {
                value = null;
            }
            this._disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonComponent.prototype, "clz", {
        get: function () {
            return this._clz;
        },
        set: function (value) {
            if (value.length > 0) {
                var btnClz = this.btnConfig.btnData[value];
                if (value.indexOf('btn-default') > -1) {
                    btnClz = value + ' ' + this.btnConfig.btnData['btn-default'];
                }
                if (btnClz != undefined) {
                    value = btnClz;
                }
            }
            else {
                value = this.btnConfig.clz;
            }
            this._clz = value;
        },
        enumerable: true,
        configurable: true
    });
    ButtonComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ButtonComponent.prototype, "hidden", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ButtonComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ButtonComponent.prototype, "clz", null);
    ButtonComponent = __decorate([
        core_1.Component({
            selector: 'btn',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            template: "\n        <button [ngClass]=\"clz\" [hidden]=\"hidden\" [disabled]=\"disabled\" class=\"waves-effect btn\">\n            <ng-content></ng-content>\n        </button>\n    ",
            styles: ["\n        [hidden] {\n            display: none;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [btn_config_1.BtnConfig])
    ], ButtonComponent);
    return ButtonComponent;
}());
exports.ButtonComponent = ButtonComponent;
//# sourceMappingURL=btn.component.js.map