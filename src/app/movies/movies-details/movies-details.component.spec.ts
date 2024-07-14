import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesDetailsComponent } from './movies-details.component';
import { HttpClientModule } from '@angular/common/http';

describe('MoviesDetailsComponent', () => {
  let component: MoviesDetailsComponent;
  let fixture: ComponentFixture<MoviesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations:[MoviesDetailsComponent],
      imports:[HttpClientModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoviesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
