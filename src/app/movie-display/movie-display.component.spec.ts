import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDisplayComponent } from './movie-display.component';
import { Movie } from '../movie';

describe('MovieDisplayComponent', () => {
  let component: MovieDisplayComponent;
  let fixture: ComponentFixture<MovieDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display page if current movie has a title', () => {
    component.currentMovie = new Movie ('Forrest Gump','','','','','','');
    fixture.detectChanges();
    const movieDetail = document.getElementById('movie-detail');
    expect(movieDetail).toBeTruthy();
  })
});
