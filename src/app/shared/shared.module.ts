import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    LoaderComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    LoaderComponent,
    CardComponent
  ]
})
export class SharedModule { 
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
