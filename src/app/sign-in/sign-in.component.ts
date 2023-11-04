import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  isLoading:boolean=false
  apiError:string=''
  apiError2:string=''
  isNotValid:boolean=false

  constructor(private _authService:AuthService,private _router:Router){

  }


  loginForm:FormGroup=new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
   
  })


  login(form:FormGroup){
    
  
    if(form.valid){
      this.isLoading=true
      this._authService.login(form.value).subscribe({
        next:(res:any)=>{
          console.log(res);
          this.isLoading=false
          localStorage.setItem('userToken',res.token)
          this._authService.getUserData()
          this._router.navigate(['/home'])
          
        },
         
        
        error:(err)=>{
          console.log(err);
          this.isLoading=false
          this.apiError=err.error.message;
          this.apiError2=err.error.errors.msg
          
          
        },

        
        
        
      })
    }else{
      this.isNotValid=true
    }
    
  }

}
