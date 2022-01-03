import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';

import { Movie } from './movie';
import { Graph } from './graph';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  active: boolean = false;
  begin: boolean = false;
  loading: boolean = false;
  loadingText: string = 'Loading'
  index1: number = 0;
  index2: number = 1;
  index3: number = 2;
  images: string[] = [];
  data: Array<any> = [];
  currentMovie: Movie = new Movie('','','','','','','');
  graph: Graph = {
    data: [
      {
        x: [],
        y: [],
        name: 'IMDB',
        type: 'bar',
        orientation: 'v',
        legendgroup: 'group',
        mode: 'markers',
        marker: {
          color: [],
          opacity: 0.7,
        }
      },
      {
        x: [],
        y: [],
        name: 'TMDB',
        type: 'bar',
        orientation: 'v',
        legendgroup: 'group2',
        mode: 'lines',
        marker: {
          color: [],
          opacity: 0.7
        }
      }
    ],
    layout: {
      title: 'Movie Ratings',
      barmode: 'group',
      legend: {
        x: 8,
        y: -1,
        orientation: 'h',
        bgcolor: '#eee'
      },
      xaxis: {
        tickangle: -45
      },
      yaxis: {
        title: 'Rating'
      },
    }
  }

  constructor(private movieService: MovieService) {  }

  search(start: string, end: string) {
    this.loading = true;
    const loadingTimer = setInterval(() => {
      if (this.loadingText.length < 10) {
        this.loadingText += '.';
      } else {
        this.loadingText = 'Loading';
      }
    }, 1000)
    this.movieService.searchMovies(start, end)
      .then(async (response: any) => {
        console.log(response);
        const filteredResults = response.results.filter((movie: any) => movie.imDbRating);
        this.data = filteredResults;
        console.log(filteredResults);
        this.graph.data[0].x = filteredResults.map((movie: any) => movie.title);
        this.graph.data[0].y = filteredResults.map((movie: any) => movie.imDbRating);
        this.graph.data[0].marker.color = filteredResults.map((movie: any) => movie.imDbRating < 4 ? 'rgb(255, 0, 0)' : movie.imDbRating < 7 ? 'rgba(128, 128, 128, 0.596)' : 'rgb(68, 148, 68)')
        const startDate = new Date(start).toDateString();
        const endDate = new Date(end).toDateString();
        this.graph.layout.title = `Movie Ratings: Release Date (${startDate}-${endDate})`
        this.images = filteredResults.map((movie: any) => movie.image);
        clearInterval(loadingTimer);
        this.loadingText = 'Loading';
        this.loading = false;
        let resultsArr = [];
        
        for (let movie of filteredResults) {
          let response: any = await this.movieService.searchAlternateMovies(movie.title)
          const filteredMovies = response.results.filter((resultsMovie: any) => resultsMovie.title === movie.title);
          if (filteredMovies[0]) {
            console.log(filteredMovies[0])
            resultsArr.push({
              x: filteredMovies[0].title,
              y: filteredMovies[0].vote_average === 0 ? 1 : filteredMovies[0].vote_average,
              color: filteredMovies[0].vote_average < 4 ? 'rgb(238, 88, 88)' : filteredMovies[0].vote_average < 7 ? 'rgba(211, 211, 211, 0.61)' : 'rgb(103, 241, 103)' 
            });
          }
        }

        this.graph.data[1].x = resultsArr.map(data => data.x);
        this.graph.data[1].y = resultsArr.map(data => data.y);
        this.graph.data[1].marker.color = resultsArr.map(data => data.color);

        const imageInterval = setInterval(() => {
          this.index3 < this.images.length - 1 ? this.index3++ : this.index3 = 0;
          this.index2 < this.images.length - 1 ? this.index2++ : this.index2 = 0;
          this.index1 < this.images.length - 1 ? this.index1++ : this.index1 = 0;
        }, 5000)
    })
    this.active = false;
  }

  onKeydown() {
    return false;
  }

  getMovie(value: Movie) {
    this.currentMovie = value;
    console.log(this.currentMovie);
  }

  ngOnInit() {
  }
}