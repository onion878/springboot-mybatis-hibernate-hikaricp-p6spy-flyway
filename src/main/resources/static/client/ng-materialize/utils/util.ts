
import {Injectable} from "@angular/core";

@Injectable()
export class Utils{

    random(randomFlag, min, max){
        let str = '',
            pos,
            range = min,
            arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        // 随机产生
        if(randomFlag){
            range = Math.round(Math.random() * (max-min)) + min;
        }
        for(var i=0; i<range; i++){
            pos = Math.round(Math.random() * (arr.length-1));
            str += arr[pos];
        }
        return str;
    }

    isEmpty(val): Boolean {
        if (val != undefined && val != null && (val+'').trim() != '')
            return false;
        else
            return true;
    }
}