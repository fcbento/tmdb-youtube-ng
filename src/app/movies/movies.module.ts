import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';

const routes: Routes = [
  { path: '', component: MoviesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    NgxPaginationModule
  ],
  exports: [RouterModule],
  declarations: [
    MoviesComponent,
    MoviesListComponent,
    MoviesDetailsComponent
  ]
})

export class MoviesModule { }
