import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';

@Injectable()
export class ConstHelperService {

    path: string;
  
    constructor() {
        this.path = "http://" + location.host + "/";
    }

    getHost(){
        return this.path;
    }
} 