import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/products';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-deatil',
  templateUrl: './product-deatil.component.html',
  styleUrls: ['./product-deatil.component.css']
})
export class ProductDeatilComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;
  errorMessage: string;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private router: Router
    ) {

   }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id).subscribe({
      next: productt => {
          this.product = productt;
          console.log(this.product.productName);
          this.pageTitle = this.pageTitle + `: ${id} => ${productt.productName}`;
      },
      error: err => this.errorMessage = err
    });
    
  }

  onBack() : void{
    this.router.navigate(['/products']);
  }

}
