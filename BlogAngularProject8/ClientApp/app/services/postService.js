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
var PostService = /** @class */ (function () {
    function PostService(constHelper, http) {
        this.constHelper = constHelper;
        this.http = http;
    }
    PostService.prototype.getAll = function () {
        return this.http.get(this.constHelper.getHost() + 'api/Post', { responseType: "json" });
    };
    PostService.prototype.get = function (id) {
        return this.http.get(this.constHelper.getHost() + 'api/Post/' + id, { responseType: "json" });
    };
    PostService.prototype.delete = function (id) {
        return this.http.delete(this.constHelper.getHost() + 'api/Post/' + id);
    };
    PostService.prototype.post = function (post) {
        var body = { Title: post.title, Author: post.author, Description: post.description };
        return this.http.post(this.constHelper.getHost() + 'api/Post', body);
    };
    PostService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [ConstHelperService, HttpClient])
    ], PostService);
    return PostService;
}());
export { PostService };
//# sourceMappingURL=postService.js.map