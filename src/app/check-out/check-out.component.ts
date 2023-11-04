import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/core/services/cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent {

  shippingAddress:FormGroup=new FormGroup({
    details:new FormControl(),
    phone:new FormControl(),
    city:new FormControl()
  })

  constructor(private _cartService:CartService,private _activatedRoute:ActivatedRoute){
    _activatedRoute.paramMap.subscribe((res:any)=>{
      this.cartId=res.params.cartId
    })
  }
  cartId:string=''

  handleOnline(){
    this._cartService.generateOnlinePayment(this.cartId,this.shippingAddress.value).subscribe({
      next:(res)=>{
        if(res.status=="success"){
          console.log(res.session.url);
          window.location.href=res.session.url;

        }
        
          
          
       
        
      }
    })
    
  }

}
