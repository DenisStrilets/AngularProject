import { Injectable } from "@angular/core";
import { ConstHelperService } from "./hostHelper.service";
import { HttpClient } from "@angular/common/http";
import {  UserSendModel } from "../models/userSendModel";

import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx';
import { CredentialsSendModel } from "../models/credentialsSendModel";



@Injectable()
export class UserService {
    


    private _authNavStatusSource = new BehaviorSubject<boolean>(false);

    authNavStatus$ = this._authNavStatusSource.asObservable();

    private loggedIn = false;

        constructor(private constHelper: ConstHelperService, private http: HttpClient) {
            this.loggedIn = !!localStorage.getItem('auth_token');
            this._authNavStatusSource.next(this.loggedIn);
        }
    


            addUser(user : UserSendModel) {
                const body = { Email: user.email, Name: user.name, Location: user.location,Password:user.password };
                       return this.http.post(this.constHelper.getHost() + 'api/Accounts', body)
                                    
                     }


               
             login(user:CredentialsSendModel){
                 const body ={UserName:user.username,Password:user.password };
                 return this.http.post(this.constHelper.getHost() + 'api/Auth/login', body)
             }        


             logout() {
                localStorage.removeItem('auth_token');
                 this.loggedIn = false;
                 this._authNavStatusSource.next(false);
                    }
                    
            isLoggedIn() {
                 return this.loggedIn;
                      }  

                }