import {Injectable} from '@angular/core';

@Injectable()
export class BtnConfig {
    clz = 'waves-yellow white black-text';
    btnData = {
        "btn-info": 'waves-teal cyan accent-3 black-text',
        "btn-success": 'waves-orange green darken-1',
        "btn-warning": 'waves-light amber accent-3 black-text',
        "btn-danger": 'orange darken-4',
        "btn-primary": 'waves-purple light-blue darken-4',
        "btn-default": 'waves-yellow white black-text'
    };
}
