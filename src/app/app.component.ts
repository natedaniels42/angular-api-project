import { Component, Input } from '@angular/core';
import { MovieService } from './movie.service';
import * as PlotlyJS from 'plotly.js-dist-min';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'angular-api-project';
  data: Array<any> = [];
  x: string[] = [];
  y: number[] = [];
  graph = {
    data: [
      {
        x: this.x,
        y: this.y,
        name: 'rating 1',
        type: 'bar'
      }
    ],
    layout: {title: 'Movie Data'}
  }

  constructor(private movieService: MovieService) {  }

  search(start: string, end: string) {
    this.movieService.searchMovies(start, end)
      .then((response: any) => {
        const filteredResults = response.results.filter((movie: any) => movie.imDbRating);
        this.data = filteredResults;
        console.log(filteredResults);
        this.x = filteredResults.map((movie: any) => movie.title);
        this.y = filteredResults.map((movie: any) => movie.imDbRating);
        this.graph.data[0].x = this.x;
        this.graph.data[0].y = this.y;
        console.log(this.graph);
    })
  }
}