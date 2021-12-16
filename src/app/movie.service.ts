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
}
