import { Injectable } from "@angular/core";
import { ConstHelperService } from "./hostHelper.service";
import { CommentSendModel } from "../models/commentSendModel";

import { HttpClient} from '@angular/common/http';


@Injectable()
export class CommentService {
    
        constructor(private constHelper: ConstHelperService, private http: HttpClient) {
        }
    
      
        addComment(comment: CommentSendModel) {
    
           return this.http.post(this.constHelper.getHost() + 'api/Comment', comment);
        }
    
        delete(id: number) {
    
    
         return  this.http.delete(this.constHelper.getHost() + 'api/Comment/' + id);
        }
    } 