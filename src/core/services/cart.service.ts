import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  numOfCartItems:BehaviorSubject<number>=new BehaviorSubject(0)

  constructor(private _httpClient:HttpClient) {
    this.getCart().subscribe({
      next:(res)=>{
        this.numOfCartItems.next(res.numOfCartItems)
      }

    })
   }

  addProductToCart(id:string):Observable<any>{
    return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/cart',{
      productId:id

    }
   )
  }



  getCart():Observable<any>{
    return this._httpClient.get('https://ecommerce.routemisr.com/api/v1/cart'
    
    )
  }

  updateCartQuatity(count:number,id:string):Observable<any>{
    return this._httpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
      count:`${count}`
    }
    )

  }

  removeItem(id:string):Observable<any>{
    return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`)

  }


  generateOnlinePayment(cartId:string ,shippingAddress:any):Observable<any>{
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200
    `,{
      shippingAddress:shippingAddress
    })

  }


 
}
