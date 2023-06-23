import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { CardComponent } from './card/card.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    LoaderComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  exports: [
    LoaderComponent,
    CardComponent
  ]
})
export class SharedModule { }
