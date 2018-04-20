import { Injectable } from "@angular/core";
import { ConstHelperService } from "./hostHelper.service";
import { PostSendModel } from "../models/postSendModel";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class PostService {
    
        constructor(private constHelper: ConstHelperService, private http: HttpClient) {
    
        }
    
        getAll() {
            return this.http.get(this.constHelper.getHost() + 'api/Post', { responseType: "json" });
        }
    
        get(id: number) {
            return this.http.get(this.constHelper.getHost() + 'api/Post/' + id, { responseType: "json" });
        }
    
    
        delete(id: number) {
             
            return  this.http.delete(this.constHelper.getHost() + 'api/Post/' + id);
        }
    
        post(post: PostSendModel) {
            const body = { Title: post.title, Author: post.author, Description: post.description };
           return this.http.post(this.constHelper.getHost() + 'api/Post', body);
        }
    } 