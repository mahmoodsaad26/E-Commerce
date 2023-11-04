import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Products } from 'src/core/interfaces/products';
import { CartService } from 'src/core/services/cart.service';
import { ProductsService } from 'src/core/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  productId:string=''
  productDetails:Products={} as Products
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
 
     
    },
    nav: true
  }

  constructor(private _activatedRoute:ActivatedRoute,
     private _productsService:ProductsService,
     private _cartService:CartService
     ){
    _activatedRoute.paramMap.subscribe((res:any)=>{
      console.log(res.params.id);
      this.productId=res.params.id
      
    })

    _productsService.getProductById(this.productId).subscribe({
      next:(res)=>{
        console.log(res.data);
        this.productDetails=res.data
        

      }
    })



  }


  addToCart(id:string){
    this._cartService.addProductToCart(id).subscribe({
      next:(res)=>{
        console.log(res);
        this._cartService.numOfCartItems.next(res.numOfCartItems)
        
      }
    })
  }

}
