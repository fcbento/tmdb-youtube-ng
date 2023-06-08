import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseData } from 'src/app/core/models/response-data.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getPopular(): Observable<ResponseData> {
    return this.http.get<ResponseData>(`${environment.API.baseURL}/movie/popular?api_key=${environment.tmdb.apiKey}`);
  }
}
