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
var router_1 = require("@angular/router");
var User_1 = require("../../model/User");
var IndexComponent = (function () {
    function IndexComponent(_router) {
        this._router = _router;
        this.Users = new User_1.User();
        this.btnClass = 'btn-warning';
        this.col = [
            { field: 'id', title: '编号' },
            { field: 'name', title: '名称' },
            { field: 'price', title: '价格' }
        ];
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent.prototype.save = function () {
        this.hid = !this.hid;
        this.disab = !this.disab;
        this.btnClass = this.btnClass == 'btn-danger' ? 'btn-warning' : 'btn-danger';
        console.log('btn click!');
    };
    IndexComponent.prototype.hidBtn = function () {
        this.hid = true;
        console.log('hide click!');
    };
    IndexComponent.prototype.addData = function () {
        this.data = [
            { id: Math.random(), name: 'John', price: '$22.4' },
            { id: Math.random(), name: 'Gali', price: '$23.4' },
            { id: Math.random(), name: 'Onion', price: '$13.4' },
            { id: Math.random(), name: 'Apple', price: '$1200' }
        ];
    };
    IndexComponent.prototype.addData1 = function () {
        this.data1 = [
            { id: Math.random(), name: 'John', price: '$22.4' },
            { id: Math.random(), name: 'Gali', price: '$23.4' },
            { id: Math.random(), name: 'Oniojjkn', price: '$13.4' },
            { id: Math.random(), name: 'Apple', price: '$1200' }
        ];
    };
    IndexComponent.prototype.showDrop = function () {
        $('#drop').dropdown('open');
    };
    IndexComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'index',
            templateUrl: 'index.html'
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], IndexComponent);
    return IndexComponent;
}());
exports.IndexComponent = IndexComponent;
//# sourceMappingURL=index.js.map