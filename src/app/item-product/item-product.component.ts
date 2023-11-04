import { Component, Input } from '@angular/core';
import { Products } from 'src/core/interfaces/products';
import { CartService } from 'src/core/services/cart.service';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.css']
})
export class ItemProductComponent {

constructor(private _cartService:CartService){}

addToCart(id:string){
  this._cartService.addProductToCart(id).subscribe({
    next:(res)=>{
      console.log(res);

      this._cartService.numOfCartItems.next(res.numOfCartItems)
      
    }
  })
}



@Input() product:Products={} as Products
}
