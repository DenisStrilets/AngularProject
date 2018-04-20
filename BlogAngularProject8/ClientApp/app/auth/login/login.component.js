var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { UserService } from "../../services/userService";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CredentialsSendModel } from "../../models/credentialsSendModel";
var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router, activatedRoute) {
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = new FormGroup({
            'username': new FormControl(null, [Validators.required, Validators.email]),
            'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var _a = this.form.value, username = _a.username, password = _a.password;
        var user = new CredentialsSendModel(username, password);
        this.userService.login(user).subscribe(function (result) {
            if (!result.unexist) {
                _this.router.navigateByUrl('/allPost');
                return;
            }
            _this.unexist = true;
            _this.router.navigateByUrl('/login');
        }, function (error) {
            console.log(error);
        });
    };
    LoginComponent = __decorate([
        Component({
            selector: 'login',
            templateUrl: './login.component.html',
            providers: [UserService]
        }),
        __metadata("design:paramtypes", [UserService, Router, ActivatedRoute])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map