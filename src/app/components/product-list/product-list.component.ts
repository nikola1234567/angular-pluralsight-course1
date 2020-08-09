import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/products';
import { ProductService } from '../../services/product.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {

  pageTitle: string="Product List";
  imageWidth: number = 50;
  imageMargin = 2;
  showImage: boolean=false;
  _listFilter: string;
  filterProducts: IProduct[];
  products: IProduct[];
  errorMessage: string;
  

  get listFilter() : string{
    return this._listFilter;
  }

  set listFilter(value: string){
    this._listFilter = value;
    this.filterProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  constructor(private productService : ProductService) { 
  }

  ngOnInit(): void {
    // this.products = this.productService.getData();
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filterProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
    this.filterProducts = this.products;
  }

  toggleImage(): void{
    this.showImage = !this.showImage;
  }

  performFilter(filterBy : string) :IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product : IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onRatingClicked(message: string): void{
    this.pageTitle = 'Product List ' + message;
  }

}
