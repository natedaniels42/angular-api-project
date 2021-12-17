import { Component, Input, Output, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Movie } from '../movie';

@Component({
  selector: 'images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})

export class ImagesComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() images: string[] = [];
  @Input() index1: number = 0;
  @Input() index2: number = 1;
  @Input() index3: number = 2;
  @Output() movieEvent = new EventEmitter();
  currentMovie: Movie = new Movie('','','','','','','');
  
  constructor() { }

  setCurrentMovie($event: Event) {
    const movieData = this.data.find(movie => movie.image === ($event.target as HTMLImageElement).src) 
    this.currentMovie = new Movie(movieData.title, 
      movieData.genres,
      movieData.runtimeStr,
      movieData.imDbRating,
      movieData.plot,
      movieData.image,
      movieData.stars)
    console.log(this.currentMovie);
    this.callParentMovie();
  }

  callParentMovie() {
    this.movieEvent.emit(this.currentMovie);
  }

  ngOnInit(): void {
  
  }

}
