var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { ConstHelperService } from "./hostHelper.service";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs/Rx';
var UserService = /** @class */ (function () {
    function UserService(constHelper, http) {
        this.constHelper = constHelper;
        this.http = http;
        this._authNavStatusSource = new BehaviorSubject(false);
        this.authNavStatus$ = this._authNavStatusSource.asObservable();
        this.loggedIn = false;
        this.loggedIn = !!localStorage.getItem('auth_token');
        this._authNavStatusSource.next(this.loggedIn);
    }
    UserService.prototype.addUser = function (user) {
        var body = { Email: user.email, Name: user.name, Location: user.location, Password: user.password };
        return this.http.post(this.constHelper.getHost() + 'api/Accounts', body);
    };
    UserService.prototype.login = function (user) {
        var body = { UserName: user.username, Password: user.password };
        return this.http.post(this.constHelper.getHost() + 'api/Auth/login', body);
    };
    UserService.prototype.logout = function () {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
        this._authNavStatusSource.next(false);
    };
    UserService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    UserService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [ConstHelperService, HttpClient])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=userService.js.map