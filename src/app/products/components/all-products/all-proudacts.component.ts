import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-all-proudacts',
  templateUrl: './all-proudacts.component.html',
  styleUrls: ['./all-proudacts.component.scss']
})
export class AllProudactsComponent implements OnInit{
  products: any[] = [];

  constructor(private _productService: ProductsService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }
getProducts(){
   this._productService.getAllProducts().subscribe((res:any) => {
     this.products=res
     console.log(this.products)

   })

}



}
