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
var User_1 = require("./model/User");
var Help_1 = require("./utils/Help");
var router_1 = require("@angular/router");
require("rxjs/add/operator/filter");
var platform_browser_1 = require("@angular/platform-browser");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/operator/map");
var AppComponent = (function () {
    function AppComponent(router, activatedRoute, titleService) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.UserInfo = new User_1.User();
        this.router.events.subscribe(function (event) {
            //路由开始时候执行的时间
            // if(event instanceof NavigationStart) {
            //
            // }
            if (event instanceof router_1.NavigationEnd) {
                _this.InitMaterialize();
            }
            // NavigationEnd
            //表示取消导航时触发的事件
            // NavigationCancel
            //表示由于意外错误导航失败时触发的事件
            // NavigationError
            //表示当识别路由时触发的事件
            // RoutesRecognized
        });
    }
    //页面初始化成功
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .filter(function (event) { return event instanceof router_1.NavigationStart; })
            .map(function () { return _this.activatedRoute; })
            .map(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        })
            .filter(function (route) { return route.outlet === 'primary'; })
            .mergeMap(function (route) { return route.data; })
            .subscribe(function (event) { return _this.routerInit(event); });
    };
    //路由成功后执行时间
    AppComponent.prototype.routerInit = function (event) {
        this.titleService.setTitle(event['title']);
    };
    AppComponent.prototype.InitMaterialize = function () {
        $('.dropdown-button').dropdown();
        $('.collapsible').collapsible();
        $('select').material_select();
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            providers: [Help_1.Help]
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
            platform_browser_1.Title])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map