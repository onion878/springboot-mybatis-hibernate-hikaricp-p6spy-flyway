import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {User} from  '../../model/User';
declare const $;

@Component({
    moduleId: module.id,
    selector: 'index',
    templateUrl: 'index.html'
})
export class IndexComponent{
    Users = new User();
    btnClass: string = 'btn-warning';
    hid: boolean;
    disab: boolean;
    col: any[] = [
        {field: 'id', title: '编号'},
        {field: 'name', title: '名称'},
        {field: 'price', title: '价格'}
    ];
    data: any[];
    data1: any[];
    constructor(private _router: Router) {

    }

    ngOnInit(): void {

    }

    save(){
        this.hid = !this.hid;
        this.disab = !this.disab;
        this.btnClass = this.btnClass == 'btn-danger'? 'btn-warning': 'btn-danger';
        console.log('btn click!');
    }

    hidBtn(){
        this.hid = true;
        console.log('hide click!');
    }

    addData(){
        this.data = [
            {id: Math.random(), name: 'John', price: '$22.4'},
            {id: Math.random(), name: 'Gali', price: '$23.4'},
            {id: Math.random(), name: 'Onion', price: '$13.4'},
            {id: Math.random(), name: 'Apple', price: '$1200'}
        ];
    }

    addData1(){
        this.data1 = [
            {id: Math.random(), name: 'John', price: '$22.4'},
            {id: Math.random(), name: 'Gali', price: '$23.4'},
            {id: Math.random(), name: 'Oniojjkn', price: '$13.4'},
            {id: Math.random(), name: 'Apple', price: '$1200'}
        ];
    }

    showDrop() {
        $('#drop').dropdown('open');
    }
}