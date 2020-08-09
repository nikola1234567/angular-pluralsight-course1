import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule } from '@angular/router';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { ProductDeatilComponent } from '../../components/product-deatil/product-deatil.component';
import { ProductDetailGuard } from '../../guards/product-detail.guard';
import { from } from 'rxjs';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      { path: 'products/:id',
        canActivate: [ProductDetailGuard], 
        component: ProductDeatilComponent}
    ])
  ],
  exports:[
    RouterModule
  ]
})
export class ProductRoutingModule { }
