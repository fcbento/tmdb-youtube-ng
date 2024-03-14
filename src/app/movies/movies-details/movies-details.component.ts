import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movies } from '../store/movies.model';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrl: './movies-details.component.scss'
})
export class MoviesDetailsComponent {
  
  @Input() detail: Movies;
  @Input() image = '';
  @Output() previous: EventEmitter<boolean> = new EventEmitter();

  goPrevious() {
    this.previous.emit();
  }
}
