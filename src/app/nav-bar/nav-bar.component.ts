import { Component } from '@angular/core';
import { AuthService } from 'src/core/services/auth.service';
import { CartService } from 'src/core/services/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  isLogedIn:boolean=false
  numOfCartItems:number=0

  constructor(private _autService:AuthService,_cartService:CartService){
    _autService.userData.subscribe((res)=>{
      if(_autService.userData.getValue()){
        this.isLogedIn=true
      }else{
        this.isLogedIn=false
      }
    })

    _cartService.numOfCartItems.subscribe((res)=>{
      this.numOfCartItems=res
    })

  }
  logOut(){
    this._autService.logOut()
  }

  
 

}
