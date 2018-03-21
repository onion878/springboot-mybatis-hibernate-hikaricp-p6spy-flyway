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
var http_1 = require("@angular/http");
var Help = (function () {
    function Help(http) {
        this.http = http;
    }
    Help.prototype.post = function (url, data, callback) {
        var _this = this;
        return this.http.post(url, data)
            .map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.success == true) {
                callback(data);
            }
            else {
                _this.error(data.errorMsg);
            }
        }, function (err) { return console.log(err); });
    };
    Help.prototype.getRows = function (url, data, callback) {
        var _this = this;
        return this.http.post(url, data)
            .map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.success == undefined) {
                callback(data);
            }
            else {
                if (data.success == false) {
                    _this.error(data.errorMsg);
                }
                else {
                    _this.warning('请正确返回分页需要的参数');
                }
            }
        }, function (err) { return _this.error(err); });
    };
    Help.prototype.get = function (url, callback) {
        var _this = this;
        return this.http.get(url)
            .map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.success == true) {
                callback(data);
            }
            else {
                _this.error(data.errorMsg);
            }
        }, function (err) { return _this.error(err); });
    };
    Help.prototype.clear = function (data) {
        for (var key in data) {
            data[key] = null;
        }
    };
    Help.prototype.info = function (msg) {
        toastr.info(msg);
    };
    Help.prototype.error = function (msg) {
        toastr.error(msg);
    };
    Help.prototype.success = function (msg) {
        toastr.success(msg);
    };
    Help.prototype.warning = function (msg) {
        toastr.warning(msg);
    };
    Help = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], Help);
    return Help;
}());
exports.Help = Help;
//# sourceMappingURL=Help.js.map