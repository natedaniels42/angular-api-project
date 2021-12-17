import { Component, Input, OnInit } from '@angular/core';

import { Movie } from '../movie';

@Component({
  selector: 'movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.scss']
})
export class MovieDisplayComponent implements OnInit {
  @Input() currentMovie: Movie = new Movie('','','','','','','');
  constructor() { }

  clearCurrentMovie() {
    this.currentMovie = new Movie('','','','','','','');
  }

  ngOnInit(): void {
  
  }

}
