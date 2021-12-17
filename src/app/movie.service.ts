import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  public searchMovies (beginDate:string, endDate: string) {
    return new Promise((resolve, reject) => {
      this.http.get(`https://imdb-api.com/API/AdvancedSearch/k_v3wop9a5?title_type=feature&release_date=${beginDate},${endDate}&countries=us&languages=en`).subscribe(
        (response) => {
          resolve(response);
        }, (err) => {
          reject(err);
        }
      )
    })
  }

  public searchAlternateMovies (value: string) {
    return new Promise((resolve, reject) => {
      this.http.get(`https://api.themoviedb.org/3/search/multi?api_key=f99d3f32e17a383e62d4b9d7a29d19fe&language=en-US&query=${value}&page=1&include_adult=false`).subscribe(
        (response) => {
          resolve(response);
        }, (err) => {
          reject(err);
        }
      )
    })
  }

  public searchTdmb (start: string, end: string) {
    return new Promise((resolve, reject) => {
      this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=f99d3f32e17a383e62d4b9d7a29d19fe&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&primary_release_date.gte=${start}&primary_release_date.lte=${end}&with_watch_monetization_types=flatrate`).subscribe(
        (response) => {
          resolve(response);
        }, (err) => {
          reject(err);
        }
      )
    })
  }
}


// https://api.themoviedb.org/3/discover/movie?api_keyf99d3f32e17a383e62d4b9d7a29d19fe&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=2012-12-02&primary_release_date.lte=2012-12-04&with_watch_monetization_types=flatrate