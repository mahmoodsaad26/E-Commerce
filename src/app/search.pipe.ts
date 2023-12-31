import { Pipe, PipeTransform } from '@angular/core';
import { Products } from 'src/core/interfaces/products';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {

  transform(products: Products[], searchKey:string): Products[] {
    return products.filter((ele)=>
      ele.title.toLowerCase().includes(searchKey.toLowerCase())
    );
  }

}
