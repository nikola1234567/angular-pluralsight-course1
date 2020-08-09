import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponentComponent } from '../../components/star-component/star-component.component'
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StarComponentComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StarComponentComponent,
    FormsModule,
    CommonModule
  ]
})
export class SharedModule { }
