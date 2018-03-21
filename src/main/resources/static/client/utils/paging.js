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
var PagingComponent = (function () {
    function PagingComponent() {
        this.pageSize = new Array();
        this.change = new core_1.EventEmitter();
    }
    Object.defineProperty(PagingComponent.prototype, "data", {
        // value 属性，以 get 方式拦截
        get: function () {
            return this._data;
        },
        set: function (v) {
            if (v == undefined || v == null) {
                return;
            }
            this.lastSize = null;
            this.pageSize.length = 0;
            this.nowPage = v.page;
            var len = Math.ceil(v.total / v.size);
            this.total = len;
            if (len > 7) {
                this.lastSize = len;
                var cen = v.page;
                if (cen - 2 < 1) {
                    cen = 2;
                }
                if (cen + 2 > len - 1) {
                    cen = len - 2;
                }
                for (var i = cen - 2; i < cen + 2; i++) {
                    this.pageSize.push(i + 1);
                }
            }
            else {
                for (var i = 0; i < len; i++) {
                    this.pageSize.push(i + 1);
                }
            }
            this._data = v;
        },
        enumerable: true,
        configurable: true
    });
    PagingComponent.prototype.changeOut = function (val) {
        var vm = this;
        var page = val;
        if (val == '+') {
            page = vm.nowPage + 1;
            if (page > vm.total) {
                page = 1;
            }
        }
        if (val == '-') {
            page = vm.nowPage - 1;
            if (page < 1) {
                page = vm.total;
            }
        }
        vm.change.emit(page);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PagingComponent.prototype, "data", null);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PagingComponent.prototype, "change", void 0);
    PagingComponent = __decorate([
        core_1.Component({
            selector: 'paging',
            template: "\n    <div class=\"pageDiv\" *ngIf=\"total > 1\">\n        <button  (click)=\"changeOut('-')\" [disabled]=\"total==1\" class=\"pure-button\">\u4E0A\u4E00\u9875</button>\n        <button (click)=\"changeOut(1)\" *ngIf=\"lastSize!=null\"  class=\"pure-button\">\u9996\u9875</button>\n        <button (click)=\"changeOut(item)\" *ngFor=\"let item of pageSize\"  class=\"pure-button\" [ngClass]=\"item==nowPage?'pure-button-primary':''\">{{item}}</button>\n        <button (click)=\"changeOut(lastSize)\" *ngIf=\"lastSize!=null\" class=\"pure-button\">\u5C3E\u9875</button>\n        <button (click)=\"changeOut('+')\" [disabled]=\"total==1\" class=\"pure-button\">\u4E0B\u4E00\u9875</button>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [])
    ], PagingComponent);
    return PagingComponent;
}());
exports.PagingComponent = PagingComponent;
//# sourceMappingURL=paging.js.map