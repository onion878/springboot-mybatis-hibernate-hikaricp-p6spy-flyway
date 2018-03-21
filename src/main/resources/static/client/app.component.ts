import {Component, OnInit} from '@angular/core';
import {User} from './model/User';
import {Help} from "./utils/Help";
import {ActivatedRoute, NavigationEnd, NavigationStart, Router} from "@angular/router";
import "rxjs/add/operator/filter";
import {Title} from "@angular/platform-browser";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/map";
declare let $;

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [Help]
})
export class AppComponent implements OnInit {
    UserInfo = new User();
    scroll: any;
    constructor(private router: Router, private activatedRoute: ActivatedRoute,
                private titleService: Title) {
        this.router.events.subscribe(event => {
            //路由开始时候执行的时间
            // if(event instanceof NavigationStart) {
            //
            // }
            if(event instanceof NavigationEnd) {
                this.InitMaterialize();
            }
            // NavigationEnd
            //表示取消导航时触发的事件
            // NavigationCancel
            //表示由于意外错误导航失败时触发的事件
            // NavigationError
            //表示当识别路由时触发的事件
            // RoutesRecognized
        })
    }

    //页面初始化成功
    ngOnInit() {
        this.router.events
            .filter(event => event instanceof NavigationStart)
            .map(() => this.activatedRoute)
            .map(route => {
                while (route.firstChild) route = route.firstChild;
                return route;
            })
            .filter(route => route.outlet === 'primary')
            .mergeMap(route => route.data)
            .subscribe((event) => this.routerInit(event));
    }

    //路由成功后执行时间
    routerInit(event) {
        this.titleService.setTitle(event['title']);
    }

    InitMaterialize(){
        $('.dropdown-button').dropdown();
        $('.collapsible').collapsible();
        $('select').material_select();
    }
}
