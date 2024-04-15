import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { Movies } from '../store/movies.model';
import { MovieService } from '../services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrl: './movies-details.component.scss'
})
export class MoviesDetailsComponent implements OnInit {

  @Input() detailId: number;
  @Output() previous: EventEmitter<boolean> = new EventEmitter();
  private service = inject(MovieService);

  image = '';
  detail: any

  ngOnInit(): void {
    this.getDetails();
  }

  goPrevious() {
    this.previous.emit();
  }

  getDetails() {
    this.service.getDetails(this.detailId).subscribe({
      next: (detail) => {
        this.detail = detail;
        this.image = environment.API.photoURL + detail.backdrop_path;
      }
    })
  }
}
