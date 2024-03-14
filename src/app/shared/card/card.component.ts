import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movies } from 'src/app/movies/store/movies.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  @Input() data: Movies;
  @Output() goDetails: EventEmitter<Movies> = new EventEmitter();
  image: string;
  readMore = false;

  constructor() { }

  ngOnInit(): void {
    this.image = environment.API.photoURL + this.data.poster_path;
  }

  details(data: Movies) {
    this.goDetails.emit(data);
  }

}
