import { Component, Input, OnInit } from '@angular/core';
import { ResultData } from 'src/app/core/models/result-data.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  @Input() data: ResultData;
  image: string;
  readMore = false;

  constructor() { }

  ngOnInit(): void {
    this.image = environment.API.photoURL + this.data.poster_path;
  }

}
