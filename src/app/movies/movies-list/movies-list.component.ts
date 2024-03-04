import { Component, OnInit, inject } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ResultData } from 'src/app/core/models/result-data.model';
import { Select, Store } from '@ngxs/store';
import { GetMovies } from '../store/movies.actions';
import { MoviesSelectors } from '../store/movies.selectors';
import { Movies } from '../store/movies.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  @Select(MoviesSelectors.movies)
  movies$: Observable<Movies[]>;
  p: number = 1;

  private store = inject(Store);

  ngOnInit(): void {
    this.store.dispatch(new GetMovies());
  }
}
