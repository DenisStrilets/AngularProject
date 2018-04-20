var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../../services/userService";
import { UserSendModel } from "../../models/userSendModel";
var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(usersService, router) {
        this.usersService = usersService;
        this.router = router;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.form = new FormGroup({
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
            'name': new FormControl(null, [Validators.required]),
            'location': new FormControl(null, [Validators.required]),
            'agree': new FormControl(false, [Validators.requiredTrue])
        });
    };
    RegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        var _a = this.form.value, email = _a.email, password = _a.password, name = _a.name, location = _a.location;
        var user = new UserSendModel(email, password, name, location);
        this.usersService.addUser(user).subscribe(function (result) {
            console.log(result);
            if (!result.exist) {
                _this.router.navigateByUrl('/login');
                return;
            }
            _this.exist = true;
            _this.router.navigateByUrl('/registration');
        }, function (error) {
            console.log(error);
        });
    };
    RegistrationComponent = __decorate([
        Component({
            selector: 'registration',
            templateUrl: './registration.component.html',
            providers: [UserService]
        }),
        __metadata("design:paramtypes", [UserService, Router])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
export { RegistrationComponent };
//# sourceMappingURL=registration.component.js.map