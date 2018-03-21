import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnInit,
    ElementRef,
    ViewChild
} from '@angular/core';
import {Utils} from "../utils/util";

declare const $;

@Component({
    selector: 'data-grid',
    template: `
        <ng-content></ng-content>
        <table [ngClass]="clz" class="bordered highlight centered">
            <thead>
            <tr>
                <th *ngFor="let item of columns">{{item.title}}</th>
            </tr>
            </thead>
            <tbody #tbody>
            </tbody>
        </table>
        <ng-content select="btn"></ng-content>
        <ng-content select="div.info"></ng-content>
    `,
    providers: [Utils]
})
export class DataGridComponent implements OnInit {
    @ViewChild('tbody')
    tb: ElementRef;

    constructor(private _element: ElementRef, private util: Utils) {

    }

    ngAfterViewInit() {
        this.LoadData(this.data);
    }

    LoadData(data){
        if(this.util.isEmpty(data)){
            return ;
        }
        if(data.length < 1){
            return ;
        }
        let columns = this.columns;
        let trHtml = '';
        $(this.tb.nativeElement).html(null);
        data.forEach(d=>{
            trHtml = '<tr class="animated slideInLeft">';
            columns.forEach(h => {
                if(h.hidden){

                } else {
                    trHtml = trHtml + `
                   <td>${d[h.field]}</td> 
                   `;
                }
            });
            trHtml = trHtml + '</tr>';
            $(this.tb.nativeElement).append(trHtml);
        });
    }

    private _clz: string;
    private _data: any[];
    private _columns: any[];

    ngOnInit(): void {
    }

    get clz(): string {
        return this._clz;
    }

    @Input()
    set clz(value: string) {
        this._clz = value;
    }


    get data(): any[] {
        return this._data;
    }

    @Input()
    set data(value: any[]) {
        if(this.columns != undefined){
            this.LoadData(value);
        }
        this._data = value;
    }

    get columns(): any[] {
        return this._columns;
    }

    @Input()
    set columns(value: any[]) {
        this._columns = value;
    }
}