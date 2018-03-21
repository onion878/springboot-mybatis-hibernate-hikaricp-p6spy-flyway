import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'paging',
    template: `
    <div class="pageDiv" *ngIf="total > 1">
        <button  (click)="changeOut('-')" [disabled]="total==1" class="pure-button">上一页</button>
        <button (click)="changeOut(1)" *ngIf="lastSize!=null"  class="pure-button">首页</button>
        <button (click)="changeOut(item)" *ngFor="let item of pageSize"  class="pure-button" [ngClass]="item==nowPage?'pure-button-primary':''">{{item}}</button>
        <button (click)="changeOut(lastSize)" *ngIf="lastSize!=null" class="pure-button">尾页</button>
        <button (click)="changeOut('+')" [disabled]="total==1" class="pure-button">下一页</button>
    </div>
    `
})
export class PagingComponent {
    constructor() {

    }

    private lastSize: number;
    private pageSize: any[] = new Array();
    private nowPage: number;
    private _data: Object;
    private total: number;
    // value 属性，以 get 方式拦截
    get data(): any {
        return this._data;
    }

    @Input()
    set data(v: any) {
        if (v == undefined || v == null) {
            return;
        }
        this.lastSize = null;
        this.pageSize.length = 0;
        this.nowPage = v.page;
        let len = Math.ceil(v.total / v.size);
        this.total = len;
        if (len > 7) {
            this.lastSize = len;
            let cen = v.page;
            if (cen - 2 < 1) {
                cen = 2
            }
            if (cen + 2 > len - 1) {
                cen = len - 2;
            }
            for (let i = cen - 2; i < cen + 2; i++) {
                this.pageSize.push(i + 1);
            }
        } else {
            for (let i = 0; i < len; i++) {
                this.pageSize.push(i + 1);
            }
        }
        this._data = v;
    }

    @Output()
    change = new EventEmitter();

    changeOut(val) {
        let vm = this;
        let page = val;
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
    }
}