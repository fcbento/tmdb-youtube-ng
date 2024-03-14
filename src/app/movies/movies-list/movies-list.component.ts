import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { GetMovies } from '../store/movies.actions';
import { MoviesSelectors } from '../store/movies.selectors';
import { Movies } from '../store/movies.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  @Select(MoviesSelectors.movies)
  movies$: Observable<Movies[]>;
  p = 1;
  isDetails = false;
  detail: Movies;
  image = '';
  
  private store = inject(Store);

  ngOnInit(): void {
    this.store.dispatch(new GetMovies());
  }

  getDetails(movie: Movies) {
    this.detail = movie;
    this.isDetails = !this.isDetails;
    this.image = environment.API.photoURL + movie.poster_path;
  }

  previous() {
    this.isDetails = !this.isDetails;
  }
}
