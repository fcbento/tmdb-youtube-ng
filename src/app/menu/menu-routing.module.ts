import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
    { 
      path: 'menu',
      component: MenuComponent,
      children: [
        {
          path: 'movies',
          loadChildren: () => import('../movies/movies.module').then(m => m.MoviesModule)
        },
        {
          path: 'series',
          loadChildren: () => import('../series/series.module').then(m => m.SeriesModule)
        },
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
