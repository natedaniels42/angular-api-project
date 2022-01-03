import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';


import { MovieService } from './movie.service';

describe('MovieService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let movieService: MovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ MovieService ]
    });
    
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    movieService = TestBed.inject(MovieService);
  });

  afterEach(() => {
    httpTestingController.verify();
  })

  describe('searchMovies', () => {
  
    it('should return movies', () => {
      const beginDate = '2012-12-01';
      const endDate = '2012-12-31';
      movieService.searchMovies(beginDate, endDate).then(
        (response: any) => expect(response.results.length).toBeGreaterThan(0)
      );

      const req = httpTestingController.expectOne(`https://imdb-api.com/API/AdvancedSearch/k_cl71v7jm?title_type=feature&release_date=${beginDate},${endDate}&countries=us&languages=en`)
      req.flush([]);
    })
  })

  describe('searchAlternateMovies', () => {
    it ('should return movies', () => {
      const title = 'Forrest Gump';
      movieService.searchAlternateMovies(title).then(
        (response: any) => {
          expect(response.results.length).toBeGreaterThan(0)
        })
  
        const req = httpTestingController.expectOne(`https://api.themoviedb.org/3/search/multi?api_key=f99d3f32e17a383e62d4b9d7a29d19fe&language=en-US&query=${title}&page=1&include_adult=false`)
        req.flush([]);
    })
  })

  it('should be created', () => {
    expect(movieService).toBeTruthy();
  });
});
