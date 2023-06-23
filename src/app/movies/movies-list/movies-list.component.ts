import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Subscription } from 'rxjs';
import { ResultData } from 'src/app/core/models/result-data.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit, OnDestroy {
  
  movies: ResultData[];
  subscription: Subscription;
  p: number = 1;
  constructor(private service: MovieService) { }

  ngOnInit(): void {
    this.subscription = this.service.getPopular().subscribe(movies => this.movies = movies.results);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
