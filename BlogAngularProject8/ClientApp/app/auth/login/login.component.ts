import { OnInit, OnDestroy, Component } from "@angular/core"; 
import { UserService } from "../../services/userService";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CredentialsSendModel } from "../../models/credentialsSendModel";






@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    providers: [UserService]
  })



export class LoginComponent implements OnInit {
    
     
      form: FormGroup;
      unexist:boolean;

      constructor(private userService: UserService, private router: Router,private activatedRoute: ActivatedRoute) { }
    
         
        ngOnInit() {
            this.form = new FormGroup({
              'username': new FormControl(null, [Validators.required, Validators.email]),
              'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
            });
          }
    
          onSubmit() {
            const {username, password } = this.form.value;
            const user = new CredentialsSendModel(username, password);
            this.userService.login(user).subscribe((result:CredentialsSendModel) => {

                if (!result.unexist) {
                     
                  this.router.navigateByUrl('/allPost');
                  return;
                }  
                this.unexist=true;
                this.router.navigateByUrl('/login');
            }, error => {
                console.log(error);
              }
            );

            
        
          
        
        
        }     
          }
    
        
      
    