import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/core/services/cart.service';
import { Cart } from './cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private _cartService:CartService){}




  ngOnInit(): void {
    this.getCart()

  }



  cartDetails:Cart={} as Cart

  getCart(){
    this._cartService.getCart().subscribe({
      next:(res)=>{
        this.cartDetails=res
        console.log(this.cartDetails);
        
      }
      
      
    })
  }

  updateCart(count:number,id:string){
    this._cartService.updateCartQuatity(count,id).subscribe({
      next:(res)=>{
        this.cartDetails=res
      }
      
    })

  }

  removeItem(id:string){
    this._cartService.removeItem(id).subscribe({
      next:(res)=>{
        console.log(res);
        this._cartService.numOfCartItems.next(res.numOfCartItems)
        
        this.cartDetails=res
      }
    })
  }

}
