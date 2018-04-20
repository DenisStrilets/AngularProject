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
import { PostService } from "../../services/postService";
import { Router } from "@angular/router";
import { PostSendModel } from "../../models/postSendModel";
var NewPostComponent = /** @class */ (function () {
    function NewPostComponent(postService, router) {
        this.postService = postService;
        this.router = router;
    }
    NewPostComponent.prototype.load = function () {
        var _this = this;
        this.postService.getAll().subscribe(function (data) { return _this.postModel = data; });
    };
    NewPostComponent.prototype.create = function (form) {
        var _this = this;
        var post = new PostSendModel(this.Title, this.Description, this.Author);
        this.postService.post(post).subscribe(function (data) { return _this.router.navigateByUrl("/"); });
    };
    NewPostComponent = __decorate([
        Component({
            selector: 'newPost',
            templateUrl: "newPost.component.html",
            styles: ['.countries { width: 300px; }']
        }),
        __metadata("design:paramtypes", [PostService, Router])
    ], NewPostComponent);
    return NewPostComponent;
}());
export { NewPostComponent };
//# sourceMappingURL=newPost.component.js.map