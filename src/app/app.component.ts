import { Component, Input } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: Array<any> = [];

  constructor(private movieService: MovieService) {  }

  search(start: string, end: string) {
    this.movieService.searchMovies(start, end)
      .then((response: any) => {
        console.log(response.results);
        const filteredResults = response.results.filter((movie: any) => movie.imDbRating);
        this.data = filteredResults;
        console.log(filteredResults);
      })
  }
}
