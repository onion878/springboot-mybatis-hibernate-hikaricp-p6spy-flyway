/**
 * Created by Onion on 2017/6/18.
 */
import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'detail',
    templateUrl: 'detail.html'
})
export class DetailComponent {


    constructor(private _router: Router) {
        console.log(module);
    }

    ngOnInit(): void {

    }
}