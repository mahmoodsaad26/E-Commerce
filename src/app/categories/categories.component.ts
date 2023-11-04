import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Categories } from 'src/core/interfaces/categories';
import { ProductsService } from 'src/core/services/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  constructor(private _productsService:ProductsService){

  }

  allCategories:Categories[]=[]
  
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
        items: 8
      }
 
     
    },
    nav: true
  }
  ngOnInit(): void {
    this.getCategories()
    
  }

  getCategories(){
    this._productsService.getCategories().subscribe({
      next:(res)=>{
        console.log(res.data);
        this.allCategories=res.data
        
      }
    })
  }

}
