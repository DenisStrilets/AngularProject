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
import { CommentService } from "../../services/commentService";
import { PostModel } from "../../models/postModel";
import { ActivatedRoute, Router } from "@angular/router";
import { CommentSendModel } from "../../models/commentSendModel";
var PostComponent = /** @class */ (function () {
    function PostComponent(activateRoute, postService, commentService, router) {
        this.activateRoute = activateRoute;
        this.postService = postService;
        this.commentService = commentService;
        this.router = router;
        this.postModel = new PostModel();
        this.comments = new Array();
        this.postId = Number.parseInt(activateRoute.snapshot.params['postId']);
    }
    PostComponent.prototype.ngOnInit = function () {
        this.load();
        console.log(this.postModel.comment);
    };
    PostComponent.prototype.load = function () {
        var _this = this;
        this.postService.get(this.postId).subscribe(function (data) {
            _this.postModel = data;
            _this.comments = _this.postModel.comment;
            _this.commentlength = _this.postModel.comment.length;
        });
    };
    PostComponent.prototype.addComment = function () {
        var _this = this;
        var coment = new CommentSendModel(this.author, this.commentText, this.postModel.postId);
        this.commentService.addComment(coment).subscribe(function (data) { return _this.load(); });
        this.author = null;
        this.commentText = null;
    };
    PostComponent.prototype.delete = function (id) {
        var _this = this;
        this.commentService.delete(id).subscribe(function (data) { return _this.load(); });
    };
    PostComponent = __decorate([
        Component({
            selector: 'post',
            templateUrl: "post.component.html",
            providers: [PostService, CommentService]
        }),
        __metadata("design:paramtypes", [ActivatedRoute, PostService, CommentService, Router])
    ], PostComponent);
    return PostComponent;
}());
export { PostComponent };
//# sourceMappingURL=post.component.js.map