import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { SignInComponent } from 'src/app/sign-in/sign-in.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData:BehaviorSubject<any>=new BehaviorSubject('')

  constructor(private _httpClient:HttpClient,private _router:Router) {
    if(localStorage.getItem('userToken')){
      this.getUserData()

    }
    
   }

   getUserData(){
    let encodedToken=JSON.stringify(localStorage.getItem('userToken'))
    let decoded=jwtDecode(encodedToken)
    this.userData.next(decoded)
   }
  
  

  register(data:any):Observable<any>{
    return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',data)
  }

  login(data:any):Observable<any>{
    return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',data)
  }

  logOut(){
    localStorage.removeItem('userToken')
    this.userData.next(null)
    this._router.navigate(['/login'])

  }
}
