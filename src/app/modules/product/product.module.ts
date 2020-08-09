import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from 'src/app/components/product-list/product-list.component';
import { ProductDeatilComponent } from 'src/app/components/product-deatil/product-deatil.component';
import { ConvertToSpacesPipe } from 'src/app/pipes/convert-ti-spaces-pipe/convert-to-spaces.pipe';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from '../product-routing/product-routing.module';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDeatilComponent,
    ConvertToSpacesPipe,
  ],
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
})
export class ProductModule { }
