import {Component, Input, Output, EventEmitter, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {BtnConfig} from "./btn.config";

/**
 * @Author Onion
 * 基础button,可以动态设置隐藏,可用,路由以及绑定点击事件
 */
@Component({
    selector: 'btn',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <button [ngClass]="clz" [hidden]="hidden" [disabled]="disabled" class="waves-effect btn">
            <ng-content></ng-content>
        </button>
    `,
    styles: [`
        [hidden] {
            display: none;
        }
    `]
})
export class ButtonComponent implements OnInit {
    constructor(private btnConfig: BtnConfig) {
        this.clz = btnConfig.clz;
    }
    private _clz: string;
    private _disabled: boolean;
    private _hidden: boolean;

    get hidden(): boolean {
        return this._hidden;
    }

    @Input()
    set hidden(value: boolean) {
        this._hidden = value;
    }

    get disabled(): boolean {
        return this._disabled;
    }

    @Input()
    set disabled(value: boolean) {
        if (!value) {
            value = null;
        }
        this._disabled = value;
    }

    get clz(): string {
        return this._clz;
    }

    @Input()
    set clz(value: string) {
        if (value.length > 0) {
            let btnClz = this.btnConfig.btnData[value];
            if(value.indexOf('btn-default') > -1){
                btnClz = value + ' ' + this.btnConfig.btnData['btn-default'];
            }
            if(btnClz != undefined){
                value = btnClz;
            }
        } else {
            value = this.btnConfig.clz;
        }
        this._clz = value;
    }

    ngOnInit() {

    }
}

