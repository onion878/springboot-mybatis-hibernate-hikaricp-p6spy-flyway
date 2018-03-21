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
var util_1 = require("../utils/util");
var DataGridComponent = (function () {
    function DataGridComponent(_element, util) {
        this._element = _element;
        this.util = util;
    }
    DataGridComponent.prototype.ngAfterViewInit = function () {
        this.LoadData(this.data);
    };
    DataGridComponent.prototype.LoadData = function (data) {
        var _this = this;
        if (this.util.isEmpty(data)) {
            return;
        }
        if (data.length < 1) {
            return;
        }
        var columns = this.columns;
        var trHtml = '';
        $(this.tb.nativeElement).html(null);
        data.forEach(function (d) {
            trHtml = '<tr class="animated slideInLeft">';
            columns.forEach(function (h) {
                if (h.hidden) {
                }
                else {
                    trHtml = trHtml + ("\n                   <td>" + d[h.field] + "</td> \n                   ");
                }
            });
            trHtml = trHtml + '</tr>';
            $(_this.tb.nativeElement).append(trHtml);
        });
    };
    DataGridComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(DataGridComponent.prototype, "clz", {
        get: function () {
            return this._clz;
        },
        set: function (value) {
            this._clz = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataGridComponent.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            if (this.columns != undefined) {
                this.LoadData(value);
            }
            this._data = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataGridComponent.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        set: function (value) {
            this._columns = value;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.ViewChild('tbody'),
        __metadata("design:type", core_1.ElementRef)
    ], DataGridComponent.prototype, "tb", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DataGridComponent.prototype, "clz", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], DataGridComponent.prototype, "data", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], DataGridComponent.prototype, "columns", null);
    DataGridComponent = __decorate([
        core_1.Component({
            selector: 'data-grid',
            template: "\n        <ng-content></ng-content>\n        <table [ngClass]=\"clz\" class=\"bordered highlight centered\">\n            <thead>\n            <tr>\n                <th *ngFor=\"let item of columns\">{{item.title}}</th>\n            </tr>\n            </thead>\n            <tbody #tbody>\n            </tbody>\n        </table>\n        <ng-content select=\"btn\"></ng-content>\n        <ng-content select=\"div.info\"></ng-content>\n    ",
            providers: [util_1.Utils]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, util_1.Utils])
    ], DataGridComponent);
    return DataGridComponent;
}());
exports.DataGridComponent = DataGridComponent;
//# sourceMappingURL=table.component.js.map