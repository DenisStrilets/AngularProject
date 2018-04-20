import { Component,OnInit } from "@angular/core";
import { PostService } from "../../services/postService";
import { PostModel } from "../../models/postModel";
import { Router } from "@angular/router";

 







@Component({
    
     selector: 'allPost',
     templateUrl: "allPost.component.html",
     providers: [PostService]
 })
 export class AllPostComponent implements OnInit {
 
     postModel: PostModel[];
     commentlength:number;
  
     constructor(private postService: PostService, private router: Router) { }
 
     ngOnInit() {
         this.load();      
     }
 
 
     load(){
         this.postService.getAll().subscribe((data: PostModel[]) =>  this.postModel = data);
        
     }
     
 
     dell(id: number) {
         
          this.postService.delete(id).subscribe((data :PostModel[])=> this.load());
         
      }
     
 }