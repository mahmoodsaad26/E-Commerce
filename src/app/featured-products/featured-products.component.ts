import { Component, OnInit } from '@angular/core';
import { Products } from 'src/core/interfaces/products';
import { ProductsService } from 'src/core/services/products.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {
  constructor(private _productsService:ProductsService){}
  ngOnInit(): void {
    this.getProducts();
  }

  allProducts:Products[]=[]
  searchKey:string=''



  getProducts(){

    this._productsService.getProducts().subscribe({
      next:(res)=>{
        console.log(res.data);
        this.allProducts=res.data
        
      }
    })
  }

}
