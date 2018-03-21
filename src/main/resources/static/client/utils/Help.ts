import {Injectable, QueryList} from '@angular/core';
import {Http, Headers} from '@angular/http';
declare const toastr;
@Injectable()
export class Help {

    entityData: any;

    constructor(private http: Http) {

    }

    post(url, data, callback) {
        return this.http.post(url, data)
            .map(res => res.json()).subscribe(
                data => {
                    if (data.success == true) {
                        callback(data);
                    } else {
                        this.error(data.errorMsg);
                    }
                },
                err => console.log(err)
            );
    }

    getRows(url, data, callback) {
        return this.http.post(url, data)
            .map(res => res.json()).subscribe(
                data => {
                    if (data.success == undefined) {
                        callback(data);
                    } else {
                        if (data.success == false) {
                            this.error(data.errorMsg);
                        } else {
                            this.warning('请正确返回分页需要的参数');
                        }
                    }

                },
                err => this.error(err)
            );
    }

    get(url, callback) {
        return this.http.get(url)
            .map(res => res.json()).subscribe(
                data => {
                    if (data.success == true) {
                        callback(data);
                    } else {
                        this.error(data.errorMsg);
                    }
                },
                err => this.error(err)
            );
    }

    clear(data) {
        for (let key in data) {
            data[key] = null;
        }
    }

    info(msg) {
        toastr.info(msg);
    }

    error(msg) {
        toastr.error(msg);
    }

    success(msg) {
        toastr.success(msg);
    }

    warning(msg) {
        toastr.warning(msg);
    }

}