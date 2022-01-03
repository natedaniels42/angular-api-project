import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { MovieService } from './movie.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Movie } from './movie';

describe('AppComponent', () => {
  let movieService: MovieService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        HttpClient,
        HttpHandler,
        MovieService
      ]
    }).compileComponents();

    movieService = TestBed.inject(MovieService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should display chart nav link if there is data', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.data = ['1', '2', '3'];
    fixture.detectChanges();
    
    const link1 = document.getElementById('link1');
    expect(link1).toBeTruthy();
  })

  it('should display current movie container nav link if there is a current movie title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.currentMovie = new Movie('Forrest Gump','','','','','','');
    fixture.detectChanges();
    
    const link2 = document.getElementById('link2');
    expect(link2).toBeTruthy();
  })

  it('should display image container nav link if there is images', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.images = ['1', '2', '3'];
    fixture.detectChanges();
    
    const link3 = document.getElementById('link3');
    expect(link3).toBeTruthy();
  })

  it('should display search nav link if there is data', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.data = ['1', '2', '3'];
    fixture.detectChanges();
    
    const link4 = document.getElementById('link4');
    expect(link4).toBeTruthy();
  })
});
