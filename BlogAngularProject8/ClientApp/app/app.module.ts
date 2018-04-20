



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { AllPostComponent } from './post/allPosts/allPost.component';
import { PostComponent } from './post/post-detail/post.component';
import { NewPostComponent } from './post/newPost/newPost.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/postService';
import { CommentService } from './services/commentService';
import { ConstHelperService } from './services/hostHelper.service';
import { APP_BASE_HREF } from '@angular/common';
import { RegistrationComponent } from './auth/registration/registration.component';
import { UserService } from './services/userService';
import { LoginComponent } from './auth/login/login.component';





const appRoutes: Routes = [
    { path: '', component: AllPostComponent },
    { path: 'allPost', component: AllPostComponent },
    { path: "allPost/post/:postId", component: PostComponent },
    { path: 'post/:postId', component: PostComponent },
    { path: "newPost", component: NewPostComponent},
    { path: "registration", component: RegistrationComponent},
    { path: "login", component: LoginComponent}

];





@NgModule({
  imports: [ BrowserModule, FormsModule,HttpClientModule,ReactiveFormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [AppComponent,AllPostComponent,PostComponent,NewPostComponent,RegistrationComponent,LoginComponent],
  
  providers: [
      CommentService,
      PostService,
      ConstHelperService ,
      UserService,
    {provide: APP_BASE_HREF, useValue : '/' }
  ],

  bootstrap: [AppComponent]
  
})
export class AppModule { }