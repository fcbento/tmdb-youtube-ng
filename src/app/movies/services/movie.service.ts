import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movies, MoviesResult } from '../store/movies.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getPopular(): Observable<MoviesResult> {
    return this.http.get<MoviesResult>(`${environment.API.baseURL}/movie/popular?api_key=${environment.tmdb.apiKey}`);
  }

  getDetails(id: any): Observable<any> {
    return this.http.get<MoviesResult>(`${environment.API.baseURL}/movie/${id}?api_key=${environment.tmdb.apiKey}`);
  }
}